/**
 * Which device answers "where is this child?" — and when nothing may.
 *
 * A child with a phone in the school bag and a tablet on the home charger has
 * two fixes, and the stay-at-home one is usually fresher: it is plugged in,
 * online and reporting, while the phone sits through a class on a power-saving
 * radio. "Latest update wins" therefore places the child at home while they
 * are at school — a wrong answer with a confident face, on the one screen a
 * parent opens *because* they are worried. Movement heuristics fail the same
 * afternoon: during lessons both devices are stationary.
 *
 * So nothing here summarises. A parent names the carried device
 * (`Child.locationDeviceId`) and that fix is the answer; with exactly one
 * location-capable device the answer is forced and no choice is asked for;
 * with several and no designation the view shows every fix with its own age
 * and refuses to pick — `carried: null` is a state screens must render, not
 * an error. Same posture as `childUsage`'s bounds: when the union cannot be
 * known, say so rather than picking.
 *
 * Lives here because `apps/mobile` and `apps/dashboard` both render child
 * location; two parent surfaces disagreeing about where the same child is
 * would be this file's failure.
 */

import type {
  DeviceCapabilities,
  DeviceConsent,
  DevicePlatform,
} from '@kidgate/schema/capabilities';
import type { DeviceLocation } from '@kidgate/schema/deviceControls';
import type {
  ProtectionPermissionStatus,
  DeviceLocationRequestResult,
  DeviceLocationRequestStatus,
  DeviceLocationSensing,
} from '@kidgate/schema/device';
import { supportsLocation } from './locationSupport';

/** What this module reads off a device document — no screen state. */
export interface ChildLocationDeviceFacts {
  id: string;
  name?: string | null;
  platform?: DevicePlatform | null;
  capabilities?: {
    location?: DeviceCapabilities['location'];
    pendingConsents?: readonly DeviceConsent[];
  } | null;
  lastLocation?: DeviceLocation | null;
  controls?: { locationSharingEnabled?: boolean } | null;
  protectionStatus?: { location?: ProtectionPermissionStatus } | null;
  /** `Device.lastActiveAt`. Read only to tell a silent device from a silent fix. */
  lastActiveAt?: string | null;
  /** `Device.locationSensing` — `'ip'` is a desktop that can only guess. */
  locationSensing?: DeviceLocationSensing | null;
}

export interface ChildLocationView<
  D extends ChildLocationDeviceFacts = ChildLocationDeviceFacts,
> {
  /**
   * The device whose fix answers "where are they?", or null when no honest
   * answer exists — zero capable devices, or several and no designation.
   */
  carried: D | null;
  /**
   * True when `carried` came from the parent's designation; false when it is
   * the only location-capable device and the answer is forced. Screens use
   * this to decide whether "change" is worth drawing.
   */
  chosen: boolean;
  /** Location-capable devices other than `carried`, freshest fix first. */
  others: D[];
  /**
   * Several capable devices and no valid designation: the screen should ask
   * the parent to name the carried device, and must not summarise meanwhile.
   */
  needsChoice: boolean;
}

const fixTime = (device: ChildLocationDeviceFacts): number => {
  const at = device.lastLocation?.updatedAt;
  const time = at ? new Date(at).getTime() : NaN;
  return Number.isFinite(time) ? time : 0;
};

/** Freshest fix first; devices that never reported sink to the end. */
const byFreshness = (
  a: ChildLocationDeviceFacts,
  b: ChildLocationDeviceFacts,
): number => fixTime(b) - fixTime(a);

export function resolveChildLocationView<D extends ChildLocationDeviceFacts>(
  child: { locationDeviceId?: string },
  assignedDevices: D[],
): ChildLocationView<D> {
  const capable = assignedDevices
    .filter(device => supportsLocation(device))
    .sort(byFreshness);

  // A dangling id — device unassigned or unpaired since the choice — reads
  // as unchosen, never as a fifth state.
  const designated = child.locationDeviceId
    ? (capable.find(device => device.id === child.locationDeviceId) ?? null)
    : null;

  if (designated) {
    return {
      carried: designated,
      chosen: true,
      others: capable.filter(device => device.id !== designated.id),
      needsChoice: false,
    };
  }

  if (capable.length === 1) {
    return {
      carried: capable[0] ?? null,
      chosen: false,
      others: [],
      needsChoice: false,
    };
  }

  return {
    carried: null,
    chosen: false,
    others: capable,
    needsChoice: capable.length >= 2,
  };
}

