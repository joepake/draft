/**
 * Whether a child device can report its location — the question a parent
 * screen asks before it offers the Location row.
 *
 * Same shape as `webFilterSupport`, and for the same reason: `apps/mobile`'s
 * `deviceDetailConfig.ts` offered the row on every platform unconditionally —
 * neither a `supportedOn` nor a `supportedBy` — so a parent looking at a paired
 * Android TV saw "Location" exactly as they would on a phone. It is a dead end
 * there: `capabilities.ts` hardcodes `location: false` on that platform (a
 * television has no GPS and stays in one room, so a fix is not the point — see
 * its header).
 *
 * **Check-in used to share this rule and no longer does.** It was written here
 * on the argument that location is the floor a check-in needs; it is not, and
 * `checkInSupport.ts` carries what went wrong. Adding a second feature back onto
 * this predicate means answering that argument first.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

/**
 * What a device that publishes no capability probe is assumed to do.
 *
 * Both features predate the desktop and TV agents, so a record with no probe
 * at all is a phone — the same fallback `webFilterSupport` takes and for the
 * same reason: **absent means unpublished, never incapable.**
 */
export const LOCATION_FALLBACK_PLATFORMS: readonly DevicePlatform[] = [
  'ios',
  'android',
];

export interface LocationSupportInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  /**
   * `Device.capabilities`, when this device publishes a probe.
   *
   * Optional here and required in `DeviceCapabilities`, because this reads a
   * Firestore document rather than a value this process built — an agent old
   * enough to predate the field writes a probe without it, and that case takes
   * the same fallback an absent probe does.
   */
  capabilities?: { location?: DeviceCapabilities['location'] } | null;
}

/** Whether this device can report its location. */
export function supportsLocation(device: LocationSupportInput): boolean {
  const probe = device.capabilities?.location;
  if (probe !== undefined) {
    return probe !== false;
  }
  return LOCATION_FALLBACK_PLATFORMS.includes(device.platform ?? 'ios');
}
