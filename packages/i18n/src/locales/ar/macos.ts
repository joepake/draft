/**
 * نافذة وكيل سطح المكتب نفسه (macOS وWindows).
 * سياق كل مفتاح: انظر en/macos.ts.
 */
export const macos = {
  headingNow: 'الآن',
  headingEnforce: 'ما يمكن لهذا الـ Mac تطبيقه',
  headingEnforceHint: 'ما ضبطه والداك، ومدى قوة هذا الـ Mac في الحفاظ عليه.',
  headingRemovable: 'مدى سهولة إزالته',

  parentAccessBody: 'أدخل رمز PIN الوالدين لاختيار التطبيقات المحظورة على هذا الـ Mac.',
  checking: 'جارٍ التحقق…',

  enforcing: 'الحماية تعمل',
  enforcingYes: 'نعم',
  enforcingFailed: 'لا — فشل {{count}} تحقق متتالٍ',
  enforcingFailed_one: 'لا — فشل التحقق الأخير',
  enforcingFailed_two: 'لا — فشل تحققان متتاليان',
  enforcingFailed_few: 'لا — فشلت {{count}} تحققات متتالية',
  enforcingFailed_many: 'لا — فشل {{count}} تحققًا متتاليًا',

  lockState: 'الجهاز مقفل',
  lockStateNo: 'لا',
  stateNotChecked: 'لم يتم التحقق بعد',
  lockStateParent: 'نعم — قفله أحد الوالدين',
  lockStateSchedule: 'نعم — ساعات الحظر',
  lockStateDailyLimit: 'نعم — تم بلوغ الحد اليومي',

  appBlocking: 'حظر التطبيقات',
  appBlockingBestEffort: 'قدر الإمكان — تُغلق التطبيقات بعد فتحها ولا يُمنع فتحها',

  webFilterLabel: 'تصفية الويب',
  webFilterUnavailable: 'غير متاح على هذا الـ Mac',
  notSupportedOnThisDevice: 'غير مدعوم على هذا الجهاز',
  filterAwaitingApproval: 'في انتظار الموافقة في إعدادات النظام',
  filterSwitchedOff: 'مُعطَّل في إعدادات النظام',
  filterInterrupted: 'توقّف بعد مشكلة — سيعيده KidGate',
  setupFilterApprovalBody: 'فعّل KidGate في إضافات الشبكة لتبدأ تصفية الويب.',
  setupFilterSwitchBody:
    'خيار Filter Network Content مُعطَّل لـ KidGate. فعّله من جديد لمتابعة التصفية.',
  setupOpenSettings: 'فتح الإعدادات',
  setupTitle: 'أكمل إعداد هذا الجهاز',
  setupRowLabel: 'الأذونات',
  setupRowHint: 'تحقّق مما لا يزال هذا الجهاز بحاجة إلى السماح به.',
  setupStepBlockedNoPrompt:
    'جرى الرفض، وهذا الجهاز لا يسأل مرة أخرى — فعّل KidGate من الإعدادات ← الخصوصية والأمان.',
  setupSubtitle:
    'يطلب النظام إذنًا لكل بند من هذه البنود، ولا يستطيع الموافقة إلا من يجلس أمام هذا الجهاز. إنهاؤها الآن يعني ألّا يُسأل طفلك لاحقًا.',
  setupStepFilterApprovalTitle: 'اعتماد تصفية الويب',
  setupStepFilterSwitchTitle: 'Filter Network Content',
  setupStepFilterSwitchWaiting: 'يظهر في إعدادات النظام بمجرد اعتماد الخطوة أعلاه.',
  setupStepLocationBody:
    'يتيح لعائلتك معرفة مكان هذا الجهاز. لا يُشارَك أي شيء حتى تفعّل «مشاركة الموقع».',
  setupStepCameraTitle: 'الكاميرا',
  setupStepCameraBody:
    'يرفق صورة عندما يرسل طفلك نداء SOS أو يردّ على الاطمئنان. لا تُلتقط أي صورة الآن.',
  setupStepDone: 'تم الإعداد — لم يعد هنا ما تفعله.',
  setupStepBlocked:
    'سبق رفضه. لا يسأل macOS سوى مرة واحدة — فعّل KidGate من «الخصوصية والأمان».',

  scheduleLabel: 'ساعات الحظر',
  dailyLimitLabel: 'الحد اليومي',
  enforcedHere: 'مفعّل، ويطبّقه KidGate',

  screenTimeLabel: 'وقت استخدام الشاشة',
  screenTimeAgentMeasured: 'يحسبه KidGate. الوقت الذي لا يعمل فيه KidGate لا يُحتسب.',

  batteryLabel: 'البطارية',
  batteryReported: 'يُبلَّغ عنها للعائلة',
  batteryNone: 'هذا الـ Mac بلا بطارية',

  locationLabel: 'الموقع',
  locationOff: 'إيقاف',
  locationCoarse: 'تقريبي — عبر Wi-Fi وليس GPS',

  accountLabel: 'حساب الطفل',
  accountStandard: 'قياسي',
  accountAdmin: 'مسؤول — يمكن لهذا الحساب إيقاف KidGate تمامًا',

  restartLabel: 'يُعاد تشغيله إذا أُغلق',
  restartYes: 'نعم',
  restartNo: 'لا — الإعداد غير مكتمل',

  forceQuitLabel: 'عدد مرات إغلاق KidGate',

  startAtLoginSectionTitle: 'بدء التشغيل',
  startAtLoginSectionDescription:
    'يقيس KidGate وقت استخدام الشاشة ويطبّق القواعد فقط أثناء تشغيله.',
  startAtLoginLabel: 'فتح KidGate عند تسجيل الدخول',
  startAtLoginHintOn: 'يبدأ KidGate مع هذا الجهاز ويُفتح من جديد إذا أُغلق.',
  startAtLoginHintOff: 'لا يُقاس أو يُحظر شيء حتى يفتح أحد KidGate من جديد.',
  startAtLoginUnavailable: 'لم يسمح هذا الجهاز لـ KidGate بإضافة نفسه إلى بدء التشغيل.',

  stillRunningTitle: 'KidGate لا يزال يعمل',
  stillRunningBodyMac: 'افتحه من جديد من أيقونة KidGate في شريط القوائم.',
  stillRunningBodyWindows: 'افتحه من جديد من أيقونة KidGate في منطقة الإشعارات.',

  updateAvailableTitle: 'يتوفّر إصدار أحدث من KidGate',
  updateAvailableBody: 'الإصدار {{version}} من KidGate جاهز للتنزيل.',
  updateAction: 'الحصول على التحديث',

  chooseApps: 'اختيار التطبيقات المراد حظرها',
  chooseAppsHint:
    'اختر التطبيقات المحظورة على هذا الـ Mac. يمكن للوالدين تشغيل الحظر أو إيقافه من الهاتف.',
  saveSelection: 'حفظ',
  noAppsFound: 'لم يُعثر على تطبيقات في مجلد Applications.',
};
