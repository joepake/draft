export const activities = {
  title: 'Activité',
  subtitleAllDevices: 'Derniers événements sur tous les appareils',
  subtitleTimelineForDevice: 'Historique de {{deviceName}}',
  fallbackDeviceName: 'appareil',
  liveBadge: 'En direct',
  errorTitle: 'Impossible de charger l’activité',
  tryAgain: 'Réessayer',

  emptyTitleAll: 'Aucune activité pour le moment',
  emptyTitleDevice: 'Aucune activité pour cet appareil',
  emptyDescriptionAll:
    'Les événements de verrouillage, déverrouillage et SOS des appareils de vos enfants apparaîtront ici.',
  emptyDescriptionDevice:
    'Sélectionnez un autre appareil ou attendez que des événements de verrouillage, déverrouillage et SOS soient enregistrés sur cet appareil.',

  guestEmptyTitle: 'Votre activité',
  guestEmptyDescription:
    'Une fois qu’un appareil enfant est connecté, les événements de verrouillage, déverrouillage, SOS et applications apparaîtront ici en temps réel.',
  guestSignInButton: 'Se connecter',
  guestCreateAccount: 'Créer un compte parent',
  guestSubtitle: 'Connectez-vous pour suivre l’activité des appareils de vos enfants',

  guestPreviewHeading: 'Ce que vous verrez',
  guestPreviewLock: 'Appareil verrouillé',
  guestPreviewSos: 'Alerte SOS',
  guestPreviewScreenTime: 'Mise à jour du Temps d’écran',
  guestPreviewHint:
    'Exemple — les événements réels apparaîtront une fois l’appareil connecté',

  activityTypeLocked: 'Verrouillé',
  activityTypeUnlocked: 'Déverrouillé',
  activityTypeAppOpened: 'Application ouverte',
  activityTypeAppBlocked: 'Application bloquée',
  activityTypeAppInstalled: 'Application installée',
  activityTypeAppRemoved: 'Application désinstallée',
  activityTypePlaceEnter: 'Lieu rejoint',
  activityTypePlaceExit: 'Lieu quitté',
  activityTypeTamper: 'Protection',
  activityTypeScreenTime: 'Temps d’écran',
  activityTypeEmergency: 'Urgence',
  activityTypeUnknown: 'Activité',

  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Une application bloquée a été ouverte et KidGate l’a fermée.',
  appInstalledTitle: '{{appName}}',
  appInstalledBody:
    'Une nouvelle application a été installée sur l’appareil de l’enfant.',

  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'Une application a été désinstallée de l’appareil de l’enfant.',

  placeEnterTitle: 'Entrée dans {{placeName}}',
  placeEnterBody: 'L’appareil de l’enfant est entré dans un lieu enregistré.',

  placeExitTitle: 'Sortie de {{placeName}}',
  placeExitBody: 'L’appareil de l’enfant a quitté un lieu enregistré.',

  tamperTitle: 'Une autorisation de protection a été désactivée',
  tamperFallbackTitle: 'Une autorisation de protection a été désactivée',
  tamperFallbackBody:
    'Une autorisation de protection a été désactivée sur l’appareil de l’enfant.',

  tamperOverlayTitle:
    'L’autorisation « Afficher par-dessus les autres applications » a été désactivée',
  tamperOverlayBody:
    'L’écran de verrouillage risque de ne plus s’afficher au-dessus des autres applications tant que cette autorisation n’est pas réactivée.',

  tamperAccessibilityTitle: 'L’accessibilité a été désactivée',
  tamperAccessibilityBody:
    'Le blocage des applications et l’application des restrictions peuvent ne plus fonctionner correctement tant que l’accessibilité n’est pas réactivée.',
  tamperUsageAccessTitle: 'L’accès à l’utilisation des apps a été désactivé',
  tamperUsageAccessBody:
    'Les limites d’apps et les Heures bloquées peuvent cesser de fonctionner tant que KidGate ne peut pas de nouveau mesurer l’utilisation des apps sur l’appareil de l’enfant.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'L’accès au Temps d’écran a été désactivé',
  tamperScreenTimeIosBody:
    'Les limites d’apps et les Heures bloquées peuvent cesser de fonctionner tant que l’accès au Temps d’écran n’est pas de nouveau autorisé sur l’appareil de l’enfant.',
  tamperUsageAccessAndroidTitle: 'L’accès à l’utilisation a été désactivé',
  tamperUsageAccessAndroidBody:
    'Les limites d’apps et les Heures bloquées peuvent cesser de fonctionner tant que l’accès à l’utilisation n’est pas réactivé pour KidGate sur l’appareil de l’enfant.',

  tamperBatteryTitle: 'L’utilisation illimitée de la batterie a été désactivée',
  tamperBatteryBody:
    'Le système peut suspendre KidGate jusqu’à ce que l’utilisation de la batterie soit de nouveau définie sur Illimitée.',

  tamperExactAlarmTitle: 'Alarmes et rappels désactivé',
  tamperExactAlarmBody:
    'Les Heures bloquées peuvent commencer ou se terminer en retard tant qu’Alarmes et rappels n’est pas de nouveau autorisé.',

  tamperNotificationsTitle: 'Les notifications ont été désactivées',
  tamperNotificationsBody:
    'Les commandes à distance et les alertes destinées aux parents risquent de ne plus être reçues correctement sur cet appareil.',

  tamperLocationTitle: 'La localisation a été désactivée',
  tamperLocationBody:
    'Les parents ne recevront plus les mises à jour de localisation tant que l’autorisation ne sera pas réactivée.',

  tamperCameraTitle: 'La caméra a été désactivée',
  tamperCameraBody:
    'Les photos SOS et Check-In risquent de ne plus être envoyées tant que l’accès à la caméra n’est pas rétabli.',

  tamperBackgroundRefreshTitle: 'L’actualisation en arrière-plan a été désactivée',
  tamperBackgroundRefreshBody:
    'KidGate peut se mettre à jour moins fréquemment en arrière-plan tant que cette fonction n’est pas réactivée.',

  tamperDeviceClockTitle: 'La date ou l’heure a été modifiée',
  tamperDeviceClockBody:
    'L’horloge de cet appareil ne correspond plus à l’heure correcte. Le Temps d’écran et les Heures bloquées continueront d’utiliser l’heure correcte.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay:
    'L’autorisation « Afficher par-dessus les autres applications » a été désactivée.',
  tamperAccessibility: 'Le service d’accessibilité a été désactivé.',
  tamperUsageAccess: 'L’accès à l’utilisation a été désactivé.',
  tamperBattery: 'L’utilisation illimitée de la batterie a été désactivée.',
  tamperExactAlarm: 'L’autorisation Alarmes et rappels a été désactivée.',
  tamperNotifications: 'L’autorisation des notifications a été désactivée.',
  tamperLocation: 'L’autorisation de localisation a été désactivée.',
  tamperCamera: 'L’autorisation de la caméra a été désactivée.',
  tamperBackgroundRefresh: 'L’actualisation en arrière-plan a été désactivée.',

  filterAllDevices: 'Tous les appareils',
  dateToday: 'Aujourd’hui',
  dateYesterday: 'Hier',

  filterByDevice: 'Filtrer par {{label}}',

  openFullSosHistory: 'Ouvrir l’historique complet des alertes SOS',

  unknownDevice: 'Appareil inconnu',

  basicActivityNote:
    'Les événements de verrouillage, déverrouillage et du système sont enregistrés dans Activités.',
  tamperUninstallProtectionTitle: 'Protection contre la désinstallation désactivée',
  tamperUninstallProtectionBody:
    'KidGate peut désormais être supprimé de ce téléphone.',
} as const;
