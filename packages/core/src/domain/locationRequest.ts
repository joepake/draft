/**
 * "Locate now", and which channel it has to travel down.
 *
 * The product has exactly one parent command that is not a state change. Every
 * other switch — lock, daily limit, schedule, an approved time request — is a
 * field of the child device document, so any device that reads that document
 * sees it. "Answer with your position right now" is not a field of anything: it
 * is a request, and the child's answer is a different field entirely
 * (`lastLocation`).
 *
 * Two devices, two channels, and the split is not a preference:
 *
 * | Platform             | Channel                              | Because                                            |
 * | -------------------- | ------------------------------------ | -------------------------------------------------- |
 * | `ios`, `android`     | FCM data message `location_request`  | the app is usually not running; only a push wakes it |
 * | `macos`, `windows`   | `Device.locationRequestId`, a field  | the agent holds a live listener and has no push token |
 *
 * The desktop agent will never have the first. Web push inside a WKWebView is
 * argued down in `apps/desktop/CLAUDE.md`, and the agent already holds a
 * Firestore listener on its own device document for controls — which delivers a
 * field change in the same latency a push would, with none of the token
 * plumbing. So the request is *written* rather than *sent*, and the agent
 * clears it once it has answered.
 *
 * This module exists so the two halves of that decision — the server writing
 * the request and the agent clearing it — cannot come to disagree about which
 * platforms use which channel. `functions/http/location.js` sent every device a
 * push before it existed, and a Mac's answer was
 * `location/child-no-push-token`: a parent told to open KidGate on the child
 * iPhone, about a MacBook. The button had never worked on a desktop.
 */

import type { DevicePlatform } from '@kidgate/schema/capabilities';

/**
 * Platforms whose agent takes "Locate now" off its own device document.
 *
 * `androidtv` is deliberately absent. It runs the same listener and would
 * receive the field perfectly well — it has no location to report, so a request
 * written there would stand until something cleared it and a parent would watch
 * a TV never answer. A device that cannot answer is better served by the
 * capability probe saying `location: false`, which is what a parent's screen
 * already reads before it offers the button.
 *
 * `windows` **is** here even though that agent reports `location: false` today.
 * The endpoint refuses a request for a device whose `locationSharingEnabled` is
 * off long before it reaches this list, and that switch is what a parent's
 * screen keeps off for a platform that cannot locate — so the honest error
 * (`location/sharing-disabled`) is the one they get, rather than the push
 * branch's advice to go and open KidGate on a phone. When location lands on
 * Windows, the channel is already the right one.
 */
export const LISTENER_LOCATION_PLATFORMS: readonly DevicePlatform[] = [
  'macos',
  'windows',
];

/** Whether this device takes location requests as a document field. */
export function usesLocationRequestField(platform: unknown): boolean {
  return (
    typeof platform === 'string' &&
    LISTENER_LOCATION_PLATFORMS.includes(platform as DevicePlatform)
  );
}

/**
 * The id a request carries.
 *
 * Unique per press rather than per device: the agent tells a second request
 * from the snapshot that merely re-delivers the first by comparing this value,
 * so two presses a second apart have to differ. The timestamp does that, and
 * the device id keeps two devices' requests from ever colliding in a log.
 *
 * Not a uuid, because nothing here needs unguessability: the field is written
 * by the Admin SDK and read by one device, which is already the only reader
 * `firestore.rules` allows.
 */
export function locationRequestId(nowMs: number, deviceId: string): string {
  return `${nowMs}-${deviceId}`;
}
