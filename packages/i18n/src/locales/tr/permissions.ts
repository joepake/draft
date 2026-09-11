export const permissions = {
  cameraPermissionRequired: 'Bu özellik için kamera erişimi gerekir.',
  allowCameraTitle: 'Kameraya izin ver',
  cameraPermissionMessage:
    'KidGate, SOS ve Check-In ile hızlı bir fotoğraf gönderebilmeniz için kamerayı kullanır.',
  allow: 'İzin ver',
  notNow: 'Şimdi değil',
  cameraTurnedOffTitle: 'Kamera KidGate için kapalı',
  cameraTurnedOffMessage:
    'Check-In’lerinize ve SOS uyarılarınıza fotoğraf eklenebilmesi için lütfen Ayarlar’ı açıp Kamera’ya izin verin.',
  openSettings: 'Ayarları aç',
  notificationsLabel: 'Bildirimler',
  notificationsAllowed: 'KidGate için bildirimler açık.',
  notificationsOpenSettings:
    'KidGate için bildirimlere izin vermek üzere cihaz Ayarları’nı açın.',
  backgroundRefreshLabel: 'Arka Planda Yenileme',
  backgroundRefreshHint: 'KidGate’in arka planda çalışmayı sürdürmesini sağlar.',
  backgroundRefreshLowPowerHint:
    'Düşük Güç Modu açık — iOS, Arka Planda Yenileme’yi devre dışı bırakır. Lütfen Düşük Güç Modu’nu kapatın, ardından Arka Planda Yenileme’yi etkinleştirin.',
  overlayLabel: 'Diğer uygulamaların üzerinde göster',
  overlayHint:
    'Sınırlar uygulandığında KidGate’in diğer uygulamaların üzerinde bir kilit ekranı göstermesine izin verin.',
  batteryOptimizationLabel: 'Sınırsız pil',
  batteryOptimizationHint: 'Android’in KidGate’i arka planda duraklatmasını engeller.',
  exactAlarmLabel: 'Alarmlar ve hatırlatıcılar',
  exactAlarmHint:
    'Engellenen Saatlerin zamanında başlayıp bitmesi için Alarmlar ve hatırlatıcılar iznini verin.',
  accessibilityLabel: 'Erişilebilirlik kilit yardımcısı',
  accessibilityHint: 'KidGate kilidini diğer uygulamaların üzerinde tutar.',
  oemSectionDescription:
    '{{brand}} cihazları genellikle arka plan uygulamalarını duraklatır. Kilitleme ve Engellenen Saatler’in çalışmaya devam etmesi için lütfen bu adımları tamamlayın.',
  oemAutostartLabel: 'Otomatik başlatmaya izin ver',
  oemAutostartHintXiaomi:
    'Otomatik başlatma’da, yeniden başlatmadan sonra korumanın yeniden başlaması için KidGate’i açın.',
  oemAutostartHintSamsung:
    'Pil → Arka planda kullanım sınırları → Hiç uyumayan uygulamalar bölümüne KidGate’i ekleyin. KidGate listede yoksa zaten izinlidir ve bu adım tamamlanmıştır.',
  oemAutostartHintOppo:
    'Başlangıç uygulamaları / Otomatik başlatma bölümünde KidGate’e izin verin.',
  oemAutostartHintVivo:
    'Otomatik başlatma / Arka planda yüksek güç bölümünde KidGate’e izin verin.',
  oemAutostartHintHuawei:
    'Uygulama başlatma / Başlatma yöneticisi bölümünde KidGate’i Manuel yönet olarak ayarlayın ve tüm seçeneklere izin verin.',
  oemAutostartHintOther:
    'KidGate’in cihazınızın güvenlik veya pil ayarlarından otomatik başlamasına izin verin.',
  markDone: 'Bitti',
  overlayStepAllow:
    'KidGate için “Diğer uygulamaların üzerinde göster” seçeneğini açın.',
  accessibilityStepOpenSettings:
    'Aşağıdan Ayarlar’ı seçin — bu, doğrudan KidGate’in Erişilebilirlik sayfasını açar.',
  accessibilityStepFindKidGate:
    'Bunun yerine tam liste açılırsa, Yüklü / indirilen uygulamalar altında KidGate’i seçin.',
  accessibilityStepTurnOn:
    'Anahtarı açın, ardından Android’in onay penceresinde İzin ver’i seçin.',
  accessibilityWarningNote:
    'Android, KidGate’in işlemlerinizi izleyebileceği uyarısını gösterir. Kilidin diğer uygulamaların üzerinde kalması bu sayede olur — KidGate parolaları veya kişisel mesajları okumaz.',
  uninstallProtectionWizardBody:
    'Ebeveyn PIN’i girilmeden bu uygulamanın kaldırılmasını engeller. Android kendi onay ekranını gösterir.',
  notificationsWizardBody:
    'Bu cihazın süre onaylarını ve hatırlatmaları hemen alması için bildirimlere izin verin.',
  backgroundRefreshStepOpen: 'Ayarlar’da KidGate sayfasını açın.',
  backgroundRefreshStepTurnOn: 'KidGate için Arka Planda Yenileme’yi açın.',
  backgroundRefreshStepGeneral:
    'Anahtar griyse Ayarlar’ı açın, Genel’e, ardından Arka Planda Yenileme’ye gidip açın.',
  batteryStepAllow: 'Android isteminde İzin ver’i seçin.',
  batteryStepAppInfo:
    'İstem görünmezse Uygulama bilgisi’ni açın, Pil’e gidin ve Sınırsız’ı seçin.',
  notificationsStepAllow: 'İstemde İzin ver’i seçin.',
  exactAlarmStepTurnOn: 'KidGate için Alarmlar ve hatırlatıcılar’ı açın.',
  // Not "Kamera'yı açın": that is the predator pack's own `kamerayı aç`, and
  // `messageKeywordCorpus` refuses a UI string that reads like the phrase it
  // watches for. The keyword is right; the copy moved.
  cameraStepTurnOn: 'KidGate için Kamera erişimini etkinleştirin.',
  uninstallProtectionStepConfirm: 'Android’in onay ekranında Etkinleştir’i seçin.',
} as const;
