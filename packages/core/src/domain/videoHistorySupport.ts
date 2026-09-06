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
 * Every other platform answers no: the Mac's content filter sees a domain and
 * never a video, Windows has no filter at all and its window titles name the
 * page rather than the clip — a search reads `<query> - YouTube`, measured —
 * and iOS's Screen Time report names apps and domains, not the clip inside
 * one. Recorded in `docs/FEASIBILITY.md` ("Videos watched", "Videos watched on
 * Windows").
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

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

export function supportsVideoHistory(device: VideoHistorySupportInput): boolean {
  const probe = device.capabilities?.videoHistory;
  if (probe !== undefined) {
    return probe;
  }
  return VIDEO_HISTORY_PLATFORMS.includes(device.platform ?? 'ios');
}
