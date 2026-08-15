export const webHistory = {
  title: 'История веба',
  fallbackDeviceName: 'Устройство ребёнка',
  summarySites: 'Замечено сайтов',
  summaryBlocked: 'Заблокировано сайтов',
  sourceNoteIos:
    'На iPhone это данные из отчёта Apple «Экранное время»: сайты, на которых ребёнок провёл время, а не каждая открытая страница.',
  sourceNoteAndroid:
    'На Android это данные DNS-фильтра KidGate: сайты, которые запрашивал этот телефон, а не каждая открытая страница.',
  filterOffNoteAndroid:
    'Веб-фильтр выключен, поэтому этот телефон ничего не записывает и не блокирует. Включите его, чтобы видеть, куда он заходит.',
  filterOffNoteIos:
    'Веб-фильтр выключен, поэтому ничего не блокируется. Этот список показывает только, куда заходил телефон.',
  filterAll: 'Все сайты',
  filterBlocked: 'Только заблокированные',
  emptyTitle: 'Пока ничего не записано',
  emptyBody:
    'Сайты появятся здесь, когда устройство ребёнка выйдет в интернет с работающим KidGate.',
  emptyBlockedBody: 'Пока ничего не заблокировано.',
  dayBlockedBadge: 'Заблокировано: {{count}}',
  visitsMeta: '{{count}} посещений',
  visitsMeta_one: '{{count}} посещение',
  visitsMeta_few: '{{count}} посещения',
  blockedMeta: 'Заблокировано {{count}} раз · {{category}}',
  blockedMeta_one: 'Заблокировано {{count}} раз · {{category}}',
  blockedMeta_few: 'Заблокировано {{count}} раза · {{category}}',
  categoryUnknown: 'Список блокировки',
  showMoreDays: 'Показать ещё {{count}} дней',
  showMoreDays_one: 'Показать ещё {{count}} день',
  showMoreDays_few: 'Показать ещё {{count}} дня',
  rollupTitle: 'Куда ушло время',
  rollupShare: '{{percent}} %',
  rollupNote:
    'Доля записанных посещений по типу сайта. Только Android — iPhone не сообщает KidGate, к какому типу относится домен.',
} as const;
