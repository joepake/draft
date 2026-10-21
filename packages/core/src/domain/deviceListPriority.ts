/**
 * Which device needs the parent first, and why — as data, not sentences.
 *
 * Lifted from `apps/mobile/src/utils/deviceListPriority.ts`. The ordering is a
 * product decision (SOS above everything, a waiting check-in above a waiting
 * time request, setup problems above idle states) and it must be the same
 * ordering on the phone and the dashboard, or the two screens tell the family
 * different stories about who needs attention.
 *
 * Each status carries a `code` and the data its message needs; the surface
 * renders `messageKey` in its own language. Two codes need more than a key:
 * `protection-setup` interpolates a nested issue label, and `offline` formats
 * a relative time — both rendering concerns, so the raw material is handed
 * back instead.
 */

import type { Device } from '@kidgate/schema/device';
import { DEFAULT_DEVICE_CONTROLS } from '@kidgate/schema/deviceControls';
import { isWithinAnyScheduleWindow } from './scheduleWindow';
import { getEffectiveDeviceStatus } from './deviceStatus';
import { getProtectionSummaryKeys } from './protectionStatus';
import { resolveLockEnforcement } from './lockEnforcement';
import { supportsLock } from './controlSupport';
import { slowBeatMinutes } from './reportCadence';

export type DeviceListStatusTone = 'danger' | 'warning' | 'muted' | 'success';

export type DeviceListStatusCode =
  | 'sos'
  | 'check-in'
  | 'pending-requests'
  | 'lock-not-applied'
  | 'lock-sent'
  | 'paused'
  | 'parked'
  | 'blocked-hours'
  | 'inactive'
  | 'protection-setup'
  | 'offline'
  | 'free-cadence'
  | 'daily-limit'
  | 'ready';

export interface DeviceListStatusKeys {
  code: DeviceListStatusCode;
  messageKey: string;
  /** Interpolation values that are plain data (counts). */
  params?: Record<string, number>;
  /**
   * `protection-setup` only: the first issue's label key, to be rendered and
   * interpolated as `issueLabel` — or absent, in which case `messageKey`
   * already carries the whole sentence.
   */
  issueLabelKey?: string;
  /**
   * `offline` and `free-cadence`: raw timestamp for the surface's own
   * relative-time formatter. Present means the sentence needs a `date`.
   */
  lastActiveAt?: string;
  tone: DeviceListStatusTone;
  priority: number;
}

export interface DeviceListContext {
  pendingRequestCount: number;
  showPendingInStatus: boolean;
  hasActiveSos: boolean;
  hasPendingCheckIn: boolean;
  timeTick?: number;
}

