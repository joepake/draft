export const errors = {
  timeRequestAlreadyResolved: 'This request was already handled by another parent.',
  emailAlreadyInUse: 'This email is already registered.',
  invalidEmail: 'Invalid email address.',
  weakPassword: 'Password must be at least 6 characters.',
  invalidEmailOrPassword: 'Invalid email or password.',
  tooManyRequests: 'Too many attempts. Try again later.',
  somethingWentWrong: 'Something went wrong. Try again.',
  accountDisabled:
    'This account has been disabled. Contact KidGate support to restore it.',
  recentLoginRequired: 'For your security, sign in again, then try this once more.',
  accountExistsDifferentMethod:
    'This email already has an account with a different sign-in method. Sign in that way, then link this one in Settings.',
  unableToCreateAccount: 'Unable to create your account. Try again.',
  unableToSignIn: 'Unable to sign in. Try again.',
  unableToJoinFamilyAccount: 'Unable to join the family account. Try again.',
  enterEmailAddress: 'Enter your email address.',
  unableToCreatePairingCode: 'Unable to create a pairing code. Try again.',
  // Wrong-code first: the server answers a distinct code for a code that
  // expired recently (pairingCodeExpiredChild / ...Parent), so by the time
  // this one fires the code is usually mistyped, not stale.
  unableToRedeemPairingCode:
    'That code doesn’t match. Double-check the characters — or ask for a fresh code if it’s been a while.',
  unableToClaimChildPairing: 'Unable to connect the child device. Try again.',
  unableToPollChildPairing: 'Unable to check the pairing status. Try again.',
  unableToConfirmChildPairing: 'Unable to confirm this pairing. Try again.',
  unableToRejectChildPairing: 'Unable to decline this pairing. Try again.',
  photoCaptureCancelled: 'Photo capture was cancelled.',
  unableToOpenCamera:
    'Unable to open the camera. Allow Camera access in device Settings.',
  noPhotoCaptured: 'No photo was captured.',
  unableToOpenPhotoLibrary:
    'Unable to open your photos. Allow Photos access in device Settings.',
  simulatorCameraHint:
    'On the simulator, enable a camera first: Simulator menu → Camera → Front Camera, then try SOS again. For a real photo, test on a physical iPhone.',
  notSignedInReopenApp:
    'You are not signed in. Close and reopen the app, then try again.',
  accountMismatchSignOut: 'Account mismatch. Sign out and sign in again.',
  storageUploadUnauthorized:
    'Unable to upload the photo right now. Try again in a moment.',
  storageNotSetup: 'Unable to upload the photo right now. Try again in a moment.',
  noNetworkConnection:
    'No network connection. Check Wi‑Fi or mobile data and try again.',
  connectionFailedTitle: 'Connection failed',
  reconnect: 'Reconnect',
  unableToUploadPhoto: 'Unable to upload the photo. Try again.',
  premiumSubscriptionRequired:
    'This feature needs Premium. Every rule you set — limits, bedtime, app blocking, web filter, location and SOS — stays free.',
  trialEndedCannotJoinFamily:
    'Your free trial has ended. Subscribe to Premium to join another family.',
  // Server-reported failures. Keyed from Cloud Functions error codes in
  // src/services/api/client.ts — keep both languages in step.
  notFamilyMember:
    'You are no longer part of this family. Ask the family owner to invite you again.',
  familyNotCreated: 'Create your family first, then invite another parent.',
  parentLimitReached: 'This family already has as many parents as its plan allows.',
  childDeviceNotAllowed: 'This is a child device, so it cannot manage family settings.',
  deviceCredentialMissing:
    'This device needs to reconnect. Close and reopen KidGate, then try again.',
  deviceNotFound: 'That device is no longer in your family.',
  registerParentDeviceFirst:
    'Unable to set this phone up as a parent device. Check your connection and try again. If it keeps happening, sign out and sign in again.',
  pairingCodeFormat: 'Enter the 6-character code.',
  pairingCodeUsed: 'That code has already been used. Ask for a new one.',
  pairingCodeExpiredChild:
    'That code has expired. Ask your child to generate a new one.',
  pairingCodeExpiredParent:
    'That code has expired. Ask the other parent for a new one.',
  pairingOwnFamily: 'This is your own family — there is no need to join it.',
  pairingSessionNotFound: 'That pairing request is no longer available.',
  pairingAlreadyCompleted: 'This device is already paired.',
  pairingDeclined: 'The pairing request was declined on the other device.',
  pairingNoParentWaiting:
    'No parent is waiting to confirm. Start pairing from the parent device again.',
  pairingRequestExpired: 'That pairing request has expired. Start again.',
  joinRequestNotFound: 'That join request is no longer available.',
  joinRequestResolved: 'That join request has already been answered.',
  joinRequestExpired: 'That join request has expired. Ask for a new invite.',
  timeRequestPendingExists: 'You already have a request waiting for an answer.',
  timeRequestCooldown: 'Wait a moment before sending another request.',
  deviceClockOutOfRange:
    'The date and time on this device appear to be incorrect. Set them to update automatically.',
  locationSharingDisabled:
    'Location sharing is turned off for this device. Turn it on in the device settings, then try again.',
  childDeviceNoPushToken:
    'This child device cannot receive requests yet. Open KidGate on the child device and allow Notifications.',
  unableToRequestLocation:
    'Unable to request an updated location right now. Try again.',
  unableToVerifyPurchase: 'Unable to verify that purchase. Try again in a moment.',
  noPurchasesToRestore: 'There are no purchases to restore on this account.',
  noActiveSubscription: 'No active subscription was found for this account.',
  unableToRestorePurchases: 'Unable to restore your purchases right now. Try again.',
  alreadyInFamily: 'You are already in this family.',
  leaveFamilyBeforeJoining: 'Leave your current family before joining another.',
  locationDailyLimitFree:
    'The free plan has used up today’s location checks. Try again tomorrow — Premium follows their location live.',
  deviceLimitReached:
    'This family has reached the number of devices KidGate covers. Remove a device you no longer use, then try again.',
  // `rewardTask/too-many` — the cap on active tasks at once, free or paid.
  rewardTaskLimitReached:
    'There are already as many active tasks as allowed at once. Remove one or wait until one is done, then try again.',
  // `device/not-paired` — read by a child agent whose device was unpaired.
  deviceNotPaired:
    'This device is no longer paired with your family. Ask your parent to pair it again.',
  // `timeRequest/invalid-minutes` — a parent's direct grant outside the bounds.
  bonusMinutesOutOfRange:
    'That amount of extra time can’t be given at once. Choose a different amount and try again.',
};
