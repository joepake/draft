export const protection = {
  permissionOffOnChildDevice: 'Izin ini nonaktif di perangkat anak.',
  permissionNotSetUpYet: 'Izin ini belum disiapkan.',
  permissionRestrictedByIos: 'Izin ini dibatasi oleh pengaturan iOS.',
  permissionStatusUnknown: 'KidGate tidak dapat membaca status izin ini.',
  kidGateOffline: 'KidGate offline',
  childAppMayBeOffline:
    'Aplikasi di perangkat anak mungkin tertutup, terhapus, atau offline.',
  statusNotUpdatedYet: 'Status belum diperbarui',
  openKidGateOnChildPhone: 'Buka KidGate sekali di perangkat anak.',
  screenTimePermission: 'Izin Waktu Layar',
  screenTimeAccessOff:
    'Akses Waktu Layar nonaktif, jadi pemblokiran aplikasi dan batas waktu bisa berhenti berfungsi.',
  screenTimeSetupIncomplete: 'Penyiapan Waktu Layar belum selesai di perangkat anak.',
  usageAccessPermission: 'Akses Penggunaan',
  usageAccessOff:
    'Akses Penggunaan nonaktif, jadi KidGate tidak dapat melacak waktu layar atau menerapkan batas.',
  usageAccessSetupIncomplete:
    'Aktifkan Akses Penggunaan untuk KidGate di pengaturan Android.',
  overlayPermission: 'Tampil di atas aplikasi lain',
  batteryOptimizationPermission: 'Baterai tanpa batasan',
  batteryOptimizationOff:
    'Izinkan baterai tanpa batasan agar KidGate dapat terus menjalankan perlindungan.',
  exactAlarmPermission: 'Alarm & pengingat',
  exactAlarmOff: 'Izinkan Alarm & pengingat agar Jam Diblokir mulai tepat waktu.',
  accessibilityPermission: 'Aksesibilitas (bantuan kunci)',
  accessibilityOff:
    'Aktifkan Aksesibilitas untuk KidGate agar layar kunci tetap berada di atas aplikasi lain.',
  overlayOffForLock:
    'Aktifkan Tampil di atas aplikasi lain agar layar kunci dapat menutupi aplikasi lain.',
  lockNotReadyTitle: 'Kunci belum siap',
  lockNotReadyBody:
    'KidGate tidak dapat menjaga perangkat Android ini tetap terkunci sampai Tampil di atas aplikasi lain dan Aksesibilitas diaktifkan. Buka KidGate di perangkat anak dan selesaikan langkah berikut:',
  lockNotReadyBodyIos:
    'KidGate tidak dapat mengunci iPhone ini sampai akses Waktu Layar disetujui di perangkat anak. Buka KidGate di perangkat tersebut dan selesaikan langkah berikut:',
  locationPermission: 'Izin lokasi',
  notificationsPermission: 'Izin notifikasi',
  backgroundUpdates: 'Pembaruan latar belakang',
  backgroundUpdatesRestricted: 'Pembaruan latar belakang dibatasi di perangkat ini.',
  turnOnBackgroundUpdatesInSettings:
    'Aktifkan di Pengaturan perangkat agar KidGate tetap tersinkron.',
  inactive: 'Tidak aktif',
  openKidGateToSyncProtections:
    'Buka KidGate di perangkat ini agar perlindungan dapat tersinkron kembali.',
  needsAttention: 'Perlu perhatian',
  protectionsNeedSetupAndroid:
    'Beberapa perlindungan perlu disiapkan di perangkat anak.',
  protectionsNeedSetupIos: 'Beberapa perlindungan perlu disiapkan di perangkat anak.',
  protected: 'Terlindungi',
  protectionsLookHealthy: 'Perlindungan KidGate berjalan dengan baik.',
  healthBadgeProtected: 'Hijau — terlindungi',
  healthBadgeWarning: 'Kuning — perlu penyiapan',
  healthBadgeInactive: 'Merah — perangkat anak offline',
  iosFeatureSupportEvaluating: 'Dukungan fitur ini di iOS sedang dievaluasi.',
  iosUpgradeRequiredNote:
    'Ini butuh iOS 16 atau lebih baru. Perbarui perangkat anak di Pengaturan › Umum › Pembaruan Perangkat Lunak. Jika tidak ada pembaruan yang ditawarkan, iPad atau iPhone ini terlalu lama untuk didukung Apple.',
  iosUpgradeActionLabel: 'Perlu iOS 16',
  lockUnlockNote:
    'Mengunci perangkat melalui Waktu Layar setelah anak memberikan izin akses.',
  scheduleNote: 'Hingga 3 rentang Jam Diblokir memblokir aplikasi melalui Waktu Layar.',
  individualAppBlockingNote:
    'Anak memilih aplikasi setelah memasukkan PIN Orang Tua 6 digit.',
  tamperAlertsNote:
    'Melaporkan perubahan izin dan saat aplikasi di perangkat anak sudah lama tidak diperbarui.',
  appReviewRemindersNote:
    'iOS tidak menyediakan info pemasangan aplikasi; tinjau aplikasi secara berkala bersama perangkat anak.',
} as const;
