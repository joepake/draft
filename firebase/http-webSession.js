// Drop in at: functions/http/webSession.js
//
// QR sign-in for the web dashboard.
//
// The browser opens a session and shows the short code as a QR. An
// already-paired parent phone scans it and approves, and only then does the
// browser get a token that can change anything.
//
// Two properties do the real work:
//
//  - The QR carries only `code`. `sessionId` is a UUID that never leaves the
//    browser, and the custom token is handed out only to a caller that knows
//    it — so photographing the screen does not hand over the sign-in.
//
//  - Approval requires a parent *device credential*, i.e. a phone that is
//    already paired to the family. A stolen password cannot enrol a browser.
//
// Nothing secret is stored in the browser afterwards: the grant rides in the
// ID token's `roleHint` / `webSessionId` claims, and every control call
// re-checks the session doc, so revoking takes effect immediately.

const { onRequest } = require('firebase-functions/v2/https');
const { FieldValue } = require('firebase-admin/firestore');
const { auth, db } = require('../lib/firebase');
const { setCorsHeaders } = require('../lib/http');
const { createRateLimiter, clientKey } = require('../lib/rateLimit');
const { requireAuthUser, requireParentDevice } = require('../lib/authHelpers');
const { sendError } = require('../lib/errors');
const {
  WEB_SESSIONS,
  WEB_CODES,
  WEB_SESSION_TTL_MS,
  WEB_CODE_TTL_MS,
} = require('../lib/webSessions');

const crypto = require('crypto');

const CODE_LENGTH = 6;
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const createLimiter = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 30 });
const pollLimiter = createRateLimiter({ windowMs: 60 * 1000, max: 60 });
const approveLimiter = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 30 });

function generateCode() {
  let code = '';
  for (let i = 0; i < CODE_LENGTH; i += 1) {
    code += CODE_ALPHABET[crypto.randomInt(0, CODE_ALPHABET.length)];
  }
  return code;
}

function rejectRateLimited(res, result) {
  const retrySec = Math.ceil((result.retryAfterMs || 60_000) / 1000);
  res.set('Retry-After', String(retrySec));
  res.status(429).json({
    ok: false,
    code: 'rate/too-many-attempts',
    error: 'Too many attempts. Try again later.',
  });
}

function guard(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return false;
  }
  if (req.method !== 'POST') {
    res.status(405).json({
      ok: false,
      code: 'request/method-not-allowed',
      error: 'Method not allowed',
    });
    return false;
  }
  return true;
}

/* ------------------------------------------------------------------ */

exports.createParentWebSession = onRequest(async (req, res) => {
  if (!guard(req, res)) return;

  const limit = await createLimiter.checkShared(clientKey(req, 'createWebSession'));
  if (!limit.allowed) {
    rejectRateLimited(res, limit);
    return;
  }

  try {
    let code = generateCode();
    for (let attempt = 0; attempt < 8; attempt += 1) {
      const existing = await db.collection(WEB_CODES).doc(code).get();
      if (!existing.exists) break;
      code = generateCode();
    }

    const sessionId = crypto.randomUUID();
    const expiresAtMs = Date.now() + WEB_CODE_TTL_MS;

    await db.collection(WEB_SESSIONS).doc(sessionId).set({
      code,
      status: 'waiting',
      expiresAtMs,
      userAgent: String(req.get('user-agent') || '').slice(0, 200),
      createdAt: FieldValue.serverTimestamp(),
    });

    await db.collection(WEB_CODES).doc(code).set({
      sessionId,
      status: 'waiting',
      expiresAtMs,
      createdAt: FieldValue.serverTimestamp(),
    });

    res.json({ ok: true, sessionId, code, expiresAtMs });
  } catch (error) {
    console.error('createParentWebSession failed', error);
    sendError(res, 500, error, 'webSession/create-failed', 'Unable to start web sign-in');
  }
});

