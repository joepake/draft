import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import { trustedContactsCollection } from '@kidgate/schema/paths';
import {
  TRUSTED_CONTACTS_MAX,
  type TrustedContact,
} from '@kidgate/schema/trustedContact';
import { timestampToIso } from '../domain/firestoreValue';

function mapTrustedContact(doc: DocSnapshot): TrustedContact {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  return {
    id: doc.id,
    name: typeof data.name === 'string' ? data.name : '',
    email: typeof data.email === 'string' ? data.email : '',
    locale: typeof data.locale === 'string' ? data.locale : 'en',
    createdAt: timestampToIso(data.createdAt) ?? '',
  };
}

export interface TrustedContactRepositoryDeps {
  db: FirestorePort;
}

/**
 * The people emailed on an SOS. Parent-only; the child device never reads it.
 *
 * The cap is applied here and in the trigger's query, not in the rules — a
 * count-gated rule costs a read per write, and a sixth row that slips past a
 * race is simply never emailed.
 */
export function createTrustedContactRepository(deps: TrustedContactRepositoryDeps) {
  const { db } = deps;

  return {
    async add(
      userId: string,
      input: { name: string; email: string; locale: string },
    ): Promise<string> {
      const path = trustedContactsCollection(userId);
      const id = db.newId(path);
      await db.setDoc(`${path}/${id}`, {
        name: input.name,
        email: input.email,
        locale: input.locale,
        createdAt: db.fieldValues.serverTimestamp(),
      });
      return id;
    },

    async remove(userId: string, contactId: string): Promise<void> {
      await db.deleteDoc(`${trustedContactsCollection(userId)}/${contactId}`);
    },

    subscribe(
      userId: string,
      onContacts: (contacts: TrustedContact[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        trustedContactsCollection(userId),
        { orderBy: [['createdAt', 'asc']], limit: TRUSTED_CONTACTS_MAX },
        snapshot => onContacts(snapshot.docs.map(mapTrustedContact)),
        onError,
      );
    },
  };
}

export type TrustedContactRepository = ReturnType<
  typeof createTrustedContactRepository
>;
