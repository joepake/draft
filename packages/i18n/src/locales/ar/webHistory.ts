export const webHistory = {
  title: 'سجل الويب',
  fallbackDeviceName: 'جهاز الطفل',
  syncNote:
    'قد يستغرق سجل الويب بضع دقائق ليظهر في هذه الشاشة — وقتًا أطول إذا لم يكن الجهاز متصلاً بالإنترنت أو إذا أُغلق بشكل غير متوقع.',
  syncNoteTv:
    'يتصل هذا التلفاز بشكل دوري فقط، لذا قد يستغرق ظهور سجل الويب في هذه الشاشة حتى 30 دقيقة — وقتًا أطول في حال عدم وجود اتصال بالإنترنت.',
  summarySites: 'مواقع ظهرت',
  summaryBlocked: 'مواقع محظورة',
  sourceNoteIos:
    'على iPhone تأتي هذه البيانات من تقرير «وقت الشاشة» من Apple: المواقع التي قضى فيها طفلك وقتًا، وليس كل صفحة فتحها.',
  sourceNoteAndroid:
    'على Android تأتي هذه البيانات من مرشّح DNS في KidGate: المواقع التي استعلم عنها هذا الهاتف، وليس كل صفحة فتحها.',
  sourceNoteMacos:
    'على Mac تأتي هذه البيانات من مرشّح KidGate: المواقع التي استعلم عنها هذا الجهاز، وليس كل صفحة فتحها.',
  sourceNoteExtension:
    'في هذا المتصفح يرى KidGate الصفحات التي فُتحت فعلًا — هذا المتصفح وحده، وليس بقية الكمبيوتر.',
  filterOffNoteAndroid:
    'مرشّح الويب متوقف، لذا لا يسجّل هذا الجهاز ولا يحظر أي شيء. فعّله لترى أين يذهب.',
  filterOffNoteMacos:
    'مرشّح الويب متوقف، لذا لا يسجّل هذا الـMac ولا يحظر أي شيء. فعّله لترى أين يذهب.',
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
  sectionUncategorized: 'مواقع أخرى',
  blockCategory: 'حظر {{category}}',
  blockCategoryConfirmTitle: 'حظر {{category}}؟',
  blockCategoryConfirmBody:
    'سيتم رفض كل موقع يصنّفه KidGate ضمن {{category}} على هذا الجهاز. يمكنك إيقاف ذلك من مرشّح الويب.',
  blockCategoryConfirmAction: 'حظر',
  blockCategoryDone: 'تم حظر {{category}}.',
  unblockCategory: 'رفع الحظر عن {{category}}',
  unblockCategoryConfirmTitle: 'رفع الحظر عن {{category}}؟',
  unblockCategoryConfirmBody:
    'ستعود المواقع التي يصنّفها KidGate ضمن {{category}} متاحة على هذا الجهاز.',
  unblockCategoryConfirmAction: 'رفع الحظر',
  unblockCategoryDone: 'تم رفع الحظر عن {{category}}.',
  serviceSites: '{{count}} موقع',
  serviceNote:
    'المواقع التي تحمّلها الخدمة بنفسها مجمَّعة في صف واحد: فتح YouTube مرة واحدة يصل إلى عدة مواقع. اضغط على الصف لعرضها.',
  showMoreDays: 'عرض {{count}} أيام إضافية',
  rollupTitle: 'الزيارات حسب نوع الموقع',
  rollupShare: '{{percent}}٪',
  rollupNote:
    'عمليات بحث، لا دقائق — مقطع طويل واحد يعني القليل منها، وعشر دقائق من التصفح تعني العشرات.',
  rollupNoteAi:
    'بعض الفئات استُنتجت من اسم الموقع بدل مطابقتها بموقع معروف، لذا قد يكون بعضها غير دقيق.',
  rollupNoteExtension:
    'صفحات، لا دقائق — مقطع طويل واحد يُحتسب مرة، وعشر دقائق من التصفح تُحتسب بالعشرات.',
  hoursTitle: 'متى تصفّح',
  hoursNote:
    'عدد الصفحات المحمّلة لكل ساعة، بحسب ساعة الجهاز. التبويب المفتوح طوال بعد الظهر يُحتسب مرة واحدة.',
  hoursEmpty: 'لا صفحات اليوم بعد.',
  sourceNoteChild: 'مدمج من {{count}} أجهزة. يسجّل كل جهاز ما يراه مرشحه فقط.',
  filterOffNoteChild:
    'مرشح الويب متوقف على جميع الأجهزة، لذا لا تُسجَّل الزيارات الجديدة.',
} as const;
