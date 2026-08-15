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

/** `Date.getDay()` value (0 = Sunday) → index in the Monday-first list. */
function mondayFirstIndex(day: number): number {
  return (day + 6) % 7;
}

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
