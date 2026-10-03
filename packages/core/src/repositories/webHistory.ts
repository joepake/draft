import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import {
  webActivityHoursCollection,
  webDaysCollection,
  webHistoryCollection,
} from '@kidgate/schema/paths';
import {
  WEB_FILTER_CATEGORIES,
  type WebFilterCategory,
} from '@kidgate/schema/webActivity';
import type { WebHistoryEntry } from '@kidgate/schema/webActivity';
import {
  WEB_ACTIVITY_HOUR_BANDS,
  type WebActivityHoursDoc,
} from '@kidgate/schema/webActivityHours';
import type { WebDay } from '@kidgate/schema/webDay';
import {
  foldWebHistory,
  rowBeforeCutover,
  rowsFallbackActive,
  webDayHours,
} from '../domain/webDays';
import { deleteAllInBatches } from '../domain/batchDelete';

/**
 * A device's browsing, as the two parent consoles read it.
 *
 * **Since 2026-10-01 the record is one document per local day**
 * (`@kidgate/schema/webDay`): the domains that were rows in `webHistory` and
 * the bands that were `webActivityHours/{date}` sit on `webDays/{date}`, and
 * a console subscribed to the newest days reads **one document per flush**
 * where it read a row per domain — twelve, on the PC that was measured
 * (`docs/DATA_RETENTION.md` §14). The entries handed to the screens do not
 * change shape: `domain/webDays` folds a document back into the
 * `WebHistoryEntry[]` every screen, label and delta already consumes.
 *
 * **The rows stay readable for thirty days** — the sweep keeps them that
 * long, and a parent opening the list the morning after the cutover must
 * still see last week. While `rowsFallbackActive(today)` the repository
 * holds the old listener beside the new one and folds the two, rows only for
 * days that have no document; past that date the second listener is never
 * opened, without a deploy. Delete the fallback once `WEB_DAYS_ROWS_UNTIL`
 * has passed.
 */

/** How many rows a subscriber gets at most — the old page, kept. */
export const WEB_HISTORY_PAGE_SIZE = 300;
/** Rows the device card draws; the rest is behind the list. */
export const WEB_HISTORY_CARD_ROWS = 40;
/** Days a subscriber watches; a day is one document now. */
export const WEB_HISTORY_DAYS = 7;

function parseCategory(value: unknown): WebFilterCategory | null {
  return typeof value === 'string' &&
    (WEB_FILTER_CATEGORIES as string[]).includes(value)
    ? (value as WebFilterCategory)
    : null;
}

/** One `webHistory` row, the shape written until 2026-10-01. */
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

export interface WebActivityHoursDay {
  date: string;
  hours: number[];
  blockedHours: number[];
}

function mapHours(raw: WebActivityHoursDoc['hours']): number[] {
  const source = raw ?? {};
  return Array.from({ length: WEB_ACTIVITY_HOUR_BANDS }, (_, hour) => {
    const value = Number(source[String(hour)]);
    return Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
  });
}

function dayOf(doc: DocSnapshot): readonly [string, Partial<WebDay>] {
  const data = (doc.data() ?? {}) as Partial<WebDay>;
  const date =
    typeof data.date === 'string' && data.date.trim() ? data.date.trim() : doc.id;
  return [date, data] as const;
}

/** UTC calendar day, which is what the cutover and the sweep are keyed on. */
function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export interface WebHistoryRepositoryDeps {
  db: FirestorePort;
  /** The local day the fallback window is judged on; tests pin it. */
  today?: () => string;
}

