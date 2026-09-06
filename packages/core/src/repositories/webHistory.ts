import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import { deleteAllInBatches } from '../domain/batchDelete';
import {
  webActivityHoursCollection,
  webHistoryCollection,
} from '@kidgate/schema/paths';
import {
  WEB_FILTER_CATEGORIES,
  type WebFilterCategory,
  type WebHistoryEntry,
} from '@kidgate/schema/webActivity';
import {
  WEB_ACTIVITY_HOUR_BANDS,
  type WebActivityHoursDoc,
} from '@kidgate/schema/webActivityHours';

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
    aiCategory: parseCategory(data.aiCategory),
    lastAt: typeof data.lastAt === 'string' ? data.lastAt : `${date}T00:00:00.000Z`,
  };
}

/**
 * One day's page loads by hour, index 0 = the device's local midnight.
 *
 * The decoded counterpart of `WebActivityHoursDoc`, and it stays here rather
 * than in `@kidgate/schema` because nothing crosses a process boundary in this
 * shape: it is the dense array a chart iterates, built out of the sparse map
 * Firestore actually stores.
 */
export interface WebActivityHoursDay {
  date: string;
  /**
   * Always `WEB_ACTIVITY_HOUR_BANDS` long, zero-filled — a chart must not read
   * holes, and the stored map is sparse.
   */
  hours: number[];
  blockedHours: number[];
}

/**
 * The stored shape is a **map**, not an array — Firestore can increment
 * `hours.13` and cannot increment an array element, and increments are what let
 * a five-minute upload cadence add up instead of overwrite.
 */
function mapHours(raw: WebActivityHoursDoc['hours']): number[] {
  const source = raw ?? {};
  return Array.from({ length: WEB_ACTIVITY_HOUR_BANDS }, (_, hour) => {
    const value = Number(source[String(hour)]);
    return Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
  });
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

    /**
     * The hourly band for the most recent days, newest first.
     *
     * Only devices publishing `DeviceCapabilities.webActivityHours` write these
     * documents, and the caller must read that flag rather than infer from an
     * empty result: a device that has not uploaded yet looks exactly like one
     * that never can, which is the distinction `capabilities.ts` exists to
     * keep.
     *
     * The document id is the date, so this needs no composite index.
     */
    subscribeHours(
      userId: string,
      deviceId: string,
      onDays: (days: WebActivityHoursDay[]) => void,
      onError: (error: Error) => void,
      limit = 7,
    ): Unsubscribe {
      return db.onQuery(
        webActivityHoursCollection(userId, deviceId),
        { orderBy: [['date', 'desc']], limit },
        snapshot => {
          onDays(
            snapshot.docs
              .map(doc => {
                const data = (doc.data() ?? {}) as Partial<WebActivityHoursDoc>;
                const date = typeof data.date === 'string' ? data.date.trim() : doc.id;
                return date
                  ? {
                      date,
                      hours: mapHours(data.hours),
                      blockedHours: mapHours(data.blockedHours),
                    }
                  : null;
              })
              .filter((day): day is WebActivityHoursDay => day !== null),
          );
        },
        onError,
      );
    },

    /**
     * Both browsing collections this device owns, on removal.
     *
     * `webHistory` is every domain the child visited and `webActivityHours` is
     * when they visited it — the most sensitive rows this product stores, and
     * the ones that survived an unpair longest. They hang off the device
     * document, and Firestore deletes no subcollection when its parent goes, so
     * neither was ever removed by anything.
     */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      await Promise.all(
        [
          webHistoryCollection(userId, deviceId),
          webActivityHoursCollection(userId, deviceId),
        ].map(async path => {
          const snapshot = await db.getDocs(path);
          await deleteAllInBatches(
            db,
            path,
            snapshot.docs.map(doc => doc.id),
          );
        }),
      );
    },
  };
}

export type WebHistoryRepository = ReturnType<typeof createWebHistoryRepository>;
