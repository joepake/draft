/**
 * "Update now" — a parent asking one child device to pick up the newest JS
 * bundle instead of waiting for its next launch.
 *
 * Third request of its kind, and it reuses the shape the other two settled
 * (`./locationRequest`, `./reportRequest`): a request is not a state change, so
 * it travels as an id the device compares against the last one it answered
 * (`./deviceRequestId`). What is different here is **who may be asked**, and it
 * is not a preference — it is what each platform's update channel can actually
 * do without a person standing at the machine.
 *
 * | Platform             | Asked? | Because                                                       |
 * | -------------------- | ------ | ------------------------------------------------------------- |
 * | `ios`, `android`     | yes    | a JS bundle installs silently (`OtaUpdateService`)             |
 * | `macos`, `windows`   | not yet| no OTA channel exists at all — `docs/FEASIBILITY.md`, gated 2026-09-06 |
 * | `androidtv`          | never  | OTA was gated for the television and turned down               |
 * | `chromeos`           | never  | the Web Store updates the extension and asks nobody            |
 *
 * **The request carries nothing but the ask.** No URL, no version, no hash: the
 * device reads `config/ota` exactly as it does on its own schedule, so both
 * gates in `OtaUpdateService` — an allow-listed Storage host and a published
 * sha256 — stand between this button and the bundle. A request that could name
 * a download would turn a compromised parent account into arbitrary code on a
 * child's phone, which is the one thing that path is built to refuse.
 */

import type { DevicePlatform } from '@kidgate/schema/capabilities';
import type { BuildFreshness } from './buildFreshness';
import { deviceRequestId, deviceRequestedAtMs } from './deviceRequestId';

/**
 * Platforms that can apply a bundle without a person at the keyboard.
 *
 * The two phones, and today only the two phones. `macos` and `windows` join
 * this list the day the desktop OTA in `docs/FEASIBILITY.md` is built — the
 * button, the trigger and the throttle are all already shared, so that is the
 * whole change on this side.
 *
 * A binary update is deliberately **not** in scope for any platform: a store
 * app cannot be remote-triggered at all, and a desktop installer needs an
 * administrator, which a child by definition is not.
 */
export const OTA_REQUEST_PLATFORMS: readonly DevicePlatform[] = ['ios', 'android'];

/** Whether a parent console may ask this device to update at all. */
export function supportsOtaRequest(platform: unknown): boolean {
  return (
    typeof platform === 'string' &&
    OTA_REQUEST_PLATFORMS.includes(platform as DevicePlatform)
  );
}

/**
 * Platforms whose agent takes the request off its own device document.
 *
 * **Empty, and that is the honest state rather than an oversight.** Both
 * platforms that have an OTA channel are phones, which are usually not running
 * and can only be woken by FCM — so `functions/triggers/deviceCommands.js`
 * sends a silent `ota_request` to every device it writes. The desktop agent
 * holds a live listener and no push token, so it belongs here rather than in
 * the push branch, and this list is the line that will say so.
 */
export const LISTENER_OTA_PLATFORMS: readonly DevicePlatform[] = [];

/** Whether this device hears the request through its listener rather than FCM. */
export function usesOtaRequestField(platform: unknown): boolean {
  return (
    typeof platform === 'string' &&
    LISTENER_OTA_PLATFORMS.includes(platform as DevicePlatform)
  );
}

/** Same construction and same reasons as the other two requests. */
export function otaRequestId(nowMs: number, deviceId: string): string {
  return deviceRequestId(nowMs, deviceId);
}

/** When this device was last asked, out of the id already on its document. */
export function otaRequestedAtMs(requestId: unknown): number | null {
  return deviceRequestedAtMs(requestId);
}

/**
 * How often one device may be asked, however often the button is pressed.
 *
 * Five minutes, matching `REPORT_REQUEST_MIN_INTERVAL_MS`, but the cost being
 * bounded is a different one. A report request buys a document write and a
 * push; this one can buy a **3 MB download** on a child's mobile data, and the
 * download has a 120-second timeout of its own. `OtaUpdateBootstrap` holds an
 * `inFlight` ref, but that guards one process — the push handler is a separate
 * entry point that may run with the app dead, so the floor has to be on the
 * asking side too.
 *
 * Five rather than fifteen for the case this button exists for: an operator
 * publishes a bundle, presses, watches nothing happen, and needs to be able to
 * press again while still looking at the screen.
 */
export const OTA_REQUEST_MIN_INTERVAL_MS = 5 * 60 * 1000;

export interface OtaRequestInput {
  /** `Device.platform`. */
  platform: unknown;
  /**
   * What `resolveBuildFreshness` already answered for this device on this
   * screen. Passed in rather than recomputed: both consoles read
   * `config/ota` once per process for the whole list (`useLatestBuilds`), and a
   * second read per button would undo that.
   */
  freshness: BuildFreshness;
  /** From `otaRequestedAtMs(device.otaRequestId)`, or null if never asked. */
  lastRequestedAtMs: number | null;
  nowMs: number;
}

/**
 * Whether "Update now" should be offered — and, pressed, whether it should
 * write.
 *
 * One function for both because the alternative is a button that appears and
 * then refuses, which is the failure `resolveStoreUpdate` names on the phone: a
 * prompt with no working action is worse than no prompt.
 *
 * **`kind: 'app'` is refused deliberately.** A device behind on the *installed
 * build* cannot be helped by a bundle: `OtaUpdateService.checkAndApply` answers
 * `store_update_required` and stops, on purpose — a bundle built against newer
 * native code can call into a binary that does not have it. The honest action
 * there is the store, and this button is not it.
 */
export function shouldRequestOtaCheck(input: OtaRequestInput): boolean {
  if (!supportsOtaRequest(input.platform)) {
    return false;
  }

  if (input.freshness.status !== 'outdated' || input.freshness.kind !== 'bundle') {
    return false;
  }

  return (
    input.lastRequestedAtMs === null ||
    input.nowMs - input.lastRequestedAtMs >= OTA_REQUEST_MIN_INTERVAL_MS
  );
}
