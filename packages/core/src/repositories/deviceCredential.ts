/**
 * The secret that proves a request came from *this* device.
 *
 * A family ID token is not enough for the endpoints that matter.
 * `reportChildUsage` says so in its own comment: a device's own usage may only
 * be reported by that device, proven with the credential in its keystore — not
 * by anything else holding the family's token.
 *
 * The part worth reading before changing anything here is `ensure`. The server
 * answers `/ensureDeviceCredential` in **three** shapes, and only one of them
 * hands back a secret:
 *
 * - `issued: true` with a credential — brand new, store it.
 * - `issued: false` with no credential — the server already holds a hash for
 *   this uid and deviceId. Use the local copy.
 * - `issued: false` and there is **no** local copy — a reinstall, a restored
 *   backup, a cleared keystore. The only way out is to rotate.
 *
 * The first macOS implementation checked for a credential in the response and
 * gave up when there was none, which left a reinstalled device permanently
 * unable to report anything. That third branch is why this is shared code.
 */

import type { ApiPort } from '@kidgate/ports/api';
import type { SecureStoragePort } from '@kidgate/ports/storage';

const CREDENTIAL_KEY = 'deviceCredential';
const ENDPOINT = '/ensureDeviceCredential';

/** Attempts while the device document is still propagating. */
const REGISTRATION_RETRIES = 3;

export type DeviceRole = 'parent' | 'child';

interface EnsureResponse {
  ok?: boolean;
  issued?: boolean;
  rotated?: boolean;
  credential?: string;
  error?: string;
}

export interface DeviceCredentialRepositoryDeps {
  api: ApiPort;
  /** Keychain on Apple platforms, Keystore on Android, DPAPI on Windows. */
  secure: SecureStoragePort;
  /**
   * Wait between retries. Injected so a test does not spend a second sleeping,
   * and so the backoff is visible rather than buried in a `setTimeout`.
   */
  wait?: (ms: number) => Promise<void>;
}

const defaultWait = (ms: number) =>
  new Promise<void>(resolve => setTimeout(resolve, ms));

export function createDeviceCredentialRepository(deps: DeviceCredentialRepositoryDeps) {
  const wait = deps.wait ?? defaultWait;

  async function request(
    role: DeviceRole,
    deviceId: string,
    reissue: boolean,
  ): Promise<EnsureResponse> {
    return deps.api.post<EnsureResponse>(
      ENDPOINT,
      { deviceId, role, reissue },
      /*
       * `session` — the ID token alone. This call *obtains* the credential, so
       * it cannot present one, and `none` would send no Authorization header at
       * all while `requireAuthUser` on the server demands it.
       */
      { as: 'session' },
    );
  }

  async function store(credential: string): Promise<string> {
    await deps.secure.set(CREDENTIAL_KEY, credential);
    return credential;
  }

  const repository = {
    async get(): Promise<string | null> {
      return deps.secure.get(CREDENTIAL_KEY);
    },

    async clear(): Promise<void> {
      await deps.secure.remove(CREDENTIAL_KEY);
    },

    /**
     * The credential for this device, obtaining or recovering one as needed.
     *
     * Always probes the server rather than trusting the keystore alone: after
     * an account switch a device can still hold the previous user's secret
     * while the server has no matching hash for the current one.
     */
    async ensure(role: DeviceRole, deviceId: string): Promise<string | null> {
      const existing = await deps.secure.get(CREDENTIAL_KEY);

      for (let attempt = 0; attempt < REGISTRATION_RETRIES; attempt += 1) {
        let response: EnsureResponse;
        try {
          response = await request(role, deviceId, false);
        } catch {
          /*
           * The device document may still be propagating — registration and
           * this call happen seconds apart. Back off and try again; on the last
           * attempt, give up rather than loop.
           */
          if (attempt < REGISTRATION_RETRIES - 1) {
            await wait(350 * (attempt + 1));
            continue;
          }
          return null;
        }

        if (response?.ok !== true) {
          return null;
        }

        if (response.issued && response.credential) {
          return store(response.credential);
        }

        // The server has a hash and this device has the matching secret.
        if (existing) {
          return existing;
        }

        // The server has a hash and this device does not. Rotating is the only
        // recovery, and it is safe: the caller already proved Firebase auth and
        // owns this deviceId.
        return repository.reissue(role, deviceId);
      }

      return null;
    },

    /**
     * Rotate: ask the server for a fresh secret and replace the stored one.
     *
     * Only ever after a request actually failed, never speculatively. Rotating
     * invalidates a credential that may have been fine and turns a transient
     * error into a real one.
     */
    async reissue(role: DeviceRole, deviceId: string): Promise<string | null> {
      // Dropped before asking. If the call fails halfway, the next attempt must
      // not find the rejected secret still sitting in the keystore and send it.
      await deps.secure.remove(CREDENTIAL_KEY);

      let response: EnsureResponse;
      try {
        response = await request(role, deviceId, true);
      } catch {
        return null;
      }

      if (response?.ok !== true || !response.credential) {
        return null;
      }
      return store(response.credential);
    },
  };

  return repository;
}

export type DeviceCredentialRepository = ReturnType<
  typeof createDeviceCredentialRepository
>;
