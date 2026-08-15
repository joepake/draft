export const location = {
  title: 'Localisation',
  fallbackDeviceName: 'Appareil de l’enfant',
  toastUpdateFailed:
    'Impossible de mettre à jour le partage de position. Veuillez réessayer.',
  toggleLabel: 'Partager la position',
  toggleHint:
    'Ouvrez KidGate une fois sur cet appareil après avoir activé cette option.',
  toggleAccessibilityLabel: 'Partager la position',
  lastKnownLocation: 'Dernière position connue',
  noLocationHint: 'Activez le partage, puis ouvrez KidGate une fois sur cet appareil.',
  waitingForLocation: 'En attente de la position',
  updatedAt: 'Mis à jour {{date}}',
  openInMaps: 'Ouvrir dans Plans',
  openInMapsAccessibility: 'Ouvrir dans Plans',
  refreshButton: 'Actualiser la position',
  refreshingButton: 'Actualisation…',
  refreshAccessibility: 'Actualiser la position',
  toastEnableSharingFirst:
    'Veuillez d’abord activer le partage de position avant de demander une actualisation.',
  activityTitleRefreshRequested: 'Actualisation de la position demandée',
  activityDescriptionRefreshRequested:
    'Une demande a été envoyée à {{deviceName}} pour transmettre sa position la plus récente.',
  toastRefreshSent:
    '{{deviceName}} mettra à jour sa position dès que la demande sera reçue.',
  toastRefreshFailed:
    'Impossible de demander l’actualisation de la position. Veuillez réessayer.',
  toastChildNeedsNotifications:
    'Veuillez ouvrir KidGate sur l’appareil de l’enfant et autoriser les notifications afin que les demandes d’actualisation de position puissent être reçues.',
  checkInBadge: 'Check-In',
  movementHistoryTitle: 'Historique des déplacements',
  historyEmpty:
    'Aucun historique pour le moment. Les points apparaîtront après une mise à jour de position ou un Check-In.',
  historyHighlightAccessibility: 'Mettre en évidence {{place}} sur la carte',
  historyOpenMapsAccessibility: 'Ouvrir {{place}} dans Plans',
  latestBadge: 'Dernier',
  unableToRequestLocationRefresh:
    'Impossible de demander une actualisation de la position',
  locationBannerTitle: 'Activer la localisation',
  locationBannerBody:
    'Votre parent souhaite connaître la position de cet appareil afin de s’assurer que vous êtes bien arrivé en toute sécurité.',
  allowLocationButton: 'Autoriser la localisation',
  locationNotAllowed:
    'La localisation n’est pas encore autorisée. Ouvrez Réglages → KidGate → Localisation (ou activez d’abord les Services de localisation). Sélectionnez de nouveau « Autoriser la localisation » si l’option Localisation n’apparaît pas.',
  locationServicesOff:
    'Les Services de localisation sont désactivés pour tout l’appareil. Ouvrez Réglages → Confidentialité et sécurité → Services de localisation, activez-les, puis revenez dans KidGate et sélectionnez « Autoriser la localisation ».',
  locationDeniedInSettings:
    'L’accès à la localisation a été refusé pour KidGate. Ouvrez Réglages → KidGate → Localisation et choisissez « Lorsque l’app est active » ou « Toujours ».',
  locationEnabled:
    'La localisation est activée. Veuillez choisir « Toujours autoriser » afin que KidGate puisse mettre à jour la position même lorsque l’application est fermée.',
  backgroundLocationTitle: 'Autoriser la localisation lorsque l’application est fermée',
  backgroundLocationBody:
    'KidGate a besoin d’accéder à la localisation en arrière-plan afin que les parents puissent voir où se trouve cet appareil, même lorsque l’application est fermée, pour assurer la sécurité de la famille.',
  locationNote:
    'Affiche la position de l’enfant lorsque le partage est activé sur son appareil.',
  placeAlertsNote:
    'Envoie des alertes de localisation pour le domicile, l’école et les autres lieux sûrs.',
  mapNoLocationsEmpty: 'Aucune position à afficher pour le moment',
  mapUnavailable: 'Carte indisponible. Veuillez vérifier votre connexion et réessayer.',
  historyShowMore: 'Voir {{count}} lieux de plus',
  historyShowMore_one: 'Voir 1 lieu de plus',
} as const;
