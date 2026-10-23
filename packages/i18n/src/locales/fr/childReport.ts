/** Voir `en/childReport.ts` — même registre, et les deux totaux ne doivent pas être confondus. */
export const childReport = {
  title: 'Rapport',
  devicesCount: '{{count}} appareils',
  devicesCount_one: '{{count}} appareil',

  periodToday: 'Aujourd’hui',
  periodWeek: '7 jours',
  periodMonth: '30 jours',

  heroScreenOn: 'Temps réellement utilisé',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Une estimation : un appareil indique combien de temps il a servi, mais pas quand.',
  heroEmpty: 'Aucune utilisation signalée pour le moment',

  trendUp: '{{value}} de plus que la période précédente',
  trendDown: '{{value}} de moins que la période précédente',
  trendFlat: 'À peu près comme la période précédente',
  trendFirst: 'Aucune période précédente à comparer',

  coverage: 'Mesuré {{percent}} % de cette période',
  wellLateNights: 'Nuits tardives',
  coverageNone: 'Aucun appareil ici ne peut indiquer quand son écran était allumé',

  barCombined: 'Tous les appareils cumulés',

  sectionDays: 'Jour par jour',
  backToPeriod: 'Revenir à toute la période',
  sectionWhen: 'Quand les écrans étaient allumés',
  bandMerged: 'Tous les appareils',
  bandTooThin: 'Cette journée a été trop peu mesurée pour être tracée.',

  sectionDevices: 'Quel appareil',
  openDeviceReport: 'Ouvrir le rapport de {{name}}',
  deviceNoScreenTime: 'Ne mesure pas le temps d’écran',

  sectionApps: 'Les plus utilisées',
  appOnDevices: 'Sur {{count}} appareils',
  appOnDevices_one: 'Sur {{count}} appareil',
  appsEmpty: 'Aucune répartition par application pour le moment.',
  deviceJoinedNote:
    '{{device}} a rejoint la famille à {{time}}. Son utilisation antérieure peut être incomplète ou comptée dans « Autres applications ».',

  emptyNoDevices: 'Aucun appareil n’est encore attribué à cet enfant.',
  emptyAssign: 'Attribuer un appareil',
  partialError:
    'Un appareil n’a pas pu être lu. Les chiffres ci-dessous ne le comptent pas.',
};
