/**
 * Whether a device can force the search engines' safe modes.
 *
 * Same two rules as `webFilterSupport` and `alertSupport`: the device's own
 * probe (`DeviceCapabilities.safeSearch`) outranks any platform list, and an
 * absent probe is unknown rather than no. The list answers for the Android
 * phone, which publishes no probe and owns a DNS answer through its tunnel.
 * The Chrome extension publishes `true` itself; it rewrites the search URL
 * instead.
 *
 * **Android TV was on this list until 2026-09-19, and it was a claim about an
 * ungranted box.** Its safe search is a DNS answer synthesised by
 * `KidGateTvWebRules.safeSearchRewriteFor` inside `KidGateTvVpnService`, so it
 * needs `vpnConsent` — the same grant that makes `webFilter` report `'vpn'`. A
 * television that refused the consent dialog published `webFilter: false`
 * honestly and was then answered `true` here by platform, two rows apart on
 * the same card. A parent could flip the dashboard's switch, watch it persist
 * through `updateChildRules`, fan out to every sibling device, and read it
 * back green forever over a tunnel that had never started.
 *
 * The probe now answers for builds that carry `safeSearch` in their capability
 * set; the list answers for the ones that do not, and for those the honest
 * answer is no — the same split `VIDEO_HISTORY_PLATFORMS` makes for the same
 * box, and the direction `apps/tv/CLAUDE.md` requires: a capability reads
 * worse than the platform might manage, never better.
 *
 * Every other platform answers no, and each for a reason recorded in
 * `docs/FEASIBILITY.md` ("Forced SafeSearch"): the Mac's shipped filter is a
 * content filter that cannot rewrite a lookup, and iOS has no DNS layer and no
 * Screen Time key for this.
 *
 * **Windows is the one whose reason changed, on 2026-09-06.** It used to be
 * "ships no filter"; it now ships a DNS one. The answer is still no, for a
 * narrower reason: that resolver forwards queries and synthesises no records
 * at all, and forcing safe search means *answering* a lookup with the
 * addresses of an engine's enforcement name. Being a forwarder is most of what
 * makes it safe, so this stays false until that changes.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

export const SAFE_SEARCH_PLATFORMS: readonly DevicePlatform[] = ['android'];

export interface SafeSearchSupportInput {
  platform?: DevicePlatform | null;
  capabilities?: { safeSearch?: DeviceCapabilities['safeSearch'] } | null;
}

export function supportsSafeSearch(device: SafeSearchSupportInput): boolean {
  const probe = device.capabilities?.safeSearch;
  if (probe !== undefined) {
    return probe;
  }
  return SAFE_SEARCH_PLATFORMS.includes(device.platform ?? 'ios');
}
