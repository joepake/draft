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
    'KidGate a demandé à {{deviceName}} d’envoyer une position à jour.',
  toastRefreshSent:
    '{{deviceName}} mettra à jour sa position dès que la demande sera reçue.',
  toastRefreshFailed:
    'Impossible de demander l’actualisation de la position. Veuillez réessayer.',
  ringButton: 'Faire sonner l’appareil',
  toastRingSentAndroid: '{{deviceName}} sonnera dès que la demande sera reçue.',
  toastRingSentIos:
    '{{deviceName}} émettra un son dès que la demande sera reçue, sauf s’il est en mode silencieux ou qu’un mode de concentration est activé.',
  toastRingFailed: 'Impossible d’émettre un son sur l’appareil. Veuillez réessayer.',
  ringNotificationsOff:
    'Les notifications sont désactivées sur {{deviceName}}, il ne peut donc pas émettre de son. Activez-les dans les paramètres de cet appareil.',
  activityTitleRingRequested: 'Son demandé',
  activityDescriptionRingRequested:
    'KidGate a demandé à {{deviceName}} d’émettre un son pour le retrouver.',
  toastChildNeedsNotifications:
    'Veuillez ouvrir KidGate sur l’appareil de l’enfant et autoriser les notifications afin que les demandes d’actualisation de position puissent être reçues.',
  checkInBadge: 'Check-in',
  movementHistoryTitle: 'Historique des déplacements',
  historyEmpty:
    'Aucun historique pour le moment. Les points apparaîtront après une mise à jour de position ou un Check-in.',
  historyHighlightAccessibility: 'Mettre en évidence {{place}} sur la carte',
  historyOpenMapsAccessibility: 'Ouvrir {{place}} dans Plans',
  locationBannerTitle: 'Activer la localisation',
  locationBannerBody:
    'Tes parents veulent savoir où est cet appareil, pour être sûrs que tout va bien. KidGate partage la position de cet appareil avec tes parents, même quand l’app est fermée ou que tu ne l’utilises pas.',
  locationBannerBodySharingOff:
    'Le partage de position est désactivé pour le moment, donc rien n’est envoyé. En autorisant ici, tout fonctionnera tout de suite si tes parents l’activent plus tard. Une fois le partage activé, la position de cet appareil est envoyée même quand l’app est fermée ou que tu ne l’utilises pas.',
  allowLocationButton: 'Autoriser la localisation',
  locationNotAllowed:
    'La localisation n’est pas encore autorisée. Ouvre Réglages → KidGate → Position (ou active d’abord les Services de localisation). Sélectionne de nouveau « Autoriser la localisation » si l’option Position n’apparaît pas.',
  locationNotAllowedAndroid:
    'La localisation n’est pas encore autorisée. Sélectionne Ouvrir les Réglages, puis Autorisations → Position, et choisis « Toujours autoriser ».',
  locationServicesOff:
    'Les Services de localisation sont désactivés pour tout l’appareil. Ouvre Réglages → Confidentialité et sécurité → Services de localisation, active-les, puis reviens dans KidGate et sélectionne « Autoriser la localisation ».',
  locationDeniedInSettings:
    'L’accès à la localisation a été refusé pour KidGate. Ouvre Réglages → KidGate → Position et choisis « Lorsque l’app est active » ou « Toujours ».',
  foregroundOnly:
    'La localisation ne se met à jour que lorsque KidGate est ouvert. Sélectionne Ouvrir les Réglages, puis Position, et choisis « Toujours ».',
  foregroundOnlyAndroid:
    'La localisation ne se met à jour que lorsque KidGate est ouvert. Sélectionne Ouvrir les Réglages, puis choisis « Toujours autoriser ».',
  toastLocateFailed:
    'Impossible de trouver ta position pour le moment. Réessaie dans un instant.',
  mapNoLocationsEmpty: 'Aucune position à afficher pour le moment',
  mapHistoryEmpty:
    'Les points de déplacement apparaîtront sur la carte après la prochaine mise à jour de position.',
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
  childPickCarriedA11y:
    'Définir {{deviceName}} comme l’appareil que {{childName}} emporte',
  stayRange: '{{from}} – {{to}}',
  wizardStepAllow:
    'Sélectionne Autoriser, puis Toujours pour que les mises à jour continuent en arrière-plan.',
  wizardStepAllowAndroid:
    'Choisis « Lorsque vous utilisez l’appli », puis « Toujours autoriser » quand on te le demande, pour que les mises à jour continuent en arrière-plan.',
  requestNoFix:
    'Cet appareil n’a pas pu obtenir de position. La localisation n’y est peut-être pas encore autorisée.',
  requestIpOnly:
    'Cet appareil n’a pu qu’estimer sa position à partir de sa connexion Internet. Activez son Wi-Fi (pas besoin de se connecter), puis réessayez.',
  requestUnsupported: 'Cet appareil ne peut pas signaler sa position.',
  cardSharingOff: 'Le partage de position est désactivé',
  cardPermissionOff: 'La position n’est pas autorisée sur cet appareil',
  cardForegroundOnly:
    'La position ne se met à jour que lorsque KidGate est ouvert sur cet appareil',
  cardIpOnly:
    'Cet appareil ne peut pas être localisé : activez son Wi-Fi (pas besoin de se connecter)',
  cardNotUpdating: 'La position ne se met plus à jour',
  namesNeedPremium: 'Les noms de lieux nécessitent une offre payante',
  namesNeedPremiumTrialEnded:
    'Votre essai est terminé. Passez à l’offre supérieure pour voir les noms de lieux en entier.',
  namesNeedPremiumStill:
    'Les positions sont toujours enregistrées, et les lieux que vous avez enregistrés affichent toujours leur nom.',
  awayFromPlace: 'À {{distance}} de {{place}}, direction {{direction}}',
  distanceKm: '{{value}} km',
  distanceMeters: '{{value}} m',
  compassN: 'nord',
  compassNe: 'nord-est',
  compassE: 'est',
  compassSe: 'sud-est',
  compassS: 'sud',
  compassSw: 'sud-ouest',
  compassW: 'ouest',
  compassNw: 'nord-ouest',
  areaLabel: 'Quelque part dans {{area}}',
} as const;
