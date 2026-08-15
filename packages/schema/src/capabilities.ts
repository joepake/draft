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

export type DevicePlatform = 'ios' | 'android' | 'androidtv' | 'macos' | 'windows';

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
  schedule: boolean;
  dailyLimit: boolean;
  /** Can present a full-screen lock the child cannot dismiss. */
  lock: boolean;
  appInstallAlerts: boolean;

  location: LocationPrecision;
  camera: boolean;
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
