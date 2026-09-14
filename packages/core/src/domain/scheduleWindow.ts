/**
 * When a blocked-hours window is active.
 *
 * This logic already existed twice before it existed here: once in
 * `apps/mobile/src/utils/schedule.ts` and once in Kotlin, in
 * `KidGatePolicyStore.isWithinWindow`. Both agree, and the comment explaining
 * the overnight rule is copied word for word in each — which is the tell that
 * it wanted to be one function. macOS would have been the third copy, and
 * `native/windows-agent` the fourth.
 *
 * The behaviour below is deliberately identical to those two, down to the
 * lenient time parsing. A shared implementation that "fixes" an edge case is a
 * shared implementation that makes two platforms disagree about whether a child
 * is currently blocked, which is worse than the edge case.
 *
 * Everything here is pure and takes the clock as arguments — no `Date.now()`,
 * because a curfew compares against server-corrected time and a child who winds
 * the device clock forward must not thereby end the curfew.
 */

import type { ScheduleWindow } from '@kidgate/schema/deviceControls';
import {
  ALL_SCHEDULE_DAYS,
  SCHEDULE_LABEL_MAX_LENGTH,
} from '@kidgate/schema/deviceControls';
import type { IsoDate } from '@kidgate/schema/primitives';

export const MAX_SCHEDULE_WINDOWS = 5;

/**
 * `HH:MM` to minutes since midnight.
 *
 * Returns 0 for anything unparseable, matching both existing implementations.
 * That is not sloppiness left in place for its own sake: an unparseable window
 * ends up with `start === end`, which `isWithinScheduleWindow` treats as never
 * active. Garbage in a stored window fails **open** — a child is not locked out
 * of their laptop by a malformed string — and `normalizeScheduleWindows` is
 * what stops the garbage being stored in the first place.
 */
export function parseTimeToMinutes(value: string): number {
  const parts = value.split(':');
  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return 0;
  }
  return hours * 60 + minutes;
}

export function formatMinutesAsTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60) % 24;
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export function isValidTimeValue(value: string): boolean {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) {
    return false;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}

