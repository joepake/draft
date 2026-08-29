import type { ClockPort } from '@kidgate/ports/clock';
import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import { locationHistoryCollection } from '@kidgate/schema/paths';
import { deleteAllInBatches } from '../domain/batchDelete';
import { shouldAppendTrailPoint } from '../domain/locationTrail';
import type { DeviceLocation } from '@kidgate/schema/deviceControls';
import type { LocationHistoryEntry } from '@kidgate/schema/locationHistory';

/**
 * The location trail behind a child device.
 *
 * Retention is enforced here on write rather than by a scheduled job, so a
 * family that stops using the app stops paying for it.
 */

export const LOCATION_HISTORY_DISPLAY_LIMIT = 200;
export const LOCATION_HISTORY_RETENTION_DAYS = 30;
export const MAX_LOCATION_HISTORY_ENTRIES = 2000;

const DAY_MS = 24 * 60 * 60 * 1000;

/** Keeps one trim inside Firestore's 500-operation batch limit. */
const TRIM_BATCH_CAP = 400;

function mapEntry(doc: DocSnapshot): LocationHistoryEntry | null {
  const data = (doc.data() ?? {}) as Record<string, unknown>;

  if (typeof data.latitude !== 'number' || typeof data.longitude !== 'number') {
    return null;
  }

  const text = (value: unknown): string | null =>
    typeof value === 'string' && value.trim() ? value.trim() : null;

  return {
    id: doc.id,
    latitude: data.latitude,
    longitude: data.longitude,
    updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : '',
    placeName: text(data.placeName),
    address: text(data.address),
    addressDetail:
      data.addressDetail === 'basic' || data.addressDetail === 'detailed'
        ? data.addressDetail
        : null,
  };
}

export interface LocationHistoryRepositoryDeps {
  db: FirestorePort;
  clock: ClockPort;
}

export function createLocationHistoryRepository(deps: LocationHistoryRepositoryDeps) {
  const { db, clock } = deps;

  /**
   * Drop points past the retention window, then anything past the hard ceiling.
   *
   * Runs after every location write — on a child device that is every
   * background upload — so what this costs per call is what it costs all day.
   * The age sweep is billed only for the documents it actually deletes
   * (`updatedAt` is an ISO string, so `<` on it is chronological), and the
   * count behind the ceiling is one aggregation read regardless of collection
   * size. Steady state, once the trail is inside the window, is one
   * aggregation read and no deletes.
   */
  async function trimOldEntries(userId: string, deviceId: string): Promise<void> {
    const path = locationHistoryCollection(userId, deviceId);
    const cutoff = new Date(
      clock.now() - LOCATION_HISTORY_RETENTION_DAYS * DAY_MS,
    ).toISOString();

    const expired = await db.getDocs(path, {
      where: [['updatedAt', '<', cutoff]],
      orderBy: [['updatedAt', 'asc']],
      limit: TRIM_BATCH_CAP,
    });

    if (!expired.empty) {
      await deleteAllInBatches(
        db,
        path,
        expired.docs.map(doc => doc.id),
      );
    }

    // A full age sweep means there is very likely more expired history behind
    // it; leave the ceiling to the next upload rather than paying for both.
    if (expired.docs.length >= TRIM_BATCH_CAP) {
      return;
    }

    const overflow = (await db.countDocs(path)) - MAX_LOCATION_HISTORY_ENTRIES;
    if (overflow <= 0) {
      return;
    }

    // Oldest first, so the limit lands exactly on the entries past the cap.
    const excess = await db.getDocs(path, {
      orderBy: [['updatedAt', 'asc']],
      limit: Math.min(overflow, TRIM_BATCH_CAP),
    });
    if (excess.empty) {
      return;
    }

    await deleteAllInBatches(
      db,
      path,
      excess.docs.map(doc => doc.id),
    );
  }

  return {
    /**
     * Add a fix to the trail — unless it says nothing the newest point does
     * not already say. `domain/locationTrail` holds the rule and the measured
     * reason: an unconditional append wrote one identical row per background
     * tick for a device sitting still, so a charging tablet filled the
     * retention window with a stack of the same coordinates and pushed real
     * movement out of it.
     *
     * The read that makes this possible is one document; the writes it saves
     * are one per tick, all day, per device.
     */
    async append(
      userId: string,
      deviceId: string,
      location: DeviceLocation,
    ): Promise<void> {
      const path = locationHistoryCollection(userId, deviceId);

      // A failed lookback must not lose the fix — treating "unknown" as "no
      // previous point" appends, which is the safe direction.
      const latest = await db
        .getDocs(path, { orderBy: [['updatedAt', 'desc']], limit: 1 })
        .then(snapshot => (snapshot.docs[0] ? mapEntry(snapshot.docs[0]) : null))
        .catch(() => null);

      if (!shouldAppendTrailPoint(latest, location, clock.now())) {
        return;
      }

      await db.addDoc(path, { ...location });

      // A failed trim must not fail the write: losing a location point is worse
      // than briefly exceeding retention, and the next upload trims again.
      await trimOldEntries(userId, deviceId).catch(() => undefined);
    },

    subscribe(
      userId: string,
      deviceId: string,
      onHistory: (entries: LocationHistoryEntry[]) => void,
      onError: (error: Error) => void,
      limit = LOCATION_HISTORY_DISPLAY_LIMIT,
    ): Unsubscribe {
      return db.onQuery(
        locationHistoryCollection(userId, deviceId),
        { orderBy: [['updatedAt', 'desc']], limit },
        snapshot => {
          onHistory(
            snapshot.docs
              .map(mapEntry)
              .filter((entry): entry is LocationHistoryEntry => entry !== null),
          );
        },
        onError,
      );
    },

    /**
     * Every fix this device ever reported, on removal.
     *
     * The retention sweep above trims by age and by count while a device is in
     * the family; this is the other end of its life. These rows live under the
     * device document, and Firestore deletes no subcollection when its parent
     * goes — so an unpaired phone left its whole location history readable to
     * anyone who could reconstruct the path.
     */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = locationHistoryCollection(userId, deviceId);
      const snapshot = await db.getDocs(path);
      await deleteAllInBatches(
        db,
        path,
        snapshot.docs.map(doc => doc.id),
      );
    },
  };
}

export type LocationHistoryRepository = ReturnType<
  typeof createLocationHistoryRepository
>;
