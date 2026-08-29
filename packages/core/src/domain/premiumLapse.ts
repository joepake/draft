/**
 * The child agent's memory of "this family stopped paying".
 *
 * Every premium child upload — location, web history, message alerts, tamper
 * — is refused server-side with 403 `billing/premium-required` once a trial
 * lapses (`functions/http/location.js`, `webActivity.js`, `packageActivity.js`).
 * Nothing is written and no parent can see it, but the agent never learned
 * that: it kept posting on its ordinary cadence, which on Android is every
 * 15s active / 45s idle and in JS every 120s. What that costs is not Firestore
 * — the write never happens — it is a Cloud Function invocation plus an ID
 * token verification per refusal, and on the location path a GPS fix the child
 * device paid for in battery and then threw away.
 *
 * So the agent latches the refusal and stops sending until the latch ages out.
 *
 * **A latch, not a subscription read.** The child device signs in under the
 * owner's uid and could read the billing document directly, but that is a
 * listener per child device on the one document every parent surface already
 * watches, to learn something the very next upload would have told it for
 * free. The refusal *is* the signal.
 *
 * Two things set it: a 403 from any premium endpoint, and `degraded: true` on
 * a `reportChildUsage` answer — that endpoint stays open to the free tier
 * (field-level premium, see its handler) and so it is the one channel that
 * keeps answering, which makes it the early warning and the recovery signal
 * both.
 */

/**
 * How long a latch holds before the agent tries a premium endpoint again.
 *
 * **Fifteen minutes, and the number is a bet about resubscription, not about
 * cost.** The cost side is already won at any value above a minute: the whole
 * point is turning one refusal per tick into one refusal per window, and at 15
 * minutes an Android device drops from ~240 refusals an hour to 4. Pushing it
 * to an hour saves three more calls and buys a family who just paid up to an
 * hour of a child device that still behaves as if they had not — no location
 * on the parent's map, no web history filling in.
 *
 * `reportChildUsage` shortens that window in practice on the platforms that
 * call it: its answer carries `degraded`, so a resubscribed family clears the
 * latch on the next usage tick rather than waiting this out. The window is the
 * floor for platforms without that channel (iOS), not the expected latency.
 */
export const PREMIUM_LAPSE_LATCH_MS = 15 * 60 * 1000;

/**
 * The Cloud Functions error code every premium-gated endpoint answers with.
 * Stable contract — `apps/mobile/src/services/api/client.ts` already maps it
 * to copy, and this module keys behaviour off the same string rather than off
 * a status code, since 403 alone also covers a bad device credential.
 */
export const PREMIUM_REQUIRED_CODE = 'billing/premium-required';

/**
 * Epoch ms of the last refusal, or null when the family is believed premium.
 * Null and "aged out" mean the same thing to every caller; they are kept apart
 * only so a caller can persist the timestamp.
 */
export type PremiumLapseState = number | null;

/**
 * Whether a premium upload should be skipped.
 *
 * Takes the clock rather than reading it so this stays pure, and so the Kotlin
 * side (`KidGatePolicyStore.isPremiumLapsed`) can be held against it by test.
 */
export function isPremiumLapsed(state: PremiumLapseState, nowMs: number): boolean {
  if (state === null) {
    return false;
  }
  const elapsed = nowMs - state;
  /*
   * A latch stamped in the future is a device whose clock moved backwards
   * after it was written — treated as expired rather than as a latch that can
   * never age out, which would silently stop uploads for good.
   */
  return elapsed >= 0 && elapsed < PREMIUM_LAPSE_LATCH_MS;
}

/**
 * Read the lapse verdict out of a `reportChildUsage` answer.
 *
 * Returns null when the body says nothing about it — an older Functions
 * deployment, or a response that failed to parse — and null must leave the
 * existing latch alone rather than clear it. Only an explicit `degraded` flag
 * moves the state in either direction.
 */
export function readDegradedFlag(body: unknown): boolean | null {
  if (!body || typeof body !== 'object') {
    return null;
  }
  const value = (body as { degraded?: unknown }).degraded;
  return typeof value === 'boolean' ? value : null;
}
