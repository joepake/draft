export const pin = {
  title: 'Code PIN parent',
  subtitleSet: 'Appuyez pour changer votre code PIN à 6 chiffres',
  subtitleNotSet:
    'Créez un code PIN à 6 chiffres pour protéger la configuration sur les appareils des enfants',
  statusSet: 'Défini',
  statusNotSet: 'Non défini',
  unlockChildPinTitle: 'Déverrouiller le PIN sur {{deviceName}}',
  unlockChildPinSubtitle:
    'Réinitialiser les tentatives de PIN incorrectes sur cet appareil enfant',
  statusLocked: 'Verrouillé',
  toastPinUnlocked: 'PIN déverrouillé sur {{deviceName}}.',
  toastPinUnlockFailed:
    'Impossible de déverrouiller le PIN de l’enfant. Veuillez réessayer.',
  toastPinSaved:
    'Code PIN parent enregistré. Utilisez-le sur les appareils des enfants avant de modifier les Applications bloquées.',
  createParentPin: 'Créer le code PIN parent',
  changeParentPin: 'Changer le code PIN parent',
  parentPinSetupSubtitle:
    'Un code PIN à 6 chiffres protège la configuration des Applications bloquées sur les appareils des enfants.',
  parentPinSetupHelper:
    'Les appareils des enfants demanderont ce PIN avant de modifier les applications bloquées.',
  parentPinMismatch: 'Les nouveaux codes PIN ne correspondent pas.',
  unableToSaveParentPin:
    'Impossible d’enregistrer le code PIN parent. Veuillez réessayer.',
  onlyOwnerCanManageChildPin:
    'Seul le propriétaire de la famille peut créer ou modifier le code PIN parent utilisé sur les appareils des enfants.',
  parentPinRequired: 'Code PIN parent requis',
  enterParentPinToContinue: 'Saisis le code PIN parent à 6 chiffres pour continuer.',
  parentPinLockoutMessage:
    'Trop de tentatives incorrectes. Demande à un parent de déverrouiller le PIN depuis son téléphone, dans Réglages → Sécurité.',
  parentPinHelperText:
    'Seul un parent peut modifier les réglages protégés, comme les Applications bloquées — c’est à cela que sert le PIN. En cas d’oubli, le parent qui a configuré KidGate peut le réinitialiser depuis son téléphone, dans Réglages → Sécurité.',
  forgotPin: 'PIN oublié ?',
  resetPinNotice:
    'Vous réinitialisez le PIN en tant que propriétaire du compte. Les appareils des enfants demanderont désormais le nouveau PIN.',
  unableToVerifyParentPin: 'Le code PIN parent est incorrect. Réessaie.',
  unableToCheckParentPin:
    'Impossible de vérifier le code PIN parent. Réessaie dans un instant.',
  parentPinGateSubtitle:
    'Saisis le code PIN parent à 6 chiffres pour modifier les réglages.',
  parentPinMustBeSixDigits: 'Le code PIN parent doit comporter exactement 6 chiffres.',
  pinSixDigits: 'PIN (6 chiffres)',
  attemptsRemaining: '{{count}} tentatives restantes.',
  attemptsRemaining_one: '{{count}} tentative restante.',
  currentPin: 'PIN actuel',
  newPin: 'Nouveau PIN',
  pin: 'PIN',
  confirmPin: 'Confirmer le PIN',
  updatePin: 'Mettre à jour le PIN',
  savePin: 'Enregistrer le PIN',
  pinLockedTitle: 'PIN verrouillé',
  pinLockedBody:
    'Trop de tentatives incorrectes. Demande à un parent de déverrouiller le PIN depuis son téléphone, dans Réglages → Sécurité.',
  parentAccessRequiredTitle: 'Accès parent requis',
  parentAccessRequiredBody:
    'Saisis le code PIN parent pour renommer cet appareil, choisir les Applications bloquées ou quitter la famille.',
  unlockWithParentPinButton: 'Déverrouiller avec le code PIN parent',
  whyPinTitle: 'Pourquoi un PIN ?',
  whyPinBody:
    'Seul un parent doit pouvoir modifier les Applications bloquées ou faire quitter la famille à cet appareil. Les couleurs du thème ne nécessitent pas de PIN.',
  pinLockedToast:
    'Le PIN est verrouillé après trop de tentatives incorrectes. Demande à un parent de le déverrouiller depuis son téléphone, dans Réglages → Sécurité.',
  pinNotConfiguredToast:
    'Aucun code PIN parent pour l’instant. Le parent qui a configuré KidGate le crée depuis son téléphone, dans Réglages → Sécurité.',
  pairedNoPin:
    'Aucun code PIN parent pour l’instant. Les appareils des enfants le demandent avant que les Applications bloquées soient modifiées ou qu’un appareil quitte la famille.',
  enterSixDigitParentPin: 'Saisis le code PIN parent à 6 chiffres.',
  askParentCreatePin:
    'Demande au parent qui a configuré KidGate de créer un code PIN parent depuis son téléphone, dans Réglages → Sécurité.',
  incorrectPinAttemptsLeft: 'PIN incorrect. {{count}} tentatives restantes.',
  incorrectPinAttemptsLeft_one: 'PIN incorrect. {{count}} tentative restante.',
  enterCurrentParentPin: 'Saisissez votre code PIN parent actuel.',
  currentParentPinIncorrect:
    'Le code PIN parent actuel est incorrect. Vérifiez-le et réessayez, ou utilisez « PIN oublié ? » pour le réinitialiser.',
  // The offline Parent PIN pad's wait; {{time}} is a shared.duration*Short phrase.
  offlineUnlockWait: 'Trop de codes PIN incorrects. Réessaie dans {{time}}.',
} as const;
