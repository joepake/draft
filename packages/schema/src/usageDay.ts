export type UsageAppBreakdown = {
  packageName: string;
  label: string;
  minutes: number;
};

/**
 * How many app rows one device-day carries, everywhere.
 *
 * The number is a contract, not a preference: an agent truncates its own
 * ranking before uploading, `reportChildUsage` truncates again on the way in,
 * and the client repository truncates on the way out. Three cuts at three
 * different numbers is a list whose length depends on which one was smallest,
 * which is unexplainable from any screen — so they read this, and the two that
 * cannot (Kotlin, Swift) are pinned to it by
 * `packages/core/src/domain/__tests__/usageTopAppsLimitParity.test.ts`.
 *
 * **Raised from 8 to 10 on 2026-08-27.** `AppLimitsScreen` offers exactly
 * these rows as the apps a parent may cap — a saved limit uses one up, so a
 * family with five caps was choosing their sixth from three candidates. Ten is
 * a judgement about that screen, not about the ranking, which nothing below
 * row six is read for.
 *
 * Two things it does not do. It does not backfill: a day document written
 * before the bump keeps its eight rows forever, and nothing re-derives them.
 * And it reaches a phone only through a store build — Android and iOS hold two
 * of the five copies in native code, so a server deploy alone widens what is
 * accepted and changes nothing about what arrives.
 *
 * Cost of the two extra rows is not the classifier: `appCategories/{package}`
 * is keyed product-wide, so a new row costs the model only for an identifier
 * nobody in the product has used before, once ever. It is `classifyApps`
 * re-reading two more cache documents per device per night, forever.
 */
export const USAGE_TOP_APPS_LIMIT = 10;

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
  /**
   * Minutes the device was on with nobody using it, or absent where no agent
   * can say.
   *
   * The packages a platform excludes from `topApps` — a launcher, a
   * screensaver, the agent's own window — earn no minutes in `minutes` and no
   * row in the list, which is right and leaves the parent with a report that
   * silently claims less than the television was on for. On the one real
   * Android TV in the product the ambient mode was the second most-used
   * "app" of a month at 116 minutes; subtracting that number is correct, and
   * hiding it is not the same thing.
   *
   * **Counted the same way `minutes` is** — attributed seconds, rounded once —
   * so the two are addable and a parent can read them side by side. Deriving
   * it from `timeline` instead would have been free and wrong: the band marks
   * every minute any part of which was used, `#` beats `.`, so its idle count
   * disagrees with this one by however many minutes carried both states.
   *
   * Absent, not zero, on a platform that excludes nothing or cannot say. Zero
   * is the honest claim "the device was in use whenever it was on", which iOS
   * has no way to make.
   */
  idleMinutes?: number;
  updatedAt?: string;
};
