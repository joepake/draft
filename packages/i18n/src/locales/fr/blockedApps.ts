export const blockedApps = {
  title: 'Applications bloquées',
  installApprovalTitle: 'Approuver les nouvelles applications',
  installApprovalSubtitleOn:
    'Les applications installées à partir de maintenant restent bloquées jusqu’à ce que vous les approuviez.',
  installApprovalSubtitleOff:
    'Activez cette option pour bloquer chaque application nouvellement installée jusqu’à ce que vous l’approuviez.',
  installApprovalSubtitleIos:
    'Sur iPhone et iPad, cela masque l’App Store à la place — Apple ne permet pas d’approuver les applications une par une.',
  installApprovalStatusOn: 'Les nouvelles applications nécessitent une approbation',
  installApprovalStatusOff: 'Les nouvelles applications s’ouvrent librement',
  installApprovalStatusIos: 'App Store masqué',
  installApprovalAccessibilityLabel: 'Approuver les nouvelles applications',
  installApprovalInfoTitle: 'Comment fonctionne l’approbation',
  installApprovalInfoLine1:
    'L’appareil de l’enfant bloque toute application installée après l’activation de cette option, sans attendre votre réponse.',
  installApprovalInfoLine2:
    'Vous recevez une notification, et l’application apparaît ci-dessous, dans Applications bloquées, jusqu’à ce que vous l’autorisiez.',
  installApprovalInfoLine3:
    'Une application que vous autorisez s’ouvre en une minute sur un appareil d’enfant connecté. Une application que vous n’autorisez pas reste bloquée.',
  installApprovalInfoLine1Ios:
    'Tant que cette option est activée, l’App Store est masqué sur l’appareil de l’enfant : aucune nouvelle application ne peut donc être installée.',
  installApprovalInfoLine2Ios:
    'Les applications déjà présentes sur l’appareil continuent de fonctionner.',
  installApprovalInfoLine3Ios:
    'Pour laisser passer une application, désactivez cette option, installez l’application, puis réactivez l’option.',
  pendingSectionTitle: 'Nouvelles applications en attente',
  pendingInstalledAt: 'Installée {{when}}',
  pendingEmpty: 'Aucune nouvelle application en attente d’approbation.',
  allowApp: 'Autoriser',
  toastAppAllowed: '{{appName}} peut désormais s’ouvrir.',
  toastAllowFailed: 'Impossible d’autoriser cette application. Veuillez réessayer.',
  toastInstallApprovalSaveFailed: 'Impossible d’enregistrer. Veuillez réessayer.',
  toastChooseAppsFirst:
    'Choisissez d’abord les applications : ouvrez les Réglages KidGate sur l’appareil de l’enfant et saisissez le code PIN parent.',
  toastSaveFailed: 'Impossible d’enregistrer. Veuillez réessayer.',
  statusBlockingOn: 'Blocage activé',
  statusBlockingOff: 'Les applications sélectionnées s’ouvrent librement',
  heroTitle: 'Applications sélectionnées pour le blocage',
  heroSubtitle:
    'Ces applications et catégories sont sélectionnées sur l’appareil de l’enfant. KidGate synchronise cette liste afin que vous puissiez la consulter.',
  toggleTitle: 'Activer les Applications bloquées',
  toggleSubtitleOn:
    'Les applications sélectionnées sont bloquées sur l’appareil de l’enfant.',
  toggleSubtitleOff:
    'Activez cette option pour bloquer à distance les applications sélectionnées.',
  toggleAccessibilityLabel: 'Activer les Applications bloquées',
  emptyTitle: 'Aucune application bloquée',
  emptySubtitle:
    'Bloquez une application depuis Applications installées. Sur un iPhone, choisissez les applications sur l’iPhone lui-même.',
  emptySubtitleTv:
    'Sur la TV, ouvrez KidGate, sélectionnez « {{button}} », saisissez le code PIN parent, puis choisissez les applications et enregistrez.',
  sectionTitle: 'Liste des applications bloquées',
  privacyTitle: 'La liste des applications provient de l’appareil de l’enfant',
  privacySubtitle:
    'Sous iOS, Apple peut masquer les noms exacts des applications sur les appareils des parents. Sur les autres appareils, les noms des applications sélectionnées sont synchronisés ici. Pour modifier la liste, le code PIN parent est toujours requis sur l’appareil de l’enfant.',
  infoTitle: 'Fonctionnement',
  infoLine1:
    'Bloquez des applications depuis Applications installées. Sur un iPhone, choisissez-les sur l’iPhone avec le code PIN parent.',
  infoLine2:
    'Le verrouillage, les Heures bloquées et la Limite quotidienne continuent de bloquer toutes les applications.',
  infoLine3:
    'Vous pouvez activer ou désactiver le blocage à tout moment depuis cet écran. Un appareil d’enfant connecté reçoit chaque changement en une minute.',
  appKind: 'Application',
  categoryKind: 'Catégorie',
  websiteKind: 'Site Web',
  noAppsSelectedYet: 'Aucune application sélectionnée',
  blockedAppCount: '{{count}} applications',
  blockedAppCount_one: '{{count}} application',
  blockedCategoryCount: '{{count}} catégories',
  blockedCategoryCount_one: '{{count}} catégorie',
  blockedItemCount: '{{count}} éléments bloqués',
  blockedItemCount_one: '{{count}} élément bloqué',
  blockedListReady: 'Liste prête',
  blockedAppsLabel: 'Applications bloquées',
  appsConfiguredChip: 'Applications configurées',
  appsNotSetChip: 'Applications non configurées',
  appBlockingSectionTitle: 'Applications bloquées',
  appBlockingSectionDescription:
    'Choisissez les applications que les parents peuvent bloquer sur cet appareil.',
  savedItemsForBlocking: '{{count}} éléments enregistrés pour le blocage.',
  savedItemsForBlocking_one: '{{count}} élément enregistré pour le blocage.',
  noAppsSelected: 'Aucune application sélectionnée.',
  unableToOpenAppPicker:
    'Impossible d’ouvrir le sélecteur d’applications. Veuillez réessayer.',
  wizardStepPin: 'Saisissez le code PIN parent lorsque les Réglages le demandent.',
  wizardStepChoose:
    'Ouvrez « Applications bloquées », cochez les applications et enregistrez.',
  pickerSubtitle:
    'Choisissez les applications et catégories à bloquer sur cet appareil.',
  pickerSubtitleAndroid:
    'Les applications cochées sont fermées dès leur ouverture tant que « Applications bloquées » est activé.',
  pickerEmpty: 'Aucune application trouvée sur cet appareil.',
  blockingOffPill: 'Applications bloquées : désactivé',
} as const;