export function normalizeTimeValue(value: string): string | null {
  if (!isValidTimeValue(value)) {
    return null;
  }

  const parts = value.trim().split(':');
  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

/**
 * The days a window runs on, or null for "every day".
 *
 * Null is the answer for both an absent list and a full one, so the two are
 * indistinguishable downstream — which is what keeps a schedule written before
 * day-of-week existed behaving exactly as it did.
 */
export function normalizeScheduleDays(value: unknown): number[] | null {
  if (!Array.isArray(value)) {
    return null;
  }

  const days = [
    ...new Set(
      value
        .map(entry => Number(entry))
        .filter(day => Number.isInteger(day) && day >= 0 && day <= 6),
    ),
  ].sort((a, b) => a - b);

  return days.length === 0 || days.length === 7 ? null : days;
}

/**
 * A window's display label, or null when it has none.
 *
 * Trimmed and length-capped here rather than trusted: the field is written by a
 * text input and read back from documents older builds never wrote, so both
 * "absent" and "a paragraph someone pasted" have to land somewhere the row can
 * render.
 */
export function normalizeScheduleLabel(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null;
  }
  const trimmed = value.trim().slice(0, SCHEDULE_LABEL_MAX_LENGTH).trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function scheduleWindowRunsEveryDay(window: ScheduleWindow): boolean {
  return normalizeScheduleDays(window.days) === null;
}

/**
 * Whether the window crosses midnight.
 *
 * Both parent surfaces mark it, because it is the one property of a window that
 * changes which *day* the rest of the editor means: `days` is stamped by the
 * night the window starts on. Written once here rather than as a `split(':')`
 * in each, which is also how the phone's copy came to disagree with the lenient
 * parsing every other reader of these fields uses.
 */
export function isOvernightScheduleWindow(window: ScheduleWindow): boolean {
  return parseTimeToMinutes(window.start) > parseTimeToMinutes(window.end);
}

/**
 * Clean a parent's edits into what may be stored, or null for "no schedule".
 *
 * An every-day window drops `days` rather than storing all seven, and an
 * unlabelled one drops `label`. That keeps the stored shape byte-identical to
 * what older builds write, so `parentControlsUnchanged()` in `firestore.rules`
 * and the native policy diffing do not see a change that is not one.
 */
export function normalizeScheduleWindows(
  windows: readonly ScheduleWindow[],
): ScheduleWindow[] | null {
  const normalized = windows
    .map(window => {
      const start = normalizeTimeValue(window.start);
      const end = normalizeTimeValue(window.end);
      if (!start || !end || start === end) {
        return null;
      }
      const days = normalizeScheduleDays(window.days);
      const label = normalizeScheduleLabel(window.label);
      return {
        start,
        end,
        ...(days ? { days } : {}),
        ...(label ? { label } : {}),
      };
    })
    .filter((window): window is ScheduleWindow => window !== null)
    .slice(0, MAX_SCHEDULE_WINDOWS);

  return normalized.length === 0 ? null : normalized;
}

/** Where the caller is in the child's local week. */
export interface LocalTimePosition {
  /** Minutes since local midnight, 0–1439. */
  minutesSinceMidnight: number;
  /** 0 = Sunday … 6 = Saturday, local. */
  weekday: number;
}

/**
 * The weekday of a local calendar day, 0 = Sunday … 6 = Saturday.
 *
 * `ClockPort` reports the child's local day as `YYYY-MM-DD` and their minutes
 * since local midnight, but not which day of the week that is — and every way
 * of recovering it from a timestamp has to re-derive the timezone the clock
 * already applied. Reading it back out of the date string sidesteps that: the
 * fields are already local, so interpreting them as UTC yields the right
 * weekday and no offset arithmetic happens at all.
 *
 * Returns -1 for a malformed date, which `isWithinScheduleWindow` then matches
 * against no day list — the same fail-open posture as an unparseable time.
 *
 * The `Date` here reads no clock: it is constructed from the three numbers in
 * the string and used only for its calendar arithmetic, which is a different
 * thing from the bare `new Date()` that `ClockPort` forbids in this package.
 */
export function weekdayOfIsoDate(date: IsoDate): number {
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return -1;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return -1;
  }
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function isWithinScheduleWindow(
  window: ScheduleWindow,
  at: LocalTimePosition,
): boolean {
  const startMinutes = parseTimeToMinutes(window.start);
  const endMinutes = parseTimeToMinutes(window.end);

  if (startMinutes === endMinutes) {
    return false;
  }

  const days = normalizeScheduleDays(window.days);
  const runsOn = (day: number) => days === null || days.includes(day);

  if (startMinutes < endMinutes) {
    return (
      at.minutesSinceMidnight >= startMinutes &&
      at.minutesSinceMidnight < endMinutes &&
      runsOn(at.weekday)
    );
  }

  // Overnight. The leg still to come tonight belongs to today; the leg before
  // `end` this morning belongs to *yesterday's* window — a Friday-night curfew
  // must keep running into Saturday morning even though Saturday is not one of
  // its days.
  if (at.minutesSinceMidnight >= startMinutes) {
    return runsOn(at.weekday);
  }
  if (at.minutesSinceMidnight < endMinutes) {
    return runsOn((at.weekday + 6) % 7);
  }
  return false;
}

export function isWithinAnyScheduleWindow(
  windows: readonly ScheduleWindow[],
  at: LocalTimePosition,
): boolean {
  return windows.some(window => isWithinScheduleWindow(window, at));
}

/**
 * Whether two windows are ever active at the same instant.
 *
 * Not day-set-intersect-then-time-range-compare: an overnight window can spill
 * onto a day neither window lists (see the comment in `isWithinScheduleWindow`),
 * so two windows with disjoint `days` can still overlap on the night between
 * them. Walking every minute of the week through the real predicate is the only
 * check that agrees with what actually locks the device — 7 * 1440 minutes is
 * a few thousand comparisons, trivial next to render cost, and correctness here
 * matters more than the constant factor.
 */
export function scheduleWindowsOverlap(a: ScheduleWindow, b: ScheduleWindow): boolean {
  for (let weekday = 0; weekday < 7; weekday++) {
    for (
      let minutesSinceMidnight = 0;
      minutesSinceMidnight < 1440;
      minutesSinceMidnight++
    ) {
      const at = { weekday, minutesSinceMidnight };
      if (isWithinScheduleWindow(a, at) && isWithinScheduleWindow(b, at)) {
        return true;
      }
    }
  }
  return false;
}

/** Every pair of indices into `windows` whose windows overlap. */
export function findOverlappingScheduleWindowPairs(
  windows: readonly ScheduleWindow[],
): Array<[number, number]> {
  const pairs: Array<[number, number]> = [];
  for (let i = 0; i < windows.length; i++) {
    const a = windows[i];
    for (let j = i + 1; j < windows.length; j++) {
      const b = windows[j];
      if (a && b && scheduleWindowsOverlap(a, b)) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}

const MINUTES_IN_DAY = 1440;

/** A stretch of one weekday during which at least one window is active. */
export interface ScheduleDaySegment {
  /** Minutes since local midnight, 0–1439. */
  readonly startMinutes: number;
  /** Exclusive end, 1–1440. Midnight at the far end is 1440, never 0. */
  readonly endMinutes: number;
}

/**
 * Each weekday's blocked stretches, merged and sorted. Index is `Date.getDay()`
 * — 0 = Sunday … 6 = Saturday — and a day with nothing on it is an empty array.
 *
 * What a parent editing day chips and an overnight time pair cannot see is the
 * *week*: `days` is stamped by the night a window starts on, so a Friday curfew
 * blocks Saturday morning on a day the chips do not show ticked. Both parent
 * surfaces draw this under their editor for that one reason.
 *
 * Derived from the same two facts `isWithinScheduleWindow` decides on, in the
 * same order, rather than by walking the week a minute at a time the way
 * `scheduleWindowsOverlap` does — this recomputes on every keystroke in a time
 * field, and the brute-force form is tens of thousands of predicate calls per
 * render. The duplication that buys is **pinned**: `scheduleWindow.test.ts`
 * asserts these segments agree with `isWithinAnyScheduleWindow` for all
 * 7 × 1440 minutes of the week, so a preview cannot drift from what actually
 * locks the device.
 *
 * Out-of-range times are clamped rather than rejected, matching the lenient
 * parsing above: a stored `25:00` is already fail-open in the predicate, and a
 * preview that drew a bar past the end of the day would be the one screen
 * disagreeing about it.
 */
export function scheduleWeekSegments(
  windows: readonly ScheduleWindow[],
): ScheduleDaySegment[][] {
  const byDay: ScheduleDaySegment[][] = [[], [], [], [], [], [], []];

  const add = (day: number, from: number, to: number) => {
    const startMinutes = Math.max(0, Math.min(MINUTES_IN_DAY, from));
    const endMinutes = Math.max(0, Math.min(MINUTES_IN_DAY, to));
    if (endMinutes > startMinutes) {
      byDay[day]?.push({ startMinutes, endMinutes });
    }
  };

  for (const window of windows) {
    const start = parseTimeToMinutes(window.start);
    const end = parseTimeToMinutes(window.end);
    // The predicate's own answer for an empty range: never active.
    if (start === end) {
      continue;
    }

    const days = normalizeScheduleDays(window.days) ?? ALL_SCHEDULE_DAYS;
    for (const day of days) {
      if (start < end) {
        add(day, start, end);
        continue;
      }
      // Overnight. The evening leg belongs to the day the window names; the
      // morning leg belongs to the day *after* it, which `days` may omit.
      add(day, start, MINUTES_IN_DAY);
      add((day + 1) % 7, 0, end);
    }
  }

  return byDay.map(mergeDaySegments);
}

function mergeDaySegments(
  segments: readonly ScheduleDaySegment[],
): ScheduleDaySegment[] {
  const sorted = [...segments].sort((a, b) => a.startMinutes - b.startMinutes);

  const merged: ScheduleDaySegment[] = [];
  for (const segment of sorted) {
    const last = merged[merged.length - 1];
    // Touching counts as one run: two windows that meet at 07:00 are a single
    // uninterrupted block to the child, and drawing a seam there invents one.
    if (last && segment.startMinutes <= last.endMinutes) {
      merged[merged.length - 1] = {
        startMinutes: last.startMinutes,
        endMinutes: Math.max(last.endMinutes, segment.endMinutes),
      };
      continue;
    }
    merged.push(segment);
  }
  return merged;
}
