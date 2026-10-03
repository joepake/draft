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
 * sets off. Measured 2026-09-18: **a beat is about ten billable operations**,
 * because the document it writes carries both a Firestore trigger and the
 * agent's own listener. At three minutes that is 480 beats a day; at thirty, 48.
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
 * Three minutes — the live cadence, on trial and on premium.
 *
 * **It was sixty seconds until 2026-09-18.** What moved it is measured in
 * `docs/FEASIBILITY.md`, "The heartbeat is billed three times": one beat costs a
 * write, a Cloud Function invocation — `onchilddeviceupdated` fires **1:1** with
 * the beat — and the device's own `controlsSync` listener reading that write
 * back. About ten billable operations to record a timestamp. All three are a
 * function of how often the document is written, so tripling the interval cuts
 * all three in the same proportion.
 *
 * **What it costs is detection latency, and it is the number of attempts that is
 * unbounded.** The time a child can steal by moving the device clock is bounded
 * *per attempt* by the gap between readings — three minutes here rather than one
 * — because every reading snaps the offset back to the server's
 * (`domain/clockSkew`). **The offset does not accumulate; the stolen minutes
 * do.** Nothing stops the trick being repeated after each correction, so this
 * number prices one attempt and caps no total. A monotonic-clock guard is what
 * would cap it (`docs/FEASIBILITY.md`, "The heartbeat is billed three times").
 * `SIGNIFICANT_OFFSET_MS` is the magnitude at which a skew is *reported* and has
 * never been a floor under this number, whatever the label in
 * `scripts/beat-cost.mjs` used to claim. On the agents wired to
 * `agent/serverTimeOffset.observeSyncAnswer` the clock does not ride this write
 * at all any more.
 *
 * Still three beats of slack for a device waking, a slow network or a timer that
 * ran late — which on Android TV is the likely case, since Doze and an OEM
 * battery manager both delay them.
 */
export const ALIVE_MIN_INTERVAL_MS: Millis = 3 * 60_000;

/**
 * Two hours — the floor a device beats at while nobody is looking, on either
 * tier.
 *
 * **It was thirty minutes on the free tier and fifteen on the paid one until
 * 2026-09-27, and both were paid for a screen nobody had open.** A parent's
 * dot is drawn in a console, and every console asks the device to speak the
 * moment it opens (`./reportRequest`, throttled to five minutes and re-asked
 * while the phone's family screen stays open); the answer is a beat within
 * seconds and the live cadence for `CONSOLE_LIVE_WINDOW_MS` after. Between
 * visits the stamp serves the parking rollout's "most recently active" pick
 * and the operator's seven-day buckets, neither of which can tell two hours
 * from thirty minutes. Ninety-six presence writes a day per paying phone, or
 * forty-eight per free one, bought exactly nothing a parent could see
 * (`docs/FEASIBILITY.md`, "Telemetry leaves the device document").
 *
 * Two hours rather than never: a phone whose silent push is held by Doze, or
 * an agent whose listener died, still surfaces on its own within the floor —
 * and until it does, a console that asked and heard nothing for
 * `REPORT_REQUEST_UNANSWERED_MS` paints it offline, which is the truth.
 *
 * **What a device publishes is this floor, never the live cadence it happens
 * to be keeping** (`Device.beatIntervalMs`, `publishedAliveIntervalMs`). A
 * console judges silence against the published number, and a live beat that
 * published three minutes would have every console painting the device dead
 * nine minutes after the parent stopped looking. Publishing the floor gives
 * the console a six-hour window it never actually needs — the request
 * handshake decides within five minutes of a look — and keeps
 * `shouldRequestReport` asking, which is what arms the live window.
 *
 * The free tier's own product sentence ("correct within half an hour on its
 * own", `docs/PRICING.md` §3) becomes "correct the moment you look", which is
 * the half of the sentence anybody ever saw.
 */
export const LAPSED_ALIVE_INTERVAL_MS: Millis = 2 * 60 * 60_000;

/**
 * A paying family's cadence **while no parent is looking** — the same floor
 * as the free tier's since 2026-09-27, for the reason stated on it.
 *
 * Fifteen minutes from 2026-09-23 to 09-27. What the paid tier sells is the
 * live cadence while a parent looks (`ALIVE_MIN_INTERVAL_MS`, for
 * `CONSOLE_LIVE_WINDOW_MS` after each request); what the idle cadence sold
 * was a fresher stamp for a console that was closed. Kept as its own name so
 * `aliveIntervalMs` still reads as the two-tier decision it is, and so the
 * two floors can part again if a reason turns up.
 *
 * **Parting them re-exposes a latent defect, so read
 * `domain/premiumLapse`'s `PREMIUM_LAPSE_LATCH_MS` first.** That latch is
 * fifteen minutes and the sync that renews it has a thirty-minute floor, so a
 * lapsed agent reads as paying for the back half of every cycle. Both branches
 * below returning this same value is the only reason that costs nothing today;
 * split them and an idle free device takes the live cadence half the time.
 */
