/**
 * A device joining a family as a child.
 *
 * **The child half only, and the omission is the point.** The full pairing flow
 * has a parent side too — `createPairingCode`, `redeemPairingCode`,
 * `claimChildPairingSession`, and the parent-join approval polling — and a child
 * device must never be able to call any of it. `claimChildPairingSession` in
 * particular is how a *parent* takes ownership of a pairing session; a child
 * device that could call it could adopt itself.
 *
 * Keeping the two apart in one file behind a comment would rely on nobody
 * importing the wrong function. Keeping them in separate modules means the
 * child-only app has no handle to reach them with, which is the same reasoning
 * `apps/admin` uses for having no Firestore import at all.
 *
 * The parent half stays in `apps/mobile/src/services/pairing/PairingService.ts`
 * for now: it has exactly one consumer, so lifting it buys nothing and would
 * put the family-join flow through a refactor for no reader.
 *
 * The direction of this flow surprises people, so: `createChildPairingSession`
 * is **unauthenticated** and returns the code to the device that will be
 * managed. The child device *shows* a QR; the parent scans it. A child device
 * therefore needs no camera.
 */

import type { ApiPort } from '@kidgate/ports/api';
import type { Millis } from '@kidgate/schema/primitives';

export const ChildPairingEndpoints = {
  createChildSession: '/createChildPairingSession',
  pollChildSession: '/pollChildPairingSession',
  confirmChildSession: '/confirmChildPairingSession',
  rejectChildSession: '/rejectChildPairingSession',
} as const;

/** Codes live five minutes server-side. */
export const CHILD_PAIRING_TTL_MS = 5 * 60 * 1000;

export interface ChildPairingSession {
  sessionId: string;
  code: string;
  expiresAtMs: Millis;
}

export type ChildPairingStatus =
  'waiting' | 'claimed' | 'ready' | 'expired' | 'redeemed' | 'rejected';

export interface ChildPairingPoll {
  status: ChildPairingStatus;
  /** The parent's display label, once one has claimed the session. */
  ownerLabel?: string;
}

interface CreateResponse {
  ok?: boolean;
  sessionId?: string;
  code?: string;
  expiresAtMs?: number;
}

interface PollResponse {
  ok?: boolean;
  status?: ChildPairingStatus;
  ownerLabel?: string;
}

interface ConfirmResponse {
  ok?: boolean;
  customToken?: string;
  ownerUserId?: string;
}

/**
 * Prefer the server's expiry over one computed here.
 *
 * `Date.now() + TTL` drifts by network latency and clock skew, so a code could
 * be dead seconds before the countdown reached zero — and on this platform the
 * device clock is not trusted anyway. Falls back only when an older deployed
 * function returns nothing.
 */
function resolveExpiry(serverValue: unknown, nowMs: Millis): Millis {
  return typeof serverValue === 'number' &&
    Number.isFinite(serverValue) &&
    serverValue > nowMs
    ? serverValue
    : nowMs + CHILD_PAIRING_TTL_MS;
}

export interface ChildPairingRepositoryDeps {
  api: ApiPort;
  /** Server-corrected time, from the same `ClockPort` enforcement uses. */
  nowMs: () => Millis;
}

export function createChildPairingRepository(deps: ChildPairingRepositoryDeps) {
  const { api, nowMs } = deps;

  return {
    /** A fresh code. Unauthenticated — this device has no session yet. */
    async createSession(): Promise<ChildPairingSession> {
      const response = await api.post<CreateResponse>(
        ChildPairingEndpoints.createChildSession,
        {},
        { as: 'none' },
      );
      if (!response?.ok || !response.sessionId || !response.code) {
        throw new Error('pairing/session-create-failed');
      }
      return {
        sessionId: response.sessionId,
        code: response.code,
        expiresAtMs: resolveExpiry(response.expiresAtMs, nowMs()),
      };
    },

    async poll(sessionId: string): Promise<ChildPairingPoll> {
      const response = await api.post<PollResponse>(
        ChildPairingEndpoints.pollChildSession,
        { sessionId },
        { as: 'none' },
      );
      return {
        status: response?.status ?? 'waiting',
        ...(response?.ownerLabel ? { ownerLabel: response.ownerLabel } : {}),
      };
    },

    /**
     * Accept the parent who claimed this session, and receive the custom token.
     *
     * `deviceId` is settled **before** this call, never after: the server bakes
     * it into the token's claim, `firestore.rules` requires that claim to match
     * the document being written, and `registerChildDevice` has to reuse the
     * same id. A device that minted its id afterwards would hold a session
     * scoped to a device that does not exist.
     */
    async confirm(
      sessionId: string,
      deviceId: string,
    ): Promise<{ customToken: string; ownerUserId: string }> {
      const response = await api.post<ConfirmResponse>(
        ChildPairingEndpoints.confirmChildSession,
        { sessionId, deviceId },
        { as: 'none' },
      );
      if (!response?.ok || !response.customToken || !response.ownerUserId) {
        throw new Error('pairing/confirm-failed');
      }
      return {
        customToken: response.customToken,
        ownerUserId: response.ownerUserId,
      };
    },

    async reject(sessionId: string): Promise<void> {
      await api.post(
        ChildPairingEndpoints.rejectChildSession,
        { sessionId },
        { as: 'none' },
      );
    },
  };
}

export type ChildPairingRepository = ReturnType<typeof createChildPairingRepository>;
