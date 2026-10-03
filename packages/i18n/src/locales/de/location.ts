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
  ringButton: 'Ton abspielen',
  toastRingSentAndroid: '{{deviceName}} klingelt, sobald die Anfrage empfangen wurde.',
  toastRingSentIos:
    '{{deviceName}} spielt einen Ton ab, sobald die Anfrage empfangen wurde – außer das Gerät ist auf lautlos gestellt oder ein Fokus ist aktiv.',
  toastRingFailed: 'Der Ton konnte nicht abgespielt werden. Bitte versuche es erneut.',
  ringNotificationsOff:
    'Auf {{deviceName}} sind Benachrichtigungen deaktiviert, daher kann kein Ton abgespielt werden. Aktiviere sie in den Einstellungen dieses Geräts.',
  activityTitleRingRequested: 'Ton angefordert',
  activityDescriptionRingRequested:
    '{{deviceName}} wurde aufgefordert, einen Ton abzuspielen, damit es gefunden werden kann.',
  toastChildNeedsNotifications:
    'Bitte öffne KidGate auf dem Gerät des Kindes und erlaube Benachrichtigungen, damit Anfragen zur Standortaktualisierung empfangen werden können.',
  checkInBadge: 'Check-in',
  movementHistoryTitle: 'Standortverlauf',
  historyEmpty:
    'Noch kein Verlauf vorhanden. Standorte werden nach einer Standortaktualisierung oder einem Check-in angezeigt.',
  historyHighlightAccessibility: '{{place}} auf der Karte hervorheben',
  historyOpenMapsAccessibility: '{{place}} in Karten öffnen',
  locationBannerTitle: 'Standort aktivieren',
  locationBannerBody:
    'Deine Eltern möchten den Standort dieses Geräts sehen, damit sie wissen, dass du gut angekommen bist.',
  locationBannerBodySharingOff:
    'Die Standortfreigabe ist gerade aus, es wird also nichts gesendet. Wenn du sie hier erlaubst, funktioniert sie sofort, falls deine Eltern sie später einschalten.',
  allowLocationButton: 'Standort erlauben',
  locationNotAllowed:
    'Der Standortzugriff wurde noch nicht erlaubt. Öffne Einstellungen → KidGate → Standort (oder aktiviere zuerst die Ortungsdienste). Falls die Option „Standort“ fehlt, wähle erneut „Standort erlauben“.',
  locationNotAllowedAndroid:
    'Der Standortzugriff wurde noch nicht erlaubt. Wähle „Einstellungen öffnen“, dann „Berechtigungen → Standort“ und anschließend „Immer zulassen“.',
  locationServicesOff:
    'Die Ortungsdienste sind auf diesem Gerät deaktiviert. Öffne Einstellungen → Datenschutz & Sicherheit → Ortungsdienste, aktiviere sie und kehre anschließend zu KidGate zurück, um „Standort erlauben“ auszuwählen.',
  locationDeniedInSettings:
    'Der Standortzugriff für KidGate wurde verweigert. Öffne Einstellungen → KidGate → Standort und wähle „Beim Verwenden der App“ oder „Immer“.',
  foregroundOnly:
    'Der Standort wird nur aktualisiert, solange KidGate geöffnet ist. Wähle „Einstellungen öffnen“, dann „Standort“ und anschließend „Immer“.',
  foregroundOnlyAndroid:
    'Der Standort wird nur aktualisiert, solange KidGate geöffnet ist. Wähle „Einstellungen öffnen“, dann „Berechtigungen → Standort“ und anschließend „Immer zulassen“.',
  toastLocateFailed:
    'Dein Standort konnte gerade nicht ermittelt werden. Versuche es gleich noch einmal.',
  backgroundLocationTitle: 'Standort erlauben, wenn die App geschlossen ist',
  backgroundLocationBody:
    'KidGate benötigt Standortzugriff im Hintergrund, damit Eltern den Standort dieses Geräts auch sehen können, wenn die App geschlossen ist – für die Sicherheit der Familie.',
  mapNoLocationsEmpty: 'Noch keine Standorte vorhanden',
  mapHistoryEmpty:
    'Bewegungspunkte erscheinen nach der nächsten Standortaktualisierung auf der Karte.',
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
  childPickCarriedA11y:
    '{{deviceName}} als das Gerät markieren, das {{childName}} dabei hat',
  stayRange: '{{from}} – {{to}}',
  wizardStepAllow:
    'Wähle „Erlauben“ und dann „Immer“, damit Updates im Hintergrund weiterlaufen.',
  wizardStepAllowAndroid:
    'Wähle „Bei Nutzung der App“ und dann „Immer zulassen“, wenn du gefragt wirst, damit Updates im Hintergrund weiterlaufen.',
  requestNoFix:
    'Dieses Gerät konnte keine Position ermitteln. Der Standort ist dort möglicherweise noch nicht erlaubt.',
  requestIpOnly:
    'Dieses Gerät konnte seine Position nur über die Internetverbindung schätzen. Schalte das WLAN am Gerät ein (eine Verbindung ist nicht nötig) und versuche es erneut.',
  requestUnsupported: 'Dieses Gerät kann seinen Standort nicht melden.',
  cardSharingOff: 'Standortfreigabe ist aus',
  cardPermissionOff: 'Standort ist auf diesem Gerät nicht erlaubt',
  cardForegroundOnly:
    'Standort wird nur aktualisiert, solange KidGate auf diesem Gerät geöffnet ist',
  cardIpOnly:
    'Dieses Gerät lässt sich nicht orten: WLAN am Gerät einschalten (eine Verbindung ist nicht nötig)',
  cardNotUpdating: 'Standort wird nicht mehr aktualisiert',
  namesNeedPremium: 'Ortsnamen erfordern einen bezahlten Tarif',
  namesNeedPremiumTrialEnded:
    'Deine Testphase ist beendet. Führe ein Upgrade durch, um Ortsnamen vollständig zu sehen.',
  namesNeedPremiumStill:
    'Standorte werden weiterhin aufgezeichnet, und gespeicherte Orte zeigen weiterhin ihren Namen.',
  awayFromPlace: '{{distance}} {{direction}} von {{place}}',
  distanceKm: '{{value}} km',
  distanceMeters: '{{value}} m',
  compassN: 'nördlich',
  compassNe: 'nordöstlich',
  compassE: 'östlich',
  compassSe: 'südöstlich',
  compassS: 'südlich',
  compassSw: 'südwestlich',
  compassW: 'westlich',
  compassNw: 'nordwestlich',
  areaLabel: 'Irgendwo in {{area}}',
} as const;
