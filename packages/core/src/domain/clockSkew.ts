/**
 * How far the device clock may be trusted, and when the gap is a tamper.
 *
 * Every rule this product enforces is a comparison against the clock — a
 * blocked-hours window, the day a minute of usage counts toward, whether a
 * reward is claimable yet — so a child who can move the clock can move all of
 * them at once. The answer is an *offset*: the difference between the server's
 * clock and this device's, applied wherever enforcement asks the time.
 *
 * The thresholds live here rather than in the app that first needed them
 * because there are five agents now and the numbers must be one number each.
 * `apps/mobile` held its own copies in `services/time/serverTime.ts` and
 * `services/detectTamper.ts`; a hand-mirrored constant is the bug class this
 * monorepo exists to end (root `CLAUDE.md`, rule 2).
 *
 * Pure. Holding no state is what lets both the phone — which reads server time
 * from a response `Date` header — and the always-on agents — which read it from
 * a `serverTimestamp()` the heartbeat already writes — decide the same way.
 */

import type { Millis } from '@kidgate/schema/primitives';

/**
 * Beyond a year apart, believe neither clock.
 *
 * A guard against a poisoned reading rather than against a child: a proxy
 * answering with a fixed date, a device whose clock reset to 1970 on a flat
 * battery, a parsed value that is nonsense. Accepting one of those would hand
 * enforcement a date decades away and lock or unlock the device forever, and
 * the device could not correct itself afterwards because every later comparison
 * would run through the same bad offset.
 */
export const MAX_REASONABLE_OFFSET_MS = 365 * 24 * 60 * 60 * 1000;

/**
 * Under two minutes, treat the clocks as agreeing.
 *
 * Ordinary drift, NTP steps and the round trip the reading itself costs all sit
 * well inside this. It is not an enforcement threshold — the offset is applied
 * whatever its size — it is what stops "the clock was moved" from being said
 * about a device that is simply a few seconds out.
 */
export const SIGNIFICANT_OFFSET_MS = 2 * 60 * 1000;

/**
 * Ten minutes: the point where a parent is told.
 *
 * Deliberately far above `SIGNIFICANT_OFFSET_MS`. A device that is two minutes
 * out is a device with a bad clock; a device that is ten minutes out was set,
 * and a curfew or a daily limit is the reason. The gap between the two numbers
 * is the room a false alarm would otherwise live in — an alert a parent cannot
 * act on teaches them to ignore the next one.
 */
export const CLOCK_SKEW_ALERT_MS = 10 * 60 * 1000;

/**
 * Don't re-alert the same moved clock more often than this.
 *
 * The offset does not decay: once a child sets the clock forward an hour, every
 * reading for the rest of the day says an hour. Without a dedupe that is one
 * activity row per heartbeat.
 */
export const CLOCK_SKEW_ALERT_DEDUPE_MS = 30 * 60 * 1000;

/**
 * The offset implied by one reading, or null when the reading is unusable.
 *
 * Null rather than zero on rejection, and the difference is the whole point: a
 * caller that folded a bad reading into zero would announce "the clocks agree"
 * on the strength of a value it just refused to believe, and would overwrite a
 * good offset it already had.
 */
export function offsetFromServerTime(
  serverMs: number | undefined,
  deviceMs: Millis,
): Millis | null {
  if (serverMs === undefined || !Number.isFinite(serverMs) || serverMs <= 0) {
    return null;
  }

  const offset = serverMs - deviceMs;
  if (!Number.isFinite(offset) || Math.abs(offset) >= MAX_REASONABLE_OFFSET_MS) {
    return null;
  }

  return offset;
}

/** The device clock disagrees with the server by more than ordinary drift. */
export function isClockSkewed(offsetMs: Millis): boolean {
  return Math.abs(offsetMs) >= SIGNIFICANT_OFFSET_MS;
}

/** Far enough out to tell the parent about — see `CLOCK_SKEW_ALERT_MS`. */
export function isClockTampered(offsetMs: Millis): boolean {
  return Math.abs(offsetMs) >= CLOCK_SKEW_ALERT_MS;
}
