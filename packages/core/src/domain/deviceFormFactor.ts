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
  /**
   * Android inside ChromeOS's ARC container (`org.chromium.arc` /
   * `android.hardware.type.pc`). Trusted over `isTablet`, which ARC answers
   * "yes" to — the width bucket is tablet-sized, and the machine is a laptop.
   */
  isChromebook?: boolean | null;
}

const APPLE_TABLET = /^ipad/i;
const APPLE_HANDHELD = /^(iphone|ipod)/i;

const FORM_FACTORS: readonly DeviceFormFactor[] = [
  'phone',
  'tablet',
  'laptop',
  'desktop',
  'tv',
];

/** Whether a stored string is one of the form factors this product has. */
export function isDeviceFormFactor(value: unknown): value is DeviceFormFactor {
  return (
    typeof value === 'string' && (FORM_FACTORS as readonly string[]).includes(value)
  );
}

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

  if (platform === 'android' && identity.isChromebook === true) {
    return 'laptop';
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
 * What a **parent surface** should treat this device as, stored field or not.
 *
 * `resolveDeviceFormFactor` above answers for the device about itself, from
 * probes only that device can run, and it is written to the record. This one
 * answers for a screen looking at somebody else's record, and it exists because
 * a stored `formFactor` is not a fact a parent app can rely on: every device
 * paired before that field existed has none, and it is written by the child
 * agent's own writes — so a phone that is off, uninstalled, or running an older
 * build never fills it in, and the parent's list draws the bare platform mark
 * for a machine whose model name says "iPhone 15" three fields over.
 *
 * Stored always wins: the device probed `userInterfaceIdiom` and this function
 * is reading strings. Below that it re-runs the shared model-name rules, then
 * falls back to the two Apple labels — `deviceLabel` is the name the owner gave
 * the hardware in Settings, `name` is the row's own name, and on iOS both
 * default to a word that names the form factor exactly ("iPhone", "iPad").
 *
 * **Apple only, and that is not an oversight.** Android writes `modelName`
 * null on purpose and `Build.MODEL` names no form factor anyway ("SM-T870" is
 * a tablet and says so nowhere), so there is nothing here to read; an Android
 * record with no stored field keeps the platform's robot mark. Nothing guesses
 * `phone` from a bare platform — that default is the bug this module was
 * written to end.
 */
export function resolveDisplayFormFactor(device: {
  platform?: DevicePlatform | string | null;
  /**
   * `string` as well as the union because several screens hold a device view
   * that widened it — the value came off a Firestore document, where any string
   * is possible. Checked against the union here rather than trusted: a record
   * carrying a word this product does not have is the same as carrying none.
   */
  formFactor?: DeviceFormFactor | string | null;
  modelName?: string | null;
  deviceLabel?: string | null;
  name?: string | null;
}): DeviceFormFactor | undefined {
  if (device.formFactor && isDeviceFormFactor(device.formFactor)) {
    return device.formFactor;
  }

  const fromModel = resolveDeviceFormFactor({
    platform:
      device.platform === 'ios' || device.platform === 'android'
        ? device.platform
        : null,
    modelName: device.modelName ?? null,
  });
  if (fromModel) {
    return fromModel;
  }

  if (device.platform !== 'ios') {
    return undefined;
  }

  for (const label of [device.deviceLabel, device.name]) {
    const text = label?.trim() ?? '';
    if (!text) {
      continue;
    }
    if (APPLE_TABLET.test(text)) {
      return 'tablet';
    }
    if (APPLE_HANDHELD.test(text)) {
      return 'phone';
    }
  }

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
      // A laptop form factor on Android is the ARC install on a Chromebook —
      // "Chromebook" is the word the vendor prints on the lid.
      return formFactor === 'laptop' ? 'family.chromebook' : 'family.android';
    case 'chromeos':
      // The browser-extension surface (`apps/extension`) on the same machine.
      return 'family.chromebook';
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
