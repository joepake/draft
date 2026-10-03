export const pin = {
  title: 'PIN Orang Tua',
  subtitleSet: 'Ketuk untuk mengubah PIN 6 digit Anda',
  subtitleNotSet: 'Buat PIN 6 digit untuk melindungi penyiapan di perangkat anak',
  statusSet: 'Sudah diatur',
  statusNotSet: 'Belum diatur',
  unlockChildPinTitle: 'Buka kunci PIN di {{deviceName}}',
  unlockChildPinSubtitle: 'Atur ulang percobaan PIN yang salah di perangkat anak ini',
  statusLocked: 'Terkunci',
  toastPinUnlocked: 'PIN dibuka di {{deviceName}}.',
  toastPinUnlockFailed: 'Tidak dapat membuka kunci PIN anak. Silakan coba lagi.',
  toastPinSaved:
    'PIN Orang Tua disimpan. Gunakan di perangkat anak sebelum mengubah Aplikasi yang Diblokir.',
  createParentPin: 'Buat PIN Orang Tua',
  changeParentPin: 'Ubah PIN Orang Tua',
  parentPinSetupSubtitle:
    'PIN 6 digit melindungi penyiapan Aplikasi yang Diblokir di perangkat anak.',
  parentPinSetupHelper:
    'Perangkat anak akan meminta PIN ini sebelum mengubah aplikasi mana yang diblokir.',
  parentPinMismatch: 'PIN baru yang dimasukkan tidak cocok.',
  unableToSaveParentPin: 'Tidak dapat menyimpan PIN Orang Tua. Silakan coba lagi.',
  onlyOwnerCanManageChildPin:
    'Hanya pemilik keluarga yang dapat membuat atau mengubah PIN Orang Tua yang digunakan di perangkat anak.',
  parentPinRequired: 'PIN Orang Tua diperlukan',
  enterParentPinToContinue: 'Masukkan PIN Orang Tua 6 digit untuk melanjutkan.',
  parentPinLockoutMessage:
    'Terlalu banyak percobaan yang salah. Minta orang tua yang menyiapkan KidGate untuk membuka kunci PIN dari ponselnya, di Pengaturan → Keamanan.',
  parentPinHelperText:
    'Hanya orang tua yang dapat mengubah aplikasi yang diblokir atau keluar — untuk itulah PIN ini. Jika PIN terlupa, orang tua yang menyiapkan KidGate dapat mengatur ulang dari ponselnya, di Pengaturan → Keamanan.',
  forgotPin: 'Lupa PIN?',
  resetPinNotice:
    'Anda mengatur ulang PIN sebagai pemilik akun. Perangkat anak akan meminta PIN baru mulai sekarang.',
  unableToVerifyParentPin: 'PIN Orang Tua salah. Silakan coba lagi.',
  unableToCheckParentPin:
    'Tidak dapat memeriksa PIN Orang Tua. Silakan coba lagi sebentar lagi.',
  parentPinGateSubtitle: 'Masukkan PIN Orang Tua 6 digit untuk mengubah pengaturan.',
  parentPinMustBeSixDigits: 'PIN Orang Tua harus tepat 6 digit.',
  pinSixDigits: 'PIN (6 digit)',
  attemptsRemaining: '{{count}} percobaan tersisa.',
  attemptsRemaining_one: '{{count}} percobaan tersisa.',
  currentPin: 'PIN saat ini',
  newPin: 'PIN baru',
  pin: 'PIN',
  confirmPin: 'Konfirmasi PIN',
  updatePin: 'Perbarui PIN',
  savePin: 'Simpan PIN',
  pinLockedTitle: 'PIN terkunci',
  pinLockedBody:
    'Terlalu banyak percobaan yang salah. Minta orang tua yang menyiapkan KidGate untuk membuka kunci PIN dari ponselnya, di Pengaturan → Keamanan.',
  parentAccessRequiredTitle: 'Akses orang tua diperlukan',
  parentAccessRequiredBody:
    'Masukkan PIN Orang Tua untuk mengganti nama perangkat ini, memilih Aplikasi yang Diblokir, atau keluar.',
  unlockWithParentPinButton: 'Buka kunci dengan PIN Orang Tua',
  whyPinTitle: 'Kenapa perlu PIN?',
  whyPinBody:
    'Hanya orang tua yang boleh mengubah Aplikasi yang Diblokir atau mengeluarkan perangkat ini dari KidGate. Warna tema tidak memerlukan PIN.',
  pinLockedToast:
    'PIN terkunci setelah terlalu banyak percobaan yang salah. Minta orang tua yang menyiapkan KidGate untuk membukanya dari ponselnya, di Pengaturan → Keamanan.',
  pinNotConfiguredToast:
    'Belum ada PIN Orang Tua. Orang tua yang menyiapkan KidGate membuatnya dari ponselnya, di Pengaturan → Keamanan.',
  pairedNoPin:
    'Belum ada PIN Orang Tua. Perangkat anak memintanya sebelum Aplikasi yang Diblokir diubah atau perangkat dikeluarkan dari KidGate.',
  enterSixDigitParentPin: 'Masukkan PIN Orang Tua 6 digit.',
  askParentCreatePin:
    'Minta orang tua yang menyiapkan KidGate untuk membuat PIN Orang Tua dari ponselnya, di Pengaturan → Keamanan.',
  incorrectPinAttemptsLeft: 'PIN salah. {{count}} percobaan tersisa.',
  incorrectPinAttemptsLeft_one: 'PIN salah. {{count}} percobaan tersisa.',
  enterCurrentParentPin: 'Masukkan PIN Orang Tua Anda saat ini.',
  currentParentPinIncorrect:
    'PIN Orang Tua saat ini salah. Periksa lalu coba lagi, atau pilih “Lupa PIN?” untuk mengatur ulang.',
} as const;
