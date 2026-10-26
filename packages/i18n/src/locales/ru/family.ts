export const family = {
  settingsReachedDevice: 'Настройки дошли до этого устройства {{when}}',
  title: 'Семья',
  connectButton: 'Подключить',
  connectAccessibility: 'Добавить устройство ребёнка или родителя',
  addDeviceTitle: 'Добавить устройство',
  addDeviceMessage: 'Что вы хотите подключить?',
  addChildOption: 'Добавить устройство ребёнка',
  addJoinFamilyOption: 'Присоединиться к семье',
  addParentOption: 'Пригласить родителя',
  parentLimitFull: 'Больше родителей в одной семье быть не может.',
  loginWebOption: 'Войти через браузер',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: 'Кто пользуется {{deviceName}}?',
  assignSheetBody: 'Экранное время и звёзды засчитываются выбранному ребёнку.',
  assignSheetNobody: 'Никто',
  assignSheetNobodyHint: 'Общее устройство — не засчитывается никому.',
  assignSheetAddAndAssign: 'Добавить и назначить',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: 'Защитить {{childName}} сейчас?',
  quickProtectBody:
    'Включите стартовый набор защит. Всё можно точно настроить позже в профиле ребёнка.',
  quickProtectSourceLabel: 'За основу',
  quickProtectAllOnBody:
    'У {{childName}} эти виды защиты уже включены. Выберите другого ребёнка, чтобы скопировать его часы, лимит и списки сайтов.',
  quickProtectReplaces: 'Заменит текущую настройку {{childName}}.',
  quickProtectWebFilterCopyHint:
    'Копирует категории {{childName}}, а также {{allowed}} разрешённых и {{blocked}} запрещённых сайтов.',
  quickProtectSourceDefault: 'Настройки KidGate по умолчанию',
  quickProtectSourceBody:
    'Копирует правила {{childName}}, включая разрешённые и заблокированные сайты.',
  quickProtectBedtime: 'Часы блокировки на ночь',
  quickProtectBedtimeHint: 'Блокирует использование устройства ночью, с 22:00 до 7:00.',
  quickProtectDailyLimit: 'Дневной лимит',
  quickProtectDailyLimitHint:
    '{{minutes}} минут в день, суммарно по всем устройствам ребёнка.',
  quickProtectWebFilter: 'Веб-фильтр',
  quickProtectWebFilterHint:
    'Блокирует нежелательный контент и включает безопасный поиск и ограничения YouTube.',
  quickProtectWebFilterPremium: 'Функция Premium — входит в подписку.',
  quickProtectApply: 'Включить защиту',
  quickProtectSkip: 'Не сейчас',
  quickProtectDone: 'Защита включена. Настроить можно в любой момент.',
  quickProtectPartial:
    'Не удалось сохранить некоторые защиты. Попробуйте снова из профиля ребёнка.',
  pairDeviceFirstTitle: 'Устройство ещё не подключено',
  pairDeviceFirstBody:
    'Сначала подключите устройство для этого ребёнка — на вкладке «Семья» нажмите значок сканирования или «+» и выберите «Добавить устройство ребёнка». Этот контроль начнёт работать, как только устройство подключится.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'Заблокировать все',
  unlockAll: 'Разблокировать все',
  lockAllA11y: 'Заблокировать все устройства {{childName}}',
  unlockAllA11y: 'Разблокировать все устройства {{childName}}',
  childDetailUnassignTitle: 'Убрать у ребёнка?',
  childDetailUnassignBody:
    '{{deviceName}} перестанет учитываться для {{childName}} и попадёт в «Не назначено». Устройство остаётся сопряжённым и защищённым.',
  childDetailUnassignConfirm: 'Убрать',
  childDetailUnassignA11y: 'Убрать {{deviceName}} у этого ребёнка',
  // The fold control on a group heading.
  collapseGroupA11y: 'Свернуть: {{name}}',
  expandGroupA11y: 'Развернуть: {{name}}',
  assignDeviceCta: 'Назначить ребёнку…',
  unassignedHint:
    'Эти устройства пока не назначены ни одному ребёнку, поэтому их активность никому не засчитывается.',
  unassignedHintMember: 'Эти устройства детям назначает владелец семьи.',
  // One device's own page (the web's Controls tab): the two sentences above are
  // said to a group heading, and "these devices" is false about one machine.
  unassignedDeviceHint:
    'Это устройство пока не назначено ни одному ребёнку, поэтому его активность никому не засчитывается.',
  unassignedDeviceHintMember:
    'Кто пользуется этим устройством, выбирает владелец семьи.',
  // The pairing sheets' success step for a joined parent, who may pair but not assign.
  pairedDeviceBodyMember:
    'Устройство ребёнка подтвердило сопряжение. Кто им пользуется, выбирает владелец семьи.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Дети без устройства',
  // Child detail screen.
  childDetailStarsWell: 'Звёзды за неделю',
  childStarsA11y: 'Звёзды за эту неделю: {{count}}',
  childDetailDevicesTitle: 'Устройства',
  childDetailSwipeHint: 'Проведите по устройству, чтобы отменить назначение.',
  childDetailAssignMore: 'Назначить ещё устройство…',
  // The same row while the child has no device yet — "another" needs a first.
  childDetailAssignFirst: 'Назначить устройство…',
  childDetailAssignSheetTitle: 'Назначить устройство ребёнку {{childName}}',
  childDetailNoDevices:
    'Устройств пока нет. Назначьте ниже или подключите новое на вкладке «Семья».',
  // Same screen when nothing is left below to assign.
  childDetailNoDevicesPair:
    'Устройств пока нет. Подключите устройство на вкладке «Семья» и выберите этого ребёнка, когда приложение спросит, кто им пользуется.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Устройств пока нет. Только владелец семьи решает, кому принадлежит устройство.',
  childDetailEditNameTitle: 'Изменить имя',
  childDetailColorLabel: 'Цвет',
  scanButtonAccessibility: 'Сканировать код',
  scanTitle: 'Сканировать код',
  scanBody:
    'Наведите камеру на код с устройства ребёнка, приглашение в семью или код входа в веб-версию.',
  manualCodeLabel: 'Введите 6-значный код',
  manualInstructions: 'Введите 6-значный код, показанный на другом устройстве.',

  familyCardManage: 'Управление семьей, родителями и устройствами',

  familyCardJoined: 'Вы присоединились как родитель',

  chipDeviceCount: '{{count}} устройств',
  chipDeviceCount_one: '{{count}} устройство',
  chipDeviceCount_few: '{{count}} устройства',

  chipOnlineCount: '{{count}} онлайн',
  metaOnlineCount: '{{online}}/{{count}} онлайн',
  metaOnlineCount_one: '1 устройство онлайн',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} отметок Check-In',
  chipCheckInCount_one: '{{count}} Check-In',
  chipCheckInCount_few: '{{count}} Check-In',

  chipRequestCount: '{{count}} запросов',
  chipRequestCount_one: '{{count}} запрос',
  chipRequestCount_few: '{{count}} запроса',

  chipNeedsSetupCount: '{{count}} требуют настройки',
  chipNeedsSetupCount_one: '{{count}} требует настройки',

  chipProtectedCount: '{{count}} защищено',

  childDevicesProtected: 'Защищено устройств: {{count}}',

  chipHealthWarnCount: '{{count}} требуют настройки',
  chipHealthWarnCount_one: '{{count}} требует настройки',

  chipHealthInactiveCount: '{{count}} без связи более 24 ч',
  chipLocationBlocked: 'Местоположение не поступает',

  chipBlockedCount: '{{count}} в Часах блокировки',

  healthProtected: 'Защищено',
  buildOutdated: 'Есть обновление',
  healthNeedsSetup: 'Требуется настройка',
  healthOffline: 'Не в сети',
  devicePausedLabel: 'На паузе',
  deviceCheckingLabel: 'Проверка…',
  devicePausedHint: 'На паузе в бесплатном тарифе — все правила по-прежнему действуют',
  // What Paused means, said where the choice is made: the choose-a-device sheet on
  // both consoles. Checked against every agent 2026-09-28 — enforcement never
  // stops while parked; the reports do, and an SOS still goes through.
  devicePausedMeaning:
    'Устройство на паузе продолжает применять правила, которые у него уже есть. Оно перестаёт отправлять экранное время, местоположение и историю, но SOS по-прежнему до вас доходит.',
  parkReviewTitle: 'Включите это до конца пробного периода',
  parkReviewBody:
    'Когда пробный период закончится, одно устройство продолжит отправлять отчёты и принимать изменения правил, а остальные сохранят те правила, которые у них есть. На них правила можно будет только смягчать, поэтому то, что выключено сейчас, останется выключенным.',
  rulesEnforcedOn: 'Действуют на {{enforced}} из {{total}} устройств',
  rulesPausedBehind: 'Приостановлено — прежняя настройка',
  rulesTightenRefused:
    'На приостановленном устройстве правила можно только смягчить, но не ужесточить. Перейдите на Premium, чтобы менять их на всех устройствах.',
  parkedBannerTitle: 'Выберите отчитывающееся устройство',
  parkedBannerBody:
    'Ваши правила продолжают работать на каждом устройстве. Бесплатный тариф получает отчёты с одного устройства, и только на нём можно ужесточить правила — выберите это устройство или перейдите на Premium, чтобы сохранить все.',
  parkedBannerAction: 'Выбрать устройство',
  holdFamilyTitle: 'KidGate: семья временно приостановлена',
  holdDeviceTitle: 'KidGate: устройство «{{deviceName}}» временно приостановлено',
  holdFamilyBody:
    'Все устройства сохраняют свои правила, но не отправляют отчёты, пока приостановка не снята.',
  holdDeviceBody:
    'Это устройство сохраняет свои правила, но не отправляет отчёты, пока приостановка не снята.',
  holdReasonUnusualActivity: 'Причина: необычная активность в этом аккаунте.',
  holdReasonOutdatedApp:
    'Причина: приложение KidGate в этом аккаунте устарело. Обновите его, затем обратитесь в поддержку.',
  holdReasonTermsViolation: 'Причина: нарушение условий использования KidGate.',
  holdReasonOther: 'Причина: KidGate проверяет этот аккаунт.',
  holdNote: 'Сообщение от KidGate: {{note}}',
  holdAppeal: 'Написать в поддержку',
  holdAppealMessage: 'Хочу узнать о приостановке аккаунта моей семьи.',
  pairedDevicePaused:
    'Бесплатный тариф получает отчёты с одного устройства, и только на нём можно ужесточить правила, поэтому это устройство подключено на паузе.',
  pairingWillStartPaused:
    'Бесплатный тариф получает отчёты с одного устройства, и только на нём можно ужесточить правила, поэтому новое устройство будет подключено на паузе.',
  chooseMonitoredTitle: 'Выберите отчитывающееся устройство',
  chooseMonitoredBody:
    'Все правила продолжают работать на всех. Выбранное устройство отправляет экранное время и местоположение, и только на нём можно ещё ужесточить правила — на остальных их можно только смягчить. Менять выбор можно раз в {{days}} дн.',
  chooseMonitoredConfirm: 'Сделать отчитывающимся устройством',
  chooseMonitoredUpgrade: 'Сохранить все устройства — перейти на Premium',
  chooseMonitoredDone: '{{name}} теперь отчитывающееся устройство',
  chooseMonitoredCurrent: 'Отчитывается сейчас',
  monitoredCooldown: 'Отчитывающееся устройство можно менять только раз в {{days}} дн.',
  monitoredChooseFailed:
    'Не удалось сменить отчитывающееся устройство. Повторите попытку.',

  cardWhereLabel: 'Местоположение',

  cardWhereAccessibility: 'Открыть местоположение {{deviceName}}',

  cardTodayLabel: 'Сегодня',

  cardTodayUsed: 'Использовано {{used}}',

  cardTodayNoData: 'Сегодня данных об использовании нет',

  cardTodayAccessibility: 'Открыть отчёт об использовании {{deviceName}}',

  emptyTitle: 'Нет устройств ребёнка',

  emptyDescription:
    'Добавьте устройство ребёнка, чтобы отслеживать экранное время и использование приложений.',

  emptyPairSteps:
    'Установите KidGate на телефон, планшет, телевизор или компьютер ребёнка, выберите «Это устройство ребёнка», если приложение спросит, и отсканируйте появившийся код.',

  setupFamilyTitle: 'Настройте семью',

  createFamilyButton: 'Создать семью',

  joinFamilyButton: 'Присоединиться к семье',

  switchToJoinTitle: 'Присоединиться к другой семье?',

  switchToJoinMessage:
    'Ваша пустая семья будет удалена, после чего вы сможете присоединиться к другой семье по коду приглашения. Если устройство ребёнка уже подключено, сначала необходимо решить этот вопрос.',

  guestEmptyTitle: 'Здесь появится ваша семья',

  guestEmptyDescription:
    'Войдите в аккаунт, чтобы подключить устройства детей, получать оповещения и устанавливать разумные ограничения экранного времени.',

  guestConnectButton: 'Войти',

  guestBenefitLimitsTitle: 'Экранное время и лимиты приложений',

  guestBenefitLimitsBody:
    'Задайте Дневной лимит, Часы блокировки и Лимиты приложений или сразу заблокируйте устройство.',

  guestBenefitAlertsTitle: 'SOS и оповещения об активности',

  guestBenefitAlertsBody: 'Узнавайте сразу, если что-то требует вашего внимания.',

  guestBenefitLocationTitle: 'Местоположение и Check-In',

  guestBenefitLocationBody:
    'Узнавайте, где находится ребёнок, и просите его подтвердить, что с ним всё в порядке.',

  step1Title: 'Откройте KidGate на устройстве ребёнка',

  step1Description:
    'Установите KidGate на телефон, планшет, телевизор или компьютер ребёнка. На телефоне или планшете выберите «Это устройство ребёнка». Появятся QR-код и код из 6 символов.',

  connectChildButton: 'Подключить устройство ребёнка',
  listHint: 'Проведите по устройству влево, чтобы удалить его',

  removeAlertTitle: 'Удалить устройство?',

  removeAlertMessage:
    '{{deviceName}} будет отключено от вашей учетной записи. Все связанные запросы экранного времени и история активности будут удалены.',

  toastRemoveFailed: 'Не удалось удалить устройство. Попробуйте снова.',

  swipeRemoving: 'Удаление…',

  swipeRemove: 'Удалить',

  deviceNotFound: 'Устройство не найдено',

  deviceMayHaveBeenRemoved:
    'Возможно, это устройство уже было удалено из вашей учетной записи.',

  deviceNotFoundError: 'Устройство не найдено',

  deviceRemovedAlertTitle: 'Устройство удалено',

  deviceRemovedAlertMessage:
    'Один из родителей удалил это устройство из семейной группы. Чтобы подключить его снова, выберите «Это устройство ребёнка».',

  deviceNotRegistered: 'Это устройство ещё не зарегистрировано.',

  defaultDeviceName: 'Устройство ребёнка',

  fallbackDeviceName: 'Устройство ребёнка',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'iPhone родителя',

  parentAndroid: 'Android родителя',

  childIphone: 'iPhone ребёнка',

  parentIpad: 'iPad родителя',

  childIpad: 'iPad ребёнка',

  childAndroid: 'Android ребёнка',

  deviceFallbackName: 'Устройство',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'ПК с Windows',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'Введите имя устройства.',

  deviceNameTooLong: 'Имя устройства не должно превышать {{max}} символов.',

  lastActiveDate: 'Последняя активность: {{date}}',
  lastSeenDate: 'Последнее подключение: {{date}}',

  lastActiveUnknown: 'Недавней активности нет',

  thisDevice: 'Это устройство',

  thisDeviceYou: 'Это устройство (Вы)',

  namedDeviceYou: '{{name}} (Вы)',

  deviceNameSaved: 'Имя устройства обновлено.',

  deviceSectionTitle: 'Устройство',

  deviceNameLabel: 'Имя устройства',

  editDeviceNameTitle: 'Изменить имя устройства',

  editDeviceNameSubtitle:
    'Выберите имя, которое родители быстро узнают. Максимум {{maxLength}} символов.',

  deviceNameInputLabel: 'Имя устройства',

  deviceNamePlaceholder: 'iPhone Софии',

  unableToUpdateDeviceName: 'Не удалось обновить имя устройства. Попробуйте снова.',

  osLabelFallback: 'Операционная система',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — требуется немедленное внимание',

  waitingForCheckIn: 'Ожидание Check-In',

  timeRequestsWaiting: '{{count}} запросов экранного времени ожидают',

  timeRequestsWaiting_one: '{{count}} запрос экранного времени ожидает',

  timeRequestsWaiting_few: '{{count}} запроса экранного времени ожидают',

  youPausedThisDevice: 'Вы заблокировали это устройство',

  lockSentWaitingForDevice: 'Команда блокировки отправлена — ждём устройство',
  lockDelayedOnDevice:
    'Блокировка и разблокировка могут применяться на этом устройстве с задержкой до {{minutes}} минут.',

  lockNotAppliedOnDevice: 'Это устройство не применило блокировку',

  blockedHoursActiveNow: 'Сейчас действуют Часы блокировки',

  inactiveOpenKidGate: 'Неактивно — откройте KidGate на этом устройстве',

  protectionNeedsSetup: 'Требуется настройка: {{issueLabel}}',

  freeTierCadenceHint: 'Бесплатный тариф — последняя активность: {{date}}',
  dailyLimitOn: 'Дневной лимит включён',

  deviceReady: 'Готово',

  sos: 'SOS',

  browsingPaused: 'Веб приостановлен',
  browsingResumed: 'Веб возобновлён',
  parentPausedBrowsing:
    '{{actorName}}: веб на устройстве ребёнка приостановлен на {{minutes}} мин.',
  parentResumedBrowsing: '{{actorName}}: пауза веба на устройстве ребёнка завершена.',
  deviceLocked: 'Устройство заблокировано',

  deviceUnlocked: 'Устройство разблокировано',

  parentPausedChildDevice: '{{actorName}}: устройство ребёнка заблокировано.',

  parentRestoredChildDevice: '{{actorName}}: устройство ребёнка разблокировано.',

  parentFallback: 'Родитель',

  formerParent: 'Родитель, покинувший семью',
  batteryPercent: '{{percent}} %',
  batteryAccessibility: 'Батарея {{percent}} процентов',
  batteryChargingAccessibility: 'Батарея {{percent}} процентов, заряжается',
  childDetailPerDevice: 'Для каждого устройства — выберите какое',
  childDetailNotAvailable: 'Недоступно',
  childDetailNotAvailableReason: 'Недоступно ни на одном из устройств',
  childDetailProtectionOk: 'Защищено',
  childDetailProtectionAttention: 'Требуют внимания: {{count}}',
  childDetailProtectionSheetTitle: 'Защита по устройствам',
  childDetailRemoveTitle: 'Удалить профиль: {{childName}}',
  childDetailRemovingButton: 'Удаление…',
  childDetailOnlineCount: '{{online}} из {{total}} в сети',
  childDetailBudgetTitle: 'Дневной лимит',
  childDetailSectionControls: 'Правила для всех устройств ребёнка',
  childDetailSectionSafety: 'Собрано со всех устройств',
  childDetailSectionAlerts: 'Все устройства — одна лента',
  childDetailScopeAll: 'Все устройства',
  childDetailTodayWell: 'Сегодня',
  childDetailUnassignAction: 'Открепить',
  childDetailLimitShared: 'Суммарно по всем устройствам',
  searchTitle: 'Поиск',
  searchPlaceholder: 'Дети, устройства, функции, руководство…',
  searchEmpty: 'Ничего не найдено. Попробуйте другое слово.',
  searchSectionFeatures: 'Функции',
  searchSectionGoTo: 'Перейти',
} as const;
