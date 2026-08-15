export const pin = {
  title: 'Eltern-PIN',
  subtitleSet: 'Tippen, um deine 6-stellige PIN zu ändern',
  subtitleNotSet:
    'Erstelle eine 6-stellige PIN, um die Einrichtung auf den Geräten deiner Kinder zu schützen',
  statusSet: 'Festgelegt',
  statusNotSet: 'Nicht festgelegt',
  unlockChildPinTitle: 'PIN auf {{deviceName}} entsperren',
  unlockChildPinSubtitle:
    'Fehlgeschlagene PIN-Versuche auf diesem Kindergerät zurücksetzen',
  statusLocked: 'Gesperrt',
  toastPinUnlocked: 'PIN auf {{deviceName}} entsperrt.',
  toastPinUnlockFailed:
    'Die Kind-PIN konnte nicht entsperrt werden. Bitte versuche es erneut.',
  toastPinSaved:
    'Eltern-PIN gespeichert. Verwende sie auf den Geräten deiner Kinder, bevor du Blockierte Apps änderst.',
  createParentPin: 'Eltern-PIN erstellen',
  changeParentPin: 'Eltern-PIN ändern',
  parentPinSetupSubtitle:
    'Eine 6-stellige PIN schützt die Einrichtung von Blockierten Apps auf den Geräten deiner Kinder.',
  parentPinSetupHelper:
    'Auf den Geräten deiner Kinder wird diese PIN abgefragt, bevor sich ändert, welche Apps blockiert sind.',
  parentPinMismatch: 'Die neuen PIN-Eingaben stimmen nicht überein.',
  unableToSaveParentPin:
    'Die Eltern-PIN konnte nicht gespeichert werden. Bitte versuche es erneut.',
  onlyOwnerCanManageChildPin:
    'Nur der Familieninhaber kann die Eltern-PIN erstellen oder ändern, die auf den Geräten der Kinder verwendet wird.',
  parentPinRequired: 'Eltern-PIN erforderlich',
  enterParentPinToContinue: 'Gib die 6-stellige Eltern-PIN ein, um fortzufahren.',
  parentPinLockoutMessage:
    'Zu viele falsche Versuche. Bitte bitte deine Eltern, die PIN in den Eltern-Einstellungen zu entsperren.',
  parentPinHelperText:
    'Nur ein Elternteil kann blockierte Apps ändern oder sich abmelden — dafür ist die PIN da. Falls du sie vergisst, kann sich ein Elternteil auf jedem Gerät bei KidGate anmelden und sie in den Eltern-Einstellungen zurücksetzen.',
  forgotPin: 'PIN vergessen?',
  resetPinNotice:
    'Du setzt die PIN als Kontoinhaber zurück. Kindergeräte fragen ab jetzt nach der neuen PIN.',
  unableToVerifyParentPin: 'Die Eltern-PIN ist falsch. Bitte versuche es erneut.',
  parentPinGateSubtitle:
    'Gib die 6-stellige Eltern-PIN ein, um Einstellungen zu ändern.',
  parentPinMustBeSixDigits: 'Die Eltern-PIN muss genau 6 Ziffern haben.',
  pinSixDigits: 'PIN (6 Ziffern)',
  attemptsRemaining: 'Noch {{count}} Versuche.',
  attemptsRemaining_one: 'Noch {{count}} Versuch.',
  currentPin: 'Aktuelle PIN',
  newPin: 'Neue PIN',
  pin: 'PIN',
  confirmPin: 'PIN bestätigen',
  updatePin: 'PIN aktualisieren',
  savePin: 'PIN speichern',
  pinLockedTitle: 'PIN gesperrt',
  pinLockedBody:
    'Zu viele falsche Versuche. Bitte bitte deine Eltern, die PIN in den Eltern-Einstellungen zu entsperren.',
  parentAccessRequiredTitle: 'Elternzugriff erforderlich',
  parentAccessRequiredBody:
    'Gib deine PIN ein, um dieses Gerät umzubenennen, Blockierte Apps auszuwählen oder dich abzumelden.',
  unlockWithParentPinButton: 'Mit Eltern-PIN entsperren',
  whyPinTitle: 'Warum eine PIN?',
  whyPinBody:
    'Nur ein Elternteil sollte Blockierte Apps ändern oder dieses Gerät bei KidGate abmelden. Design-Farben benötigen keine PIN.',
  pinLockedToast:
    'Die PIN wurde nach zu vielen falschen Versuchen gesperrt. Bitte bitte deine Eltern, sie in den Eltern-Einstellungen zu entsperren.',
  pinNotConfiguredToast:
    'Bitte erstelle zuerst eine 6-stellige PIN in den Eltern-Einstellungen auf einem Elterngerät.',
  enterSixDigitParentPin: 'Gib die 6-stellige Eltern-PIN ein.',
  askParentCreatePin:
    'Bitte bitte deine Eltern, zuerst eine Eltern-PIN in den Eltern-Einstellungen zu erstellen.',
  incorrectPinAttemptsLeft: 'Falsche PIN. Noch {{count}} Versuche.',
  incorrectPinAttemptsLeft_one: 'Falsche PIN. Noch {{count}} Versuch.',
  enterCurrentParentPin: 'Gib deine aktuelle Eltern-PIN ein.',
  currentParentPinIncorrect: 'Die aktuelle Eltern-PIN ist falsch.',
} as const;
