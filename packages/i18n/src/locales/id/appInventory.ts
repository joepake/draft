export const appInventory = {
  title: 'Aplikasi di perangkat ini',
  subtitle: 'Semua yang ditemukan KidGate terpasang, bukan hanya yang berubah.',
  summaryFlagged: '{{flagged}} dari {{total}} aplikasi perlu diperiksa',
  summaryClear: 'Tidak ada yang ditandai dari {{total}} aplikasi',
  flaggedTitle: 'Perlu diperiksa',
  otherTitle: 'Selebihnya',
  unclassifiedTitle: 'Belum dikenali',
  scannedLabel: 'Pemindaian terakhir',
  staleNote: 'Daftar ini sudah usang. Akan diperbarui saat perangkat terhubung lagi.',
  truncatedNote: 'Menampilkan {{shown}} dari {{total}} aplikasi yang ditemukan.',
  firstScanNote:
    'Ini pemindaian pertama, jadi KidGate belum tahu kapan aplikasi ini muncul.',
  newBadge: 'Baru',
  ageBadge: '{{age}}+',
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
} as const;
