/**
 * How a blocked-hours window is described to a person, as keys and parts.
 *
 * The arithmetic lives in `scheduleWindow.ts`; this is the copy half —
 * which day labels, in which order, and how a window compresses into one
 * line. Every surface that shows a family's schedule (phone, dashboard, the
 * Mac's "Rules from your parent" section) has to describe the same window
 * the same way, or a parent comparing two screens reads two schedules.
 */

import type { ScheduleWindow } from '@kidgate/schema/deviceControls';
import { ALL_SCHEDULE_DAYS } from '@kidgate/schema/deviceControls';
import { normalizeScheduleDays } from './scheduleWindow';

/** Monday-first, because that is the order the picker shows. */
const DAY_LABEL_KEYS = [
  'blockedHours.dayShortMon',
  'blockedHours.dayShortTue',
  'blockedHours.dayShortWed',
  'blockedHours.dayShortThu',
  'blockedHours.dayShortFri',
  'blockedHours.dayShortSat',
  'blockedHours.dayShortSun',
] as const;

/** Rendered when a family has no windows at all. */
export const SCHEDULE_OFF_KEY = 'blockedHours.off';

/**
 * `Date.getDay()` values in the order the picker shows them.
 *
 * Exported because the phone's day chips and its week strip have to walk the
 * week the same way — two hand-written Monday-first tables on one screen is a
 * rename away from a strip whose Saturday row sits under a Sunday chip.
 */
export const MONDAY_FIRST_DAYS = [1, 2, 3, 4, 5, 6, 0] as const;

/** `Date.getDay()` value (0 = Sunday) → index in the Monday-first list. */
function mondayFirstIndex(day: number): number {
  return (day + 6) % 7;
}

/** The short label key for one `Date.getDay()` value. */
export function scheduleDayLabelKey(day: number): string {
  return DAY_LABEL_KEYS[mondayFirstIndex(day)] ?? DAY_LABEL_KEYS[0];
}

/**
 * One-tap day sets.
 *
 * **"School nights" is Sunday-through-Thursday, not Monday-through-Friday**: an
 * overnight curfew is stamped by the night it starts, so the nights before
 * school are Sun–Thu, and Friday and Saturday nights are the weekend. Getting
 * that backwards ships a curfew that lets the child stay up on a school night
 * and blocks them on a Friday — which is why this sits beside the rule rather
 * than being retyped per surface.
 */
export const SCHEDULE_DAY_PRESETS: ReadonlyArray<{
  labelKey: string;
  days: number[];
}> = [
  { labelKey: 'blockedHours.daysEveryDay', days: [...ALL_SCHEDULE_DAYS] },
  { labelKey: 'blockedHours.daysSchoolNights', days: [0, 1, 2, 3, 4] },
  { labelKey: 'blockedHours.daysWeekend', days: [5, 6] },
];

/** Mon–Fri. Daytime windows, unlike the overnight preset above. */
const SCHOOL_DAYS = [1, 2, 3, 4, 5];

/**
 * One-tap context windows.
 *
 * `days` is part of the preset, not an afterthought: "school hours" that also
 * fire on Saturday morning are the exact surprise `ScheduleWindow` warns about,
 * and a parent who taps a button called School does not expect to have to go
 * and untick the weekend. Bedtime keeps every day — a curfew is a curfew.
 *
 * The label is stored as text rather than as a key, so the caller renders
 * `labelKey` and passes the result through as `label`. It is a name the parent
 * can edit like a place name, so it belongs in their words at the moment they
 * chose it; the cost is that switching app language later leaves old labels in
 * the old language, the same trade every named place makes.
 */
export const SCHEDULE_QUICK_WINDOWS: ReadonlyArray<{
  labelKey: string;
  window: ScheduleWindow;
}> = [
  {
    labelKey: 'blockedHours.presetBedtime',
    window: { start: '22:00', end: '07:00' },
  },
  {
    labelKey: 'blockedHours.presetSchool',
    window: { start: '08:00', end: '16:00', days: SCHOOL_DAYS },
  },
  {
    labelKey: 'blockedHours.presetStudy',
    window: { start: '19:00', end: '21:00', days: SCHOOL_DAYS },
  },
];

/**
 * The window's day labels as i18n keys, Monday-first — or null when the
 * window runs every day and the days deserve no mention.
 */
export function scheduleDayLabelKeys(window: ScheduleWindow): string[] | null {
  const days = normalizeScheduleDays(window.days);
  if (!days) {
    return null;
  }

  return days
    .map(mondayFirstIndex)
    .sort((a, b) => a - b)
    .map(index => DAY_LABEL_KEYS[index])
    .filter((key): key is (typeof DAY_LABEL_KEYS)[number] => key !== undefined);
}

/**
 * `"22:00 - 07:00"` — the locale-neutral half of the line. Day labels are the
 * caller's to render and append (the phone joins with `" · "`).
 */
export function scheduleWindowTimeRange(window: ScheduleWindow): string {
  return `${window.start} - ${window.end}`;
}
