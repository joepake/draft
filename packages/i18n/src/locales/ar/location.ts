export const location = {
  title: 'الموقع',
  fallbackDeviceName: 'جهاز الطفل',
  toastUpdateFailed: 'تعذر تحديث مشاركة الموقع. يُرجى المحاولة مرة أخرى.',
  toggleLabel: 'مشاركة الموقع',
  toggleHint: 'بعد تفعيل هذا الخيار، افتح KidGate مرة واحدة على هذا الجهاز.',
  toggleAccessibilityLabel: 'مشاركة الموقع',
  lastKnownLocation: 'آخر موقع معروف',
  noLocationHint: 'قم بتفعيل مشاركة الموقع، ثم افتح KidGate مرة واحدة على هذا الجهاز.',
  waitingForLocation: 'جارٍ انتظار الموقع',
  updatedAt: 'تم التحديث {{date}}',
  openInMaps: 'فتح في الخرائط',
  openInMapsAccessibility: 'فتح في الخرائط',
  refreshButton: 'تحديث الموقع',
  refreshingButton: 'جارٍ التحديث…',
  refreshAccessibility: 'تحديث الموقع',
  toastEnableSharingFirst: 'يرجى تفعيل مشاركة الموقع أولاً قبل طلب تحديث الموقع.',
  activityTitleRefreshRequested: 'تم طلب تحديث الموقع',
  activityDescriptionRefreshRequested: 'تم طلب إرسال الموقع الحالي من {{deviceName}}.',
  toastRefreshSent: 'سيقوم {{deviceName}} بتحديث موقعه بمجرد استلام الطلب.',
  toastRefreshFailed: 'تعذر طلب تحديث الموقع. يُرجى المحاولة مرة أخرى.',
  toastChildNeedsNotifications:
    'يرجى فتح KidGate على جهاز الطفل والسماح بالإشعارات حتى يتمكن الجهاز من استلام طلبات تحديث الموقع.',
  checkInBadge: 'تسجيل الوصول',
  movementHistoryTitle: 'سجل المواقع',
  historyEmpty: 'لا يوجد سجل حتى الآن. ستظهر المواقع بعد تحديث الموقع أو تسجيل الوصول.',
  historyHighlightAccessibility: 'تمييز {{place}} على الخريطة',
  historyOpenMapsAccessibility: 'فتح {{place}} في الخرائط',
  latestBadge: 'الأحدث',
  unableToRequestLocationRefresh: 'تعذر طلب تحديث الموقع',
  locationBannerTitle: 'تفعيل الموقع',
  locationBannerBody:
    'يرغب أحد الوالدين في معرفة موقع هذا الجهاز للتأكد من وصولك بأمان.',
  allowLocationButton: 'السماح بالموقع',
  locationNotAllowed:
    'لم يتم منح إذن الموقع بعد. افتح الإعدادات ← KidGate ← الموقع (أو فعّل خدمات الموقع أولاً). إذا لم يظهر خيار "الموقع"، فاختر "السماح بالموقع" مرة أخرى.',
  locationServicesOff:
    'خدمات الموقع معطلة على هذا الجهاز. افتح الإعدادات ← الخصوصية والأمان ← خدمات الموقع، ثم فعّلها، وبعد ذلك ارجع إلى KidGate واختر "السماح بالموقع".',
  locationDeniedInSettings:
    'تم رفض إذن الموقع لتطبيق KidGate. افتح الإعدادات ← KidGate ← الموقع، ثم اختر "أثناء استخدام التطبيق" أو "دائمًا".',
  locationEnabled:
    'تم تفعيل الموقع. يُرجى اختيار "دائمًا" حتى يتمكن KidGate من تحديث الموقع حتى عند إغلاق التطبيق.',
  backgroundLocationTitle: 'السماح بالموقع عند إغلاق التطبيق',
  backgroundLocationBody:
    'يحتاج KidGate إلى الوصول إلى الموقع في الخلفية حتى يتمكن الوالدان من معرفة موقع هذا الجهاز حتى عند إغلاق التطبيق، وذلك للمساعدة في الحفاظ على سلامة العائلة.',
  locationNote: 'يعرض موقع الطفل عند تفعيل مشاركة الموقع على جهاز الطفل.',
  placeAlertsNote: 'يرسل تنبيهات الموقع للمنزل والمدرسة وغيرها من الأماكن الآمنة.',
  mapNoLocationsEmpty: 'لا توجد مواقع لعرضها حتى الآن',
  mapUnavailable:
    'الخريطة غير متاحة. يُرجى التحقق من اتصال الإنترنت والمحاولة مرة أخرى.',
  historyShowMore: 'عرض {{count}} أماكن إضافية',
} as const;
