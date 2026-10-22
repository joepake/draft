export const webSignIn = {
  title: 'Se connecter sur le web',
  subtitle: 'Gérez la famille depuis un ordinateur',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Un navigateur ne voit votre famille qu’après votre autorisation depuis ce téléphone.',
  stepsTitle: 'Sur votre ordinateur',
  step1: 'Ouvrez {{url}} dans un navigateur.',
  step2: 'Attendez que la page de connexion affiche un code QR.',
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
    'Il aura le même contrôle que ce téléphone : voir où sont vos enfants, modifier les limites, verrouiller les appareils et approuver les demandes. Il pourra effectuer des modifications pendant 7 jours, et vous pouvez le retirer à tout moment dans Famille → Parents. N’autorisez que si c’est bien vous qui vous connectez.',
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
  sessionsTitle: 'Tableau de bord',
  sessionRow: '{{browser}} sur {{os}}',
  sessionRowUnknown: 'Navigateur web',
  sessionExpires: 'Peut effectuer des modifications jusqu’au {{date}}',
  sessionViaQr: 'Autorisé avec un code QR',
  sessionViaPin: 'Autorisé avec le code PIN parent',
  thisBrowser: 'Ce navigateur',
  sessionsRevoke: 'Retirer',
  sessionsRevokeConfirmTitle: 'Retirer ce navigateur ?',
  sessionsRevokeConfirmBody:
    'Il ne pourra plus modifier les réglages ni contrôler les appareils. Jusqu’à la date indiquée, il peut encore modifier quelques détails des appareils, comme un nom. Il peut toutefois encore afficher les informations de votre famille, jusqu’à ce que quelqu’un s’y déconnecte.',
  revokedToast: 'Navigateur retiré.',
  revokeFailed: 'Impossible de retirer ce navigateur. Réessayez.',
} as const;
