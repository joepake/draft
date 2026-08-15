export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate على الويب',
  title: 'السماح لمتصفح',
  subtitle: 'أدِر العائلة من الكمبيوتر',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro: 'لا يصل أي متصفح إلى عائلتك إلا بعد أن تسمح له من هذا الهاتف.',
  stepsTitle: 'على الكمبيوتر',
  step1: 'افتح {{url}} في المتصفح.',
  step2: 'اختر «تسجيل الدخول بتطبيق KidGate».',
  step3: 'امسح رمز QR الظاهر بالكاميرا في الأسفل.',
  scanHint: 'أبقِ رمز QR داخل الإطار.',
  manualTitle: 'أدخل الرمز المكوّن من 6 خانات',
  manualHint: 'الرمز مكتوب أسفل رمز QR على الكمبيوتر.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'متابعة',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'السماح لهذا المتصفح؟',
  confirmBody:
    'سيحصل على نفس صلاحيات هذا الهاتف: يرى أين أطفالك، ويغيّر الحدود، ويقفل الأجهزة، ويوافق على الطلبات. لا تسمح إلا إذا كنت أنت من يسجّل الدخول.',
  confirmCodeLabel: 'الرمز الظاهر على الكمبيوتر',
  approveButton: 'سماح',
  declineButton: 'عدم السماح',
  declinedToast: 'لم يتم السماح للمتصفح.',
  approvedTitle: 'تم السماح للمتصفح',
  approvedBody: 'الكمبيوتر يسجّل الدخول الآن. يمكنك ترك الهاتف.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'رمز QR هذا ليس رمز تسجيل دخول للويب. تأكّد من أن شاشة تسجيل الدخول مفتوحة على الكمبيوتر.',
  expired: 'انتهت صلاحية الرمز. اعرض رمزًا جديدًا على الكمبيوتر.',
  alreadyUsed: 'تم استخدام هذا الرمز من قبل. اعرض رمزًا جديدًا على الكمبيوتر.',
  notFound: 'الرمز غير صالح. تحقّق من الخانات الست وحاول مرة أخرى.',
  failed: 'تعذّر إكمال الطلب. يرجى المحاولة مرة أخرى.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'المتصفحات المسموح لها',
  sessionsEmpty: 'لا يوجد متصفح مسجّل الدخول إلى حسابك.',
  sessionsRevoke: 'تسجيل الخروج',
  sessionExpires: 'تنتهي {{when}}',
  revokedToast: 'تم تسجيل خروج ذلك المتصفح.',
} as const;
