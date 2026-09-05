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
 * content filter that cannot rewrite a lookup, Windows ships no filter, and
 * iOS has no DNS layer and no Screen Time key for this.
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
