/**
 * The rule for what a device may be called.
 *
 * Lifted out of `apps/mobile/src/utils/deviceName.ts` when `apps/desktop` grew
 * the same rename dialog: the length lives in `@kidgate/schema/deviceName`, so
 * a second validator would have been a second answer to "is this name too
 * long?" for the one field both surfaces write.
 *
 * `t` is passed in rather than imported, the shape `validatePersonName`
 * already uses here — the decision is shared, the sentence stays the
 * surface's.
 */

import { MAX_DEVICE_NAME_LENGTH } from '@kidgate/schema/deviceName';

export { MAX_DEVICE_NAME_LENGTH };

export const GENERIC_DEVICE_NAMES = new Set([
  'iPhone',
  'iPad',
  'Android',
  'Child iPhone',
  'Child Android',
  'Child iPad',
  'Parent iPhone',
  'Parent Android',
  'Parent iPad',
  'iPhone của con',
  'iPhone phụ huynh',
  'Android của con',
  'Android phụ huynh',
  'Thiết bị',
  'Device',
]);

const MACHINE_MODEL = /^i(Phone|Pad)\d+,\d+$/i;

/** Local device ids must never be shown as display names. */
export function isGeneratedDeviceId(name?: string | null): boolean {
  return /^device_\d+_/i.test(name?.trim() ?? '');
}

export function isGenericDeviceName(name?: string | null): boolean {
  const trimmed = name?.trim() ?? '';
  if (!trimmed) {
    return true;
  }

  if (isGeneratedDeviceId(trimmed)) {
    return true;
  }

  return GENERIC_DEVICE_NAMES.has(trimmed);
}

export type StoredDeviceNameSource = {
  name?: string | null;
  modelName?: string | null;
  deviceLabel?: string | null;
};

/** True when `name` is a parent/owner-chosen label, not OS/model fallback. */
export function isUserAssignedDeviceName(device: StoredDeviceNameSource): boolean {
  const name = device.name?.trim() ?? '';
  if (!name || isGenericDeviceName(name) || isGeneratedDeviceId(name)) {
    return false;
  }

  if (MACHINE_MODEL.test(name)) {
    return false;
  }

  const label = device.deviceLabel?.trim() ?? '';
  const model = device.modelName?.trim() ?? '';
  // mapSnapshot fills empty Firestore name from label/model — treat those as auto.
  if (label && name === label) {
    return false;
  }
  if (model && name === model) {
    return false;
  }

  return true;
}

/**
 * The best name a stored device has, or null when it has none worth showing.
 *
 * Split from the surface's `getDeviceDisplayName` so the last-resort sentence
 * stays the surface's — `apps/dashboard` builds its actor-name map before it
 * has a translator for the app key space, and a device with no usable name
 * there falls through to a different fallback than the phone's.
 */
export function resolveStoredDeviceName(device: StoredDeviceNameSource): string | null {
  const name = device.name?.trim() ?? '';
  const model = device.modelName?.trim() || null;
  const label = device.deviceLabel?.trim() || null;

  if (isUserAssignedDeviceName(device)) {
    return name;
  }

  if (label && !isGenericDeviceName(label)) {
    return label;
  }

  if (name && !isGenericDeviceName(name) && !isGeneratedDeviceId(name)) {
    return name;
  }

  if (model && !isGenericDeviceName(model)) {
    return model;
  }

  return model;
}

/** The reason a name is refused, already translated. Null when it is fine. */
export function validateDeviceName(
  name: string,
  t: (key: string, params?: Record<string, string | number>) => string,
): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return t('family.deviceNameRequired');
  }

  if (trimmed.length > MAX_DEVICE_NAME_LENGTH) {
    return t('family.deviceNameTooLong', { max: MAX_DEVICE_NAME_LENGTH });
  }

  return null;
}
