/**
 * What a device can actually do, probed on the device and written to its
 * device document. The parent UI renders from this document.
 *
 * The rule this replaces: branching on `Platform.OS`. A MacBook and an iMac are
 * both `macos` but differ in camera, battery and location; a tablet and a phone
 * are both `ios` but differ in what a parent expects to see. Platform is one
 * field here, not the decision.
 */

import type { IsoDate, IsoDateTime, Minutes } from './primitives';

/**
 * `chromeos` is the browser-extension child surface (`apps/extension`) running
 * on a Chromebook. The Android APK inside ARC still reports `android` — two
 * rows for one physical Chromebook is the honest shape, because the two
 * surfaces enforce different things and either can be removed without the
 * other. An extension installed on a Mac or PC reports `macos` / `windows`
 * with `webFilter: 'extension'`; the capability set, not the platform, is what
 * says it is only a browser.
 */
export type DevicePlatform =
  'ios' | 'android' | 'androidtv' | 'chromeos' | 'macos' | 'windows';

export type DeviceFormFactor = 'phone' | 'tablet' | 'laptop' | 'desktop' | 'tv';

/**
 * How hard app blocking actually is.
 *
 * `strong`      — the OS enforces it and the child cannot lift it. iOS
 *                 ManagedSettings, Android with device admin held.
 * `best-effort` — a userspace process watches and intervenes. It can be killed,
 *                 and a determined teenager will kill it. macOS via NSWorkspace,
 *                 Windows without a service, Android with accessibility revoked.
 *
 * This is surfaced to parents, not hidden. A product that presents best-effort
 * blocking as if it were enforced is lying to the person relying on it.
 */
export type AppBlockStrength = false | 'strong' | 'best-effort';

/**
 * Where web filtering intercepts.
 *
 * `vpn`           — on-device VPN, catches all traffic, breaks some apps
 * `contentFilter` — iOS/macOS NEFilter, needs a supervised or managed profile
 * `extension`     — browser extension, only that browser, trivially disabled
 * `dns`           — private DNS, whole device, no per-site granularity
 */
export type WebFilterMechanism = false | 'vpn' | 'contentFilter' | 'extension' | 'dns';

export type LocationPrecision = false | 'gps' | 'coarse';

/**
 * A consent a person at the device gives, which the device cannot give itself.
 *
 * Two today, and both are safety features rather than enforcement: a refused
 * camera costs the photo on an SOS and on a check-in, a refused location costs
 * the position on both. Neither stops KidGate holding a rule, which is why
 * `pendingConsents` does not turn a device's protection badge amber — see
 * `getProtectionSummaryKeys`.
 */
export type DeviceConsent = 'camera' | 'location';

/**
 * Who counted the minutes.
 *
 * `os`    — the platform tallied foreground time whether or not this app was
 *           running. iOS DeviceActivity, Android UsageStatsManager.
 * `agent` — this product's own process tallied it by watching which app was in
 *           front. macOS, where no public API discloses Screen Time data at all.
 *
 * The difference is not academic and it is not an implementation detail: an
 * agent-measured total is blind to every minute the agent was not running, so
 * a child who quits it reads as a child who stopped using the Mac. A parent
 * comparing a phone's 4h against a laptop's 20m is entitled to know that the
 * two numbers were not produced the same way.
 */
export type UsageSource = 'os' | 'agent';

export interface DeviceCapabilities {
  platform: DevicePlatform;
  formFactor: DeviceFormFactor;

