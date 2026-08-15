/**
 * Собственное окно настольного агента (macOS и Windows).
 * Контекст по каждому ключу: см. en/macos.ts.
 */
export const macos = {
  headingNow: 'Сейчас',
  headingEnforce: 'Что может обеспечить этот Mac',
  headingEnforceHint:
    'Что настроили родители и насколько надёжно этот Mac может это удерживать.',
  headingRemovable: 'Насколько легко это убрать',

  parentAccessBody:
    'Введите PIN родителя, чтобы выбрать, какие приложения блокируются на этом Mac.',
  checking: 'Проверка…',

  enforcing: 'Защита работает',
  enforcingYes: 'Да',
  enforcingFailed: 'Нет — {{count}} проверок подряд не прошли',
  enforcingFailed_one: 'Нет — {{count}} проверка подряд не прошла',
  enforcingFailed_few: 'Нет — {{count}} проверки подряд не прошли',

  lockState: 'Устройство заблокировано',
  lockStateNo: 'Нет',
  lockStateNotChecked: 'Ещё не проверялось',
  lockStateParent: 'Да — заблокировано родителем',
  lockStateSchedule: 'Да — Заблокированные часы',
  lockStateDailyLimit: 'Да — Дневной лимит исчерпан',

  appBlocking: 'Блокировка приложений',
  appBlockingBestEffort:
    'По возможности — приложения закрываются после запуска, а не останавливаются до него',

  webFilterLabel: 'Веб-фильтр',
  webFilterUnavailable: 'Недоступно на этом Mac',
  notSupportedOnThisDevice: 'Не поддерживается на этом устройстве',

  scheduleLabel: 'Заблокированные часы',
  dailyLimitLabel: 'Дневной лимит',
  enforcedHere: 'Включено, обеспечивает KidGate',

  screenTimeLabel: 'Экранное время',
  screenTimeAgentMeasured:
    'Считает KidGate. Время, когда KidGate не запущен, не учитывается.',

  batteryLabel: 'Батарея',
  batteryReported: 'Сообщается семье',
  batteryNone: 'У этого Mac нет батареи',

  locationLabel: 'Геопозиция',
  locationOff: 'Выкл.',
  locationCoarse: 'Примерно — по Wi-Fi, без GPS',

  accountLabel: 'Учётная запись ребёнка',
  accountStandard: 'Обычная',
  accountAdmin: 'Администратор — эта учётная запись может полностью отключить KidGate',

  restartLabel: 'Перезапускается после закрытия',
  restartYes: 'Да',
  restartNo: 'Нет — настройка не завершена',

  forceQuitLabel: 'Сколько раз KidGate закрывали',

  startAtLoginSectionTitle: 'Автозапуск',
  startAtLoginSectionDescription:
    'KidGate измеряет экранное время и применяет правила, только пока запущен.',
  startAtLoginLabel: 'Запускать KidGate при входе',
  startAtLoginHintOn:
    'KidGate запускается вместе с устройством и открывается снова, если его закрыть.',
  startAtLoginHintOff:
    'Пока KidGate не откроют снова, ничего не измеряется и не блокируется.',
  startAtLoginUnavailable:
    'Это устройство не позволило KidGate добавить себя в автозапуск.',

  stillRunningTitle: 'KidGate всё ещё работает',
  stillRunningBodyMac: 'Откройте его снова через значок KidGate в строке меню.',
  stillRunningBodyWindows:
    'Откройте его снова через значок KidGate в области уведомлений.',

  updateAvailableTitle: 'Доступна более новая версия KidGate',
  updateAvailableBody: 'KidGate {{version}} готов к загрузке.',
  updateAction: 'Получить обновление',

  chooseApps: 'Выбрать приложения для блокировки',
  chooseAppsHint:
    'Выберите приложения, которые блокируются на этом Mac. Родитель может включать и выключать блокировку со своего телефона.',
  saveSelection: 'Сохранить',
  noAppsFound: 'В папке Applications не найдено ни одного приложения.',
};
