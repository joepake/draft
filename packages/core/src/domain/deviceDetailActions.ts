/**
 * The parent console's action grid — every card, its icon, its copy and the
 * rule that decides whether this device can do it.
 *
 * **Moved here from `apps/mobile/src/features/deviceDetail/deviceDetailConfig.ts`
 * on 2026-09-15, when `apps/dashboard` grew the same grid.** It was already
 * platform-free in everything but one type import; leaving it inside one app
 * would have meant a second list, and the eighth entry the two disagreed about
 * would be a card a parent sees on their phone and not in their browser. Same
 * move, same reason, as the seven in `docs/DESKTOP_ENFORCEMENT.md`.
 *
 * The mobile module is a re-export now, so every call site there is unchanged.
 */

import type { IconName } from '@kidgate/tokens/icons';
import type { TranslationParams } from '@kidgate/i18n/types';
import type { DevicePlatform } from '@kidgate/schema/capabilities';
import type { Device } from '@kidgate/schema/device';
import { supportsWebFiltering, supportsWebHistory } from './webFilterSupport';
import { showsVideoHistoryCard } from './videoHistorySupport';
import { supportsLocation } from './locationSupport';
import { supportsCheckIn } from './checkInSupport';
import { supportsSos } from './sosSupport';
import { hidesUnsupportedControls } from './deviceSurface';
import {
  supportsAppBlocking,
  supportsAppLimits,
  supportsDailyLimit,
  supportsSchedule,
} from './controlSupport';
import { supportsAppInstallAlerts, supportsMessageMonitoring } from './alertSupport';
import { supportsAppInventory } from './appInventorySupport';
import { supportsRewardTasks } from './rewardTaskSupport';

/** What a support rule is allowed to look at: the device document, no screen state. */
export type DeviceSupportFacts = Pick<Device, 'platform' | 'capabilities'>;

export type DeviceAction = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  feature: string;
  /**
   * The child platforms this feature exists on. Absent means all five.
   *
   * Replaced a binary `exclusiveTo: 'ios' | 'android'` the day desktop child
   * devices landed: "Android only" was really "not iOS", and a Mac fell into
   * whichever half the ternary happened to put it.
   *
   * For anything the capability probe answers, use `supportedBy` instead — a
   * platform list cannot express two Macs on the same build disagreeing.
   */
  supportedOn?: DevicePlatform[];
  /**
   * The device's own answer, for features `DeviceCapabilities` carries.
   *
   * Outranks `supportedOn`, and the rule itself lives in `@kidgate/core/domain`
   * because the dashboard reads the same document. Anything here must treat an
   * absent probe as unknown rather than as no — phones publish none.
   */
  supportedBy?: (device: DeviceSupportFacts) => boolean;
};

/** Whether this device can do what the action opens. */
export function isActionSupported(
  action: DeviceAction,
  device: DeviceSupportFacts,
): boolean {
  if (action.supportedBy) {
    return action.supportedBy(device);
  }
  if (!action.supportedOn) {
    return true;
  }
  // Records written before the platform field existed are phones.
  return action.supportedOn.includes(device.platform ?? 'ios');
}

/**
 * Both moved to `@kidgate/core/domain/alertSupport` on 2026-09-03, when
 * `apps/dashboard`'s tamper card needed the same answer. Re-exported so this
 * module's callers keep their import.
 */
import { TAMPER_ALERT_PLATFORMS, supportsTamperAlerts } from './alertSupport';

// Re-exported as well as imported: `TamperAlertsScreen` and the sections below
// both read them from this module today.
export { TAMPER_ALERT_PLATFORMS, supportsTamperAlerts };

type TranslateFn = (key: string, params?: TranslationParams) => string;

/**
 * Live tools with real screens or flows — shown in Control center.
 *
 * `canUsePremiumControls` is read by exactly one row: Check-In is free without
 * the photo and premium with it, so its subtitle has to name the half this
 * family actually gets rather than promising a selfie the request will not ask
 * for (`docs/PRICING.md` §4). Defaulted to true so a caller holding no plan
 * describes the feature whole rather than understating it.
 */
