/**
 * Whether a device can raise the alerts a parent screen offers to review.
 *
 * Same two rules as the rest of this family (`controlSupport`,
 * `webFilterSupport`, `locationSupport`, `sosSupport`): the device's own probe
 * outranks any platform list, and an absent probe is unknown rather than no —
 * every phone in the product publishes none.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

export interface AppInstallAlertInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  capabilities?: {
    appInstallAlerts?: DeviceCapabilities['appInstallAlerts'];
    messageMonitoring?: DeviceCapabilities['messageMonitoring'];
  } | null;
}

/**
 * Platforms whose child agent can watch message notifications for concerning
 * keywords. Android only — the channel is a `NotificationListenerService`, and
 * iOS has no equivalent (`docs/FEASIBILITY.md`, "Message-content monitoring").
 * A browser extension, a TV and the desktop agents have no message channel to
 * watch, so they publish nothing here and the platform list answers no for them.
 */
export const MESSAGE_MONITORING_PLATFORMS: DevicePlatform[] = ['android'];

/**
 * Platforms whose child agent reports app install events, for devices that
 * publish no probe: Android's package receiver, the desktop agent's directory
 * diff. iOS exposes none and never will
 * (`protection.appReviewRemindersNote`).
 */
export const INSTALL_ALERT_PLATFORMS: DevicePlatform[] = [
  'android',
  'macos',
  'windows',
];

/**
 * Install and removal alerts — the `app_installed` / `app_removed` feed.
 *
 * `DeviceCapabilities.appInstallAlerts` has always carried this and the parent
 * app was not reading it. A list answers by operating system, and two agents on
 * one operating system disagree: the desktop agent watches `/Applications` and
 * publishes `true`, while `apps/extension` on the same Mac publishes `false`,
 * because a browser cannot see one app on the machine it runs on. The platform
 * list gave a parent an App Alerts row for a Chrome window whose feed can
 * structurally never have a row in it.
 */
export function supportsAppInstallAlerts(device: AppInstallAlertInput): boolean {
  const probe = device.capabilities?.appInstallAlerts;
  if (probe !== undefined) {
    return probe;
  }
  return INSTALL_ALERT_PLATFORMS.includes(device.platform ?? 'ios');
}

/**
 * Message-content monitoring — the `message_alert` feed. Android only.
 *
 * The probe (`DeviceCapabilities.messageMonitoring`) outranks the list, so a
 * future agent that gains the ability publishes true and this follows without a
 * release; today only the Android phone reports it, and only through the
 * platform list because phones publish no probe. iOS answers false here whatever
 * the platform default, because it cannot do this at all.
 */
export function supportsMessageMonitoring(device: AppInstallAlertInput): boolean {
  const probe = device.capabilities?.messageMonitoring;
  if (probe !== undefined) {
    return probe;
  }
  return MESSAGE_MONITORING_PLATFORMS.includes(device.platform ?? 'ios');
}
