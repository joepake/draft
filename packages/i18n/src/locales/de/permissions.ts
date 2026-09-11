export const permissions = {
  cameraPermissionRequired: 'Für diese Funktion ist Kamerazugriff erforderlich.',
  allowCameraTitle: 'Kamera erlauben',
  cameraPermissionMessage:
    'KidGate verwendet die Kamera, damit du mit SOS und Check-ins schnell ein Foto senden kannst.',
  allow: 'Erlauben',
  notNow: 'Nicht jetzt',
  cameraTurnedOffTitle: 'Kamera ist für KidGate deaktiviert',
  cameraTurnedOffMessage:
    'Bitte öffne die Einstellungen und erlaube die Kamera, damit deine Check-ins und SOS-Warnungen ein Foto enthalten können.',
  openSettings: 'Einstellungen öffnen',
  notificationsLabel: 'Mitteilungen',
  notificationsAllowed: 'Mitteilungen sind für KidGate aktiviert.',
  notificationsOpenSettings:
    'Bitte öffne die Geräteeinstellungen, um Mitteilungen für KidGate zu erlauben.',
  backgroundRefreshLabel: 'Hintergrundaktualisierung',
  backgroundRefreshHint: 'Lässt KidGate im Hintergrund weiterarbeiten.',
  backgroundRefreshLowPowerHint:
    'Der Stromsparmodus ist aktiviert – iOS deaktiviert dadurch die Hintergrundaktualisierung. Bitte schalte den Stromsparmodus aus und aktiviere dann die Hintergrundaktualisierung.',
  overlayLabel: 'Über anderen Apps anzeigen',
  overlayHint:
    'Erlaube KidGate, bei aktiven Limits einen Sperrbildschirm über anderen Apps anzuzeigen.',
  batteryOptimizationLabel: 'Akku ohne Einschränkung',
  batteryOptimizationHint: 'Verhindert, dass Android KidGate im Hintergrund pausiert.',
  exactAlarmLabel: 'Wecker und Erinnerungen',
  exactAlarmHint:
    'Erlaube Wecker und Erinnerungen, damit Sperrzeiten pünktlich starten und enden.',
  accessibilityLabel: 'Bedienungshilfen-Sperrfunktion',
  accessibilityHint: 'Hält die KidGate-Sperre über anderen Apps.',
  oemSectionDescription:
    '{{brand}}-Geräte pausieren häufig Hintergrund-Apps. Bitte führe diese Schritte aus, damit Sperre und Sperrzeiten weiter funktionieren.',
  oemAutostartLabel: 'Autostart erlauben',
  oemAutostartHintXiaomi:
    'Schalte KidGate unter Autostart ein, damit der Schutz nach einem Neustart wieder startet.',
  oemAutostartHintSamsung:
    'Füge KidGate unter Akku → Grenzwerte für Hintergrundnutzung → Nie inaktive Apps hinzu. Fehlt KidGate in der Liste, ist es bereits erlaubt und dieser Schritt ist erledigt.',
  oemAutostartHintOppo: 'Erlaube KidGate unter Startup-Apps / Auto-Start.',
  oemAutostartHintVivo:
    'Erlaube KidGate unter Autostart / Hintergrund mit hoher Leistung.',
  oemAutostartHintHuawei:
    'Setze KidGate unter App-Start / Startmanager auf „Manuell verwalten“ und erlaube alle Optionen.',
  oemAutostartHintOther:
    'Erlaube KidGate den automatischen Start in den Sicherheits- oder Akkueinstellungen deines Geräts.',
  markDone: 'Fertig',
  overlayStepAllow: 'Aktiviere „Über anderen Apps anzeigen“ für KidGate.',
  accessibilityStepOpenSettings:
    'Wähle unten Einstellungen – das öffnet direkt die Bedienungshilfen-Seite von KidGate.',
  accessibilityStepFindKidGate:
    'Öffnet sich stattdessen die vollständige Liste, wähle KidGate unter „Heruntergeladene Apps“.',
  accessibilityStepTurnOn:
    'Schalte den Regler ein und wähle dann in Androids Abfrage „Erlauben“.',
  accessibilityWarningNote:
    'Android warnt, dass KidGate deine Aktionen beobachten kann. So bleibt die Sperre über anderen Apps – KidGate liest keine Passwörter und keine persönlichen Nachrichten.',
  uninstallProtectionWizardBody:
    'Verhindert, dass diese App ohne die Eltern-PIN deinstalliert wird. Android zeigt dazu einen eigenen Bestätigungsbildschirm an.',
  notificationsWizardBody:
    'Erlaube Benachrichtigungen, damit dieses Gerät Zeitfreigaben und Erinnerungen sofort erhält.',
  backgroundRefreshStepOpen: 'Öffne die KidGate-Seite in den Einstellungen.',
  backgroundRefreshStepTurnOn: 'Aktiviere die Hintergrundaktualisierung für KidGate.',
  backgroundRefreshStepGeneral:
    'Ist der Schalter ausgegraut: Einstellungen öffnen, dann Allgemein, dann Hintergrundaktualisierung einschalten.',
  batteryStepAllow: 'Wähle in der Android-Abfrage „Erlauben“.',
  batteryStepAppInfo:
    'Erscheint keine Abfrage: App-Info öffnen, dann Akku, dann „Ohne Einschränkung“ wählen.',
  notificationsStepAllow: 'Wähle in der Abfrage „Zulassen“.',
  exactAlarmStepTurnOn: 'Aktiviere „Wecker und Erinnerungen“ für KidGate.',
  cameraStepTurnOn: 'Aktiviere „Kamera“ für KidGate.',
  uninstallProtectionStepConfirm:
    'Wähle „Aktivieren“ auf Androids Bestätigungsbildschirm.',
} as const;