export function getActionSections(
  t: TranslateFn,
  canUsePremiumControls = true,
): Array<{
  title: string;
  subtitle: string;
  actions: DeviceAction[];
}> {
  return [
    {
      title: t('deviceDetail.essentialControls'),
      subtitle: t('deviceDetail.dailyRulesAndDeviceAccess'),
      actions: [
        {
          id: 'daily-limit',
          title: t('deviceDetail.dailyLimit'),
          description: t('deviceDetail.setDailyScreenTimeCap'),
          icon: 'clock',
          feature: 'Daily Limit',
          // Ungated until a browser joined the product: every child device
          // before `apps/extension` could cap the day. See
          // `@kidgate/core/domain/controlSupport` — an absent probe is still
          // yes, so every phone is unaffected.
          supportedBy: supportsDailyLimit,
        },
        {
          id: 'schedule',
          title: t('deviceDetail.blockedHours'),
          description: t('deviceDetail.manageUpToThreeTimeRanges'),
          icon: 'moon',
          feature: 'Schedule',
          supportedBy: supportsSchedule,
        },
        {
          id: 'app-blocking',
          title: t('deviceDetail.blockedApps'),
          description: t('deviceDetail.viewAndManageBlockedApps'),
          icon: 'ban',
          feature: 'Individual App Blocking',
          // `'best-effort'` counts — that is the desktop and TV agents, and the
          // weakness is reported in the same field rather than hidden;
          // `useDeviceDetailScreen` reads `appBlockingNoteKey` off that same
          // probe and says it on the card.
          supportedBy: supportsAppBlocking,
        },
        {
          id: 'app-limits',
          title: t('deviceDetail.appLimits'),
          description: t('deviceDetail.appLimitsDescription'),
          icon: 'apps',
          feature: 'Individual App Blocking',
          // A per-app cap needs to know which app is being used and for how
          // long, *and* something able to stop it — so the rule reads both
          // flags rather than a platform. `APP_LIMIT_PLATFORMS` in
          // `@kidgate/core/domain/controlSupport` is only the fallback for a
          // phone, which publishes no probe; the argument for excluding iOS,
          // and for what a browser on a Mac does to a platform list, is there.
          supportedBy: supportsAppLimits,
        },
        {
          id: 'reward-tasks',
          title: t('deviceDetail.rewardTasks'),
          description: t('deviceDetail.rewardTasksDescription'),
          icon: 'star',
          feature: 'Reward Tasks',
          // apps/tv has no RewardTaskRepository, no claim listener and no
          // screen — a task assigned there is a reward nobody can ever claim.
          // Neither has `apps/extension`, which the list could not say because
          // an extension on a Mac reports `macos`. Both in
          // `@kidgate/core/domain/rewardTaskSupport`.
          supportedBy: supportsRewardTasks,
        },
      ],
    },
    {
      title: t('deviceDetail.safetyMonitoring'),
      subtitle: t('deviceDetail.locationAndWebSafety'),
      actions: [
        {
          id: 'request-check-in',
          title: t('deviceDetail.checkIn'),
          // Free families get the location half only, and the row says so
          // rather than naming a photo their request will not ask for.
          description: canUsePremiumControls
            ? t('deviceDetail.locationPlusSelfie')
            : t('deviceDetail.locationOnly'),
          icon: 'userCheck',
          feature: 'Location',
          // Hidden on `androidtv` only: `apps/tv` implements no check-in
          // listener, so a request raised against one sits unanswered forever
          // with nothing telling the parent why. This used to read
          // `supportsLocation`, which also hid the row on a Mac whose child had
          // not granted CoreLocation — a device that answers check-ins fine
          // without knowing where it is. Argued in `domain/checkInSupport`.
          supportedBy: supportsCheckIn,
        },
        {
          id: 'web-filter',
          title: t('deviceDetail.webFilter'),
          description: t('deviceDetail.limitAdultWebsites'),
          icon: 'globe',
          feature: 'Web Filtering',
          // iOS: Screen Time adult filter. Android: the VPN blocklist. Every
          // other agent answers for itself — a Mac publishes `'contentFilter'`
          // once its extension is bundled, a PC `'dns'` once its resolver
          // holds port 53, and `false` where neither is true, so the row hides
          // rather than showing a switch that flips nothing. No release here
          // is needed for an agent to change its answer.
          supportedBy: supportsWebFiltering,
        },
        {
          id: 'pause-browsing',
          title: t('deviceDetail.pauseBrowsing'),
          description: t('deviceDetail.pauseBrowsingDescription'),
          // No `pause` glyph exists; `hourglass` is the one that says "for a
          // while" rather than "from now on", which is the whole distinction
          // between this row and the filter above it.
          icon: 'hourglass',
          feature: 'Pause Browsing',
          // The same predicate as the filter, and necessarily so: a pause is
          // that filter turned all the way up for a while, so a device with
          // nothing inspecting traffic has nothing to pause. What it reaches
          // therefore differs by surface exactly as filtering does — the whole
          // device on Android, macOS, Windows and the TV; Safari and in-app
          // browsers on iOS. `docs/FEASIBILITY.md`, "Pause browsing from the
          // parent's phone", is why this is not called "pause the internet".
          //
          // iOS reaches it through `webContent.blockedByFilter = .all(except:
          // [])` and a flag of its own, never through allow-list-only with an
          // empty list — that composition falls to `.auto(except:)` there,
          // which is Apple's adult filter and not a pause
          // (`KidGateControls.swift`).
          supportedBy: supportsWebFiltering,
        },
        {
          id: 'web-history',
          title: t('deviceDetail.webHistory'),
          description: t('deviceDetail.webHistoryDescription'),
          icon: 'activity',
          feature: 'Web History',
          // Follows web filtering: a device with nothing inspecting traffic has
          // no history to keep. Argued in `domain/webFilterSupport`.
          supportedBy: supportsWebHistory,
        },
        {
          id: 'video-history',
          title: t('deviceDetail.videoHistory'),
          description: t('deviceDetail.videoHistoryDescription'),
          icon: 'play',
          feature: 'Video History',
          // A browser reads the URL, the Android agent the media session; the
          // Mac/Windows filters see a domain and iOS neither. The desktops
          // still get the card — open, not struck out — because the screen
          // behind it is where a parent is told the Chrome extension records
          // this. `showsVideoHistoryCard` is that rule, shared with the web.
          supportedBy: showsVideoHistoryCard,
        },
        {
          id: 'location',
          title: t('deviceDetail.location'),
          description: t('deviceDetail.seeLatestLocation'),
          icon: 'mapPin',
          feature: 'Location',
          // A phone reports `'coarse' | 'gps'`; the desktop agents report
          // `'coarse'` until the OS refuses — `undetermined` counts there,
          // deliberately, because this row is the doorway to the sharing
          // switch that raises the ask (`locationCapability` in apps/desktop).
          // Android TV hardcodes `false`. Unconditional before this put the
          // row on a TV that has never had a fix to show.
          supportedBy: supportsLocation,
        },
      ],
    },
    {
      title: t('deviceDetail.alerts'),
      subtitle: t('deviceDetail.alertsSubtitle'),
      actions: [
        {
          id: 'sos-alerts',
          title: t('deviceDetail.sosAlerts'),
          description: t('deviceDetail.reviewEmergencyAlerts'),
          icon: 'siren',
          feature: 'SOS Alerts',
          // `capabilities.ts` hardcodes `sos: false` on androidtv — a
          // television is not where a child in trouble reaches, and this feed
          // can structurally never have a row for one. Argued in
          // `domain/sosSupport`.
          supportedBy: supportsSos,
        },
        // Icons in this grid are the primary scan signal, so all fourteen
        // cards carry a distinct one: `siren` is SOS, `shieldAlert` is tamper,
        // `home` is place alerts and `appInstall` is app alerts.
        {
          id: 'tamper-alerts',
          title: t('deviceDetail.tamperAlerts'),
          description: t('deviceDetail.reviewTamperAlerts'),
          icon: 'shieldAlert',
          feature: 'Tamper Alerts',
          supportedBy: supportsTamperAlerts,
        },
        {
          id: 'place-alerts',
          title: t('deviceDetail.placeAlerts'),
          description: t('deviceDetail.reviewPlaceAlerts'),
          icon: 'home',
          feature: 'Location',
          // Rides location, same as the Location row itself: a place alert is
          // a geofence crossing, and a device with no fix to compare against
          // one can never cross it.
          supportedBy: supportsLocation,
        },
        {
          id: 'apps',
          title: t('deviceDetail.appAlerts'),
          description: t('deviceDetail.reviewAppInstallAlerts'),
          icon: 'appInstall',
          feature: 'App Review Reminders',
          /*
           * One card, two probes behind it — `appInstallAlerts` (a live
           * install/uninstall feed) and `appInventory` (a full launcher-query
           * snapshot) answer different questions and can disagree: the
           * television publishes `appInstallAlerts: false` (no package
           * receiver in `com.kidgate.app.tv`) and `appInventory: true`. The
           * card stays lit if EITHER probe is true; the screen behind it
           * struck-out whichever tab its own probe says no to, so neither
           * flag has to speak for the other.
           */
          supportedBy: device =>
            supportsAppInstallAlerts(device) || supportsAppInventory(device),
        },
        {
          id: 'message-alerts',
          title: t('messageMonitoring.actionTitle'),
          description: t('messageMonitoring.actionDescription'),
          icon: 'message',
          feature: 'App Review Reminders',
          // Android only — the notification-listener channel iOS has no
          // equivalent of. `supportsMessageMonitoring` answers false everywhere
          // else, so the struck-out row says "not available on this device"
          // rather than offering a feed that can never fill.
          supportedBy: supportsMessageMonitoring,
        },
      ],
    },
  ];
}

