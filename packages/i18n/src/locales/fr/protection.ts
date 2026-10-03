export const protection = {
  permissionOffOnChildDevice:
    'Cette autorisation est désactivée sur l’appareil de l’enfant.',
  permissionNotSetUpYet: 'Cette autorisation n’a pas encore été configurée.',
  permissionRestrictedByIos: 'Cette autorisation est restreinte par les réglages iOS.',
  permissionStatusUnknown: 'KidGate n’a pas pu lire l’état de cette autorisation.',
  kidGateOffline: 'KidGate silencieux depuis plus de 24 h',
  childAppMayBeOffline:
    'L’app sur l’appareil de l’enfant est peut-être fermée, supprimée ou hors ligne.',
  statusNotUpdatedYet: 'État pas encore mis à jour',
  openKidGateOnChildPhone:
    'Veuillez ouvrir KidGate une fois sur l’appareil de l’enfant.',
  screenTimePermission: 'Autorisation Temps d’écran',
  screenTimeAccessOff:
    'L’accès à Temps d’écran est désactivé : le blocage des apps et les limites risquent de ne plus fonctionner.',
  screenTimeSetupIncomplete:
    'La configuration de Temps d’écran est incomplète sur l’appareil de l’enfant.',
  usageAccessPermission: 'Accès à l’utilisation',
  usageAccessOff:
    'L’Accès à l’utilisation est désactivé : KidGate ne peut ni suivre le temps d’écran ni appliquer les limites.',
  usageAccessSetupIncomplete:
    'Veuillez activer l’Accès à l’utilisation pour KidGate dans les réglages Android.',
  overlayPermission: 'Superposition aux autres apps',
  batteryOptimizationPermission: 'Batterie sans restriction',
  batteryOptimizationOff:
    'Veuillez autoriser la batterie sans restriction pour que KidGate puisse maintenir les protections actives.',
  exactAlarmPermission: 'Alarmes et rappels',
  exactAlarmOff:
    'Autorisez Alarmes et rappels pour que les Heures bloquées commencent à l’heure.',
  accessibilityPermission: 'Accessibilité (assistant de verrouillage)',
  accessibilityOff:
    'Veuillez activer l’Accessibilité pour KidGate afin que le verrouillage reste au-dessus des autres apps.',
  overlayOffForLock:
    'Veuillez activer la Superposition aux autres apps pour que l’écran de verrouillage puisse recouvrir les autres apps.',
  lockNotReadyTitle: 'Verrouillage pas prêt',
  lockNotReadyBody:
    'KidGate ne peut pas maintenir cet appareil Android verrouillé tant que la Superposition aux autres apps et l’Accessibilité ne sont pas activées. Veuillez ouvrir KidGate sur l’appareil de l’enfant et terminer les étapes suivantes :',
  lockNotReadyBodyIos:
    'KidGate ne peut pas verrouiller cet iPhone tant que l’accès à Temps d’écran n’est pas autorisé sur l’appareil de l’enfant. Veuillez ouvrir KidGate sur cet appareil et terminer les étapes suivantes :',
  locationPermission: 'Autorisation de localisation',
  locationForegroundOnly:
    'La localisation ne se met à jour que lorsque KidGate est ouvert sur l’appareil de l’enfant.',
  cameraPermission: 'Autorisation caméra',
  microphonePermission: 'Autorisation micro',
  microphoneOff:
    'Le micro n’est pas autorisé sur cet appareil : un SOS envoyé depuis cet appareil arrivera sans son.',
  cameraConsentPending:
    'L’appareil photo n’est pas autorisé sur cet appareil : un SOS ou un Check-in envoyé depuis cet appareil arrivera sans photo.',
  locationConsentPending:
    'La position n’est pas autorisée sur cet appareil : il ne peut pas indiquer où il se trouve.',
  consentStepOpenSettings:
    'Ouvrez KidGate sur l’appareil de votre enfant et allez dans Réglages.',
  consentStepParentPin: 'Saisissez le code PIN parent.',
  consentStepPermissions: 'Ouvrez « Autorisations » et autorisez ce qui manque.',
  notificationsPermission: 'Autorisation de notifications',
  backgroundUpdates: 'Mises à jour en arrière-plan',
  backgroundUpdatesRestricted:
    'Les mises à jour en arrière-plan sont restreintes sur cet appareil.',
  turnOnBackgroundUpdatesInSettings:
    'Veuillez les activer dans les Réglages de l’appareil pour que KidGate reste synchronisé.',
  inactive: 'Inactif',
  openKidGateToSyncProtections:
    'Veuillez ouvrir KidGate sur cet appareil pour que les protections se synchronisent à nouveau.',
  needsAttention: 'Attention requise',
  protectionsNeedSetupAndroid:
    'Certaines protections doivent être configurées sur l’appareil de l’enfant.',
  protectionsNeedSetupIos:
    'Certaines protections doivent être configurées sur l’appareil de l’enfant.',
  protected: 'Protégé',
  protectionsLookHealthy: 'Les protections KidGate fonctionnent correctement.',
  healthBadgeProtected: 'Vert — protégé',
  healthBadgeWarning: 'Jaune — configuration requise',
  healthBadgeInactive: 'Rouge — appareil de l’enfant silencieux depuis plus de 24 h',
  iosUpgradeRequiredNote:
    'Ceci nécessite iOS 16 ou une version ultérieure. Mettez à jour l’appareil de l’enfant dans Réglages › Général › Mise à jour logicielle. Si aucune mise à jour n’est proposée, cet iPad ou iPhone est trop ancien pour être pris en charge par Apple.',
  iosUpgradeActionLabel: 'Nécessite iOS 16',
  appReviewRemindersNote:
    'iOS n’expose pas les événements d’installation ; vérifiez régulièrement les apps avec l’appareil de l’enfant.',
  screenTimeIndividualAuthorization:
    'Temps d’écran a été approuvé avec l’identifiant Apple propre à l’appareil de l’enfant : l’enfant peut désactiver KidGate dans Réglages sans code PIN et supprimer l’app. Seul un identifiant Apple enfant de votre groupe Partage familial rend ces contrôles durables.',
  screenTimeIndividualStepChildAppleId:
    'Connectez l’appareil de l’enfant avec un identifiant Apple enfant de votre groupe Partage familial.',
  screenTimeIndividualStepReapprove:
    'Ouvrez KidGate sur l’appareil de l’enfant et approuvez de nouveau Temps d’écran.',
} as const;
