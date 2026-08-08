import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

/**
 * Whether the deployment carries a Firebase web config.
 *
 * The marketing site ships without one — the demo dashboard must keep working
 * on a preview deploy that has no environment variables, so every Firebase
 * import stays behind this flag rather than throwing at module load.
 */
export const isFirebaseConfigured = Boolean(
  config.apiKey && config.authDomain && config.projectId && config.appId,
)

/** Base URL of the Cloud Functions region, used for the control endpoints. */
export const functionsBaseUrl =
  import.meta.env.VITE_FIREBASE_FUNCTIONS_URL || ''

let app = null
let authInstance = null
let dbInstance = null

if (isFirebaseConfigured) {
  app = initializeApp(config)
  authInstance = getAuth(app)
  dbInstance = getFirestore(app)
}

export const auth = authInstance
export const db = dbInstance
export default app
