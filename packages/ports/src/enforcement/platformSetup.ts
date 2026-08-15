/**
 * Everything that is genuinely specific to one OS.
 *
 * Deliberately outside the shared ports. Onboarding really does differ per
 * platform — iOS asks for Screen Time authorisation, Android asks for usage
 * access plus accessibility plus battery exemption plus, on a Xiaomi, autostart
 * from a vendor settings screen nobody can find. Pretending these are one
 * interface leaks Android concepts into iOS code and produces `if (isAndroid)`
 * branches in shared logic.
 *
 * Every app resolves this port to its own platform's implementation and uses it
 * only in setup screens. Nothing in `@kidgate/core` may depend on it.
 *
 * Legacy origin: `getScreenTimeStatus`, `getProtectionPermissionStatus`,
 * `requestScreenTimeAuthorization`, `openAppSettings`,
 * `openAndroidPermissionSettings`, `requestIgnoreBatteryOptimizations`,
 * `getOemGuideInfo`, `openOemSettings`, `openPrivateDnsSettings`,
 * `setNavigationBarAppearance`, `consumePendingDeepLink`, `handleRemotePush`.
 */

import type { PermissionStatus } from './peripherals';

export interface SetupRequirement {
  /** Stable identifier, used as an i18n key and in protection-status logic. */
  id: string;
  status: PermissionStatus;
  /** This one missing means the device is not protected at all. */
  critical: boolean;
}

export interface PlatformSetupPort {
  /**
   * Everything this platform needs before it can enforce anything, with its
   * current state. The setup UI renders this list; it does not hardcode one.
   */
  getRequirements(): Promise<SetupRequirement[]>;

  /**
   * Request one requirement by id. Some cannot be requested in-app and only
   * open a settings screen — resolves with the status afterwards, which may be
   * unchanged if the user simply came back.
   */
  request(id: string): Promise<PermissionStatus>;

  /** Open the OS settings page for a requirement. Last resort when `request` cannot prompt. */
  openSettings(id: string): Promise<void>;

  /**
   * Vendor-specific guidance, when the platform needs it.
   *
   * Android only, and only on OEMs that kill background processes regardless of
   * granted permissions — Xiaomi, Huawei, Oppo, Vivo. Null everywhere else.
   */
  getVendorGuide?(): Promise<VendorGuide | null>;
}

export interface VendorGuide {
  family: string;
  /** i18n keys for the steps, not translated strings. */
  stepKeys: string[];
  /** Which `openSettings` ids this vendor exposes. */
  settingsIds: string[];
}
