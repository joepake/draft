export const appLock = {
  toggleLabel: 'Verrouillage de l’app',
  toggleHint: 'Exiger un code PIN à l’ouverture de l’app parent',
  biometricToggleLabel: 'Déverrouiller avec {{biometryLabel}}',
  biometricToggleHint: 'Utiliser la biométrie plutôt que de saisir votre PIN',
  fallbackBiometryLabel: 'Biométrie',
  changePinTitle: 'Changer le PIN de verrouillage de l’app',
  changePinSubtitle: 'Mettez à jour le PIN utilisé sur cet appareil',
  turnOffAlertTitle: 'Désactiver le verrouillage de l’app ?',
  turnOffAlertMessage:
    'Le PIN et le déverrouillage biométrique de cette app seront supprimés de cet appareil.',
  turnOffButton: 'Désactiver',
  toastTurnedOff: 'Verrouillage de l’app désactivé sur cet appareil.',
  toastTurnOffFailed:
    'Impossible de désactiver le verrouillage de l’app. Veuillez réessayer.',
  toastBiometricEnabled: '{{biometryLabel}} activé pour le déverrouillage de l’app.',
  toastBiometricEnableFailed:
    'Impossible d’activer le déverrouillage biométrique. Veuillez réessayer.',
  toastBiometricDisableFailed:
    'Impossible de désactiver le déverrouillage biométrique. Veuillez réessayer.',
  toastEnabled: 'Verrouillage de l’app activé sur cet appareil.',
  createAppLockPin: 'Créer le PIN de verrouillage de l’app',
  changeAppLockPin: 'Changer le PIN de verrouillage de l’app',
  appLockSetupSubtitle:
    'Choisissez un PIN à 6 chiffres pour déverrouiller l’app parent sur cet appareil.',
  appLockSetupHelper:
    'Ce PIN reste sur cet appareil et est distinct du PIN parent utilisé sur les appareils des enfants.',
  appLockPinMismatch: 'Les codes PIN saisis ne correspondent pas.',
  unableToSaveAppLockPin:
    'Impossible d’enregistrer le PIN de verrouillage de l’app. Veuillez réessayer.',
  kidGateLocked: 'KidGate verrouillé',
  signInRequired: 'Connexion requise',
  enterAppLockPin:
    'Saisissez votre PIN de verrouillage de l’app pour ouvrir l’app parent.',
  appLockLockoutMessage:
    'Trop de tentatives incorrectes. Vous allez être déconnecté afin de pouvoir vous reconnecter.',
  appLockPinLabel: 'PIN de verrouillage de l’app (6 chiffres)',
  attemptsRemainingShort: '{{count}} tentatives restantes',
  attemptsRemainingShort_one: '{{count}} tentative restante',
  unlockWithBiometric: 'Déverrouiller avec {{biometryLabel}}',
  signInAgain: 'Se reconnecter',
  tooManyPinAttemptsSignIn:
    'Trop de tentatives incorrectes. Veuillez vous reconnecter.',
  unableToVerifyPin: 'Ce PIN est incorrect. Veuillez réessayer.',
  appLockPinMustBeSixDigits:
    'Le PIN de verrouillage de l’app doit comporter exactement 6 chiffres.',
  enterCurrentAppLockPin: 'Saisissez votre PIN de verrouillage de l’app actuel.',
  currentAppLockPinIncorrect: 'Le PIN de verrouillage de l’app actuel est incorrect.',
  signInAgainToContinue:
    'Trop de tentatives incorrectes. Veuillez vous reconnecter pour continuer.',
  incorrectPinAttemptsLeft: 'PIN incorrect. {{count}} tentatives restantes.',
  incorrectPinAttemptsLeft_one: 'PIN incorrect. {{count}} tentative restante.',
  biometricsUnavailable:
    'Le déverrouillage biométrique n’est pas disponible sur cet appareil.',
  unlockKidGateTitle: 'Déverrouiller KidGate',
  biometricUnlockSubtitle: 'Confirmez votre identité pour ouvrir l’app parent',
  faceId: 'Face ID',
  touchId: 'Touch ID',
  fingerprint: 'Empreinte digitale',
} as const;
