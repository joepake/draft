export const child = {
  pageTitle: 'Durum',
  statusPaused: 'Kilitli',
  statusActive: 'Etkin',
  readyTitle: 'Her şey hazır',
  readyBody:
    'Daha fazla ekran süresine ihtiyacın olursa aşağıdan ailene istek gönderebilirsin. Acil durumda SOS düğmesini kullan.',
  setupCollapsedTitle: 'Kurulumu bir ebeveynle tamamla',
  setupCollapsedCount: 'Tamamlanacak {{count}} adım kaldı',
  oneMoment: 'Bir dakika lütfen…',
  paused: 'Kilitli',
  blockedHours: 'Engellenen Saatler',
  limitReached: 'Sınıra ulaşıldı',
  active: 'Etkin',
  parentPausedThisDevice: 'Ailen bu cihazı şimdilik kilitledi.',
  blockedHoursOnPaused:
    'Şu anda Engellenen Saatler etkin. Mola vermek için iyi bir zaman.',
  outOfScreenTimeAskParent:
    'Bugünkü ekran süreni bitirdin. Aşağıdan daha fazlasını isteyebilirsin.',
  screenTimeToday: 'Bugünkü ekran süresi',
  usedOverLimitMinutes: '{{used}} / {{limit}}',
  usedMinutesOnly: '{{used}}',
  outOfScreenTimeToday:
    'Bugünkü ekran süreni bitirdin. Ailenden daha fazlasını isteyebilirsin.',
  devicePaused: 'Cihaz kilitli',
  devicePausedByParent: '{{deviceName}} şu anda kilitli.',
  phonePausedByParent: 'Ailen bu cihazı şimdilik kilitledi.',
  pausedAskParentOrSos:
    'İhtiyacın olduğunda ailenden kilidi açmasını iste. Acil durumda yine de SOS gönderebilirsin.',
  blockedHoursLockTitle: 'Engellenen Saatler',
  blockedHoursLockBody:
    'Şu anda Engellenen Saatler etkin. Mola vermek için iyi bir zaman.',
  blockedHoursLockHint:
    'Daha fazla süreye ihtiyacın varsa ailene söyle. Acil durumda yine de SOS gönderebilirsin.',
  parentPausedAccess: 'Ailen bu cihazı şimdilik kilitledi.',
  parentRestoredAccess: 'Ailen cihazın kilidini açtı. Kullanmaya devam edebilirsin.',
  toastDailyLimitIncreased: 'Ailen {{minutes}} dakika daha ekran süresi ekledi.',
  errorDeviceNotRegistered: 'Bu cihaz kayıtlı değil.',
  errorScreenTimeRequired: 'Ekran Süresi izni gerekli.',
  minUsed: '{{used}} kullanıldı',
  setupContinueButton: 'Kuruluma devam et',
  setupWizardTitle: 'Korumayı ayarla',
  setupWizardProgress: '{{done}}/{{total}} tamamlandı',
  setupWizardRequired: 'Zorunlu',
  setupWizardOptional: 'İsteğe bağlı',
  setupWizardSkip: 'Şimdilik atla',
  setupGrantStuckHint:
    "Açtın ama değişiklik olmadı mı? TV'yi yeniden başlatıp tekrar dene.",
  setupWizardAllDoneTitle: 'Hazır!',
  setupWizardAllDoneSubtitle: 'Bu cihaz artık korunuyor.',
  setupWizardStepDone: 'Tamam — bu adım açıldı.',
  setupWizardCoreDoneTitle: 'Temel koruma açık',
  setupWizardCoreDoneBody:
    'Olmazsa olmaz izinler verildi ve bu cihaz korunuyor. Birkaç isteğe bağlı adım, sistemin korumayı kapatmasını zorlaştırır.',
  setupWizardCoreDoneContinue: 'Şimdi güçlendir',
  setupWizardCoreDoneLater: 'Sonra bitir',
  setupWizardParentPinNote:
    'Ebeveyn PIN’i gerekir — ebeveyn bir sonraki ekranda girer.',
} as const;