export function getDeviceListStatusKeys(
  device: Device,
  context: DeviceListContext,
  nowMs: number,
): DeviceListStatusKeys {
  const tick = new Date(context.timeTick ?? nowMs);
  const controls = device.controls ?? DEFAULT_DEVICE_CONTROLS;
  const inBlockedHours =
    controls.scheduleEnabled &&
    isWithinAnyScheduleWindow(controls.scheduleWindows, {
      minutesSinceMidnight: tick.getHours() * 60 + tick.getMinutes(),
      weekday: tick.getDay(),
    });
  const protectionSummary = getProtectionSummaryKeys(device, nowMs);
  const effectiveStatus = getEffectiveDeviceStatus(device, nowMs);

  if (context.hasActiveSos) {
    return {
      code: 'sos',
      messageKey: 'family.sosNeedsAttentionNow',
      tone: 'danger',
      priority: 1000,
    };
  }

  if (context.hasPendingCheckIn) {
    return {
      code: 'check-in',
      messageKey: 'family.waitingForCheckIn',
      tone: 'warning',
      priority: 900,
    };
  }

  if (context.pendingRequestCount > 0 && context.showPendingInStatus) {
    return {
      code: 'pending-requests',
      messageKey: 'family.timeRequestsWaiting',
      params: { count: context.pendingRequestCount },
      tone: 'warning',
      priority: 800,
    };
  }

  /*
   * The request, gated by the probe — and no longer read off `effectiveStatus`.
   *
   * `device.isLocked` alone is what this comment used to warn against, and the
   * warning still holds: a browser extension publishes `lock: false` and its
   * worker has no handler for the field, so a row locked by an older parent
   * build kept saying "You locked this device" on the Family card. The fix was
   * `supportsLock`, which is read here directly.
   *
   * Reading it through `getEffectiveDeviceStatus` was how that fix arrived,
   * and since 2026-09-15 that function answers `'offline'` for a locked device
   * that has gone quiet — right for the chip, wrong for this row. `lock-sent`
   * exists precisely to describe a lock the device has not answered, and a
   * device that has answered nothing at all is the commonest case of it.
   */
  if (device.isLocked && supportsLock(device)) {
    /*
     * A lock the parent set is not the same fact as a lock the device applied,
     * and this row said the second while knowing only the first. A television
     * that was switched off, out of range, or running a build with no push
     * handler read "You paused this device" exactly like one with the overlay
     * covering the room — the second half of a real complaint, and the half
     * that survived the fix to delivery latency.
     *
     * `domain/lockEnforcement` holds which surfaces can answer and how. What
     * matters here is the ordering: **`notApplied` outranks a plain lock**,
     * because a device that has the policy and is not enforcing it is the one
     * case where waiting changes nothing and the parent has to act.
     */
    const enforcement = resolveLockEnforcement(device);
    if (enforcement === 'notApplied') {
      return {
        code: 'lock-not-applied',
        messageKey: 'family.lockNotAppliedOnDevice',
        tone: 'danger',
        priority: 750,
      };
    }
    if (enforcement === 'sent') {
      return {
        code: 'lock-sent',
        messageKey: 'family.lockSentWaitingForDevice',
        tone: 'warning',
        priority: 700,
      };
    }
    return {
      code: 'paused',
      messageKey: 'family.youPausedThisDevice',
      tone: 'warning',
      priority: 700,
    };
  }

  /*
   * Below the lock and above everything the device would otherwise be judged
   * on. A parked device (`docs/PRICING.md` §6) reports nothing, so the rows
   * after this one — inactive protection, offline — would each describe it as
   * a fault. It is not one; it is the free plan watching one device and this
   * is one of the others. `muted`, because the sentence that asks the parent
   * to act lives in the banner and the sheet, not on every card.
   */
  if (effectiveStatus === 'parked') {
    return {
      code: 'parked',
      messageKey: 'family.devicePausedHint',
      tone: 'muted',
      priority: 660,
    };
  }

  if (inBlockedHours) {
    return {
      code: 'blocked-hours',
      messageKey: 'family.blockedHoursActiveNow',
      tone: 'warning',
      priority: 650,
    };
  }

  if (protectionSummary.level === 'inactive') {
    return {
      code: 'inactive',
      messageKey: 'family.inactiveOpenKidGate',
      tone: 'danger',
      priority: 600,
    };
  }

  if (protectionSummary.level === 'warning') {
    const issue = protectionSummary.issues[0];
    return {
      code: 'protection-setup',
      messageKey: issue ? 'family.protectionNeedsSetup' : protectionSummary.subtitleKey,
      ...(issue ? { issueLabelKey: issue.labelKey } : {}),
      tone: 'warning',
      priority: 550,
    };
  }

  if (effectiveStatus === 'offline') {
    return {
      code: 'offline',
      messageKey: device.lastActiveAt
        ? 'family.lastActiveDate'
        : 'family.lastActiveUnknown',
      ...(device.lastActiveAt ? { lastActiveAt: device.lastActiveAt } : {}),
      tone: 'muted',
      priority: 400,
    };
  }

  /*
   * "Why is this number an hour old?" — answered before the parent concludes
   * the app has stopped working and asks for a refund instead of an upgrade.
   *
   * A free device beats every thirty minutes (`./reportCadence`), which is the
   * plan working exactly as sold — and is indistinguishable, on a card that
   * says only "Online", from an agent that has died. `docs/PRICING.md` §8 item
   * 7 has carried this sentence as owed since the cadence landed.
   *
   * **It states the staleness; it does not promise the cadence.** The first
   * version of this row printed "updates every 30 minutes" and was wrong within
   * a day: a laptop that sleeps reports nothing at all, so a parent read
   * *Online*, *every 30 minutes*, and *last update an hour ago* on one card and
   * concluded — reasonably — that the product was broken. Thirty minutes is a
   * floor the agent honours **while it is running**, which is not a promise a
   * parent surface is in any position to make. The measured age always is one,
   * and it is also the upgrade argument making itself, which is the wording
   * §8 asked for in the first place ("last seen 20 minutes ago").
   *
   * Above `daily-limit` rather than below it, because under it the line would
   * be hidden on every family that set a limit — which is most of them. Both
   * rows are reassurance rather than a problem, and this is the one the parent
   * has a question about.
   */
  if (slowBeatMinutes(device.beatIntervalMs) !== null && device.lastActiveAt) {
    return {
      code: 'free-cadence',
      messageKey: 'family.freeTierCadenceHint',
      lastActiveAt: device.lastActiveAt,
      tone: 'muted',
      priority: 150,
    };
  }

  if (controls.dailyLimitMinutes) {
    return {
      code: 'daily-limit',
      messageKey: 'family.dailyLimitOn',
      tone: 'success',
      priority: 100,
    };
  }

  return {
    code: 'ready',
    messageKey: 'family.deviceReady',
    tone: 'success',
    priority: 0,
  };
}

