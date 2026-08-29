/**
 * Arabic. No string here leads with `{{app}}`: it is filled with an app name the
 * product does not control — Latin more often than not — and a strongly-typed
 * Latin word at the head of a paragraph flips the direction of the Arabic
 * behind it. The sentences are built so the Arabic leads instead, which is the
 * fix `arabicBidi` enforces with an RLM for the placeholders it knows by name.
 */
export const report = {
  title: 'التقرير الأسبوعي',
  subtitle: 'ما لاحظه KidGate خلال الأسبوع.',
  weekOf: 'الأسبوع {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'أُرسل يوم الأحد',
  triggerManual: 'أنشأته بنفسك',

  statScreenTime: 'وقت الشاشة',
  statDailyAverage: 'المعدل اليومي',
  statBlockedApps: 'تطبيقات محظورة',
  statBlockedWebVisits: 'مواقع مُرشَّحة',

  trendUp: 'أكثر بمقدار {{value}} عن الأسبوع السابق',
  trendDown: 'أقل بمقدار {{value}} عن الأسبوع السابق',
  trendFlat: 'قريب من الأسبوع السابق',
  trendFirstWeek: 'أول أسبوع تم قياسه',
  barThisWeek: 'هذا الأسبوع',
  barLastWeek: 'الأسبوع الماضي',

  highlights: 'ما يستحق المعرفة',
  sevAttention: 'يستحق النظر',
  sevNotable: 'لافت',
  sevInfo: 'للعلم',

  findingUsageUp:
    'ارتفع وقت الشاشة بنسبة {{percent}}% — أكثر من الأسبوع الماضي بـ {{delta}}.',
  findingUsageDown:
    'انخفض وقت الشاشة بنسبة {{percent}}% — أقل من الأسبوع الماضي بـ {{delta}}.',
  findingUsageFlat: 'بقي وقت الشاشة عند {{total}}.',
  findingLateNight_one: 'ليلة واحدة بعد الحادية عشرة — حتى {{time}}.',
  findingLateNight_two: 'ليلتان بعد الحادية عشرة — أقصاهما حتى {{time}}.',
  findingLateNight_few: '{{count}} ليالٍ بعد الحادية عشرة — أقصاها حتى {{time}}.',
  findingLateNight_many: '{{count}} ليلة بعد الحادية عشرة — أقصاها حتى {{time}}.',
  findingLateNight_other: '{{count}} ليلة بعد الحادية عشرة — أقصاها حتى {{time}}.',
  findingNewTopApp: 'ظهر تطبيق {{app}} هذا الأسبوع وأخذ بالفعل {{duration}}.',
  findingAppSurge:
    'ارتفع تطبيق {{app}} بمقدار {{delta}} عن الأسبوع الماضي — {{duration}} إجمالًا.',
  findingLimitHit_one: 'بلغ الاستخدام الحد اليومي {{limit}} في يوم واحد.',
  findingLimitHit_two: 'بلغ الاستخدام الحد اليومي {{limit}} في يومين.',
  findingLimitHit_few: 'بلغ الاستخدام الحد اليومي {{limit}} في {{count}} أيام.',
  findingLimitHit_many: 'بلغ الاستخدام الحد اليومي {{limit}} في {{count}} يومًا.',
  findingLimitHit_other: 'بلغ الاستخدام الحد اليومي {{limit}} في {{count}} يوم.',
  findingBlockedApps:
    'حُظرت {{count}} محاولة فتح للتطبيقات، مقابل {{previous}} الأسبوع الماضي.',
  findingBlockedWeb: 'رُشِّح {{count}} موقعًا، مقابل {{previous}} الأسبوع الماضي.',
  findingQuietWeek: 'أسبوع هادئ — {{total}} إجمالًا، ولا شيء يحتاج إليك.',

  // النصف الإيجابي من التقرير. كل جملة تذكر ما حدث والرقم الذي يسنده، ولا
  // تمدح — `docs/COPY_STYLE.md` يمنع الإطراء كما يمنع التهويل.
  //
  // الصياغة اسمية ومبنية للمجهول: جنس الطفل غير معروف للمنتج، والفعل في
  // الماضي هو بالضبط التخمين الذي يجب تفاديه هنا.
  findingLimitRespected: 'الحد اليومي {{limit}} لم يُبلَغ في أي يوم من أيام الأسبوع.',
  findingLateNightGone_one:
    'لا ليالي متأخرة هذا الأسبوع، بعد ليلة واحدة الأسبوع الماضي.',
  findingLateNightGone_two: 'لا ليالي متأخرة هذا الأسبوع، بعد ليلتين الأسبوع الماضي.',
  findingLateNightGone_few:
    'لا ليالي متأخرة هذا الأسبوع، بعد {{count}} ليالٍ الأسبوع الماضي.',
  findingLateNightGone_many:
    'لا ليالي متأخرة هذا الأسبوع، بعد {{count}} ليلة الأسبوع الماضي.',
  findingLateNightGone_other:
    'لا ليالي متأخرة هذا الأسبوع، بعد {{count}} ليلة الأسبوع الماضي.',
  findingBlockedAppsDown:
    '{{count}} عمليات فتح لتطبيقات محظورة، مقابل {{previous}} الأسبوع الماضي.',
  findingBlockedWebDown:
    '{{count}} مواقع تمت تصفيتها، مقابل {{previous}} الأسبوع الماضي.',
  findingLearningTime: '{{duration}} في تطبيقات تعليمية، معظمها في {{app}}.',
  findingTasksDone_one: 'مهمة واحدة أُنجزت، بمكافأة {{bonus}}.',
  findingTasksDone_two: 'مهمتان أُنجزتا، بمكافأة {{bonus}}.',
  findingTasksDone_few: '{{count}} مهام أُنجزت، بمكافأة {{bonus}}.',
  findingTasksDone_many: '{{count}} مهمة أُنجزت، بمكافأة {{bonus}}.',
  findingTasksDone_other: '{{count}} مهمة أُنجزت، بمكافأة {{bonus}}.',
  findingAskedFirst_one: 'طلب واحد أُرسل، بدلًا من الالتفاف على القواعد.',
  findingAskedFirst_two: 'طلبان أُرسلا، بدلًا من الالتفاف على القواعد.',
  findingAskedFirst_few: '{{count}} طلبات أُرسلت، بدلًا من الالتفاف على القواعد.',
  findingAskedFirst_many: '{{count}} طلبًا أُرسل، بدلًا من الالتفاف على القواعد.',
  findingAskedFirst_other: '{{count}} طلب أُرسل، بدلًا من الالتفاف على القواعد.',
  findingCheckedIn: 'جميع طلبات الاطمئنان البالغة {{asked}} تمت الإجابة عنها.',

  narrativeTitle: 'باختصار',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'إليك ما يمكنكما فعله',
  actionDailyLimit: 'تحديد الحد اليومي عند {{duration}}',
  actionDailyLimitWhy: 'كان هذا هو المعدل اليومي الأسبوع الماضي.',
  actionBlockedHours: 'تحديد ساعات الحظر',
  actionBlockedHoursLateNight: 'حظر ساعات وقت متأخر من الليل',
  actionOnDevice: 'على {{device}}',
  finePrint:
    'تغطي الأرقام من {{from}} إلى {{to}}، على كل أجهزة العائلة. وقت الشاشة هو ما أبلغت عنه الأجهزة؛ والدقائق التي تعذّر قياسها ليست ضمن أي مجموع.',

  generate: 'اكتب تقرير هذا الأسبوع',
  generating: 'جارٍ الكتابة…',
  share: 'مشاركة',
  copySummary: 'نسخ الملخص',
  copied: 'تم نسخ الملخص.',
  shareFailed: 'تعذّر فتح قائمة المشاركة.',
  shareFooterDesc: 'يساعد KidGate الوالدين على معرفة وقت الشاشة والموقع والرسائل.',
  shareFooterCta: 'احصل على التطبيق من kidgate.app/get',

  emptyTitle: 'لا يوجد تقرير بعد',
  emptyBody:
    'يصل تقرير كل مساء أحد. يمكنك أيضًا كتابة تقرير هذا الأسبوع الآن — وهو يغطي آخر سبعة أيام.',
  noUsage:
    'لم يُسجَّل أي وقت شاشة خلال الأسبوعين الماضيين، فلا شيء لنبلغ عنه بعد. الجهاز غير المتصل لا يبلغ عن شيء، وهذا يختلف عن أسبوع هادئ.',
  rateLimited: 'محاولات كثيرة. انتظر دقيقة.',
  loadFailedTitle: 'تعذّر تحميل التقارير',
  loadFailed: 'تعذّر فتح التقارير. اسحب للأسفل للمحاولة مرة أخرى.',
  failed: 'تعذّرت كتابة التقرير. حاول بعد قليل.',

  historyTitle: 'الأسابيع السابقة',
  historyEmpty: 'تُحفظ التقارير التي تصلك من الآن هنا لمدة سنة.',

  hubToday: 'اليوم',
  hubTodayEmpty: 'لم يُرسل أي جهاز بيانات اليوم بعد.',
  hubByChild: 'حسب الطفل',
  hubByDevice: 'حسب الجهاز',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'لكل طفل',
  childrenNote: 'الأسبوعان نفسهما، لكل جهاز. النسب محسوبة من إجمالي العائلة.',
  colChild: 'الطفل',
  colScreenTime: 'وقت الشاشة',
  colShare: 'الحصة',
  colChange: 'مقارنة بالأسبوع الماضي',
  colLimit: 'فوق الحد',
  colLateNights: 'ليالٍ متأخرة',
  colTopApp: 'الأكثر استخدامًا',
  unnamedChild: 'بلا اسم',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'قريب من السابق',
  noLimit: 'بلا حد',
  noTopApp: '—',
  limitDays_one: 'يوم واحد',
  limitDays_two: 'يومان',
  limitDays_few: '{{count}} أيام',
  limitDays_many: '{{count}} يومًا',
  limitDays_other: '{{count}} يوم',
  lateNightsNone: 'لا شيء',
  busiest: 'الأكثر وقت شاشة',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'ما الذي ستراه',
  guestPreviewHint: 'مثال توضيحي — تظهر الأرقام الحقيقية بعد ربط جهاز',
  guestTitle: 'اعرف أين ذهب الأسبوع',
  guestDescription:
    'سجّل الدخول لتقيس اليوم مقابل يوم عادي، وتقارن أبناءك جنبًا إلى جنب، وتستلم تقريرًا مكتوبًا كل أحد.',
  guestBenefitTrendTitle: 'اليوم، مقابل المعتاد',
  guestBenefitTrendBody:
    'الرقم وحده لا يعني شيئًا. يُرسم اليوم دائمًا مقابل المتوسط اليومي لعائلتك نفسها.',
  guestBenefitChildTitle: 'كل طفل، جنبًا إلى جنب',
  guestBenefitChildBody: 'حصة كل طفل من اليوم، بلونه الخاص، عبر كل جهاز يستخدمه.',
  guestBenefitWeeklyTitle: 'تقرير كل أحد',
  guestBenefitWeeklyBody:
    'ما الذي تغيّر، وأي التطبيقات ازداد استخدامها، والسهر المتأخر — محفوظ لمدة سنة.',
  guestSignInButton: 'تسجيل الدخول',
  guestCreateAccount: 'إنشاء حساب ولي أمر',
} as const;
