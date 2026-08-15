export const permissions = {
  cameraPermissionRequired: 'Für diese Funktion ist Kamerazugriff erforderlich.',
  allowCameraTitle: 'Kamera erlauben',
  cameraPermissionMessage:
    'KidGate verwendet die Kamera, damit du mit SOS und Check-Ins schnell ein Foto senden kannst.',
  allow: 'Erlauben',
  notNow: 'Nicht jetzt',
  cameraTurnedOffTitle: 'Kamera ist für KidGate deaktiviert',
  cameraTurnedOffMessage:
    'Bitte öffne die Einstellungen und erlaube die Kamera, damit deine Check-Ins und SOS-Warnungen ein Foto enthalten können.',
  openSettings: 'Einstellungen öffnen',
  notificationsLabel: 'Mitteilungen',
  notificationsAllowed: 'Mitteilungen sind für KidGate aktiviert.',
  notificationsOpenSettings:
    'Bitte öffne die Geräteeinstellungen, um Mitteilungen für KidGate zu erlauben.',
  backgroundRefreshLabel: 'Hintergrundaktualisierung',
  backgroundRefreshHint:
    'Aktiviere zuerst Einstellungen → Allgemein → Hintergrundaktualisierung, und schalte sie dann für KidGate ein. Ist der Schalter ausgegraut, ist die allgemeine Hintergrundaktualisierung noch deaktiviert.',
  backgroundRefreshLowPowerHint:
    'Der Stromsparmodus ist aktiviert — iOS deaktiviert dadurch die Hintergrundaktualisierung. Bitte schalte den Stromsparmodus aus und aktiviere dann die Hintergrundaktualisierung.',
  overlayLabel: 'Über anderen Apps anzeigen',
  overlayHint:
    'Erlaube KidGate, bei aktiven Limits einen Sperrbildschirm über anderen Apps anzuzeigen.',
  batteryOptimizationLabel: 'Akku ohne Einschränkung',
  batteryOptimizationHint:
    'Wähle in der Systemabfrage „Erlauben“, damit KidGate im Hintergrund laufen kann. Erscheint keine Abfrage: App-Info → Akku → Ohne Einschränkung.',
  exactAlarmLabel: 'Wecker und Erinnerungen',
  exactAlarmHint:
    'Erlaube Wecker und Erinnerungen, damit Sperrzeiten pünktlich starten und enden.',
  accessibilityLabel: 'Bedienungshilfen-Sperrfunktion',
  accessibilityHint:
    'Aktiviere KidGate unter Bedienungshilfen → Installierte/Heruntergeladene Apps. Dies ist erforderlich, damit die Sperre über anderen Apps bestehen bleibt.',
  oemSectionDescription:
    '{{brand}}-Geräte pausieren häufig Hintergrund-Apps. Bitte führe diese Schritte aus, damit Sperre und Sperrzeiten weiter funktionieren.',
  oemAutostartLabel: 'Autostart erlauben',
  oemAutostartHintXiaomi:
    'Schalte KidGate unter Autostart ein, damit der Schutz nach einem Neustart wieder startet.',
  oemAutostartHintSamsung:
    'Erlaube KidGate unter Geräteschutz / Akku, im Hintergrund aktiv zu bleiben.',
  oemAutostartHintOppo: 'Erlaube KidGate unter Startup-Apps / Auto-Start.',
  oemAutostartHintVivo:
    'Erlaube KidGate unter Autostart / Hintergrund mit hoher Leistung.',
  oemAutostartHintHuawei:
    'Setze KidGate unter App-Start / Startmanager auf „Manuell verwalten“ und erlaube alle Optionen.',
  oemAutostartHintOther:
    'Erlaube KidGate den automatischen Start in den Sicherheits- oder Akkueinstellungen deines Geräts.',
  markDone: 'Fertig',
  notificationsWizardBody:
    'Erlaube Benachrichtigungen, damit dieses Gerät Zeitfreigaben und Erinnerungen sofort erhält.',
} as const;
