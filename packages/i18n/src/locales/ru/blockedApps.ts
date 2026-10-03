export const blockedApps = {
  title: 'Заблокированные приложения',
  installApprovalTitle: 'Подтверждение новых приложений',
  installApprovalSubtitleOn:
    'Приложения, устанавливаемые начиная с этого момента, остаются заблокированными, пока вы их не подтвердите.',
  installApprovalSubtitleOff:
    'Включите, чтобы блокировать каждое новое приложение, пока вы его не подтвердите.',
  installApprovalSubtitleIos:
    'На iPhone и iPad вместо этого скрывается App Store — Apple не позволяет подтверждать приложения по одному.',
  installApprovalStatusOn: 'Новые приложения требуют подтверждения',
  installApprovalStatusOff: 'Новые приложения открываются свободно',
  installApprovalStatusIos: 'App Store скрыт',
  installApprovalAccessibilityLabel: 'Подтверждение новых приложений',
  installApprovalInfoTitle: 'Как работает подтверждение',
  installApprovalInfoLine1:
    'Устройство ребёнка блокирует любое приложение, установленное после того, как вы это включите, не дожидаясь вас.',
  installApprovalInfoLine2:
    'Вы получите уведомление, а приложение будет показано ниже, на экране «Заблокированные приложения», пока вы его не разрешите.',
  installApprovalInfoLine3:
    'Если разрешить приложение, оно сразу же открывается. Приложение, которое вы не разрешили, просто остаётся заблокированным.',
  installApprovalInfoLine1Ios:
    'Пока это включено, App Store на устройстве ребёнка скрыт, поэтому установить новое приложение нельзя.',
  installApprovalInfoLine2Ios:
    'Приложения, которые уже есть на устройстве, продолжают работать.',
  installApprovalInfoLine3Ios:
    'Чтобы разрешить одно приложение, выключите эту функцию, установите его, а затем включите её снова.',
  pendingSectionTitle: 'Заблокировано автоматически, ждёт вас',
  pendingSectionSubtitle:
    'Установлено после того, как вы включили подтверждение. Ничего из этого не выбиралось на устройстве ребёнка.',
  pendingInstalledAt: 'Установлено {{when}}',
  pendingEmpty: 'Нет новых приложений, ожидающих подтверждения.',
  allowApp: 'Разрешить',
  allowingApp: 'Разрешаем…',
  toastAppAllowed: '{{appName}} теперь можно открыть.',
  toastAllowFailed: 'Не удалось разрешить это приложение. Попробуйте ещё раз.',
  toastInstallApprovalSaveFailed: 'Не удалось сохранить. Попробуйте ещё раз.',
  toastChooseAppsFirst:
    'Сначала выберите приложения: откройте настройки KidGate на устройстве ребёнка и введите PIN родителя.',
  toastSaveFailed: 'Не удалось сохранить. Попробуйте ещё раз.',
  statusBlockingOn: 'Блокировка включена',
  statusBlockingOff: 'Блокировка отключена',
  heroTitle: 'Выбранные приложения для блокировки',
  heroSubtitle:
    'Эти приложения и категории выбраны на устройстве ребёнка. KidGate синхронизирует список сюда для вашего просмотра.',
  statAppsLabel: 'Приложения',
  statCategoriesLabel: 'Категории',
  toggleTitle: 'Включить блокировку приложений',
  toggleSubtitleOn: 'Выбранные приложения заблокированы на устройстве ребёнка.',
  toggleSubtitleOff: 'Включите, чтобы удалённо блокировать выбранные приложения.',
  toggleAccessibilityLabel: 'Включить блокировку приложений',
  emptyTitle: 'Пока нет заблокированных приложений',
  emptySubtitle:
    'На устройстве ребёнка откройте настройки KidGate, введите PIN родителя, затем откройте «Блокировка приложений → Заблокированные приложения» и сохраните выбор.',
  emptySubtitleTv:
    'На телевизоре откройте KidGate, выберите «{{button}}», введите PIN родителя, затем выберите приложения и сохраните.',
  sectionTitle: 'Список блокировки',
  privacyTitle: 'Список приложений поступает с устройства ребёнка',
  privacySubtitle:
    'На iOS Apple может скрывать точные названия приложений от родительских устройств. На других устройствах выбранные приложения синхронизируются сюда. Для изменения списка по-прежнему требуется PIN-код родителя на устройстве ребёнка.',
  infoTitle: 'Как это работает',
  infoLine1: 'Выберите приложения на устройстве ребёнка после ввода PIN-кода родителя.',
  infoLine2:
    'Блокировка, Заблокированные часы и Дневной лимит по-прежнему блокируют все приложения.',
  infoLine3: 'Вы можете включать и отключать блокировку в любое время на этом экране.',
  appKind: 'Приложение',
  categoryKind: 'Категория',
  websiteKind: 'Веб-сайт',
  noAppsSelectedYet: 'Пока не выбрано ни одного приложения',
  blockedAppCount: '{{count}} приложений',
  blockedAppCount_one: '{{count}} приложение',
  blockedAppCount_few: '{{count}} приложения',
  blockedCategoryCount: '{{count}} категорий',
  blockedCategoryCount_one: '{{count}} категория',
  blockedCategoryCount_few: '{{count}} категории',
  blockedItemCount: '{{count}} элементов',
  blockedItemCount_one: '{{count}} элемент',
  blockedItemCount_few: '{{count}} элемента',
  blockedListReady: 'Список блокировки готов',
  blockedAppsLabel: 'Заблокированные приложения',
  appsConfiguredChip: 'Приложения настроены',
  appsNotSetChip: 'Приложения не настроены',
  appBlockingSectionTitle: 'Блокировка приложений',
  appBlockingSectionDescription:
    'Выберите, какие приложения родители смогут блокировать на этом устройстве.',
  savedItemsForBlocking: 'Сохранено {{count}} элементов для блокировки.',
  savedItemsForBlocking_one: 'Сохранён {{count}} элемент для блокировки.',
  savedItemsForBlocking_few: 'Сохранено {{count}} элемента для блокировки.',
  noAppsSelected: 'Приложения не выбраны.',
  unableToOpenAppPicker: 'Не удалось открыть список приложений. Попробуйте ещё раз.',
  wizardStepPin: 'Введите PIN-код родителя, когда его запросят «Настройки».',
  wizardStepChoose:
    'Откройте «Заблокированные приложения» в разделе «Блокировка приложений», отметьте приложения и сохраните.',
  pickerSubtitle:
    'Выберите приложения и категории, которые нужно заблокировать на этом устройстве.',
  pickerSubtitleAndroid:
    'Отмеченные приложения не открываются, пока включена Блокировка приложений.',
  pickerEmpty: 'На этом устройстве не найдено приложений.',
} as const;
