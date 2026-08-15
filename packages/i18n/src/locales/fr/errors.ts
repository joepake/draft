// errors.ts (Français)

export const errors = {
  timeRequestAlreadyResolved: 'Cette demande a déjà été traitée par un autre parent.',
  emailAlreadyInUse: 'Cette adresse e-mail est déjà enregistrée.',
  invalidEmail: 'Adresse e-mail invalide.',
  weakPassword: 'Le mot de passe doit contenir au moins 6 caractères.',
  invalidEmailOrPassword: 'Adresse e-mail ou mot de passe incorrect.',
  tooManyRequests: 'Trop de tentatives. Veuillez réessayer plus tard.',
  somethingWentWrong: 'Une erreur est survenue. Veuillez réessayer.',
  unableToCreateAccount: 'Impossible de créer votre compte. Veuillez réessayer.',
  unableToSignIn: 'Impossible de vous connecter. Veuillez réessayer.',
  unableToJoinFamilyAccount:
    'Impossible de rejoindre le compte familial. Veuillez réessayer.',
  enterEmailAddress: 'Veuillez saisir votre adresse e-mail.',
  unableToCreatePairingCode:
    'Impossible de créer un code d’association. Veuillez réessayer.',
  unableToRedeemPairingCode: 'Ce code d’association est incorrect ou a expiré.',
  unableToClaimChildPairing:
    'Impossible de connecter l’appareil de l’enfant. Veuillez réessayer.',
  unableToPollChildPairing: 'Impossible de vérifier l’état de l’association.',
  unableToConfirmChildPairing:
    'Impossible de confirmer cette association. Veuillez réessayer.',
  unableToRejectChildPairing:
    'Impossible de refuser cette association. Veuillez réessayer.',
  photoCaptureCancelled: 'La prise de photo a été annulée.',
  unableToOpenCamera:
    'Impossible d’ouvrir l’appareil photo. Veuillez autoriser l’accès à l’appareil photo dans les paramètres de votre appareil.',
  noPhotoCaptured: 'Aucune photo n’a été prise.',
  simulatorCameraHint:
    'Dans le simulateur, activez d’abord une caméra : Simulator → Camera → Front Camera, puis réessayez SOS. Pour une vraie photo, testez sur un iPhone physique.',
  notSignedInReopenApp:
    'Vous n’êtes pas connecté. Fermez et rouvrez l’application, puis réessayez.',
  accountMismatchSignOut:
    'Le compte ne correspond pas. Déconnectez-vous puis reconnectez-vous.',
  storageUploadUnauthorized:
    'Impossible de téléverser la photo pour le moment. Veuillez réessayer dans un instant.',
  storageNotSetup:
    'Impossible de téléverser la photo pour le moment. Veuillez réessayer dans un instant.',
  noNetworkConnection:
    'Aucune connexion réseau. Vérifiez le Wi-Fi ou les données mobiles, puis réessayez.',
  connectionFailedTitle: 'Échec de la connexion',
  connectionFailedBody:
    'KidGate n’a pas pu se connecter. Vérifiez le Wi-Fi ou les données mobiles, puis sélectionnez « Reconnecter ».',
  reconnect: 'Reconnecter',
  unableToUploadPhoto: 'Impossible de téléverser la photo. Veuillez réessayer.',
  premiumSubscriptionRequired:
    'Cette fonctionnalité nécessite Premium. La Limite quotidienne, les Heures bloquées, la position et le SOS restent gratuits.',
  trialEndedCannotJoinFamily:
    'Votre essai gratuit est terminé. Abonnez-vous à Premium pour rejoindre une autre famille.',

  notFamilyMember:
    'Vous ne faites plus partie de cette famille. Demandez au propriétaire de la famille de vous inviter à nouveau.',
  familyNotCreated: 'Créez d’abord votre famille, puis invitez un autre parent.',
  childDeviceNotAllowed:
    'Il s’agit d’un appareil enfant et il ne peut pas gérer les paramètres familiaux.',
  deviceCredentialMissing:
    'Cet appareil doit être reconnecté. Fermez puis rouvrez KidGate, puis réessayez.',
  deviceNotFound: 'Cet appareil ne fait plus partie de votre famille.',
  registerParentDeviceFirst:
    'Configurez d’abord cet appareil comme appareil parent, puis réessayez.',
  pairingCodeFormat: 'Veuillez saisir le code à 6 caractères.',
  pairingCodeUsed: 'Ce code a déjà été utilisé. Veuillez en demander un nouveau.',
  pairingCodeExpiredChild:
    'Ce code a expiré. Demandez à votre enfant d’en générer un nouveau.',
  pairingCodeExpiredParent:
    'Ce code a expiré. Demandez un nouveau code à l’autre parent.',
  pairingOwnFamily:
    'Il s’agit déjà de votre famille. Il n’est pas nécessaire de la rejoindre.',
  pairingSessionNotFound: 'Cette demande d’association n’est plus disponible.',
  pairingAlreadyCompleted: 'Cet appareil est déjà associé.',
  pairingDeclined: 'La demande d’association a été refusée sur l’autre appareil.',
  pairingNoParentWaiting:
    'Aucun parent n’attend de confirmation. Redémarrez l’association depuis l’appareil parent.',
  pairingRequestExpired: 'Cette demande d’association a expiré. Veuillez recommencer.',
  joinRequestNotFound: 'Cette demande d’adhésion n’est plus disponible.',
  joinRequestResolved: 'Cette demande d’adhésion a déjà reçu une réponse.',
  joinRequestExpired:
    'Cette demande d’adhésion a expiré. Veuillez demander une nouvelle invitation.',
  timeRequestPendingExists: 'Vous avez déjà une demande en attente de réponse.',
  timeRequestCooldown:
    'Veuillez patienter un instant avant d’envoyer une autre demande.',
  deviceClockOutOfRange:
    'La date et l’heure de cet appareil semblent incorrectes. Veuillez activer la mise à jour automatique.',
  locationSharingDisabled:
    'Le partage de position est désactivé sur cet appareil. Activez-le dans les paramètres de l’appareil, puis réessayez.',
  childDeviceNoPushToken:
    'Cet appareil enfant ne peut pas encore recevoir de demandes. Ouvrez KidGate sur l’appareil de l’enfant et autorisez les notifications.',
  unableToRequestLocation:
    'Impossible de demander une mise à jour de la position pour le moment. Veuillez réessayer.',
  unableToVerifyPurchase:
    'Impossible de vérifier cet achat. Veuillez réessayer dans un instant.',
  noPurchasesToRestore: 'Aucun achat à restaurer pour ce compte.',
  noActiveSubscription: 'Aucun abonnement actif n’a été trouvé pour ce compte.',
  unableToRestorePurchases:
    'Impossible de restaurer vos achats pour le moment. Veuillez réessayer.',
  alreadyInFamily: 'Vous faites déjà partie de cette famille.',
  leaveFamilyBeforeJoining:
    'Veuillez quitter votre famille actuelle avant d’en rejoindre une autre.',
  deviceLimitReached:
    'Ce forfait couvre un appareil enfant. Abonnez-vous pour en ajouter un autre.',
};
