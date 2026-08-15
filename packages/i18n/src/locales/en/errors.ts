export const errors = {
  timeRequestAlreadyResolved: 'This request was already handled by another parent.',
  emailAlreadyInUse: 'This email is already registered.',
  invalidEmail: 'Invalid email address.',
  weakPassword: 'Password must be at least 6 characters.',
  invalidEmailOrPassword: 'Invalid email or password.',
  tooManyRequests: 'Too many attempts. Try again later.',
  somethingWentWrong: 'Something went wrong. Try again.',
  unableToCreateAccount: 'Unable to create your account. Try again.',
  unableToSignIn: 'Unable to sign in. Try again.',
  unableToJoinFamilyAccount: 'Unable to join the family account. Try again.',
  enterEmailAddress: 'Enter your email address.',
  unableToCreatePairingCode: 'Unable to create a pairing code. Try again.',
  unableToRedeemPairingCode: 'That pairing code is incorrect or has expired.',
  unableToClaimChildPairing: 'Unable to connect the child device. Try again.',
  unableToPollChildPairing: 'Unable to check the pairing status.',
  unableToConfirmChildPairing: 'Unable to confirm this pairing. Try again.',
  unableToRejectChildPairing: 'Unable to decline this pairing. Try again.',
  photoCaptureCancelled: 'Photo capture was cancelled.',
  unableToOpenCamera:
    'Unable to open the camera. Allow Camera access in device Settings.',
  noPhotoCaptured: 'No photo was captured.',
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
  connectionFailedBody:
    'KidGate could not connect. Check Wi‑Fi or mobile data, then select Reconnect.',
  reconnect: 'Reconnect',
  unableToUploadPhoto: 'Unable to upload the photo. Try again.',
  premiumSubscriptionRequired:
    'This feature needs Premium. Daily Limit, Blocked Hours, location and SOS stay free.',
  trialEndedCannotJoinFamily:
    'Your free trial has ended. Subscribe to Premium to join another family.',
  // Server-reported failures. Keyed from Cloud Functions error codes in
  // src/services/api/client.ts — keep both languages in step.
  notFamilyMember:
    'You are no longer part of this family. Ask the family owner to invite you again.',
  familyNotCreated: 'Create your family first, then invite another parent.',
  childDeviceNotAllowed: 'This is a child device, so it cannot manage family settings.',
  deviceCredentialMissing:
    'This device needs to reconnect. Close and reopen KidGate, then try again.',
  deviceNotFound: 'That device is no longer in your family.',
  registerParentDeviceFirst:
    'Set this device up as a parent device first, then try again.',
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
  deviceLimitReached: 'This plan covers one child device. Subscribe to add another.',
};
