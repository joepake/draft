import { getLocaleTag } from '@kidgate/i18n/web';

/**
 * `0.35` as the reader's percentage — "35%", "35 %", "%35", "٣٥٪".
 *
 * A hand-built `${n}%` is right in English only: French puts a space before
 * the sign, Turkish puts the sign first, and Arabic has a sign of its own.
 * Dates and times on this surface pass `getLocaleTag()` straight to `Intl`.
 */
export function formatPercent(fraction) {
  return new Intl.NumberFormat(getLocaleTag(), {
    style: 'percent',
    maximumFractionDigits: 0,
  }).format(fraction);
}

/**
 * A minute of the day as the reader's clock time — `1290` is "9:30 PM" in
 * English and "21:30" in German. A hand-built `HH:mm` is right in only one of
 * the two.
 *
 * Built and formatted in UTC because the number is already a wall-clock time,
 * not an instant: no zone or DST change may move it. `1440` is midnight.
 */
export function formatClock(minuteOfDay) {
  const minute = ((Math.round(minuteOfDay) % 1440) + 1440) % 1440;
  return new Intl.DateTimeFormat(getLocaleTag(), {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(2000, 0, 1, Math.floor(minute / 60), minute % 60)));
}

/** A stored `'21:00'` as the reader's clock time; anything else as it came. */
export function formatHm(hhmm) {
  const match = /^(\d{1,2}):(\d{2})$/.exec(hhmm ?? '');
  if (!match) return hhmm ?? '';
  return formatClock(Number(match[1]) * 60 + Number(match[2]));
}
