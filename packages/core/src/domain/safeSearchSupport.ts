/**
 * Whether a device can force the search engines' safe modes.
 *
 * Same two rules as `webFilterSupport` and `alertSupport`: the device's own
 * probe (`DeviceCapabilities.safeSearch`) outranks any platform list, and an
 * absent probe is unknown rather than no. The list answers for the agents
 * that publish no probe — the Android phone and the TV, both of which own a
 * DNS answer through their tunnel. The Chrome extension publishes `true`
 * itself; it rewrites the search URL instead.
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

export const SAFE_SEARCH_PLATFORMS: readonly DevicePlatform[] = [
  'android',
  'androidtv',
];

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
