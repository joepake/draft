import type { FirestorePort } from '@kidgate/ports/firestore';

/** Firestore commits at most 500 operations per batch. */
const BATCH_LIMIT = 500;

/**
 * Delete many documents in batched commits.
 *
 * The alternative — `Promise.all(ids.map(id => db.deleteDoc(...)))` — is one
 * network request per document: slow when clearing a device with a long
 * history, and prone to leaving the collection half-deleted on a flaky
 * connection.
 *
 * Takes ids plus their collection path rather than references, because
 * `FirestorePort` is path-based: a reference object is the part of a Firestore
 * SDK that differs most, and a REST implementation has none to hand back.
 */
export async function deleteAllInBatches(
  db: FirestorePort,
  collectionPath: string,
  ids: readonly string[],
): Promise<void> {
  for (let index = 0; index < ids.length; index += BATCH_LIMIT) {
    const batch = db.batch();
    for (const id of ids.slice(index, index + BATCH_LIMIT)) {
      batch.delete(`${collectionPath}/${id}`);
    }
    await batch.commit();
  }
}
