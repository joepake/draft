/**
 * Permission states as they are **written to the device document** and read by
 * the parent UI.
 *
 * Distinct from `PermissionStatus` in `@kidgate/ports/enforcement/peripherals`,
 * and deliberately so: that one is what a native module returns right now, this
 * one is what was last persisted. They differ in vocabulary because they come
 * from different worlds — Apple's authorization status has `approved` and
 * `notDetermined`, a permission prompt has `blocked`.
 *
 * Source: legacy `src/services/native/controls.ts` and `src/types/Device.ts`.
 */

/**
 * iOS Screen Time (FamilyControls) authorization.
 *
 * `unavailable` covers both a platform without the API and an OS too old for
 * it — the parent UI must not offer to request what cannot be requested.
 */
export type ScreenTimeStatus = 'unavailable' | 'notDetermined' | 'denied' | 'approved';

/**
 * Everything else the child device needs granted.
 *
 * `unknown` is not the same as `notDetermined`: the former means the device has
 * not reported yet (old build, never came online), the latter means it reported
 * that the user has not been asked. A parent screen must show those
 * differently — one is "waiting for the device", the other is "finish setup".
 *
 * `foregroundOnly` is written for `location` alone: a fix can be read while
 * KidGate is open and never while it is closed — iOS "While Using the App",
 * Android 10+ without "Allow all the time". Both phones reported it as
 * `authorized` until 2026-09-28, so the wizard ticked and both consoles read
 * Protected over a map that only moved with the app open. A reader that can
 * read a fix treats it as granted; a reader asking "is this set up" does not.
 * Consoles older than that date fall through to their default and say nothing
 * about it — the same as they said about `authorized`.
 */
export type ProtectionPermissionStatus =
  | 'authorized'
  | 'foregroundOnly'
  | 'denied'
  | 'notDetermined'
  | 'restricted'
  | 'unavailable'
  | 'unknown';
