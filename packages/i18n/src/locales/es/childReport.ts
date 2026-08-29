/** Véase `en/childReport.ts` — mismo registro, y los dos totales no deben confundirse. */
export const childReport = {
  title: 'Informe',
  devicesCount: '{{count}} dispositivos',
  devicesCount_one: '{{count}} dispositivo',

  periodToday: 'Hoy',
  periodWeek: '7 días',
  periodMonth: '30 días',

  heroScreenOn: 'Uso real',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Una estimación: un dispositivo informa cuánto se usó, pero no cuándo.',
  heroOverlap:
    'De eso, {{value}} con dos pantallas a la vez, que se cuenta dos veces al sumar los dispositivos.',
  barsExplain:
    'Un minuto en dos dispositivos a la vez cuenta como dos al sumar los dispositivos.',
  heroEmpty: 'Aún no hay uso registrado',

  trendUp: '{{value}} más que en el periodo anterior',
  trendDown: '{{value}} menos que en el periodo anterior',
  trendFlat: 'Casi igual que en el periodo anterior',
  trendFirst: 'No hay periodo anterior con el que comparar',

  wellLateNights: 'Noches tardías',
  coverage: 'Medido el {{percent}} % de este periodo',
  coverageNone:
    'Ningún dispositivo aquí puede informar cuándo estuvo encendida su pantalla',

  barCombined: 'Todos los dispositivos sumados',

  sectionDays: 'Día a día',
  backToPeriod: 'Volver a todo el periodo',
  bandLatestDay: 'Último día medido',
  sectionWhen: 'Cuándo estuvieron encendidas las pantallas',
  bandMerged: 'Todos los dispositivos',
  bandTooThin: 'Se midió muy poco de este día como para dibujarlo.',

  sectionDevices: 'Qué dispositivo',
  deviceTotalsOnly: 'Solo totales',
  openDeviceReport: 'Abrir el informe de {{name}}',

  sectionApps: 'Más usadas',
  appOnDevices: 'En {{count}} dispositivos',
  appOnDevices_one: 'En {{count}} dispositivo',
  appsEmpty: 'Aún no hay desglose por aplicación.',

  emptyNoDevices: 'Todavía no hay ningún dispositivo asignado a este niño.',
  emptyAssign: 'Asignar un dispositivo',
  partialError: 'No se pudo leer un dispositivo. Las cifras de abajo lo omiten.',
};
