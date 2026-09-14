/**
 * Trial arithmetic, with the duration passed in.
 *
 * The maths lived in `apps/mobile/src/utils/trial.ts` until 2026-09-03, when
 * `apps/dashboard` needed to say which of the four plan states a family is in.
 * Only the arithmetic moved: the **duration** is per app (`TRIAL_DAYS` reaches
 * the phone through `react-native-config` and the browser through Vite), the
 * clock is per app (`ServerTime` on the phone), and the sentence is per app
 * because each reads its own key space. What must not be per app is the
 * question "is this trial still running", which is the one a paywall answers.
 *
 * `functions/lib/subscriptions.js` is the real gate; `serverConstantParity`
 * pins the day count against `functions/.env`. Nothing here may guess a
 * default duration — a wrong one shows a family a trial the server refuses.
 */

/** When a trial that started at `trialStartedAt` runs out, in epoch ms. */
export function trialEndsAtMs(trialStartedAt: string, durationMs: number): number {
  return new Date(trialStartedAt).getTime() + durationMs;
}

/**
 * Whether the trial is still running.
 *
 * A missing or unparseable start is `false`, never "probably fine": the field
 * is absent for a family that has not paired a child device yet, and the trial
 * clock only starts at pairing.
 */
export function isTrialActive(
  trialStartedAt: string | null | undefined,
  now: number,
  durationMs: number,
): boolean {
  if (!trialStartedAt) {
    return false;
  }
  const startedMs = new Date(trialStartedAt).getTime();
  if (Number.isNaN(startedMs)) {
    return false;
  }
  return now - startedMs < durationMs;
}

/** Milliseconds left, floored at zero. Zero for a trial never started. */
export function trialRemainingMs(
  trialStartedAt: string | null | undefined,
  now: number,
  durationMs: number,
): number {
  if (!trialStartedAt) {
    return 0;
  }
  const endsAt = trialEndsAtMs(trialStartedAt, durationMs);
  if (Number.isNaN(endsAt)) {
    return 0;
  }
  return Math.max(0, endsAt - now);
}

/**
 * The remainder as a parent reads it.
 *
 * **Ceiling to the minute, then splitting** — not flooring each unit
 * separately. A trial with 23h 59m 30s left is "1 day", because rounding the
 * seconds away first is what makes the day count tick down at the moment a
 * person would expect rather than a minute early.
 */
export function splitTrialRemaining(remainingMs: number): {
  days: number;
  hours: number;
  minutes: number;
} {
  const totalMinutes = Math.ceil(Math.max(0, remainingMs) / (60 * 1000));
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes - days * 24 * 60) / 60);
  return { days, hours, minutes: totalMinutes % 60 };
}

/**
 * Which of the four states a family is in, given the two facts a parent
 * surface holds. `premium` outranks everything — a subscriber who also has an
 * unexpired trial is a subscriber.
 */
export type PlanState = 'premium' | 'trialActive' | 'trialEnded' | 'trialNotStarted';

export function resolvePlanState(input: {
  premiumActive: boolean;
  trialStartedAt: string | null | undefined;
  now: number;
  trialDurationMs: number;
}): PlanState {
  if (input.premiumActive) {
    return 'premium';
  }
  if (!input.trialStartedAt) {
    return 'trialNotStarted';
  }
  return isTrialActive(input.trialStartedAt, input.now, input.trialDurationMs)
    ? 'trialActive'
    : 'trialEnded';
}