/* ------------------------------------------------------------------ */

/**
 * Called by the phone after scanning. Requires a paired parent device, which
 * is the whole point: possession of the phone, not knowledge of a password,
 * is what authorises a browser.
 */
exports.approveParentWebSession = onRequest(async (req, res) => {
  if (!guard(req, res)) return;

  const limit = await approveLimiter.checkShared(clientKey(req, 'approveWebSession'));
  if (!limit.allowed) {
    rejectRateLimited(res, limit);
    return;
  }

  const decodedToken = await requireAuthUser(req, res);
  if (!decodedToken) return;

  // Rejects child tokens, and requires parentDeviceId + deviceCredential.
  const parentDeviceId = await requireParentDevice(req, res, decodedToken);
  if (!parentDeviceId) return;

  const code =
    typeof req.body?.code === 'string' ? req.body.code.trim().toUpperCase() : '';
  const approve = req.body?.approve === true;

  if (!code) {
    res.status(400).json({
      ok: false,
      code: 'webSession/invalid',
      error: 'Missing code',
    });
    return;
  }

  try {
    const codeRef = db.collection(WEB_CODES).doc(code);
    const codeSnap = await codeRef.get();
    if (!codeSnap.exists) {
      res.status(404).json({
        ok: false,
        code: 'webSession/not-found',
        error: 'That code is not valid',
      });
      return;
    }

    const codeData = codeSnap.data() || {};
    if (codeData.status !== 'waiting') {
      res.status(409).json({
        ok: false,
        code: 'webSession/already-used',
        error: 'That code has already been used',
      });
      return;
    }
    if (typeof codeData.expiresAtMs === 'number' && codeData.expiresAtMs < Date.now()) {
      res.status(410).json({
        ok: false,
        code: 'webSession/expired',
        error: 'That code has expired',
      });
      return;
    }

    const sessionRef = db.collection(WEB_SESSIONS).doc(codeData.sessionId);

    if (!approve) {
      await Promise.all([
        sessionRef.set(
          { status: 'rejected', resolvedAt: FieldValue.serverTimestamp() },
          { merge: true },
        ),
        codeRef.set({ status: 'rejected' }, { merge: true }),
      ]);
      res.json({ ok: true, status: 'rejected' });
      return;
    }

    // The uid of the parent who scanned — never the family owner's.
    // A joined co-parent keeps their own uid and their own, narrower rights;
    // minting the owner's uid here would silently promote them.
    await Promise.all([
      sessionRef.set(
        {
          status: 'approved',
          grantedToUid: decodedToken.uid,
          approvedByParentDeviceId: parentDeviceId,
          sessionExpiresAtMs: Date.now() + WEB_SESSION_TTL_MS,
          resolvedAt: FieldValue.serverTimestamp(),
        },
        { merge: true },
      ),
      codeRef.set({ status: 'approved' }, { merge: true }),
    ]);

    res.json({ ok: true, status: 'approved' });
  } catch (error) {
    console.error('approveParentWebSession failed', error);
    sendError(res, 500, error, 'webSession/approve-failed', 'Unable to approve web sign-in');
  }
});

/* ------------------------------------------------------------------ */

/**
 * The browser polls with its private sessionId. The custom token is minted
 * here, once — a second poll after redemption gets nothing.
 */
