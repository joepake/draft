export const blockedApps = {
  title: 'Engellenen Uygulamalar',
  installApprovalTitle: 'Yeni uygulamaları onayla',
  installApprovalSubtitleOn:
    'Bundan sonra yüklenen uygulamalar, siz onaylayana kadar engelli kalır.',
  installApprovalSubtitleOff:
    'Yeni yüklenen her uygulamayı siz onaylayana kadar engellemek için açın.',
  installApprovalSubtitleIos:
    'iPhone ve iPad’de bunun yerine App Store gizlenir — Apple, uygulamaların tek tek onaylanmasına izin vermez.',
  installApprovalStatusOn: 'Yeni uygulamalar onay gerektiriyor',
  installApprovalStatusOff: 'Yeni uygulamalar serbestçe açılıyor',
  installApprovalStatusIos: 'App Store gizli',
  installApprovalAccessibilityLabel: 'Yeni uygulamaları onayla',
  installApprovalInfoTitle: 'Onay nasıl çalışır',
  installApprovalInfoLine1:
    'Çocuğun cihazı, bunu açtıktan sonra yüklenen her uygulamayı sizi beklemeden engeller.',
  installApprovalInfoLine2:
    'Bir bildirim alırsınız ve uygulama, siz izin verene kadar aşağıda ve Uygulamalar’da görünür.',
  installApprovalInfoLine3:
    'Bir uygulamaya izin vermek onun hemen açılmasını sağlar. İzin vermediğiniz bir uygulama ise engelli kalmaya devam eder.',
  pendingSectionTitle: 'Otomatik olarak engellendi, sizi bekliyor',
  pendingSectionSubtitle:
    'Onayı açtıktan sonra yüklendi. Buradakilerin hiçbiri çocuğun cihazında seçilmedi.',
  pendingInstalledAt: '{{when}} yüklendi',
  pendingEmpty: 'Onay bekleyen yeni uygulama yok.',
  allowApp: 'İzin ver',
  allowingApp: 'İzin veriliyor…',
  toastAppAllowed: '{{appName}} artık açılabilir.',
  toastAllowFailed: 'Bu uygulamaya izin verilemedi. Lütfen tekrar deneyin.',
  toastInstallApprovalSaveFailed: 'Kaydedilemedi. Lütfen tekrar deneyin.',
  toastChooseAppsFirst:
    'Lütfen çocuğunuzdan önce KidGate Ayarları’nı açıp engellenecek uygulamaları seçmesini isteyin.',
  toastSaveFailed: 'Kaydedilemedi. Lütfen tekrar deneyin.',
  statusBlockingOn: 'Engelleme açık',
  statusBlockingOff: 'Engelleme kapalı',
  heroTitle: 'Engellenmek üzere seçilen uygulamalar',
  heroSubtitle:
    'Bu uygulamalar ve kategoriler çocuğun cihazında seçilir. KidGate, incelemeniz için listeyi buraya senkronize eder.',
  statAppsLabel: 'Uygulamalar',
  statCategoriesLabel: 'Kategoriler',
  toggleTitle: 'Uygulama Engellemeyi Etkinleştir',
  toggleSubtitleOn: 'Seçilen uygulamalar çocuğun cihazında engelleniyor.',
  toggleSubtitleOff: 'Seçilen uygulamaları uzaktan engellemek için açın.',
  toggleAccessibilityLabel: 'Uygulama Engellemeyi Etkinleştir',
  emptyTitle: 'Henüz engellenen uygulama yok',
  emptySubtitle:
    'Çocuğun cihazında KidGate Ayarları → Engellenecek uygulamaları seç seçeneğini açın, Ebeveyn PIN’ini girin ve seçimi kaydedin.',
  sectionTitle: 'Engelleme listesi',
  privacyTitle: 'Uygulama listesi çocuğun cihazından alınır',
  privacySubtitle:
    'iOS’ta Apple, uygulamaların gerçek adlarını ebeveyn cihazlarından gizleyebilir. Diğer cihazlarda seçilen uygulama adları buraya senkronize edilir. Listeyi değiştirmek için yine de çocuğun cihazında Ebeveyn PIN’i gerekir.',
  infoTitle: 'Nasıl çalışır',
  infoLine1: 'Ebeveyn PIN’ini girdikten sonra uygulamaları çocuğun cihazında seçin.',
  infoLine2:
    'Kilit, Engellenen Saatler ve Günlük Limit yine tüm uygulamaları engeller.',
  infoLine3: 'Engellemeyi bu ekrandan istediğiniz zaman açıp kapatabilirsiniz.',
  appKind: 'Uygulama',
  categoryKind: 'Kategori',
  websiteKind: 'Web sitesi',
  noAppsSelectedYet: 'Henüz uygulama seçilmedi',
  blockedAppCount: '{{count}} uygulama',
  blockedAppCount_one: '{{count}} uygulama',
  blockedCategoryCount: '{{count}} kategori',
  blockedCategoryCount_one: '{{count}} kategori',
  blockedItemCount: '{{count}} engellenen öğe',
  blockedItemCount_one: '{{count}} engellenen öğe',
  blockedListReady: 'Engelleme listesi hazır',
  blockedAppsLabel: 'Engellenen Uygulamalar',
  appsConfiguredChip: 'Uygulamalar ayarlandı',
  appsNotSetChip: 'Uygulamalar ayarlanmadı',
  appBlockingSectionTitle: 'Uygulama Engelleme',
  appBlockingSectionDescription:
    'Ebeveynlerin bu cihazda hangi uygulamaları engelleyebileceğini seçin.',
  savedItemsForBlocking: 'Engelleme için {{count}} öğe kaydedildi.',
  savedItemsForBlocking_one: 'Engelleme için {{count}} öğe kaydedildi.',
  noAppsSelected: 'Hiçbir uygulama seçilmedi.',
  unableToOpenAppPicker: 'Uygulama seçici açılamadı. Lütfen tekrar deneyin.',
  wizardStepPin: 'Ayarlar sorduğunda ebeveyn PIN’ini girin.',
  wizardStepChoose:
    'Engellenecek uygulamaları seç’i açın, uygulamaları işaretleyin ve kaydedin.',
} as const;
