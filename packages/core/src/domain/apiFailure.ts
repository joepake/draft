import type { ApiErrorCode, ApiFailure } from '@kidgate/ports/api';

/**
 * Narrowing helper for `catch`, which hands back `unknown`.
 *
 * Lives here rather than beside the type because `@kidgate/ports` emits no
 * runtime code, and a type guard is a function.
 */
export function isApiFailure(value: unknown): value is ApiFailure {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as ApiFailure).code === 'string'
  );
}

/**
 * HTTP status to `ApiErrorCode`. The same table in every adapter.
 *
 * The endpoints are shared, so what a 409 means is a property of the server,
 * not of the client calling it. Each `ApiPort` adapter had its own copy of this
 * `if` ladder — three now, counting `apps/desktop` — and the failure mode of a
 * copy is that one of them quietly stops treating 429 as retryable while the
 * others still do.
 *
 * `undefined` means the request never got a response: no status is the
 * signature of a dead network, not of an unknown error.
 *
 * What stays in the adapter is **which server code means the credential went
 * stale**, because that genuinely differs: a phone holds a device credential in
 * the Keychain (`auth/invalid-device-credential`), a browser holds a session
 * (`auth/session-revoked`), and only the adapter can refresh either. Call this
 * after that check, not before.
 */
export function classifyHttpStatus(status: number | undefined): ApiErrorCode {
  if (status === undefined) {
    return 'network';
  }
  if (status === 401) {
    return 'unauthenticated';
  }
  if (status === 403) {
    return 'forbidden';
  }
  if (status === 404) {
    return 'notFound';
  }
  if (status === 409) {
    return 'conflict';
  }
  if (status === 429) {
    return 'rateLimited';
  }
  if (status >= 500) {
    return 'server';
  }
  return 'unknown';
}
