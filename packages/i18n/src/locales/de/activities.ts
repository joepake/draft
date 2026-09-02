export const activities = {
  title: 'Aktivitäten',
  subtitleAllDevices: 'Neueste Ereignisse auf allen Geräten',
  subtitleTimelineForDevice: 'Zeitverlauf für {{deviceName}}',
  subtitleTimelineForChild: 'Verlauf von {{childName}}',
  fallbackDeviceName: 'Gerät',
  liveBadge: 'Live',
  errorTitle: 'Aktivitäten konnten nicht geladen werden',
  tryAgain: 'Erneut versuchen',

  emptyTitleAll: 'Noch keine Aktivitäten',
  emptyTitleDevice: 'Keine Aktivitäten für dieses Gerät',
  emptyDescriptionAll:
    'Sperr-, Entsperr- und SOS-Ereignisse der Geräte deiner Kinder werden hier angezeigt.',
  emptyDescriptionDevice:
    'Wähle ein anderes Gerät aus oder warte auf Sperr-, Entsperr- und SOS-Ereignisse dieses Geräts.',

  guestEmptyTitle: 'Deine Aktivitäten',
  guestEmptyDescription:
    'Sobald ein Kindergerät verbunden ist, werden Sperr-, Entsperr-, SOS- und App-Ereignisse hier in Echtzeit angezeigt.',
  guestSignInButton: 'Anmelden',
  guestCreateAccount: 'Elternkonto erstellen',
  guestSubtitle:
    'Melde dich an, um die Aktivitäten der Geräte deiner Kinder zu verfolgen',

  guestPreviewHeading: 'Das wird angezeigt',
  guestPreviewLock: 'Gerät gesperrt',
  guestPreviewSos: 'SOS-Alarm',
  guestPreviewScreenTime: 'Bildschirmzeit aktualisiert',
  guestPreviewHint:
    'Beispiel – echte Ereignisse erscheinen nach dem Verbinden eines Geräts',

  activityTypeLocked: 'Gesperrt',
  activityTypeUnlocked: 'Entsperrt',
  activityTypeAppOpened: 'App geöffnet',
  activityTypeAppBlocked: 'App blockiert',
  activityTypeAppInstalled: 'App installiert',
  activityTypeAppRemoved: 'App deinstalliert',
  activityTypePlaceEnter: 'Ort betreten',
  activityTypePlaceExit: 'Ort verlassen',
  activityTypeTamper: 'Schutz',
  activityTypeScreenTime: 'Bildschirmzeit',
  activityTypeCheckIn: 'Check-in',
  activityTypeLocationRequest: 'Standort',
  activityTypeTimeRequest: 'Zeitanfrage',
  activityTypeRewardTask: 'Belohnungsaufgabe',
  activityTypeSearchAlert: 'Suchwarnung',
  activityTypeWebFilter: 'Webfilter',
  activityTypeEmergency: 'Notfall',
  activityTypeUnknown: 'Aktivität',

  sosEscapeTitle: 'Notfall-Entsperrung',
  sosEscapeBody: 'SOS hat dieses Gerät für {{minutes}} Minuten entsperrt.',
  sosEscapeRepeatTitle: 'Notfall-Entsperrung ({{count}}× heute)',
  sosEscapeRepeatBody:
    'SOS hat dieses Gerät für {{minutes}} Minuten entsperrt. Das ist {{count}}× heute.',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Eine blockierte App wurde geöffnet und von KidGate geschlossen.',
  appInstalledTitle: 'App installiert',
  appInstalledBody: 'Die App {{appName}} wurde auf dem Gerät des Kindes installiert.',

  messageAlertTitle: 'Bedenklicher Nachrichteninhalt',
  messageAlertBody: 'Ein markiertes Wort wurde in {{appName}} erkannt.',
  messageAlertBodyOutgoing:
    'Ein markiertes Wort wurde in einer Nachricht erkannt, die dein Kind in {{appName}} geschrieben hat.',
  messageAlertTitleSearch: 'Bedenkliche Suche',
  messageAlertBodySearch:
    'Ein markiertes Wort wurde in einer Suche auf {{appName}} erkannt.',
  activityTypeMessageAlert: 'Nachrichtenwarnung',
  messageCheckedTitle: 'Geprüft, nichts Bedenkliches',
  messageCheckedBody:
    'Ein beobachtetes Wort tauchte in {{appName}} auf und war im Zusammenhang harmlos.',
  activityTypeMessageChecked: 'Geprüft',
  appRemovedTitle: 'App deinstalliert',
  appRemovedBody: 'Die App {{appName}} wurde vom Gerät des Kindes entfernt.',
  extensionInstalledTitle: 'Browser-Erweiterung hinzugefügt',
  extensionInstalledBody:
    'Die Erweiterung {{appName}} wurde im Browser des Kindes installiert.',
  extensionRemovedTitle: 'Browser-Erweiterung entfernt',
  extensionRemovedBody:
    'Die Erweiterung {{appName}} wurde aus dem Browser des Kindes entfernt.',

  placeEnterTitle: '{{placeName}} betreten',
  placeEnterBody: 'Das Gerät des Kindes hat einen gespeicherten Ort betreten.',

  placeExitTitle: '{{placeName}} verlassen',
  placeExitBody: 'Das Gerät des Kindes hat einen gespeicherten Ort verlassen.',

  tamperTitle: 'Eine Schutzberechtigung wurde deaktiviert',
  tamperFallbackTitle: 'Eine Schutzberechtigung wurde deaktiviert',
  tamperFallbackBody:
    'Auf dem Gerät des Kindes wurde eine Schutzberechtigung deaktiviert.',

  tamperOverlayTitle: '„Über anderen Apps anzeigen“ wurde deaktiviert',
  tamperOverlayBody:
    'Der Sperrbildschirm wird möglicherweise nicht mehr über anderen Apps angezeigt, bis diese Berechtigung wieder aktiviert wird.',

  tamperAccessibilityTitle: 'Bedienungshilfen wurden deaktiviert',
  tamperAccessibilityBody:
    'App-Sperren und Schutzfunktionen funktionieren möglicherweise nicht mehr vollständig, bis die Bedienungshilfen wieder aktiviert werden.',
  tamperUsageAccessTitle: 'Zugriff auf die App-Nutzung wurde deaktiviert',
  tamperUsageAccessBody:
    'App-Limits und Sperrzeiten funktionieren möglicherweise nicht mehr, bis KidGate die App-Nutzung auf dem Kindergerät wieder auslesen kann.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'Zugriff auf Bildschirmzeit wurde deaktiviert',
  tamperScreenTimeIosBody:
    'App-Limits und Sperrzeiten funktionieren möglicherweise nicht mehr, bis der Zugriff auf die Bildschirmzeit auf dem Kindergerät wieder erlaubt ist.',
  tamperUsageAccessAndroidTitle: 'Nutzungszugriff wurde deaktiviert',
  tamperUsageAccessAndroidBody:
    'App-Limits und Sperrzeiten funktionieren möglicherweise nicht mehr, bis der Nutzungszugriff für KidGate auf dem Kindergerät wieder aktiviert ist.',

  tamperBatteryTitle: 'Uneingeschränkte Akku-Nutzung wurde deaktiviert',
  tamperBatteryBody:
    'Das System kann KidGate anhalten, bis die Akku-Nutzung wieder auf Uneingeschränkt gesetzt wird.',

  tamperExactAlarmTitle: 'Wecker und Erinnerungen deaktiviert',
  tamperExactAlarmBody:
    'Sperrzeiten starten oder enden möglicherweise zu spät, bis Wecker und Erinnerungen wieder erlaubt sind.',

  tamperNotificationsTitle: 'Benachrichtigungen wurden deaktiviert',
  tamperNotificationsBody:
    'Fernbefehle und Eltern-Benachrichtigungen erreichen dieses Gerät möglicherweise nicht zuverlässig.',

  tamperLocationTitle: 'Standort wurde deaktiviert',
  tamperLocationBody:
    'Eltern erhalten keine Standortaktualisierungen mehr, bis der Standortzugriff wieder erlaubt ist.',

  tamperCameraTitle: 'Kamera wurde deaktiviert',
  tamperCameraBody:
    'SOS- und Check-in-Fotos können erst wieder gesendet werden, wenn der Kamerazugriff erlaubt ist.',

  tamperBackgroundRefreshTitle: 'Hintergrundaktualisierung wurde deaktiviert',
  tamperBackgroundRefreshBody:
    'KidGate wird im Hintergrund möglicherweise seltener aktualisiert, bis die Hintergrundaktualisierung wieder aktiviert ist.',

  tamperDeviceClockTitle: 'Datum oder Uhrzeit wurden geändert',
  tamperDeviceClockBody:
    'Die Uhrzeit dieses Geräts stimmt nicht mehr mit der tatsächlichen Zeit überein. Bildschirmzeit und Sperrzeiten verwenden weiterhin die korrekte Zeit.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: '„Über anderen Apps anzeigen“ wurde deaktiviert.',
  tamperAccessibility: 'Die Bedienungshilfen wurden deaktiviert.',
  tamperUsageAccess: 'Der Nutzungszugriff wurde deaktiviert.',
  tamperBattery: 'Uneingeschränkte Akku-Nutzung wurde deaktiviert.',
  tamperExactAlarm: 'Die Berechtigung „Wecker und Erinnerungen“ wurde deaktiviert.',
  tamperNotifications: 'Die Benachrichtigungsberechtigung wurde deaktiviert.',
  tamperLocation: 'Die Standortberechtigung wurde deaktiviert.',
  tamperCamera: 'Die Kameraberechtigung wurde deaktiviert.',
  tamperBackgroundRefresh: 'Die Hintergrundaktualisierung wurde deaktiviert.',

  filterAllDevices: 'Alle Geräte',
  // The child tier of the feed filter — "All" would read as all devices.
  filterAllChildren: 'Alle',
  dateToday: 'Heute',
  dateYesterday: 'Gestern',

  filterByDevice: 'Filtern nach {{label}}',
  filterByChild: 'Nur {{label}} anzeigen',

  openFullSosHistory: 'Vollständigen SOS-Verlauf öffnen',
  openActivityDetails: 'Details ansehen',

  unknownDevice: 'Unbekanntes Gerät',

  basicActivityNote:
    'Sperr-, Entsperr- und Geräteereignisse werden unter „Aktivitäten“ aufgezeichnet.',
  tamperUninstallProtectionTitle: 'Deinstallationsschutz ausgeschaltet',
  tamperUninstallProtectionBody: 'KidGate kann jetzt von diesem Handy entfernt werden.',
} as const;
