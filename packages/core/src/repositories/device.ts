import type { ApiFailure, ApiPort } from '@kidgate/ports/api';
import type { ClockPort } from '@kidgate/ports/clock';
import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { Device } from '@kidgate/schema/device';
import type { ChildDeviceRecord, ParentDeviceRecord } from '@kidgate/schema/firestore';
import {
  childDeviceDoc,
  childDevicesCollection,
  parentDeviceDoc,
  parentDevicesCollection,
} from '@kidgate/schema/paths';
import {
  parseDeviceControls,
  parseDevicePlaces,
  parseLastLocation,
  parseLocationRequestResult,
  parseOtaRequestResult,
  parseMessageMonitoring,
  parseProtectionCounters,
  parseProtectionStatus,
  parseTopAppsOtherToday,
  parseTopAppsToday,
  parseWeekCounters,
} from '../domain/deviceControlsMapper';
import { isApiFailure } from '../domain/apiFailure';
import type { BuildFreshness } from '../domain/buildFreshness';
import { isDeviceFormFactor } from '../domain/deviceFormFactor';
import {
  otaRequestId,
  otaRequestedAtMs,
  shouldRequestOtaCheck,
} from '../domain/otaRequest';
import {
  reportRequestId,
  reportRequestedAtMs,
  shouldRequestReport,
} from '../domain/reportRequest';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * The family's devices — reading them, renaming them, locking them, removing
 * them.
 *
 * Registering *this* device is a separate concern and lives in
 * `deviceRegistration.ts`: it needs the platform's identity, capabilities and
 * locale, none of which this file can obtain or should know about. The split
 * follows the question each answers — "what devices does this family have"
 * versus "who am I".
 */

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

/**
 * The stored form factor, checked against the union rather than trusted.
 *
 * Dropped here until 2026-09-04, and it failed the way every other field this
 * mapper forgot did — silently, on one platform. `resolveDisplayFormFactor`
 * falls back to the model name when the stored field is absent, and Apple's
 * names say "iPhone"/"iPad", so both parent surfaces still drew the framed
 * glyph for an iPhone. Android writes `modelName` null on purpose, so an
 * Android phone fell all the way through to the bare robot — a device that had
 * reported `formFactor: 'phone'` on every heartbeat since it was paired.
 */
function formFactor(value: unknown): string | undefined {
  return isDeviceFormFactor(value) ? value : undefined;
}

/** Clamp a percentage written by the child device. */
function parseBatteryLevel(value: unknown): number | undefined {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return undefined;
  }
  // Clamped rather than trusted: this field is written by the child device, and
  // a bad reading rendering as "-3%" or "740%" on the parent's card is worse
  // than rendering as nothing.
  return Math.min(100, Math.max(0, Math.round(value)));
}

/**
 * The server's day summary, or nothing.
 *
 * Every field has to be there and the date has to be a date: this is the one
 * number a family list shows without opening anything, and a half-written map
 * would render as "0 sites" over a device that browsed all afternoon. Absent is
 * a state the card already draws — a wrong count is not.
 */
function parseWebToday(data: Record<string, unknown>): ChildDeviceRecord['webToday'] {
  const raw = data.webToday;
  if (!raw || typeof raw !== 'object') {
    return undefined;
  }
  const value = raw as Record<string, unknown>;
  const date = text(value.date);
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return undefined;
  }
  const count = (field: unknown): number =>
    typeof field === 'number' && Number.isFinite(field) && field > 0
      ? Math.floor(field)
      : 0;
  return {
    date,
    sites: count(value.sites),
    visits: count(value.visits),
    blocked: count(value.blocked),
  };
}

/**
 * A device's display name.
 *
 * Falls through the three things that might identify it, because each is
 * absent on some platform: a parent-chosen name, the name the child gave the
 * hardware, then the model. Empty when the device has reported none of them
 * and the UI supplies its own fallback in the reader's language.
 */
function deviceName(data: Record<string, unknown>): string {
  return text(data.name) ?? text(data.deviceLabel) ?? text(data.modelName) ?? '';
}

