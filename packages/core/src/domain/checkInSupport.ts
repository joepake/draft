/**
 * Whether a safety check-in can reach and be answered on a child device — the
 * question a parent screen asks before it offers the Check-in row or counts a
 * device into a family-wide sweep.
 *
 * **This used to be `supportsLocation`, and the two are not the same question.**
 * The bug both were written to close is real and stays closed: a parent looking
 * at a paired Android TV was offered "Request check-in" on a device where
 * `apps/tv` implements no check-in listener at all, so the request sat pending
 * forever with nothing telling them why. Reusing the location rule excluded that
 * television, which is why it looked right.
 *
 * It excluded it for the wrong reason, and the reason decides what else gets
 * excluded. Location is not a floor a check-in stands on:
 * `docs/DESKTOP_FEATURES.md` says so at the feature — *"sharing off, refused
 * grant, Mac with no fix yet all land on check-in answered without position"* —
 * and the schema models an answer with no photo (`markPhotoSkipped`) for the
 * same reason. A check-in is a child saying "I am okay"; a position and a photo
 * are what it carries when it can.
 *
 * So a Mac whose child has not granted CoreLocation reports `location: false`,
 * honestly, and under the old rule the parent's Check-in row **disappeared** —
 * on a device that runs the listener, raises the window, posts the notification
 * and can answer perfectly well without knowing where it is.
 *
 * ## A platform list, not a probe, and that is deliberate
 *
 * `supportsSos` and `supportsLocation` read `capabilities.sos` and
 * `capabilities.location` because an agent can honestly answer those about the
 * machine it is running on. Nothing answers this one: whether a check-in can be
 * answered is decided by whether that app's build wired a listener, which is a
 * fact about the code rather than about the device. `DeviceCapabilities` gets no
 * `checkIn` field until an agent exists that could report it either way — a
 * field every agent hardcodes is a platform list wearing a probe's clothes.
 *
 * `apps/mobile`'s CLAUDE.md keeps `supportedOn` for exactly this case: features
 * no probe describes. When a build appears that ships without the listener, this
 * becomes a probe and the fallback below is what it falls back to.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';
import { isBrowserOnlySurface } from './deviceSurface';

/**
 * Every platform whose child app listens for a pending check-in and can answer.
 *
 * `apps/mobile` (`useSafetyCheckIn`), `apps/desktop` (`bootstrap.ts` subscribes
 * and raises the window), and Windows, which shares every line of that
 * TypeScript. Absent: `androidtv` — no listener, argued in `apps/tv/CLAUDE.md`.
 */
export const CHECK_IN_PLATFORMS: readonly DevicePlatform[] = [
  'ios',
  'android',
  'macos',
  'windows',
];

export interface CheckInSupportInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  /**
   * `Device.capabilities`, when this device publishes a probe.
   *
   * Not read for a `checkIn` flag — none exists, per the file header — only
   * to tell `apps/extension` apart from the agent it shares a platform string
   * with. See `isBrowserOnlySurface`.
   */
  capabilities?: { webFilter?: DeviceCapabilities['webFilter'] } | null;
}

/**
 * Whether a safety check-in can reach and be answered on this device.
 *
 * A record with no platform at all predates the field, so it is a phone — the
 * same fallback every other support rule in this directory takes, and for the
 * same reason: **absent means unrecorded, never incapable.**
 *
 * `CHECK_IN_PLATFORMS` alone is not enough: `apps/extension` reports
 * `platform: 'macos'` or `'windows'` on those hosts, landing it in the same
 * list as the real desktop agent even though a browser tab has no listener to
 * raise a check-in window or answer one. `isBrowserOnlySurface` is the
 * capability-keyed test the rest of this family uses for the same trap.
 */
export function supportsCheckIn(device: CheckInSupportInput): boolean {
  if (isBrowserOnlySurface(device)) {
    return false;
  }
  return CHECK_IN_PLATFORMS.includes(device.platform ?? 'ios');
}

/**
 * Whether this answer carries the selfie — the free tier's one Check-In limit.
 *
 * Free is location only; the photo is premium (`docs/PRICING.md` §4). The
 * parent app already sends `requirePhoto` from the plan it knows, so this is
 * the second line, and it is the one that holds: **no Cloud Function touches a
 * check-in** and `storage.rules` cannot read a plan, so the request document is
 * whatever a client chose to write. `apps/dashboard` is the honest case — it
 * cannot tell a running trial from a lapsed plan, so it always asks — and a
 * modified parent client is the other.
 *
 * **This does not latch a person-triggered action.** The rule in
 * `.claude/rules/child-agent-shared.md` is that SOS and check-in responses go
 * through, and they do: the answer, its message and its position are sent
 * exactly as before. What is dropped is a paid attachment, which the schema has
 * always modelled as absent (`photoUrl` optional, `markPhotoSkipped`), so the
 * parent reads a check-in answered without a photo rather than one that failed.
 *
 * **Fail-open on a cold start, deliberately.** Every agent's latch answers "not
 * lapsed" until something has been tried — memory everywhere but the extension
 * (same rules file) — so a device that has just booted uploads one photo for a
 * family that turns out to be free. That costs one small image; reading an
 * unknown plan as lapsed would instead deny a paying parent the photo they are
 * owed, on the one feature they reach for when they are worried.
 */
export function answersCheckInWithPhoto(
  requirePhoto: boolean | undefined,
  premiumLapsed: boolean,
): boolean {
  return requirePhoto === true && !premiumLapsed;
}
