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

  trendUp: 'أكثر من الأسبوع السابق بـ {{value}}',
  trendDown: 'أقل من الأسبوع السابق بـ {{value}}',
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
  findingLateNight:
    'سهر بعد الحادية عشرة ليلاً في {{count}} ليلة، وأكثرها تأخرًا حتى {{time}}.',
  findingNewTopApp: 'ظهر تطبيق {{app}} هذا الأسبوع وأخذ بالفعل {{duration}}.',
  findingAppSurge:
    'ارتفع تطبيق {{app}} بمقدار {{delta}} عن الأسبوع الماضي — {{duration}} إجمالًا.',
  findingLimitHit: 'بلغ الحد اليومي {{limit}} في {{count}} يوم.',
  findingBlockedApps:
    'حُظرت {{count}} محاولة فتح للتطبيقات، مقابل {{previous}} الأسبوع الماضي.',
  findingBlockedWeb: 'رُشِّح {{count}} موقعًا، مقابل {{previous}} الأسبوع الماضي.',
  findingQuietWeek: 'أسبوع هادئ — {{total}} إجمالًا، ولا شيء يحتاج إليك.',

  narrativeTitle: 'باختصار',
  finePrint:
    'تغطي الأرقام من {{from}} إلى {{to}}، على كل أجهزة العائلة. وقت الشاشة هو ما أبلغت عنه الأجهزة؛ والدقائق التي تعذّر قياسها ليست ضمن أي مجموع.',

  generate: 'اكتب تقرير هذا الأسبوع',
  generating: 'جارٍ الكتابة…',
  share: 'مشاركة',
  copySummary: 'نسخ الملخص',
  copied: 'تم نسخ الملخص.',
  shareFailed: 'تعذّر فتح قائمة المشاركة.',

  emptyTitle: 'لا يوجد تقرير بعد',
  emptyBody:
    'يصل تقرير كل مساء أحد. يمكنك أيضًا كتابة تقرير هذا الأسبوع الآن — وهو يغطي آخر سبعة أيام.',
  noUsage:
    'لم يُسجَّل أي وقت شاشة خلال الأسبوعين الماضيين، فلا شيء لنبلغ عنه بعد. الجهاز المطفأ لا يبلغ عن شيء، وهذا يختلف عن أسبوع هادئ.',
  rateLimited: 'محاولات كثيرة. انتظر دقيقة.',
  failed: 'تعذّرت كتابة التقرير. حاول بعد قليل.',

  historyTitle: 'الأسابيع السابقة',
  historyEmpty: 'تُحفظ التقارير التي تصلك من الآن هنا لمدة سنة.',
} as const;
