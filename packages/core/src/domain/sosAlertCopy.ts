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
