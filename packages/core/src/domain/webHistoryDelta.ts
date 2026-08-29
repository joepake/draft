/**
 * Cumulative day counters in, increments out.
 *
 * Two child reporters hand over *running totals* for the local day — the iOS
 * report extension (minutes per domain) and the macOS content-filter provider
 * (visits per domain) — while `logChildWebActivity` **increments** what it is
 * sent. Posting a running total therefore multiplies every count by the number
 * of uploads, and posting nothing on failure loses the day. The gate between
 * those two failure modes is a persisted watermark of what has already been
 * accepted, and this module is that arithmetic, extracted so the desktop agent
 * and (eventually) the phone cannot disagree about it.
 *
 * The caller owns persistence and ordering: compute the batch, post it, and
 * only then store `next` — a failed upload must be retried in full next tick.
 */

import type { ContentFilterDomainRow } from '@kidgate/schema/contentFilter';
import type { WebActivityEntry } from '../repositories/webActivity';

/** What has already been accepted by the server, per domain, for one day. */
export interface WebHistoryWatermark {
  /** Local day the totals belong to. Any other day's rows reset the gate. */
  date: string;
  /** Domain -> cumulative counts already uploaded. */
  reported: Record<string, { visits: number; blockedVisits: number }>;
}

export interface WebHistoryDeltaResult {
  /** Increments worth posting, largest movement first. Empty means skip the call. */
  entries: WebActivityEntry[];
  /** The watermark to persist once the post has resolved. */
  next: WebHistoryWatermark;
}

/**
 * Minimum combined movement for a domain to be worth resending. One lookup is
 * the floor — the provider already deduped bursts into visits.
 */
const MIN_DELTA = 1;

export function webHistoryDelta(
  date: string,
  rows: readonly ContentFilterDomainRow[],
  watermark: WebHistoryWatermark | null,
  maxEntries: number,
): WebHistoryDeltaResult {
  // A different day is a fresh gate; the provider's counters rolled with it.
  const reported = watermark && watermark.date === date ? watermark.reported : {};

  const pending: (WebActivityEntry & {
    totals: { visits: number; blockedVisits: number };
  })[] = [];

  for (const row of rows) {
    const domain = row.domain.trim();
    if (!domain) {
      continue;
    }
    const totalVisits = Math.max(0, Math.round(row.visits));
    const totalBlocked = Math.max(0, Math.round(row.blockedVisits));
    const before = reported[domain] ?? { visits: 0, blockedVisits: 0 };

    /*
     * Totals below the watermark mean the provider restarted and its counters
     * began again at zero. Resetting the baseline re-sends what the fresh
     * counter has seen — a small over-count on a day the process bounced —
     * where keeping the old baseline would silently drop the rest of the day.
     * The endpoint's own comment picks this direction: an undercount reads to
     * a parent as "she did not visit that site".
     */
    const base =
      totalVisits < before.visits || totalBlocked < before.blockedVisits
        ? { visits: 0, blockedVisits: 0 }
        : before;

    const visits = totalVisits - base.visits;
    const blockedVisits = totalBlocked - base.blockedVisits;
    if (visits + blockedVisits < MIN_DELTA) {
      continue;
    }

    pending.push({
      domain,
      visits,
      ...(blockedVisits > 0 ? { blockedVisits } : {}),
      ...(row.category ? { category: row.category } : {}),
      totals: { visits: totalVisits, blockedVisits: totalBlocked },
    });
  }

  /*
   * Largest movement first, so a truncated batch ships what moved most and the
   * tail waits for the next drain rather than being dropped — the same rule as
   * the phone's uploader.
   */
  pending.sort(
    (a, b) => b.visits + (b.blockedVisits ?? 0) - (a.visits + (a.blockedVisits ?? 0)),
  );
  const shipped = pending.slice(0, maxEntries);

  const nextReported: WebHistoryWatermark['reported'] = { ...reported };
  for (const entry of shipped) {
    nextReported[entry.domain] = entry.totals;
  }

  return {
    entries: shipped.map(({ totals: _totals, ...entry }) => entry),
    next: { date, reported: nextReported },
  };
}
