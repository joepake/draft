export const webHistory = {
  title: 'Riwayat web',
  fallbackDeviceName: 'Perangkat anak',
  summarySites: 'Situs terlihat',
  summaryBlocked: 'Situs diblokir',
  sourceNoteIos:
    'Di iPhone data ini berasal dari laporan Waktu Layar Apple: situs tempat anak menghabiskan waktu, bukan setiap halaman yang dibuka.',
  sourceNoteAndroid:
    'Di Android data ini berasal dari filter DNS KidGate: situs yang dicari ponsel ini, bukan setiap halaman yang dibuka.',
  filterOffNoteAndroid:
    'Filter web mati, jadi ponsel ini tidak mencatat maupun memblokir apa pun. Aktifkan untuk melihat ke mana ia pergi.',
  filterOffNoteIos:
    'Filter web mati, jadi tidak ada yang diblokir. Daftar ini hanya menunjukkan ke mana ponsel pergi.',
  filterAll: 'Semua situs',
  filterBlocked: 'Hanya yang diblokir',
  emptyTitle: 'Belum ada catatan',
  emptyBody:
    'Situs muncul di sini saat perangkat anak menjelajah dengan KidGate aktif.',
  emptyBlockedBody: 'Belum ada yang diblokir.',
  dayBlockedBadge: '{{count}} diblokir',
  visitsMeta: '{{count}} kunjungan',
  blockedMeta: 'Diblokir {{count}} kali · {{category}}',
  categoryUnknown: 'Daftar blokir',
  showMoreDays: 'Tampilkan {{count}} hari lagi',
  rollupTitle: 'Waktu habis ke mana',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Porsi kunjungan tercatat menurut jenis situs. Hanya Android — iPhone tidak memberi tahu KidGate jenis sebuah domain.',
} as const;
