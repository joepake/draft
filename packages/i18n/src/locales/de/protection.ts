export const protection = {
  permissionOffOnChildDevice: 'Diese Berechtigung ist auf dem Kindergerät deaktiviert.',
  permissionNotSetUpYet: 'Diese Berechtigung wurde noch nicht eingerichtet.',
  permissionRestrictedByIos:
    'Diese Berechtigung ist durch iOS-Einstellungen eingeschränkt.',
  permissionStatusUnknown: 'KidGate konnte den Status dieser Berechtigung nicht lesen.',
  kidGateOffline: 'KidGate offline',
  childAppMayBeOffline:
    'Die App auf dem Kindergerät ist möglicherweise geschlossen, gelöscht oder offline.',
  statusNotUpdatedYet: 'Status noch nicht aktualisiert',
  openKidGateOnChildPhone: 'Bitte öffne KidGate einmal auf dem Kindergerät.',
  screenTimePermission: 'Bildschirmzeit-Berechtigung',
  screenTimeAccessOff:
    'Der Bildschirmzeit-Zugriff ist deaktiviert — App-Blockierung und Limits funktionieren daher möglicherweise nicht mehr.',
  screenTimeSetupIncomplete:
    'Die Bildschirmzeit-Einrichtung auf dem Kindergerät ist unvollständig.',
  usageAccessPermission: 'Nutzungszugriff',
  usageAccessOff:
    'Der Nutzungszugriff ist deaktiviert — KidGate kann die Bildschirmzeit nicht erfassen und keine Limits durchsetzen.',
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
  healthBadgeProtected: 'Grün — geschützt',
  healthBadgeWarning: 'Gelb — Einrichtung erforderlich',
  healthBadgeInactive: 'Rot — Kindergerät offline',
  iosFeatureSupportEvaluating:
    'Die Unterstützung dieser Funktion unter iOS wird derzeit geprüft.',
  iosUpgradeRequiredNote:
    'Dafür ist iOS 16 oder neuer nötig. Das Kindergerät unter Einstellungen › Allgemein › Softwareupdate aktualisieren. Wird kein Update angeboten, ist dieses iPad oder iPhone zu alt, um von Apple unterstützt zu werden.',
  iosUpgradeActionLabel: 'Benötigt iOS 16',
  lockUnlockNote:
    'Sperrt das Gerät über die Bildschirmzeit, sobald das Kind den Zugriff erlaubt hat.',
  scheduleNote:
    'Bis zu 3 Sperrzeiten-Zeiträume blockieren Apps über die Bildschirmzeit.',
  individualAppBlockingNote:
    'Das Kind wählt die Apps aus, nachdem die 6-stellige Eltern-PIN eingegeben wurde.',
  tamperAlertsNote:
    'Meldet Berechtigungsänderungen und wenn sich die App auf dem Kindergerät längere Zeit nicht aktualisiert hat.',
  appReviewRemindersNote:
    'iOS stellt keine Installationsereignisse bereit — prüfe die Apps regelmäßig gemeinsam mit dem Kindergerät.',
} as const;
