export type UsageAppBreakdown = {
  packageName: string;
  label: string;
  minutes: number;
};

/**
 * One character per minute of the device's local day, midnight first.
 *
 * A string rather than a bitfield, and 1440 bytes rather than the 360 a
 * two-bit packing would cost. The difference is a rounding error against the
 * document it rides on; being able to read a day off the Firebase console
 * without a decoder is not. The same argument settled `icons.ts` being data.
 *
 * **Three states, and the third is the point.** A parental control that cannot
 * say "nobody was watching here" fills the gap with the most flattering
 * available lie — a child who quit the agent reads as a child who put the
 * laptop down. `UsageSource` already carries that warning for the daily total;
 * this carries it minute by minute.
 *
 * | Char | Means                                                            |
 * | ---- | ---------------------------------------------------------------- |
 * | `-`  | Not measured. Agent not running, device asleep, before pairing.  |
 * | `.`  | Measured, and the device was not being used.                     |
 * | `#`  | Measured, and an app was in front.                               |
 *
 * A minute is `#` if any part of it was used — the sampler's interval does not
 * align to minute boundaries, and rounding the other way would lose the last
 * few seconds of every session. Precedence is `#` over `.` over `-`: a minute
 * that carries two answers takes the stronger claim, because the states are
 * ordered by how much was observed rather than by time.
 *
 * Shorter than 1440 is invalid rather than padded — a truncated timeline is a
 * bug at the writer, and inventing the tail would hide it.
 */
export type UsageTimeline = string;

export const USAGE_TIMELINE_MINUTES = 1440;
export const USAGE_TIMELINE_UNKNOWN = '-';
export const USAGE_TIMELINE_IDLE = '.';
export const USAGE_TIMELINE_USED = '#';

export type UsageDay = {
  id: string;
  date: string;
  minutes: number;
  /** Bonus granted that day (reward tasks + approved time requests). */
  bonusMinutes: number;
  topApps: UsageAppBreakdown[];
  /**
   * When the day was used, or absent on a device that cannot say.
   *
   * Absent is not the same as all-`-`: a platform with no timeline at all
   * (iOS — see `DeviceCapabilities.usageTimeline`) must render as "this device
   * cannot report it", never as a day nobody was measured. Only a device that
   * claims the capability writes this field.
   */
  timeline?: UsageTimeline;
  updatedAt?: string;
};
