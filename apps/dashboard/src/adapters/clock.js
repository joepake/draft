/**
 * `ClockPort` over the browser clock.
 *
 * The mobile adapter reads a server-corrected time instead, because three
 * product rules a child benefits from moving — the time-request cooldown,
 * subscription entitlement, reward-task availability — are decided against it
 * on the device that runs the child's app.
 *
 * None of those are decided here. A browser is the parent's surface: it renders
 * a usage range and picks the day key to read, and both are wrong for the
 * parent's own reasons if the parent's laptop clock is wrong. Adding an offset
 * sync would be a second source of truth for no gain, so this is deliberately
 * plain — recorded here so the difference from mobile reads as a decision.
 */
export function createClockAdapter() {
  const now = () => Date.now();

  return {
    now,

    timezone() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    },

    /**
     * Local calendar day, not UTC: usage limits and schedules are human-day
     * concepts, and `toISOString()` would shift the key by a day either side of
     * UTC midnight for most of the world.
     */
    today() {
      const date = new Date(now());
      const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
      return local.toISOString().slice(0, 10);
    },

    nowIso() {
      return new Date(now()).toISOString();
    },

    minutesSinceLocalMidnight() {
      const date = new Date(now());
      return date.getHours() * 60 + date.getMinutes();
    },
  };
}
