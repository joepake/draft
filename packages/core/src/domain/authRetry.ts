/**
 * Whether a failed claims read is an answer or just a bad moment.
 *
 * Pure strings and numbers, so it lives in `domain/` and both auth adapters can
 * read it: `adapters/webChildSession` (the `firebase` JS SDK, used by
 * `apps/desktop` and `apps/extension`) and `apps/tv/src/childSession` (RNFB,
 * which cannot import the JS SDK at all). The decision is identical on every
 * surface and the code that acts on it cannot be — which is exactly the split
 * this package exists to keep from being written twice.
 *
 * The failure both adapters shipped: `getIdTokenResult` goes to the network
 * whenever the cached ID token has expired, which it always has on a surface
 * that has been shut for more than an hour. Both reported that failure as a
 * null session — the sentence "this device is not paired", said with no
 * evidence, to a child whose device was paired and filtering.
 */

/**
 * Codes that are the account's own answer, not the network's.
 *
 * Everything else is retried: an internal error, a rate limit, a code this list
 * has never seen. The asymmetry is deliberate. Ending a child session wrongly
 * takes a person and a QR code to undo; retrying wrongly costs seconds, and a
 * refresh token that really was revoked signs the user out through
 * `onAuthStateChanged` anyway, which no list has to recognise.
 */
const DEFINITIVE_AUTH_ERRORS = new Set([
  'auth/user-token-expired',
  'auth/user-disabled',
  'auth/user-not-found',
  'auth/invalid-user-token',
  'auth/requires-recent-login',
]);

export function isDefinitiveAuthError(error: unknown): boolean {
  const code = (error as { code?: unknown })?.code;
  return typeof code === 'string' && DEFINITIVE_AUTH_ERRORS.has(code);
}

/**
 * How long to wait before asking again.
 *
 * The first retry is fast because the common case is a browser or a television
 * that started a second before its Wi-Fi did; the ceiling repeats for as long
 * as an outage lasts, because there is nothing better to do than keep the
 * session and keep asking.
 */
const CLAIMS_RETRY_DELAYS_MS = [500, 2_000, 6_000, 15_000, 30_000];

export function claimsRetryDelayMs(attempt: number): number {
  const index = Math.min(Math.max(attempt, 0), CLAIMS_RETRY_DELAYS_MS.length - 1);
  return CLAIMS_RETRY_DELAYS_MS[index]!;
}
