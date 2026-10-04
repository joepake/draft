export const webHistory = {
  title: 'Riwayat web',
  fallbackDeviceName: 'Perangkat anak',
  syncNote:
    'Riwayat web bisa butuh hingga sekitar 15 menit untuk muncul di layar ini — lebih lama jika perangkat tidak memiliki koneksi internet atau ditutup secara tidak terduga.',
  syncNoteTv:
    'TV ini hanya mengirim laporan secara berkala, jadi riwayat web bisa butuh waktu hingga satu jam untuk muncul di layar ini — lebih lama jika tidak ada koneksi internet.',
  summarySites: 'Situs terlihat',
  summaryBlocked: 'Situs diblokir',
  sourceNoteFilter:
    'Data ini berasal dari filter KidGate: situs yang dicari perangkat ini, bukan setiap halaman yang dibuka.',
  backgroundNote:
    'Saat perangkat tidak dipakai, sebagian aplikasi tetap mengakses internet di latar belakang: pembaruan, rekomendasi, dan pemeriksaan berjalan sendiri.',
  sourceNoteExtension:
    'Di browser ini KidGate melihat halaman yang benar-benar dibuka — hanya browser ini, bukan seluruh komputer.',
  filterOffNoteAndroid:
    'Filter web mati, jadi perangkat ini tidak mencatat maupun memblokir apa pun. Aktifkan untuk melihat situs apa saja yang dibuka di perangkat ini.',
  filterOffNoteMacos:
    'Filter web mati, jadi Mac ini tidak mencatat maupun memblokir apa pun. Aktifkan untuk melihat ke mana ia pergi.',
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
  sectionUncategorized: 'Situs lain',
  blockCategory: 'Blokir {{category}}',
  blockCategoryConfirmTitle: 'Blokir {{category}}?',
  blockCategoryConfirmBody:
    'Setiap situs yang dikelompokkan KidGate sebagai {{category}} akan ditolak di perangkat ini. Anda bisa mematikannya lagi di Filter web.',
  blockCategoryConfirmAction: 'Blokir',
  blockCategoryDone: '{{category}} sekarang diblokir.',
  unblockCategory: 'Buka blokir {{category}}',
  unblockCategoryConfirmTitle: 'Buka blokir {{category}}?',
  unblockCategoryConfirmBody:
    'Situs yang dikelompokkan KidGate sebagai {{category}} akan bisa diakses lagi di perangkat ini.',
  unblockCategoryConfirmAction: 'Buka blokir',
  unblockCategoryDone: '{{category}} tidak lagi diblokir.',
  serviceSites: '{{count}} situs',
  serviceNote:
    'Situs yang dimuat sendiri oleh sebuah layanan digabung dalam satu baris: membuka YouTube sekali menjangkau beberapa. Ketuk baris untuk melihatnya.',
  showMoreDays: 'Tampilkan {{count}} hari lagi',
  rollupTitle: 'Kunjungan menurut jenis situs',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Permintaan alamat situs, bukan menit — satu video panjang hanya beberapa, sepuluh menit menjelajah puluhan.',
  rollupNoteAi:
    'Sebagian jenis disimpulkan dari nama situs, bukan dicocokkan dengan situs yang dikenal, jadi ada yang mungkin meleset.',
  rollupNoteExtension:
    'Halaman, bukan menit — satu video panjang dihitung sekali, sepuluh menit menjelajah puluhan.',
  hoursTitle: 'Kapan menjelajah',
  hoursNote:
    'Halaman dimuat per jam, menurut jam perangkat. Tab yang dibiarkan terbuka sepanjang sore dihitung sekali.',
  hoursEmpty: 'Belum ada halaman hari ini.',
  sourceNoteChild:
    'Digabung dari {{count}} perangkat. Masing-masing hanya mencatat yang dilihat filternya sendiri.',
  filterOffNoteChild:
    'Filter web mati di semua perangkat, jadi kunjungan baru tidak tercatat.',
} as const;
