# KidGate web

Marketing site, legal pages, and the parent dashboard for KidGate.

```bash
npm install
npm run dev
```

## Routes

| Path | What it is |
|---|---|
| `/` | Landing page |
| `/dashboard` | Parent dashboard — signs in against the KidGate Firebase project |
| `/support` | Support page (App Store / Play Store support URL) |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/delete-account` | Account deletion (Google Play data-deletion URL) |

`vercel.json` rewrites every path to `index.html`, so deep links do not 404.

## Dashboard data

`/dashboard` reads live Firestore through `src/dashboard/useFamilyData.js`. The
paths mirror the app's `src/constants/FirestorePaths.ts` exactly:

```
users/{familyId}                                  family root (familyId = owner uid)
users/{familyId}/members/{memberUid}              secondary parents
users/{familyId}/childDevices/{deviceId}
users/{familyId}/childDevices/{deviceId}/usageDays
users/{familyId}/childDevices/{deviceId}/webHistory
users/{familyId}/activities | timeRequests | sosAlerts | safetyCheckIns | rewardTasks
```

A secondary parent keeps their own uid and stores the family they joined in
`users/{ownUid}.memberFamilyId`; resolving that is the first thing the hook does.

No Firestore rules change is needed — the existing rules gate on
`request.auth.uid` and the `roleHint: 'child'` claim, neither of which is
platform-specific, so a parent signing in on the web gets exactly the access
they have in the app.

## Setup for live data

The KidGate project pair:

| | Project | Sender id | Storage bucket |
|---|---|---|---|
| Production | `kidgate` | `847735427015` | `kidgate.firebasestorage.app` |
| Dev | `joevideotube` | `679132409416` | `joevideotube.appspot.com` |

Cloud Functions run in `asia-southeast1` (`functions/index.js`,
overridable with `FUNCTIONS_REGION`).

`.env.example` is pre-filled for production; only `VITE_FIREBASE_API_KEY` and
`VITE_FIREBASE_APP_ID` are blank, because they only exist once a **Web** app is
registered.

1. **Firebase Console → Project settings → Your apps → Add app → Web.** Register
   a web app in the `kidgate` project (the mobile app's Android/iOS entries do
   not produce a usable web config). Copy `apiKey` and `appId` from the snippet
   it shows.

2. **Firebase Console → Authentication → Settings → Authorized domains.** Add
   the Vercel production domain and any preview domain that needs sign-in.
   Without this, Google and Apple pop-ups fail with
   `auth/unauthorized-domain`.

3. **Authentication → Sign-in method.** Enable Email/Password, Google, and
   Apple. Google on the web needs its own Web OAuth client ID — the Android and
   iOS client IDs do not work in a browser.

4. **Apple sign-in on the web** needs more than the iOS app does: an Apple
   **Services ID** (separate from the app's bundle ID), a verified domain and
   return URL, and a Sign in with Apple private key registered in Firebase. If
   that is not ready, leave Apple disabled — the button then reports
   `auth/operation-not-allowed`, and Google plus email still work.

5. **Vercel → Settings → Environment Variables.** Add the `VITE_FIREBASE_*`
   values. Vite inlines them at build time, so a redeploy is required after any
   change — editing a variable alone does nothing to the live site.

   Scope them per environment: point **Production** at `kidgate` and
   **Preview** at `joevideotube`, so a preview build can never read or write a
   real family's data. Every preview URL that should be able to sign in has to
   be listed in that project's authorized domains too, which is a good reason
   to keep sign-in on production only.

   Build settings need no changes — the Vite preset's defaults are correct
   (`npm run build`, output `dist`, install `npm install`), and `vercel.json`
   already rewrites all paths to `index.html` so `/dashboard` deep links work.

Without any of this the site still builds and serves; `/dashboard` shows a
sign-in screen saying Firebase is not configured.

## What the web can and cannot write

Two different authorisations are in play. `src/dashboard/controlsApi.js` is
built around the distinction.

**Firestore rules** gate on `request.auth.uid` only, so anything the rules let
a family member write, the browser can write. In practice that is Check-Ins:

```
users/{familyId}/safetyCheckIns    allow create, update: if isFamilyMember(userId)
```

Sending a Check-In from the dashboard works today, with no extra setup.

**The control Cloud Functions** additionally call `requireParentDevice`
(`functions/lib/authHelpers.js`), which on a phone means a `deviceCredential`
kept in the Keychain. Every one of these needs it:

```
updateDeviceControls   setDeviceLock        resolveTimeRequest
createRewardTask       updateRewardTask     resolveRewardClaim
setParentPin
```

### How a browser earns that

By QR sign-in: the browser shows a code, an already-paired parent phone scans
and approves, and the resulting session carries `roleHint: 'web'` in its ID
token. `src/auth/QrSignIn.jsx` drives it; `useAuth().canWrite` reads the claim.

Google, Apple and email sign-in stay **view-only** on purpose, so a parent
without their phone can still read reports and delete their account. The
dashboard shows the controls as read-only and says why, rather than failing on
click.

Why not simply store a device credential in the browser: it is a long-lived
bearer secret that can unlock a child's phone and clear every limit, and in a
browser it would sit in `localStorage` within reach of any XSS, with no
rotation and nothing for a parent to see or revoke. The token-claim approach
stores nothing locally, rotates hourly with the ID token, and is checked
against a live session document on every call — so revoking is immediate.

The Cloud Functions this depends on are in [`firebase/`](firebase/README.md),
not yet in the app repo. Until they are deployed the QR button reports a
missing endpoint and everything else works view-only.
