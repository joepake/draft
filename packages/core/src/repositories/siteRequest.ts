import type { ApiPort } from '@kidgate/ports/api';
import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { SiteRequest, SiteRequestStatus } from '@kidgate/schema/siteRequest';
import { siteRequestsCollection } from '@kidgate/schema/paths';
import { isApiFailure } from '../domain/apiFailure';
import { normalizeWebDomain } from '../domain/webDomain';
import { deleteAllInBatches } from '../domain/batchDelete';

/**
 * Site requests — a child asking for one website, a parent answering.
 *
 * `timeRequest.ts` is the sibling and the model; two differences are
 * deliberate.
 *
 * 1. **No client-side gate before sending.** The time-request repository reads
 *    the device's five most recent rows first, to refuse a second request
 *    before it costs a round trip. This one does not: the surface that asks
 *    most often is a browser extension's block page, where a pre-flight query
 *    costs an index, a Firestore read and a wait on a screen a child is already
 *    stuck on — and the server enforces both rules anyway. Each refusal comes
 *    back naming the sentence to show; `siteRequestMessageKey` reads it.
 *
 * 2. **Approval writes the allow list, not a bonus.** That happens entirely in
 *    `resolveSiteRequest`; nothing here knows about it. The device sees the new
 *    `webFilterAllowList` through the controls sync it already runs.
 */

export interface SiteRequestRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
}

/** A family only ever has a handful pending; the cap is a safety net. */
const PAGE_SIZE = 50;

/**
 * What to tell the child when the ask did not go through.
 *
 * The two refusals a child can actually do something about — one already
 * waiting, and the cooldown — are named by the *server*, which sends
 * `messageKey` beside its code (`functions/lib/errors.js`). They cannot be
 * told apart on this side: both are a 400, and `ApiFailure.code` is the shared
 * `ApiErrorCode` table rather than the endpoint's own string. Everything else
 * is the generic failure, which is the honest answer for a network that died.
 */
export function siteRequestMessageKey(error: unknown): string {
  if (isApiFailure(error) && error.messageKey) {
    return error.messageKey;
  }
  return 'timeRequest.toastSendFailed';
}

function mapSiteRequest(doc: DocSnapshot): SiteRequest {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  // Optional fields are spread in only when present: `exactOptionalPropertyTypes`
  // distinguishes "absent" from "explicitly undefined", and the schema declares
  // these optional rather than nullable.
  return {
    id: doc.id,
    deviceId: String(data.deviceId ?? ''),
    deviceName: String(data.deviceName ?? ''),
    domain: String(data.domain ?? ''),
    status: data.status as SiteRequestStatus,
    createdAt: typeof data.createdAt === 'string' ? data.createdAt : '',
    ...(typeof data.reason === 'string' ? { reason: data.reason } : {}),
    ...(typeof data.resolvedAt === 'string' ? { resolvedAt: data.resolvedAt } : {}),
  };
}

export function createSiteRequestRepository(deps: SiteRequestRepositoryDeps) {
  const { db, api } = deps;

  return {
    /**
     * Ask for one site, or for several at once.
     *
     * Through the Cloud Function, never a direct write: a child device holds
     * the family owner's uid, so the pending ceiling and the cooldown are only
     * rules if the server owns them.
     *
     * Every domain is normalised here as well as on the server — same function
     * the allow list itself uses — so a surface that hands over a URL cannot
     * produce an allow-list entry matching nothing. A string that is not a
     * hostname is dropped before the call rather than after it, and an ask
     * with nothing left is refused without a round trip.
     *
     * **`SITE_REQUEST_MAX_BATCH` is not checked here.** A caller that would
     * exceed it has a list on screen and must cap the *selection*, so the child
     * finds out while picking rather than after sending; the server refuses the
     * over-long batch whole either way.
     */
    async createRequest(data: {
      deviceId: string;
      deviceName: string;
      domains: string[];
      reason?: string;
    }): Promise<SiteRequest[]> {
      const domains: string[] = [];
      for (const raw of data.domains) {
        const domain = normalizeWebDomain(raw);
        if (domain && !domains.includes(domain)) {
          domains.push(domain);
        }
      }

      const [first] = domains;
      if (!first) {
        throw {
          code: 'invalid' as const,
          messageKey: 'webFilter.toastUpdateFailed',
        };
      }

      const reason = data.reason?.trim();
      const response = await api.post<{
        request: SiteRequest;
        requests?: SiteRequest[];
      }>(
        '/createSiteRequest',
        {
          deviceId: data.deviceId,
          deviceName: data.deviceName,
          domains,
          /*
           * The singular alongside the list, for the same reason the server
           * still answers with `request`: a Functions deployment older than
           * this change reads `domain` and ignores `domains`, and the surface
           * most likely to meet one is a browser extension that updates on the
           * Web Store's schedule rather than ours. One domain either way.
           */
          domain: first,
          ...(reason ? { reason } : {}),
        },
        /*
         * `session`, not `child`: the ID token alone. The endpoint gates on the
         * `deviceId` claim in that token (`requireChildDeviceScope`), and the
         * one surface this feature exists for — the extension's block page —
         * holds no device credential, so its adapter refuses `as: 'child'`
         * outright. `functions/http/siteRequests.js` records why the server
         * does not ask for one.
         */
        { as: 'session' },
      );

      // An older deployment answers with `request` alone.
      return response.requests ?? (response.request ? [response.request] : []);
    },

    /**
     * Pending requests only, live — the same shape the parent's time-request
     * list uses. `deviceId` filters in JS: the pending set is at most one per
     * device, not worth a second composite index.
     */
    subscribePending(
      userId: string,
      onRequests: (requests: SiteRequest[]) => void,
      onError: (error: Error) => void,
      deviceId?: string,
    ): Unsubscribe {
      return db.onQuery(
        siteRequestsCollection(userId),
        {
          where: [['status', '==', 'pending']],
          orderBy: [['createdAt', 'desc']],
          limit: PAGE_SIZE,
        },
        snapshot => {
          onRequests(
            snapshot.docs
              .map(mapSiteRequest)
              .filter(request => !deviceId || request.deviceId === deviceId),
          );
        },
        onError,
      );
    },

    /**
     * Approve or decline, server-side.
     *
     * Never a plain client update, for the reason the time-request repository
     * states: the prompt reaches every parent device at once, and the
     * transaction requiring `status == 'pending'` is what stops two parents
     * both answering — here that would append the same domain to the allow list
     * twice.
     */
    async resolveRequest(
      userId: string,
      request: SiteRequest,
      approved: boolean,
    ): Promise<void> {
      try {
        await api.post<{ ok: true }>(
          '/resolveSiteRequest',
          { requestId: request.id, familyOwnerUserId: userId, approved },
          { as: 'parent' },
        );
      } catch (error) {
        if (isApiFailure(error)) {
          throw {
            ...error,
            messageKey:
              error.messageKey ??
              (approved
                ? 'timeRequest.toastApproveFailed'
                : 'timeRequest.toastDeclineFailed'),
          };
        }
        throw error;
      }
    },

    /** Used when a device is removed from the family. */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = siteRequestsCollection(userId);
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

export type SiteRequestRepository = ReturnType<typeof createSiteRequestRepository>;
