/**
 * Which strings a locked child device shows, per reason.
 *
 * Keys, never rendered text — the same posture as `activityCopy`,
 * `sosAlertCopy`, `timeRequestCopy` and `blockedAppsCopy` beside it, and for the
 * same reason: `packages/core` must not import `@kidgate/i18n`, and the same
 * lock is read by a child in fourteen languages.
 *
 * **Not one new English string.** Every key here is already shipped for the
 * phone's own child screens. This table began in `apps/desktop/src/i18n.ts`;
 * `apps/tv` then wrote its own, picking `child.outOfScreenTimeAskParent` where
 * the Mac uses `child.outOfScreenTimeToday` — two screens in one product
 * disagreeing about what a spent daily limit says, with nothing failing. That is
 * the whole argument for a table rather than a switch in each app.
 *
 * `hint` is optional at the call site: a Mac has an SOS button under it and a
 * television has none (`DeviceCapabilities.sos` is false there), so the line
 * telling a child they can ask for help is drawn on one and not the other.
 */

import type { LockReason } from './lockDecision';

export interface LockCopyKeys {
  title: string;
  body: string;
  /** Only meaningful where the child has a way to ask. See above. */
  hint: string;
}

export const LOCK_COPY_KEYS: Record<LockReason, LockCopyKeys> = {
  parentLock: {
    title: 'child.devicePaused',
    body: 'child.phonePausedByParent',
    hint: 'child.pausedAskParentOrSos',
  },
  schedule: {
    title: 'child.blockedHoursLockTitle',
    body: 'child.blockedHoursLockBody',
    hint: 'child.blockedHoursLockHint',
  },
  dailyLimit: {
    title: 'child.limitReached',
    body: 'child.outOfScreenTimeToday',
    hint: 'child.pausedAskParentOrSos',
  },
};
