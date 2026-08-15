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

const OFFLINE_THRESHOLD_MS = 3 * 60 * 1000;

type TranslateFn = (key: string, params?: TranslationParams) => string;

export function getEffectiveDeviceStatus(
  device: Device,
  nowMs: number,
): Device['status'] {
  if (device.isLocked) {
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
