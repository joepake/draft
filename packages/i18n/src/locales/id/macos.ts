/**
 * Jendela milik agen desktop (macOS dan Windows).
 * Konteks per kunci: lihat en/macos.ts.
 */
export const macos = {
  headingNow: 'Saat ini',
  headingEnforce: 'Yang bisa diterapkan Mac ini',
  headingEnforceHint:
    'Yang diatur orang tuamu, dan seberapa kuat Mac ini bisa menjaganya.',
  headingRemovable: 'Seberapa mudah dilepas',

  parentAccessBody:
    'Masukkan PIN Orang Tua untuk memilih aplikasi yang diblokir di Mac ini.',
  checking: 'Memeriksa…',

  enforcing: 'Perlindungan berjalan',
  enforcingYes: 'Ya',
  enforcingFailed: 'Tidak — {{count}} pemeriksaan berturut-turut gagal',

  lockState: 'Perangkat terkunci',
  lockStateNo: 'Tidak',
  lockStateNotChecked: 'Belum diperiksa',
  lockStateParent: 'Ya — dikunci orang tua',
  lockStateSchedule: 'Ya — Jam Diblokir',
  lockStateDailyLimit: 'Ya — Batas Harian tercapai',

  appBlocking: 'Pemblokiran aplikasi',
  appBlockingBestEffort:
    'Sebisanya — aplikasi ditutup setelah terbuka, bukan dicegah terbuka',

  webFilterLabel: 'Filter web',
  webFilterUnavailable: 'Tidak tersedia di Mac ini',
  notSupportedOnThisDevice: 'Tidak didukung di perangkat ini',

  scheduleLabel: 'Jam Diblokir',
  dailyLimitLabel: 'Batas Harian',
  enforcedHere: 'Aktif, diterapkan oleh KidGate',

  screenTimeLabel: 'Waktu Layar',
  screenTimeAgentMeasured:
    'Dihitung oleh KidGate. Waktu saat KidGate tidak berjalan tidak dihitung.',

  batteryLabel: 'Baterai',
  batteryReported: 'Dilaporkan ke keluarga',
  batteryNone: 'Mac ini tidak punya baterai',

  locationLabel: 'Lokasi',
  locationOff: 'Nonaktif',
  locationCoarse: 'Perkiraan — dari Wi-Fi, bukan GPS',

  accountLabel: 'Akun anak',
  accountStandard: 'Standar',
  accountAdmin: 'Administrator — akun ini bisa mematikan KidGate sepenuhnya',

  restartLabel: 'Terbuka lagi jika ditutup',
  restartYes: 'Ya',
  restartNo: 'Tidak — penyiapan belum selesai',

  forceQuitLabel: 'Berapa kali KidGate ditutup',

  startAtLoginSectionTitle: 'Mulai otomatis',
  startAtLoginSectionDescription:
    'KidGate mengukur waktu layar dan menerapkan aturan hanya saat sedang berjalan.',
  startAtLoginLabel: 'Buka KidGate saat masuk',
  startAtLoginHintOn:
    'KidGate mulai bersama perangkat ini dan terbuka lagi jika ditutup.',
  startAtLoginHintOff:
    'Tidak ada yang diukur atau diblokir sampai seseorang membuka KidGate lagi.',
  startAtLoginUnavailable:
    'Perangkat ini tidak mengizinkan KidGate menambahkan dirinya ke mulai otomatis.',

  stillRunningTitle: 'KidGate masih berjalan',
  stillRunningBodyMac: 'Buka lagi dari ikon KidGate di bilah menu.',
  stillRunningBodyWindows: 'Buka lagi dari ikon KidGate di area notifikasi.',

  updateAvailableTitle: 'Tersedia KidGate versi lebih baru',
  updateAvailableBody: 'KidGate {{version}} siap diunduh.',
  updateAction: 'Ambil pembaruan',

  chooseApps: 'Pilih aplikasi yang diblokir',
  chooseAppsHint:
    'Pilih aplikasi yang diblokir di Mac ini. Orang tua bisa menyalakan atau mematikan pemblokiran dari ponselnya.',
  saveSelection: 'Simpan',
  noAppsFound: 'Tidak ada aplikasi yang ditemukan di folder Applications.',
};
