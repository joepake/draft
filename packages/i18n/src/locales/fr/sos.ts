export const sos = {
  title: 'Alertes SOS',
  subtitle: '{{deviceName}} · les photos apparaissent ci-dessous une fois envoyées',
  fallbackDeviceName: 'Appareil de l’enfant',
  fallbackChildName: 'Enfant',
  locationUnavailable: 'Position indisponible',
  statusNeedsAttention: 'Attention requise',
  statusAcknowledged: 'Pris en charge',
  viewPhotoAccessibility: 'Voir la photo SOS',
  photoTapHint: 'Appuyez pour voir la photo en entier',
  photoLoadFailed:
    'Impossible de charger cette photo. Vérifiez votre connexion et réessayez.',
  noPhoto: 'Aucune photo jointe à cette alerte.',
  acknowledgedAt: 'Pris en charge {{time}}',
  openInMaps: 'Ouvrir dans Plans',
  acknowledgeButton: 'Je m’en occupe',
  acknowledgingButton: 'Enregistrement…',
  toastAcknowledgeFailed:
    'Impossible de confirmer la prise en charge. Réessayez dans un instant.',
  emptyTitle: 'Aucune alerte SOS pour le moment',
  emptyDescription:
    'Quand votre enfant maintient le bouton SOS pendant 5 secondes, les alertes apparaissent ici avec une photo et sa position.',
  alertMessage: '{{childName}} a besoin d’aide — un SOS a été envoyé',
  toastSent:
    'SOS envoyé. Reste dans un endroit sûr si tu peux — tes parents ont été prévenus.',
  toastSentWithoutPhoto:
    'SOS envoyé, mais sans photo. Autorise l’appareil photo dans les Réglages et réessaie si tu peux.',
  toastSendFailed:
    'Impossible d’envoyer le SOS. Réessaie, ou appelle une personne de confiance.',
  sendFailedBannerTitle: 'Ton dernier SOS n’a pas été envoyé',
  sendFailedBannerBody:
    'Maintiens à nouveau le bouton pour réessayer. Si ça continue d’échouer, appelle immédiatement une personne de confiance.',
  headerTitle: 'SOS d’urgence',
  headerSubtitle:
    'Utilise ce bouton si tu te sens en danger ou as besoin d’aide tout de suite.',
  infoInstantAlertLabel: 'Alerte instantanée',
  infoInstantAlertDetail:
    'Tes parents reçoivent une notification urgente immédiatement.',
  infoYourLocationLabel: 'Ta position',
  infoYourLocationDetail: 'Partagée avec tes parents pour qu’ils sachent où tu es.',
  infoQuickSelfieLabel: 'Une photo rapide',
  infoQuickSelfieDetail:
    'Ajoutée après l’envoi de l’alerte, si l’appareil photo est déjà disponible.',
  simulatorTipTitle: 'Astuce simulateur',
  simulatorTipBody:
    'Activez l’appareil photo dans le menu du simulateur (caméra frontale) avant d’envoyer un SOS afin de capturer une photo de test.',
  guidanceTitle: 'Avant d’envoyer',
  guidanceItem1: 'Essaie de rester dans un endroit sûr pendant que de l’aide arrive.',
  guidanceItem2:
    'Si tu peux, appelle aussi un adulte de confiance ou les services d’urgence.',
  whatParentsReceive: 'Ce que reçoivent tes parents',
  holdToSendFiveSeconds: 'Maintiens pour envoyer · 5 secondes',
  keepHolding: 'Continue à maintenir',
  pressAndHoldToCancel: 'Appuie et maintiens — relâche avant la fin pour annuler',
  holdToSendSosAccessibility: 'Maintiens pendant 5 secondes pour envoyer un SOS',
  sosEmergencyAccessibility: 'Urgence SOS',
  sosEmergencyAlert: 'Alerte d’urgence SOS',
  sosAlertSent: 'Alerte SOS envoyée',
  sosAlertSentDescription: '{{deviceName}} a envoyé un SOS — de l’aide est nécessaire.',
  deviceNeedsHelp: '{{deviceName}} a besoin d’aide',
  tapPhotoToEnlarge: 'Appuyez sur la photo pour l’agrandir',
  noPhotoAttached: 'Aucune photo n’a été jointe à cette alerte.',
  sentRelativeTime: 'Envoyé {{relativeTime}}',
  imOnIt: 'Je m’en occupe',
  acknowledging: 'Confirmation en cours…',
  unableToAcknowledgeSos:
    'Impossible de confirmer la prise en charge. Réessayez dans un instant.',
  noLocationSharedWithSos: 'Aucune position n’a été partagée avec ce SOS.',
  emergencySos: 'SOS d’urgence',
  devicePausedAccessibility: 'Appareil verrouillé par un parent',
  openEmergencySos: 'Ouvrir le SOS d’urgence',
  sosAlertsNote:
    'Affiche les alertes SOS d’urgence envoyées depuis l’appareil de l’enfant, avec la position.',
  openLocationInMapsAccessibility: 'Ouvrir la position dans Plans',
  badgeLabel: 'SOS',
  muteAlarm: 'Couper cette alerte',
  alertCount: '{{current}} sur {{total}}',
} as const;
