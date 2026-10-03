export const checkIn = {
  noPhotoBadge: 'Без фото',
  historyTitle: 'История Check-In',
  historyHint:
    'Нажмите на фото, чтобы увеличить. Выше можно в любой момент запросить новый Check-In.',
  historyEmpty: 'Check-In пока не было.',
  screenTitle: 'Check-In',
  statusSafe: 'В безопасности',
  statusNoResponse: 'Нет ответа',
  statusAskedForHelp: 'Просьба о помощи (SOS)',
  statusWaiting: 'Ожидание',
  metaWaitingForLocationAndPhoto: 'Ожидаем геопозицию и фото',
  metaWaitingForLocation: 'Ожидание местоположения',
  metaNoLocation: 'Без геопозиции',
  viewPhotoAccessibility: 'Посмотреть фото Check-In',
  responseMessage: 'Я в порядке.',
  toastSuccess: 'Спасибо. Твой ответ отправлен родителям.',
  toastFailed: 'Не удалось отправить Check-In. Попробуй ещё раз.',
  quickCheckInBadge: 'Check-In',
  areYouOkay: 'Ты в порядке?',
  checkInWithPhotoBody:
    'Родители хотят убедиться, что ты в порядке. KidGate отправит твою геопозицию и, если возможно, фото.',
  checkInLocationOnlyBody:
    'Родители хотят убедиться, что ты в порядке. KidGate отправит твою геопозицию, если возможно.',
  yesImOkay: 'Я в порядке',
  yesImOkaySending: 'Отправка…',
  iNeedHelp: 'Мне нужна помощь',
  checkInRequested: 'Check-In запрошен',
  checkInRequestedDescription:
    'Мы попросили {{deviceName}} подтвердить, что всё хорошо, с геопозицией и фото.',
  checkInRequestedDescriptionLocation:
    'Мы попросили {{deviceName}} подтвердить, что всё хорошо, с геопозицией.',
  checkInConfirmed: 'Check-In подтверждён',
  checkInConfirmedDescription: '{{deviceName}} подтвердил, что всё в порядке.',
  childDeviceFallback: 'Устройство ребёнка',
  requestCheckIn: 'Запросить Check-In',
  requestCheckInNote:
    'Запрашивает у устройства ребёнка его местоположение, а у телефона или планшета — ещё и фото с фронтальной камеры.',
  requestCheckInNoteLocationOnly:
    'Запрашивает у устройства ребёнка его местоположение.',
  needHelpOpenSosAccessibility: 'Мне нужна помощь — открыть SOS',
  showAllDevices: 'Показать все устройства ({{count}})',
  showFewerDevices: 'Показать меньше устройств',
  parentSafePopupTitle: 'Ваш ребёнок в безопасности',
  childSafePopupTitle: 'Ответ отправлен',
  childSafePopupBody: 'Теперь родители видят, что ты в порядке.',
  confirmedKicker: 'Check-In',
} as const;
