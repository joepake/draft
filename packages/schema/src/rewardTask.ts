/**
 * Reward task lifecycle: open → claimed → approved. Rejection returns the
 * task to 'open' (with lastRejectedAt) so the child can try again — there is
 * no terminal 'rejected' state on purpose.
 */
export type RewardTaskStatus = 'open' | 'claimed' | 'approved';

/**
 * 'daily' tasks respawn: approving one leaves the approved doc as history and
 * the server opens a fresh copy for the next day. 'once' is the default, and
 * what every task created before this existed behaves as.
 */
export type RewardTaskRepeat = 'once' | 'daily';

/**
 * How hard the task is, as the parent judged it when creating it.
 *
 * Three values rather than five, and the reason is that this is a difficulty a
 * parent sets up front, not a rating anyone gives afterwards. A five-point
 * scale with no anchor gets used as 1/3/5 in practice, and it would need five
 * labels translated into fourteen languages for two of which nobody can name
 * the second and fourth rung.
 */
export type RewardTaskStars = 1 | 2 | 3;

export const REWARD_STARS_MIN = 1;
export const REWARD_STARS_MAX = 3;

/**
 * Upper bound of each star band, in bonus minutes: `<= 15` is one star,
 * `<= 45` is two, anything above is three.
 *
 * Both the client and `functions/http/rewardTasks.js` derive a default from
 * this, so the two must agree or the same task shows a different difficulty
 * depending on which side last wrote it. `serverConstantParity` holds them
 * together.
 */
export const REWARD_STARS_THRESHOLD_MINUTES = [15, 45] as const;

/**
 * What `createRewardTask` and `updateRewardTask` accept.
 *
 * Here since 2026-09-03, when a second parent surface needed them. They lived
 * in `apps/mobile/src/constants/RewardTask.ts` under a comment admitting the
 * duplication — the exact shape rule 2 of the root `CLAUDE.md` exists to end,
 * and `apps/dashboard` would have been the third copy.
 *
 * **Out of range is rejected, not clamped**, so a client that lets a parent
 * type 300 minutes shows them a refusal rather than silently writing 240.
 * `functions/http/rewardTasks.js` is the enforcement and mirrors these by hand
 * (that directory cannot import this package); `serverConstantParity` fails
 * when the two drift.
 */
export const REWARD_TITLE_MAX_LENGTH = 80;
export const REWARD_MIN_MINUTES = 5;
export const REWARD_MAX_MINUTES = 240;

export interface RewardTask {
  id: string;
  /**
   * The PERSON this task belongs to — the child-level shape (2026-08-26).
   * Absent on tasks created per-device before it existed; those keep behaving
   * exactly as they did. A task carrying this is visible to every device
   * assigned to the child, and `deviceId` below is re-aimed at claim time.
   */
  childId?: string;
  /** The child's name at creation, for rows and pushes. */
  childName?: string;
  /**
   * For a legacy task: the one device it was created for. For a child-level
   * task: empty until claimed, then THE DEVICE THAT CLAIMED IT — which is
   * where the approval's bonus minutes land, since the daily limit is still
   * per-device.
   */
  deviceId: string;
  deviceName: string;
  title: string;
  bonusMinutes: number;
  /**
   * Difficulty, 1–3. The unit a leaderboard would count, deliberately separate
   * from `bonusMinutes` so "hard chore, small time reward" is expressible.
   *
   * Absent on every task created before this field existed, and not
   * backfilled: a reader derives one from `bonusMinutes` instead
   * (`resolveTaskStars` in `@kidgate/core/domain/rewardTasks`).
   */
  stars?: RewardTaskStars;
  repeat: RewardTaskRepeat;
  status: RewardTaskStatus;
  createdAt: string;
  claimedAt?: string;
  resolvedAt?: string;
  lastRejectedAt?: string;
  /**
   * `YYYY-MM-DD` the task was last earned on. Claimable once the child's own
   * day is past it — see `isRewardTaskAvailable`.
   */
  availableAfterDate?: string;
}
