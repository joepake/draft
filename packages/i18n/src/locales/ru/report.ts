/**
 * Russian. The counted strings keep the plain key rather than `_one/_few/_many`
 * and are worded so the number stands beside a noun in a fixed form — "за
 * {{count}} дн." — because a report line reads once a week and a wrong case is
 * more visible than a slightly flat phrasing.
 */
export const report = {
  title: 'Отчёт за неделю',
  subtitle: 'Что KidGate заметил за неделю.',
  weekOf: 'Неделя {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Отправлен в воскресенье',
  triggerManual: 'Создан вами',

  statScreenTime: 'Экранное время',
  statDailyAverage: 'В среднем за день',
  statBlockedApps: 'Заблокированные приложения',
  statBlockedWebVisits: 'Отфильтрованные сайты',

  trendUp: 'на {{value}} больше, чем неделей раньше',
  trendDown: 'на {{value}} меньше, чем неделей раньше',
  trendFlat: 'Примерно как неделей раньше',
  trendFirstWeek: 'Первая измеренная неделя',
  barThisWeek: 'Эта неделя',
  barLastWeek: 'Прошлая неделя',

  highlights: 'Стоит знать',
  sevAttention: 'Стоит посмотреть',
  sevNotable: 'Заметно',
  sevInfo: 'К сведению',

  findingUsageUp:
    'Экранное время выросло на {{percent}}% — на {{delta}} больше, чем на прошлой неделе.',
  findingUsageDown:
    'Экранное время снизилось на {{percent}}% — на {{delta}} меньше, чем на прошлой неделе.',
  findingUsageFlat: 'Экранное время осталось на уровне {{total}}.',
  findingLateNight: 'Ночей после 23:00 — {{count}}; самая поздняя длилась до {{time}}.',
  findingNewTopApp:
    'Приложение {{app}} появилось на этой неделе и уже заняло {{duration}}.',
  findingAppSurge:
    'Приложение {{app}} выросло на {{delta}} по сравнению с прошлой неделей — всего {{duration}}.',
  findingLimitHit: 'Дневной лимит {{limit}} достигнут за {{count}} дн.',
  findingBlockedApps:
    'Заблокированных запусков приложений — {{count}}, на прошлой неделе было {{previous}}.',
  findingBlockedWeb:
    'Отфильтровано сайтов — {{count}}, на прошлой неделе было {{previous}}.',
  findingQuietWeek:
    'Спокойная неделя — всего {{total}}, и ничего, что потребовало бы вас.',

  // Положительная половина отчёта. Каждая строка называет факт и число за ним;
  // ни одна не хвалит — `docs/COPY_STYLE.md` запрещает лесть так же, как
  // тревогу.
  //
  // Формулировки именные, а не глагольные в прошедшем времени: род ребёнка
  // продукту неизвестен, и «выполнил(а)» — именно та подсказка, которой здесь
  // быть не должно. Согласование идёт с «лимит», «заданий», «запросов».
  findingLimitRespected: 'Дневной лимит {{limit}} соблюдён все {{count}} дн.',
  findingLateNightGone:
    'На этой неделе ночных сеансов нет — на прошлой их было {{count}}.',
  findingBlockedAppsDown:
    'Заблокированных запусков — {{count}}, на прошлой неделе было {{previous}}.',
  findingBlockedWebDown:
    'Отфильтрованных сайтов — {{count}}, на прошлой неделе было {{previous}}.',
  findingLearningTime: '{{duration}} в учебных приложениях, большая часть — {{app}}.',
  findingTasksDone: 'Выполненных заданий — {{count}}, начислено {{bonus}}.',
  findingAskedFirst: 'Отправлено запросов — {{count}}, вместо обхода правил.',
  findingCheckedIn: 'На все {{asked}} Check-In получены ответы.',

  narrativeTitle: 'Коротко',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'Что можно сделать',
  actionDailyLimit: 'Установить Дневной лимит {{duration}}',
  actionDailyLimitWhy: 'Столько в среднем за день выходило на прошлой неделе.',
  actionBlockedHours: 'Установить Заблокированные часы',
  actionBlockedHoursLateNight: 'Заблокировать ночные часы',
  actionOnDevice: 'На устройстве {{device}}',
  finePrint:
    'Данные охватывают период с {{from}} по {{to}} по всем устройствам семьи. Экранное время — это то, что сообщили устройства; минуты, которые они не смогли измерить, не входят ни в одну сумму.',

  generate: 'Составить отчёт за эту неделю',
  generating: 'Составляем…',
  share: 'Поделиться',
  copySummary: 'Скопировать сводку',
  copied: 'Сводка скопирована.',
  shareFailed: 'Не удалось открыть меню «Поделиться».',
  shareFooterDesc:
    'KidGate помогает родителям видеть экранное время, местоположение и сообщения.',
  shareFooterCta: 'Скачайте приложение на kidgate.app/get',

  emptyTitle: 'Отчёта пока нет',
  emptyBody:
    'Отчёт приходит каждое воскресенье вечером. Можно составить отчёт за эту неделю прямо сейчас — он охватывает последние семь дней.',
  noUsage:
    'За последние две недели экранное время не записывалось, поэтому сообщать пока не о чем. Устройство вне сети не сообщает ничего, и это не то же самое, что спокойная неделя.',
  rateLimited: 'Слишком много попыток. Подождите минуту.',
  loadFailedTitle: 'Отчёты не загрузились',
  loadFailed: 'Не удалось открыть отчёты. Потяните вниз, чтобы повторить.',
  failed: 'Не удалось составить отчёт. Попробуйте чуть позже.',

  historyTitle: 'Прошлые недели',
  historyEmpty: 'Отчёты, которые вы получите с этого момента, хранятся здесь год.',

  hubToday: 'Сегодня',
  hubTodayEmpty: 'Сегодня ещё ни одно устройство не отправило данные.',
  hubByChild: 'По ребёнку',
  hubByDevice: 'По устройству',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'По детям',
  childrenNote: 'Те же две недели, по устройствам. Проценты — от суммы по семье.',
  colChild: 'Ребёнок',
  colScreenTime: 'Экранное время',
  colShare: 'Доля',
  colChange: 'К прошлой неделе',
  colLimit: 'Сверх лимита',
  colLateNights: 'Поздние вечера',
  colTopApp: 'Чаще всего',
  unnamedChild: 'Без имени',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'примерно столько же',
  noLimit: 'Без лимита',
  noTopApp: '—',
  limitDays_one: '{{count}} день',
  limitDays_few: '{{count}} дня',
  limitDays_many: '{{count}} дней',
  limitDays_other: '{{count}} дней',
  lateNightsNone: 'нет',
  busiest: 'Больше всех экранного времени',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'Что вы увидите',
  guestPreviewHint: 'Пример — реальные цифры появятся после подключения устройства',
  guestTitle: 'Увидеть, куда ушла неделя',
  guestDescription:
    'Войдите, чтобы сравнить сегодня с обычным днём, поставить детей рядом друг с другом и получать отчёт каждое воскресенье.',
  guestBenefitTrendTitle: 'Сегодня — против обычного',
  guestBenefitTrendBody:
    'Одна цифра сама по себе ничего не говорит. Сегодня всегда рисуется рядом со средним днём вашей семьи.',
  guestBenefitChildTitle: 'Каждый ребёнок — рядом',
  guestBenefitChildBody:
    'Доля дня каждого ребёнка, в его собственном цвете, по всем устройствам, которыми он пользуется.',
  guestBenefitWeeklyTitle: 'Отчёт каждое воскресенье',
  guestBenefitWeeklyBody:
    'Что изменилось, какие приложения выросли и поздние вечера — хранится год.',
  guestSignInButton: 'Войти',
  guestCreateAccount: 'Создать аккаунт родителя',
} as const;
