import { createHttpApiAdapter } from '@kidgate/core/adapters/httpApi';
import { auth, functionsBaseUrl } from '../lib/firebase.js';

/**
 * The transport lives in `@kidgate/core/adapters/httpApi` now, shared with
 * `apps/desktop`. What stays here is how this surface proves who it is:
 *
 * **The browser proves it is a parent differently from a phone.** The mobile
 * adapter attaches a device credential held in the Keychain; there is nothing
 * equivalent here, and inventing one would mean storing a long-lived secret in
 * a browser. Instead the session itself is the credential: signing in by
 * scanning the QR with an already-paired parent phone mints a token carrying
 * `roleHint: 'web'`, and `requireParentDevice` on the server validates the
 * backing session document on every call. Revoking the session takes effect
 * server-side immediately.
 *
 * That difference is exactly what the port exists to absorb. Repositories say
 * `{ as: 'parent' }` and never learn which of the two happened.
 */
export function createApiAdapter() {
  const adapter = functionsBaseUrl
    ? createHttpApiAdapter({
        baseUrl: functionsBaseUrl,
        credentials: {
          async idToken(forceRefresh) {
            const user = auth?.currentUser;
            return user ? user.getIdToken(forceRefresh) : null;
          },

          // A browser is never a child device. The shared adapter refuses
          // `as: 'child'` outright when this is null — silently sending the
          // parent token instead would let a child-scoped endpoint be called
          // with parent authority, the mix-up `docs/DATA_MODEL.md` warns about.
          childFields: null,

          // The web session itself is the parent proof; no body fields.
          parentFields: null,

          // An expired ID token is the browser's stale credential. The retry's
          // forced refresh is the re-issue, so recovery is always worth one try.
          async reissue() {
            return true;
          },
        },
        messageKeys: { unauthenticated: 'authError.sessionExpired' },
      })
    : null;

  return {
    async post(path, body, options) {
      if (!adapter) {
        throw { code: 'unknown', messageKey: 'authError.noFunctionsUrl' };
      }
      return adapter.post(path, body, options);
    },
  };
}
