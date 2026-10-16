/**
 * How often a parent may press Lock / Unlock on one device (2026-10-15).
 *
 * One press fans out to two `onChildDeviceUpdated` runs, an activity row, a
 * push the child sees and a `syncChildAgent` back; 28 presses in one minute on
 * one device all went through before a limit existed. The server refuses the
 * seventh in a minute (`functions/http/controls.js`, `lockLimiter`, per parent
 * per device) and both parent consoles refuse it first through
 * `admitLockPress`, so a spammed button costs no request at all.
 *
 * The client counts a sliding window and the server a fixed one, so a press
 * the client lets through is never one the server refuses.
 */
export const LOCK_PRESS_WINDOW_MS = 60 * 1000;
export const LOCK_PRESS_MAX = 6;

/**
 * The presses still inside the window plus this one, or `null` when this one
 * would be one too many.
 */
export function admitLockPress(
  presses: readonly number[],
  nowMs: number,
): number[] | null {
  const recent = presses.filter(at => nowMs - at < LOCK_PRESS_WINDOW_MS);
  return recent.length >= LOCK_PRESS_MAX ? null : [...recent, nowMs];
}
