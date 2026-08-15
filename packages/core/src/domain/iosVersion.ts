/**
 * Whether an iOS device is new enough to run the enforcement stack.
 *
 * Everything KidGate enforces on iOS sits on FamilyControls, DeviceActivity
 * and ManagedSettings, and all three arrived in iOS 16. The app itself builds
 * and runs against iOS 15.1 — an iPad Air 2 or mini 4 tops out at 15.8 and can
 * never be upgraded — so those devices still pair, report location, raise SOS
 * and answer check-ins. They just cannot block, schedule, limit or measure.
 *
 * The parent is told which half they are getting. A schedule that was silently
 * never applied is worse than one the parent knows was refused: the first is
 * discovered months later, by the child.
 */

export const IOS_SCREEN_TIME_MIN_MAJOR = 16;

/**
 * Major version out of the string a device writes to `device.osVersion`.
 *
 * The field is free text filled in by whatever the child device reported, so
 * an unparseable value returns `null` and every caller here treats that as
 * "assume capable". Hiding working controls because a version string was
 * malformed is the more damaging failure of the two.
 */
export function parseOSMajorVersion(osVersion?: string | null): number | null {
  if (!osVersion) {
    return null;
  }

  const digits = /^\s*(\d+)/.exec(osVersion)?.[1];
  if (!digits) {
    return null;
  }

  const major = Number.parseInt(digits, 10);
  return Number.isFinite(major) ? major : null;
}

/**
 * True only when the version is known *and* below the Screen Time floor.
 * Unknown reads as supported — see `parseOSMajorVersion`.
 */
export function isBelowIOSScreenTimeMinimum(osVersion?: string | null): boolean {
  const major = parseOSMajorVersion(osVersion);
  return major !== null && major < IOS_SCREEN_TIME_MIN_MAJOR;
}

/**
 * The parent-facing features that are FamilyControls, DeviceActivity or
 * ManagedSettings underneath.
 *
 * Everything absent from this set keeps working on iOS 15 — location, place
 * alerts, SOS, check-ins, basic activity, push. That list is the whole of what
 * an iPad stuck on 15.8 can offer, so it is worth being exact about which half
 * a parent is looking at rather than disabling the screen wholesale.
 *
 * Keyed by the labels in `apps/mobile`'s device-detail config. They are stable
 * identifiers, not display copy — the shown strings come from `packages/i18n`.
 */
export const IOS_SCREEN_TIME_FEATURES: ReadonlySet<string> = new Set([
  'Lock / Unlock',
  'Daily Limit',
  'Schedule',
  'Time Request',
  'Reward Tasks',
  'Individual App Blocking',
  'Web Filtering',
  'Safe Search Alerts',
  'Web History',
  'Usage Reports',
  'App Review Reminders',
  'Tamper Alerts',
]);

/**
 * True when this feature cannot run on this device because the OS predates
 * Screen Time — the one case the parent can fix, by updating the device.
 */
export function needsIOSScreenTimeUpgrade(
  featureLabel: string,
  osVersion?: string | null,
): boolean {
  return (
    IOS_SCREEN_TIME_FEATURES.has(featureLabel) && isBelowIOSScreenTimeMinimum(osVersion)
  );
}
