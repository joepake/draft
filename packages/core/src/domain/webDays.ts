import type { WebHistoryEntry } from '@kidgate/schema/webActivity';
import { WEB_ACTIVITY_HOUR_BANDS } from '@kidgate/schema/webActivityHours';
import {
  WEB_DAYS_ROWS_FALLBACK_DAYS,
  WEB_DAYS_SINCE,
  type WebDay,
  type WebDayDomain,
} from '@kidgate/schema/webDay';
import {
  WEB_FILTER_CATEGORIES,
  type WebFilterCategory,
} from '@kidgate/schema/webActivity';

/**
 * Reading a day document the way the consoles read the rows it replaced.
 *
 * Both parent consoles, the weekly digest and the anomaly sweep consumed
 * `WebHistoryEntry[]` off `webHistory` rows; since 2026-10-01 the rows are a
 * map on `webDays/{date}` (`@kidgate/schema/webDay`). This is the fold back
 * to the entries every reader already understands, the merge with the rows
 * still readable for the thirty days retention keeps them, and the date on
 * which the rows stop being looked at — in core, so the four readers share
 * one answer rather than four.
 */

function parseCategory(value: unknown): WebFilterCategory | null {
  return typeof value === 'string' &&
    (WEB_FILTER_CATEGORIES as string[]).includes(value)
    ? (value as WebFilterCategory)
    : null;
}

function count(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
    ? Math.round(value)
    : 0;
}

/** `webHistory` row ids were `${date}__${domain}`; the entries keep the key. */
export function webDayEntryId(date: string, domain: string): string {
  return `${date}__${domain}`;
}

/** One day document as entries, most visited first. */
export function webDayEntries(
  date: string,
  day: Partial<WebDay> | null | undefined,
): WebHistoryEntry[] {
  const domains = (day?.domains ?? {}) as Record<string, Partial<WebDayDomain>>;
  return Object.entries(domains)
    .map(([domain, raw]) => ({
      id: webDayEntryId(date, domain),
      domain,
      date,
      visits: count(raw?.visits),
      blockedVisits: count(raw?.blockedVisits),
      category: parseCategory(raw?.category),
      aiCategory: parseCategory(raw?.aiCategory),
      lastAt: typeof raw?.lastAt === 'string' ? raw.lastAt : `${date}T00:00:00.000Z`,
    }))
    .sort((a, b) => b.visits - a.visits || a.domain.localeCompare(b.domain));
}

/**
 * Day documents and rows into one list: newest day first, most visited
 * first within a day, at most `limit`. A day that has a document is read
 * from the document alone — a row for that day is one the sweep has not
 * removed yet, and the document already holds whatever it says.
 */
export function foldWebHistory(
  days: ReadonlyArray<readonly [date: string, day: Partial<WebDay> | null | undefined]>,
  rows: ReadonlyArray<WebHistoryEntry>,
  limit: number,
): WebHistoryEntry[] {
  const covered = new Set<string>();
  const entries: WebHistoryEntry[] = [];
  for (const [date, day] of days) {
    covered.add(date);
    entries.push(...webDayEntries(date, day));
  }
  for (const row of rows) {
    if (!covered.has(row.date)) {
      entries.push(row);
    }
  }
  return entries
    .sort(
      (a, b) =>
        b.date.localeCompare(a.date) ||
        b.visits - a.visits ||
        a.domain.localeCompare(b.domain),
    )
    .slice(0, limit);
}

export interface WebDayHours {
  date: string;
  hours: number[];
  blockedHours: number[];
}

function bands(raw: Record<string, unknown> | undefined): number[] {
  const source = raw ?? {};
  return Array.from({ length: WEB_ACTIVITY_HOUR_BANDS }, (_, hour) =>
    count(source[String(hour)]),
  );
}

/** The hour bands a day document carries, in the shape `webActivityHours` had. */
export function webDayHours(
  date: string,
  day: Partial<WebDay> | null | undefined,
): WebDayHours {
  return {
    date,
    hours: bands(day?.hours as Record<string, unknown> | undefined),
    blockedHours: bands(day?.blockedHours as Record<string, unknown> | undefined),
  };
}

function addDays(dateKey: string, days: number): string {
  const parts = dateKey.split('-').map(Number);
  const year = parts[0] ?? 0;
  const month = parts[1] ?? 1;
  const day = parts[2] ?? 1;
  const shifted = new Date(Date.UTC(year, month - 1, day + days));
  return shifted.toISOString().slice(0, 10);
}

/** The last local day on which a reader still folds the old rows in. */
export const WEB_DAYS_ROWS_UNTIL = addDays(WEB_DAYS_SINCE, WEB_DAYS_ROWS_FALLBACK_DAYS);

/**
 * Whether a reader should still subscribe to the rows. True until the sweep
 * has had `WEB_DAYS_ROWS_FALLBACK_DAYS` to remove every row written before
 * the cutover; after that the second listener is a read nobody needs.
 */
export function rowsFallbackActive(todayKey: string): boolean {
  return todayKey <= WEB_DAYS_ROWS_UNTIL;
}

/** Rows a reader may still use: only those from before the day documents began. */
export function rowBeforeCutover(row: Pick<WebHistoryEntry, 'date'>): boolean {
  return row.date < WEB_DAYS_SINCE;
}
