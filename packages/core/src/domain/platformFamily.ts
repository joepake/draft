/**
 * Which platforms answer the same question the same way — the check a parent
 * screen needs before it picks the words for one child device.
 *
 * Every surface in this repo used to spell this as `platform === 'android'`,
 * with `androidtv` falling into whichever half the ternary left over. That half
 * is nearly always iOS, so a parent looking at a television read "Uses Apple's
 * Screen Time content filter" over a device that has never run Apple software:
 * the Web Filter screen, the Screen Time setup card and the lock note all said
 * it, from three separate copies of the same two-way branch.
 *
 * A named rule rather than a longer ternary at each call site, because the
 * answer is a fact about the agents and not about any one screen: `apps/tv`
 * *is* the Android agent — same `UsageStatsManager` read, same accessibility
 * service, same VPN consent — so every sentence written for Android is already
 * the true one for a TV. A sixth platform joining that family is one edit here.
 *
 * Not a capability check, and never a substitute for one. Whether a device
 * *can* do something is `DeviceCapabilities` and the `supports*` rules that
 * read it; this only answers what to *call* the thing once it can.
 */

import type { DevicePlatform } from '@kidgate/schema/capabilities';

/**
 * Android and Android TV, which share an agent and therefore share every
 * permission name a parent is sent to look for — "Usage access", not "Screen
 * Time"; "Display over other apps", not Background App Refresh.
 *
 * A record with no platform predates the field and is a phone, the same
 * reading `webFilterSupport` and `protectionStatus` take of the same absence.
 * It answers false here, which lands it on the iOS wording those records
 * already had.
 */
export function isAndroidLike(platform?: DevicePlatform | string | null): boolean {
  return platform === 'android' || platform === 'androidtv';
}

/**
 * macOS and Windows, which share `apps/desktop` — one codebase, one child
 * agent, and the same two answers to the question this was added for: neither
 * can name a video the child watched, and both run the Chrome the extension
 * that can is installed into.
 *
 * They are **not** the same on everything, and this must not be used as if
 * they were: the Mac filters with a content filter and Windows with its own
 * resolver, the Mac asks the child to approve an extension and Windows asks
 * nothing, and only Windows has a watchdog service. Where the sentence differs
 * per platform, branch per platform — `WebFilterScreen` does, deliberately.
 */
export function isDesktopLike(platform?: DevicePlatform | string | null): boolean {
  return platform === 'macos' || platform === 'windows';
}
