export const pin = {
  title: 'PIN родителя',
  subtitleSet: 'Нажмите, чтобы изменить PIN-код (6 цифр)',
  subtitleNotSet:
    'Создайте PIN-код из 6 цифр, чтобы защитить настройку на устройствах детей',
  statusSet: 'Установлен',
  statusNotSet: 'Не установлен',
  unlockChildPinTitle: 'Разблокировать PIN на {{deviceName}}',
  unlockChildPinSubtitle:
    'Сбросить неверные попытки ввода PIN на этом устройстве ребёнка',
  statusLocked: 'Заблокирован',
  toastPinUnlocked: 'PIN разблокирован на {{deviceName}}.',
  toastPinUnlockFailed: 'Не удалось разблокировать PIN ребёнка. Повторите попытку.',
  toastPinSaved:
    'PIN родителя сохранён. Используйте его на устройствах детей перед изменением Заблокированных приложений.',
  createParentPin: 'Создать PIN родителя',
  changeParentPin: 'Изменить PIN родителя',
  parentPinSetupSubtitle:
    'PIN-код из 6 цифр защищает настройку Заблокированных приложений на устройствах детей.',
  parentPinSetupHelper:
    'Устройства детей будут запрашивать этот PIN перед изменением списка заблокированных приложений.',
  parentPinMismatch: 'Новые PIN-коды не совпадают.',
  unableToSaveParentPin: 'Не удалось сохранить PIN родителя. Повторите попытку.',
  onlyOwnerCanManageChildPin:
    'Только владелец семьи может создать или изменить PIN родителя, используемый на устройствах детей.',
  parentPinRequired: 'Требуется PIN родителя',
  enterParentPinToContinue: 'Введите PIN родителя (6 цифр), чтобы продолжить.',
  parentPinLockoutMessage:
    'Слишком много неверных попыток. Попросите родителя разблокировать PIN в Настройках родителя.',
  parentPinHelperText:
    'Только родитель может изменить заблокированные приложения или выйти из аккаунта — для этого и нужен PIN. Если вы его забыли, родитель может войти в KidGate на любом устройстве и сбросить его в Настройках родителя.',
  forgotPin: 'Забыли PIN?',
  resetPinNotice:
    'Вы сбрасываете PIN как владелец аккаунта. С этого момента устройства детей будут запрашивать новый PIN.',
  unableToVerifyParentPin: 'PIN родителя неверен. Повторите попытку.',
  parentPinGateSubtitle: 'Введите PIN родителя (6 цифр), чтобы изменить настройки.',
  parentPinMustBeSixDigits: 'PIN родителя должен состоять ровно из 6 цифр.',
  pinSixDigits: 'PIN (6 цифр)',
  attemptsRemaining: 'Осталось {{count}} попыток.',
  attemptsRemaining_one: 'Осталась {{count}} попытка.',
  attemptsRemaining_few: 'Осталось {{count}} попытки.',
  currentPin: 'Текущий PIN',
  newPin: 'Новый PIN',
  pin: 'PIN',
  confirmPin: 'Подтвердите PIN',
  updatePin: 'Обновить PIN',
  savePin: 'Сохранить PIN',
  pinLockedTitle: 'PIN заблокирован',
  pinLockedBody:
    'Слишком много неверных попыток. Попросите родителя разблокировать PIN в Настройках родителя.',
  parentAccessRequiredTitle: 'Требуется доступ родителя',
  parentAccessRequiredBody:
    'Введите свой PIN, чтобы переименовать это устройство, выбрать Заблокированные приложения или выйти из аккаунта.',
  unlockWithParentPinButton: 'Разблокировать с помощью PIN родителя',
  whyPinTitle: 'Зачем нужен PIN?',
  whyPinBody:
    'Только родитель должен менять Заблокированные приложения или выходить с этого устройства из KidGate. Цвета темы не требуют PIN.',
  pinLockedToast:
    'PIN заблокирован после слишком большого числа неверных попыток. Попросите родителя разблокировать его в Настройках родителя.',
  pinNotConfiguredToast:
    'Сначала создайте PIN-код из 6 цифр в Настройках родителя на устройстве родителя.',
  enterSixDigitParentPin: 'Введите PIN родителя (6 цифр).',
  askParentCreatePin:
    'Попросите родителя сначала создать PIN родителя в Настройках родителя.',
  incorrectPinAttemptsLeft: 'Неверный PIN. Осталось {{count}} попыток.',
  incorrectPinAttemptsLeft_one: 'Неверный PIN. Осталась {{count}} попытка.',
  incorrectPinAttemptsLeft_few: 'Неверный PIN. Осталось {{count}} попытки.',
  enterCurrentParentPin: 'Введите текущий PIN родителя.',
  currentParentPinIncorrect: 'Текущий PIN родителя неверен.',
} as const;
