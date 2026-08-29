/** Siehe `en/childReport.ts` — gleiches Register, und die zwei Summen dürfen nicht verschmelzen. */
export const childReport = {
  title: 'Bericht',
  devicesCount: '{{count}} Geräte',
  devicesCount_one: '{{count}} Gerät',

  periodToday: 'Heute',
  periodWeek: '7 Tage',
  periodMonth: '30 Tage',

  heroScreenOn: 'Tatsächlich genutzt',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Ein Schätzwert — ein Gerät meldet, wie lange es genutzt wurde, aber nicht wann.',
  heroOverlap:
    'Davon {{value}} auf zwei Bildschirmen gleichzeitig — beim Zusammenzählen der Geräte doppelt gerechnet.',
  barsExplain:
    'Eine Minute auf zwei Geräten gleichzeitig zählt doppelt, wenn die Geräte zusammengezählt werden.',
  heroEmpty: 'Noch keine Nutzung gemeldet',

  trendUp: '{{value}} mehr als im Zeitraum davor',
  trendDown: '{{value}} weniger als im Zeitraum davor',
  trendFlat: 'Etwa so viel wie im Zeitraum davor',
  trendFirst: 'Kein früherer Zeitraum zum Vergleich',

  coverage: '{{percent}} % dieses Zeitraums gemessen',
  wellLateNights: 'Späte Nächte',
  coverageNone: 'Kein Gerät hier kann melden, wann sein Bildschirm an war',

  barCombined: 'Alle Geräte zusammen',

  sectionDays: 'Tag für Tag',
  backToPeriod: 'Wieder den ganzen Zeitraum zeigen',
  bandLatestDay: 'Zuletzt gemessener Tag',
  sectionWhen: 'Wann die Bildschirme an waren',
  bandMerged: 'Alle Geräte',
  bandTooThin: 'Von diesem Tag wurde zu wenig gemessen, um ihn zu zeichnen.',

  sectionDevices: 'Welches Gerät',
  deviceTotalsOnly: 'Nur Summen',
  openDeviceReport: 'Bericht für {{name}} öffnen',

  sectionApps: 'Am meisten genutzt',
  appOnDevices: 'Auf {{count}} Geräten',
  appOnDevices_one: 'Auf {{count}} Gerät',
  appsEmpty: 'Noch keine App-Aufschlüsselung gemeldet.',

  emptyNoDevices: 'Diesem Kind ist noch kein Gerät zugewiesen.',
  emptyAssign: 'Gerät zuweisen',
  partialError:
    'Ein Gerät konnte nicht gelesen werden. Die Zahlen unten lassen es aus.',
};
