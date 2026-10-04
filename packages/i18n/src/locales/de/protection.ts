export const protection = {
  permissionOffOnChildDevice: 'Diese Berechtigung ist auf dem Kindergerät deaktiviert.',
  permissionNotSetUpYet: 'Diese Berechtigung wurde noch nicht eingerichtet.',
  permissionRestrictedByIos:
    'Diese Berechtigung ist durch iOS-Einstellungen eingeschränkt.',
  permissionStatusUnknown: 'KidGate konnte den Status dieser Berechtigung nicht lesen.',
  kidGateOffline: 'KidGate meldet sich seit über 24 Std. nicht',
  childAppMayBeOffline:
    'Die App auf dem Kindergerät ist möglicherweise geschlossen, gelöscht oder offline.',
  statusNotUpdatedYet: 'Status noch nicht aktualisiert',
  openKidGateOnChildPhone: 'Bitte öffne KidGate einmal auf dem Kindergerät.',
  screenTimePermission: 'Bildschirmzeit-Berechtigung',
  screenTimeAccessOff:
    'Der Bildschirmzeit-Zugriff ist deaktiviert – App-Blockierung und Limits funktionieren daher möglicherweise nicht mehr.',
  screenTimeSetupIncomplete:
    'Die Bildschirmzeit-Einrichtung auf dem Kindergerät ist unvollständig.',
  usageAccessPermission: 'Nutzungszugriff',
  usageAccessOff:
    'Der Nutzungszugriff ist deaktiviert – KidGate kann die Bildschirmzeit nicht erfassen und keine Limits durchsetzen.',
  usageAccessSetupIncomplete:
    'Bitte aktiviere den Nutzungszugriff für KidGate in den Android-Einstellungen.',
  overlayPermission: 'Über anderen Apps anzeigen',
  batteryOptimizationPermission: 'Akku ohne Einschränkung',
  batteryOptimizationOff:
    'Bitte erlaube die uneingeschränkte Akkunutzung, damit KidGate den Schutz aufrechterhalten kann.',
  exactAlarmPermission: 'Wecker und Erinnerungen',
  exactAlarmOff:
    'Erlaube Wecker und Erinnerungen, damit Sperrzeiten pünktlich starten.',
  accessibilityPermission: 'Bedienungshilfen (Sperrfunktion)',
  accessibilityOff:
    'Bitte aktiviere die Bedienungshilfen für KidGate, damit die Sperre über anderen Apps bleibt.',
  overlayOffForLock:
    'Bitte aktiviere „Über anderen Apps anzeigen“, damit der Sperrbildschirm andere Apps überdecken kann.',
  lockNotReadyTitle: 'Sperre nicht bereit',
  lockNotReadyBody:
    'KidGate kann dieses Android-Gerät erst gesperrt halten, wenn „Über anderen Apps anzeigen“ und die Bedienungshilfen aktiviert sind. Bitte öffne KidGate auf dem Kindergerät und schließe Folgendes ab:',
  lockNotReadyBodyIos:
    'KidGate kann dieses iPhone erst sperren, wenn der Zugriff auf die Bildschirmzeit auf dem Kindergerät bestätigt wurde. Bitte öffne KidGate dort und schließe Folgendes ab:',
  locationPermission: 'Standort-Berechtigung',
  locationForegroundOnly:
    'Der Standort wird nur aktualisiert, solange KidGate auf dem Kindergerät geöffnet ist.',
  cameraPermission: 'Kameraberechtigung',
  microphonePermission: 'Mikrofonberechtigung',
  microphoneOff:
    'Das Mikrofon ist auf diesem Gerät nicht erlaubt, deshalb kommt ein SOS von dort ohne Ton an.',
  cameraConsentPending:
    'Die Kamera ist auf diesem Gerät nicht erlaubt, deshalb kommt ein SOS oder Check-in von dort ohne Foto an.',
  locationConsentPending:
    'Der Standort ist auf diesem Gerät nicht erlaubt, deshalb kann es nicht melden, wo es ist.',
  consentStepOpenSettings:
    'Öffne KidGate auf dem Gerät des Kindes und geh zu Einstellungen.',
  consentStepParentPin: 'Gib die Eltern-PIN ein.',
  consentStepPermissions: 'Öffne „Berechtigungen“ und erlaube, was fehlt.',
  notificationsPermission: 'Mitteilungs-Berechtigung',
  backgroundUpdates: 'Hintergrundaktualisierungen',
  backgroundUpdatesRestricted:
    'Hintergrundaktualisierungen sind auf diesem Gerät eingeschränkt.',
  turnOnBackgroundUpdatesInSettings:
    'Bitte aktiviere sie in den Geräteeinstellungen, damit KidGate synchron bleibt.',
  inactive: 'Inaktiv',
  openKidGateToSyncProtections:
    'Bitte öffne KidGate auf diesem Gerät, damit der Schutz wieder synchronisiert werden kann.',
  needsAttention: 'Erfordert Aufmerksamkeit',
  protectionsNeedSetupAndroid:
    'Einige Schutzfunktionen müssen auf dem Kindergerät eingerichtet werden.',
  protectionsNeedSetupIos:
    'Einige Schutzfunktionen müssen auf dem Kindergerät eingerichtet werden.',
  protected: 'Geschützt',
  protectionsLookHealthy: 'Die KidGate-Schutzfunktionen sind in gutem Zustand.',
  healthBadgeProtected: 'Grün – geschützt',
  healthBadgeWarning: 'Gelb – Einrichtung erforderlich',
  healthBadgeInactive: 'Rot – Kindergerät seit über 24 Std. stumm',
  iosUpgradeRequiredNote:
    'Dafür ist iOS 16 oder neuer nötig. Das Kindergerät unter Einstellungen › Allgemein › Softwareupdate aktualisieren. Wird kein Update angeboten, ist dieses iPad oder iPhone zu alt, um von Apple unterstützt zu werden.',
  iosUpgradeActionLabel: 'Benötigt iOS 16',
  appReviewRemindersNote:
    'iOS stellt keine Installationsereignisse bereit – prüfe die Apps regelmäßig direkt auf dem Kindergerät.',
  screenTimeIndividualAuthorization:
    'Bildschirmzeit wurde mit der eigenen Apple-ID des Kindergeräts erlaubt. Das Kind kann KidGate in den Einstellungen ohne PIN ausschalten und die App löschen. Nur eine Kinder-Apple-ID in deiner Familienfreigabe hält diese Kontrollen fest.',
  screenTimeIndividualStepChildAppleId:
    'Melde das Kindergerät mit einer Kinder-Apple-ID aus deiner Familienfreigabe an.',
  screenTimeIndividualStepReapprove:
    'Öffne KidGate auf dem Kindergerät und erlaube Bildschirmzeit erneut.',
} as const;
