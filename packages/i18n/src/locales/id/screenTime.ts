export const screenTime = {
  turnOnScreenTime: 'Aktifkan Waktu Layar',
  finishScreenTimeSetup: 'Selesaikan penyiapan Waktu Layar',
  screenTimeNeededForControls:
    'Aplikasi yang Diblokir, Jam Diblokir, Batas harian, dan penguncian memerlukan Waktu Layar di perangkat ini.',
  screenTimeNeededForLimits:
    'Tanpa Waktu Layar, penguncian, Jam Diblokir, Batas harian, dan Aplikasi yang Diblokir tidak dapat diterapkan.',
  screenTimeStepOpenKidGate: 'Buka KidGate di perangkat anak ini.',
  screenTimeStepAllowUsage:
    'Di layar Status, pilih Izinkan Penggunaan Aplikasi & Situs Web.',
  screenTimeStepTapAllow: 'Saat diminta, pilih Izinkan.',
  screenTimeStepReturnHereAuto: 'Kembali ke sini — status akan diperbarui otomatis.',
  screenTimeDeniedStepOpenSettings: 'Di perangkat anak, buka Pengaturan.',
  screenTimeDeniedStepFindKidGate: 'Cari KidGate di daftar.',
  screenTimeDeniedStepTurnOnRestrictions: 'Aktifkan Waktu Layar.',
  screenTimeDeniedStepOpenKidGateAgain: 'Buka lagi KidGate di perangkat anak.',
  screenTimeDeniedStepReturnWhenReady:
    'Kembali ke sini — kartu ini akan hilang saat penyiapan selesai.',
  screenTimeSetupStep1: 'Pilih Izinkan Penggunaan Aplikasi & Situs Web di bawah.',
  screenTimeSetupStep2:
    'Saat diminta, pilih Izinkan pada dialog Penggunaan Aplikasi & Situs Web.',
  screenTimeSetupStep3: 'Kembali ke sini setelah dialog tertutup.',
  screenTimeDeniedStep1: 'Pilih Buka Pengaturan Aplikasi di bawah.',
  screenTimeDeniedStep2: 'Di halaman {{appName}}, aktifkan Waktu Layar.',
  screenTimeDeniedStep3: 'Kembali ke {{appName}} — kartu ini akan hilang.',
  screenTimeBannerTitleDenied: 'Aktifkan Waktu Layar',
  screenTimeBannerTitleRequest: 'Izinkan Penggunaan Aplikasi & Situs Web',
  screenTimeBannerBodyDenied:
    '{{appName}} memerlukan Waktu Layar yang diaktifkan di Pengaturan.',
  screenTimeBannerBodyRequest:
    'Ini memungkinkan orang tuamu mengunci aplikasi dan mengatur Jam Diblokir di perangkat ini.',
  screenTimeAuthPasscode:
    'Perangkat ini memerlukan kode sandi agar KidGate dapat menggunakan Waktu Layar. Atur kode sandi di Pengaturan, lalu coba lagi.',
  screenTimeAuthConflict:
    'Aplikasi lain sudah mengontrol Waktu Layar di perangkat ini. Hapus aplikasi tersebut, lalu coba lagi.',
  screenTimeAuthRestricted:
    'Pembatasan di perangkat ini mencegah KidGate menggunakan Waktu Layar. Minta pengelola perangkat ini untuk mencabutnya.',
  usageAccessBannerTitle: 'Aktifkan Akses Penggunaan',
  usageAccessBannerBody:
    'KidGate memerlukan Akses Penggunaan untuk melacak waktu layar dan menerapkan batas.',
  usageAccessStepOpenSettings: 'Pilih Buka Pengaturan di bawah.',
  usageAccessStepFindKidGate: 'Cari KidGate dan aktifkan Akses Penggunaan.',
  usageAccessStepReturn: 'Kembali ke sini — status akan diperbarui otomatis.',
  noDailyLimitSet: 'Batas harian belum diatur',
  limitReachedStatus: '{{used}} / {{limit}} · Batas tercapai',
  minutesUsedStatus: '{{used}} / {{limit}} terpakai',
  usageUpdatesHint:
    'Penggunaan diperbarui setiap beberapa menit selama pemantauan Waktu Layar aktif.',
  dailyLimitMinutes: '{{limitMinutes}} mnt',
} as const;
