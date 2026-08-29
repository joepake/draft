/** Ver `en/childReport.ts` — mesmo registro, e os dois totais não podem ser confundidos. */
export const childReport = {
  title: 'Relatório',
  devicesCount: '{{count}} dispositivos',
  devicesCount_one: '{{count}} dispositivo',

  periodToday: 'Hoje',
  periodWeek: '7 dias',
  periodMonth: '30 dias',

  heroScreenOn: 'Uso real',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Uma estimativa: um dispositivo informa por quanto tempo foi usado, mas não quando.',
  heroOverlap:
    'Desses, {{value}} com duas telas ao mesmo tempo, contado duas vezes ao somar os dispositivos.',
  barsExplain:
    'Um minuto em dois dispositivos ao mesmo tempo conta como dois ao somar os dispositivos.',
  heroEmpty: 'Ainda sem uso registrado',

  trendUp: '{{value}} a mais que no período anterior',
  trendDown: '{{value}} a menos que no período anterior',
  trendFlat: 'Quase igual ao período anterior',
  trendFirst: 'Não há período anterior para comparar',

  wellLateNights: 'Noites tardias',
  coverage: 'Medido {{percent}}% deste período',
  coverageNone:
    'Nenhum dispositivo aqui consegue informar quando a tela dele esteve ligada',

  barCombined: 'Todos os dispositivos somados',

  sectionDays: 'Dia a dia',
  backToPeriod: 'Voltar a todo o período',
  bandLatestDay: 'Último dia medido',
  sectionWhen: 'Quando as telas estiveram ligadas',
  bandMerged: 'Todos os dispositivos',
  bandTooThin: 'Foi medido pouco demais deste dia para desenhá-lo.',

  sectionDevices: 'Qual dispositivo',
  deviceTotalsOnly: 'Só totais',
  openDeviceReport: 'Abrir o relatório de {{name}}',

  sectionApps: 'Mais usados',
  appOnDevices: 'Em {{count}} dispositivos',
  appOnDevices_one: 'Em {{count}} dispositivo',
  appsEmpty: 'Ainda sem detalhamento por aplicativo.',

  emptyNoDevices: 'Ainda não há nenhum dispositivo atribuído a esta criança.',
  emptyAssign: 'Atribuir um dispositivo',
  partialError: 'Não foi possível ler um dispositivo. Os números abaixo não o incluem.',
};
