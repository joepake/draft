/**
 * نافذة وكيل سطح المكتب نفسه (macOS وWindows).
 * سياق كل مفتاح: انظر en/macos.ts.
 */
export const macos = {
  headingNow: 'الآن',
  headingEnforce: 'ما يمكن لهذا الـ Mac تطبيقه',
  headingEnforceHint: 'ما ضبطه والداك، ومدى قوة هذا الـ Mac في الحفاظ عليه.',
  headingRemovable: 'مدى سهولة إزالته',

  parentAccessBody: 'أدخل رمز PIN الوالدين لاختيار التطبيقات المحظورة على هذا الجهاز.',
  parentAccessBodyMac:
    'أدخل رمز PIN الوالدين لإكمال إعداد هذا الـ Mac أو لتغيير ما إذا كان KidGate يُفتح عند تسجيل الدخول.',
  checking: 'جارٍ التحقق…',

  enforcing: 'الحماية تعمل',
  enforcingYes: 'نعم',
  enforcingFailed: 'انقطعت الحماية · فشل {{count}} تحقق متتالٍ',
  enforcingFailed_one: 'انقطعت الحماية · فشل التحقق الأخير',
  enforcingFailed_two: 'انقطعت الحماية · فشل تحققان متتاليان',
  enforcingFailed_few: 'انقطعت الحماية · فشلت {{count}} تحققات متتالية',
  enforcingFailed_many: 'انقطعت الحماية · فشل {{count}} تحققًا متتاليًا',

  lockState: 'الجهاز مقفل',
  lockStateNo: 'لا',
  stateNotChecked: 'لم يتم التحقق بعد',
  lockStateParent: 'نعم — قفله أحد الوالدين',
  lockStateSchedule: 'نعم — ساعات الحظر',
  lockStateDailyLimit: 'نعم — تم بلوغ الحد اليومي',

  webFilterLabel: 'تصفية الويب',
  webFilterUnavailable: 'غير متاح على هذا الـ Mac',
  notSupportedOnThisDevice: 'غير مدعوم على هذا الجهاز',
  filterAwaitingApproval: 'في انتظار الموافقة في إعدادات النظام',
  filterSwitchedOff: 'مُعطَّل في إعدادات النظام',
  webFilterOffChip: 'فلتر الويب معطّل',
  filterInterrupted: 'توقّف بعد مشكلة — سيعيده KidGate',
  filterNeedsService: 'تحتاج إلى خدمة KidGate التي تعمل في الخلفية',
  setupFilterApprovalBody: 'فعّل KidGate في إضافات الشبكة لتبدأ تصفية الويب.',
  setupFilterSwitchBody:
    'خيار Filter Network Content مُعطَّل لـ KidGate. فعّله من جديد لمتابعة التصفية.',
  setupOpenSettings: 'فتح الإعدادات',
  filterExtensionBody:
    'تصفية الويب لا تعمل على هذا الجهاز. إضافة KidGate لمتصفح Chrome تُصفّي المواقع داخل ذلك المتصفح.',
  filterExtensionAction: 'الحصول على الإضافة',
  setupTitle: 'أكمل إعداد هذا الجهاز',
  setupRowLabel: 'الأذونات',
  setupRowHint: 'تحقّق مما لا يزال هذا الجهاز بحاجة إلى السماح به.',
  setupStepBlockedNoPrompt:
    'جرى الرفض، وهذا الجهاز لا يسأل مرة أخرى — فعّل KidGate من الإعدادات ← الخصوصية والأمان.',
  setupSubtitle:
    'يطلب النظام إذنًا لكل بند من هذه البنود، ولا يستطيع الموافقة إلا من يجلس أمام هذا الجهاز. إنهاؤها الآن يعني ألّا يُسأل طفلك لاحقًا.',
  setupStepFilterApprovalTitle: 'اعتماد تصفية الويب',
  setupStepFilterSwitchTitle: 'فلترة محتوى الشبكة',

  setupStepFilterWindowsTitle: 'تصفية الويب',

  setupFilterWindowsWaiting: 'جارٍ التشغيل. يستغرق هذا عادةً بضع ثوانٍ.',

  setupFilterWindowsNeedsService:
    'تحتاج تصفية الويب إلى خدمة KidGate التي تعمل في الخلفية. أعد تثبيت KidGate كمسؤول لتشغيلها.',

  setupFilterWindowsPortInUse:
    'يوجد برنامج آخر على هذا الكمبيوتر يتولى عناوين الويب بالفعل، لذا لا يمكن لـ KidGate تصفيتها هنا.',
  setupStepFilterSwitchWaiting: 'يظهر في إعدادات النظام بمجرد اعتماد الخطوة أعلاه.',
  setupStepLocationBody:
    'يتيح لعائلتك معرفة مكان هذا الجهاز. لا يُشارَك أي شيء حتى تفعّل «مشاركة الموقع» في تطبيق KidGate.',
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

  stillRunningTitle: '\u200FKidGate لا يزال يعمل',
  stillRunningBodyMac: 'افتحه من جديد من أيقونة KidGate في شريط القوائم.',
  stillRunningBodyWindows: 'افتحه من جديد من أيقونة KidGate في منطقة الإشعارات.',

  updateAvailableTitle: 'يتوفّر إصدار أحدث من KidGate',
  updateAvailableBody: 'الإصدار {{version}} من KidGate جاهز للتنزيل.',
  updateAction: 'الحصول على التحديث',
  updateDownloading: 'جارٍ التنزيل…',
  updateImportant: 'تحديث مهم',

  chooseApps: 'اختيار التطبيقات المراد حظرها',
  chooseAppsHint:
    'اختر التطبيقات المراد حظرها على هذا الجهاز. يستطيع أحد الوالدين تشغيل الحظر وإيقافه من هاتفه.',
  saveSelection: 'حفظ',
  noAppsFound: 'لم يُعثر على أي تطبيق في هذا الجهاز.',
};
