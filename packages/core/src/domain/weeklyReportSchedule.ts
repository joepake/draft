/**
 * When the weekly report is written, and when a parent is told about it.
 *
 * Two different moments, and keeping them apart is the whole point of this
 * module. The report is *data about a week*; the push is *a notification*. They
 * used to be one step — the job built the report and sent it in the same pass,
 * and stored it only after the send succeeded — which meant a family who had
 * muted the weekly notification had no stored report either. Their Reports tab
 * was empty forever, because a receipt for a push had been made to stand in for
 * the week's figures.
 *
 * So:
 *
 * - **Written** once the family's week has actually ended, on the clock of
 *   whichever parent is furthest east. That parent's Monday morning comes
 *   first, so anchoring there is what guarantees the report exists before
 *   *anyone* in the family is pushed about it, and before anyone opens the app
 *   looking for it.
 * - **Pushed** on Monday morning, on each parent's own clock, so nobody is woken
 *   at 03:00 because a co-parent lives eight hours east of them.
 *
 * The write used to run on Sunday **evening**, which reported a week that was
 * still running: everything a child did between 21:00 and midnight on Sunday —
 * prime screen time — fell outside the report that claimed to cover their week.
 * Waiting for local Monday is what makes "Monday to Sunday" true.
 *
 * **The write has no window, and that is deliberate.** It has a debt: the most
 * recently completed week, compared against the last one written. A window meant
 * one chance — a family the scan did not reach before its time budget lost the
 * week entirely, and the narrower the window the likelier that was. Asking
 * "which week does this family still owe?" instead means every fire picks up
 * whatever earlier fires missed, so a family in a timezone whose slot has long
 * passed is caught by the next one round. `completedWeekKey` is the whole gate;
 * `PUSH_HOUR_*` below is the only window left.
 *
 * Both halves are anchored on the family's own calendar rather than on UTC, and
 * that is not a detail. Day keys in `usageDays` are *device-local*, and the ISO
 * week key names a local week; deriving either from the server's UTC date puts
 * a family west of Greenwich a full day out, because their local Monday morning
 * is already Monday in UTC while an eastern family's is still Sunday. Every
 * caller therefore passes the offset and takes the keys from here.
 *
 * Both windows are stated here rather than in the Cloud Function because the
 * parent's phone renders a sentence about them ("the next report arrives Monday
 * morning"). A hand-copied hour in the app would be a promise the server had
 * stopped keeping, with nothing failing in between; `functions/lib/generated/`
 * takes this file verbatim instead.
 *
 * Clock-free like everything else in `domain/`: the caller passes the instant
 * and the reader's UTC offset, because "is it Monday morning there" is a
 * question about a timezone and the caller is the one holding it.
 */

import { isoWeekKey } from './familyReport';

/** Local hour the push goes out, inclusive — a weekday morning, never the night. */
export const PUSH_HOUR_FROM = 8;

/**
 * Local hour the push window closes, exclusive.
 *
 * One hour wide, which is what sets the push job's granularity: it has to fire
 * at least hourly or a timezone falls between two runs and is skipped for the
 * week. The write job has no window at all — it works from
 * `completedWeekKey` — so this is the only place a cron step is constrained.
 */
export const PUSH_HOUR_TO = 9;

/** ISO day number for Monday, as `Date#getUTCDay` reports it. */
const MONDAY = 1;

const MS_PER_MINUTE = 60_000;
const DAY_MS = 24 * 60 * 60 * 1000;

/** `nowMs` on a reader's wall clock, as a `Date` whose UTC fields are their local ones. */
function localDate(nowMs: number, utcOffsetMinutes: number): Date {
  return new Date(nowMs + utcOffsetMinutes * MS_PER_MINUTE);
}

/**
 * `YYYY-MM-DD` on the family's own calendar, `daysAgo` days before `nowMs`.
 *
 * The server's own UTC date is the wrong answer and quietly so: `usageDays` keys
 * are written in the *device's* local timezone, and a family in California runs
 * this at their local Monday 00:30, which is already Monday 08:30 in UTC. Keys
 * derived from that cover Tuesday-to-Monday instead of Monday-to-Sunday — seven
 * days, the right length, the wrong week, and no error anywhere.
 *
 * Noon anchoring before the subtraction is what keeps a day from being skipped
 * or repeated when a local clock shifts for daylight saving.
 */
