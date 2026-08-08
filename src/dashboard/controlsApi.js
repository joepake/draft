import { addDoc, collection, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, functionsBaseUrl } from '../lib/firebase.js'

/**
 * Parent write actions.
 *
 * Two different authorisations are in play, and they are not interchangeable:
 *
 *  - **Firestore rules** gate on `request.auth.uid` alone. Anything the rules
 *    allow a family member to write, the browser can write directly. Check-Ins
 *    are the only parent action in that category, so they work from any
 *    signed-in session.
 *
 *  - **The control Cloud Functions** call `requireParentDevice`, which on a
 *    phone means a `deviceCredential` held in the Keychain. A browser proves
 *    the same thing differently: a session approved by scanning the QR with an
 *    already-paired parent phone carries `roleHint: 'web'` in its ID token,
 *    and the server validates the backing session doc on every call. Nothing
 *    secret is stored in the browser, and revoking the session takes effect
 *    immediately server-side.
 *
 * `canWrite` therefore comes from the token claims, not from local storage.
 */

/**
 * `messageKey` is set for failures raised here, where the wording is ours to
 * translate. Errors relayed from the Cloud Function carry only `message` —
 * that text comes from the server and is shown as received.
 */
export class ControlError extends Error {
  constructor(message, code, messageKey) {
    super(message)
    this.code = code
    this.messageKey = messageKey
  }
}

async function callFunction(name, body, getIdToken) {
  if (!functionsBaseUrl) {
    throw new ControlError(
      'Cloud Functions URL is not configured (VITE_FIREBASE_FUNCTIONS_URL).',
      'config/missing-functions-url',
      'authError.noFunctionsUrl',
    )
  }

  const token = await getIdToken()
  if (!token) {
    throw new ControlError(
      'Your session expired. Sign in again.',
      'auth/no-token',
      'authError.sessionExpired',
    )
  }

  const res = await fetch(`${functionsBaseUrl}/${name}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })

  const payload = await res.json().catch(() => ({}))
  if (!res.ok || payload.ok === false) {
    throw new ControlError(
      payload.error || `Request failed (${res.status})`,
      payload.code,
    )
  }
  return payload
}

export function createActions({ familyId, getIdToken, canWrite }) {
  return {
    canWrite: Boolean(canWrite),

    /**
     * Check-In is a plain Firestore write — the rules allow any family member
     * to create one, so it works from the browser with no device credential.
     * Mirrors SafetyCheckInRepository.createRequest: any earlier pending
     * check-in for the device is marked missed first, so the parent never sees
     * two open requests for one child.
     */
    async sendCheckIn(device, { requirePhoto = true, requireLocation = true } = {}) {
      const ref = collection(db, 'users', familyId, 'safetyCheckIns')
      const existing = await getDocs(ref)
      await Promise.all(
        existing.docs
          .filter((d) => {
            const e = d.data()
            return (
              e.deviceId === device.id &&
              e.kind !== 'repair' &&
              e.status === 'pending'
            )
          })
          .map((d) =>
            updateDoc(d.ref, {
              status: 'missed',
              respondedAt: serverTimestamp(),
            }),
          ),
      )

      await addDoc(ref, {
        deviceId: device.id,
        deviceName: device.name,
        kind: 'safety',
        status: 'pending',
        requirePhoto,
        requireLocation,
        createdAt: serverTimestamp(),
      })
    },

    setLock: (deviceId, locked) =>
      callFunction(
        'setDeviceLock',
        { deviceId, locked, familyOwnerUserId: familyId },
        getIdToken,
      ),

    updateControls: (deviceId, controls) =>
      callFunction(
        'updateDeviceControls',
        { deviceId, controls, familyOwnerUserId: familyId },
        getIdToken,
      ),

    resolveTimeRequest: (requestId, approved) =>
      callFunction(
        'resolveTimeRequest',
        { requestId, approved, familyOwnerUserId: familyId },
        getIdToken,
      ),

    resolveRewardClaim: (taskId, approved) =>
      callFunction(
        'resolveRewardClaim',
        { taskId, approved, familyOwnerUserId: familyId },
        getIdToken,
      ),
  }
}
