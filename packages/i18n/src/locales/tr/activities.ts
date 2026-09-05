export const activities = {
  title: 'Etkinlikler',
  subtitleAllDevices: 'Tüm cihazlardaki en son etkinlikler',
  subtitleTimelineForDevice: '{{deviceName}} zaman çizelgesi',
  subtitleTimelineForChild: '{{childName}} zaman çizelgesi',
  fallbackDeviceName: 'cihaz',
  liveBadge: 'Canlı',
  errorTitle: 'Etkinlikler yüklenemedi',
  tryAgain: 'Tekrar dene',

  emptyTitleAll: 'Henüz etkinlik yok',
  emptyTitleDevice: 'Bu cihaz için etkinlik yok',
  emptyDescriptionAll:
    'Çocuğunuzun cihazındaki kilitleme, kilit açma ve SOS olayları burada görünecektir.',
  emptyDescriptionDevice:
    'Başka bir cihaz seçin veya bu cihazdan kilitleme, kilit açma ve SOS olaylarının gelmesini bekleyin.',

  guestEmptyTitle: 'Etkinlikleriniz',
  guestEmptyDescription:
    'Bir çocuk cihazı bağlandıktan sonra kilitleme, kilit açma, SOS ve uygulama olayları burada gerçek zamanlı olarak görüntülenir.',
  guestSignInButton: 'Giriş yap',
  guestCreateAccount: 'Ebeveyn hesabı oluştur',
  guestSubtitle: 'Çocuğunuzun cihaz etkinliklerini takip etmek için giriş yapın.',

  guestPreviewHeading: 'Görecekleriniz',
  guestPreviewLock: 'Cihaz kilitli',
  guestPreviewSos: 'SOS uyarısı',
  guestPreviewScreenTime: 'Ekran Süresi güncellemesi',
  guestPreviewHint: 'Örnek — Gerçek etkinlikler cihaz bağlandıktan sonra görüntülenir.',

  activityTypeLocked: 'Kilitlendi',
  activityTypeUnlocked: 'Kilidi açıldı',
  activityTypeAppOpened: 'Uygulama açıldı',
  activityTypeAppBlocked: 'Uygulama engellendi',
  activityTypeAppInstalled: 'Uygulama yüklendi',
  activityTypeAppRemoved: 'Uygulama kaldırıldı',
  activityTypePlaceEnter: 'Konuma giriş',
  activityTypePlaceExit: 'Konumdan ayrıldı',
  activityTypeTamper: 'Koruma',
  activityTypeScreenTime: 'Ekran Süresi',
  activityTypeCheckIn: 'Durum bildirimi',
  activityTypeLocationRequest: 'Konum',
  activityTypeTimeRequest: 'Süre isteği',
  activityTypeRewardTask: 'Ödül görevi',
  activityTypeSearchAlert: 'Arama uyarısı',
  activityTypeWebFilter: 'Web filtresi',
  activityTypeEmergency: 'Acil Durum',
  activityTypeUnknown: 'Etkinlik',

  sosEscapeTitle: 'Acil durum kilidi açma',
  sosEscapeBody: 'SOS bu cihazın kilidini {{minutes}} dakika açtı.',
  sosEscapeRepeatTitle: 'Acil durum kilidi açma (bugün {{count}} kez)',
  sosEscapeRepeatBody:
    'SOS bu cihazın kilidini {{minutes}} dakika açtı. Bugün {{count}} kez oldu.',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Engellenen bir uygulama açıldı ve KidGate kapattı.',
  appInstalledTitle: 'Uygulama yüklendi',
  appInstalledBody: '{{appName}} uygulaması çocuğun cihazına yüklendi.',
  appInstalledPendingBody:
    '{{appName}} uygulaması çocuğun cihazına yüklendi ve siz izin verene kadar engelli.',

  messageAlertTitle: 'Endişe verici mesaj içeriği',
  messageAlertBody: '{{appName}} içinde işaretli bir kelime tespit edildi.',
  messageAlertBodyOutgoing:
    'Çocuğunuzun {{appName}} içinde yazdığı bir mesajda işaretli bir kelime tespit edildi.',
  messageAlertTitleSearch: 'Endişe verici arama',
  messageAlertBodySearch:
    '{{appName}} üzerinde yapılan bir aramada işaretli bir kelime tespit edildi.',
  activityTypeMessageAlert: 'Mesaj uyarısı',
  messageCheckedTitle: 'Bakıldı, endişelenecek bir şey yok',
  messageCheckedBody:
    '{{appName}} içinde izlenen bir kelime göründü ve bağlam içinde zararsız bulundu.',
  activityTypeMessageChecked: 'Bakıldı',
  appRemovedTitle: 'Uygulama kaldırıldı',
  appRemovedBody: '{{appName}} uygulaması çocuğun cihazından kaldırıldı.',
  extensionInstalledTitle: 'Tarayıcı uzantısı eklendi',
  extensionInstalledBody: '{{appName}} uzantısı çocuğun tarayıcısına eklendi.',
  extensionRemovedTitle: 'Tarayıcı uzantısı kaldırıldı',
  extensionRemovedBody: '{{appName}} uzantısı çocuğun tarayıcısından kaldırıldı.',

  placeEnterTitle: '{{placeName}} konumuna girdi',
  placeEnterBody: 'Çocuğun cihazı kayıtlı bir konuma ulaştı.',

  placeExitTitle: '{{placeName}} konumundan ayrıldı',
  placeExitBody: 'Çocuğun cihazı kayıtlı konumdan ayrıldı.',

  tamperTitle: 'Bir koruma izni devre dışı bırakıldı',
  tamperFallbackTitle: 'Bir koruma izni devre dışı bırakıldı',
  tamperFallbackBody: 'Çocuğun cihazındaki bir koruma izni devre dışı bırakıldı.',

  tamperOverlayTitle: '“Diğer uygulamaların üzerinde göster” izni kapatıldı',
  tamperOverlayBody:
    'Bu izin yeniden etkinleştirilene kadar kilit ekranı diğer uygulamaların üzerinde görünmeyebilir.',

  tamperAccessibilityTitle: 'Erişilebilirlik devre dışı bırakıldı',
  tamperAccessibilityBody:
    'Erişilebilirlik yeniden etkinleştirilene kadar uygulama engelleme ve koruma özellikleri tam olarak çalışmayabilir.',
  tamperUsageAccessTitle: 'Uygulama kullanım erişimi kapatıldı',
  tamperUsageAccessBody:
    'KidGate çocuğun cihazında uygulama kullanımını yeniden okuyabilene kadar uygulama sınırları ve Engellenen Saatler çalışmayabilir.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'Ekran Süresi erişimi kapatıldı',
  tamperScreenTimeIosBody:
    'Çocuğun cihazında Ekran Süresi erişimine yeniden izin verilene kadar uygulama sınırları ve Engellenen Saatler çalışmayabilir.',
  tamperUsageAccessAndroidTitle: 'Kullanım Erişimi kapatıldı',
  tamperUsageAccessAndroidBody:
    'Çocuğun cihazında KidGate için Kullanım Erişimi yeniden açılana kadar uygulama sınırları ve Engellenen Saatler çalışmayabilir.',

  tamperBatteryTitle: 'Sınırsız pil kullanımı devre dışı bırakıldı',
  tamperBatteryBody:
    'Pil kullanımı tekrar Sınırsız olarak ayarlanana kadar sistem KidGate uygulamasını duraklatabilir.',

  tamperExactAlarmTitle: 'Alarmlar ve hatırlatıcılar kapatıldı',
  tamperExactAlarmBody:
    'Alarmlar ve hatırlatıcılar iznine yeniden izin verilene kadar Engellenen Saatler geç başlayabilir veya geç bitebilir.',

  tamperNotificationsTitle: 'Bildirimler devre dışı bırakıldı',
  tamperNotificationsBody:
    'Uzaktan komutlar ve ebeveyn bildirimleri bu cihaza güvenilir şekilde ulaşmayabilir.',

  tamperLocationTitle: 'Konum devre dışı bırakıldı',
  tamperLocationBody:
    'Konum izni yeniden verilene kadar ebeveynler konum güncellemelerini alamaz.',

  tamperCameraTitle: 'Kamera devre dışı bırakıldı',
  tamperCameraBody:
    'Kamera izni yeniden verilene kadar SOS ve Check-In fotoğrafları gönderilemeyebilir.',

  tamperBackgroundRefreshTitle: 'Arka Planda Uygulama Yenileme devre dışı bırakıldı',
  tamperBackgroundRefreshBody:
    'Arka Planda Uygulama Yenileme yeniden etkinleştirilene kadar KidGate arka planda daha seyrek güncellenebilir.',

  tamperDeviceClockTitle: 'Tarih veya saat değiştirildi',
  tamperDeviceClockBody:
    'Bu cihazın saati artık doğru zamanla eşleşmiyor. Ekran Süresi ve Engellenen Saatler doğru zamanı kullanmaya devam edecektir.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: '“Diğer uygulamaların üzerinde göster” izni devre dışı bırakıldı.',
  tamperAccessibility: 'Erişilebilirlik hizmeti devre dışı bırakıldı.',
  tamperUsageAccess: 'Kullanım erişimi devre dışı bırakıldı.',
  tamperBattery: 'Sınırsız pil kullanımı devre dışı bırakıldı.',
  tamperExactAlarm: 'Alarmlar ve hatırlatıcılar izni kapatıldı.',
  tamperNotifications: 'Bildirim izni devre dışı bırakıldı.',
  tamperLocation: 'Konum izni devre dışı bırakıldı.',
  tamperCamera: 'Kamera izni devre dışı bırakıldı.',
  tamperBackgroundRefresh: 'Arka Planda Uygulama Yenileme devre dışı bırakıldı.',

  filterAllDevices: 'Tüm cihazlar',
  // The child tier of the feed filter — "All" would read as all devices.
  filterAllChildren: 'Herkes',
  dateToday: 'Bugün',
  dateYesterday: 'Dün',

  filterByDevice: '{{label}} filtrele',
  filterByChild: 'Yalnızca {{label}} göster',

  openFullSosHistory: 'Tüm SOS geçmişini aç',
  openActivityDetails: 'Ayrıntıları görüntüle',

  unknownDevice: 'Bilinmeyen cihaz',

  basicActivityNote:
    'Kilitleme, kilit açma ve cihaz olayları Etkinlikler bölümüne kaydedilir.',
  tamperUninstallProtectionTitle: 'Kaldırma koruması kapatıldı',
  tamperUninstallProtectionBody: 'KidGate artık bu telefondan kaldırılabilir.',
} as const;
