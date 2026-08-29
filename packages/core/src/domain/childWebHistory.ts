/**
 * One child's web history, merged across every device they hold.
 *
 * Each device keeps its own `webHistory` rows — one per domain per local day —
 * so a child who opened youtube.com on the phone and again on the laptop is
 * two rows for the same fact: "YouTube, today". Concatenating the lists hands
 * the history screen duplicate domain-days, double-counts nothing arithmetic
 * can undo later (`groupWebHistoryByService` sums whatever it is given), and
 * draws the same site twice on the day it matters most.
 *
 * So rows merge by (domain, day): visits and blocked visits add — lookups on
 * two machines are genuinely that many lookups, unlike the wall-clock overlap
 * `childUsage` refuses to sum — and `lastAt` keeps the most recent. Category
 * disagreements keep the first exact claim: devices classify against the same
 * tables (`webFilterCategoryDomains`), so a conflict is a stale table on one
 * side, and either answer beats null. The AI label stays only while no device
 * offers an exact one, mirroring `webHistoryLabel`'s ordering.
 *
 * Lives here because the dashboard renders the same merged feed; two parent
 * surfaces counting the same day differently is the bug class this package
 * exists to end.
 */

import type { WebHistoryEntry } from '@kidgate/schema/webActivity';

/**
 * Merge per-device histories into one per-child list, newest day first,
 * most-visited first within a day.
 *
 * The merged row's `id` is `domain@date` — stable across devices and
 * subscriptions, so list keys and selection survive a re-merge. Callers that
 * need the per-device split keep the input lists; this is a view, not a store.
 */
export function mergeChildWebHistory(
  perDevice: ReadonlyArray<readonly WebHistoryEntry[]>,
): WebHistoryEntry[] {
  const merged = new Map<string, WebHistoryEntry>();

  for (const entries of perDevice) {
    for (const entry of entries) {
      const key = `${entry.domain}@${entry.date}`;
      const existing = merged.get(key);
      if (!existing) {
        merged.set(key, { ...entry, id: key });
        continue;
      }
      merged.set(key, {
        ...existing,
        visits: existing.visits + entry.visits,
        blockedVisits: existing.blockedVisits + entry.blockedVisits,
        category: existing.category ?? entry.category,
        // Exact beats AI even across devices: drop the AI label the moment
        // any device names the domain from its tables.
        aiCategory:
          (existing.category ?? entry.category) != null
            ? null
            : (existing.aiCategory ?? entry.aiCategory ?? null),
        lastAt: existing.lastAt >= entry.lastAt ? existing.lastAt : entry.lastAt,
      });
    }
  }

  return [...merged.values()].sort(
    (a, b) => b.date.localeCompare(a.date) || b.visits - a.visits,
  );
}
