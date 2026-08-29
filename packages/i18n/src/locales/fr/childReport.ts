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
  heroOverlap:
    'Dont {{value}} sur deux écrans à la fois, compté deux fois quand on cumule les appareils.',
  barsExplain:
    'Une minute sur deux appareils à la fois compte double quand on cumule les appareils.',
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
  bandLatestDay: 'Dernier jour mesuré',
  sectionWhen: 'Quand les écrans étaient allumés',
  bandMerged: 'Tous les appareils',
  bandTooThin: 'Trop peu de cette journée a été mesuré pour la tracer.',

  sectionDevices: 'Quel appareil',
  deviceTotalsOnly: 'Totaux seulement',
  openDeviceReport: 'Ouvrir le rapport de {{name}}',

  sectionApps: 'Les plus utilisées',
  appOnDevices: 'Sur {{count}} appareils',
  appOnDevices_one: 'Sur {{count}} appareil',
  appsEmpty: 'Aucune répartition par application pour le moment.',

  emptyNoDevices: 'Aucun appareil n’est encore attribué à cet enfant.',
  emptyAssign: 'Attribuer un appareil',
  partialError:
    'Un appareil n’a pas pu être lu. Les chiffres ci-dessous ne le comptent pas.',
};
