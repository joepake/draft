import { DEFAULT_WEB_FILTER_CATEGORIES, type WebFilterCategory } from './webActivity';
import type { UsageAppBreakdown, UsageTimeline } from './usageDay';

export interface DeviceLocation {
  latitude: number;
  longitude: number;
  /**
   * Horizontal accuracy in metres, as the platform reported it — Android's
   * `Location.accuracy`, iOS's `horizontalAccuracy`. Optional because a fix
   * can arrive without one and because devices on older builds never sent it.
   *
   * Absent means unknown, never "exact". Place presence treats a fix it
   * cannot trust as unknown rather than guessing (`functions/lib/placeAlerts.js`).
   */
  accuracy?: number | null;
  updatedAt: string;
  placeName?: string | null;
  address?: string | null;
  addressDetail?: 'basic' | 'detailed' | null;
}

export interface ScheduleWindow {
  start: string;
  end: string;
  /**
   * Days the window *starts* on, 0 = Sunday … 6 = Saturday.
   *
   * Absent (or all seven) means every day, which is what every window written
   * before this field existed means — so an old schedule keeps behaving
   * exactly as it did.
   *
   * "Starts on" matters for an overnight window: `22:00–07:00` on Monday runs
   * Monday night into Tuesday morning, it does not also block Monday
   * 00:00–07:00. Same rule as iOS Downtime, and the only reading that lets a
   * parent set a school-night curfew without a Saturday-morning surprise.
   */
  days?: number[];
  /**
   * What this window is *for* — "School", "Homework", "Bedtime".
   *
   * Display only: native enforcement never reads it, and it is absent on
   * every window written before presets existed. A schedule of three
   * identical-looking time ranges is one a parent stops being able to reason
   * about, which is the whole reason it exists.
   */
  label?: string;
}

/** Longest label the editor accepts, and what a stale document is trimmed to. */
export const SCHEDULE_LABEL_MAX_LENGTH = 24;

/** 0 = Sunday … 6 = Saturday, matching `Date.prototype.getDay`. */
export const ALL_SCHEDULE_DAYS = [0, 1, 2, 3, 4, 5, 6];

export interface BlockedAppPreviewItem {
  kind: 'app' | 'category' | 'website';
  label: string;
}

/**
 * A per-app daily cap, on top of the device-wide `dailyLimitMinutes`.
 *
 * `id` is what native enforcement matches on: the package name on Android,
 * and a base64 `ApplicationToken` on iOS (Apple never exposes bundle ids to
 * another device). It is opaque to the parent app — only `label` is shown.
 *
 * Which apps exist can only be answered on the child device: Apple's
 * FamilyActivityPicker and Android's launcher list both live there. So the
 * child picks the apps once behind the Parent PIN, and the parent edits
 * `minutes` remotely from then on.
 */
export interface AppLimit {
  id: string;
  label: string;
  minutes: number;
}

/**
 * Minutes spent in a limited app today.
 *
 * Takes today's breakdown rather than reading it off the limit: the child
 * device already syncs per-app usage for the reports screen, and a second
 * copy inside a parent-owned field would need the child to write a control
 * the rules deliberately keep parent-only.
 *
 * The breakdown lives on `usageDays/{date}.topApps` — `reportChildUsage`
 * never writes it onto the device document — so callers get it from
 * `useTodayTopApps`, not from `controls`.
 */

/**
 * Apple caps events per DeviceActivity activity at roughly 20, and
 * `configureAppLimits` spends one event per limited app inside the single
 * `.appLimits` activity — so 20 is a platform ceiling, not a product choice.
 * Going past it makes `startMonitoring` throw and silently stops enforcing
 * *every* per-app cap on iOS, not just the ones past the line.
 */
export const MAX_APP_LIMITS = 20;
export const APP_LIMIT_MIN_MINUTES = 5;
export const APP_LIMIT_MAX_MINUTES = 480;

