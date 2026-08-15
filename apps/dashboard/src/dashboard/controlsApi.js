import { isApiFailure } from '@kidgate/core/domain/apiFailure';
import {
  trackCheckInRequest,
  trackDeviceLock,
  trackParentAction,
  trackRewardClaim,
  trackTimeRequest,
} from '../lib/analytics.js';
import {
  controlRepository,
  deviceRepository,
  rewardTaskRepository,
  safetyCheckInRepository,
  timeRequestRepository,
} from '../adapters/repositories.js';

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
 *
 * Every action below is a repository call. The hand-rolled `fetch` these used
 * to be ran in parallel with the same endpoints `apps/mobile` already called,
 * which is how the two ended up disagreeing about the wire contract — see the
 * note on `familyOwnerUserId` in `@kidgate/core/repositories/rewardTask`.
 */

/**
 * `messageKey` is set for every failure, because the reader is a parent and
 * `ApiFailure` deliberately carries a code rather than a sentence.
 *
 * The key the repository supplies cannot be used: those name entries in the
 * app's locale pack, and the web has its own key space (see
 * `packages/i18n/src/web/README.md`). Mapping the *code* is what crosses that
 * boundary — the code is the contract, the wording either side of it is not.
 */
const MESSAGE_KEYS = {
  network: 'controlError.network',
  unauthenticated: 'controlError.sessionExpired',
  staleCredential: 'controlError.sessionExpired',
  forbidden: 'controlError.forbidden',
  notFound: 'controlError.notFound',
  conflict: 'controlError.conflict',
  rateLimited: 'controlError.rateLimited',
  server: 'controlError.server',
  unknown: 'controlError.generic',
};

export class ControlError extends Error {
  constructor(code, messageKey, detail) {
    super(detail || code);
    this.code = code;
    this.messageKey = messageKey;
  }
}

/**
 * A repository rejects with an `ApiFailure` — a plain object with no `message`
 * — and with a `FirestoreError` for the writes that do not go through a Cloud
 * Function. Both become the one shape the dashboard's toast understands.
 */
function toControlError(error) {
  if (isApiFailure(error)) {
    return new ControlError(
      error.code,
      MESSAGE_KEYS[error.code] ?? MESSAGE_KEYS.unknown,
      error.detail,
    );
  }

  if (error?.code === 'permissionDenied') {
    return new ControlError(error.code, 'controlError.forbidden', error.message);
  }

  return new ControlError('unknown', MESSAGE_KEYS.unknown, error?.message);
}

async function guard(run) {
  try {
    return await run();
  } catch (error) {
    throw toControlError(error);
  }
}

/**
 * Run a control action and report how it ended.
 *
 * Wrapped here rather than at each screen because this is the one chokepoint
 * every parent write already passes through — `guard` normalises the two error
 * shapes on this path, and an analytics call at each of the five call sites
 * would be five chances to forget one.
 *
 * The rejection is re-thrown untouched. A screen renders `ControlError` through
 * its toast, and a measurement that ate the reason a lock failed would be worse
 * than no measurement.
 */
async function counted(run, report) {
  try {
    const result = await run();
    report('success');
    return result;
  } catch (error) {
    report('failed');
    throw error;
  }
}

export function createActions({ familyId, canWrite }) {
  return {
    canWrite: Boolean(canWrite),

    /**
     * Check-In is a plain Firestore write — the rules allow any family member
     * to create one, so it works from the browser with no device credential.
     * The repository marks any earlier pending check-in for the device as
     * missed first, so the parent never sees two open requests for one child.
     */
    sendCheckIn(device, { requirePhoto = true, requireLocation = true } = {}) {
      return counted(
        () =>
          guard(() =>
            safetyCheckInRepository.createRequest(familyId, {
              deviceId: device.id,
              deviceName: device.name,
              requirePhoto,
              requireLocation,
            }),
          ),
        trackCheckInRequest,
      );
    },

    setLock(deviceId, locked) {
      return counted(
        () => guard(() => deviceRepository.toggleLock(familyId, deviceId, locked)),
        // The direction matters: a family whose parent locks ten times and never
        // unlocks is a support case, not a happy one.
        result => trackDeviceLock(locked, result),
      );
    },

    updateControls(deviceId, controls) {
      return counted(
        () =>
          guard(() => controlRepository.updateControls(familyId, deviceId, controls)),
        /*
         * The control **keys**, never their values. Which switches parents
         * reach for is the question; what a particular family set their bedtime
         * to is a detail about a child and does not leave the system.
         */
        result =>
          trackParentAction(
            Object.keys(controls ?? {})
              .sort()
              .join(','),
            result,
          ),
      );
    },

    /**
     * The repository takes the request row for symmetry with the app, which has
     * one in hand; only `id` reaches the server. The dashboard's attention list
     * carries the id alone, so that is what is passed.
     */
    resolveTimeRequest(requestId, approved) {
      return counted(
        () =>
          guard(() =>
            timeRequestRepository.resolveRequest(familyId, { id: requestId }, approved),
          ),
        result => trackTimeRequest(approved ? 'approve' : 'deny', result),
      );
    },

    resolveRewardClaim(taskId, approved) {
      return counted(
        () =>
          guard(() => rewardTaskRepository.resolveClaim(familyId, taskId, approved)),
        result => trackRewardClaim(approved ? 'approve' : 'reject', result),
      );
    },
  };
}
