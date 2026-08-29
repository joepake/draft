/** См. `en/childReport.ts` — тот же регистр, и два итога нельзя смешивать. */
export const childReport = {
  title: 'Отчёт',
  devicesCount: 'Устройств: {{count}}',

  periodToday: 'Сегодня',
  periodWeek: '7 дней',
  periodMonth: '30 дней',

  heroScreenOn: 'Фактическое время',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Это оценка: одно устройство сообщает, сколько времени им пользовались, но не когда.',
  heroOverlap:
    'Из них {{value}} — два экрана одновременно; при сложении устройств это время учтено дважды.',
  barsExplain:
    'Минута на двух устройствах сразу при сложении устройств считается за две.',
  heroEmpty: 'Данных об использовании пока нет',

  trendUp: 'На {{value}} больше, чем за прошлый период',
  trendDown: 'На {{value}} меньше, чем за прошлый период',
  trendFlat: 'Примерно как в прошлом периоде',
  trendFirst: 'Не с чем сравнить: прошлого периода нет',

  wellLateNights: 'Поздние вечера',
  coverage: 'Измерено {{percent}} % этого периода',
  coverageNone:
    'Ни одно устройство здесь не может сообщить, когда его экран был включён',

  barCombined: 'Сумма по устройствам',

  sectionDays: 'По дням',
  backToPeriod: 'Вернуться ко всему периоду',
  bandLatestDay: 'Последний измеренный день',
  sectionWhen: 'Когда экраны были включены',
  bandMerged: 'Все устройства',
  bandTooThin: 'Этот день измерен слишком мало, чтобы его нарисовать.',

  sectionDevices: 'Какое устройство',
  deviceTotalsOnly: 'Только итог',
  openDeviceReport: 'Открыть отчёт «{{name}}»',

  sectionApps: 'Чаще всего',
  appOnDevices: 'На устройствах: {{count}}',
  appsEmpty: 'Разбивки по приложениям пока нет.',

  emptyNoDevices: 'Этому ребёнку ещё не назначено ни одного устройства.',
  emptyAssign: 'Назначить устройство',
  partialError: 'Одно устройство не удалось прочитать. Цифры ниже его не учитывают.',
};
