export const appLock = {
  toggleLabel: 'Блокировка приложения',
  toggleHint: 'Требовать PIN при открытии приложения для родителей',
  biometricToggleLabel: 'Разблокировать с помощью {{biometryLabel}}',
  biometricToggleHint: 'Используйте биометрию вместо ввода PIN',
  fallbackBiometryLabel: 'Биометрия',
  changePinTitle: 'Изменить PIN блокировки приложения',
  changePinSubtitle: 'Обновите PIN, используемый на этом устройстве',
  turnOffAlertTitle: 'Отключить блокировку приложения?',
  turnOffAlertMessage:
    'PIN и биометрическая разблокировка этого приложения будут удалены с этого устройства.',
  turnOffButton: 'Отключить',
  toastTurnedOff: 'Блокировка приложения отключена на этом устройстве.',
  toastTurnOffFailed: 'Не удалось отключить блокировку приложения. Повторите попытку.',
  toastBiometricEnabled: '{{biometryLabel}} включена для разблокировки приложения.',
  toastBiometricEnableFailed:
    'Не удалось включить биометрическую разблокировку. Повторите попытку.',
  toastBiometricDisableFailed:
    'Не удалось отключить биометрическую разблокировку. Повторите попытку.',
  toastEnabled: 'Блокировка приложения включена на этом устройстве.',
  createAppLockPin: 'Создать PIN блокировки приложения',
  changeAppLockPin: 'Изменить PIN блокировки приложения',
  appLockSetupSubtitle:
    'Выберите PIN-код из 6 цифр, чтобы разблокировать приложение для родителей на этом устройстве.',
  appLockSetupHelper:
    'Этот PIN хранится только на этом устройстве и отличается от PIN родителя, используемого на устройствах детей.',
  appLockPinMismatch: 'Введённые PIN-коды не совпадают.',
  unableToSaveAppLockPin:
    'Не удалось сохранить PIN блокировки приложения. Повторите попытку.',
  kidGateLocked: 'KidGate заблокирован',
  signInRequired: 'Требуется вход',
  enterAppLockPin:
    'Введите PIN блокировки приложения, чтобы открыть приложение для родителей.',
  appLockLockoutMessage:
    'Слишком много неверных попыток. Вы будете выведены из аккаунта, чтобы войти снова.',
  appLockPinLabel: 'PIN блокировки приложения (6 цифр)',
  attemptsRemainingShort: 'Осталось {{count}} попыток',
  attemptsRemainingShort_one: 'Осталась {{count}} попытка',
  attemptsRemainingShort_few: 'Осталось {{count}} попытки',
  unlockWithBiometric: 'Разблокировать с помощью {{biometryLabel}}',
  signInAgain: 'Войти снова',
  tooManyPinAttemptsSignIn:
    'Слишком много неверных попыток. Пожалуйста, войдите снова.',
  unableToVerifyPin: 'Этот PIN неверен. Повторите попытку.',
  appLockPinMustBeSixDigits:
    'PIN блокировки приложения должен состоять ровно из 6 цифр.',
  enterCurrentAppLockPin: 'Введите текущий PIN блокировки приложения.',
  currentAppLockPinIncorrect: 'Текущий PIN блокировки приложения неверен.',
  signInAgainToContinue:
    'Слишком много неверных попыток. Пожалуйста, войдите снова, чтобы продолжить.',
  incorrectPinAttemptsLeft: 'Неверный PIN. Осталось {{count}} попыток.',
  incorrectPinAttemptsLeft_one: 'Неверный PIN. Осталась {{count}} попытка.',
  incorrectPinAttemptsLeft_few: 'Неверный PIN. Осталось {{count}} попытки.',
  biometricsUnavailable: 'Биометрическая разблокировка недоступна на этом устройстве.',
  unlockKidGateTitle: 'Разблокировать KidGate',
  biometricUnlockSubtitle:
    'Подтвердите личность, чтобы открыть приложение для родителей',
  faceId: 'Face ID',
  touchId: 'Touch ID',
  fingerprint: 'Отпечаток пальца',
} as const;
