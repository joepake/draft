import type { ClockPort } from '@kidgate/ports/clock';
import type { ApiPort } from '@kidgate/ports/api';
import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { TimeRequest, TimeRequestStatus } from '@kidgate/schema/timeRequest';
import { isApiFailure } from '../domain/apiFailure';
import { deleteAllInBatches } from '../domain/batchDelete';

/**
 * Time requests — a child asking for more screen time, a parent answering.
 *
 * The first repository ported to the ports layer, and the pattern the other
 * seventeen follow. Three things changed from the legacy version, all of them
 * forced by making it run outside React Native:
 *
 * 1. **Dependencies are arguments.** A factory takes the ports rather than the
 *    module importing `@react-native-firebase`, the auth store and an axios
 *    client at load time. Tests construct one with fakes and no mocking.
 *
 * 2. **It returns keys, never sentences.** The legacy version threw
 *    `new Error(t('timeRequest.unableToSendRequest'))`, which renders the text
 *    at the point the error is created — in whatever language happened to be
 *    active — and throws the key away. The same failure is read by a parent in
 *    the app, written to a log, and sometimes emailed by a Cloud Function:
 *    three readers, up to three languages, one error. `ActivityRepository`
 *    already did this correctly with `titleKey`/`descriptionKey`/`params`; this
 *    follows it.
 *
 * 3. **Credential recovery moved to the adapter.** `resolveRequest` used to
 *    catch a stale-parent-credential failure, read `useAuthStore.getState()`,
 *    re-register the device and retry — logic duplicated in
 *    `ControlRepository.updateControls`, with a comment in each pointing at the
 *    other. Only the adapter knows how its platform holds credentials, so it
 *    owns the retry and this file no longer touches app state.
 */

export interface TimeRequestRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
  clock: ClockPort;
}

/** A family only ever has a handful pending; the cap is a safety net. */
const PAGE_SIZE = 50;

/*
 * The cooldown is a contract with the server, so it lives in `@kidgate/schema`
 * alongside the minute range the same endpoint validates. It was **5 minutes**
 * here against the server's 1, which made this repository stricter than the
 * rule it was mirroring: a child who waited the full minute was refused by
 * their own device for four more, with nothing in the UI able to explain why.
 *
 * Re-exported as well as imported so existing call sites keep their import.
 */
import { TIME_REQUEST_COOLDOWN_MS } from '@kidgate/schema/timeRequest';

export { TIME_REQUEST_COOLDOWN_MS };

/**
 * Why a request cannot be sent right now, as a key the caller renders.
 * `null` means it can.
 */
export type RequestBlockReason =
  'timeRequest.pendingRequestExists' | 'timeRequest.waitBeforeAnotherRequest';

export interface RequestGate {
  canRequest: boolean;
  reasonKey?: RequestBlockReason;
  retryAt?: string;
  pendingRequest?: TimeRequest;
}

function timeRequestsPath(userId: string): string {
  return `users/${userId}/timeRequests`;
}

function mapTimeRequest(doc: DocSnapshot): TimeRequest {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  // Optional fields are spread in only when present: `exactOptionalPropertyTypes`
  // distinguishes "absent" from "explicitly undefined", and the schema declares
  // these optional rather than nullable.
  return {
    id: doc.id,
    deviceId: String(data.deviceId ?? ''),
    deviceName: String(data.deviceName ?? ''),
    requestedMinutes: Number(data.requestedMinutes ?? 0),
    status: data.status as TimeRequestStatus,
    createdAt: typeof data.createdAt === 'string' ? data.createdAt : '',
    ...(typeof data.reason === 'string' ? { reason: data.reason } : {}),
    ...(typeof data.resolvedAt === 'string' ? { resolvedAt: data.resolvedAt } : {}),
  };
}

