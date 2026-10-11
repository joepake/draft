/**
 * The one read of `config/setupGuides`.
 *
 * Same shape as `releaseConfig`: a world-readable document, no collaborators,
 * no session — `firestore.rules` allows `config/{docId}` to be read by anyone
 * and written by nobody, which is what lets a child device that has just been
 * paired fetch this before anything else is set up.
 *
 * Absent is the expected state, not an error: the document does not exist until
 * the operator publishes the first recording, and every step's answer until
 * then is "no button".
 */

import type { FirestorePort } from '@kidgate/ports/firestore';
import { SETUP_GUIDES_DOC, type SetupGuidesConfig } from '@kidgate/schema/setupGuide';

export async function fetchSetupGuides(
  db: FirestorePort,
): Promise<SetupGuidesConfig | null> {
  try {
    const snapshot = await db.getDoc<SetupGuidesConfig>(SETUP_GUIDES_DOC);
    return snapshot.data() ?? null;
  } catch {
    // Swallowed for the same reason `fetchLatestBuilds` swallows its reads: a
    // project where the document was never created and a phone with no signal
    // are both ordinary, and the honest answer to both is "nothing to show".
    return null;
  }
}
