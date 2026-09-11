import type { ApiPort } from '@kidgate/ports/api';
import type { ClockPort } from '@kidgate/ports/clock';
import type { DocData, FirestorePort } from '@kidgate/ports/firestore';
import {
  isParentControlKey,
  isReportOnlyControlKey,
  isUsageControlKey,
} from '@kidgate/schema/controlKeys';
import type { DeviceLocationRequestResult } from '@kidgate/schema/device';
import type { DeviceControls, DeviceLocation } from '@kidgate/schema/deviceControls';
import { childDeviceDoc } from '@kidgate/schema/paths';
import type { BatteryStatus } from '@kidgate/schema/telemetry';
import { toJsonBody } from '../domain/jsonBody';
import type { BufferedUsageDay } from '../domain/parkedBuffer';
import { isTimeline, parseHourlyApps } from '../domain/usageTimeline';
import type { LocationHistoryRepository } from './locationHistory';
import type { UsageHourlyApps } from '@kidgate/schema/usageDay';

/** The field to spread onto a usage upload, or nothing — never an empty map. */
function hourlyAppsField(value: unknown): { hourlyApps?: UsageHourlyApps } {
  const hourlyApps = parseHourlyApps(value);
  return hourlyApps ? { hourlyApps } : {};
}

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
          ...(controls.hourlyApps ? { hourlyApps: controls.hourlyApps } : {}),
          // The free tier's counters, forwarded only when the caller could
          // count — `reportUsage` omits rather than zeroes, and so does this.
          ...(typeof controls.blockedSitesToday === 'number'
            ? { blockedSitesToday: controls.blockedSitesToday }
            : {}),
          ...(typeof controls.newAppsToday === 'number'
            ? { newAppsToday: controls.newAppsToday }
            : {}),
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
    /**
     * Report today's minutes, and hand back what the server answered.
     *
     * **The answer is the point, not a courtesy.** `reportChildUsage` is the
     * one endpoint that stays open to a lapsed family, so its reply is the
     * only channel that says which side of the paywall this device is on —
     * `degraded: true` when the family has lapsed, `false` when it is paying
     * again (`domain/premiumLapse`). An agent that discards it, as this
     * returned `void` and every caller therefore did, has no way to learn its
     * own cadence and keeps beating every minute on the free tier.
     *
     * `null` for a body that says nothing: an older Functions deployment omits
     * the field, and a caller must leave its latch alone rather than read
     * silence as "premium".
     */
    async reportUsage(
      userId: string,
      deviceId: string,
      usage: Partial<DeviceControls>,
    ): Promise<unknown> {
      /*
       * **A report needs a day and something to say, and minutes are no longer
       * the only thing it can say** (`docs/FEASIBILITY.md`, "The extension's
       * usage report").
       *
       * Every caller until 2026-09-05 measured screen time, so this refused
       * anything without it. `apps/extension` cannot: a browser publishes
       * `screenTime: false`, and the free tier's counters ride this endpoint
       * because it is the only one a lapsed family still reaches. Sending zero
       * minutes instead would put "zero today" in the field every parent screen
       * reads, for a browser used all afternoon — the same absent-versus-zero
       * rule the counters below already follow.
       *
       * What the original guard protected still holds: a payload carrying only
       * `dailyLimitExceeded` has no reading to persist and is still dropped.
       */
      const usable = (value: unknown): value is number =>
        typeof value === 'number' && Number.isFinite(value) && value >= 0;

      const reportsMinutes = usable(usage.minutesUsedToday);
      const reportsCounters =
        usable(usage.blockedSitesToday) || usable(usage.newAppsToday);

      if (
        (!reportsMinutes && !reportsCounters) ||
        typeof usage.usageDate !== 'string' ||
        !usage.usageDate.trim()
      ) {
        return null;
      }

      return api.post(
        '/reportChildUsage',
        {
          userId,
          deviceId,
          usageDate: usage.usageDate.trim(),
          /*
           * Both or neither. `dailyLimitExceeded` is a statement about a limit
           * being reached, which a surface with no minutes cannot make either;
           * sending a bare `false` beside absent minutes would be the one claim
           * omitting the minutes was meant to avoid.
           */
          ...(reportsMinutes
            ? {
                minutesUsedToday: usage.minutesUsedToday,
                dailyLimitExceeded: usage.dailyLimitExceeded === true,
              }
            : {}),
          topApps: (usage.topApps ?? []).map(app => ({ ...app })),
          /*
           * Omitted rather than sent empty when the device has none. The server
           * writes what it is given, and an absent timeline means "this device
           * cannot say", while 1440 dashes means "nobody watched today" — a
           * platform that never reports one must not overwrite the day with the
           * second claim. iOS is the whole reason that distinction exists.
           */
          ...(isTimeline(usage.timeline) ? { timeline: usage.timeline } : {}),
          // Validated on the way out like the timeline: the server drops a
          // malformed map whole, so sending one would cost the upload and
          // store nothing.
          ...hourlyAppsField(usage.hourlyApps),
          /*
           * Same omit-rather-than-zero rule as the timeline above, for the same
           * reason pointed the other way: zero is the claim "this device
           * excludes packages and saw none of them today", which only an agent
           * that excludes packages may make. A platform that has never heard of
           * idle time must not overwrite a day with it.
           */
          ...(typeof usage.idleMinutes === 'number' &&
          Number.isFinite(usage.idleMinutes) &&
          usage.idleMinutes >= 0
            ? { idleMinutes: Math.floor(usage.idleMinutes) }
            : {}),
          /*
           * The free tier's two counters, on the one request a free family
           * still makes. Omitted rather than zeroed when the device cannot
           * observe them — `DeviceControls.blockedSitesToday` carries why, and
           * the server keeps the distinction all the way to the parent's card.
           */
          ...(typeof usage.blockedSitesToday === 'number' &&
          Number.isFinite(usage.blockedSitesToday) &&
          usage.blockedSitesToday >= 0
            ? { blockedSitesToday: Math.floor(usage.blockedSitesToday) }
            : {}),
          ...(typeof usage.newAppsToday === 'number' &&
          Number.isFinite(usage.newAppsToday) &&
          usage.newAppsToday >= 0
            ? { newAppsToday: Math.floor(usage.newAppsToday) }
            : {}),
        },
        { as: 'child' },
      );
    },

    /**
     * Send one day a parked device kept, to the same endpoint under a flag.
     *
     * **Its own method rather than a `backfill` argument on `reportUsage`**,
     * because the two are different acts that happen to share a URL. A report
     * says what is true now and moves `controls.minutesUsedToday`, the number
     * every parent surface reads as *today*; this hands over a page of history
     * and touches nothing but that day's `usageDays` document. A boolean on the
     * live path is one wrong argument away from a fortnight-old afternoon
     * lifting a limit that is currently being enforced, and no test would see
     * it — the server refuses neither.
     *
     * The caller is `agent/usageBufferDrain`, which owns when this may run at
     * all (`domain/parkedBuffer`: unparked **and** paying). Nothing here
     * re-checks that: the server does, with a 403, and an agent asking for
     * permission it has already been refused is what the latch exists to stop.
     */
    async backfillUsage(
      userId: string,
      deviceId: string,
      day: BufferedUsageDay,
    ): Promise<unknown> {
      if (
        typeof day.minutes !== 'number' ||
        !Number.isFinite(day.minutes) ||
        typeof day.date !== 'string' ||
        !day.date.trim()
      ) {
        return null;
      }

      return api.post(
        '/reportChildUsage',
        {
          userId,
          deviceId,
          backfill: true,
          usageDate: day.date.trim(),
          minutesUsedToday: Math.max(0, Math.floor(day.minutes)),
          topApps: (day.topApps ?? []).map(app => ({ ...app })),
          /*
           * The same omit-rather-than-zero rule the live report above states at
           * length, and it binds harder here: a buffered day is written with
           * `{ merge: true }` onto whatever that day already holds, so sending
           * an empty timeline would erase a real one the device managed to
           * report before it was parked.
           */
          ...(isTimeline(day.timeline) ? { timeline: day.timeline } : {}),
          ...hourlyAppsField(day.hourlyApps),
          ...(typeof day.idleMinutes === 'number' &&
          Number.isFinite(day.idleMinutes) &&
          day.idleMinutes >= 0
            ? { idleMinutes: Math.floor(day.idleMinutes) }
            : {}),
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
     * Clear the request **and** say what came of it, in one write.
     *
     * One write rather than two, because they are one fact: a request cleared
     * with nothing said is the state this exists to end. Measured 2026-09-10
     * on a real Mac — request taken and cleared, no fix written, device online
     * — and from the parent's side that was indistinguishable from success.
     * `Device.locationRequestResult` carries the whole argument.
     *
     * A plain document write, like `clearLocationRequest` above and for the
     * same reason: neither field is a control, so `parentControlsUnchanged()`
     * does not pin them and the child's own session may write both.
     */
    async answerLocationRequest(
      userId: string,
      deviceId: string,
      result: DeviceLocationRequestResult,
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        locationRequestId: null,
        locationRequestResult: { ...result },
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
