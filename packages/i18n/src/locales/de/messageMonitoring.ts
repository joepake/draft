export const messageMonitoring = {
  actionTitle: 'Nachrichtenwarnungen',
  actionDescription:
    'Werde benachrichtigt, wenn bedenkliche Wörter in Nachrichten auftauchen',
  title: 'Nachrichtenwarnungen',
  heroTitle: 'Nachrichtenwarnungen',
  heroSubtitle:
    'KidGate markiert bedenkliche Wörter in den Nachrichten und Suchanfragen deines Kindes und benachrichtigt dich. Du siehst nur das markierte Wort oder den markierten Ausdruck, nie die Nachricht oder die Suchanfrage.',
  androidOnlyNote:
    'Nachrichten können nur auf Android-Geräten geprüft werden. Suchanfragen lassen sich auch in der Chrome-Erweiterung prüfen.',
  searchOnlyNote:
    'Hier lassen sich nur Suchanfragen prüfen. Nachrichten können nur auf Android-Geräten geprüft werden.',
  recentTitle: 'Neueste Warnungen',
  emptyTitle: 'Noch keine Warnungen',
  emptySubtitle: 'In Nachrichten wurden keine bedenklichen Wörter gefunden.',
  emptySubtitleNotWatching:
    'Nachrichten werden derzeit nicht geprüft, daher bleibt diese Liste leer, was auch passiert.',
  flaggedTerm: 'Markiert: „{{term}}“',
  flaggedTermPrefix: 'Markiert: „',
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
    'KidGate hat die Nachricht nicht gespeichert – nur dieses Wort oder diesen Ausdruck. Alles Weitere muss von deinem Kind kommen.',
  guidance: {
    predator:
      'Grooming beginnt fast immer freundlich, von jemandem, den dein Kind für gleichaltrig hält. Frage, mit wem es zurzeit schreibt und wie die beiden sich kennengelernt haben, bevor du die Warnung erwähnst – ein Kind, das sich erwischt fühlt, antwortet nicht mehr.',
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
      'Diese Meldung kommt von einem Gerät oder einer Wortliste, die diese Version nicht mehr benennt. Frag nach dem markierten Wort oder Ausdruck oben; sonst wurde nichts von der Nachricht behalten.',
  },
  setupTitle: 'Nachrichtenwarnungen',
  setupBody:
    'Wenn deine Eltern das einschalten, prüft KidGate die Nachrichten, die du bekommst, direkt auf diesem Handy auf Warnwörter. Deine Eltern sehen nur ein markiertes Wort oder einen markierten Ausdruck, nie deine Nachrichten. Wenn sie zusätzlich die KI-Nachrichtenanalyse einschalten, kann eine unklare Nachricht zur Prüfung an einen KI-Dienst gesendet werden – ohne E-Mail-Adressen, Telefonnummern, Links und @Nutzernamen.',
  setupGrant: 'Benachrichtigungszugriff erlauben',
  setupEnable: 'Nachrichtenwarnungen',
  controlledByParentHint:
    'Wird in der Eltern-App oder im Web-Dashboard ein- oder ausgeschaltet, nicht hier.',
  parentIncomingLabel: 'Empfangene Nachrichten prüfen',
  parentOutgoingLabel: 'Getippte Nachrichten prüfen',
  parentSearchLabel: 'Suchanfragen prüfen',
  parentSearchHint:
    'Browser und YouTube. Gemeldet wird nur das markierte Wort oder der markierte Ausdruck, nie die Suchanfrage selbst.',
  parentSearchHintNotGranted:
    'Braucht dieselbe Berechtigung wie „Getippte Nachrichten prüfen“. Schalte „Empfangene Nachrichten prüfen“ ein und erlaube sie dann auf dem Gerät deines Kindes.',
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
    'Wenn aktiv, wird eine Nachricht, deren markiertes Wort harmlos sein könnte oder nur ungefähr passt, an einen KI-Dienst gesendet, um zu prüfen, ob sie wirklich bedenklich ist, bevor du benachrichtigt wirst. E-Mail-Adressen, Telefonnummern, Links und @Nutzernamen werden vorher entfernt, Namen und der restliche Nachrichtentext jedoch nicht. Ein eindeutiger Treffer löst sofort eine Warnung aus, ohne dass etwas gesendet wird.',
  consentEnable: 'KI-Analyse aktivieren',
  consentConfirmTitle: 'KI-Nachrichtenanalyse aktivieren?',
  consentConfirmBody:
    'Grenzwertige Nachrichten werden zur Prüfung auf bedenkliche Inhalte an einen KI-Dienst gesendet, nachdem E-Mail-Adressen, Telefonnummern, Links und @Nutzernamen entfernt wurden. Namen und der restliche Nachrichtentext werden nicht entfernt. Du bestätigst, dass du dieser Verarbeitung zustimmst.',
  consentAgree: 'Ich stimme zu',
  outgoingTitle: 'Nachrichten, die du schreibst',
  outgoingBody:
    'KidGate kann auch prüfen, was du in Chat-Apps tippst. Es sucht nach denselben Warnwörtern, auf diesem Handy. Deine Nachrichten werden nirgendwohin gesendet.',
  outgoingEnable: 'Prüfen, was ich schreibe',
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
    'Mit dieser Berechtigung liest KidGate, was du in SMS und MMS und in Messenger-Apps tippst, und prüft es auf dieselben Warnwörter. Wenn deine Eltern Suchwarnungen einschalten, liest KidGate auch, was du in Browsern, YouTube und der Google-App tippst, zum Beispiel Suchanfragen. Passwortfelder liest KidGate nie. Die Prüfung läuft auf diesem Handy. Bei einem Treffer erhalten deine Eltern nur dieses Wort oder diesen Ausdruck, die Kategorie, die App und die Uhrzeit – nie den Rest der Nachricht oder Suche. Wenn KidGate abstürzt, wird ein Absturzprotokoll an das KidGate-Team gesendet, damit der Fehler behoben werden kann.',
  outgoingRestrictedHint:
    'Wenn der Schalter ausgegraut ist, öffne Einstellungen › Apps › KidGate, tippe auf das Menü ⋮ und wähle „Eingeschränkte Einstellungen zulassen“. Komm danach hierher zurück.',
  notice: {
    revokedTitle: 'Die Nachrichtenprüfung wurde gestoppt',
    revokedBody:
      'Android hat eine Berechtigung deaktiviert, die KidGate braucht, deshalb werden Nachrichten nicht mehr geprüft. Öffne KidGate auf dem Gerät deines Kindes und erteile sie erneut.',
    offTitle: 'Nachrichtenwarnungen sind nicht eingeschaltet',
    offBody:
      'Auf dem Gerät wird nichts geprüft, hier kann also keine Warnung erscheinen. Öffne KidGate auf dem Gerät, um es einzurichten.',
    switchedOffBody:
      'Auf dem Gerät deines Kindes wird nichts geprüft, daher kann hier keine Warnung erscheinen. Schalte „Empfangene Nachrichten prüfen“ in den Einstellungen auf diesem Bildschirm ein.',
    pendingTitle: 'Wartet darauf, dass das Gerät des Kindes das übernimmt',
    pendingBody:
      'Du hast das eingeschaltet. Das Gerät des Kindes übernimmt die Änderung bei der nächsten Verbindung, meist innerhalb weniger Minuten – schneller, wenn das Telefon gerade benutzt wird. Du musst nichts weiter tun.',
    unknownTitle: 'Warten auf das Gerät',
    unknownBody:
      'Dieses Gerät hat noch nicht gemeldet, ob die Nachrichtenwarnungen laufen – eine leere Liste sagt daher wenig aus. Das sollte sich beim nächsten Kontakt des Geräts aktualisieren.',
    outgoingAvailableTitle: 'Auch prüfen, was dein Kind schreibt',
    outgoingAvailableBody:
      'Empfangene Nachrichten werden bereits geprüft. KidGate kann auch prüfen, was dein Kind in Messenger-Apps tippt – Mobbing und Selbstverletzung tauchen dort deutlich häufiger auf. Richte es auf dem Gerät ein.',
    outgoingSwitchedOffBody:
      'Nachrichten, die dein Kind empfängt, werden geprüft. KidGate kann auch prüfen, was es in Messenger-Apps tippt – Mobbing und Selbstverletzung zeigen sich dort viel häufiger. Schalte „Getippte Nachrichten prüfen“ in den Einstellungen auf diesem Bildschirm ein.',
  },
  languagesLabel: 'Geprüfte Sprachen',
  languagesHint:
    'In welchen Sprachen dieses Gerät nach besorgniserregenden Wörtern sucht. Bis zu {{max}} auswählen.',
  languagesDefaultHint: 'Standardmäßig die Sprache des Geräts.',
  setupStepFindKidGate:
    'Aktiviere den Benachrichtigungszugriff für KidGate und bestätige.',
} as const;
