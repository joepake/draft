/**
 * Online / offline / locked, derived the same way on every surface.
 *
 * Lifted from `apps/mobile/src/utils/device.ts`. Three minutes of silence is
 * the offline threshold everywhere — a dashboard disagreeing with the phone
 * about whether a child's device is online is the kind of wrongness a parent
 * notices immediately and neither app can explain.
 */

import type { Device } from '@kidgate/schema/device';
import type { TranslationParams } from '@kidgate/i18n/types';
import { supportsLock } from './controlSupport';

const OFFLINE_THRESHOLD_MS = 3 * 60 * 1000;

type TranslateFn = (key: string, params?: TranslationParams) => string;

export function getEffectiveDeviceStatus(
  device: Device,
  nowMs: number,
): Device['status'] {
  /*
   * `isLocked` only means something on a device that can lock.
   *
   * A browser extension publishes `lock: false` and its worker has no handler
   * for the field, so a row locked by an older build — or by a parent surface
   * that has not been updated — keeps a `true` nothing will ever act on. Read
   * literally, every one of those devices reports itself Locked forever, and
   * the button that would clear it is now hidden precisely because it does
   * nothing. The probe is what makes the field readable.
   */
  if (device.isLocked && supportsLock(device)) {
    return 'locked';
  }

  if (!device.lastActiveAt) {
    return 'offline';
  }

  const age = nowMs - new Date(device.lastActiveAt).getTime();
  if (age > OFFLINE_THRESHOLD_MS) {
    return 'offline';
  }

  return 'online';
}

export function getDeviceStatusLabel(status: Device['status'], t: TranslateFn): string {
  if (status === 'online') {
    return t('shared.online');
  }
  if (status === 'locked') {
    return t('shared.locked');
  }
  return t('shared.offline');
}
