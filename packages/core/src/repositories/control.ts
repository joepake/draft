import type { ApiPort } from '@kidgate/ports/api';
import type { ClockPort } from '@kidgate/ports/clock';
import type { DocData, FirestorePort } from '@kidgate/ports/firestore';
import {
  isParentControlKey,
  isReportOnlyControlKey,
  isUsageControlKey,
} from '@kidgate/schema/controlKeys';
import type { DeviceControls, DeviceLocation } from '@kidgate/schema/deviceControls';
import { childDeviceDoc } from '@kidgate/schema/paths';
import type { BatteryStatus } from '@kidgate/schema/telemetry';
import { toJsonBody } from '../domain/jsonBody';
import { isTimeline } from '../domain/usageTimeline';
import type { LocationHistoryRepository } from './locationHistory';

/**
 * Writing device controls — the fan-out that decides *who* may write what.
 *
 * A control update is not one write. Fields split three ways by who is allowed
 * to set them, and each route exists because the obvious one was exploitable:
 *
 * - **Parent fields** go through `updateDeviceControls`, which verifies a
 *   parent device credential. A child device holds the family owner's uid, so
 *   a direct Firestore write could not be told apart from a parent's.
 * - **Usage counters** go through `reportChildUsage`. The child once wrote
 *   these directly, so a modified app could report "0 minutes used" all day and
 *   the daily-limit badge believed it. The function re-derives the day from the
 *   server clock.
 * - **Child-reported state** (which apps are blocked, whether Screen Time was
 *   authorised) is written straight to the device document — only the child
 *   device can observe it, and rules already scope it.
 *
 * See `USAGE_CONTROL_KEYS` / `PARENT_CONTROL_KEYS` in `@kidgate/schema`, which
 * mirror the guards in `firestore.rules`.
 */

export interface ControlRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
  clock: ClockPort;
  locationHistory: Pick<LocationHistoryRepository, 'append'>;
}

