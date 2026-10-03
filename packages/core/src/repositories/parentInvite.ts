import type { ApiPort } from '@kidgate/ports/api';

/**
 * Inviting a second parent, and answering the request that comes back.
 *
 * Minting and approving ask what every other parent write asks,
 * `requireParentDevice`: a paired phone, or a browser whose QR session is still
 * live (`requireParentCaller` in `functions/http/pairing.js`, 2026-09-27).
 * Approval is what hands out control of the family, and on the ID token alone
 * a password typed into any browser could add its holder as a parent. Listing
 * the pending requests stays on the ID token — it changes nothing, and a
 * read-only browser still shows them.
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
