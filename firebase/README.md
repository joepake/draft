# Backend for QR sign-in

These files belong in the **KidGate app repo**, not here. They live in this
repo only because that repo had a lot of uncommitted work in progress when
they were written, and mixing a change to the auth boundary into someone
else's in-flight diff is a bad way to get it reviewed.

Copy them across when convenient, review, then deploy.

## What this adds

The web dashboard signs in by showing a QR code. An already-paired parent
phone scans it and approves, and only then does the browser receive a token
that can change anything.

Password / Google / Apple sign-in still work and stay **view-only** — a parent
whose phone is lost or broken can still read reports and delete their account.

Why this shape:

- **Possession, not knowledge.** Approving requires a parent device
  credential, so a stolen password cannot authorise a browser.
- **Nothing secret in the browser.** The grant is a `roleHint: 'web'` claim in
  the Firebase ID token, which the SDK rotates hourly. There is no long-lived
  unlock key sitting in `localStorage` for an XSS to steal.
- **Revocation is immediate.** Every control call re-reads the session doc, so
  revoking does not wait for a token to expire.
- **Shoulder-surfing the QR achieves nothing.** The QR carries only the short
  code. The `sessionId` is a UUID that never leaves the browser, and the custom
  token is only ever handed to a caller that knows it.

## Install

### 1. Copy the files

```
firebase/lib-webSessions.js   →  functions/lib/webSessions.js
firebase/http-webSession.js   →  functions/http/webSession.js
```

### 2. Export the endpoints

Wherever `functions/index.js` re-exports the other `http/` modules, add:

```js
exports.createParentWebSession = require('./http/webSession').createParentWebSession;
exports.approveParentWebSession = require('./http/webSession').approveParentWebSession;
exports.pollParentWebSession = require('./http/webSession').pollParentWebSession;
exports.listParentWebSessions = require('./http/webSession').listParentWebSessions;
exports.revokeParentWebSession = require('./http/webSession').revokeParentWebSession;
```

### 3. Teach `requireParentDevice` about web sessions

In `functions/lib/authHelpers.js`, add the import:

```js
const { resolveWebSession } = require('./webSessions');
```

Then, inside `requireParentDevice`, **after** the `isChildToken` check and
**before** it reads `parentDeviceId` from the body, insert:

```js
  // A browser approved by scanning the QR with a paired parent phone proves
  // itself with a token claim plus a live session doc, not a stored secret.
  const webSession = await resolveWebSession(decodedToken);
  if (webSession) {
    return `web:${webSession.webSessionId}`;
  }
```

Returning a string keeps every existing call site working unchanged — they
only test truthiness, and the ones that record who acted now record a value
that is clearly a browser rather than a phone.

### 4. Rules

`parentWebSessions` and `parentWebCodes` are written only by the Admin SDK.
Clients must never read them — the code doc maps a guessable 6-character code
to a `sessionId`, which is the secret half of the handshake. If your rules
file does not already deny unlisted collections, add:

```
match /parentWebSessions/{id} { allow read, write: if false; }
match /parentWebCodes/{code}  { allow read, write: if false; }
```

### 5. Index

`listParentWebSessions` filters on two equality fields, which Firestore serves
from single-field indexes — no composite index needed. If you later add an
ordering, add the composite index then.

### 6. App work

- **Scan screen.** Settings → "Sign in on the web" → camera → read
  `kidgate://web-signin?code=XXXXXX` → show a confirm dialog → POST
  `approveParentWebSession` with `{ code, approve, parentDeviceId, deviceCredential }`.
  The device credential is the same pair the app already sends to
  `updateDeviceControls`.
- **Sessions screen.** `listParentWebSessions` / `revokeParentWebSession`.
  Without this the grant is revocable in principle but not in practice, which
  is most of the reason this design is safer than storing a credential.

## Cleanup

Nothing prunes `parentWebSessions` or `parentWebCodes`. Expired code docs are
tiny but they accumulate; a scheduled function deleting docs where
`expiresAtMs < now - 1 day` (codes) and `sessionExpiresAtMs < now` (sessions)
is worth adding alongside whatever already prunes `childPairingCodes`.

## Web side

Already implemented in this repo and inert until the endpoints exist:

- `src/auth/webSession.js` — create / poll helpers
- `src/auth/QrSignIn.jsx` — QR, countdown, polling, custom-token sign-in
- `src/auth/AuthContext.jsx` — reads `roleHint` from the token, exposes `canWrite`
- `src/dashboard/controlsApi.js` — calls the control endpoints with the ID token

The dashboard shows the controls as view-only whenever `roleHint !== 'web'`,
so shipping the web side before the backend is harmless.
