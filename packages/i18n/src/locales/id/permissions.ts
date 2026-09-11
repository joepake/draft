export const permissions = {
  cameraPermissionRequired: 'Akses kamera diperlukan untuk fitur ini.',
  allowCameraTitle: 'Izinkan kamera',
  cameraPermissionMessage:
    'KidGate menggunakan kamera agar Anda dapat mengirim foto singkat dengan SOS dan Check-In.',
  allow: 'Izinkan',
  notNow: 'Nanti saja',
  cameraTurnedOffTitle: 'Kamera dimatikan untuk KidGate',
  cameraTurnedOffMessage:
    'Silakan buka Pengaturan dan izinkan Kamera agar Check-In dan peringatan SOS Anda dapat menyertakan foto.',
  openSettings: 'Buka Pengaturan',
  notificationsLabel: 'Notifikasi',
  notificationsAllowed: 'Notifikasi aktif untuk KidGate.',
  notificationsOpenSettings:
    'Silakan buka Pengaturan perangkat untuk mengizinkan notifikasi untuk KidGate.',
  backgroundRefreshLabel: 'Penyegaran latar belakang',
  backgroundRefreshHint:
    'Membuat KidGate tetap bekerja saat berjalan di latar belakang.',
  backgroundRefreshLowPowerHint:
    'Mode Hemat Daya aktif — iOS menonaktifkan Penyegaran latar belakang. Silakan matikan Mode Hemat Daya, lalu aktifkan Penyegaran latar belakang.',
  overlayLabel: 'Tampil di atas aplikasi lain',
  overlayHint:
    'Izinkan KidGate menampilkan layar kunci di atas aplikasi lain saat batasan berlaku.',
  batteryOptimizationLabel: 'Baterai tanpa batasan',
  batteryOptimizationHint: 'Mencegah Android menjeda KidGate di latar belakang.',
  exactAlarmLabel: 'Alarm & pengingat',
  exactAlarmHint:
    'Izinkan Alarm & pengingat agar Jam Diblokir mulai dan berakhir tepat waktu.',
  accessibilityLabel: 'Bantuan kunci Aksesibilitas',
  accessibilityHint: 'Menjaga kunci KidGate tetap di atas aplikasi lain.',
  oemSectionDescription:
    'Perangkat {{brand}} sering menjeda aplikasi latar belakang. Selesaikan langkah-langkah ini agar penguncian dan Jam Diblokir tetap berfungsi.',
  oemAutostartLabel: 'Izinkan mulai otomatis',
  oemAutostartHintXiaomi:
    'Di Mulai otomatis, aktifkan KidGate agar perlindungan mulai lagi setelah perangkat dinyalakan ulang.',
  oemAutostartHintSamsung:
    'Di Baterai → Batas penggunaan latar belakang → Aplikasi yang tidak pernah tidur, tambahkan KidGate. Jika KidGate tidak ada di daftar, berarti sudah diizinkan dan langkah ini selesai.',
  oemAutostartHintOppo:
    'Di Aplikasi saat mulai / Peluncuran otomatis, izinkan KidGate.',
  oemAutostartHintVivo:
    'Di Mulai otomatis / Daya tinggi latar belakang, izinkan KidGate.',
  oemAutostartHintHuawei:
    'Di Peluncuran aplikasi / Pengelola mulai, atur KidGate ke Kelola secara manual dan izinkan semua opsi.',
  oemAutostartHintOther:
    'Izinkan KidGate mulai otomatis di pengaturan keamanan atau baterai perangkat Anda.',
  markDone: 'Selesai',
  overlayStepAllow: 'Aktifkan “Tampil di atas aplikasi lain” untuk KidGate.',
  accessibilityStepOpenSettings:
    'Pilih Pengaturan di bawah — ini langsung membuka halaman Aksesibilitas KidGate.',
  accessibilityStepFindKidGate:
    'Jika yang terbuka adalah daftar lengkap, pilih KidGate di Aplikasi terpasang / diunduh.',
  accessibilityStepTurnOn:
    'Nyalakan sakelarnya, lalu pilih Izinkan pada konfirmasi Android.',
  accessibilityWarningNote:
    'Android memperingatkan bahwa KidGate dapat mengamati tindakan Anda. Begitulah kunci tetap tampil di atas aplikasi lain — KidGate tidak membaca kata sandi atau pesan pribadi.',
  uninstallProtectionWizardBody:
    'Mencegah aplikasi ini dihapus tanpa PIN Orang Tua. Android menampilkan layar konfirmasinya sendiri.',
  notificationsWizardBody:
    'Izinkan notifikasi agar perangkat ini segera menerima persetujuan waktu dan pengingat.',
  backgroundRefreshStepOpen: 'Buka halaman KidGate di Pengaturan.',
  backgroundRefreshStepTurnOn: 'Aktifkan Penyegaran latar belakang untuk KidGate.',
  backgroundRefreshStepGeneral:
    'Jika sakelarnya abu-abu, buka Pengaturan, lalu Umum, lalu Penyegaran latar belakang dan aktifkan.',
  batteryStepAllow: 'Pilih Izinkan pada permintaan Android.',
  batteryStepAppInfo:
    'Jika tidak ada permintaan, buka Info aplikasi, lalu Baterai, lalu pilih Tanpa batasan.',
  notificationsStepAllow: 'Pilih Izinkan pada permintaan.',
  exactAlarmStepTurnOn: 'Aktifkan Alarm & pengingat untuk KidGate.',
  cameraStepTurnOn: 'Aktifkan Kamera untuk KidGate.',
  uninstallProtectionStepConfirm: 'Pilih Aktifkan pada layar konfirmasi Android.',
} as const;
