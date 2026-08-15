// errors.ts (العربية)

export const errors = {
  timeRequestAlreadyResolved: 'تمت معالجة هذا الطلب بالفعل من قبل ولي أمر آخر.',
  emailAlreadyInUse: 'هذا البريد الإلكتروني مسجل بالفعل.',
  invalidEmail: 'عنوان البريد الإلكتروني غير صالح.',
  weakPassword: 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.',
  invalidEmailOrPassword: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
  tooManyRequests: 'عدد كبير جدًا من المحاولات. يرجى المحاولة لاحقًا.',
  somethingWentWrong: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
  unableToCreateAccount: 'تعذر إنشاء الحساب. يرجى المحاولة مرة أخرى.',
  unableToSignIn: 'تعذر تسجيل الدخول. يرجى المحاولة مرة أخرى.',
  unableToJoinFamilyAccount: 'تعذر الانضمام إلى حساب العائلة. يرجى المحاولة مرة أخرى.',
  enterEmailAddress: 'يرجى إدخال عنوان بريدك الإلكتروني.',
  unableToCreatePairingCode: 'تعذر إنشاء رمز الاقتران. يرجى المحاولة مرة أخرى.',
  unableToRedeemPairingCode: 'رمز الاقتران غير صحيح أو انتهت صلاحيته.',
  unableToClaimChildPairing: 'تعذر ربط جهاز الطفل. يرجى المحاولة مرة أخرى.',
  unableToPollChildPairing: 'تعذر التحقق من حالة الاقتران.',
  unableToConfirmChildPairing: 'تعذر تأكيد عملية الاقتران. يرجى المحاولة مرة أخرى.',
  unableToRejectChildPairing: 'تعذر رفض عملية الاقتران. يرجى المحاولة مرة أخرى.',
  photoCaptureCancelled: 'تم إلغاء التقاط الصورة.',
  unableToOpenCamera:
    'تعذر فتح الكاميرا. يرجى السماح بالوصول إلى الكاميرا من إعدادات الجهاز.',
  noPhotoCaptured: 'لم يتم التقاط أي صورة.',
  simulatorCameraHint:
    'في المحاكي، قم أولاً بتفعيل الكاميرا من: Simulator ← Camera ← Front Camera، ثم أعد تجربة SOS. وللحصول على صورة حقيقية، اختبر التطبيق على جهاز iPhone فعلي.',
  notSignedInReopenApp:
    'أنت غير مسجل الدخول. يرجى إغلاق التطبيق وإعادة فتحه ثم المحاولة مرة أخرى.',
  accountMismatchSignOut:
    'يوجد تعارض في الحساب. يرجى تسجيل الخروج ثم تسجيل الدخول مرة أخرى.',
  storageUploadUnauthorized: 'تعذر رفع الصورة حاليًا. يرجى المحاولة مرة أخرى بعد قليل.',
  storageNotSetup: 'تعذر رفع الصورة حاليًا. يرجى المحاولة مرة أخرى بعد قليل.',
  noNetworkConnection:
    'لا يوجد اتصال بالشبكة. يرجى التحقق من Wi-Fi أو بيانات الهاتف والمحاولة مرة أخرى.',
  connectionFailedTitle: 'فشل الاتصال',
  connectionFailedBody:
    'تعذر على KidGate الاتصال. يرجى التحقق من Wi-Fi أو بيانات الهاتف، ثم اختر "إعادة الاتصال".',
  reconnect: 'إعادة الاتصال',
  unableToUploadPhoto: 'تعذر رفع الصورة. يرجى المحاولة مرة أخرى.',
  premiumSubscriptionRequired:
    'تتطلب هذه الميزة Premium. يبقى الحد اليومي وساعات الحظر والموقع وSOS مجانًا.',
  trialEndedCannotJoinFamily:
    'انتهت الفترة التجريبية المجانية. يرجى الاشتراك في Premium للانضمام إلى عائلة أخرى.',

  notFamilyMember: 'لم تعد عضوًا في هذه العائلة. يرجى طلب دعوة جديدة من مالك العائلة.',
  familyNotCreated: 'يرجى إنشاء عائلتك أولاً، ثم دعوة أحد الوالدين.',
  childDeviceNotAllowed: 'هذا جهاز طفل، لذلك لا يمكنه إدارة إعدادات العائلة.',
  deviceCredentialMissing:
    'يحتاج هذا الجهاز إلى إعادة الاتصال. يرجى إغلاق KidGate وإعادة فتحه ثم المحاولة مرة أخرى.',
  deviceNotFound: 'لم يعد هذا الجهاز ضمن عائلتك.',
  registerParentDeviceFirst:
    'يرجى إعداد هذا الجهاز كجهاز للوالدين أولاً ثم المحاولة مرة أخرى.',
  pairingCodeFormat: 'يرجى إدخال الرمز المكون من 6 أحرف.',
  pairingCodeUsed: 'تم استخدام هذا الرمز بالفعل. يرجى طلب رمز جديد.',
  pairingCodeExpiredChild: 'انتهت صلاحية هذا الرمز. يرجى أن يطلب طفلك رمزًا جديدًا.',
  pairingCodeExpiredParent:
    'انتهت صلاحية هذا الرمز. يرجى طلب رمز جديد من الوالد الآخر.',
  pairingOwnFamily: 'هذه هي عائلتك بالفعل، ولا حاجة للانضمام إليها.',
  pairingSessionNotFound: 'طلب الاقتران هذا لم يعد متاحًا.',
  pairingAlreadyCompleted: 'هذا الجهاز مقترن بالفعل.',
  pairingDeclined: 'تم رفض طلب الاقتران على الجهاز الآخر.',
  pairingNoParentWaiting:
    'لا يوجد والد بانتظار التأكيد. يرجى بدء الاقتران مرة أخرى من جهاز الوالد.',
  pairingRequestExpired: 'انتهت صلاحية طلب الاقتران. يرجى البدء من جديد.',
  joinRequestNotFound: 'طلب الانضمام هذا لم يعد متاحًا.',
  joinRequestResolved: 'تمت معالجة طلب الانضمام بالفعل.',
  joinRequestExpired: 'انتهت صلاحية طلب الانضمام. يرجى طلب دعوة جديدة.',
  timeRequestPendingExists: 'لديك بالفعل طلب بانتظار الرد.',
  timeRequestCooldown: 'يرجى الانتظار قليلًا قبل إرسال طلب آخر.',
  deviceClockOutOfRange:
    'يبدو أن التاريخ والوقت على هذا الجهاز غير صحيحين. يرجى تفعيل الضبط التلقائي للوقت.',
  locationSharingDisabled:
    'مشاركة الموقع معطلة لهذا الجهاز. يرجى تفعيلها من إعدادات الجهاز ثم المحاولة مرة أخرى.',
  childDeviceNoPushToken:
    'لا يمكن لهذا الجهاز استقبال الطلبات بعد. يرجى فتح KidGate على جهاز الطفل والسماح بالإشعارات.',
  unableToRequestLocation: 'تعذر طلب تحديث الموقع حاليًا. يرجى المحاولة مرة أخرى.',
  unableToVerifyPurchase:
    'تعذر التحقق من عملية الشراء. يرجى المحاولة مرة أخرى بعد قليل.',
  noPurchasesToRestore: 'لا توجد أي عمليات شراء يمكن استعادتها لهذا الحساب.',
  noActiveSubscription: 'لم يتم العثور على اشتراك نشط لهذا الحساب.',
  unableToRestorePurchases: 'تعذر استعادة المشتريات حاليًا. يرجى المحاولة مرة أخرى.',
  alreadyInFamily: 'أنت بالفعل عضو في هذه العائلة.',
  leaveFamilyBeforeJoining: 'يرجى مغادرة عائلتك الحالية قبل الانضمام إلى عائلة أخرى.',
  deviceLimitReached: 'تغطي هذه الخطة جهاز طفل واحدًا. اشترك لإضافة جهاز آخر.',
};
