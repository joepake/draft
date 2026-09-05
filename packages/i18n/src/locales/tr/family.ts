export const family = {
  title: 'Aile',
  connectButton: 'Bağlan',
  connectAccessibility: 'Bir çocuk veya ebeveyn cihazı ekle',
  addDeviceTitle: 'Cihaz ekle',
  addDeviceMessage: 'Neyi bağlamak istiyorsunuz?',
  addChildOption: 'Çocuk cihazı ekle',
  addJoinFamilyOption: 'Aileye katıl',
  addParentOption: 'Ebeveyn davet et',
  loginWebOption: "Web'de giriş yap",
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: '{{deviceName}} cihazını kim kullanıyor?',
  assignSheetBody: 'Ekran süresi ve yıldızlar seçtiğiniz çocuğa sayılır.',
  assignSheetNobody: 'Hiç kimse',
  assignSheetNobodyHint: 'Ortak cihaz — kimseye sayılmaz.',
  assignSheetAddAndAssign: 'Ekle ve ata',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: '{{childName}} şimdi korunsun mu?',
  quickProtectBody:
    'Başlangıç için hazır bir koruma setini açın. Her şeyi daha sonra çocuk profilinden ayrıntılı ayarlayabilirsiniz.',
  quickProtectBedtime: 'Yatma saati için Engellenen Saatler',
  quickProtectBedtimeHint:
    'Cihaz kullanımını gece boyunca, 22.00–07.00 arasında engeller.',
  quickProtectDailyLimit: 'Günlük ekran süresi sınırı',
  quickProtectDailyLimitHint:
    'Günde {{minutes}} dakika, tüm cihazlarında ortak sayılır.',
  quickProtectWebFilter: 'Web filtresi',
  quickProtectWebFilterHint:
    'Yetişkin içeriğini ve diğer riskli kategorileri engeller.',
  quickProtectWebFilterPremium: 'Premium özellik — bir planla birlikte gelir.',
  quickProtectApply: 'Korumayı aç',
  quickProtectSkip: 'Şimdi değil',
  quickProtectDone: 'Koruma açık. İstediğiniz zaman ince ayar yapabilirsiniz.',
  quickProtectPartial:
    'Bazı korumalar kaydedilemedi. Çocuk profilinden tekrar deneyin.',
  pairDeviceFirstTitle: 'Henüz eşleştirilmiş cihaz yok',
  pairDeviceFirstBody:
    'Önce bu çocuk için bir cihaz eşleştirin — Aile sekmesinde tarama simgesine veya "+" düğmesine dokunup Çocuk cihazı ekle’yi seçin. Bu kontrol, bir cihaz bağlanır bağlanmaz çalışmaya başlar.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'Tümünü kilitle',
  unlockAll: 'Tümünün kilidini aç',
  lockAllA11y: '{{childName}} adlı çocuğun tüm cihazlarını kilitle',
  unlockAllA11y: '{{childName}} adlı çocuğun tüm cihazlarının kilidini aç',
  childDetailUnassignTitle: 'Çocuktan kaldırılsın mı?',
  childDetailUnassignBody:
    '{{deviceName}} artık {{childName}} için sayılmayacak ve Atanmadı bölümüne geçecek. Eşleşmiş ve korumalı kalır.',
  childDetailUnassignConfirm: 'Kaldır',
  childDetailUnassignA11y: '{{deviceName}} cihazını bu çocuktan kaldır',
  // The fold control on a group heading.
  collapseGroupA11y: '{{name}} daralt',
  expandGroupA11y: '{{name}} genişlet',
  assignDeviceCta: 'Bir çocuğa ata…',
  unassignedHint: 'Bu cihazlar henüz kimseye sayılmıyor.',
  unassignedHintMember: 'Bu cihazları çocuklara yalnızca aile sahibi atar.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Cihazı olmayan çocuklar',
  // Child detail screen.
  childDetailStarsWell: 'Bu haftaki yıldızlar',
  childStarsA11y: 'Bu haftaki yıldızlar: {{count}}',
  childDetailDevicesTitle: 'Cihazlar',
  childDetailSwipeHint: 'Atamayı kaldırmak için cihazı kaydırın.',
  childDetailAssignMore: 'Başka bir cihaz ata…',
  childDetailAssignSheetTitle: '{{childName}} için cihaz ata',
  childDetailNoDevices:
    'Henüz cihaz yok. Aşağıdan atayın veya Aile sekmesinden yeni bir cihaz eşleyin.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Henüz cihaz yok. Hangi cihazın kime ait olduğunu yalnızca aile sahibi belirler.',
  childDetailEditNameTitle: 'Adı düzenle',
  childDetailColorLabel: 'Renk',
  scanButtonAccessibility: 'Kod tara',
  scanTitle: 'Kod tara',
  scanBody:
    'Kamerayı bir çocuk cihazına, aile davetine veya bilgisayarda gösterilen koda doğrultun.',
  manualCodeLabel: '6 haneli kodu girin',
  manualInstructions: 'Diğer cihazda gösterilen 6 haneli kodu girin.',

  headerHintEmpty: 'Çocuklarınızın cihazlarını yönetin ve koruyun',

  headerHintGuest:
    'Uygulamayı özgürce keşfedin — cihaz bağlamaya hazır olduğunuzda oturum açın.',

  familyCardManage: 'Aileyi, ebeveynleri ve cihazları yönet',

  familyCardJoined: 'Ebeveyn olarak katıldınız',

  chipDeviceCount: '{{count}} cihaz',
  chipDeviceCount_one: '{{count}} cihaz',

  chipOnlineCount: '{{count}} çevrimiçi',
  metaOnlineCount: '{{online}}/{{count}} çevrimiçi',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} Check-In',
  chipCheckInCount_one: '{{count}} Check-In',

  chipRequestCount: '{{count}} istek',
  chipRequestCount_one: '{{count}} istek',

  chipNeedsSetupCount: '{{count}} yapılandırma bekliyor',
  chipNeedsSetupCount_one: '{{count}} yapılandırma bekliyor',

  chipProtectedCount: '{{count}} korumalı',

  childDevicesProtected: '{{count}} cihaz korunuyor',

  chipHealthWarnCount: '{{count}} yapılandırma bekliyor',
  chipHealthWarnCount_one: '{{count}} yapılandırma bekliyor',

  chipHealthInactiveCount: '{{count}} 24 saatten uzun süredir yanıtsız',

  chipBlockedCount: '{{count}} engellendi',

  healthProtected: 'Korunuyor',
  buildOutdated: 'Güncelleme var',
  healthNeedsSetup: 'Kurulum gerekli',
  healthOffline: 'Çevrimdışı',
  devicePausedLabel: 'Duraklatıldı',
  devicePausedHint: 'Ücretsiz planda duraklatıldı — tüm kurallar geçerli',
  parkedBannerTitle: 'İzlemeye devam edeceğiniz cihazı seçin',
  parkedBannerBody:
    'Kurallarınız her cihazda çalışır. Ücretsiz plan yalnızca bir cihazdan rapor alır — onu seçin ya da hepsini korumak için yükseltin.',
  parkedBannerAction: 'Cihaz seç',
  chooseMonitoredTitle: 'Hangi cihaz raporlamalı?',
  chooseMonitoredBody:
    'Tüm kurallar hepsinde çalışmaya devam eder. Yalnızca seçtiğiniz cihaz ekran süresi ve konum gönderir. {{days}} günde bir değiştirebilirsiniz.',
  chooseMonitoredConfirm: 'Bu cihazı izle',
  chooseMonitoredUpgrade: 'Tüm cihazları koru — yükselt',
  chooseMonitoredDone: '{{name}} artık raporlayan cihaz',
  monitoredCooldown: 'Raporlayan cihaz yalnızca {{days}} günde bir değiştirilebilir',
  monitoredChooseFailed: 'Raporlayan cihaz değiştirilemedi',

  cardWhereLabel: 'Konum',

  cardWhereAccessibility: '{{deviceName}} konumunu aç',

  cardTodayLabel: 'Bugün',

  cardTodayUsed: '{{used}} kullanıldı',

  cardTodayNoData: 'Bugün kullanım verisi yok',

  cardTodayAccessibility: '{{deviceName}} kullanım raporunu aç',

  emptyTitle: 'Henüz çocuk cihazı yok',

  emptyDescription:
    'Ekran süresini ve uygulama kullanımını izlemeye başlamak için çocuğunuzun cihazını ekleyin.',

  setupFamilyTitle: 'Ailenizi oluşturun',

  setupFamilyDescription:
    'Çocuklarınızın cihazlarını bağlamak için bir aile oluşturun veya başka bir ebeveynden gelen davetle mevcut bir aileye katılın.',

  createFamilyButton: 'Aile oluştur',

  joinFamilyButton: 'Aileye katıl',

  switchToJoinTitle: 'Başka bir aileye katılmak istiyor musunuz?',

  switchToJoinMessage:
    'Boş aileniz kaldırılacak ve davet kodu kullanarak başka bir aileye katılabileceksiniz. Bağlı bir çocuk cihazı varsa önce onunla ilgili işlemleri tamamlamanız gerekir.',

  guestEmptyTitle: 'Aileniz burada başlıyor',

  guestEmptyDescription:
    'Çocuklarınızın cihazlarını bağlamak, bildirim almak ve sağlıklı ekran süresi sınırları belirlemek için oturum açın.',

  guestConnectButton: 'Giriş yap',

  guestCreateAccount: 'Ebeveyn hesabı oluştur',

  guestBenefitLimitsTitle: 'Ekran süresi ve uygulama sınırları',

  guestBenefitLimitsBody: 'Cihazları kilitleyin ve günlük programlar oluşturun.',

  guestBenefitAlertsTitle: 'SOS ve etkinlik uyarıları',

  guestBenefitAlertsBody: 'Dikkatiniz gerektiğinde anında bildirim alın.',

  guestBenefitLocationTitle: 'Konum ve Check-In',

  guestBenefitLocationBody:
    'Çocuğunuzun nerede olduğunu görün ve güvende olduğunu doğrulamasını isteyin.',

  stepsHeading: 'İlk adımlar',

  step1Title: '“Çocuk cihazı ekle” düğmesine dokunun',

  step1Description: 'Eşleştirme QR kodu burada görünür, taranmaya hazır.',

  step2Title: 'Çocuğun cihazından tarayın',

  step2Description:
    'KidGate’i çocuğunuzun telefonuna veya tabletine yükleyin, “Bu cihaz çocuğa aittir” seçeneğini seçin ve kodu tarayın.',

  connectChildButton: 'Çocuk cihazını bağla',
  listHint: 'Kaldırmak için cihazı sola kaydırın',

  removeAlertTitle: 'Cihaz kaldırılsın mı?',

  removeAlertMessage:
    '{{deviceName}} hesabınızdan kaldırılacaktır. İlgili tüm ek süre istekleri ve etkinlik geçmişi silinecektir.',

  toastRemoveFailed: 'Cihaz kaldırılamadı. Lütfen tekrar deneyin.',

  swipeRemoving: 'Kaldırılıyor…',

  swipeRemove: 'Kaldır',

  deviceNotFound: 'Cihaz bulunamadı',

  deviceMayHaveBeenRemoved: 'Bu cihaz hesabınızdan kaldırılmış olabilir.',

  deviceNotFoundError: 'Cihaz bulunamadı',

  deviceRemovedAlertTitle: 'Cihaz kaldırıldı',

  deviceRemovedAlertMessage:
    'Bir ebeveyn bu cihazı aile hesabından kaldırdı. Yeniden bağlamak için tekrar Çocuk rolünü seçin.',

  deviceNotRegistered: 'Bu cihaz henüz kayıtlı değil.',

  defaultDeviceName: 'Çocuk cihazı',

  fallbackDeviceName: 'Çocuk cihazı',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'Ebeveyn iPhone’u',

  parentAndroid: 'Ebeveyn Android cihazı',

  childIphone: 'Çocuk iPhone’u',

  parentIpad: 'Ebeveyn iPad’i',

  childIpad: 'Çocuk iPad’i',

  childAndroid: 'Çocuk Android cihazı',

  deviceFallbackName: 'Cihaz',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'Windows PC',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'Lütfen cihaz için bir ad girin.',

  deviceNameTooLong: 'Cihaz adı en fazla {{max}} karakter olabilir.',

  lastActiveDate: 'Son etkinlik: {{date}}',

  lastActiveUnknown: 'Yakın zamanda etkinlik yok',

  thisDevice: 'Bu cihaz',

  thisDeviceYou: 'Bu cihaz (Siz)',

  namedDeviceYou: '{{name}} (Siz)',

  deviceNameSaved: 'Cihaz adı güncellendi.',

  deviceSectionTitle: 'Cihaz',

  deviceNameLabel: 'Cihaz adı',

  editDeviceNameTitle: 'Cihaz adını düzenle',

  editDeviceNameSubtitle:
    'Yalnızca aile sahibi cihazların adını değiştirebilir. En fazla {{maxLength}} karakter.',

  deviceNameInputLabel: 'Cihaz adı',

  deviceNamePlaceholder: 'Ali’nin iPhone’u',

  unableToUpdateDeviceName: 'Cihaz adı güncellenemedi. Lütfen tekrar deneyin.',

  osLabelFallback: 'İşletim sistemi',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — Acil müdahale gerekiyor',

  waitingForCheckIn: 'Check-In bekleniyor',

  timeRequestsWaiting: '{{count}} ekran süresi isteği bekliyor',

  timeRequestsWaiting_one: '{{count}} ekran süresi isteği bekliyor',

  youPausedThisDevice: 'Bu cihazı kilitlediniz',

  lockSentWaitingForDevice: 'Kilit gönderildi — cihaz bekleniyor',

  lockNotAppliedOnDevice: 'Bu cihaz kilidi uygulamadı',

  blockedHoursActiveNow: 'Engellenen Saatler şu anda etkin',

  inactiveOpenKidGate: 'Etkin değil — Bu cihazda KidGate’i açın',

  protectionNeedsSetup: '{{issueLabel}} için kurulum gerekiyor',

  dailyLimitOn: 'Günlük sınır etkin',

  deviceReady: 'Hazır',

  sos: 'SOS',

  deviceLocked: 'Cihaz kilitli',

  deviceUnlocked: 'Cihazın kilidi açıldı',

  parentPausedChildDevice: '{{actorName}} bu çocuk cihazını kilitledi.',

  parentRestoredChildDevice: '{{actorName}} bu çocuk cihazının kilidini açtı.',

  parentFallback: 'Bir ebeveyn',

  formerParent: 'Aileden ayrılan bir ebeveyn',
  batteryPercent: '%{{percent}}',
  batteryAccessibility: 'Pil yüzde {{percent}}',
  batteryChargingAccessibility: 'Pil yüzde {{percent}}, şarj oluyor',
  childDetailPerDevice: 'Cihaza göre — hangisini seç',
  childDetailNotAvailable: 'Kullanılamıyor',
  childDetailNotAvailableReason: 'Hiçbir cihazında kullanılamıyor',
  childDetailProtectionOk: 'Korunuyor',
  childDetailProtectionAttention: '{{count}} cihaz dikkat gerektiriyor',
  childDetailProtectionSheetTitle: 'Cihaza göre koruma',
  childDetailRemoveTitle: '{{childName}} profilini kaldır',
  childDetailRemovingButton: 'Kaldırılıyor…',
  childDetailOnlineCount: '{{total}} cihazdan {{online}} tanesi çevrimiçi',
  childDetailBudgetTitle: 'Günlük sınır',
  childDetailSectionControls: 'Tüm cihazlarında geçerli kurallar',
  childDetailSectionSafety: 'Tüm cihazlarından birleştirildi',
  childDetailSectionAlerts: 'Tüm cihazları, tek akış',
  childDetailScopeAll: 'Tüm cihazlar',
  childDetailTodayWell: 'Bugün kullanıldı',
  childDetailUnassignAction: 'Kaldır',
  childDetailLimitShared: 'Tüm cihazlarında toplam',
} as const;