/**
 * Order the family list: most urgent first, then by name.
 *
 * Status is derived once per device rather than inside the comparator.
 * `getDeviceListStatusKeys` is not cheap — it walks the protection summary
 * (which parses timestamps and every permission) and the blocked-hours
 * schedule — and a comparator runs O(n log n) times, twice per comparison, so
 * the old shape recomputed it dozens of times for a handful of devices. The
 * minute ticker re-runs this sort every 60s, which is what made that matter.
 */
export function sortDevicesByPriority(
  devices: Device[],
  contextFor: (deviceId: string) => DeviceListContext,
  nowMs: number,
): Device[] {
  const statusByDeviceId = new Map<string, DeviceListStatusKeys>();
  for (const device of devices) {
    statusByDeviceId.set(
      device.id,
      getDeviceListStatusKeys(device, contextFor(device.id), nowMs),
    );
  }

  return [...devices].sort((left, right) => {
    const leftPriority = statusByDeviceId.get(left.id)?.priority ?? 0;
    const rightPriority = statusByDeviceId.get(right.id)?.priority ?? 0;

    if (leftPriority !== rightPriority) {
      return rightPriority - leftPriority;
    }

    return compareByName(left, right);
  });
}

/**
 * A–Z, ignoring case and accents. The order of children on both Family
 * screens: a list ranked by urgency moved a child's whole card to the top
 * every time one of their devices reported, which a parent reading down the
 * list could not follow.
 */
export function compareByName(left: { name: string }, right: { name: string }): number {
  return left.name.localeCompare(right.name, undefined, {
    sensitivity: 'base',
  });
}

/**
 * Most recent first by the timestamp `at` reads; anything without one sinks
 * to the end in its original order. Each surface passes the stamp its row
 * prints, so the order and the "last active" line cannot disagree.
 */
export function sortByMostRecent<T>(
  items: readonly T[],
  at: (item: T) => string | null | undefined,
): T[] {
  const ms = (item: T) => {
    const stamp = at(item);
    const parsed = stamp ? Date.parse(stamp) : NaN;
    return Number.isNaN(parsed) ? 0 : parsed;
  };
  return [...items].sort((left, right) => ms(right) - ms(left));
}
