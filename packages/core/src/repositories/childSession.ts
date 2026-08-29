import { isApiFailure } from '../domain/apiFailure';
import type { ApiPort } from '@kidgate/ports/api';

/**
 * Binding a child agent's session to the device it is running on.
 *
 * ## What this exists to close
 *
 * A child device signs in **as the family owner**, so its refresh token is the
 * family's: revoking it would sign the parent out too. What binds a session to
 * one machine is a `deviceId` claim plus a server-only
 * `users/{uid}/childSessions/{deviceId}` record, which `firestore.rules`
 * requires through `childSessionValid()`. Deleting that record is what makes an
 * unpair stick.
 *
 * **A session without the claim skips all of it.** `isScopedChild()` is false,
 * so `childSessionValid()` short-circuits to true and the device keeps full
 * family access — forever, and with no way for a parent to take it back. Two
 * ways to be holding one:
 *
 * - paired before the claim existed;
 * - paired since, but `openChildSession` failed at that moment.
 *   `functions/http/pairing.js` deliberately falls back to an unscoped token
 *   rather than burning a pairing session it has already redeemed, and nothing
 *   on the server retries afterwards. **The device is the only thing that can.**
 *
 * `apps/mobile` has closed this since the claim shipped
 * (`services/auth/childSession.ts`); `apps/desktop` and `apps/tv` had no
 * equivalent, so an unscoped agent stayed unscoped and stayed unrevokable.
 * This is that client, in `@kidgate/core` because it is now the third caller —
 * the rule `apps/desktop/CLAUDE.md` states as "an endpoint the phone already
 * calls does not get a second client".
 *
 * ## Why a device credential is required, and who therefore cannot use this
 *
 * `refreshChildSession` mints a scoped token only for a caller that can present
 * the device credential matching `childDevices/{deviceId}.credentialHash`. That
 * is what stops a scoped child trading its token for one scoped to a sibling
 * whose credential it does not hold. A surface with no credential — today
 * `apps/extension`, whose `childFields` is null — cannot call this at all, and
 * must be scoped at pairing time or not at all.
 *
 * ## What a revoked device cannot do with it
 *
 * Re-admit itself. The endpoint refuses with 404 unless `childDevices/{id}`
 * still exists, and the rules stop a child session from re-creating one. A 404
 * is therefore a definite answer — this device is unpaired — rather than a
 * failure worth retrying, which is the difference between an agent that signs
 * itself out and one that hammers rules that will never allow it again.
 */

const REFRESH_ENDPOINT = '/refreshChildSession';

export type ChildSessionScopeResult =
  /** Already scoped, or nothing local to bind a session to. Nothing happened. */
  | 'skipped'
  /** The session now carries this device's `deviceId` claim. */
  | 'scoped'
  /** The family no longer has this device. Sign out; do not retry. */
  | 'unpaired'
  /** Offline, refused, or rate-limited. Safe to retry later; nothing changed. */
  | 'failed';

export interface ChildSessionDeps {
  api: ApiPort;
  /**
   * This install's own device id — the one it registered and pairs under, read
   * from local storage rather than from the token. Null when the install never
   * finished pairing, in which case there is nothing to bind to.
   */
  storedDeviceId(): Promise<string | null>;
  /**
   * The device credential this agent holds, minting one if it can. Null when
   * the surface has none, which is a permanent answer for that surface rather
   * than a transient failure.
   */
  deviceCredential(): Promise<string | null>;
  /** Redeem the custom token the endpoint returns. */
  signInWithCustomToken(token: string): Promise<void>;
}

export interface ChildSessionRepository {
  /**
   * @param session the signed-in child session, whose `deviceId` is the claim
   *   as the token carries it — **not** what local storage says. Null means
   *   unscoped, which is the whole reason this is called.
   */
  ensureScoped(
    session: { deviceId: string | null },
    options?: { force?: boolean },
  ): Promise<ChildSessionScopeResult>;
}

export function createChildSessionRepository(
  deps: ChildSessionDeps,
): ChildSessionRepository {
  return {
    async ensureScoped(session, options) {
      if (session.deviceId && !options?.force) {
        return 'skipped';
      }

      const deviceId = await deps.storedDeviceId();
      if (!deviceId) {
        return 'skipped';
      }

      /*
       * A scoped session may only ever re-open its own device — the server
       * refuses the mismatch with 403 (`auth/child-device-scope`), and asking
       * for one is a bug rather than an attack: it means this agent's stored
       * identity and its token disagree about which machine it is. Refusing
       * locally keeps that out of the rate limiter and out of the logs of a
       * family that has done nothing wrong.
       */
      if (session.deviceId && session.deviceId !== deviceId) {
        return 'failed';
      }

      const deviceCredential = await deps.deviceCredential();
      if (!deviceCredential) {
        return 'failed';
      }

      try {
        const response = await deps.api.post<{
          ok?: boolean;
          customToken?: string;
        }>(
          REFRESH_ENDPOINT,
          { deviceId, deviceCredential },
          /*
           * `session`, not `child`: the ID token alone. The adapter's `child`
           * mode would merge its own credential fields into this body, which
           * is the same values by a less obvious route — and this call has to
           * work for a session that cannot prove a child role yet, which is
           * the state it exists to leave.
           */
          { as: 'session' },
        );

        if (!response?.ok || !response.customToken) {
          return 'failed';
        }

        await deps.signInWithCustomToken(response.customToken);
        return 'scoped';
      } catch (error) {
        if (isApiFailure(error) && error.code === 'notFound') {
          return 'unpaired';
        }
        return 'failed';
      }
    },
  };
}
