import { isApiFailure } from '@kidgate/core/domain/apiFailure';
import {
  trackCheckInRequest,
  trackDeviceLock,
  trackParentAction,
  trackRewardClaim,
  trackSiteRequest,
  trackTimeRequest,
} from '../lib/analytics.js';
import {
  childRulesRepository,
  controlRepository,
  deviceRepository,
  familyPlacesRepository,
  familyRepository,
  parentInviteRepository,
  rewardTaskRepository,
  safetyCheckInRepository,
  siteRequestRepository,
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
  constructor(code, messageKey, detail, serverCode) {
    super(detail || code);
    this.code = code;
    this.messageKey = messageKey;
    /**
     * The server's own code, verbatim, when the body carried one — the same
     * field `ApiFailure.serverCode` is. `code` is the mapped verdict and
     * several server answers collapse into one member of it; a screen that
     * has to say something specific (the monitored-device cooldown is a
     * `rateLimited` with its own sentence) reads this.
     */
    this.serverCode = serverCode;
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
      /*
       * The server's own code first, where it names a sentence of its own. A
       * premium refusal is a 403 and therefore `forbidden`, whose sentence is
       * "sign in again by scanning the QR" — so a free family switching on a
       * Premium control was told their session had broken. The code is the
       * contract; the verdict it collapses into is not specific enough here.
       */
      error.serverCode === 'billing/premium-required'
        ? 'controlError.premiumRequired'
        : (MESSAGE_KEYS[error.code] ?? MESSAGE_KEYS.unknown),
      error.detail,
      error.serverCode,
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

export function createActions({ familyId, canWrite, isOwner = false }) {
  return {
    canWrite: Boolean(canWrite),
    /**
     * Renaming and unpairing are the owner's alone — the same rule
     * `apps/mobile`'s `useDevice` enforces, and `firestore.rules` enforces
     * again on `childDevices`. Exposed so the screen can hide the controls
     * from a joined co-parent rather than letting them fail on click.
     */
    isOwner: Boolean(isOwner),

    /**
     * Which device a free family keeps watching (`docs/PRICING.md` §6).
     *
     * Any parent, not only the owner: the endpoint asks for a parent device,
     * and a joined parent deciding which phone the family watches is not a
     * billing decision. The repository turns the cooldown into
     * `family.monitoredCooldown`, but that key is the app pack's and the
     * toast in `Dashboard.jsx` renders web keys — so the page reads
     * `serverCode` off the `ControlError` and says the sentence through
     * `appT` itself.
     */
    chooseMonitoredDevice(deviceId) {
      return counted(
        () => guard(() => deviceRepository.chooseMonitoredDevice(familyId, deviceId)),
        outcome => trackParentAction('choose_monitored_device', outcome),
      );
    },

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

    /**
     * Rename a child device. A plain Firestore write.
     *
     * **Owner-only is a product rule, not a rule the database enforces.**
     * `firestore.rules` allows the update to `isFamilyMember(userId) &&
     * isOwnChildDevice(deviceId)` plus a list of pinned fields — a joined
     * co-parent passes that, and so does the child device itself, which
     * authenticates under the owner's uid. What the rules guarantee is that
     * neither can touch `isLocked`, `parentPinVerifier`, the places or the
     * parent controls. The name is not in that list.
     *
     * So this check is the enforcement, not a convenience, and it is repeated
     * here rather than trusted to the screen: a stale render is exactly when a
     * co-parent's click arrives, and a throw says why where a silent no-op
     * would not. `apps/mobile`'s `useDevice` gates the same way, client-side.
     */
    renameDevice(deviceId, name) {
      if (!isOwner) {
        return Promise.reject(new ControlError('forbidden', 'controlError.forbidden'));
      }
      return counted(
        () =>
          guard(() => deviceRepository.updateChildDeviceName(familyId, deviceId, name)),
        result => trackParentAction('device_rename', result),
      );
    },

    /**
     * Unpair a device and delete everything hanging off it.
     *
     * **Eleven collections, client-side, with no transaction.** The cascade
     * list lives in `adapters/repositories.js` and must stay the phone's — a
     * partial one leaves rows that no screen shows, that the family is still
     * billed for, and that still read back to anyone who reconstructs the
     * path (`docs/BACKLOG.md`, "Four subcollections outlived every device
     * removal").
     *
     * Irreversible, so the screen asks first. This function does not: a
     * confirmation that lives in two places is one that can be skipped in one.
     */
    removeDevice(deviceId) {
      if (!isOwner) {
        return Promise.reject(new ControlError('forbidden', 'controlError.forbidden'));
      }
      return counted(
        () => guard(() => deviceRepository.deleteChildDevice(familyId, deviceId)),
        result => trackParentAction('device_remove', result),
      );
    },

    /**
     * Parent management: mint an invite, answer a join request, drop a member.
     *
     * **Owner only**, matching `FamilyDetailScreen` — a joined co-parent sees
     * the family and none of the admin affordances. The three endpoints ask
     * only for a signed-in parent, so the gate has to be here as well as in
     * the screen.
     *
     * The invite handshake is two-sided on purpose: the code produces a
     * pending request naming the device that redeemed it, and membership
     * exists only once the owner approves that. A leaked code is therefore not
     * an account.
     */
    createParentInvite() {
      if (!isOwner) {
        return Promise.reject(new ControlError('forbidden', 'controlError.forbidden'));
      }
      return counted(
        () => guard(() => parentInviteRepository.createCode()),
        result => trackParentAction('parent_invite_create', result),
      );
    },

    resolveParentJoin(requestId, approved) {
      if (!isOwner) {
        return Promise.reject(new ControlError('forbidden', 'controlError.forbidden'));
      }
      return counted(
        () => guard(() => parentInviteRepository.resolve(requestId, approved)),
        result =>
          trackParentAction(
            approved ? 'parent_join_approve' : 'parent_join_reject',
            result,
          ),
      );
    },

    removeParent(memberId) {
      if (!isOwner) {
        return Promise.reject(new ControlError('forbidden', 'controlError.forbidden'));
      }
      return counted(
        () => guard(() => familyRepository.removeMember(familyId, memberId)),
        result => trackParentAction('parent_remove', result),
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

    /**
     * The child-level half of updateControls: a device assigned to a child
     * routes its child-rule fields here — web filter, blocked hours,
     * location sharing — and the server fans them out to every sibling
     * (docs/FEASIBILITY.md, 2026-08-26). Writing the one device's controls
     * instead would be wiped by the next fan-out.
     */
    updateChildRules(childId, rules) {
      return counted(
        () => guard(() => childRulesRepository.updateRules(familyId, childId, rules)),
        result =>
          trackParentAction(
            Object.keys(rules ?? {})
              .sort()
              .join(','),
            result,
          ),
      );
    },

    /**
     * The child's shared daily budget.
     *
     * Not `updateChildRules({ dailyLimitMinutes })`: that writes the rule and
     * nothing else, and every agent locks on `controls.dailyLimitMinutes`, so
     * a budget saved alone is decoration until the next usage report catches
     * up. `setDailyBudget` does the rule plus the per-device seed, the pair
     * `ChildDetailScreen` has always done.
     */
    setChildBudget(childId, minutes, deviceIds) {
      return counted(
        () =>
          guard(() =>
            childRulesRepository.setDailyBudget(familyId, childId, minutes, deviceIds),
          ),
        result => trackParentAction('child_budget', result),
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

    /**
     * Approving appends the domain to that device's allow list, server-side —
     * nothing here knows about it. Same `{ id }` shape as the time request
     * above and for the same reason: only the id reaches the server.
     */
    resolveSiteRequest(requestId, approved) {
      return counted(
        () =>
          guard(() =>
            siteRequestRepository.resolveRequest(familyId, { id: requestId }, approved),
          ),
        result => trackSiteRequest(approved ? 'approve' : 'deny', result),
      );
    },

    resolveRewardClaim(taskId, approved) {
      return counted(
        () =>
          guard(() => rewardTaskRepository.resolveClaim(familyId, taskId, approved)),
        result => trackRewardClaim(approved ? 'approve' : 'reject', result),
      );
    },

    /**
     * The other half of reward tasks: the parent writing one, rather than
     * answering a claim about one.
     *
     * All three go straight to `@kidgate/core/repositories/rewardTask`, which
     * the phone already calls — the endpoint names, the `familyOwnerUserId`
     * field and the failure keys are its problem, not this app's. That
     * repository exists because a hand-rolled `fetch` here once disagreed with
     * the phone about the wire contract.
     *
     * Counted through `trackParentAction`, never `trackRewardClaim`: that
     * event answers "did the parent approve or reject a claim", and a created
     * task is neither.
     */
    createRewardTask(input) {
      return counted(
        () => guard(() => rewardTaskRepository.createTask(familyId, input)),
        result => trackParentAction('reward_task_create', result),
      );
    },

    updateRewardTask(taskId, changes) {
      return counted(
        () => guard(() => rewardTaskRepository.updateTask(familyId, taskId, changes)),
        result =>
          trackParentAction(
            `reward_task_update:${Object.keys(changes ?? {})
              .sort()
              .join(',')}`,
            result,
          ),
      );
    },

    deleteRewardTask(taskId) {
      return counted(
        () => guard(() => rewardTaskRepository.deleteTask(familyId, taskId)),
        result => trackParentAction('reward_task_delete', result),
      );
    },

    /**
     * The family's geofences, replaced whole.
     *
     * Whole-list rather than a patch because that is the endpoint's contract:
     * `updateFamilyPlaces` sanitises the list and fans it into every child
     * device, and a partial merge of geofences has no meaning a parent could
     * predict. The editor always holds the complete list.
     */
    updateFamilyPlaces(places) {
      return counted(
        () => guard(() => familyPlacesRepository.updatePlaces(familyId, places)),
        result => trackParentAction('places', result),
      );
    },
  };
}
