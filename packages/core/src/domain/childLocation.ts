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

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';
import type { DeviceLocation } from '@kidgate/schema/deviceControls';
import { supportsLocation } from './locationSupport';

/** What this module reads off a device document — no screen state. */
export interface ChildLocationDeviceFacts {
  id: string;
  name?: string | null;
  platform?: DevicePlatform | null;
  capabilities?: { location?: DeviceCapabilities['location'] } | null;
  lastLocation?: DeviceLocation | null;
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
