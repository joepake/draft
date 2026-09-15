import type { ApiFailure, ApiPort } from '@kidgate/ports/api';
import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { DevicePlatform } from '@kidgate/schema/capabilities';
import type { FirestoreUser } from '@kidgate/schema/firestore';
import type { AppLanguage } from '@kidgate/schema/language';
import { SUPPORTED_LANGUAGES } from '@kidgate/schema/language';
import { supportReportsCollection, userDoc } from '@kidgate/schema/paths';
import type {
  SupportReport,
  SupportReportAttachment,
  SupportReportStatus,
} from '@kidgate/schema/supportReport';
import {
  SUPPORT_REPORT_MAX_ATTACHMENTS,
  SUPPORT_REPORT_MAX_ATTACHMENT_BYTES,
  SUPPORT_REPORT_MAX_MESSAGE_LENGTH,
} from '@kidgate/schema/supportReport';
import { timestampToIso } from '../domain/firestoreValue';

/** Enough for a parent's own history; nobody files hundreds of these. */
const SUPPORT_REPORT_PAGE_SIZE = 50;

function parseSupportReportStatus(value: unknown): SupportReportStatus {
  return value === 'in_review' || value === 'resolved' ? value : 'pending';
}

/**
 * A stored language code, or undefined.
 *
 * Checked against `SUPPORTED_LANGUAGES` rather than trusted: the field is
 * written by a client, and a report claiming `'zz'` would otherwise reach
 * `functions/lib/i18n.js` — which falls back to English anyway, but the
 * operator screen would print the code as if it meant something.
 */
function parseSupportReportLanguage(value: unknown): AppLanguage | undefined {
  return SUPPORTED_LANGUAGES.includes(value as AppLanguage)
    ? (value as AppLanguage)
    : undefined;
}

function mapSupportReport(doc: DocSnapshot): SupportReport {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const attachments = Array.isArray(data.attachments)
    ? (data.attachments as SupportReportAttachment[])
    : undefined;
  const response =
    typeof data.response === 'string' && data.response.trim()
      ? data.response.trim()
      : undefined;
  const respondedAt = timestampToIso(data.respondedAt) ?? undefined;
  const language = parseSupportReportLanguage(data.language);

  return {
    id: doc.id,
    message: typeof data.message === 'string' ? data.message : '',
    accountId: typeof data.accountId === 'string' ? data.accountId : '',
    email: typeof data.email === 'string' ? data.email : null,
    deviceName: typeof data.deviceName === 'string' ? data.deviceName : null,
    familyName: typeof data.familyName === 'string' ? data.familyName : null,
    familyId: typeof data.familyId === 'string' ? data.familyId : null,
    /* Three values, and `'ios'` is the fallback rather than a reading: every
       report filed before `apps/dashboard` had this form came from a phone,
       and a stored value this build does not know is likelier a newer client
       than a browser. */
    platform:
      data.platform === 'android' || data.platform === 'web' ? data.platform : 'ios',
    appVersion: typeof data.appVersion === 'string' ? data.appVersion : '',
    createdAt: timestampToIso(data.createdAt) ?? '',
    status: parseSupportReportStatus(data.status),
    ...(typeof data.appVersionCode === 'number'
      ? { appVersionCode: data.appVersionCode }
      : {}),
    ...(language ? { language } : {}),
    ...(attachments ? { attachments } : {}),
    ...(response ? { response } : {}),
    ...(respondedAt ? { respondedAt } : {}),
  };
}

export interface SupportReportPayload {
  message: string;
  accountId: string;
  email: string | null;
  deviceName: string | null;
  familyName: string | null;
  familyId: string | null;
  /**
   * The language the app is rendering right now — resolved, never `'system'`.
   *
   * Passed in rather than read here because holding the current language is a
   * platform concern (`apps/mobile/src/i18n` is MMKV + `react-native-localize`)
   * and this package imports no platform.
   */
  language?: AppLanguage;
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
  /**
   * The build number behind `appVersion`. Both are recorded because an OTA
   * ships new JS under an unchanged marketing version — see
   * `SupportReport.appVersionCode`.
   */
  appVersionCode: number;
  /**
   * `'web'` is not a `DevicePlatform` and is accepted here anyway: that enum
   * describes a child device's operating system, and `apps/dashboard` is a
   * parent's browser. It reaches only `SupportReport.platform`.
   */
  platform: DevicePlatform | 'web';
}

export function createUserRepository(deps: UserRepositoryDeps) {
  const { db, api, appVersion, appVersionCode, platform } = deps;

  return {
    async createProfile(
      userId: string,
      data: Pick<FirestoreUser, 'email' | 'name'>,
    ): Promise<void> {
      const now = db.fieldValues.serverTimestamp();
      await db.setDoc(userDoc(userId), {
        email: data.email,
        name: data.name,
        // Written explicitly rather than left absent. Nothing reads it as an
        // entitlement — `hasPremiumAccess` asks for `'premium'` and a missing
        // field already answered no — but a family with no `planId` at all is
        // invisible to `where('planId', '==', 'free')`, so the free tier could
        // never be counted without reading every document.
        // `docs/ADMIN_REPORTING.md`.
        planId: 'free',
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
        /* The surface that FILED it, folded to the three the operator sorts
           by: a TV reports as Android because that is the build an operator
           would go looking at, and a browser reports as itself because there
           is no phone build behind a dashboard bug. */
        platform:
          platform === 'web'
            ? 'web'
            : platform === 'android' || platform === 'androidtv'
              ? 'android'
              : 'ios',
        appVersion,
        appVersionCode,
        // Omitted rather than written `null`: a report filed from a surface
        // with no language is indistinguishable from one filed before the
        // field existed, and both mean "we do not know", not "no language".
        ...(payload.language ? { language: payload.language } : {}),
        // Omitted rather than written empty, so a report with no screenshot
        // reads the same as every report filed before attachments existed.
        ...(attachments.length > 0 ? { attachments } : {}),
        createdAt: db.fieldValues.serverTimestamp(),
      });
    },

    /** A parent's own filed reports, newest first — the history behind the modal. */
    subscribeSupportReports(
      userId: string,
      onReports: (reports: SupportReport[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        supportReportsCollection(userId),
        {
          orderBy: [['createdAt', 'desc']],
          limit: SUPPORT_REPORT_PAGE_SIZE,
        },
        snapshot => onReports(snapshot.docs.map(mapSupportReport)),
        onError,
      );
    },
  };
}

export type UserRepository = ReturnType<typeof createUserRepository>;
