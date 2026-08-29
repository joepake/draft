export const webFilter = {
  title: 'Filter web',
  fallbackDeviceName: 'Perangkat anak',
  appliesToAll: 'Berlaku untuk semua {{count}} perangkat {{name}}',
  coverageLine: 'Aktif di {{enforcing}} dari {{total}} perangkat',
  mergeNotice:
    'Perangkat {{name}} memiliki pengaturan filter web yang berbeda. Menyimpan di sini menerapkan satu pengaturan ke semuanya, digabungkan ke pilihan yang lebih ketat.',
  mergeLoosened: 'Kini diizinkan di setiap perangkat: {{domains}}',
  toastUpdateFailed: 'Tidak dapat memperbarui Filter web. Coba lagi.',
  heroTitle: 'Filter situs web dewasa',
  heroSubtitleIos:
    'Menggunakan filter konten web Waktu Layar Apple untuk membatasi konten dewasa di Safari dan browser dalam aplikasi di perangkat anak.',
  heroSubtitleAndroid:
    'Menggunakan VPN DNS lokal di perangkat Android anak untuk memblokir domain dewasa yang dikenal di browser dan banyak aplikasi.',
  heroSubtitleMacos:
    'Menjalankan filter konten KidGate di Mac anak untuk memblokir situs dewasa yang dikenal di browser dan banyak aplikasi.',
  toggleHintIos: 'Memerlukan izin Waktu Layar di perangkat anak.',
  toggleHintAndroid:
    'Anak perlu menyetujui koneksi VPN KidGate sekali. Biarkan VPN aktif agar filter bekerja.',
  toggleHintMacos:
    'Anak harus menyetujui ekstensi filter KidGate sekali di Pengaturan Sistem. Jaga agar tetap disetujui agar filter berfungsi.',
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
  infoLine1Macos:
    'KidGate menjalankan filter konten di Mac yang memeriksa situs mana yang sedang dicari, dan memblokir yang termasuk kategori Anda.',
  infoLine2Macos:
    'Jika filter terlihat belum disetujui di Mac anak, buka Pengaturan Sistem → Umum → Item Login & Ekstensi untuk menyetujuinya.',
  infoLine3Macos:
    'Mac anak menampilkan filter sebagai aktif setelah disetujui. Jika dimatikan di sana, buka kembali KidGate untuk memulihkannya.',
  infoLine4Macos:
    'Filter membaca nama situs, yang disembunyikan browser modern pada sekitar separuh kunjungan — situs tersebut tidak diperiksa terhadap kategori Anda. Filter tetap memblokir sebagian besar situs yang dijangkau anak dengan cara ini.',
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
  macosFilterNote: 'Menggunakan filter konten KidGate di Mac',
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
    'Lihat situs mana yang dijangkau perangkat ini dan apa yang diblokir',
  blockedPageTitle: 'Situs diblokir',
  blockedPageBody:
    'KidGate memblokir situs ini untuk keluargamu. Jika menurutmu ini keliru, tanyakan kepada orang tuamu.',
  category: {
    adult: 'Konten dewasa',
    selfHarm: 'Melukai diri & gangguan makan',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Pendidikan',
    utility: 'Utilitas',
    browser: 'Peramban web',
    devTools: 'Coding & alat pengembang',
    messaging: 'Pesan & panggilan',
    community: 'Forum & komunitas',
    shortVideo: 'Video pendek',
    creative: 'Foto, video & seni',
    productivity: 'Catatan & produktivitas',
    reading: 'Buku & komik',
    fileSharing: 'Berbagi file & unduhan',
    bypass: 'Aplikasi pengelak kontrol',
    gambling: 'Judi',
    gameGambling: 'Loot box & taruhan skin',
    dating: 'Kencan',
    strangerChat: 'Obrolan dengan orang asing',
    drugs: 'Narkoba & alkohol',
    violence: 'Kekerasan & sadis',
    extremism: 'Ekstremisme & kebencian',
    piracy: 'Pembajakan',
    social: 'Media sosial',
    videoStreaming: 'Streaming video',
    music: 'Musik',
    gaming: 'Game',
    shopping: 'Belanja',
    aiCompanion: 'Teman AI',
    aiAssistant: 'Asisten AI',
    cryptoTrading: 'Kripto & trading',
    vpn: 'Aplikasi VPN',
  },
  categoryHint: {
    adult: 'Situs eksplisit dan dewasa',
    selfHarm: 'Forum yang mendorong melukai diri dan tidak makan',
    gambling: 'Kasino, taruhan olahraga, poker',
    gameGambling: 'Buka loot box, taruhan skin dan Roblox',
    dating: 'Aplikasi kencan',
    strangerChat: 'Kloningan Omegle, obrolan video acak',
    drugs: 'Ganja, vape, minuman keras',
    violence: 'Situs sadis dan gambar mengejutkan',
    extremism: 'Forum kebencian dan situs ekstremis',
    piracy: 'Torrent dan streaming bajakan',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, portal game',
    shopping: 'Amazon, Shopee, fast fashion',
    aiCompanion: 'Character.AI, Replika, bot roleplay',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, aplikasi trading',
    vpn: 'Halaman unduh VPN. Tidak memblokir aplikasi yang sudah terpasang.',
  },
  categoryGroup: {
    harm: 'Konten berbahaya',
    contact: 'Orang asing',
    bypass: 'Menembus filter',
    ai: 'AI',
    entertainment: 'Hiburan & sosial',
    money: 'Belanja & uang',
  },
  categoriesOnCount: '{{on}} dari {{total}} aktif',
  askToOpen: 'Minta izin orang tua',
  askToOpenSubtitle: 'Kalau diizinkan, situs ini akan terbuka.',
  askToOpenDomainLabel: 'Situs yang mana?',
  askToOpenPending: 'Kamu sudah meminta satu situs. Tunggu jawabannya.',
  askToOpenTooSoon: 'Kamu baru saja mengirim permintaan. Coba lagi semenit lagi.',
  requestsTitle: 'Permintaan situs',
  requestsSubtitle: 'Situs yang diminta perangkat ini untuk diizinkan.',
  siteRequestApproved: 'Situs diizinkan',
  siteRequestApprovedDescription:
    '{{domain}} ditambahkan ke “Selalu izinkan” di {{deviceName}}.',
  siteRequestDenied: 'Permintaan situs ditolak',
  siteRequestDeniedDescription: '{{domain}} tetap diblokir di {{deviceName}}.',
  siteRequestReceived: 'Permintaan situs',
  siteRequestReceivedDescription: '{{deviceName}} meminta membuka {{domain}}.',
} as const;
