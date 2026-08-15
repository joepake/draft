/**
 * Should this device be locked right now, and why.
 *
 * One function, because the precedence between "the parent pressed lock", "it
 * is bedtime" and "today's minutes are spent" has to be the same answer on
 * every platform. A child comparing a phone that locked with a laptop that did
 * not has found a way around the product, not a quirk.
 *
 * Pure, and takes the clock as data — see `scheduleWindow.ts` for why reading
 * the device clock here would hand the child the override.
 */

import type { ScheduleWindow } from '@kidgate/schema/deviceControls';
import type { ShieldPolicy } from '@kidgate/schema/policy';
import type { Minutes } from '@kidgate/schema/primitives';
import { isWithinAnyScheduleWindow, type LocalTimePosition } from './scheduleWindow';

export type LockReason = 'parentLock' | 'schedule' | 'dailyLimit';

export interface LockDecision {
  locked: boolean;
  /** Null exactly when `locked` is false. Drives which message the child sees. */
  reason: LockReason | null;
}

export interface LockDecisionInput {
  /**
   * The master switch. Off means this device enforces nothing and reports
   * nothing — an unpaired or paused device, not a permissive one.
   */
  monitoringEnabled: boolean;
  shield: ShieldPolicy;
  windows: readonly ScheduleWindow[];
  /** Null means no limit. Zero means blocked all day, which is a different thing. */
  dailyLimitMinutes: Minutes | null;
  minutesUsedToday: Minutes;
  at: LocalTimePosition;
  /**
   * A child who pressed SOS. Outranks everything below it, including an
   * explicit parent lock.
   *
   * This is the one rule in the product that is allowed to defeat a parent's
   * instruction, and it is deliberate: a locked device that cannot call for
   * help is a worse outcome than any amount of circumvention. `SosPort` says
   * the same thing about implementations failing open.
   */
  sosEscapeActive: boolean;
}

export function decideLock(input: LockDecisionInput): LockDecision {
  if (!input.monitoringEnabled || input.sosEscapeActive) {
    return { locked: false, reason: null };
  }

  if (input.shield.lock) {
    return { locked: true, reason: 'parentLock' };
  }

  /*
   * Schedule is checked before the daily limit only so that the *reason* is the
   * more useful one when both apply: a window ends at a time the child can be
   * told, whereas "today's minutes are spent" resolves at local midnight and
   * says nothing more. The `locked` half is the same either way.
   */
  if (
    input.shield.scheduleActive &&
    isWithinAnyScheduleWindow(input.windows, input.at)
  ) {
    return { locked: true, reason: 'schedule' };
  }

  if (
    input.dailyLimitMinutes !== null &&
    input.minutesUsedToday >= input.dailyLimitMinutes
  ) {
    return { locked: true, reason: 'dailyLimit' };
  }

  return { locked: false, reason: null };
}
