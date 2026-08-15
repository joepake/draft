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
    'Terlalu banyak percobaan yang salah. Silakan minta orang tua Anda membuka kunci PIN dari Pengaturan Orang Tua.',
  parentPinHelperText:
    'Hanya orang tua yang dapat mengubah aplikasi yang diblokir atau keluar — untuk itulah PIN ini digunakan. Jika kamu lupa, orang tua dapat masuk ke KidGate di perangkat mana pun dan mengatur ulang PIN di Pengaturan Orang Tua.',
  forgotPin: 'Lupa PIN?',
  resetPinNotice:
    'Anda mengatur ulang PIN sebagai pemilik akun. Perangkat anak akan meminta PIN baru mulai sekarang.',
  unableToVerifyParentPin: 'PIN Orang Tua salah. Silakan coba lagi.',
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
    'Terlalu banyak percobaan yang salah. Silakan minta orang tua Anda membuka kunci PIN dari Pengaturan Orang Tua.',
  parentAccessRequiredTitle: 'Akses orang tua diperlukan',
  parentAccessRequiredBody:
    'Masukkan PIN Anda untuk mengganti nama perangkat ini, memilih Aplikasi yang Diblokir, atau keluar.',
  unlockWithParentPinButton: 'Buka kunci dengan PIN Orang Tua',
  whyPinTitle: 'Kenapa perlu PIN?',
  whyPinBody:
    'Hanya orang tua yang boleh mengubah Aplikasi yang Diblokir atau mengeluarkan perangkat ini dari KidGate. Warna tema tidak memerlukan PIN.',
  pinLockedToast:
    'PIN terkunci setelah terlalu banyak percobaan yang salah. Silakan minta orang tua Anda membukanya dari Pengaturan Orang Tua.',
  pinNotConfiguredToast:
    'Silakan buat PIN 6 digit di Pengaturan Orang Tua pada perangkat orang tua terlebih dahulu.',
  enterSixDigitParentPin: 'Masukkan PIN Orang Tua 6 digit.',
  askParentCreatePin:
    'Silakan minta orang tua Anda membuat PIN Orang Tua di Pengaturan Orang Tua terlebih dahulu.',
  incorrectPinAttemptsLeft: 'PIN salah. {{count}} percobaan tersisa.',
  incorrectPinAttemptsLeft_one: 'PIN salah. {{count}} percobaan tersisa.',
  enterCurrentParentPin: 'Masukkan PIN Orang Tua Anda saat ini.',
  currentParentPinIncorrect: 'PIN Orang Tua saat ini salah.',
} as const;
