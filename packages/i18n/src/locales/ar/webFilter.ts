export const webFilter = {
  title: 'فلتر الويب',
  fallbackDeviceName: 'جهاز الطفل',
  appliesToAll: 'يسري على أجهزة {{name}} كلها ({{count}})',
  coverageLine: 'مفعّل على {{enforcing}} من {{total}} أجهزة',
  mergeNotice:
    'كانت أجهزة {{name}} تحمل إعدادات مختلفة لتصفية الويب. الحفظ هنا يطبّق مجموعة واحدة عليها كلها، مدموجة نحو الخيار الأكثر تشددًا.',
  mergeLoosened: 'أصبح مسموحًا الآن على كل الأجهزة: {{domains}}',
  toastUpdateFailed: 'تعذّر تحديث فلتر الويب. حاول مرة أخرى.',
  heroTitle: 'فلترة المواقع غير المناسبة',
  heroSubtitleIos:
    'يستخدم فلتر محتوى الويب في مدة استخدام الجهاز من Apple للحد من محتوى البالغين في Safari والمتصفحات داخل التطبيقات على جهاز الطفل.',
  heroSubtitleAndroid:
    'يستخدم VPN DNS محليًا على جهاز Android الخاص بالطفل لحظر النطاقات غير المناسبة المعروفة في المتصفحات وكثير من التطبيقات.',
  heroSubtitleMacos:
    'يشغّل فلتر محتوى KidGate على جهاز Mac الخاص بالطفل لحظر المواقع غير المناسبة المعروفة في المتصفحات وكثير من التطبيقات.',
  toggleHintIos: 'يتطلب إذن مدة استخدام الجهاز على جهاز الطفل.',
  toggleHintAndroid:
    'يجب أن يوافق الطفل مرة واحدة على اتصال VPN من KidGate. أبقِ الـVPN مفعّلًا ليعمل الفلتر.',
  toggleHintMacos:
    'يجب أن يوافق الطفل مرة واحدة على ملحق فلتر KidGate في إعدادات النظام. أبقِه موافقًا عليه ليعمل الفلتر.',
  toggleAccessibilityLabel: 'تفعيل فلتر الويب',
  safeSearchSectionTitle: 'البحث الآمن ويوتيوب',
  safeSearchSectionSubtitle:
    'فرض نتائج آمنة في Google وBing وDuckDuckGo وقفل YouTube على الوضع المقيّد. يتطلب تشغيل فلتر الويب.',
  safeSearchLabel: 'فرض البحث الآمن',
  safeSearchHint:
    'يثبّت البحث الآمن في Google، والوضع المقيّد في YouTube، وBing وDuckDuckGo على الإعداد الصارم. Android وAndroid TV وChrome.',
  safeSearchStrictNote:
    'يعمل YouTube بأشد مستوى تقييد: تُخفى التعليقات ويُحظر أيضًا بعض مقاطع الفيديو العادية. لا يستطيع الطفل إيقاف ذلك من حسابه.',
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
  infoLine4Android:
    'في الإعدادات، افتح "الشبكة والإنترنت" ثم "DNS الخاص" واختر "إيقاف".',
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
    '\u200FDNS الخاص مفعّل، لذا قد يُتجاوز فلتر المواقع غير المناسبة. أوقفه ليعمل الفلتر.',
  privateDnsBannerButton: 'فتح إعدادات DNS',
  vpnConsentBannerTitle: 'استعادة VPN فلتر الويب',
  vpnConsentBannerBody:
    '\u200FVPN الخاص بـKidGate متوقف. يحتاج فلتر مواقع البالغين إلى بقاء الـVPN متصلًا.',
  vpnConsentBannerButton: 'تفعيل VPN',
  iosOnlyNote: 'يستخدم مدة استخدام الجهاز على iOS',
  androidVpnNote: 'يستخدم VPN DNS محليًا على Android',
  macosFilterNote: 'يستخدم فلتر محتوى KidGate على Mac',

  heroSubtitleWindows:
    'يشغّل محلل KidGate الخاص على كمبيوتر الطفل لحظر المواقع غير المناسبة المعروفة في كل المتصفحات.',

  toggleHintWindows:
    'لا شيء للموافقة عليه على الكمبيوتر. تشغّل خدمة KidGate في الخلفية التصفية خلال ثوانٍ.',

  infoLine1Windows:
    'يشغّل KidGate محللاً على الكمبيوتر يتحقق من المواقع التي يجري البحث عنها ويحظر ما يقع ضمن فئاتك.',

  infoLine2Windows:
    'يُلزم KidGate متصفحات Chrome وEdge وFirefox بذلك عبر إعداد يطبّقه. لا يُطلب من طفلك الموافقة على شيء.',

  infoLine3Windows:
    'يحتاج إلى خدمة KidGate في الخلفية. إذا ظلت تصفية الويب متوقفة، أعد تثبيت KidGate على الكمبيوتر كمسؤول.',

  infoLine4Windows:
    'تقرأ التصفية أسماء المواقع فقط. لا ترى ما بداخل الصفحة، وقد يظل موقع بحث عنه المتصفح قبل قليل يفتح لبضع دقائق.',

  windowsFilterNote: 'يستخدم محلل KidGate الخاص على Windows',
  webFilteringNote:
    'يستخدم iOS فلتر البالغين في مدة استخدام الجهاز؛ ويستخدم Android قائمة حظر عبر VPN DNS محلي.',
  safeSearchAlertsNote:
    'لا يشارك Safari عبارات البحث؛ تتطلب تنبيهات الكلمات المفتاحية متصفحًا آمنًا مُدارًا.',
  webHistoryNote: 'يتطلب متصفحًا مزوّدًا بفلتر أو تقارير عبر DNS/VPN.',
  categoriesTitle: 'ما الذي يُحظر',
  categoriesSubtitle:
    'يستخدم KidGate قوائم نطاقات خاصة به. تغطي المواقع التي يصل إليها الأطفال فعلًا، وليس الويب بأكمله — استخدمها مع القوائم أدناه.',
  androidOnlyCategory: '\u200FAndroid فقط — لا يوجد في iOS تحكّم بالويب حسب الفئة',
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
    social: '\u200FFacebook و Instagram و TikTok و Discord',
    videoStreaming: '\u200FYouTube و Netflix و Twitch',
    music: '\u200FSpotify وSoundCloud وZing MP3',
    gaming: '\u200FRoblox و Steam ومنصات الألعاب',
    shopping: '\u200FAmazon و Shein والأزياء السريعة',
    aiCompanion: '\u200FCharacter.AI وReplika وروبوتات تقمّص الأدوار',
    aiAssistant: '\u200FChatGPT وGemini وCopilot',
    cryptoTrading: '\u200FBinance وCoinbase وتطبيقات التداول',
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
  askToOpenBlockedLabel: 'محظورة مؤخرًا',
  askToOpenPending: 'لقد طلبت موقعًا بالفعل. انتظر الرد.',
  askToOpenTooSoon: 'لقد أرسلت طلبًا للتو. حاول بعد دقيقة.',
  askToOpenTooMany: 'يمكنك طلب بضعة مواقع فقط في المرة الواحدة.',
  requestsTitle: 'طلبات المواقع',
  requestsSubtitle: 'المواقع التي طلب هذا الجهاز السماح بها.',
  siteRequestApproved: 'تم السماح بالموقع',
  siteRequestApprovedDescription:
    'أُضيف {{domain}} إلى «السماح دائمًا» على {{deviceName}}.',
  siteRequestDenied: 'تم رفض طلب الموقع',
  siteRequestDeniedDescription: 'ما زال {{domain}} محظورًا على {{deviceName}}.',
  siteRequestReceived: 'طلب فتح موقع',
  siteRequestReceivedDescription: 'طلب {{deviceName}} فتح {{domain}}.',
  privateDnsStep1: 'افتح الإعدادات على هذا الجهاز.',
  privateDnsStep2: 'اختر "الشبكة والإنترنت".',
  privateDnsStep3: 'افتح "DNS الخاص" واختر "إيقاف".',
  vpnConsentStepAllow:
    'اختر "موافق" في طلب VPN من Android. تبقى أيقونة المفتاح في شريط الحالة أثناء عمل الفلتر.',
} as const;
