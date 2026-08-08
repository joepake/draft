import { addDoc, collection, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, functionsBaseUrl } from '../lib/firebase.js'

/**
 * Parent write actions.
 *
 * Two different authorisations are in play, and they are not interchangeable:
 *
 *  - **Firestore rules** gate on `request.auth.uid` alone. Anything the rules
 *    allow a family member to write, the browser can write directly. Check-Ins
 *    are the only parent action in that category.
 *
 *  - **The control Cloud Functions** additionally call `requireParentDevice`,
 *    which demands a `parentDeviceId` + `deviceCredential` pair minted by
 *    `ensureDeviceCredential` and kept in the phone's Keychain. A browser has
 *    no such credential, so locking a device, editing limits, approving time
 *    requests and resolving reward claims are unavailable from the web until
 *    someone decides how (and whether) a browser should be enrolled as a
 *    parent device. `hasDeviceCredential()` is the switch: supply a credential
 *    and every function below starts working unchanged.
 */

const CREDENTIAL_KEY = 'kidgate.parentDeviceCredential'

/** Reads an enrolled browser credential, if this deployment ever adds one. */
export function readDeviceCredential() {
  try {
    const raw = sessionStorage.getItem(CREDENTIAL_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed?.parentDeviceId && parsed?.deviceCredential ? parsed : null
  } catch {
    return null
  }
}

export function hasDeviceCredential() {
  return readDeviceCredential() !== null
}

export class ControlError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}

async function callFunction(name, body, getIdToken) {
  if (!functionsBaseUrl) {
    throw new ControlError(
      'Cloud Functions URL is not configured (VITE_FIREBASE_FUNCTIONS_URL).',
      'config/missing-functions-url',
    )
  }

  const credential = readDeviceCredential()
  if (!credential) {
    throw new ControlError(
      'This browser is not authorized to change device settings. Use the KidGate app on your phone.',
      'auth/no-device-credential',
    )
  }

  const token = await getIdToken()
  if (!token) {
    throw new ControlError('Your session expired. Sign in again.', 'auth/no-token')
  }

  const res = await fetch(`${functionsBaseUrl}/${name}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...body, ...credential }),
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

export function createActions({ familyId, getIdToken }) {
  return {
    canWrite: hasDeviceCredential(),

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
