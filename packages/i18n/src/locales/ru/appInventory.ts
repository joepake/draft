export const appInventory = {
  pendingTitle: 'Ожидает вашего подтверждения',
  pendingBadge: 'Заблокировано, пока вы не разрешите',
  approvedBadge: 'Разрешено вами',
  allowApp: 'Разрешить',
  subtitle: 'Всё, что KidGate нашёл установленным, а не только то, что изменилось.',
  summaryFlagged: '{{flagged}} из {{total}} приложений стоит просмотреть',
  summaryClear: 'Ничего подозрительного среди {{total}} приложений',
  flaggedTitle: 'Стоит просмотреть',
  otherTitle: 'Всё остальное',
  scannedLabel: 'Последняя проверка',
  staleNote: 'Этот список устарел. Он обновится, когда устройство выйдет на связь.',
  truncatedNote: 'Показано {{shown}} из {{total}} найденных приложений.',
  newBadge: 'Новое',
  ageBadge: '{{age}}+',
  browserExtension: 'Расширение Chrome',
  subtitleExtension:
    'Все расширения, которые KidGate нашёл в браузере, а не только изменения.',
  summaryFlaggedExtension:
    '{{flagged}} из {{total}} расширений Chrome стоит посмотреть',
  summaryClearExtension: 'Ничего тревожного среди {{total}} расширений Chrome',
  incompleteNoteExtension:
    'Здесь только расширения браузера — приложения, установленные на компьютере, браузеру не видны.',
  blockHintExtension:
    'Чтобы удалить расширение, откройте страницу расширений браузера на этом устройстве.',
  emptyTitleExtension: 'Пока ничего не просканировано',
  emptySubtitleExtension:
    'Браузер пришлёт список расширений при следующем подключении.',
  emptyTitle: 'Проверок пока не было',
  emptySubtitle: 'Устройство отправит список приложений при следующем выходе на связь.',
  unsupportedTitle: 'Это устройство не может перечислить свои приложения',
  unsupportedIos:
    'Apple не разрешает ни одному приложению читать, что установлено на iPhone или iPad, и KidGate также не видит, какие приложения на нём используются.',
  unsupportedGeneric: 'Это устройство не сообщает об установленных на нём приложениях.',
  incompleteNote:
    'Некоторые приложения могут здесь не отображаться — например, приложение без значка в списке приложений устройства.',
  blockHint:
    'Чтобы заблокировать приложение, откройте «Заблокированные приложения» на самом устройстве.',
  howItWorksLabel: 'Как работает этот список',
  markSafe: 'Отметить как безопасное',
  dismissedTitle: 'Вы отметили как безопасные',
  undoSafe: 'Отменить',
  tabGeneral: 'Обзор',
  searchPlaceholder: 'Поиск приложений',
  searchEmpty: 'Ничего не найдено.',
  blockedBadge: 'Заблокировано',
  setLimit: 'Задать лимит времени',
  editLimit: 'Изменить лимит времени',
  howToBlock: 'Как заблокировать',
  blockApp: 'Заблокировать',
  unblockApp: 'Разблокировать',
  iosBlockOnDevice: 'На iPhone приложения блокируются на самом iPhone ребёнка.',
} as const;
