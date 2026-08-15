export const protection = {
  permissionOffOnChildDevice: 'Это разрешение отключено на устройстве ребёнка.',
  permissionNotSetUpYet: 'Это разрешение ещё не настроено.',
  permissionRestrictedByIos: 'Это разрешение ограничено настройками iOS.',
  permissionStatusUnknown: 'KidGate не смог определить состояние этого разрешения.',
  kidGateOffline: 'KidGate не в сети',
  childAppMayBeOffline:
    'Приложение на устройстве ребёнка может быть закрыто, удалено или не в сети.',
  statusNotUpdatedYet: 'Статус ещё не обновлён',
  openKidGateOnChildPhone: 'Откройте KidGate один раз на устройстве ребёнка.',
  screenTimePermission: 'Разрешение «Экранное время»',
  screenTimeAccessOff:
    'Доступ к Экранному времени отключён, поэтому блокировка приложений и лимиты могут перестать работать.',
  screenTimeSetupIncomplete:
    'Настройка Экранного времени на устройстве ребёнка не завершена.',
  usageAccessPermission: 'Доступ к данным об использовании',
  usageAccessOff:
    'Доступ к данным об использовании отключён, поэтому KidGate не может отслеживать экранное время и применять лимиты.',
  usageAccessSetupIncomplete:
    'Включите доступ к данным об использовании для KidGate в настройках Android.',
  overlayPermission: 'Поверх других приложений',
  batteryOptimizationPermission: 'Батарея без ограничений',
  batteryOptimizationOff:
    'Разрешите работу батареи без ограничений, чтобы KidGate мог поддерживать защиту.',
  exactAlarmPermission: 'Будильники и напоминания',
  exactAlarmOff:
    'Разрешите Будильники и напоминания, чтобы Заблокированные часы начинались вовремя.',
  accessibilityPermission: 'Специальные возможности (блокировка)',
  accessibilityOff:
    'Включите Специальные возможности для KidGate, чтобы блокировка оставалась поверх других приложений.',
  overlayOffForLock:
    'Включите показ поверх других приложений, чтобы экран блокировки мог закрывать другие приложения.',
  lockNotReadyTitle: 'Блокировка не готова',
  lockNotReadyBody:
    'KidGate не сможет удерживать это устройство Android заблокированным, пока не включены показ поверх других приложений и Специальные возможности. Откройте KidGate на устройстве ребёнка и выполните следующее:',
  lockNotReadyBodyIos:
    'KidGate не сможет заблокировать этот iPhone, пока на устройстве ребёнка не будет разрешён доступ к «Экранному времени». Откройте KidGate на этом устройстве и выполните следующее:',
  locationPermission: 'Разрешение на геолокацию',
  notificationsPermission: 'Разрешение на уведомления',
  backgroundUpdates: 'Фоновое обновление',
  backgroundUpdatesRestricted: 'Фоновое обновление на этом устройстве ограничено.',
  turnOnBackgroundUpdatesInSettings:
    'Включите его в настройках устройства, чтобы KidGate оставался синхронизированным.',
  inactive: 'Неактивно',
  openKidGateToSyncProtections:
    'Откройте KidGate на этом устройстве, чтобы защита снова синхронизировалась.',
  needsAttention: 'Требуется внимание',
  protectionsNeedSetupAndroid:
    'Некоторые функции защиты нужно настроить на устройстве ребёнка.',
  protectionsNeedSetupIos:
    'Некоторые функции защиты нужно настроить на устройстве ребёнка.',
  protected: 'Защищено',
  protectionsLookHealthy: 'Защита KidGate работает исправно.',
  healthBadgeProtected: 'Зелёный — защищено',
  healthBadgeWarning: 'Жёлтый — требуется настройка',
  healthBadgeInactive: 'Красный — устройство ребёнка не в сети',
  iosFeatureSupportEvaluating: 'Поддержка этой функции в iOS сейчас оценивается.',
  iosUpgradeRequiredNote:
    'Для этого нужна iOS 16 или новее. Обновите устройство ребёнка в «Настройки › Основные › Обновление ПО». Если обновление не предлагается, этот iPad или iPhone слишком старый и Apple его больше не поддерживает.',
  iosUpgradeActionLabel: 'Нужна iOS 16',
  lockUnlockNote:
    'Блокирует устройство через Экранное время после того, как ребёнок разрешит доступ.',
  scheduleNote:
    'До 3 интервалов часов блокировки блокируют приложения через Экранное время.',
  individualAppBlockingNote:
    'Ребёнок выбирает приложения после ввода 6-значного родительского PIN-кода.',
  tamperAlertsNote:
    'Сообщает об изменениях разрешений и о том, что приложение на устройстве ребёнка давно не обновлялось.',
  appReviewRemindersNote:
    'iOS не сообщает об установке приложений — периодически проверяйте приложения вместе с устройством ребёнка.',
} as const;
