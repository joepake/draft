export const protection = {
  permissionOffOnChildDevice: 'Bu izin çocuğun cihazında kapalı.',
  permissionNotSetUpYet: 'Bu izin henüz ayarlanmadı.',
  permissionRestrictedByIos: 'Bu izin iOS ayarları tarafından kısıtlanmış.',
  permissionStatusUnknown: 'KidGate bu iznin durumunu okuyamadı.',
  kidGateOffline: 'KidGate çevrimdışı',
  childAppMayBeOffline:
    'Çocuğun cihazındaki uygulama kapatılmış, silinmiş veya çevrimdışı olabilir.',
  statusNotUpdatedYet: 'Durum henüz güncellenmedi',
  openKidGateOnChildPhone: 'Lütfen çocuğun cihazında KidGate’i bir kez açın.',
  screenTimePermission: 'Ekran Süresi izni',
  screenTimeAccessOff:
    'Ekran Süresi erişimi kapalı; bu yüzden uygulama engelleme ve limitler çalışmayı durdurabilir.',
  screenTimeSetupIncomplete: 'Çocuğun cihazında Ekran Süresi kurulumu tamamlanmamış.',
  usageAccessPermission: 'Kullanım Erişimi',
  usageAccessOff:
    'Kullanım Erişimi kapalı; bu yüzden KidGate ekran süresini takip edemiyor ve limitleri uygulayamıyor.',
  usageAccessSetupIncomplete:
    'Lütfen Android ayarlarında KidGate için Kullanım Erişimi’ni açın.',
  overlayPermission: 'Diğer uygulamaların üzerinde göster',
  batteryOptimizationPermission: 'Sınırsız pil',
  batteryOptimizationOff:
    'KidGate’in korumaları sürdürebilmesi için lütfen sınırsız pil kullanımına izin verin.',
  exactAlarmPermission: 'Alarmlar ve hatırlatıcılar',
  exactAlarmOff:
    'Engellenen saatlerin zamanında başlaması için Alarmlar ve hatırlatıcılar iznini verin.',
  accessibilityPermission: 'Erişilebilirlik (kilit yardımcısı)',
  accessibilityOff:
    'Kilidin diğer uygulamaların üzerinde kalması için lütfen KidGate’in Erişilebilirlik iznini açın.',
  overlayOffForLock:
    'Kilit ekranının diğer uygulamaları kapatabilmesi için lütfen Diğer uygulamaların üzerinde göster iznini açın.',
  lockNotReadyTitle: 'Kilit hazır değil',
  lockNotReadyBody:
    'Diğer uygulamaların üzerinde göster ve Erişilebilirlik etkinleştirilene kadar KidGate bu Android cihazı kilitli tutamaz. Lütfen çocuğun cihazında KidGate’i açın ve şunları tamamlayın:',
  lockNotReadyBodyIos:
    'Çocuğun cihazında Ekran Süresi erişimi onaylanana kadar KidGate bu iPhone’u kilitleyemez. Lütfen o cihazda KidGate’i açın ve şunları tamamlayın:',
  locationPermission: 'Konum izni',
  notificationsPermission: 'Bildirim izni',
  backgroundUpdates: 'Arka plan güncellemeleri',
  backgroundUpdatesRestricted: 'Bu cihazda arka plan güncellemeleri kısıtlanmış.',
  turnOnBackgroundUpdatesInSettings:
    'KidGate’in senkronize kalabilmesi için lütfen bunu cihaz Ayarları’ndan açın.',
  inactive: 'Etkin değil',
  openKidGateToSyncProtections:
    'Korumaların yeniden senkronize olabilmesi için lütfen bu cihazda KidGate’i açın.',
  needsAttention: 'İlgilenilmesi gerekiyor',
  protectionsNeedSetupAndroid:
    'Bazı korumaların çocuğun cihazında kurulması gerekiyor.',
  protectionsNeedSetupIos: 'Bazı korumaların çocuğun cihazında kurulması gerekiyor.',
  protected: 'Korunuyor',
  protectionsLookHealthy: 'KidGate korumaları sorunsuz çalışıyor.',
  healthBadgeProtected: 'Yeşil — korunuyor',
  healthBadgeWarning: 'Sarı — kurulum gerekiyor',
  healthBadgeInactive: 'Kırmızı — çocuğun cihazı çevrimdışı',
  iosFeatureSupportEvaluating: 'Bu özelliğin iOS desteği değerlendiriliyor.',
  iosUpgradeRequiredNote:
    'Bunun için iOS 16 veya üzeri gerekir. Çocuk cihazını Ayarlar › Genel › Yazılım Güncelleme bölümünden güncelleyin. Güncelleme sunulmuyorsa bu iPad veya iPhone, Apple’ın destekleyemeyeceği kadar eskidir.',
  iosUpgradeActionLabel: 'iOS 16 gerekir',
  lockUnlockNote:
    'Çocuk erişime izin verdikten sonra cihazı Ekran Süresi üzerinden kilitler.',
  scheduleNote:
    'En fazla 3 Engellenen Saatler aralığı, uygulamaları Ekran Süresi üzerinden engeller.',
  individualAppBlockingNote:
    'Çocuk, 6 haneli Ebeveyn PIN’ini girdikten sonra uygulamaları seçer.',
  tamperAlertsNote:
    'İzin değişikliklerini ve çocuğun cihazındaki uygulamanın bir süredir güncellenmediğini bildirir.',
  appReviewRemindersNote:
    'iOS yükleme olaylarını paylaşmaz; uygulamaları çocuğun cihazıyla birlikte düzenli olarak gözden geçirin.',
} as const;
