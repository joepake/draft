/**
 * Whether a device can raise the alerts a parent screen offers to review.
 *
 * Same two rules as the rest of this family (`controlSupport`,
 * `webFilterSupport`, `locationSupport`, `sosSupport`): the device's own probe
 * outranks any platform list, and an absent probe is unknown rather than no —
 * every phone in the product publishes none.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';
import { isBrowserOnlySurface } from './deviceSurface';

export interface AppInstallAlertInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  capabilities?: {
    appInstallAlerts?: DeviceCapabilities['appInstallAlerts'];
    messageMonitoring?: DeviceCapabilities['messageMonitoring'];
    searchMonitoring?: DeviceCapabilities['searchMonitoring'];
    /*
     * Read only by `supportsTamperAlerts`, through `isBrowserOnlySurface`: a
     * browser extension shares its host's platform string with the desktop
     * agent and files no tamper row.
     */
    webFilter?: DeviceCapabilities['webFilter'];
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
 * one operating system disagree: on the same Mac the desktop agent watches
 * `/Applications` while `apps/extension` watches `chrome.management`, so both
 * publish `true` and mean different things by it — one names apps, the other
 * names extensions. `chromeos` is deliberately absent from the list below even
 * so: the extension's own flag is a runtime probe (a read that throws publishes
 * `false`), and a platform list would answer for a browser that cannot look.
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

/**
 * Platforms whose child agent can see what the child searched for, for
 * devices that publish no probe. Android's typing monitor reads the omnibox
 * and the YouTube app; nothing else is on the list because the other agents
 * that can — today `apps/extension` — publish `capabilities.searchMonitoring`
 * themselves. The desktop filters read domains, never URLs, iOS's Safari
 * shares no search terms, and a TV has no accessibility service: all three
 * answer no here (`docs/BACKLOG.md`, "Desktop browsers other than Chrome").
 */
export const SEARCH_MONITORING_PLATFORMS: DevicePlatform[] = ['android'];

/**
 * Search monitoring — the `message_alert` feed's `direction: 'search'` rows,
 * switched by `DeviceControls.searchMonitoringEnabled`.
 *
 * Its own question rather than `supportsMessageMonitoring`, because the two
 * part ways on a Chromebook: the extension sees every committed search URL
 * and no message at all.
 */
export function supportsSearchMonitoring(device: AppInstallAlertInput): boolean {
  const probe = device.capabilities?.searchMonitoring;
  if (probe !== undefined) {
    return probe;
  }
  return SEARCH_MONITORING_PLATFORMS.includes(device.platform ?? 'ios');
}

/**
 * Which platforms file a `type: 'tamper'` row at all.
 *
 * No `DeviceCapabilities` field answers this — a probe describes what an agent
 * can enforce, not which rows it files — so it is a platform list, and it is
 * the list rather than a fallback. Unconditional before this existed, so a
 * parent opening Tamper Alerts on a TV got a feed that can structurally never
 * have a row in it, under an empty state reading "nothing has happened" over a
 * device where nothing ever could.
 */
export const TAMPER_ALERT_PLATFORMS: DevicePlatform[] = [
  'ios',
  'android',
  'macos',
  'windows',
];

/**
 * `TAMPER_ALERT_PLATFORMS` alone is not enough: `apps/extension` reports
 * `platform: 'macos'` or `'windows'` on those hosts, landing it in the same
 * list as the real desktop agent even though nothing on that surface ever
 * writes a tamper row — it has no permission to lose in the first place, only
 * `webFilter: 'extension'`. `isBrowserOnlySurface` is the capability-keyed
 * test that tells the extension apart from the agent it shares a platform
 * string with.
 *
 * Moved here from `apps/mobile/src/features/deviceDetail/deviceDetailConfig.ts`
 * on 2026-09-03, when `apps/dashboard`'s tamper card needed the same answer.
 * Its card had been printing "0 tamper alerts" for a television — a number
 * that reads as reassurance about something nothing was ever watching, which
 * is the failure `.claude/rules/cross-platform.md` exists to catch.
 */
export function supportsTamperAlerts(device: AppInstallAlertInput): boolean {
  if (isBrowserOnlySurface(device)) {
    return false;
  }
  return TAMPER_ALERT_PLATFORMS.includes(device.platform ?? 'ios');
}
