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
  parentPinLockoutMessage:
    'Too many incorrect attempts. Ask your parent to unlock the PIN from Parent Settings.',
  parentPinHelperText:
    'Only a parent can change blocked apps or sign out — that is what the PIN is for. If you forget it, a parent can sign in to KidGate on any device and reset it in Parent Settings.',
  forgotPin: 'Forgot PIN?',
  resetPinNotice:
    'You are resetting the PIN as the account owner. Child devices will ask for the new PIN from now on.',
  unableToVerifyParentPin: 'The Parent PIN is incorrect. Try again.',
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
    'Too many incorrect attempts. Ask your parent to unlock the PIN from Parent Settings.',
  parentAccessRequiredTitle: 'Parent access required',
  parentAccessRequiredBody:
    'Enter your PIN to rename this device, choose Blocked Apps, or sign out.',
  unlockWithParentPinButton: 'Unlock with Parent PIN',
  whyPinTitle: 'Why a PIN?',
  whyPinBody:
    'Only a parent should change Blocked Apps or sign this device out of KidGate. Theme colors do not require a PIN.',
  pinLockedToast:
    'The PIN is locked after too many incorrect attempts. Ask your parent to unlock it from Parent Settings.',
  pinNotConfiguredToast:
    'Create a 6-digit PIN in Parent Settings on a parent device first.',
  enterSixDigitParentPin: 'Enter the 6-digit Parent PIN.',
  askParentCreatePin:
    'Ask your parent to create a Parent PIN in Parent Settings first.',
  incorrectPinAttemptsLeft: 'Incorrect PIN. {{count}} attempts remaining.',
  incorrectPinAttemptsLeft_one: 'Incorrect PIN. {{count}} attempt remaining.',
  enterCurrentParentPin: 'Enter your current Parent PIN.',
  currentParentPinIncorrect: 'The current Parent PIN is incorrect.',
} as const;
