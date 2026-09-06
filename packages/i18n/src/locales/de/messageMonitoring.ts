export const messageMonitoring = {
  actionTitle: 'Nachrichtenwarnungen',
  actionDescription:
    'Werde benachrichtigt, wenn bedenkliche Wörter in Nachrichten auftauchen',
  title: 'Inhaltswarnungen',
  heroTitle: 'Nachrichtensicherheit',
  heroSubtitle:
    'KidGate markiert bedenkliche Wörter in den Nachrichten deines Kindes und benachrichtigt dich. Die Nachricht selbst wird nie angezeigt – nur das markierte Wort.',
  androidOnlyNote: 'Nur auf Android-Geräten verfügbar.',
  recentTitle: 'Neueste Warnungen',
  emptyTitle: 'Noch keine Warnungen',
  emptySubtitle: 'In Nachrichten wurden keine bedenklichen Wörter gefunden.',
  emptySubtitleNotWatching:
    'Nachrichten werden derzeit nicht geprüft, daher bleibt diese Liste leer, was auch passiert.',
  flaggedTerm: 'Markiertes Wort: „{{term}}“',
  flaggedTermPrefix: 'Markiertes Wort: „',
  flaggedTermSuffix: '“',
  flaggedTermMeaning: 'Bedeutung: {{gloss}}',
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
  guidanceToggle: 'Was jetzt zu tun ist',
  guidanceHide: 'Ausblenden',
  guidanceFooter:
    'KidGate hat die Nachricht nicht gespeichert – nur dieses Wort. Alles Weitere muss von deinem Kind kommen.',
  guidance: {
    predator:
      'Anbahnung beginnt fast immer freundlich, von jemandem, den dein Kind für gleichaltrig hält. Frage, mit wem es zurzeit schreibt und wie die beiden sich kennengelernt haben, bevor du die Warnung erwähnst – ein Kind, das sich erwischt fühlt, antwortet nicht mehr.',
    selfHarm:
      'Solche Wörter sind viel häufiger ein Signal als ein Plan, und direkt danach zu fragen bringt niemanden auf die Idee. Sage, was du gesehen hast, und dass du nicht wütend bist; wenn dich die Antwort erschreckt, rufe noch am selben Tag eine Krisenhotline an.',
    explicit:
      'Das kann geschickt, gezeigt oder selbst geschrieben worden sein. Kläre zuerst, was davon zutrifft: solche Inhalte zu bekommen ist ein anderes Gespräch als sie zu senden.',
    violence:
      'Eine Drohung ist ernst zu nehmen, auch wenn sie wie ein Scherz zwischen Freunden klingt. Frage, ob sie von jemandem aus der Schule kommt; wenn ja, ist die Schule der schnellste Weg, sie zu stoppen.',
    bullying:
      'Kinder erzählen das selten von selbst, und dieselben Wörter erscheinen, ob dein Kind gemeint war oder mitgemacht hat. Frage, was passiert ist, nicht wer schuld war, und notiere die Daten, falls die Schule sie braucht.',
    drugs:
      'Ein markiertes Wort ist kein Beweis für Konsum – Neugier, Songtexte und Witze lösen es genauso aus. Frage offen, statt das Zimmer zu durchsuchen; am wichtigsten ist, dass dein Kind weiter mit dir redet.',
    alcohol:
      'In Gesprächen unter Jugendlichen ganz üblich, also eher Kontext als Beweis. Ein guter Moment, klar zu sagen, welche Regel bei euch gilt – bevor eine Party die Frage dringend macht.',
    tobacco:
      'Vapes verbreiten sich über den Freundeskreis und sind meist sozial, nicht heimlich. Frage, was die Freunde benutzen: die konkrete Sache zu benennen wirkt besser als eine allgemeine Warnung.',
    gambling:
      'Lootboxen, Kartenpakete und Skin-Wetten zählen dazu und fühlen sich für Kinder selten wie Glücksspiel an. Sieh nach, wofür in Spielen Geld ausgegeben wird, bevor du es als Geldproblem behandelst.',
    profanity:
      'Kraftausdrücke allein sind verbreitet und sagen fast nichts über Sicherheit. Wenn diese Meldungen für euch nur Lärm sind, schalte „Auch Kraftausdrücke melden“ in den Einstellungen auf diesem Bildschirm aus.',
    unknown:
      'Diese Meldung kommt von einem Gerät oder einer Wortliste, die diese Version nicht mehr benennt. Das markierte Wort oben ist das, wonach zu fragen ist; sonst wurde nichts von der Nachricht behalten.',
  },
  setupTitle: 'Nachrichtensicherheit',
  setupBody:
    'Nachrichten auf bedenkliche Wörter überwachen. KidGate zeigt die Nachricht nie an – nur eine Warnung, wenn etwas Beunruhigendes auftaucht.',
  setupGrant: 'Benachrichtigungszugriff erlauben',
  setupEnable: 'Nachrichtensicherheit',
  controlledByParentHint:
    'Wird in der KidGate-App auf dem Elterntelefon ein- oder ausgeschaltet, nicht hier.',
  parentIncomingLabel: 'Empfangene Nachrichten prüfen',
  parentOutgoingLabel: 'Getippte Nachrichten prüfen',
  parentSearchLabel: 'Suchanfragen prüfen',
  parentSearchHint:
    'Browser und YouTube. Gemeldet wird nur das markierte Wort, nie die Suchanfrage selbst.',
  parentToggleHintGranted: 'Auf diesem Telefon.',
  parentToggleHintNotGranted:
    'Auf diesem Telefon noch nicht erlaubt – öffne KidGate auf dem Gerät, um es zu erlauben.',
  parentProfanityLabel: 'Auch Kraftausdrücke melden',
  parentProfanityHint:
    'Standardmäßig aus – normale Kraftausdrücke sind häufig, das macht auch sie zu einer Warnung.',
  parentToggleSaveFailed: 'Änderung konnte nicht gespeichert werden.',
  settingsTitle: 'Einstellungen für Nachrichtenwarnungen',
  checkedTitle: 'Geprüft und unbedenklich',
  checkedSubtitle:
    'Beobachtete Wörter, die aufgetaucht sind, im Zusammenhang aber harmlos waren – deshalb gab es keine Warnung. Hier steht, was stellvertretend herausgefiltert wird – sag Bescheid, wenn etwas davon hätte ankommen sollen.',
  consentTitle: 'KI-Nachrichtenanalyse',
  consentBody:
    'Wenn aktiv, werden Nachrichten, die ein Schlüsselwort als grenzwertig markiert, an einen KI-Dienst gesendet, um vor der Warnung zu prüfen, ob sie wirklich bedenklich sind. Namen, Nummern und Links werden vorher entfernt. Hochriskante Wörter warnen weiterhin sofort, ohne etwas zu senden.',
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
  directionSearch: 'Gesucht',
  alertBodyIncoming: 'Nachricht von App',
  alertBodyOutgoing: 'Nachricht gesendet von App',
  alertBodySearch: 'Suche auf',
  aiLegend:
    'Eine Warnung mit diesem Symbol wurde von der KI bestätigt, bevor du benachrichtigt wurdest.',
  setupRevoked:
    'Android hat die dafür nötige Berechtigung deaktiviert. Erteile sie erneut, damit Nachrichten weiter geprüft werden.',
  outgoingRevoked:
    'Android hat das deaktiviert. Erteile die Berechtigung erneut, damit weiter geprüft wird, was du schreibst.',
  outgoingDisclosureTitle: 'Bevor du zustimmst',
  outgoingDisclosureBody:
    'KidGate liest nur, was du in Messenger-Apps tippst – nie in einer anderen App und nie in einem Passwortfeld. Die Suche nach Warnwörtern läuft auf diesem Handy. Deine Nachrichten werden nirgendwohin gesendet; nur das markierte Wort erreicht deine Eltern.',
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
      'Du hast das eingeschaltet. Das Gerät des Kindes übernimmt die Änderung bei der nächsten Verbindung, meist innerhalb weniger Minuten – schneller, wenn das Telefon gerade benutzt wird. Du musst nichts weiter tun.',
    unknownTitle: 'Warten auf das Gerät',
    unknownBody:
      'Dieses Gerät hat noch nicht gemeldet, ob die Nachrichtensicherheit läuft – eine leere Liste sagt daher wenig aus. Sie sollte sich beim nächsten Kontakt des Geräts aktualisieren.',
    outgoingAvailableTitle: 'Auch prüfen, was dein Kind schreibt',
    outgoingAvailableBody:
      'Empfangene Nachrichten werden bereits geprüft. KidGate kann auch prüfen, was dein Kind in Messenger-Apps tippt – Mobbing und Selbstverletzung tauchen dort deutlich häufiger auf. Richte es auf dem Gerät ein.',
  },
  languagesLabel: 'Geprüfte Sprachen',
  languagesHint:
    'In welchen Sprachen dieses Gerät nach besorgniserregenden Wörtern sucht. Bis zu {{max}} auswählen.',
  languagesDefaultHint: 'Standardmäßig die Sprache des Geräts.',
} as const;
