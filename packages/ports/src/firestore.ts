/**
 * Data access, expressed so that one repository runs under
 * `@react-native-firebase` on mobile, the `firebase` JS SDK on the web, and
 * plain REST on a platform with no SDK at all (Windows).
 *
 * Paths are strings, not reference objects. Reference objects are the part of
 * every Firestore SDK that differs most, and a REST implementation has none to
 * hand back. `'users/abc/childDevices/xyz'` is the same on all three.
 */

export type DocData = Record<string, unknown>;

export interface DocSnapshot<T = DocData> {
  id: string;
  exists: boolean;
  /** Undefined when the document is missing. Never an empty object. */
  data(): T | undefined;
  /**
   * True when this came from the local cache rather than the server.
   *
   * Load-bearing, not diagnostic: a cache-first snapshot taken right after a
   * write does not contain it yet, so code that treats "absent" as a decision —
   * "this parent was removed from the family" — must only trust that from the
   * server. An implementation with no cache reports false.
   */
  fromCache: boolean;
}

export interface QuerySnapshot<T = DocData> {
  docs: DocSnapshot<T>[];
  empty: boolean;
}

export type WhereOp =
  | '=='
  | '!='
  | '<'
  | '<='
  | '>'
  | '>='
  | 'in'
  | 'not-in'
  | 'array-contains'
  | 'array-contains-any';

/**
 * A field name, or `'__name__'` to mean the document id.
 *
 * `'__name__'` is Firestore's own internal path for the id, and every SDK
 * exposes it as `FieldPath.documentId()`. Spelling it as a string keeps this
 * package free of runtime code — an adapter recognises the literal and
 * substitutes its SDK's sentinel.
 */
export type QueryField = string;

export interface QuerySpec {
  // Readonly: a spec is input the adapter reads, never mutates, so a caller
  // may build one with `as const` without casting it back.
  where?: ReadonlyArray<readonly [field: QueryField, op: WhereOp, value: unknown]>;
  orderBy?: ReadonlyArray<readonly [field: QueryField, direction: 'asc' | 'desc']>;
  limit?: number;
  startAfter?: readonly unknown[];
}

export type Unsubscribe = () => void;

/**
 * Normalised failure codes for listeners and reads.
 *
 * Adapters map their SDK's spelling onto these — RNFB says
 * `firestore/permission-denied`, the JS SDK says `permission-denied`, REST
 * returns 403. Callers that branch on a failure branch on this, never on a
 * message string.
 */
export type FirestoreErrorCode =
  'permissionDenied' | 'unavailable' | 'notFound' | 'failedPrecondition' | 'unknown';

export interface FirestoreError extends Error {
  code: FirestoreErrorCode;
}

/**
 * Server-computed values. Opaque tokens, not values — an implementation
 * translates them to whatever its SDK expects, and REST turns them into
 * transform operations.
 */
export interface FieldValues {
  serverTimestamp(): unknown;
  increment(by: number): unknown;
  arrayUnion(...values: unknown[]): unknown;
  arrayRemove(...values: unknown[]): unknown;
  delete(): unknown;
}

export interface WriteBatch {
  set(path: string, data: DocData, options?: { merge?: boolean }): WriteBatch;
  update(path: string, data: DocData): WriteBatch;
  delete(path: string): WriteBatch;
  commit(): Promise<void>;
}

export interface Transaction {
  get<T = DocData>(path: string): Promise<DocSnapshot<T>>;
  set(path: string, data: DocData, options?: { merge?: boolean }): void;
  update(path: string, data: DocData): void;
  delete(path: string): void;
}

export interface FirestorePort {
  getDoc<T = DocData>(path: string): Promise<DocSnapshot<T>>;
  setDoc(path: string, data: DocData, options?: { merge?: boolean }): Promise<void>;
  updateDoc(path: string, data: DocData): Promise<void>;
  deleteDoc(path: string): Promise<void>;

  getDocs<T = DocData>(path: string, query?: QuerySpec): Promise<QuerySnapshot<T>>;

  /** Add with a generated id. Resolves to the new document id. */
  addDoc(path: string, data: DocData): Promise<string>;

  /**
   * A fresh document id, without writing anything.
   *
   * Needed when the id is part of what gets written — an SOS alert names its
   * photo's Storage path after itself, so the id has to exist before the
   * document does.
   */
  newId(collectionPath: string): string;

  /**
   * Count matching documents without reading them.
   *
   * A server-side aggregation: one billed read regardless of collection size.
   * The alternative — fetching documents to call `.length` — is what makes a
   * retention sweep cost more as the data it is pruning grows.
   */
  countDocs(path: string, query?: QuerySpec): Promise<number>;

  /**
   * Live document subscription.
   *
   * `onError` is required, not optional. A Firestore listener that loses
   * permission — the usual cause being a rule change or a family membership
   * being revoked — fails asynchronously, long after the call that started it.
   * Swallowing that error leaves a parent staring at stale data believing it is
   * live, which for a location screen is worse than an obvious failure.
   */
  onDoc<T = DocData>(
    path: string,
    onNext: (snapshot: DocSnapshot<T>) => void,
    onError: (error: Error) => void,
  ): Unsubscribe;

  onQuery<T = DocData>(
    path: string,
    query: QuerySpec,
    onNext: (snapshot: QuerySnapshot<T>) => void,
    onError: (error: Error) => void,
  ): Unsubscribe;

  batch(): WriteBatch;
  runTransaction<T>(handler: (tx: Transaction) => Promise<T>): Promise<T>;

  readonly fieldValues: FieldValues;
}