function isLiveParentDevice(device: ParentDeviceRecord): boolean {
  return !device.revokedAt;
}

function mapParentDevice(doc: DocSnapshot): ParentDeviceRecord {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  return {
    deviceId: doc.id,
    name: deviceName(data),
    platform: data.platform,
    ...(formFactor(data.formFactor) ? { formFactor: formFactor(data.formFactor) } : {}),
    modelName: text(data.modelName),
    deviceLabel: text(data.deviceLabel),
    osVersion: text(data.osVersion),
    lastActiveAt: timestampToIso(data.lastActiveAt) ?? '',
    createdAt: timestampToIso(data.createdAt) ?? '',
    ...(timestampToIso(data.revokedAt)
      ? { revokedAt: timestampToIso(data.revokedAt) }
      : {}),
  } as ParentDeviceRecord;
}

/**
 * A stored child device, exactly as Firestore holds it.
 *
 * `places`, `protectionStatus`, `protectionCounters` and
 * `webFilterBlockedCount` are declared on `ChildDeviceRecord` and were dropped
 * here — every consumer reads them off the record (`toDeviceView` in
 * `apps/mobile`, the dashboard's device card), so omitting them emptied the
 * Place Alerts screen and the protection panel without failing anything that
 * typechecks or tests. Each app shapes its own view from this; none of them
 * re-reads the document.
 */