export const IDLE_ALIVE_INTERVAL_MS: Millis = LAPSED_ALIVE_INTERVAL_MS;

/**
 * How long a device keeps the live cadence after a console asked it to speak.
 *
 * Ten minutes since 2026-09-27 (twenty before): two of the phone console's
 * five-minute re-asks, so a device stays live for as long as a parent keeps
 * the family screen open and drops back to the floor a few beats after they
 * leave. It was sized to cover a whole visit on one request when the dashboard
 * was the only console that asked once; the tail after a visit is the part
 * that costs, and every request inside the window re-arms rather than stacks.
 * A device also starts live: a freshly paired phone is one a parent is
 * watching come online.
 */
export const CONSOLE_LIVE_WINDOW_MS: Millis = 10 * 60_000;

/**
 * Three beats of silence is offline, at either cadence.
 *
 * One missed beat is a device waking, a slow network or a delayed timer; three
 * in a row is a device that has stopped. Keeping the *ratio* rather than the
 * *number* is what makes the free tier's card mean the same thing as the paid
 * one — "we have missed three of these" — instead of two unrelated promises
 * that happen to share a colour.
 *
 * **Six hours (three of the two-hour floor) is not a good "Online", and it is
 * not meant to be one.** Since 2026-09-27 the question is settled by the
 * request a console sends on opening — answered means a stamp newer than the
 * request, unanswered for `REPORT_REQUEST_UNANSWERED_MS` means offline — and
 * this window only ever decides for a device nobody has asked. Ninety minutes
 * was the free tier's window before that. A
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
 *
 * `consoleLive` is whether a parent console asked to see this device recently
 * (`agent/consoleLiveWindow`). It moves a paying device between the live and
 * the idle cadence and does nothing for a lapsed one: the two-hour floor
 * whether anybody is looking or not is the free tier's product
 * (`docs/PRICING.md` §3) — what a free parent gets on opening the app is the
 * single report the request asks for, never a live cadence — and "live while
 * you look" is what the paid tier sells. Defaults to live, so a caller that
 * has not been taught the window keeps the cadence it had.
 */
export function aliveIntervalMs(premiumLapsed: boolean, consoleLive = true): Millis {
  if (premiumLapsed) {
    return LAPSED_ALIVE_INTERVAL_MS;
  }
  return consoleLive ? ALIVE_MIN_INTERVAL_MS : IDLE_ALIVE_INTERVAL_MS;
}

/**
 * The cadence a device **publishes** with its beat (`Device.beatIntervalMs`):
 * the floor for its tier, never the live cadence — see
 * `LAPSED_ALIVE_INTERVAL_MS` for why the two parted on 2026-09-27.
 */
export function publishedAliveIntervalMs(premiumLapsed: boolean): Millis {
  return premiumLapsed ? LAPSED_ALIVE_INTERVAL_MS : IDLE_ALIVE_INTERVAL_MS;
}

/** The silence that means offline, matched to `aliveIntervalMs`. */
export function offlineThresholdMs(premiumLapsed: boolean): Millis {
  return premiumLapsed ? LAPSED_OFFLINE_THRESHOLD_MS : OFFLINE_THRESHOLD_MS;
}

/**
 * What a build before 2026-09-27 published while idle on the paid tier.
 *
 * Kept only so `slowBeatMinutes` can tell that build's idle paying device
 * (fifteen) from that build's free device (thirty): the sentence below says
 * "Free plan", and it was floored above the idle cadence precisely so a
 * paying device never drew it. Current builds publish the two-hour floor on
 * both tiers and draw nothing.
 */
const LEGACY_IDLE_ALIVE_INTERVAL_MS: Millis = 15 * 60_000;

/**
 * The cadence a **pre-2026-09-27 free-tier build** keeps, in whole minutes —
 * otherwise `null`, meaning there is nothing worth telling the parent.
 *
 * The sentence it feeds is `docs/PRICING.md` §8 item 7: a card that says only
 * "Online" over a number twenty minutes old is the plan working as sold and
 * an app that has stopped syncing, drawn identically. A current build has no
 * such number — it answers the request a console sends on opening within
 * seconds, and between visits it publishes the same floor on both tiers, so
 * there is no cadence to state. What still has one is the free device on an
 * older build, beating every thirty minutes whoever is looking; it publishes
 * thirty and gets the sentence, and an older paying build's idle fifteen
 * does not, for the reason `LEGACY_IDLE_ALIVE_INTERVAL_MS` states.
 */
export function slowBeatMinutes(beatIntervalMs: unknown): number | null {
  if (typeof beatIntervalMs !== 'number' || !Number.isFinite(beatIntervalMs)) {
    return null;
  }
  if (
    beatIntervalMs <= LEGACY_IDLE_ALIVE_INTERVAL_MS ||
    beatIntervalMs >= LAPSED_ALIVE_INTERVAL_MS
  ) {
    return null;
  }
  return Math.round(beatIntervalMs / 60_000);
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
