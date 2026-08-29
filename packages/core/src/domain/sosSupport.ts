/**
 * Whether a child device can raise SOS — the question a parent screen asks
 * before it offers the SOS Alerts row on a device's own card.
 *
 * Same shape as `webFilterSupport` and `locationSupport`, and the same bug
 * those two were written to close: `deviceDetailConfig.ts` offered "SOS
 * Alerts" unconditionally, on a platform (`androidtv`) that hardcodes
 * `sos: false` — `capabilities.ts` argues why at the field: a television is
 * not where a child in trouble reaches, and the two things that make an SOS
 * worth raising, a position and a photo, are both absent there. That row on a
 * TV's card would open onto a feed that can structurally never have a row in
 * it, forever.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

/**
 * What a device that publishes no capability probe is assumed to do.
 *
 * SOS predates the desktop and TV agents, so a record with no probe at all is
 * a phone — the same fallback `webFilterSupport` and `locationSupport` take.
 */
export const SOS_FALLBACK_PLATFORMS: readonly DevicePlatform[] = ['ios', 'android'];

export interface SosSupportInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  capabilities?: { sos?: DeviceCapabilities['sos'] } | null;
}

/** Whether this device can raise SOS. */
export function supportsSos(device: SosSupportInput): boolean {
  const probe = device.capabilities?.sos;
  if (probe !== undefined) {
    return probe !== false;
  }
  return SOS_FALLBACK_PLATFORMS.includes(device.platform ?? 'ios');
}
