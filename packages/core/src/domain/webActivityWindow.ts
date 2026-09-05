/**
 * Which of a device's stored history days the server will still accept.
 *
 * `logChildWebActivity` takes a `YYYY-MM-DD` within **±7 days of the server's
 * UTC date** and refuses everything else with `web/date-out-of-range`. That
 * rule lived only on the server, and every agent that buffers history needed
 * it: a bucket outside the window is not a slow upload, it is one that can
 * never succeed — the gap only widens as time passes.
 *
 * ## The wedge this exists to stop
 *
 * A ledger keyed by date, uploaded oldest-first, cleared only on success, and
 * a server that refuses anything outside its window, together make a permanent
 * stall — the first stale bucket is retried forever and every newer day queues
 * behind it. At the ±1 day the window started at, **one offline day was enough
 * to end web history for that install**, silently, with the ledger growing a
 * bucket per day afterwards. Measured by reading the two files against each
 * other, 2026-09-01. Widening the window shortens the odds; it does not remove
 * the need for this rule, because any window has an outside.
 *
 * So an agent drops what the window excludes rather than retrying it. What is
 * lost is a day the server was never going to store; what is saved is every
 * day after it.
 *
 * **Seven days, widened from one on 2026-09-01**, so a browser that was
 * offline — or whose family let their subscription lapse and then renewed —
 * catches up instead of losing the gap. The server's own constant carries what
 * that trade costs. Seven is not a ceiling anyone should raise casually: it is
 * also how long an agent must retain locally, and `apps/extension` rewrites its
 * whole ledger on every navigation, so retention is paid for in page-load work
 * rather than in disk alone.
 *
 * **Takes the clock rather than reading one**, per the rule the rest of
 * `domain/` follows — and callers should pass a *server-corrected* now where
 * they have one (`agent/serverTimeOffset`), because the window is measured
 * against the server's clock and a device whose own clock has drifted a day
 * would otherwise discard buckets the server would have taken.
 */

/**
 * Half-width of the accepted window.
 *
 * Hand-mirrored from `DATE_WINDOW_MS` in `functions/http/webActivity.js`, which
 * this package cannot import (functions is outside the workspace —
 * `functions/CLAUDE.md`), and pinned to it by
 * `__tests__/webActivityWindowParity.test.ts`.
 */
export const WEB_ACTIVITY_DATE_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Whether the server would still accept this day.
 *
 * Mirrors `isDateWithinServerWindow` exactly, including its refusal of a
 * malformed key: a bucket the server would reject as unparseable is as
 * unuploadable as one that is too old, and the caller drops both the same way.
 */
export function isWebActivityDateUploadable(dateKey: string, nowMs: number): boolean {
  if (!DATE_PATTERN.test(dateKey)) {
    return false;
  }

  const reportedMs = Date.parse(`${dateKey}T00:00:00Z`);
  if (!Number.isFinite(reportedMs)) {
    return false;
  }

  const now = new Date(nowMs);
  const serverDayMs = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );

  return Math.abs(reportedMs - serverDayMs) <= WEB_ACTIVITY_DATE_WINDOW_MS;
}
