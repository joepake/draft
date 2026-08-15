/**
 * Calls to the Cloud Functions HTTP endpoints.
 *
 * A separate port from `FirestorePort` because it is a separate capability, and
 * because it is the contract for any client that has no Firestore SDK at all —
 * `native/windows-agent` will speak only this. See `docs/DATA_MODEL.md`.
 *
 * **Authentication is the adapter's job, not the caller's.** The legacy
 * repositories assembled a device-credential payload themselves and spread it
 * into every request body, which meant each one also had to implement the
 * stale-credential recovery dance — re-register the parent device, retry once.
 * `TimeRequestRepository.resolveRequest` and `ControlRepository.updateControls`
 * carried the same recovery, and a comment in one pointed at the other. An
 * adapter knows how its platform holds credentials; a repository does not need
 * to.
 */

import type { JsonValue } from '@kidgate/schema/primitives';

export type ApiErrorCode =
  | 'network'
  | 'unauthenticated'
  | 'staleCredential'
  | 'forbidden'
  | 'notFound'
  | 'conflict'
  | 'rateLimited'
  | 'server'
  | 'unknown';

/**
 * A failed call, carrying a code rather than a rendered message.
 *
 * `messageKey` is an i18n key the caller renders in the reader's language.
 * A repository must never produce display text: the same failure is shown to a
 * parent in the app, logged by a Cloud Function, and possibly emailed — three
 * readers, potentially three languages, one error.
 */
export interface ApiFailure {
  code: ApiErrorCode;
  /** i18n key, when the server supplied one. */
  messageKey?: string;
  /** Raw server message, for logs only. Never render this. */
  detail?: string;
  status?: number;
}

export interface ApiCallOptions {
  /**
   * Which credential the endpoint expects. The adapter attaches it.
   *
   * - `parent` / `child` — the account's ID token **plus** this device's stored
   *   credential, which is what proves the request came from this device and
   *   not from anything else holding the family's token.
   * - `session` — the ID token alone. For the endpoint that *issues* the device
   *   credential: it cannot present one, and it is not unauthenticated either.
   *   Conflating this with `none` sends no `Authorization` header at all and
   *   the call fails as unauthenticated, which is a confusing way to discover
   *   that a device has no credential yet.
   * - `none` — endpoints that authenticate by payload alone. Child pairing is
   *   the whole set: the device has no session yet, by definition.
   */
  as: 'parent' | 'child' | 'session' | 'none';
  signal?: AbortSignal;
}

export interface ApiPort {
  /**
   * POST a JSON body, returning the parsed response.
   *
   * Rejects with an `ApiFailure` (not an `Error` carrying a sentence). The
   * adapter is responsible for retrying once on `staleCredential` before it
   * gives up, since only it can refresh the credential.
   */
  post<T>(
    path: string,
    body: Record<string, JsonValue>,
    options: ApiCallOptions,
  ): Promise<T>;
}

/*
 * The `isApiFailure` narrowing helper lives in `@kidgate/core/domain/apiFailure`.
 * This package emits no runtime code — a type guard is a function, and one
 * exception is how that rule stops being a rule.
 */
