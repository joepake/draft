export const child = {
  pageTitle: 'Статус',
  statusPaused: 'Заблокировано',
  statusActive: 'Активно',
  readyTitle: 'Всё готово',
  readyBody:
    'Если нужно больше экранного времени, можешь отправить запрос родителям в разделе выше. В экстренной ситуации используй кнопку SOS.',
  setupCollapsedTitle: 'Заверши настройку вместе с родителем',
  setupCollapsedRequiredCount: '{{count}} обязательных шагов',
  setupCollapsedRequiredCount_one: '{{count}} обязательный шаг',
  setupCollapsedRequiredCount_few: '{{count}} обязательных шага',
  setupCollapsedOptionalCount: '{{count}} необязательных шагов',
  setupCollapsedOptionalCount_one: '{{count}} необязательный шаг',
  setupCollapsedOptionalCount_few: '{{count}} необязательных шага',
  oneMoment: 'Минутку…',
  paused: 'Заблокировано',
  blockedHours: 'Заблокированные часы',
  limitReached: 'Лимит исчерпан',
  active: 'Активно',
  parentPausedThisDevice: 'Родители пока заблокировали это устройство.',
  blockedHoursOnPaused:
    'Сейчас действуют Заблокированные часы. Хорошее время для перерыва.',
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
  blockedHoursLockBody:
    'Сейчас действуют Заблокированные часы. Хорошее время для перерыва.',
  blockedHoursLockHint:
    'Если устройство нужно тебе сейчас, попроси родителей изменить Заблокированные часы. В экстренной ситуации ты всё равно можешь отправить SOS.',
  blockedHoursLockBodyUntil:
    'Заблокированные часы действуют до {{time}}. Хорошее время для перерыва.',
  dailyLimitLockHint:
    'Если нужно больше времени, попроси родителей. В экстренной ситуации ты всё равно можешь отправить SOS.',
  appClosedTitle: 'Приложение закрыто',
  appClosedBody: 'KidGate закрыл его, потому что оно сейчас заблокировано.',
  parentPausedAccess: 'Родители пока заблокировали это устройство.',
  parentRestoredAccess:
    'Родители разблокировали устройство. Можешь пользоваться дальше.',
  toastDailyLimitIncreased:
    'Родители добавили ещё {{minutes}} минут экранного времени.',
  toastDailyLimitIncreased_one:
    'Родители добавили ещё {{minutes}} минуту экранного времени.',
  toastDailyLimitIncreased_few:
    'Родители добавили ещё {{minutes}} минуты экранного времени.',
  errorDeviceNotRegistered:
    'Это устройство ещё не готово. Попробуй ещё раз чуть позже или подключи его заново, если ошибка повторяется.',
  errorScreenTimeRequired:
    'Нужен доступ к Экранному времени. Разреши его для KidGate и попробуй ещё раз.',
  minUsed: 'Использовано {{used}}',
  setupContinueButton: 'Продолжить настройку',
  setupWizardTitle: 'Настройка защиты',
  setupWizardProgress: 'Готово {{done}}/{{total}}',
  setupWizardRequired: 'Обязательно',
  setupWizardOptional: 'Необязательно',
  setupWizardSkip: 'Позже',
  setupWizardWatchGuide: 'Как это сделать',
  setupGrantStuckHint:
    'Уже включено, но ничего не изменилось? Перезапусти телевизор и попробуй снова.',
  setupWizardAllDoneTitle: 'Всё готово',
  setupWizardAllDoneSubtitle: 'Это устройство теперь защищено.',
  setupWizardStepDone: 'Готово — эта уже включена.',
  setupWizardCoreDoneTitle: 'Основная защита включена',
  setupWizardCoreDoneBody:
    'Обязательные разрешения выданы, и это устройство защищено. Остальные шаги — необязательные дополнения, их можно выполнить сейчас или позже.',
  setupWizardCoreDoneContinue: 'Усилить сейчас',
  setupWizardCoreDoneLater: 'Завершить позже',
  setupWizardParentPinNote:
    'Нужен PIN родителя — родитель вводит его на следующем экране.',
} as const;
