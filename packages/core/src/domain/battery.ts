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

/** One home's battery fields, parsed — the device document's or presence's. */
export interface BatteryFields {
  batteryLevel?: number;
  batteryCharging?: boolean;
  /** ISO. */
  batteryUpdatedAt?: string;
}

/**
 * The battery from whichever of its two homes is newer.
 *
 * `apps/desktop` reports it on the usage report since 2026-10-18, which lands
 * on `devicePresence`; the phone's location upload and every desktop build
 * from before that write the device document. A reading is taken whole from
 * one home — never a level from one and a charger from the other — and a home
 * with no level is no reading. Presence wins a tie, because the new server
 * writes nowhere else.
 */
export function newerBattery(
  device: BatteryFields,
  presence: BatteryFields | null | undefined,
): BatteryFields {
  if (typeof presence?.batteryLevel !== 'number') {
    return device;
  }
  if (typeof device.batteryLevel !== 'number') {
    return presence;
  }
  const deviceAt = Date.parse(device.batteryUpdatedAt ?? '');
  const presenceAt = Date.parse(presence.batteryUpdatedAt ?? '');
  if (Number.isNaN(presenceAt)) {
    return Number.isNaN(deviceAt) ? presence : device;
  }
  return Number.isNaN(deviceAt) || presenceAt >= deviceAt ? presence : device;
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
