import { DEFAULT_WEB_FILTER_CATEGORIES, type WebFilterCategory } from './webActivity';
import type { UsageAppBreakdown, UsageTimeline } from './usageDay';

export interface DeviceLocation {
  latitude: number;
  longitude: number;
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
  screenTimeAuthorized?: boolean;
  appBlockingEnabled: boolean;
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
  blockedAppsConfigured: false,
  blockedAppCount: 0,
  blockedCategoryCount: 0,
  blockedAppPreview: [],
  minutesUsedToday: 0,
  usageDate: null,
  dailyLimitExceeded: false,
};
