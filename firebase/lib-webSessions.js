// Drop in at: functions/lib/webSessions.js
//
// Kept out of authHelpers.js on purpose: http/webSession.js needs
// requireParentDevice from authHelpers, and authHelpers needs the validator
// below. Putting the shared piece in its own lib avoids the require cycle.

const { db } = require('./firebase');

const WEB_SESSIONS = 'parentWebSessions';
const WEB_CODES = 'parentWebCodes';

/**
 * How long a browser stays signed in after a phone approves it.
 *
 * Deliberately not "forever". The session doc is checked on every control
 * call, so revoking is instant, but an abandoned session on a shared computer
 * should also age out on its own.
 */
const WEB_SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * How long the QR code itself is good for. Shorter than the child pairing
 * code (5 min): that one is often read out over a phone call, this one is on
 * a screen the parent is already looking at.
 */
const WEB_CODE_TTL_MS = 3 * 60 * 1000;

/**
 * Validates the `roleHint: 'web'` half of a parent's authorisation.
 *
 * The ID token says which session it belongs to; this says whether that
 * session is still allowed to act. Both halves are required — a token alone
 * is not enough, which is what makes revocation immediate rather than
 * "whenever the token happens to expire".
 */
async function resolveWebSession(decodedToken) {
  const webSessionId =
    typeof decodedToken?.webSessionId === 'string'
      ? decodedToken.webSessionId
      : '';

  if (decodedToken?.roleHint !== 'web' || !webSessionId) {
    return null;
  }

  const snap = await db.collection(WEB_SESSIONS).doc(webSessionId).get();
  if (!snap.exists) {
    return null;
  }

  const data = snap.data() || {};

  if (data.status !== 'redeemed') {
    return null;
  }
  if (data.revokedAtMs) {
    return null;
  }
  if (
    typeof data.sessionExpiresAtMs === 'number' &&
    data.sessionExpiresAtMs < Date.now()
  ) {
    return null;
  }
  // The token was minted for the approving parent; a session that somehow
  // ends up paired with a different uid is not one to trust.
  if (data.grantedToUid && data.grantedToUid !== decodedToken.uid) {
    return null;
  }

  return { webSessionId, ...data };
}

module.exports = {
  WEB_SESSIONS,
  WEB_CODES,
  WEB_SESSION_TTL_MS,
  WEB_CODE_TTL_MS,
  resolveWebSession,
};