/**
 * Whether ANY of a child's devices can do what the action opens.
 *
 * The child hub draws the same grid as one device's, and a person is the union
 * of their machines: a card is lit when at least one of them can carry it, and
 * struck out only when none can. A child with no device yet gets an empty
 * union, which reads as "nothing here can do this" — correct, and the screen
 * says so above the grid rather than leaving fourteen struck-out cards.
 */
export function isActionSupportedByAnyDevice(
  action: DeviceAction,
  devices: readonly DeviceSupportFacts[],
): boolean {
  return devices.some(device => isActionSupported(action, device));
}

/**
 * The child-hub twin of `getVisibleActionSections`.
 *
 * Same sections, same order, same copy — only the support question changes
 * from "can this machine" to "can any of theirs".
 */
export function getVisibleActionSectionsForDevices(
  t: TranslateFn,
  devices: readonly DeviceSupportFacts[],
  showUnsupported: boolean,
  canUsePremiumControls = true,
): Array<{ title: string; subtitle: string; actions: DeviceAction[] }> {
  const sections = getActionSections(t, canUsePremiumControls);
  if (showUnsupported) {
    return sections;
  }
  return sections
    .map(section => ({
      ...section,
      actions: section.actions.filter(action =>
        isActionSupportedByAnyDevice(action, devices),
      ),
    }))
    .filter(section => section.actions.length > 0);
}

