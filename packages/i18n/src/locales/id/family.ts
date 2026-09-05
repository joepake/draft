export const family = {
  title: 'Keluarga',
  connectButton: 'Hubungkan',
  connectAccessibility: 'Tambahkan perangkat anak atau orang tua',
  addDeviceTitle: 'Tambahkan perangkat',
  addDeviceMessage: 'Apa yang ingin Anda hubungkan?',
  addChildOption: 'Tambahkan perangkat anak',
  addJoinFamilyOption: 'Bergabung dengan keluarga',
  addParentOption: 'Undang orang tua',
  loginWebOption: 'Masuk di web',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: 'Siapa yang memakai {{deviceName}}?',
  assignSheetBody: 'Waktu layar dan bintang dihitung untuk anak yang Anda pilih.',
  assignSheetNobody: 'Tidak ada',
  assignSheetNobodyHint: 'Perangkat bersama — tidak dihitung untuk siapa pun.',
  assignSheetAddAndAssign: 'Tambah dan tetapkan',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: 'Lindungi {{childName}} sekarang?',
  quickProtectBody:
    'Aktifkan serangkaian perlindungan awal. Anda bisa menyempurnakan semuanya nanti di profil anak.',
  quickProtectBedtime: 'Jam Diblokir waktu tidur',
  quickProtectBedtimeHint:
    'Memblokir penggunaan perangkat sepanjang malam, pukul 22.00 sampai 07.00.',
  quickProtectDailyLimit: 'Batas waktu layar harian',
  quickProtectDailyLimitHint:
    '{{minutes}} menit sehari, dihitung bersama di semua perangkatnya.',
  quickProtectWebFilter: 'Filter web',
  quickProtectWebFilterHint: 'Memblokir konten dewasa dan kategori berisiko lainnya.',
  quickProtectWebFilterPremium: 'Fitur Premium — termasuk dalam paket berlangganan.',
  quickProtectApply: 'Aktifkan perlindungan',
  quickProtectSkip: 'Nanti saja',
  quickProtectDone: 'Perlindungan aktif. Sempurnakan kapan saja.',
  quickProtectPartial:
    'Sebagian perlindungan tidak dapat disimpan. Coba lagi dari profil anak.',
  pairDeviceFirstTitle: 'Belum ada perangkat terpasang',
  pairDeviceFirstBody:
    'Pasangkan perangkat untuk anak ini terlebih dahulu — dari tab Keluarga, ketuk ikon pindai atau "+" lalu pilih Tambahkan perangkat anak. Kontrol ini mulai bekerja begitu ada perangkat yang terhubung.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'Kunci semua',
  unlockAll: 'Buka kunci semua',
  lockAllA11y: 'Kunci semua perangkat {{childName}}',
  unlockAllA11y: 'Buka kunci semua perangkat {{childName}}',
  childDetailUnassignTitle: 'Lepas dari anak?',
  childDetailUnassignBody:
    '{{deviceName}} tidak lagi dihitung untuk {{childName}} dan pindah ke Belum ditetapkan. Tetap terpasang dan terlindungi.',
  childDetailUnassignConfirm: 'Lepas',
  childDetailUnassignA11y: 'Lepas {{deviceName}} dari anak ini',
  // The fold control on a group heading.
  collapseGroupA11y: 'Ciutkan {{name}}',
  expandGroupA11y: 'Bentangkan {{name}}',
  assignDeviceCta: 'Tetapkan ke anak…',
  unassignedHint: 'Perangkat ini belum dihitung untuk siapa pun.',
  unassignedHintMember: 'Pemilik keluarga yang menetapkan perangkat ini untuk anak.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Anak tanpa perangkat',
  // Child detail screen.
  childDetailStarsWell: 'Bintang minggu ini',
  childStarsA11y: 'Bintang minggu ini: {{count}}',
  childDetailDevicesTitle: 'Perangkat',
  childDetailSwipeHint: 'Geser perangkat untuk membatalkan penetapannya.',
  childDetailAssignMore: 'Tetapkan perangkat lain…',
  childDetailAssignSheetTitle: 'Tetapkan perangkat ke {{childName}}',
  childDetailNoDevices:
    'Belum ada perangkat. Tetapkan di bawah atau sambungkan perangkat baru dari tab Keluarga.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Belum ada perangkat. Hanya pemilik keluarga yang menentukan perangkat milik siapa.',
  childDetailEditNameTitle: 'Ubah nama',
  childDetailColorLabel: 'Warna',
  scanButtonAccessibility: 'Pindai kode',
  scanTitle: 'Pindai kode',
  scanBody:
    'Arahkan kamera ke perangkat anak, undangan keluarga, atau kode yang ditampilkan di komputer.',
  manualCodeLabel: 'Masukkan kode 6 karakter',
  manualInstructions: 'Masukkan kode 6 karakter yang ditampilkan di perangkat lain.',

  headerHintEmpty: 'Kelola dan lindungi perangkat anak Anda',

  headerHintGuest:
    'Jelajahi aplikasi dengan bebas. Masuk saat Anda siap menghubungkan perangkat.',

  familyCardManage: 'Kelola keluarga, orang tua, dan perangkat',

  familyCardJoined: 'Bergabung sebagai orang tua',

  chipDeviceCount: '{{count}} perangkat',
  chipDeviceCount_one: '{{count}} perangkat',

  chipOnlineCount: '{{count}} online',
  metaOnlineCount: '{{online}}/{{count}} online',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} Check-In',
  chipCheckInCount_one: '{{count}} Check-In',

  chipRequestCount: '{{count}} permintaan',
  chipRequestCount_one: '{{count}} permintaan',

  chipNeedsSetupCount: '{{count}} perlu disiapkan',
  chipNeedsSetupCount_one: '{{count}} perlu disiapkan',

  chipProtectedCount: '{{count}} terlindungi',

  childDevicesProtected: '{{count}} perangkat terlindungi',

  chipHealthWarnCount: '{{count}} perlu disiapkan',
  chipHealthWarnCount_one: '{{count}} perlu disiapkan',

  chipHealthInactiveCount: '{{count}} tidak aktif lebih dari 24 jam',

  chipBlockedCount: '{{count}} diblokir',

  healthProtected: 'Terlindungi',
  buildOutdated: 'Pembaruan tersedia',
  healthNeedsSetup: 'Perlu pengaturan',
  healthOffline: 'Offline',
  devicePausedLabel: 'Dijeda',
  devicePausedHint: 'Dijeda di paket gratis — semua aturan tetap berlaku',
  parkedBannerTitle: 'Pilih perangkat yang tetap dipantau',
  parkedBannerBody:
    'Aturan Anda berjalan di semua perangkat. Paket gratis menerima laporan dari satu — pilih perangkatnya, atau upgrade untuk mempertahankan semuanya.',
  parkedBannerAction: 'Pilih perangkat',
  chooseMonitoredTitle: 'Perangkat mana yang harus melapor?',
  chooseMonitoredBody:
    'Semua aturan tetap berjalan di semuanya. Hanya perangkat yang Anda pilih yang mengirim waktu layar dan lokasi. Anda bisa menggantinya sekali setiap {{days}} hari.',
  chooseMonitoredConfirm: 'Pantau perangkat ini',
  chooseMonitoredUpgrade: 'Pertahankan semua perangkat — upgrade',
  chooseMonitoredDone: '{{name}} kini menjadi perangkat yang melapor',
  monitoredCooldown:
    'Perangkat yang melapor hanya bisa diganti sekali setiap {{days}} hari',
  monitoredChooseFailed: 'Tidak dapat mengganti perangkat yang melapor',

  cardWhereLabel: 'Lokasi',

  cardWhereAccessibility: 'Buka lokasi {{deviceName}}',

  cardTodayLabel: 'Hari ini',

  cardTodayUsed: '{{used}} terpakai',

  cardTodayNoData: 'Belum ada data penggunaan',

  cardTodayAccessibility: 'Buka laporan penggunaan {{deviceName}}',

  emptyTitle: 'Belum ada perangkat anak',

  emptyDescription:
    'Tambahkan perangkat anak untuk mulai memantau waktu layar dan penggunaan aplikasi.',

  setupFamilyTitle: 'Siapkan keluarga',

  setupFamilyDescription:
    'Buat keluarga untuk menghubungkan perangkat anak Anda atau bergabung ke keluarga yang sudah ada melalui undangan dari orang tua lain.',

  createFamilyButton: 'Buat keluarga',

  joinFamilyButton: 'Bergabung dengan keluarga',

  switchToJoinTitle: 'Bergabung ke keluarga lain?',

  switchToJoinMessage:
    'Keluarga kosong Anda akan dihapus sehingga Anda dapat bergabung ke keluarga lain menggunakan kode undangan. Jika sudah ada perangkat anak yang terhubung, selesaikan terlebih dahulu.',

  guestEmptyTitle: 'Mulai keluarga Anda di sini',

  guestEmptyDescription:
    'Masuk untuk menghubungkan perangkat anak, menerima notifikasi, dan menetapkan batas waktu layar yang sehat.',

  guestConnectButton: 'Masuk',

  guestCreateAccount: 'Buat akun orang tua',

  guestBenefitLimitsTitle: 'Waktu layar dan batas aplikasi',

  guestBenefitLimitsBody: 'Kunci perangkat dan atur jadwal harian.',

  guestBenefitAlertsTitle: 'Peringatan SOS dan aktivitas',

  guestBenefitAlertsBody: 'Dapatkan notifikasi segera saat perhatian Anda dibutuhkan.',

  guestBenefitLocationTitle: 'Lokasi dan Check-In',

  guestBenefitLocationBody:
    'Lihat lokasi anak Anda dan minta dia mengonfirmasi bahwa dia aman.',

  stepsHeading: 'Langkah pertama',

  step1Title: 'Ketuk “Tambahkan perangkat anak”',

  step1Description: 'Kode QR untuk memasangkan akan muncul di sini, siap dipindai.',

  step2Title: 'Pindai dari perangkat anak',

  step2Description:
    'Instal KidGate di ponsel atau tablet anak Anda, pilih “Ini adalah perangkat anak”, lalu pindai kodenya.',

  connectChildButton: 'Hubungkan perangkat anak',
  listHint: 'Geser perangkat ke kiri untuk menghapusnya',

  removeAlertTitle: 'Hapus perangkat?',

  removeAlertMessage:
    '{{deviceName}} akan diputuskan dari akun Anda. Semua permintaan waktu dan riwayat aktivitas terkait akan dihapus.',

  toastRemoveFailed: 'Tidak dapat menghapus perangkat. Silakan coba lagi.',

  swipeRemoving: 'Menghapus…',

  swipeRemove: 'Hapus',

  deviceNotFound: 'Perangkat tidak ditemukan',

  deviceMayHaveBeenRemoved: 'Perangkat ini mungkin sudah dihapus dari akun Anda.',

  deviceNotFoundError: 'Perangkat tidak ditemukan',

  deviceRemovedAlertTitle: 'Perangkat dihapus',

  deviceRemovedAlertMessage:
    'Seorang orang tua telah menghapus perangkat ini dari akun keluarga. Pilih kembali peran Anak untuk menghubungkannya lagi.',

  deviceNotRegistered: 'Perangkat ini belum terdaftar.',

  defaultDeviceName: 'Perangkat anak',

  fallbackDeviceName: 'Perangkat anak',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'iPhone orang tua',

  parentAndroid: 'Android orang tua',

  childIphone: 'iPhone anak',

  parentIpad: 'iPad orang tua',

  childIpad: 'iPad anak',

  childAndroid: 'Android anak',

  deviceFallbackName: 'Perangkat',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'PC Windows',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'Masukkan nama perangkat.',

  deviceNameTooLong: 'Nama perangkat maksimal {{max}} karakter.',

  lastActiveDate: 'Terakhir aktif: {{date}}',

  lastActiveUnknown: 'Belum ada aktivitas terbaru',

  thisDevice: 'Perangkat ini',

  thisDeviceYou: 'Perangkat ini (Anda)',

  namedDeviceYou: '{{name}} (Anda)',

  deviceNameSaved: 'Nama perangkat berhasil diperbarui.',

  deviceSectionTitle: 'Perangkat',

  deviceNameLabel: 'Nama perangkat',

  editDeviceNameTitle: 'Ubah nama perangkat',

  editDeviceNameSubtitle:
    'Hanya pemilik keluarga yang dapat mengganti nama perangkat. Maksimal {{maxLength}} karakter.',

  deviceNameInputLabel: 'Nama perangkat',

  deviceNamePlaceholder: 'iPhone milik Budi',

  unableToUpdateDeviceName: 'Gagal memperbarui nama perangkat. Silakan coba lagi.',

  osLabelFallback: 'Sistem operasi',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — Perlu perhatian segera',

  waitingForCheckIn: 'Menunggu Check-In',

  timeRequestsWaiting: '{{count}} permintaan waktu layar tertunda',

  timeRequestsWaiting_one: '{{count}} permintaan waktu layar tertunda',

  youPausedThisDevice: 'Anda telah mengunci perangkat ini',

  lockSentWaitingForDevice: 'Perintah kunci terkirim — menunggu perangkat',

  lockNotAppliedOnDevice: 'Perangkat ini belum menerapkan kuncian',

  blockedHoursActiveNow: 'Jam Diblokir sedang aktif',

  inactiveOpenKidGate: 'Tidak aktif — buka KidGate di perangkat ini',

  protectionNeedsSetup: '{{issueLabel}} perlu disiapkan',

  dailyLimitOn: 'Batas harian aktif',

  deviceReady: 'Siap',

  sos: 'SOS',

  deviceLocked: 'Perangkat terkunci',

  deviceUnlocked: 'Kunci perangkat dibuka',

  parentPausedChildDevice: '{{actorName}} mengunci perangkat anak ini.',

  parentRestoredChildDevice: '{{actorName}} membuka kunci perangkat anak ini.',

  parentFallback: 'Orang tua',

  formerParent: 'Orang tua yang keluar dari keluarga',
  batteryPercent: '{{percent}}%',
  batteryAccessibility: 'Baterai {{percent}} persen',
  batteryChargingAccessibility: 'Baterai {{percent}} persen, mengisi daya',
  childDetailPerDevice: 'Per perangkat — pilih yang mana',
  childDetailNotAvailable: 'Tidak tersedia',
  childDetailNotAvailableReason: 'Tidak tersedia di perangkat mana pun milik anak ini',
  childDetailProtectionOk: 'Terlindungi',
  childDetailProtectionAttention: '{{count}} perangkat perlu diperhatikan',
  childDetailProtectionSheetTitle: 'Perlindungan per perangkat',
  childDetailRemoveTitle: 'Hapus profil {{childName}}',
  childDetailRemovingButton: 'Menghapus…',
  childDetailOnlineCount: '{{online}} dari {{total}} online',
  childDetailBudgetTitle: 'Batas harian',
  childDetailSectionControls: 'Aturan di semua perangkatnya',
  childDetailSectionSafety: 'Digabung dari semua perangkatnya',
  childDetailSectionAlerts: 'Semua perangkatnya, satu daftar',
  childDetailScopeAll: 'Semua perangkat',
  childDetailTodayWell: 'Dipakai hari ini',
  childDetailUnassignAction: 'Lepaskan',
  childDetailLimitShared: 'Total di semua perangkatnya',
} as const;
