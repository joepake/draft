export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate di web',
  title: 'Izinkan browser',
  subtitle: 'Kelola keluarga dari komputer',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Browser baru bisa membuka data keluarga setelah kamu izinkan dari ponsel ini.',
  stepsTitle: 'Di komputer',
  step1: 'Buka {{url}} di browser.',
  step2: 'Pilih “Masuk dengan aplikasi KidGate”.',
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
    'Browser akan punya kendali yang sama dengan ponsel ini: melihat lokasi anak, mengubah batas, mengunci perangkat, dan menyetujui permintaan. Izinkan hanya jika kamu sendiri yang sedang masuk.',
  confirmCodeLabel: 'Kode di komputermu',
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

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Browser yang diizinkan',
  sessionsEmpty: 'Belum ada browser yang masuk ke akunmu.',
  sessionsRevoke: 'Keluar',
  sessionExpires: 'Berakhir {{when}}',
  revokedToast: 'Browser itu telah dikeluarkan.',
} as const;