/**
 * Most package names `approvedPackages` may hold.
 *
 * The list is parent-supplied and lands in every window-state callback on the
 * child device, so it is capped at the server (`functions/http/controls.js`)
 * rather than trusted as typed. Two hundred is far past what a family
 * approves in a year and small enough that the document every parent screen
 * reads does not grow by it.
 */
export const MAX_APPROVED_PACKAGES = 200;

export interface DeviceControls {
  dailyLimitMinutes: number | null;
  /**
   * Per-app caps. Enforced independently of `appBlockingEnabled`: "30 minutes
   * of TikTok" is a different decision from "no TikTok", and turning the
   * blocklist off is not a request to drop the time limits.
   */
  appLimits?: AppLimit[];
  scheduleEnabled: boolean;
  scheduleWindows: ScheduleWindow[];
  locationSharingEnabled: boolean;
  webFilterEnabled: boolean;
  /**
   * Categories the filter refuses. Empty means "the filter is on but nothing
   * is selected" — a real state a parent can reach, and a different one from
   * `webFilterEnabled: false`, so it is stored rather than inferred.
   */
  webFilterCategories?: WebFilterCategory[];
  /** Always reachable, whatever a category or allow-only mode would say. */
  webFilterAllowList?: string[];
  /** Always refused. Android only — iOS has no arbitrary deny list. */
  webFilterBlockList?: string[];
  /** Allow-list-only browsing: everything else is refused. */
  webFilterAllowListOnly?: boolean;
  /**
   * Force the search engines' safe modes — Google SafeSearch, YouTube
   * Restricted Mode, Bing strict, DuckDuckGo safe — by answering the child's
   * lookups of those hosts with the engines' own enforcement addresses
   * (`@kidgate/core/domain/safeSearch`). PARENT-set, a child rule fanned out
   * like `webFilterEnabled`, and it rides the same tunnel: off whenever the
   * web filter is off. Gated 2026-09-02 in `docs/FEASIBILITY.md`.
   *
   * **Absent is off**, so no device that predates the field begins
   * rewriting answers after an update.
   */
  safeSearchEnabled?: boolean;
  /**
   * Whether the device records which videos the child watched
   * (`videoHistory`). PARENT-set, a child rule fanned out like
   * `webFilterEnabled`. On the browser extension it needs no OS grant; on the
   * Android app it reads the media session behind the notification-listener
   * consent the message monitor already holds, so switching it on before that
   * grant is a no-op until the child gives it. **Absent is off**, so no device
   * that predates the field starts reporting watched videos after an update.
   */
  videoHistoryEnabled?: boolean;
  /**
   * Where the child's shared daily budget stands, stamped by
   * `reportChildUsage` onto every assigned device whenever the child has
   * `rules.dailyLimitMinutes` set.
   *
   * **This field is what parent screens read; it is not what enforces.** The
   * same call rewrites each device's `dailyLimitMinutes` to that device's
   * share of what the child has left, so the agents enforce the budget
   * through the field they always locked on and this one exists to explain
   * the number rather than to be obeyed. An agent reading `childBudget` to
   * decide a lock would be deciding it twice.
   *
   * `usedMinutes` is the device-minutes sum for `date` across the child's
   * devices; overlap between two screens used at once counts twice, which the
   * enforcement wave will revisit (`screenOnLowMinutes`).
   */
  childBudget?: {
    date: string;
    usedMinutes: number;
    limitMinutes: number;
  };
  screenTimeAuthorized?: boolean;
  appBlockingEnabled: boolean;
  /**
   * Whether message-content scanning is switched on — decided by the PARENT,
   * routed through `updateDeviceControls` exactly like `appBlockingEnabled`.
   * The child device has no editor for this field (`docs/DATA_MODEL.md`'s
   * "who configures" question landed on the parent for the same reason app
   * blocking did: an on/off a child could flip is not a control).
   *
   * Independent of the Android OS consent behind it
   * (`Device.messageMonitoring.incoming.granted`, `@kidgate/schema/messageMonitoringState`).
   * Setting this true before the child has granted notification access is a
   * no-op on the device until they do — native only ever reads the consent it
   * actually holds. Two fields, two questions, same split as scheduleEnabled
   * versus schedule windows.
   */
  messageMonitoringEnabled: boolean;
  /** Same shape, gated on `Device.messageMonitoring.outgoing.granted` instead. */
  messageMonitoringOutgoingEnabled: boolean;
  /**
   * Whether the device reports a call with an unnamed party inside
   * `callAlertWindows`. Parent-set, off until someone turns it on.
   *
   * **The switch alone does not start it.** Call reporting is additionally
   * gated on the family's `callAlertConsent` (`@kidgate/schema/callAlertConsent`),
   * which is a recorded consent rather than a control, and on the child having
   * granted notification access to the call listener. Three separate gates, on
   * purpose — `@kidgate/core/domain/callAlert.shouldRaiseCallAlert` is the one
   * place they are read together.
   */
  callAlertsEnabled: boolean;
  /**
   * The hours a call is worth telling a parent about — a `ScheduleWindow[]`,
   * the same shape and the same overnight rule as `scheduleWindows`.
   *
   * Its own field rather than a re-use of the schedule: those windows say when
   * the device is *blocked*, and a family whose curfew is school hours would
   * otherwise be alerted about calls at 10am and told nothing about 3am. They
   * share a default (`DEFAULT_SCHEDULE_WINDOWS`, 22:00–07:00) because that is
   * what "night" already meant in this product, not because they are the same
   * setting.
   *
   * An empty list means the feature can never fire, and the parent screen says
   * so rather than showing an armed switch over a window that does not exist.
   */
  callAlertWindows: ScheduleWindow[];
  /**
   * Whether the device scans what the child **searches for** — a third switch,
   * beside the two message ones, and off until a parent turns it on.
   *
   * Its own field rather than a re-use of `messageMonitoringEnabled`, because
   * they are not the same consent: a search is not a message, nobody sent it
   * and nobody received it, and a parent who agreed to be told about messages
   * has not agreed to be told what their child looked up. Same reason the
   * incoming and outgoing halves are two fields and two OS grants.
   *
   * **Absent is off**, so no device that predates this begins reporting
   * searches after an update.
   *
   * Read by `apps/extension`, where a browser sees the committed URL — the one
   * place the query is legible (`@kidgate/core/domain/searchQuery` sets out why
   * the DNS tunnel and the macOS provider cannot) — and by Android's typing
   * monitor through `childControlsEnforcement`, whose route is a text field
   * rather than a URL and is gated on two unrun checks (`apps/mobile/CLAUDE.md`).
   *
   * Written by `MessageAlertsScreen`'s third switch and the dashboard's
   * "What's on" row, both through `updateDeviceControls`: it is a
   * `PARENT_CONTROL_KEYS` entry, so a child device cannot flip it.
   */
  searchMonitoringEnabled?: boolean;
  /**
   * Which languages' keyword packs the device scans against, chosen by the
   * PARENT, at most `MESSAGE_KEYWORD_LANGUAGE_MAX`. Absent means "the device's
   * own language" — resolved by
   * `@kidgate/core/domain/messageKeywordLanguages`, which also explains why
   * scanning all fourteen is not the default: measured, it flagged 16 of 45
   * ordinary messages, because `rot` is German for "red" and English algospeak
   * for decay, and `ana` and `mia` are Spanish and Italian names.
   */
  messageKeywordLanguages?: readonly string[];
  /**
   * Whether the on-device scan also fires on the `profanity` category —
   * PARENT-set, same split as `messageMonitoringEnabled`. The device's own
   * severity floor defaults to medium (`MessageKeywordPolicy.minSeverityDefault`,
   * profanity is `low`), because the first thing this feature ships must not be
   * a stream of alerts about ordinary swearing.
   *
   * Absent means "leave the floor at whatever the server default or a prior
   * local override says" — this field only ever tightens or loosens it
   * explicitly. `true` lowers the on-device floor to include `profanity`;
   * `false` pins it back to medium. Applied through
   * `ControlsService.setMessageMonitoringMinSeverity`
   * (`services/native/controls.ts`), which was built and bridged
   * (`KidGateControlsModule.setMessageMonitoringMinSeverity`,
   * `KidGateMessageListenerService.setMinSeverity`) before any control field or
   * parent toggle existed to drive it — this is that missing wire, not new
   * native surface. Android only, like the rest of message-content monitoring.
   */
  messageProfanityEnabled?: boolean;
  /**
   * App install quarantine — PARENT-set, `PARENT_CONTROL_KEYS`, default off.
   *
   * While on, an app installed **after** `appInstallApprovalSinceMs` and not
   * listed in `approvedPackages` cannot be opened on the child device. The
   * device decides at launch time from the OS's own install timestamp
   * (`PackageManager.firstInstallTime` on Android), so nothing here depends
   * on the install having been observed live — a package installed while
   * KidGate's process was dead is still caught the first time it opens.
   * `docs/FEASIBILITY.md`, "App install quarantine".
   *
   * Its own switch rather than a mode of `appBlockingEnabled`: that one is
   * gated on the child having picked something (`blockedAppsConfigured`), and
   * a family that never opened the picker must still get this.
   *
   * On iOS there is no per-app answer (no `ApplicationToken` from a bundle
   * id), so the same switch means "hide the App Store" —
   * `ManagedSettingsStore.application.denyAppInstallation`. The parent screen
   * says so at the switch.
   *
   * **Absent is off**, so no device that predates this begins refusing
   * launches after an update.
   */
  appInstallApprovalEnabled?: boolean;
  /**
   * Epoch ms at which the quarantine was switched on, **stamped by
   * `updateDeviceControls`** from the server clock — a client never sends it.
   * Cleared to `null` when the switch goes off, so switching on again starts
   * a fresh line: an app installed during the off period is not retroactively
   * quarantined. Null or absent while off.
   */
  appInstallApprovalSinceMs?: number | null;
  /**
   * Package names a parent has approved, so they open despite being installed
   * after `appInstallApprovalSinceMs`. Written by the parent through
   * `updateDeviceControls`, which caps it at `MAX_APPROVED_PACKAGES`: a
   * client-supplied list that every accessibility callback reads.
   *
   * "Deny" is not a state — a package that is not here is blocked, and a
   * parent who declines simply leaves it out.
   */
  approvedPackages?: string[];
  blockedAppsConfigured: boolean;
  blockedAppCount: number;
  blockedCategoryCount: number;
  blockedAppPreview?: BlockedAppPreviewItem[];
  minutesUsedToday?: number;
  usageDate?: string | null;
  dailyLimitExceeded?: boolean;
  /**
   * When `minutesUsedToday` last arrived, ISO, server-stamped by
   * `reportChildUsage`.
   *
   * The number beside it is **not live**: `shouldReportUsage` reports only when
   * the minute count moves, so a device nobody is touching stops stamping this
   * and the total beside it stays honestly still. During use the gap is under a
   * minute (`MIN_UPLOAD_DELTA_MINUTES`), which is small enough that a parent
   * and the child's own screen agree — and this field is what says so, rather
   * than leaving them to guess whether a number that has not moved is fresh or
   * from an hour ago.
   */
  usageReportedAt?: string | null;
  /**
   * Extra minutes from an approved time request, valid only for the local
   * day of `bonusGrantedAtMs` (see utils/screenTime.ts getActiveBonusMinutes).
   * Written exclusively by the resolveTimeRequest Cloud Function.
   */
  bonusMinutesToday?: number;
  bonusGrantedAtMs?: number | null;
  /**
   * Child-to-server only: the breakdown the child device hands to
   * `reportChildUsage`, which stores it on `usageDays/{date}` and never back
   * onto this document. A parent-side `controls` object therefore never has
   * it — read today's apps with `useTodayTopApps` instead.
   */
  topApps?: UsageAppBreakdown[];
  /**
   * Child-to-server only, and it travels exactly as `topApps` does: handed to
   * `reportChildUsage`, stored on `usageDays/{date}`, never written back here.
   *
   * It is 1440 characters, which is why it must not land on the device
   * document: that one is read by every parent screen and carried in the
   * `onDoc` listener every child device holds open. `UsageDay` is fetched when
   * a parent opens a day, which is the only time this is worth its size.
   */
  timeline?: UsageTimeline;
  /**
   * Child-to-server only, third of the three that ride a usage report onto
   * `usageDays/{date}` — `UsageDay.idleMinutes` documents what it means.
   *
   * On the device document it would be actively misleading rather than merely
   * large: every parent screen reads `controls.minutesUsedToday` from there,
   * and a second minute count beside it with no day attached is two totals for
   * one device again.
   */
  idleMinutes?: number;

