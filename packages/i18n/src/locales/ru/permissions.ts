export const permissions = {
  cameraPermissionRequired: 'Для этой функции требуется доступ к камере.',
  allowCameraTitle: 'Разрешить камеру',
  cameraPermissionMessage:
    'KidGate использует камеру, чтобы вы могли отправить быстрое фото с SOS и Check-In.',
  allow: 'Разрешить',
  notNow: 'Не сейчас',
  cameraTurnedOffTitle: 'Камера отключена для KidGate',
  cameraTurnedOffMessage:
    'Откройте Настройки и разрешите доступ к Камере, чтобы ваши Check-In и оповещёния SOS могли включать фото.',
  openSettings: 'Открыть настройки',
  notificationsLabel: 'Уведомления',
  notificationsAllowed: 'Уведомления для KidGate включены.',
  notificationsOpenSettings:
    'Откройте настройки устройства, чтобы разрешить уведомления для KidGate.',
  backgroundRefreshLabel: 'Обновление контента',
  backgroundRefreshHint: 'Позволяет KidGate продолжать работу в фоновом режиме.',
  backgroundRefreshLowPowerHint:
    'Включён режим энергосбережения — iOS отключает Обновление контента. Отключите режим энергосбережения, затем включите Обновление контента.',
  overlayLabel: 'Поверх других приложений',
  overlayHint:
    'Разрешите KidGate показывать экран блокировки поверх других приложений при действии лимитов.',
  batteryOptimizationLabel: 'Батарея без ограничений',
  batteryOptimizationHint: 'Не даёт Android останавливать KidGate в фоновом режиме.',
  exactAlarmLabel: 'Будильники и напоминания',
  exactAlarmHint:
    'Разрешите Будильники и напоминания, чтобы Заблокированные часы начинались и заканчивались вовремя.',
  accessibilityLabel: 'Помощник блокировки через Специальные возможности',
  accessibilityHint: 'Удерживает блокировку KidGate поверх других приложений.',
  oemSectionDescription:
    'Устройства {{brand}} часто приостанавливают фоновые приложения. Пожалуйста, выполните эти шаги, чтобы блокировка и Заблокированные часы продолжали работать.',
  oemAutostartLabel: 'Разрешить автозапуск',
  oemAutostartHintXiaomi:
    'В разделе «Автозапуск» включите KidGate, чтобы защита возобновлялась после перезагрузки.',
  oemAutostartHintSamsung:
    'В разделе «Батарея» → «Ограничения фоновой работы» → «Никогда не спящие приложения» добавьте KidGate. Если KidGate нет в списке, значит он уже разрешён и шаг выполнен.',
  oemAutostartHintOppo:
    'В разделе «Автозапуск приложений» / «Автозапуск» разрешите KidGate.',
  oemAutostartHintVivo:
    'В разделе «Автозапуск» / «Высокое энергопотребление в фоне» разрешите KidGate.',
  oemAutostartHintHuawei:
    'В разделе «Запуск приложений» / «Диспетчер запуска» установите для KidGate режим «Управлять вручную» и разрешите все параметры.',
  oemAutostartHintOther:
    'Разрешите KidGate запускаться автоматически в настройках безопасности или батареи вашего устройства.',
  markDone: 'Готово',
  overlayStepAllow: 'Включите «Поверх других приложений» для KidGate.',
  accessibilityStepOpenSettings:
    'Выберите Настройки ниже — откроется страница специальных возможностей KidGate.',
  accessibilityStepFindKidGate:
    'Если вместо этого откроется полный список, выберите KidGate в разделе Установленные / загруженные приложения.',
  accessibilityStepTurnOn:
    'Включите переключатель, затем выберите Разрешить в подтверждении Android.',
  accessibilityWarningNote:
    'Android предупреждает, что KidGate может отслеживать ваши действия. Именно так блокировка остаётся поверх других приложений — KidGate не читает пароли и личные сообщения.',
  uninstallProtectionWizardBody:
    'Не даёт удалить это приложение без PIN родителя. Android показывает собственный экран подтверждения.',
  notificationsWizardBody:
    'Разрешите уведомления, чтобы это устройство сразу получало одобрения времени и напоминания.',
  backgroundRefreshStepOpen: 'Откройте страницу KidGate в Настройках.',
  backgroundRefreshStepTurnOn: 'Включите «Обновление контента» для KidGate.',
  backgroundRefreshStepGeneral:
    'Если переключатель неактивен, откройте Настройки, затем Основные, затем Обновление контента и включите его.',
  batteryStepAllow: 'Выберите «Разрешить» в запросе Android.',
  batteryStepAppInfo:
    'Если запрос не появился, откройте Сведения о приложении, затем Батарея, и выберите «Без ограничений».',
  notificationsStepAllow: 'Выберите «Разрешить» в запросе.',
  exactAlarmStepTurnOn: 'Включите «Будильники и напоминания» для KidGate.',
  cameraStepTurnOn: 'Включите «Камеру» для KidGate.',
  uninstallProtectionStepConfirm:
    'Выберите «Активировать» на экране подтверждения Android.',
} as const;
