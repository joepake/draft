/**
 * How often a child device speaks, and how long its silence means nothing.
 *
 * **The paywall runs along this axis, not along the feature list**
 * (`docs/PRICING.md` §3). A free family keeps every rule — the limit, the
 * schedule, the lock, the blocked apps — and what it does not keep is
 * *liveness*: the device reports on a slow cadence and the parent's screen is
 * correspondingly behind. What costs money to run is never the rule sitting in
 * a document the agent already fetches; it is the write, the function
 * invocation and the billed read on every parent listener that each report
 * sets off. A beat every minute is 720 writes a day. Every thirty, it is 48.
 *
 * The two halves have to move together, which is why they are one module. A
 * cadence loosened without loosening the staleness window turns every free
 * device **permanently Offline** on both parent consoles — the device is
 * working, enforcing, and reporting exactly as designed, and the product says
 * it is dead. That is a worse outcome than the cost the slower cadence saves,
 * and it is one edit away at all times.
 *
 * Lives in `domain/` rather than beside the beat in `agent/`, because both
 * sides of the split need it and only one of them is an agent: `agent/` may
 * import `domain/` and never the reverse (`packages/core/CLAUDE.md`), and the
 * parent consoles reading `getEffectiveDeviceStatus` are not agents at all.
 */

import type { Millis } from '@kidgate/schema/primitives';

/**
 * One minute — the live cadence, on trial and on premium.
 *
 * The ceiling is not negotiable and is three: `OFFLINE_THRESHOLD_MS` in
 * `./deviceStatus`. A minute leaves two beats of slack for a device waking, a
 * slow network, or a beat that ran late — which on Android TV is the likely
 * case, since Doze and an OEM battery manager both delay timers.
 */
export const ALIVE_MIN_INTERVAL_MS: Millis = 60_000;

/**
 * Thirty minutes — the free tier's cadence.
 *
 * **Thirty, because a parent looking is what makes liveness worth paying
 * for.** The number is not chosen against a staleness a parent will tolerate;
 * a parent staring at the screen tolerates none. It is chosen against the fact
 * that nobody is staring: a free family's device card is correct within half an
 * hour on its own, and correct *now* the moment the parent opens either
 * console, because opening one asks the device to report (the "report now"
 * command on `notifyChildDeviceCommand`). Live when someone is looking, nearly
 * free when nobody is.
 *
 * Fifteen would halve the staleness and double the cost for a screen nobody
 * has open; an hour saves almost nothing more — the curve is already flat by
 * thirty — while making the on-open refresh, which has to cross a network,
 * carry the whole burden of the experience.
 */
export const LAPSED_ALIVE_INTERVAL_MS: Millis = 30 * 60_000;

/**
 * Three beats of silence is offline, at either cadence.
 *
 * One missed beat is a device waking, a slow network or a delayed timer; three
 * in a row is a device that has stopped. Keeping the *ratio* rather than the
 * *number* is what makes the free tier's card mean the same thing as the paid
 * one — "we have missed three of these" — instead of two unrelated promises
 * that happen to share a colour.
 *
 * **Ninety minutes is not a good "Online", and it is not meant to be one.** A
 * free device that was switched off twenty minutes ago still satisfies this
 * window, and a green dot claiming otherwise is the product lying at exactly
 * the size it sells against. The free card's honest reading is *"last seen 20
 * minutes ago"* — the staleness stated, which is also the upgrade argument
 * making itself. This threshold exists so that until both consoles render
 * that, a working free device is not painted dead; it is the floor, not the
 * design. `docs/PRICING.md` §4 carries the row this has to end up matching.
 */
export const OFFLINE_BEATS = 3;

export const OFFLINE_THRESHOLD_MS: Millis = OFFLINE_BEATS * ALIVE_MIN_INTERVAL_MS;

export const LAPSED_OFFLINE_THRESHOLD_MS: Millis =
  OFFLINE_BEATS * LAPSED_ALIVE_INTERVAL_MS;

/**
 * The cadence a device on this plan beats at.
 *
 * Takes the lapse verdict rather than a plan id: the agent side has no plan
 * id. It learns it stopped being premium from a refusal it was handed — see
 * `domain/premiumLapse` — and that latch is the only answer available inside
 * the child process. The parent side has the plan and computes the same
 * boolean from it, which is why this takes the boolean and not either source.
 */
export function aliveIntervalMs(premiumLapsed: boolean): Millis {
  return premiumLapsed ? LAPSED_ALIVE_INTERVAL_MS : ALIVE_MIN_INTERVAL_MS;
}

/** The silence that means offline, matched to `aliveIntervalMs`. */
export function offlineThresholdMs(premiumLapsed: boolean): Millis {
  return premiumLapsed ? LAPSED_OFFLINE_THRESHOLD_MS : OFFLINE_THRESHOLD_MS;
}

/**
 * The window to judge **this** device by, from the cadence it says it is
 * keeping (`Device.beatIntervalMs`).
 *
 * **The device is the authority, not the console, and that is the whole point
 * of the field.** A parent surface could in principle work the answer out from
 * the family's plan, and both of them tried to: the phone by reading its
 * subscription context, the dashboard by — nothing, because it cannot. It has
 * no `TRIAL_DAYS` (`docs/BACKLOG.md`, "Plans and billing"), so it cannot tell
 * a running trial from a lapsed one, and those two want opposite windows.
 *
 * Reading the device instead makes the question local and answerable. It is
 * also *more* correct than the plan would be, in three ways nobody would have
 * remembered to handle:
 *
 * - a device whose lapse latch has not cleared yet is still beating slowly
 *   while the family's billing document already says premium;
 * - a parked device (`docs/PRICING.md` §6) beats not at all;
 * - a device on an older build beats every minute whatever the family pays,
 *   and reports no field — which is exactly what `undefined` here means.
 *
 * Clamped rather than trusted: this value is written by the child device, and
 * a device that could name its own offline window could name one it never
 * misses. The floor is the live window and the ceiling the free tier's, so the
 * worst a compromised or buggy agent can claim is the slow cadence it could
 * have claimed by simply lapsing.
 */
export function offlineThresholdForBeat(beatIntervalMs: unknown): Millis {
  if (typeof beatIntervalMs !== 'number' || !Number.isFinite(beatIntervalMs)) {
    return OFFLINE_THRESHOLD_MS;
  }
  const clamped = Math.min(
    Math.max(beatIntervalMs, ALIVE_MIN_INTERVAL_MS),
    LAPSED_ALIVE_INTERVAL_MS,
  );
  return OFFLINE_BEATS * clamped;
}
