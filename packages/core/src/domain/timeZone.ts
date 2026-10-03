/**
 * A device's time zone — the IANA name its OS is set to — and the arithmetic
 * every surface does with it.
 *
 * **Why a name and not an offset.** `ParentDeviceRecord.utcOffsetMinutes` is a
 * reading taken at one instant, and it goes stale twice a year wherever
 * daylight saving runs: a phone in New York that last launched in August still
 * says UTC-4 in November, so its quiet hours end an hour early all winter. A
 * zone name is a fact about where the device is, and the offset it implies is
 * worked out **at the moment it is needed** — `offsetMinutesForZone(zone, now)`
 * — so it is right on both sides of every switch. The existing offset
 * arithmetic (`localDayKey`, `localHour`, the weekly-report keys) is unchanged:
 * it is fed the offset this module derives.
 *
 * **Where the names come from.** Every surface publishes
 * `Intl.DateTimeFormat().resolvedOptions().timeZone` (through
 * `ClockPort.timezone()`), never a location: a parent phone on its device row,
 * a child agent on its usage report, the dashboard at sign-in. A runtime that
 * answers something `readTimeZone` refuses — `undefined`, an offset string —
 * publishes nothing, and every reader keeps the source it had before.
 *
 * Pure: `Intl` is part of the language, not a platform, and every function takes
 * the instant rather than reading a clock. Bridged to Cloud Functions through
 * `scripts/build-functions-shared.mjs`, so the server validates and converts a
 * zone with the same code the clients publish it with.
 */

import { localDayKey } from './weeklyReportSchedule';

const MS_PER_MINUTE = 60_000;
const DAY_MS = 24 * 60 * MS_PER_MINUTE;

/** Offsets a real zone can produce today: UTC-12 … UTC+14. */
const MIN_OFFSET_MINUTES = -12 * 60;
const MAX_OFFSET_MINUTES = 14 * 60;

/**
 * The longest IANA name is 30 characters (`America/Argentina/ComodRivadavia`
 * and friends); anything much longer is not a zone. The shape rules out the
 * offset strings some runtimes answer instead of a name (`GMT+07:00`), which
 * `Intl` would otherwise accept and which would then read as a zone.
 */
const MAX_ZONE_LENGTH = 64;
const ZONE_SHAPE = /^[A-Za-z][A-Za-z0-9_+-]*(?:\/[A-Za-z0-9_+-]+)*$/;

/**
 * One formatter per zone, because constructing one is the expensive half and a
 * console folds every device on every render. Bounded: the server validates
 * names a child device sent, and an unbounded cache keyed on caller input is a
 * memory leak an attacker can drive. Only names `Intl` accepted are kept.
 */
const MAX_CACHED_FORMATTERS = 256;
const formatters = new Map<string, Intl.DateTimeFormat>();

function formatterFor(timeZone: string): Intl.DateTimeFormat | null {
  const cached = formatters.get(timeZone);
  if (cached) {
    return cached;
  }
  let formatter: Intl.DateTimeFormat;
  try {
    formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  } catch {
    return null;
  }
  if (formatters.size >= MAX_CACHED_FORMATTERS) {
    formatters.clear();
  }
  formatters.set(timeZone, formatter);
  return formatter;
}

/**
 * The value as an IANA zone name, or null when it is not one this runtime
 * knows.
 *
 * Returned as given (trimmed), not canonicalised: engines disagree about
 * links (`Asia/Saigon`), and a device that says the same thing every time must
 * store the same string every time, or the server's change gate would write
 * on every report.
 */
export function readTimeZone(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null;
  }
  const name = value.trim();
  if (!name || name.length > MAX_ZONE_LENGTH || !ZONE_SHAPE.test(name)) {
    return null;
  }
  return formatterFor(name) ? name : null;
}

/** Whether `value` is an IANA zone name this runtime knows. */
export function isValidTimeZone(value: unknown): value is string {
  return readTimeZone(value) !== null;
}

/**
 * The zone's UTC offset in minutes at `atMs` — positive east of Greenwich, the
 * sign `-Date#getTimezoneOffset()` has and `utcOffsetMinutes` is stored in.
 *
 * Null for a name that is not a zone, or when this runtime's `Intl` cannot
 * format one (`formatToParts` missing or throwing); the caller falls back to
 * whatever it had before, never to a guess made here.
 *
 * Read off the zone's own wall clock at that instant, so it is right on either
 * side of a daylight-saving switch: New York is -300 in January and -240 in
 * July, Berlin 60 and 120.
 */
export function offsetMinutesForZone(
  timeZone: string | null | undefined,
  atMs: number,
): number | null {
  const name = readTimeZone(timeZone);
  if (name === null || !Number.isFinite(atMs)) {
    return null;
  }
  const formatter = formatterFor(name);
  if (!formatter) {
    return null;
  }

  let parts: Intl.DateTimeFormatPart[];
  try {
    parts = formatter.formatToParts(new Date(atMs));
  } catch {
    return null;
  }
  const field = (type: Intl.DateTimeFormatPartTypes): number =>
    Number(parts.find(part => part.type === type)?.value);

  const year = field('year');
  const month = field('month');
  const day = field('day');
  // Some engines print midnight as 24 even under `h23`.
  const hour = field('hour') % 24;
  const minute = field('minute');
  const second = field('second');
  if (![year, month, day, hour, minute, second].every(Number.isFinite)) {
    return null;
  }

  const wallAsUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  const wholeSecond = Math.floor(atMs / 1000) * 1000;
  const offset = Math.round((wallAsUtc - wholeSecond) / MS_PER_MINUTE);
  return offset >= MIN_OFFSET_MINUTES && offset <= MAX_OFFSET_MINUTES ? offset : null;
}

/**
 * `YYYY-MM-DD` on the zone's own calendar at `atMs` — the day a device in that
 * zone stamps its usage with (`controls.usageDate`). Null when the zone cannot
 * be read; see `offsetMinutesForZone`.
 */
export function dayKeyInZone(
  timeZone: string | null | undefined,
  atMs: number,
): string | null {
  const offset = offsetMinutesForZone(timeZone, atMs);
  return offset === null ? null : localDayKey(atMs, offset);
}

/**
 * Milliseconds from `nowMs` until the zone's calendar day next changes, plus a
 * second — when a console holding a day key for that zone should look again.
 *
 * The offset is re-read at the boundary, so a zone that switches daylight
 * saving at midnight still lands on the right instant. A caller should compare
 * keys rather than trust the timer: a laptop asleep across the boundary fires
 * late, and one second early is one more look, never a wrong day.
 */
export function msUntilNextDayInZone(
  timeZone: string | null | undefined,
  nowMs: number,
): number | null {
  const offset = offsetMinutesForZone(timeZone, nowMs);
  if (offset === null) {
    return null;
  }
  const nextLocalMidnight =
    (Math.floor((nowMs + offset * MS_PER_MINUTE) / DAY_MS) + 1) * DAY_MS;
  let boundary = nextLocalMidnight - offset * MS_PER_MINUTE;
  const after = offsetMinutesForZone(timeZone, boundary);
  if (after !== null && after !== offset) {
    boundary = nextLocalMidnight - after * MS_PER_MINUTE;
  }
  return Math.max(1000, boundary - nowMs + 1000);
}
