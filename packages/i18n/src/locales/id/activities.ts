export const activities = {
  title: 'Aktivitas',
  subtitleAllDevices: 'Peristiwa terbaru dari semua perangkat',
  subtitleTimelineForDevice: 'Linimasa {{deviceName}}',
  subtitleTimelineForChild: 'Linimasa {{childName}}',
  fallbackDeviceName: 'perangkat',
  liveBadge: 'Langsung',
  errorTitle: 'Tidak dapat memuat aktivitas',
  tryAgain: 'Coba lagi',

  emptyTitleAll: 'Belum ada aktivitas',
  emptyTitleDevice: 'Belum ada aktivitas untuk perangkat ini',
  emptyDescriptionAll:
    'Peristiwa kunci, buka kunci, dan SOS dari perangkat anak akan muncul di sini.',
  emptyDescriptionDevice:
    'Pilih perangkat lain, atau tunggu peristiwa kunci, buka kunci, dan SOS dari perangkat ini.',

  guestEmptyTitle: 'Umpan aktivitas Anda',
  guestEmptyDescription:
    'Setelah perangkat anak terhubung, peristiwa kunci, buka kunci, SOS, dan aplikasi akan muncul di sini secara langsung.',
  guestSignInButton: 'Masuk',
  guestCreateAccount: 'Buat akun orang tua',
  guestSubtitle: 'Masuk untuk mengikuti aktivitas di perangkat anak Anda',

  guestPreviewHeading: 'Yang akan Anda lihat',
  guestPreviewLock: 'Perangkat terkunci',
  guestPreviewSos: 'Peringatan SOS',
  guestPreviewScreenTime: 'Pembaruan Waktu Layar',
  guestPreviewHint:
    'Contoh — peristiwa asli muncul setelah Anda menghubungkan perangkat',

  activityTypeLocked: 'Terkunci',
  activityTypeUnlocked: 'Kunci dibuka',
  activityTypeAppOpened: 'Aplikasi dibuka',
  activityTypeAppBlocked: 'Aplikasi diblokir',
  activityTypeAppInstalled: 'Aplikasi dipasang',
  activityTypeAppRemoved: 'Aplikasi dihapus',
  activityTypePlaceEnter: 'Masuk tempat',
  activityTypePlaceExit: 'Keluar tempat',
  activityTypeTamper: 'Perlindungan',
  activityTypeScreenTime: 'Waktu Layar',
  activityTypeCheckIn: 'Kabar aman',
  activityTypeLocationRequest: 'Lokasi',
  activityTypeTimeRequest: 'Permintaan waktu',
  activityTypeRewardTask: 'Tugas hadiah',
  activityTypeSearchAlert: 'Peringatan pencarian',
  activityTypeWebFilter: 'Filter web',
  activityTypeEmergency: 'Darurat',
  activityTypeUnknown: 'Aktivitas',

  sosEscapeTitle: 'Buka kunci darurat',
  sosEscapeBody: 'SOS membuka kunci perangkat ini selama {{minutes}} menit.',
  sosEscapeRepeatTitle: 'Buka kunci darurat ({{count}} kali hari ini)',
  sosEscapeRepeatBody:
    'SOS membuka kunci perangkat ini selama {{minutes}} menit. Ini kali ke-{{count}} hari ini.',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Aplikasi yang diblokir dibuka dan KidGate menutupnya.',
  appInstalledTitle: 'Aplikasi dipasang',
  appInstalledBody: 'Aplikasi {{appName}} dipasang di perangkat anak.',

  messageAlertTitle: 'Konten pesan mengkhawatirkan',
  messageAlertBody: 'Kata yang ditandai terdeteksi di {{appName}}.',
  messageAlertBodyOutgoing:
    'Kata yang ditandai terdeteksi di pesan yang ditulis anak Anda di {{appName}}.',
  messageAlertTitleSearch: 'Pencarian yang mengkhawatirkan',
  messageAlertBodySearch:
    'Kata yang ditandai terdeteksi dalam pencarian di {{appName}}.',
  activityTypeMessageAlert: 'Peringatan pesan',
  messageCheckedTitle: 'Sudah diperiksa, tidak ada yang mengkhawatirkan',
  messageCheckedBody:
    'Kata yang dipantau muncul di {{appName}} dan dinilai tidak berbahaya dalam konteksnya.',
  activityTypeMessageChecked: 'Diperiksa',
  appRemovedTitle: 'Aplikasi dihapus',
  appRemovedBody: 'Aplikasi {{appName}} dihapus dari perangkat anak.',
  extensionInstalledTitle: 'Ekstensi browser ditambahkan',
  extensionInstalledBody: 'Ekstensi {{appName}} ditambahkan ke browser anak.',
  extensionRemovedTitle: 'Ekstensi browser dihapus',
  extensionRemovedBody: 'Ekstensi {{appName}} dihapus dari browser anak.',

  placeEnterTitle: 'Masuk {{placeName}}',
  placeEnterBody: 'Perangkat anak memasuki tempat yang tersimpan.',

  placeExitTitle: 'Keluar dari {{placeName}}',
  placeExitBody: 'Perangkat anak meninggalkan tempat yang tersimpan.',

  tamperTitle: 'Izin perlindungan dimatikan',
  tamperFallbackTitle: 'Izin perlindungan dimatikan',
  tamperFallbackBody: 'Sebuah izin perlindungan dimatikan di perangkat anak.',

  tamperOverlayTitle: 'Tampil di atas aplikasi lain dimatikan',
  tamperOverlayBody:
    'Layar kunci mungkin berhenti tampil di atas aplikasi lain sampai Tampil di atas aplikasi lain diaktifkan kembali.',

  tamperAccessibilityTitle: 'Aksesibilitas dimatikan',
  tamperAccessibilityBody:
    'Pemblokiran aplikasi dan penguncian mungkin tidak berjalan penuh sampai Aksesibilitas diaktifkan kembali.',
  tamperUsageAccessTitle: 'Akses penggunaan aplikasi dimatikan',
  tamperUsageAccessBody:
    'Batas aplikasi dan Jam Diblokir mungkin berhenti bekerja sampai KidGate dapat membaca penggunaan aplikasi di perangkat anak lagi.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'Akses Waktu Layar dimatikan',
  tamperScreenTimeIosBody:
    'Batas aplikasi dan Jam Diblokir mungkin berhenti bekerja sampai akses Waktu Layar diizinkan lagi di perangkat anak.',
  tamperUsageAccessAndroidTitle: 'Akses Penggunaan dimatikan',
  tamperUsageAccessAndroidBody:
    'Batas aplikasi dan Jam Diblokir mungkin berhenti bekerja sampai Akses Penggunaan untuk KidGate dinyalakan lagi di perangkat anak.',

  tamperBatteryTitle: 'Baterai tanpa batasan dimatikan',
  tamperBatteryBody:
    'Sistem mungkin menjeda KidGate sampai penggunaan baterai disetel ke Tanpa batasan.',

  tamperExactAlarmTitle: 'Alarm & pengingat dimatikan',
  tamperExactAlarmBody:
    'Jam Diblokir bisa mulai atau berakhir terlambat sampai Alarm & pengingat diizinkan lagi.',

  tamperNotificationsTitle: 'Notifikasi dimatikan',
  tamperNotificationsBody:
    'Perintah jarak jauh dan peringatan untuk orang tua mungkin tidak sampai ke perangkat ini dengan andal.',

  tamperLocationTitle: 'Lokasi dimatikan',
  tamperLocationBody:
    'Orang tua tidak akan menerima pembaruan lokasi sampai Lokasi diizinkan kembali.',

  tamperCameraTitle: 'Kamera dimatikan',
  tamperCameraBody:
    'Foto SOS dan Check-In mungkin gagal terkirim sampai Kamera diizinkan kembali.',

  tamperBackgroundRefreshTitle: 'Penyegaran Aplikasi Latar dimatikan',
  tamperBackgroundRefreshBody:
    'KidGate mungkin lebih jarang memperbarui di latar belakang sampai Penyegaran Aplikasi Latar diaktifkan kembali.',

  tamperDeviceClockTitle: 'Tanggal atau waktu diubah',
  tamperDeviceClockBody:
    'Jam di perangkat ini tidak lagi cocok dengan waktu yang benar. Waktu Layar dan Jam Diblokir tetap mengikuti waktu yang benar.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: 'Izin Tampil di atas aplikasi lain telah dimatikan.',
  tamperAccessibility: 'Layanan Aksesibilitas telah dimatikan.',
  tamperUsageAccess: 'Akses penggunaan telah dimatikan.',
  tamperBattery: 'Penggunaan baterai tanpa batasan telah dimatikan.',
  tamperExactAlarm: 'Izin Alarm & pengingat dimatikan.',
  tamperNotifications: 'Izin notifikasi telah dimatikan.',
  tamperLocation: 'Izin lokasi telah dimatikan.',
  tamperCamera: 'Izin kamera telah dimatikan.',
  tamperBackgroundRefresh: 'Penyegaran Aplikasi Latar telah dimatikan.',

  filterAllDevices: 'Semua perangkat',
  // The child tier of the feed filter — "All" would read as all devices.
  filterAllChildren: 'Semua',
  dateToday: 'Hari ini',
  dateYesterday: 'Kemarin',

  filterByDevice: 'Filter menurut {{label}}',
  filterByChild: 'Tampilkan hanya {{label}}',

  openFullSosHistory: 'Buka riwayat SOS lengkap',
  openActivityDetails: 'Lihat detail',

  unknownDevice: 'Perangkat tidak dikenal',

  basicActivityNote: 'Peristiwa kunci, buka kunci, dan perangkat dicatat di Aktivitas.',
  tamperUninstallProtectionTitle: 'Perlindungan hapus instal dimatikan',
  tamperUninstallProtectionBody: 'KidGate kini bisa dihapus dari ponsel ini.',
} as const;