function mapChildDevice(doc: DocSnapshot): ChildDeviceRecord {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const lastLocation = parseLastLocation(data);
  const otaRequestResult = parseOtaRequestResult(data);
  const locationRequestResult = parseLocationRequestResult(data);
  const protectionStatus = parseProtectionStatus(data);
  const messageMonitoring = parseMessageMonitoring(data);
  const webToday = parseWebToday(data);
  const weekCounters = parseWeekCounters(data);
  const topAppsToday = parseTopAppsToday(data);
  const topAppsOtherToday = parseTopAppsOtherToday(data);

  return {
    places: parseDevicePlaces(data),
    ...(protectionStatus ? { protectionStatus } : {}),
    /*
     * The next one that was dropped here, and it failed the same silent way
     * the four above did: the child device wrote it on every heartbeat, the
     * type declared it, `toDeviceView` spread it, and this mapper never read
     * it — so both parent surfaces saw `undefined` forever. What that looked
     * like on screen was a Message Alerts page permanently stuck on "waiting
     * for your child's device" with its switches disabled, on a phone that
     * had granted both Android consents. Absent still has to stay absent
     * (`parseMessageMonitoring` documents why).
     */
    ...(messageMonitoring ? { messageMonitoring } : {}),
    protectionCounters: parseProtectionCounters(data),
    /*
     * The free tier's whole visible output — the week's counts and today's
     * three apps — plus whether this device is parked. All three absent-means-
     * something: no counts yet, no report yet, and active.
     */
    ...(weekCounters ? { weekCounters } : {}),
    ...(topAppsToday ? { topAppsToday } : {}),
    /*
     * The remainder those three leave out. Absent means the server has not
     * measured it — a report with no minutes reading, or an older deployment —
     * and a console must then say nothing about the rest of the day rather
     * than treat silence as zero.
     */
    ...(topAppsOtherToday ? { topAppsOtherToday } : {}),
    ...(data.monitoringState === 'parked'
      ? { monitoringState: 'parked' as const }
      : {}),
    // The swap cooldown's readable half, absent on every device that has
    // never been the chosen one.
    ...(data.monitoredChangedAt
      ? { monitoredChangedAt: timestampToIso(data.monitoredChangedAt) ?? '' }
      : {}),
    webFilterBlockedCount:
      typeof data.webFilterBlockedCount === 'number' ? data.webFilterBlockedCount : 0,
    ...(webToday ? { webToday } : {}),
    /*
     * The device's own capability probe, passed through unparsed and absent
     * when there is none. Only the desktop agent writes one today; a phone
     * publishes permission statuses instead. Absent therefore means "this
     * device does not publish a probe", never "this device cannot" — the
     * distinction `timelineAvailability` turns into two different sentences.
     */
    ...(data.capabilities && typeof data.capabilities === 'object'
      ? { capabilities: data.capabilities as ChildDeviceRecord['capabilities'] }
      : {}),
    deviceId: doc.id,
    name: deviceName(data),
    // Unassign writes '' rather than deleting the key, so an empty string and
    // an absent field mean the same thing here: belongs to nobody.
    ...(typeof data.childId === 'string' && data.childId
      ? { childId: data.childId }
      : {}),
    platform: data.platform,
    // Absent stays absent: `resolveDisplayFormFactor` guesses nothing from a
    // bare platform, and "phone" written here for a tablet is the defect
    // `deviceFormFactor` was created to end.
    ...(formFactor(data.formFactor) ? { formFactor: formFactor(data.formFactor) } : {}),
    modelName: text(data.modelName),
    deviceLabel: text(data.deviceLabel),
    osVersion: text(data.osVersion),
    status: data.status,
    // The build this agent is running (`domain/buildFreshness`, the device
    // detail hero's "App version" row). Dropped here alongside `formFactor`,
    // so both read `undefined` for every device in the product. `otaVersion`
    // is spread on `!== undefined` because **0 is a real answer** — an install
    // that has never taken an OTA — and absent means the platform has no OTA
    // channel at all.
    ...(text(data.appVersion) ? { appVersion: text(data.appVersion) } : {}),
    ...(text(data.appBuild) ? { appBuild: text(data.appBuild) } : {}),
    ...(typeof data.otaVersion === 'number' ? { otaVersion: data.otaVersion } : {}),
    isLocked: data.isLocked === true,
    lastActiveAt: timestampToIso(data.lastActiveAt) ?? '',
    /*
     * The cadence this device says it is keeping, and the last "report now" it
     * was sent. Both are read by a parent console off this record and nowhere
     * else: `getEffectiveDeviceStatus` judges the age of `lastActiveAt` above
     * against the first, and `requestDeviceReports` throttles on the second.
     *
     * Dropping either is the silent failure this mapper has now had five times
     * — the field is written, the type declares it, nothing reads it, and
     * nothing fails. Here that would mean every free-tier device painted
     * offline forever, and a request written on every parent app open because
     * the throttle can never see the last one.
     */
    ...(typeof data.beatIntervalMs === 'number'
      ? { beatIntervalMs: data.beatIntervalMs }
      : {}),
    ...(typeof data.reportRequestId === 'string'
      ? { reportRequestId: data.reportRequestId }
      : {}),
    /*
     * "Update now" and the device's answer to it. Same pair, same reason as
     * the two above: `shouldRequestOtaCheck` throttles on the id, and the
     * button renders the result — dropping either leaves a parent pressing a
     * button that reports nothing and re-asks on every tap.
     */
    ...(typeof data.otaRequestId === 'string'
      ? { otaRequestId: data.otaRequestId }
      : {}),
    ...(otaRequestResult ? { otaRequestResult } : {}),
    ...(locationRequestResult ? { locationRequestResult } : {}),
    createdAt: timestampToIso(data.createdAt) ?? '',
    controls: parseDeviceControls(data),
    ...(lastLocation ? { lastLocation } : {}),
    parentPinFailedAttempts:
      typeof data.parentPinFailedAttempts === 'number'
        ? data.parentPinFailedAttempts
        : 0,
    parentPinLocked: data.parentPinLocked === true,
    batteryLevel: parseBatteryLevel(data.batteryLevel),
    batteryCharging:
      typeof data.batteryCharging === 'boolean' ? data.batteryCharging : undefined,
    batteryUpdatedAt: timestampToIso(data.batteryUpdatedAt),
  } as ChildDeviceRecord;
}

/** Everything a device removal has to clean up alongside the device document. */
export interface DeviceCascadeDeps {
  deleteForDevice(userId: string, deviceId: string): Promise<void>;
}

