export const appInventory = {
  title: 'Приложения на этом устройстве',
  pendingTitle: 'Ожидает вашего подтверждения',
  pendingBadge: 'Заблокировано, пока вы не разрешите',
  approvedBadge: 'Разрешено вами',
  installedAtLabel: 'Установлено {{when}}',
  allowApp: 'Разрешить',
  subtitle: 'Всё, что KidGate нашёл установленным, а не только то, что изменилось.',
  summaryFlagged: '{{flagged}} из {{total}} приложений стоит просмотреть',
  summaryClear: 'Ничего подозрительного среди {{total}} приложений',
  flaggedTitle: 'Стоит просмотреть',
  otherTitle: 'Всё остальное',
  scannedLabel: 'Последняя проверка',
  staleNote: 'Этот список устарел. Он обновится, когда устройство выйдет на связь.',
  truncatedNote: 'Показано {{shown}} из {{total}} найденных приложений.',
  firstScanNote: 'Это первая проверка, поэтому KidGate не знает, когда они появились.',
  newBadge: 'Новое',
  ageBadge: '{{age}}+',
  browserExtension: 'Расширение Chrome',
  titleExtension: 'Расширения в этом браузере',
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
    'Apple не разрешает ни одному приложению читать, что установлено на iPhone или iPad, поэтому KidGate может сообщать о приложениях только по мере их использования.',
  unsupportedGeneric: 'Это устройство не сообщает об установленных на нём приложениях.',
  incompleteNote: 'Приложение без значка на главном экране может здесь не появиться.',
  blockHint:
    'Чтобы остановить приложение, откройте «Заблокированные приложения» на самом устройстве.',
  howItWorksLabel: 'Как работает этот список',
  markSafe: 'Безопасно',
  dismissedTitle: 'Вы отметили как безопасные',
  undoSafe: 'Отменить',
  howToBlock: 'Как заблокировать',
} as const;
