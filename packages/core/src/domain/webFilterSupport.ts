/**
 * Whether a child device filters the web at all — the question a parent screen
 * asks before it offers the Web Filter and Web History rows.
 *
 * It reads the device's own capability probe first, and that ordering is the
 * whole point of the module. `apps/mobile` used to answer this from a hardcoded
 * `['ios', 'android']`, which is the `Platform.OS` branch
 * `@kidgate/schema/capabilities` was written to replace: the platform is one
 * field of a probe, not the decision. A Mac's filter arrives as a signed system
 * extension the child has to approve, so two Macs on the same build can
 * legitimately disagree — and the day the desktop agent reports
 * `webFilter: 'contentFilter'`, no parent app should need a release to notice.
 *
 * The platform list survives as the fallback rather than as the rule, because
 * **an absent probe means the device publishes none, never that it cannot
 * filter** (`Device.capabilities`). Phones are the platforms that stay silent:
 * they report permission statuses in `protectionStatus` instead, so reading a
 * missing probe as `false` would hide the filter on every iPhone and Android in
 * the product.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

/**
 * What a device that publishes no capability probe is assumed to do.
 *
 * iOS filters through the Screen Time adult-content setting, Android through
 * `KidGateVpnService`. Every other platform publishes a probe, so a platform
 * missing from this list is only ever read for a device that has not reported
 * yet — a Mac paired minutes ago answers `false` here and flips as soon as its
 * probe lands, which is the honest direction for a rule about enforcement.
 */
export const WEB_FILTER_FALLBACK_PLATFORMS: readonly DevicePlatform[] = [
  'ios',
  'android',
];

export interface WebFilterSupportInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  /**
   * `Device.capabilities`, when this device publishes a probe.
   *
   * `webFilter` is optional here and required in `DeviceCapabilities` on
   * purpose: this reads a Firestore document rather than a value this process
   * built, and an agent old enough to predate the field writes a probe without
   * it. That case takes the same fallback an absent probe does.
   */
  capabilities?: { webFilter?: DeviceCapabilities['webFilter'] } | null;
}

/**
 * Whether this device can filter web traffic.
 *
 * `WebFilterMechanism` carries which route does it — VPN, content filter,
 * extension, DNS — and every one of them is a yes. Only `false` is a no, and
 * nothing here branches on the mechanism: a parent picks categories and
 * domains, and the device decides how to enforce them.
 */
export function supportsWebFiltering(device: WebFilterSupportInput): boolean {
  const probe = device.capabilities?.webFilter;
  if (probe !== undefined) {
    return probe !== false;
  }

  // A document with no platform predates the field and is a phone — the same
  // reading `protectionStatus` takes of the same absence.
  return WEB_FILTER_FALLBACK_PLATFORMS.includes(device.platform ?? 'ios');
}

/**
 * Whether this device can report the sites the child visited.
 *
 * Deliberately the same answer, not a second rule: history is a by-product of
 * whatever inspects the traffic. Android's VPN keeps the log it already builds
 * to block on, and a desktop content filter would be the thing that could keep
 * one — so a device with no filter has nothing to write a history from. iOS is
 * the one platform where the two come from different places (the
 * `DeviceActivityReport` extension names domains without any filter involved),
 * and it lands on `true` either way.
 */
export function supportsWebHistory(device: WebFilterSupportInput): boolean {
  return supportsWebFiltering(device);
}
