/**
 * "Report now" — what makes a thirty-minute cadence bearable.
 *
 * The free tier's device speaks every thirty minutes (`./reportCadence`), and
 * on its own that would be the whole experience: a parent opens the app and
 * reads a card that is up to half an hour old. The trade only works because of
 * the other half — **opening a parent console asks the device to speak now.**
 * Live when someone is looking, nearly free when nobody is. Without this, the
 * cadence is not a slower product, it is a broken one, and it should not ship
 * ahead of it.
 *
 * Modelled on `./locationRequest`, which solved the same problem for "Locate
 * now" and left the shape behind: a request is not a state change, so it
 * travels as an id the device compares against the last one it answered.
 * Two differences, both deliberate:
 *
 * - **The listener list is longer.** Location is refused by a television that
 *   has no position to give; a report is something every child surface can
 *   answer, so `androidtv` and `chromeos` join the desktops.
 * - **Nobody writes it on premium.** A paid device is already a minute or two
 *   behind, so a request would buy nothing and cost a write, a trigger and a
 *   push per device per app open. This is the rare feature that exists only on
 *   the free tier.
 */

import type { DevicePlatform } from '@kidgate/schema/capabilities';
import { deviceRequestId, deviceRequestedAtMs } from './deviceRequestId';
import { ALIVE_MIN_INTERVAL_MS } from './reportCadence';

/**
 * Platforms whose agent takes the request off its own device document.
 *
 * Everything with a live Firestore listener and no push token. The two phones
 * are the exception rather than the rule here: an app that is usually not
 * running can only be woken by FCM, which is why `ios` and `android` are
 * absent and get a silent data message instead
 * (`functions/triggers/deviceCommands.js`).
 *
 * `androidtv` and `chromeos` are present, unlike in `./locationRequest` —
 * there they are excluded because a television has no location to answer with
 * and a request written to one would stand forever. Both can say how long they
 * have been used and that they are alive, which is exactly what this asks for.
 */
export const LISTENER_REPORT_PLATFORMS: readonly DevicePlatform[] = [
  'macos',
  'windows',
  'androidtv',
  'chromeos',
];

/** Whether this device takes report requests as a document field. */
export function usesReportRequestField(platform: unknown): boolean {
  return (
    typeof platform === 'string' &&
    LISTENER_REPORT_PLATFORMS.includes(platform as DevicePlatform)
  );
}

/**
 * The id a request carries. Same construction and same reasons as
 * `locationRequestId`: unique per press so a second request is not mistaken
 * for the snapshot that merely re-delivers the first, and not a uuid because
 * nothing here needs to be unguessable.
 */
export function reportRequestId(nowMs: number, deviceId: string): string {
  return deviceRequestId(nowMs, deviceId);
}

/**
 * When the last request was made, read back out of the id.
 *
 * **This is why the throttle needs no field of its own.** The console holds
 * the device document already — it is what it renders the card from — and the
 * id it wrote last time is on it, carrying its own timestamp. A separate
 * `reportRequestedAt` would be a second field saying what the first one
 * already says, and the two would eventually disagree.
 *
 * It also makes the throttle shared for free: the phone and the dashboard read
 * the same document, so neither can ask without the other seeing that it did.
 * A per-app memory would have let a family with both open ask twice as often
 * as either believed.
 *
 * Null for anything unparseable, which the caller must treat as "never asked"
 * rather than as an error — a device paired before this existed has no id, and
 * that is not a fault.
 */
export function reportRequestedAtMs(requestId: unknown): number | null {
  return deviceRequestedAtMs(requestId);
}

/**
 * How often one device may be asked, however often the console is opened.
 *
 * **Five minutes, and the number is a ceiling on someone else's bug as much as
 * on a parent's habit.** A parent flicking between apps, a screen that
 * remounts on every tab change, a dashboard left open in a reloading browser
 * tab — each of those is an "open", and without a floor here the request path
 * is a heartbeat with no throttle at all, which is precisely the cost the
 * thirty-minute cadence was introduced to avoid.
 *
 * Five rather than one: the freshest thing a request can produce is what a
 * premium device gives anyway (one to two minutes), so asking more often than
 * that buys a parent nothing measurable while multiplying the cost by five.
 * Five rather than fifteen: a parent who opens the app, sees a stale number
 * and pulls to refresh must not be told to wait a quarter of an hour.
 */
export const REPORT_REQUEST_MIN_INTERVAL_MS = 5 * 60 * 1000;

/**
 * A reading is not worth asking about until it is older than this.
 *
 * The point a parent notices. Under a minute, the card is telling the truth
 * and a request would spend a write to redraw the same number.
 */
export const REPORT_REQUEST_STALE_AFTER_MS = 60 * 1000;

export interface ReportRequestInput {
  /**
   * The cadence this device says it is keeping (`Device.beatIntervalMs`).
   *
   * **The plan is deliberately not the input.** A console asking "is this
   * family free?" is asking the wrong question and, on `apps/dashboard`,
   * an unanswerable one — it has no `TRIAL_DAYS` and so cannot tell a running
   * trial from a lapsed one (`docs/BACKLOG.md`). The question that matters is
   * "is this device about to be quiet for a while", which the device itself
   * has already answered on its last heartbeat, and answered better: it is
   * right about a lapse latch that has not cleared, about a parked device, and
   * about a device on an older build that beats every minute whatever the
   * family pays.
   *
   * A device beating at the live cadence is never asked — it is already a
   * minute behind, so the request would buy nothing measurable and cost a
   * write, a trigger invocation and a push per device per app open. Absent
   * reads as the live cadence, which is what an older build keeps.
   */
  beatIntervalMs: unknown;
  /**
   * When this device was last asked, or null if it never has been.
   *
   * From `reportRequestedAtMs(device.reportRequestId)` — a fact about the
   * device document, not about this console's memory, which is what makes the
   * throttle hold across both of them.
   */
  lastRequestedAtMs: number | null;
  /** `Device.lastActiveAt`, as stored. Absent for a device that never reported. */
  lastActiveAt: string | null | undefined;
  nowMs: number;
}

/**
 * Whether opening the console should ask this device to report.
 *
 * Pure, and shared by both parent consoles, because the alternative is two
 * apps with two throttles: a family with the phone and the dashboard open
 * would be asking twice as often as either app believes it is, and the
 * cheapest way for that to be true is for nobody to have written the rule
 * down once.
 */
export function shouldRequestReport(input: ReportRequestInput): boolean {
  const beatIntervalMs =
    typeof input.beatIntervalMs === 'number' && Number.isFinite(input.beatIntervalMs)
      ? input.beatIntervalMs
      : ALIVE_MIN_INTERVAL_MS;
  if (beatIntervalMs <= ALIVE_MIN_INTERVAL_MS) {
    return false;
  }

  if (
    input.lastRequestedAtMs !== null &&
    input.nowMs - input.lastRequestedAtMs < REPORT_REQUEST_MIN_INTERVAL_MS
  ) {
    return false;
  }

  /*
   * A device that has never reported is asked. It is the case where the parent
   * has the least information and the card says the least — and if the device
   * is not there to answer, the request costs one field write that nothing
   * ever reads.
   */
  if (!input.lastActiveAt) {
    return true;
  }

  const reportedAtMs = new Date(input.lastActiveAt).getTime();
  if (Number.isNaN(reportedAtMs)) {
    return true;
  }

  return input.nowMs - reportedAtMs >= REPORT_REQUEST_STALE_AFTER_MS;
}
