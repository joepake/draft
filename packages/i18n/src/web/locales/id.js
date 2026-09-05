/** Indonesian. No plural inflection, so counted strings keep the plain key. */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} dari {{total}} aplikasi perlu diperiksa',
    summaryClear: 'Tidak ada yang ditandai dari {{total}} aplikasi',
    summaryFlaggedExtension: '{{flagged}} dari {{total}} ekstensi Chrome perlu dilihat',
    summaryClearExtension:
      'Tidak ada yang mengkhawatirkan dari {{total}} ekstensi Chrome',
  },
  meta: {
    title: 'KidGate — Kontrol orang tua yang menghormati anak Anda',
    description:
      'KidGate membantu orang tua mengatur waktu layar, memblokir aplikasi, menyaring web, dan tetap terhubung — tanpa merampas kebebasan anak.',
  },

  common: {
    comingSoon: 'Segera hadir',
    loading: 'Memuat…',
    signOut: 'Keluar',
  },

  language: {
    title: 'Bahasa',
    change: 'Ganti bahasa',
    system: 'Bahasa peramban',
    english: 'Inggris',
    vietnamese: 'Vietnam',
    spanish: 'Spanyol',
    portuguese: 'Portugis (Brasil)',
    german: 'Jerman',
    french: 'Prancis',
    japanese: 'Jepang',
    korean: 'Korea',
    arabic: 'Arab',
    indonesian: 'Indonesia',
    italian: 'Italia',
    turkish: 'Turki',
    hindi: 'Hindi',
    russian: 'Rusia',
  },

  nav: {
    skip: 'Lewati ke konten',
    main: 'Utama',
    about: 'Tentang',
    support: 'Dukungan',
    privacy: 'Privasi',
    terms: 'Ketentuan',
    dashboard: 'Dasbor',
  },

  footer: {
    blurb:
      'Kontrol orang tua yang membantu keluarga bersepakat soal waktu layar, bukan bertengkar karenanya.',
    product: 'Produk',
    about: 'Tentang kami',
    dashboard: 'Dasbor orang tua',
    supportGuides: 'Dukungan & panduan',
    download: 'Unduh',
    contact: 'Hubungi kami',
    legal: 'Legal',
    privacyPolicy: 'Kebijakan Privasi',
    terms: 'Syarat & Ketentuan',
    deleteData: 'Hapus data Anda',
    rights: '© {{year}} KidGate. Seluruh hak dilindungi.',
    madeFor: 'Dibuat untuk keluarga di iPhone, Android, Mac, dan Windows.',
  },

  legalNote:
    'Halaman ini hanya tersedia dalam bahasa Inggris, dan teks bahasa Inggris adalah versi yang berlaku. Hubungi [support@kidgate.app](mailto:support@kidgate.app) jika Anda perlu bantuan memahami bagian mana pun.',

  store: {
    appleAria: 'Unduh KidGate di App Store',
    appleSmall: 'Unduh di',
    appleName: 'App Store',
    googleAria: 'Dapatkan KidGate di Google Play',
    googleSmall: 'Dapatkan di',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: 'Kontrol orang tua, sebagaimana mestinya',
    heroTitle: 'Lindungi anak Anda',
    heroTitleAccent: 'tanpa merampas kebebasannya.',
    heroLede:
      'KidGate memberi orang tua kendali yang tenang dan jelas atas waktu layar, aplikasi, dan keamanan — sementara anak tetap memegang ponsel yang terasa miliknya.',
    heroCheck1: 'Waktu layar',
    heroCheck2: 'Blokir aplikasi',
    heroCheck3: 'Penyaringan web',
    heroCheck4: 'Lokasi',
    heroCheck5: 'Dasbor keluarga',

    phoneDailyLimit: 'Batas harian',
    phoneDailyLimitValue: '1j 24m dari 3j terpakai',
    phoneBlockedHours: 'Jam diblokir',
    phoneScheduleOn: 'Jadwal aktif',
    phoneLocation: 'Lokasi',
    phoneLocationValue: 'Di sekolah · 5 menit lalu',
    phoneCheckIn: 'Check-In OK',

    trust1Title: 'Tanpa iklan, selamanya',
    trust1Text: 'Data anak tidak pernah dipakai untuk iklan',
    trust2Title: 'Hapus kapan saja',
    trust2Text: 'Hapus akun keluarga dan semua data atas permintaan Anda',
    trust3Title: 'Ponsel dan komputer',
    trust3Text: 'iPhone, Android, Mac, dan Windows dalam satu akun keluarga',
    trust4Title: 'Satu paket per keluarga',
    trust4Text: 'Semua perangkat orang tua dan anak, satu langganan',

    featuresEyebrow: 'Fitur',
    featuresTitle: 'Semua yang dibutuhkan orang tua',
    featuresSub:
      'Dari batas harian sampai peringatan darurat — satu aplikasi untuk kesejahteraan digital seluruh keluarga.',
    feature1Title: 'Waktu layar & batas harian',
    feature1Text:
      'Tetapkan batas harian dan Jam Diblokir untuk sekolah dan waktu tidur. Perangkat mengunci sendiri saat waktu habis.',
    feature2Title: 'Blokir aplikasi',
    feature2Text:
      'Pilih persis aplikasi apa yang boleh dibuka anak Anda, dilindungi PIN orang tua, dan nyalakan pemblokiran dari jauh.',
    feature3Title: 'Batas waktu per aplikasi',
    feature3Text:
      'Batasi tiap aplikasi sendiri-sendiri, di atas batas harian — “setengah jam TikTok” tanpa harus melarangnya sama sekali.',
    feature4Title: 'Penyaringan web & riwayat',
    feature4Text:
      'Tolak situs dewasa dan judi, lalu lihat situs mana yang benar-benar dibuka ponsel itu dan mana yang dihentikan.',
    feature5Title: 'Lokasi langsung & tempat',
    feature5Text:
      'Lihat lokasi terakhir anak Anda, telusuri riwayatnya, dan dapatkan pemberitahuan saat ia tiba di atau meninggalkan tempat tersimpan.',
    feature6Title: 'Check-In & SOS',
    feature6Text:
      'Minta anak Anda memastikan dirinya aman, dan terima SOS seketika dengan lokasi dan foto saat darurat.',
    feature7Title: 'Peringatan perlindungan & aplikasi',
    feature7Text:
      'Ketahui saat sebuah izin penting dimatikan — dan di Android, saat sebuah aplikasi dipasang atau dihapus.',
    feature8Title: 'Tugas berhadiah & waktu tambahan',
    feature8Text:
      'Anak mendapat menit tambahan dengan menyelesaikan tugas, atau meminta waktu lebih. Keduanya masuk ke ponsel Anda untuk disetujui.',

    feature9Title: 'Kunci perangkat',
    feature9Text:
      'Kunci perangkat sekarang dan buka lagi saat Anda siap — makan malam, PR, atau aturan yang diabaikan.',
    feature10Title: 'Laporan mingguan',
    feature10Text:
      'Setiap Senin: waktu layar, rata-rata harian, apa saja yang diblokir, dan perbandingan dengan pekan sebelumnya.',
    feature11Title: 'Papan bintang',
    feature11Text:
      'Anak-anak bisa melihat berapa bintang yang dikumpulkan masing-masing pekan ini. Dimulai lagi setiap Senin, dan Anda yang menentukan apakah dinyalakan.',
    feature12Title: 'Feed Aktivitas',
    feature12Text:
      'Semua yang terjadi, berurutan — perangkat dibuka, situs difilter, tugas selesai, peringatan dikirim.',
    platformsTitle: 'Satu KidGate, di mana pun layarnya',
    platformsSub:
      'Aturan yang sama dan akun keluarga yang sama di ponsel maupun komputer. Aplikasi desktop dipasang dari situs ini, bukan dari toko aplikasi.',

    showcaseEyebrow: 'Dasbor orang tua',
    showcaseTitle: 'Seluruh keluarga dalam satu layar',
    showcaseSub:
      'Waktu layar, upaya yang diblokir, lokasi, dan apa pun yang butuh perhatian Anda — di ponsel Anda atau di peramban mana pun.',
    showcaseTile1: 'Waktu layar hari ini',
    showcaseTile2: 'Upaya diblokir',
    showcaseTile3: 'Butuh perhatian',
    showcaseCaption1: 'Baca laporan dari peramban mana pun',
    showcaseCaption2: 'Perubahan disetujui dari ponsel Anda',

    setupEyebrow: 'Penyiapan',
    setupTitle: 'Siap dalam hitungan menit',
    setupSub: 'Tanpa kemampuan teknis — aplikasi memandu Anda di setiap langkah.',
    step1Title: 'Siapkan perangkat Anda',
    step1Text:
      'Pasang KidGate, pilih “Ini perangkat orang tua”, lalu masuk dengan Google, Apple, atau email.',
    step2Title: 'Sambungkan perangkat anak Anda',
    step2Text:
      'Pasang KidGate di ponsel anak Anda dan sambungkan dengan memindai kode QR. Kurang dari satu menit.',
    step3Title: 'Tetapkan aturan Anda',
    step3Text:
      'Pilih batas harian, blokir aplikasi dan jam, lalu nyalakan lokasi — semuanya dari ponsel Anda sendiri.',

    whyEyebrow: 'Mengapa KidGate',
    whyTitle: 'Dibangun untuk kepercayaan, bukan pengawasan',
    whySub: 'Dirancang agar percakapan orang tua dan anak tetap terbuka.',
    why1Title: 'Satu paket, satu keluarga',
    why1Text:
      'Satu langganan mencakup semua perangkat orang tua dan anak. Hanya pemilik keluarga yang membayar.',
    why2Title: 'Dibuat untuk pengasuhan bersama',
    why2Text:
      'Undang orang tua kedua untuk mengelola anak yang sama, dengan akses yang disetujui pemilik.',
    why3Title: 'Privasi lebih dulu',
    why3Text:
      'Kami tidak pernah menjual data pribadi dan tidak pernah memakai data anak untuk iklan. Hapus semuanya kapan saja.',
    why4Title: 'Jujur soal batasan',
    why4Text:
      'Kami memberi tahu apa yang bisa dan tidak bisa ditegakkan tiap platform, bukan menjanjikan kendali yang tidak ada.',

    onlyEyebrow: 'Hanya di KidGate',
    onlyTitle: 'Yang tidak Anda temukan di tempat lain',
    onlySub:
      'Enam hal yang kami periksa terhadap aplikasi pembanding pilihan orang tua. Masing-masing menyebut platform tempat hal itu berlaku.',
    only1Title: 'TV ruang keluarga juga',
    only1Text:
      'Android TV mendapat Jam Diblokir, Blokir aplikasi, batas per aplikasi, dan Penyaringan web yang sama seperti ponsel. Kebanyakan kontrol orang tua berhenti di ponsel.',
    only2Title: 'Peringatan pesan yang tetap di ponsel',
    only2Text:
      'Di Android, pesan dicocokkan di perangkat itu sendiri dengan daftar kata kunci dalam 14 bahasa. Hanya kata yang cocok yang disimpan — isi percakapan tidak pernah disimpan.',
    only3Title: 'Semua aplikasi, bukan daftar aplikasi',
    only3Text:
      'Di Android, peringatan datang dari notifikasi dan ketikan di aplikasi apa pun yang dipakai anak Anda — Zalo, LINE, KakaoTalk, obrolan dalam game — bukan dari daftar tetap aplikasi yang didukung.',
    only4Title: 'Jalan keluar bagi anak',
    only4Text:
      'Menahan SOS lima detik langsung memberi tahu Anda, lengkap dengan lokasi — di Android dan Mac, perangkat juga terbuka sebentar. Anak yang selalu bisa minta tolong tidak punya alasan melawan aplikasi.',
    only5Title: 'Aturan yang tetap berlaku tanpa internet',
    only5Text:
      'Jam Diblokir dan Batas harian dijalankan di perangkat itu sendiri, jadi mencabut router tidak mengubah apa pun. TV bahkan menerima PIN orang tua Anda tanpa koneksi sama sekali.',
    only6Title: 'Pengakuan saat minggunya memang layak',
    only6Text:
      'Setiap laporan mingguan menyisakan ruang untuk yang berjalan baik — batas yang dipatuhi, tidak ada lagi begadang, tugas yang selesai — dan baru mengatakannya bila minggu itu benar-benar terukur.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Pertanyaan pertama orang tua',
    faqSub: 'Jawaban singkat sebelum Anda mengunduh.',
    faq1Q: 'Apakah ada uji coba gratis?',
    faq1A:
      'Ya. Uji coba dimulai saat perangkat orang tua dan anak pertama Anda terhubung, dan mencakup semua fitur Premium. Setelah berakhir, semua aturan yang Anda buat — Batas harian, Jam Diblokir, Aplikasi yang Diblokir, Filter web, dan lokasi — tetap berjalan gratis di satu perangkat anak.',
    faq2Q: 'Berapa perangkat yang bisa saya kelola?',
    faq2A:
      'Satu langganan mencakup seluruh keluarga Anda — beberapa perangkat anak dan beberapa orang tua dalam paket yang sama.',
    faq3Q: 'Bisakah anak saya menghapus atau mengakali KidGate?',
    faq3A:
      'Pengaturan sensitif berada di balik PIN orang tua, dan Peringatan Perlindungan langsung memberi tahu Anda jika izin penting dimatikan di perangkat anak.',
    faq4Q: 'Bisakah saya mengelola semuanya dari komputer?',
    faq4A:
      'Uji coba dimulai saat perangkat orang tua dan anak pertama Anda terhubung, dan memberi akses penuh ke semua fitur. Menghapus perangkat anak tidak mengatur ulang uji coba. Setelah berakhir, semua aturan tetap berjalan gratis di satu perangkat anak; Premium mempertahankan aktivitas langsung, riwayat, laporan mingguan, dan semua perangkat.',
    faqMore: 'Masih ada pertanyaan? Kunjungi Dukungan',

    ctaTitle: 'Mulai lindungi keluarga Anda hari ini',
    ctaSub: 'Uji coba gratis dengan akses penuh. Tanpa kartu kredit untuk memulai.',
    ctaNote: 'Batalkan kapan saja lewat App Store atau Google Play.',
  },

  login: {
    title: 'Masuk sebagai orang tua',
    sub: 'Gunakan akun yang sama seperti yang Anda buat di aplikasi KidGate. Masuk di sini menampilkan keluarga, perangkat, dan pengaturan yang sama.',
    notConfiguredTitle: 'Firebase belum dikonfigurasi pada penerapan ini.',
    notConfiguredBody:
      'Setel variabel lingkungan VITE_FIREBASE_* untuk mengaktifkan proses masuk.',
    qrWhy:
      'Memindai dengan ponsel sekaligus masuk dan membuka kunci kontrol dalam satu langkah. Cara di bawah membuat Anda masuk untuk melihat; membuka kunci kontrol lalu memerlukan PIN orang tua.',
    orViewOnly: 'atau masuk dengan cara lain',
    google: 'Lanjutkan dengan Google',
    googleBusy: 'Membuka Google…',
    apple: 'Lanjutkan dengan Apple',
    appleBusy: 'Membuka Apple…',
    orEmail: 'atau gunakan email Anda',
    email: 'Email',
    emailPlaceholder: 'anda@contoh.com',
    password: 'Kata sandi',
    submit: 'Masuk',
    submitBusy: 'Sedang masuk…',
    forgot: 'Lupa kata sandi?',
    resetNeedsEmail: 'Masukkan alamat email Anda dulu, lalu pilih Lupa kata sandi.',
    resetSent: 'Email atur ulang kata sandi dikirim ke {{email}}.',
    foot: 'Akun KidGate dibuat di aplikasi ponsel — dasbor web hanya masuk ke keluarga yang sudah ada. Baru di sini? Pasang aplikasinya dan sambungkan perangkat anak terlebih dahulu.',
  },

  qr: {
    start: 'Masuk dengan aplikasi KidGate',
    generating: 'Membuat kode…',
    step1: 'Buka KidGate di ponsel Anda.',
    step2: 'Buka *Pengaturan → Masuk di web*.',
    step3: 'Pindai kode ini, lalu setujui.',
    waiting: 'Menunggu persetujuan · kedaluwarsa dalam {{time}}',
    signingIn: 'Disetujui. Sedang masuk…',
    expired: 'Kode ini sudah kedaluwarsa.',
    failed: 'Proses masuk tidak selesai.',
    newCode: 'Tampilkan kode baru',
    tryAgain: 'Coba lagi',
  },

  authError: {
    generic: 'Terjadi masalah. Coba lagi.',
    invalidEmail: 'Alamat email itu sepertinya tidak benar.',
    userDisabled: 'Akun ini telah dinonaktifkan.',
    userNotFound: 'Tidak ada akun KidGate yang memakai email itu.',
    wrongPassword: 'Email atau kata sandi salah.',
    tooManyRequests: 'Terlalu banyak percobaan. Tunggu beberapa menit lalu coba lagi.',
    popupClosed: 'Jendela masuk ditutup sebelum selesai.',
    popupCancelled: 'Proses masuk dibatalkan.',
    popupBlocked:
      'Peramban Anda memblokir jendela masuk. Izinkan pop-up untuk situs ini lalu coba lagi.',
    accountExists:
      'Email itu sudah terdaftar dengan metode masuk lain. Gunakan metode yang Anda siapkan di aplikasi.',
    operationNotAllowed: 'Metode masuk itu belum diaktifkan untuk proyek ini.',
    unauthorizedDomain:
      'Domain ini tidak diizinkan di pengaturan Firebase Authentication.',
    invalidCustomToken: 'Tautan masuk itu sudah tidak berlaku. Tampilkan kode QR baru.',
    webRejected: 'Permintaan ditolak di ponsel.',
    webExpired: 'Kode kedaluwarsa. Buat yang baru.',
    noFunctionsUrl:
      'URL Cloud Functions belum dikonfigurasi (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Sesi Anda berakhir. Masuk lagi.',
  },

  live: {
    checkingSession: 'Memeriksa sesi Anda…',
    loadingFamily: 'Memuat keluarga Anda…',
    loadFailedTitle: 'Tidak bisa memuat keluarga Anda',
    noAccess:
      'Akun ini tidak punya akses ke keluarga KidGate mana pun. Masuk dengan akun orang tua yang Anda pakai di aplikasi.',
  },

  time: {
    never: 'belum pernah',
    justNow: 'baru saja',
    minutes: '{{count}} mnt lalu',
    hours: '{{count}} jam lalu',
    days: '{{count}} hr lalu',
  },

  viz: {
    hours: '{{count}}j',
    minutes: '{{count}}m',
    hoursMinutes: '{{hours}}j {{minutes}}m',
    none: '—',
    byDay: 'Waktu layar per hari',
    limit: 'Batas {{value}}',
    screenTime: 'Waktu layar',
    bonus: 'Bonus',
    bonusEarned: 'Bonus diperoleh',
    overLimit: 'Melebihi Batas Harian',
    dailyLimit: 'Batas Harian',
    ofLimit: 'dari {{value}}',
    noLimit: 'tanpa batas',
    blocked: 'Diblokir',
    blockedHours: 'Jam Diblokir',
    day0: 'Min',
    day1: 'Sen',
    day2: 'Sel',
    day3: 'Rab',
    day4: 'Kam',
    day5: 'Jum',
    day6: 'Sab',
    timelineUsed: 'Sedang dipakai',
    timelineIdle: 'Tidak dipakai',
    timelineUnmeasured: 'Tidak terukur',
    timelineUnmeasuredHint:
      'KidGate tidak berjalan di perangkat, atau perangkat sedang tidur. Menit itu juga tidak masuk ke total.',
    timelineUnsupported:
      'Perangkat ini bisa melaporkan berapa lama dipakai, tetapi bukan kapan.',
    timelinePending: 'Belum ada linimasa.',
  },

  perm: {
    screenTime: 'Waktu Layar',
    location: 'Lokasi',
    notifications: 'Notifikasi',
    camera: 'Kamera',
    backgroundAppRefresh: 'Penyegaran latar belakang',
    overlay: 'Tampil di atas aplikasi lain',
    batteryOptimization: 'Baterai tanpa batasan',
    exactAlarm: 'Alarm tepat waktu',
    accessibility: 'Aksesibilitas',
  },

  webCat: {
    adult: 'Konten dewasa',
    selfHarm: 'Melukai diri & gangguan makan',
    gambling: 'Judi',
    gameGambling: 'Kotak jarahan & taruhan skin',
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

  appCat: {
    adult: 'Konten dewasa',
    gambling: 'Judi',
    gameGambling: 'Kotak jarahan & taruhan skin',
    dating: 'Kencan',
    drugs: 'Narkoba & alkohol',
    violence: 'Kekerasan & sadis',
    piracy: 'Pembajakan',
    bypass: 'Pengelakan filter & VPN',
  },

  webCatGroup: {
    harm: 'Konten berbahaya',
    contact: 'Orang asing',
    bypass: 'Menembus filter',
    ai: 'AI',
    entertainment: 'Hiburan & sosial',
    money: 'Belanja & uang',
  },

  dash: {
    tabOverview: 'Ikhtisar',
    tabScreen: 'Waktu Layar',
    tabApps: 'Aplikasi & Web',
    tabSafety: 'Keamanan',
    tabControls: 'Kendali',
    tabReport: 'Laporan mingguan',
    tabReportNew: 'Laporan mingguan baru',

    children: 'Anak',
    noChildren: 'Belum ada perangkat anak yang tersambung.',
    unassignedDevices: 'Belum ditetapkan',
    manage: 'Kelola',
    parents: '{{count}} orang tua',
    devices: '{{count}} perangkat anak',
    planManageOnPhone: 'Paket dibeli dan diubah di aplikasi KidGate pada ponsel Anda.',
    fallbackFamily: 'Keluarga Anda',
    fallbackDevice: 'Perangkat anak',

    statusOnline: 'Daring',
    statusOffline: 'Luring',
    statusLocked: 'Terkunci',
    statusLockSent: 'Perintah kunci terkirim',
    statusLockNotApplied: 'Kuncian belum diterapkan',
    statusPaused: 'Dijeda',

    stateAllowed: 'Diizinkan',
    stateDenied: 'Dimatikan',
    stateNotDetermined: 'Belum diminta',
    stateRestricted: 'Dibatasi',
    stateUnavailable: 'Tidak tersedia',
    stateUnknown: 'Tidak diketahui',

    lastActive: 'Terakhir aktif {{when}}',
    appVersion: 'Versi aplikasi',
    appVersionUpdate: '{{running}} · {{latest}} tersedia',
    appVersionRestart: '{{running}} · buka ulang aplikasi untuk menyelesaikan',
    buildOutdated: 'Pembaruan tersedia',
    checkIn: 'Check-In',
    sending: 'Mengirim…',
    lockDevice: 'Kunci perangkat',
    unlock: 'Buka kunci',
    working: 'Memproses…',
    save: 'Simpan',

    unlockTitle: 'Perubahan sedang terkunci.',
    unlockBody:
      'Melihat data langsung bisa. Untuk mengunci perangkat, mengubah batas, atau menyetujui permintaan, buka kunci browser ini dengan PIN orang tua — atau setujui dengan memindai kode QR lewat aplikasi KidGate. Check-In tetap bisa dikirim dalam kedua cara.',
    unlockCta: 'Buka kunci perubahan',
    unlockToChange: 'Buka kunci perubahan dulu',
    pinTitle: 'Masukkan PIN orang tua',
    pinBody:
      'Enam angka yang sama seperti di aplikasi. Browser ini tetap terbuka selama 7 hari.',
    pinLabel: 'PIN orang tua',
    pinSubmit: 'Buka kunci',
    pinOrScan: 'Atau setujui dari ponsel',
    qrSaferNote:
      'Menyetujui dari ponsel lebih aman: cara itu butuh ponsel terhubung di tangan, sedangkan PIN hanya enam angka yang mungkin sudah dilihat anggota keluarga saat Anda mengetiknya.',
    pinWrong: 'PIN salah. Sisa percobaan: {{count}}.',
    pinLocked:
      'Terlalu banyak percobaan salah. Tunggu 15 menit, atau setujui browser ini dari ponsel.',
    pinNotSet:
      'Keluarga Anda belum punya PIN orang tua. Buat di aplikasi, atau setujui browser ini dari ponsel.',
    unlockedToast: 'Perubahan terbuka di browser ini.',
    close: 'Tutup',

    noDeviceTitle: 'Belum ada perangkat anak',
    noDeviceBody:
      'Buka KidGate di ponsel Anda, masuk ke *Keluarga → + → Sambungkan perangkat anak*, lalu pindai kode QR yang tampil di perangkat anak Anda. Perangkat akan muncul di sini beberapa detik setelah tersambung.',

    toastCheckIn: '{{name}} akan menerima permintaan Check-In.',
    toastTimeApproved: 'Waktu tambahan disetujui.',
    toastCheckInResent: 'Check-In dikirim ulang.',

    tileScreenToday: 'Waktu layar hari ini',
    tileSameAsAverage: 'Sama dengan rata-rata 7 hari',
    tileDeltaUp: '↑ {{percent}}% dibanding rata-rata 7 hari',
    tileDeltaDown: '↓ {{percent}}% dibanding rata-rata 7 hari',
    tileBlocked: 'Upaya diblokir',
    tileBlockedMeta: 'Aplikasi yang dihentikan sejak pemasangan',
    tileSites: 'Situs disaring',
    tileCategoriesHit: '{{count}} kategori terkena',
    tileNothingBlocked: 'Belum ada yang diblokir',
    tileAttention: 'Butuh perhatian',
    tileOpenItems: 'Item terbuka di bawah',
    tileAllClear: 'Semua aman',

    cardScreenTime: 'Waktu layar',
    cardScreenTimeSub: '14 hari terakhir, dibanding Batas Harian',
    usageSyncNote:
      'Waktu layar bisa butuh beberapa menit untuk muncul di layar ini — lebih lama jika perangkat tidak memiliki koneksi internet atau ditutup secara tidak terduga.',
    usageSyncNoteTv:
      'TV ini hanya memeriksa secara berkala, jadi waktu layar bisa butuh waktu hingga 30 menit untuk muncul di layar ini — lebih lama jika tidak ada koneksi internet.',
    cardRecent: 'Aktivitas terbaru',
    cardRecentSub: 'Terbaru dulu',
    cardRecentEmpty:
      'Belum ada catatan. Penguncian, aplikasi yang diblokir, peringatan tempat, dan sinkronisasi waktu layar dari perangkat ini akan muncul di sini.',
    cardAttention: 'Butuh perhatian Anda',
    cardAttentionSub: '{{count}} terbuka',
    cardAttentionEmpty: 'Tidak ada yang perlu ditinjau. Perlindungan tampak sehat.',
    cardProtection: 'Kesehatan perlindungan',
    cardProtectionSub: 'Diperiksa {{when}}',

    attnMoreMinutes: '{{name}} meminta tambahan {{minutes}} menit',
    attnReason: '“{{reason}}” · {{when}}',
    attnCheckInMissed: 'Check-In terlewat',
    attnCheckInMissedMeta: 'Dikirim {{when}} · tanpa jawaban',
    attnLimitReached: 'Batas Harian tercapai — perangkat terkunci',
    attnLimitReachedMeta: '{{used}} terpakai hari ini',
    attnBatteryLow: 'Baterai lemah ({{level}}%)',
    attnBatteryLowMeta: 'Pembaruan lokasi bisa berhenti jika ponsel mati',
    attnReview: 'Tinjau',
    attnResend: 'Kirim ulang',
    attnHowToFix: 'Cara memperbaiki',
    attnUnlock: 'Buka kunci',
    attnAppOnly: 'Tersedia di aplikasi KidGate',

    todayTitle: 'Hari ini',
    todaySub: 'Dibanding Batas Harian dan bonus yang diperoleh',
    used: 'Terpakai',
    left: 'Sisa',
    dailyLimit: 'Batas Harian',
    bonusToday: 'Bonus hari ini',
    off: 'Mati',
    on: 'Aktif',
    topAppsTitle: 'Aplikasi teratas hari ini',
    topAppsSub: 'Batas tiap aplikasi ditampilkan sebagai penanda',
    topAppsFreeHint:
      '3 teratas hari ini — daftar lengkap dan riwayat tersedia dengan Premium.',
    trendTitle: 'Tren waktu layar',
    trendSub: '{{count}} hari terakhir',
    rangeDays: '{{count}} hr',
    blockedHoursTitle: 'Jam Diblokir',
    blockedHoursSub:
      '{{count}} rentang waktu · perangkat tetap terkunci di dalam blok berarsir',
    scheduleOff: 'Jadwal mati',
    schedMax: 'Satu perangkat paling banyak menampung {{max}} rentang.',

    appUsageTitle: 'Penggunaan aplikasi hari ini',
    appUsageSub: 'Waktu yang dipakai per aplikasi',
    topAppsOther: 'Aplikasi lain',
    underAMinute: 'Kurang dari semenit',
    appUsageEmpty: 'Belum ada penggunaan aplikasi yang dilaporkan.',
    appBlockingTitle: 'Blokir aplikasi',
    appBlockingSub: 'Dipilih di perangkat anak dengan PIN orang tua',
    blockingLabel: 'Pemblokiran',
    appsBlocked: 'Aplikasi diblokir',
    categories: 'Kategori',
    perAppHint:
      'Batas tiap aplikasi berjalan terpisah dari daftar blokir — “30 menit TikTok” adalah keputusan yang berbeda dari “tidak ada TikTok”.',
    limitsMax: 'Satu perangkat paling banyak membatasi {{max}} aplikasi.',
    perDay: '{{value}}/hari',
    webActivityTitle: 'Aktivitas web',
    webActivitySub: 'Domain paling sering dikunjungi, 30 hari terakhir',
    webActivityEmpty: 'Belum ada aktivitas web.',
    inventoryTitle: 'Aplikasi terpasang',
    inventorySub: 'Semua di perangkat ini, bukan hanya yang berubah',
    inventoryEmpty: 'Perangkat ini belum mengirim daftar aplikasinya.',
    inventoryStale:
      'Daftar ini sudah usang. Akan diperbarui saat perangkat terhubung lagi.',
    inventoryFirstScan:
      'Pemindaian pertama, jadi KidGate belum tahu kapan aplikasi ini muncul.',
    inventoryFlagged: 'Perlu diperiksa',
    inventoryFlaggedLabel: 'Perlu ditinjau',
    inventoryOtherLabel: 'Dikenali',
    inventoryUnknownLabel: 'Belum dikenali',
    inventoryIncomplete:
      'Aplikasi tanpa ikon di layar utama mungkin tidak muncul di sini.',
    inventoryPending: 'Menunggu persetujuan Anda',
    pendingInstallBlocked: 'Diblokir sampai Anda mengizinkannya',
    installAllow: 'Izinkan',
    pendingInstallsTitle: 'Aplikasi baru menunggu persetujuan',
    pendingInstallsSub:
      'Dipasang setelah persetujuan diaktifkan, diblokir sendiri oleh perangkat',
    pendingInstallsEmpty: 'Tidak ada aplikasi baru yang menunggu persetujuan.',
    toastInstallAllowed: 'Aplikasi diizinkan',
    rowInstallApproval: 'Setujui Aplikasi Baru',
    rowInstallApprovalDesc: '{{count}} aplikasi menunggu persetujuan',
    rowInstallApprovalDesc_one: '{{count}} aplikasi menunggu persetujuan',
    rowInstallApprovalDescIos:
      'Menyembunyikan App Store — Apple tidak mengizinkan persetujuan per aplikasi',
    webActivitySyncNote:
      'Aktivitas web bisa butuh beberapa menit untuk muncul di layar ini — lebih lama jika perangkat tidak memiliki koneksi internet atau ditutup secara tidak terduga.',
    webActivitySyncNoteTv:
      'TV ini hanya memeriksa secara berkala, jadi aktivitas web bisa butuh waktu hingga 30 menit untuk muncul di layar ini — lebih lama jika tidak ada koneksi internet.',
    colDomain: 'Domain',
    colVisits: 'Kunjungan',
    colBlocked: 'Diblokir',
    colLastSeen: 'Terakhir',
    videosTitle: 'Video yang ditonton',
    videosSub: 'Apa yang ditonton di YouTube dan web',
    videosEmpty: 'Belum ada video.',
    colVideo: 'Video',
    colChannel: 'Kanal',
    colViews: 'Tontonan',
    filterRefusedTitle: 'Yang ditolak penyaring',
    filterRefusedSub: '{{count}} permintaan diblokir, 30 hari terakhir',
    nothingBlockedYet: 'Belum ada yang diblokir.',
    rollupNoteAi:
      'Sebagian jenis disimpulkan dari nama situs, bukan dicocokkan dengan situs yang dikenal, jadi ada yang mungkin meleset.',
    webBackgroundNote:
      'Saat perangkat tidak dipakai, sebagian aplikasi tetap mengakses internet di latar belakang: pembaruan, rekomendasi, dan pemeriksaan berjalan sendiri.',
    filterHintIos:
      'Di iOS penyaring memakai kontrol konten dewasa milik Apple — pemblokiran per kategori hanya di Android.',
    filterHintAndroid: 'Kategori ditegakkan oleh penyaring DNS di perangkat.',
    filterHintMacos: 'Kategori ditegakkan oleh penyaring konten KidGate di Mac.',

    locationTitle: 'Lokasi',
    locationSharingOff: 'Berbagi lokasi mati',
    locationSyncNote:
      'Lokasi bisa butuh beberapa menit untuk diperbarui — lebih lama jika perangkat tidak memiliki koneksi internet atau ditutup secara tidak terduga.',
    locationUpdated: 'Diperbarui {{when}}',
    locationWaiting: 'Menunggu pembaruan pertama',
    lastKnownLocation: 'Lokasi terakhir diketahui',
    nearPlace: 'Dekat {{place}}',
    noPlaces:
      'Belum ada tempat tersimpan. Tambahkan satu di aplikasi untuk mendapat peringatan saat anak Anda tiba atau pergi.',
    placeRadius: '{{meters}} m · ',
    placeArrive: 'tiba',
    placeLeave: 'pergi',
    placeNoAlerts: 'tanpa peringatan',
    placeSamePin:
      'Ini titik yang sama dengan “{{name}}”. Pakai peta di aplikasi untuk menaruhnya di tempat lain.',
    placeWebHint:
      'Di web, tempat hanya bisa dibuat di posisi terakhir yang dilaporkan perangkat. Pakai peta di aplikasi untuk memilih lokasi lain.',
    placeNeedsLocation: 'Menunggu lokasi dari perangkat ini.',
    sosTitle: 'Peringatan SOS',
    sosSub: 'Sinyal darurat dari perangkat anak',
    sosEmpty:
      'Belum ada peringatan SOS. Cobalah sekali bersama agar Anda berdua tahu cara kerjanya.',
    sosAcknowledged: 'sudah ditanggapi',
    sosActive: 'aktif',

    checkInsTitle: 'Check-In',
    checkInsSub: 'Minta anak Anda memastikan dirinya aman',
    checkInSafe: 'Dipastikan aman',
    checkInMissed: 'Tidak ada jawaban',
    checkInWaiting: 'Menunggu',
    checkInPhotoRequested: 'foto dan lokasi diminta',
    checkInNoReply: 'belum ada balasan',
    checkInPhotoSkipped: 'foto dilewati',
    checkInPhotoAttached: 'foto dilampirkan',
    checkInNoPhoto: 'foto tidak diminta',
    sendCheckIn: 'Kirim Check-In sekarang',

    protectionAlertsTitle: 'Peringatan perlindungan',
    protectionAlertsSub: '{{count}} peristiwa sejak pemasangan',
    protectionAlertsHint:
      'Peringatan perlindungan berarti KidGate hanya bisa menegakkan lebih sedikit dari yang Anda atur. Pulihkan izinnya di perangkat anak untuk menghapusnya.',

    limitCardTitle: 'Batas Harian',
    limitCardSub: 'Batasi menit yang tersedia setiap hari',
    limitAria: 'Menit batas harian',
    limitScaleMin: '30m',
    limitScaleMax: '8j',
    limitHint:
      'Menit bonus dari tugas dan permintaan waktu yang disetujui ditambahkan di atasnya, hanya untuk hari itu.',
    limitShared: 'Dipakai bersama semua perangkat',
    limitSharedSpent: 'Hari ini terpakai {{used}} dari {{limit}}',
    limitSharedHint:
      'Ini satu hari penuh untuk anak ini, bukan batas perangkat ini saja — tiap perangkat mendapat sisa yang belum dipakai perangkat lain. Ubah di aplikasi KidGate.',
    whatsOnTitle: 'Apa yang aktif',
    whatsOnSub: 'Perubahan disinkronkan ke perangkat anak',
    rowBlockedHours: 'Jam Diblokir',
    rowBlockedHoursDesc: '{{count}} rentang waktu · {{list}}',
    rowAppBlocking: 'Blokir Aplikasi',
    rowAppBlockingApps: '{{count}} aplikasi',
    rowAppBlockingApps_one: '{{count}} aplikasi',
    rowAppBlockingCategories: '{{count}} kategori',
    rowAppBlockingCategories_one: '{{count}} kategori',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Penyaring Web',
    rowWebFilterDesc: '{{count}} kategori ditolak',
    rowNotSupported: 'Tidak didukung di perangkat ini',
    rowWebFilterAwaitingApproval: 'Menunggu persetujuan di perangkat',
    rowWebFilterSwitchedOff: 'Dimatikan di perangkat',
    rowLocation: 'Berbagi lokasi',
    rowLocationDesc: 'Pembaruan terakhir {{when}}',
    rowLocationNone: 'Belum ada lokasi',
    rowSearchMonitoring: 'Pemantauan pencarian',
    rowSearchMonitoringDesc:
      'Peramban dan YouTube. Hanya kata yang ditandai yang dilaporkan, bukan isi pencarian.',
    rowSafeSearch: 'Paksa SafeSearch',
    rowSafeSearchDesc:
      'Mengunci Google SafeSearch, Mode Terbatas YouTube, Bing, dan DuckDuckGo pada pengaturan ketat. Android, Android TV, dan Chrome.',

    webFilterCatsTitle: 'Kategori penyaring web',
    webFilterCatsSub: 'Jenis konten yang diblokir',
    dnsHint:
      'Resolver DNS terenkripsi selalu ditolak selama penyaring berjalan — membiarkannya terjangkau justru yang memungkinkan peramban melewati semua kategori lain.',
    starChartTitle: 'Papan bintang',
    starChartSub: 'Bintang yang dikumpulkan minggu ini, per anak',
    starChartEmpty: 'Tambahkan anak kedua di aplikasi untuk memulai papan bintang.',
    starChartStars: '{{count}} bintang',
    familyScreenTimeTitle: 'Waktu layar keluarga',
    familyScreenTimeSub: 'Waktu layar paling sedikit di atas, minggu ini',
    familyScreenTimeEmpty:
      'Belum ada yang melapor minggu ini. Baris muncul saat ponsel melapor.',
    familyScreenTimeParent: 'Orang tua',
    familyScreenTimeDays: '{{count}} hari dilaporkan',
    rewardTasksTitle: 'Tugas berhadiah',
    rewardTasksSub: 'Dapatkan menit tambahan dengan menyelesaikan tugas',
    rewardTaskMeta: '+{{minutes}} mnt · {{cadence}}',
    rewardTaskStars: 'Tingkat kesulitan: {{count}} dari 3',
    rewardTaskWaiting: ' · menunggu persetujuan Anda',
    approve: 'Setujui',
    siteRequestsTitle: 'Permintaan situs',
    siteRequestsSub: 'Situs yang diminta perangkat ini untuk diizinkan',
    siteRequestAllow: 'Izinkan',
    siteRequestDeny: 'Nanti saja',
    attnSiteRequest: '{{name}} meminta membuka {{domain}}',
    toastSiteAllowed: 'Situs diizinkan',
    timelineTitle: 'Kapan perangkat dipakai',
    timelineSub:
      'Hari ini, dari tengah malam ke tengah malam. Hijau adalah waktu pemakaian perangkat.',
  },

  controlError: {
    generic: 'Tidak berhasil. Coba lagi.',
    network: 'Tidak ada koneksi. Periksa jaringan lalu coba lagi.',
    sessionExpired: 'Sesi Anda berakhir. Masuk lagi.',
    forbidden:
      'Sesi peramban ini tidak dapat mengubah apa pun. Masuk lagi dengan memindai kode QR memakai aplikasi KidGate.',
    notFound: 'Itu sudah tidak ada — mungkin diubah dari ponsel.',
    conflict: 'Orang lain baru saja mengubah ini. Muat ulang untuk melihat hasilnya.',
    rateLimited: 'Terlalu banyak perubahan sekaligus. Tunggu sebentar lalu coba lagi.',
    server: 'KidGate tidak dapat menyelesaikannya. Coba lagi sebentar.',
    premiumRequired:
      'Ini fitur Premium. Paket dikelola di aplikasi KidGate di ponsel Anda.',
  },

  report: {
    title: 'Laporan mingguan',
    subtitle: 'Yang diperhatikan KidGate sepanjang minggu ini.',
    weekOf: 'Minggu {{week}}',
    range: '{{from}} – {{to}}',
    writtenAt: 'Ditulis {{when}}',
    triggerScheduled: 'Dikirim Senin',
    triggerManual: 'Dibuat oleh Anda',
    statScreenTime: 'Waktu layar',
    statDailyAverage: 'Rata-rata harian',
    statBlockedApps: 'Aplikasi diblokir',
    statBlockedWebVisits: 'Situs disaring',
    statTasksApproved: 'Tugas selesai',
    trendUp: '{{value}} lebih banyak dari minggu sebelumnya',
    trendDown: '{{value}} lebih sedikit dari minggu sebelumnya',
    trendFlat: 'Kurang lebih sama dengan minggu sebelumnya',
    trendFirstWeek: 'Minggu pertama yang terukur',
    barThisWeek: 'Minggu ini',
    barLastWeek: 'Minggu lalu',
    highlights: 'Perlu diketahui',
    sevAttention: 'Perlu dilihat',
    sevNotable: 'Perlu dicatat',
    sevInfo: 'Sekadar informasi',
    findingUsageUp:
      'Waktu layar naik {{percent}}% — {{delta}} lebih banyak dari minggu lalu.',
    findingUsageDown:
      'Waktu layar turun {{percent}}% — {{delta}} lebih sedikit dari minggu lalu.',
    findingUsageFlat: 'Waktu layar tetap di {{total}}.',
    findingLateNight:
      '{{count}} malam setelah pukul 23.00 — paling larut sampai {{time}}.',
    findingNewTopApp: '{{app}} baru minggu ini dan sudah mencapai {{duration}}.',
    findingAppSurge: '{{app}} naik {{delta}} dari minggu lalu — total {{duration}}.',
    findingLimitHit: 'Batas harian {{limit}} tercapai pada {{count}} hari.',
    findingBlockedApps:
      '{{count}} pembukaan aplikasi diblokir, dibanding {{previous}} minggu lalu.',
    findingBlockedWeb: '{{count}} situs disaring, dibanding {{previous}} minggu lalu.',
    findingQuietWeek:
      'Minggu yang tenang — total {{total}}, dan tidak ada yang membutuhkan perhatian Anda.',
    narrativeTitle: 'Dalam satu kalimat',
    finePrint:
      'Angka mencakup {{from}} sampai {{to}}, di seluruh perangkat keluarga. Waktu layar adalah yang dilaporkan perangkat; menit yang tidak terukur tidak masuk ke total mana pun.',
    generate: 'Tulis laporan minggu ini',
    generating: 'Menulis…',
    shareImage: 'Simpan sebagai gambar',
    sharePdf: 'Simpan sebagai PDF',
    copySummary: 'Salin ringkasan',
    copied: 'Ringkasan disalin.',
    imageSaved: 'Gambar disimpan.',
    shareFailed: 'Peramban ini tidak bisa menyimpannya. Salin ringkasannya saja.',
    emptyTitle: 'Belum ada laporan',
    emptyBody:
      'Laporan datang setiap Senin pagi. Laporan minggu ini bisa ditulis sekarang — mencakup tujuh hari terakhir.',
    noUsage:
      'Tidak ada waktu layar tercatat dalam dua minggu terakhir, jadi belum ada yang bisa dilaporkan. Perangkat yang offline tidak melaporkan apa pun, dan itu berbeda dengan minggu yang tenang.',
    rateLimited: 'Terlalu banyak percobaan. Tunggu sebentar.',
    loadFailedTitle: 'Laporan gagal dimuat',
    loadFailed: 'Laporan tidak dapat dibuka. Muat ulang halaman untuk mencoba lagi.',
    retryLoad: 'Coba lagi',
    failed: 'Laporan tidak dapat ditulis. Coba lagi sebentar.',
    existed: 'Minggu ini sudah punya laporan — ini dia.',
    childrenTitle: 'Setiap anak',
    childrenNote:
      'Dua minggu yang sama, per perangkat. Persentase dihitung dari total keluarga.',
    colChild: 'Anak',
    colScreenTime: 'Waktu layar',
    colShare: 'Porsi',
    colChange: 'Dibanding minggu lalu',
    colLimit: 'Melewati batas',
    colLateNights: 'Malam larut',
    colTopApp: 'Paling banyak dipakai',
    unnamedChild: 'Perangkat tanpa nama',
    changeUp: '+{{value}}',
    changeDown: '−{{value}}',
    changeFlat: 'kurang lebih sama',
    noLimit: 'Tanpa batas',
    noTopApp: '—',
    limitDays: '{{count}} hari',
    lateNightsNone: 'tidak ada',
    busiest: 'Waktu layar terbanyak',

    historyTitle: 'Minggu sebelumnya',
    historyEmpty:
      'Laporan yang Anda terima mulai sekarang disimpan di sini selama satu tahun.',
  },

  support: {
    title: 'Dukungan KidGate',
    updated: 'Kami siap membantu',

    contactTitle: 'Hubungi kami',
    contactEmail: '**Email:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Waktu tanggapan:** dalam 24 jam (Senin–Jumat)',
    contactNote:
      'Saat menghubungi kami, sertakan alamat email akun orang tua KidGate Anda dan penjelasan singkat masalahnya agar kami bisa membantu lebih cepat.',

    startTitle: 'Memulai',
    start1:
      '**1. Siapkan perangkat orang tua.** Pasang KidGate, buka aplikasinya, dan pilih *Ini perangkat orang tua*. Masuk dengan Google, Apple, atau email, lalu beri nama keluarga Anda.',
    start2:
      '**2. Tetapkan PIN orang tua.** Buka *Pengaturan → Keamanan* dan tetapkan PIN orang tua 6 digit. Anda memerlukannya untuk mengubah pengaturan sensitif dan memilih aplikasi yang diblokir di perangkat anak. Jangan bagikan kepada anak Anda.',
    start3:
      '**3. Sambungkan perangkat anak.** Pasang KidGate di perangkat anak Anda dan pilih *Ini perangkat anak*. Di perangkat orang tua, buka *Keluarga → + → Sambungkan perangkat anak*, lalu pindai kode QR yang tampil di perangkat anak (atau masukkan kode 6 karakter). Konfirmasi sambungan di perangkat anak.',
    start4:
      '**4. Berikan izin di perangkat anak.** Buka layar *Status* di perangkat anak dan izinkan semua izin yang diminta KidGate — di Android: notifikasi, Akses Penggunaan, Tampil di atas aplikasi lain, Aksesibilitas, dan baterai tanpa batasan; di iOS: *Izinkan Penggunaan Aplikasi & Situs Web* (Waktu Layar). Kendali tidak akan berfungsi penuh sampai semuanya aktif.',
    start5:
      '**5. Atur kendali.** Dari perangkat orang tua, buka kartu perangkat anak dan tetapkan Batas Harian, Jam Diblokir, Aplikasi Diblokir, Penyaring Web, dan fitur lokasi.',
    startNote:
      'Aplikasi juga menyertakan panduan langkah demi langkah: *Pengaturan → Panduan pengguna*, yang membahas penyambungan perangkat, izin, kendali harian, dan fitur keamanan secara rinci.',

    faqTitle: 'Pertanyaan yang sering diajukan',

    faq1Q: 'Bisakah saya mengelola keluarga saya dari komputer?',
    faq1A:
      'Bisa. Buka [dasbor web](/dashboard) dan masuk dengan akun yang sama seperti di aplikasi — Google, Apple, atau email dan kata sandi Anda. Dasbor menampilkan keluarga, perangkat, laporan, dan pengaturan yang sama. Pembuatan akun dan penyambungan perangkat tetap dilakukan di aplikasi ponsel.',

    faq2Q: 'Bagaimana cara menyambungkan perangkat orang tua dan anak?',
    faq2A:
      'Di perangkat anak, buka KidGate dan pilih *Ini perangkat anak* — kode QR dan kode 6 karakter akan muncul. Di perangkat orang tua, buka *Keluarga → + → Sambungkan perangkat anak* lalu pindai kode QR (disarankan) atau masukkan kodenya secara manual. Setelah itu konfirmasi nama orang tua di perangkat anak. Kode punya masa berlaku — jika penyambungan gagal, ketuk *Kode baru* di perangkat anak dan coba lagi.',

    faq3Q: 'Bisakah dua orang tua mengelola keluarga yang sama?',
    faq3A:
      'Bisa. Di perangkat pemilik keluarga, buka *Keluarga → + → Tambah perangkat orang tua lain* dan bagikan kode QR atau kode undangan. Orang tua kedua memasang KidGate, masuk sebagai orang tua, lalu memilih *Keluarga → + → Gabung keluarga*. Pemilik kemudian menyetujui permintaannya. Satu langganan mencakup seluruh keluarga; hanya pemilik yang membayar.',

    faq4Q: 'Bagaimana cara kerja uji coba gratis?',
    faq4A:
      'Uji coba dimulai saat perangkat orang tua dan anak pertama Anda terhubung, dan memberi akses penuh ke semua fitur. Menghapus perangkat anak tidak mengatur ulang uji coba. Setelah berakhir, semua aturan tetap berjalan gratis di satu perangkat anak; Premium mempertahankan aktivitas langsung, riwayat, laporan mingguan, dan semua perangkat.',

    faq5Q: 'Bagaimana cara membatalkan langganan saya?',
    faq5A:
      'Langganan ditagih melalui App Store atau Google Play, bukan langsung oleh KidGate. Di iOS: *Pengaturan → nama Anda → Langganan*. Di Android: *Google Play → ikon profil → Pembayaran & langganan → Langganan*. Langganan diperpanjang otomatis kecuali Anda membatalkannya paling lambat 24 jam sebelum periode berjalan berakhir.',

    faq6Q: 'Bagaimana cara memulihkan pembelian saya?',
    faq6A:
      'Di perangkat orang tua, buka layar *Paket* dan ketuk *Pulihkan pembelian*. Pastikan Anda masuk dengan akun toko aplikasi yang sama seperti saat pembelian pertama. Perlu diingat hanya pemilik keluarga yang bisa berlangganan atau memulihkan pembelian.',

    faq7Q: 'Kenapa data waktu layar tidak muncul?',
    faq7A:
      'Data penggunaan berasal dari perangkat anak. Pastikan perangkat anak daring, lalu buka KidGate di perangkat itu dan lihat layar *Status* — setiap baris izin seharusnya tampil sebagai diizinkan (di Android, Akses Penggunaan diperlukan untuk melacak waktu layar). Laporan bisa butuh beberapa menit untuk tersinkron.',

    faq8Q: 'Kenapa penguncian atau Jam Diblokir tidak bekerja?',
    faq8A:
      'Di Android, penguncian memerlukan *Tampil di atas aplikasi lain* dan pembantu *Aksesibilitas* yang aktif, serta baterai tanpa batasan. Di Xiaomi, Samsung, Oppo, Vivo, dan perangkat serupa, izinkan juga mulai otomatis dan keluarkan KidGate dari daftar "aplikasi tidur" mana pun (lihat *Status → Jaga KidGate tetap berjalan* di perangkat anak). Di iOS, penguncian bergantung pada otorisasi Waktu Layar. Jika sebuah izin dimatikan kemudian, Anda akan menerima Peringatan Perlindungan di perangkat orang tua.',

    faq9Q: 'Bagaimana cara memblokir aplikasi tertentu?',
    faq9A:
      'Pemilihan aplikasi dilakukan di perangkat anak: buka *KidGate → Pengaturan*, masukkan PIN orang tua, pilih *Pilih aplikasi untuk diblokir*, lalu simpan. Setelah itu, di perangkat orang tua, buka layar *Aplikasi Diblokir* milik perangkat itu dan aktifkan *Aktifkan Blokir Aplikasi*. Di iOS, Apple mungkin menyembunyikan nama aplikasi yang persis dari perangkat orang tua — itu batasan platform.',

    faq10Q: 'Kenapa lokasi anak saya tidak diperbarui?',
    faq10A:
      'Lokasi harus diizinkan untuk KidGate di perangkat anak, dan perangkat butuh koneksi jaringan. Buka layar *Lokasi* perangkat itu dari ponsel orang tua lalu tarik ke bawah untuk menyegarkan. Mode hemat baterai bisa menunda pembaruan, dan GPS di dalam ruangan bisa kurang akurat.',

    faq11Q: 'Bagaimana cara menghapus KidGate dari perangkat anak saya?',
    faq11A:
      'Hapus dulu perangkatnya dari aplikasi orang tua (buka perangkat di *Keluarga* lalu pilih hapus), setelah itu copot aplikasinya di perangkat anak.',

    faq12Q: 'Bagaimana cara menghapus akun dan data saya?',
    faq12A:
      'Di aplikasi orang tua, buka *Pengaturan → Akun → Hapus akun*. Ini menghapus permanen akun keluarga Anda dan semua data — perangkat, aktivitas, riwayat lokasi, dan foto SOS — untuk semua orang tua dan anak. Lihat halaman [Penghapusan Akun & Data](/delete-account) kami untuk semua pilihan, termasuk penghapusan tanpa memasang aplikasi.',

    legalTitle: 'Legal',
    legalDeletion: 'Penghapusan Akun & Data',
  },

  download: {
    eyebrow: 'Unduh',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 atau lebih baru. Apple silicon dan Intel.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 atau lebih baru, 64-bit.',
    button: 'Unduh',
    warningSub:
      'Kedua sistem menampilkan peringatan ini untuk aplikasi apa pun yang dipasang di luar toko mereka oleh pengembang yang belum masuk daftar terverifikasi — bukan karena menemukan sesuatu di KidGate. Tiap kartu di atas menjelaskan cara mengizinkan peluncuran pertama. Unduh hanya dari kidgate.app.',
    macosSteps:
      'Buka aplikasi sekali dan biarkan ditolak. Lalu buka System Settings, Privacy & Security, gulir ke bawah dan pilih Open Anyway.',
    windowsSteps:
      'Saat Windows berkata telah melindungi PC Anda, pilih More info, lalu Run anyway.',
  },
  about: {
    eyebrow: 'Tentang kami',
    title: 'Kontrol orang tua yang benar-benar bisa',
    titleAccent: 'disepakati satu keluarga.',
    lede: 'KidGate dibuat tim kecil dan independen yang mengerjakan satu produk saja. Sikap kami sederhana: orang tua harus bisa memercayai apa yang dikatakan aplikasi ini — termasuk bagian ketika aplikasi mengaku tidak bisa membantu.',
    storyEyebrow: 'Kenapa KidGate ada',
    storyTitle: 'Waktu layar menjadi pertengkaran di setiap rumah',
    storyP1:
      'Hampir semua keluarga mengalami malam yang sama: penghitung waktu yang tak pernah disepakati, ponsel yang diambil, dan anak yang yakin aturannya berubah diam-diam. Alat yang seharusnya membereskan itu justru sering memperburuknya — di satu sisi kunci tanpa penjelasan, di sisi lain dasbor yang terbaca seperti pengawasan.',
    storyP2:
      'Jadi kami membuat versi yang kami inginkan di rumah sendiri. Orang tua mengatur batas harian, Jam diblokir, Blokir aplikasi, dan Penyaringan web sekali, lalu perangkat mematuhinya. Anak melihat angka yang sama dengan orang tuanya, bisa meminta tambahan waktu, dan selalu bisa menghubungi orang tua lewat SOS. KidGate tidak berpura-pura tidak ada.',
    storyP3:
      'Ia berjalan di iPhone, Android, Mac, dan Windows, dengan dasbor yang dibuka di peramban mana pun. Satu keluarga, satu paket, semua perangkat.',
    valuesEyebrow: 'Yang kami percayai',
    valuesTitle: 'Empat aturan yang tidak kami langgar',
    valuesSub:
      'Pertanyaan yang paling sering masuk, dijawab sebelum Anda perlu bertanya.',
    value1Title: 'Anak bukan tersangka',
    value1Text:
      'Aturannya terlihat di perangkat tempat aturan itu berlaku. Anak melihat apa yang aktif dan berapa waktu yang tersisa, bisa meminta tambahan, dan bisa menekan SOS kapan saja. Kendali yang harus dirahasiakan bukan kendali yang bisa dibicarakan satu keluarga.',
    value2Title: 'Data keluarga Anda tidak dijual',
    value2Text:
      'Tanpa iklan, selamanya. Tidak ada apa pun tentang anak yang dipakai untuk iklan atau dijual ke pihak lain. Anda bisa menghapus akun keluarga beserta seluruh isinya kapan saja — dari dalam aplikasi atau dari situs ini.',
    value3Title: 'Kami mengaku apa yang tidak bisa kami lakukan',
    value3Text:
      'Setiap platform membatasi apa yang boleh dipaksakan sebuah aplikasi. Di tempat KidGate hanya bisa berupaya semampunya — menutup aplikasi terblokir di komputer alih-alih mencegahnya terbuka — layarnya mengatakan begitu, bukan menampilkan centang hijau.',
    value4Title: 'Satu keluarga, satu paket',
    value4Text:
      'Satu langganan mencakup semua orang tua dan semua perangkat anak. Batas harian, Jam diblokir, dan lokasi tetap berjalan gratis, jadi fitur keselamatan tidak pernah berada di balik paywall.',
    makeEyebrow: 'Yang kami buat',
    makeTitle: 'Satu KidGate, di mana pun layarnya',
    makeSub:
      'Aturan yang sama, ditulis sekali, dijalankan sejauh yang diizinkan tiap platform.',
    make1Title: 'iPhone dan iPad',
    make1Text:
      'Batas harian, Jam diblokir, dan pemblokiran aplikasi lewat framework Screen Time milik Apple.',
    make2Title: 'Android',
    make2Text:
      'Batas waktu, blokir aplikasi, kunci layar penuh, dan Penyaringan web, plus peringatan saat aplikasi baru muncul.',
    make3Title: 'macOS',
    make3Text:
      'Agen desktop di Mac: jadwal yang sama dan batas yang sama, serta satu hari pemakaian yang benar-benar terbaca.',
    make4Title: 'Windows',
    make4Text:
      'Agen yang sama di PC, dengan layanan latar belakang yang menyalakannya lagi kalau ditutup atau dihentikan.',
    make5Soon: 'Direncanakan',
    make5Title: 'Android TV',
    make5Text:
      'Layar ruang keluarga, diperlakukan sebagai perangkat bersama keluarga dan bukan milik satu anak — dengan batas dan jadwal yang sama seperti di ponsel.',
    make6Title: 'Dasbor orang tua',
    make6Text:
      'Peramban adalah layar kedua orang tua. Masuk dari komputer mana pun dengan kode dari ponsel Anda; tidak ada yang perlu dipasang.',
    factsEyebrow: 'KidGate hari ini',
    factsTitle: 'Empat angka',
    fact1Label: 'bahasa, dari Arab sampai Vietnam',
    fact2Label: 'platform, plus dasbor',
    fact3Label: 'iklan, selamanya',
    fact4Label: 'langganan per keluarga',
    contactEyebrow: 'Bicara dengan kami',
    contactTitle: 'Setiap pesan dibaca orang sungguhan',
    contactSub:
      'Pertanyaan, bug, fitur yang keluarga Anda butuhkan, atau terjemahan yang terasa salah dalam bahasa Anda — tulis ke kami.',
    contactEmail: 'Kirim email',
    contactSupport: 'Dukungan dan panduan',
    contactPrivacy: 'Cara kami menangani data',
  },
};
