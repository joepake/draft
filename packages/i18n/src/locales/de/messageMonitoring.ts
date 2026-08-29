export const messageMonitoring = {
  actionTitle: 'Nachrichtenwarnungen',
  actionDescription:
    'Werde benachrichtigt, wenn bedenkliche Wörter in Nachrichten auftauchen',
  title: 'Nachrichtenwarnungen',
  heroTitle: 'Nachrichtensicherheit',
  heroSubtitle:
    'KidGate markiert bedenkliche Wörter in den Nachrichten deines Kindes und benachrichtigt dich. Die Nachricht selbst wird nie angezeigt — nur das markierte Wort.',
  androidOnlyNote: 'Nur auf Android-Geräten verfügbar.',
  recentTitle: 'Neueste Warnungen',
  emptyTitle: 'Noch keine Warnungen',
  emptySubtitle: 'In Nachrichten wurden keine bedenklichen Wörter gefunden.',
  emptySubtitleNotWatching:
    'Nachrichten werden derzeit nicht geprüft, daher bleibt diese Liste leer, was auch passiert.',
  flaggedTerm: 'Markiertes Wort: „{{term}}“',
  flaggedTermPrefix: 'Markiertes Wort: „',
  flaggedTermSuffix: '“',
  aiConfirmed: 'Von KI bestätigt',
  categoryPredator: 'Mögliches Grooming',
  categorySelfHarm: 'Mögliche Selbstverletzung',
  categoryExplicit: 'Explizite Inhalte',
  categoryViolence: 'Drohung oder Gewalt',
  categoryBullying: 'Mobbing',
  categoryDrugs: 'Drogen oder Substanzen',
  categoryAlcohol: 'Alkohol',
  categoryTobacco: 'Tabak oder Vapes',
  categoryGambling: 'Glücksspiel',
  categoryProfanity: 'Vulgäre Sprache',
  categoryUnknown: 'Markierte Nachricht',
  setupTitle: 'Nachrichtensicherheit',
  setupBody:
    'Nachrichten auf bedenkliche Wörter überwachen. KidGate zeigt die Nachricht nie an — nur eine Warnung, wenn etwas Beunruhigendes auftaucht.',
  setupGrant: 'Benachrichtigungszugriff erlauben',
  setupEnable: 'Nachrichtensicherheit',
  controlledByParentHint:
    'Wird in der KidGate-App auf dem Elterntelefon ein- oder ausgeschaltet, nicht hier.',
  parentIncomingLabel: 'Empfangene Nachrichten prüfen',
  parentOutgoingLabel: 'Getippte Nachrichten prüfen',
  parentToggleHintGranted: 'Auf diesem Telefon.',
  parentToggleHintNotGranted:
    'Auf diesem Telefon noch nicht erlaubt — öffne KidGate auf dem Gerät, um es zu erlauben.',
  parentToggleSaveFailed: 'Änderung konnte nicht gespeichert werden.',
  settingsTitle: 'Einstellungen für Nachrichtenwarnungen',
  checkedTitle: 'Geprüft und unbedenklich',
  checkedSubtitle:
    'Beobachtete Wörter, die aufgetaucht sind, im Zusammenhang aber harmlos waren — deshalb gab es keine Warnung. Hier steht, was stellvertretend herausgefiltert wird — sag Bescheid, wenn etwas davon hätte ankommen sollen.',
  consentTitle: 'KI-Nachrichtenanalyse',
  consentBody:
    'Wenn aktiv, werden Nachrichten, die ein Schlüsselwort als grenzwertig markiert, — ohne Namen, Nummern und Links — an einen KI-Dienst gesendet, um vor der Warnung zu prüfen, ob sie wirklich bedenklich sind. Hochriskante Wörter warnen weiterhin sofort, ohne etwas zu senden.',
  consentEnable: 'KI-Analyse aktivieren',
  consentConfirmTitle: 'KI-Nachrichtenanalyse aktivieren?',
  consentConfirmBody:
    'Grenzwertige Nachrichten, ohne persönliche Daten, werden zur Prüfung an einen KI-Dienst gesendet. Du bestätigst, dass du dieser Verarbeitung zustimmst.',
  consentAgree: 'Ich stimme zu',
  outgoingTitle: 'Nachrichten, die du schreibst',
  outgoingBody:
    'KidGate kann auch prüfen, was du in Chat-Apps tippst. Es sucht nach denselben Warnwörtern, auf diesem Handy. Deine Nachrichten werden nirgendwohin gesendet.',
  outgoingEnable: 'Prüfen, was ich schreibe',
  outgoingGrant: 'Erlauben',
  directionIncoming: 'Empfangen',
  directionOutgoing: 'Gesendet',
  alertBodyIncoming: 'Nachricht von App',
  alertBodyOutgoing: 'Nachricht gesendet von App',
  aiLegend:
    'Eine Warnung mit diesem Symbol wurde von der KI bestätigt, bevor du benachrichtigt wurdest.',
  setupRevoked:
    'Android hat die dafür nötige Berechtigung deaktiviert. Erteile sie erneut, damit Nachrichten weiter geprüft werden.',
  outgoingRevoked:
    'Android hat das deaktiviert. Erteile die Berechtigung erneut, damit weiter geprüft wird, was du schreibst.',
  outgoingDisclosureTitle: 'Bevor du zustimmst',
  outgoingDisclosureBody:
    'KidGate liest nur, was du in Messenger-Apps tippst — nie in einer anderen App und nie in einem Passwortfeld. Die Suche nach Warnwörtern läuft auf diesem Handy. Deine Nachrichten werden nirgendwohin gesendet; nur das markierte Wort erreicht deine Eltern.',
  outgoingRestrictedHint:
    'Wenn der Schalter ausgegraut ist, öffne Einstellungen › Apps › KidGate, tippe auf das Menü ⋮ und wähle „Eingeschränkte Einstellungen zulassen“. Komm danach hierher zurück.',
  notice: {
    revokedTitle: 'Die Nachrichtenprüfung wurde gestoppt',
    revokedBody:
      'Android hat eine Berechtigung deaktiviert, die KidGate braucht, deshalb werden Nachrichten nicht mehr geprüft. Öffne KidGate auf dem Gerät deines Kindes und erteile sie erneut.',
    offTitle: 'Nachrichtensicherheit ist nicht eingeschaltet',
    offBody:
      'Auf dem Gerät wird nichts geprüft, hier kann also keine Warnung erscheinen. Öffne KidGate auf dem Gerät, um es einzurichten.',
    pendingTitle: 'Wartet darauf, dass das Gerät des Kindes das übernimmt',
    pendingBody:
      'Du hast das eingeschaltet. Das Gerät des Kindes übernimmt die Änderung bei der nächsten Verbindung, meist innerhalb weniger Minuten — schneller, wenn das Telefon gerade benutzt wird. Du musst nichts weiter tun.',
    unknownTitle: 'Warten auf das Gerät',
    unknownBody:
      'Dieses Gerät hat noch nicht gemeldet, ob die Nachrichtensicherheit läuft — eine leere Liste sagt daher wenig aus. Sie sollte sich beim nächsten Kontakt des Geräts aktualisieren.',
    outgoingAvailableTitle: 'Auch prüfen, was dein Kind schreibt',
    outgoingAvailableBody:
      'Empfangene Nachrichten werden bereits geprüft. KidGate kann auch prüfen, was dein Kind in Messenger-Apps tippt — Mobbing und Selbstverletzung tauchen dort deutlich häufiger auf. Richte es auf dem Gerät ein.',
  },
  languagesLabel: 'Geprüfte Sprachen',
  languagesHint:
    'In welchen Sprachen dieses Gerät nach besorgniserregenden Wörtern sucht. Bis zu {{max}} auswählen.',
  languagesDefaultHint: 'Standardmäßig die Sprache des Geräts.',
} as const;