  /**
   * Refused web lookups this device has seen **today**, on its own clock.
   *
   * Child-to-server only, and the two counts below it are the free tier's
   * whole visible answer to what happened (`docs/PRICING.md` §4). They ride a
   * usage report because that is the only request a free family still makes:
   * `logChildWebActivity` and `logChildPackageActivity` are both premium-gated,
   * so the events themselves never reach the server for the families that need
   * these numbers most.
   *
   * `reportChildUsage` folds them into a seven-day ring
   * (`Device.weekCounterBuckets`) and publishes the sum as
   * `Device.weekCounters`. Neither is stored on `controls`.
   *
   * **Send it on every report once the device can count at all, zero
   * included.** Absent means "this platform does not observe that" — an iPhone
   * runs no filter — and a field that appeared only on days with a non-zero
   * count would make the summary flip between having an answer and having
   * none.
   */
  blockedSitesToday?: number;

  /**
   * Apps first seen on this device today, on its own clock. Same transport,
   * same rule, same fold as `blockedSitesToday`.
   *
   * Absent on every surface that cannot see an installation — a browser
   * extension and an iPhone. Zero from those would be the claim that none
   * happened. A television **can**: it has no install receiver, but
   * `PackageInfo.firstInstallTime` is on every launchable package, and a count
   * of the ones installed since local midnight is the same number a receiver
   * would have reached — the quarantine already trusts that clock.
   *
   * A desktop **does**, by a third route: `appscan::installed_apps` has no
   * install date to read, so the agent keeps a tally of what each snapshot diff
   * found new. That undercounts by design — an install while the agent was dead
   * lands in the next baseline instead of the count — which is the same
   * direction `usageSource: 'agent'` is already wrong in, and never an
   * invention.
   */
  newAppsToday?: number;
}

