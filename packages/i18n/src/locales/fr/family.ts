export const family = {
  title: 'Famille',
  connectButton: 'Connecter',
  connectAccessibility: 'Ajouter un appareil enfant ou parent',
  addDeviceTitle: 'Ajouter un appareil',
  addDeviceMessage: 'Que souhaitez-vous connecter ?',
  addChildOption: 'Ajouter un appareil d’enfant',
  addJoinFamilyOption: 'Rejoindre une famille',
  addParentOption: 'Inviter un parent',
  loginWebOption: 'Se connecter sur le web',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: 'Qui utilise {{deviceName}}\u00a0?',
  assignSheetBody:
    'Le temps d’écran et les étoiles comptent pour l’enfant que vous choisissez.',
  assignSheetNobody: 'Personne',
  assignSheetNobodyHint: 'Appareil partagé — ne compte pour personne.',
  assignSheetAddAndAssign: 'Ajouter et attribuer',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: 'Protéger {{childName}} maintenant ?',
  quickProtectBody:
    'Activez un ensemble de protections de départ. Vous pourrez tout affiner plus tard dans le profil de l’enfant.',
  quickProtectBedtime: 'Heures bloquées pour la nuit',
  quickProtectBedtimeHint: 'Bloque l’utilisation de l’appareil la nuit, de 22 h à 7 h.',
  quickProtectDailyLimit: 'Limite quotidienne de temps d’écran',
  quickProtectDailyLimitHint:
    '{{minutes}} minutes par jour, partagées entre tous ses appareils.',
  quickProtectWebFilter: 'Filtre web',
  quickProtectWebFilterHint:
    'Bloque les contenus pour adultes et d’autres catégories à risque.',
  quickProtectWebFilterPremium: 'Fonction Premium — incluse avec un abonnement.',
  quickProtectApply: 'Activer la protection',
  quickProtectSkip: 'Pas maintenant',
  quickProtectDone: 'La protection est activée. Affinez-la quand vous voulez.',
  quickProtectPartial:
    'Certaines protections n’ont pas pu être enregistrées. Réessayez depuis le profil de l’enfant.',
  pairDeviceFirstTitle: 'Aucun appareil associé pour le moment',
  pairDeviceFirstBody:
    'Associez d’abord un appareil pour cet enfant — dans l’onglet Famille, appuyez sur l’icône de scan ou « + » et choisissez « Ajouter un appareil d’enfant ». Ce réglage prend effet dès qu’un appareil se connecte.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'Tout verrouiller',
  unlockAll: 'Tout déverrouiller',
  lockAllA11y: 'Verrouiller tous les appareils de {{childName}}',
  unlockAllA11y: 'Déverrouiller tous les appareils de {{childName}}',
  childDetailUnassignTitle: 'Retirer de l’enfant ?',
  childDetailUnassignBody:
    '{{deviceName}} ne comptera plus pour {{childName}} et passera dans Non attribué. Il reste appairé et protégé.',
  childDetailUnassignConfirm: 'Retirer',
  childDetailUnassignA11y: 'Retirer {{deviceName}} de cet enfant',
  // The fold control on a group heading.
  collapseGroupA11y: 'Réduire {{name}}',
  expandGroupA11y: 'Développer {{name}}',
  assignDeviceCta: 'Attribuer à un enfant…',
  unassignedHint: 'Ces appareils ne comptent encore pour personne.',
  unassignedHintMember:
    'Le propriétaire de la famille attribue ces appareils aux enfants.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Enfants sans appareil',
  // Child detail screen.
  childDetailStarsWell: 'Étoiles cette semaine',
  childStarsA11y: 'Étoiles cette semaine : {{count}}',
  childDetailDevicesTitle: 'Appareils',
  childDetailSwipeHint: 'Balayez un appareil pour annuler son attribution.',
  childDetailAssignMore: 'Attribuer un autre appareil…',
  childDetailAssignSheetTitle: 'Attribuer un appareil à {{childName}}',
  childDetailNoDevices:
    'Pas encore d’appareil. Attribuez-en un ci-dessous ou associez-en un nouveau depuis l’onglet Famille.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Aucun appareil pour l’instant. Seul le propriétaire de la famille décide à qui appartient un appareil.',
  childDetailEditNameTitle: 'Modifier le nom',
  childDetailColorLabel: 'Couleur',
  scanButtonAccessibility: 'Scanner un code',
  scanTitle: 'Scanner un code',
  scanBody:
    'Pointez la caméra vers un appareil enfant, une invitation familiale ou le code affiché sur un ordinateur.',
  manualCodeLabel: 'Saisissez le code à 6 caractères',
  manualInstructions: 'Saisissez le code à 6 caractères affiché sur l’autre appareil.',
  headerHintEmpty: 'Gérez et protégez les appareils de vos enfants',
  headerHintGuest:
    'Parcourez librement — connectez-vous lorsque vous êtes prêt à connecter des appareils',
  familyCardManage: 'Gérer la famille, les parents et les appareils',
  familyCardJoined: 'Rejoint en tant que parent',
  chipDeviceCount: '{{count}} appareils',
  chipDeviceCount_one: '{{count}} appareil',
  chipOnlineCount: '{{count}} en ligne',
  metaOnlineCount: '{{online}}/{{count}} en ligne',
  metaOnlineCount_one: '1 appareil en ligne',
  chipSosCount: '{{count}} SOS',
  chipCheckInCount: '{{count}} Check-ins',
  chipCheckInCount_one: '{{count}} Check-in',
  chipRequestCount: '{{count}} demandes',
  chipRequestCount_one: '{{count}} demande',
  chipNeedsSetupCount: '{{count}} à configurer',
  chipNeedsSetupCount_one: '{{count}} à configurer',
  chipProtectedCount: '{{count}} protégés',
  childDevicesProtected: '{{count}} appareils protégés',
  chipHealthWarnCount: '{{count}} à configurer',
  chipHealthWarnCount_one: '{{count}} à configurer',
  chipHealthInactiveCount: '{{count}} inactifs depuis plus de 24 h',
  chipBlockedCount: '{{count}} bloqués',
  healthProtected: 'Protégé',
  buildOutdated: 'Mise à jour disponible',
  healthNeedsSetup: 'Configuration requise',
  healthOffline: 'Hors ligne',
  devicePausedLabel: 'En pause',
  devicePausedHint:
    'En pause avec l’offre gratuite : toutes les règles restent actives',
  parkedBannerTitle: 'Choisissez l’appareil que vous continuez à suivre',
  parkedBannerBody:
    'Vos règles s’appliquent sur tous les appareils. L’offre gratuite reçoit les rapports d’un seul : choisissez-le, ou passez à Premium pour les garder tous.',
  parkedBannerAction: 'Choisir l’appareil',
  chooseMonitoredTitle: 'Quel appareil doit envoyer ses rapports ?',
  chooseMonitoredBody:
    'Toutes les règles restent actives sur tous. Seul celui que vous choisissez envoie le temps d’écran et la position. Vous pouvez en changer une fois tous les {{days}} jours.',
  chooseMonitoredConfirm: 'Suivre cet appareil',
  chooseMonitoredUpgrade: 'Garder tous les appareils : passer à Premium',
  chooseMonitoredDone: '{{name}} est désormais l’appareil qui envoie ses rapports',
  monitoredCooldown:
    'L’appareil qui envoie ses rapports ne peut changer qu’une fois tous les {{days}} jours',
  monitoredChooseFailed: 'Impossible de changer l’appareil qui envoie ses rapports',

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

  guestBenefitLocationTitle: 'Position et Check-ins',
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
  chromebook: 'Chromebook',

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

  waitingForCheckIn: 'En attente du Check-in',

  timeRequestsWaiting: '{{count}} demandes de temps en attente',

  timeRequestsWaiting_one: '{{count}} demande de temps en attente',

  youPausedThisDevice: 'Vous avez verrouillé cet appareil',

  lockSentWaitingForDevice: 'Verrouillage envoyé — en attente de l’appareil',

  lockNotAppliedOnDevice: 'Cet appareil n’a pas appliqué le verrouillage',

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
  childDetailPerDevice: 'Par appareil — choisissez lequel',
  childDetailNotAvailable: 'Non disponible',
  childDetailNotAvailableReason: 'Aucun de ses appareils ne le permet',
  childDetailProtectionOk: 'Protégé',
  childDetailProtectionAttention: '{{count}} appareils nécessitent votre attention',
  childDetailProtectionAttention_one: '{{count}} appareil nécessite votre attention',
  childDetailProtectionSheetTitle: 'Protection par appareil',
  childDetailRemoveTitle: 'Supprimer le profil de {{childName}}',
  childDetailRemovingButton: 'Retrait…',
  childDetailOnlineCount: '{{online}} sur {{total}} en ligne',
  childDetailBudgetTitle: 'Limite quotidienne',
  childDetailSectionControls: 'Règles sur tous ses appareils',
  childDetailSectionSafety: 'Regroupé depuis tous ses appareils',
  childDetailSectionAlerts: 'Tous ses appareils, un seul fil',
  childDetailScopeAll: 'Tous les appareils',
  childDetailTodayWell: 'Utilisé aujourd’hui',
  childDetailUnassignAction: 'Retirer',
  childDetailLimitShared: 'Total sur tous ses appareils',
} as const;