  /** Usage statistics are readable at all, by any means. */
  screenTime: boolean;
  /** How `screenTime` is obtained. Meaningless — and ignored — when it is false. */
  usageSource: UsageSource;
  /**
   * The device can say **when** in the day it was used, not only how much.
   *
   * False on iOS and it is not an omission to be filled in later: the only
   * channel Screen Time offers is a cumulative threshold — "thirty minutes have
   * now been spent", never which thirty — capped at twenty of them a day, and
   * the extension that holds the finer data may render and never write.
   * `docs/FEASIBILITY.md` has the measurements.
   *
   * A parent UI reads this to choose between drawing a timeline and saying the
   * device cannot report one. It must not infer either from an absent
   * `UsageDay.timeline`, which is also what a device that has not reported yet
   * looks like.
   */
  usageTimeline: boolean;
  appBlock: AppBlockStrength;
  webFilter: WebFilterMechanism;
  /**
   * Why `webFilter` is false **when a person could change that**, and absent
   * otherwise.
   *
   * `webFilter: false` has two very different causes and a parent's screen was
   * reading them as one. A Mac that cannot filter at all and a Mac whose filter
   * is one switch away both published `false`, so both rendered as "not
   * supported on this device" — a sentence about the product, for a state the
   * person standing at the machine could fix in ten seconds.
   *
   * - `awaitingApproval` — the extension is installed and macOS is waiting for
   *   someone to approve it in System Settings.
   * - `configurationDisabled` — approved, and *Filter Network Content* has been
   *   switched off for this app.
   *
   * **Absent means there is nothing to tell them**, not that the filter works:
   * read `webFilter` for that. A build carrying no extension sets nothing here,
   * because "install a different build" is not an instruction to put in front
   * of a parent — and neither is a provider the agent's own watchdog is already
   * tearing down.
   */
  webFilterBlocker?: 'awaitingApproval' | 'configurationDisabled';
  schedule: boolean;
  dailyLimit: boolean;
  /** Can present a full-screen lock the child cannot dismiss. */
  lock: boolean;
  appInstallAlerts: boolean;
  /**
   * The device can watch message notifications and raise an alert when a
   * concerning keyword appears (`@kidgate/core/domain/messageKeywords`).
   *
   * **Android only, and it is a platform fact rather than a permission the
   * parent has yet to grant.** The channel is a `NotificationListenerService`,
   * which iOS has no equivalent of — an iPhone cannot read another app's
   * notification content at all (`docs/FEASIBILITY.md`, "Message-content
   * monitoring"). So an iPhone publishes `false` and the parent screen says the
   * device cannot do it, the same honest sentence a Mac gives for a filter it
   * lacks. A TV reports `false` too. A browser extension reports `false` for
   * *messages* and `true` for `appInstallAlerts`, which is not a contradiction:
   * it sees no chat app, and it does see the other extensions beside it.
   *
   * `true` means the mechanism exists on the platform, not that the child has
   * granted notification access yet — that grant, like accessibility, is a
   * permission-checklist row (`protectionStatus`), not a capability. **Absent
   * is unknown, not false**, per the rule the rest of this probe follows.
   */
  messageMonitoring?: boolean;
  /**
   * The device can see what the child **searched for**.
   *
   * A separate flag from `messageMonitoring` and not derivable from it in
   * either direction, because the two are read by different mechanisms with
   * different reach. `apps/extension` publishes `true` and no message flag at
   * all: a browser holds the committed URL, which is where a query is legible,
   * and sees no chat app. Android publishes both, from one accessibility
   * service reading typed text. A Mac agent publishes neither — its filter is a
   * network layer and the query is inside TLS.
   *
   * `true` means the mechanism exists on the platform, not that the parent has
   * switched it on (`DeviceControls.searchMonitoringEnabled`) nor that the
   * child has granted anything. **Absent is unknown, not false.**
   */
  searchMonitoring?: boolean;
  /**
   * The device can force the search engines' safe modes
   * (`DeviceControls.safeSearchEnabled`): a DNS tunnel that rewrites answers,
   * or a browser extension that rewrites the search URL. The Mac's content
   * filter can do neither and publishes nothing, so the platform list in
   * `@kidgate/core/domain/safeSearchSupport` answers no for it.
   * **Absent is unknown, not false.**
   */
  safeSearch?: boolean;
  /**
   * The device can report which videos the child watched
   * (`videoHistory`): a browser holding the YouTube URL, or the Android agent
   * reading the media session. The Mac/Windows filters see a domain, not a
   * video, and iOS neither — `@kidgate/core/domain/videoHistorySupport`
   * answers no for them. **Absent is unknown, not false.**
   */
  videoHistory?: boolean;
  /**
   * Why the app-side video reader is not delivering, when a person could not
   * fix it: `layoutChanged` is the Android Shorts reader's watchdog finding a
   * Shorts page on screen for a minute with no title readable — YouTube
   * changed its layout under `KidGateShortsReader`. Absent means healthy or
   * unknown. Same shape and reason as `webFilterBlocker`: the card must say
   * "not reading Shorts right now" rather than show a list that stopped.
   */
  videoHistoryBlocker?: 'layoutChanged';
  /**
   * The device can enumerate what is **already** installed, not only what
   * changes.
   *
   * A separate flag from `appInstallAlerts` and not derivable from it, in both
   * directions. A browser extension reports **both**, and what it enumerates is
   * the other *extensions* in that browser rather than apps on the machine —
   * `chrome.management`, ids namespaced by `browserExtensionId` in
   * `./appInventory`. An iPhone reports neither
   * either — but for a reason no future build fixes: FamilyControls returns
   * opaque `ApplicationToken`s and enumerates nothing (`docs/FEASIBILITY.md`,
   * the cliff list). The android/mac/windows agents report both today, and the
   * pair could still separate: a device whose scan is refused at runtime keeps
   * its install feed and loses its inventory.
   *
   * **Absent is unknown, not false**, per the rule the rest of this probe
   * follows — every device shipped before the field existed publishes nothing,
   * and `@kidgate/core/domain/appInventorySupport` answers from the platform
   * for those.
   */
  appInventory?: boolean;
  /**
   * The device can say **when in the day** it browsed — page loads per hour,
   * not minutes.
   *
   * Deliberately not `usageTimeline`, and the distinction is the whole point of
   * having a second flag. That one is screen time: a 1440-slot band built by
   * sampling which app was in front, and a browser extension samples nothing.
   * This one counts navigations into 24 buckets, which is a different
   * measurement with a different meaning — a tab left open all afternoon is one
   * bucket entry, not four hours of it.
   *
   * True only where a surface timestamps each visit as it happens. The macOS
   * content filter and the Android tunnel report cumulative per-domain counters
   * (`webHistoryDelta` over `ContentFilterDomainRow`), which carry no per-visit
   * time and never will without a change on the native side; they publish
   * false, and the parent draws nothing rather than an empty chart.
   */
  webActivityHours: boolean;

