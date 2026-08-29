export const location = {
  title: 'Localisation',
  fallbackDeviceName: 'Appareil de l’enfant',
  syncNote:
    'La localisation peut mettre quelques minutes à se mettre à jour — plus longtemps si l’appareil n’a pas de connexion Internet ou s’est fermé de façon inattendue.',
  toastUpdateFailed:
    'Impossible de mettre à jour le partage de position. Veuillez réessayer.',
  toggleLabel: 'Partager la position',
  toggleHint:
    'Ouvrez KidGate une fois sur cet appareil après avoir activé cette option.',
  toggleAccessibilityLabel: 'Partager la position',
  lastKnownLocation: 'Dernière position connue',
  nearPlace: 'Près de {{place}}',
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
  checkInBadge: 'Check-in',
  movementHistoryTitle: 'Historique des déplacements',
  historyEmpty:
    'Aucun historique pour le moment. Les points apparaîtront après une mise à jour de position ou un Check-in.',
  historyHighlightAccessibility: 'Mettre en évidence {{place}} sur la carte',
  historyOpenMapsAccessibility: 'Ouvrir {{place}} dans Plans',
  latestBadge: 'Dernier',
  unableToRequestLocationRefresh:
    'Impossible de demander une actualisation de la position',
  locationBannerTitle: 'Activer la localisation',
  locationBannerBody:
    'Tes parents veulent savoir où est cet appareil, pour être sûrs que tu es bien arrivé.',
  locationBannerBodySharingOff:
    'Le partage de position est désactivé pour le moment, donc rien n’est envoyé. En autorisant ici, tout fonctionnera tout de suite si tes parents l’activent plus tard.',
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
  childSharingHint: 'S’applique à chaque appareil attribué à {{childName}}.',
  childNoCapableDevices:
    'Aucun appareil de {{childName}} ne peut signaler sa position.',
  childCarriedQuestion: 'Quel appareil accompagne {{childName}} ?',
  childCarriedHint:
    'Sa position est lue depuis cet appareil. Une tablette restée à la maison peut signaler une position plus récente que le téléphone dans le sac — KidGate ne devine donc jamais.',
  childDevicesOnline: '{{online}} sur {{total}} en ligne',
  childNoneOnline: 'Aucun appareil en ligne',
  childPickCarried: 'L’accompagne',
  childPickCarriedA11y:
    'Définir {{deviceName}} comme l’appareil que {{childName}} emporte',
  stayRange: '{{from}} – {{to}}',
  placeTotalsTitle: 'Temps dans vos lieux',
  placeTotalsNote:
    'Sur les {{count}} derniers jours d’historique. Seuls les lieux enregistrés ici sont comptés.',
  placeTotalsNote_one:
    'Sur le dernier jour d’historique. Seuls les lieux enregistrés ici sont comptés.',
} as const;
