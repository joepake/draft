import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import { webHistoryCollection } from '@kidgate/schema/paths';
import {
  WEB_FILTER_CATEGORIES,
  type WebFilterCategory,
  type WebHistoryEntry,
} from '@kidgate/schema/webActivity';

/**
 * Rows fetched for the history screen.
 *
 * One row is one domain on one day, so a fortnight of ordinary browsing lands
 * well inside this. The screen groups by day, and a parent scrolling past 300
 * rows wants a date filter, not a longer list.
 */
export const WEB_HISTORY_PAGE_SIZE = 300;

/**
 * Rows fetched for the device-detail summary card.
 *
 * The card reports only the most recent day, and rows arrive newest day first,
 * so this is "enough domains to describe one day" rather than a page. A day
 * with more domains than this is summarised as `40+` — an exact count is not
 * worth paying for on a tile the parent taps through anyway.
 */
export const WEB_HISTORY_CARD_ROWS = 40;

function parseCategory(value: unknown): WebFilterCategory | null {
  return typeof value === 'string' &&
    (WEB_FILTER_CATEGORIES as string[]).includes(value)
    ? (value as WebFilterCategory)
    : null;
}

/** Returns null for a row missing the fields that identify it. */
function mapEntry(doc: DocSnapshot): WebHistoryEntry | null {
  const data = (doc.data() ?? {}) as Record<string, unknown>;

  const domain = typeof data.domain === 'string' ? data.domain.trim() : '';
  const date = typeof data.date === 'string' ? data.date.trim() : '';
  if (!domain || !date) {
    return null;
  }

  const visits = typeof data.visits === 'number' ? data.visits : 0;
  const blockedVisits = typeof data.blockedVisits === 'number' ? data.blockedVisits : 0;

  return {
    id: doc.id,
    domain,
    date,
    visits: Math.max(0, Math.round(visits)),
    blockedVisits: Math.max(0, Math.round(blockedVisits)),
    category: parseCategory(data.category),
    lastAt: typeof data.lastAt === 'string' ? data.lastAt : `${date}T00:00:00.000Z`,
  };
}

export interface WebHistoryRepositoryDeps {
  db: FirestorePort;
}

export function createWebHistoryRepository(deps: WebHistoryRepositoryDeps) {
  const { db } = deps;

  return {
    /**
     * Most recent days first, most-visited domain first inside each day.
     *
     * Ordering by visits rather than by time is deliberate: DNS gives an
     * ordering of lookups, not of attention, and "the sites she spent the day
     * on" is the question a parent opens this screen with.
     *
     * Needs the composite index on (date desc, visits desc) — see
     * `firestore.indexes.json`. A missing index fails here at runtime, not at
     * build time.
     */
    subscribe(
      userId: string,
      deviceId: string,
      onEntries: (entries: WebHistoryEntry[]) => void,
      onError: (error: Error) => void,
      limit = WEB_HISTORY_PAGE_SIZE,
    ): Unsubscribe {
      return db.onQuery(
        webHistoryCollection(userId, deviceId),
        {
          orderBy: [
            ['date', 'desc'],
            ['visits', 'desc'],
          ],
          limit,
        },
        snapshot => {
          onEntries(
            snapshot.docs
              .map(mapEntry)
              .filter((entry): entry is WebHistoryEntry => entry !== null),
          );
        },
        onError,
      );
    },
  };
}

export type WebHistoryRepository = ReturnType<typeof createWebHistoryRepository>;
