export const pairing = {
  shareInviteButton: 'Share code',
  shareInviteMessage:
    'Join our family on KidGate: open the app, go to Family → Scan a code, then scan the QR code or enter code {{code}}. The code expires in 15 minutes.',
  shareChildCodeMessage:
    'Connect this child device on KidGate: on the parent device open KidGate → Family → Scan a code, then scan the QR code or enter code {{code}}. The code expires in 5 minutes.',
  connectChildPhone: 'Connect a child device',
  parentInstructions:
    'Open KidGate on the child device. On a phone or tablet, choose This is a child device. Then enter the 6-character code it shows.',
  parentScanInstructions: 'Point your camera at the QR code on the child device.',
  childWaitingTitle: 'Waiting for a parent',
  childWaitingSubtitle:
    'Keep this screen open. A parent will connect this device from their KidGate app.',
  childCodeLabel: 'Or share this code',
  childScanHint:
    'Parent: open KidGate → Family → {{scan}} → scan the QR code or enter the code.',
  extensionCloseHint:
    'You can close this — the code keeps working. Open KidGate again to confirm the parent.',
  childConnecting: 'Connected. Setting up this device…',
  childPairedTitle: 'You are connected',
  childPairedSubtitle: 'Setting up this device…',
  connectChild: 'Connect child device',
  waitingChildConfirm: 'Request sent. Waiting for confirmation on the child device.',
  // Conditional on purpose: a TV confirms itself (`apps/tv/src/pairing.ts`),
  // and the claim response does not say what kind of device was claimed.
  waitingChildConfirmHint:
    'If the child device asks, select “Yes, connect” to finish. A TV connects on its own. You can close this — pairing continues in the background.',
  childConfirmedTitle: 'Device connected',
  childConfirmedBody:
    'The child device confirmed the pairing. Next, choose who uses it.',
  childRejectedPairing:
    'The child device declined this pairing. Get a fresh code from it and try again.',
  childConfirmExpired:
    'The child device did not confirm in time. Ask it for a new code and try again.',
  confirmParentTitle: 'Confirm this parent?',
  confirmParentSubtitle:
    '{{parentLabel}} wants to manage this device. Only accept if you know this person.',
  confirmParentButton: 'Yes, connect',
  rejectParentButton: 'Not this parent',
  parentAccount: 'Parent account',
  unknownParent: 'a parent',
  expiresIn: 'Expires in {{countdown}}',
  autoRefreshPaused:
    'Automatic code refresh has paused to save mobile data and battery. Select New code when you are ready.',
  scanQrTitle: 'Scan QR code',
  scanQrSubtitle: 'Align the QR code inside the frame.',
  enterCodeManually: 'Enter code manually',
  manualCodeLabel: 'Code from the child device',
  openingScanner: 'Opening camera…',
  cameraPermissionRequired: 'Camera access is required to scan the QR code.',
  unableToOpenScanner:
    'Unable to open the camera scanner. Enter the code manually instead.',
  newCode: 'New code',
  done: 'Done',
  unableToCreateCode: 'Unable to create a code. Try again.',
  extensionUnsupportedSystem:
    'This operating system is not supported. KidGate works on a Chromebook, a Mac or a Windows PC.',
  // `billing/device-limit-reached` on a claim, with the `ceiling` the server
  // sends beside it. `errors.deviceLimitReached` stays for callers without it.
  deviceLimitReachedCeiling:
    'This family has reached the number of devices KidGate covers ({{limit}}). Remove a device you no longer use, then try again.',
  // A pairing call refused with a 429 that said how long to wait.
  tooManyAttemptsWait: 'Too many attempts. Try again in {{minutes}} min.',
  inviteParentTitle: 'Add another parent device',
  inviteParentInstructions:
    'On the other device, open KidGate → Family → Scan a code, then scan this QR code or enter the code within 15 minutes. Approve the request here to connect that parent.',
  inviteCodeLabel: 'Or share this code',
  joinFamilyTitle: 'Join family',
  joinFamilyScanInstructions:
    'Scan the invite QR code from a parent already in that family.',
  joinFamilyManualInstructions:
    'Enter the 6-character invite code from a parent already in that family.',
  joinFamilyCodeLabel: 'Invite code from a parent',
  joinFamilyButton: 'Join family',
  parentJoinRequest: 'Waiting for owner approval',
  parentJoinApprove: 'Approve',
  parentJoinDecline: 'Decline',
  parentJoinRejected: 'The family owner declined your request.',
  parentJoinExpired: 'The approval request has expired. Ask for a new invite.',
  unableToResolveParentJoin: 'Unable to answer this join request. Try again.',
  joinedFamily: 'You joined the family. Its child devices now appear here.',
  joinedFamilyTitle: 'Joined family',
  joinedFamilyMessage:
    'You joined “{{familyName}}”. Its child devices now appear on this device.',
  createFamilyTitle: 'Create your family',
  createFamilyInstructions:
    'Name your family before inviting another parent. Other parents will join this family and see the same child devices.',
  familyNamePlaceholder: 'Family name',
  createFamilyButton: 'Create family',
};
