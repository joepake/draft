export const report = {
  title: 'Wochenbericht',
  subtitle: 'Was KidGate in dieser Woche bemerkt hat.',
  weekOf: 'Woche {{week}}',
  weekOfYear: 'Woche {{week}} - {{year}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Montag gesendet',
  triggerManual: 'Von dir erstellt',

  statScreenTime: 'Bildschirmzeit',
  statDailyAverage: 'Durchschnitt pro Tag',
  statBlockedApps: 'Blockierte App-Starts',
  statBlockedWebVisits: 'Blockierte Seitenaufrufe',
  statTasksApproved: 'Erledigte Aufgaben',

  trendUp: '{{value}} mehr als in der Vorwoche',
  trendDown: '{{value}} weniger als in der Vorwoche',
  trendFlat: 'Etwa wie in der Vorwoche',
  trendFirstWeek: 'Erste gemessene Woche',
  barThisWeek: 'Diese Woche',
  barLastWeek: 'Vorwoche',

  highlights: 'Wissenswert',
  sevAttention: 'Einen Blick wert',
  sevNotable: 'Bemerkenswert',
  sevInfo: 'Zur Info',

  findingUsageUp:
    'Die Bildschirmzeit stieg um {{percent}} % – {{delta}} mehr als in der Vorwoche.',
  findingUsageDown:
    'Die Bildschirmzeit sank um {{percent}} % – {{delta}} weniger als in der Vorwoche.',
  findingUsageFlat: 'Die Bildschirmzeit blieb bei {{total}}.',
  findingLateNight_one: 'Eine Nacht nach 23 Uhr – sie ging bis {{time}}.',
  findingLateNight_other:
    '{{count}} Nächte nach 23 Uhr – die späteste ging bis {{time}}.',
  findingNewTopApp: '{{app}} ist diese Woche neu und kommt schon auf {{duration}}.',
  findingAppSurge:
    '{{app}} legte um {{delta}} gegenüber der Vorwoche zu – insgesamt {{duration}}.',
  findingLimitHit_one: 'Das Tageslimit von {{limit}} wurde an einem Tag erreicht.',
  findingLimitHit_other:
    'Das Tageslimit von {{limit}} wurde an {{count}} Tagen erreicht.',
  findingBlockedApps:
    '{{count}} blockierte App-Starts, in der Vorwoche waren es {{previous}}.',
  findingBlockedWeb:
    '{{count}} blockierte Seitenaufrufe, in der Vorwoche waren es {{previous}}.',
  findingQuietWeek:
    'Eine ruhige Woche – insgesamt {{total}}, und nichts, das dich gebraucht hätte.',

  // Die positive Hälfte des Berichts. Jeder Satz nennt, was passiert ist, und
  // die Zahl dahinter — kein Lob: `docs/COPY_STYLE.md` verbietet Schmeichelei
  // ebenso wie Alarm.
  findingLimitRespected:
    'Das Tageslimit von {{limit}} wurde an allen {{count}} Tagen eingehalten.',
  findingLateNightGone_one:
    'Diese Woche keine späte Nacht, nach einer in der Vorwoche.',
  findingLateNightGone_other:
    'Diese Woche keine späten Nächte, nach {{count}} in der Vorwoche.',
  findingBlockedAppsDown:
    '{{count}} blockierte App-Starts, gegenüber {{previous}} in der Vorwoche.',
  findingBlockedWebDown:
    '{{count}} blockierte Seitenaufrufe, gegenüber {{previous}} in der Vorwoche.',
  findingLearningTime: '{{duration}} in Lern-Apps, der größte Teil davon in {{app}}.',
  findingTasksDone_one: 'Eine Aufgabe erledigt, {{bonus}} verdient.',
  findingTasksDone_other: '{{count}} Aufgaben erledigt, {{bonus}} verdient.',
  findingAskedFirst_one: 'Eine Anfrage gestellt, statt eine Regel zu umgehen.',
  findingAskedFirst_other: '{{count}} Anfragen gestellt, statt Regeln zu umgehen.',
  findingCheckedIn: 'Alle {{asked}} Check-ins beantwortet.',

  narrativeTitle: 'In einem Satz',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'Ein möglicher nächster Schritt',
  actionDailyLimit: 'Tageslimit von {{duration}} festlegen',
  actionDailyLimitWhy: 'Das war der Tagesschnitt der vergangenen Woche.',
  actionBlockedHours: 'Sperrzeiten festlegen',
  actionBlockedHoursLateNight: 'Nachtstunden sperren',
  actionOnDevice: 'Auf {{device}}',
  finePrint:
    'Die Zahlen umfassen {{from}} bis {{to}}, über alle Geräte der Familie. Bildschirmzeit ist das, was die Geräte gemeldet haben; Minuten, die sie nicht messen konnten, stecken in keiner der Summen.',

  generate: 'Bericht dieser Woche schreiben',
  generating: 'Wird geschrieben…',
  share: 'Teilen',
  copySummary: 'Zusammenfassung kopieren',
  copied: 'Zusammenfassung kopiert.',
  shareFailed: 'Das Teilen-Menü ließ sich nicht öffnen. Versuche es erneut.',
  shareLinkCta: 'App unter {{url}} herunterladen',
  shareFooterDesc:
    'KidGate hilft Eltern, die Bildschirmzeit zu verwalten, den Standort zu sehen und das Web zu filtern.',
  shareFooterCta: 'App unter kidgate.app herunterladen',

  currentWeekTab: 'Diese Woche',
  currentWeekTitle: 'Wird noch gemessen',
  currentWeekBody: 'Der Bericht für diese Woche kommt am {{day}}.',
  currentWeekNote:
    'Er umfasst Montag bis Sonntag, über alle Geräte der Familie. Es fehlt noch nichts – die Woche ist nicht vorbei.',

  emptyTitle: 'Noch kein Bericht',
  emptyBody:
    'Mit Premium kommt jeden Montagmorgen ein Bericht. Den Bericht für diese Woche kannst du auch jetzt schon schreiben – er deckt die letzten sieben Tage ab.',
  noUsage:
    'In den letzten zwei Wochen wurde keine Bildschirmzeit erfasst, es gibt also noch nichts zu berichten. Ein Gerät ohne Verbindung meldet gar nichts, und das ist nicht dasselbe wie eine ruhige Woche.',
  rateLimited:
    'Ein weiterer Bericht lässt sich noch nicht schreiben. Versuche es in einer Minute erneut.',
  loadFailedTitle: 'Berichte nicht geladen',
  loadFailed: 'Die Berichte lassen sich nicht öffnen.',
  failed: 'Der Bericht ließ sich nicht schreiben. Versuche es gleich noch einmal.',

  historyTitle: 'Frühere Wochen',
  historyEmpty: 'Berichte, die du ab jetzt erhältst, bleiben hier ein Jahr lang.',

  hubToday: 'Heute',
  hubTodayEmpty: 'Heute hat noch kein Gerät Daten gemeldet.',
  hubByChild: 'Nach Kind',
  hubChildUnassigned: 'Kein Gerät zugewiesen',
  hubByDevice: 'Nach Gerät',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Jedes Kind',
  childrenNoteByChild:
    'Diese Woche, jedes Kind über alle Geräte, die es nutzt. Prozentwerte beziehen sich auf die Familiensumme.',
  devicesTitle: 'Jedes Gerät',
  childrenNote:
    'Diese Woche, pro Gerät. Prozentwerte beziehen sich auf die Familiensumme.',
  colChild: 'Kind',
  colDevice: 'Gerät',
  colScreenTime: 'Bildschirmzeit',
  colShare: 'Anteil',
  colChange: 'Ggü. Vorwoche',
  colLimit: 'Über dem Limit',
  colLateNights: 'Späte Nächte',
  colTopApp: 'Meistgenutzt',
  unnamedChild: 'Ohne Namen',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'etwa gleich',
  noLimit: 'Kein Limit',
  noTopApp: '–',
  limitDays_one: '{{count}} Tag',
  limitDays_other: '{{count}} Tage',
  lateNightsNone: 'keine',
  busiest: 'Meiste Bildschirmzeit',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'So sieht es aus',
  guestPreviewHint:
    'Beispiel – echte Zahlen erscheinen, sobald ein Gerät verbunden ist',
  guestTitle: 'Sieh, wie die Woche am Bildschirm lief',
  guestDescription:
    'Melde dich an, um den heutigen Tag mit einem normalen zu vergleichen und deine Kinder nebeneinander zu sehen. Mit Premium bekommst du außerdem jeden Montag einen Wochenbericht.',
  guestBenefitTrendTitle: 'Heute im Vergleich zu sonst',
  guestBenefitTrendBody:
    'Erst der Vergleich mit dem Tagesdurchschnitt deiner Familie zeigt, ob es heute mehr oder weniger ist.',
  guestBenefitChildTitle: 'Alle Kinder im Vergleich',
  guestBenefitChildBody:
    'Du siehst den Anteil jedes Kindes am Tag in seiner Farbe – über alle Geräte, die es nutzt.',
  guestBenefitWeeklyTitle: 'Mit Premium jeden Montag ein Bericht',
  guestBenefitWeeklyBody:
    'Was sich geändert hat, welche Apps zugelegt haben und wie spät es wurde – ein Jahr lang gespeichert.',
} as const;