/**
 * Why the position on screen is missing or old, when the answer is knowable.
 *
 * A card that prints a fix from two days ago and nothing else asks the parent
 * to guess between three unrelated causes: they switched sharing off weeks
 * ago, the child never granted the OS permission, or the device has simply not
 * reported yet. Only the first is their own doing, and it is the one with no
 * signal anywhere — `getProtectionSummaryKeys` raises a permission issue but
 * says nothing about a switch, because a switch a parent set is not a fault.
 *
 * `null` means there is nothing to tell them: sharing is on, the grant is in
 * place, and a recent fix exists.
 *
 * **Age alone is never a blocker.** Every surface prints the fix's age beside
 * it, and repeating that in amber is noise — a phone switched off for a week
 * has an old fix and nothing is wrong. `notUpdating` is the narrower claim:
 * the device has checked in *since* that fix and by a long way, so it is
 * running, permitted, told to share, and still not reporting a position. That
 * is a fault, and it is the state that reads as "2 days ago" beside "last
 * active: 3 minutes ago" with no explanation anywhere.
 */
export type ChildLocationBlocker =
  | 'sharingOff'
  | 'permission'
  /**
   * Allowed only while KidGate is open (`ProtectionPermissionStatus`
   * `foregroundOnly`), so the fix is as old as the last time the child opened
   * the app. Not "no location": one still arrives, which is why
   * `isLocationBlocked` leaves it off the family card's pill — the device's
   * protection verdict already counts it there.
   */
  | 'foregroundOnly'
  /**
   * A desktop that could only guess from its internet connection — Wi-Fi
   * radio off, or none — so no fix is coming until someone turns it on. Its
   * own blocker because the parent can act on it, unlike `waiting`, and
   * because the pin it would otherwise explain is not old, it is absent or
   * wrong: an IP guess lands at the ISP's city centre.
   */
  | 'ipOnly'
  | 'waiting'
  | 'notUpdating';

/**
 * How old a fix may be before a device that is plainly awake counts as broken.
 *
 * A day, not a cadence multiple: the background interval is configuration this
 * package cannot read, it differs per platform and it halves on the free tier
 * (`domain/reportCadence`), and a threshold that chases it would accuse a
 * lapsed family's phone of a fault for obeying its own plan. A device that has
 * reported *anything* in the last day and no position for over a day is wrong
 * under every one of those cadences.
 */
export const LOCATION_STALE_AFTER_MS = 24 * 60 * 60 * 1000;

/** Statuses that mean the parent will get no position until someone acts. */
const BLOCKING_PERMISSION: readonly ProtectionPermissionStatus[] = [
  'denied',
  'notDetermined',
  'restricted',
];

export function resolveChildLocationBlocker(input: {
  /**
   * The child's rule when saved, else what the devices say — the seed order
   * every location surface uses. Resolved by the caller because a child rule
   * outranks device controls and this module is handed devices, not children.
   */
  sharingEnabled: boolean;
  /** `ChildLocationView.carried`; null when no honest answer exists. */
  carried: ChildLocationDeviceFacts | null;
  /**
   * Wall time, passed in per this package's rule — a test has to be able to
   * say what time it is. Omit to skip the `notUpdating` check entirely, which
   * is what a caller with no clock should do rather than guess.
   */
  nowMs?: number;
  staleAfterMs?: number;
}): ChildLocationBlocker | null {
  const {
    sharingEnabled,
    carried,
    nowMs,
    staleAfterMs = LOCATION_STALE_AFTER_MS,
  } = input;

  // No carried device is not a blocker to explain here: either nothing can
  // report location at all, or several could and the parent has not said
  // which — a question `needsChoice` already asks, on the screen that has room
  // for it.
  if (!carried) {
    return null;
  }

  if (!sharingEnabled) {
    return 'sharingOff';
  }

  const permission = carried.protectionStatus?.location;
  // `unknown`, `unavailable` and absent are all "cannot say" — the same rule
  // the capability probe follows. Only a status that names a refusal counts.
  if (permission && BLOCKING_PERMISSION.includes(permission)) {
    return 'permission';
  }
  // Desktops publish no permission checklist; an outstanding consent is how
  // they report the same thing (`DeviceCapabilities.pendingConsents`).
  if (carried.capabilities?.pendingConsents?.includes('location')) {
    return 'permission';
  }
  // Ahead of `waiting` and `notUpdating`, which it explains: a phone nobody
  // has opened today has no fresh fix because it is not allowed to take one.
  if (permission === 'foregroundOnly') {
    return 'foregroundOnly';
  }

  // Before `waiting` and `notUpdating`, both of which it explains: the
  // device is running and permitted, and still cannot place itself.
  if (carried.locationSensing === 'ip') {
    return 'ipOnly';
  }

  if (!carried.lastLocation) {
    return 'waiting';
  }

  if (nowMs !== undefined) {
    const fixMs = new Date(carried.lastLocation.updatedAt).getTime();
    const activeMs = carried.lastActiveAt
      ? new Date(carried.lastActiveAt).getTime()
      : NaN;
    // Both halves, and an unparseable stamp fails the test rather than passing
    // it: absent is unknown, and a device with no `lastActiveAt` is exactly
    // the one whose silence already explains the old fix.
    if (
      Number.isFinite(fixMs) &&
      Number.isFinite(activeMs) &&
      nowMs - fixMs > staleAfterMs &&
      nowMs - activeMs <= staleAfterMs
    ) {
      return 'notUpdating';
    }
  }

  return null;
}

