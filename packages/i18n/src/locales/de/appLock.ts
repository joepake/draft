export const appLock = {
  toggleLabel: 'App-Sperre',
  toggleHint: 'PIN beim Öffnen der Eltern-App verlangen',
  biometricToggleLabel: 'Mit {{biometryLabel}} entsperren',
  biometricToggleHint: 'Biometrie statt PIN-Eingabe verwenden',
  fallbackBiometryLabel: 'Biometrie',
  changePinTitle: 'App-Sperre-PIN ändern',
  changePinSubtitle: 'Die auf diesem Gerät verwendete PIN aktualisieren',
  turnOffAlertTitle: 'App-Sperre deaktivieren?',
  turnOffAlertMessage:
    'Die PIN und die biometrische Entsperrung für diese App werden von diesem Gerät entfernt.',
  turnOffButton: 'Deaktivieren',
  toastTurnedOff: 'App-Sperre auf diesem Gerät deaktiviert.',
  toastTurnOffFailed:
    'App-Sperre konnte nicht deaktiviert werden. Bitte versuche es erneut.',
  toastBiometricEnabled: '{{biometryLabel}} für die App-Entsperrung aktiviert.',
  toastBiometricEnableFailed:
    'Biometrische Entsperrung konnte nicht aktiviert werden. Bitte versuche es erneut.',
  toastBiometricDisableFailed:
    'Biometrische Entsperrung konnte nicht deaktiviert werden. Bitte versuche es erneut.',
  toastEnabled: 'App-Sperre auf diesem Gerät aktiviert.',
  createAppLockPin: 'App-Sperre-PIN erstellen',
  changeAppLockPin: 'App-Sperre-PIN ändern',
  appLockSetupSubtitle:
    'Wähle eine 6-stellige PIN, um die Eltern-App auf diesem Gerät zu entsperren.',
  appLockSetupHelper:
    'Diese PIN bleibt auf diesem Gerät und ist unabhängig von der Eltern-PIN, die auf den Geräten der Kinder verwendet wird.',
  appLockPinMismatch: 'Die PIN-Eingaben stimmen nicht überein.',
  unableToSaveAppLockPin:
    'Die App-Sperre-PIN konnte nicht gespeichert werden. Bitte versuche es erneut.',
  kidGateLocked: 'KidGate gesperrt',
  signInRequired: 'Anmeldung erforderlich',
  enterAppLockPin: 'Gib deine App-Sperre-PIN ein, um die Eltern-App zu öffnen.',
  appLockLockoutMessage:
    'Zu viele falsche Versuche. Du wirst abgemeldet, damit du dich erneut anmelden kannst.',
  appLockPinLabel: 'App-Sperre-PIN (6 Ziffern)',
  attemptsRemainingShort: 'Noch {{count}} Versuche',
  attemptsRemainingShort_one: 'Noch {{count}} Versuch',
  unlockWithBiometric: 'Mit {{biometryLabel}} entsperren',
  signInAgain: 'Erneut anmelden',
  tooManyPinAttemptsSignIn: 'Zu viele falsche Versuche. Bitte melde dich erneut an.',
  unableToVerifyPin: 'Diese PIN ist falsch. Bitte versuche es erneut.',
  appLockPinMustBeSixDigits: 'Die App-Sperre-PIN muss genau 6 Ziffern haben.',
  enterCurrentAppLockPin: 'Gib deine aktuelle App-Sperre-PIN ein.',
  currentAppLockPinIncorrect: 'Die aktuelle App-Sperre-PIN ist falsch.',
  signInAgainToContinue:
    'Zu viele falsche Versuche. Bitte melde dich erneut an, um fortzufahren.',
  incorrectPinAttemptsLeft: 'Falsche PIN. Noch {{count}} Versuche.',
  incorrectPinAttemptsLeft_one: 'Falsche PIN. Noch {{count}} Versuch.',
  biometricsUnavailable:
    'Biometrische Entsperrung ist auf diesem Gerät nicht verfügbar.',
  unlockKidGateTitle: 'KidGate entsperren',
  biometricUnlockSubtitle: 'Bestätige deine Identität, um die Eltern-App zu öffnen',
  faceId: 'Face ID',
  touchId: 'Touch ID',
  fingerprint: 'Fingerabdruck',
} as const;