export function localDayKey(
  nowMs: number,
  utcOffsetMinutes: number,
  daysAgo = 0,
): string {
  const local = localDate(nowMs, utcOffsetMinutes);
  local.setUTCHours(12, 0, 0, 0);
  local.setUTCDate(local.getUTCDate() - daysAgo);
  return local.toISOString().slice(0, 10);
}

/**
 * The most recently *completed* ISO week on the family's own calendar.
 *
 * The whole write gate: compare it against the last week written, and the
 * difference is what the family is owed. That makes catching up free — a fire
 * eight hours after a family's slot asks the same question and gets the same
 * answer, so nothing is lost by having missed the earlier one.
 *
 * Two shifts, both load-bearing. `isoWeekKey` reads UTC fields, so the offset is
 * added to make it read the family's local calendar instead — the same reason
 * `localDayKey` exists. Then a **whole week** is taken off, not a day: a day
 * gives the right answer on Monday and the wrong one from Tuesday onward, which
 * is precisely when a catch-up fire arrives. Deriving it from the server's clock
 * instead put two families on one fire into different weeks, since one had
 * crossed midnight UTC and the other had not.
 */
export function completedWeekKey(nowMs: number, utcOffsetMinutes: number): string {
  return isoWeekKey(nowMs + utcOffsetMinutes * MS_PER_MINUTE - 7 * DAY_MS);
}

/**
 * How many local days back the completed week's final Sunday is.
 *
 * 1 on Monday, 2 on Tuesday, 7 on Sunday. The report's date range is built from
 * this rather than from a fixed 1, so a catch-up write on Tuesday covers the
 * same Monday-to-Sunday the on-time write would have — the figures a parent sees
 * cannot depend on which fire happened to reach them.
 */
export function daysSinceWeekEnd(nowMs: number, utcOffsetMinutes: number): number {
  const day = localDate(nowMs, utcOffsetMinutes).getUTCDay();
  // `getUTCDay` is 0 for Sunday; ISO counts Monday as 1 through Sunday as 7,
  // which is also the number of days back to the previous Sunday.
  return day === 0 ? 7 : day;
}

/** Whether `nowMs` is inside this parent's Monday-morning push window. */
export function isReportPushTime(nowMs: number, utcOffsetMinutes: number): boolean {
  const local = localDate(nowMs, utcOffsetMinutes);
  if (local.getUTCDay() !== MONDAY) return false;
  const hour = local.getUTCHours();
  return hour >= PUSH_HOUR_FROM && hour < PUSH_HOUR_TO;
}

/**
 * The offset the family's report is written on: the furthest east of its parents.
 *
 * `Math.max`, not "the first one with an offset". The old rule picked whichever
 * device happened to sort first, which in a family spread across two timezones
 * could anchor the write *after* the eastern parent's Monday morning had already
 * passed — so that parent's push found no report and they got nothing at all
 * that week. The largest offset is the earliest local clock, so a report written
 * on it is ready before every parent in the family wakes up.
 *
 * Returns null when no parent device has ever reported an offset; the caller
 * decides what to assume, because a default belongs to a deployment rather than
 * to this rule.
 */
export function writeAnchorOffsetMinutes(
  offsets: readonly (number | null | undefined)[],
): number | null {
  const known = offsets.filter(
    (offset): offset is number => typeof offset === 'number' && Number.isFinite(offset),
  );
  return known.length > 0 ? Math.max(...known) : null;
}

/**
 * Midnight, local time, on the next Monday strictly after `nowMs`.
 *
 * What the phone's "current week" tab counts towards. Deliberately a *date* and
 * not an instant inside the push window: the parent is told "Monday morning",
 * which stays true across a daylight-saving shift, where a printed "08:00" would
 * be an hour wrong twice a year in every country that observes one.
 *
 * Monday itself, before the push has gone out, still counts as "next Monday" —
 * the report for the week just ended has not arrived yet, and pointing a parent
 * at a date eight days away would be worse than pointing at today.
 */
export function nextReportPushDate(nowMs: number, utcOffsetMinutes: number): Date {
  const local = localDate(nowMs, utcOffsetMinutes);
  const day = local.getUTCDay();
  const isMondayBeforePush = day === MONDAY && local.getUTCHours() < PUSH_HOUR_TO;
  // Sunday is 0, so `(8 - day) % 7` lands on the following Monday for every
  // other day of the week and gives 0 for Monday itself.
  const daysAhead = isMondayBeforePush ? 0 : (MONDAY + 7 - day) % 7 || 7;
  const target = new Date(local.getTime());
  target.setUTCDate(target.getUTCDate() + daysAhead);
  target.setUTCHours(0, 0, 0, 0);
  return target;
}
