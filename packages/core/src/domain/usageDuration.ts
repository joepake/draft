/**
 * "45 min", "2 hr", "2 hr 15 min" — which i18n key a minute count needs.
 *
 * The fifth thing lifted out of a per-app copy. `apps/mobile` has had this in
 * `src/utils/duration.ts` since before the monorepo, and `apps/desktop` renders
 * the same two numbers on a Mac; a second copy would be a second place for the
 * hour boundary to be wrong.
 *
 * This returns the key and its parameters rather than a string, because the two
 * callers reach the translator differently — mobile through a module-level `t`
 * bound to the app's language, desktop through `translate(language, …)`. The
 * arithmetic and the key choice are the part worth sharing; neither of them
 * needs to know how a sentence gets looked up.
 */

/**
 * `short` is the prose form ("2 hr 15 min", "2 giờ 15 phút") — it reads inside
 * a sentence. `compact` is the tile form ("2h 15m", "2g 15p"): the stat tiles
 * on the usage report give a duration one narrow column, and long-unit locales
 * (vi, de, hi) truncated to "1 giờ 26 p…" there.
 */
export type UsageDurationStyle = 'short' | 'compact';

const TEMPLATE_KEYS = {
  short: {
    minutes: 'shared.durationMinutesShort',
    hours: 'shared.durationHoursShort',
    hoursMinutes: 'shared.durationHoursMinutesShort',
  },
  compact: {
    minutes: 'shared.durationMinutesCompact',
    hours: 'shared.durationHoursCompact',
    hoursMinutes: 'shared.durationHoursMinutesCompact',
  },
} as const;

export interface UsageDurationTemplate {
  key: string;
  params: Record<string, number>;
}

/**
 * The raw key triple for a style, for callers that must pre-resolve the
 * templates — the phone's animated counter formats on the UI thread, where
 * `t()` cannot be called, so it looks the three sentences up ahead of time
 * and substitutes into them per frame.
 */
export function usageDurationTemplateKeys(style: UsageDurationStyle = 'short'): {
  minutes: string;
  hours: string;
  hoursMinutes: string;
} {
  return TEMPLATE_KEYS[style];
}

/**
 * Under an hour it is minutes; above it, hours and then hours-and-minutes.
 *
 * Negatives and fractions are clamped and rounded rather than rejected. The
 * input is a running tally of foreground samples, so a caller has no sensible
 * branch to take on "-0.4 minutes" — and a duration is the wrong place to
 * surface a bug in the tally.
 */
export function usageDurationTemplate(
  totalMinutes: number,
  style: UsageDurationStyle = 'short',
): UsageDurationTemplate {
  const keys = TEMPLATE_KEYS[style];
  const safeMinutes = Math.max(0, Math.round(totalMinutes));

  if (safeMinutes < 60) {
    return { key: keys.minutes, params: { minutes: safeMinutes } };
  }

  const hours = Math.floor(safeMinutes / 60);
  const minutes = safeMinutes % 60;

  return minutes === 0
    ? { key: keys.hours, params: { hours } }
    : { key: keys.hoursMinutes, params: { hours, minutes } };
}

/**
 * How far through a daily limit a child is, as 0…1.
 *
 * A limit of 0 means **no limit configured** — that is what `MonitoringStatus`
 * carries and what the Kotlin and Swift bridges already report — so it returns
 * null rather than dividing by zero or reading as "100% used". A caller with
 * null draws no bar; a caller with 1 draws a full one.
 */
export function dailyLimitProgress(
  minutesUsed: number,
  limitMinutes: number,
): number | null {
  if (limitMinutes <= 0) {
    return null;
  }
  return Math.min(1, Math.max(0, minutesUsed / limitMinutes));
}
