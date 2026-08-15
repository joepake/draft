/**
 * `ApiPort` over `fetch`, for the Cloud Functions HTTP endpoints.
 *
 * One transport for every surface that has `fetch` — `apps/desktop` and
 * `apps/dashboard` today. The two used to carry their own copies, and the
 * copies had already drifted: the dashboard never learned that a 403 on a call
 * carrying a device credential means the credential went stale, and the
 * desktop never learned that some endpoints answer 200 with
 * `{ ok: false, error }`. Both rules are true of the same endpoints, so both
 * now live here.
 *
 * **What stays per app is how the surface proves who it is** — that is the
 * difference the port exists to absorb, and it arrives as `ApiCredentials`:
 *
 * - `apps/desktop` holds a device credential (Keychain / Credential Manager)
 *   and re-registers it on `reissue`.
 * - `apps/dashboard` has no device credential at all — the QR-approved web
 *   session *is* the credential, `roleHint: 'web'`, validated server-side per
 *   call — so both field providers are null and `reissue` just says "retry";
 *   the retry's forced ID-token refresh is the browser's re-issue.
 *
 * Authentication is this file's job, not the caller's. `ApiPort` says so, and
 * the reason is in `docs/MIGRATION.md`: when each repository assembled its own
 * credential payload, each also had to implement the stale-credential retry,
 * and four copies of that retry drifted into disagreeing about which failures
 * were retryable.
 */

import type {
  ApiCallOptions,
  ApiErrorCode,
  ApiFailure,
  ApiPort,
} from '@kidgate/ports/api';
import type { JsonValue } from '@kidgate/schema/primitives';
import { classifyHttpStatus, isApiFailure } from '../domain/apiFailure';

/** What this surface can prove about itself. */
export interface ApiCredentials {
  /**
   * Firebase ID token for the signed-in account, or null when signed out.
   * `forceRefresh` is true on the retry after the server refused the last one.
   */
  idToken(forceRefresh: boolean): Promise<string | null>;

  /**
   * Body fields proving the child role — `{ deviceId, childDeviceId,
   * deviceCredential }` — or null while the device holds none yet. **Both
   * spellings of the id, because the endpoints read both**: the guard is
   * `childDeviceId !== deviceId` and it refuses with 401 when either is
   * missing. Sending only `deviceId` is a silent 401 on every child-scoped
   * call. **The whole provider is null on
   * a surface that can never be a child device** (a browser): the adapter
   * then refuses `as: 'child'` outright rather than silently calling a
   * child-scoped endpoint with parent authority — the mix-up
   * `docs/DATA_MODEL.md` warns about.
   */
  childFields: (() => Promise<Record<string, JsonValue> | null>) | null;

  /**
   * Body fields proving the parent role — `{ parentDeviceId,
   * deviceCredential }` — or the provider itself null when the session alone
   * is the proof (the web dashboard).
   */
  parentFields: (() => Promise<Record<string, JsonValue> | null>) | null;

  /**
   * Recover after the server rejected this surface's credential. Resolve true
   * to retry once; false when recovery is impossible — a revoked device, or
   * no network. The adapter retries exactly once and then gives up rather
   * than looping against a server that will keep saying no.
   */
  reissue(as: 'parent' | 'child'): Promise<boolean>;
}

export interface HttpApiAdapterOptions {
  /** e.g. `https://asia-southeast1-joevideotube.cloudfunctions.net` */
  baseUrl: string;
  credentials: ApiCredentials;
  /** Injected for tests; defaults to the global. */
  fetchImpl?: typeof fetch;
  /** Surface-specific copy for failures this adapter raises itself. */
  messageKeys?: { unauthenticated?: string };
}

function failure(
  code: ApiErrorCode,
  extra?: { messageKey?: string; detail?: string; status?: number },
): ApiFailure {
  return {
    code,
    ...(extra?.messageKey === undefined ? {} : { messageKey: extra.messageKey }),
    ...(extra?.detail === undefined ? {} : { detail: extra.detail }),
    ...(extra?.status === undefined ? {} : { status: extra.status }),
  };
}

/**
 * Status + server code to `ApiErrorCode`.
 *
 * Two spellings of "your credential went stale", both structural rather than
 * textual on purpose — the endpoints answer with bare sentences ("Not a
 * parent device"), and matching those strings is the exact bug
 * `docs/MIGRATION.md` records being removed from four repositories:
 *
 * - a named server code for a dead web session;
 * - a 403 on a call that actually carried a device credential. A 403 without
 *   one is a real refusal and stays `forbidden`.
 *
 * Every other status is the shared table: the phone and the browser call the
 * same endpoints, so what a 409 means is not one surface's to decide.
 */
