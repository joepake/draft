/**
 * Where a surface's Firestore reads actually go, counted rather than reasoned
 * about.
 *
 * **This exists because five separate attempts to infer the answer were wrong.**
 * `docs/DATA_RETENTION.md` §9 and §11 have the record; the short version is that
 * a model explaining 23,844 reads a day was built, was given a falsifiable
 * prediction, and failed it — closing every parent console moved reads *up*.
 * Cloud Monitoring cannot break reads down by collection, so **84% of this
 * product's reads are still unattributed**, and nothing further can be inferred
 * from the outside. This counts them from the inside.
 *
 * A decorator over `FirestorePort`, so it sees every read every repository
 * makes and needs no change at a single call site:
 *
 * ```ts
 * const counter = createFirestoreReadCounter();
 * const db = counter.wrap(createFirestoreAdapter(() => handles.db));
 * // …later, from a debug menu or a console:
 * console.table(counter.report());
 * ```
 *
 * **Off unless an app wraps with it.** It holds counters and nothing else — no
 * IO, no timers, no reporting of its own — so it cannot leak anything on a
 * surface that does not opt in.
 *
 * ## What it can and cannot know
 *
 * `fromCache` is the load-bearing part: a cached snapshot costs no server read,
 * so cached deliveries are not counted at all. Beyond that the port's shape
 * limits what is knowable, and the two numbers are deliberately kept apart
 * rather than blended into one confident figure:
 *
 * - **One-shot reads are exact.** `getDoc` is one; `getDocs` is the number of
 *   documents it returned; `countDocs` is one aggregation read.
 * - **Listener reads are bracketed, not exact.** Firestore bills a listener for
 *   its opening snapshot in full and afterwards for each *changed* document, and
 *   `QuerySnapshot` here carries no change list. So the true number sits between
 *   `serverDeliveries` (at least one document moved per delivery) and
 *   `docsDelivered` (the whole set re-counted every time). Read them as a
 *   bracket. For finding which path is expensive, the bracket is enough — the
 *   culprit stands out at either bound.
 */

import type { Millis } from '@kidgate/schema/primitives';
import type { StoragePort } from '@kidgate/ports/storage';
import type {
  DocData,
  DocSnapshot,
  FirestorePort,
  QuerySnapshot,
  QuerySpec,
  Unsubscribe,
} from '@kidgate/ports/firestore';

export interface ReadTally {
  /** The path with its document ids replaced — see `patternFor`. */
  pattern: string;
  /** `getDoc` calls plus documents returned by `getDocs`, plus `countDocs`. */
  oneShotReads: number;
  /** Listeners opened on this pattern. */
  listeners: number;
  /** Non-cached callbacks. The lower bound on this pattern's listener reads. */
  serverDeliveries: number;
  /** Documents carried by those callbacks. The upper bound. */
  docsDelivered: number;
}

export interface FirestoreReadCounterDeps {
  /**
   * Where the running tally survives an app restart.
   *
   * **Without it the counter measures a session, not a day**, and on a parent
   * phone a session is about fifteen minutes. Omit it and `flushIfDue` reports
   * only what this process saw.
   */
  storage?: StoragePort | undefined;
  now?: (() => Millis) | undefined;
  onError?: ((error: unknown) => void) | undefined;
}

export interface FirestoreReadCounter {
  wrap(port: FirestorePort): FirestorePort;
  /** Heaviest first, by upper bound. In-memory only — see `flushIfDue`. */
  report(): ReadTally[];
  reset(): void;
  /**
   * Fold this process's counts into the stored tally and, once a day, hand the
   * whole thing to `sink` and start again. Resolves true when it flushed.
   *
   * **Once a day, not once a session, and the arithmetic is why.** One event
   * per read is 29,508 events a day for a single family — more traffic than the
   * traffic it measures, and past a free analytics tier at about eleven
   * families. Folded to one event per path pattern per day it is about thirty,
   * which holds to roughly two thousand families before sampling is needed.
   * `docs/DATA_RETENTION.md` §9 has the measurement.
   *
   * Call it where the app already does something once a day on becoming
   * active — `apps/mobile`'s `touchParentPresenceIfDue` is the same shape and
   * the same reasoning. It never throws: a failed report must not be visible to
   * a parent, and the counts are kept so the next attempt carries them.
   */
  flushIfDue(sink: (rows: ReadTally[]) => Promise<void>): Promise<boolean>;
}

const TALLY_KEY = 'kidgate.readCounter.tally';
const FLUSHED_AT_KEY = 'kidgate.readCounter.flushedAtMs';
const ONCE_A_DAY_MS = 24 * 60 * 60 * 1000;

/**
 * `users/abc/childDevices/xyz/webHistory/w1` →
 * `users/{id}/childDevices/{id}/webHistory/{id}`.
 *
 * Firestore paths alternate collection and document, so every odd segment is an
 * id. Without this, every device and every history row is its own row in the
 * report and the shape of the traffic disappears into the noise.
 */
export function patternFor(path: string): string {
  return path
    .split('/')
    .map((segment, index) => (index % 2 === 1 ? '{id}' : segment))
    .join('/');
}

