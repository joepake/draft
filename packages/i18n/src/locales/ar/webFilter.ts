export const webFilter = {
  title: 'فلتر الويب',
  fallbackDeviceName: 'جهاز الطفل',
  appliesToAll: 'يسري على أجهزة {{name}} كلها ({{count}})',
  coverageLine: 'مفعّل على {{enforcing}} من {{total}} أجهزة',
  mergeNotice:
    'كانت أجهزة {{name}} تحمل إعدادات مختلفة لتصفية الويب. الحفظ هنا يطبّق مجموعة واحدة عليها كلها، مدموجة نحو الخيار الأكثر تشددًا.',
  mergeLoosened: 'أصبح مسموحًا الآن على كل الأجهزة: {{domains}}',
  toastUpdateFailed: 'تعذّر تحديث فلتر الويب. حاول مرة أخرى.',
  heroTitle: 'فلترة مواقع البالغين',
  heroSubtitleIos:
    'يستخدم فلتر محتوى الويب في مدة استخدام الجهاز من Apple للحد من محتوى البالغين في Safari والمتصفحات داخل التطبيقات على جهاز الطفل.',
  heroSubtitleAndroid:
    'يستخدم VPN DNS محليًا على جهاز Android الخاص بالطفل لحظر نطاقات البالغين المعروفة في المتصفحات وكثير من التطبيقات.',
  heroSubtitleMacos:
    'يشغّل فلتر محتوى KidGate على جهاز Mac الخاص بالطفل لحظر مواقع البالغين المعروفة في المتصفحات وكثير من التطبيقات.',
  toggleHintIos: 'يتطلب إذن مدة استخدام الجهاز على جهاز الطفل.',
  toggleHintAndroid:
    'يجب أن يوافق الطفل مرة واحدة على اتصال VPN من KidGate. أبقِ الـVPN مفعّلًا ليعمل الفلتر.',
  toggleHintMacos:
    'يجب أن يوافق الطفل مرة واحدة على ملحق فلتر KidGate في إعدادات النظام. أبقِه موافقًا عليه ليعمل الفلتر.',
  toggleAccessibilityLabel: 'تفعيل فلتر الويب',
  infoTitle: 'كيف يعمل',
  infoLine1Ios: 'تفلتر Apple مواقع البالغين تلقائيًا.',
  infoLine2Ios:
    'يستخدم فلتر محتوى البالغين من Apple في Safari ولا يحظر كل شيء داخل التطبيقات الأخرى.',
  infoLine3Ios:
    'يطبّق KidGate الإعداد تلقائيًا عندما يزامن التطبيق على جهاز الطفل عناصر التحكم.',
  infoLine1Android:
    'يشغّل KidGate شبكة VPN محلية تفحص DNS بحثًا عن نطاقات البالغين وتحظر بعض محلّلات DNS المشفّرة.',
  infoLine2Android:
    'يرجى إيقاف DNS الخاص على جهاز الطفل. إذا كان مفعّلًا، فقد تتجاوز المتصفحات الفلتر.',
  infoLine3Android:
    'يعرض جهاز الطفل أيقونة VPN أثناء الفلترة. إيقاف الـVPN يوقف الفلتر — افتح KidGate مجددًا لاستعادته.',
  infoLine4Android: 'انتقل إلى الإعدادات ← الشبكة والإنترنت ← DNS الخاص ← إيقاف.',
  infoLine1Macos:
    'يشغّل KidGate فلتر محتوى على جهاز Mac يفحص المواقع التي يتم البحث عنها، ويحظر ما يقع منها ضمن فئاتك.',
  infoLine2Macos:
    'إذا ظهر الفلتر غير موافق عليه على جهاز Mac الخاص بالطفل، فافتح إعدادات النظام ← عام ← عناصر تسجيل الدخول والامتدادات للموافقة عليه.',
  infoLine3Macos:
    'يُظهر جهاز Mac الخاص بالطفل الفلتر نشطًا بمجرد الموافقة عليه. إذا تم إيقافه هناك، أعد فتح KidGate لاستعادته.',
  infoLine4Macos:
    'يقرأ الفلتر أسماء المواقع، لكن المتصفحات الحديثة تُخفيها في نحو نصف الزيارات — تلك المواقع لا تُفحص وفق فئاتك. ورغم ذلك، يوقف الفلتر معظم المواقع التي يصل إليها الأطفال بهذه الطريقة.',
  privateDnsBannerTitle: 'أوقف DNS الخاص',
  privateDnsBannerBody:
    'DNS الخاص مفعّل، لذا قد يُتجاوز فلتر مواقع البالغين. أوقفه ليعمل الفلتر.',
  privateDnsBannerButton: 'فتح إعدادات DNS',
  vpnConsentBannerTitle: 'استعادة VPN فلتر الويب',
  vpnConsentBannerBody:
    'VPN الخاص بـKidGate متوقف. يحتاج فلتر مواقع البالغين إلى بقاء الـVPN متصلًا.',
  vpnConsentBannerButton: 'تفعيل VPN',
  iosOnlyNote: 'يستخدم مدة استخدام الجهاز على iOS',
  androidVpnNote: 'يستخدم VPN DNS محليًا على Android',
  macosFilterNote: 'يستخدم فلتر محتوى KidGate على Mac',
  webFilteringNote:
    'يستخدم iOS فلتر البالغين في مدة استخدام الجهاز؛ ويستخدم Android قائمة حظر عبر VPN DNS محلي.',
  safeSearchAlertsNote:
    'لا يشارك Safari عبارات البحث؛ تتطلب تنبيهات الكلمات المفتاحية متصفحًا آمنًا مُدارًا.',
  webHistoryNote: 'يتطلب متصفحًا مزوّدًا بفلتر أو تقارير عبر DNS/VPN.',
  categoriesTitle: 'ما الذي يُحظر',
  categoriesSubtitle:
    'يستخدم KidGate قوائم نطاقات خاصة به. تغطي المواقع التي يصل إليها الأطفال فعلًا، وليس الويب بأكمله — استخدمها مع القوائم أدناه.',
  androidOnlyCategory: 'Android فقط — لا يوجد في iOS تحكّم بالويب حسب الفئة',
  iosCategoryNote:
    'يدعم iPhone فئة {{category}} فقط، عبر مرشّح Apple نفسه. أما بقية الفئات فتنطبق على أجهزة Android.',
  allowListTitle: 'السماح دائمًا',
  allowListSubtitle: 'مواقع تبقى متاحة حتى لو كانت إحدى الفئات ستحظرها.',
  allowListEmpty: 'لا استثناءات بعد.',
  allowListInputAccessibility: 'إضافة موقع مسموح دائمًا',
  blockListTitle: 'الحظر دائمًا',
  blockListSubtitle: 'مواقع تُرفض مهما قالت الفئات.',
  blockListEmpty: 'لا مواقع محظورة بعد.',
  blockListInputAccessibility: 'إضافة موقع محظور دائمًا',
  allowListOnlyLabel: 'المواقع المسموح بها فقط',
  allowListOnlyHintAndroid:
    'يُرفض كل ما هو خارج قائمة السماح. يعمل هذا على طبقة DNS، لذا تفقد التطبيقات الأخرى اتصالاتها أيضًا.',
  allowListOnlyHintIos:
    'لن يفتح Safari والمتصفحات داخل التطبيقات إلا المواقع الموجودة في قائمتك.',
  allowListOnlyNeedsEntries: 'أضف موقعًا مسموحًا واحدًا على الأقل قبل التفعيل.',
  domainPlaceholder: 'example.com',
  addDomain: 'إضافة موقع',
  removeDomain: 'إزالة {{domain}}',
  invalidDomain: 'أدخل عنوان موقع، مثل example.com',
  listFull: 'يمكنك حفظ {{max}} موقعًا كحد أقصى في هذه القائمة.',
  openHistory: 'سجل الويب',
  openHistorySubtitle: 'اطّلع على المواقع التي وصل إليها هذا الجهاز وما تم حظره',
  blockedPageTitle: 'تم حظر الموقع',
  blockedPageBody:
    'حظر KidGate هذا الموقع لعائلتك. إذا كنت تعتقد أن هذا خطأ، فاسأل والديك.',
  category: {
    adult: 'محتوى للبالغين',
    selfHarm: 'إيذاء النفس واضطرابات الأكل',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'التعليم',
    utility: 'أدوات',
    browser: 'متصفحات الويب',
    devTools: 'البرمجة وأدوات المطورين',
    messaging: 'المراسلة والمكالمات',
    community: 'المنتديات والمجتمعات',
    shortVideo: 'مقاطع الفيديو القصيرة',
    creative: 'الصور والفيديو والفن',
    productivity: 'الملاحظات والإنتاجية',
    reading: 'الكتب والقصص المصورة',
    fileSharing: 'مشاركة الملفات والتنزيلات',
    bypass: 'تطبيقات تجاوز القيود',
    gambling: 'المقامرة',
    gameGambling: 'صناديق الحظ ومراهنات العناصر',
    dating: 'المواعدة',
    strangerChat: 'الدردشة مع الغرباء',
    drugs: 'المخدرات والكحول',
    violence: 'العنف والدماء',
    extremism: 'التطرف والكراهية',
    piracy: 'القرصنة',
    social: 'الشبكات الاجتماعية',
    videoStreaming: 'بث الفيديو',
    music: 'الموسيقى',
    gaming: 'الألعاب',
    shopping: 'التسوق',
    aiCompanion: 'رفاق الذكاء الاصطناعي',
    aiAssistant: 'مساعدو الذكاء الاصطناعي',
    cryptoTrading: 'العملات الرقمية والتداول',
    vpn: 'تطبيقات VPN',
  },
  categoryHint: {
    adult: 'مواقع صريحة وللبالغين',
    selfHarm: 'منتديات تشجع إيذاء النفس والانتحار',
    gambling: 'الكازينوهات والمراهنات الرياضية والبوكر',
    gameGambling: 'فتح صناديق الحظ ومراهنات سكينز وروبلوكس',
    dating: 'تطبيقات المواعدة',
    strangerChat: 'نسخ أوميغل ودردشة الفيديو العشوائية',
    drugs: 'الحشيش والسجائر الإلكترونية والكحول',
    violence: 'مواقع الدماء والمشاهد الصادمة',
    extremism: 'منتديات الكراهية والمواقع المتطرفة',
    piracy: 'التورنت والبث المقرصن',
    social: 'Facebook و Instagram و TikTok و Discord',
    videoStreaming: 'YouTube و Netflix و Twitch',
    music: 'Spotify وSoundCloud وZing MP3',
    gaming: 'Roblox و Steam ومنصات الألعاب',
    shopping: 'Amazon و Shein والأزياء السريعة',
    aiCompanion: 'Character.AI وReplika وروبوتات تقمّص الأدوار',
    aiAssistant: 'ChatGPT وGemini وCopilot',
    cryptoTrading: 'Binance وCoinbase وتطبيقات التداول',
    vpn: 'صفحات تنزيل VPN. لا تحظر تطبيقًا مثبّتًا بالفعل.',
  },
  categoryGroup: {
    harm: 'محتوى ضار',
    contact: 'الغرباء',
    bypass: 'تجاوز المرشّح',
    ai: 'الذكاء الاصطناعي',
    entertainment: 'الترفيه والتواصل',
    money: 'التسوق والمال',
  },
  categoriesOnCount: '{{on}} من {{total}} مفعّلة',
  askToOpen: 'اسأل والديك',
  askToOpenSubtitle: 'إذا سمحا لك، سيُفتح هذا الموقع.',
  askToOpenDomainLabel: 'أي موقع؟',
  askToOpenPending: 'لقد طلبت موقعًا بالفعل. انتظر الرد.',
  askToOpenTooSoon: 'لقد أرسلت طلبًا للتو. حاول بعد دقيقة.',
  requestsTitle: 'طلبات المواقع',
  requestsSubtitle: 'المواقع التي طلب هذا الجهاز السماح بها.',
  siteRequestApproved: 'تم السماح بالموقع',
  siteRequestApprovedDescription:
    'أُضيف {{domain}} إلى «السماح دائمًا» على {{deviceName}}.',
  siteRequestDenied: 'تم رفض طلب الموقع',
  siteRequestDeniedDescription: 'ما زال {{domain}} محظورًا على {{deviceName}}.',
  siteRequestReceived: 'طلب فتح موقع',
  siteRequestReceivedDescription: 'طلب {{deviceName}} فتح {{domain}}.',
} as const;
