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
| `/dashboard/demo` | Same dashboard with sample data, no sign-in |
| `/support` | Support page (App Store / Play Store support URL) |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/delete-account` | Account deletion (Google Play data-deletion URL) |

`vercel.json` rewrites every path to `index.html`, so deep links do not 404.

## Dashboard data

`/dashboard/demo` reads `src/dashboard/demoData.js` and needs no backend — it
stays working on a preview deploy with no environment variables.

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

1. **Firebase Console → Project settings → Your apps → Web.** Create a web app
   if there isn't one, then copy its config into the environment variables
   listed in `.env.example` (locally: copy it to `.env`).

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

5. **Vercel → Settings → Environment Variables.** Add the same `VITE_FIREBASE_*`
   values. They are build-time variables, so redeploy after changing them.

Without any of this the dashboard still loads and shows a sign-in screen that
says Firebase is not configured, and `/dashboard/demo` is unaffected.

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
(`functions/lib/authHelpers.js`), which demands a `parentDeviceId` plus a
`deviceCredential` — a per-device secret minted by `ensureDeviceCredential` and
kept in the phone's Keychain, with only its SHA-256 hash in Firestore. Every
one of these needs it:

```
updateDeviceControls   setDeviceLock        resolveTimeRequest
createRewardTask       updateRewardTask     resolveRewardClaim
setParentPin
```

A browser has no such credential, so the dashboard shows those controls as
read-only and says so, rather than failing on click.

### Enrolling the browser is a decision, not a task

`ensureDeviceCredential` would happily mint a parent credential for a web
session — a valid parent ID token is all it checks. The reason this repo does
not do that: the credential is a long-lived bearer secret that can unlock a
child's phone and clear every limit. On a phone it lives in the Keychain; in a
browser it would live in `localStorage`/`sessionStorage`, reachable by any XSS
on the domain, with no rotation story and no way for a parent to see or revoke
the extra "device". The comment in `functions/http/deviceAuth.js` shows the
same threat being reasoned about for child tokens.

If you decide a browser should be enrollable, the wiring is already in place:
store `{ parentDeviceId, deviceCredential }` under the `kidgate.parentDeviceCredential`
key that `readDeviceCredential()` reads, and every action in `controlsApi.js`
starts working unchanged. Worth pairing with a short credential TTL and a
visible "signed-in browsers" list in the app before shipping it.