/**
 * Whether this device's control centre opens showing every feature.
 *
 * The struck-out card is the right default nearly everywhere and was built
 * deliberately: "Not available on iPhone" on the Tamper Alerts row teaches a
 * parent something about their phone, while a row that silently vanished reads
 * as a feature KidGate lost. `hidesUnsupportedControls` carries the one case
 * where that inverts — `@kidgate/core/domain/deviceSurface` holds the argument,
 * and holds it there because `apps/dashboard` reads the same document.
 *
 * It is only the starting position now: the switch in the control centre header
 * lets a parent flip either way, per visit.
 */
export function defaultShowsAllControls(device: DeviceSupportFacts): boolean {
  return !hidesUnsupportedControls(device);
}

/**
 * The sections a parent should actually see for this device.
 *
 * `showUnsupported` is the header switch, seeded from `defaultShowsAllControls`.
 * True is `getActionSections` unchanged; false keeps only what this device can
 * actually do.
 *
 * A section left with no actions is dropped rather than rendered as a heading
 * over nothing.
 */
export function getVisibleActionSections(
  t: TranslateFn,
  device: DeviceSupportFacts,
  showUnsupported: boolean,
  canUsePremiumControls = true,
): Array<{ title: string; subtitle: string; actions: DeviceAction[] }> {
  const sections = getActionSections(t, canUsePremiumControls);
  if (showUnsupported) {
    return sections;
  }
  return sections
    .map(section => ({
      ...section,
      actions: section.actions.filter(action => isActionSupported(action, device)),
    }))
    .filter(section => section.actions.length > 0);
}
