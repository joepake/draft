/**
 * The daily limit actually in force, bonus included.
 *
 * Lifted out of `apps/mobile/src/utils/screenTime.ts` so macOS enforces the same
 * number a phone does. The bonus rule is the part that matters and the part that
 * is easy to get subtly wrong: approving a time request adds minutes **for that
 * local day only**. An earlier version of this raised the limit permanently,
 * which is how "give them 20 more minutes tonight" quietly became "the limit is
 * now 20 minutes higher, forever".
 *
 * Pure and clock-free. The caller supplies `nowMs` and, where the local calendar
 * matters, the mapping from an instant to a local day — both because a child
 * device's own clock is not trusted for this and because a test cannot pin a
 * timezone.
 */

import type { IsoDate, Millis, Minutes } from '@kidgate/schema/primitives';

/** Just the fields the bonus rule reads. */
export interface BonusControls {
  bonusMinutesToday?: number;
  bonusGrantedAtMs?: number | null;
}

export interface DailyLimitControls extends BonusControls {
  dailyLimitMinutes: Minutes | null;
}

/**
 * An instant as a local `YYYY-MM-DD`.
 *
 * The default reads the host timezone, which is the child's — that is the
 * intent, since a limit resets at the child's midnight and not at UTC's. It
 * constructs a `Date` from a given number and never from the clock, the same
 * distinction `scheduleWindow.weekdayOfIsoDate` draws.
 */
export function localIsoDate(ms: Millis): IsoDate {
  const date = new Date(ms);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

/**
 * Bonus minutes still valid, which is none once the granting day has passed.
 *
 * Compared by local calendar day rather than by elapsed hours: a grant at 23:50
 * expires ten minutes later, and that is correct — the parent gave extra time
 * *for today*, not a rolling 24 hours.
 */
export function activeBonusMinutes(
  controls: BonusControls,
  nowMs: Millis,
  localDateOf: (ms: Millis) => IsoDate = localIsoDate,
): Minutes {
  const bonus = controls.bonusMinutesToday ?? 0;
  const grantedAtMs = controls.bonusGrantedAtMs;
  if (bonus <= 0 || typeof grantedAtMs !== 'number') {
    return 0;
  }
  return localDateOf(nowMs) === localDateOf(grantedAtMs) ? bonus : 0;
}

/**
 * Base limit plus any live bonus. Null means no limit.
 *
 * A base of zero or below is returned untouched rather than having a bonus added
 * to it: zero means "blocked all day", and adding twenty bonus minutes to a
 * blocked day would hand the child twenty minutes the parent never offered.
 */
export function effectiveDailyLimitMinutes(
  controls: DailyLimitControls,
  nowMs: Millis,
  localDateOf: (ms: Millis) => IsoDate = localIsoDate,
): Minutes | null {
  const base = controls.dailyLimitMinutes;
  if (base === null || base === undefined || base <= 0) {
    return base ?? null;
  }
  return base + activeBonusMinutes(controls, nowMs, localDateOf);
}
