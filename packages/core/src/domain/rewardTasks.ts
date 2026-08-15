import type { IsoDate } from '@kidgate/schema/primitives';
import type { RewardTask, RewardTaskStars } from '@kidgate/schema/rewardTask';
import {
  REWARD_STARS_MAX,
  REWARD_STARS_MIN,
  REWARD_STARS_THRESHOLD_MINUTES,
} from '@kidgate/schema/rewardTask';

/**
 * Whether the child can claim this task right now.
 *
 * A daily task that was approved today respawns carrying that day in
 * `availableAfterDate`, and stays locked until the device rolls into the next
 * one.
 *
 * `today` is a required argument, not a default read from the device clock:
 * it must come from server-corrected time (`ClockPort`), or winding the device
 * clock forward unlocks tomorrow's task tonight. The same check runs
 * server-side in claimRewardTask regardless, so this is defence in depth
 * rather than the only guard — but a caller that cannot supply a trusted date
 * should not be calling it.
 */
export function isRewardTaskAvailable(
  task: Pick<RewardTask, 'availableAfterDate'>,
  today: IsoDate,
): boolean {
  return !task.availableAfterDate || today > task.availableAfterDate;
}

/**
 * The difficulty a parent gets offered before touching the star control.
 *
 * Bonus minutes are the only signal available at that moment, so the bands in
 * `REWARD_STARS_THRESHOLD_MINUTES` are the guess. A parent who disagrees sets
 * the stars explicitly and this stops being consulted for that task.
 *
 * Mirrored in `functions/http/rewardTasks.js`, which applies the same default
 * when a client omits the field. Both read the schema's thresholds and
 * `serverConstantParity` fails when the two drift.
 */
export function defaultStarsForMinutes(bonusMinutes: number): RewardTaskStars {
  const band = REWARD_STARS_THRESHOLD_MINUTES.findIndex(
    upperBound => bonusMinutes <= upperBound,
  );

  // Above every band — findIndex returns -1 — is the top star, not the bottom.
  return (band === -1 ? REWARD_STARS_MAX : band + REWARD_STARS_MIN) as RewardTaskStars;
}

/**
 * The stars to render for a task, whether or not it carries any.
 *
 * Every reader goes through this rather than reading `task.stars`: tasks
 * created before the field existed have none, and a row that renders zero
 * stars for them would read as "worth nothing" instead of "written earlier".
 */
export function resolveTaskStars(
  task: Pick<RewardTask, 'stars' | 'bonusMinutes'>,
): RewardTaskStars {
  return task.stars ?? defaultStarsForMinutes(task.bonusMinutes);
}
