import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as fbSignOut,
} from 'firebase/auth'
import { auth, isFirebaseConfigured } from '../lib/firebase.js'

const AuthContext = createContext({
  user: null,
  loading: false,
  configured: false,
  claims: null,
  canWrite: false,
})

/** Firebase error codes rendered as something a parent can act on. */
const MESSAGES = {
  'auth/invalid-email': 'That email address does not look right.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/user-not-found': 'No KidGate account uses that email.',
  'auth/wrong-password': 'Wrong email or password.',
  'auth/invalid-credential': 'Wrong email or password.',
  'auth/too-many-requests':
    'Too many attempts. Wait a few minutes and try again.',
  'auth/popup-closed-by-user': 'Sign-in window was closed before finishing.',
  'auth/cancelled-popup-request': 'Sign-in was cancelled.',
  'auth/popup-blocked':
    'Your browser blocked the sign-in window. Allow pop-ups for this site and try again.',
  'auth/account-exists-with-different-credential':
    'That email is already registered with a different sign-in method. Use the one you set up in the app.',
  'auth/operation-not-allowed':
    'That sign-in method is not enabled for this project yet.',
  'auth/unauthorized-domain':
    'This domain is not authorized in Firebase Authentication settings.',
  'auth/invalid-custom-token':
    'That sign-in link is no longer valid. Show a new QR code.',
  'web/rejected': 'The request was declined on the phone.',
  'web/expired': 'The code expired. Generate a new one.',
}

export function describeAuthError(error) {
  if (!error) return null
  const code = error.code || ''
  return MESSAGES[code] || error.message || 'Something went wrong. Try again.'
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [claims, setClaims] = useState(null)
  const [loading, setLoading] = useState(isFirebaseConfigured)

  useEffect(() => {
    if (!isFirebaseConfigured) return
    return onAuthStateChanged(auth, async (next) => {
      setUser(next)
      // The write capability rides in the token, not in browser storage: a
      // session approved by scanning the QR with a paired parent phone carries
      // roleHint 'web'. Reading it here means nothing sensitive is ever stored
      // locally, and revoking the session server-side takes effect on the next
      // token refresh at the latest.
      if (next) {
        try {
          const result = await next.getIdTokenResult()
          setClaims(result.claims || null)
        } catch {
          setClaims(null)
        }
      } else {
        setClaims(null)
      }
      setLoading(false)
    })
  }, [])

  const value = useMemo(
    () => ({
      user,
      claims,
      loading,
      configured: isFirebaseConfigured,
      canWrite: claims?.roleHint === 'web',

      signInWithGoogle: () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        return signInWithPopup(auth, provider)
      },

      signInWithApple: () => {
        const provider = new OAuthProvider('apple.com')
        provider.addScope('email')
        provider.addScope('name')
        return signInWithPopup(auth, provider)
      },

      signInWithEmail: (email, password) =>
        signInWithEmailAndPassword(auth, email.trim(), password),

      /** Redeems the custom token the phone's approval produced. */
      signInWithQrToken: (customToken) =>
        signInWithCustomToken(auth, customToken),

      resetPassword: (email) => sendPasswordResetEmail(auth, email.trim()),

      signOut: () => fbSignOut(auth),

      /** Fresh ID token for the Cloud Functions control endpoints. */
      getIdToken: () => (auth.currentUser ? auth.currentUser.getIdToken() : null),
    }),
    [user, claims, loading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
