/**
 * One Firestore failure, however the SDK spelled it.
 *
 * A pure string mapping, so it lives in `domain/` rather than in `adapters/` —
 * which also means an app may import it without the boundary rule that keeps
 * React Native away from the browser adapters. That rule is about the firebase
 * JS SDK reaching a Metro bundle; this file imports nothing.
 *
 * It was `firestoreWeb`'s private function until there was a second adapter.
 * `apps/tv`'s RNFB adapter arrived with its own table and it was **wrong in both
 * directions**: it invented five codes the port does not have
 * (`unauthenticated`, `alreadyExists`, `aborted`, `cancelled`,
 * `resourceExhausted`) and it forgot that RNFB prefixes everything with
 * `firestore/`, so every real code fell through to `unknown`.
 *
 * The prefix strip is why one function serves both SDKs: RNFB says
 * `firestore/permission-denied`, the JS SDK says `permission-denied`, and the
 * five codes the port keeps are the five a caller actually branches on.
 *
 * **`permissionDenied` is not the same as `notFound` and `@kidgate/core` depends
 * on that**: a revoked secondary parent sees their listener fail with
 * permission-denied rather than with an absent document, and treating the two
 * alike would leave a removed parent holding a live session.
 */

import type { FirestoreError, FirestoreErrorCode } from '@kidgate/ports/firestore';

export function normalizeFirestoreCode(raw: unknown): FirestoreErrorCode {
  const code = typeof raw === 'string' ? raw.replace(/^firestore\//, '') : '';
  switch (code) {
    case 'permission-denied':
      return 'permissionDenied';
    case 'unavailable':
      return 'unavailable';
    case 'not-found':
      return 'notFound';
    case 'failed-precondition':
      return 'failedPrecondition';
    default:
      /*
       * Everything else — `aborted`, `cancelled`, `resource-exhausted`,
       * `deadline-exceeded`, `unauthenticated` — is `unknown` on purpose. The
       * port keeps four named codes because those are the four a caller changes
       * behaviour on; widening the union to mirror the SDK would hand every
       * caller branches it has no answer for, and a transient `aborted` dressed
       * up as its own code invites a retry loop somebody has to write twice.
       */
      return 'unknown';
  }
}

export function toFirestoreError(error: unknown): FirestoreError {
  const source = error as { code?: unknown; message?: unknown };
  const normalized = new Error(
    typeof source?.message === 'string' ? source.message : 'Firestore error',
  ) as FirestoreError;
  normalized.code = normalizeFirestoreCode(source?.code);
  return normalized;
}
