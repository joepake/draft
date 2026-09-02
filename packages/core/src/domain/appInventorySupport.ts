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
 * `chromeos` is absent, and no longer because the extension cannot enumerate:
 * since 2026-09-01 it publishes `true` and lists the other **extensions** in
 * the browser (`chrome.management`). It stays out because that flag is a
 * runtime probe — a `getAll()` that throws on a supervised profile publishes
 * `false` — and a platform default would answer yes for a browser that has
 * been refused. Every install publishes a probe, so the list is never reached.
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
