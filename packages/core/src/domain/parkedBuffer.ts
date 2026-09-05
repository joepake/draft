/**
 * What a parked device keeps, and when it is allowed to send it.
 *
 * A parked device enforces every rule it holds and reports nothing
 * (`docs/PRICING.md` §6). What it observes in the meantime is not thrown away:
 * it accumulates locally, and goes up when the family buys premium. That is
 * the "upgrade any time and the history resumes" half of the promise, and this
 * module is the rule behind it — the retention window, and the one condition
 * under which a drain may start.
 *
 * ## The promise is not thirty days for everything, and saying so was wrong
 *
 * §6 said the buffer is "30 days rolling", bounded by `usageRetentionCleanup`
 * deleting anything older on arrival. That is true of the *ceiling*, and it is
 * not what a device can actually deliver, because **the endpoints refuse older
 * data on their own terms**:
 *
 * | Reading  | Server window | Where                                            |
 * | -------- | ------------- | ------------------------------------------------ |
 * | usage    | ±1 day        | `isDateWithinServerWindow`, `packageActivity.js` |
 * | web      | ±7 days       | `DATE_WINDOW_MS`, `webActivity.js`               |
 * | video    | ±7 days       | `DATE_WINDOW_MS`, `videoActivity.js`             |
 * | location | none          | each fix carries its own timestamp               |
 *
 * Keeping thirty days of web history would mean buffering twenty-three days a
 * device can never upload — a promise that fails silently, on the tier that
 * has the least reason to trust us. So the buffer keeps what the server will
 * take, and no more; the numbers below are those windows, and the two mirrored
 * ones are pinned by the parity tests that already exist for them
 * (`webActivityWindowParity`).
 *
 * Widening any of them is a server decision first and a client change second.
 * `webActivity.js` records why seven and not thirty: `recordVisit` rewrites
 * the whole ledger per navigation, so a month of retention would be felt on
 * every page load.
 */

import { WEB_ACTIVITY_DATE_WINDOW_MS } from './webActivityWindow';

/**
 * The ceiling nothing may buffer past, whatever its endpoint allows.
 *
 * Thirty days, because `usageRetentionCleanup` deletes `usageDays`,
 * `webHistory`, `videoHistory` and `locationHistory` older than that on
 * arrival (`docs/DATA_RETENTION.md` §6). A device holding more is holding rows
 * that would be uploaded and then swept.
 */
export const PARKED_BUFFER_MAX_DAYS = 30;

/** Web and video: seven days, the window both endpoints already enforce. */
export const PARKED_WEB_BUFFER_DAYS = WEB_ACTIVITY_DATE_WINDOW_MS / 86_400_000;

/**
 * Usage: thirty days, and it needs a server change to be worth anything.
 *
 * `reportChildUsage` accepts a `usageDate` within a day of the server's, which
 * is right for a live report — a device claiming a day it cannot be on is
 * either broken or lying. Since 2026-09-04 a `backfill: true` request opens a
 * **separate, narrower** path to thirty days back: it writes the `usageDays`
 * document and nothing on `controls`, because `minutesUsedToday` and
 * `dailyLimitExceeded` are what every parent screen reads as *today* and a
 * fortnight-old day landing in them could lift a limit currently being
 * enforced.
 *
 * `canDrainUsage` still takes `backfillSupported` rather than assuming: an
 * agent may be talking to a deployment that predates that path, and buffering
 * a month it cannot deliver is a disk filling for nothing.
 */
export const PARKED_USAGE_BUFFER_DAYS = PARKED_BUFFER_MAX_DAYS;

/**
 * One day a parked device kept, as every platform's buffer hands it over.
 *
 * The same fields `reportChildUsage` takes, and deliberately **not** a
 * `usageDays` document: that shape is the server's, carries `updatedAt` and
 * `backfilled`, and a client inventing either would be claiming something only
 * the write can know. What travels is a reading.
 *
 * `topApps`, `timeline` and `idleMinutes` are each absent rather than empty on
 * a platform that cannot observe them. A buffered day is merged onto whatever
 * that date already holds — a device parked at noon may have reported the
 * morning — so an empty array here would erase a real one.
 */
export interface BufferedUsageDay {
  /** `YYYY-MM-DD` on the child's own clock, as the live report sends it. */
  date: string;
  minutes: number;
  topApps?: { packageName: string; label: string; minutes: number }[];
  timeline?: string;
  idleMinutes?: number;
}

export interface DrainCondition {
  /** `Device.monitoringState === 'parked'`. */
  parked: boolean;
  /** Whether the family currently has premium access. */
  premium: boolean;
}

/**
 * Whether a parked device's buffer may start going up.
 *
 * **Both conditions, and the second is the one that is easy to drop.** A
 * device that becomes the free tier's monitored one is no longer parked and
 * still must not backfill: otherwise a parent could walk the monitored slot
 * around five devices and drain every buffer for nothing, which is the paid
 * tier taken a device at a time. The seven-day swap cooldown
 * (`domain/deviceParking`) slows that down; this is what stops it.
 *
 * So: unparked **and** paying. A family that never buys keeps a buffer that is
 * eventually rolled off by the window above, and nothing is ever uploaded from
 * it — which is the correct outcome, not a leak.
 */
export function canDrainBuffer(condition: DrainCondition): boolean {
  return !condition.parked && condition.premium;
}

/**
 * The same question for usage, which has one extra condition.
 *
 * Kept apart because the answer differs today: the usage endpoint refuses any
 * day but yesterday and today, so a buffered fortnight is undeliverable
 * however the family pays. A caller passes what the server it is talking to
 * can do — `false` while the backfill path does not exist, so an agent buffers
 * nothing it cannot send rather than filling a disk for a year.
 */
export function canDrainUsage(
  condition: DrainCondition & { backfillSupported: boolean },
): boolean {
  return canDrainBuffer(condition) && condition.backfillSupported;
}

/**
 * Whether a buffered day is still worth keeping, on the child's local clock.
 *
 * Inclusive of both ends, and a future date is dropped: a device whose clock
 * jumped forward would otherwise hold a day the window can never pass, and
 * every drain would carry it again.
 */
export function isBufferedDayKeepable(
  dateKey: string,
  todayKey: string,
  windowDays: number,
): boolean {
  if (dateKey > todayKey) {
    return false;
  }
  const oldest = new Date(Date.parse(`${todayKey}T00:00:00Z`) - windowDays * 86_400_000)
    .toISOString()
    .slice(0, 10);
  return dateKey > oldest;
}

/**
 * Drop what has aged out of a keyed buffer, oldest first.
 *
 * Returns the keys to delete rather than the surviving set: a caller holds the
 * rows in a store it writes by key, and handing back everything to keep would
 * make trimming a rewrite of the whole buffer on every pass — which on the
 * browser extension is a write per navigation.
 */
export function expiredBufferDays(
  dateKeys: readonly string[],
  todayKey: string,
  windowDays: number,
): string[] {
  return dateKeys
    .filter(key => !isBufferedDayKeepable(key, todayKey, windowDays))
    .sort();
}
