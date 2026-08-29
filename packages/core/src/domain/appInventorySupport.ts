/**
 * Whether a device can list what is already installed on it.
 *
 * Same two rules as `alertSupport`, `controlSupport`, `webFilterSupport` and the
 * rest of the family: the device's own probe outranks any platform list, and an
 * absent probe is unknown rather than no — every device paired before the field
 * existed publishes none.
 *
 * Separate from `supportsAppInstallAlerts` on purpose, and the television is
 * the proof rather than a hypothetical: that one answers "will this device tell
 * me when something changes", this answers "can it tell me what is there at
 * all", and `apps/tv` has always been able to do the second while doing none of
 * the first.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

export interface AppInventoryInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  capabilities?: {
    appInventory?: DeviceCapabilities['appInventory'];
  } | null;
}

/**
 * Platforms whose agent enumerates installed apps, for devices publishing no
 * probe.
 *
 * **`androidtv` is here and is not in `INSTALL_ALERT_PLATFORMS`**, which is the
 * clearest evidence the two lists had to be written separately rather than one
 * aliased to the other. A television runs no package receiver and files no
 * install activity, but `KidGateTvControlsModule.installedApps()` has always
 * enumerated its own launcher — the box knows perfectly well what is on it and
 * simply never says when that changes.
 *
 * `chromeos` is absent for the reason `apps/extension` publishes an explicit
 * `false`: a browser cannot see one app on the machine it runs on.
 *
 * **iOS is absent and stays absent.** Not an omission to be filled in later: no
 * API on that platform enumerates installed apps, FamilyControls included
 * (`docs/FEASIBILITY.md`, "iOS will not name a child's apps"). A parent screen
 * reads `false` here and says so rather than rendering an empty list.
 */
export const APP_INVENTORY_PLATFORMS: DevicePlatform[] = [
  'android',
  'androidtv',
  'macos',
  'windows',
];

export function supportsAppInventory(device: AppInventoryInput): boolean {
  const probe = device.capabilities?.appInventory;
  if (probe !== undefined) {
    return probe;
  }
  return APP_INVENTORY_PLATFORMS.includes(device.platform ?? 'ios');
}
