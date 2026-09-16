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
import type { ProtectionPermissionStatus } from '@kidgate/schema/device';
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
  'sharingOff' | 'permission' | 'waiting' | 'notUpdating';

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
    case 'waiting':
      return 'location.waitingForLocation';
    case 'notUpdating':
      return 'location.cardNotUpdating';
  }
}
