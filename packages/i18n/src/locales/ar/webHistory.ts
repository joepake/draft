export const webHistory = {
  title: 'سجل الويب',
  fallbackDeviceName: 'جهاز الطفل',
  summarySites: 'مواقع ظهرت',
  summaryBlocked: 'مواقع محظورة',
  sourceNoteIos:
    'على iPhone تأتي هذه البيانات من تقرير «وقت الشاشة» من Apple: المواقع التي قضى فيها طفلك وقتًا، وليس كل صفحة فتحها.',
  sourceNoteAndroid:
    'على Android تأتي هذه البيانات من مرشّح DNS في KidGate: المواقع التي استعلم عنها هذا الهاتف، وليس كل صفحة فتحها.',
  filterOffNoteAndroid:
    'مرشّح الويب متوقف، لذا لا يسجّل هذا الهاتف ولا يحظر أي شيء. فعّله لترى أين يذهب.',
  filterOffNoteIos:
    'مرشّح الويب متوقف، لذا لا يتم حظر أي شيء. هذه القائمة تُظهر فقط أين ذهب الهاتف.',
  filterAll: 'كل المواقع',
  filterBlocked: 'المحظورة فقط',
  emptyTitle: 'لا يوجد تسجيل بعد',
  emptyBody: 'تظهر المواقع هنا عندما يتصفّح جهاز الطفل وKidGate يعمل.',
  emptyBlockedBody: 'لم يتم حظر أي شيء بعد.',
  dayBlockedBadge: 'محظورة: {{count}}',
  visitsMeta: '{{count}} زيارة',
  blockedMeta: 'حُظر {{count}} مرة · {{category}}',
  categoryUnknown: 'قائمة الحظر',
  showMoreDays: 'عرض {{count}} أيام إضافية',
  rollupTitle: 'أين ذهب الوقت',
  rollupShare: '{{percent}}٪',
  rollupNote:
    'نسبة الزيارات المسجّلة حسب نوع الموقع. Android فقط — لا يخبر iPhone تطبيق KidGate بنوع النطاق.',
} as const;
