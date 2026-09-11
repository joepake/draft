export const location = {
  title: 'Standort',
  fallbackDeviceName: 'Kindergerät',
  syncNote:
    'Der Standort kann ein paar Minuten brauchen, bis er aktualisiert wird – länger, wenn das Gerät keine Internetverbindung hat oder unerwartet beendet wurde.',
  toastUpdateFailed:
    'Die Standortfreigabe konnte nicht aktualisiert werden. Bitte versuche es erneut.',
  toggleLabel: 'Standort teilen',
  toggleHint:
    'Öffne KidGate nach dem Aktivieren dieser Option einmal auf diesem Gerät.',
  toggleAccessibilityLabel: 'Standort teilen',
  lastKnownLocation: 'Letzter bekannter Standort',
  nearPlace: 'In der Nähe von {{place}}',
  noLocationHint:
    'Aktiviere die Standortfreigabe und öffne anschließend KidGate einmal auf diesem Gerät.',
  waitingForLocation: 'Warte auf Standort',
  updatedAt: 'Aktualisiert: {{date}}',
  openInMaps: 'In Karten öffnen',
  openInMapsAccessibility: 'In Karten öffnen',
  refreshButton: 'Standort aktualisieren',
  refreshingButton: 'Wird aktualisiert…',
  refreshAccessibility: 'Standort aktualisieren',
  toastEnableSharingFirst:
    'Bitte aktiviere zuerst die Standortfreigabe, bevor du eine Aktualisierung anforderst.',
  activityTitleRefreshRequested: 'Standortaktualisierung angefordert',
  activityDescriptionRefreshRequested:
    '{{deviceName}} wurde aufgefordert, den aktuellen Standort zu senden.',
  toastRefreshSent:
    '{{deviceName}} aktualisiert den Standort, sobald die Anfrage empfangen wurde.',
  toastRefreshFailed:
    'Die Standortaktualisierung konnte nicht angefordert werden. Bitte versuche es erneut.',
  toastChildNeedsNotifications:
    'Bitte öffne KidGate auf dem Gerät des Kindes und erlaube Benachrichtigungen, damit Anfragen zur Standortaktualisierung empfangen werden können.',
  checkInBadge: 'Check-in',
  movementHistoryTitle: 'Standortverlauf',
  historyEmpty:
    'Noch kein Verlauf vorhanden. Standorte werden nach einer Standortaktualisierung oder einem Check-in angezeigt.',
  historyHighlightAccessibility: '{{place}} auf der Karte hervorheben',
  historyOpenMapsAccessibility: '{{place}} in Karten öffnen',
  latestBadge: 'Neueste',
  unableToRequestLocationRefresh:
    'Die Standortaktualisierung konnte nicht angefordert werden',
  locationBannerTitle: 'Standort aktivieren',
  locationBannerBody:
    'Deine Eltern möchten den Standort dieses Geräts sehen, um sicherzustellen, dass du sicher angekommen bist.',
  locationBannerBodySharingOff:
    'Die Standortfreigabe ist gerade aus, es wird also nichts gesendet. Wenn du sie hier erlaubst, funktioniert sie sofort, falls deine Eltern sie später einschalten.',
  allowLocationButton: 'Standort erlauben',
  locationNotAllowed:
    'Der Standortzugriff wurde noch nicht erlaubt. Öffne Einstellungen → KidGate → Standort (oder aktiviere zuerst die Ortungsdienste). Falls die Option „Standort“ fehlt, wähle erneut „Standort erlauben“.',
  locationServicesOff:
    'Die Ortungsdienste sind auf diesem Gerät deaktiviert. Öffne Einstellungen → Datenschutz & Sicherheit → Ortungsdienste, aktiviere sie und kehre anschließend zu KidGate zurück, um „Standort erlauben“ auszuwählen.',
  locationDeniedInSettings:
    'Der Standortzugriff für KidGate wurde verweigert. Öffne Einstellungen → KidGate → Standort und wähle „Beim Verwenden der App“ oder „Immer“.',
  locationEnabled:
    'Der Standort ist aktiviert. Bitte wähle „Immer“, damit KidGate den Standort auch aktualisieren kann, wenn die App geschlossen ist.',
  backgroundLocationTitle: 'Standort erlauben, wenn die App geschlossen ist',
  backgroundLocationBody:
    'KidGate benötigt Standortzugriff im Hintergrund, damit Eltern den Standort dieses Geräts auch sehen können, wenn die App geschlossen ist – für die Sicherheit der Familie.',
  locationNote:
    'Zeigt den Standort des Kindes an, wenn die Standortfreigabe auf dem Gerät des Kindes aktiviert ist.',
  placeAlertsNote:
    'Sendet Standortbenachrichtigungen für Zuhause, Schule und andere sichere Orte.',
  mapNoLocationsEmpty: 'Noch keine Standorte vorhanden',
  mapUnavailable:
    'Karte nicht verfügbar. Bitte überprüfe deine Internetverbindung und versuche es erneut.',
  historyShowMore: '{{count}} weitere Orte anzeigen',
  historyShowMore_one: '1 weiteren Ort anzeigen',
  childSharingHint: 'Gilt für jedes Gerät, das {{childName}} zugewiesen ist.',
  childNoCapableDevices:
    'Keines der Geräte von {{childName}} kann den Standort melden.',
  childCarriedQuestion: 'Welches Gerät ist bei {{childName}}?',
  childCarriedHint:
    'Der Standort wird von diesem Gerät gelesen. Ein Tablet zu Hause kann einen aktuelleren Standort melden als das Handy in der Tasche – KidGate rät deshalb nie.',
  childDevicesOnline: '{{online}} von {{total}} online',
  childNoneOnline: 'Kein Gerät online',
  childPickCarried: 'Ist dabei',
  childPickCarriedA11y:
    '{{deviceName}} als das Gerät markieren, das {{childName}} dabei hat',
  stayRange: '{{from}} – {{to}}',
  placeTotalsTitle: 'Zeit an deinen Orten',
  placeTotalsNote:
    'Aus den letzten {{count}} Tagen des Verlaufs. Gezählt werden nur hier gespeicherte Orte.',
  placeTotalsNote_one:
    'Aus dem letzten Tag des Verlaufs. Gezählt werden nur hier gespeicherte Orte.',
  wizardStepAllow:
    'Wähle „Erlauben“ und dann „Immer“, damit Updates im Hintergrund weiterlaufen.',
  requestNoFix:
    'Dieses Gerät konnte keine Position ermitteln. Der Standort ist dort möglicherweise noch nicht erlaubt.',
  requestSharingOff: 'Die Standortfreigabe ist für dieses Gerät ausgeschaltet.',
  requestUnsupported: 'Dieses Gerät kann keine Position melden.',
  cardSharingOff: 'Standortfreigabe ist aus',
  cardPermissionOff: 'Standort ist auf diesem Gerät nicht erlaubt',
  cardNotUpdating: 'Standort wird nicht mehr aktualisiert',
} as const;
