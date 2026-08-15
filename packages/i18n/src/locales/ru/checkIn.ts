export const checkIn = {
  noPhotoBadge: 'Фото не приложено',
  historyTitle: 'История отметок',
  historyHint:
    'Нажмите на фото, чтобы увеличить. Выше можно в любой момент запросить новую отметку.',
  historyEmpty: 'Отметок пока нет.',
  screenTitle: 'Отметка',
  statusSafe: 'В безопасности',
  statusNoResponse: 'Нет ответа',
  statusWaiting: 'Ожидание',
  metaWaitingForLocationAndPhoto: 'Ожидаем геопозицию и фото',
  metaNoLocation: 'Без геопозиции',
  viewPhotoAccessibility: 'Посмотреть фото отметки',
  responseMessage: 'Я в порядке.',
  toastSuccess: 'Спасибо. Родители знают, что ты в порядке.',
  toastFailed: 'Не удалось отправить отметку. Попробуй ещё раз.',
  quickCheckInBadge: 'Отметка',
  areYouOkay: 'Ты в порядке?',
  checkInWithPhotoBody:
    'Родители хотят убедиться, что ты в порядке. KidGate отправит твою геопозицию и, если возможно, фото.',
  checkInLocationOnlyBody:
    'Родители хотят убедиться, что ты в порядке. KidGate отправит твою геопозицию, если возможно.',
  yesImOkay: 'Я в порядке',
  yesImOkaySending: 'Отправка…',
  iNeedHelp: 'Мне нужна помощь',
  checkInRequested: 'Отметка запрошена',
  checkInRequestedDescription:
    'Мы попросили {{deviceName}} подтвердить, что всё хорошо, с геопозицией и фото.',
  checkInRequestedDescriptionLocation:
    'Мы попросили {{deviceName}} подтвердить, что всё хорошо, с геопозицией.',
  checkInConfirmed: 'Отметка подтверждена',
  checkInConfirmedDescription: '{{deviceName}} подтвердил, что всё в порядке.',
  childDeviceFallback: 'Устройство ребёнка',
  requestCheckIn: 'Запросить отметку',
  requestCheckInNote:
    'Запрашивает у устройства ребёнка геопозицию и фото с фронтальной камеры.',
  needHelpOpenSosAccessibility: 'Мне нужна помощь — открыть SOS',
  parentSafePopupTitle: 'Ваш ребёнок в безопасности',
  childSafePopupTitle: 'Родителям сообщили',
  childSafePopupBody: 'Родители получили сообщение — ты в порядке.',
  confirmedKicker: 'Отметка',
} as const;
