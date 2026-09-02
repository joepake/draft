export const family = {
  title: 'العائلة',
  connectButton: 'ربط',
  connectAccessibility: 'إضافة جهاز طفل أو أحد الوالدين',
  addDeviceTitle: 'إضافة جهاز',
  addDeviceMessage: 'ما الذي تريد ربطه؟',
  addChildOption: 'إضافة جهاز طفل',
  addJoinFamilyOption: 'الانضمام إلى عائلة',
  addParentOption: 'دعوة أحد الوالدين',
  loginWebOption: 'تسجيل الدخول على الويب',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: 'من يستخدم {{deviceName}}؟',
  assignSheetBody: 'يُحتسب وقت الشاشة والنجوم للطفل الذي تختاره.',
  assignSheetNobody: 'لا أحد',
  assignSheetNobodyHint: 'جهاز مشترك — لا يُحتسب لأحد.',
  assignSheetAddAndAssign: 'إضافة وتعيين',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: 'حماية {{childName}} الآن؟',
  quickProtectBody:
    'فعّل مجموعة أولية من الحمايات. يمكنك ضبط كل شيء بدقة لاحقًا من ملف الطفل.',
  quickProtectBedtime: 'ساعات الحظر وقت النوم',
  quickProtectBedtimeHint:
    'يحظر استخدام الجهاز طوال الليل، من 10:00 مساءً إلى 7:00 صباحًا.',
  quickProtectDailyLimit: 'الحد اليومي لوقت الشاشة',
  quickProtectDailyLimitHint: '{{minutes}} دقيقة في اليوم، تُحتسب عبر كل أجهزته.',
  quickProtectWebFilter: 'فلتر الويب',
  quickProtectWebFilterHint: 'يحظر المحتوى المخصص للبالغين وفئات خطرة أخرى.',
  quickProtectWebFilterPremium: 'ميزة Premium — مضمّنة مع الاشتراك.',
  quickProtectApply: 'تفعيل الحماية',
  quickProtectSkip: 'ليس الآن',
  quickProtectDone: 'الحماية مفعّلة. يمكنك ضبطها بدقة في أي وقت.',
  quickProtectPartial: 'تعذر حفظ بعض الحمايات. يرجى المحاولة مرة أخرى من ملف الطفل.',
  pairDeviceFirstTitle: 'لم يُقترن أي جهاز بعد',
  pairDeviceFirstBody:
    'اقرن جهازًا لهذا الطفل أولاً — من تبويب العائلة، اضغط على أيقونة المسح أو "+" واختر إضافة جهاز طفل. يبدأ هذا التحكم في العمل فور اتصال جهاز.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'قفل الكل',
  unlockAll: 'إلغاء قفل الكل',
  lockAllA11y: 'قفل جميع أجهزة {{childName}}',
  unlockAllA11y: 'إلغاء قفل جميع أجهزة {{childName}}',
  childDetailUnassignTitle: 'إزالته من الطفل؟',
  childDetailUnassignBody:
    'لن يُحتسب {{deviceName}} بعد الآن لـ {{childName}} وسينتقل إلى غير مخصص. يبقى مقترنًا ومحميًا.',
  childDetailUnassignConfirm: 'إزالة',
  childDetailUnassignA11y: 'إزالة {{deviceName}} من هذا الطفل',
  // The fold control on a group heading.
  collapseGroupA11y: 'طيّ {{name}}',
  expandGroupA11y: 'توسيع {{name}}',
  assignDeviceCta: 'تعيين لطفل…',
  unassignedHint: 'هذه الأجهزة لا تُحتسب لأحد بعد.',
  unassignedHintMember: 'مالك العائلة هو من يخصّص هذه الأجهزة للأطفال.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'أطفال بلا جهاز',
  // Child detail screen.
  childDetailStarsWell: 'نجوم هذا الأسبوع',
  childStarsA11y: 'نجوم هذا الأسبوع: {{count}}',
  childDetailDevicesTitle: 'الأجهزة',
  childDetailAssignMore: 'تعيين جهاز آخر…',
  childDetailAssignSheetTitle: 'تعيين جهاز لـ{{childName}}',
  childDetailNoDevices:
    'لا توجد أجهزة بعد. عيّن جهازًا أدناه أو اقرن جهازًا جديدًا من تبويب العائلة.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'لا توجد أجهزة بعد. مالك العائلة هو من يحدّد الجهاز الخاص بكل طفل.',
  childDetailEditNameTitle: 'تعديل الاسم',
  childDetailColorLabel: 'اللون',
  scanButtonAccessibility: 'مسح رمز',
  scanTitle: 'مسح رمز',
  scanBody:
    'وجّه الكاميرا نحو جهاز الطفل، أو دعوة عائلية، أو الرمز الظاهر على الكمبيوتر.',
  manualCodeLabel: 'أدخل الرمز المكوّن من 6 أحرف',
  manualInstructions: 'أدخل الرمز المكوّن من 6 أحرف الظاهر على الجهاز الآخر.',

  headerHintEmpty: 'إدارة أجهزة أطفالك وحمايتها',

  headerHintGuest:
    'استكشف التطبيق بحرية، وسجّل الدخول عندما تكون مستعدًا لربط الأجهزة.',

  familyCardManage: 'إدارة العائلة والوالدين والأجهزة',

  familyCardJoined: 'انضممت كأحد الوالدين',

  chipDeviceCount: '{{count}} أجهزة',
  chipDeviceCount_one: 'جهاز واحد',
  chipDeviceCount_two: 'جهازان',
  chipDeviceCount_many: '{{count}} جهازًا',
  chipDeviceCount_other: '{{count}} جهاز',

  chipOnlineCount: '{{count}} متصل',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} عمليات تسجيل وصول',
  chipCheckInCount_one: 'عملية تسجيل وصول واحدة',
  chipCheckInCount_two: 'عمليتا تسجيل وصول',
  chipCheckInCount_many: '{{count}} عملية تسجيل وصول',
  chipCheckInCount_other: '{{count}} عملية تسجيل وصول',

  chipRequestCount: '{{count}} طلبات',
  chipRequestCount_one: 'طلب واحد',
  chipRequestCount_two: 'طلبان',
  chipRequestCount_many: '{{count}} طلبًا',
  chipRequestCount_other: '{{count}} طلب',

  chipNeedsSetupCount: '{{count}} بحاجة إلى إعداد',
  chipNeedsSetupCount_one: '{{count}} بحاجة إلى إعداد',

  chipProtectedCount: '{{count}} محمية',

  childDevicesProtected: '{{count}} أجهزة محمية',

  chipHealthWarnCount: '{{count}} بحاجة إلى إعداد',
  chipHealthWarnCount_one: '{{count}} بحاجة إلى إعداد',

  chipHealthInactiveCount: '{{count}} غير نشط منذ أكثر من 24 ساعة',

  chipBlockedCount: '{{count}} مقفلة',

  healthProtected: 'محمي',
  buildOutdated: 'يتوفر تحديث',

  healthNeedsSetup: 'يتطلب الإعداد',

  healthOffline: 'غير متصل',

  cardWhereLabel: 'الموقع',

  cardWhereAccessibility: 'فتح موقع {{deviceName}}',

  cardTodayLabel: 'اليوم',

  cardTodayUsed: 'استُخدم {{used}}',

  cardTodayNoData: 'لا توجد بيانات استخدام حتى الآن',

  cardTodayAccessibility: 'فتح تقرير استخدام {{deviceName}}',

  emptyTitle: 'لا توجد أجهزة أطفال بعد',

  emptyDescription: 'أضف جهاز طفلك لبدء مراقبة وقت الشاشة واستخدام التطبيقات.',

  setupFamilyTitle: 'إعداد العائلة',

  setupFamilyDescription:
    'أنشئ عائلة لربط أجهزة أطفالك أو انضم إلى عائلة موجودة باستخدام دعوة من أحد الوالدين.',

  createFamilyButton: 'إنشاء عائلة',

  joinFamilyButton: 'الانضمام إلى عائلة',

  switchToJoinTitle: 'هل تريد الانضمام إلى عائلة أخرى؟',

  switchToJoinMessage:
    'سيؤدي هذا إلى إزالة عائلتك الفارغة حتى تتمكن من الانضمام إلى عائلة أخرى باستخدام رمز الدعوة. إذا كان هناك جهاز طفل مرتبط بالفعل، فيجب معالجة ذلك أولاً.',

  guestEmptyTitle: 'ابدأ عائلتك من هنا',

  guestEmptyDescription:
    'سجّل الدخول لربط أجهزة أطفالك، وتلقي التنبيهات، ووضع حدود صحية لوقت الشاشة.',

  guestConnectButton: 'تسجيل الدخول',

  guestCreateAccount: 'إنشاء حساب ولي أمر',

  guestBenefitLimitsTitle: 'وقت الشاشة وحدود التطبيقات',

  guestBenefitLimitsBody: 'اقفل الأجهزة وحدد جداول يومية.',

  guestBenefitAlertsTitle: 'تنبيهات SOS والنشاط',

  guestBenefitAlertsBody: 'تلقَّ إشعارًا فورًا عند الحاجة إلى انتباهك.',

  guestBenefitLocationTitle: 'الموقع والاطمئنان',

  guestBenefitLocationBody: 'اعرف مكان طفلك واطلب منه تأكيد أنه بخير.',

  stepsHeading: 'البدء',

  step1Title: 'اضغط على "إضافة جهاز طفل"',

  step1Description: 'سيظهر هنا رمز QR للاقتران، جاهز للمسح.',

  step2Title: 'امسح الرمز من جهاز الطفل',

  step2Description:
    'نزّل KidGate على هاتف أو جهاز الطفل اللوحي، واختر "هذا جهاز طفل"، ثم امسح الرمز.',

  connectChildButton: 'ربط جهاز الطفل',
  listHint: 'اسحب الجهاز إلى اليسار لإزالته',

  removeAlertTitle: 'إزالة الجهاز؟',

  removeAlertMessage:
    'سيتم فصل {{deviceName}} عن حسابك. وسيتم حذف جميع طلبات الوقت وسجل النشاط المرتبطين به.',

  toastRemoveFailed: 'تعذر إزالة الجهاز. يرجى المحاولة مرة أخرى.',

  swipeRemoving: 'جارٍ الإزالة…',

  swipeRemove: 'إزالة',

  deviceNotFound: 'الجهاز غير موجود',

  deviceMayHaveBeenRemoved: 'ربما تمت إزالة هذا الجهاز من حسابك.',

  deviceNotFoundError: 'الجهاز غير موجود',

  deviceRemovedAlertTitle: 'تمت إزالة الجهاز',

  deviceRemovedAlertMessage:
    'قام أحد الوالدين بإزالة هذا الجهاز من حساب العائلة. اختر دور "الطفل" مرة أخرى لإعادة ربطه.',

  deviceNotRegistered: 'هذا الجهاز غير مسجل بعد.',

  defaultDeviceName: 'جهاز الطفل',

  fallbackDeviceName: 'جهاز الطفل',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'iPhone لولي الأمر',

  parentAndroid: 'Android لولي الأمر',

  childIphone: 'iPhone للطفل',

  parentIpad: 'iPad لولي الأمر',

  childIpad: 'iPad للطفل',

  childAndroid: 'Android للطفل',

  deviceFallbackName: 'الجهاز',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'كمبيوتر Windows',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'يرجى إدخال اسم للجهاز.',

  deviceNameTooLong: 'يجب ألا يتجاوز اسم الجهاز {{max}} حرفًا.',

  lastActiveDate: 'آخر نشاط: {{date}}',

  lastActiveUnknown: 'لا يوجد نشاط حديث',

  thisDevice: 'هذا الجهاز',

  thisDeviceYou: 'هذا الجهاز (أنت)',

  // See the RLM note in ar/sos.ts. Extra bite here: {{name}} is a user-typed
  // device name, so an LTR paragraph would also mirror the parentheses around
  // أنت and render them back to front.
  namedDeviceYou: '\u200F{{name}} (أنت)',

  deviceNameSaved: 'تم تحديث اسم الجهاز.',

  deviceSectionTitle: 'الجهاز',

  deviceNameLabel: 'اسم الجهاز',

  editDeviceNameTitle: 'تعديل اسم الجهاز',

  editDeviceNameSubtitle:
    'يمكن فقط لمالك العائلة إعادة تسمية الأجهزة. الحد الأقصى {{maxLength}} حرفًا.',

  deviceNameInputLabel: 'اسم الجهاز',

  deviceNamePlaceholder: 'iPhone الخاص بسارة',

  unableToUpdateDeviceName: 'تعذر تحديث اسم الجهاز. يرجى المحاولة مرة أخرى.',

  osLabelFallback: 'نظام التشغيل',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — يتطلب انتباهًا فوريًا',

  waitingForCheckIn: 'بانتظار الاطمئنان',

  timeRequestsWaiting: '{{count}} طلبًا لوقت الشاشة قيد الانتظار',

  timeRequestsWaiting_one: 'طلب واحد لوقت الشاشة قيد الانتظار',

  timeRequestsWaiting_two: 'طلبان لوقت الشاشة قيد الانتظار',

  timeRequestsWaiting_few: '{{count}} طلبات لوقت الشاشة قيد الانتظار',

  timeRequestsWaiting_other: '{{count}} طلب لوقت الشاشة قيد الانتظار',

  youPausedThisDevice: 'لقد قمت بقفل هذا الجهاز',

  lockSentWaitingForDevice: 'أُرسل القفل — في انتظار الجهاز',

  lockNotAppliedOnDevice: 'لم يطبّق هذا الجهاز القفل',

  blockedHoursActiveNow: 'ساعات الحظر مفعلة حاليًا',

  inactiveOpenKidGate: 'غير نشط — افتح KidGate على هذا الجهاز',

  protectionNeedsSetup: '{{issueLabel}} يحتاج إلى إعداد',

  dailyLimitOn: 'الحد اليومي مفعّل',

  deviceReady: 'جاهز',

  sos: 'SOS',

  deviceLocked: 'الجهاز مقفل',

  deviceUnlocked: 'تم إلغاء قفل الجهاز',

  parentPausedChildDevice: 'قام {{actorName}} بقفل جهاز الطفل هذا.',

  parentRestoredChildDevice: 'قام {{actorName}} بإلغاء قفل جهاز الطفل هذا.',

  parentFallback: 'أحد الوالدين',

  formerParent: 'ولي أمر غادر العائلة',
  batteryPercent: '{{percent}}٪',
  batteryAccessibility: 'البطارية {{percent}} بالمئة',
  batteryChargingAccessibility: 'البطارية {{percent}} بالمئة، قيد الشحن',
  childDetailPerDevice: 'لكل جهاز — اختر أيها',
  childDetailNotAvailable: 'غير متاح',
  childDetailNotAvailableReason: 'غير متاح على أي من أجهزته',
  childDetailProtectionOk: 'محمي',
  childDetailProtectionAttention: '{{count}} أجهزة تحتاج إلى انتباه',
  childDetailProtectionAttention_one: 'جهاز واحد يحتاج إلى انتباه',
  childDetailProtectionAttention_two: 'جهازان يحتاجان إلى انتباه',
  childDetailProtectionAttention_few: '{{count}} أجهزة تحتاج إلى انتباه',
  childDetailProtectionAttention_many: '{{count}} جهازًا يحتاج إلى انتباه',
  childDetailProtectionSheetTitle: 'الحماية حسب الجهاز',
  childDetailRemoveTitle: 'إزالة هذا الطفل',
  childDetailRemovingButton: 'جارٍ الإزالة…',
  childDetailOnlineCount: '{{online}} من {{total}} متصل',
  childDetailBudgetTitle: 'الحد اليومي',
  childDetailSectionControls: 'قواعد تسري على كل أجهزته',
  childDetailSectionSafety: 'مجمَّع من كل أجهزته',
  childDetailSectionAlerts: 'كل أجهزته في قائمة واحدة',
  childDetailScopeAll: 'كل الأجهزة',
  childDetailTodayWell: 'الاستخدام اليوم',
  childDetailUnassignAction: 'إلغاء التعيين',
  childDetailLimitShared: 'الإجمالي عبر كل أجهزته',
} as const;
