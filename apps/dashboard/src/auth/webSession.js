import { functionsBaseUrl } from '../lib/firebase.js';

/**
 * QR sign-in: the browser opens a session, shows the short code as a QR, and
 * an already-paired parent phone scans and approves it.
 *
 * The split matters. The QR carries only the short `code`, which is what the
 * phone needs to find the session. The `sessionId` is a UUID that never leaves
 * this browser, and the custom token is handed out only to a caller that knows
 * it — so someone who photographs the screen cannot take over the sign-in.
 * Same shape as the app's existing child pairing handshake.
 */

const POLL_INTERVAL_MS = 2000;

/*
 * One code per tab, held until it expires.
 *
 * The screen renders the QR as the first thing a parent sees, so the mint is no
 * longer behind a button press that could only happen once. Without a cache,
 * every remount — StrictMode's double mount, a language switch changing `start`'s
 * identity, a parent navigating back — would mint another `parentWebSessions`
 * document and burn one of the 30-per-15-minutes `createParentWebSession` allows.
 *
 * `sessionStorage`, never `localStorage`: the `sessionId` is the half that
 * redeems the custom token, and it is deliberately the half that never leaves
 * this browser. Per-tab storage dies with the tab, so a shared computer does not
 * keep a redeemable session behind for the next person. A second tab minting its
 * own code is correct, not waste.
 *
 * Reusing a code is safe because redemption is one-shot server-side: once
 * `pollParentWebSession` hands the token out it writes `status: 'redeemed'` and
 * every later poll answers `expired`.
 */
const SESSION_CACHE_KEY = 'kg.webSignInSession';

/*
 * A code with only seconds left is worse than no code — the parent gets the
 * phone out and the QR dies mid-scan. Below this, mint a fresh one instead.
 */
const CACHE_MIN_REMAINING_MS = 20_000;

/** In-flight mint, so two callers in the same tick share one request. */
let pendingCreate = null;

function readCachedSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      typeof parsed?.sessionId !== 'string' ||
      typeof parsed?.code !== 'string' ||
      typeof parsed?.expiresAtMs !== 'number'
    ) {
      return null;
    }
    if (parsed.expiresAtMs - Date.now() < CACHE_MIN_REMAINING_MS) return null;
    return parsed;
  } catch {
    // Storage is unavailable in some privacy modes. A tab that cannot cache
    // still signs in; it just mints per mount, which is where this started.
    return null;
  }
}

function writeCachedSession(session) {
  try {
    sessionStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(session));
  } catch {
    /* see readCachedSession */
  }
}

/** Drop the cached code once it can no longer be redeemed. */
export function clearWebSession() {
  try {
    sessionStorage.removeItem(SESSION_CACHE_KEY);
  } catch {
    /* see readCachedSession */
  }
}

async function post(name, body, headers) {
  if (!functionsBaseUrl) {
    const err = new Error(
      'Cloud Functions URL is not configured (VITE_FIREBASE_FUNCTIONS_URL).',
    );
    err.code = 'config/missing-functions-url';
    throw err;
  }

  const res = await fetch(`${functionsBaseUrl}/${name}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  });

  const payload = await res.json().catch(() => ({}));
  if (!res.ok || payload.ok === false) {
    const err = new Error(payload.error || `Request failed (${res.status})`);
    err.code = payload.code;
    // The step-up needs more than the code: how many tries are left is the
    // difference between "try again" and "you have one left".
    err.attemptsRemaining = payload.attemptsRemaining;
    /*
     * How long a 429 lasts, read from the body rather than the `Retry-After`
     * header the same response also sets. That header is not CORS-safelisted, so
     * `headers.get` answers `null` for every cross-origin call — which is all of
     * them in production. The server states the number twice for this reason.
     */
    err.retryAfterMs =
      typeof payload.retryAfterMs === 'number' ? payload.retryAfterMs : undefined;
    throw err;
  }
  return payload;
}

export function createWebSession() {
  return post('createParentWebSession', {});
}

/**
 * The code this tab is showing — minted on the first call, reused after.
 *
 * Every caller should use this rather than `createWebSession`; the raw mint is
 * exported only because this wraps it.
 */
export function getOrCreateWebSession() {
  const cached = readCachedSession();
  if (cached) return Promise.resolve(cached);
  if (pendingCreate) return pendingCreate;

  pendingCreate = createWebSession()
    .then(created => {
      writeCachedSession(created);
      return created;
    })
    .finally(() => {
      pendingCreate = null;
    });

  return pendingCreate;
}

/**
 * The other way to unlock this browser: the family's Parent PIN, typed here.
 *
 * Resolves with the same custom token `waitForApproval` produces, because the
 * server mints the same kind of session — see `functions/http/parentWebStepUp.js`.
 * The caller is already signed in (that is what grants read), so this one call
 * carries the ID token; every other endpoint in this file is reached before
 * there is a session to send.
 *
 * The PIN is sent once and never stored. What comes back and persists is the
 * session, which the parent can revoke from the phone.
 */
export function stepUpWithPin({ pin, familyOwnerUserId, idToken }) {
  return post(
    'stepUpParentWebSession',
    { pin, familyOwnerUserId },
    { Authorization: `Bearer ${idToken}` },
  );
}

/**
 * Polls until the phone approves, rejects, or the code expires.
 * Resolves with the custom token; rejects with a coded error otherwise.
 *
 * **A hidden tab does not poll.** `pollParentWebSession` allows 60 requests a
 * minute per caller and a 2-second interval spends 30 of them, so two tabs left
 * open on this screen are the whole budget and the third request in a second is
 * a 429 on a screen that is doing nothing wrong. Nobody can scan a code they
 * cannot see, so a backgrounded tab waits for `visibilitychange` instead of a
 * timer and resumes where it left off.
 */
export function waitForApproval(sessionId, { signal } = {}) {
  return new Promise((resolve, reject) => {
    const doc = typeof document === 'undefined' ? null : document;
    let timer = null;
    let waitingForVisible = false;

    function onVisible() {
      if (doc?.hidden) return;
      doc?.removeEventListener('visibilitychange', onVisible);
      waitingForVisible = false;
      void tick();
    }

    const stop = () => {
      if (timer) clearTimeout(timer);
      timer = null;
      if (waitingForVisible) {
        doc?.removeEventListener('visibilitychange', onVisible);
        waitingForVisible = false;
      }
      signal?.removeEventListener('abort', onAbort);
    };

    function onAbort() {
      stop();
      const err = new Error('Cancelled');
      err.code = 'web/cancelled';
      reject(err);
    }

    signal?.addEventListener('abort', onAbort);

    async function tick() {
      if (signal?.aborted) return;
      if (doc?.hidden) {
        if (!waitingForVisible) {
          waitingForVisible = true;
          doc.addEventListener('visibilitychange', onVisible);
        }
        return;
      }
      try {
        const result = await post('pollParentWebSession', { sessionId });
        if (result.status === 'confirmed' && result.customToken) {
          stop();
          resolve(result.customToken);
          return;
        }
        if (result.status === 'rejected') {
          stop();
          const err = new Error('The request was declined on the phone.');
          err.code = 'web/rejected';
          reject(err);
          return;
        }
        if (result.status === 'expired') {
          stop();
          const err = new Error('The code expired. Generate a new one.');
          err.code = 'web/expired';
          reject(err);
          return;
        }
        timer = setTimeout(tick, POLL_INTERVAL_MS);
      } catch (e) {
        stop();
        reject(e);
      }
    }

    tick();
  });
}