exports.pollParentWebSession = onRequest(async (req, res) => {
  if (!guard(req, res)) return;

  const limit = await pollLimiter.checkShared(clientKey(req, 'pollWebSession'));
  if (!limit.allowed) {
    rejectRateLimited(res, limit);
    return;
  }

  const sessionId =
    typeof req.body?.sessionId === 'string' ? req.body.sessionId.trim() : '';
  if (!sessionId) {
    res.status(400).json({
      ok: false,
      code: 'webSession/invalid',
      error: 'Missing sessionId',
    });
    return;
  }

  try {
    const ref = db.collection(WEB_SESSIONS).doc(sessionId);
    const snap = await ref.get();
    if (!snap.exists) {
      res.json({ ok: true, status: 'expired' });
      return;
    }

    const data = snap.data() || {};

    if (data.status === 'rejected') {
      res.json({ ok: true, status: 'rejected' });
      return;
    }

    if (
      data.status === 'waiting' &&
      typeof data.expiresAtMs === 'number' &&
      data.expiresAtMs < Date.now()
    ) {
      res.json({ ok: true, status: 'expired' });
      return;
    }

    if (data.status !== 'approved') {
      // 'waiting' — keep polling. 'redeemed' — the token was already handed
      // out; a replay gets nothing.
      res.json({ ok: true, status: data.status === 'redeemed' ? 'expired' : 'waiting' });
      return;
    }

    const customToken = await auth.createCustomToken(data.grantedToUid, {
      roleHint: 'web',
      webSessionId: sessionId,
    });

    await ref.set(
      { status: 'redeemed', redeemedAt: FieldValue.serverTimestamp() },
      { merge: true },
    );

    res.json({ ok: true, status: 'confirmed', customToken });
  } catch (error) {
    console.error('pollParentWebSession failed', error);
    sendError(res, 500, error, 'webSession/poll-failed', 'Unable to check web sign-in');
  }
});

/* ------------------------------------------------------------------ */

/** Signed-in browsers, for the app's revocation screen. */
exports.listParentWebSessions = onRequest(async (req, res) => {
  if (!guard(req, res)) return;

  const decodedToken = await requireAuthUser(req, res);
  if (!decodedToken) return;

  const parentDeviceId = await requireParentDevice(req, res, decodedToken);
  if (!parentDeviceId) return;

  try {
    const snap = await db
      .collection(WEB_SESSIONS)
      .where('grantedToUid', '==', decodedToken.uid)
      .where('status', '==', 'redeemed')
      .get();

    const now = Date.now();
    const sessions = snap.docs
      .map((doc) => {
        const d = doc.data() || {};
        return {
          id: doc.id,
          userAgent: d.userAgent || '',
          sessionExpiresAtMs: d.sessionExpiresAtMs || 0,
          revoked: Boolean(d.revokedAtMs),
        };
      })
      .filter((s) => !s.revoked && s.sessionExpiresAtMs > now);

    res.json({ ok: true, sessions });
  } catch (error) {
    console.error('listParentWebSessions failed', error);
    sendError(res, 500, error, 'webSession/list-failed', 'Unable to list web sessions');
  }
});

/* ------------------------------------------------------------------ */

exports.revokeParentWebSession = onRequest(async (req, res) => {
  if (!guard(req, res)) return;

  const decodedToken = await requireAuthUser(req, res);
  if (!decodedToken) return;

  const parentDeviceId = await requireParentDevice(req, res, decodedToken);
  if (!parentDeviceId) return;

  const webSessionId =
    typeof req.body?.webSessionId === 'string' ? req.body.webSessionId.trim() : '';
  if (!webSessionId) {
    res.status(400).json({
      ok: false,
      code: 'webSession/invalid',
      error: 'Missing webSessionId',
    });
    return;
  }

  try {
    const ref = db.collection(WEB_SESSIONS).doc(webSessionId);
    const snap = await ref.get();
    if (!snap.exists || snap.data()?.grantedToUid !== decodedToken.uid) {
      res.status(404).json({
        ok: false,
        code: 'webSession/not-found',
        error: 'Session not found',
      });
      return;
    }

    await ref.set(
      { revokedAtMs: Date.now(), revokedAt: FieldValue.serverTimestamp() },
      { merge: true },
    );

    res.json({ ok: true });
  } catch (error) {
    console.error('revokeParentWebSession failed', error);
    sendError(res, 500, error, 'webSession/revoke-failed', 'Unable to revoke web session');
  }
});
