export const family = {
  title: 'Familie',
  connectButton: 'Verbinden',
  connectAccessibility: 'Ein Gerät für ein Kind oder Elternteil hinzufügen',
  addDeviceTitle: 'Gerät hinzufügen',
  addDeviceMessage: 'Was möchtest du verbinden?',
  addChildOption: 'Gerät eines Kindes hinzufügen',
  addJoinFamilyOption: 'Familie beitreten',
  addParentOption: 'Elternteil einladen',
  loginWebOption: 'Im Web anmelden',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: 'Wer nutzt {{deviceName}}?',
  assignSheetBody: 'Bildschirmzeit und Sterne zählen für das ausgewählte Kind.',
  assignSheetNobody: 'Niemand',
  assignSheetNobodyHint: 'Geteiltes Gerät – zählt für niemanden.',
  assignSheetAddAndAssign: 'Hinzufügen und zuweisen',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: '{{childName}} jetzt schützen?',
  quickProtectBody:
    'Schalte ein Starter-Set an Schutzfunktionen ein. Alles lässt sich später im Kinderprofil genau anpassen.',
  quickProtectBedtime: 'Sperrzeiten zur Schlafenszeit',
  quickProtectBedtimeHint:
    'Sperrt die Gerätenutzung über Nacht, von 22:00 bis 07:00 Uhr.',
  quickProtectDailyLimit: 'Tägliches Bildschirmzeit-Limit',
  quickProtectDailyLimitHint:
    '{{minutes}} Minuten pro Tag, für alle Geräte des Kindes zusammen.',
  quickProtectWebFilter: 'Webfilter',
  quickProtectWebFilterHint:
    'Blockiert nicht jugendfreie Inhalte und andere riskante Kategorien.',
  quickProtectWebFilterPremium: 'Premium-Funktion – in einem Abo enthalten.',
  quickProtectApply: 'Schutz einschalten',
  quickProtectSkip: 'Nicht jetzt',
  quickProtectDone: 'Der Schutz ist aktiv. Du kannst alles jederzeit anpassen.',
  quickProtectPartial:
    'Einige Schutzfunktionen konnten nicht gespeichert werden. Versuche es im Kinderprofil erneut.',
  pairDeviceFirstTitle: 'Noch kein Gerät gekoppelt',
  pairDeviceFirstBody:
    'Kopple zuerst ein Gerät für dieses Kind – tippe im Tab „Familie“ auf das Scan-Symbol oder „+“ und wähle „Gerät eines Kindes hinzufügen“. Diese Einstellung greift, sobald ein Gerät verbunden ist.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'Alle sperren',
  unlockAll: 'Alle entsperren',
  lockAllA11y: 'Alle Geräte von {{childName}} sperren',
  unlockAllA11y: 'Alle Geräte von {{childName}} entsperren',
  childDetailUnassignTitle: 'Vom Kind entfernen?',
  childDetailUnassignBody:
    '{{deviceName}} zählt nicht mehr für {{childName}} und wandert zu Nicht zugewiesen. Es bleibt gekoppelt und geschützt.',
  childDetailUnassignConfirm: 'Entfernen',
  childDetailUnassignA11y: '{{deviceName}} von diesem Kind entfernen',
  // The fold control on a group heading.
  collapseGroupA11y: '{{name}} einklappen',
  expandGroupA11y: '{{name}} ausklappen',
  assignDeviceCta: 'Einem Kind zuweisen…',
  unassignedHint: 'Diese Geräte zählen noch für niemanden.',
  unassignedHintMember: 'Der Familieninhaber weist diese Geräte den Kindern zu.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Kinder ohne Gerät',
  // Child detail screen.
  childDetailStarsWell: 'Sterne diese Woche',
  childStarsA11y: 'Sterne diese Woche: {{count}}',
  childDetailDevicesTitle: 'Geräte',
  childDetailSwipeHint: 'Wische über ein Gerät, um die Zuordnung aufzuheben.',
  childDetailAssignMore: 'Weiteres Gerät zuweisen…',
  childDetailAssignSheetTitle: 'Gerät {{childName}} zuweisen',
  childDetailNoDevices:
    'Noch keine Geräte. Unten zuweisen oder im Familien-Tab ein neues Gerät koppeln.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Noch keine Geräte. Nur der Familieninhaber legt fest, wem ein Gerät gehört.',
  childDetailEditNameTitle: 'Namen bearbeiten',
  childDetailColorLabel: 'Farbe',
  scanButtonAccessibility: 'Code scannen',
  scanTitle: 'Code scannen',
  scanBody:
    'Richte die Kamera auf ein Kindgerät, eine Familieneinladung oder den Code auf einem Computer.',
  manualCodeLabel: 'Gib den 6-stelligen Code ein',
  manualInstructions:
    'Gib den 6-stelligen Code ein, der auf dem anderen Gerät angezeigt wird.',

  headerHintEmpty: 'Verwalte und schütze die Geräte deiner Kinder',

  headerHintGuest:
    'Du kannst die App frei erkunden – melde dich an, wenn du Geräte verbinden möchtest.',

  familyCardManage: 'Familie, Eltern und Geräte verwalten',

  familyCardJoined: 'Als Elternmitglied beigetreten',

  chipDeviceCount: '{{count}} Geräte',
  chipDeviceCount_one: '{{count}} Gerät',

  chipOnlineCount: '{{count}} online',
  metaOnlineCount: '{{online}}/{{count}} online',
  metaOnlineCount_one: '1 Gerät online',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} Check-ins',
  chipCheckInCount_one: '{{count}} Check-in',

  chipRequestCount: '{{count}} Anfragen',
  chipRequestCount_one: '{{count}} Anfrage',

  chipNeedsSetupCount: '{{count}} müssen eingerichtet werden',
  chipNeedsSetupCount_one: '{{count}} muss eingerichtet werden',

  chipProtectedCount: '{{count}} geschützt',

  childDevicesProtected: '{{count}} Geräte geschützt',

  chipHealthWarnCount: '{{count}} müssen eingerichtet werden',
  chipHealthWarnCount_one: '{{count}} muss eingerichtet werden',

  chipHealthInactiveCount: '{{count}} seit über 24 Std. inaktiv',

  chipBlockedCount: '{{count}} blockiert',

  healthProtected: 'Geschützt',
  buildOutdated: 'Update verfügbar',
  healthNeedsSetup: 'Einrichtung erforderlich',
  healthOffline: 'Offline',
  devicePausedLabel: 'Pausiert',
  devicePausedHint: 'Im Gratis-Tarif pausiert – alle Regeln gelten weiter',
  parkedBannerTitle: 'Wähle das Gerät, das du weiter im Blick behältst',
  parkedBannerBody:
    'Deine Regeln laufen auf jedem Gerät. Der Gratis-Tarif erhält Berichte von einem – wähle es aus oder upgrade, um alle zu behalten.',
  parkedBannerAction: 'Gerät wählen',
  chooseMonitoredTitle: 'Welches Gerät soll berichten?',
  chooseMonitoredBody:
    'Alle Regeln laufen auf allen Geräten weiter. Nur das gewählte sendet Bildschirmzeit und Standort. Du kannst es alle {{days}} Tage einmal ändern.',
  chooseMonitoredConfirm: 'Dieses Gerät beobachten',
  chooseMonitoredUpgrade: 'Alle Geräte behalten – Upgrade',
  chooseMonitoredDone: '{{name}} ist jetzt das berichtende Gerät',
  monitoredCooldown: 'Das berichtende Gerät lässt sich nur alle {{days}} Tage ändern',
  monitoredChooseFailed: 'Das berichtende Gerät konnte nicht geändert werden',

  // Quick-glance rows on the device card
  cardWhereLabel: 'Standort',
  cardWhereAccessibility: 'Standort von {{deviceName}} öffnen',

  cardTodayLabel: 'Heute',

  cardTodayUsed: '{{used}} genutzt',

  cardTodayNoData: 'Noch keine Nutzung',

  cardTodayAccessibility: 'Nutzungsbericht von {{deviceName}} öffnen',

  emptyTitle: 'Noch keine Kindergeräte',

  emptyDescription:
    'Füge das Gerät deines Kindes hinzu, um Bildschirmzeit und App-Nutzung zu überwachen.',

  setupFamilyTitle: 'Familie einrichten',

  setupFamilyDescription:
    'Erstelle eine Familie, um die Geräte deiner Kinder zu verbinden, oder tritt mit einem Einladungscode einer bestehenden Familie bei.',

  createFamilyButton: 'Familie erstellen',

  joinFamilyButton: 'Familie beitreten',

  switchToJoinTitle: 'Einer anderen Familie beitreten?',

  switchToJoinMessage:
    'Dadurch wird dein leerer Familienbereich entfernt, sodass du mit einem Einladungscode einer anderen Familie beitreten kannst. Falls bereits ein Gerät eines Kindes verbunden ist, musst du dieses zuerst verwalten.',

  guestEmptyTitle: 'Deine Familie beginnt hier',

  guestEmptyDescription:
    'Melde dich an, um die Geräte deiner Kinder zu koppeln, Benachrichtigungen zu erhalten und gesunde Bildschirmzeitlimits festzulegen.',

  guestConnectButton: 'Anmelden',

  guestCreateAccount: 'Elternkonto erstellen',

  guestBenefitLimitsTitle: 'Bildschirmzeit- und App-Limits',

  guestBenefitLimitsBody: 'Geräte sperren und tägliche Zeitpläne festlegen.',

  guestBenefitAlertsTitle: 'SOS- und Aktivitätsbenachrichtigungen',

  guestBenefitAlertsBody: 'Erfahre sofort, wenn etwas deine Aufmerksamkeit braucht.',

  guestBenefitLocationTitle: 'Standort und Check-ins',

  guestBenefitLocationBody:
    'Sieh, wo dein Kind ist, und bitte es zu bestätigen, dass alles in Ordnung ist.',

  stepsHeading: 'Erste Schritte',

  step1Title: 'Auf „Gerät eines Kindes hinzufügen“ tippen',

  step1Description: 'Ein QR-Code zum Koppeln erscheint hier, bereit zum Scannen.',

  step2Title: 'Mit dem Gerät des Kindes scannen',

  step2Description:
    'Installiere KidGate auf dem Smartphone oder Tablet deines Kindes, wähle „Dies ist ein Gerät für ein Kind“ und scanne den Code.',

  connectChildButton: 'Kindergerät verbinden',
  listHint: 'Wische auf einem Gerät nach links, um es zu entfernen',

  removeAlertTitle: 'Gerät entfernen?',

  removeAlertMessage:
    '{{deviceName}} wird von deinem Konto getrennt. Alle zugehörigen Zeitanfragen und der Aktivitätsverlauf werden gelöscht.',

  toastRemoveFailed:
    'Das Gerät konnte nicht entfernt werden. Bitte versuche es erneut.',

  swipeRemoving: 'Wird entfernt…',

  swipeRemove: 'Entfernen',

  deviceNotFound: 'Gerät nicht gefunden',

  deviceMayHaveBeenRemoved:
    'Dieses Gerät wurde möglicherweise aus deinem Konto entfernt.',

  deviceNotFoundError: 'Gerät nicht gefunden',

  deviceRemovedAlertTitle: 'Gerät entfernt',

  deviceRemovedAlertMessage:
    'Ein Elternteil hat dieses Gerät aus dem Familienkonto entfernt. Wähle erneut die Rolle „Kind“, um es wieder zu verbinden.',

  deviceNotRegistered: 'Dieses Gerät ist noch nicht registriert.',

  defaultDeviceName: 'Kindergerät',

  fallbackDeviceName: 'Kindergerät',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'iPhone des Elternteils',

  parentAndroid: 'Android des Elternteils',

  childIphone: 'iPhone des Kindes',

  parentIpad: 'iPad des Elternteils',

  childIpad: 'iPad des Kindes',

  childAndroid: 'Android des Kindes',

  deviceFallbackName: 'Gerät',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'Windows-PC',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'Bitte gib einen Gerätenamen ein.',

  deviceNameTooLong: 'Der Gerätename darf höchstens {{max}} Zeichen lang sein.',

  lastActiveDate: 'Zuletzt aktiv: {{date}}',

  lastActiveUnknown: 'Keine aktuelle Aktivität',

  thisDevice: 'Dieses Gerät',

  thisDeviceYou: 'Dieses Gerät (Du)',

  namedDeviceYou: '{{name}} (Du)',

  deviceNameSaved: 'Der Gerätename wurde aktualisiert.',

  deviceSectionTitle: 'Gerät',

  deviceNameLabel: 'Gerätename',

  editDeviceNameTitle: 'Gerätenamen bearbeiten',

  editDeviceNameSubtitle:
    'Nur der Familieninhaber kann Geräte umbenennen. Maximal {{maxLength}} Zeichen.',

  deviceNameInputLabel: 'Gerätename',

  deviceNamePlaceholder: 'Emmas iPhone',

  unableToUpdateDeviceName:
    'Der Gerätename konnte nicht aktualisiert werden. Bitte versuche es erneut.',

  osLabelFallback: 'Betriebssystem',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS – sofortige Aufmerksamkeit erforderlich',

  waitingForCheckIn: 'Warten auf Check-in',

  timeRequestsWaiting: '{{count}} Zeitanfragen warten',

  timeRequestsWaiting_one: '{{count}} Zeitanfrage wartet',

  youPausedThisDevice: 'Du hast dieses Gerät gesperrt',

  lockSentWaitingForDevice: 'Sperre gesendet – warten auf das Gerät',

  lockNotAppliedOnDevice: 'Dieses Gerät hat die Sperre nicht angewendet',

  blockedHoursActiveNow: 'Sperrzeiten derzeit aktiv',

  inactiveOpenKidGate: 'Inaktiv – öffne KidGate auf diesem Gerät',

  protectionNeedsSetup: '{{issueLabel}} muss eingerichtet werden',

  dailyLimitOn: 'Tageslimit aktiviert',

  deviceReady: 'Bereit',

  sos: 'SOS',

  deviceLocked: 'Gerät gesperrt',

  deviceUnlocked: 'Gerät entsperrt',

  parentPausedChildDevice: '{{actorName}} hat dieses Gerät des Kindes gesperrt.',

  parentRestoredChildDevice: '{{actorName}} hat dieses Gerät des Kindes entsperrt.',

  parentFallback: 'Ein Elternteil',

  formerParent: 'Ein Elternteil, der die Familie verlassen hat',
  batteryPercent: '{{percent}} %',
  batteryAccessibility: 'Akku {{percent}} Prozent',
  batteryChargingAccessibility: 'Akku {{percent}} Prozent, wird geladen',
  childDetailPerDevice: 'Pro Gerät – wähle eines aus',
  childDetailNotAvailable: 'Nicht verfügbar',
  childDetailNotAvailableReason: 'Auf keinem der Geräte verfügbar',
  childDetailProtectionOk: 'Geschützt',
  childDetailProtectionAttention: '{{count}} Geräte brauchen Aufmerksamkeit',
  childDetailProtectionAttention_one: '{{count}} Gerät braucht Aufmerksamkeit',
  childDetailProtectionSheetTitle: 'Schutz je Gerät',
  childDetailRemoveTitle: 'Profil von {{childName}} entfernen',
  childDetailRemovingButton: 'Wird entfernt…',
  childDetailOnlineCount: '{{online}} von {{total}} online',
  childDetailBudgetTitle: 'Tageslimit',
  childDetailSectionControls: 'Regeln für alle Geräte des Kindes',
  childDetailSectionSafety: 'Zusammengeführt aus allen Geräten',
  childDetailSectionAlerts: 'Alle Geräte, ein Verlauf',
  childDetailScopeAll: 'Alle Geräte',
  childDetailTodayWell: 'Heute genutzt',
  childDetailUnassignAction: 'Entfernen',
  childDetailLimitShared: 'Gesamt über alle Geräte',
} as const;
