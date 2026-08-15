/**
 * Sign-in. The least portable thing in the product — Apple's native flow, a web
 * popup, and a device redeeming a custom token have almost nothing in common
 * beyond producing a session.
 */

export type AuthProvider = 'apple' | 'google' | 'email';

/**
 * Roles as the *token* expresses them, which is not how the product describes
 * them. Read `CLAUDE.md` before touching this.
 *
 * A child device signs in under the family owner's uid and is distinguished
 * only by `roleHint === 'child'`. Possessing the owner's uid therefore does not
 * prove a request came from a parent, and `firestore.rules` checks both.
 */
export type RoleHint = 'parent' | 'child';

export interface AuthSession {
  uid: string;
  /** The family root this session belongs to. Equals `uid` for an owner and for a child device. */
  familyId: string;
  roleHint: RoleHint;
  email: string | null;
  /** True only for the single product operator. Never granted to a family. */
  isOperator: boolean;
}

export interface AuthPort {
  getSession(): Promise<AuthSession | null>;

  /**
   * Fires on sign-in, sign-out, and whenever claims change.
   *
   * Claim changes matter: an operator claim granted or revoked out of band does
   * not invalidate an existing session, so anything gated on `isOperator` has
   * to re-read rather than cache the first answer.
   */
  onSessionChange(listener: (session: AuthSession | null) => void): () => void;

  signIn(provider: AuthProvider): Promise<AuthSession>;

  /**
   * Child device pairing. Redeems a one-time code for a custom token minted by
   * a Cloud Function, which is the only way a device gets a `child` roleHint.
   */
  signInWithPairingCode(code: string): Promise<AuthSession>;

  signOut(): Promise<void>;

  /**
   * Current ID token, refreshed when near expiry.
   *
   * Background uploaders on the native side hold their own copy and cannot
   * refresh it themselves — whoever configures them owns handing down a new one
   * before the old expires.
   */
  getIdToken(forceRefresh?: boolean): Promise<string | null>;
}
