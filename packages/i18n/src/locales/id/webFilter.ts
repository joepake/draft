export const webFilter = {
  title: 'Filter web',
  fallbackDeviceName: 'Perangkat anak',
  toastUpdateFailed: 'Tidak dapat memperbarui Filter web. Coba lagi.',
  heroTitle: 'Filter situs web dewasa',
  heroSubtitleIos:
    'Menggunakan filter konten web Waktu Layar Apple untuk membatasi konten dewasa di Safari dan browser dalam aplikasi di perangkat anak.',
  heroSubtitleAndroid:
    'Menggunakan VPN DNS lokal di perangkat Android anak untuk memblokir domain dewasa yang dikenal di browser dan banyak aplikasi.',
  toggleLabel: 'Aktifkan Filter web',
  toggleHintIos: 'Memerlukan izin Waktu Layar di perangkat anak.',
  toggleHintAndroid:
    'Anak perlu menyetujui koneksi VPN KidGate sekali. Biarkan VPN aktif agar filter bekerja.',
  toggleAccessibilityLabel: 'Aktifkan Filter web',
  infoTitle: 'Cara kerjanya',
  infoLine1Ios: 'Apple memfilter situs dewasa secara otomatis.',
  infoLine2Ios:
    'Menggunakan filter konten dewasa Apple di Safari dan tidak memblokir semuanya di dalam aplikasi lain.',
  infoLine3Ios:
    'KidGate menerapkan pengaturan secara otomatis saat aplikasi di perangkat anak menyinkronkan kontrol.',
  infoLine1Android:
    'KidGate menjalankan VPN lokal yang memeriksa DNS untuk domain dewasa dan memblokir beberapa resolver DNS terenkripsi.',
  infoLine2Android:
    'Matikan DNS Pribadi di perangkat anak. Jika aktif, browser bisa melewati filter.',
  infoLine3Android:
    'Perangkat anak menampilkan ikon VPN selama pemfilteran. Mematikan VPN menghentikan filter — buka lagi KidGate untuk memulihkannya.',
  infoLine4Android: 'Buka Pengaturan → Jaringan & internet → DNS Pribadi → Nonaktif.',
  privateDnsBannerTitle: 'Matikan DNS Pribadi',
  privateDnsBannerBody:
    'DNS Pribadi aktif, jadi filter web dewasa bisa dilewati. Matikan agar filter bekerja.',
  privateDnsBannerButton: 'Buka pengaturan DNS',
  vpnConsentBannerTitle: 'Pulihkan VPN Filter web',
  vpnConsentBannerBody:
    'VPN KidGate mati. Filter web dewasa memerlukan VPN yang tetap terhubung.',
  vpnConsentBannerButton: 'Aktifkan VPN',
  iosOnlyNote: 'Menggunakan Waktu Layar di iOS',
  androidVpnNote: 'Menggunakan VPN DNS lokal di Android',
  webFilteringNote:
    'iOS memakai filter dewasa Waktu Layar; Android memakai daftar blokir via VPN DNS lokal.',
  safeSearchAlertsNote:
    'Safari tidak membagikan kata pencarian; peringatan kata kunci memerlukan browser aman terkelola.',
  webHistoryNote: 'Memerlukan browser terfilter atau pelaporan gaya DNS/VPN.',
  categoriesTitle: 'Apa yang diblokir',
  categoriesSubtitle:
    'KidGate memakai daftar domainnya sendiri. Daftar ini mencakup situs yang benar-benar dijangkau anak, bukan seluruh web — padukan dengan daftar di bawah.',
  androidOnlyCategory: 'Hanya Android — iOS tidak punya kontrol web per kategori',
  iosCategoryNote:
    'iPhone hanya mendukung {{category}}, memakai filter Apple. Kategori lain berlaku untuk perangkat Android.',
  allowListTitle: 'Selalu izinkan',
  allowListSubtitle:
    'Situs yang tetap bisa dibuka meski sebuah kategori akan memblokirnya.',
  allowListEmpty: 'Belum ada pengecualian.',
  allowListInputAccessibility: 'Tambah situs yang selalu diizinkan',
  blockListTitle: 'Selalu blokir',
  blockListSubtitle: 'Situs yang ditolak apa pun kata kategorinya.',
  blockListEmpty: 'Belum ada situs yang diblokir.',
  blockListInputAccessibility: 'Tambah situs yang selalu diblokir',
  allowListOnlyLabel: 'Hanya situs yang diizinkan',
  allowListOnlyHintAndroid:
    'Semua di luar daftar izin ditolak. Ini bekerja di lapisan DNS, jadi aplikasi lain juga kehilangan koneksi.',
  allowListOnlyHintIos:
    'Safari dan peramban dalam aplikasi hanya bisa membuka situs di daftar Anda.',
  allowListOnlyNeedsEntries:
    'Tambahkan minimal satu situs yang diizinkan sebelum mengaktifkan.',
  domainPlaceholder: 'contoh.com',
  addDomain: 'Tambah situs',
  removeDomain: 'Hapus {{domain}}',
  invalidDomain: 'Masukkan alamat situs, misalnya contoh.com',
  listFull: 'Anda bisa menyimpan hingga {{max}} situs di daftar ini.',
  openHistory: 'Riwayat web',
  openHistorySubtitle:
    'Lihat situs mana yang dijangkau ponsel ini dan apa yang diblokir',
  category: {
    adult: 'Konten dewasa',
    gambling: 'Judi',
    dating: 'Kencan',
    drugs: 'Narkoba & alkohol',
    violence: 'Kekerasan & ekstremisme',
    piracy: 'Pembajakan',
    social: 'Media sosial',
    videoStreaming: 'Streaming video',
    gaming: 'Game',
    shopping: 'Belanja',
  },
  categoryHint: {
    adult: 'Situs eksplisit dan dewasa',
    gambling: 'Kasino, taruhan, loot box',
    dating: 'Aplikasi kencan dan obrolan orang asing',
    drugs: 'Ganja, vape, minuman keras',
    violence: 'Forum sadis dan ekstremis',
    piracy: 'Torrent dan streaming bajakan',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, portal game',
    shopping: 'Amazon, Shopee, fast fashion',
  },
} as const;
