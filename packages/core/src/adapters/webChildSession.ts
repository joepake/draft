/**
 * A child-role session over the `firebase/auth` JS SDK — every browser-engine
 * child surface: `apps/desktop` (WKWebView / WebView2) and `apps/extension`
 * (an MV3 service worker).
 *
 * Lived in `apps/desktop/src/session.ts` until the extension became a second
 * consumer — the move the desktop CLAUDE.md's table of regretted local copies
 * exists to prompt. That file now re-exports this one.
 *
 * `AuthPort` is **not** implemented here, and that is deliberate rather than
 * unfinished. That port models a sign-in surface — `signIn('apple' | 'google' |
 * 'email')`, `signOut` — and a child surface has none: there is no parent role,
 * no account screen, and nothing to sign out of. Implementing it would mean
 * three methods that throw, which the ports layer explicitly rejects as a
 * shape ("an unsupported port is absent, never present-and-throwing").
 *
 * What a child surface has instead is one narrow move: redeem a custom token
 * minted by `confirmChildPairingSession`. That token already carries both
 * claims the rules need — `roleHint: 'child'` and the `deviceId` the surface
 * settled before confirming — so a paired device is scoped from its very first
 * request.
 */

import {
  claimsRetryDelayMs,
  isDefinitiveAuthError,
} from '@kidgate/core/domain/authRetry';
import {
  onAuthStateChanged,
  signInWithCustomToken,
  signOut as fbSignOut,
  type Auth,
  type User,
} from 'firebase/auth';

export interface ChildSession {
  /** The family owner's uid. A child device signs in **as the owner** — see the root CLAUDE.md. */
  uid: string;
  /** From the token claim, not from local storage. Absent means an unscoped session. */
  deviceId: string | null;
}

function readClaims(claims: Record<string, unknown>): ChildSession['deviceId'] {
  return typeof claims.deviceId === 'string' && claims.deviceId.length > 0
    ? claims.deviceId
    : null;
}

const defaultWait = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

export interface WatchChildSessionOptions {
  /**
   * The claims read failed on something that is not an answer — almost always
   * no network yet — and is being retried.
   *
   * A caller that would otherwise render "not paired" the moment `listener` has
   * not fired needs this: **"we do not know yet" and "there is no session" are
   * different screens**, and only one of them tells a child their parent's
   * controls are off. Fires once per outage, not once per attempt.
   */
  onIndeterminate?: (error: unknown) => void;
  /**
   * The account this device signs in under is gone for good.
   *
   * A null session says only "there is nobody signed in", and its two causes
   * want opposite handling: a token that merely ended is nothing anybody
   * decided, while `auth/user-not-found` on the *family owner's* uid — which is
   * the uid a child device holds — is the family having been deleted. Callers
   * that tear down differently for the two (releasing the lock rather than
   * quietly stopping) cannot tell them apart from `listener(null)` alone, and a
   * child phone left locked out of a family nobody owns any more is the fault
   * this exists to prevent. Fires immediately before the null session.
   */
  onAccountGone?: (error: unknown) => void;
  /** Injected so a test spends no real seconds. */
  wait?: (ms: number) => Promise<void>;
}

/**
 * Watch for a signed-in child.
 *
 * A session whose `roleHint` is not `child` is reported as **no session**. On a
 * phone that combination is a parent using the same binary; on these surfaces
 * it can only be a mistake or a stolen token, and there is no screen a parent
 * session should reach.
 *
 * **A failed claims read is not "no session".** `getIdTokenResult` refreshes
 * over the network whenever the cached ID token has expired, which it always
 * has on a surface that has been shut for more than an hour — every cold start
 * after a weekend, and every browser that launches before its Wi-Fi
 * associates. That failure used to be reported as a null session, which is the
 * sentence "this device is not paired" said with no evidence: the extension's
 * popup showed a pairing QR for a paired browser, and the desktop agent showed
 * its pairing screen. Transient failures are now retried until they answer,
 * and only the codes `domain/authRetry` calls definitive end the session.
 */
export function watchChildSession(
  auth: Auth,
  listener: (session: ChildSession | null) => void,
  options?: WatchChildSessionOptions,
): () => void {
  const wait = options?.wait ?? defaultWait;
  let stopped = false;
  /**
   * Which auth state a retry loop belongs to.
   *
   * The watcher fires again on every token refresh and on sign-out, so a loop
   * still waiting out an outage may be answering for a user who is no longer
   * current. Its own generation being stale is the signal to say nothing at
   * all — the newer loop owns the listener.
   */
  let generation = 0;

  const resolveSession = async (user: User, mine: number): Promise<void> => {
    for (let attempt = 0; ; attempt += 1) {
      try {
        const result = await user.getIdTokenResult();
        if (stopped || mine !== generation) {
          return;
        }
        if (result.claims.roleHint !== 'child') {
          listener(null);
          return;
        }
        listener({ uid: user.uid, deviceId: readClaims(result.claims) });
        return;
      } catch (error) {
        if (stopped || mine !== generation) {
          return;
        }
        if (isDefinitiveAuthError(error)) {
          options?.onAccountGone?.(error);
          listener(null);
          return;
        }
        if (attempt === 0) {
          options?.onIndeterminate?.(error);
        }
        await wait(claimsRetryDelayMs(attempt));
      }
    }
  };

  const unsubscribe = onAuthStateChanged(auth, user => {
    const mine = ++generation;
    if (!user) {
      listener(null);
      return;
    }
    void resolveSession(user, mine);
  });

  return () => {
    stopped = true;
    unsubscribe();
  };
}

export async function redeemPairingToken(
  auth: Auth,
  customToken: string,
): Promise<void> {
  await signInWithCustomToken(auth, customToken);
}

export async function currentIdToken(
  auth: Auth,
  forceRefresh = false,
): Promise<string | null> {
  const user = auth.currentUser;
  return user ? user.getIdToken(forceRefresh) : null;
}

/**
 * Drop the session. Called when the server says this device was unpaired.
 *
 * Not offered as a button anywhere in any child UI: a child who can sign the
 * agent out has an off switch for their own parental controls.
 */
export async function endSession(auth: Auth): Promise<void> {
  await fbSignOut(auth);
}
