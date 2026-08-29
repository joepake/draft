/**
 * Proving a child device was really thrown out of its family, before anything
 * acts on it.
 *
 * Every child agent treats one signal as an unpair: `permission-denied` on the
 * device document. That is genuinely what a removed device sees —
 * `firestore.rules` gates on a `childSessions/{deviceId}` record only the Admin
 * SDK can write, and `revokeChildSessionOnDeviceDelete` removes it the moment a
 * parent deletes the row — but it is **not the only thing that produces that
 * code**. The Firestore SDKs also report a refusal when the request carried no
 * usable ID token, which is what a cold start with no network yet produces.
 *
 * That gap was measured on `apps/extension`, where it is worst: an MV3 worker
 * boots with the browser, fires its first heartbeat and attaches its listener
 * within a second of Chrome launching, and on a laptop opened after a day away
 * that is *before* Wi-Fi has associated. The session had been restored from
 * indexedDB with an ID token hours past expiry, the refresh could not run, the
 * listener was refused, and the agent signed itself out for good — a child
 * device that had to be re-paired by hand because the browser started faster
 * than the network. The same code runs on `apps/desktop` and `apps/tv`, which
 * cold-start the same way after a machine has been shut for a weekend.
 *
 * The check is two moves and no state:
 *
 * 1. **Force an ID token refresh.** If that cannot even run, there is no
 *    network and nothing has been proven — a refusal that arrived without a
 *    token says nothing about the family.
 * 2. **Re-read the device document with the fresh token.** A refusal now is the
 *    real answer, because the token is current; a server snapshot saying the
 *    document is gone is the same answer arriving the other way.
 *
 * Anything else — offline, a cache-only miss, an unavailable backend — is
 * `'transient'`. The asymmetry is deliberate and is the opposite of the one
 * `controlsSync` used to state: a device that unpairs itself wrongly costs a
 * parent a re-pair *and* leaves the child unfiltered until they notice, while a
 * device that waits one more minute to be sure costs a minute.
 */

import { isDefinitiveAuthError } from '@kidgate/core/domain/authRetry';
import { normalizeFirestoreCode } from '@kidgate/core/domain/firestoreError';
import { childDeviceDoc } from '@kidgate/schema/paths';
import type { FirestorePort } from '@kidgate/ports/firestore';

export type RemovalVerdict = 'removed' | 'transient';

/**
 * A refusal, however it reached us.
 *
 * `FirestorePort` contracts that a thrown error carries an already-normalised
 * code (`permissionDenied`), and every adapter honours it — but this function
 * is also handed errors that came off a repository or an SDK call that never
 * passed through one, where the spelling is still the SDK's
 * (`permission-denied`, or RNFB's `firestore/permission-denied`). Checking the
 * normalised value *and* the normalised spelling covers both, and the failure
 * mode of getting this wrong is silent: an unpaired device that never notices,
 * because an unrecognised code reads as "transient" forever.
 */
export function isRefusal(error: unknown): boolean {
  const code = (error as { code?: unknown })?.code;
  return (
    code === 'permissionDenied' || normalizeFirestoreCode(code) === 'permissionDenied'
  );
}

export interface RemovalCheckDeps {
  db: FirestorePort;
  /** The family owner's uid — a child device signs in under it. */
  uid: string;
  deviceId: string;
  /**
   * Force a fresh ID token, rejecting when it cannot be obtained.
   *
   * Optional so a surface that has no handle to its auth object still gets the
   * re-read, which is most of the value. Every surface that can pass it should:
   * without the refresh, a stale token can be refused twice in a row and the
   * second refusal reads as proof.
   */
  refreshAuth?: () => Promise<unknown>;
}

export async function confirmDeviceRemoved(
  deps: RemovalCheckDeps,
): Promise<RemovalVerdict> {
  if (deps.refreshAuth) {
    try {
      await deps.refreshAuth();
    } catch (error) {
      /*
       * A refresh that *cannot run* is no evidence — whatever refused us
       * refused an empty hand, and that is the cold-start case above.
       *
       * A refresh the server *answered* is the opposite. A child device signs
       * in under the family owner's uid, so `auth/user-not-found` (and the rest
       * of `isDefinitiveAuthError`) is the account this device belongs to
       * having been deleted: the strongest unpair signal there is. Read as
       * "transient" it produced a device enforcing a deleted family's bedtime
       * forever, retrying a token that will never come back.
       */
      return isDefinitiveAuthError(error) ? 'removed' : 'transient';
    }
  }

  try {
    const snapshot = await deps.db.getDoc(childDeviceDoc(deps.uid, deps.deviceId));
    if (snapshot.exists) {
      return 'transient';
    }
    /*
     * Absent, and only the server may say so — the same rule `controlsSync`'s
     * snapshot branch applies. A cache-first read on a device that has never
     * held this document (or has just cleared its cache) is missing it for
     * reasons that have nothing to do with the family.
     */
    return snapshot.fromCache ? 'transient' : 'removed';
  } catch (error) {
    return isRefusal(error) ? 'removed' : 'transient';
  }
}
