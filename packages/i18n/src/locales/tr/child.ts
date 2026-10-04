export const child = {
  pageTitle: 'Durum',
  statusPaused: 'Kilitli',
  statusActive: 'Etkin',
  readyTitle: 'Her şey hazır',
  readyBody:
    'Daha fazla ekran süresine ihtiyacın olursa yukarıdan ailene istek gönderebilirsin. Acil durumda SOS düğmesini kullan.',
  setupCollapsedTitle: 'Kurulumu bir ebeveynle tamamla',
  setupCollapsedRequiredCount: '{{count}} zorunlu adım',
  setupCollapsedOptionalCount: '{{count}} isteğe bağlı adım',
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
    'Bu cihaza şimdi ihtiyacın varsa ailenden Engellenen Saatler’i değiştirmesini iste. Acil durumda yine de SOS gönderebilirsin.',
  blockedHoursLockBodyUntil:
    'Engellenen Saatler {{time}} saatine kadar etkin. Mola vermek için iyi bir zaman.',
  dailyLimitLockHint:
    'Daha fazla süreye ihtiyacın varsa ailenden iste. Acil durumda yine de SOS gönderebilirsin.',
  appClosedTitle: 'Uygulama kapatıldı',
  appClosedBody: 'Şu anda engellenen bir uygulama olduğu için KidGate kapattı.',
  parentPausedAccess: 'Ailen bu cihazı şimdilik kilitledi.',
  parentRestoredAccess: 'Ailen cihazın kilidini açtı. Kullanmaya devam edebilirsin.',
  toastDailyLimitIncreased: 'Ailen {{minutes}} dakika daha ekran süresi ekledi.',
  errorDeviceNotRegistered:
    'Bu cihaz henüz hazır değil. Biraz sonra tekrar dene; sorun devam ederse cihazı yeniden eşleştir.',
  errorScreenTimeRequired:
    'Ekran Süresi erişimi gerekli. KidGate’e izin ver, sonra tekrar dene.',
  minUsed: '{{used}} kullanıldı',
  setupContinueButton: 'Kuruluma devam et',
  setupWizardTitle: 'Korumayı ayarla',
  setupWizardProgress: '{{done}}/{{total}} tamamlandı',
  setupWizardRequired: 'Zorunlu',
  setupWizardOptional: 'İsteğe bağlı',
  setupWizardSkip: 'Şimdilik atla',
  setupWizardWatchGuide: 'Nasıl yapılır',
  setupGrantStuckHint:
    'Açtın ama değişiklik olmadı mı? TV’yi yeniden başlatıp tekrar dene.',
  setupWizardAllDoneTitle: 'Her şey hazır',
  setupWizardAllDoneSubtitle: 'Bu cihaz artık korunuyor.',
  setupWizardStepDone: 'Tamam — bu adım açıldı.',
  setupWizardCoreDoneTitle: 'Temel koruma açık',
  setupWizardCoreDoneBody:
    'Olmazsa olmaz izinler verildi ve bu cihaz korunuyor. Kalan adımlar isteğe bağlıdır ve şimdi ya da sonra yapılabilir.',
  setupWizardCoreDoneContinue: 'Şimdi güçlendir',
  setupWizardCoreDoneLater: 'Sonra bitir',
  setupWizardParentPinNote:
    'Ebeveyn PIN’i gerekir — ebeveyn bir sonraki ekranda girer.',
} as const;
