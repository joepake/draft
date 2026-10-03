import { foldMinutesToday, sumMinutesToday } from '@kidgate/core/domain/reportHub';
import { viewerTodayKey } from './useTodayKey.js';

/**
 * How much of a child's shared budget has gone today, summed from the device
 * documents on screen.
 *
 * **Never `controls.childBudget`.** That stamp is this same arithmetic
 * (`functions/lib/childBudget.js`) one report earlier, and nothing invalidates
 * it when the child's device set changes: a device unassigned, or moved to a
 * sibling, leaves its minutes inside every remaining stamp until the next
 * report lands. Measured on the phone 2026-09-06 — a child's family card read
 * 18h40 against 16h43 on their own screen.
 *
 * Only a device whose stored day IS today counts, so a family whose machines
 * have all been off since yesterday reads `null` rather than yesterday's
 * figure under a heading that says today. `null` is "nothing reported", which
 * is a different answer from `0`.
 *
 * The rule is core's since 2026-09-27 — `foldMinutesToday`, which the Reports
 * hub on both consoles and this surface's Screen tab read too, so the budget
 * card and the tab beside it cannot disagree about which day a stamp is.
 * `apps/mobile`'s `getChildScreenTimeUsage` still folds its own copy, and
 * counts a stale device with a limit as a measured zero (`docs/TODO.md`, A).
 */
export function childMinutesUsedToday(devices, nowMs = Date.now()) {
  return sumMinutesToday(
    foldMinutesToday(devices, { key: viewerTodayKey(nowMs), nowMs }),
  );
}
