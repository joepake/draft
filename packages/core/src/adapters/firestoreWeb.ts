/**
 * `FirestorePort` over the `firebase` JS SDK — every browser-engine surface.
 *
 * One adapter serves `apps/desktop` (WKWebView / WebView2) and
 * `apps/dashboard`; it started as two nearly identical files, one per app,
 * which is the drift the migration exists to remove: the desktop copy
 * normalised error codes on every method while the dashboard copy only did so
 * on listeners, and neither knew.
 *
 * `apps/mobile` has its own adapter over `@react-native-firebase` — a
 * different SDK, deliberately a different file. Nothing React Native may
 * import this one; `dependency-cruiser` enforces it.
 *
 * Paths are strings throughout, never reference objects. That is the port's
 * doing and it is what lets `native/windows-agent` implement the same
 * interface over REST later, where there are no references to hand back.
 *
 * The handle arrives as `getDb` rather than as a `Firestore` value because the
 * dashboard builds and serves with **no Firebase config at all** (a preview
 * deploy has none) — its callback throws a `failedPrecondition` the first time
 * anything actually reads, instead of at wiring time.
 */

import {
  addDoc as fbAddDoc,
  collection,
  deleteDoc as fbDeleteDoc,
  deleteField,
  doc,
  documentId,
  getCountFromServer,
  getDoc as fbGetDoc,
  getDocs as fbGetDocs,
  increment,
  arrayRemove,
  arrayUnion,
  limit as fbLimit,
  onSnapshot,
  orderBy as fbOrderBy,
  query as fbQuery,
  runTransaction as fbRunTransaction,
  serverTimestamp,
  setDoc as fbSetDoc,
  startAfter as fbStartAfter,
  updateDoc as fbUpdateDoc,
  where as fbWhere,
  writeBatch,
  type DocumentData,
  type DocumentSnapshot,
  type Firestore,
  type Query,
  type QueryConstraint,
  type QuerySnapshot as FbQuerySnapshot,
} from 'firebase/firestore';

import type {
  DocData,
  DocSnapshot,
  FieldValues,
  FirestorePort,
  QuerySnapshot,
  QuerySpec,
  Transaction,
  Unsubscribe,
  WriteBatch,
} from '@kidgate/ports/firestore';
import { toFirestoreError } from '../domain/firestoreError';

/*
 * The code mapping and the error wrapper moved to
 * `@kidgate/core/domain/firestoreError` when `apps/tv` grew a second adapter and
 * wrote its own — with five codes the port does not have and no strip of RNFB's
 * `firestore/` prefix. The reasoning that used to sit here is in that file.
 */

function wrapDoc<T>(snapshot: DocumentSnapshot<DocumentData>): DocSnapshot<T> {
  return {
    id: snapshot.id,
    exists: snapshot.exists(),
    data: () => (snapshot.exists() ? (snapshot.data() as T) : undefined),
    // Load-bearing, not diagnostic: a cache-first snapshot taken right after a
    // write does not contain it yet, so "absent" is only a decision when it
    // came from the server. See `DocSnapshot.fromCache`.
    fromCache: snapshot.metadata.fromCache,
  };
}

function wrapQuery<T>(snapshot: FbQuerySnapshot<DocumentData>): QuerySnapshot<T> {
  return {
    docs: snapshot.docs.map(entry => wrapDoc<T>(entry)),
    empty: snapshot.empty,
  };
}

/** `'__name__'` is the port's spelling of "the document id". */
function fieldFor(field: string) {
  return field === '__name__' ? documentId() : field;
}

function constraintsFor(spec?: QuerySpec): QueryConstraint[] {
  if (!spec) {
    return [];
  }

  const constraints: QueryConstraint[] = [];

  for (const [field, op, value] of spec.where ?? []) {
    constraints.push(fbWhere(fieldFor(field), op, value));
  }
  for (const [field, direction] of spec.orderBy ?? []) {
    constraints.push(fbOrderBy(fieldFor(field), direction));
  }
  /*
   * `startAfter` after `orderBy`, always. Firestore resolves a cursor against
   * the query's ordering, so a cursor added before the ordering it refers to
   * either throws or silently paginates by document id — which reads as "the
   * second page is wrong" rather than as an error.
   */
  if (spec.startAfter) {
    constraints.push(fbStartAfter(...spec.startAfter));
  }
  if (spec.limit !== undefined) {
    constraints.push(fbLimit(spec.limit));
  }

  return constraints;
}

