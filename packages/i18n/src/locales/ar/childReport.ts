/** انظر `en/childReport.ts` — النبرة نفسها، ولا يجوز الخلط بين المجموعين. */
export const childReport = {
  title: 'التقرير',
  devicesCount: '{{count}} جهاز',
  devicesCount_one: 'جهاز واحد',
  devicesCount_two: 'جهازان',
  devicesCount_few: '{{count}} أجهزة',
  devicesCount_many: '{{count}} جهازًا',

  periodToday: 'اليوم',
  periodWeek: '7 أيام',
  periodMonth: '30 يومًا',

  heroScreenOn: 'وقت الاستخدام الفعلي',
  // Arabic leads, so the duration placeholder never opens the string — the trap
  // the file header and `arabicBidi` describe.
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote: 'رقم تقديري — أحد الأجهزة يذكر مدة الاستخدام دون أن يذكر وقته.',
  heroOverlap: 'منها {{value}} على شاشتين في وقت واحد، وتُحتسب مرتين عند جمع الأجهزة.',
  barsExplain: 'الدقيقة على جهازين في وقت واحد تُحتسب دقيقتين عند جمع الأجهزة.',
  heroEmpty: 'لا يوجد استخدام مسجّل بعد',

  trendUp: 'أكثر بمقدار {{value}} عن الفترة السابقة',
  trendDown: 'أقل بمقدار {{value}} عن الفترة السابقة',
  trendFlat: 'قريب من الفترة السابقة',
  trendFirst: 'لا توجد فترة سابقة للمقارنة',

  coverage: 'تم قياس {{percent}}٪ من هذه الفترة',
  wellLateNights: 'سهر ليلي',
  coverageNone: 'لا يستطيع أي جهاز هنا الإبلاغ عن وقت تشغيل شاشته',

  barCombined: 'مجموع الأجهزة',

  sectionDays: 'يومًا بيوم',
  backToPeriod: 'العودة إلى الفترة كاملة',
  bandLatestDay: 'آخر يوم تم قياسه',
  sectionWhen: 'متى كانت الشاشات مضاءة',
  bandMerged: 'كل الأجهزة',
  bandTooThin: 'ما قيس من هذا اليوم أقل من أن يُرسم.',

  sectionDevices: 'أي جهاز',
  deviceTotalsOnly: 'المجموع فقط',
  openDeviceReport: 'فتح تقرير {{name}}',

  sectionApps: 'الأكثر استخدامًا',
  appOnDevices: 'على {{count}} جهاز',
  appOnDevices_one: 'على جهاز واحد',
  appOnDevices_two: 'على جهازين',
  appOnDevices_few: 'على {{count}} أجهزة',
  appOnDevices_many: 'على {{count}} جهازًا',
  appsEmpty: 'لا يوجد تفصيل حسب التطبيق بعد.',

  emptyNoDevices: 'لم يُسنَد أي جهاز إلى هذا الطفل بعد.',
  emptyAssign: 'إسناد جهاز',
  partialError: 'تعذّرت قراءة أحد الأجهزة. الأرقام أدناه لا تشمله.',
};