export function createTimeRequestRepository(deps: TimeRequestRepositoryDeps) {
  const { db, api, clock } = deps;

  return {
    /**
     * Whether this device may ask right now.
     *
     * Reads only this device's most recent few. Reading the whole collection
     * meant the child's "ask for more time" screen cost one read per request
     * the family had ever made, every time it opened.
     */
    async getRequestGate(userId: string, deviceId: string): Promise<RequestGate> {
      const snapshot = await db.getDocs(timeRequestsPath(userId), {
        where: [['deviceId', '==', deviceId]],
        orderBy: [['createdAt', 'desc']],
        limit: 5,
      });

      const requests = snapshot.docs.map(mapTimeRequest);

      const pendingRequest = requests.find(request => request.status === 'pending');
      if (pendingRequest) {
        return {
          canRequest: false,
          pendingRequest,
          reasonKey: 'timeRequest.pendingRequestExists',
        };
      }

      const latest = requests[0];
      if (latest) {
        const retryAtMs =
          new Date(latest.createdAt).getTime() + TIME_REQUEST_COOLDOWN_MS;
        // `clock`, not `Date.now()`: the cooldown must not be shortened by
        // winding the device clock forward.
        if (clock.now() < retryAtMs) {
          return {
            canRequest: false,
            retryAt: new Date(retryAtMs).toISOString(),
            reasonKey: 'timeRequest.waitBeforeAnotherRequest',
          };
        }
      }

      return { canRequest: true };
    },

    /**
     * Send a request.
     *
     * Goes through the Cloud Function rather than writing Firestore directly —
     * the function owns the cooldown and the rate limit, and a child device
     * holds the family owner's uid, so a direct write could not be trusted.
     */
    async createRequest(
      userId: string,
      data: {
        deviceId: string;
        deviceName: string;
        requestedMinutes: number;
        reason?: string;
      },
    ): Promise<TimeRequest> {
      const gate = await this.getRequestGate(userId, data.deviceId);
      if (!gate.canRequest) {
        throw {
          code: 'conflict' as const,
          messageKey: gate.reasonKey ?? 'timeRequest.unableToSendRequest',
        };
      }

      const reason = data.reason?.trim();
      const response = await api.post<{ request: TimeRequest }>(
        '/createTimeRequest',
        {
          deviceId: data.deviceId,
          deviceName: data.deviceName,
          requestedMinutes: data.requestedMinutes,
          ...(reason ? { reason } : {}),
        },
        { as: 'child' },
      );

      return response.request;
    },

    /**
     * Pending requests only, live.
     *
     * This once subscribed to the whole collection and discarded non-pending
     * rows on the client, so opening the parent app cost as much as the family
     * had ever requested. `deviceId` still filters in JS: the pending set is at
     * most one per device, not worth a second composite index.
     */
    subscribePending(
      userId: string,
      onRequests: (requests: TimeRequest[]) => void,
      onError: (error: Error) => void,
      deviceId?: string,
    ): Unsubscribe {
      return db.onQuery(
        timeRequestsPath(userId),
        {
          where: [['status', '==', 'pending']],
          orderBy: [['createdAt', 'desc']],
          limit: PAGE_SIZE,
        },
        snapshot => {
          onRequests(
            snapshot.docs
              .map(mapTimeRequest)
              .filter(request => !deviceId || request.deviceId === deviceId),
          );
        },
        onError,
      );
    },

    /**
     * Approve or decline, server-side.
     *
     * Never a plain client update. The approval prompt shows on every parent
     * device at once, and a client-side resolve with no precondition let two
     * parents both approve — doubling the minutes granted. The function runs a
     * transaction requiring `status == 'pending'`, grants bonus minutes for
     * today rather than raising the daily limit, and writes the activity entry
     * itself.
     */
    async resolveRequest(
      userId: string,
      request: TimeRequest,
      approved: boolean,
    ): Promise<void> {
      try {
        await api.post<{ ok: true }>(
          '/resolveTimeRequest',
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
                ? 'timeRequest.unableToApproveRequest'
                : 'timeRequest.unableToDeclineRequest'),
          };
        }
        throw error;
      }
    },

    /** Used when a device is removed from the family. */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = timeRequestsPath(userId);
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

export type TimeRequestRepository = ReturnType<typeof createTimeRequestRepository>;
