/**
 * How long a parent console may be out of sight before it stops listening.
 *
 * **A Firestore listener is billed one read per document change**, so a console
 * watching `childDevices` pays for every change to every child device for as
 * long as it stays attached — whether or not a person is looking at it.
 *
 * **How much that is has NOT been established, and an earlier version of this
 * comment claimed a number that was then disproved.** It said parent listeners
 * were the largest share of all reads; closing every console for eleven hours
 * on `kidgate` moved reads *up*, not down. `docs/DATA_RETENTION.md` §9 carries
 * the measurement and the correction. Nothing here rests on that number any
 * more, and nothing should: this exists because holding a socket open for a
 * screen nobody is looking at is waste by construction, whatever it costs.
 *
 * Nothing is lost by detaching. The events a backgrounded console must not miss
 * arrive as push (`device_locked`, `device_unlocked`, `daily_limit_updated`,
 * `time_request_approved`), and the one thing a live listener buys over them —
 * an online dot that updates while nobody is watching it — is worth nothing by
 * definition.
 *
 * Lives in `domain/` because both parent surfaces need the same number and only
 * one of them has an `AppState`: `apps/mobile` reads it from React Native,
 * `apps/dashboard` from `visibilitychange`. Two graces would be two answers to
 * one question, and the wrong one would show up as a console that thrashes.
 */

import type { Millis } from '@kidgate/schema/primitives';

/**
 * One minute of being hidden before the listeners go.
 *
 * **Chosen so that detaching can never cost more than staying**, which is what
 * makes it safe rather than a guess. Re-attaching costs one read per device —
 * the listener's opening snapshot — and staying attached costs the same one read
 * per device on every beat, which is `ALIVE_MIN_INTERVAL_MS`, a minute. A
 * console hidden for less than that has not yet cost a round of reads by
 * staying, so nothing is saved by leaving early; hidden for longer, every
 * further minute is one round saved.
 *
 * It is also long enough to sit out the interruptions that are not really the
 * parent leaving: a notification shade, an incoming call, the OS permission
 * sheet, a tab switch to look something up.
 */
export const CONSOLE_HIDDEN_GRACE_MS: Millis = 60_000;

/**
 * Whether a console hidden since `hiddenSinceMs` should now let its listeners
 * go. `null` means it is on screen.
 *
 * A function rather than a comparison at each call site so the two surfaces
 * cannot drift on the boundary condition, and so the reasoning above has one
 * place to be read from.
 */
export function shouldDetachListeners(
  hiddenSinceMs: Millis | null,
  nowMs: Millis,
): boolean {
  if (hiddenSinceMs === null) {
    return false;
  }
  return nowMs - hiddenSinceMs >= CONSOLE_HIDDEN_GRACE_MS;
}
