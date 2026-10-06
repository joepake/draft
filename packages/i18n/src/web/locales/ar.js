/**
 * Arabic.
 *
 * `apps/site` mirrors its layout for Arabic; `apps/dashboard` does not yet, so
 * there the copy reads right-to-left inside a left-to-right page, exactly as the
 * mobile app renders it — see `isRtlLanguage` in `src/web/languages.js` for why.
 * Either way, a string that starts with Latin text needs a leading RLM
 * (`arabicBidi.test.ts`).
 *
 * Arabic uses six CLDR plural categories. Counted keys carry `_one`, `_two`,
 * `_few` (3–10) and `_many` (11–99); `_other` covers 100+ and, together with
 * the numeral, also reads correctly for zero.
 */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} من {{total}} تطبيقًا تستحق النظر',
    summaryClear: 'لا شيء ملحوظ بين {{total}} تطبيقًا',
    summaryFlaggedExtension: '{{flagged}} من {{total}} إضافة Chrome تستحق النظر',
    summaryClearExtension: 'لا شيء مقلق بين {{total}} إضافة Chrome',
  },
  meta: {
    title: '‏KidGate — رقابة أبوية تحترم طفلك',
    description:
      'يساعد KidGate الآباء على إدارة وقت استخدام الشاشة وحظر التطبيقات وتصفية الويب والبقاء على تواصل — دون أن يسلب الطفل حريته.',
  },

  common: {
    comingSoon: 'قريباً',
    loading: 'جارٍ التحميل…',
    signOut: 'تسجيل الخروج',
    crashTitle: 'توقّفت هذه الصفحة عن العمل',
    crashBody:
      'غالباً ما يحل تحديث الصفحة المشكلة. لم تتغيّر إعدادات عائلتك ولا أجهزة طفلك.',
    crashReload: 'تحديث الصفحة',
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
    plans: 'الخطط',
    about: 'من نحن',
    support: 'الدعم',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    dashboard: 'لوحة التحكم',
  },

  footer: {
    blurb:
      'رقابة أبوية تساعد العائلات على الاتفاق حول وقت استخدام الشاشة بدلاً من الخلاف بشأنه.',
    product: 'المنتج',
    about: 'من نحن',
    dashboard: 'لوحة ولي الأمر',
    supportGuides: 'الدعم والأدلة',
    download: 'التنزيل',
    contact: 'تواصل معنا',
    legal: 'الشؤون القانونية',
    privacyPolicy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    deleteData: 'حذف بياناتك',
    rights: '‏© {{year}} KidGate. جميع الحقوق محفوظة.',
    madeFor: 'مصنوع للعائلات على iPhone وAndroid وMac وWindows وAndroid TV وChrome.',
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
    chromeName: 'سوق Chrome الإلكتروني',
  },

  home: {
    heroBadge: 'رقابة أبوية كما ينبغي',
    heroTitle: 'احمِ أطفالك',
    heroTitleAccent: 'دون أن تسلبهم حريتهم.',
    heroLede:
      'يمنح KidGate الآباء تحكمًا هادئًا وواضحًا في وقت استخدام الشاشة والتطبيقات والأمان — بينما يبقى هاتف الطفل هاتفًا يشعر أنه ملكه.',
    heroCheck1: 'وقت استخدام الشاشة',
    heroCheck2: 'حظر التطبيقات',
    heroCheck3: 'فلتر الويب',
    heroCheck4: 'الموقع',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'الحد اليومي',
    phoneBlockedHours: 'ساعات الحظر',
    phoneScheduleOn: 'الجدول مفعّل',
    phoneLocation: 'الموقع',
    phoneCheckIn: 'تم تسجيل الاطمئنان',

    trust1Title: 'بلا إعلانات إطلاقًا',
    trust1Text: 'لا تُستخدم بيانات الأطفال في الإعلانات أبدًا',
    trust2Title: 'الحذف متى شئت',
    trust2Text: 'نمحو حساب عائلتك وكل البيانات عند طلبك',
    trust3Title: 'الهاتف والحاسوب والتلفاز',
    trust3Text: '‏iPhone وAndroid وMac وWindows وAndroid TV وChrome في حساب عائلي واحد',
    trust4Title: 'خطة واحدة لكل عائلة',
    trust4Text: 'كل أجهزة الآباء والأطفال باشتراك واحد',

    featuresEyebrow: 'المزايا',
    featuresTitle: 'كل ما يحتاجه ولي الأمر',
    featuresSub:
      'من الحدود اليومية إلى تنبيهات الطوارئ — تطبيق واحد لصحة العائلة الرقمية.',
    feature1Title: 'وقت استخدام الشاشة والحدود اليومية',
    feature1Text:
      'حدّد سقفًا يوميًا وساعات حظر للمدرسة والنوم. يقفل الجهاز نفسه عند انتهاء الوقت.',
    feature2Title: 'حظر التطبيقات',
    feature2Text:
      'اختر التطبيقات التي لا يمكن لطفلك فتحها، محميةً برمز PIN الوالدين، وفعّل الحظر عن بُعد.',
    feature3Title: 'حدود التطبيقات',
    feature3Text:
      'على Android وAndroid TV والحواسيب، حدِّد لكل تطبيق سقفه الخاص — «نصف ساعة من TikTok» دون منعه تمامًا.',
    feature4Title: 'فلتر الويب وسجل التصفح',
    feature4Text:
      'احجب مواقع البالغين والمقامرة وإيذاء النفس وغيرها على كل الأجهزة؛ ومع Premium اطّلع أيضًا على المواقع التي جرى طلبها.',
    feature5Title: 'الموقع والأماكن',
    feature5Text:
      'اطّلع على مكان طفلك حتى 10 مرات في اليوم؛ ويضيف Premium الموقع المباشر وتنبيهات للأماكن المحفوظة.',
    feature6Title: 'الاطمئنان وSOS',
    feature6Text:
      'اطلب من طفلك تأكيد أنه بخير؛ وعند الطوارئ يرسل لك هاتفه نداء SOS فوريًا مع الموقع.',
    feature7Title: 'تنبيهات الحماية والتطبيقات',
    feature7Text:
      'اعرف في اللحظة التي يُطفأ فيها إذن مهم على هاتف طفلك، ووافق على التطبيقات الجديدة على Android أو Android TV أو الحاسوب قبل أن تُفتح.',
    feature8Title: 'مهام المكافآت والوقت الإضافي',
    feature8Text:
      'يكسب الأطفال دقائق إضافية ونجومًا بإنجاز المهام، أو يطلبون وقتًا أطول — وأنت من يعتمد الأمرين من هاتفك.',

    feature9Title: 'قفل الجهاز',
    feature9Text:
      'اقفل الجهاز الآن وافتحه عندما تشاء — وقت العشاء أو الواجبات أو قاعدة لم يلتزم بها.',
    feature10Title: 'التقرير الأسبوعي',
    feature10Text:
      'كل اثنين: وقت الشاشة، والمعدّل اليومي، وما جرى حظره، ومقارنة الأسبوع بالذي قبله.',
    feature11Title: 'سجل YouTube والفيديو',
    feature11Text:
      'مقاطع فيديو YouTube وShorts التي شاهدها طفلك على Android وفي Chrome، إضافةً إلى مقاطع الفيديو على Android TV. لا تعمل على iPhone.',
    feature12Title: 'سجل النشاط',
    feature12Text:
      'كل ما حدث بالترتيب — جهاز فُتح قفله، وطلب جرى الرد عليه، وتنبيه صدر؛ تعرض الخطة المجانية نشاط اليوم، ويحتفظ Premium بـ 30 يومًا.',
    featurePremium: 'Premium',
    platformsTitle: '‏KidGate واحد، أينما كانت الشاشة',
    platformsSub:
      'القواعد نفسها والحساب العائلي نفسه على الهاتف والحاسوب وAndroid TV، وفلتر الويب نفسه في Chrome. تطبيق الحاسوب يأتي من هذا الموقع لا من متجر.',

    showcaseEyebrow: 'لوحة ولي الأمر',
    showcaseTitle: 'العائلة كلها على شاشة واحدة',
    showcaseSub:
      'وقت استخدام الشاشة والمحاولات المحظورة والموقع وكل ما يحتاج انتباهك — على هاتفك أو من أي متصفح.',
    showcaseCaption1: 'اقرأ التقارير من أي متصفح',
    showcaseCaption2: 'التغييرات تُعتمد من هاتفك',

    setupEyebrow: 'الإعداد',
    setupTitle: 'جاهز خلال دقائق',
    setupSub: 'لا حاجة لخبرة تقنية — التطبيق يرشدك في كل خطوة.',
    step1Title: 'جهّز جهازك',
    step1Text:
      'ثبّت KidGate واختر «هذا جهاز أحد الوالدين»، ثم سجّل الدخول بـ Google أو البريد الإلكتروني — أو بـ Apple على iPhone.',
    step2Title: 'اربط جهاز طفلك',
    step2Text: 'ثبّت KidGate على هاتف طفلك واربطه بمسح رمز QR. أقل من دقيقة.',
    step3Title: 'ضع قواعدك',
    step3Text:
      'اختر الحد اليومي وساعات الحظر، وفعّل الموقع وحظر التطبيقات من هاتفك. أما التطبيقات المراد حظرها فتُختار مرة واحدة على جهاز طفلك، برمز PIN الوالدين.',

    whyEyebrow: 'لماذا KidGate',
    whyTitle: 'بُني للثقة لا للمراقبة',
    whySub: 'مصمَّم لإبقاء الحوار بين الوالدين والطفل مفتوحًا.',
    why1Title: 'خطة واحدة للعائلة كلها',
    why1Text:
      'اشتراك Premium واحد يغطي كل أجهزة الآباء والأطفال، ويدفع مالك العائلة وحده. أما الخطة المجانية فتُبقي جهاز طفل واحد تحت المراقبة.',
    why2Title: 'مصمَّم للتربية المشتركة',
    why2Text:
      'ادعُ وليّ أمر ثانيًا لإدارة الأطفال أنفسهم، بصلاحيات يعتمدها المالك. ويمكن أن تضمّ العائلة حتى 3 أولياء أمور في الخطة المجانية وخلال الفترة التجريبية، وحتى 6 مع Premium.',
    why3Title: 'الخصوصية أولًا',
    why3Text:
      'لا نبيع البيانات الشخصية أبدًا ولا نستخدم بيانات الأطفال في الإعلانات. احذف كل شيء متى شئت.',
    why4Title: 'صادقون بشأن الحدود',
    why4Text: 'نخبرك بما تستطيع كل منصة فرضه وما لا تستطيع، بدل الوعد بتحكم غير موجود.',

    onlyEyebrow: 'في KidGate وحده',
    onlyTitle: 'ما لن تجده في مكان آخر',
    onlySub:
      'ستة أمور راجعناها مقابل التطبيقات التي يقارننا بها الأهل. كل واحد منها يذكر المنصة التي يصحّ عليها.',
    only1Title: 'وتلفاز غرفة الجلوس أيضًا',
    only1Text:
      'يحصل Android TV على الحد اليومي وساعات الحظر وحظر التطبيقات وفلتر الويب. والحظر على التلفاز في حدود المستطاع — يُعاد التطبيق المحظور إلى الشاشة الرئيسية — ولا يوجد SOS ولا طلب وقت إضافي من الأريكة. ولا يشارك التلفاز موقعه أيضًا. معظم أدوات الرقابة الأبوية تتوقف عند الهاتف.',
    only2Title: 'تنبيهات رسائل تبقى على الهاتف',
    only2Text:
      'مع Premium على Android، تُقارَن الرسائل على الجهاز نفسه بقوائم كلمات مفتاحية بما يصل إلى ثلاث لغات تختارها من بين 14، وما يغادر الهاتف هو الكلمة أو العبارة المطابقة لا المحادثة أبدًا. وشيء واحد يغيّر ذلك، ولا يحدث إلا إن طلبته أنت: فعّل التأكيد بالذكاء الاصطناعي، فتُرسَل الرسالة الواردة الملتبسة إلى Gemini من Google ليُحكم عليها، حتى لا توقظك كلمة عادية.',
    only3Title: 'كل تطبيق، لا قائمة تطبيقات',
    only3Text:
      'تأتي التنبيهات من إشعارات أي تطبيق يستخدمه طفلك — لا من قائمة ثابتة بالتطبيقات المدعومة — ومما يكتبه في أبرز تطبيقات الدردشة والتواصل الاجتماعي والألعاب، ومنها Zalo وLINE وKakaoTalk. على Android فقط، ومع Premium.',
    only4Title: 'مخرج للطفل',
    only4Text:
      'الضغط المطوّل على SOS خمس ثوانٍ على الهاتف يصلك فورًا مع الموقع — وعلى Android يفتح أيضًا المكالمات والخرائط والرسائل لمدة خمس دقائق، حتى والهاتف مقفل. الطفل الذي يستطيع طلب المساعدة من شاشة القفل لا سبب لديه ليقاوم التطبيق.',
    only5Title: 'قواعد تصمد بلا إنترنت',
    only5Text:
      'تُطبَّق ساعات الحظر والحد اليومي على الجهاز نفسه، فنزع الراوتر لا يغيّر شيئًا. حتى التلفاز يقبل رمز PIN الوالدين من دون أي اتصال.',
    only6Title: 'تقدير حين يستحقه الأسبوع',
    only6Text:
      'مع Premium، يترك كل تقرير أسبوعي مكانًا لما سار جيدًا — حدّ جرى احترامه، سهر انتهى، مهمة أُنجزت — ولا يقوله إلا حين يكون الأسبوع قد قيس فعلًا.',

    faqEyebrow: 'الأسئلة الشائعة',
    faqTitle: 'ما يسأل عنه الآباء أولًا',
    faqSub: 'إجابات سريعة قبل التنزيل.',
    faq1Q: 'هل هناك فترة تجريبية مجانية؟',
    faq1A:
      'نعم. تبدأ الفترة التجريبية البالغة 7 أيام عند ربط أول جهاز ولي أمر وجهاز طفل، وتشمل كل ميزات Premium. وعند انتهائها، تستمر القواعد التي ضبطتها — الحد اليومي وساعات الحظر والتطبيقات المحظورة وفلتر الويب وقفل الجهاز وطلبات الوقت الإضافي ومهام المكافآت — في العمل مجانًا على كل أجهزة الأطفال، ويواصل الجهاز الذي تختار إبقاءه تحت المراقبة مشاركة موقعه. أما النشاط المباشر والسجل والتقارير الأسبوعية وتتبّع الموقع فهي ما يعيده Premium.',
    faq2Q: 'كم جهازًا يمكنني إدارته؟',
    faq2A:
      'يغطي Premium حتى 25 جهازًا للأطفال و6 من أولياء الأمور بمن فيهم أنت، ويرسل كل جهاز النشاط. وتغطي الخطة المجانية حتى 8 أجهزة للأطفال و3 من أولياء الأمور. يستمر كل جهاز في تطبيق القواعد التي ضبطتها، لكن الجهاز الذي تختاره وحده يرسل النشاط؛ أما البقية فيمكن فيها تخفيف تلك القواعد لا تشديدها.',
    faq3Q: 'هل يستطيع طفلي إزالة KidGate أو تجاوزه؟',
    faq3A:
      'الإعدادات الحساسة محمية برمز PIN الوالدين، وتنبيهات الحماية تخبرك فورًا إذا أُطفئ إذن أساسي على جهاز الطفل.',
    faq4Q: 'هل يمكنني إدارة كل شيء من الحاسوب؟',
    faq4A:
      'نعم. تفتح لوحة ولي الأمر في أي متصفح. امسح الرمز الذي تعرضه بتطبيق KidGate على هاتفك، فترى العائلة والأجهزة والإعدادات ذاتها، مع أدوات التحكم مفتوحة. ويمكنك أيضًا تسجيل الدخول بحسابك للاطلاع؛ وعندها يطلب قفل جهاز أو تغيير حد رمز PIN الوالدين.',
    faq5Q: 'ما تكلفة Premium؟',
    faq5A:
      'تكلفة Premium في الولايات المتحدة 6.99 دولار شهريًا أو 39.99 دولار سنويًا، وتُحصَّل عبر App Store أو Google Play وتُعرض هناك بعملتك. وتمنح خطة مدى الحياة بدفعة واحدة Premium نفسه على كل أجهزة الأطفال، طوال توفر KidGate. أما الخطة المجانية فلا تنتهي أبدًا.',
    faqMore: 'أسئلة أخرى؟ زر صفحة الدعم',

    ctaTitle: 'ابدأ حماية عائلتك اليوم',
    ctaSub: 'تجربة مجانية 7 أيام بوصول كامل.',
    ctaNote: 'ألغِ متى شئت من App Store أو Google Play.',
  },

  login: {
    title: 'دخول ولي الأمر',
    sub: 'استخدم الحساب نفسه الذي أنشأته في تطبيق KidGate. سيعرض لك الدخول هنا العائلة والأجهزة والإعدادات ذاتها.',
    notConfiguredTitle: 'لم تُضبط Firebase في هذا النشر.',
    notConfiguredBody: 'اضبط متغيرات البيئة ‎VITE_FIREBASE_*‎ لتفعيل تسجيل الدخول.',
    qrWhy:
      'المسح بهاتفك يسجّل دخولك ويفتح أدوات التحكّم في خطوة واحدة. أمّا الطرق أدناه فتسجّل دخولك للاطّلاع، ثم يلزم رمز PIN الوالدين لفتح أدوات التحكّم.',
    orViewOnly: 'أو سجّل الدخول بطريقة أخرى',
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
    resetNeedsEmail: 'أدخل بريدك الإلكتروني أولًا، ثم اختر «هل نسيت كلمة المرور؟».',
    resetSent: 'أُرسلت رسالة إعادة تعيين كلمة المرور إلى {{email}}.',
    foot: 'تُنشأ حسابات KidGate في تطبيق الهاتف — أما لوحة الويب فتسجّل الدخول إلى عائلة قائمة. جديد هنا؟ ثبّت التطبيق واربط جهاز طفل أولًا.',
  },

  qr: {
    start: 'تسجيل الدخول بتطبيق KidGate',
    generating: 'جارٍ إنشاء الرمز…',
    step1: 'افتح KidGate على هاتفك.',
    step2: 'اضغط على أيقونة المسح في تبويب *العائلة*.',
    step3: 'امسح هذا الرمز ثم اعتمده.',
    waiting: 'بانتظار الاعتماد · ينتهي خلال {{time}}',
    signingIn: 'تم الاعتماد. جارٍ تسجيل الدخول…',
    expired: 'انتهت صلاحية هذا الرمز.',
    failed: 'لم يكتمل تسجيل الدخول.',
    newCode: 'إظهار رمز جديد',
    tryAgain: 'أعد المحاولة',
  },

  authAction: {
    checking: 'جارٍ التحقق من الرابط…',
    resetTitle: 'تعيين كلمة مرور جديدة',
    newPassword: 'كلمة المرور الجديدة',
    confirmPassword: 'تأكيد كلمة المرور الجديدة',
    mismatch: 'كلمتا المرور غير متطابقتين.',
    tooShort: 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.',
    save: 'حفظ كلمة المرور',
    saving: 'جارٍ الحفظ…',
    resetDone: 'تم تغيير كلمة المرور',
    resetDoneBody: 'سجّل الدخول بكلمة المرور الجديدة هنا أو في تطبيق KidGate.',
    verifyDone: 'تم تأكيد البريد الإلكتروني',
    verifyDoneBody: 'ارجع إلى تطبيق KidGate للمتابعة.',
    invalid: 'انتهت صلاحية هذا الرابط أو سبق استخدامه',
    invalidBody: 'افتح KidGate واطلب رابطًا جديدًا.',
  },
  authError: {
    generic: 'حدث خطأ ما. أعد المحاولة.',
    invalidEmail: 'عنوان البريد الإلكتروني هذا لا يبدو صحيحًا.',
    userDisabled: 'هذا الحساب مُعطَّل.',
    userNotFound: 'لا يوجد حساب KidGate بهذا البريد الإلكتروني.',
    wrongPassword:
      'البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.',
    rateLimited:
      'عدد كبير جدًا من رموز تسجيل الدخول من هذه الشبكة. أعد المحاولة بعد {{minutes}} دقيقة.',
    tooManyRequests: 'محاولات كثيرة. انتظر بضع دقائق ثم أعد المحاولة.',
    popupClosed: 'أُغلقت نافذة تسجيل الدخول قبل الانتهاء.',
    popupCancelled: 'أُلغي تسجيل الدخول.',
    popupBlocked:
      'حظر متصفحك نافذة تسجيل الدخول. اسمح بالنوافذ المنبثقة لهذا الموقع ثم أعد المحاولة.',
    accountExists:
      'هذا البريد مسجَّل بالفعل بطريقة دخول أخرى. استخدم الطريقة التي أعددتها في التطبيق.',
    operationNotAllowed: 'طريقة تسجيل الدخول هذه غير مفعّلة بعد في هذا المشروع.',
    unauthorizedDomain: 'هذا النطاق غير مصرَّح به في إعدادات Firebase Authentication.',
    invalidCustomToken: 'رابط تسجيل الدخول هذا لم يعد صالحًا. أظهر رمز QR جديدًا.',
    webRejected: 'رُفض الطلب على الهاتف.',
    webExpired: 'انتهت صلاحية الرمز. أنشئ رمزًا جديدًا.',
    noFunctionsUrl: 'لم يُضبط عنوان Cloud Functions (‎VITE_FIREBASE_FUNCTIONS_URL‎).',
    sessionExpired: 'انتهت جلستك. سجّل الدخول من جديد.',
  },

  live: {
    checkingSession: 'جارٍ التحقق من جلستك…',
    loadingFamily: 'جارٍ تحميل عائلتك…',
    loadFailedTitle: 'تعذّر تحميل عائلتك',
    noAccessTitle: 'لا توجد عائلة على هذا الحساب',
    noAccess:
      'لا يملك هذا الحساب صلاحية الوصول إلى أي عائلة في KidGate. سجّل الدخول بحساب ولي الأمر الذي تستخدمه في التطبيق.',
    noFamily:
      'لا توجد عائلة KidGate على هذا الحساب بعد. إذا كنت تستخدم KidGate على هاتفك، فسجّل الخروج ثم سجّل الدخول هنا بالحساب نفسه. لإنشاء عائلة، أعدّها على هاتفك ثم أعد تحميل هذه الصفحة.',
    noFamilyStep1:
      'ثبّت KidGate على هاتفك، واختر *هذا جهاز أحد الوالدين*، ثم سجّل الدخول بهذا الحساب.',
    noFamilyStep2:
      'افتح *العائلة* واختر *إنشاء عائلة*، أو *الانضمام إلى عائلة* إذا دعاك ولي أمر آخر.',
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
    byDay: 'وقت استخدام الشاشة حسب اليوم',
    limit: 'الحد {{value}}',
    screenTime: 'وقت استخدام الشاشة',
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
    timelineUsed: 'قيد الاستخدام',
    timelineIdle: 'غير مستخدم',
    timelineUnmeasured: 'غير مُقاس',
    timelineUnmeasuredHint:
      'لم يكن KidGate يعمل على الجهاز، أو كان الجهاز في وضع السكون. هذه الدقائق غير محتسبة في الإجمالي أيضًا.',
    timelineUnsupported: 'يمكن لهذا الجهاز الإبلاغ عن مدة الاستخدام، لكن ليس عن وقته.',
    timelinePending: 'لا يوجد جدول زمني بعد.',
  },

  perm: {
    screenTime: 'وقت استخدام الشاشة',
    location: 'الموقع',
    notifications: 'الإشعارات',
    camera: 'الكاميرا',
    microphone: 'الميكروفون',
    backgroundAppRefresh: 'تحديث التطبيقات في الخلفية',
    overlay: 'العرض فوق التطبيقات الأخرى',
    batteryOptimization: 'بطارية دون قيود',
    exactAlarm: 'المنبهات والتذكيرات',
    accessibility: 'إمكانية الوصول (مساعد القفل)',
  },

  webCat: {
    adult: 'محتوى للبالغين',
    selfHarm: 'إيذاء النفس واضطرابات الأكل',
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

  appCat: {
    adult: 'محتوى للبالغين',
    gambling: 'المقامرة',
    gameGambling: 'صناديق الحظ ومراهنات العناصر',
    dating: 'المواعدة',
    drugs: 'المخدرات والكحول',
    violence: 'العنف والدماء',
    piracy: 'القرصنة',
    bypass: 'تطبيقات تجاوز القيود',
  },

  webCatGroup: {
    harm: 'محتوى ضار',
    contact: 'الغرباء',
    bypass: 'تجاوز المرشّح',
    ai: 'الذكاء الاصطناعي',
    entertainment: 'الترفيه والتواصل',
    money: 'التسوق والمال',
  },

  dash: {
    tabOverview: 'نظرة عامة',
    tabScreen: 'وقت استخدام الشاشة',
    tabApps: 'التطبيقات',
    tabWeb: 'الويب',
    tabSafety: 'الأمان',
    tabControls: 'أدوات التحكم',
    tabReport: 'التقرير الأسبوعي',
    tabReportNew: 'تقرير أسبوعي جديد',

    children: 'الأطفال',
    noChildren: 'لم تُربط أي أجهزة أطفال بعد.',
    unassignedDevices: 'غير مُسنَد',
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
    planManageOnPhone: 'تُشترى الخطط وتُغيَّر من تطبيق KidGate على هاتفك.',
    fallbackFamily: 'عائلتك',
    fallbackDevice: 'جهاز الطفل',

    statusOnline: 'متصل',
    statusOffline: 'غير متصل',
    statusLocked: 'مقفل',
    statusLockSent: 'أُرسل القفل',
    statusLockNotApplied: 'لم يُطبَّق القفل',
    statusPaused: 'متوقف مؤقتًا',

    stateAllowed: 'مسموح',
    stateForegroundOnly: 'أثناء فتح التطبيق فقط',
    stateDenied: 'مُطفأ',
    stateNotDetermined: 'لم يُطلب بعد',
    stateRestricted: 'مقيَّد',
    stateUnavailable: 'غير متاح',
    stateUnknown: 'غير معروف',

    lastActive: 'آخر نشاط {{when}}',
    appVersion: 'إصدار التطبيق',
    appVersionUpdate: '{{running}} · {{latest}} متاح',
    appVersionRestart: '{{running}} · أعد فتح التطبيق للإكمال',
    buildOutdated: 'يتوفر تحديث',
    checkIn: 'الاطمئنان',
    sending: 'جارٍ الإرسال…',
    lockDevice: 'قفل الجهاز',
    unlock: 'إلغاء القفل',
    working: 'جارٍ التنفيذ…',
    save: 'حفظ',

    unlockTitle: 'التغييرات مقفلة.',
    unlockBody:
      'الاطّلاع متاح فورًا. لقفل جهاز أو تغيير الحدود أو الموافقة على الطلبات، افتح هذا المتصفّح برمز PIN الوالدين — أو وافق عليه بمسح رمز QR بتطبيق KidGate. أمّا طلبات الاطمئنان فتعمل في الحالتين.',
    unlockCta: 'فتح التغييرات',
    unlockToChange: 'افتح التغييرات أولًا',
    refresh: 'تحديث',
    liveOnApp: 'افتح التطبيق للتحديثات المباشرة',
    pinTitle: 'أدخل رمز PIN الوالدين',
    pinBody:
      'الأرقام الستة نفسها التي تستخدمها في التطبيق. يبقى هذا المتصفّح مفتوحًا 8 ساعات؛ أما الموافقة من التطبيق فتُبقيه مسجَّل الدخول 7 أيام.',
    pinLabel: 'رمز PIN الوالدين',
    pinSubmit: 'فتح',
    pinOrScan: 'أو وافق من هاتفك',
    qrSaferNote:
      'الموافقة من الهاتف أكثر أمانًا: فهي تتطلّب الهاتف المقترن نفسه، بينما رمز PIN ستة أرقام قد يكون أحد أفراد العائلة رآك تُدخلها.',
    pinWrong: 'رمز PIN غير صحيح. المحاولات المتبقية: {{count}}.',
    pinLocked:
      'محاولات خاطئة كثيرة. انتظر 15 دقيقة، أو وافق على هذا المتصفّح من هاتفك.',
    pinNotSet:
      'لم تحدّد عائلتك رمز PIN الوالدين بعد. حدّده في التطبيق، أو وافق على هذا المتصفّح من هاتفك.',
    unlockedToast: 'تم فتح التغييرات على هذا المتصفّح.',
    close: 'إغلاق',

    noDeviceBody:
      'افتح KidGate على هاتفك، وانتقل إلى *العائلة*، واضغط على أيقونة المسح (*مسح رمز*). امسح رمز QR الظاهر على جهاز طفلك، أو اكتب رمزه المكوّن من 6 أحرف. ثم اضغط على *تحديث* هنا.',
    pairStep2Title: 'امسح الرمز بهاتفك',
    getKidGate: 'احصل على KidGate',
    childNoDevices:
      'لا توجد أجهزة بعد. اقرن جهازًا، واختر هذا الطفل عندما يسألك التطبيق عمّن يستخدمه.',
    childNoDevicesAssign:
      'لا توجد أجهزة بعد. عيّن جهازًا أدناه، أو اقرن جهازًا جديدًا.',

    toastCheckIn: 'سيصل {{name}} طلب اطمئنان.',
    toastTimeApproved: 'تم اعتماد الوقت الإضافي.',
    toastCheckInResent: 'أُعيد إرسال طلب الاطمئنان.',

    tileScreenToday: 'وقت استخدام الشاشة اليوم',
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

    cardScreenTime: 'وقت استخدام الشاشة',
    cardScreenTimeSub: 'آخر 14 يومًا، مقارنةً بالحد اليومي',
    cardRecent: 'النشاط الأخير',
    cardRecentSub: 'الأحدث أولًا',
    cardRecentEmpty:
      'لا سجل بعد. ستظهر هنا عمليات القفل والتطبيقات المحظورة وتنبيهات الأماكن ومزامنة وقت استخدام الشاشة من هذا الجهاز.',
    cardAttention: 'يحتاج انتباهك',
    cardAttentionSub: '{{count}} مفتوح',
    cardAttentionEmpty: 'لا شيء للمراجعة. الحماية تبدو سليمة.',
    cardProtection: 'حالة الحماية',
    cardProtectionSub: 'فُحصت {{when}}',

    attnMoreMinutes: 'طلب {{name}} {{minutes}} دقيقة إضافية',
    attnReason: '«{{reason}}» · {{when}}',
    attnCheckInMissed: 'لم يُستجب لطلب اطمئنان',
    attnCheckInMissedMeta: 'أُرسل {{when}} · بلا رد',
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
    topAppsTitleDay: 'أكثر التطبيقات استخدامًا · {{date}}',
    topAppsSub: 'تظهر حدود كل تطبيق كعلامة',
    trendTitle: 'اتجاه وقت استخدام الشاشة',
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
    schedMax: 'يحتفظ الجهاز بـ {{max}} فترات كحدّ أقصى.',

    appUsageTitle: 'استخدام التطبيقات اليوم',
    appUsageSub: 'الوقت المستغرق لكل تطبيق',
    topAppsOther: 'تطبيقات أخرى',
    underAMinute: 'أقل من دقيقة',
    appUsageEmpty: 'لم يُبلَّغ عن أي استخدام للتطبيقات بعد.',
    appBlockingTitle: 'حظر التطبيقات',
    appBlockingSub: 'يُختار على جهاز الطفل برمز PIN الوالدين',
    blockingLabel: 'الحظر',
    appsBlocked: 'تطبيقات محظورة',
    categories: 'الفئات',
    perAppHint:
      'تعمل حدود كل تطبيق باستقلال عن قائمة الحظر — «30 دقيقة من TikTok» قرار مختلف عن «لا TikTok».',
    limitsMax: 'يحتفظ الجهاز بحدود لـ {{max}} تطبيقًا كحدّ أقصى.',
    perDay: '{{value}}/يوم',
    webActivityTitle: 'نشاط الويب',
    webActivitySub: 'أكثر النطاقات زيارةً، آخر 30 يومًا',
    webActivityEmpty: 'لا يوجد نشاط ويب بعد.',
    inventoryTitle: 'التطبيقات المثبّتة',
    inventorySub: 'كل شيء على هذا الجهاز، لا ما تغيّر فقط',
    inventoryEmpty: 'لم يرسل هذا الجهاز قائمة تطبيقاته بعد.',
    inventoryFirstScan: 'هذا أول فحص، لذا لا يمكن تحديد متى ظهرت هذه التطبيقات.',
    inventoryFlagged: 'تستحق النظر',
    inventoryFlaggedLabel: 'للمراجعة',
    inventoryOtherLabel: 'محدّدة',
    inventoryUnknownLabel: 'غير محدّدة',
    installAllow: 'السماح',
    pendingInstallsTitle: 'تطبيقات جديدة بانتظار الموافقة',
    pendingInstallsSub: 'ثُبِّتت بعد تفعيل الموافقة، وحظرها الجهاز من تلقاء نفسه',
    pendingInstallsEmpty: 'لا تطبيقات جديدة بانتظار الموافقة.',
    toastInstallAllowed: 'تم السماح بالتطبيق',
    rowInstallApproval: 'الموافقة على التطبيقات الجديدة',
    rowInstallApprovalDesc_few: '{{count}} تطبيقات بانتظار الموافقة',
    rowInstallApprovalDesc_many: '{{count}} تطبيقًا بانتظار الموافقة',
    rowInstallApprovalDesc_one: '{{count}} تطبيق بانتظار الموافقة',
    rowInstallApprovalDesc_other: '{{count}} تطبيق بانتظار الموافقة',
    rowInstallApprovalDesc_two: 'تطبيقان بانتظار الموافقة',
    rowInstallApprovalDescIos:
      'يخفي App Store — لا تتيح Apple الموافقة على كل تطبيق على حدة',
    colDomain: 'النطاق',
    colVisits: 'الزيارات',
    colBlocked: 'المحظورة',
    colLastSeen: 'آخر ظهور',
    videosTitle: 'مقاطع الفيديو المُشاهَدة',
    videosSub: 'ما تمت مشاهدته على YouTube والويب',
    videosEmpty: 'لا توجد فيديوهات بعد.',
    colVideo: 'فيديو',
    colChannel: 'القناة',
    colViews: 'المشاهدات',
    filterRefusedTitle: 'ما رفضه المرشِّح',
    filterRefusedSub_one: 'استعلام محظور واحد، آخر 30 يومًا',
    filterRefusedSub_two: 'استعلامان محظوران، آخر 30 يومًا',
    filterRefusedSub_few: '{{count}} استعلامات محظورة، آخر 30 يومًا',
    filterRefusedSub_many: '{{count}} استعلامًا محظورًا، آخر 30 يومًا',
    filterRefusedSub_other: '{{count}} استعلام محظور، آخر 30 يومًا',
    nothingBlockedYet: 'لم يُحظر شيء بعد.',
    rollupNoteAi:
      'بعض الفئات استُنتجت من اسم الموقع بدل مطابقتها بموقع معروف، لذا قد يكون بعضها غير دقيق.',
    webBackgroundNote:
      'حين لا يستخدم أحد الجهاز، تظل بعض التطبيقات تتصل بالإنترنت في الخلفية: التحديثات والاقتراحات وعمليات التحقق تعمل من تلقاء نفسها.',
    filterHintIos:
      'يعتمد جهاز iPhone أو iPad هذا على ضوابط Apple لمحتوى البالغين فقط. لحظر المواقع حسب الفئة، حدِّث KidGate عليه واسمح باتصال VPN من KidGate.',
    filterHintAndroid: 'تُطبَّق الفئات عبر مرشِّح DNS داخل الجهاز.',
    filterHintMacos: 'تُطبَّق الفئات عبر مرشِّح محتوى KidGate على جهاز Mac.',

    locationTitle: 'الموقع',
    locationSharingOff: 'المشاركة مُطفأة',
    locationUpdated: 'حُدّث {{when}}',
    locationWaiting: 'بانتظار أول تحديث',
    lastKnownLocation: 'آخر موقع معروف',
    nearPlace: 'بالقرب من {{place}}',
    noPlaces:
      'لا أماكن محفوظة بعد. أضف مكانًا في التطبيق لتصلك تنبيهات وصول طفلك أو مغادرته.',
    placeRadius: '{{meters}} م · ',
    placeArrive: 'الوصول',
    placeLeave: 'المغادرة',
    placeNoAlerts: 'بلا تنبيهات',
    placeSamePin:
      'هذا هو موضع «{{name}}» نفسه. استخدم خريطة التطبيق لوضعه في مكان آخر.',
    placeWebHint:
      'لا يستطيع الويب سوى إضافة مكان حيث أبلغ الجهاز عن موقعه آخر مرة. استخدم خريطة التطبيق لاختيار أي مكان آخر.',
    placeNeedsLocation: 'في انتظار موقع من هذا الجهاز.',
    sosTitle: 'تنبيهات SOS',
    sosSub: 'إشارات طوارئ من جهاز الطفل',
    sosEmpty: 'لا تنبيهات SOS. جرّباها معًا مرة واحدة كي يعرف كلاكما كيف تعمل.',
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
      'تُضاف دقائق المكافأة من مهام المكافآت وطلبات الوقت المعتمدة فوق الحد، لذلك اليوم فقط.',
    limitShared: 'مشترك بين كل الأجهزة',
    limitSharedSpent: 'استُخدم اليوم {{used}} من {{limit}}',
    limitSharedHint:
      'هذا يوم الطفل بأكمله، وليس حدًّا لهذا الجهاز وحده — كل جهاز يأخذ ما لم تستخدمه الأجهزة الأخرى. يمكن تغييره من تطبيق KidGate.',
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
    rowWebFilter: 'فلتر الويب',
    rowWebFilterDesc_one: 'فئة واحدة مرفوضة',
    rowWebFilterDesc_two: 'فئتان مرفوضتان',
    rowWebFilterDesc_few: '{{count}} فئات مرفوضة',
    rowWebFilterDesc_many: '{{count}} فئة مرفوضة',
    rowWebFilterDesc_other: '{{count}} فئة مرفوضة',
    rowNotSupported: 'غير مدعوم على هذا الجهاز',
    rowWebFilterAwaitingApproval: 'في انتظار الموافقة على الجهاز',
    rowWebFilterSwitchedOff: 'مُعطَّل على الجهاز',
    rowLocation: 'مشاركة الموقع',
    rowLocationDesc: 'آخر تحديث {{when}}',
    rowLocationNone: 'لا موقع بعد',
    rowSearchMonitoring: 'مراقبة البحث',
    rowSafeSearch: 'فرض البحث الآمن',
    rowSafeSearchDesc:
      'يثبّت البحث الآمن في Google، والوضع المقيّد في YouTube، وBing وDuckDuckGo على الإعداد الصارم. Android وAndroid TV وChrome. وعند هذا المستوى يخفي YouTube التعليقات أيضًا ويحظر بعض مقاطع الفيديو العادية.',

    webFilterCatsTitle: 'فئات فلتر الويب',
    webFilterCatsSub: 'أنواع المحتوى المحظورة',
    dnsHint:
      'تُرفض دائمًا خوادم DNS المشفّرة أثناء عمل المرشِّح — فتركها متاحة هو ما يسمح للمتصفح بالالتفاف على كل الفئات الأخرى.',
    starChartTitle: 'لوحة النجوم',
    starChartSub: 'النجوم المكتسبة هذا الأسبوع لكل طفل',
    starChartEmpty: 'أضف طفلاً ثانياً في التطبيق لبدء لوحة النجوم.',
    starChartStars: 'النجوم: {{count}}',
    rewardTasksTitle: 'مهام المكافآت',
    rewardTasksSub: 'اكسب دقائق إضافية بإنجاز المهام',
    rewardTaskMeta: '+{{minutes}} د · {{cadence}}',
    rewardTaskStars: 'الصعوبة: {{count}} من 3',
    rewardTaskWaiting: ' · بانتظار اعتمادك',
    approve: 'اعتماد',
    siteRequestsTitle: 'طلبات المواقع',
    siteRequestsSub: 'المواقع التي طلب هذا الجهاز السماح بها',
    siteRequestAllow: 'السماح',
    siteRequestDeny: 'ليس الآن',
    attnSiteRequest: 'طلب {{name}} فتح {{domain}}',
    toastSiteAllowed: 'تم السماح بالموقع',
    timelineTitle: 'متى تم الاستخدام',
    timelineSub: 'اليوم، من منتصف الليل إلى منتصف الليل. الأخضر هو وقت استخدام الجهاز.',
    timelineSubDay:
      '‏{{date}}، من منتصف الليل إلى منتصف الليل. الأخضر هو وقت استخدام الجهاز.',
  },

  controlError: {
    generic: 'لم يتم ذلك. أعد المحاولة.',
    network: 'لا يوجد اتصال. تحقّق من الشبكة ثم أعد المحاولة.',
    sessionExpired: 'انتهت جلستك. سجّل الدخول من جديد.',
    forbidden:
      'لا يمكن لجلسة المتصفّح هذه إجراء تغييرات. سجّل الدخول مجددًا بمسح رمز QR بتطبيق KidGate.',
    notFound: 'لم يعد موجودًا — ربما جرى تغييره من الهاتف.',
    conflict: 'غيّر شخص آخر هذا للتو. أعد التحميل لمعرفة النتيجة.',
    rateLimited: 'تغييرات كثيرة دفعة واحدة. انتظر لحظة ثم أعد المحاولة.',
    server: 'تعذّر على KidGate إتمام ذلك. أعد المحاولة قريبًا.',
    premiumRequired: 'هذه ميزة Premium. تُدار الخطط من تطبيق KidGate على هاتفك.',
  },

  report: {
    title: 'التقرير الأسبوعي',
    subtitle: 'ما لاحظه KidGate خلال الأسبوع.',
    weekOf: 'أسبوع {{week}}',
    writtenAt: 'كُتب في {{when}}',
    triggerScheduled: 'أُرسل يوم الاثنين',
    triggerManual: 'أنشأته بنفسك',
    highlights: 'جدير بالمعرفة',
    narrativeTitle: 'في جملة واحدة',
    finePrint:
      'تغطي الأرقام من {{from}} إلى {{to}} عبر كل أجهزة العائلة. وقت استخدام الشاشة هو ما أبلغت عنه الأجهزة؛ والدقائق التي تعذّر قياسها ليست ضمن أي إجمالي.',
    shareImage: 'حفظ كصورة',
    sharePdf: 'حفظ بصيغة PDF',
    copySummary: 'نسخ الملخّص',
    copied: 'تم نسخ الملخّص.',
    imageSaved: 'تم حفظ الصورة.',
    shareFailed: 'لا يمكن لهذا المتصفح حفظ ذلك. انسخ الملخّص بدلًا من ذلك.',
    emptyTitle: 'لا يوجد تقرير بعد',
    emptyBody: 'يصل تقرير كل صباح اثنين، ويغطي الأيام السبعة التي سبقته.',
    noUsage:
      'لم يُسجَّل أي وقت شاشة خلال الأسبوعين الماضيين، لذا لا يوجد ما يُبلَّغ عنه بعد. الجهاز غير المتصل لا يبلّغ بشيء، وهذا ليس كالأسبوع الهادئ.',
    rateLimited: 'محاولات كثيرة. انتظر دقيقة.',
    loadFailedTitle: 'تعذّر تحميل التقارير',
    loadFailed: 'تعذّر فتح التقارير. أعد تحميل الصفحة للمحاولة مرة أخرى.',
    retryLoad: 'أعد المحاولة',
    failed: 'تعذّرت كتابة التقرير. أعد المحاولة بعد قليل.',
    existed: 'كان لهذا الأسبوع تقرير بالفعل — ها هو.',
    childrenTitle: 'لكل طفل',
    childrenNote: 'الأسبوعان نفسهما، لكل جهاز. النسب محسوبة من إجمالي العائلة.',
    colScreenTime: 'وقت استخدام الشاشة',
    colShare: 'الحصة',
    colChange: 'مقارنة بالأسبوع الماضي',
    colLimit: 'فوق الحد',
    colLateNights: 'ليالٍ متأخرة',
    colTopApp: 'الأكثر استخدامًا',
    noLimit: 'بلا حد',
    busiest: 'الأكثر وقت شاشة',

    historyTitle: 'الأسابيع السابقة',
    historyEmpty: 'تُحفظ التقارير التي تتلقاها من الآن هنا لمدة عام.',
  },

  support: {
    title: 'دعم KidGate',
    updated: 'نحن هنا للمساعدة',

    contactTitle: 'تواصل معنا',
    contactEmail:
      '**البريد الإلكتروني:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**زمن الرد:** عادةً خلال يوم عمل واحد',
    contactNote:
      'عند التواصل، أرفق عنوان البريد الإلكتروني لحساب ولي الأمر في KidGate ووصفًا موجزًا للمشكلة كي نساعدك أسرع.',

    startTitle: 'البدء',
    start1:
      '**1. جهّز جهاز ولي الأمر.** ثبّت KidGate وافتح التطبيق واختر *هذا جهاز أحد الوالدين*. سجّل الدخول بـ Google أو البريد الإلكتروني (أو بـ Apple على iPhone)، ثم سمِّ عائلتك.',
    start2:
      '**2. اضبط رمز PIN الوالدين.** انتقل إلى *الإعدادات ← الأمان* واضبط رمز PIN الوالدين من 6 أرقام. تحتاجه لتغيير الإعدادات الحساسة ولاختيار التطبيقات المحظورة على جهاز الطفل. لا تشاركه مع أطفالك.',
    start3:
      '**3. اربط جهاز الطفل.** ثبّت KidGate على جهاز طفلك وافتحه. على الهاتف أو الجهاز اللوحي، اختر *هذا جهاز طفل*. من جهاز ولي الأمر، افتح *العائلة* واضغط على أيقونة المسح (*مسح رمز*)، ثم امسح رمز QR الظاهر على جهاز الطفل (أو أدخل الرمز المكوّن من 6 أحرف). إذا طلب جهاز الطفل التأكيد، فأكّد الاتصال عليه؛ أما التلفزيون فيتصل تلقائيًا.',
    start4:
      '**4. امنح الأذونات على جهاز الطفل.** افتح شاشة *الحالة* على جهاز الطفل واضغط *متابعة الإعداد* — سيرشدك إلى كل إذن يحتاجه KidGate. على Android: الإشعارات، و«الوصول إلى الاستخدام»، و«العرض فوق التطبيقات الأخرى»، و«إمكانية الوصول (مساعد القفل)»، و«المنبهات والتذكيرات»، و«بطارية دون قيود»؛ وعلى iOS: *السماح باستخدام التطبيقات والمواقع* (مدة استخدام الجهاز)، ولفلتر الويب *السماح* عندما يطلب iOS إضافة تكوينات VPN. لن تعمل أدوات التحكم بالكامل قبل تفعيلها.',
    start5:
      '**5. اضبط أدوات التحكم.** من جهاز ولي الأمر، افتح بطاقة جهاز الطفل واضبط الحد اليومي وساعات الحظر والتطبيقات المحظورة وفلتر الويب ومزايا الموقع.',
    startNote:
      'يتضمن التطبيق أيضًا دليلًا تفصيليًا: *الإعدادات ← دليل المستخدم*، ويغطي ربط الأجهزة والأذونات وأدوات التحكم اليومية ومزايا الأمان.',

    faqTitle: 'الأسئلة الشائعة',

    faq1Q: 'هل يمكنني إدارة عائلتي من الحاسوب؟',
    faq1A:
      'نعم. افتح [لوحة الويب](/dashboard) وامسح الرمز الذي تعرضه بتطبيق KidGate على هاتفك — أو سجّل الدخول بالحساب نفسه الذي تستخدمه في التطبيق: Google أو Apple أو بريدك وكلمة المرور. ستجد العائلة والأجهزة والتقارير والإعدادات ذاتها. وعند تسجيل الدخول بحساب، يطلب تغيير أي أداة تحكم رمز PIN الوالدين. أما إنشاء الحسابات وربط الأجهزة فيبقيان في تطبيق الهاتف.',

    faq2Q: 'كيف أربط جهاز ولي الأمر بجهاز الطفل؟',
    faq2A:
      'على جهاز الطفل، افتح KidGate. على الهاتف أو الجهاز اللوحي، اختر *هذا جهاز طفل*. سيظهر رمز QR ورمز من 6 أحرف. من جهاز ولي الأمر، افتح *العائلة* واضغط على أيقونة المسح (*مسح رمز*)، ثم امسح رمز QR (مستحسن) أو أدخل الرمز يدويًا. إذا طلب جهاز الطفل التأكيد، فأكّد اسم ولي الأمر عليه؛ أما التلفزيون فيتصل تلقائيًا. تنتهي صلاحية الرموز — فإن فشل الربط، اضغط *رمز جديد* على جهاز الطفل وأعد المحاولة.',

    faq3Q: 'هل يستطيع وليّا أمر إدارة العائلة نفسها؟',
    faq3A:
      'نعم. من جهاز مالك العائلة، افتح *العائلة ← + ← دعوة أحد الوالدين* وشارك رمز QR أو رمز الدعوة. يثبّت ولي الأمر الآخر KidGate ويسجّل الدخول كولي أمر، ثم يفتح *العائلة* ويضغط على أيقونة المسح (*مسح رمز*)، ثم يمسح رمز QR أو يكتب رمز الدعوة هناك. بعدها يعتمد المالك الطلب. ويمكن أن تضمّ العائلة حتى 3 أولياء أمور في الخطة المجانية وخلال الفترة التجريبية، وحتى 6 مع Premium. اشتراك واحد يغطي العائلة كلها؛ ويدفع المالك وحده.',

    faq4Q: 'كيف تعمل الفترة التجريبية المجانية؟',
    faq4A:
      'تبدأ الفترة التجريبية البالغة 7 أيام عند ربط أول جهاز ولي أمر وجهاز طفل، وتتيح كل الميزات. إزالة جهاز طفل لا تعيد ضبط الفترة التجريبية. وعند انتهائها، تستمر كل القواعد في العمل مجانًا ويواصل جهاز طفل واحد تختاره إرسال البيانات؛ ويعيد Premium النشاط المباشر والسجل والتقارير الأسبوعية وإرسال البيانات من كل الأجهزة.',

    faq5Q: 'كيف ألغي اشتراكي؟',
    faq5A:
      'تُحصَّل الاشتراكات عبر App Store أو Google Play، لا من KidGate مباشرةً. على iOS: *الإعدادات ← اسمك ← الاشتراكات*. على Android: *Google Play ← أيقونة الملف الشخصي ← المدفوعات والاشتراكات ← الاشتراكات*. يتجدد الاشتراك تلقائيًا ما لم تُلغِه قبل انتهاء الفترة الحالية بـ 24 ساعة على الأقل.',

    faq6Q: 'كيف أستعيد مشترياتي؟',
    faq6A:
      'من جهاز ولي الأمر، افتح شاشة *الخطط* واضغط *استعادة المشتريات*. تأكد من تسجيل دخولك بحساب المتجر نفسه الذي استخدمته في الشراء الأصلي. لاحظ أن مالك العائلة وحده يمكنه الاشتراك أو استعادة المشتريات.',

    faq7Q: 'لماذا لا تظهر بيانات وقت استخدام الشاشة؟',
    faq7A:
      'تأتي بيانات الاستخدام من جهاز الطفل. تحقق من أنه متصل، ثم افتح KidGate عليه وانظر إلى شاشة *الحالة* — يجب أن يظهر كل صف أذونات على أنه مسموح (على Android، الوصول إلى بيانات الاستخدام ضروري لتتبع وقت استخدام الشاشة). وقد تستغرق التقارير دقائق للمزامنة.',

    faq8Q: 'لماذا لا يعمل القفل أو ساعات الحظر؟',
    faq8A:
      'على Android، يحتاج القفل إلى تفعيل *العرض فوق التطبيقات الأخرى* ومساعد *إمكانية الوصول*، إضافةً إلى بطارية دون قيود. وعلى أجهزة Xiaomi وSamsung وOppo وVivo وما شابهها، اسمح أيضًا بالتشغيل التلقائي وأزل KidGate من أي قائمة «تطبيقات نائمة» (انظر *الحالة ← السماح بالتشغيل التلقائي* على جهاز الطفل). وعلى iOS يعتمد القفل على إذن مدة استخدام الجهاز. وإن أُطفئ إذن لاحقًا، سيصلك تنبيه حماية على جهاز ولي الأمر.',

    faq9Q: 'كيف أحظر تطبيقات محددة؟',
    faq9A:
      'يتم اختيار التطبيقات على جهاز الطفل: افتح *KidGate ← الإعدادات*، واضغط *إلغاء القفل برمز PIN الوالدين*، وافتح *التطبيقات المحظورة*، واختر التطبيقات ثم احفظ. بعدها، من جهاز ولي الأمر، افتح شاشة *التطبيقات المحظورة* للجهاز وفعّل *تفعيل حظر التطبيقات*. على iOS قد تخفي Apple أسماء التطبيقات الدقيقة عن جهاز ولي الأمر — وهذا قيد من المنصة.',

    faq10Q: 'لماذا لا يتحدث موقع طفلي؟',
    faq10A:
      'يجب السماح بالموقع لـ KidGate على جهاز الطفل، ويحتاج الجهاز إلى اتصال بالشبكة. افتح شاشة *الموقع* للجهاز من جهاز ولي الأمر واضغط *تحديث الموقع*. قد تؤخّر أوضاع توفير البطارية التحديثات، وقد يكون GPS أقل دقة داخل المباني.',

    faq11Q: 'كيف أزيل KidGate من جهاز طفلي؟',
    faq11A:
      'أزل الجهاز من تطبيق ولي الأمر أولًا (افتح الجهاز في *العائلة* واختر الإزالة)، ثم أزل التطبيق من جهاز الطفل.',

    faq12Q: 'كيف أحذف حسابي وبياناتي؟',
    faq12A:
      'من تطبيق ولي الأمر، انتقل إلى *الإعدادات ← الحساب ← حذف الحساب*. وبعد مهلة 14 يومًا يمكنك الإلغاء خلالها، يحذف ذلك نهائيًا حساب عائلتك وكل البيانات — الأجهزة والنشاط وسجل المواقع وصور SOS — لكل أولياء الأمور والأطفال. راجع صفحة [حذف الحساب والبيانات](/delete-account) لمعرفة كل الخيارات، بما فيها الحذف دون تثبيت التطبيق.',

    legalTitle: 'الشؤون القانونية',
    legalDeletion: 'حذف الحساب والبيانات',
  },

  download: {
    eyebrow: 'التنزيل',
    qrScan: 'امسح الرمز بكاميرا هاتفك لتنزيل التطبيق',
    macosTitle: 'macOS',
    macosRequires: '‏macOS 12 أو أحدث، على جهاز Mac بمعالج Apple silicon.',
    windowsTitle: 'Windows',
    windowsRequires: '‏Windows 10 أو أحدث، 64 بت.',
    button: 'تنزيل',
    warningSub:
      'يعرض Windows تحذير SmartScreen لأي تطبيق يُثبَّت من خارج متجره من مطوّر لم يُدرج بعد في قائمته الموثوقة — وليس بسبب شيء عُثر عليه في KidGate. تشرح بطاقة Windows أعلاه كيفية السماح به. أما حزمة Mac فموقّعة بمعرّف Apple Developer ID وموثّقة من Apple، لذا لا تُظهر أي تحذير. نزّل من kidgate.app فقط.',
    macosSteps:
      'افتح الحزمة التي نزّلتها واتبع خطوات المثبِّت. بعدها يطلب منك macOS مرة واحدة السماح بامتداد نظام KidGate: افتح الإعدادات التي تشير إليها تلك الرسالة واسمح به هناك. ولا يعمل فلتر الويب قبل أن تفعل ذلك.',
    windowsSteps:
      'عندما يقول Windows إنه حمى جهازك، اختر «مزيد من المعلومات» (More info) ثم «تشغيل على أي حال» (Run anyway).',
  },
  about: {
    eyebrow: 'من نحن',
    title: 'رقابة أبوية يمكن للعائلة',
    titleAccent: 'أن تتفق عليها فعلًا.',
    lede: 'يقف وراء KidGate مطوّر مستقل يعمل على منتج واحد فقط. موقفنا كله أن يكون بمقدور ولي الأمر أن يثق بما يقوله التطبيق، بما في ذلك المواضع التي يقول فيها إنه لا يستطيع المساعدة.',
    storyEyebrow: 'لماذا وُجد KidGate',
    storyTitle: 'صار وقت الشاشة هو الخلاف في كل بيت',
    storyP1:
      'تعيش معظم العائلات المساء نفسه: مؤقّت لم يتفق عليه أحد، وهاتف يُسحب من اليد، وطفل موقن أن القواعد تغيّرت من دون علمه. والأدوات التي كان يُفترض أن تعالج ذلك زادته سوءًا في الغالب — قفل بلا تفسير من جهة، ولوحة تقارير تُقرأ كأنها مراقبة من جهة أخرى.',
    storyP2:
      'لذلك بنينا النسخة التي أردناها في بيوتنا. يضبط ولي الأمر الحد اليومي وساعات الحظر والتطبيقات المحظورة وفلتر الويب مرة واحدة، ويلتزم الجهاز بها. ويرى الطفل الأرقام نفسها التي يراها والداه، ويستطيع طلب وقت إضافي، ويصل إلى والديه عبر SOS متى كان الجهاز متصلًا بالإنترنت. لا يتظاهر KidGate بأنه غير موجود.',
    storyP3:
      'يعمل على iPhone وAndroid وMac وWindows وAndroid TV، مع إضافة Chrome لفلتر الويب، ولوحة يفتحها ولي الأمر من أي متصفح. عائلة واحدة، اشتراك واحد، وكل الأجهزة.',
    valuesEyebrow: 'ما نؤمن به',
    valuesTitle: 'أربع قواعد لا نخالفها',
    valuesSub: 'كُتبت قبل أول ميزة، ومنذ ذلك الحين تُقاس كل ميزة عليها.',
    value1Title: 'الطفل ليس متهمًا',
    value1Text:
      'القواعد ظاهرة على الجهاز الذي تنطبق عليه. يرى الطفل ما هو مفعَّل وكم بقي له من وقت، ويستطيع طلب المزيد، ويستطيع إطلاق SOS في أي وقت. الرقابة التي يجب أن تبقى سرية ليست رقابة تستطيع العائلة أن تتحدث عنها.',
    value2Title: 'بيانات عائلتك ليست للبيع',
    value2Text:
      'بلا إعلانات إطلاقًا. لا يُستخدم أي شيء يخص طفلًا في الإعلانات ولا يُباع لأحد. ويمكنك طلب حذف حساب العائلة وكل ما فيه في أي وقت — من داخل التطبيق أو بالبريد الإلكتروني كما يشرح هذا الموقع — ويختفي بعد 14 يومًا.',
    value3Title: 'نقول ما لا نستطيع فعله',
    value3Text:
      'كل نظام يضع حدودًا لما يُسمح للتطبيق بفرضه. وحيث يكون أداء KidGate في حدود المستطاع — كإغلاق تطبيق محظور على الحاسوب بدل منع تشغيله أصلًا — تقول الشاشة ذلك صراحةً بدل عرض علامة خضراء.',
    value4Title: 'عائلة واحدة، خطة واحدة',
    value4Text:
      'اشتراك Premium واحد يغطي كل الآباء والأمهات وكل أجهزة الأبناء. ومن دونه يستمر الحد اليومي وساعات الحظر والتطبيقات المحظورة وقفل الجهاز وفلتر الويب في العمل على كل أجهزة الأطفال، ويصلك SOS دائمًا، فلا تقع قواعد السلامة الأساسية خلف جدار الدفع أبدًا.',
    makeEyebrow: 'ما نصنعه',
    makeTitle: '‏KidGate واحد، أينما كانت الشاشة',
    makeSub: 'القواعد نفسها، تُكتب مرة واحدة، وتُطبَّق بقدر ما يسمح به كل نظام.',
    make1Title: '‏iPhone وiPad',
    make1Text:
      'الحد اليومي وساعات الحظر وحظر التطبيقات عبر ميزة مدة استخدام الجهاز من Apple نفسها، وفلتر الويب عبر اتصال خاص على الجهاز نفسه.',
    make2Title: 'Android',
    make2Text:
      'حدود زمنية وحظر للتطبيقات وقفل بملء الشاشة وفلتر الويب، مع تنبيه عند ظهور تطبيق جديد.',
    make3Title: 'macOS',
    make3Text:
      'وكيل سطح المكتب على جهاز Mac: الجدول نفسه والحدود نفسها، ويوم استخدام يستطيع ولي الأمر قراءته فعلًا.',
    make4Title: 'Windows',
    make4Text:
      'الوكيل نفسه على حاسوب PC، مع خدمة تعمل في الخلفية تعيد تشغيله إذا أُغلق أو أُنهي.',
    make5Title: 'Android TV',
    make5Text:
      'شاشة غرفة المعيشة، تُعامَل كجهاز مشترك للعائلة لا كهاتف طفل بعينه — بالحدود نفسها والجدول نفسه الموجودة على الهواتف. ولا يشارك التلفاز موقعه، ولا يوجد فيه SOS.',
    make6Title: 'Chrome',
    make6Text:
      'إضافة متصفح تحمل فلتر الويب نفسه داخل Chrome، على حاسوب مثبَّت عليه KidGate وعلى حاسوب لا يمكن تثبيته عليه. وهي تفلتر الويب داخل Chrome فقط، فلا تقيس وقت استخدام الشاشة ولا تحظر التطبيقات.',
    make7Title: 'لوحة ولي الأمر',
    make7Text:
      'المتصفح هو الشاشة الثانية لولي الأمر. سجّل الدخول من أي حاسوب بمسح رمز بهاتفك؛ لا شيء لتثبيته.',
    factsEyebrow: '‏KidGate اليوم',
    factsTitle: 'أربعة أرقام',
    fact1Label: 'لغة، من العربية إلى الفيتنامية',
    fact2Label: 'أنظمة، إضافة إلى اللوحة',
    fact3Label: 'إعلانات، إطلاقًا',
    fact4Label: 'اشتراك لكل عائلة',
    contactEyebrow: 'تحدث إلينا',
    contactTitle: 'يقرأ كل رسالة إنسان',
    contactSub:
      'سؤال أو خلل أو ميزة تحتاجها عائلتك أو ترجمة تبدو خاطئة بلغتك — اكتب إلينا.',
    contactEmail: 'راسلنا بالبريد',
    contactSupport: 'الدعم والأدلة',
    contactPrivacy: 'كيف نتعامل مع البيانات',
  },
  promo: {
    intro: 'يوم طفلك كاملًا، وأنت مطمئن.',
    school: 'بدأ الدرس، فيقفل الهاتف نفسه.',
    apps: 'التطبيقات التي تحظرها لا تُفتح.',
    arrive: 'يصل إلى بيت الجدة، فيأتيك إشعار.',
    checkIn: 'تسأل عن حاله، فيؤكد بلمسة واحدة أنه بخير.',
    sos: 'إن حدث مكروه، يُريك نداء SOS واحد أين هو.',
    limit: 'انتهى وقت اللعب، فيقفل الهاتف نفسه.',
    lockNow: 'العشاء جاهز. اقفل هاتفه من هاتفك.',
    web: 'احجب المواقع الضارة على كل الأجهزة.',
    tv: 'تلفاز غرفة الجلوس يتبع قواعد البيت نفسها.',
    reward: 'أنهى الواجب، فكسب 15 دقيقة إضافية.',
    bedtime: 'في وقت النوم، ينام الهاتف والحاسوب والتلفاز أيضًا.',
    kid: 'الطفل',
    parent: 'ولي الأمر',
    arrivedNotice: 'وصلت ليلى إلى بيت الجدة',
    checkAsk: 'هل أنت بخير؟',
    checkReply: 'أنا بخير',
    sosNotice: 'أرسلت ليلى نداء SOS',
    timeUp: 'انتهى وقت اللعب لليوم',
    lockButton: 'اقفل الآن',
    task: 'اكتمل الواجب',
    granted: '‏+15 دقيقة',
    youtubeTitle: '‏KidGate — رقابة أبوية للهاتف والحاسوب والتلفاز',
    youtubeDescription: 'يوم عادي مع KidGate، من جرس المدرسة حتى وقت النوم.',
  },
};
