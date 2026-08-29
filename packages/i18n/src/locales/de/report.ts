export const report = {
  title: 'Wochenbericht',
  subtitle: 'Was KidGate in dieser Woche bemerkt hat.',
  weekOf: 'Woche {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Sonntag gesendet',
  triggerManual: 'Von dir erstellt',

  statScreenTime: 'Bildschirmzeit',
  statDailyAverage: 'Durchschnitt pro Tag',
  statBlockedApps: 'Blockierte Apps',
  statBlockedWebVisits: 'Gefilterte Seiten',

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
  findingAppSurge: '{{app}} legt um {{delta}} zu – insgesamt {{duration}}.',
  findingLimitHit_one: 'Das Tageslimit von {{limit}} wurde an einem Tag erreicht.',
  findingLimitHit_other:
    'Das Tageslimit von {{limit}} wurde an {{count}} Tagen erreicht.',
  findingBlockedApps:
    '{{count}} blockierte App-Starts, in der Vorwoche waren es {{previous}}.',
  findingBlockedWeb:
    '{{count}} gefilterte Seiten, in der Vorwoche waren es {{previous}}.',
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
    '{{count}} gefilterte Websites, gegenüber {{previous}} in der Vorwoche.',
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
  shareFailed: 'Das Teilen-Menü ließ sich nicht öffnen.',

  emptyTitle: 'Noch kein Bericht',
  emptyBody:
    'Jeden Sonntagabend kommt ein Bericht. Du kannst den dieser Woche auch jetzt schreiben – er deckt die letzten sieben Tage ab.',
  noUsage:
    'In den letzten zwei Wochen wurde keine Bildschirmzeit erfasst, es gibt also noch nichts zu berichten. Ein Gerät ohne Verbindung meldet gar nichts, und das ist nicht dasselbe wie eine ruhige Woche.',
  rateLimited: 'Zu viele Versuche. Warte eine Minute.',
  loadFailedTitle: 'Berichte nicht geladen',
  loadFailed:
    'Die Berichte lassen sich nicht öffnen. Zum erneuten Laden nach unten ziehen.',
  failed: 'Der Bericht ließ sich nicht schreiben. Versuche es gleich noch einmal.',

  historyTitle: 'Frühere Wochen',
  historyEmpty: 'Berichte, die du ab jetzt erhältst, bleiben hier ein Jahr lang.',

  hubToday: 'Heute',
  hubTodayEmpty: 'Heute hat noch kein Gerät Daten gemeldet.',
  hubByChild: 'Nach Kind',
  hubByDevice: 'Nach Gerät',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Jedes Kind',
  childrenNote:
    'Dieselben zwei Wochen, pro Gerät. Prozentwerte beziehen sich auf die Familiensumme.',
  colChild: 'Kind',
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
  noTopApp: '—',
  limitDays_one: '{{count}} Tag',
  limitDays_other: '{{count}} Tage',
  lateNightsNone: 'keine',
  busiest: 'Meiste Bildschirmzeit',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'Das wird angezeigt',
  guestPreviewHint:
    'Beispiel — echte Zahlen erscheinen, sobald ein Gerät verbunden ist',
  guestTitle: 'Sehen, wohin die Woche ging',
  guestDescription:
    'Melde dich an, um heute mit einem normalen Tag zu vergleichen, deine Kinder nebeneinander zu sehen und jeden Sonntag einen Bericht zu erhalten.',
  guestBenefitTrendTitle: 'Heute, gegen den Normalfall',
  guestBenefitTrendBody:
    'Eine Zahl allein sagt nichts. Heute wird immer gegen den eigenen Tagesdurchschnitt deiner Familie gezeichnet.',
  guestBenefitChildTitle: 'Jedes Kind, nebeneinander',
  guestBenefitChildBody:
    'Der Anteil jedes Kindes am Tag, in seiner eigenen Farbe, über alle genutzten Geräte hinweg.',
  guestBenefitWeeklyTitle: 'Jeden Sonntag ein Bericht',
  guestBenefitWeeklyBody:
    'Was sich verändert hat, welche Apps zugelegt haben und die späten Abende — ein Jahr lang aufbewahrt.',
  guestSignInButton: 'Anmelden',
  guestCreateAccount: 'Elternkonto erstellen',
} as const;
