export const screenTime = {
  turnOnScreenTime: 'Ekran Süresi’ni aç',
  finishScreenTimeSetup: 'Ekran Süresi kurulumunu tamamla',
  screenTimeNeededForControls:
    'Engellenen Uygulamalar, Engellenen Saatler, Günlük sınır ve kilitleme bu cihazda Ekran Süresi gerektirir.',
  screenTimeNeededForLimits:
    'Ekran Süresi olmadan kilitleme, Engellenen Saatler, Günlük sınır ve Engellenen Uygulamalar uygulanamaz.',
  screenTimeStepOpenKidGate: 'Bu çocuk cihazında KidGate’i açın.',
  screenTimeStepAllowUsage:
    'Durum ekranında Uygulama ve Web Sitesi Kullanımına İzin Ver’i seçin.',
  screenTimeStepTapAllow: 'Sorulduğunda İzin Ver’i seçin.',
  screenTimeStepReturnHereAuto: 'Buraya dönün — durum otomatik olarak güncellenir.',
  screenTimeDeniedStepOpenSettings: 'Çocuk cihazında Ayarlar’ı açın.',
  screenTimeDeniedStepFindKidGate: 'Listede KidGate’i bulun.',
  screenTimeDeniedStepTurnOnRestrictions: 'Ekran Süresi’ni açın.',
  screenTimeDeniedStepOpenKidGateAgain: 'Çocuk cihazında KidGate’i yeniden açın.',
  screenTimeDeniedStepReturnWhenReady:
    'Buraya dönün — kurulum tamamlanınca bu kart kaybolacak.',
  screenTimeSetupStep1: 'Aşağıdan Uygulama ve Web Sitesi Kullanımına İzin Ver’i seçin.',
  screenTimeSetupStep2:
    'Sorulduğunda Uygulama ve Web Sitesi Kullanımı penceresinde İzin Ver’i seçin.',
  screenTimeSetupStep3: 'Pencere kapandıktan sonra buraya dönün.',
  screenTimeDeniedStep1: 'Aşağıdan Uygulama Ayarlarını Aç’ı seçin.',
  screenTimeDeniedStep2: '{{appName}} sayfasında Ekran Süresi’ni açın.',
  screenTimeDeniedStep3: '{{appName}} uygulamasına dönün — bu kart kaybolacak.',
  screenTimeBannerTitleDenied: 'Ekran Süresi’ni aç',
  screenTimeBannerTitleRequest: 'Uygulama ve Web Sitesi Kullanımına İzin Ver',
  screenTimeBannerBodyDenied: '{{appName}} için Ayarlar’da Ekran Süresi açık olmalı.',
  screenTimeBannerBodyRequest:
    'Bu, ailenin bu cihazda uygulamaları kilitlemesine ve Engellenen Saatler ayarlamasına olanak tanır.',
  screenTimeAuthPasscode:
    'KidGate’in Ekran Süresi’ni kullanabilmesi için bu cihazda bir parola olmalı. Ayarlar’dan bir parola belirleyin, sonra tekrar deneyin.',
  screenTimeAuthConflict:
    'Bu cihazda Ekran Süresi’ni zaten başka bir uygulama yönetiyor. O uygulamayı kaldırın, sonra tekrar deneyin.',
  screenTimeAuthRestricted:
    'Bu cihazdaki bir kısıtlama KidGate’in Ekran Süresi’ni kullanmasını engelliyor. Bu cihazı yöneten kişiden kısıtlamayı kaldırmasını isteyin.',
  usageAccessBannerTitle: 'Kullanım Erişimi’ni aç',
  usageAccessBannerBody:
    'KidGate’in ekran süresini takip etmesi ve sınırları uygulaması için Kullanım Erişimi gerekir.',
  usageAccessStepOpenSettings: 'Aşağıdan Ayarları Aç’ı seçin.',
  usageAccessStepFindKidGate: 'KidGate’i bulun ve Kullanım Erişimi’ni açın.',
  usageAccessStepReturn: 'Buraya dönün — durum otomatik olarak güncellenir.',
  noDailyLimitSet: 'Günlük sınır ayarlanmadı',
  limitReachedStatus: '{{used}} / {{limit}} · Sınıra ulaşıldı',
  minutesUsedStatus: '{{used}} / {{limit}} kullanıldı',
  usageUpdatesHint:
    'Ekran Süresi izleme etkinken kullanım birkaç dakikada bir güncellenir.',
  dailyLimitMinutes: '{{limitMinutes}} dk',
} as const;
