import type { ApiFailure } from '@kidgate/ports/api';
import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { AccountDeletionRequest } from '@kidgate/schema/accountDeletionRequest';
import type { DevicePlatform } from '@kidgate/schema/capabilities';
import { accountDeletionRequestsCollection } from '@kidgate/schema/paths';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * Account deletion, which runs on a grace window rather than immediately.
 *
 * The request is written here, the `scheduleAccountDeletion` trigger stamps
 * `purgeAfter`, and nothing is destroyed until `purgeScheduledDeletions` sweeps
 * it days later. Until that sweep `cancelRequest` fully restores the account —
 * which is why nothing on this path deletes anything itself.
 */

const ACTIVE_STATUSES = ['pending', 'scheduled'];

function toRequest(doc: DocSnapshot): AccountDeletionRequest {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  return {
    id: doc.id,
    email: typeof data.email === 'string' ? data.email : '',
    status: data.status === 'scheduled' ? 'scheduled' : 'pending',
    platform: data.platform === 'android' ? 'android' : 'ios',
    requestedAt: timestampToIso(data.requestedAt) ?? '',
    purgeAfter: timestampToIso(data.purgeAfter) ?? null,
  };
}

export interface AccountDeletionRepositoryDeps {
  db: FirestorePort;
  /**
   * Which platform submitted the request, recorded for support.
   *
   * An argument rather than a `Platform.OS` read: this repository has to run in
   * a browser too, where that module does not exist.
   */
  platform: DevicePlatform;
}

export function createAccountDeletionRepository(deps: AccountDeletionRepositoryDeps) {
  const { db, platform } = deps;
  const activeQuery = { where: [['status', 'in', ACTIVE_STATUSES] as const], limit: 1 };

  return {
    /**
     * The request still counting down — or, for the moment before the trigger
     * schedules it, one that is merely `pending`. Cancelled and completed
     * requests are not active and must not block a new one.
     */
    async getActiveRequest(userId: string): Promise<AccountDeletionRequest | null> {
      const snapshot = await db.getDocs(
        accountDeletionRequestsCollection(userId),
        activeQuery,
      );
      const doc = snapshot.docs[0];
      return doc ? toRequest(doc) : null;
    },

    /**
     * Live feed for the deletion gate.
     *
     * Parent sessions only, by design: rules scope this collection to
     * `isParentAccount`, so a child device — which shares the owner's uid —
     * gets a permission error rather than a gate it has no way to clear.
     * Callers must not subscribe from a child session.
     */
    subscribeActiveRequest(
      userId: string,
      onRequest: (request: AccountDeletionRequest | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        accountDeletionRequestsCollection(userId),
        activeQuery,
        snapshot => {
          const doc = snapshot.docs[0];
          onRequest(doc ? toRequest(doc) : null);
        },
        onError,
      );
    },

    /** Rejects with an `ApiFailure` carrying a key, never a rendered sentence. */
    async submitRequest(userId: string, email: string): Promise<void> {
      const active = await this.getActiveRequest(userId);
      if (active) {
        const failure: ApiFailure = {
          code: 'conflict',
          messageKey: 'settings.deletionRequestAlreadyPending',
        };
        throw failure;
      }

      await db.addDoc(accountDeletionRequestsCollection(userId), {
        email,
        status: 'pending',
        platform:
          platform === 'android' || platform === 'androidtv' ? 'android' : 'ios',
        requestedAt: db.fieldValues.serverTimestamp(),
      });
    },

    /**
     * Call off a scheduled deletion.
     *
     * Rules permit only `scheduled -> cancelled`, so a request the sweep has
     * already consumed cannot be revived here. The `syncAccountDeletionCancel`
     * trigger then clears `users/{uid}.deletion`, which is what actually lifts
     * the gate in the app.
     */
    async cancelRequest(userId: string): Promise<void> {
      const path = accountDeletionRequestsCollection(userId);
      const snapshot = await db.getDocs(path, {
        where: [['status', '==', 'scheduled']],
        limit: 1,
      });

      const doc = snapshot.docs[0];
      if (!doc) {
        const failure: ApiFailure = {
          code: 'notFound',
          messageKey: 'settings.deletionCancelNotFound',
        };
        throw failure;
      }

      await db.updateDoc(`${path}/${doc.id}`, {
        status: 'cancelled',
        cancelledAt: db.fieldValues.serverTimestamp(),
      });
    },
  };
}

export type AccountDeletionRepository = ReturnType<
  typeof createAccountDeletionRepository
>;
