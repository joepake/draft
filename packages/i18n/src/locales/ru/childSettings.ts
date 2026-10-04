export const childSettings = {
  pageTitle: 'Настройки',
  statusUnlocked: 'Родительский доступ открыт',
  statusLocked: 'Нужен родительский PIN',
  preferencesSectionTitle: 'Предпочтения',
  darkModeLabel: 'Тёмная тема',
  darkModeHint: 'Комфортнее для глаз вечером',
  leaveFamilyAlertTitle: 'Покинуть эту семью?',
  leaveFamilyAlertMessage:
    'Это устройство будет отключено от семьи. Чтобы вернуться, снова выполните сопряжение по приглашению родителя.',
  leaveFamily: 'Покинуть семью',
  uninstallProtectionSectionTitle: 'Защита от удаления',
  uninstallProtectionSectionDescription:
    'Не даёт удалить KidGate с этого телефона. Android один раз запросит разрешение.',
  uninstallProtectionLabel: 'Запретить удаление',
  uninstallProtectionHintOn:
    'Включено. Если это выключить, родители получат оповещение.',
  uninstallProtectionHintOff: 'Выключено. KidGate можно удалить с этого телефона.',
  uninstallProtectionTurnedOff: 'Защита от удаления выключена.',
  uninstallProtectionFailed:
    'Не удалось изменить защиту от удаления. Повторите попытку.',
  deviceAdminExplanation:
    'Не даёт удалить KidGate без участия родителя. KidGate не использует других прав администратора устройства: он не может стереть данные с этого устройства, изменить блокировку экрана или отключить камеру.',
  deviceAdminDisableWarning:
    'Если ты это выключишь, KidGate можно будет удалить с этого устройства. Родители получат уведомление.',
  appPickerUnavailable:
    'Функция «Заблокированные приложения» недоступна на этом устройстве.',
  messageSafetySectionTitle: 'Оповещения о сообщениях',
  messageSafetySectionDescription:
    'Разрешение выдаётся здесь. Оповещения о сообщениях включаются и выключаются в родительском приложении или в веб-панели.',
} as const;
