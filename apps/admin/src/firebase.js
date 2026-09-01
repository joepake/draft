import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

/**
 * Auth only — no Firestore, no Storage.
 *
 * The absent imports are the point: this app cannot read a document even by
 * mistake, because it has no handle to do it with.
 */
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
