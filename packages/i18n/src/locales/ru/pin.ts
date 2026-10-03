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
  enterParentPinToContinue: 'Введи PIN родителя (6 цифр), чтобы продолжить.',
  parentPinLockoutMessage:
    'Слишком много неверных попыток. Попроси родителя, который настроил KidGate, разблокировать PIN на своём телефоне в разделе «Настройки → Безопасность».',
  parentPinHelperText:
    'Только родитель может изменить заблокированные приложения или выйти из аккаунта — для этого и нужен PIN. Если PIN забыт, родитель, который настроил KidGate, может сбросить его на своём телефоне в разделе «Настройки → Безопасность».',
  forgotPin: 'Забыли PIN?',
  resetPinNotice:
    'Вы сбрасываете PIN как владелец аккаунта. С этого момента устройства детей будут запрашивать новый PIN.',
  unableToVerifyParentPin: 'PIN родителя неверен. Попробуй ещё раз.',
  unableToCheckParentPin:
    'Не удалось проверить PIN родителя. Попробуй ещё раз чуть позже.',
  parentPinGateSubtitle: 'Введи PIN родителя (6 цифр), чтобы изменить настройки.',
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
    'Слишком много неверных попыток. Попроси родителя, который настроил KidGate, разблокировать PIN на своём телефоне в разделе «Настройки → Безопасность».',
  parentAccessRequiredTitle: 'Требуется доступ родителя',
  parentAccessRequiredBody:
    'Введи PIN родителя, чтобы переименовать это устройство, выбрать Заблокированные приложения или выйти из аккаунта.',
  unlockWithParentPinButton: 'Разблокировать с помощью PIN родителя',
  whyPinTitle: 'Зачем нужен PIN?',
  whyPinBody:
    'Только родитель должен менять Заблокированные приложения или выходить с этого устройства из KidGate. Цвета темы не требуют PIN.',
  pinLockedToast:
    'PIN заблокирован после слишком большого числа неверных попыток. Попроси родителя, который настроил KidGate, разблокировать его на своём телефоне в разделе «Настройки → Безопасность».',
  pinNotConfiguredToast:
    'PIN родителя ещё не создан. Его создаёт родитель, который настроил KidGate, на своём телефоне в разделе «Настройки → Безопасность».',
  pairedNoPin:
    'PIN родителя ещё не создан. Устройства детей запрашивают его перед изменением Заблокированных приложений или выходом устройства из KidGate.',
  enterSixDigitParentPin: 'Введи PIN родителя (6 цифр).',
  askParentCreatePin:
    'Попроси родителя, который настроил KidGate, создать PIN родителя на своём телефоне в разделе «Настройки → Безопасность».',
  incorrectPinAttemptsLeft: 'Неверный PIN. Осталось {{count}} попыток.',
  incorrectPinAttemptsLeft_one: 'Неверный PIN. Осталась {{count}} попытка.',
  incorrectPinAttemptsLeft_few: 'Неверный PIN. Осталось {{count}} попытки.',
  enterCurrentParentPin: 'Введите текущий PIN родителя.',
  currentParentPinIncorrect:
    'Текущий PIN родителя неверен. Проверьте его и повторите попытку или нажмите «Забыли PIN?», чтобы сбросить его.',
} as const;
