/**
 * Arabic.
 *
 * The layout is deliberately not mirrored — see `isRtlLanguage` in
 * `src/i18n/languages.js` for why — so the copy here reads right-to-left inside
 * a left-to-right page, exactly as the mobile app renders it.
 *
 * Arabic uses six CLDR plural categories. Counted keys carry `_one`, `_two`,
 * `_few` (3–10) and `_many` (11–99); `_other` covers 100+ and, together with
 * the numeral, also reads correctly for zero.
 */
export default {
  meta: {
    title: 'KidGate — رقابة أبوية تحترم طفلك',
    description:
      'يساعد KidGate الآباء على إدارة وقت الشاشة وحظر التطبيقات وتصفية الويب والبقاء على تواصل — دون أن يسلب الطفل حريته.',
  },

  common: {
    loading: 'جارٍ التحميل…',
    signOut: 'تسجيل الخروج',
  },

  language: {
    title: 'اللغة',
    change: 'تغيير اللغة',
    system: 'لغة المتصفح',
    english: 'الإنجليزية',
    vietnamese: 'الفيتنامية',
    spanish: 'الإسبانية',
    portuguese: 'البرتغالية (البرازيل)',
    german: 'الألمانية',
    french: 'الفرنسية',
    japanese: 'اليابانية',
    korean: 'الكورية',
    arabic: 'العربية',
    indonesian: 'الإندونيسية',
    italian: 'الإيطالية',
    turkish: 'التركية',
    hindi: 'الهندية',
    russian: 'الروسية',
  },

  nav: {
    skip: 'الانتقال إلى المحتوى',
    main: 'الرئيسية',
    support: 'الدعم',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    signIn: 'دخول ولي الأمر',
  },

  footer: {
    blurb:
      'رقابة أبوية تساعد العائلات على الاتفاق حول وقت الشاشة بدلاً من الخلاف بشأنه.',
    product: 'المنتج',
    dashboard: 'لوحة ولي الأمر',
    supportGuides: 'الدعم والأدلة',
    contact: 'تواصل معنا',
    legal: 'الشؤون القانونية',
    privacyPolicy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    deleteData: 'حذف بياناتك',
    rights: '© {{year}} KidGate. جميع الحقوق محفوظة.',
    madeFor: 'صُنع للعائلات على iOS وAndroid.',
  },

  legalNote:
    'هذه الصفحة متاحة بالإنجليزية فقط، والنص الإنجليزي هو النسخة المعتمدة. راسلنا على [support@kidgate.app](mailto:support@kidgate.app) إذا احتجت مساعدة في فهم أي جزء منها.',

  store: {
    appleAria: 'تنزيل KidGate من App Store',
    appleSmall: 'تنزيل من',
    appleName: 'App Store',
    googleAria: 'الحصول على KidGate من Google Play',
    googleSmall: 'احصل عليه من',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: 'رقابة أبوية بالشكل الصحيح',
    heroTitle: 'احمِ أطفالك',
    heroTitleAccent: 'دون أن تسلبهم حريتهم.',
    heroLede:
      'يمنح KidGate الآباء تحكمًا هادئًا وواضحًا في وقت الشاشة والتطبيقات والأمان — بينما يبقى هاتف الطفل هاتفًا يشعر أنه ملكه.',
    heroCheck1: 'وقت الشاشة',
    heroCheck2: 'حظر التطبيقات',
    heroCheck3: 'تصفية الويب',
    heroCheck4: 'الموقع',
    heroCheck5: 'لوحة العائلة',

    phoneDailyLimit: 'الحد اليومي',
    phoneDailyLimitValue: 'استُخدم ساعة و24 دقيقة من 3 ساعات',
    phoneBlockedHours: 'ساعات الحظر',
    phoneScheduleOn: 'الجدول مفعّل',
    phoneLocation: 'الموقع',
    phoneLocationValue: 'في المدرسة · قبل 5 دقائق',
    phoneCheckIn: 'تم تسجيل الاطمئنان',

    trust1Title: 'بلا إعلانات إطلاقًا',
    trust1Text: 'لا تُستخدم بيانات الأطفال في الإعلانات أبدًا',
    trust2Title: 'احذفها متى شئت',
    trust2Text: 'نمحو حساب عائلتك وكل البيانات عند طلبك',
    trust3Title: 'iOS وAndroid',
    trust3Text: 'أدوات تحكم أصلية في وقت الشاشة على المنصتين',
    trust4Title: 'خطة واحدة لكل عائلة',
    trust4Text: 'كل أجهزة الآباء والأطفال باشتراك واحد',

    featuresEyebrow: 'المزايا',
    featuresTitle: 'كل ما يحتاجه ولي الأمر',
    featuresSub:
      'من الحدود اليومية إلى تنبيهات الطوارئ — تطبيق واحد لصحة العائلة الرقمية.',
    feature1Title: 'وقت الشاشة والحدود اليومية',
    feature1Text:
      'حدّد سقفًا يوميًا وساعات حظر للمدرسة والنوم. يقفل الجهاز نفسه عند انتهاء الوقت.',
    feature2Title: 'حظر التطبيقات',
    feature2Text:
      'اختر بالضبط التطبيقات التي يمكن لطفلك فتحها، محميةً برمز ولي الأمر، وفعّل الحظر عن بُعد.',
    feature3Title: 'حدود لكل تطبيق',
    feature3Text:
      'حدِّد لكل تطبيق سقفه الخاص فوق الحد اليومي — «نصف ساعة من TikTok» دون منعه تمامًا.',
    feature4Title: 'تصفية الويب وسجل التصفح',
    feature4Text:
      'ارفض مواقع البالغين والمقامرة، ثم اطّلع على المواقع التي زارها الهاتف فعلًا وتلك التي أُوقفت.',
    feature5Title: 'الموقع المباشر والأماكن',
    feature5Text:
      'اطّلع على آخر موقع لطفلك، وراجع السجل، واعرف حين يصل إلى مكان محفوظ أو يغادره.',
    feature6Title: 'تقرير التنقل',
    feature6Text:
      'الرحلات والمسافة وأعلى متوسط سرعة بين نقطتي موقع — ما يكفي لبدء حوار، لا لرادار سرعة.',
    feature7Title: 'الاطمئنان وSOS',
    feature7Text:
      'اطلب من طفلك تأكيد أنه بخير، واستقبل نداء SOS فوريًا مع الموقع وصورة عند الطوارئ.',
    feature8Title: 'تنبيهات الحماية والتطبيقات',
    feature8Text:
      'اعرف في اللحظة التي يُطفأ فيها إذن مهم — وعلى Android، حين يُثبَّت تطبيق أو يُزال.',
    feature9Title: 'مهام المكافأة والوقت الإضافي',
    feature9Text:
      'يكسب الأطفال دقائق إضافية بإنجاز المهام، أو يطلبون وقتًا أطول. وكلاهما يصل إلى هاتفك للاعتماد.',

    showcaseEyebrow: 'لوحة ولي الأمر',
    showcaseTitle: 'العائلة كلها على شاشة واحدة',
    showcaseSub:
      'وقت الشاشة والمحاولات المحظورة والموقع وكل ما يحتاج انتباهك — على هاتفك أو من أي متصفح.',
    showcaseTile1: 'وقت الشاشة اليوم',
    showcaseTile2: 'المحاولات المحظورة',
    showcaseTile3: 'يحتاج انتباهًا',
    showcaseCaption1: 'اقرأ التقارير من أي متصفح',
    showcaseCaption2: 'التغييرات تُعتمد من هاتفك',

    setupEyebrow: 'الإعداد',
    setupTitle: 'جاهز خلال دقائق',
    setupSub: 'لا حاجة لخبرة تقنية — التطبيق يرشدك في كل خطوة.',
    step1Title: 'جهّز جهازك',
    step1Text:
      'ثبّت KidGate واختر «هذا جهاز ولي أمر»، ثم سجّل الدخول بـ Google أو Apple أو البريد الإلكتروني.',
    step2Title: 'اربط جهاز طفلك',
    step2Text:
      'ثبّت KidGate على هاتف طفلك واربطه بمسح رمز QR. أقل من دقيقة.',
    step3Title: 'ضع قواعدك',
    step3Text:
      'اختر حدًّا يوميًا، واحظر التطبيقات والساعات، وفعّل الموقع — كل ذلك من هاتفك.',

    whyEyebrow: 'لماذا KidGate',
    whyTitle: 'بُني للثقة لا للمراقبة',
    whySub: 'مصمَّم لإبقاء الحوار بين الأب والطفل مفتوحًا.',
    why1Title: 'خطة واحدة للعائلة كلها',
    why1Text:
      'اشتراك واحد يغطي كل أجهزة الآباء والأطفال. يدفع مالك العائلة وحده.',
    why2Title: 'مصمَّم للتربية المشتركة',
    why2Text:
      'ادعُ وليّ أمر ثانيًا لإدارة الأطفال أنفسهم، بصلاحيات يعتمدها المالك.',
    why3Title: 'الخصوصية أولًا',
    why3Text:
      'لا نبيع البيانات الشخصية أبدًا ولا نستخدم بيانات الأطفال في الإعلانات. احذف كل شيء متى شئت.',
    why4Title: 'صادقون بشأن الحدود',
    why4Text:
      'نخبرك بما تستطيع كل منصة فرضه وما لا تستطيع، بدل الوعد بتحكم غير موجود.',

    faqEyebrow: 'الأسئلة الشائعة',
    faqTitle: 'ما يسأل عنه الآباء أولًا',
    faqSub: 'إجابات سريعة قبل التنزيل.',
    faq1Q: 'هل هناك فترة تجريبية مجانية؟',
    faq1A:
      'نعم. تبدأ التجربة عند ربط أول جهازَي ولي أمر وطفل، وتشمل كل مزايا Premium.',
    faq2Q: 'كم جهازًا يمكنني إدارته؟',
    faq2A:
      'اشتراك واحد يغطي عائلتك بأكملها — عدة أجهزة أطفال وعدة أولياء أمور على الخطة نفسها.',
    faq3Q: 'هل يستطيع طفلي إزالة KidGate أو تجاوزه؟',
    faq3A:
      'الإعدادات الحساسة محمية برمز ولي الأمر، وتنبيهات الحماية تخبرك فورًا إذا أُطفئ إذن أساسي على جهاز الطفل.',
    faq4Q: 'هل يمكنني إدارة كل شيء من الحاسوب؟',
    faq4A:
      'يمكنك تسجيل الدخول إلى لوحة الويب لقراءة التقارير. أما تغيير الحدود أو قفل جهاز فيُعتمد من هاتفك، لذا لا تكفي كلمة مرور مسروقة أبدًا.',
    faqMore: 'أسئلة أخرى؟ زر صفحة الدعم',

    ctaTitle: 'ابدأ حماية عائلتك اليوم',
    ctaSub: 'تجربة مجانية بوصول كامل. لا حاجة لبطاقة ائتمان للبدء.',
    ctaNote: 'ألغِ متى شئت من App Store أو Google Play.',
  },

  login: {
    title: 'دخول ولي الأمر',
    sub: 'استخدم الحساب نفسه الذي أنشأته في تطبيق KidGate. سيعرض لك الدخول هنا العائلة والأجهزة والإعدادات ذاتها.',
    notConfiguredTitle: 'لم تُضبط Firebase في هذا النشر.',
    notConfiguredBody:
      'اضبط متغيرات البيئة ‎VITE_FIREBASE_*‎ لتفعيل تسجيل الدخول.',
    qrWhy:
      'الاعتماد من هاتفك هو الطريقة الوحيدة لفتح أدوات التحكم — يبقى قفل الجهاز وتغيير الحدود في التطبيق. الطرق أدناه تسجّل دخولك لقراءة التقارير.',
    orViewOnly: 'أو دخول للاطلاع فقط',
    google: 'المتابعة بحساب Google',
    googleBusy: 'جارٍ فتح Google…',
    apple: 'المتابعة بحساب Apple',
    appleBusy: 'جارٍ فتح Apple…',
    orEmail: 'أو استخدم بريدك الإلكتروني',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'you@example.com',
    password: 'كلمة المرور',
    submit: 'تسجيل الدخول',
    submitBusy: 'جارٍ تسجيل الدخول…',
    forgot: 'هل نسيت كلمة المرور؟',
    resetNeedsEmail:
      'أدخل بريدك الإلكتروني أولًا، ثم اختر «هل نسيت كلمة المرور؟».',
    resetSent: 'أُرسلت رسالة إعادة تعيين كلمة المرور إلى {{email}}.',
    foot: 'تُنشأ حسابات KidGate في تطبيق الهاتف — أما لوحة الويب فتسجّل الدخول إلى عائلة قائمة. جديد هنا؟ ثبّت التطبيق واربط جهاز طفل أولًا.',
  },

  qr: {
    start: 'تسجيل الدخول بتطبيق KidGate',
    generating: 'جارٍ إنشاء الرمز…',
    step1: 'افتح KidGate على هاتفك.',
    step2: 'انتقل إلى *الإعدادات ← تسجيل الدخول على الويب*.',
    step3: 'امسح هذا الرمز ثم اعتمده.',
    waiting: 'بانتظار الاعتماد · ينتهي خلال {{time}}',
    signingIn: 'تم الاعتماد. جارٍ تسجيل الدخول…',
    expired: 'انتهت صلاحية هذا الرمز.',
    failed: 'لم يكتمل تسجيل الدخول.',
    newCode: 'إظهار رمز جديد',
    tryAgain: 'أعد المحاولة',
  },

  authError: {
    generic: 'حدث خطأ ما. أعد المحاولة.',
    invalidEmail: 'عنوان البريد الإلكتروني هذا لا يبدو صحيحًا.',
    userDisabled: 'هذا الحساب مُعطَّل.',
    userNotFound: 'لا يوجد حساب KidGate بهذا البريد الإلكتروني.',
    wrongPassword: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
    tooManyRequests: 'محاولات كثيرة. انتظر بضع دقائق ثم أعد المحاولة.',
    popupClosed: 'أُغلقت نافذة تسجيل الدخول قبل الانتهاء.',
    popupCancelled: 'أُلغي تسجيل الدخول.',
    popupBlocked:
      'حظر متصفحك نافذة تسجيل الدخول. اسمح بالنوافذ المنبثقة لهذا الموقع ثم أعد المحاولة.',
    accountExists:
      'هذا البريد مسجَّل بالفعل بطريقة دخول أخرى. استخدم الطريقة التي أعددتها في التطبيق.',
    operationNotAllowed:
      'طريقة تسجيل الدخول هذه غير مفعّلة بعد في هذا المشروع.',
    unauthorizedDomain:
      'هذا النطاق غير مصرَّح به في إعدادات Firebase Authentication.',
    invalidCustomToken:
      'رابط تسجيل الدخول هذا لم يعد صالحًا. أظهر رمز QR جديدًا.',
    webRejected: 'رُفض الطلب على الهاتف.',
    webExpired: 'انتهت صلاحية الرمز. أنشئ رمزًا جديدًا.',
    noFunctionsUrl:
      'لم يُضبط عنوان Cloud Functions (‎VITE_FIREBASE_FUNCTIONS_URL‎).',
    sessionExpired: 'انتهت جلستك. سجّل الدخول من جديد.',
  },

  live: {
    checkingSession: 'جارٍ التحقق من جلستك…',
    loadingFamily: 'جارٍ تحميل عائلتك…',
    loadFailedTitle: 'تعذّر تحميل عائلتك',
    noAccess:
      'لا يملك هذا الحساب صلاحية الوصول إلى أي عائلة في KidGate. سجّل الدخول بحساب ولي الأمر الذي تستخدمه في التطبيق.',
  },

  time: {
    never: 'أبدًا',
    justNow: 'الآن',
    minutes_one: 'قبل دقيقة',
    minutes_two: 'قبل دقيقتين',
    minutes_few: 'قبل {{count}} دقائق',
    minutes_many: 'قبل {{count}} دقيقة',
    minutes_other: 'قبل {{count}} دقيقة',
    hours_one: 'قبل ساعة',
    hours_two: 'قبل ساعتين',
    hours_few: 'قبل {{count}} ساعات',
    hours_many: 'قبل {{count}} ساعة',
    hours_other: 'قبل {{count}} ساعة',
    days_one: 'قبل يوم',
    days_two: 'قبل يومين',
    days_few: 'قبل {{count}} أيام',
    days_many: 'قبل {{count}} يومًا',
    days_other: 'قبل {{count}} يوم',
  },

  viz: {
    hours: '{{count}} س',
    minutes: '{{count}} د',
    hoursMinutes: '{{hours}} س {{minutes}} د',
    none: '—',
    byDay: 'وقت الشاشة حسب اليوم',
    limit: 'الحد {{value}}',
    screenTime: 'وقت الشاشة',
    bonus: 'مكافأة',
    bonusEarned: 'المكافأة المكتسبة',
    overLimit: 'تجاوز الحد اليومي',
    dailyLimit: 'الحد اليومي',
    ofLimit: 'من {{value}}',
    noLimit: 'لا حد محدد',
    blocked: 'محظور',
    blockedHours: 'ساعات الحظر',
    day0: 'أحد',
    day1: 'إثنين',
    day2: 'ثلاثاء',
    day3: 'أربعاء',
    day4: 'خميس',
    day5: 'جمعة',
    day6: 'سبت',
  },

  perm: {
    screenTime: 'وقت استخدام الشاشة',
    location: 'الموقع',
    notifications: 'الإشعارات',
    camera: 'الكاميرا',
    backgroundAppRefresh: 'تحديث التطبيقات في الخلفية',
    overlay: 'العرض فوق التطبيقات الأخرى',
    batteryOptimization: 'بطارية دون قيود',
    exactAlarm: 'المنبهات الدقيقة',
    accessibility: 'إمكانية الوصول',
  },

  webCat: {
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

  dash: {
    tabOverview: 'نظرة عامة',
    tabScreen: 'وقت الشاشة',
    tabApps: 'التطبيقات والويب',
    tabSafety: 'الأمان',
    tabControls: 'أدوات التحكم',

    children: 'الأطفال',
    noChildren: 'لم تُربط أي أجهزة أطفال بعد.',
    manage: 'الإدارة',
    parents_one: 'ولي أمر واحد',
    parents_two: 'وليّا أمر',
    parents_few: '{{count}} أولياء أمور',
    parents_many: '{{count}} وليّ أمر',
    parents_other: '{{count}} وليّ أمر',
    devices_one: 'جهاز طفل واحد',
    devices_two: 'جهازا أطفال',
    devices_few: '{{count}} أجهزة أطفال',
    devices_many: '{{count}} جهاز أطفال',
    devices_other: '{{count}} جهاز أطفال',
    planPremium: 'Premium',
    planTrial: 'تجربة',
    fallbackFamily: 'عائلتك',
    fallbackDevice: 'جهاز الطفل',

    statusOnline: 'متصل',
    statusOffline: 'غير متصل',
    statusLocked: 'مقفل',

    stateAllowed: 'مسموح',
    stateDenied: 'مُطفأ',
    stateNotDetermined: 'لم يُطلب بعد',
    stateRestricted: 'مقيَّد',
    stateUnavailable: 'غير متاح',
    stateUnknown: 'غير معروف',

    lastActive: 'آخر نشاط {{when}}',
    checkIn: 'اطمئنان',
    sending: 'جارٍ الإرسال…',
    lockDevice: 'قفل الجهاز',
    unlock: 'إلغاء القفل',
    working: 'جارٍ التنفيذ…',
    lockNeedsApp: 'يتطلب القفل تطبيق KidGate على هاتفك',

    viewOnlyTitle: 'للاطلاع فقط.',
    viewOnlyBody:
      'لقفل جهاز أو تغيير الحدود أو اعتماد الطلبات، سجّل الخروج ثم ادخل من جديد بمسح رمز QR بتطبيق KidGate — فالاعتماد من هاتف ولي أمر مرتبط هو ما يفتح أدوات التحكم. أما طلبات الاطمئنان فتعمل من هنا في الحالتين.',

    noDeviceTitle: 'لا يوجد جهاز طفل بعد',
    noDeviceBody:
      'افتح KidGate على هاتفك، وانتقل إلى *العائلة ← + ← ربط جهاز طفل*، ثم امسح رمز QR الظاهر على جهاز طفلك. سيظهر هنا بعد ثوانٍ من الربط.',

    toastCheckIn: 'سيصل {{name}} طلب اطمئنان.',
    toastTimeApproved: 'تم اعتماد الوقت الإضافي.',
    toastCheckInResent: 'أُعيد إرسال طلب الاطمئنان.',

    tileScreenToday: 'وقت الشاشة اليوم',
    tileSameAsAverage: 'مثل متوسط 7 أيام',
    tileDeltaUp: '↑ {{percent}}٪ مقارنةً بمتوسط 7 أيام',
    tileDeltaDown: '↓ {{percent}}٪ مقارنةً بمتوسط 7 أيام',
    tileBlocked: 'المحاولات المحظورة',
    tileBlockedMeta: 'تطبيقات أُوقفت منذ التثبيت',
    tileSites: 'مواقع مُصفّاة',
    tileCategoriesHit_one: 'فئة واحدة متأثرة',
    tileCategoriesHit_two: 'فئتان متأثرتان',
    tileCategoriesHit_few: '{{count}} فئات متأثرة',
    tileCategoriesHit_many: '{{count}} فئة متأثرة',
    tileCategoriesHit_other: '{{count}} فئة متأثرة',
    tileNothingBlocked: 'لم يُحظر شيء بعد',
    tileAttention: 'يحتاج انتباهًا',
    tileOpenItems: 'عناصر مفتوحة بالأسفل',
    tileAllClear: 'كل شيء على ما يرام',

    cardScreenTime: 'وقت الشاشة',
    cardScreenTimeSub: 'آخر 14 يومًا، مقارنةً بالحد اليومي',
    cardRecent: 'النشاط الأخير',
    cardRecentSub: 'الأحدث أولًا',
    cardRecentEmpty:
      'لا سجل بعد. ستظهر هنا عمليات القفل والتطبيقات المحظورة وتنبيهات الأماكن ومزامنة وقت الشاشة من هذا الجهاز.',
    cardAttention: 'يحتاج انتباهك',
    cardAttentionSub: '{{count}} مفتوح',
    cardAttentionEmpty: 'لا شيء للمراجعة. الحماية تبدو سليمة.',
    cardProtection: 'حالة الحماية',
    cardProtectionSub: 'فُحصت {{when}}',

    attnMoreMinutes: 'طلب {{name}} {{minutes}} دقيقة إضافية',
    attnReason: '«{{reason}}» · {{when}}',
    attnCheckInMissed: 'لم يُستجب لطلب اطمئنان',
    attnCheckInMissedMeta: 'أُرسل {{when}} · بلا رد',
    attnPermissionOff: '{{permission}} مُطفأ',
    attnPermissionOffMeta:
      'تبقى الحماية أضعف حتى يُستعاد هذا على جهاز الطفل',
    attnLimitReached: 'بلغ الحد اليومي — أُقفل الجهاز',
    attnLimitReachedMeta: 'استُخدم {{used}} اليوم',
    attnBatteryLow: 'البطارية منخفضة ({{level}}٪)',
    attnBatteryLowMeta: 'قد تتوقف تحديثات الموقع إذا نفدت بطارية الهاتف',
    attnReview: 'مراجعة',
    attnResend: 'إعادة الإرسال',
    attnHowToFix: 'كيفية الإصلاح',
    attnUnlock: 'إلغاء القفل',
    attnAppOnly: 'متاح في تطبيق KidGate',

    todayTitle: 'اليوم',
    todaySub: 'مقارنةً بالحد اليومي وأي مكافأة مكتسبة',
    used: 'المستخدم',
    left: 'المتبقي',
    dailyLimit: 'الحد اليومي',
    bonusToday: 'مكافأة اليوم',
    off: 'مُطفأ',
    on: 'مُفعّل',
    topAppsTitle: 'أكثر التطبيقات استخدامًا اليوم',
    topAppsSub: 'تظهر حدود كل تطبيق كعلامة',
    trendTitle: 'اتجاه وقت الشاشة',
    trendSub: 'آخر {{count}} يوم',
    rangeDays: '{{count}} ي',
    blockedHoursTitle: 'ساعات الحظر',
    blockedHoursSub_one: 'فترة زمنية واحدة · يبقى الجهاز مقفلًا داخل الكتل المظللة',
    blockedHoursSub_two: 'فترتان زمنيتان · يبقى الجهاز مقفلًا داخل الكتل المظللة',
    blockedHoursSub_few:
      '{{count}} فترات زمنية · يبقى الجهاز مقفلًا داخل الكتل المظللة',
    blockedHoursSub_many:
      '{{count}} فترة زمنية · يبقى الجهاز مقفلًا داخل الكتل المظللة',
    blockedHoursSub_other:
      '{{count}} فترة زمنية · يبقى الجهاز مقفلًا داخل الكتل المظللة',
    scheduleOff: 'الجدول مُطفأ',

    appUsageTitle: 'استخدام التطبيقات اليوم',
    appUsageSub: 'الوقت المستغرق لكل تطبيق',
    appBlockingTitle: 'حظر التطبيقات',
    appBlockingSub: 'يُختار على جهاز الطفل برمز ولي الأمر',
    blockingLabel: 'الحظر',
    appsBlocked: 'تطبيقات محظورة',
    categories: 'الفئات',
    perAppHint:
      'تعمل حدود كل تطبيق باستقلال عن قائمة الحظر — «30 دقيقة من TikTok» قرار مختلف عن «لا TikTok».',
    perDay: '{{value}}/يوم',
    webActivityTitle: 'نشاط الويب',
    webActivitySub: 'أكثر النطاقات زيارةً، آخر 30 يومًا',
    colDomain: 'النطاق',
    colVisits: 'الزيارات',
    colBlocked: 'المحظورة',
    colLastSeen: 'آخر ظهور',
    filterRefusedTitle: 'ما رفضه المرشِّح',
    filterRefusedSub_one: 'استعلام محظور واحد، آخر 30 يومًا',
    filterRefusedSub_two: 'استعلامان محظوران، آخر 30 يومًا',
    filterRefusedSub_few: '{{count}} استعلامات محظورة، آخر 30 يومًا',
    filterRefusedSub_many: '{{count}} استعلامًا محظورًا، آخر 30 يومًا',
    filterRefusedSub_other: '{{count}} استعلام محظور، آخر 30 يومًا',
    nothingBlockedYet: 'لم يُحظر شيء بعد.',
    filterHintIos:
      'على iOS يستخدم المرشِّح ضوابط Apple لمحتوى البالغين — أما الحظر حسب الفئة فمتاح على Android فقط.',
    filterHintAndroid: 'تُطبَّق الفئات عبر مرشِّح DNS داخل الجهاز.',

    locationTitle: 'الموقع',
    locationSharingOff: 'المشاركة مُطفأة',
    locationUpdated: 'حُدّث {{when}}',
    locationWaiting: 'بانتظار أول تحديث',
    lastKnownLocation: 'آخر موقع معروف',
    noPlaces:
      'لا أماكن محفوظة بعد. أضف مكانًا في التطبيق لتصلك تنبيهات وصول طفلك أو مغادرته.',
    placeRadius: '{{meters}} م · ',
    placeArrive: 'الوصول',
    placeLeave: 'المغادرة',
    placeNoAlerts: 'بلا تنبيهات',
    sosTitle: 'تنبيهات SOS',
    sosSub: 'إشارات طوارئ من جهاز الطفل',
    sosEmpty:
      'لا تنبيهات SOS. جرّباها معًا مرة واحدة كي يعرف كلاكما كيف تعمل.',
    sosAcknowledged: 'تم الاطلاع',
    sosActive: 'نشط',

    checkInsTitle: 'طلبات الاطمئنان',
    checkInsSub: 'اطلب من طفلك تأكيد أنه بخير',
    checkInSafe: 'أكّد أنه بخير',
    checkInMissed: 'بلا رد',
    checkInWaiting: 'بالانتظار',
    checkInPhotoRequested: 'طُلبت صورة وموقع',
    checkInNoReply: 'لا رد بعد',
    checkInPhotoSkipped: 'تم تخطّي الصورة',
    checkInPhotoAttached: 'أُرفقت صورة',
    checkInNoPhoto: 'لم تُطلب صورة',
    sendCheckIn: 'أرسل طلب اطمئنان الآن',

    protectionAlertsTitle: 'تنبيهات الحماية',
    protectionAlertsSub_one: 'حدث واحد منذ التثبيت',
    protectionAlertsSub_two: 'حدثان منذ التثبيت',
    protectionAlertsSub_few: '{{count}} أحداث منذ التثبيت',
    protectionAlertsSub_many: '{{count}} حدثًا منذ التثبيت',
    protectionAlertsSub_other: '{{count}} حدث منذ التثبيت',
    protectionAlertsHint:
      'تنبيه الحماية يعني أن KidGate يستطيع فرض أقل مما ضبطته. أعِد الإذن على جهاز الطفل لإزالته.',

    limitCardTitle: 'الحد اليومي',
    limitCardSub: 'حدِّد الدقائق المتاحة كل يوم',
    limitAria: 'دقائق الحد اليومي',
    limitScaleMin: '30 د',
    limitScaleMax: '8 س',
    limitHint:
      'تُضاف دقائق المكافأة من المهام وطلبات الوقت المعتمدة فوق الحد، لذلك اليوم فقط.',
    whatsOnTitle: 'ما هو مُفعَّل',
    whatsOnSub: 'تُزامَن التغييرات مع جهاز الطفل',
    rowBlockedHours: 'ساعات الحظر',
    rowBlockedHoursDesc_one: 'فترة زمنية واحدة · {{list}}',
    rowBlockedHoursDesc_two: 'فترتان زمنيتان · {{list}}',
    rowBlockedHoursDesc_few: '{{count}} فترات زمنية · {{list}}',
    rowBlockedHoursDesc_many: '{{count}} فترة زمنية · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} فترة زمنية · {{list}}',
    rowAppBlocking: 'حظر التطبيقات',
    rowAppBlockingApps_few: '{{count}} تطبيقات',
    rowAppBlockingApps_many: '{{count}} تطبيقًا',
    rowAppBlockingApps_one: '{{count}} تطبيق',
    rowAppBlockingApps_other: '{{count}} تطبيق',
    rowAppBlockingApps_two: 'تطبيقان',
    rowAppBlockingCategories_few: '{{count}} فئات',
    rowAppBlockingCategories_many: '{{count}} فئة',
    rowAppBlockingCategories_one: '{{count}} فئة',
    rowAppBlockingCategories_other: '{{count}} فئة',
    rowAppBlockingCategories_two: 'فئتان',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'مرشِّح الويب',
    rowWebFilterDesc_one: 'فئة واحدة مرفوضة',
    rowWebFilterDesc_two: 'فئتان مرفوضتان',
    rowWebFilterDesc_few: '{{count}} فئات مرفوضة',
    rowWebFilterDesc_many: '{{count}} فئة مرفوضة',
    rowWebFilterDesc_other: '{{count}} فئة مرفوضة',
    rowLocation: 'مشاركة الموقع',
    rowLocationDesc: 'آخر تحديث {{when}}',
    rowLocationNone: 'لا موقع بعد',
    toggleInApp: 'غيّر هذا من تطبيق KidGate',

    webFilterCatsTitle: 'فئات مرشِّح الويب',
    webFilterCatsSub: 'أنواع المحتوى المحظورة',
    dnsHint:
      'تُرفض دائمًا خوادم DNS المشفّرة أثناء عمل المرشِّح — فتركها متاحة هو ما يسمح للمتصفح بالالتفاف على كل الفئات الأخرى.',
    rewardTasksTitle: 'مهام المكافأة',
    rewardTasksSub: 'اكسب دقائق إضافية بإنجاز المهام',
    rewardTaskMeta: '+{{minutes}} د · {{cadence}}',
    rewardTaskWaiting: ' · بانتظار اعتمادك',
    approve: 'اعتماد',
    approveInApp: 'اعتمِده في تطبيق KidGate',
  },

  support: {
    title: 'دعم KidGate',
    updated: 'نحن هنا للمساعدة',

    contactTitle: 'تواصل معنا',
    contactEmail:
      '**البريد الإلكتروني:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**زمن الرد:** خلال 24 ساعة (الاثنين–الجمعة)',
    contactNote:
      'عند التواصل، أرفق عنوان البريد الإلكتروني لحساب ولي الأمر في KidGate ووصفًا موجزًا للمشكلة كي نساعدك أسرع.',

    startTitle: 'البدء',
    start1:
      '**1. جهّز جهاز ولي الأمر.** ثبّت KidGate وافتح التطبيق واختر *هذا جهاز ولي أمر*. سجّل الدخول بـ Google أو Apple أو البريد الإلكتروني، ثم سمِّ عائلتك.',
    start2:
      '**2. اضبط رمز ولي الأمر.** انتقل إلى *الإعدادات ← الأمان* واضبط رمزًا من 6 أرقام. تحتاجه لتغيير الإعدادات الحساسة ولاختيار التطبيقات المحظورة على جهاز الطفل. لا تشاركه مع أطفالك.',
    start3:
      '**3. اربط جهاز الطفل.** ثبّت KidGate على جهاز طفلك واختر *هذا جهاز طفل*. من جهاز ولي الأمر، افتح *العائلة ← + ← ربط جهاز طفل*، ثم امسح رمز QR الظاهر على جهاز الطفل (أو أدخل الرمز المكوّن من 6 أحرف). أكّد الاتصال على جهاز الطفل.',
    start4:
      '**4. امنح الأذونات على جهاز الطفل.** افتح شاشة *الحالة* على جهاز الطفل واسمح بكل إذن يطلبه KidGate — على Android: الإشعارات، والوصول إلى بيانات الاستخدام، والعرض فوق التطبيقات الأخرى، وإمكانية الوصول، والبطارية بلا قيود؛ وعلى iOS: *السماح باستخدام التطبيقات والمواقع* (وقت الشاشة). لن تعمل أدوات التحكم بالكامل قبل تفعيلها.',
    start5:
      '**5. اضبط أدوات التحكم.** من جهاز ولي الأمر، افتح بطاقة جهاز الطفل واضبط الحد اليومي وساعات الحظر والتطبيقات المحظورة ومرشِّح الويب ومزايا الموقع.',
    startNote:
      'يتضمن التطبيق أيضًا دليلًا تفصيليًا: *الإعدادات ← دليل الاستخدام*، ويغطي ربط الأجهزة والأذونات وأدوات التحكم اليومية ومزايا الأمان.',

    faqTitle: 'الأسئلة الشائعة',

    faq1Q: 'هل يمكنني إدارة عائلتي من الحاسوب؟',
    faq1A:
      'نعم. افتح [لوحة الويب](/dashboard) وسجّل الدخول بالحساب نفسه الذي تستخدمه في التطبيق — Google أو Apple أو بريدك وكلمة المرور. ستجد العائلة والأجهزة والتقارير والإعدادات ذاتها. أما إنشاء الحسابات وربط الأجهزة فيبقيان في تطبيق الهاتف.',

    faq2Q: 'كيف أربط جهاز ولي الأمر بجهاز الطفل؟',
    faq2A:
      'على جهاز الطفل، افتح KidGate واختر *هذا جهاز طفل* — سيظهر رمز QR ورمز من 6 أحرف. من جهاز ولي الأمر، افتح *العائلة ← + ← ربط جهاز طفل* وامسح رمز QR (مستحسن) أو أدخل الرمز يدويًا. ثم أكّد اسم ولي الأمر على جهاز الطفل. تنتهي صلاحية الرموز — فإن فشل الربط، اضغط *رمز جديد* على جهاز الطفل وأعد المحاولة.',

    faq3Q: 'هل يستطيع وليّا أمر إدارة العائلة نفسها؟',
    faq3A:
      'نعم. من جهاز مالك العائلة، افتح *العائلة ← + ← إضافة جهاز ولي أمر آخر* وشارك رمز QR أو رمز الدعوة. يثبّت ولي الأمر الآخر KidGate ويسجّل الدخول كولي أمر ثم يختار *العائلة ← + ← الانضمام إلى العائلة*. بعدها يعتمد المالك الطلب. اشتراك واحد يغطي العائلة كلها؛ ويدفع المالك وحده.',

    faq4Q: 'كيف تعمل الفترة التجريبية المجانية؟',
    faq4A:
      'تبدأ التجربة عند ربط أول جهازَي ولي أمر وطفل، وتمنح وصولًا كاملًا لكل المزايا. إزالة جهاز طفل لا تعيد ضبط التجربة. وعند انتهائها، اشترك في Premium لمواصلة استخدام KidGate.',

    faq5Q: 'كيف ألغي اشتراكي؟',
    faq5A:
      'تُحصَّل الاشتراكات عبر App Store أو Google Play، لا من KidGate مباشرةً. على iOS: *الإعدادات ← اسمك ← الاشتراكات*. على Android: *Google Play ← أيقونة الملف الشخصي ← المدفوعات والاشتراكات ← الاشتراكات*. يتجدد الاشتراك تلقائيًا ما لم تُلغِه قبل انتهاء الفترة الحالية بـ 24 ساعة على الأقل.',

    faq6Q: 'كيف أستعيد مشترياتي؟',
    faq6A:
      'من جهاز ولي الأمر، افتح شاشة *الخطط* واضغط *استعادة المشتريات*. تأكد من تسجيل دخولك بحساب المتجر نفسه الذي استخدمته في الشراء الأصلي. لاحظ أن مالك العائلة وحده يمكنه الاشتراك أو استعادة المشتريات.',

    faq7Q: 'لماذا لا تظهر بيانات وقت الشاشة؟',
    faq7A:
      'تأتي بيانات الاستخدام من جهاز الطفل. تحقق من أنه متصل، ثم افتح KidGate عليه وانظر إلى شاشة *الحالة* — يجب أن يظهر كل صف أذونات على أنه مسموح (على Android، الوصول إلى بيانات الاستخدام ضروري لتتبع وقت الشاشة). وقد تستغرق التقارير دقائق للمزامنة.',

    faq8Q: 'لماذا لا يعمل القفل أو ساعات الحظر؟',
    faq8A:
      'على Android، يحتاج القفل إلى تفعيل *العرض فوق التطبيقات الأخرى* ومساعد *إمكانية الوصول*، إضافةً إلى بطارية بلا قيود. وعلى أجهزة Xiaomi وSamsung وOppo وVivo وما شابهها، اسمح أيضًا بالتشغيل التلقائي وأزل KidGate من أي قائمة «تطبيقات نائمة» (انظر *الحالة ← إبقاء KidGate يعمل* على جهاز الطفل). وعلى iOS يعتمد القفل على تصريح وقت الشاشة. وإن أُطفئ إذن لاحقًا، سيصلك تنبيه حماية على جهاز ولي الأمر.',

    faq9Q: 'كيف أحظر تطبيقات محددة؟',
    faq9A:
      'يتم اختيار التطبيقات على جهاز الطفل: افتح *KidGate ← الإعدادات*، وأدخل رمز ولي الأمر، واختر *اختيار التطبيقات للحظر*، ثم احفظ. بعدها، من جهاز ولي الأمر، افتح شاشة *التطبيقات المحظورة* للجهاز وفعّل *تفعيل حظر التطبيقات*. على iOS قد تخفي Apple أسماء التطبيقات الدقيقة عن جهاز ولي الأمر — وهذا قيد من المنصة.',

    faq10Q: 'لماذا لا يتحدث موقع طفلي؟',
    faq10A:
      'يجب السماح بالموقع لـ KidGate على جهاز الطفل، ويحتاج الجهاز إلى اتصال بالشبكة. افتح شاشة *الموقع* للجهاز من جهاز ولي الأمر واسحب للأسفل للتحديث. قد تؤخّر أوضاع توفير البطارية التحديثات، وقد يكون GPS أقل دقة داخل المباني.',

    faq11Q: 'كيف أزيل KidGate من جهاز طفلي؟',
    faq11A:
      'أزل الجهاز من تطبيق ولي الأمر أولًا (افتح الجهاز في *العائلة* واختر الإزالة)، ثم أزل التطبيق من جهاز الطفل.',

    faq12Q: 'كيف أحذف حسابي وبياناتي؟',
    faq12A:
      'من تطبيق ولي الأمر، انتقل إلى *الإعدادات ← الحساب ← حذف الحساب*. يحذف ذلك نهائيًا حساب عائلتك وكل البيانات — الأجهزة والنشاط وسجل المواقع وصور SOS — لكل أولياء الأمور والأطفال. راجع صفحة [حذف الحساب والبيانات](/delete-account) لمعرفة كل الخيارات، بما فيها الحذف دون تثبيت التطبيق.',

    legalTitle: 'الشؤون القانونية',
    legalDeletion: 'حذف الحساب والبيانات',
  },
}
