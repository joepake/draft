import { isRewardTaskAvailable } from '@kidgate/core/domain/rewardTasks';

/**
 * The Reward Tasks card's rows: open and claimed tasks, then approved ones.
 *
 * They are two reads that finish at different moments (`adapters/oneShot.js`),
 * so a task approved between them can be in both — the open read still says
 * claimed, the approved read already says approved — and the card drew it
 * twice, the first copy still offering Approve (2026-10-29). Approved is where
 * a one-time task ends, so that copy wins. A daily task's approval is a copy
 * with its own id, so the task itself stays open beside it.
 */
export function rewardTaskRows(openTasks, approvedTasks) {
  const approved = new Set(approvedTasks.map(task => task.id));
  return [...openTasks.filter(task => !approved.has(task.id)), ...approvedTasks];
}

/**
 * How often a task comes back, in the app pack's words. A daily task approved
 * today respawns locked until tomorrow; this row said "Every day" over it while
 * the child's and the phone's rows said it was back tomorrow (2026-10-29).
 */
export function rewardTaskRepeatKey(task, todayKey) {
  if (task.repeat !== 'daily') return 'rewardTask.repeatOnce';
  return isRewardTaskAvailable(task, todayKey)
    ? 'rewardTask.repeatDaily'
    : 'rewardTask.repeatBackTomorrow';
}
