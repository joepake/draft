/**
 * `ClockPort` for a child agent, over the device clock plus a server offset.
 *
 * Shared: `apps/desktop` and `apps/tv`. The TV had its own four-line version
 * reading `Date.now()` straight, which is the bug the offset exists to stop —
 * and a television's clock is easier to reach than a laptop's, not harder.
 *
 * Takes a server-time offset rather than reading the system clock straight,
 * because the child can change the device clock and every rule in
 * this product is a comparison against it. Winding it forward past 07:00
 * must not end a curfew, and winding it back must not hand back a spent daily
 * limit. `apps/mobile` solves the same problem with `ServerTime`; this is the
 * same idea with the offset injected instead of read from a singleton.
 *
 * The offset is a function, not a number: it is refreshed whenever the agent
 * next reaches the server, and a clock captured at construction would be the
 * one thing in here that goes stale.
 */

import type { ClockPort } from '@kidgate/ports/clock';
import type { IsoDate, IsoDateTime, Millis } from '@kidgate/schema/primitives';

export interface SystemClockOptions {
  /**
   * Milliseconds to add to the device clock to get server time. Zero until the
   * agent has heard from the server, which is the honest starting point — not
   * a reason to refuse to enforce anything.
   */
  offsetMs?: () => Millis;
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

export function createSystemClock(options?: SystemClockOptions): ClockPort {
  const offset = options?.offsetMs ?? (() => 0);
  const corrected = () => new Date(Date.now() + offset());

  return {
    now(): Millis {
      return Date.now() + offset();
    },

    timezone(): string {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    },

    /**
     * The device's local calendar day, assembled from local parts rather than
     * from `toISOString().slice(0, 10)` — that returns the UTC day, which in
     * Ho Chi Minh City is the previous day for the first seven hours of every
     * morning. A daily limit that resets at 07:00 instead of midnight is the
     * kind of bug that only reproduces in one timezone.
     */
    today(): IsoDate {
      const date = corrected();
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    },

    nowIso(): IsoDateTime {
      return corrected().toISOString();
    },

    minutesSinceLocalMidnight(): number {
      const date = corrected();
      return date.getHours() * 60 + date.getMinutes();
    },
  };
}