export const DEFAULT_SCHEDULE_WINDOWS: ScheduleWindow[] = [
  { start: '22:00', end: '07:00' },
];

export const DEFAULT_DEVICE_CONTROLS: DeviceControls = {
  dailyLimitMinutes: null,
  appLimits: [],
  scheduleEnabled: false,
  scheduleWindows: DEFAULT_SCHEDULE_WINDOWS,
  locationSharingEnabled: false,
  webFilterEnabled: false,
  webFilterCategories: DEFAULT_WEB_FILTER_CATEGORIES,
  webFilterAllowList: [],
  webFilterBlockList: [],
  webFilterAllowListOnly: false,
  screenTimeAuthorized: false,
  appBlockingEnabled: false,
  appInstallApprovalEnabled: false,
  appInstallApprovalSinceMs: null,
  approvedPackages: [],
  messageMonitoringEnabled: false,
  messageMonitoringOutgoingEnabled: false,
  callAlertsEnabled: false,
  callAlertWindows: DEFAULT_SCHEDULE_WINDOWS,
  blockedAppsConfigured: false,
  blockedAppCount: 0,
  blockedCategoryCount: 0,
  blockedAppPreview: [],
  minutesUsedToday: 0,
  usageDate: null,
  dailyLimitExceeded: false,
};