export function createWebHistoryRepository(deps: WebHistoryRepositoryDeps) {
  const { db } = deps;
  const today = deps.today ?? todayKey;

  /**
   * The day documents, newest first, and — for the fallback window — the
   * rows beside them; each side re-emits the fold whenever it changes.
   */
  function watchDays(
    userId: string,
    deviceId: string,
    onChange: (
      days: ReadonlyArray<readonly [string, Partial<WebDay>]>,
      rows: WebHistoryEntry[],
    ) => void,
    onError: (error: Error) => void,
    rowsLimit: number,
  ): Unsubscribe {
    let days: ReadonlyArray<readonly [string, Partial<WebDay>]> = [];
    let rows: WebHistoryEntry[] = [];
    const unsubscribers: Unsubscribe[] = [];
    unsubscribers.push(
      db.onQuery(
        webDaysCollection(userId, deviceId),
        { orderBy: [['date', 'desc']], limit: WEB_HISTORY_DAYS },
        snapshot => {
          days = snapshot.docs.map(dayOf);
          onChange(days, rows);
        },
        onError,
      ),
    );
    if (rowsFallbackActive(today())) {
      unsubscribers.push(
        db.onQuery(
          webHistoryCollection(userId, deviceId),
          {
            orderBy: [
              ['date', 'desc'],
              ['visits', 'desc'],
            ],
            limit: rowsLimit,
          },
          snapshot => {
            rows = snapshot.docs
              .map(mapEntry)
              .filter(
                (entry): entry is WebHistoryEntry =>
                  entry !== null && rowBeforeCutover(entry),
              );
            onChange(days, rows);
          },
          onError,
        ),
      );
    }
    return () => {
      for (const unsubscribe of unsubscribers) {
        unsubscribe();
      }
    };
  }

  return {
    subscribe(
      userId: string,
      deviceId: string,
      onEntries: (entries: WebHistoryEntry[]) => void,
      onError: (error: Error) => void,
      limit = WEB_HISTORY_PAGE_SIZE,
    ): Unsubscribe {
      return watchDays(
        userId,
        deviceId,
        (days, rows) => onEntries(foldWebHistory(days, rows, limit)),
        onError,
        limit,
      );
    },

    subscribeHours(
      userId: string,
      deviceId: string,
      onDays: (days: WebActivityHoursDay[]) => void,
      onError: (error: Error) => void,
      limit = WEB_HISTORY_DAYS,
    ): Unsubscribe {
      let fromDays: WebActivityHoursDay[] = [];
      let fromHourDocs: WebActivityHoursDay[] = [];
      const emit = () => {
        const covered = new Set(fromDays.map(day => day.date));
        onDays(
          [...fromDays, ...fromHourDocs.filter(day => !covered.has(day.date))]
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, limit),
        );
      };
      const unsubscribers: Unsubscribe[] = [];
      unsubscribers.push(
        db.onQuery(
          webDaysCollection(userId, deviceId),
          { orderBy: [['date', 'desc']], limit },
          snapshot => {
            fromDays = snapshot.docs.map(doc => {
              const [date, day] = dayOf(doc);
              return webDayHours(date, day);
            });
            emit();
          },
          onError,
        ),
      );
      if (rowsFallbackActive(today())) {
        unsubscribers.push(
          db.onQuery(
            webActivityHoursCollection(userId, deviceId),
            { orderBy: [['date', 'desc']], limit },
            snapshot => {
              fromHourDocs = snapshot.docs
                .map(doc => {
                  const data = (doc.data() ?? {}) as Partial<WebActivityHoursDoc>;
                  const date =
                    typeof data.date === 'string' ? data.date.trim() : doc.id;
                  return date && rowBeforeCutover({ date })
                    ? {
                        date,
                        hours: mapHours(data.hours),
                        blockedHours: mapHours(data.blockedHours),
                      }
                    : null;
                })
                .filter((day): day is WebActivityHoursDay => day !== null);
              emit();
            },
            onError,
          ),
        );
      }
      return () => {
        for (const unsubscribe of unsubscribers) {
          unsubscribe();
        }
      };
    },

    /**
     * The unpair cascade: every browsing record this device left, the day
     * documents and whatever rows the sweep has not reached yet.
     */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      await Promise.all(
        [
          webDaysCollection(userId, deviceId),
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
