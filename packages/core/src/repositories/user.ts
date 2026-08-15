import type { ApiFailure, ApiPort } from '@kidgate/ports/api';
import type { FirestorePort } from '@kidgate/ports/firestore';
import type { DevicePlatform } from '@kidgate/schema/capabilities';
import type { FirestoreUser } from '@kidgate/schema/firestore';
import { supportReportsCollection, userDoc } from '@kidgate/schema/paths';
import { timestampToIso } from '../domain/firestoreValue';

/** Long enough for a real problem report; short enough not to be a payload. */
const MAX_SUPPORT_MESSAGE_LENGTH = 2000;

export interface SupportReportPayload {
  message: string;
  accountId: string;
  email: string | null;
  deviceName: string | null;
  familyName: string | null;
  familyId: string | null;
}

export interface EnsureTrialStartedResult {
  trialStartedAt: string | null;
  /**
   * True only when this call created the trial.
   *
   * Returned rather than acted on: the legacy version fired
   * `AnalyticsService.trackTrialStart()` from inside the repository, which put
   * a product-analytics side effect in the data layer and made the function
   * untestable without stubbing analytics. The caller owns the event.
   */
  started: boolean;
}

export interface UserRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
  /** Recorded on support reports so a bug can be tied to a build. */
  appVersion: string;
  platform: DevicePlatform;
}

export function createUserRepository(deps: UserRepositoryDeps) {
  const { db, api, appVersion, platform } = deps;

  return {
    async createProfile(
      userId: string,
      data: Pick<FirestoreUser, 'email' | 'name'>,
    ): Promise<void> {
      const now = db.fieldValues.serverTimestamp();
      await db.setDoc(userDoc(userId), {
        email: data.email,
        name: data.name,
        createdAt: now,
        updatedAt: now,
      });
    },

    async getProfile(userId: string): Promise<FirestoreUser | null> {
      const snapshot = await db.getDoc(userDoc(userId));
      if (!snapshot.exists) {
        return null;
      }

      const data = (snapshot.data() ?? {}) as Record<string, unknown>;
      return {
        id: userId,
        email: typeof data.email === 'string' ? data.email : '',
        name: typeof data.name === 'string' ? data.name : '',
        createdAt: timestampToIso(data.createdAt) ?? '',
        updatedAt: timestampToIso(data.updatedAt) ?? '',
      } as FirestoreUser;
    },

    async updateProfile(
      userId: string,
      data: Partial<Pick<FirestoreUser, 'name'>>,
    ): Promise<void> {
      await db.updateDoc(userDoc(userId), {
        ...data,
        updatedAt: db.fieldValues.serverTimestamp(),
      });
    },

    /**
     * Start the trial the first time an account has both a parent and a child
     * device. Never restarts if the child device is removed later.
     *
     * The write happens in the `ensureTrialStarted` Cloud Function, and
     * `trialStartedAt` is immutable from clients (see `firestore.rules`) —
     * when it was client-written, clearing the field with a plain Firestore
     * call earned another full trial, repeatedly.
     *
     * Reads the document first so the common case, a trial already running,
     * costs one document read instead of a function round-trip.
     */
    async ensureTrialStarted(userId: string): Promise<EnsureTrialStartedResult> {
      try {
        const snapshot = await db.getDoc(userDoc(userId));
        const existing = (snapshot.data() as Record<string, unknown> | undefined)
          ?.trialStartedAt;
        if (existing) {
          return { trialStartedAt: timestampToIso(existing) ?? null, started: false };
        }
      } catch {
        // Offline, or a permission hiccup mid-session. Let the function be the
        // source of truth rather than reporting "no trial" from a failed read.
      }

      const response = await api.post<{ started?: boolean; trialStartedAt?: string }>(
        '/ensureTrialStarted',
        {},
        { as: 'parent' },
      );

      return {
        trialStartedAt: response.trialStartedAt ?? null,
        started: response.started === true,
      };
    },

    /** Rejects with an `ApiFailure` carrying a key — never a rendered sentence. */
    async submitSupportReport(
      userId: string,
      payload: SupportReportPayload,
    ): Promise<void> {
      const message = payload.message.trim();
      if (!message) {
        const failure: ApiFailure = {
          code: 'conflict',
          messageKey: 'settings.reportMessageRequired',
        };
        throw failure;
      }
      if (message.length > MAX_SUPPORT_MESSAGE_LENGTH) {
        const failure: ApiFailure = {
          code: 'conflict',
          messageKey: 'settings.reportMessageTooLong',
        };
        throw failure;
      }

      await db.addDoc(supportReportsCollection(userId), {
        message,
        accountId: payload.accountId,
        email: payload.email,
        deviceName: payload.deviceName,
        familyName: payload.familyName,
        familyId: payload.familyId,
        platform:
          platform === 'android' || platform === 'androidtv' ? 'android' : 'ios',
        appVersion,
        createdAt: db.fieldValues.serverTimestamp(),
      });
    },
  };
}

export type UserRepository = ReturnType<typeof createUserRepository>;
