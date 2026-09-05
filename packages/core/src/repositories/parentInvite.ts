import type { ApiPort } from '@kidgate/ports/api';

/**
 * Inviting a second parent, and answering the request that comes back.
 *
 * Three endpoints, one shape: **`requireAuthUser` and nothing more.** No
 * device credential and no web step-up — minting a code is not a control over
 * a child's device, and the code alone grants nothing until the owner approves
 * the request it produces. That is why this surface works from a browser that
 * has only signed in.
 *
 * The handshake is deliberately two-sided:
 *
 *   owner mints a code ──> co-parent types it into the app ──>
 *   a join request appears ──> owner approves it ──> membership exists
 *
 * A code that leaked is therefore not an account: whoever redeems it lands in
 * a pending request the owner still has to say yes to, and the request names
 * the device asking.
 *
 * `apps/mobile` reaches the same endpoints through its own axios
 * `PairingService` — migration step 9 debt (`packages/core/CLAUDE.md`), not a
 * second contract. When that app moves onto `ApiPort` it should delete that
 * service and call this.
 */

export interface PendingParentJoinRequest {
  requestId: string;
  /** What the requester calls themselves, falling back to their uid. */
  label: string;
  platform: string | null;
  deviceName: string | null;
  osVersion: string | null;
}

export interface ParentInviteRepositoryDeps {
  api: ApiPort;
}

export function createParentInviteRepository(deps: ParentInviteRepositoryDeps) {
  const { api } = deps;

  return {
    /**
     * Mint an invite code. Short-lived and rate-limited server-side — an
     * unthrottled mint loop fills the collection and burns writes.
     */
    async createCode(): Promise<{ code: string; expiresAtMs: number }> {
      const result = await api.post<{ code?: string; expiresAtMs?: number }>(
        '/createPairingCode',
        {},
        { as: 'parent' },
      );
      return {
        code: typeof result?.code === 'string' ? result.code : '',
        expiresAtMs: typeof result?.expiresAtMs === 'number' ? result.expiresAtMs : 0,
      };
    },

    /**
     * The requests waiting on this owner.
     *
     * Scoped server-side to `ownerUserId == request.auth.uid`, so this takes no
     * family id — a caller cannot ask about somebody else's family by naming
     * it. Expired requests are filtered there too, which is why nothing here
     * re-checks a timestamp.
     */
    async listPending(): Promise<PendingParentJoinRequest[]> {
      const result = await api.post<{ requests?: PendingParentJoinRequest[] }>(
        '/listPendingParentJoinRequests',
        {},
        { as: 'parent' },
      );
      return Array.isArray(result?.requests) ? result.requests : [];
    },

    /** Approve or decline one request. Approval is what creates membership. */
    async resolve(requestId: string, approved: boolean): Promise<void> {
      await api.post(
        '/resolveParentJoinRequest',
        { requestId, approved },
        { as: 'parent' },
      );
    },
  };
}

export type ParentInviteRepository = ReturnType<typeof createParentInviteRepository>;
