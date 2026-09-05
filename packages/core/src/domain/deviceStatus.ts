/**
 * Online / offline / locked, derived the same way on every surface.
 *
 * Lifted from `apps/mobile/src/utils/device.ts`. Three minutes of silence is
 * the offline threshold everywhere — a dashboard disagreeing with the phone
 * about whether a child's device is online is the kind of wrongness a parent
 * notices immediately and neither app can explain.
 *
 * "Everywhere" now means "at a given cadence". The threshold moved to
 * `./reportCadence`, beside the beat interval it is derived from, because the
 * free tier beats every thirty minutes rather than every one: three minutes of
 * silence stops meaning a stopped device and starts meaning a device that is
 * simply not due yet. Both consoles must still agree with each other — that
 * rule is untouched — but what they agree on is now a function of the plan.
 */

import type { Device } from '@kidgate/schema/device';
import type { TranslationParams } from '@kidgate/i18n/types';
import { supportsLock } from './controlSupport';
import { offlineThresholdForBeat } from './reportCadence';

type TranslateFn = (key: string, params?: TranslationParams) => string;

export function getEffectiveDeviceStatus(
  device: Device,
  nowMs: number,
  /**
   * How much silence counts as offline.
   *
   * **Defaults to the window this device's own cadence earns it** — read from
   * `Device.beatIntervalMs`, which the agent writes on the heartbeat it
   * already makes. A free-tier device beats every thirty minutes
   * (`./reportCadence`), so judging it by the live three-minute window paints
   * a device that is working, enforcing and reporting exactly as designed as
   * dead, for every free family, permanently, on both consoles.
   *
   * The parameter stays for a caller that genuinely knows better, but no
   * console should need it: the device is the authority on what it is doing,
   * and a console deriving the answer from the family's plan would be wrong
   * about a lapse latch that has not cleared, a parked device, and an older
   * build. `offlineThresholdForBeat` clamps what the device claims.
   */
  thresholdMs: number = offlineThresholdForBeat(device.beatIntervalMs),
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

  /*
   * After the lock and ahead of the clock. A parked device sends no beat at
   * all (`docs/PRICING.md` §6), so read against `lastActiveAt` it is "offline"
   * within the hour and stays that way — every parked device, on both consoles,
   * painted red for a plan decision. It is not offline: it is enforcing every
   * rule it holds and has been told not to report. The lock still wins above,
   * because a parent who locked a parked device wants to see that it took, and
   * the field it is read from is one the device honours whether parked or not.
   */
  if (device.monitoringState === 'parked') {
    return 'parked';
  }

  if (!device.lastActiveAt) {
    return 'offline';
  }

  const age = nowMs - new Date(device.lastActiveAt).getTime();
  if (age > thresholdMs) {
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
  // `family`, not `shared`: the dashboard reads this namespace through the
  // app pack and does not have `shared` on its list.
  if (status === 'parked') {
    return t('family.devicePausedLabel');
  }
  return t('shared.offline');
}
