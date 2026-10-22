export const webSignIn = {
  title: 'Masuk di web',
  subtitle: 'Kelola keluarga dari komputer',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Browser baru bisa membuka data keluarga setelah kamu izinkan dari ponsel ini.',
  stepsTitle: 'Di komputer',
  step1: 'Buka {{url}} di browser.',
  step2: 'Tunggu hingga halaman masuk menampilkan kode QR.',
  step3: 'Pindai kode QR yang muncul dengan kamera di bawah.',
  scanHint: 'Jaga kode QR tetap di dalam bingkai.',
  manualTitle: 'Masukkan kode 6 karakter',
  manualHint: 'Kode tertulis di bawah kode QR pada komputer.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Lanjut',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Izinkan browser ini?',
  confirmBody:
    'Browser akan punya kendali yang sama dengan ponsel ini: melihat lokasi anak, mengubah batas, mengunci perangkat, dan menyetujui permintaan. Browser dapat membuat perubahan selama 7 hari, dan Anda dapat menghapusnya kapan saja di Keluarga → Orang tua. Izinkan hanya jika Anda sendiri yang sedang masuk.',
  confirmCodeLabel: 'Kode di komputer Anda',
  approveButton: 'Izinkan',
  declineButton: 'Jangan izinkan',
  declinedToast: 'Browser tidak diizinkan.',
  approvedTitle: 'Browser diizinkan',
  approvedBody: 'Komputermu sedang masuk. Ponsel boleh diletakkan.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Kode QR ini bukan kode masuk web. Pastikan layar masuk terbuka di komputer.',
  expired: 'Kode sudah kedaluwarsa. Tampilkan kode baru di komputer.',
  alreadyUsed: 'Kode sudah dipakai. Tampilkan kode baru di komputer.',
  notFound: 'Kode tidak valid. Periksa enam karakter lalu coba lagi.',
  failed: 'Tidak dapat menyelesaikan permintaan. Coba lagi.',
  sessionsTitle: 'Dasbor',
  sessionRow: '{{browser}} di {{os}}',
  sessionRowUnknown: 'Browser web',
  sessionExpires: 'Dapat membuat perubahan hingga {{date}}',
  sessionViaQr: 'Diizinkan dengan kode QR',
  sessionViaPin: 'Diizinkan dengan PIN Orang Tua',
  thisBrowser: 'Browser ini',
  sessionsRevoke: 'Hapus',
  sessionsRevokeConfirmTitle: 'Hapus browser ini?',
  sessionsRevokeConfirmBody:
    'Browser ini tidak lagi dapat mengubah pengaturan atau mengontrol perangkat. Hingga tanggal yang ditampilkan, browser ini masih dapat mengubah beberapa detail perangkat, seperti nama. Namun, browser ini mungkin masih menampilkan informasi keluarga Anda sampai seseorang keluar dari akun di sana.',
  revokedToast: 'Browser dihapus.',
  revokeFailed: 'Tidak dapat menghapus browser itu. Coba lagi.',
} as const;
