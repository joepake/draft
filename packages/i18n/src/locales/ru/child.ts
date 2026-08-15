export const child = {
  pageTitle: 'Статус',
  statusPaused: 'Заблокировано',
  statusActive: 'Активно',
  readyTitle: 'Всё готово',
  readyBody:
    'Если нужно больше экранного времени, отправь запрос родителям ниже. В экстренной ситуации используй кнопку SOS.',
  setupCollapsedTitle: 'Заверши настройку вместе с родителем',
  setupCollapsedCount: 'Осталось {{count}}',
  oneMoment: 'Минутку…',
  paused: 'Заблокировано',
  blockedHours: 'Заблокированные часы',
  limitReached: 'Лимит исчерпан',
  active: 'Активно',
  parentPausedThisDevice: 'Родители пока заблокировали это устройство.',
  blockedHoursOnPaused: 'Сейчас действуют часы блокировки. Хорошее время для перерыва.',
  outOfScreenTimeAskParent:
    'Экранное время на сегодня закончилось. Можешь запросить ещё ниже.',
  screenTimeToday: 'Экранное время сегодня',
  usedOverLimitMinutes: '{{used}} / {{limit}}',
  usedMinutesOnly: '{{used}}',
  outOfScreenTimeToday:
    'Экранное время на сегодня закончилось. Можешь попросить у родителей ещё.',
  devicePaused: 'Устройство заблокировано',
  devicePausedByParent: '{{deviceName}} сейчас заблокировано.',
  phonePausedByParent: 'Родители пока заблокировали это устройство.',
  pausedAskParentOrSos:
    'Попроси родителей разблокировать, когда понадобится. В экстренной ситуации ты всё равно можешь отправить SOS.',
  blockedHoursLockTitle: 'Заблокированные часы',
  blockedHoursLockBody: 'Сейчас действуют часы блокировки. Хорошее время для перерыва.',
  blockedHoursLockHint:
    'Попроси родителей, если нужно больше времени. В экстренной ситуации ты всё равно можешь отправить SOS.',
  parentPausedAccess: 'Родители пока заблокировали это устройство.',
  parentRestoredAccess:
    'Родители разблокировали устройство. Можешь пользоваться дальше.',
  toastDailyLimitIncreased:
    'Родители добавили ещё {{minutes}} минут экранного времени.',
  toastDailyLimitIncreased_one:
    'Родители добавили ещё {{minutes}} минуту экранного времени.',
  toastDailyLimitIncreased_few:
    'Родители добавили ещё {{minutes}} минуты экранного времени.',
  errorDeviceNotRegistered: 'Это устройство не зарегистрировано.',
  errorScreenTimeRequired: 'Требуется разрешение «Экранное время».',
  minUsed: 'Использовано {{used}}',
  setupContinueButton: 'Продолжить настройку',
  setupWizardTitle: 'Настройка защиты',
  setupWizardProgress: 'Готово {{done}}/{{total}}',
  setupWizardRequired: 'Обязательно',
  setupWizardOptional: 'Необязательно',
  setupWizardSkip: 'Позже',
  setupWizardAllDoneTitle: 'Готово!',
  setupWizardAllDoneSubtitle: 'Это устройство теперь защищено.',
} as const;
