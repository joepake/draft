import { localDayKey } from '@kidgate/core/domain/weeklyReportSchedule';

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
 * `apps/mobile`'s `getChildScreenTimeUsage` is the same fold. The two are
 * written twice and should not be — the honest home is
 * `@kidgate/core/domain/childUsage`, beside `childUsageTotals`, which is where
 * this belongs the next time either surface needs it changed
 * (`docs/BACKLOG.md`).
 */
export function childMinutesUsedToday(devices, nowMs = Date.now()) {
  const today = localDayKey(nowMs, -new Date(nowMs).getTimezoneOffset());
  let used = 0;
  let reported = false;
  for (const device of devices) {
    const controls = device?.controls;
    if (!controls || controls.usageDate !== today) continue;
    used += Math.max(0, controls.minutesUsedToday ?? 0);
    reported = true;
  }
  return reported ? used : null;
}
