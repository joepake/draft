export const appInventory = {
  pendingTitle: 'Menunggu persetujuan Anda',
  pendingBadge: 'Diblokir sampai Anda mengizinkannya',
  approvedBadge: 'Diizinkan oleh Anda',
  allowApp: 'Izinkan',
  subtitle: 'Semua yang ditemukan KidGate terpasang, bukan hanya yang berubah.',
  summaryFlagged: '{{flagged}} dari {{total}} aplikasi perlu diperiksa',
  summaryClear: 'Tidak ada yang ditandai dari {{total}} aplikasi',
  flaggedTitle: 'Perlu diperiksa',
  otherTitle: 'Selebihnya',
  scannedLabel: 'Pemindaian terakhir',
  staleNote: 'Daftar ini sudah usang. Akan diperbarui saat perangkat terhubung lagi.',
  truncatedNote: 'Menampilkan {{shown}} dari {{total}} aplikasi yang ditemukan.',
  newBadge: 'Baru',
  ageBadge: '{{age}}+',
  browserExtension: 'Ekstensi Chrome',
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
  unsupportedTitle: 'Perangkat ini tidak dapat menampilkan daftar aplikasinya',
  unsupportedIos:
    'Apple tidak mengizinkan aplikasi mana pun membaca apa yang terpasang di iPhone atau iPad, dan KidGate juga tidak bisa melihat aplikasi mana yang digunakan di sana.',
  unsupportedGeneric: 'Perangkat ini tidak melaporkan aplikasi yang terpasang padanya.',
  incompleteNote:
    'Beberapa aplikasi mungkin tidak muncul di sini, misalnya aplikasi yang tidak punya ikon di daftar aplikasi perangkat.',
  blockHint:
    'Untuk menghentikan aplikasi, buka Aplikasi yang Diblokir di perangkat itu sendiri.',
  howItWorksLabel: 'Cara kerja daftar ini',
  markSafe: 'Tandai aman',
  dismissedTitle: 'Ditandai aman oleh Anda',
  undoSafe: 'Urungkan',
  tabGeneral: 'Ringkasan',
  searchPlaceholder: 'Cari aplikasi',
  searchEmpty: 'Tidak ada aplikasi yang cocok.',
  blockedBadge: 'Diblokir',
  setLimit: 'Atur batas waktu',
  editLimit: 'Ubah batas waktu',
  howToBlock: 'Cara memblokir',
  blockApp: 'Blokir',
  unblockApp: 'Buka blokir',
  iosBlockOnDevice: 'Di iPhone, aplikasi diblokir langsung dari iPhone anak.',
} as const;
