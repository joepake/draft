/**
 * Whether a device can report which videos the child watched.
 *
 * Same two rules as the rest of this family: the device's own probe
 * (`DeviceCapabilities.videoHistory`) outranks any platform list, and an
 * absent probe is unknown rather than no. The list answers for the agents that
 * publish no probe — the Android phone, whose media-session reader is
 * `KidGateYoutubeWatch`. The Chrome extension publishes `true` itself; it reads
 * the YouTube URL.
 *
 * **`androidtv` is deliberately not on this list, and stays off now that the
 * television can do it.** It was on it while `apps/tv` had no reader at all —
 * a claim about what Android can do, answering for a build that uploaded
 * nothing, so a parent got the video-history card and an empty list and no way
 * to tell that from a quiet day. The set now publishes its own
 * `videoHistory` probe (the notification-listener grant, `KidGateTvYoutubeWatch`),
 * and a probe outranks this list — so the only televisions this line still
 * answers for are the ones running the build that has no reader, where `false`
 * is the truth. `docs/FEASIBILITY.md`, "Videos watched on Android TV".
 *
 * Every other platform answers no, and for the same reason on both desktops:
 * a filter sees a domain and never a video. The Mac's content filter sees the
 * connection, Windows' resolver sees the resolved name, and `youtube.com` is
 * all either of them can say. Windows fails a second time besides — its window
 * titles name the page rather than the clip, and a search reads
 * `<query> - YouTube`, measured, which is the exact shape of a watch —
 * and iOS's Screen Time report names apps and domains, not the clip inside
 * one. Recorded in `docs/FEASIBILITY.md` ("Videos watched", "Videos watched on
 * Windows").
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';
import { isDesktopLike } from './platformFamily';

export const VIDEO_HISTORY_PLATFORMS: readonly DevicePlatform[] = ['android'];

export interface VideoHistorySupportInput {
  platform?: DevicePlatform | null;
  capabilities?: { videoHistory?: DeviceCapabilities['videoHistory'] } | null;
}

/**
 * The sentence a parent's video card shows when the device can record videos
 * and is currently failing to — the key into `videoHistory.*`, or null. The
 * Android Shorts reader is the only publisher today.
 */
export function videoHistoryBlockerKey(device: {
  capabilities?: {
    videoHistoryBlocker?: DeviceCapabilities['videoHistoryBlocker'];
  } | null;
}): string | null {
  switch (device.capabilities?.videoHistoryBlocker) {
    case 'layoutChanged':
      return 'videoHistory.readerLayoutChanged';
    default:
      return null;
  }
}

/**
 * What to tell a parent about a device that cannot report watched videos.
 *
 * Returns an i18n key, always — this is the sentence under a feature that is
 * off, not a decision about whether it is available. `supportsVideoHistory`
 * stays false either way.
 *
 * **The desktops get a different sentence because they have an answer.** A Mac
 * or a PC cannot do this from the agent — `docs/FEASIBILITY.md`'s two gates
 * say why, and neither is a gap waiting to be closed — but the Chrome
 * extension already ships it on both, reading the real video id out of the URL.
 * The flat "this device cannot" hid that: the same gate that refused the
 * agent-side reader wrote down that **the gap a parent hits is onboarding, not
 * platform — the agent never mentions the extension**. This is that sentence.
 *
 * Only the desktops. iOS runs no Chrome extension, and an Android phone or TV
 * already reports through its own reader, so neither would be told to install
 * something that changes nothing for them.
 */
export function videoHistoryUnavailableKey(device: VideoHistorySupportInput): string {
  if (device.platform === 'macos' || device.platform === 'windows') {
    return 'videoHistory.unsupportedNeedsExtension';
  }
  return 'videoHistory.unsupportedNote';
}

export function supportsVideoHistory(device: VideoHistorySupportInput): boolean {
  const probe = device.capabilities?.videoHistory;
  if (probe !== undefined) {
    return probe;
  }
  return VIDEO_HISTORY_PLATFORMS.includes(device.platform ?? 'ios');
}

/**
 * Whether a parent surface draws the video card for this device at all.
 *
 * Wider than `supportsVideoHistory`, and on purpose: a Mac or a PC cannot
 * record videos itself, but the card is where a parent is told that the
 * Chrome extension can — `videoHistoryUnavailableKey` and the six
 * `videoHistory.extensionStep*` lines, which both consoles draw as a numbered
 * install guide **in place of** the empty state, never above it. Hiding the
 * card, or drawing it struck
 * out as "Not available on Mac", is how a parent came to believe the product
 * had no answer for a computer when it has one they were never shown.
 *
 * Every other platform keeps the narrow rule. iOS has no extension to offer,
 * and a phone or television that cannot record has nothing to be told.
 *
 * One rule for both consoles — `apps/dashboard` drew the card from an inline
 * `|| isDesktopLike(...)` first, and the phone's device grid still hid it, so
 * the same Mac had a video section on the web and none in the app.
 */
export function showsVideoHistoryCard(device: VideoHistorySupportInput): boolean {
  return supportsVideoHistory(device) || isDesktopLike(device.platform);
}
