/**
 * What kind of hardware a device is, and what a parent should call it.
 *
 * An iPad is not a platform. `capabilities.ts` says so at the top of the file —
 * "a tablet and a phone are both `ios` but differ in what a parent expects to
 * see" — and `DeviceFormFactor` is the field that carries the difference. This
 * module is the one place that decides it for the phone app, so an iPad is not
 * labelled "iPhone" on one screen and "iPad" on the next.
 *
 * `apps/desktop` decides its own form factor from `hasBattery`, which no phone
 * fact can stand in for; this module deliberately declines to answer for a Mac
 * or a PC rather than guessing laptop.
 */

import type { DeviceFormFactor, DevicePlatform } from '@kidgate/schema/capabilities';

export interface HardwareIdentity {
  platform?: DevicePlatform | null;
  /**
   * Marketing name or Apple machine id — "iPhone 16 Pro", "iPad14,3".
   * Apple publishes no marketing name for iPads, so the id is what arrives.
   */
  modelName?: string | null;
  /**
   * What the OS itself says, when it says anything: iOS reports
   * `userInterfaceIdiom == .pad`, Android `smallestScreenWidthDp >= 600`.
   * Trusted over `modelName` — a name is a string a vendor chose, this is the
   * layout the device actually runs.
   */
  isTablet?: boolean | null;
}

const APPLE_TABLET = /^ipad/i;
const APPLE_HANDHELD = /^(iphone|ipod)/i;

/**
 * The form factor, or `undefined` when nothing on hand can tell.
 *
 * Undefined rather than `'phone'` on purpose. A default of phone is the bug
 * this exists to fix — it is exactly what `Platform.OS === 'ios'` already
 * implied, and it would relabel an iPad the moment the model name were
 * missing, which is the case an older record hits.
 */
export function resolveDeviceFormFactor(
  identity: HardwareIdentity,
): DeviceFormFactor | undefined {
  const { platform, isTablet } = identity;

  if (platform === 'androidtv') {
    return 'tv';
  }

  // A Mac and a PC are laptop-or-desktop, and only the battery says which.
  // The desktop agent probes that; this module has no fact to decide it with.
  if (platform === 'macos' || platform === 'windows') {
    return undefined;
  }

  if (typeof isTablet === 'boolean') {
    return isTablet ? 'tablet' : 'phone';
  }

  const model = identity.modelName?.trim() ?? '';
  if (platform === 'ios' && model) {
    if (APPLE_TABLET.test(model)) {
      return 'tablet';
    }
    if (APPLE_HANDHELD.test(model)) {
      return 'phone';
    }
  }

  // `Build.MODEL` on Android — "SM-T870" is a tablet, "SM-G991B" is a phone,
  // and nothing in either string says so. Only the screen-width hint answers.
  return undefined;
}

/**
 * The i18n key naming this device's platform to a parent.
 *
 * A key rather than a sentence, because `packages/core` renders none — the
 * caller holds `t`. All six keys already exist in all 14 locales.
 */
export function platformLabelKey(
  platform?: DevicePlatform | string | null,
  formFactor?: DeviceFormFactor | null,
): string {
  switch (platform) {
    case 'ios':
      return formFactor === 'tablet' ? 'family.ipad' : 'family.iphone';
    case 'android':
      // No separate word for an Android tablet: the platform name is what the
      // vendors themselves print, and "Android tablet" would be ours alone.
      return 'family.android';
    case 'macos':
      return 'family.mac';
    case 'windows':
      return 'family.windowsPc';
    case 'androidtv':
      return 'family.androidTv';
    default:
      return 'family.deviceFallbackName';
  }
}
