export const pin = {
  title: 'Parent PIN',
  subtitleSet: 'Tap to change your 6-digit PIN',
  subtitleNotSet: 'Create a 6-digit PIN to protect setup on child devices',
  statusSet: 'Set',
  statusNotSet: 'Not set',
  unlockChildPinTitle: 'Unlock PIN on {{deviceName}}',
  unlockChildPinSubtitle: 'Reset incorrect PIN attempts on this child device',
  statusLocked: 'Locked',
  toastPinUnlocked: 'PIN unlocked on {{deviceName}}.',
  toastPinUnlockFailed: 'Unable to unlock the child PIN. Try again.',
  toastPinSaved:
    'Parent PIN saved. Use it on child devices before changing Blocked Apps.',
  createParentPin: 'Create Parent PIN',
  changeParentPin: 'Change Parent PIN',
  parentPinSetupSubtitle: 'A 6-digit PIN protects Blocked Apps setup on child devices.',
  parentPinSetupHelper:
    'Child devices will ask for this PIN before changing which apps are blocked.',
  parentPinMismatch: 'New PIN entries do not match.',
  unableToSaveParentPin: 'Unable to save the Parent PIN. Try again.',
  onlyOwnerCanManageChildPin:
    'Only the family owner can create or change the Parent PIN used on child devices.',
  parentPinRequired: 'Parent PIN required',
  enterParentPinToContinue: 'Enter the 6-digit Parent PIN to continue.',
  // Only the family owner can unlock or reset it, from Settings → Security on
  // their phone (`ParentSettingsScreen`, `setParentPin`) — there is no screen
  // called "Parent Settings", and a joined parent has no such row.
  parentPinLockoutMessage:
    'Too many incorrect attempts. Ask the parent who set up KidGate to unlock the PIN from their phone, in Settings → Security.',
  parentPinHelperText:
    'Only a parent can change blocked apps or sign out — that is what the PIN is for. If it is forgotten, the parent who set up KidGate can reset it from their phone, in Settings → Security.',
  forgotPin: 'Forgot PIN?',
  resetPinNotice:
    'You are resetting the PIN as the account owner. Child devices will ask for the new PIN from now on.',
  unableToVerifyParentPin: 'The Parent PIN is incorrect. Try again.',
  unableToCheckParentPin: 'Unable to check the Parent PIN. Try again in a moment.',
  parentPinGateSubtitle: 'Enter the 6-digit Parent PIN to change settings.',
  parentPinMustBeSixDigits: 'The Parent PIN must be exactly 6 digits.',
  pinSixDigits: 'PIN (6 digits)',
  attemptsRemaining: '{{count}} attempts remaining.',
  attemptsRemaining_one: '{{count}} attempt remaining.',
  currentPin: 'Current PIN',
  newPin: 'New PIN',
  pin: 'PIN',
  confirmPin: 'Confirm PIN',
  updatePin: 'Update PIN',
  savePin: 'Save PIN',
  pinLockedTitle: 'PIN locked',
  pinLockedBody:
    'Too many incorrect attempts. Ask the parent who set up KidGate to unlock the PIN from their phone, in Settings → Security.',
  parentAccessRequiredTitle: 'Parent access required',
  parentAccessRequiredBody:
    'Enter your PIN to rename this device, choose Blocked Apps, or sign out.',
  unlockWithParentPinButton: 'Unlock with Parent PIN',
  whyPinTitle: 'Why a PIN?',
  whyPinBody:
    'Only a parent should change Blocked Apps or sign this device out of KidGate. Theme colors do not require a PIN.',
  pinLockedToast:
    'The PIN is locked after too many incorrect attempts. Ask the parent who set up KidGate to unlock it from their phone, in Settings → Security.',
  pinNotConfiguredToast:
    'No Parent PIN yet. The parent who set up KidGate creates it from their phone, in Settings → Security.',
  pairedNoPin:
    'No Parent PIN yet. Child devices ask for it before Blocked Apps are changed or a device is signed out.',
  enterSixDigitParentPin: 'Enter the 6-digit Parent PIN.',
  askParentCreatePin:
    'Ask the parent who set up KidGate to create a Parent PIN from their phone, in Settings → Security.',
  incorrectPinAttemptsLeft: 'Incorrect PIN. {{count}} attempts remaining.',
  incorrectPinAttemptsLeft_one: 'Incorrect PIN. {{count}} attempt remaining.',
  enterCurrentParentPin: 'Enter your current Parent PIN.',
  currentParentPinIncorrect:
    'The current Parent PIN is incorrect. Check it and try again, or use Forgot PIN? to reset it.',
} as const;
