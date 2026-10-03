export const screenTime = {
  turnOnScreenTime: 'تفعيل مدة استخدام الجهاز',
  finishScreenTimeSetup: 'إكمال إعداد مدة استخدام الجهاز',
  screenTimeNeededForControls:
    'تتطلب التطبيقات المحظورة وساعات الحظر والحد اليومي والقفل تفعيل مدة استخدام الجهاز على هذا الجهاز.',
  screenTimeNeededForLimits:
    'بدون مدة استخدام الجهاز، لا يمكن تطبيق القفل أو ساعات الحظر أو الحد اليومي أو التطبيقات المحظورة.',
  screenTimeStepOpenKidGate: 'افتح KidGate على جهاز الطفل هذا.',
  screenTimeStepAllowUsage: 'في شاشة الحالة، اختر السماح باستخدام التطبيقات والمواقع.',
  screenTimeStepTapAllow: 'عند الطلب، اختر السماح.',
  screenTimeStepReturnHereAuto: 'عد إلى هنا — تتحدث الحالة تلقائيًا.',
  screenTimeDeniedStepOpenSettings: 'على جهاز الطفل، افتح الإعدادات.',
  screenTimeDeniedStepFindKidGate: 'ابحث عن KidGate في القائمة.',
  screenTimeDeniedStepTurnOnRestrictions: 'فعّل مدة استخدام الجهاز.',
  screenTimeDeniedStepOpenKidGateAgain: 'افتح KidGate مجددًا على جهاز الطفل.',
  screenTimeDeniedStepReturnWhenReady:
    'عد إلى هنا — ستختفي هذه البطاقة عند اكتمال الإعداد.',
  screenTimeSetupStep1: 'اختر السماح باستخدام التطبيقات والمواقع أدناه.',
  screenTimeSetupStep2: 'عند الطلب، اختر السماح في نافذة استخدام التطبيقات والمواقع.',
  screenTimeSetupStep3: 'عد إلى هنا بعد إغلاق النافذة.',
  screenTimeDeniedStep1: 'اختر فتح إعدادات التطبيق أدناه.',
  screenTimeDeniedStep2: 'في صفحة {{appName}}، فعّل مدة استخدام الجهاز.',
  screenTimeDeniedStep3: 'عد إلى {{appName}} — ستختفي هذه البطاقة.',
  screenTimeBannerTitleDenied: 'تفعيل مدة استخدام الجهاز',
  screenTimeBannerTitleRequest: 'السماح باستخدام التطبيقات والمواقع',
  screenTimeBannerBodyDenied:
    'يحتاج {{appName}} إلى تفعيل مدة استخدام الجهاز في الإعدادات.',
  screenTimeBannerBodyRequest:
    'يتيح هذا لوالديك قفل التطبيقات وضبط ساعات الحظر على هذا الجهاز.',
  screenTimeAuthPasscode:
    'يحتاج هذا الجهاز إلى رمز دخول قبل أن يتمكن KidGate من استخدام مدة استخدام الجهاز. يرجى تعيين رمز من الإعدادات ثم المحاولة مرة أخرى.',
  screenTimeAuthConflict:
    'يتحكم تطبيق آخر بالفعل في مدة استخدام الجهاز على هذا الجهاز. يرجى إزالة ذلك التطبيق ثم المحاولة مرة أخرى.',
  screenTimeAuthRestricted:
    'يمنع قيد مفروض على هذا الجهاز KidGate من استخدام مدة استخدام الجهاز. يرجى طلب إزالته من الشخص الذي يدير هذا الجهاز.',
  usageAccessBannerTitle: 'تفعيل الوصول إلى الاستخدام',
  usageAccessBannerBody:
    'يحتاج KidGate إلى الوصول إلى الاستخدام لتتبّع وقت الشاشة وتطبيق الحدود.',
  usageAccessStepOpenSettings: 'اختر فتح الإعدادات أدناه.',
  usageAccessStepFindKidGate: 'ابحث عن KidGate وفعّل الوصول إلى الاستخدام.',
  usageAccessStepReturn: 'عد إلى هنا — تتحدث الحالة تلقائيًا.',
  noDailyLimitSet: 'لا يوجد حد يومي',
  limitReachedStatus: '{{used}} / {{limit}} · انتهى الحد',
  minutesUsedStatus: 'استُخدم {{used}} / {{limit}}',
  usageUpdatesHint:
    'يُحدَّث الاستخدام كل بضع دقائق ما دامت مراقبة مدة استخدام الجهاز مفعّلة.',
  dailyLimitMinutes: '{{limitMinutes}} دقيقة',
} as const;
