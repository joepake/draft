import type { ClockPort } from '@kidgate/ports/clock';
import type { FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import { usageDaysCollection } from '@kidgate/schema/paths';
import type { IsoDate } from '@kidgate/schema/primitives';
import {
  USAGE_TOP_APPS_LIMIT,
  type UsageAppBreakdown,
  type UsageDay,
} from '@kidgate/schema/usageDay';
import { deleteAllInBatches } from '../domain/batchDelete';
import { isTimeline } from '../domain/usageTimeline';

/**
 * Daily usage rollups, one document per device-local day, id `YYYY-MM-DD`.
 */

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function sanitizeTopApps(raw: unknown): UsageAppBreakdown[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .slice(0, USAGE_TOP_APPS_LIMIT)
    .map(entry => {
      if (!entry || typeof entry !== 'object') {
        return null;
      }
      const row = entry as Record<string, unknown>;
      const packageName =
        typeof row.packageName === 'string' ? row.packageName.trim() : '';
      const label =
        typeof row.label === 'string' && row.label.trim()
          ? row.label.trim().slice(0, 64)
          : packageName;
      const minutes = Number(row.minutes);
      if (!packageName || !Number.isFinite(minutes) || minutes < 1) {
        return null;
      }
      return {
        packageName: packageName.slice(0, 180),
        label,
        minutes: Math.floor(minutes),
      };
    })
    .filter((entry): entry is UsageAppBreakdown => entry != null)
    .sort((a, b) => b.minutes - a.minutes);
}

function mapDoc(id: string, data: Record<string, unknown>): UsageDay {
  return {
    id,
    date: typeof data.date === 'string' ? data.date : id,
    minutes: Number(data.minutes ?? 0),
    bonusMinutes: Number(data.bonusMinutes ?? 0),
    topApps: sanitizeTopApps(data.topApps),
    /*
     * Absent rather than empty when it is not a valid day's worth. The two are
     * different answers on a parent's screen — no field means this device does
     * not report one, where 1440 dashes means it does and saw nothing — and
     * `timelineAvailability` is what turns that distinction into copy.
     */
    ...(isTimeline(data.timeline) ? { timeline: data.timeline } : {}),
    /*
     * Absent for the same reason and with the same weight: a device that
     * excludes nothing has no idle time to report, and zero would claim it
     * looked and found none. The parent's list draws its row on a positive
     * number, so absent and zero render alike today — they stop rendering alike
     * the first time anything wants to say "the set was never left on".
     */
    ...(typeof data.idleMinutes === 'number' &&
    Number.isFinite(data.idleMinutes) &&
    data.idleMinutes >= 0
      ? { idleMinutes: Math.floor(data.idleMinutes) }
      : {}),
  };
}

export interface UsageDayRepositoryDeps {
  db: FirestorePort;
  clock: ClockPort;
}

export function createUsageDayRepository(deps: UsageDayRepositoryDeps) {
  const { db, clock } = deps;

  /** `days` calendar keys ending today, oldest first. Device-local. */
  function recentDateKeys(days: number): IsoDate[] {
    const todayMs = new Date(`${clock.today()}T00:00:00Z`).getTime();
    return Array.from({ length: days }, (_, index) => {
      const at = new Date(todayMs - (days - 1 - index) * 86_400_000);
      return at.toISOString().slice(0, 10);
    });
  }

  return {
    /**
     * A zero-filled range, without reading anything.
     *
     * The reports screen renders this while the real data loads, so the chart
     * has its final shape from the first frame instead of jumping from empty to
     * full. Same keys `fetchRecent` will return.
     */
    emptyRange(days: number): UsageDay[] {
      return recentDateKeys(days).map(key => ({
        id: key,
        date: key,
        minutes: 0,
        bonusMinutes: 0,
        topApps: [],
      }));
    },

    /**
     * The last `days` days, gap-filled with zero rows.
     *
     * A range query is preferred, with a fallback for when it is rejected —
     * which in practice means the composite index is missing or still
     * building. Nothing prunes `usageDays`, so it grows one document per day
     * forever and an unbounded read here would fetch the device's entire
     * history to render one month. Document ids are `YYYY-MM-DD`, which sorts
     * chronologically, so taking the newest `days` ids bounds the read without
     * needing the index that just failed.
     */
    async fetchRecent(
      userId: string,
      deviceId: string,
      days: number,
    ): Promise<UsageDay[]> {
      const keys = recentDateKeys(days);
      const startKey = keys[0] ?? '';
      const endKey = keys[keys.length - 1] ?? '';
      const keySet = new Set(keys);
      const byDate = new Map<string, UsageDay>();
      const path = usageDaysCollection(userId, deviceId);

      const absorb = (id: string, data: Record<string, unknown>) => {
        const mapped = mapDoc(id, data);
        byDate.set(id, mapped);
        if (typeof data.date === 'string' && DATE_RE.test(data.date)) {
          byDate.set(data.date, mapped);
        }
      };

      try {
        const snapshot = await db.getDocs(path, {
          where: [
            ['date', '>=', startKey],
            ['date', '<=', endKey],
          ],
          orderBy: [['date', 'asc']],
        });
        for (const doc of snapshot.docs) {
          absorb(doc.id, (doc.data() ?? {}) as Record<string, unknown>);
        }
      } catch {
        /*
         * No `orderBy`, and therefore no `limit`.
         *
         * This asked for the newest ids first, which is `orderBy('__name__',
         * 'desc')` — and Firestore indexes the document id ascending only, so
         * the fallback threw `failed-precondition` every time the primary read
         * sent it here. Ordering by `date` is not the answer either: this path
         * exists precisely for documents that have no `date` field.
         *
         * Reading the collection is affordable because retention bounds it —
         * `cleanupUsageRetention` prunes `usageDays` after 30 days — and the
         * `keySet` check below already discards everything outside the window.
         */
        const snapshot = await db.getDocs(path, {});
        for (const doc of snapshot.docs) {
          const data = (doc.data() ?? {}) as Record<string, unknown>;
          const dateKey =
            typeof data.date === 'string' && DATE_RE.test(data.date)
              ? data.date
              : doc.id;
          if (!keySet.has(dateKey) && !keySet.has(doc.id)) {
            continue;
          }
          absorb(doc.id, data);
        }
      }

      return keys.map(
        key =>
          byDate.get(key) ?? {
            id: key,
            date: key,
            minutes: 0,
            bonusMinutes: 0,
            topApps: [],
          },
      );
    },

    /**
     * One day, live.
     *
     * Live rather than a one-shot read because `topApps` is what the app-limit
     * editor shows as "used today", and a cap filling up while the screen is
     * open must not keep reading as spent-zero. One document, so the listener
     * costs a read per change rather than per app.
     *
     * A missing document is a day the child has not reported yet and is passed
     * on as `null` — a different state from "reported nothing".
     */
    subscribeDay(
      userId: string,
      deviceId: string,
      date: IsoDate,
      onDay: (day: UsageDay | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onDoc(
        `${usageDaysCollection(userId, deviceId)}/${date}`,
        snapshot => {
          if (!snapshot.exists) {
            onDay(null);
            return;
          }
          onDay(mapDoc(date, (snapshot.data() ?? {}) as Record<string, unknown>));
        },
        onError,
      );
    },

    /**
     * Remove every day this device ever reported.
     *
     * **Part of the device-removal cascade, and it was missing.** These
     * documents live *under* the device document — Firestore deletes no
     * subcollection when its parent goes, so unpairing a television left the
     * family's whole screen-time history behind: invisible to the device list,
     * still billed for, still readable by anyone who reconstructs the path, and
     * still feeding the parent's own Top Apps card. Reported from a living room
     * on 2026-08-23, where a removed TV's report read `0p` beside a YouTube row
     * of six minutes — the total came from the deleted device document and the
     * row from these survivors.
     */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = usageDaysCollection(userId, deviceId);
      const snapshot = await db.getDocs(path);
      await deleteAllInBatches(
        db,
        path,
        snapshot.docs.map(doc => doc.id),
      );
    },
  };
}

export type UsageDayRepository = ReturnType<typeof createUsageDayRepository>;
