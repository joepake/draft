import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as fbSignOut,
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../lib/firebase.js';
import { trackLogin, trackLogout } from '../lib/analytics.js';

const AuthContext = createContext({
  user: null,
  loading: false,
  configured: false,
  claims: null,
  canWrite: false,
});

/** Firebase error codes mapped to copy a parent can act on. */
const MESSAGE_KEYS = {
  'auth/invalid-email': 'authError.invalidEmail',
  'auth/user-disabled': 'authError.userDisabled',
  'auth/user-not-found': 'authError.userNotFound',
  'auth/wrong-password': 'authError.wrongPassword',
  'auth/invalid-credential': 'authError.wrongPassword',
  'auth/too-many-requests': 'authError.tooManyRequests',
  'auth/popup-closed-by-user': 'authError.popupClosed',
  'auth/cancelled-popup-request': 'authError.popupCancelled',
  'auth/popup-blocked': 'authError.popupBlocked',
  'auth/account-exists-with-different-credential': 'authError.accountExists',
  'auth/operation-not-allowed': 'authError.operationNotAllowed',
  'auth/unauthorized-domain': 'authError.unauthorizedDomain',
  'auth/invalid-custom-token': 'authError.invalidCustomToken',
  'web/rejected': 'authError.webRejected',
  'web/expired': 'authError.webExpired',
};

/**
 * Wrap a sign-in so its outcome is counted, and count a cancel as a cancel.
 *
 * The failure rate is the number this event exists for, and it is only
 * meaningful once a closed popup is separated from a rejected credential — a
 * parent who changed their mind is not an authentication that went wrong.
 * Firebase reports both as a rejection, distinguished only by the code.
 *
 * The error is always re-thrown: the screen renders it through
 * `describeAuthError`, and analytics must never swallow what the parent needs
 * to read.
 */
async function measured(method, run) {
  try {
    const result = await run();
    trackLogin(method, 'success');
    return result;
  } catch (error) {
    const cancelled =
      error?.code === 'auth/popup-closed-by-user' ||
      error?.code === 'auth/cancelled-popup-request';
    trackLogin(method, cancelled ? 'cancelled' : 'failed');
    throw error;
  }
}

/**
 * `t` is passed in rather than imported so the message is resolved at render
 * time — an error raised before a language switch still reads in the language
 * on screen after it.
 *
 * A code we do not recognise falls back to Firebase's own English message,
 * which at least names the failure, rather than to a generic line that hides it.
 */
export function describeAuthError(error, t) {
  if (!error) return null;
  const key = MESSAGE_KEYS[error.code || ''];
  if (key) return t(key);
  return error.message || t('authError.generic');
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [claims, setClaims] = useState(null);
  const [loading, setLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    return onAuthStateChanged(auth, async next => {
      setUser(next);
      // The write capability rides in the token, not in browser storage: a
      // session approved by scanning the QR with a paired parent phone carries
      // roleHint 'web'. Reading it here means nothing sensitive is ever stored
      // locally, and revoking the session server-side takes effect on the next
      // token refresh at the latest.
      if (next) {
        try {
          const result = await next.getIdTokenResult();
          setClaims(result.claims || null);
        } catch {
          setClaims(null);
        }
      } else {
        setClaims(null);
      }
      setLoading(false);
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      claims,
      loading,
      configured: isFirebaseConfigured,
      canWrite: claims?.roleHint === 'web',

      signInWithGoogle: () =>
        measured('google', () => {
          const provider = new GoogleAuthProvider();
          provider.setCustomParameters({ prompt: 'select_account' });
          return signInWithPopup(auth, provider);
        }),

      signInWithApple: () =>
        measured('apple', () => {
          const provider = new OAuthProvider('apple.com');
          provider.addScope('email');
          provider.addScope('name');
          return signInWithPopup(auth, provider);
        }),

      signInWithEmail: (email, password) =>
        measured('email', () =>
          signInWithEmailAndPassword(auth, email.trim(), password),
        ),

      /** Redeems the custom token the phone's approval produced. */
      signInWithQrToken: customToken =>
        measured('qr', () => signInWithCustomToken(auth, customToken)),

      resetPassword: email => sendPasswordResetEmail(auth, email.trim()),

      signOut: () => {
        trackLogout();
        return fbSignOut(auth);
      },

      /** Fresh ID token for the Cloud Functions control endpoints. */
      getIdToken: () => (auth.currentUser ? auth.currentUser.getIdToken() : null),
    }),
    [user, claims, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
