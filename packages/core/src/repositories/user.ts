import type { ApiFailure, ApiPort } from '@kidgate/ports/api';
import type { FirestorePort } from '@kidgate/ports/firestore';
import type { DevicePlatform } from '@kidgate/schema/capabilities';
import type { FirestoreUser } from '@kidgate/schema/firestore';
import { supportReportsCollection, userDoc } from '@kidgate/schema/paths';
import type { SupportReportAttachment } from '@kidgate/schema/supportReport';
import {
  SUPPORT_REPORT_MAX_ATTACHMENTS,
  SUPPORT_REPORT_MAX_ATTACHMENT_BYTES,
  SUPPORT_REPORT_MAX_MESSAGE_LENGTH,
} from '@kidgate/schema/supportReport';
import { timestampToIso } from '../domain/firestoreValue';

export interface SupportReportPayload {
  message: string;
  accountId: string;
  email: string | null;
  deviceName: string | null;
  familyName: string | null;
  familyId: string | null;
  /** Optional screenshots, already resized and uploaded by the caller. */
  attachments?: SupportReportAttachment[];
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
        // Read, not dropped. The four fields below existed on the legacy
        // mapping and went missing when it moved here — the cast on the return
        // made every one of them look optional-and-absent rather than lost.
        //
        // `parentPinSet` is the one that shows: it is the only signal the app
        // has that a PIN exists, since the hash itself is server-only. Read as
        // absent, the Settings row says "not set", the setup modal offers
        // "Create Parent PIN", and setParentPin is then refused with
        // pin/current-required — the modal asks for a current PIN the parent
        // was just told they did not have.
        parentPinHash:
          typeof data.parentPinHash === 'string' ? data.parentPinHash : null,
        parentPinSet: data.parentPinSet === true,
        planId:
          data.planId === 'premium' || data.planId === 'trial'
            ? data.planId
            : undefined,
        trialStartedAt:
          typeof data.trialStartedAt === 'string'
            ? data.trialStartedAt
            : (timestampToIso(data.trialStartedAt) ?? undefined),
        subscription:
          data.subscription && typeof data.subscription === 'object'
            ? (data.subscription as FirestoreUser['subscription'])
            : undefined,
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

    /**
     * The id a report will be filed under, handed out before the report is
     * written so attachments can be uploaded to a path named after it.
     *
     * Same shape as `sosAlert.createAlert`: the photo lands at a path derived
     * from the id, and a Firestore id generated client-side costs nothing and
     * removes the round-trip that would otherwise have to happen first.
     */
    newSupportReportId(userId: string): string {
      return db.newId(supportReportsCollection(userId));
    },

    /** Rejects with an `ApiFailure` carrying a key — never a rendered sentence. */
    async submitSupportReport(
      userId: string,
      payload: SupportReportPayload,
      reportId?: string,
    ): Promise<void> {
      const message = payload.message.trim();
      if (!message) {
        const failure: ApiFailure = {
          code: 'conflict',
          messageKey: 'settings.reportMessageRequired',
        };
        throw failure;
      }
      if (message.length > SUPPORT_REPORT_MAX_MESSAGE_LENGTH) {
        const failure: ApiFailure = {
          code: 'conflict',
          messageKey: 'settings.reportMessageTooLong',
        };
        throw failure;
      }

      const attachments = payload.attachments ?? [];
      if (attachments.length > SUPPORT_REPORT_MAX_ATTACHMENTS) {
        const failure: ApiFailure = {
          code: 'conflict',
          messageKey: 'settings.reportAttachmentsTooMany',
        };
        throw failure;
      }
      // The client already refused anything over the ceiling and so does
      // `storage.rules`. Checked a third time because this is the only one of
      // the three that decides what the *document* claims, and a record saying
      // 4 MB about an object that could not have been 4 MB is worse than the
      // upload failing.
      if (
        attachments.some(
          attachment => attachment.bytes > SUPPORT_REPORT_MAX_ATTACHMENT_BYTES,
        )
      ) {
        const failure: ApiFailure = {
          code: 'conflict',
          messageKey: 'settings.reportAttachmentTooLarge',
        };
        throw failure;
      }

      const collectionPath = supportReportsCollection(userId);
      const id = reportId ?? db.newId(collectionPath);

      await db.setDoc(`${collectionPath}/${id}`, {
        message,
        accountId: payload.accountId,
        email: payload.email,
        deviceName: payload.deviceName,
        familyName: payload.familyName,
        familyId: payload.familyId,
        platform:
          platform === 'android' || platform === 'androidtv' ? 'android' : 'ios',
        appVersion,
        // Omitted rather than written empty, so a report with no screenshot
        // reads the same as every report filed before attachments existed.
        ...(attachments.length > 0 ? { attachments } : {}),
        createdAt: db.fieldValues.serverTimestamp(),
      });
    },
  };
}

export type UserRepository = ReturnType<typeof createUserRepository>;