export interface DeviceRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
  clock: ClockPort;
  /**
   * Collections that hang off a device and must go with it.
   *
   * Passed in rather than imported: the legacy repository reached directly into
   * five others, which made this file the hub of a cycle — `device` imported
   * `rewardTask`, and `rewardTask`'s error handling imported `control`, which
   * imported `device` back. Injection makes the fan-out visible where the app
   * is assembled, and lets a test count what got cleaned up.
   */
  cascades: readonly DeviceCascadeDeps[];
}

export function createDeviceRepository(deps: DeviceRepositoryDeps) {
  const { db, api, clock, cascades } = deps;

  return {
    async fetchChildDevices(userId: string): Promise<ChildDeviceRecord[]> {
      const snapshot = await db.getDocs(childDevicesCollection(userId));
      return snapshot.docs.map(mapChildDevice);
    },

    async fetchChildDevice(
      userId: string,
      deviceId: string,
    ): Promise<ChildDeviceRecord | null> {
      const snapshot = await db.getDoc(childDeviceDoc(userId, deviceId));
      return snapshot.exists ? mapChildDevice(snapshot) : null;
    },

    subscribeChildDevices(
      userId: string,
      onDevices: (devices: ChildDeviceRecord[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        childDevicesCollection(userId),
        {},
        snapshot => onDevices(snapshot.docs.map(mapChildDevice)),
        onError,
      );
    },

    subscribeChildDevice(
      userId: string,
      deviceId: string,
      onDevice: (device: ChildDeviceRecord | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onDoc(
        childDeviceDoc(userId, deviceId),
        snapshot => onDevice(snapshot.exists ? mapChildDevice(snapshot) : null),
        onError,
      );
    },

    async fetchParentDevices(userId: string): Promise<ParentDeviceRecord[]> {
      const snapshot = await db.getDocs(parentDevicesCollection(userId));
      return snapshot.docs.map(mapParentDevice).filter(isLiveParentDevice);
    },

    /**
     * Revoked devices are dropped here and in `fetchParentDevices`, so every
     * list reader — the family screen, activity authorship — agrees the
     * device is gone. `subscribeParentDevice` keeps the raw record: the
     * revoked device itself reads that one to learn it has been signed out.
     */
    subscribeParentDevices(
      userId: string,
      onDevices: (devices: ParentDeviceRecord[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        parentDevicesCollection(userId),
        {},
        snapshot =>
          onDevices(snapshot.docs.map(mapParentDevice).filter(isLiveParentDevice)),
        onError,
      );
    },

    subscribeParentDevice(
      userId: string,
      deviceId: string,
      onDevice: (device: ParentDeviceRecord | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onDoc(
        parentDeviceDoc(userId, deviceId),
        snapshot => onDevice(snapshot.exists ? mapParentDevice(snapshot) : null),
        onError,
      );
    },

    async updateChildDeviceName(
      userId: string,
      deviceId: string,
      name: string,
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), { name: name.trim() });
    },

    async updateParentDeviceName(
      userId: string,
      deviceId: string,
      name: string,
    ): Promise<void> {
      await db.updateDoc(parentDeviceDoc(userId, deviceId), { name: name.trim() });
    },

    /**
     * Lock or unlock a child device.
     *
     * Server-side without exception: the lock is the product, and a child
     * device holds the family owner's uid, so a client write could not be told
     * apart from a parent's.
     *
     * The legacy version matched **six** English substrings of the server's
     * error text to decide whether to re-register and retry — two more than the
     * copy in `ControlRepository`, which is what happens to duplicated string
     * matching over time. `ApiPort` reports `code: 'staleCredential'` and the
     * adapter owns the recovery.
     */
    async toggleLock(
      userId: string,
      deviceId: string,
      locked: boolean,
    ): Promise<ChildDeviceRecord> {
      const current = await this.fetchChildDevice(userId, deviceId);
      if (!current) {
        const failure: ApiFailure = {
          code: 'notFound',
          messageKey: 'family.deviceNotFoundError',
        };
        throw failure;
      }

      if (current.isLocked === locked) {
        return current;
      }

      await api.post(
        '/setDeviceLock',
        { deviceId, locked, familyOwnerUserId: userId },
        { as: 'parent' },
      );

      return {
        ...current,
        isLocked: locked,
        status: locked ? 'locked' : 'online',
        lastActiveAt: new Date(clock.now()).toISOString(),
      };
    },

    /**
     * Parent-initiated extra minutes for today — no child request involved.
     * Same grant `resolveTimeRequest` makes on approval, same 5–180 bounds
     * (`@kidgate/schema/timeRequest`), gone at the child's midnight. Siri's
     * "give Minh fifteen minutes" is the first caller; no parent screen offers
     * it yet (`docs/BACKLOG.md`).
     */
    async grantBonusMinutes(
      userId: string,
      deviceId: string,
      minutes: number,
    ): Promise<{ bonusMinutesToday: number }> {
      return api.post<{ bonusMinutesToday: number }>(
        '/grantBonusMinutes',
        { deviceId, minutes, familyOwnerUserId: userId },
        { as: 'parent' },
      );
    },

    async resetParentPinLockout(userId: string, deviceId: string): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        parentPinFailedAttempts: 0,
        parentPinLocked: false,
      });
    },

    async updatePlaces(
      userId: string,
      deviceId: string,
      places: Device['places'],
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        places: (places ?? []).map(place => ({ ...place })),
      });
    },

    /**
     * Which device a free family keeps watching (`docs/PRICING.md` §6).
     *
     * A Cloud Function, never a document write: `firestore.rules` pins
     * `monitoringState` immutable for every client, parents included, because
     * a parent who could write it could mark all five devices active on a plan
     * that watches one. The function parks every other device in the same
     * batch and stamps the swap cooldown — `domain/deviceParking` has the
     * seven days and the reason.
     *
     * The failures a screen has to tell apart arrive as `serverCode`:
     * `monitored/cooldown` (429 — too soon since the last swap, and the only
     * one that needs its own sentence), `monitored/not-required` (409 — the
     * plan now watches every device, so the sheet is stale and should close).
     * Everything else is the generic sentence.
     */
    async chooseMonitoredDevice(userId: string, deviceId: string): Promise<void> {
      try {
        await api.post<{ ok: true; monitoredDeviceId: string }>(
          '/chooseMonitoredDevice',
          { deviceId, familyOwnerUserId: userId },
          { as: 'parent' },
        );
      } catch (error) {
        if (isApiFailure(error)) {
          const failure: ApiFailure = {
            ...error,
            messageKey:
              error.serverCode === 'monitored/cooldown'
                ? 'family.monitoredCooldown'
                : (error.messageKey ?? 'family.monitoredChooseFailed'),
          };
          throw failure;
        }
        throw error;
      }
    },

    /**
     * "A parent is looking" — stamp the family's presence and wake whatever the
     * dormancy reaper parked (`docs/PRICING.md` §6, §8 item 12).
     *
     * Called by either console when it opens, throttled by the caller to once
     * a day: the stamp only has to move often enough to stay inside a
     * thirty-day window, and the wake matters only on the first open after a
     * long absence. Opportunistic — a failure leaves the family looked-at on
     * the next open and never blocks a screen — so it answers `null` rather
     * than throwing.
     */
    async touchParentPresence(userId: string): Promise<{ woke: number } | null> {
      try {
        const answer = await api.post<{ ok: true; woke: number }>(
          '/touchParentPresence',
          { familyOwnerUserId: userId },
          { as: 'parent' },
        );
        return { woke: typeof answer?.woke === 'number' ? answer.woke : 0 };
      } catch {
        return null;
      }
    },

    /**
     * Ask the devices a parent is about to look at to report now.
     *
     * Called when a parent console opens. Only devices that say they are on a
     * slow cadence are asked, and only once every
     * `REPORT_REQUEST_MIN_INTERVAL_MS` however often the console opens — both
     * decided by `@kidgate/core/domain/reportRequest`, which both consoles
     * share so a family with the phone and the dashboard open does not ask
     * twice as often as either believes.
     *
     * **The throttle reads the device, not this process.** The last request's
     * time is inside the id already on the document, so two consoles — and two
     * launches of the same console — see the same answer.
     *
     * Failures are swallowed per device: this is an opportunistic refresh
     * behind a screen that renders correctly without it, and one unpaired or
     * unwritable device must not stop the others being asked. Returns how many
     * were asked, which is what a caller would log.
     */
    async requestDeviceReports(
      userId: string,
      devices: readonly Device[],
    ): Promise<number> {
      const nowMs = clock.now();
      let asked = 0;

      await Promise.all(
        devices.map(async device => {
          if (
            !shouldRequestReport({
              beatIntervalMs: device.beatIntervalMs,
              lastRequestedAtMs: reportRequestedAtMs(device.reportRequestId),
              lastActiveAt: device.lastActiveAt,
              nowMs,
            })
          ) {
            return;
          }
          try {
            await db.updateDoc(childDeviceDoc(userId, device.id), {
              reportRequestId: reportRequestId(nowMs, device.id),
            });
            asked += 1;
          } catch {
            // See above: opportunistic.
          }
        }),
      );

      return asked;
    },

    /**
     * Ask one device to pick up the newest JS bundle now.
     *
     * A parent pressed a button, which is the whole difference from
     * `requestDeviceReports` above and why this one **throws**: that is an
     * opportunistic refresh behind a screen that renders correctly without it,
     * this is the only thing that happened when somebody tapped. A swallowed
     * failure here is a button that does nothing and says nothing.
     *
     * Returns false — without writing — when `shouldRequestOtaCheck` refuses:
     * a platform with no OTA channel, a device that is not behind on its
     * bundle, or one asked inside the throttle. The caller should already be
     * hiding the button in the first two cases; the check is here as well
     * because the throttle is a fact about the document rather than about the
     * screen, and two consoles share it.
     *
     * **The previous answer is not cleared.** `otaRequestResult` carries the
     * id it answered, so a console compares the two and shows nothing while a
     * new request is outstanding — one field write instead of two, and no
     * moment where the device's last answer has been erased but the new one
     * has not arrived.
     */
    async requestDeviceOtaCheck(
      userId: string,
      device: Device,
      freshness: BuildFreshness,
    ): Promise<boolean> {
      const nowMs = clock.now();
      if (
        !shouldRequestOtaCheck({
          platform: device.platform,
          freshness,
          lastRequestedAtMs: otaRequestedAtMs(device.otaRequestId),
          nowMs,
        })
      ) {
        return false;
      }

      await db.updateDoc(childDeviceDoc(userId, device.id), {
        otaRequestId: otaRequestId(nowMs, device.id),
      });
      return true;
    },

    async updateWebFilterBlockedCount(
      userId: string,
      deviceId: string,
      count: number,
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        webFilterBlockedCount: Math.max(0, Math.floor(count)),
      });
    },

    async deleteParentDevice(userId: string, deviceId: string): Promise<void> {
      await db.deleteDoc(parentDeviceDoc(userId, deviceId));
    },

    /**
     * Sign another of this account's devices out.
     *
     * A stamp, not a delete — `ParentDeviceRecord.revokedAt` says why. The
     * FCM token goes with it so the device stops receiving the family's
     * alerts in the same write, before the phone has even noticed. The
     * credential hash stays: rules make it immutable, and
     * `requireParentDevice` refuses the device on the stamp instead.
     */
    async revokeParentDevice(userId: string, deviceId: string): Promise<void> {
      await db.updateDoc(parentDeviceDoc(userId, deviceId), {
        revokedAt: db.fieldValues.serverTimestamp(),
        fcmToken: db.fieldValues.delete(),
      });
    },

    /**
     * Remove a child device and everything hanging off it.
     *
     * The subcollections go first. A device document removed before its
     * requests, tasks, alerts and check-ins leaves those orphaned under a
     * device id nothing resolves — invisible to every screen, still billed for,
     * and still readable by anyone who reconstructs the path.
     */
    async deleteChildDevice(userId: string, deviceId: string): Promise<void> {
      await Promise.all(
        cascades.map(cascade => cascade.deleteForDevice(userId, deviceId)),
      );
      await db.deleteDoc(childDeviceDoc(userId, deviceId));
    },
  };
}

export type DeviceRepository = ReturnType<typeof createDeviceRepository>;
