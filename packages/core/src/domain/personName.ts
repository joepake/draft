import { MAX_DEVICE_NAME_LENGTH } from '@kidgate/schema/deviceName';

export const MAX_PERSON_NAME_LENGTH = Math.max(MAX_DEVICE_NAME_LENGTH, 30);

const PLACEHOLDER_NAMES = new Set(['user', 'unknown', 'parent', 'kidgate']);

export function isApplePrivateRelayEmail(email?: string | null): boolean {
  return (email ?? '').trim().toLowerCase().endsWith('@privaterelay.appleid.com');
}

/** True when we must ask the parent to enter a real person name. */
export function isMissingPersonName(
  name?: string | null,
  email?: string | null,
): boolean {
  const trimmed = name?.trim() ?? '';
  if (!trimmed) {
    return true;
  }

  if (PLACEHOLDER_NAMES.has(trimmed.toLowerCase())) {
    return true;
  }

  const localPart = (email ?? '').split('@')[0]?.trim() ?? '';
  if (
    localPart &&
    trimmed.toLowerCase() === localPart.toLowerCase() &&
    isApplePrivateRelayEmail(email)
  ) {
    return true;
  }

  return false;
}

export function validatePersonName(
  name: string,
  t: (key: string, params?: Record<string, string | number>) => string,
): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return t('settings.personNameRequired');
  }
  if (trimmed.length > MAX_PERSON_NAME_LENGTH) {
    return t('settings.personNameTooLong', { max: MAX_PERSON_NAME_LENGTH });
  }
  if (PLACEHOLDER_NAMES.has(trimmed.toLowerCase())) {
    return t('settings.personNameRequired');
  }
  return null;
}