function codeFor(
  status: number,
  serverCode: string | null,
  hadDeviceCredential: boolean,
): ApiErrorCode {
  if (serverCode === 'auth/session-revoked' || serverCode === 'auth/session-expired') {
    return 'staleCredential';
  }
  if (status === 403 && hadDeviceCredential) {
    return 'staleCredential';
  }
  return classifyHttpStatus(status);
}

export function createHttpApiAdapter(options: HttpApiAdapterOptions): ApiPort {
  const doFetch = options.fetchImpl ?? fetch;
  const base = options.baseUrl.replace(/\/$/, '');

  async function attempt<T>(
    path: string,
    body: Record<string, JsonValue>,
    callOptions: ApiCallOptions,
    forceRefresh: boolean,
  ): Promise<T> {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };

    if (callOptions.as !== 'none') {
      const idToken = await options.credentials.idToken(forceRefresh);
      if (!idToken) {
        const messageKey = options.messageKeys?.unauthenticated;
        throw failure(
          'unauthenticated',
          messageKey === undefined ? undefined : { messageKey },
        );
      }
      headers.Authorization = `Bearer ${idToken}`;
    }

    let credentialFields: Record<string, JsonValue> = {};
    if (callOptions.as === 'child') {
      if (!options.credentials.childFields) {
        throw failure('forbidden', {
          detail: 'No child credential exists on this surface.',
        });
      }
      credentialFields = (await options.credentials.childFields()) ?? {};
    } else if (callOptions.as === 'parent' && options.credentials.parentFields) {
      credentialFields = (await options.credentials.parentFields()) ?? {};
    }
    const hadDeviceCredential = Object.keys(credentialFields).length > 0;

    const payload = { ...body, ...credentialFields };

    let response: Response;
    try {
      response = await doFetch(`${base}${path}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
        ...(callOptions.signal ? { signal: callOptions.signal } : {}),
      });
    } catch (error) {
      // No response at all: offline, DNS, a captive portal. Retrying a
      // credential would not help, so this never becomes staleCredential.
      throw failure('network', { detail: String(error) });
    }

    const text = await response.text();
    let parsed: unknown = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      parsed = null;
    }

    const envelope = (parsed ?? {}) as {
      ok?: unknown;
      code?: unknown;
      messageKey?: unknown;
      error?: unknown;
    };

    // Some endpoints answer 200 with `{ ok: false, error }` rather than a
    // status code, so a failure has to be read out of the body too.
    if (!response.ok || envelope.ok === false) {
      throw failure(
        codeFor(
          response.status,
          typeof envelope.code === 'string' ? envelope.code : null,
          hadDeviceCredential,
        ),
        {
          status: response.status,
          ...(typeof envelope.messageKey === 'string'
            ? { messageKey: envelope.messageKey }
            : {}),
          // For logs only. Never rendered — see `ApiFailure`.
          ...(typeof envelope.error === 'string' ? { detail: envelope.error } : {}),
        },
      );
    }

    return parsed as T;
  }

  /** Anything a credential callback threw that is not already shaped. */
  function normalize(error: unknown): ApiFailure {
    return isApiFailure(error) ? error : failure('network', { detail: String(error) });
  }

  return {
    async post<T>(
      path: string,
      body: Record<string, JsonValue>,
      callOptions: ApiCallOptions,
    ): Promise<T> {
      try {
        return await attempt<T>(path, body, callOptions, false);
      } catch (error) {
        const apiError = normalize(error);
        /*
         * `session` presents no device credential, so there is nothing stale
         * to re-issue — and re-issuing from inside the call that issues one
         * is a loop. `none` carries nothing at all.
         */
        if (callOptions.as === 'none' || callOptions.as === 'session') {
          throw apiError;
        }
        if (apiError.code === 'staleCredential') {
          /*
           * One retry, and only after the credential was actually re-issued.
           * Retrying without a new credential just asks the same rejected
           * question again, and on a rate-limited endpoint it costs the child
           * their next legitimate attempt.
           */
          const reissued = await options.credentials.reissue(callOptions.as);
          if (!reissued) {
            throw apiError;
          }
          try {
            return await attempt<T>(path, body, callOptions, true);
          } catch (retryError) {
            throw normalize(retryError);
          }
        }
        if (apiError.code === 'unauthenticated') {
          /*
           * An expired ID token is this surface's other stale credential —
           * the forced refresh is the recovery, and a still-signed-out
           * account throws again before any request is sent.
           */
          try {
            return await attempt<T>(path, body, callOptions, true);
          } catch (retryError) {
            throw normalize(retryError);
          }
        }
        throw apiError;
      }
    },
  };
}
