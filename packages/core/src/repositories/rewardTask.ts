import type { ApiFailure, ApiPort } from '@kidgate/ports/api';
import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import { rewardTasksCollection } from '@kidgate/schema/paths';
import type {
  RewardTask,
  RewardTaskStars,
  RewardTaskStatus,
} from '@kidgate/schema/rewardTask';
import { deleteAllInBatches } from '../domain/batchDelete';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * Chores a parent sets and a child claims for bonus screen time.
 *
 * Every mutation goes through a Cloud Function. Not a style choice: bonus
 * minutes are the one thing in the product a child has a direct incentive to
 * grant themselves, and a child device holds the family owner's uid — so a
 * client write could not be distinguished from a parent's.
 *
 * **The family root is named `familyOwnerUserId` on the wire, never
 * `familyId`.** Every handler in `functions/http/rewardTasks.js` reads that key
 * and falls back to `decodedToken.uid` when it is absent — which is the family
 * root for an owner and the *wrong* root for a secondary parent, so a wrong key
 * here fails only for secondary parents and only against real data. This file
 * shipped with `familyId` and with `/resolveRewardTaskClaim`, an endpoint that
 * does not exist; both are corrected against the handlers.
 */

/** Matches the server-side active-task cap plus resolved stragglers. */
const REWARD_TASK_PAGE_SIZE = 50;

function mapRewardTask(doc: DocSnapshot): RewardTask {
  const data = (doc.data() ?? {}) as Record<string, unknown>;

  const optional = (value: unknown) => {
    const iso = timestampToIso(value);
    return iso ? { value: iso } : null;
  };
  const claimedAt = optional(data.claimedAt);
  const resolvedAt = optional(data.resolvedAt);
  const lastRejectedAt = optional(data.lastRejectedAt);

  return {
    id: doc.id,
    deviceId: typeof data.deviceId === 'string' ? data.deviceId : '',
    deviceName: typeof data.deviceName === 'string' ? data.deviceName : '',
    title: typeof data.title === 'string' ? data.title : '',
    bonusMinutes: Number(data.bonusMinutes ?? 0),
    // Left absent rather than defaulted when the stored value is missing or
    // out of range: `resolveTaskStars` derives a band from the minutes, and a
    // hard-coded fallback here would quietly outrank it.
    ...(data.stars === 1 || data.stars === 2 || data.stars === 3
      ? { stars: data.stars }
      : {}),
    repeat: data.repeat === 'daily' ? 'daily' : 'once',
    status: data.status as RewardTaskStatus,
    createdAt: timestampToIso(data.createdAt) ?? '',
    ...(typeof data.availableAfterDate === 'string'
      ? { availableAfterDate: data.availableAfterDate }
      : {}),
    ...(claimedAt ? { claimedAt: claimedAt.value } : {}),
    ...(resolvedAt ? { resolvedAt: resolvedAt.value } : {}),
    ...(lastRejectedAt ? { lastRejectedAt: lastRejectedAt.value } : {}),
  } as RewardTask;
}

function failure(code: ApiFailure['code'], messageKey: string): ApiFailure {
  return { code, messageKey };
}

export interface RewardTaskRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
}

export function createRewardTaskRepository(deps: RewardTaskRepositoryDeps) {
  const { db, api } = deps;

  /**
   * Live query shared by the three subscriptions below.
   *
   * They differ only in their filter, so the mapping, page size and error
   * handling live in one place.
   */
  function watch(
    familyId: string,
    query: Parameters<FirestorePort['onQuery']>[1],
    onTasks: (tasks: RewardTask[]) => void,
    onError: (error: Error) => void,
  ): Unsubscribe {
    return db.onQuery(
      rewardTasksCollection(familyId),
      { ...query, limit: REWARD_TASK_PAGE_SIZE },
      snapshot => onTasks(snapshot.docs.map(mapRewardTask)),
      onError,
    );
  }

  return {
    async createTask(
      familyId: string,
      input: {
        deviceId: string;
        deviceName: string;
        title: string;
        bonusMinutes: number;
        stars: RewardTaskStars;
        repeat: 'once' | 'daily';
      },
    ): Promise<void> {
      try {
        await api.post(
          '/createRewardTask',
          { ...input, familyOwnerUserId: familyId },
          { as: 'parent' },
        );
      } catch {
        throw failure('server', 'rewardTask.unableToCreate');
      }
    },

    async updateTask(
      familyId: string,
      taskId: string,
      changes: {
        title?: string;
        bonusMinutes?: number;
        stars?: RewardTaskStars;
        repeat?: 'once' | 'daily';
      },
    ): Promise<void> {
      try {
        await api.post(
          '/updateRewardTask',
          { taskId, ...changes, familyOwnerUserId: familyId },
          { as: 'parent' },
        );
      } catch {
        throw failure('server', 'rewardTask.unableToUpdate');
      }
    },

    /** Parent decides on a claim. Approval is what actually grants the minutes. */
    async resolveClaim(
      familyId: string,
      taskId: string,
      approved: boolean,
    ): Promise<void> {
      try {
        await api.post(
          '/resolveRewardClaim',
          { taskId, approved, familyOwnerUserId: familyId },
          { as: 'parent' },
        );
      } catch {
        throw failure(
          'server',
          approved ? 'rewardTask.unableToApprove' : 'rewardTask.unableToReject',
        );
      }
    },

    /** Child marks a task done. Proves the child-device credential. */
    async claimTask(familyId: string, task: RewardTask): Promise<void> {
      try {
        await api.post(
          '/claimRewardTask',
          { taskId: task.id, deviceId: task.deviceId },
          { as: 'child' },
        );
      } catch {
        throw failure('server', 'rewardTask.unableToClaim');
      }
    },

    /**
     * Open and claimed tasks for one device, newest first.
     *
     * Approved tasks are excluded deliberately: both the child list and the
     * parent manage screen show what is still actionable, and history already
     * lives in the activities feed.
     */
    subscribeDeviceTasks(
      familyId: string,
      deviceId: string,
      onTasks: (tasks: RewardTask[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return watch(
        familyId,
        {
          where: [
            ['deviceId', '==', deviceId],
            ['status', 'in', ['open', 'claimed']],
          ],
          orderBy: [['createdAt', 'desc']],
        },
        onTasks,
        onError,
      );
    },

    /**
     * Finished tasks for one device, newest decision first.
     *
     * Kept out of `subscribeDeviceTasks` on purpose — an approved task
     * appearing in that feed would read as still actionable.
     */
    subscribeApprovedTasks(
      familyId: string,
      deviceId: string,
      onTasks: (tasks: RewardTask[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return watch(
        familyId,
        {
          where: [
            ['deviceId', '==', deviceId],
            ['status', '==', 'approved'],
          ],
          orderBy: [['resolvedAt', 'desc']],
        },
        onTasks,
        onError,
      );
    },

    /** Claims awaiting a parent decision, across every device. */
    subscribePendingClaims(
      familyId: string,
      onTasks: (tasks: RewardTask[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return watch(
        familyId,
        {
          where: [['status', '==', 'claimed']],
          orderBy: [['claimedAt', 'desc']],
        },
        onTasks,
        onError,
      );
    },

    async deleteTask(familyId: string, taskId: string): Promise<void> {
      await db.deleteDoc(`${rewardTasksCollection(familyId)}/${taskId}`);
    },

    /** Named for the cascade contract in `device.ts`, not for tasks. */
    async deleteForDevice(familyId: string, deviceId: string): Promise<void> {
      const path = rewardTasksCollection(familyId);
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

export type RewardTaskRepository = ReturnType<typeof createRewardTaskRepository>;
