import type { Device } from '@kidgate/schema/device';

/**
 * Below this, and not on a charger, the phone is close to going dark — which
 * is the thing a parent needs to read differently from "42%". It sat at 15 to
 * match the level at which both platforms start warning the child themselves;
 * 20 is the product call, and it is *strictly* below, so a phone reading 20%
 * is still neutral.
 */
export const BATTERY_LOW_THRESHOLD = 20;

export interface BatteryReading {
  level: number;
  charging: boolean;
  /** Low and unplugged — the only state worth colouring. */
  isLow: boolean;
}

/**
 * The battery to show for a device, or null when there is nothing truthful to
 * show.
 *
 * Null rather than 0 for a device that has never reported: an iOS Simulator,
 * an OEM that withholds the value, or simply a child app that has not synced
 * since the feature shipped. Rendering those as "0%" would send a parent
 * looking for a child whose phone is fine.
 */
export function readDeviceBattery(
  device: Pick<Device, 'batteryLevel' | 'batteryCharging'> | null | undefined,
): BatteryReading | null {
  const level = device?.batteryLevel;
  if (typeof level !== 'number' || !Number.isFinite(level)) {
    return null;
  }

  const charging = device?.batteryCharging === true;
  const percent = Math.min(100, Math.max(0, Math.round(level)));
  return {
    level: percent,
    charging,
    // The rounded value, so the number a parent reads and the colour it is
    // painted in never disagree: a raw 19.6 prints as 20% and must not be red.
    isLow: !charging && percent < BATTERY_LOW_THRESHOLD,
  };
}
