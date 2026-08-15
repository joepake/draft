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

  narrativeTitle: 'Коротко',
  finePrint:
    'Данные охватывают период с {{from}} по {{to}} по всем устройствам семьи. Экранное время — это то, что сообщили устройства; минуты, которые они не смогли измерить, не входят ни в одну сумму.',

  generate: 'Составить отчёт за эту неделю',
  generating: 'Составляем…',
  share: 'Поделиться',
  copySummary: 'Скопировать сводку',
  copied: 'Сводка скопирована.',
  shareFailed: 'Не удалось открыть меню «Поделиться».',

  emptyTitle: 'Отчёта пока нет',
  emptyBody:
    'Отчёт приходит каждое воскресенье вечером. Можно составить отчёт за эту неделю прямо сейчас — он охватывает последние семь дней.',
  noUsage:
    'За последние две недели экранное время не записывалось, поэтому сообщать пока не о чем. Выключенное устройство не сообщает ничего, и это не то же самое, что спокойная неделя.',
  rateLimited: 'Слишком много попыток. Подождите минуту.',
  failed: 'Не удалось составить отчёт. Попробуйте чуть позже.',

  historyTitle: 'Прошлые недели',
  historyEmpty: 'Отчёты, которые вы получите с этого момента, хранятся здесь год.',
} as const;
