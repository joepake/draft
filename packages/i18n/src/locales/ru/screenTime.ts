export const screenTime = {
  turnOnScreenTime: 'Включить Экранное время',
  finishScreenTimeSetup: 'Завершить настройку Экранного времени',
  screenTimeNeededForControls:
    'Заблокированные приложения, Заблокированные часы, Дневной лимит и блокировка требуют Экранного времени на этом устройстве.',
  screenTimeNeededForLimits:
    'Без Экранного времени нельзя применить блокировку, Заблокированные часы, Дневной лимит и Заблокированные приложения.',
  screenTimeStepOpenKidGate: 'Откройте KidGate на этом устройстве ребёнка.',
  screenTimeStepAllowUsage:
    'На экране «Статус» выберите «Разрешить использование приложений и веб-сайтов».',
  screenTimeStepTapAllow: 'В появившемся окне выберите «Разрешить».',
  screenTimeStepReturnHereAuto: 'Вернитесь сюда — статус обновится автоматически.',
  screenTimeDeniedStepOpenSettings: 'На устройстве ребёнка откройте Настройки.',
  screenTimeDeniedStepFindKidGate: 'Найдите KidGate в списке.',
  screenTimeDeniedStepTurnOnRestrictions: 'Включите Экранное время.',
  screenTimeDeniedStepOpenKidGateAgain: 'Снова откройте KidGate на устройстве ребёнка.',
  screenTimeDeniedStepReturnWhenReady:
    'Вернитесь сюда — эта карточка исчезнет после завершения настройки.',
  screenTimeSetupStep1:
    'Выберите ниже «Разрешить использование приложений и веб-сайтов».',
  screenTimeSetupStep2:
    'В диалоге использования приложений и веб-сайтов выберите «Разрешить».',
  screenTimeSetupStep3: 'Вернитесь сюда после закрытия диалога.',
  screenTimeDeniedStep1: 'Выберите ниже «Открыть настройки приложения».',
  screenTimeDeniedStep2: 'На странице {{appName}} включите Экранное время.',
  screenTimeDeniedStep3: 'Вернитесь в {{appName}} — эта карточка исчезнет.',
  screenTimeBannerTitleDenied: 'Включить Экранное время',
  screenTimeBannerTitleRequest: 'Разрешить использование приложений и веб-сайтов',
  screenTimeBannerBodyDenied:
    '{{appName}} требует включённого Экранного времени в Настройках.',
  screenTimeBannerBodyRequest:
    'Это позволит родителям блокировать приложения и настраивать Заблокированные часы на этом устройстве.',
  screenTimeAuthPasscode:
    'Чтобы KidGate мог использовать Экранное время, на этом устройстве нужен код-пароль. Задайте его в Настройках и повторите попытку.',
  screenTimeAuthConflict:
    'Экранным временем на этом устройстве уже управляет другое приложение. Удалите это приложение и повторите попытку.',
  screenTimeAuthRestricted:
    'Ограничение на этом устройстве не позволяет KidGate использовать Экранное время. Попросите того, кто управляет этим устройством, снять его.',
  usageAccessBannerTitle: 'Включить доступ к данным об использовании',
  usageAccessBannerBody:
    'KidGate нужен доступ к данным об использовании, чтобы учитывать экранное время и применять лимиты.',
  usageAccessStepOpenSettings: 'Выберите ниже «Открыть настройки».',
  usageAccessStepFindKidGate:
    'Найдите KidGate и включите доступ к данным об использовании.',
  usageAccessStepReturn: 'Вернитесь сюда — статус обновится автоматически.',
  noDailyLimitSet: 'Дневной лимит не задан',
  limitReachedStatus: '{{used}} / {{limit}} · Лимит исчерпан',
  minutesUsedStatus: 'Использовано {{used}} / {{limit}}',
  usageUpdatesHint:
    'Пока мониторинг Экранного времени активен, данные обновляются каждые несколько минут.',
  dailyLimitMinutes: '{{limitMinutes}} мин',
} as const;