/** The sentence for a blocker, as an i18n key every parent surface renders. */
export function childLocationBlockerKey(blocker: ChildLocationBlocker): string {
  switch (blocker) {
    case 'sharingOff':
      return 'location.cardSharingOff';
    case 'permission':
      return 'location.cardPermissionOff';
    case 'foregroundOnly':
      return 'location.cardForegroundOnly';
    case 'ipOnly':
      return 'location.cardIpOnly';
    case 'waiting':
      return 'location.waitingForLocation';
    case 'notUpdating':
      return 'location.cardNotUpdating';
  }
}

/**
 * Whether the family card's "No location" pill is true of this blocker.
 *
 * Every blocker but `foregroundOnly` means no usable position is coming. That
 * one still sends a fix whenever the child opens KidGate, and its device
 * already turns the card's health pill amber through the protection summary —
 * so both consoles ask here rather than testing for `null`.
 */
export function isLocationBlocked(blocker: ChildLocationBlocker | null): boolean {
  return blocker !== null && blocker !== 'foregroundOnly';
}

/**
 * The device's own answer to the last "Locate now", when that answer is a
 * failure a parent screen should still be showing.
 *
 * `Device.locationRequestResult` is written for every request a device takes,
 * and for a long time no parent screen read it: the toast said the request was
 * on its way, the map kept its old pin, and "could not get a position" looked
 * exactly like "not there yet". This is the rule both parent location screens
 * read, so they cannot come to disagree about the same press.
 */
export type LocationRequestFailure = Exclude<DeviceLocationRequestStatus, 'answered'>;

/**
 * How long an answer stays the answer to "what came of my refresh".
 *
 * An hour, because the line answers the press a parent just made, and a device
 * answers that in seconds. Past that the line would be describing a device
 * that may have been granted, charged or moved since — the blocker line
 * (`resolveChildLocationBlocker`) is what carries a lasting cause. `atMs` is the
 * device's clock, so a skewed device only moves this by its skew.
 */
export const LOCATION_REQUEST_ANSWER_TTL_MS = 60 * 60 * 1000;

/** The blockers that already say what a failed answer would. */
const BLOCKER_EXPLAINS: Partial<
  Record<LocationRequestFailure, readonly ChildLocationBlocker[]>
> = {
  sharingOff: ['sharingOff'],
  ipOnly: ['ipOnly'],
  // "Location is not allowed on this device" is why an OS had no fix to give —
  // and so is a phone allowed only while KidGate is open, which a "Locate now"
  // wakes in the background, where it may not take one.
  noFix: ['permission', 'foregroundOnly'],
};

export function resolveLocationRequestFailure(input: {
  result?: DeviceLocationRequestResult | null;
  /** The same device's `lastLocation`. A fix newer than the answer supersedes it. */
  lastLocation?: DeviceLocation | null;
  /**
   * The blocker already on screen for this device, if any — one sentence per
   * cause, not two.
   */
  blocker?: ChildLocationBlocker | null;
  nowMs: number;
  ttlMs?: number;
}): LocationRequestFailure | null {
  const {
    result,
    lastLocation,
    blocker,
    nowMs,
    ttlMs = LOCATION_REQUEST_ANSWER_TTL_MS,
  } = input;

  if (!result || result.status === 'answered') {
    return null;
  }
  if (nowMs - result.atMs > ttlMs) {
    return null;
  }
  // A position that arrived after the failure has answered the question the
  // failure was about — a background upload, or a second press that worked.
  const fixMs = lastLocation ? new Date(lastLocation.updatedAt).getTime() : NaN;
  if (Number.isFinite(fixMs) && fixMs >= result.atMs) {
    return null;
  }
  if (blocker && BLOCKER_EXPLAINS[result.status]?.includes(blocker)) {
    return null;
  }
  return result.status;
}

/** The sentence for a failed answer, as an i18n key every parent surface renders. */
export function locationRequestFailureKey(failure: LocationRequestFailure): string {
  switch (failure) {
    case 'noFix':
      return 'location.requestNoFix';
    case 'ipOnly':
      return 'location.requestIpOnly';
    case 'sharingOff':
      return 'location.cardSharingOff';
    case 'unsupported':
      return 'location.requestUnsupported';
  }
}
