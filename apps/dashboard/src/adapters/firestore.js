import { createFirestoreAdapter as createWebFirestoreAdapter } from '@kidgate/core/adapters/firestoreWeb';
import { db } from '../lib/firebase.js';

/**
 * The web `FirestorePort` adapter lives in `@kidgate/core/adapters/firestoreWeb`
 * now — one implementation for every browser-engine surface, shared with
 * `apps/desktop`. What stays here is this deployment's one quirk:
 *
 * The SDK handle is null until the deployment carries a Firebase config, so it
 * is read per call rather than captured at wiring time. `apps/site` shares this
 * package layout and must keep building with no config at all.
 */
export function createFirestoreAdapter() {
  return createWebFirestoreAdapter(() => {
    if (!db) {
      throw Object.assign(new Error('Firebase is not configured.'), {
        code: 'failedPrecondition',
      });
    }
    return db;
  });
}