export function createControlRepository(deps: ControlRepositoryDeps) {
  const { db, api, clock, locationHistory } = deps;

  return {
    /**
     * Apply a partial control change, routing each field to the writer allowed
     * to set it.
     *
     * The stale-parent-credential retry that used to live here — catch, match
     * the server's English error text with `isParentDeviceAuthError`,
     * re-register the device, try again — is gone. `ApiPort` reports
     * `code: 'staleCredential'` and the adapter refreshes and retries, so the
     * recovery no longer depends on the wording of a server message. The same
     * dance existed in `timeRequest` and `rewardTask`; all three are now this.
     */
    async updateControls(
      userId: string,
      deviceId: string,
      controls: Partial<DeviceControls>,
    ): Promise<void> {
      const parentControls: Partial<DeviceControls> = {};
      const childControls: Partial<DeviceControls> = {};
      const usageControls: Partial<DeviceControls> = {};

      for (const [key, value] of Object.entries(controls)) {
        if (value === undefined) {
          continue;
        }
        if (isParentControlKey(key)) {
          parentControls[key] = value as never;
        } else if (isUsageControlKey(key)) {
          usageControls[key as keyof DeviceControls] = value as never;
        } else if (isReportOnlyControlKey(key)) {
          // Forwarded to `reportUsage` below and deliberately not written to
          // the device document — see `REPORT_ONLY_CONTROL_KEYS`.
          continue;
        } else {
          childControls[key as keyof DeviceControls] = value as never;
        }
      }

      if (Object.keys(parentControls).length > 0) {
        await api.post(
          '/updateDeviceControls',
          { deviceId, familyOwnerUserId: userId, controls: toJsonBody(parentControls) },
          { as: 'parent' },
        );
      }

      if (Object.keys(usageControls).length > 0) {
        await this.reportUsage(userId, deviceId, {
          ...usageControls,
          ...(controls.topApps ? { topApps: controls.topApps } : {}),
          ...(controls.timeline ? { timeline: controls.timeline } : {}),
        });
      }

      if (Object.keys(childControls).length === 0) {
        return;
      }

      // Dotted field paths: a merge into `controls` would replace the whole map
      // and drop whatever the parent set from another device a moment ago.
      const payload: Record<string, unknown> = {
        lastActiveAt: db.fieldValues.serverTimestamp(),
      };
      for (const [key, value] of Object.entries(childControls)) {
        payload[`controls.${key}`] = value;
      }

      await db.updateDoc(childDeviceDoc(userId, deviceId), payload);
    },

    /**
     * Report screen-time usage.
     *
     * A partial payload — say only `dailyLimitExceeded` — carries no reading to
     * persist, and the flag is recomputed from the next full report, so it is
     * dropped rather than written as a zero.
     */
    async reportUsage(
      userId: string,
      deviceId: string,
      usage: Partial<DeviceControls>,
    ): Promise<void> {
      if (
        typeof usage.minutesUsedToday !== 'number' ||
        typeof usage.usageDate !== 'string' ||
        !usage.usageDate.trim()
      ) {
        return;
      }

      await api.post(
        '/reportChildUsage',
        {
          userId,
          deviceId,
          usageDate: usage.usageDate.trim(),
          minutesUsedToday: usage.minutesUsedToday,
          dailyLimitExceeded: usage.dailyLimitExceeded === true,
          topApps: (usage.topApps ?? []).map(app => ({ ...app })),
          /*
           * Omitted rather than sent empty when the device has none. The server
           * writes what it is given, and an absent timeline means "this device
           * cannot say", while 1440 dashes means "nobody watched today" — a
           * platform that never reports one must not overwrite the day with the
           * second claim. iOS is the whole reason that distinction exists.
           */
          ...(isTimeline(usage.timeline) ? { timeline: usage.timeline } : {}),
        },
        { as: 'child' },
      );
    },

    async updateLocation(
      userId: string,
      deviceId: string,
      location: Omit<DeviceLocation, 'updatedAt'>,
    ): Promise<void> {
      const lastLocation: DeviceLocation = {
        ...location,
        updatedAt: new Date(clock.now()).toISOString(),
      };

      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        lastLocation: { ...lastLocation },
        lastActiveAt: db.fieldValues.serverTimestamp(),
      });

      // The trail is secondary to the current position: a failed append must
      // not lose the fix the parent's map is about to show.
      await locationHistory
        .append(userId, deviceId, lastLocation)
        .catch(() => undefined);
    },

    /**
     * "Locate now", answered — clear the request the parent left on the device
     * document.
     *
     * A plain document write rather than an endpoint, for the reason
     * `reportBattery` below is one: `locationRequestId` is deliberately not a
     * control, so `parentControlsUnchanged()` does not pin it and the child's
     * own session may write it. A child that clears the field without answering
     * is exactly as dishonest as one that never uploads a fix, which no rule
     * can prevent either.
     *
     * **Cleared whether or not a fix was obtained**, by every caller. Sharing
     * may be off, CoreLocation may still be deciding, the Mac may be in a
     * basement — and a request left standing through any of those is a
     * document that says a parent is still waiting when nothing is coming.
     * `lastLocation` is what says whether the answer arrived; this field only
     * ever said whether the question had been picked up.
     */
    async clearLocationRequest(userId: string, deviceId: string): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        locationRequestId: null,
      });
    },

    /**
     * The child device's own battery reading.
     *
     * Written straight to the device document rather than posted, and that is
     * the divergence from `apps/mobile` worth knowing about: on a phone the
     * reading rides along on the location upload
     * (`readBatteryPayload` in `functions/http/location.js`), because a phone
     * uploading a fix is the moment a phone is awake. A desktop agent runs all
     * day and may have location switched off entirely, so tying its battery to
     * a location upload would mean a laptop that never reports one.
     *
     * `firestore.rules` allows it: `batteryLevel` is not in
     * `parentControlsUnchanged()`, `usageCountersUnchanged()` or
     * `protectionCountersUnchanged()`, so it is child-reported state in the
     * same class as `blockedAppsConfigured` — only the device can observe it,
     * and nothing about enforcement depends on it being honest.
     *
     * A partial reading is written partially. `BatteryStatus` models both
     * fields as nullable because a machine may know it is charging without
     * knowing by how much, and coercing an unknown level to 0 sends a parent
     * looking for a child whose laptop is fine.
     */
    async reportBattery(
      userId: string,
      deviceId: string,
      status: BatteryStatus,
    ): Promise<void> {
      const patch: DocData = {};

      if (typeof status.level === 'number' && Number.isFinite(status.level)) {
        patch.batteryLevel = Math.min(100, Math.max(0, Math.round(status.level)));
        patch.batteryUpdatedAt = db.fieldValues.serverTimestamp();
      }
      if (typeof status.charging === 'boolean') {
        patch.batteryCharging = status.charging;
      }

      // Nothing usable. An empty `updateDoc` would still cost a write and would
      // still refresh `lastActiveAt`, which would make an unknown battery look
      // like a heartbeat.
      if (Object.keys(patch).length === 0) {
        return;
      }

      await db.updateDoc(childDeviceDoc(userId, deviceId), patch);
    },

    async markScreenTimeAuthorized(
      userId: string,
      deviceId: string,
      authorized: boolean,
    ): Promise<void> {
      await this.updateControls(userId, deviceId, {
        screenTimeAuthorized: authorized,
      });
    },

    async syncBlockedAppsInfo(
      userId: string,
      deviceId: string,
      info: {
        configured: boolean;
        appCount: number;
        categoryCount: number;
        previewItems?: DeviceControls['blockedAppPreview'];
      },
    ): Promise<void> {
      await this.updateControls(userId, deviceId, {
        blockedAppsConfigured: info.configured,
        blockedAppCount: info.appCount,
        blockedCategoryCount: info.categoryCount,
        blockedAppPreview: info.previewItems ?? [],
      });
    },
  };
}

export type ControlRepository = ReturnType<typeof createControlRepository>;
