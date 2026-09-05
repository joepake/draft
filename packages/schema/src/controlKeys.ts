import type { DeviceControls } from './deviceControls';

/**
 * Who is allowed to write which control field.
 *
 * This is a contract, not a routing detail: it mirrors the guards in
 * `firestore.rules` (`parentControlsUnchanged`, `usageCountersUnchanged`).
 * A field in the wrong list here means a client write that the rules reject —
 * or worse, one they accept from the wrong party.
 *
 * Remember that a child device signs in under the family owner's uid, so
 * "parent-only" cannot be enforced by uid alone. See `docs/DATA_MODEL.md`.
 */

/**
 * Screen-time counters, written only by the `reportChildUsage` Cloud Function.
 *
 * The child device used to write these straight to Firestore, so a modified
 * child app could report "0 minutes used" all day and both the daily-limit
 * badge and the parent's usage report would believe it. The function re-derives
 * the day from the server clock and stamps `usageDays` itself.
 */
export const USAGE_CONTROL_KEYS = [
  'minutesUsedToday',
  'usageDate',
  'dailyLimitExceeded',
  /*
   * Read-only to every client, including the device it describes. It is the
   * stamp that tells a parent how old `minutesUsedToday` is, so a client able
   * to write it could hold a stale total and keep re-dating it — the same
   * "0 minutes used all day" attack the counters above were taken away for,
   * wearing a fresh timestamp. Listed here so the fan-out in
   * `repositories/control` routes it to `reportChildUsage` (which ignores it
   * and stamps its own) instead of writing it to the device document.
   */
  'usageReportedAt',
] as const satisfies ReadonlyArray<keyof DeviceControls>;

export type UsageControlKey = (typeof USAGE_CONTROL_KEYS)[number];

export function isUsageControlKey(key: string): key is UsageControlKey {
  return (USAGE_CONTROL_KEYS as ReadonlyArray<string>).includes(key);
}

/**
 * Fields that ride along a usage report and land on `usageDays/{date}` — never
 * on the device document.
 *
 * They are declared on `DeviceControls` because that is the payload shape
 * `reportUsage` takes, and without this list the fan-out in `updateControls`
 * treats them as ordinary child-writable fields and copies them onto
 * `users/{uid}/childDevices/{id}`. `topApps` did exactly that, against its own
 * documented contract, and `timeline` is 1440 characters — on a document every
 * parent screen renders and every child device holds an `onDoc` listener open
 * against.
 */
export const REPORT_ONLY_CONTROL_KEYS = [
  'topApps',
  'timeline',
  'idleMinutes',
  /*
   * The free tier's two counters (`docs/PRICING.md` §4). They ride
   * `reportChildUsage`, which folds them into `weekCounterBuckets`; left off
   * this list the fan-out would write `controls.blockedSitesToday` straight
   * onto the device document — a number nothing reads, beside a fold nothing
   * fed.
   */
  'blockedSitesToday',
  'newAppsToday',
] as const satisfies ReadonlyArray<keyof DeviceControls>;

export type ReportOnlyControlKey = (typeof REPORT_ONLY_CONTROL_KEYS)[number];

export function isReportOnlyControlKey(key: string): key is ReportOnlyControlKey {
  return (REPORT_ONLY_CONTROL_KEYS as ReadonlyArray<string>).includes(key);
}

/** Fields a parent edits remotely, routed through `updateDeviceControls`. */
export const PARENT_CONTROL_KEYS = [
  'dailyLimitMinutes',
  // The child device picks *which* apps — only it can enumerate them — but the
  // minutes are edited remotely: a parent should not need the phone in hand to
  // move TikTok from 30 to 20.
  'appLimits',
  'scheduleEnabled',
  'scheduleWindows',
  'locationSharingEnabled',
  'webFilterEnabled',
  'webFilterCategories',
  'webFilterAllowList',
  'webFilterBlockList',
  'webFilterAllowListOnly',
  'appBlockingEnabled',
  'messageMonitoringEnabled',
  'messageMonitoringOutgoingEnabled',
  // The rest of the monitoring switches. Each is documented PARENT-set on
  // `DeviceControls`, and until they were listed here the fan-out in
  // `repositories/control` wrote them straight to the device document as if
  // the child owned them — so a modified child app could switch its own
  // search scanning off, which is the exact attack the list exists to stop.
  'searchMonitoringEnabled',
  'messageProfanityEnabled',
  'messageKeywordLanguages',
  // A child rule as well (`CHILD_RULE_KEYS`): routed to `updateChildRules`
  // for an assigned device, and here for one that has no child yet.
  'safeSearchEnabled',
  'videoHistoryEnabled',
  // App install quarantine. The switch and the approved list are the parent's;
  // `appInstallApprovalSinceMs` is listed so the fan-out routes it here rather
  // than writing it as a child field, and the server ignores any value sent
  // and stamps its own clock (`functions/http/controls.js`).
  'appInstallApprovalEnabled',
  'appInstallApprovalSinceMs',
  'approvedPackages',
] as const satisfies ReadonlyArray<keyof DeviceControls>;

export type ParentControlKey = (typeof PARENT_CONTROL_KEYS)[number];

export function isParentControlKey(key: string): key is ParentControlKey {
  return (PARENT_CONTROL_KEYS as ReadonlyArray<string>).includes(key);
}
