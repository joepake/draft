import type { ApiPort } from '@kidgate/ports/api';

/**
 * Browsers authorised to act as a parent.
 *
 * Every call carries the parent device credential, which is the whole point: a
 * browser is trusted because someone holding an already-paired parent phone
 * approved it, not because someone knew a password. The credential is attached
 * by the adapter — callers only declare `as: 'parent'`.
 *
 * The QR goes web → phone: the dashboard renders the code and the phone scans
 * it to approve. See `apps/dashboard/CLAUDE.md`.
 */

export interface WebSession {
  id: string;
  userAgent: string;
  sessionExpiresAtMs: number;
}

export interface WebSessionRepositoryDeps {
  api: ApiPort;
}

export function createWebSessionRepository(deps: WebSessionRepositoryDeps) {
  const { api } = deps;

  return {
    /** Approve or decline a sign-in request scanned from the web dashboard. */
    async resolve(code: string, approve: boolean): Promise<void> {
      await api.post('/approveParentWebSession', { code, approve }, { as: 'parent' });
    },

    async list(): Promise<WebSession[]> {
      const response = await api.post<{ sessions?: WebSession[] }>(
        '/listParentWebSessions',
        {},
        { as: 'parent' },
      );
      return response.sessions ?? [];
    },

    async revoke(webSessionId: string): Promise<void> {
      await api.post('/revokeParentWebSession', { webSessionId }, { as: 'parent' });
    },
  };
}

export type WebSessionRepository = ReturnType<typeof createWebSessionRepository>;
