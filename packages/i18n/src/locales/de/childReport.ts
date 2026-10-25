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
    'Ein Schätzwert – ein Gerät meldet, wie lange es genutzt wurde, aber nicht wann.',
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
  sectionWhen: 'Wann die Bildschirme an waren',
  bandMerged: 'Alle Geräte',
  bandTooThin: 'Von diesem Tag wurde zu wenig gemessen, um ihn zu zeichnen.',

  sectionDevices: 'Welches Gerät',
  openDeviceReport: 'Bericht für {{name}} öffnen',
  deviceNoScreenTime: 'Misst keine Bildschirmzeit',

  sectionApps: 'Am meisten genutzt',
  appOnDevices: 'Auf {{count}} Geräten',
  appOnDevices_one: 'Auf {{count}} Gerät',
  appsEmpty: 'Noch keine App-Aufschlüsselung gemeldet.',
  deviceJoinedNote:
    '{{device}} ist der Familie um {{time}} beigetreten. Die Nutzung davor kann unvollständig sein oder unter „Andere Apps“ gezählt werden.',

  emptyNoDevices: 'Diesem Kind ist noch kein Gerät zugewiesen.',
  emptyAssign: 'Gerät zuweisen',
  partialError:
    'Ein Gerät konnte nicht gelesen werden. Die Zahlen unten lassen es aus.',
};
