import type { ApiErrorCode } from '@kidgate/ports/api';

import { isApiFailure } from './apiFailure';

/**
 * Cloud Functions error code → app-pack translation key.
 *
 * Functions used to reply with English prose only, and the phone matched on
 * English substrings — so Vietnamese users saw raw English for anything not on
 * the list, and editing a message server-side silently broke the match. Codes
 * are stable contract; the copy lives in the locale files.
 *
 * **Here rather than in `apps/mobile`, because four clients call the same
 * endpoints.** The table lived in `apps/mobile/src/services/api/client.ts` and
 * nowhere else, so the desktop agent, the television and the extension each
 * answered every pairing failure with one fixed sentence — a rate limit, an
 * expired session and a dead network all read alike, and the TV said "no
 * network" for all three. Keys are the app pack's (`packages/i18n/src/locales`);
 * `apps/dashboard` renders the web pack and keeps its own mapping.
 *
 * A code missing from this table falls through to the caller's fallback key,
 * never to the server's English `error` string.
 */
export const API_ERROR_CODE_MESSAGES: Readonly<Record<string, string>> = {
  'billing/premium-required': 'errors.premiumSubscriptionRequired',
  'billing/device-limit-reached': 'errors.deviceLimitReached',
  /*
   * The free tier's own wall, not a fault: `requestChildLocation` allows
   * `FREE_LOCATION_REQUESTS_PER_DAY` looks a day and answers 429 past that.
   * Absent from this map it fell through to the server's English prose, so a
   * parent on any of the other thirteen languages met the limit in a language
   * they had not chosen — on the feature §5 calls the reason they open the app
   * daily.
   */
  'location/daily-limit-reached': 'errors.locationDailyLimitFree',
  // No longer sent since 2026-09-27 — a joiner's own plan stopped mattering —
  // but a deployment older than that still answers with it.
  'billing/premium-required-join': 'errors.trialEndedCannotJoinFamily',
  // Three parents without Premium, six with it (`maxParentsPerFamily`).
  'family/parent-limit': 'errors.parentLimitReached',
  'family/already-member': 'errors.alreadyInFamily',
  'family/leave-first': 'errors.leaveFamilyBeforeJoining',
  'family/not-member': 'errors.notFamilyMember',
  'family/not-created': 'errors.familyNotCreated',
  /*
   * A parked device refusing a rule that tightens. `updateDeviceControls` also
   * sends `messageKey` for this one — but only since 2026-09-18, and a phone
   * talking to an older deployment fell through to "try again", which is the
   * one thing that can never satisfy this refusal.
   */
  'parking/loosen-only': 'family.rulesTightenRefused',
  'rate/too-many-attempts': 'errors.tooManyRequests',
  'auth/child-token-forbidden': 'errors.childDeviceNotAllowed',
  'auth/child-credential-required': 'errors.deviceCredentialMissing',
  'auth/invalid-device-credential': 'errors.deviceCredentialMissing',
  'device/not-found': 'errors.deviceNotFound',
  'device/missing-id': 'errors.deviceNotFound',
  'device/not-child': 'errors.deviceNotFound',
  'pairing/parent-device-required': 'errors.registerParentDeviceFirst',
  'pairing/code-invalid-format': 'errors.pairingCodeFormat',
  'pairing/code-invalid': 'errors.unableToRedeemPairingCode',
  'pairing/code-used': 'errors.pairingCodeUsed',
  'pairing/code-expired-child': 'errors.pairingCodeExpiredChild',
  'pairing/code-expired-parent': 'errors.pairingCodeExpiredParent',
  'pairing/own-family': 'errors.pairingOwnFamily',
  'pairing/session-missing': 'errors.unableToPollChildPairing',
  'pairing/session-not-found': 'errors.pairingSessionNotFound',
  'pairing/session-invalid': 'errors.pairingSessionNotFound',
  'pairing/session-completed': 'errors.pairingAlreadyCompleted',
  'pairing/session-rejected': 'errors.pairingDeclined',
  'pairing/session-not-claimed': 'errors.pairingNoParentWaiting',
  'pairing/session-expired': 'errors.pairingRequestExpired',
  /*
   * Each endpoint's own fallback code (`functions/http/pairing.js`, the
   * `sendError` in every catch). Unmapped until 2026-09-25, so a server fault
   * during pairing reached the parent as the function's English sentence in
   * all fourteen languages. Each points at the sentence the client already
   * shows for that step failing.
   */
  'pairing/create-failed': 'errors.unableToCreatePairingCode',
  'pairing/session-create-failed': 'pairing.unableToCreateCode',
  'pairing/claim-failed': 'errors.unableToClaimChildPairing',
  'pairing/poll-failed': 'errors.unableToPollChildPairing',
  'pairing/device-id-required': 'errors.unableToConfirmChildPairing',
  'pairing/confirm-failed': 'errors.unableToConfirmChildPairing',
  'pairing/reject-failed': 'errors.unableToRejectChildPairing',
  'pairing/redeem-failed': 'errors.unableToJoinFamilyAccount',
  'pairing/resolve-failed': 'pairing.unableToResolveParentJoin',
  'pairing/join-not-found': 'errors.joinRequestNotFound',
  'pairing/join-resolved': 'errors.joinRequestResolved',
  'pairing/join-expired': 'errors.joinRequestExpired',
  'timeRequest/invalid': 'timeRequest.unableToSendRequest',
  'timeRequest/pending-exists': 'errors.timeRequestPendingExists',
  'timeRequest/cooldown': 'errors.timeRequestCooldown',
  'timeRequest/already-resolved': 'errors.timeRequestAlreadyResolved',
  'timeRequest/not-found': 'errors.timeRequestAlreadyResolved',
  'timeRequest/resolve-failed': 'timeRequest.unableToApproveRequest',
  'pin/invalid': 'pin.parentPinMustBeSixDigits',
  'pin/not-set': 'pin.askParentCreatePin',
  'pin/current-required': 'pin.enterCurrentParentPin',
  'pin/current-incorrect': 'pin.currentParentPinIncorrect',
  // A server fault, never a wrong PIN — the wrong PIN answers `valid: false`.
  'pin/verify-failed': 'pin.unableToCheckParentPin',
  'pin/set-failed': 'pin.unableToSaveParentPin',
  'webSession/not-found': 'webSignIn.notFound',
  'webSession/already-used': 'webSignIn.alreadyUsed',
  'webSession/expired': 'webSignIn.expired',
  'webSession/invalid': 'webSignIn.notFound',
  'usage/date-out-of-range': 'errors.deviceClockOutOfRange',
  'controls/invalid-payload': 'errors.somethingWentWrong',
  'controls/no-fields': 'errors.somethingWentWrong',
  'trial/unavailable': 'errors.somethingWentWrong',
  // Plumbing failures — a user can still hit these on a stale session, so they
  // need copy rather than the server's raw English `error` string.
  'request/method-not-allowed': 'errors.somethingWentWrong',
  'auth/token-missing': 'errors.notSignedInReopenApp',
  'auth/token-invalid': 'errors.notSignedInReopenApp',
  'auth/user-mismatch': 'errors.accountMismatchSignOut',
  'auth/credential-issue-failed': 'errors.deviceCredentialMissing',
  'location/invalid-payload': 'errors.somethingWentWrong',
  'location/sharing-disabled': 'errors.locationSharingDisabled',
  'location/child-no-push-token': 'errors.childDeviceNoPushToken',
  'location/request-failed': 'errors.unableToRequestLocation',
  'billing/invalid-purchase': 'errors.unableToVerifyPurchase',
  'billing/verify-failed': 'errors.unableToVerifyPurchase',
  'billing/no-purchases': 'errors.noPurchasesToRestore',
  'billing/no-active-subscription': 'errors.noActiveSubscription',
  'billing/restore-failed': 'errors.unableToRestorePurchases',
  /*
   * Unmapped until 2026-09-27, so each fell through to the caller's "Try
   * again" — or, on the axios path, to the server's English — for refusals no
   * retry can satisfy. Each points at the sentence that names what does.
   */
  // A joined parent's purchase or restore (`functions/http/subscriptions.js`).
  'billing/owner-only': 'plans.onlyOwnerCanSubscribe',
  // The active-task cap, free or paid (`functions/http/rewardTasks.js`).
  'rewardTask/too-many': 'errors.rewardTaskLimitReached',
  // Six location requests a minute per device (`functions/http/location.js`).
  'request/rate-limited': 'errors.tooManyRequests',
  // `generateWeeklyReport` (`functions/http/familyReport.js`); the same two
  // sentences `useFamilyReports` already shows for these refusals.
  'report/rate-limited': 'report.rateLimited',
  'report/no-usage': 'report.noUsage',
  // `grantBonusMinutes` only — a child's request cannot send this code.
  'timeRequest/invalid-minutes': 'errors.bonusMinutesOutOfRange',
  // `refreshChildSession` for a device removed while it was offline.
  'device/not-paired': 'errors.deviceNotPaired',
  // `requireParentDevice` for a phone signed out from another device.
  'auth/parent-device-revoked': 'settings.signedOutByAnotherDevice',
};

