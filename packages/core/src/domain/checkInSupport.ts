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
