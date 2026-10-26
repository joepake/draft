export const usage = {
  title: 'Отчёт об использовании',
  fallbackDeviceName: 'Устройство ребёнка',
  sectionToday: 'Сегодня',
  reportedAt: 'Обновлено в {{time}}',
  statUsedLabel: 'Использовано',
  statLeftLabel: 'Осталось',
  statLimitLabel: 'Лимит',
  insightDailyLimitReached: 'Дневной лимит достигнут',
  insightNearDailyLimit: 'Скоро дневной лимит',
  insightNoDailyLimit: 'Дневной лимит не задан',
  insightBlockedHoursActive: 'Сейчас действуют Часы блокировки',
  insightDeviceLocked: 'Устройство заблокировано',
  signalLocksToday: 'Блокировки сегодня',
  signalUnlocksToday: 'Разблокировки сегодня',
  signalLocksPeriod: 'Недавние блокировки',
  signalLocationsToday: 'Местоположения сегодня',
  sectionWhatsTurnedOn: 'Что включено',
  rowBlockedHours: 'Часы блокировки',
  valueOff: 'Выкл.',
  rowBlockedApps: 'Заблокированные приложения',
  valueNotConfigured: 'Не настроено',
  rowWebFilter: 'Веб-фильтр',
  valueOn: 'Вкл.',
  rowLocation: 'Местоположение',
  valueSharingOn: 'Общий доступ включён',
  sectionLatestActivity: 'Последняя активность',
  activityPeriodCount: '{{count}} за последнее время',
  activityEmpty:
    'Активность пока не зафиксирована. Здесь будут отображаться блокировки, разблокировки и обновления Экранного времени.',
  usageReportAccessibility:
    'Отчёт об использовании. {{headline}}. Открыть полный отчёт.',
  dailyLimitReached: 'Дневной лимит достигнут',
  minutesLeftToday: 'Осталось {{remaining}} сегодня',
  minutesUsedTodayShort: 'Использовано {{used}} сегодня',
  noUsageDataYet: 'Данных пока нет',
  usageToday: 'Использование сегодня',
  report: 'Отчёт',
  setDailyLimitToTrack:
    'Задайте Дневной лимит, чтобы отслеживать оставшееся время и недельные тенденции.',
  deviceLockedChip: 'Устройство заблокировано',
  blockedHoursChip: 'Часы блокировки',
  overLimitChip: 'Лимит превышен',
  syncNote:
    'Экранное время здесь может отставать от устройства до 5 минут, а в бесплатном тарифе — до 15, и дольше, если у устройства нет подключения к интернету или оно неожиданно завершило работу.',
  syncNoteIos:
    'На iPhone экранное время приходит только после запуска KidGate на устройстве ребёнка, поэтому оно может отставать на несколько часов, если приложение не открывали.',
  syncNoteTv:
    'Этот телевизор выходит на связь только периодически, поэтому экранное время может появиться здесь только через час — дольше при отсутствии подключения к интернету.',
  sectionLast30Days: 'Последние 30 дней',
  comparePeriodTotal: 'Всего',
  compareDayAvg: 'Среднее за день',
  compareVsYesterdaySameTime: '{{value}} по сравнению со вчерашним днём к этому часу',
  dayTodayShort: 'Сегодня',
  chartEmpty: 'График использования сейчас недоступен.',
  chartNoDataYet:
    'Столбцы заполняются по мере синхронизации ежедневного использования с устройства ребёнка. Данные за сегодня обновляются в реальном времени.',
  chartDayNone: 'Нет использования',
  bonusMinutesChip: '+{{minutes}} мин бонуса',
  topAppsHint:
    'Самые используемые сегодня приложения на устройстве ребёнка. Данные накапливаются по мере синхронизации Экранного времени / доступа к данным об использовании.',
  topAppsExcludedNote:
    'Заставка, главный экран и сам экран KidGate не считаются экранным временем. Когда устройство включено, но им никто не пользуется, эти минуты записываются как «Не используется».',
  topAppsAiNote:
    'Некоторые типы выведены из названия приложения, а не сопоставлены с известным приложением, поэтому часть может быть неточной.',
  errorDescription: 'Проверьте подключение и попробуйте снова.',
  tryAgain: 'Повторить',
  // Shown only when the rating is known — it is 0 for much of the long
  // tail, and 0 does not mean "suitable for everyone".
  appMinAge: 'Рейтинг {{age}}+',
  underAMinute: 'Меньше минуты',
  topAppsOther: 'Другие приложения',
  topAppsJoinedNote:
    'Это устройство присоединилось к семье в {{time}}. Использование до этого может быть учтено не полностью или попасть в «Другие приложения».',
  topAppsEmpty:
    'Данных по отдельным приложениям пока нет. Убедитесь, что на устройстве ребёнка KidGate разрешено измерять использование приложений, и дождитесь синхронизации.',
  protectionImpactTitle: 'Эффект защиты',
  protectionImpactHint: 'Итоги с момента настройки этого устройства.',
  protectionBlockedApps: 'Заблокированные запуски приложений',
  protectionWebBlocked: 'Заблокированные сайты',
  protectionTamper: 'Оповещения о защите',
  sectionTimeline: 'Когда экран был включён',
  timelineUsed: 'Используется',
  timelineIdle: 'Не используется',
  idleRow: 'Экран включён, не используется',
  timelineUnmeasured: 'Не измерено',
  timelineUnmeasuredHint:
    'KidGate не работал на устройстве, или устройство спало. Эти минуты не входят и в общее время.',
  timelineUnsupported:
    'Это устройство сообщает, сколько времени им пользовались, но не когда.',
  timelinePending: 'Данных по времени пока нет.',
} as const;