/**
 * The key for one server code, or `undefined` when the table has none.
 *
 * An own-property test, not a bare index: a lookup by an arbitrary string —
 * an `Error.message` below — must not answer `constructor` with a function.
 */
export function serverCodeMessageKey(code: string): string | undefined {
  return Object.prototype.hasOwnProperty.call(API_ERROR_CODE_MESSAGES, code)
    ? API_ERROR_CODE_MESSAGES[code]
    : undefined;
}

/**
 * The verdicts that carry their own sentence.
 *
 * Both are about the call rather than the feature, so they read correctly under
 * any caller — which is the whole test for belonging here. Deliberately only
 * two: `forbidden` collapses a Premium refusal and a scope refusal, and
 * answering both with "this needs Premium" would replace a vague sentence with
 * a wrong one.
 */
const CODE_MESSAGE_KEYS: Partial<Record<ApiErrorCode, string>> = {
  network: 'errors.noNetworkConnection',
  rateLimited: 'errors.tooManyRequests',
};

/**
 * A refused call as an app-pack i18n key. The caller renders it with its own
 * `t()` — this module never produces display text.
 *
 * Four sources, in this order:
 *
 * 1. **`messageKey`** — the server said why, in a key the reader's language can
 *    render. Nothing beats it.
 * 2. **`serverCode`**, through the table above — exact per endpoint, so unlike
 *    the verdict below it cannot collapse two reasons into a wrong sentence.
 * 3. **The verdict**, for `network` and `rateLimited` only.
 * 4. **`fallbackKey`** — what the screen would have said anyway.
 *
 * A plain `Error` whose message *is* a code is read as one:
 * `repositories/childPairing` throws `new Error('pairing/confirm-failed')` on a
 * reply with no token, and that is the same failure as the server's own
 * `pairing/confirm-failed`. Any other `Error` gets the fallback — its message
 * is SDK English, and a child reads these screens.
 */
export function apiErrorMessageKey(error: unknown, fallbackKey: string): string {
  if (isApiFailure(error)) {
    if (error.messageKey) {
      return error.messageKey;
    }
    const serverKey = error.serverCode
      ? serverCodeMessageKey(error.serverCode)
      : undefined;
    if (serverKey) {
      return serverKey;
    }
    return CODE_MESSAGE_KEYS[error.code] ?? fallbackKey;
  }
  if (error instanceof Error) {
    return serverCodeMessageKey(error.message) ?? fallbackKey;
  }
  return fallbackKey;
}
