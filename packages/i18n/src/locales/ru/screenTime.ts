export const screenTime = {
  turnOnScreenTime: 'Включить Экранное время',
  finishScreenTimeSetup: 'Завершить настройку Экранного времени',
  screenTimeNeededForControls:
    'Для блокировки приложений, часов блокировки и запирания нужно Экранное время на этом устройстве.',
  screenTimeNeededForLimits:
    'Без Экранного времени блокировка, часы блокировки и лимиты приложений не работают.',
  screenTimeStepOpenKidGate: 'Откройте KidGate на этом устройстве ребёнка.',
  screenTimeStepAllowUsage:
    'На экране «Статус» выберите «Разрешить использование приложений и веб-сайтов».',
  screenTimeStepTapAllow: 'В появившемся окне выберите «Разрешить».',
  screenTimeStepReturnHereAuto: 'Вернитесь сюда — статус обновится автоматически.',
  screenTimeDeniedStepOpenSettings:
    'На устройстве ребёнка откройте Настройки → KidGate.',
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
    'Это позволит родителям блокировать приложения и настраивать часы блокировки на этом устройстве.',
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
  dailyLimitNote: 'Устанавливает дневной предел экранного времени.',
  dailyLimitMinutes: '{{limitMinutes}} мин',
} as const;
