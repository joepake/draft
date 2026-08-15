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
import { SCHEDULE_LABEL_MAX_LENGTH } from '@kidgate/schema/deviceControls';
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
