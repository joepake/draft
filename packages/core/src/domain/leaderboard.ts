/**
 * Weekly star standings, derived rather than tallied.
 *
 * Nothing anywhere stores a running total. Every number here is recomputed
 * from the approved reward tasks in the window, and that is what makes
 * reassigning a device to the right child fix the history instead of leaving a
 * total that disagrees with the tasks behind it.
 *
 * Stars rather than screen minutes, and that choice is load-bearing rather than
 * aesthetic. `docs/FEASIBILITY.md` records why: usage minutes are not
 * comparable across platforms — iOS reports about a dozen threshold crossings a
 * day, the desktop agent counts nothing while it is not running — so ranking
 * children by screen time ranks the measurement quality of whatever hardware
 * they happen to hold. Stars come from a parent pressing approve, which every
 * platform reports identically.
 */

import type { Child } from '@kidgate/schema/child';
import { MIN_LEADERBOARD_CHILDREN } from '@kidgate/schema/child';
import type { Device } from '@kidgate/schema/device';
import type { LeaderboardRow } from '@kidgate/schema/leaderboard';
import type { RewardTask } from '@kidgate/schema/rewardTask';
import { resolveTaskStars } from './rewardTasks';

/** Inclusive day keys a period covers, plus the key that names it. */
export interface LeaderboardWindow {
  periodKey: string;
  fromDate: string;
  toDate: string;
}

function pad(value: number): string {
  return value < 10 ? `0${value}` : String(value);
}

function dayKey(date: Date): string {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

/**
 * The ISO week containing `date`, Monday to Sunday.
 *
 * Same `2026-W34` shape `FamilyReport.periodKey` uses, and for the same reason:
 * two things describing one week of one family should not disagree about which
 * week that was.
 *
 * ISO weeks are computed in UTC deliberately. A family spanning timezones would
 * otherwise sit in two different weeks at once and the board would flicker
 * between them depending on which parent's phone recomputed last; a board that
 * changes by a few hours at the boundary is a smaller wrong than one that
 * changes by whose device you are holding.
 */
export function leaderboardWindow(date: Date): LeaderboardWindow {
  const monday = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
  );
  // getUTCDay is 0 on Sunday, which ISO counts as day 7 of the week before.
  const isoWeekday = monday.getUTCDay() === 0 ? 7 : monday.getUTCDay();
  monday.setUTCDate(monday.getUTCDate() - (isoWeekday - 1));

  const sunday = new Date(monday);
  sunday.setUTCDate(monday.getUTCDate() + 6);

  // ISO week number: the Thursday of this week decides which year and which
  // week it belongs to, which is what makes weeks spanning New Year land in one
  // year rather than being split.
  const thursday = new Date(monday);
  thursday.setUTCDate(monday.getUTCDate() + 3);
  const firstThursday = new Date(Date.UTC(thursday.getUTCFullYear(), 0, 4));
  const firstIsoWeekday =
    firstThursday.getUTCDay() === 0 ? 7 : firstThursday.getUTCDay();
  firstThursday.setUTCDate(firstThursday.getUTCDate() - (firstIsoWeekday - 1));
  const week =
    Math.round(
      (thursday.getTime() - firstThursday.getTime()) / (7 * 24 * 60 * 60 * 1000),
    ) + 1;

  return {
    periodKey: `${thursday.getUTCFullYear()}-W${pad(week)}`,
    fromDate: dayKey(monday),
    toDate: dayKey(sunday),
  };
}

/** Whether an approved task falls inside the window, by the day it was approved. */
function withinWindow(task: RewardTask, window: LeaderboardWindow): boolean {
  if (!task.resolvedAt) {
    return false;
  }
  const day = task.resolvedAt.slice(0, 10);
  return day >= window.fromDate && day <= window.toDate;
}

/**
 * Stars per child for the window, keyed by child id.
 *
 * Tasks are joined to a child through the device that earned them. A task from
 * a device nobody has assigned counts for nobody rather than for a default
 * child — inventing an owner would silently credit the wrong sibling, and the
 * unassigned device is visible on the parent's own screen.
 */
export function starsByChild(
  tasks: RewardTask[],
  devices: Device[],
  window: LeaderboardWindow,
): Map<string, number> {
  const childIdByDevice = new Map<string, string>();
  for (const device of devices) {
    if (device.childId) {
      childIdByDevice.set(device.id, device.childId);
    }
  }

  const totals = new Map<string, number>();
  for (const task of tasks) {
    if (task.status !== 'approved' || !withinWindow(task, window)) {
      continue;
    }
    const childId = childIdByDevice.get(task.deviceId);
    if (!childId) {
      continue;
    }
    totals.set(childId, (totals.get(childId) ?? 0) + resolveTaskStars(task));
  }

  return totals;
}

/**
 * The standings, highest first.
 *
 * **Every child gets a row, including one who earned nothing.** A board that
 * lists only the children who scored tells the child on zero that they are not
 * in the competition, which is the opposite of the point.
 *
 * Ties share a rank and the next rank skips — standard competition ranking.
 * Breaking a tie on some hidden field would invent a loser out of two children
 * who did exactly the same amount of work.
 */
export function rankChildren(
  children: Child[],
  totals: Map<string, number>,
): LeaderboardRow[] {
  const scored = children
    .map(child => ({ childId: child.id, stars: totals.get(child.id) ?? 0 }))
    .sort((left, right) => right.stars - left.stars);

  const rows: LeaderboardRow[] = [];
  for (const entry of scored) {
    const previous = rows[rows.length - 1];
    rows.push({
      childId: entry.childId,
      stars: entry.stars,
      rank:
        previous && previous.stars === entry.stars ? previous.rank : rows.length + 1,
    });
  }

  return rows;
}

/**
 * Whether this family sees a board at all.
 *
 * Two gates, and neither is a technical one. A single child ranked first out of
 * one is a joke; and comparing siblings against each other is a parenting
 * choice that some families want no part of, which is what the family flag is
 * for. Absent means enabled — a family that already has two children should not
 * have to hunt for a switch to get the feature.
 */
export function isLeaderboardVisible(
  children: Child[],
  leaderboardEnabled: boolean | undefined,
): boolean {
  return leaderboardEnabled !== false && children.length >= MIN_LEADERBOARD_CHILDREN;
}
