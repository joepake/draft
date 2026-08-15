export const screenTime = {
  turnOnScreenTime: 'Ekran Süresi’ni aç',
  finishScreenTimeSetup: 'Ekran Süresi kurulumunu tamamla',
  screenTimeNeededForControls:
    'Uygulama engelleme, engellenen saatler ve kilitleme bu cihazda Ekran Süresi gerektirir.',
  screenTimeNeededForLimits:
    'Ekran Süresi olmadan kilitleme, engellenen saatler ve uygulama sınırları uygulanamaz.',
  screenTimeStepOpenKidGate: 'Bu çocuk cihazında KidGate’i açın.',
  screenTimeStepAllowUsage:
    'Durum ekranında Uygulama ve Web Sitesi Kullanımına İzin Ver’i seçin.',
  screenTimeStepTapAllow: 'Sorulduğunda İzin Ver’i seçin.',
  screenTimeStepReturnHereAuto: 'Buraya dönün — durum otomatik olarak güncellenir.',
  screenTimeDeniedStepOpenSettings: 'Çocuk cihazında Ayarlar → KidGate’i açın.',
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
    'Bu, ailenin bu cihazda uygulamaları kilitlemesine ve engellenen saatler ayarlamasına olanak tanır.',
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
  dailyLimitNote: 'Günlük bir ekran süresi üst sınırı uygular.',
  dailyLimitMinutes: '{{limitMinutes}} dk',
} as const;
