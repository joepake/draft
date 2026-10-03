/**
 * When the star chart starts again, said in the reader's own week.
 *
 * The board is keyed by the UTC ISO week (`leaderboardWindow`, which says why),
 * so it turns over at Monday 00:00 **UTC**. "Starts again every Monday" was
 * true in one time zone: a family in California watched it reset on Sunday at
 * 5 PM, one in Hanoi on Monday at 7 AM. The week stays UTC — moving it would
 * put two parents of one family in different weeks — and the sentence moves
 * instead: `leaderboard.resetsNoteAt` names the weekday and the time the reset
 * lands on where the reader is, which is the only version true everywhere.
 *
 * Kept apart from `leaderboard.ts` because that file is bundled into Cloud
 * Functions (`scripts/build-functions-shared.mjs`) and nothing server-side
 * says this sentence.
 */

import { leaderboardWindow } from './leaderboard';

const DAY_MS = 24 * 60 * 60 * 1000;

/** The instant the board after the one holding `nowMs` begins. */
export function nextLeaderboardResetMs(nowMs: number): number {
  const { toDate } = leaderboardWindow(new Date(nowMs));
  return Date.parse(`${toDate}T00:00:00.000Z`) + DAY_MS;
}

/**
 * `leaderboard.resetsNoteAt`'s two slots. A type, not an interface, so it
 * passes straight to a `t(key, params)` that takes a record.
 */
export type LeaderboardResetParams = {
  weekday: string;
  time: string;
};

export interface LeaderboardResetOptions {
  /**
   * The surface's own clock, when it has one — the phone renders every time
   * through dayjs `LT`, and a board that disagreed with the rest of the app
   * about how 17:00 is written would be a second convention on one screen.
   * Absent, `Intl`'s for `locale`.
   */
  formatTime?: (instant: Date) => string;
  /** For tests. Production reads the device's own zone, which is the point. */
  timeZone?: string;
}

/**
 * Only for a runtime with no `Intl` at all, which none of the four surfaces
 * is. English, because a blank weekday reads as a broken sentence.
 */
const FALLBACK_WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

function formatWith(
  instant: Date,
  locale: string,
  options: Intl.DateTimeFormatOptions,
): string | null {
  try {
    return new Intl.DateTimeFormat(locale, options).format(instant);
  } catch {
    return null;
  }
}

/**
 * The next reset as a weekday and a clock time in `locale` (BCP-47) and the
 * device's time zone. The weekday is `Intl`'s, never a pack string, so it is
 * the reader's own word for that day; each locale's sentence is written so it
 * reads right whichever of the two days it turns out to be.
 */
export function leaderboardResetParams(
  nowMs: number,
  locale: string,
  options: LeaderboardResetOptions = {},
): LeaderboardResetParams {
  const reset = new Date(nextLeaderboardResetMs(nowMs));
  const zone = options.timeZone ? { timeZone: options.timeZone } : {};
  const weekday =
    formatWith(reset, locale, { weekday: 'long', ...zone }) ??
    FALLBACK_WEEKDAYS[reset.getDay()] ??
    '';
  const time =
    options.formatTime?.(reset) ??
    formatWith(reset, locale, { hour: 'numeric', minute: '2-digit', ...zone }) ??
    reset.toISOString().slice(11, 16);
  return { weekday, time };
}
