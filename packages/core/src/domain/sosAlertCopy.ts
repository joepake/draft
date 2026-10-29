/**
 * SOS alert copy, always rendered in the reader's current language.
 *
 * Lifted from `apps/mobile/src/utils/sosAlertCopy.ts`. Stored `message` is
 * write-time text in the *child's* locale — an alert raised on a Vietnamese
 * child device must not reach an English-speaking parent verbatim, which is
 * why the document carries `messageKey` + `params` and every surface renders
 * it fresh (see the `sosAlert` note in `docs/MIGRATION.md`).
 */

import type { TranslationParams } from '@kidgate/i18n/types';
import type { SosAlert } from '@kidgate/schema/sosAlert';

const DEFAULT_SOS_MESSAGE_KEY = 'sos.alertMessage';

/**
 * The child's name, when the alert carries one apart from its device's.
 *
 * `notifyParentSosAlert` stamps `params.childName` from the device's
 * assignment since 2026-10-28. Every agent wrote the device's own name there
 * before, so a value equal to `deviceName` says nothing about a person and
 * reads as absent — the parent then sees the device alone, as before.
 */
export function sosAlertChildName(
  alert: Pick<SosAlert, 'params' | 'deviceName'>,
): string | null {
  const name = alert.params?.childName;
  if (typeof name !== 'string') {
    return null;
  }
  const trimmed = name.trim();
  return trimmed && trimmed !== alert.deviceName.trim() ? trimmed : null;
}

export function resolveSosAlertMessage(
  alert: Pick<SosAlert, 'messageKey' | 'params' | 'deviceName'>,
  translate: (key: string, params?: TranslationParams) => string,
): string {
  return translate(alert.messageKey ?? DEFAULT_SOS_MESSAGE_KEY, {
    childName: alert.deviceName,
    deviceName: alert.deviceName,
    ...alert.params,
  });
}
