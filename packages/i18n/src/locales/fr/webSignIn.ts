export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate sur le web',
  title: 'Autoriser un navigateur',
  subtitle: 'Gérez la famille depuis un ordinateur',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Un navigateur ne voit votre famille qu’après votre autorisation depuis ce téléphone.',
  stepsTitle: 'Sur votre ordinateur',
  step1: 'Ouvrez {{url}} dans un navigateur.',
  step2: 'Choisissez « Se connecter avec l’appli KidGate ».',
  step3: 'Scannez le code affiché avec la caméra ci-dessous.',
  scanHint: 'Gardez le QR code dans le cadre.',
  manualTitle: 'Saisissez le code à 6 caractères',
  manualHint: 'Le code est écrit sous le QR code sur votre ordinateur.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Continuer',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Autoriser ce navigateur ?',
  confirmBody:
    'Il aura le même contrôle que ce téléphone : voir où sont vos enfants, modifier les limites, verrouiller les appareils et approuver les demandes. N’autorisez que si c’est bien vous qui vous connectez.',
  confirmCodeLabel: 'Code affiché sur votre ordinateur',
  approveButton: 'Autoriser',
  declineButton: 'Ne pas autoriser',
  declinedToast: 'Navigateur non autorisé.',
  approvedTitle: 'Navigateur autorisé',
  approvedBody: 'Votre ordinateur se connecte. Vous pouvez poser le téléphone.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Ce QR code n’est pas un code de connexion web. Vérifiez que l’écran de connexion est ouvert sur l’ordinateur.',
  expired: 'Ce code a expiré. Affichez-en un nouveau sur votre ordinateur.',
  alreadyUsed:
    'Ce code a déjà été utilisé. Affichez-en un nouveau sur votre ordinateur.',
  notFound: 'Ce code n’est pas valide. Vérifiez les six caractères et réessayez.',
  failed: 'Impossible de terminer la demande. Veuillez réessayer.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Navigateurs autorisés',
  sessionsEmpty: 'Aucun navigateur n’est connecté à votre compte.',
  sessionsRevoke: 'Déconnecter',
  sessionExpires: 'Expire {{when}}',
  revokedToast: 'Ce navigateur a été déconnecté.',
} as const;