  location: LocationPrecision;
  camera: boolean;
  /**
   * OS consents this device is still waiting for, that a person standing at it
   * could give — and that no permission checklist covers.
   *
   * The same hole `webFilterBlocker` was cut to fill, one row further down.
   * `camera: false` and `location: false` are *capability* answers: a parent
   * screen reads them and quietly stops offering the feature, which is right
   * for a Mac mini with no camera and wrong for a Mac whose camera was never
   * asked about. From the parent's side those two are indistinguishable, so an
   * SOS that will arrive without a photo looks exactly like a machine that
   * cannot take one.
   *
   * Desktops are the platforms that need it: `getProtectionSummaryKeys` skips
   * their permission checklist entirely (they have no OS grants to chase for
   * enforcement), so before this there was no channel at all between a refused
   * camera on a child's Mac and the parent holding the phone. Phones keep
   * reporting through `Device.protectionStatus`; a platform may populate both,
   * and a device that has nothing outstanding leaves this absent.
   *
   * **Outstanding, not refused.** A consent nobody has been asked for yet and
   * one that was declined are both listed: to a parent they mean the same
   * thing — the photo will not come — and only the device knows which of the
   * two it is. What is never listed is a consent the machine cannot give: no
   * camera in the lid, no location service.
   */
  pendingConsents?: readonly DeviceConsent[];
  battery: boolean;
  sos: boolean;

  /**
   * Probe time. A capability set that predates an OS upgrade or a revoked
   * permission is stale — the parent UI should treat an old probe as unknown
   * rather than as a promise.
   */
  probedAt: IsoDateTime;
}

/**
 * Aggregate protection state, derived from capabilities plus what the parent
 * actually turned on. Lives here because both the mobile app and the dashboard
 * must agree on what "protected" means.
 */
export interface MonitoringStatus {
  monitoringActive: boolean;
  isLocked: boolean;
  scheduleActive: boolean;
  /**
   * Zero means **no limit configured**, not "blocked all day".
   *
   * The opposite of `SchedulePort.setDailyLimit`, where null clears the limit
   * and zero blocks the whole day. The asymmetry is not a good idea, it is the
   * shape the native bridges already report (`apps/mobile` reads exactly this
   * from Kotlin and Swift), and writing it down costs less than a migration
   * that makes two platforms disagree about what 0 meant. `dailyLimitExceeded`
   * is the field to branch on.
   */
  dailyLimitMinutes: Minutes;
  dailyLimitExceeded: boolean;
  minutesUsedToday: Minutes;
  /** Device-local day the counters belong to. Null when never reported. */
  usageDate: IsoDate | null;
}
