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

/**
 * What to tell a parent about a device whose filter is off, when there is
 * something they can do about it.
 *
 * Returns an i18n key or null. Null is the ordinary case and means the row
 * should say whatever it says for a platform that cannot filter — a build with
 * no extension, an Android TV, a Windows PC. A key means the device published
 * `webFilterBlocker`: the filter exists on that machine and is waiting on a
 * person who is standing next to it.
 *
 * **It does not make the feature available.** `supportsWebFiltering` stays
 * false in both states, because a screen full of categories over a filter that
 * is not running is the switch-that-flips-nothing this module exists to
 * prevent. What changes is the sentence: "not available on Mac" is a fact about
 * the product, and this is a fact about that Mac this afternoon.
 */
export function webFilterBlockerKey(device: {
  capabilities?: { webFilterBlocker?: DeviceCapabilities['webFilterBlocker'] } | null;
}): string | null {
  switch (device.capabilities?.webFilterBlocker) {
    case 'awaitingApproval':
      return 'deviceDetail.webFilterAwaitingApproval';
    case 'configurationDisabled':
      return 'deviceDetail.webFilterSwitchedOffOnDevice';
    default:
      return null;
  }
}

/**
 * Whether this device's filter takes a full policy — categories, an allow
 * list and a block list — rather than Apple's single always-on adult filter.
 *
 * `apps/mobile`'s Web Filter screen used to read this as `platform ===
 * 'android'`, with every other platform, macOS included, falling into the
 * screen's iOS branch: Apple's icon, "Uses Screen Time on iOS", and every
 * category but `adult` shown locked. That was true of an iPhone and false of
 * a Mac approved for the content-filter extension, which takes the exact same
 * `WebFilterPolicy` Android's VPN does (`domain/contentFilterPolicy.ts`) — so
 * a parent with a Mac saw a crippled iOS-shaped screen over a device that
 * could already enforce every category and both lists.
 *
 * Only `android`, `androidtv` and `macos` can answer true, and only when
 * `supportsWebFiltering` already does — Android TV's tunnel takes the same
 * `ContentFilterRules` payload the Mac's provider does, so a probe reporting
 * `webFilter: 'vpn'` there is a full-policy filter, while Windows still
 * hardcodes `webFilter: false` and never reaches a screen gated on this. iOS
 * is deliberately never a `true` here: `Device.capabilities` carries no probe
 * for it, so nothing about its filter is a policy this function could
 * describe.
 */
export function supportsWebFilterCategories(device: WebFilterSupportInput): boolean {
  if (!supportsWebFiltering(device)) {
    return false;
  }
  return (
    device.platform === 'android' ||
    device.platform === 'androidtv' ||
    device.platform === 'macos'
  );
}
