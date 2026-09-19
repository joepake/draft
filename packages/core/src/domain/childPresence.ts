/**
 * Is this child reachable right now — folded from the devices they hold.
 *
 * One device has one status (`domain/deviceStatus`). A person has several, and
 * the fold is deliberately optimistic about reachability and pessimistic about
 * nothing: **any device online means the child is reachable**, because a
 * parent's question is "can KidGate reach them", not "is every screen awake".
 * A tablet asleep in a drawer while the phone reports in is not an offline
 * child, and reporting one would send a parent looking for a problem that is
 * not there.
 *
 * `locked` is not a presence state here, unlike on a device. A child with one
 * locked phone and one open laptop is neither "locked" nor usefully described
 * as such — locking is per machine and the hero's own lock-all button already
 * says where that stands. So the fold answers reachability only, and the
 * counts let a screen say how much of the set is behind the answer.
 */

import type { Device } from '@kidgate/schema/device';
import { isDeviceParked } from './deviceParking';
import { getEffectiveDeviceStatus } from './deviceStatus';

export interface ChildPresence {
  /** True when at least one device has checked in inside the offline window. */
  online: boolean;
  /** How many of the child's devices are reachable right now. */
  onlineCount: number;
  /**
   * How many are parked — quiet because the free plan told them to be, not
   * because anything is wrong. Lets a screen say Paused where it would
   * otherwise have to say Offline over a device enforcing every rule it holds.
   */
  pausedCount: number;
  /** Every device assigned to the child, reachable or not. */
  totalCount: number;
  /**
   * The most recent `lastActiveAt` across the set, ISO — null when no device
   * has ever reported. Lets a screen say "last seen" without a second fold.
   */
  lastActiveAt: string | null;
}

export function resolveChildPresence(
  devices: readonly Device[],
  nowMs: number,
): ChildPresence {
  let onlineCount = 0;
  let pausedCount = 0;
  let lastActiveAt: string | null = null;

  for (const device of devices) {
    // 'locked' still means the agent checked in — a locked phone is reachable,
    // which is exactly why the parent can unlock it from here. 'parked' does
    // not: that device has been told not to report, and counting it present
    // would show a child "online" on a phone the family is not watching.
    //
    // **Parking is read off the field, never off the status**, and that is the
    // whole correction here. `getEffectiveDeviceStatus` answers `'locked'` for
    // a device that is BOTH parked and locked — the lock deliberately wins
    // there so a parent can see their own lock took (`domain/deviceStatus`).
    // Asking it alone therefore never hears `'parked'` about a locked device,
    // so the clause above was unreachable for exactly the set trial end
    // leaves behind: park every device, lock them, and the row read
    // "2/2 online" over a family reporting nothing.
    const parked = isDeviceParked(device);
    if (parked) {
      pausedCount += 1;
    }
    const status = getEffectiveDeviceStatus(device, nowMs);
    if (!parked && (status === 'online' || status === 'locked')) {
      onlineCount += 1;
    }
    if (device.lastActiveAt && (!lastActiveAt || device.lastActiveAt > lastActiveAt)) {
      lastActiveAt = device.lastActiveAt;
    }
  }

  return {
    online: onlineCount > 0,
    onlineCount,
    pausedCount,
    totalCount: devices.length,
    lastActiveAt,
  };
}
