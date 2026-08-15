import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { DeviceLocation } from '@kidgate/schema/deviceControls';
import { safetyCheckInsCollection } from '@kidgate/schema/paths';
import type { SafetyCheckIn } from '@kidgate/schema/safetyCheckIn';
import { deleteAllInBatches } from '../domain/batchDelete';
import { timestampToIso } from '../domain/firestoreValue';
import type { ActivityRepository } from './activity';

/**
 * "Are you safe?" — a parent asks, a child answers.
 *
 * Each of these listeners once streamed the whole collection and filtered in
 * JavaScript. Check-ins accumulate for the life of an account and nothing
 * pruned them, so the parent app paid to re-read the family's entire check-in
 * history on every launch, four times over. Filtering and ordering are
 * server-side now, with a cap.
 */

const CHECK_IN_PAGE_SIZE = 50;

function parseLocation(value: unknown): DeviceLocation | undefined {
  if (!value || typeof value !== 'object') {
    return undefined;
  }
  const raw = value as Record<string, unknown>;
  if (typeof raw.latitude !== 'number' || typeof raw.longitude !== 'number') {
    return undefined;
  }
  return {
    latitude: raw.latitude,
    longitude: raw.longitude,
    updatedAt: timestampToIso(raw.updatedAt) ?? '',
    placeName: typeof raw.placeName === 'string' ? raw.placeName : null,
    address: typeof raw.address === 'string' ? raw.address : null,
  };
}

function mapSafetyCheckIn(doc: DocSnapshot): SafetyCheckIn {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const location = parseLocation(data.location);
  const respondedAt = timestampToIso(data.respondedAt);
  const text = (value: unknown) =>
    typeof value === 'string' && value.trim() ? value.trim() : undefined;

  return {
    id: doc.id,
    kind: data.kind === 'repair' ? 'repair' : 'safety',
    deviceId: typeof data.deviceId === 'string' ? data.deviceId : '',
    // Empty rather than a rendered fallback — the UI knows the reader's language.
    deviceName: typeof data.deviceName === 'string' ? data.deviceName : '',
    status:
      data.status === 'safe' ? 'safe' : data.status === 'missed' ? 'missed' : 'pending',
    createdAt: timestampToIso(data.createdAt) ?? '',
    requirePhoto: data.requirePhoto === true,
    requireLocation: data.requireLocation !== false,
    ...(text(data.message) ? { message: text(data.message) } : {}),
    ...(location ? { location } : {}),
    ...(text(data.photoUrl) ? { photoUrl: text(data.photoUrl) } : {}),
    ...(data.photoSkipped === true ? { photoSkipped: true } : {}),
    ...(respondedAt ? { respondedAt } : {}),
  } as SafetyCheckIn;
}

export interface SafetyCheckInRepositoryDeps {
  db: FirestorePort;
  /**
   * Injected rather than imported.
   *
   * A check-in writes an activity row, and one repository reaching directly
   * into another hides that edge from whoever wires the app together. Passing
   * it in makes the dependency visible and lets a test supply a recorder.
   */
  activities: Pick<ActivityRepository, 'createActivity'>;
}

