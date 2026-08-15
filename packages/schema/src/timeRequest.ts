/**
 * What a child may ask for, and how often.
 *
 * **`functions/http/controls.js` enforces all three.** These are not client-side
 * convenience checks — the server rejects an out-of-range request outright and
 * answers a too-soon one with `timeRequest/cooldown`. A client that disagrees
 * does not relax the rule, it only decides whether the child is refused here or
 * after a round trip.
 *
 * Which direction the disagreement runs matters. A client that is *stricter*
 * than the server is the worse bug and the one that actually happened: the
 * cooldown was 5 minutes in `@kidgate/core` against the server's 1, so a child
 * who waited the full minute was refused by their own device for four more.
 *
 * The Cloud Functions cannot import this package — they deploy with their own
 * dependency tree, see `functions/CLAUDE.md` — so `controls.js` mirrors these
 * with a comment naming this file, and
 * `apps/mobile/src/__tests__/serverConstantParity.test.ts` fails when the two
 * drift.
 */
export const TIME_REQUEST_MIN_MINUTES = 5;
export const TIME_REQUEST_MAX_MINUTES = 180;

/** Wait before a child may send another request. Server: `timeRequest/cooldown`. */
export const TIME_REQUEST_COOLDOWN_MS = 1 * 60 * 1000;

export type TimeRequestStatus = 'pending' | 'approved' | 'denied';

export interface TimeRequest {
  id: string;
  deviceId: string;
  deviceName: string;
  requestedMinutes: number;
  reason?: string;
  status: TimeRequestStatus;
  createdAt: string;
  resolvedAt?: string;
}
