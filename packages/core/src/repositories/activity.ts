import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import { activitiesCollection } from '@kidgate/schema/paths';
import type { Activity, ActivityParams, ActivityType } from '@kidgate/schema/activity';
import { deleteAllInBatches } from '../domain/batchDelete';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * The parent-visible event feed.
 *
 * **This repository does not render text.** The legacy version called
 * `t(titleKey, params)` while mapping each row, which froze the feed into
 * whatever language was active at read time and meant a language switch left
 * the list stale until it refetched. Rows now carry `titleKey`,
 * `descriptionKey` and `params`; the screen renders them. `title` survives only
 * as a fallback for documents written before keys existed.
 */

/**
 * Each document returned when a listener attaches is a billed read, on every
 * screen open. 50 keeps the type-filtered views (tamper, place, app alerts)
 * usefully deep at half the cost of the old 100.
 */
const ACTIVITY_LIMIT = 50;

const ACTIVITY_TYPES = new Set<ActivityType>([
  'app_opened',
  'app_blocked',
  'app_installed',
  'app_removed',
  'place_enter',
  'place_exit',
  'tamper',
  'device_locked',
  'device_unlocked',
  'screen_time',
  'emergency',
]);

function parseActivityType(value: unknown): ActivityType {
  return ACTIVITY_TYPES.has(value as ActivityType)
    ? (value as ActivityType)
    : 'screen_time';
}

function parseParams(value: unknown): ActivityParams | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return undefined;
  }

  const params: ActivityParams = {};
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === 'string' || typeof entry === 'number') {
      params[key] = entry;
    }
  }

  return Object.keys(params).length > 0 ? params : undefined;
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function mapActivity(doc: DocSnapshot): Activity {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const params = parseParams(data.params);

  return {
    id: doc.id,
    deviceId: typeof data.deviceId === 'string' ? data.deviceId : '',
    type: parseActivityType(data.type),
    createdAt: timestampToIso(data.createdAt) ?? '',
    ...(text(data.titleKey) ? { titleKey: text(data.titleKey) } : {}),
    ...(text(data.descriptionKey) ? { descriptionKey: text(data.descriptionKey) } : {}),
    ...(params ? { params } : {}),
    ...(text(data.title) ? { title: text(data.title) } : {}),
    ...(text(data.description) ? { description: text(data.description) } : {}),
    ...(text(data.actorUserId) ? { actorUserId: text(data.actorUserId) } : {}),
    ...(text(data.actorParentDeviceId)
      ? { actorParentDeviceId: text(data.actorParentDeviceId) }
      : {}),
  } as Activity;
}

/**
 * Firestore orders descending by `createdAt` but breaks ties by document id,
 * which is random — two events in the same second (an SOS and its safety
 * confirmation) could swap places between renders. Re-sort with a
 * deterministic tie-breaker so the story reads the same way every time.
 */
function sortActivities(activities: Activity[], limit = ACTIVITY_LIMIT): Activity[] {
  if (activities.length <= 1) {
    return activities.slice(0, limit);
  }

  return [...activities]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.id.localeCompare(a.id))
    .slice(0, limit);
}

export interface CreateActivityInput {
  deviceId: string;
  type: ActivityType;
  /** Required on write. Only legacy rows lack one. */
  titleKey: string;
  descriptionKey?: string;
  params?: ActivityParams;
  actorUserId?: string;
  actorParentDeviceId?: string;
}

export interface ActivityRepositoryDeps {
  db: FirestorePort;
}

export function createActivityRepository(deps: ActivityRepositoryDeps) {
  const { db } = deps;

  return {
    async fetchActivities(userId: string, deviceId?: string): Promise<Activity[]> {
      const snapshot = await db.getDocs(activitiesCollection(userId), {
        ...(deviceId ? { where: [['deviceId', '==', deviceId] as const] } : {}),
        orderBy: [['createdAt', 'desc']],
        limit: ACTIVITY_LIMIT,
      });

      const activities = snapshot.docs.map(mapActivity);
      return sortActivities(
        deviceId ? activities.filter(a => a.deviceId === deviceId) : activities,
      );
    },

    subscribe(
      userId: string,
      onActivities: (activities: Activity[]) => void,
      onError: (error: Error) => void,
      deviceId?: string,
    ): Unsubscribe {
      return db.onQuery(
        activitiesCollection(userId),
        {
          ...(deviceId ? { where: [['deviceId', '==', deviceId] as const] } : {}),
          orderBy: [['createdAt', 'desc']],
          limit: ACTIVITY_LIMIT,
        },
        snapshot => {
          const activities = snapshot.docs.map(mapActivity);
          onActivities(
            sortActivities(
              deviceId ? activities.filter(a => a.deviceId === deviceId) : activities,
            ),
          );
        },
        onError,
      );
    },

    /**
     * Remove every row for a device.
     *
     * Part of the device-removal cascade: an activity feed that outlives its
     * device shows a parent events attributed to a phone that no longer exists.
     */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = activitiesCollection(userId);
      const snapshot = await db.getDocs(path, {
        where: [['deviceId', '==', deviceId]],
      });
      await deleteAllInBatches(
        db,
        path,
        snapshot.docs.map(doc => doc.id),
      );
    },

    /**
     * Write one row.
     *
     * Callers treat this as fire-and-forget: an activity entry is a record of
     * something that already happened, so failing to log it must not fail the
     * action itself.
     */
    async createActivity(userId: string, input: CreateActivityInput): Promise<void> {
      await db.addDoc(activitiesCollection(userId), {
        deviceId: input.deviceId,
        type: input.type,
        titleKey: input.titleKey,
        createdAt: db.fieldValues.serverTimestamp(),
        ...(input.descriptionKey ? { descriptionKey: input.descriptionKey } : {}),
        ...(input.params ? { params: input.params } : {}),
        ...(input.actorUserId ? { actorUserId: input.actorUserId } : {}),
        ...(input.actorParentDeviceId
          ? { actorParentDeviceId: input.actorParentDeviceId }
          : {}),
      });
    },
  };
}

export type ActivityRepository = ReturnType<typeof createActivityRepository>;