export function createSafetyCheckInRepository(deps: SafetyCheckInRepositoryDeps) {
  const { db, activities } = deps;

  /** Fire-and-forget: a check-in must not fail because its log entry did. */
  function log(
    userId: string,
    input: Parameters<ActivityRepository['createActivity']>[1],
  ) {
    void activities.createActivity(userId, input).catch(() => undefined);
  }

  function watch(
    userId: string,
    query: Parameters<FirestorePort['onQuery']>[1],
    onRows: (rows: SafetyCheckIn[]) => void,
    onError: (error: Error) => void,
  ): Unsubscribe {
    return db.onQuery(
      safetyCheckInsCollection(userId),
      { ...query, limit: CHECK_IN_PAGE_SIZE },
      snapshot => onRows(snapshot.docs.map(mapSafetyCheckIn)),
      onError,
    );
  }

  return {
    /**
     * Ask a device to check in.
     *
     * Any earlier pending request for that device is marked `missed` first —
     * two live prompts on one phone would leave the child unsure which one the
     * parent is waiting on. `repair` check-ins are exempt: they answer a
     * different question and can coexist.
     */
    async createRequest(
      userId: string,
      data: {
        deviceId: string;
        deviceName: string;
        requirePhoto?: boolean;
        requireLocation?: boolean;
      },
    ): Promise<void> {
      const path = safetyCheckInsCollection(userId);

      // Filtered server-side. The legacy version read the entire collection to
      // find these, which is the same cost the listeners below were fixed for.
      const existing = await db.getDocs(path, {
        where: [
          ['deviceId', '==', data.deviceId],
          ['status', '==', 'pending'],
        ],
      });

      const stale = existing.docs.filter(
        doc => (doc.data() as Record<string, unknown> | undefined)?.kind !== 'repair',
      );

      if (stale.length > 0) {
        const batch = db.batch();
        for (const doc of stale) {
          batch.update(`${path}/${doc.id}`, {
            status: 'missed',
            respondedAt: db.fieldValues.serverTimestamp(),
          });
        }
        await batch.commit();
      }

      await db.addDoc(path, {
        deviceId: data.deviceId,
        deviceName: data.deviceName,
        kind: 'safety',
        status: 'pending',
        requirePhoto: data.requirePhoto === true,
        requireLocation: data.requireLocation !== false,
        createdAt: db.fieldValues.serverTimestamp(),
      });

      log(userId, {
        deviceId: data.deviceId,
        type: 'screen_time',
        titleKey: 'checkIn.checkInRequested',
        descriptionKey: data.requirePhoto
          ? 'checkIn.checkInRequestedDescription'
          : 'checkIn.checkInRequestedDescriptionLocation',
        params: { deviceName: data.deviceName },
      });
    },

    /**
     * The one pending request for a device, or null.
     *
     * The error path deliberately does **not** call back with null: null means
     * "there is no pending check-in", and reporting that on a failed query is
     * what made the screen show rows and then "no check-ins yet" a second
     * later — the cache answered, the server rejected, and the old handler
     * overwrote real data with an empty list.
     */
    subscribePendingForDevice(
      userId: string,
      deviceId: string,
      onRequest: (request: SafetyCheckIn | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return watch(
        userId,
        {
          where: [
            ['deviceId', '==', deviceId],
            ['status', '==', 'pending'],
          ],
          orderBy: [['createdAt', 'desc']],
        },
        rows => onRequest(rows.find(row => row.kind !== 'repair') ?? null),
        onError,
      );
    },

    subscribeAllPending(
      userId: string,
      onRequests: (requests: SafetyCheckIn[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return watch(
        userId,
        {
          where: [['status', '==', 'pending']],
          orderBy: [['createdAt', 'desc']],
        },
        onRequests,
        onError,
      );
    },

    subscribeConfirmed(
      userId: string,
      onRequests: (requests: SafetyCheckIn[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return watch(
        userId,
        {
          where: [['status', '==', 'safe']],
          orderBy: [['respondedAt', 'desc']],
        },
        onRequests,
        onError,
      );
    },

    subscribeRecentForDevice(
      userId: string,
      deviceId: string,
      onRequests: (requests: SafetyCheckIn[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return watch(
        userId,
        {
          where: [['deviceId', '==', deviceId]],
          orderBy: [['createdAt', 'desc']],
        },
        onRequests,
        onError,
      );
    },

    /** Clear pending check-ins once a child escalates to SOS, or a parent claims one. */
    async dismissPendingForDevice(userId: string, deviceId: string): Promise<void> {
      const path = safetyCheckInsCollection(userId);
      const snapshot = await db.getDocs(path, {
        where: [
          ['deviceId', '==', deviceId],
          ['status', '==', 'pending'],
        ],
      });

      const pending = snapshot.docs.filter(
        doc => (doc.data() as Record<string, unknown> | undefined)?.kind !== 'repair',
      );
      if (pending.length === 0) {
        return;
      }

      const batch = db.batch();
      for (const doc of pending) {
        batch.update(`${path}/${doc.id}`, {
          status: 'missed',
          respondedAt: db.fieldValues.serverTimestamp(),
        });
      }
      await batch.commit();
    },

    async respondSafe(
      userId: string,
      request: SafetyCheckIn,
      data: {
        message?: string;
        location?: Omit<DeviceLocation, 'updatedAt'>;
        photoUrl?: string;
        /** ISO time of the fix, from the caller's trusted clock. */
        locationAt?: string;
      },
    ): Promise<void> {
      const location = data.location
        ? { ...data.location, updatedAt: data.locationAt ?? '' }
        : undefined;

      await db.updateDoc(`${safetyCheckInsCollection(userId)}/${request.id}`, {
        status: 'safe',
        respondedAt: db.fieldValues.serverTimestamp(),
        ...(data.message?.trim() ? { message: data.message.trim() } : {}),
        ...(location ? { location } : {}),
        ...(data.photoUrl ? { photoUrl: data.photoUrl } : {}),
      });

      log(userId, {
        deviceId: request.deviceId,
        type: 'screen_time',
        titleKey: 'checkIn.checkInConfirmed',
        descriptionKey: 'checkIn.checkInConfirmedDescription',
        params: { deviceName: request.deviceName },
      });
    },

    async updatePhotoUrl(
      userId: string,
      requestId: string,
      photoUrl: string,
    ): Promise<void> {
      await db.updateDoc(`${safetyCheckInsCollection(userId)}/${requestId}`, {
        photoUrl,
        photoSkipped: false,
      });
    },

    /**
     * Record that a required photo could not be captured.
     *
     * The check-in still completes — a camera problem must never block the
     * safety signal — but the parent sees the photo was skipped instead of
     * silently getting less than they asked for.
     */
    async markPhotoSkipped(userId: string, requestId: string): Promise<void> {
      await db.updateDoc(`${safetyCheckInsCollection(userId)}/${requestId}`, {
        photoSkipped: true,
      });
    },

    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = safetyCheckInsCollection(userId);
      const snapshot = await db.getDocs(path, {
        where: [['deviceId', '==', deviceId]],
      });
      await deleteAllInBatches(
        db,
        path,
        snapshot.docs.map(doc => doc.id),
      );
    },
  };
}

export type SafetyCheckInRepository = ReturnType<typeof createSafetyCheckInRepository>;
