export const activities = {
  title: 'الأنشطة',
  subtitleAllDevices: 'أحدث الأحداث على جميع الأجهزة',
  subtitleTimelineForDevice: 'سجل النشاط لـ {{deviceName}}',
  fallbackDeviceName: 'الجهاز',
  liveBadge: 'مباشر',
  errorTitle: 'تعذر تحميل النشاط',
  tryAgain: 'إعادة المحاولة',

  emptyTitleAll: 'لا توجد أنشطة حتى الآن',
  emptyTitleDevice: 'لا توجد أنشطة لهذا الجهاز',
  emptyDescriptionAll:
    'ستظهر هنا أحداث القفل وإلغاء القفل وتنبيهات SOS الخاصة بأجهزة أطفالك.',
  emptyDescriptionDevice:
    'اختر جهازًا آخر أو انتظر حتى تظهر أحداث القفل وإلغاء القفل وSOS لهذا الجهاز.',

  guestEmptyTitle: 'نشاطك',
  guestEmptyDescription:
    'بعد ربط جهاز الطفل، ستظهر هنا أحداث القفل وإلغاء القفل وSOS والتطبيقات في الوقت الفعلي.',
  guestSignInButton: 'تسجيل الدخول',
  guestCreateAccount: 'إنشاء حساب ولي أمر',
  guestSubtitle: 'سجّل الدخول لمتابعة نشاط أجهزة أطفالك.',

  guestPreviewHeading: 'ما الذي ستراه',
  guestPreviewLock: 'الجهاز مقفل',
  guestPreviewSos: 'تنبيه SOS',
  guestPreviewScreenTime: 'تحديث وقت استخدام الشاشة',
  guestPreviewHint: 'مثال — ستظهر الأحداث الحقيقية بعد ربط جهاز.',

  activityTypeLocked: 'مقفل',
  activityTypeUnlocked: 'تم إلغاء القفل',
  activityTypeAppOpened: 'تم فتح التطبيق',
  activityTypeAppBlocked: 'تم حظر التطبيق',
  activityTypeAppInstalled: 'تم تثبيت التطبيق',
  activityTypeAppRemoved: 'تمت إزالة التطبيق',
  activityTypePlaceEnter: 'تم الوصول إلى الموقع',
  activityTypePlaceExit: 'تم مغادرة الموقع',
  activityTypeTamper: 'الحماية',
  activityTypeScreenTime: 'وقت استخدام الشاشة',
  activityTypeEmergency: 'طوارئ',
  activityTypeUnknown: 'نشاط',

  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'فُتح تطبيق محظور وأغلقه KidGate.',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: 'تم تثبيت تطبيق جديد على جهاز الطفل.',

  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'تمت إزالة تطبيق من جهاز الطفل.',

  placeEnterTitle: 'تم الوصول إلى {{placeName}}',
  placeEnterBody: 'دخل جهاز الطفل إلى موقع محفوظ.',

  placeExitTitle: 'تمت مغادرة {{placeName}}',
  placeExitBody: 'غادر جهاز الطفل موقعًا محفوظًا.',

  tamperTitle: 'تم تعطيل إذن حماية',
  tamperFallbackTitle: 'تم تعطيل إذن حماية',
  tamperFallbackBody: 'تم تعطيل أحد أذونات الحماية على جهاز الطفل.',

  tamperOverlayTitle: 'تم تعطيل إذن "الظهور فوق التطبيقات الأخرى"',
  tamperOverlayBody:
    'قد لا تظهر شاشة القفل فوق التطبيقات الأخرى حتى تتم إعادة تفعيل هذا الإذن.',

  tamperAccessibilityTitle: 'تم تعطيل إمكانية الوصول',
  tamperAccessibilityBody:
    'قد لا تعمل ميزة حظر التطبيقات وفرض القيود بشكل صحيح حتى تتم إعادة تفعيل إمكانية الوصول.',
  tamperUsageAccessTitle: 'تم إيقاف الوصول إلى استخدام التطبيقات',
  tamperUsageAccessBody:
    'قد تتوقف حدود التطبيقات وساعات الحظر حتى يتمكن KidGate من قراءة استخدام التطبيقات على جهاز الطفل مرة أخرى.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'تم إيقاف الوصول إلى وقت استخدام الشاشة',
  tamperScreenTimeIosBody:
    'قد تتوقف حدود التطبيقات وساعات الحظر حتى يُسمح بالوصول إلى وقت استخدام الشاشة على جهاز الطفل مرة أخرى.',
  tamperUsageAccessAndroidTitle: 'تم إيقاف الوصول إلى الاستخدام',
  tamperUsageAccessAndroidBody:
    'قد تتوقف حدود التطبيقات وساعات الحظر حتى تتم إعادة تفعيل الوصول إلى الاستخدام لـKidGate على جهاز الطفل.',

  tamperBatteryTitle: 'تم تعطيل وضع البطارية غير المقيد',
  tamperBatteryBody:
    'قد يقوم النظام بإيقاف KidGate مؤقتًا حتى يتم ضبط استخدام البطارية على "غير مقيد" مرة أخرى.',

  tamperExactAlarmTitle: 'تم إيقاف المنبهات والتذكيرات',
  tamperExactAlarmBody:
    'قد تبدأ ساعات الحظر أو تنتهي متأخرة حتى يُسمح بالمنبهات والتذكيرات مرة أخرى.',

  tamperNotificationsTitle: 'تم تعطيل الإشعارات',
  tamperNotificationsBody:
    'قد لا تصل الأوامر عن بُعد وتنبيهات الوالدين إلى هذا الجهاز بشكل موثوق.',

  tamperLocationTitle: 'تم تعطيل الموقع',
  tamperLocationBody:
    'لن يتلقى الوالدان تحديثات الموقع حتى تتم إعادة السماح بخدمة الموقع.',

  tamperCameraTitle: 'تم تعطيل الكاميرا',
  tamperCameraBody:
    'قد يتعذر إرسال صور SOS وCheck-In حتى يتم السماح باستخدام الكاميرا مرة أخرى.',

  tamperBackgroundRefreshTitle: 'تم تعطيل تحديث التطبيقات في الخلفية',
  tamperBackgroundRefreshBody:
    'قد يتم تحديث KidGate بوتيرة أقل في الخلفية حتى تتم إعادة تفعيل تحديث التطبيقات في الخلفية.',

  tamperDeviceClockTitle: 'تم تغيير التاريخ أو الوقت',
  tamperDeviceClockBody:
    'لم يعد وقت هذا الجهاز مطابقًا للوقت الصحيح. سيستمر وقت استخدام الشاشة وساعات الحظر في الاعتماد على الوقت الصحيح.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: 'تم تعطيل إذن "الظهور فوق التطبيقات الأخرى".',
  tamperAccessibility: 'تم تعطيل خدمة إمكانية الوصول.',
  tamperUsageAccess: 'تم تعطيل إذن الوصول إلى الاستخدام.',
  tamperBattery: 'تم تعطيل وضع البطارية غير المقيد.',
  tamperExactAlarm: 'تم إيقاف إذن المنبهات والتذكيرات.',
  tamperNotifications: 'تم تعطيل إذن الإشعارات.',
  tamperLocation: 'تم تعطيل إذن الموقع.',
  tamperCamera: 'تم تعطيل إذن الكاميرا.',
  tamperBackgroundRefresh: 'تم تعطيل تحديث التطبيقات في الخلفية.',

  filterAllDevices: 'جميع الأجهزة',
  dateToday: 'اليوم',
  dateYesterday: 'أمس',

  filterByDevice: 'تصفية حسب {{label}}',

  openFullSosHistory: 'عرض سجل SOS الكامل',

  unknownDevice: 'جهاز غير معروف',

  basicActivityNote: 'يتم تسجيل أحداث القفل وإلغاء القفل والجهاز ضمن قسم الأنشطة.',
  tamperUninstallProtectionTitle: 'تم إيقاف الحماية من إلغاء التثبيت',
  tamperUninstallProtectionBody: 'أصبح بالإمكان إزالة KidGate من هذا الهاتف.',
} as const;
