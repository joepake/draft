import type { IsoDate, IsoDateTime, Millis } from '@kidgate/schema/primitives';

/**
 * Wall time, as a dependency.
 *
 * Every schedule rule in this product is expressed in the child's local time —
 * "no phone after 21:00" means 21:00 where the child is. Reading the clock
 * directly makes that logic untestable and makes bugs reproduce only near
 * midnight, only in one timezone, only on the day the offset changes.
 *
 * A daily limit resets at local midnight, not UTC midnight. Devices in the
 * family may sit in different timezones. Nothing in `@kidgate/core` may call
 * `Date.now()` or construct a bare `new Date()`.
 */
export interface ClockPort {
  now(): Millis;

  /** IANA identifier, e.g. `Asia/Ho_Chi_Minh`. */
  timezone(): string;

  /** Device-local calendar day. The unit usage and limits are counted in. */
  today(): IsoDate;

  /** UTC, for anything written to Firestore. */
  nowIso(): IsoDateTime;

  /**
   * Minutes since local midnight. Schedule windows compare against this rather
   * than against a parsed `Date`, so a window crossing midnight stays simple
   * arithmetic.
   */
  minutesSinceLocalMidnight(): number;
}
