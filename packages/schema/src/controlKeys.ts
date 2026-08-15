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
] as const satisfies ReadonlyArray<keyof DeviceControls>;

export type ParentControlKey = (typeof PARENT_CONTROL_KEYS)[number];

export function isParentControlKey(key: string): key is ParentControlKey {
  return (PARENT_CONTROL_KEYS as ReadonlyArray<string>).includes(key);
}