export function createFirestoreReadCounter(
  deps: FirestoreReadCounterDeps = {},
): FirestoreReadCounter {
  const now = deps.now ?? (() => Date.now());
  const tallies = new Map<string, ReadTally>();
  /** Guards against two `flushIfDue` calls racing on the same stored tally. */
  let flushing: Promise<boolean> | null = null;

  const tally = (path: string): ReadTally => {
    const pattern = patternFor(path);
    let entry = tallies.get(pattern);
    if (!entry) {
      entry = {
        pattern,
        oneShotReads: 0,
        listeners: 0,
        serverDeliveries: 0,
        docsDelivered: 0,
      };
      tallies.set(pattern, entry);
    }
    return entry;
  };

  const noteDelivery = (path: string, docs: number, fromCache: boolean): void => {
    if (fromCache) {
      // Served from the local cache: no server read, nothing billed, and
      // counting it would put the blame on whichever screen re-rendered.
      return;
    }
    const entry = tally(path);
    entry.serverDeliveries += 1;
    entry.docsDelivered += docs;
  };

  /** Sum two tallies by pattern. Used to fold this process into what is stored. */
  const merge = (into: Map<string, ReadTally>, rows: ReadTally[]) => {
    for (const row of rows) {
      const existing = into.get(row.pattern);
      if (!existing) {
        into.set(row.pattern, { ...row });
        continue;
      }
      existing.oneShotReads += row.oneShotReads;
      existing.listeners += row.listeners;
      existing.serverDeliveries += row.serverDeliveries;
      existing.docsDelivered += row.docsDelivered;
    }
  };

  const readStored = async (): Promise<ReadTally[]> => {
    const raw = await deps.storage?.get(TALLY_KEY);
    if (!raw) {
      return [];
    }
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as ReadTally[]) : [];
    } catch {
      /*
       * A tally that will not parse is dropped rather than repaired. It is
       * diagnostics: losing a day of it costs nothing, and a half-read value
       * folded into the next day would be a number nobody could explain.
       */
      return [];
    }
  };

  return {
    wrap(port: FirestorePort): FirestorePort {
      return {
        ...port,

        async getDoc<T = DocData>(path: string): Promise<DocSnapshot<T>> {
          const snapshot = await port.getDoc<T>(path);
          if (!snapshot.fromCache) {
            tally(path).oneShotReads += 1;
          }
          return snapshot;
        },

        async getDocs<T = DocData>(
          path: string,
          query?: QuerySpec,
        ): Promise<QuerySnapshot<T>> {
          const snapshot = await port.getDocs<T>(path, query);
          /*
           * Length, not one: a query returning three hundred documents is
           * billed three hundred times, and recording it as a single read
           * would point at the wrong path.
           *
           * An empty result is the exception and is billed **one** read, so it
           * counts as one. A listener or a query that is usually empty but runs
           * constantly is exactly the shape this tool exists to surface, and
           * filtering it to zero would hide it.
           */
          const served = snapshot.docs.filter(doc => !doc.fromCache).length;
          const allCached = snapshot.docs.length > 0 && served === 0;
          if (!allCached) {
            tally(path).oneShotReads += Math.max(served, 1);
          }
          return snapshot;
        },

        async countDocs(path: string, query?: QuerySpec): Promise<number> {
          // One billed read regardless of what it counts — the whole reason
          // `countDocs` exists rather than fetching and measuring.
          tally(path).oneShotReads += 1;
          return port.countDocs(path, query);
        },

        onDoc<T = DocData>(
          path: string,
          onNext: (snapshot: DocSnapshot<T>) => void,
          onError: (error: Error) => void,
        ): Unsubscribe {
          tally(path).listeners += 1;
          return port.onDoc<T>(
            path,
            snapshot => {
              noteDelivery(path, 1, snapshot.fromCache);
              onNext(snapshot);
            },
            onError,
          );
        },

        onQuery<T = DocData>(
          path: string,
          query: QuerySpec,
          onNext: (snapshot: QuerySnapshot<T>) => void,
          onError: (error: Error) => void,
        ): Unsubscribe {
          tally(path).listeners += 1;
          return port.onQuery<T>(
            path,
            query,
            snapshot => {
              const served = snapshot.docs.filter(doc => !doc.fromCache).length;
              /*
               * `QuerySnapshot` carries no `fromCache` of its own, so an empty
               * delivery cannot be told from a cached one. It is counted as a
               * server read of one, which is what Firestore bills for an empty
               * result — the alternative hides a listener that fires all day
               * over a collection that is usually empty.
               */
              const allCached = snapshot.docs.length > 0 && served === 0;
              noteDelivery(path, Math.max(served, 1), allCached);
              onNext(snapshot);
            },
            onError,
          );
        },
      };
    },

    async flushIfDue(sink) {
      if (flushing) {
        return flushing;
      }
      flushing = (async () => {
        try {
          const combined = new Map<string, ReadTally>();
          merge(combined, await readStored());
          merge(combined, [...tallies.values()]);
          tallies.clear();

          const at = now();
          const lastRaw = await deps.storage?.get(FLUSHED_AT_KEY);
          const last = Number(lastRaw);
          const due =
            !deps.storage || !Number.isFinite(last) || at - last >= ONCE_A_DAY_MS;

          const rows = [...combined.values()];
          if (!due) {
            // Not yet a day. Keep what has accrued so a restart does not lose it.
            await deps.storage?.set(TALLY_KEY, JSON.stringify(rows));
            return false;
          }

          if (rows.length > 0) {
            await sink(rows);
          }
          /*
           * Stamped and cleared only after the sink resolved. A failed report
           * leaves both untouched, so the counts ride to the next attempt
           * instead of being reported to nobody and then thrown away.
           */
          await deps.storage?.remove(TALLY_KEY);
          await deps.storage?.set(FLUSHED_AT_KEY, String(at));
          return true;
        } catch (error) {
          deps.onError?.(error);
          return false;
        } finally {
          flushing = null;
        }
      })();
      return flushing;
    },

    report(): ReadTally[] {
      return [...tallies.values()].sort(
        (a, b) => b.oneShotReads + b.docsDelivered - (a.oneShotReads + a.docsDelivered),
      );
    },

    reset(): void {
      tallies.clear();
    },
  };
}
