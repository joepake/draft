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
  sevAttention: 'Ansehen',
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
  findingNewTopApp:
    '{{app}} ist diese Woche neu und hat bereits {{duration}} gekostet.',
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

  narrativeTitle: 'In einem Satz',
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
    'In den letzten zwei Wochen wurde keine Bildschirmzeit erfasst, es gibt also noch nichts zu berichten. Ein ausgeschaltetes Gerät meldet gar nichts, und das ist nicht dasselbe wie eine ruhige Woche.',
  rateLimited: 'Zu viele Versuche. Warte eine Minute.',
  failed: 'Der Bericht ließ sich nicht schreiben. Versuche es gleich noch einmal.',

  historyTitle: 'Frühere Wochen',
  historyEmpty: 'Berichte, die du ab jetzt erhältst, bleiben hier ein Jahr lang.',
} as const;
