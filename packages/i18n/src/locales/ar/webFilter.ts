export const webFilter = {
  title: 'فلتر الويب',
  fallbackDeviceName: 'جهاز الطفل',
  toastUpdateFailed: 'تعذّر تحديث فلتر الويب. حاول مرة أخرى.',
  heroTitle: 'فلترة مواقع البالغين',
  heroSubtitleIos:
    'يستخدم فلتر محتوى الويب في مدة استخدام الجهاز من Apple للحد من محتوى البالغين في Safari والمتصفحات داخل التطبيقات على جهاز الطفل.',
  heroSubtitleAndroid:
    'يستخدم VPN DNS محليًا على جهاز Android الخاص بالطفل لحظر نطاقات البالغين المعروفة في المتصفحات وكثير من التطبيقات.',
  toggleLabel: 'تفعيل فلتر الويب',
  toggleHintIos: 'يتطلب إذن مدة استخدام الجهاز على جهاز الطفل.',
  toggleHintAndroid:
    'يجب أن يوافق الطفل مرة واحدة على اتصال VPN من KidGate. أبقِ الـVPN مفعّلًا ليعمل الفلتر.',
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
  openHistorySubtitle: 'اطّلع على المواقع التي وصل إليها هذا الهاتف وما تم حظره',
  category: {
    adult: 'محتوى للبالغين',
    gambling: 'المقامرة',
    dating: 'المواعدة',
    drugs: 'المخدرات والكحول',
    violence: 'العنف والتطرف',
    piracy: 'القرصنة',
    social: 'الشبكات الاجتماعية',
    videoStreaming: 'بث الفيديو',
    gaming: 'الألعاب',
    shopping: 'التسوق',
  },
  categoryHint: {
    adult: 'مواقع صريحة وللبالغين',
    gambling: 'الكازينوهات والرهانات وصناديق الغنائم',
    dating: 'تطبيقات المواعدة والدردشة مع الغرباء',
    drugs: 'الحشيش والسجائر الإلكترونية والكحول',
    violence: 'منتديات العنف الدموي والتطرف',
    piracy: 'التورنت والبث المقرصن',
    social: 'Facebook و Instagram و TikTok و Discord',
    videoStreaming: 'YouTube و Netflix و Twitch',
    gaming: 'Roblox و Steam ومنصات الألعاب',
    shopping: 'Amazon و Shein والأزياء السريعة',
  },
} as const;
