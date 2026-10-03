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
import {
  isOvernightScheduleWindow,
  normalizeScheduleDays,
  parseTimeToMinutes,
} from './scheduleWindow';

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

/** One one-tap day set: the chip's label key and the days it writes. */
export interface ScheduleDayPreset {
  labelKey: string;
  days: number[];
}

/** Mon–Fri. The days a daytime window means by "weekdays". */
const SCHOOL_DAYS = [1, 2, 3, 4, 5];

const EVERY_DAY_PRESET: ScheduleDayPreset = {
  labelKey: 'blockedHours.daysEveryDay',
  days: [...ALL_SCHEDULE_DAYS],
};

/**
 * Daytime windows: the days are the days the block runs on, so the weekend is
 * Saturday and Sunday.
 */
const DAYTIME_DAY_PRESETS: readonly ScheduleDayPreset[] = [
  EVERY_DAY_PRESET,
  { labelKey: 'blockedHours.daysWeekdays', days: [...SCHOOL_DAYS] },
  { labelKey: 'blockedHours.daysWeekend', days: [0, 6] },
];

/**
 * Overnight windows: **"School nights" is Sunday-through-Thursday, not
 * Monday-through-Friday**. An overnight curfew is stamped by the night it
 * starts, so the nights before school are Sun–Thu, and Friday and Saturday
 * nights are the weekend. Getting that backwards ships a curfew that lets the
 * child stay up on a school night and blocks them on a Friday.
 */
const OVERNIGHT_DAY_PRESETS: readonly ScheduleDayPreset[] = [
  EVERY_DAY_PRESET,
  { labelKey: 'blockedHours.daysSchoolNights', days: [0, 1, 2, 3, 4] },
  { labelKey: 'blockedHours.daysWeekendNights', days: [5, 6] },
];

/**
 * One-tap day sets for this window, which depend on whether it crosses
 * midnight.
 *
 * One table used to serve every window, and it was the overnight one: on an
 * 08:00–16:00 window "Weekend" wrote Friday and Saturday, blocking a school
 * Friday and leaving Sunday free. A daytime window's days are the days the
 * block runs, so it gets Weekdays (Mon–Fri) and Weekend (Sat+Sun); an overnight
 * window keeps the night-stamped pair and says "nights" in both labels. Both
 * parent surfaces read this rather than retyping either table.
 */
export function scheduleDayPresets(
  window: ScheduleWindow,
): readonly ScheduleDayPreset[] {
  return isOvernightScheduleWindow(window)
    ? OVERNIGHT_DAY_PRESETS
    : DAYTIME_DAY_PRESETS;
}

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
 * The window's two ends as one range. Day labels are the caller's to render
 * and append (the phone joins with `" · "`).
 *
 * Without `formatTime` it is the stored `"22:00 - 07:00"`, which is only right
 * for a 24-hour reader — an English parent was told their child's curfew in a
 * clock they do not use. A caller with a locale passes its own clock
 * (`formatTime(minuteOfDay)`, the phone's `formatMinuteOfDay`) and gets
 * `"10:00 PM – 7:00 AM"`; this package has no locale to reach for.
 */
export function scheduleWindowTimeRange(
  window: ScheduleWindow,
  formatTime?: (minuteOfDay: number) => string,
): string {
  if (!formatTime) {
    return `${window.start} - ${window.end}`;
  }
  return `${formatTime(parseTimeToMinutes(window.start))} – ${formatTime(
    parseTimeToMinutes(window.end),
  )}`;
}
