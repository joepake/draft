export const family = {
  title: 'Семья',
  connectButton: 'Подключить',
  connectAccessibility: 'Добавить устройство ребёнка или родителя',
  addDeviceTitle: 'Добавить устройство',
  addDeviceMessage: 'Что вы хотите подключить?',
  addChildOption: 'Добавить устройство ребёнка',
  addJoinFamilyOption: 'Присоединиться к семье',
  addParentOption: 'Пригласить родителя',
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
  quickProtectBedtime: 'Заблокированные часы на ночь',
  quickProtectBedtimeHint: 'Блокирует использование устройства ночью, с 22:00 до 7:00.',
  quickProtectDailyLimit: 'Дневной лимит экранного времени',
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
  unassignedHint: 'Эти устройства пока никому не засчитываются.',
  unassignedHintMember: 'Эти устройства детям назначает владелец семьи.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Дети без устройства',
  // Child detail screen.
  childDetailStarsWell: 'Звёзды за неделю',
  childStarsA11y: 'Звёзды за эту неделю: {{count}}',
  childDetailDevicesTitle: 'Устройства',
  childDetailSwipeHint: 'Проведите по устройству, чтобы отменить назначение.',
  childDetailAssignMore: 'Назначить ещё устройство…',
  childDetailAssignSheetTitle: 'Назначить устройство ребёнку {{childName}}',
  childDetailNoDevices:
    'Устройств пока нет. Назначьте ниже или подключите новое на вкладке «Семья».',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Устройств пока нет. Только владелец семьи решает, кому принадлежит устройство.',
  childDetailEditNameTitle: 'Изменить имя',
  childDetailColorLabel: 'Цвет',
  scanButtonAccessibility: 'Сканировать код',
  scanTitle: 'Сканировать код',
  scanBody:
    'Наведите камеру на устройство ребёнка, приглашение в семью или код, показанный на компьютере.',
  manualCodeLabel: 'Введите 6-значный код',
  manualInstructions: 'Введите 6-значный код, показанный на другом устройстве.',

  headerHintEmpty: 'Управляйте устройствами детей и защищайте их',

  headerHintGuest:
    'Изучайте приложение свободно — войдите в аккаунт, когда будете готовы подключить устройства.',

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
  chipLocationBlocked: 'Нет местоположения',

  chipBlockedCount: '{{count}} заблокировано',

  healthProtected: 'Защищено',
  buildOutdated: 'Есть обновление',
  healthNeedsSetup: 'Требуется настройка',
  healthOffline: 'Не в сети',
  devicePausedLabel: 'На паузе',
  devicePausedHint: 'На паузе в бесплатном тарифе — все правила по-прежнему действуют',
  parkedBannerTitle: 'Выберите устройство, за которым продолжите следить',
  parkedBannerBody:
    'Ваши правила работают на каждом устройстве. Бесплатный тариф получает отчёты с одного — выберите его или перейдите на Premium, чтобы сохранить все.',
  parkedBannerAction: 'Выбрать устройство',
  chooseMonitoredTitle: 'Какое устройство должно отчитываться?',
  chooseMonitoredBody:
    'Все правила продолжают работать на всех. Только выбранное отправляет экранное время и местоположение. Менять можно раз в {{days}} дн.',
  chooseMonitoredConfirm: 'Следить за этим устройством',
  chooseMonitoredUpgrade: 'Сохранить все устройства — перейти на Premium',
  chooseMonitoredDone: '{{name}} теперь отчитывающееся устройство',
  monitoredCooldown: 'Отчитывающееся устройство можно менять только раз в {{days}} дн.',
  monitoredChooseFailed: 'Не удалось сменить отчитывающееся устройство',

  cardWhereLabel: 'Местоположение',

  cardWhereAccessibility: 'Открыть местоположение {{deviceName}}',

  cardTodayLabel: 'Сегодня',

  cardTodayUsed: 'Использовано {{used}}',

  cardTodayNoData: 'Сегодня данных об использовании нет',

  cardTodayAccessibility: 'Открыть отчёт об использовании {{deviceName}}',

  emptyTitle: 'Нет устройств ребёнка',

  emptyDescription:
    'Добавьте устройство ребёнка, чтобы отслеживать экранное время и использование приложений.',

  setupFamilyTitle: 'Настройте семью',

  setupFamilyDescription:
    'Создайте семью, чтобы подключить устройства ваших детей, или присоединитесь к существующей семье по приглашению другого родителя.',

  createFamilyButton: 'Создать семью',

  joinFamilyButton: 'Присоединиться к семье',

  switchToJoinTitle: 'Присоединиться к другой семье?',

  switchToJoinMessage:
    'Ваша пустая семья будет удалена, после чего вы сможете присоединиться к другой семье по коду приглашения. Если устройство ребёнка уже подключено, сначала необходимо решить этот вопрос.',

  guestEmptyTitle: 'Ваша семья начинается здесь',

  guestEmptyDescription:
    'Войдите в аккаунт, чтобы подключить устройства детей, получать уведомления и устанавливать полезные ограничения экранного времени.',

  guestConnectButton: 'Войти',

  guestCreateAccount: 'Создать аккаунт родителя',

  guestBenefitLimitsTitle: 'Экранное время и лимиты приложений',

  guestBenefitLimitsBody: 'Блокируйте устройства и задавайте ежедневные расписания.',

  guestBenefitAlertsTitle: 'SOS и уведомления об активности',

  guestBenefitAlertsBody:
    'Получайте уведомления сразу, когда потребуется ваше внимание.',

  guestBenefitLocationTitle: 'Местоположение и Check-In',

  guestBenefitLocationBody:
    'Узнавайте, где находится ребенок, и просите его подтвердить, что с ним всё в порядке.',

  stepsHeading: 'Первые шаги',

  step1Title: 'Нажмите «Добавить устройство ребёнка»',

  step1Description: 'Здесь появится QR-код для привязки, готовый к сканированию.',

  step2Title: 'Отсканируйте его с устройства ребёнка',

  step2Description:
    'Установите KidGate на телефон или планшет ребёнка, выберите «Это устройство ребёнка», затем отсканируйте код.',

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
    'Один из родителей удалил это устройство из семейной группы. Снова выберите роль «Ребенок», чтобы подключить его.',

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

  lastActiveUnknown: 'Недавней активности нет',

  thisDevice: 'Это устройство',

  thisDeviceYou: 'Это устройство (Вы)',

  namedDeviceYou: '{{name}} (Вы)',

  deviceNameSaved: 'Имя устройства обновлено.',

  deviceSectionTitle: 'Устройство',

  deviceNameLabel: 'Имя устройства',

  editDeviceNameTitle: 'Изменить имя устройства',

  editDeviceNameSubtitle:
    'Только владелец семейной группы может переименовывать устройства. Максимум {{maxLength}} символов.',

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

  lockNotAppliedOnDevice: 'Это устройство не применило блокировку',

  blockedHoursActiveNow: 'Сейчас действуют Заблокированные часы',

  inactiveOpenKidGate: 'Неактивно — откройте KidGate на этом устройстве',

  protectionNeedsSetup: 'Требуется настройка: {{issueLabel}}',

  dailyLimitOn: 'Дневной лимит включён',

  deviceReady: 'Готово',

  sos: 'SOS',

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
} as const;
