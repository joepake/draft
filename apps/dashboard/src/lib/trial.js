import {
  isTrialActive as isTrialActiveIn,
  resolvePlanState,
  trialEndsAtMs,
} from '@kidgate/core/domain/trial';

/**
 * This app's binding of `@kidgate/core/domain/trial` — and the one thing it
 * refuses to do is guess.
 *
 * The arithmetic is core's, shared with `apps/mobile`. What is per app is the
 * **duration**, which reaches the phone through `react-native-config` and
 * reaches this app through `VITE_TRIAL_DAYS`. Until 2026-09-10 it reached this
 * app through nothing at all, and the cost was written down in three places:
 * `PlanCard` showed two plan states instead of the phone's four, the top-apps
 * teaser judged a family on `plan === 'premium'` alone, and the location
 * badge's "your trial ended" notice could not name the day.
 *
 * **A missing variable is `null`, never 7.** `@kidgate/core/domain/trial`
 * refuses a default for the reason this file repeats it: a wrong duration shows
 * a family a trial the server has already stopped honouring, and the server
 * gate (`functions/lib/subscriptions.js`) is the only real one. So every export
 * here answers "I cannot say" rather than a number, and every caller keeps the
 * behaviour it had before this file existed until an environment declares the
 * value. Turning the feature on is one line in an env file, not a code change.
 *
 * Pinned by `serverConstantParity` in `apps/mobile`, which already reads
 * `functions/.env*` from the repo root: **declared and different** fails,
 * absent does not — absent is a state this file handles correctly, and a
 * mismatch is the one that shows a family the wrong day.
 */

const declared = Number(import.meta.env.VITE_TRIAL_DAYS);

/** Days, or null when the environment did not say. */
export const TRIAL_DAYS = Number.isFinite(declared) && declared > 0 ? declared : null;

/** Milliseconds, or null. */
export const TRIAL_DURATION_MS =
  TRIAL_DAYS === null ? null : TRIAL_DAYS * 24 * 60 * 60 * 1000;

/** Whether this surface can reason about trial dates at all. */
export const knowsTrialLength = TRIAL_DURATION_MS !== null;

/**
 * When the trial ends, or null — for a missing duration **or** a family whose
 * clock has not started, since it starts at the first child pairing.
 */
export function getTrialEndsAt(trialStartedAt) {
  if (!trialStartedAt || TRIAL_DURATION_MS === null) {
    return null;
  }
  const endsAtMs = trialEndsAtMs(trialStartedAt, TRIAL_DURATION_MS);
  return Number.isFinite(endsAtMs) ? new Date(endsAtMs) : null;
}

/**
 * Whether the trial is still running, or null when this surface cannot say.
 *
 * Null rather than `false`: a caller that reads "unknown" as "ended" sells a
 * family something they already have, which is the direction every existing
 * `plan === 'premium'` fallback here was careful to avoid.
 */
export function isTrialActive(trialStartedAt, now = Date.now()) {
  if (TRIAL_DURATION_MS === null) {
    return null;
  }
  return isTrialActiveIn(trialStartedAt, now, TRIAL_DURATION_MS);
}

/**
 * The four plan states the phone distinguishes, or null when the duration is
 * unknown — which is what leaves `PlanCard` with two.
 */
export function getPlanState(premiumActive, trialStartedAt, now = Date.now()) {
  if (TRIAL_DURATION_MS === null) {
    return null;
  }
  return resolvePlanState({
    premiumActive,
    trialStartedAt,
    now,
    trialDurationMs: TRIAL_DURATION_MS,
  });
}
