export const webFilter = {
  title: 'Веб-фильтр',
  fallbackDeviceName: 'Устройство ребёнка',
  toastUpdateFailed: 'Не удалось обновить веб-фильтр. Повторите попытку.',
  heroTitle: 'Фильтрация сайтов для взрослых',
  heroSubtitleIos:
    'Использует фильтр веб-контента Экранного времени Apple, чтобы ограничивать взрослый контент в Safari и браузерах внутри приложений на устройстве ребёнка.',
  heroSubtitleAndroid:
    'Использует локальный DNS-VPN на Android-устройстве ребёнка, чтобы блокировать известные взрослые домены в браузерах и многих приложениях.',
  toggleLabel: 'Включить веб-фильтр',
  toggleHintIos: 'Требуется разрешение «Экранное время» на устройстве ребёнка.',
  toggleHintAndroid:
    'Ребёнку нужно один раз подтвердить VPN-подключение KidGate. Для работы фильтра VPN должен оставаться включённым.',
  toggleAccessibilityLabel: 'Включить веб-фильтр',
  infoTitle: 'Как это работает',
  infoLine1Ios: 'Apple автоматически фильтрует сайты для взрослых.',
  infoLine2Ios:
    'Используется взрослый фильтр Apple в Safari; всё внутри других приложений он не блокирует.',
  infoLine3Ios:
    'KidGate применяет настройку автоматически, когда приложение на устройстве ребёнка синхронизирует параметры.',
  infoLine1Android:
    'KidGate запускает локальный VPN, который проверяет DNS на взрослые домены и блокирует некоторые шифрованные DNS-резолверы.',
  infoLine2Android:
    'Отключите частный DNS на устройстве ребёнка. Если он включён, браузеры могут обходить фильтр.',
  infoLine3Android:
    'Во время фильтрации на устройстве ребёнка отображается значок VPN. Выключение VPN останавливает фильтр — снова откройте KidGate, чтобы восстановить.',
  infoLine4Android: 'Откройте Настройки → Сеть и интернет → Частный DNS → Выкл.',
  privateDnsBannerTitle: 'Отключите частный DNS',
  privateDnsBannerBody:
    'Частный DNS включён, поэтому взрослый фильтр можно обойти. Отключите его, чтобы фильтр работал.',
  privateDnsBannerButton: 'Открыть настройки DNS',
  vpnConsentBannerTitle: 'Восстановить VPN веб-фильтра',
  vpnConsentBannerBody:
    'VPN KidGate выключен. Взрослому фильтру нужен постоянно подключённый VPN.',
  vpnConsentBannerButton: 'Включить VPN',
  iosOnlyNote: 'На iOS использует Экранное время',
  androidVpnNote: 'На Android использует локальный DNS-VPN',
  webFilteringNote:
    'iOS использует взрослый фильтр Экранного времени; Android — блок-лист через локальный DNS-VPN.',
  safeSearchAlertsNote:
    'Safari не передаёт поисковые запросы; оповещёния по ключевым словам требуют управляемого безопасного браузера.',
  webHistoryNote: 'Требуется фильтрующий браузер или отчётность через DNS/VPN.',
  categoriesTitle: 'Что блокировать',
  categoriesSubtitle:
    'KidGate использует собственные списки доменов. Они покрывают сайты, до которых дети реально доходят, а не весь интернет — дополняйте их списками ниже.',
  androidOnlyCategory: 'Только Android — в iOS нет веб-контроля по категориям',
  iosCategoryNote:
    'iPhone поддерживает только {{category}} — через собственный фильтр Apple. Остальные категории работают на устройствах Android.',
  allowListTitle: 'Всегда разрешать',
  allowListSubtitle:
    'Сайты, которые остаются доступными, даже если категория их заблокировала бы.',
  allowListEmpty: 'Исключений пока нет.',
  allowListInputAccessibility: 'Добавить всегда разрешённый сайт',
  blockListTitle: 'Всегда блокировать',
  blockListSubtitle: 'Сайты, которые отклоняются независимо от категорий.',
  blockListEmpty: 'Заблокированных сайтов пока нет.',
  blockListInputAccessibility: 'Добавить всегда заблокированный сайт',
  allowListOnlyLabel: 'Только разрешённые сайты',
  allowListOnlyHintAndroid:
    'Всё, чего нет в списке, отклоняется. Работает на уровне DNS, поэтому другие приложения тоже теряют соединения.',
  allowListOnlyHintIos:
    'Safari и встроенные браузеры смогут открыть только сайты из вашего списка.',
  allowListOnlyNeedsEntries:
    'Добавьте хотя бы один разрешённый сайт, прежде чем включать.',
  domainPlaceholder: 'primer.com',
  addDomain: 'Добавить сайт',
  removeDomain: 'Удалить {{domain}}',
  invalidDomain: 'Введите адрес сайта, например primer.com',
  listFull: 'В этом списке можно сохранить не более {{max}} сайтов.',
  openHistory: 'История веба',
  openHistorySubtitle:
    'Посмотрите, до каких сайтов дошёл этот телефон и что было заблокировано',
  category: {
    adult: 'Контент 18+',
    gambling: 'Азартные игры',
    dating: 'Знакомства',
    drugs: 'Наркотики и алкоголь',
    violence: 'Насилие и экстремизм',
    piracy: 'Пиратство',
    social: 'Соцсети',
    videoStreaming: 'Видеостриминг',
    gaming: 'Игры',
    shopping: 'Покупки',
  },
  categoryHint: {
    adult: 'Откровенные сайты и сайты для взрослых',
    gambling: 'Казино, ставки, лутбоксы',
    dating: 'Знакомства и чаты с незнакомцами',
    drugs: 'Каннабис, вейпы, алкоголь',
    violence: 'Шок-контент и экстремистские форумы',
    piracy: 'Торренты и пиратские кинотеатры',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, игровые порталы',
    shopping: 'Amazon, AliExpress, быстрая мода',
  },
} as const;
