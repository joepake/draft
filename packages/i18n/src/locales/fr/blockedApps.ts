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
    'Vous recevez une notification, et l’application apparaît ci-dessous et dans Applications jusqu’à ce que vous l’autorisiez.',
  installApprovalInfoLine3:
    'Autoriser une application lui permet de s’ouvrir immédiatement. Une application que vous n’autorisez pas reste simplement bloquée.',
  pendingSectionTitle: 'Bloquées automatiquement, en attente de votre décision',
  pendingSectionSubtitle:
    'Installées après l’activation de l’approbation. Rien ici n’a été choisi sur l’appareil de l’enfant.',
  pendingInstalledAt: 'Installée {{when}}',
  pendingEmpty: 'Aucune nouvelle application en attente d’approbation.',
  allowApp: 'Autoriser',
  allowingApp: 'Autorisation…',
  toastAppAllowed: '{{appName}} peut désormais s’ouvrir.',
  toastAllowFailed: 'Impossible d’autoriser cette application. Veuillez réessayer.',
  toastInstallApprovalSaveFailed: 'Impossible d’enregistrer. Veuillez réessayer.',
  toastChooseAppsFirst:
    'Demandez d’abord à votre enfant d’ouvrir les paramètres de KidGate et de sélectionner les applications à bloquer.',
  toastSaveFailed: 'Impossible d’enregistrer. Veuillez réessayer.',
  statusBlockingOn: 'Blocage activé',
  statusBlockingOff: 'Blocage désactivé',
  heroTitle: 'Applications sélectionnées pour le blocage',
  heroSubtitle:
    'Ces applications et catégories sont sélectionnées sur l’appareil de l’enfant. KidGate synchronise cette liste afin que vous puissiez la consulter.',
  statAppsLabel: 'Applications',
  statCategoriesLabel: 'Catégories',
  toggleTitle: 'Activer le blocage des applications',
  toggleSubtitleOn:
    'Les applications sélectionnées sont bloquées sur l’appareil de l’enfant.',
  toggleSubtitleOff:
    'Activez cette option pour bloquer à distance les applications sélectionnées.',
  toggleAccessibilityLabel: 'Activer le blocage des applications',
  emptyTitle: 'Aucune application bloquée',
  emptySubtitle:
    'Sur l’appareil de l’enfant, ouvrez les Réglages KidGate → Choisir les applications à bloquer, saisissez le code PIN parent, puis enregistrez la sélection.',
  sectionTitle: 'Liste des applications bloquées',
  privacyTitle: 'La liste des applications provient de l’appareil de l’enfant',
  privacySubtitle:
    'Sous iOS, Apple peut masquer les noms exacts des applications sur les appareils des parents. Sur les autres appareils, les noms des applications sélectionnées sont synchronisés ici. Pour modifier la liste, le code PIN parent est toujours requis sur l’appareil de l’enfant.',
  infoTitle: 'Fonctionnement',
  infoLine1:
    'Sélectionnez les applications sur l’appareil de l’enfant après avoir saisi le code PIN parent.',
  infoLine2:
    'Le verrouillage, les Heures bloquées et la Limite quotidienne continuent de bloquer toutes les applications.',
  infoLine3:
    'Vous pouvez activer ou désactiver le blocage à tout moment depuis cet écran.',
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
  appBlockingSectionTitle: 'Blocage des applications',
  appBlockingSectionDescription:
    'Choisissez les applications que les parents peuvent bloquer sur cet appareil.',
  savedItemsForBlocking: '{{count}} éléments enregistrés pour le blocage.',
  savedItemsForBlocking_one: '{{count}} élément enregistré pour le blocage.',
  noAppsSelected: 'Aucune application sélectionnée.',
  unableToOpenAppPicker:
    'Impossible d’ouvrir le sélecteur d’applications. Veuillez réessayer.',
  wizardStepPin: 'Saisissez le code PIN parent lorsque les Réglages le demandent.',
  wizardStepChoose:
    'Ouvrez « Choisir les applications à bloquer », cochez les applications et enregistrez.',
} as const;
