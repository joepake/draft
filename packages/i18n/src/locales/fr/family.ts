export const family = {
  title: 'Famille',
  connectButton: 'Connecter',
  connectAccessibility: 'Ajouter un appareil enfant ou parent',
  addDeviceTitle: 'Ajouter un appareil',
  addDeviceMessage: 'Que souhaitez-vous connecter ?',
  addChildOption: 'Ajouter un appareil d’enfant',
  addJoinFamilyOption: 'Rejoindre une famille',
  addParentOption: 'Inviter un parent',
  headerHintEmpty: 'Gérez et protégez les appareils de vos enfants',
  headerHintGuest:
    'Parcourez librement — connectez-vous lorsque vous êtes prêt à connecter des appareils',
  familyCardManage: 'Gérer la famille, les parents et les appareils',
  familyCardJoined: 'Rejoint en tant que parent',
  chipDeviceCount: '{{count}} appareils',
  chipDeviceCount_one: '{{count}} appareil',
  chipOnlineCount: '{{count}} en ligne',
  chipSosCount: '{{count}} SOS',
  chipCheckInCount: '{{count}} Check-Ins',
  chipCheckInCount_one: '{{count}} Check-In',
  chipRequestCount: '{{count}} demandes',
  chipRequestCount_one: '{{count}} demande',
  chipNeedsSetupCount: '{{count}} à configurer',
  chipNeedsSetupCount_one: '{{count}} à configurer',
  chipProtectedCount: '{{count}} protégés',
  chipHealthWarnCount: '{{count}} à configurer',
  chipHealthWarnCount_one: '{{count}} à configurer',
  chipHealthInactiveCount: '{{count}} hors ligne',
  chipBlockedCount: '{{count}} bloqués',
  healthProtected: 'Protégé',
  healthNeedsSetup: 'Configuration requise',
  healthOffline: 'Hors ligne',

  // Quick-glance rows on the device card
  cardWhereLabel: 'Position',
  cardWhereAccessibility: 'Ouvrir la position de {{deviceName}}',
  cardTodayLabel: 'Aujourd’hui',
  cardTodayUsed: '{{used}} d’utilisation',
  cardTodayNoData: 'Aucune utilisation aujourd’hui',
  cardTodayAccessibility: 'Ouvrir le rapport d’utilisation de {{deviceName}}',

  emptyTitle: 'Aucun appareil d’enfant',
  emptyDescription:
    'Ajoutez l’appareil de votre enfant pour commencer à surveiller le temps d’écran et l’utilisation des applications.',

  setupFamilyTitle: 'Configurer votre famille',
  setupFamilyDescription:
    'Créez une famille pour connecter les appareils de vos enfants ou rejoignez-en une grâce à une invitation d’un autre parent.',
  createFamilyButton: 'Créer une famille',
  joinFamilyButton: 'Rejoindre une famille',

  switchToJoinTitle: 'Rejoindre une autre famille ?',
  switchToJoinMessage:
    'Cette action supprimera votre famille vide afin que vous puissiez rejoindre une autre famille à l’aide d’un code d’invitation. Si un appareil enfant est déjà associé, vous devrez d’abord le gérer.',

  guestEmptyTitle: 'Votre famille commence ici',
  guestEmptyDescription:
    'Connectez-vous pour associer les appareils de vos enfants, recevoir des alertes et définir des limites de temps d’écran adaptées.',

  guestConnectButton: 'Se connecter',
  guestCreateAccount: 'Créer un compte parent',

  guestBenefitLimitsTitle: 'Temps d’écran et limites d’applications',
  guestBenefitLimitsBody:
    'Verrouillez les appareils et définissez des horaires quotidiens.',

  guestBenefitAlertsTitle: 'Alertes SOS et d’activité',
  guestBenefitAlertsBody:
    'Soyez informé immédiatement lorsqu’une intervention est nécessaire.',

  guestBenefitLocationTitle: 'Position et Check-Ins',
  guestBenefitLocationBody:
    'Voyez où se trouve votre enfant et demandez-lui de confirmer qu’il est en sécurité.',

  stepsHeading: 'Premiers pas',

  step1Title: 'Appuyez sur « Ajouter un appareil d’enfant »',
  step1Description: 'Un QR code de couplage s’affiche ici, prêt à être scanné.',

  step2Title: 'Scannez-le depuis l’appareil de l’enfant',
  step2Description:
    'Téléchargez KidGate sur le téléphone ou la tablette de votre enfant, choisissez « Cet appareil appartient à un enfant », puis scannez le code.',

  connectChildButton: 'Connecter un appareil enfant',
  listHint: 'Faites glisser un appareil vers la gauche pour le supprimer',

  removeAlertTitle: 'Supprimer l’appareil ?',
  removeAlertMessage:
    '{{deviceName}} sera déconnecté de votre compte. Toutes les demandes de temps et l’historique d’activité associés seront supprimés.',

  toastRemoveFailed: 'Impossible de supprimer l’appareil. Veuillez réessayer.',

  swipeRemoving: 'Suppression…',
  swipeRemove: 'Supprimer',

  deviceNotFound: 'Appareil introuvable',
  deviceMayHaveBeenRemoved: 'Cet appareil a peut-être été supprimé de votre compte.',

  deviceNotFoundError: 'Appareil introuvable',

  deviceRemovedAlertTitle: 'Appareil supprimé',
  deviceRemovedAlertMessage:
    'Un parent a supprimé cet appareil du compte familial. Sélectionnez à nouveau le rôle Enfant pour le reconnecter.',

  deviceNotRegistered: 'Cet appareil n’est pas encore enregistré.',

  defaultDeviceName: 'Appareil de l’enfant',
  fallbackDeviceName: 'Appareil de l’enfant',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'iPhone du parent',
  parentAndroid: 'Android du parent',
  childIphone: 'iPhone de l’enfant',
  parentIpad: 'iPad du parent',
  childIpad: 'iPad de l’enfant',
  childAndroid: 'Android de l’enfant',

  deviceFallbackName: 'Appareil',

  iosVersionLabel: 'iOS {{version}}',
  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'PC Windows',
  androidTv: 'Android TV',

  deviceNameRequired: 'Veuillez saisir un nom pour l’appareil.',

  deviceNameTooLong: 'Le nom de l’appareil ne peut pas dépasser {{max}} caractères.',

  lastActiveDate: 'Dernière activité : {{date}}',
  lastActiveUnknown: 'Aucune activité récente',

  thisDevice: 'Cet appareil',
  thisDeviceYou: 'Cet appareil (Vous)',
  namedDeviceYou: '{{name}} (Vous)',

  deviceNameSaved: 'Le nom de l’appareil a été mis à jour.',

  deviceSectionTitle: 'Appareil',
  deviceNameLabel: 'Nom de l’appareil',

  editDeviceNameTitle: 'Modifier le nom de l’appareil',

  editDeviceNameSubtitle:
    'Seul le propriétaire de la famille peut renommer les appareils. Maximum {{maxLength}} caractères.',

  deviceNameInputLabel: 'Nom de l’appareil',

  deviceNamePlaceholder: 'iPhone de Lucas',

  unableToUpdateDeviceName:
    'Impossible de mettre à jour le nom de l’appareil. Veuillez réessayer.',

  osLabelFallback: 'Système',
  iosLabel: 'iOS',
  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — intervention requise',

  waitingForCheckIn: 'En attente du Check-In',

  timeRequestsWaiting: '{{count}} demandes de temps en attente',

  timeRequestsWaiting_one: '{{count}} demande de temps en attente',

  youPausedThisDevice: 'Vous avez verrouillé cet appareil',

  blockedHoursActiveNow: 'Heures bloquées actives',

  inactiveOpenKidGate: 'Inactif — veuillez ouvrir KidGate sur cet appareil',

  protectionNeedsSetup: '{{issueLabel}} nécessite une configuration',

  dailyLimitOn: 'Limite quotidienne activée',

  deviceReady: 'Prêt',

  sos: 'SOS',

  deviceLocked: 'Appareil verrouillé',

  deviceUnlocked: 'Appareil déverrouillé',

  parentPausedChildDevice: '{{actorName}} a verrouillé cet appareil enfant.',

  parentRestoredChildDevice: '{{actorName}} a déverrouillé cet appareil enfant.',

  parentFallback: 'Un parent',

  formerParent: 'Un parent qui a quitté la famille',
  batteryPercent: '{{percent}} %',
  batteryAccessibility: 'Batterie à {{percent}} pour cent',
  batteryChargingAccessibility: 'Batterie à {{percent}} pour cent, en charge',
} as const;
