/** Vedi `en/childReport.ts` — stesso registro, e i due totali non vanno confusi. */
export const childReport = {
  title: 'Report',
  devicesCount: '{{count}} dispositivi',
  devicesCount_one: '{{count}} dispositivo',

  periodToday: 'Oggi',
  periodWeek: '7 giorni',
  periodMonth: '30 giorni',

  heroScreenOn: 'Tempo effettivo di utilizzo',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Una stima: un dispositivo indica per quanto è stato usato, ma non quando.',
  heroOverlap:
    'Di cui {{value}} su due schermi insieme, contato due volte quando si sommano i dispositivi.',
  barsExplain:
    'Un minuto su due dispositivi insieme conta doppio quando si sommano i dispositivi.',
  heroEmpty: 'Nessun utilizzo ancora registrato',

  trendUp: '{{value}} in più rispetto al periodo precedente',
  trendDown: '{{value}} in meno rispetto al periodo precedente',
  trendFlat: 'Più o meno come il periodo precedente',
  trendFirst: 'Nessun periodo precedente da confrontare',

  coverage: 'Misurato il {{percent}}% di questo periodo',
  wellLateNights: 'Notti fino a tardi',
  coverageNone: 'Nessun dispositivo qui può dire quando il suo schermo era acceso',

  barCombined: 'Tutti i dispositivi sommati',

  sectionDays: 'Giorno per giorno',
  backToPeriod: 'Torna a tutto il periodo',
  bandLatestDay: 'Ultimo giorno misurato',
  sectionWhen: 'Quando gli schermi erano accesi',
  bandMerged: 'Tutti i dispositivi',
  bandTooThin: 'Di questo giorno è stato misurato troppo poco per disegnarlo.',

  sectionDevices: 'Quale dispositivo',
  deviceTotalsOnly: 'Solo totali',
  openDeviceReport: 'Apri il report di {{name}}',

  sectionApps: 'Più usate',
  appOnDevices: 'Su {{count}} dispositivi',
  appOnDevices_one: 'Su {{count}} dispositivo',
  appsEmpty: 'Nessun dettaglio per app al momento.',

  emptyNoDevices: 'Nessun dispositivo è ancora assegnato a questo bambino.',
  emptyAssign: 'Assegna un dispositivo',
  partialError: 'Un dispositivo non è stato letto. I dati qui sotto lo escludono.',
};
