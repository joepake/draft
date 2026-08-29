/**
 * Whether a parent surface should mark this week's report as unread.
 *
 * Both parent surfaces ask it — `apps/mobile`'s Reports tab and
 * `apps/dashboard`'s sidebar — so the rule lives here rather than twice: two
 * screens that decide "new" differently would disagree about the same week, and
 * the dot is only worth anything while it means one thing.
 *
 * Where the answer is *stored* stays with the platform (MMKV on the phone,
 * `localStorage` on the web) and is keyed by family, because a parent who
 * belongs to two families has read one family's week and not the other's.
 *
 * `periodKey` is the week stamp (`2026-W33`). It sorts identically as text,
 * which is the same property `repositories/familyReport` orders its history on.
 */
export function hasUnseenWeeklyReport(
  latestPeriodKey: string | null | undefined,
  lastSeenPeriodKey: string | null | undefined,
): boolean {
  const latest = latestPeriodKey?.trim();
  if (!latest) {
    /*
     * No report is not an unread one. A family in its first week and a read
     * that failed both land here, and neither is a week to point a parent at —
     * a dot over an empty screen teaches that the dot means nothing.
     */
    return false;
  }

  const seen = lastSeenPeriodKey?.trim();
  if (!seen) {
    /*
     * Never opened. This includes the parent who has had reports for months
     * and never found the screen, which is exactly who the mark exists for:
     * the push already deep-links the ones who tap it, so the only reader left
     * to reach is the one whose notifications are off.
     */
    return true;
  }

  /*
   * `>` rather than `!==`: a stored key ahead of the newest report means the
   * week it named is gone (retention dropped it, the family switched), and
   * re-marking a report that was already read as new would make the dot lie.
   */
  return latest.localeCompare(seen) > 0;
}
