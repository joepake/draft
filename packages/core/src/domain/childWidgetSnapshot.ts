/**
 * Which sentence the child's own widget shows, as keys — the same posture as
 * `parentWidgetSnapshot` beside it, and `packages/core` still must not import
 * `@kidgate/i18n`.
 *
 * The state this resolves is already decided by the time it runs. Whether the
 * device is locked, and why, is `decideLock`'s question (`lockDecision.ts`) —
 * this module does not re-derive it. On both platforms the native monitor
 * already computed `isLocked` / `scheduleActive` / `dailyLimitExceeded` for
 * enforcement; the widget's only job is to pick the right sentence for the
 * state the child is already in, never to decide the state itself. Reading
 * two answers for "is this device locked" — one that enforces, one that
 * merely narrates — is how a widget and a lock screen come to disagree.
 */

import type { ParentWidgetCopy } from './parentWidgetSnapshot';

export interface ChildWidgetUsage {
  usedMinutes: number;
  /** Null means no limit is set today. */
  limitMinutes: number | null;
  exceeded: boolean;
}

export interface ChildWidgetInput {
  isLocked: boolean;
  /** Only consulted when `isLocked` — picks the sentence, not the lock itself. */
  scheduleActive: boolean;
  /** Null when nothing has been reported today — the honest "don't know" state. */
  usage: ChildWidgetUsage | null;
}

export interface ChildWidgetDraft {
  title: ParentWidgetCopy;
  status: ParentWidgetCopy;
  progress: number;
  locked: boolean;
  hasUsageData: boolean;
}

/** Ships for the phone's own child screens already — not one new string. */
const TITLE_KEY = 'child.screenTimeToday';
const LOCKED_SCHEDULE_KEY = 'child.blockedHours';
const LOCKED_LIMIT_KEY = 'child.limitReached';
const LOCKED_PARENT_KEY = 'child.paused';
const NO_LIMIT_KEY = 'usage.insightNoDailyLimit';
const NO_DATA_KEY = 'usage.noUsageDataYet';
const REMAINING_KEY = 'usage.minutesLeftToday';

export function buildChildWidgetDraft(input: ChildWidgetInput): ChildWidgetDraft {
  const title = { key: TITLE_KEY };

  if (input.isLocked) {
    // Schedule outranks a spent limit as the sentence to show for the same
    // reason `decideLock` checks it first: a device locked for both reasons at
    // once should tell the child the one that will not lift at midnight.
    const key = input.scheduleActive
      ? LOCKED_SCHEDULE_KEY
      : input.usage?.exceeded
        ? LOCKED_LIMIT_KEY
        : LOCKED_PARENT_KEY;
    return {
      title,
      status: { key },
      // A locked device reads as "full" regardless of the exact minute count —
      // a bar at 40% under "Limit reached" would look like a bug, not a state.
      progress: 1,
      locked: true,
      hasUsageData: input.usage !== null,
    };
  }

  if (!input.usage) {
    return {
      title,
      status: { key: NO_DATA_KEY },
      progress: 0,
      locked: false,
      hasUsageData: false,
    };
  }

  if (!input.usage.limitMinutes || input.usage.limitMinutes <= 0) {
    return {
      title,
      status: { key: NO_LIMIT_KEY },
      progress: 0,
      locked: false,
      hasUsageData: true,
    };
  }

  const remaining = Math.max(
    0,
    input.usage.limitMinutes - Math.max(0, input.usage.usedMinutes),
  );
  return {
    title,
    status: {
      key: REMAINING_KEY,
      durationMinutes: remaining,
      durationSlot: 'remaining',
    },
    progress: Math.min(
      Math.max(input.usage.usedMinutes, 0) / input.usage.limitMinutes,
      1,
    ),
    locked: false,
    hasUsageData: true,
  };
}
