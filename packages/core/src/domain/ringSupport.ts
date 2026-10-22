/**
 * Whether a parent screen may offer "Ring device" on a device, and the reason a
 * ring would be silent — `docs/FEASIBILITY.md`, "Play sound on a child's
 * phone".
 *
 * Unlike `supportsSos`, an absent probe is false: the ring rides a native
 * branch and a bundled sound, so a phone on an older build takes the push and
 * stays silent. Here so both consoles answer the same way.
 */

import type { DeviceCapabilities } from '@kidgate/schema/capabilities';
import type { ProtectionPermissionStatus } from '@kidgate/schema/permissions';

export interface RingSupportInput {
  capabilities?: { ring?: DeviceCapabilities['ring'] } | null;
  protectionStatus?: { notifications?: ProtectionPermissionStatus } | null;
}

export type RingBlocker = 'notificationsOff';

/** No notification, and so no ring, reaches a device in these states. */
const NOTIFICATIONS_OFF: ReadonlySet<ProtectionPermissionStatus> = new Set([
  'denied',
  'notDetermined',
  'restricted',
]);

export function supportsRing(device: RingSupportInput): boolean {
  return device.capabilities?.ring === true;
}

/**
 * Why a ring would not be heard, when the device has said so. A device that
 * has reported nothing about its notifications gets the benefit of the doubt.
 */
export function ringBlocker(device: RingSupportInput): RingBlocker | null {
  const status = device.protectionStatus?.notifications;
  return status && NOTIFICATIONS_OFF.has(status) ? 'notificationsOff' : null;
}
