export const appInventory = {
  title: 'Aplikasi di perangkat ini',
  pendingTitle: 'Menunggu persetujuan Anda',
  pendingBadge: 'Diblokir sampai Anda mengizinkannya',
  approvedBadge: 'Diizinkan oleh Anda',
  installedAtLabel: 'Dipasang {{when}}',
  allowApp: 'Izinkan',
  subtitle: 'Semua yang ditemukan KidGate terpasang, bukan hanya yang berubah.',
  summaryFlagged: '{{flagged}} dari {{total}} aplikasi perlu diperiksa',
  summaryClear: 'Tidak ada yang ditandai dari {{total}} aplikasi',
  flaggedTitle: 'Perlu diperiksa',
  otherTitle: 'Selebihnya',
  scannedLabel: 'Pemindaian terakhir',
  staleNote: 'Daftar ini sudah usang. Akan diperbarui saat perangkat terhubung lagi.',
  truncatedNote: 'Menampilkan {{shown}} dari {{total}} aplikasi yang ditemukan.',
  firstScanNote:
    'Ini pemindaian pertama, jadi KidGate belum tahu kapan aplikasi ini muncul.',
  newBadge: 'Baru',
  ageBadge: '{{age}}+',
  browserExtension: 'Ekstensi Chrome',
  titleExtension: 'Ekstensi di browser ini',
  subtitleExtension:
    'Semua ekstensi yang ditemukan KidGate di browser, bukan hanya yang berubah.',
  summaryFlaggedExtension: '{{flagged}} dari {{total}} ekstensi Chrome perlu dilihat',
  summaryClearExtension:
    'Tidak ada yang mengkhawatirkan dari {{total}} ekstensi Chrome',
  incompleteNoteExtension:
    'Di sini hanya ekstensi browser — aplikasi yang terpasang di perangkat tidak terlihat oleh browser.',
  blockHintExtension:
    'Untuk menghapus ekstensi, buka halaman ekstensi browser di perangkat tersebut.',
  emptyTitleExtension: 'Belum ada pemindaian',
  emptySubtitleExtension:
    'Browser akan mengirim daftar ekstensinya pada koneksi berikutnya.',
  emptyTitle: 'Belum ada pemindaian',
  emptySubtitle:
    'Perangkat akan mengirim daftar aplikasinya saat terhubung berikutnya.',
  unsupportedTitle: 'Perangkat ini tidak dapat mendaftar aplikasinya',
  unsupportedIos:
    'Apple tidak mengizinkan aplikasi mana pun membaca apa yang terpasang di iPhone atau iPad, jadi KidGate hanya bisa melaporkan aplikasi saat digunakan.',
  unsupportedGeneric: 'Perangkat ini tidak melaporkan aplikasi yang terpasang padanya.',
  incompleteNote: 'Aplikasi tanpa ikon di layar utama mungkin tidak muncul di sini.',
  blockHint:
    'Untuk menghentikan aplikasi, buka Aplikasi Diblokir di perangkat itu sendiri.',
  howItWorksLabel: 'Cara kerja daftar ini',
  markSafe: 'Aman',
  dismissedTitle: 'Ditandai aman oleh Anda',
  undoSafe: 'Urungkan',
  howToBlock: 'Cara memblokir',
} as const;
