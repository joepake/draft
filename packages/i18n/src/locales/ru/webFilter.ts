export const webFilter = {
  title: 'Веб-фильтр',
  fallbackDeviceName: 'Устройство ребёнка',
  appliesToAll: 'Применяется ко всем устройствам {{name}} ({{count}})',
  coverageLine: 'Действует на {{enforcing}} из {{total}} устройств',
  mergeNotice:
    'На устройствах {{name}} были разные настройки веб-фильтра. Сохранение здесь применит один набор ко всем, объединённый в сторону более строгого варианта.',
  mergeLoosened: 'Теперь разрешено на каждом устройстве: {{domains}}',
  toastUpdateFailed: 'Не удалось обновить веб-фильтр. Повторите попытку.',
  heroTitle: 'Фильтрация сайтов для взрослых',
  heroSubtitleIos:
    'Использует фильтр веб-контента Экранного времени Apple, чтобы ограничивать взрослый контент в Safari и браузерах внутри приложений на устройстве ребёнка.',
  heroSubtitleAndroid:
    'Использует локальный DNS-VPN на Android-устройстве ребёнка, чтобы блокировать известные взрослые домены в браузерах и многих приложениях.',
  heroSubtitleMacos:
    'Запускает контент-фильтр KidGate на Mac ребёнка, чтобы блокировать известные сайты для взрослых в браузерах и многих приложениях.',
  toggleHintIos: 'Требуется разрешение «Экранное время» на устройстве ребёнка.',
  toggleHintAndroid:
    'Ребёнку нужно один раз подтвердить VPN-подключение KidGate. Для работы фильтра VPN должен оставаться включённым.',
  toggleHintMacos:
    'Ребёнок должен один раз одобрить расширение-фильтр KidGate в Системных настройках. Оставьте его одобренным, чтобы фильтр работал.',
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
  infoLine1Macos:
    'KidGate запускает на Mac контент-фильтр, который проверяет, какие сайты открываются, и блокирует те, что относятся к вашим категориям.',
  infoLine2Macos:
    'Если на Mac ребёнка фильтр показан как не одобренный, откройте Системные настройки → Основные → Элементы входа и расширения, чтобы одобрить его.',
  infoLine3Macos:
    'Mac ребёнка показывает фильтр как активный после одобрения. Если он будет отключён там, откройте KidGate снова, чтобы восстановить его.',
  infoLine4Macos:
    'Фильтр считывает имена сайтов, которые современные браузеры скрывают примерно в половине посещений — такие сайты не проверяются по вашим категориям. Тем не менее он блокирует большинство сайтов, которые дети посещают таким способом.',
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
  macosFilterNote: 'На Mac использует контент-фильтр KidGate',
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
    'Посмотрите, до каких сайтов дошло это устройство и что было заблокировано',
  blockedPageTitle: 'Сайт заблокирован',
  blockedPageBody:
    'KidGate заблокировал этот сайт для вашей семьи. Если это ошибка, спросите родителей.',
  category: {
    adult: 'Контент 18+',
    selfHarm: 'Самоповреждение и расстройства пищевого поведения',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Образование',
    utility: 'Утилиты',
    browser: 'Браузеры',
    devTools: 'Программирование',
    messaging: 'Мессенджеры и звонки',
    community: 'Форумы и сообщества',
    shortVideo: 'Короткие видео',
    creative: 'Фото, видео и творчество',
    productivity: 'Заметки и продуктивность',
    reading: 'Книги и комиксы',
    fileSharing: 'Файлы и загрузки',
    bypass: 'Обход ограничений',
    gambling: 'Азартные игры',
    gameGambling: 'Лутбоксы и ставки на скины',
    dating: 'Знакомства',
    strangerChat: 'Чат с незнакомцами',
    drugs: 'Наркотики и алкоголь',
    violence: 'Насилие и жестокость',
    extremism: 'Экстремизм и ненависть',
    piracy: 'Пиратство',
    social: 'Соцсети',
    videoStreaming: 'Видеостриминг',
    music: 'Музыка',
    gaming: 'Игры',
    shopping: 'Покупки',
    aiCompanion: 'ИИ-собеседники',
    aiAssistant: 'ИИ-ассистенты',
    cryptoTrading: 'Криптовалюты и трейдинг',
    vpn: 'VPN-приложения',
  },
  categoryHint: {
    adult: 'Откровенные сайты и сайты для взрослых',
    selfHarm: 'Форумы, поощряющие самоповреждение',
    gambling: 'Казино, ставки на спорт, покер',
    gameGambling: 'Открытие кейсов, ставки на скины и Roblox',
    dating: 'Приложения для знакомств',
    strangerChat: 'Клоны Omegle, случайный видеочат',
    drugs: 'Каннабис, вейпы, алкоголь',
    violence: 'Сайты с жестокими и шокирующими кадрами',
    extremism: 'Форумы ненависти и экстремистские сайты',
    piracy: 'Торренты и пиратские кинотеатры',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, игровые порталы',
    shopping: 'Amazon, AliExpress, быстрая мода',
    aiCompanion: 'Character.AI, Replika, ролевые боты',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, торговые приложения',
    vpn: 'Страницы загрузки VPN. Не блокирует уже установленное приложение.',
  },
  categoryGroup: {
    harm: 'Вредный контент',
    contact: 'Незнакомцы',
    bypass: 'Обход фильтра',
    ai: 'ИИ',
    entertainment: 'Развлечения и соцсети',
    money: 'Покупки и деньги',
  },
  categoriesOnCount: 'Включено {{on}} из {{total}}',
  askToOpen: 'Спросить родителей',
  askToOpenSubtitle: 'Если разрешат, сайт откроется.',
  askToOpenDomainLabel: 'Какой сайт?',
  askToOpenPending: 'Запрос уже отправлен. Дождись ответа.',
  askToOpenTooSoon: 'Запрос только что отправлен. Попробуй через минуту.',
  requestsTitle: 'Запросы сайтов',
  requestsSubtitle: 'Сайты, которые это устройство просит разрешить.',
  siteRequestApproved: 'Сайт разрешён',
  siteRequestApprovedDescription:
    '{{domain}} добавлен в «Всегда разрешать» на {{deviceName}}.',
  siteRequestDenied: 'Запрос сайта отклонён',
  siteRequestDeniedDescription:
    '{{domain}} остаётся заблокированным на {{deviceName}}.',
  siteRequestReceived: 'Запрос сайта',
  siteRequestReceivedDescription: '{{deviceName}} просит открыть {{domain}}.',
} as const;