export function createFirestoreAdapter(getDb: () => Firestore): FirestorePort {
  function queryFor(path: string, spec?: QuerySpec): Query<DocumentData> {
    return fbQuery(collection(getDb(), path), ...constraintsFor(spec));
  }

  const fieldValues: FieldValues = {
    serverTimestamp: () => serverTimestamp(),
    increment: (by: number) => increment(by),
    arrayUnion: (...values: unknown[]) => arrayUnion(...values),
    arrayRemove: (...values: unknown[]) => arrayRemove(...values),
    delete: () => deleteField(),
  };

  return {
    async getDoc<T = DocData>(path: string): Promise<DocSnapshot<T>> {
      try {
        return wrapDoc<T>(await fbGetDoc(doc(getDb(), path)));
      } catch (error) {
        throw toFirestoreError(error);
      }
    },

    async setDoc(path: string, data: DocData, options?: { merge?: boolean }) {
      try {
        await fbSetDoc(doc(getDb(), path), data, { merge: options?.merge ?? false });
      } catch (error) {
        throw toFirestoreError(error);
      }
    },

    async updateDoc(path: string, data: DocData) {
      try {
        await fbUpdateDoc(doc(getDb(), path), data);
      } catch (error) {
        throw toFirestoreError(error);
      }
    },

    async deleteDoc(path: string) {
      try {
        await fbDeleteDoc(doc(getDb(), path));
      } catch (error) {
        throw toFirestoreError(error);
      }
    },

    async getDocs<T = DocData>(path: string, spec?: QuerySpec) {
      try {
        return wrapQuery<T>(await fbGetDocs(queryFor(path, spec)));
      } catch (error) {
        throw toFirestoreError(error);
      }
    },

    async addDoc(path: string, data: DocData): Promise<string> {
      try {
        const reference = await fbAddDoc(collection(getDb(), path), data);
        return reference.id;
      } catch (error) {
        throw toFirestoreError(error);
      }
    },

    newId(collectionPath: string): string {
      // `doc()` with no path mints an id locally and writes nothing — which is
      // the point: an SOS alert names its photo's Storage path after itself, so
      // the id has to exist before the document does.
      return doc(collection(getDb(), collectionPath)).id;
    },

    async countDocs(path: string, spec?: QuerySpec): Promise<number> {
      try {
        const snapshot = await getCountFromServer(queryFor(path, spec));
        return snapshot.data().count;
      } catch (error) {
        throw toFirestoreError(error);
      }
    },

    onDoc<T = DocData>(
      path: string,
      onNext: (snapshot: DocSnapshot<T>) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return onSnapshot(doc(getDb(), path), {
        next: snapshot => onNext(wrapDoc<T>(snapshot)),
        error: error => onError(toFirestoreError(error)),
      });
    },

    onQuery<T = DocData>(
      path: string,
      spec: QuerySpec,
      onNext: (snapshot: QuerySnapshot<T>) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return onSnapshot(queryFor(path, spec), {
        next: snapshot => onNext(wrapQuery<T>(snapshot)),
        error: error => onError(toFirestoreError(error)),
      });
    },

    batch(): WriteBatch {
      const underlying = writeBatch(getDb());
      const wrapper: WriteBatch = {
        set(path, data, options) {
          underlying.set(doc(getDb(), path), data, { merge: options?.merge ?? false });
          return wrapper;
        },
        update(path, data) {
          underlying.update(doc(getDb(), path), data);
          return wrapper;
        },
        delete(path) {
          underlying.delete(doc(getDb(), path));
          return wrapper;
        },
        async commit() {
          try {
            await underlying.commit();
          } catch (error) {
            throw toFirestoreError(error);
          }
        },
      };
      return wrapper;
    },

    async runTransaction<T>(handler: (tx: Transaction) => Promise<T>): Promise<T> {
      try {
        return await fbRunTransaction(getDb(), async transaction => {
          const wrapper: Transaction = {
            async get<D = DocData>(path: string) {
              return wrapDoc<D>(await transaction.get(doc(getDb(), path)));
            },
            set(path, data, options) {
              transaction.set(doc(getDb(), path), data, {
                merge: options?.merge ?? false,
              });
            },
            update(path, data) {
              transaction.update(doc(getDb(), path), data);
            },
            delete(path) {
              transaction.delete(doc(getDb(), path));
            },
          };
          return handler(wrapper);
        });
      } catch (error) {
        throw toFirestoreError(error);
      }
    },

    fieldValues,
  };
}
