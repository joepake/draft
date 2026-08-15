export const activities = {
  title: 'События',
  subtitleAllDevices: 'Последние события на всех устройствах',
  subtitleTimelineForDevice: 'Хронология для {{deviceName}}',
  fallbackDeviceName: 'устройство',
  liveBadge: 'В реальном времени',
  errorTitle: 'Не удалось загрузить активность',
  tryAgain: 'Повторить',
  emptyTitleAll: 'Пока нет активности',
  emptyTitleDevice: 'Нет активности для этого устройства',
  emptyDescriptionAll:
    'События блокировки, разблокировки и SOS с устройств ребёнка будут отображаться здесь.',
  emptyDescriptionDevice:
    'Выберите другое устройство или дождитесь событий блокировки, разблокировки и SOS с этого устройства.',
  guestEmptyTitle: 'Ваша лента активности',
  guestEmptyDescription:
    'После подключения устройства ребёнка события блокировки, разблокировки, SOS и приложений будут отображаться здесь в режиме реального времени.',
  guestSignInButton: 'Войти',
  guestCreateAccount: 'Создать аккаунт родителя',
  guestSubtitle: 'Войдите, чтобы отслеживать активность устройств вашего ребёнка',
  guestPreviewHeading: 'Что вы увидите',
  guestPreviewLock: 'Устройство заблокировано',
  guestPreviewSos: 'Сигнал SOS',
  guestPreviewScreenTime: 'Обновление экранного времени',
  guestPreviewHint: 'Пример — реальные события появятся после подключения устройства',
  activityTypeLocked: 'Заблокировано',
  activityTypeUnlocked: 'Разблокировано',
  activityTypeAppOpened: 'Приложение открыто',
  activityTypeAppBlocked: 'Приложение заблокировано',
  activityTypeAppInstalled: 'Приложение установлено',
  activityTypeAppRemoved: 'Приложение удалено',
  activityTypePlaceEnter: 'Вход в место',
  activityTypePlaceExit: 'Выход из места',
  activityTypeTamper: 'Защита',
  activityTypeScreenTime: 'Экранное время',
  activityTypeEmergency: 'Экстренная ситуация',
  activityTypeUnknown: 'Активность',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Заблокированное приложение было открыто, и KidGate закрыл его.',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: 'На устройстве ребёнка было установлено новое приложение.',
  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'Приложение было удалено с устройства ребёнка.',
  placeEnterTitle: 'Вход в {{placeName}}',
  placeEnterBody: 'Устройство ребёнка вошло в сохраненное место.',
  placeExitTitle: 'Выход из {{placeName}}',
  placeExitBody: 'Устройство ребёнка покинуло сохраненное место.',
  tamperTitle: 'Разрешение защиты отключено',
  tamperFallbackTitle: 'Разрешение защиты отключено',
  tamperFallbackBody: 'На устройстве ребёнка было отключено одно из разрешений защиты.',
  tamperOverlayTitle: 'Отключено отображение поверх других приложений',
  tamperOverlayBody:
    'Экран блокировки может перестать отображаться поверх других приложений, пока это разрешение не будет снова включено.',
  tamperAccessibilityTitle: 'Специальные возможности отключены',
  tamperAccessibilityBody:
    'Блокировка приложений и принудительная блокировка могут работать некорректно, пока специальные возможности снова не будут включены.',
  tamperUsageAccessTitle: 'Доступ к данным об использовании приложений отключён',
  tamperUsageAccessBody:
    'Лимиты приложений и Заблокированные часы могут перестать работать, пока KidGate снова не сможет считывать использование приложений на устройстве ребёнка.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'Доступ к экранному времени отключён',
  tamperScreenTimeIosBody:
    'Лимиты приложений и Заблокированные часы могут перестать работать, пока на устройстве ребёнка снова не будет разрешён доступ к экранному времени.',
  tamperUsageAccessAndroidTitle: 'Доступ к данным об использовании отключён',
  tamperUsageAccessAndroidBody:
    'Лимиты приложений и Заблокированные часы могут перестать работать, пока для KidGate снова не будет включён доступ к данным об использовании.',
  tamperBatteryTitle: 'Неограниченное использование батареи отключено',
  tamperBatteryBody:
    'Система может приостанавливать работу KidGate, пока использование батареи не будет установлено как «Без ограничений».',
  tamperExactAlarmTitle: 'Будильники и напоминания отключены',
  tamperExactAlarmBody:
    'Заблокированные часы могут начинаться или заканчиваться с опозданием, пока Будильники и напоминания не будут разрешены снова.',
  tamperNotificationsTitle: 'Уведомления отключены',
  tamperNotificationsBody:
    'Удаленные команды и уведомления для родителей могут не поступать на это устройство.',
  tamperLocationTitle: 'Геолокация отключена',
  tamperLocationBody:
    'Родители не будут получать обновления местоположения, пока доступ к геолокации не будет восстановлен.',
  tamperCameraTitle: 'Камера отключена',
  tamperCameraBody:
    'Фотографии SOS и Check-In могут не отправляться, пока доступ к камере не будет восстановлен.',
  tamperBackgroundRefreshTitle: 'Фоновое обновление приложений отключено',
  tamperBackgroundRefreshBody:
    'KidGate может обновляться реже в фоновом режиме, пока фоновое обновление приложений снова не будет включено.',
  tamperDeviceClockTitle: 'Дата или время были изменены',
  tamperDeviceClockBody:
    'Часы на этом устройстве больше не соответствуют правильному времени. Экранное время и периоды блокировки по-прежнему используют правильное время.',
  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: 'Отображение поверх других приложений было отключено.',
  tamperAccessibility: 'Служба специальных возможностей была отключена.',
  tamperUsageAccess: 'Доступ к статистике использования был отключен.',
  tamperBattery: 'Неограниченное использование батареи было отключено.',
  tamperExactAlarm: 'Разрешение «Будильники и напоминания» отключено.',
  tamperNotifications: 'Разрешение на уведомления было отключено.',
  tamperLocation: 'Разрешение на геолокацию было отключено.',
  tamperCamera: 'Разрешение на использование камеры было отключено.',
  tamperBackgroundRefresh: 'Фоновое обновление приложений было отключено.',
  filterAllDevices: 'Все устройства',
  dateToday: 'Сегодня',
  dateYesterday: 'Вчера',
  filterByDevice: 'Фильтр: {{label}}',
  openFullSosHistory: 'Открыть полную историю SOS',
  unknownDevice: 'Неизвестное устройство',
  basicActivityNote:
    'События блокировки, разблокировки и устройства сохраняются в разделе «Активность».',
  tamperUninstallProtectionTitle: 'Защита от удаления выключена',
  tamperUninstallProtectionBody: 'Теперь KidGate можно удалить с этого телефона.',
} as const;
