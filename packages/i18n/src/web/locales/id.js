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
    crashTitle: 'Halaman ini berhenti bekerja',
    crashBody:
      'Biasanya cukup dimuat ulang. Pengaturan keluarga Anda dan perangkat anak Anda tidak berubah.',
    crashReload: 'Muat ulang halaman',
  },

  language: {
    title: 'Bahasa',
    change: 'Ganti bahasa',
    system: 'Bahasa browser',
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
    plans: 'Paket',
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
    madeFor:
      'Dibuat untuk keluarga di iPhone, Android, Mac, Windows, Android TV, dan Chrome.',
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
    chromeName: 'Chrome Web Store',
  },

  home: {
    heroBadge: 'Kontrol orang tua, sebagaimana mestinya',
    launchCountdown: 'Rilis dalam',
    heroTitle: 'Lindungi anak Anda',
    heroTitleAccent: 'tanpa merampas kebebasannya.',
    heroLede:
      'KidGate memberi orang tua kendali yang tenang dan jelas atas waktu layar, aplikasi, dan keamanan — sementara anak tetap memegang ponsel yang terasa miliknya.',
    heroCheck1: 'Waktu Layar',
    heroCheck2: 'Aplikasi yang Diblokir',
    heroCheck3: 'Filter web',
    heroCheck4: 'Lokasi',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Batas harian',
    phoneBlockedHours: 'Jam Diblokir',
    phoneScheduleOn: 'Jadwal aktif',
    phoneLocation: 'Lokasi',
    phoneCheckIn: 'Check-In OK',

    trust1Title: 'Tanpa iklan, selamanya',
    trust1Text: 'Data anak tidak pernah dipakai untuk iklan',
    trust2Title: 'Hapus kapan saja',
    trust2Text: 'Hapus akun keluarga dan semua data atas permintaan Anda',
    trust3Title: 'Ponsel, komputer, dan TV',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV, dan Chrome dalam satu akun keluarga',
    trust4Title: 'Satu paket per keluarga',
    trust4Text: 'Semua perangkat orang tua dan anak, satu langganan',

    featuresEyebrow: 'Fitur',
    featuresTitle: 'Semua yang dibutuhkan orang tua',
    featuresSub:
      'Dari batas harian sampai peringatan darurat — satu aplikasi untuk kesejahteraan digital seluruh keluarga.',
    feature1Title: 'Waktu Layar & Batas harian',
    feature1Text:
      'Tetapkan batas harian dan Jam Diblokir untuk sekolah dan waktu tidur. Perangkat mengunci sendiri saat waktu habis.',
    feature2Title: 'Aplikasi yang Diblokir',
    feature2Text:
      'Pilih aplikasi apa saja yang tidak boleh dibuka anak Anda, dilindungi PIN Orang Tua, dan nyalakan pemblokiran dari jauh.',
    feature3Title: 'Batas Aplikasi',
    feature3Text:
      'Di Android, Android TV, dan komputer, batasi tiap aplikasi sendiri-sendiri — “setengah jam TikTok” tanpa harus melarangnya sama sekali.',
    feature4Title: 'Filter web & riwayat',
    feature4Text:
      'Blokir situs dewasa, judi, melukai diri, dan lainnya di semua perangkat; dengan Premium, lihat juga situs mana yang dicoba dibuka.',
    feature5Title: 'Lokasi & tempat',
    feature5Text:
      'Lihat di mana anak Anda berada hingga 10 kali sehari; Premium menambahkan lokasi secara langsung dan pemberitahuan untuk tempat tersimpan.',
    feature6Title: 'Check-In & SOS',
    feature6Text:
      'Minta anak Anda memastikan dirinya aman; saat darurat, ponselnya langsung mengirim SOS kepada Anda, lengkap dengan lokasi.',
    feature7Title: 'Peringatan perlindungan & peringatan aplikasi',
    feature7Text:
      'Ketahui saat sebuah izin penting dimatikan di ponsel anak Anda, dan setujui aplikasi baru sebelum bisa dibuka di Android, Android TV, atau komputer.',
    feature8Title: 'Tugas hadiah & Permintaan waktu',
    feature8Text:
      'Anak mendapat menit tambahan dan bintang dengan menyelesaikan tugas, atau meminta waktu lebih — Anda menyetujui keduanya dari ponsel Anda.',

    feature9Title: 'Kunci perangkat',
    feature9Text:
      'Kunci perangkat sekarang dan buka lagi saat Anda siap — makan malam, PR, atau aturan yang diabaikan.',
    feature10Title: 'Laporan mingguan',
    feature10Text:
      'Setiap Senin: waktu layar, rata-rata harian, apa saja yang diblokir, dan perbandingan dengan minggu sebelumnya.',
    feature11Title: 'Riwayat YouTube & video',
    feature11Text:
      'Video dan Shorts YouTube yang ditonton anak Anda di Android dan di Chrome, serta video di Android TV. Tidak tersedia di iPhone.',
    feature12Title: 'Feed Aktivitas',
    feature12Text:
      'Semua yang terjadi, berurutan — perangkat dibuka, permintaan dijawab, peringatan dikirim; paket gratis menampilkan hari ini, Premium menyimpan 30 hari.',
    featurePremium: 'Premium',
    platformsTitle: 'Satu KidGate, di mana pun layarnya',
    platformsSub:
      'Aturan yang sama dan akun keluarga yang sama di ponsel, komputer, dan Android TV — serta Filter web yang sama di Chrome. Aplikasi desktop didapat dari situs ini, bukan dari toko aplikasi.',

    showcaseEyebrow: 'Dasbor orang tua',
    showcaseTitle: 'Seluruh keluarga dalam satu layar',
    showcaseSub:
      'Waktu layar, upaya yang diblokir, lokasi, dan apa pun yang butuh perhatian Anda — di ponsel Anda atau di browser mana pun.',
    showcaseCaption1: 'Baca laporan dari browser mana pun',
    showcaseCaption2: 'Perubahan disetujui dari ponsel Anda',

    setupEyebrow: 'Penyiapan',
    setupTitle: 'Siap dalam hitungan menit',
    setupSub: 'Tanpa kemampuan teknis — aplikasi memandu Anda di setiap langkah.',
    step1Title: 'Siapkan perangkat Anda',
    step1Text:
      'Pasang KidGate, pilih “Ini perangkat orang tua”, lalu masuk dengan Google atau email — atau Apple, di iPhone.',
    step2Title: 'Sambungkan perangkat anak Anda',
    step2Text:
      'Pasang KidGate di ponsel anak Anda dan sambungkan dengan memindai kode QR. Kurang dari satu menit.',
    step3Title: 'Tetapkan aturan Anda',
    step3Text:
      'Pilih Batas harian dan Jam Diblokir, lalu nyalakan lokasi dan Aplikasi yang Diblokir dari ponsel Anda sendiri. Aplikasi yang akan diblokir dipilih sekali di perangkat anak Anda, dengan PIN Orang Tua Anda.',

    whyEyebrow: 'Mengapa KidGate',
    whyTitle: 'Dibangun untuk kepercayaan, bukan pengawasan',
    whySub: 'Dirancang agar percakapan orang tua dan anak tetap terbuka.',
    why1Title: 'Satu paket, satu keluarga',
    why1Text:
      'Satu langganan Premium mencakup semua perangkat orang tua dan anak, dan hanya pemilik keluarga yang membayar. Paket gratis tetap memantau satu perangkat anak.',
    why2Title: 'Dibuat untuk pengasuhan bersama',
    why2Text:
      'Undang orang tua kedua untuk mengelola anak yang sama, dengan akses yang disetujui pemilik. Satu keluarga dapat memiliki hingga 3 orang tua di paket gratis dan selama uji coba, serta hingga 6 dengan Premium.',
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
      'Android TV mendapat Batas harian, Jam Diblokir, Aplikasi yang Diblokir, dan Filter web. Di TV, pemblokiran hanya berupaya semampunya — aplikasi yang diblokir dikembalikan ke layar utama — dan tidak ada SOS atau permintaan waktu tambahan dari sofa. TV juga tidak membagikan lokasi. Kebanyakan kontrol orang tua berhenti di ponsel.',
    only2Title: 'Peringatan pesan yang tetap di ponsel',
    only2Text:
      'Dengan Premium di Android, pesan dicocokkan di perangkat itu sendiri dengan daftar kata kunci dalam hingga tiga bahasa pilihan Anda dari 14 bahasa, dan yang keluar dari ponsel hanyalah kata atau frasa yang cocok, tidak pernah isi percakapannya. Satu hal saja yang mengubahnya, dan hanya jika Anda memintanya: aktifkan konfirmasi AI, maka pesan masuk yang ambigu dikirim ke Gemini milik Google untuk dinilai, sehingga Anda tidak terbangun karena sebuah kata biasa.',
    only3Title: 'Semua aplikasi, bukan daftar aplikasi',
    only3Text:
      'Peringatan datang dari notifikasi aplikasi apa pun yang dipakai anak Anda — bukan dari daftar tetap aplikasi yang didukung — dan dari ketikan di aplikasi obrolan, media sosial, dan game utama, termasuk Zalo, LINE, dan KakaoTalk. Hanya di Android, dengan Premium.',
    only4Title: 'Jalan keluar bagi anak',
    only4Text:
      'Menahan SOS lima detik di ponsel langsung memberi tahu Anda, lengkap dengan lokasi — dan di Android, panggilan, peta, dan pesan juga bisa dibuka selama lima menit, bahkan di ponsel yang terkunci. Anak yang bisa minta tolong dari layar kunci tidak punya alasan melawan aplikasi.',
    only5Title: 'Aturan yang tetap berlaku tanpa internet',
    only5Text:
      'Jam Diblokir dan Batas harian dijalankan di perangkat itu sendiri, jadi mencabut router tidak mengubah apa pun. TV bahkan menerima PIN Orang Tua Anda tanpa koneksi sama sekali.',
    only6Title: 'Pengakuan saat minggunya memang layak',
    only6Text:
      'Dengan Premium, setiap laporan mingguan menyisakan ruang untuk yang berjalan baik — batas yang dipatuhi, tidak ada lagi begadang, tugas yang selesai — dan baru mengatakannya bila minggu itu benar-benar terukur.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Pertanyaan pertama orang tua',
    faqSub: 'Jawaban singkat sebelum Anda mengunduh.',
    faq1Q: 'Apakah ada uji coba gratis?',
    faq1A:
      'Ya. Uji coba 7 hari dimulai saat perangkat orang tua dan perangkat anak Anda pertama kali terhubung, dan mencakup semua fitur Premium. Setelah berakhir, aturan yang Anda buat — Batas harian, Jam Diblokir, Aplikasi yang Diblokir, Filter web, Kunci perangkat, Permintaan waktu, dan Tugas hadiah — tetap berjalan gratis di setiap perangkat anak yang mendukungnya, dan satu perangkat yang Anda pilih untuk tetap dipantau masih membagikan lokasinya. Aktivitas langsung, riwayat, laporan mingguan, dan pelacakan lokasi adalah yang dikembalikan oleh Premium.',
    faq2Q: 'Berapa perangkat yang bisa saya kelola?',
    faq2A:
      'Premium mencakup hingga 25 perangkat anak dan 6 orang tua, termasuk Anda, dan setiap perangkat mengirim aktivitas. Paket gratis mencakup hingga 8 perangkat anak dan 3 orang tua. Setiap perangkat tetap menerapkan aturan yang Anda atur, tetapi hanya perangkat yang Anda pilih yang mengirim aktivitas; di perangkat lainnya, aturan itu bisa dilonggarkan tetapi tidak bisa diperketat.',
    faq3Q: 'Bisakah anak saya menghapus atau mengakali KidGate?',
    faq3A:
      'Pengaturan sensitif berada di balik PIN Orang Tua, dan Peringatan perlindungan langsung memberi tahu Anda jika izin penting dimatikan di perangkat anak.',
    faq4Q: 'Bisakah saya mengelola semuanya dari komputer?',
    faq4A:
      'Bisa. Dasbor orang tua terbuka di browser mana pun. Pindai kode yang ditampilkannya dengan aplikasi KidGate di ponsel Anda, dan Anda melihat keluarga, perangkat, serta pengaturan yang sama, dengan kendali yang sudah terbuka. Anda juga bisa masuk dengan akun Anda untuk membaca; mengunci perangkat atau mengubah sebuah batas lalu akan meminta PIN Orang Tua Anda.',
    faq5Q: 'Berapa harga Premium?',
    faq5A:
      'Premium berharga US$4,99 per bulan atau US$39,99 per tahun di AS, ditagih melalui App Store atau Google Play dan ditampilkan di sana dalam mata uang Anda. Paket Seumur hidup yang dibayar sekali memberikan Premium yang sama di setiap perangkat anak, selama KidGate tersedia. Paket gratis tidak pernah berakhir.',
    faqMore: 'Masih ada pertanyaan? Kunjungi Dukungan',

    ctaTitle: 'Mulai lindungi keluarga Anda hari ini',
    ctaSub: 'Uji coba gratis 7 hari dengan akses penuh. Tidak perlu kartu.',
    ctaNote: 'Setelah berakhir, aturan Anda tetap berjalan di paket gratis.',
  },

  login: {
    title: 'Masuk sebagai orang tua',
    sub: 'Gunakan akun yang sama seperti yang Anda buat di aplikasi KidGate. Masuk di sini menampilkan keluarga, perangkat, dan pengaturan yang sama.',
    notConfiguredTitle: 'Firebase belum dikonfigurasi pada penerapan ini.',
    notConfiguredBody:
      'Setel variabel lingkungan VITE_FIREBASE_* untuk mengaktifkan proses masuk.',
    qrWhy:
      'Memindai dengan ponsel sekaligus masuk dan membuka kunci kontrol dalam satu langkah. Cara di bawah membuat Anda masuk untuk melihat; membuka kunci kontrol lalu memerlukan PIN Orang Tua.',
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
    step2: 'Ketuk ikon pindai di tab *Keluarga*.',
    step3: 'Pindai kode ini, lalu setujui.',
    waiting: 'Menunggu persetujuan · kedaluwarsa dalam {{time}}',
    signingIn: 'Disetujui. Sedang masuk…',
    expired: 'Kode ini sudah kedaluwarsa.',
    failed: 'Proses masuk tidak selesai.',
    newCode: 'Tampilkan kode baru',
    tryAgain: 'Coba lagi',
  },

  authAction: {
    checking: 'Memeriksa tautan…',
    resetTitle: 'Buat kata sandi baru',
    newPassword: 'Kata sandi baru',
    confirmPassword: 'Konfirmasi kata sandi baru',
    mismatch: 'Kata sandi tidak cocok.',
    tooShort: 'Kata sandi harus terdiri dari minimal 6 karakter.',
    save: 'Simpan kata sandi',
    saving: 'Menyimpan…',
    resetDone: 'Kata sandi diubah',
    resetDoneBody:
      'Masuk dengan kata sandi baru Anda, di sini atau di aplikasi KidGate.',
    verifyDone: 'Email dikonfirmasi',
    verifyDoneBody: 'Kembali ke aplikasi KidGate untuk melanjutkan.',
    invalid: 'Tautan ini sudah kedaluwarsa atau sudah dipakai',
    invalidBody: 'Buka KidGate dan minta tautan baru.',
  },
  authError: {
    generic: 'Terjadi masalah. Coba lagi.',
    invalidEmail: 'Alamat email itu sepertinya tidak benar.',
    userDisabled: 'Akun ini telah dinonaktifkan.',
    userNotFound: 'Tidak ada akun KidGate yang memakai email itu.',
    wrongPassword: 'Email atau kata sandi tidak cocok. Silakan coba lagi.',
    rateLimited:
      'Terlalu banyak kode masuk dari jaringan ini. Coba lagi dalam {{minutes}} menit.',
    tooManyRequests: 'Terlalu banyak percobaan. Tunggu beberapa menit lalu coba lagi.',
    popupClosed: 'Jendela masuk ditutup sebelum selesai.',
    popupCancelled: 'Proses masuk dibatalkan.',
    popupBlocked:
      'Browser Anda memblokir jendela masuk. Izinkan pop-up untuk situs ini lalu coba lagi.',
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
    partialLoadFailed:
      'Sebagian halaman ini tidak termuat, jadi daftar bisa tampak kosong padahal tidak.',
    noAccessTitle: 'Tidak ada keluarga di akun ini',
    noAccess:
      'Akun ini tidak punya akses ke keluarga KidGate mana pun. Masuk dengan akun orang tua yang Anda pakai di aplikasi.',
    noFamily:
      'Akun ini belum punya keluarga KidGate. Jika Anda memakai KidGate di ponsel, keluar lalu masuk di sini dengan akun yang sama. Untuk membuat keluarga, siapkan di ponsel Anda, lalu muat ulang halaman ini.',
    noFamilyStep1:
      'Instal KidGate di ponsel Anda, pilih *Ini perangkat orang tua*, lalu masuk dengan akun ini.',
    noFamilyStep2:
      'Buka *Keluarga* dan pilih *Buat keluarga*, atau *Bergabung dengan keluarga* jika orang tua lain mengundang Anda.',
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
    byDay: 'Waktu Layar per hari',
    limit: 'Batas {{value}}',
    screenTime: 'Waktu Layar',
    bonus: 'Bonus',
    bonusEarned: 'Bonus diperoleh',
    overLimit: 'Melebihi Batas harian',
    dailyLimit: 'Batas harian',
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
  },

  webCat: {
    adult: 'Konten dewasa',
    selfHarm: 'Melukai diri & gangguan makan',
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

  appCat: {
    adult: 'Konten dewasa',
    gambling: 'Judi',
    gameGambling: 'Loot box & taruhan skin',
    dating: 'Kencan',
    drugs: 'Narkoba & alkohol',
    violence: 'Kekerasan & sadis',
    piracy: 'Pembajakan',
    bypass: 'Aplikasi pengelak kontrol',
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
    tabApps: 'Aplikasi',
    tabWeb: 'Web',
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

    lastActive: 'Terakhir aktif {{when}}',
    appVersion: 'Versi aplikasi',
    appVersionUpdate: '{{running}} · {{latest}} tersedia',
    appVersionRestart: '{{running}} · buka ulang aplikasi untuk menyelesaikan',
    checkIn: 'Check-In',
    sending: 'Mengirim…',
    lockDevice: 'Kunci perangkat',
    unlock: 'Buka kunci',
    working: 'Memproses…',
    save: 'Simpan',

    unlockTitle: 'Perubahan sedang terkunci.',
    unlockBody: 'Anda tetap bisa melihat semuanya dan mengirim Check-In.',
    unlockCta: 'Buka kunci perubahan',
    unlockToChange: 'Buka kunci perubahan dulu',
    refresh: 'Muat ulang',
    liveOnApp: 'Buka aplikasi untuk pembaruan langsung',
    pinTitle: 'Masukkan PIN Orang Tua',
    pinBody:
      'Enam angka yang sama seperti di aplikasi. Browser ini tetap tidak terkunci selama 8 jam; menyetujui dari aplikasi membuatnya tetap masuk selama 7 hari.',
    pinLabel: 'PIN Orang Tua',
    pinSubmit: 'Buka kunci',
    pinOrScan: 'Atau setujui dari ponsel',
    qrSaferNote:
      'Menyetujui dari ponsel lebih aman: cara itu butuh ponsel terhubung di tangan, sedangkan PIN hanya enam angka yang mungkin sudah dilihat anggota keluarga saat Anda mengetiknya.',
    pinWrong: 'PIN salah. Sisa percobaan: {{count}}.',
    pinLocked:
      'Terlalu banyak percobaan salah. Tunggu 15 menit, atau setujui browser ini dari ponsel.',
    pinNotSet:
      'Keluarga Anda belum punya PIN Orang Tua. Buat di aplikasi, atau setujui browser ini dari ponsel.',
    unlockedToast: 'Perubahan terbuka di browser ini.',
    close: 'Tutup',

    noDeviceBody:
      'Buka KidGate di ponsel Anda, masuk ke *Keluarga*, lalu ketuk ikon pindai (*Pindai kode*). Pindai kode QR di perangkat anak Anda, atau ketik kode 6 karakternya. Lalu tekan *Muat ulang* di sini.',
    pairStep2Title: 'Pindai kode dengan ponsel Anda',
    getKidGate: 'Dapatkan KidGate',
    childNoDevices:
      'Belum ada perangkat. Sambungkan satu, lalu pilih anak ini saat aplikasi menanyakan siapa yang memakainya.',
    childNoDevicesAssign:
      'Belum ada perangkat. Tetapkan satu di bawah, atau sambungkan perangkat baru.',

    toastCheckIn: '{{name}} akan menerima permintaan Check-In.',
    toastTimeApproved: 'Waktu tambahan disetujui.',
    toastCheckInResent: 'Check-In dikirim ulang.',

    tileScreenToday: 'Waktu Layar hari ini',
    tileSameAsAverage: 'Sama dengan rata-rata 7 hari',
    tileDeltaUp: '↑ {{percent}}% dibanding rata-rata 7 hari',
    tileDeltaDown: '↓ {{percent}}% dibanding rata-rata 7 hari',
    tileBlocked: 'Upaya diblokir',
    tileBlockedMeta: 'Aplikasi yang dihentikan sejak pemasangan',
    tileAttention: 'Butuh perhatian',
    tileOpenItems: 'Item terbuka di bawah',
    tileAllClear: 'Semua aman',

    cardScreenTime: 'Waktu Layar',
    cardScreenTimeSub: '14 hari terakhir, dibanding Batas harian',
    cardRecent: 'Aktivitas terbaru',
    cardRecentSub: 'Terbaru dulu',
    cardRecentEmpty:
      'Belum ada catatan. Penguncian, aplikasi yang diblokir, Peringatan Tempat, dan sinkronisasi waktu layar dari perangkat ini akan muncul di sini.',
    cardAttention: 'Butuh perhatian Anda',
    cardAttentionSub: '{{count}} terbuka',
    cardAttentionEmpty: 'Tidak ada yang perlu ditinjau. Perlindungan tampak sehat.',
    cardProtection: 'Kesehatan perlindungan',
    cardProtectionSub: 'Diperiksa {{when}}',

    attnMoreMinutes: '{{name}} meminta tambahan {{minutes}} menit',
    attnReason: '“{{reason}}” · {{when}}',
    attnCheckInMissed: 'Check-In terlewat',
    attnCheckInMissedMeta: 'Dikirim {{when}} · tanpa jawaban',
    attnLimitReached: 'Batas harian tercapai — perangkat terkunci',
    attnBatteryLow: 'Baterai lemah ({{level}}%)',
    attnBatteryLowMeta: 'Pembaruan lokasi bisa berhenti jika ponsel mati',
    attnResend: 'Kirim ulang',
    attnHowToFix: 'Cara memperbaiki',
    attnUnlock: 'Buka kunci',
    attnAppOnly: 'Tersedia di aplikasi KidGate',

    todayTitle: 'Hari ini',
    todaySub: 'Dibanding Batas harian dan bonus yang diperoleh',
    used: 'Terpakai',
    left: 'Sisa',
    dailyLimit: 'Batas harian',
    bonusToday: 'Bonus hari ini',
    off: 'Nonaktif',
    on: 'Aktif',
    topAppsTitle: 'Aplikasi teratas hari ini',
    topAppsTitleDay: 'Aplikasi teratas · {{date}}',
    topAppsSub: 'Batas tiap aplikasi ditampilkan sebagai penanda',
    trendTitle: 'Tren Waktu Layar',
    trendSub: '{{count}} hari terakhir',
    rangeDays: '{{count}} hr',
    blockedHoursTitle: 'Jam Diblokir',
    blockedHoursSub:
      '{{count}} rentang waktu · perangkat tetap terkunci di dalam blok berarsir',
    scheduleOff: 'Jadwal mati',
    schedMax: 'Satu perangkat paling banyak menampung {{max}} rentang.',

    appUsageTitle: 'Penggunaan aplikasi hari ini',
    appUsageSub: 'Waktu yang dipakai per aplikasi',
    appUsageEmpty: 'Belum ada penggunaan aplikasi yang dilaporkan.',
    appBlockingTitle: 'Aplikasi yang Diblokir',
    blockingLabel: 'Pemblokiran',
    appsBlocked: 'Aplikasi diblokir',
    categories: 'Kategori',
    limitsMax: 'Satu perangkat paling banyak membatasi {{max}} aplikasi.',
    perDay: '{{value}}/hari',
    webActivityTitle: 'Aktivitas web',
    webActivitySub: 'Domain paling sering dikunjungi, 7 hari terakhir',
    webActivityEmpty: 'Belum ada aktivitas web.',
    inventoryEmpty: 'Perangkat ini belum mengirim daftar aplikasinya.',
    inventoryFirstScan:
      'Pemindaian pertama, jadi KidGate belum tahu kapan aplikasi ini muncul.',
    inventoryOtherLabel: 'Dikenali',
    inventoryUnknownLabel: 'Belum dikenali',
    installAllow: 'Izinkan',
    toastInstallAllowed: 'Aplikasi diizinkan',
    rowInstallApprovalDesc: '{{count}} aplikasi menunggu persetujuan',
    rowInstallApprovalDesc_one: '{{count}} aplikasi menunggu persetujuan',
    rowInstallApprovalDescIos:
      'Menyembunyikan App Store — Apple tidak mengizinkan persetujuan per aplikasi',
    colDomain: 'Domain',
    colVisits: 'Kunjungan',
    colBlocked: 'Diblokir',
    colLastSeen: 'Terakhir',
    videosSub: 'Apa yang ditonton di YouTube dan web',
    videosEmpty: 'Belum ada video.',
    colVideo: 'Video',
    colChannel: 'Kanal',
    colViews: 'Tontonan',
    filterRefusedTitle: 'Yang diblokir penyaring',
    filterRefusedSub: '{{count}} permintaan diblokir, 7 hari terakhir',
    filterHintIos:
      'iPhone atau iPad ini hanya menyaring dengan kontrol konten dewasa milik Apple. Perbarui KidGate di perangkat itu dan izinkan VPN KidGate untuk memblokir per kategori.',
    locationTitle: 'Lokasi',
    locationUpdated: 'Diperbarui {{when}}',
    locationWaiting: 'Menunggu pembaruan pertama',
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
    sosSub: 'Sinyal darurat dari perangkat anak',
    sosEmpty:
      'Belum ada peringatan SOS. Cobalah sekali bersama agar Anda berdua tahu cara kerjanya.',
    sosAcknowledged: 'sudah ditanggapi',
    sosActive: 'aktif',

    checkInsTitle: 'Check-In',
    checkInsSub: 'Minta anak Anda memastikan dirinya aman',
    checkInSafe: 'Dipastikan aman',
    checkInPhotoRequested: 'foto dan lokasi diminta',
    checkInNoReply: 'belum ada balasan',
    checkInPhotoSkipped: 'foto dilewati',
    checkInPhotoAttached: 'foto dilampirkan',
    checkInNoPhoto: 'foto tidak diminta',
    sendCheckIn: 'Kirim Check-In sekarang',

    protectionAlertsTitle: 'Peringatan perlindungan',
    protectionAlertsSub: '{{count}} peristiwa sejak pemasangan',

    limitCardTitle: 'Batas harian',
    limitCardSub: 'Batasi menit yang tersedia setiap hari',
    limitAria: 'Menit batas harian',
    limitScaleMin: '30m',
    limitScaleMax: '8j',
    limitHint:
      'Menit bonus dari tugas hadiah dan permintaan waktu yang disetujui ditambahkan di atasnya, hanya untuk hari itu.',
    limitShared: 'Dipakai bersama semua perangkat',
    limitSharedSpent: 'Hari ini terpakai {{used}} dari {{limit}}',
    limitSharedHint:
      'Ini satu hari penuh untuk anak ini, bukan batas perangkat ini saja — tiap perangkat mendapat sisa yang belum dipakai perangkat lain. Ubah di aplikasi KidGate.',
    whatsOnSub: 'Perubahan disinkronkan ke perangkat anak',
    rowBlockedHours: 'Jam Diblokir',
    rowBlockedHoursDesc: '{{count}} rentang waktu · {{list}}',
    rowAppBlocking: 'Aplikasi yang Diblokir',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Filter web',
    rowWebFilterDesc: '{{count}} kategori diblokir',
    rowNotSupported: 'Tidak didukung di perangkat ini',
    rowLocation: 'Berbagi lokasi',
    rowLocationDesc: 'Pembaruan terakhir {{when}}',
    rowLocationNone: 'Belum ada lokasi',
    rowSearchMonitoring: 'Pemantauan pencarian',
    rowSafeSearchDesc:
      'Mengunci Google SafeSearch, Bing, dan DuckDuckGo pada pengaturan ketat di Android, Android TV, dan Chrome. Di Android dan Chrome, ini juga mengunci Mode Terbatas YouTube, yang turut menyembunyikan komentar dan memblokir sebagian video biasa.',

    webFilterCatsTitle: 'Kategori Filter web',
    webFilterCatsSub: 'Jenis konten yang diblokir',
    dnsHint:
      'DNS terenkripsi selalu diblokir selama penyaring berjalan, sehingga browser tidak bisa menghindarinya.',
    starChartTitle: 'Papan bintang',
    starChartSub: 'Bintang yang dikumpulkan minggu ini, per anak',
    starChartEmpty: 'Tambahkan anak kedua di aplikasi untuk memulai papan bintang.',
    starChartStars: '{{count}} bintang',
    rewardTasksTitle: 'Tugas hadiah',
    rewardTasksSub: 'Dapatkan menit tambahan dengan menyelesaikan tugas',
    rewardTaskMeta: '+{{minutes}} mnt · {{cadence}}',
    rewardTaskStars: 'Tingkat kesulitan: {{count}} dari 3',
    rewardTaskWaiting: ' · menunggu persetujuan Anda',
    approve: 'Setujui',
    siteRequestAllow: 'Izinkan',
    siteRequestDeny: 'Nanti saja',
    attnSiteRequest: '{{name}} meminta membuka {{domain}}',
    timelineSub:
      'Hari ini, dari tengah malam ke tengah malam. Hijau adalah waktu pemakaian perangkat.',
    timelineSubDay:
      '{{date}}, dari tengah malam ke tengah malam. Hijau adalah waktu pemakaian perangkat.',
  },

  controlError: {
    generic: 'Tidak berhasil. Coba lagi.',
    network: 'Tidak ada koneksi. Periksa jaringan lalu coba lagi.',
    sessionExpired: 'Sesi Anda berakhir. Masuk lagi.',
    forbidden:
      'Sesi browser ini tidak dapat mengubah apa pun. Masuk lagi dengan memindai kode QR memakai aplikasi KidGate.',
    notFound: 'Itu sudah tidak ada — mungkin diubah dari ponsel.',
    conflict: 'Orang lain baru saja mengubah ini. Muat ulang untuk melihat hasilnya.',
    rateLimited: 'Terlalu banyak perubahan sekaligus. Tunggu sebentar lalu coba lagi.',
    server: 'KidGate tidak dapat menyelesaikannya. Coba lagi sebentar.',
    premiumRequired:
      'Ini fitur Premium. Paket dikelola di aplikasi KidGate di ponsel Anda.',
  },

  report: {
    writtenAt: 'Ditulis {{when}}',
    shareImage: 'Simpan sebagai gambar',
    sharePdf: 'Simpan sebagai PDF',
    imageSaved: 'Gambar disimpan.',
    shareFailed: 'Tidak dapat menyimpan dari browser ini. Salin ringkasannya saja.',
    emptyBody:
      'Dengan Premium, laporan datang setiap Senin pagi dan mencakup tujuh hari sebelumnya. Anda juga bisa menulis laporan minggu ini dari aplikasi KidGate di ponsel Anda.',
    loadFailed: 'Laporan tidak dapat dibuka.',
    retryLoad: 'Coba lagi',
    existed: 'Minggu ini sudah punya laporan — ini dia.',
  },

  support: {
    title: 'Dukungan KidGate',
    updated: 'Kami siap membantu',

    contactTitle: 'Hubungi kami',
    contactEmail: '**Email:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Waktu tanggapan:** biasanya dalam satu hari kerja',
    contactNote:
      'Saat menghubungi kami, sertakan alamat email akun orang tua KidGate Anda dan penjelasan singkat masalahnya agar kami bisa membantu lebih cepat.',

    startTitle: 'Memulai',
    start1:
      '**1. Siapkan perangkat orang tua.** Pasang KidGate, buka aplikasinya, dan pilih *Ini perangkat orang tua*. Masuk dengan Google atau email (atau Apple, di iPhone), lalu beri nama keluarga Anda.',
    start2:
      '**2. Tetapkan PIN Orang Tua.** Buka *Pengaturan → Keamanan* dan tetapkan PIN Orang Tua 6 digit. Anda memerlukannya untuk mengubah pengaturan sensitif dan memilih aplikasi yang diblokir di perangkat anak. Jangan bagikan kepada anak Anda.',
    start3:
      '**3. Sambungkan perangkat anak.** Pasang KidGate di perangkat anak Anda, lalu buka. Di ponsel atau tablet, pilih *Ini perangkat anak*. Di perangkat orang tua, buka *Keluarga* dan ketuk ikon pindai (*Pindai kode*), lalu pindai kode QR yang tampil di perangkat anak (atau masukkan kode 6 karakter). Jika perangkat anak meminta konfirmasi, konfirmasi sambungan di sana; TV akan tersambung sendiri.',
    start4:
      '**4. Berikan izin di perangkat anak.** Buka layar *Status* di perangkat anak dan ketuk *Lanjutkan penyiapan* — layar ini memandu setiap izin yang dibutuhkan KidGate. Di Android: Notifikasi, Akses Penggunaan, Tampil di atas aplikasi lain, Aksesibilitas (bantuan kunci), Alarm & pengingat, Baterai tanpa batasan, koneksi VPN tempat Filter web berjalan, perlindungan penghapusan, dan, untuk Peringatan pesan, akses notifikasi; di iOS: *Izinkan Penggunaan Aplikasi & Situs Web* (Waktu Layar), serta untuk Filter web, *Izinkan* saat iOS meminta untuk menambahkan konfigurasi VPN. Kendali tidak akan berfungsi penuh sampai semuanya aktif.',
    start5:
      '**5. Atur kendali.** Dari perangkat orang tua, buka kartu perangkat anak dan tetapkan Batas harian, Jam Diblokir, Aplikasi yang Diblokir, Filter web, dan fitur lokasi.',
    startNote:
      'Aplikasi juga menyertakan panduan langkah demi langkah: *Pengaturan → Panduan pengguna*, yang membahas penyambungan perangkat, izin, kendali harian, dan fitur keamanan secara rinci.',

    faqTitle: 'Pertanyaan yang sering diajukan',

    faq1Q: 'Bisakah saya mengelola keluarga saya dari komputer?',
    faq1A:
      'Bisa. Buka [dasbor web](/dashboard) lalu pindai kode yang ditampilkannya dengan aplikasi KidGate di ponsel Anda — atau masuk dengan akun yang sama seperti di aplikasi: Google, Apple, atau email dan kata sandi Anda. Dasbor menampilkan keluarga, perangkat, laporan, dan pengaturan yang sama. Jika masuk dengan akun, mengubah kendali akan meminta PIN Orang Tua Anda. Pembuatan akun dan penyambungan perangkat tetap dilakukan di aplikasi ponsel.',

    faq2Q: 'Bagaimana cara menyambungkan perangkat orang tua dan anak?',
    faq2A:
      'Di perangkat anak, buka KidGate. Di ponsel atau tablet, pilih *Ini perangkat anak*. Kode QR dan kode 6 karakter akan muncul. Di perangkat orang tua, buka *Keluarga* dan ketuk ikon pindai (*Pindai kode*), lalu pindai kode QR (disarankan) atau masukkan kodenya secara manual. Jika perangkat anak meminta konfirmasi, konfirmasi nama orang tua di sana; TV akan tersambung sendiri. Kode punya masa berlaku — jika penyambungan gagal, ketuk *Kode baru* di perangkat anak dan coba lagi.',

    faq3Q: 'Bisakah dua orang tua mengelola keluarga yang sama?',
    faq3A:
      'Bisa. Di perangkat pemilik keluarga, buka *Keluarga → + → Undang orang tua* dan bagikan kode QR atau kode undangan. Orang tua kedua memasang KidGate, masuk sebagai orang tua, membuka *Keluarga* dan mengetuk ikon pindai (*Pindai kode*), lalu memindai kode QR atau mengetik kode undangan di sana. Pemilik kemudian menyetujui permintaannya. Satu keluarga dapat memiliki hingga 3 orang tua di paket gratis dan selama uji coba, serta hingga 6 dengan Premium. Satu langganan mencakup seluruh keluarga; hanya pemilik yang membayar.',

    faq4Q: 'Bagaimana cara kerja uji coba gratis?',
    faq4A:
      'Uji coba 7 hari dimulai saat perangkat orang tua dan anak pertama Anda terhubung, dan memberi akses penuh ke semua fitur. Menghapus perangkat anak tidak mengatur ulang uji coba. Setelah berakhir, semua aturan tetap berjalan gratis dan satu perangkat anak pilihan Anda tetap mengirim laporan; Premium mengembalikan aktivitas langsung, riwayat, laporan mingguan, dan laporan dari semua perangkat.',

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
      'Di Android, penguncian memerlukan *Tampil di atas aplikasi lain* dan *Aksesibilitas* (bantuan kunci) yang aktif, serta baterai tanpa batasan. Di Xiaomi, Samsung, Oppo, Vivo, dan perangkat serupa, izinkan juga mulai otomatis dan keluarkan KidGate dari daftar “aplikasi tidur” mana pun (lihat *Status → Izinkan mulai otomatis* di perangkat anak). Di iOS, penguncian bergantung pada otorisasi Durasi Layar. Jika sebuah izin dimatikan kemudian, Anda akan menerima Peringatan perlindungan di perangkat orang tua.',

    faq9Q: 'Bagaimana cara memblokir aplikasi tertentu?',
    faq9A:
      'Di perangkat orang tua, buka *Aplikasi* milik anak Anda, lalu *Aplikasi terpasang*, ketuk sebuah aplikasi dan pilih *Blokir*. Di iPhone, aplikasi dipilih langsung di iPhone itu: buka *KidGate → Pengaturan*, ketuk *Buka kunci dengan PIN Orang Tua*, buka *Aplikasi yang Diblokir*, pilih aplikasinya, lalu simpan. Setelah itu nyalakan *Aktifkan Aplikasi yang Diblokir* di perangkat orang tua. Perangkat anak yang terhubung menerima setiap perubahan dalam satu menit. Di iOS, Apple mungkin menyembunyikan nama aplikasi yang persis dari perangkat orang tua.',

    faq10Q: 'Kenapa lokasi anak saya tidak diperbarui?',
    faq10A:
      'Lokasi harus diizinkan untuk KidGate di perangkat anak, dan perangkat butuh koneksi jaringan. Buka layar *Lokasi* perangkat itu dari ponsel orang tua lalu ketuk *Perbarui lokasi*. Mode hemat baterai bisa menunda pembaruan, dan GPS di dalam ruangan bisa kurang akurat.',

    faq11Q: 'Bagaimana cara menghapus KidGate dari perangkat anak saya?',
    faq11A:
      'Hapus dulu perangkatnya dari aplikasi orang tua (buka perangkat di *Keluarga* lalu pilih hapus), setelah itu copot aplikasinya di perangkat anak.',

    faq12Q: 'Bagaimana cara menghapus akun dan data saya?',
    faq12A:
      'Di aplikasi orang tua, buka *Pengaturan → Akun → Hapus akun*. Setelah masa tunggu 14 hari, yang selama itu masih bisa Anda batalkan, ini menghapus permanen akun keluarga Anda dan semua data — perangkat, aktivitas, riwayat lokasi, dan foto SOS — untuk semua orang tua dan anak. Lihat halaman [Penghapusan Akun & Data](/delete-account) kami untuk semua pilihan, termasuk penghapusan tanpa memasang aplikasi.',

    legalTitle: 'Legal',
    legalDeletion: 'Penghapusan Akun & Data',
  },

  deleteAccount: {
    title: 'Penghapusan Akun & Data',
    updated: 'Terakhir diperbarui: 18 September 2026',
    intro:
      'Halaman ini menjelaskan cara menghapus akun KidGate Anda beserta data yang terkait. Anda dapat meminta penghapusan kapan saja, dan Anda tidak perlu memasang aplikasinya untuk melakukannya.',
    option1Title: 'Opsi 1: Hapus akun Anda di aplikasi',
    option1Step1: 'Buka aplikasi KidGate dan masuk.',
    option1Step2: 'Buka *Pengaturan → Akun → Hapus akun*.',
    option1Step3: 'Konfirmasi penghapusan.',
    option2Title: 'Opsi 2: Minta penghapusan lewat email',
    option2Step1:
      'Kirim email ke [support@kidgate.app](mailto:support@kidgate.app?subject=Account%20Deletion%20Request) dengan baris subjek “Account Deletion Request”.',
    option2Step2:
      'Kirim permintaan dari alamat email yang terkait dengan akun KidGate Anda agar kami dapat memverifikasi identitas Anda.',
    option2Step3:
      'Kami akan mengonfirmasi permintaan Anda dan menjadwalkan penghapusan. Penghapusan ditahan selama 14 hari, dan selama itu Anda dapat membatalkannya; setelah itu penghapusan berjalan dan tidak dapat dibatalkan.',
    deletedTitle: 'Apa yang dihapus',
    deletedIntro: 'Menghapus akun Anda akan menghapus secara permanen:',
    deleted1: 'Informasi akun orang tua Anda (nama, alamat email).',
    deleted2: 'Semua profil anak yang Anda buat.',
    deleted3:
      'Semua data aktivitas yang dikumpulkan dari perangkat yang dikelola, termasuk penggunaan aplikasi, riwayat waktu layar, aktivitas penjelajahan, riwayat lokasi, serta foto Check-In dan SOS.',
    deleted4: 'Pengaturan dan preferensi kontrol orang tua Anda.',
    deleted5:
      'Permintaan dukungan yang Anda ajukan, beserta tangkapan layar yang dilampirkan.',
    deleted6:
      'Informasi masuk Anda itu sendiri, sehingga akun tidak dapat digunakan lagi.',
    retentionTitle: 'Jangka waktu penyimpanan',
    retention1:
      'Data dihapus saat masa tahan **14 hari** pada permintaan yang telah diverifikasi berakhir. Penghapusan bersifat permanen dan tidak ada ekspor sesudahnya.',
    retention2:
      'Catatan bahwa penghapusan telah diminta dan diselesaikan — hash alamat email Anda dan tanggalnya, tidak lebih — disimpan selama **12 bulan** agar penghapusan yang dipersoalkan dapat dijawab.',
    retention3:
      'Kami dapat menyimpan sekumpulan catatan minimal jika diwajibkan oleh hukum (misalnya catatan transaksi untuk keperluan pajak), hanya selama diwajibkan secara hukum.',
    partialTitle: 'Penghapusan sebagian',
    partial:
      'Anda dapat menghapus anak atau perangkat di aplikasi, yang menghentikan pengumpulan data darinya. Riwayat yang sudah terkumpul kedaluwarsa sesuai jadwal di Kebijakan Privasi (30 hari untuk riwayat penggunaan, web, dan lokasi serta umpan aktivitas; 90 hari untuk SOS, Check-In, dan Permintaan waktu); agar dihapus lebih cepat, kirim email ke [support@kidgate.app](mailto:support@kidgate.app).',
    moreInfo:
      'Untuk detail lebih lanjut tentang cara kami menangani data Anda, lihat [Kebijakan Privasi](/privacy-policy) kami.',
  },

  download: {
    eyebrow: 'Unduh',
    qrScan: 'Pindai dengan kamera ponsel untuk mengunduh aplikasi',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 atau lebih baru, di Mac dengan Apple silicon.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 atau lebih baru, 64-bit.',
    button: 'Unduh',
    warningSub:
      'Windows menampilkan peringatan SmartScreen untuk aplikasi apa pun yang dipasang di luar tokonya sendiri oleh pengembang yang belum masuk daftar terverifikasi — bukan karena menemukan sesuatu di KidGate. Kartu Windows di atas menjelaskan cara mengizinkannya. Paket Mac ditandatangani dengan Apple Developer ID dan dinotarisasi oleh Apple sehingga tidak memunculkan peringatan. Unduh hanya dari kidgate.app.',
    macosSteps:
      'Buka paket yang telah diunduh lalu ikuti pemasangnya. Setelah itu macOS meminta Anda sekali untuk mengizinkan ekstensi sistem KidGate: buka pengaturan yang ditunjuk pesan itu dan izinkan di sana. Filter web belum berjalan sebelum Anda mengizinkannya. Setelah terpasang, KidGate tetap berjalan lewat ikonnya di bilah menu; klik ikon itu untuk membuka jendelanya.',
    windowsSteps:
      'Browser Anda mungkin lebih dulu memperingatkan bahwa file ini jarang diunduh — pilih untuk menyimpannya. Setelah itu, saat Windows berkata telah melindungi PC Anda, pilih Info selengkapnya (More info), lalu Tetap jalankan (Run anyway). Setelah terpasang, KidGate tetap berjalan lewat ikonnya di area notifikasi; klik ikon itu untuk membuka jendelanya.',
  },
  about: {
    eyebrow: 'Tentang kami',
    title: 'Membantu anak memakai teknologi dengan lebih aman,',
    titleAccent: 'dan keluarga sedikit lebih tenang.',
    lede: 'Ponsel, komputer, dan TV kini sudah menjadi bagian dari hidup anak. Itu belum tentu buruk — yang penting adalah bagaimana mereka memakainya, berapa lama, dan apakah mereka terlindungi dari konten yang tidak cocok untuk mereka. KidGate membantu orang tua menetapkan batas yang penting dengan cara yang sederhana, terbuka, dan adil — bagi orang tua maupun anak.',
    storyEyebrow: 'Kenapa KidGate ada',
    storyTitle: 'Berawal dari momen yang dikenal setiap keluarga',
    storyP1:
      '“Lima menit lagi aja!” Lalu lima menit berlalu. Orang tua mengingatkan lagi, anak kesal, dan hal kecil berubah jadi pertengkaran yang tak diinginkan siapa pun. Menurut kami, tidak setiap keluarga butuh aturan yang lebih ketat. Kadang yang dibutuhkan hanyalah aturan yang jelas, yang dipahami dan bisa dipercaya semua orang.',
    storyP2:
      'Dengan KidGate, orang tua mengatur Batas harian, Jam Diblokir, Aplikasi yang Diblokir, dan Filter web sekali saja, lalu aturan berjalan sendiri sejauh yang dimungkinkan tiap perangkat. Anak juga bisa melihat batasnya, tahu kapan perangkat akan terkunci, dan meminta tambahan waktu saat perlu.',
    storyP3:
      'Orang tua tidak perlu mengingatkan setiap hari. Anak tidak perlu menebak apakah aturannya berubah hari ini. Lebih sedikit pertengkaran, lebih banyak waktu bersama.',
    valuesEyebrow: 'Yang penting bagi kami',
    valuesTitle: 'Yang selalu kami pegang',
    valuesSub: 'Setiap fitur KidGate berawal dari empat hal ini.',
    value1Title: 'Terbuka bagi orang tua maupun anak',
    value1Text:
      'Anak berhak tahu aturan yang berlaku di perangkatnya sendiri. Orang tua punya alat untuk melindungi mereka; anak bisa memahami batasnya, meminta tambahan waktu, dan menghubungi orang tua lewat SOS di perangkat yang mendukung. Kami ingin teknologi membantu keluarga saling memahami, bukan membuat mereka makin berjarak.',
    value2Title: 'Privasi keluarga Anda dihormati',
    value2Text:
      'KidGate tidak menampilkan iklan dan tidak pernah menjual data anak Anda kepada siapa pun. Anda bisa meminta kami menghapus akun keluarga beserta data yang terkait — dari dalam aplikasi, atau lewat email seperti yang dijelaskan situs ini — dan semuanya dihapus 14 hari kemudian sesuai proses yang kami umumkan.',
    value3Title: 'Jujur tentang kemampuan KidGate',
    value3Text:
      'Setiap perangkat punya batasannya sendiri, jadi beberapa fitur bekerja berbeda di iPhone, Android, Mac, Windows, dan TV. Kami menyampaikannya langsung di layar, alih-alih menjanjikan semuanya bekerja sama di mana-mana. Melindungi keluarga butuh alat yang baik, dan informasi yang bisa diandalkan.',
    value4Title: 'Satu keluarga, satu paket Premium',
    value4Text:
      'Satu langganan Premium mencakup semua orang tua dan semua perangkat anak — tidak perlu membeli per perangkat. Tanpa langganan pun, Batas harian, Jam Diblokir, Aplikasi yang Diblokir, Kunci perangkat, dan Filter web tetap berjalan di perangkat yang mendukungnya, dan SOS tidak pernah berada di balik paywall — karena alat keselamatan yang paling penting harus selalu mudah dijangkau.',
    makeEyebrow: 'Yang kami buat',
    makeTitle: 'Satu aplikasi, banyak perangkat',
    makeSub:
      'Anak memakai ponsel saat di luar, komputer untuk sekolah, dan TV untuk bersantai, jadi menjaga mereka tidak seharusnya berhenti di satu perangkat. Tiap platform punya kelebihannya sendiri, tapi tujuannya tetap sama: lebih mudah bagi orang tua, lebih jelas bagi anak.',
    make1Title: 'iPhone dan iPad',
    make1Text:
      'Batas harian, Jam Diblokir, dan Aplikasi yang Diblokir yang dibangun di atas Durasi Layar (Screen Time) milik Apple sendiri, plus Filter web langsung di perangkat.',
    make2Title: 'Android',
    make2Text:
      'Batas waktu, Aplikasi yang Diblokir, kunci layar, dan Filter web, plus pemberitahuan saat anak Anda memasang aplikasi baru.',
    make3Title: 'macOS',
    make3Text:
      'Jadwal yang sama dan batas yang sama seperti di ponsel, plus ringkasan harian yang bisa dipahami orang tua sekilas.',
    make4Title: 'Windows',
    make4Text:
      'Aturan yang sama di PC, dan KidGate menyala lagi dengan sendirinya kalau ditutup atau dihentikan.',
    make5Title: 'Android TV',
    make5Text:
      'Layar bersama keluarga di ruang tengah, dengan batas dan jadwal yang sama seperti di ponsel. TV tidak membagikan lokasi dan tidak punya SOS.',
    make6Title: 'Chrome',
    make6Text:
      'Ekstensi Chrome membawa Filter web ke dalam browser, bahkan di komputer yang tidak bisa menjalankan KidGate. Jika Anda mengaktifkannya, ekstensi ini juga merekam video YouTube yang ditonton anak Anda, menandai pencarian yang mengkhawatirkan, dan memberi tahu ekstensi lain apa saja yang terpasang. Ekstensi ini tidak mengukur waktu layar dan tidak memblokir aplikasi.',
    make7Title: 'Dasbor orang tua',
    make7Text:
      'Jaga seluruh keluarga dari browser di komputer mana pun. Masuk dengan memindai kode memakai ponsel Anda — tidak ada yang perlu dipasang.',
    factsEyebrow: 'KidGate hari ini',
    factsTitle: 'Empat angka',
    fact1Label: 'bahasa, agar setiap keluarga bisa memakainya dalam bahasanya sendiri',
    fact2Label: 'platform, plus dasbor web',
    fact3Label: 'iklan di KidGate',
    fact4Label: 'paket Premium untuk seluruh keluarga',
    contactEyebrow: 'Kami mendengarkan',
    contactTitle: 'Setiap pesan dibaca orang sungguhan',
    contactSub:
      'Ada yang tidak berjalan seperti seharusnya, fitur yang dibutuhkan keluarga Anda, atau terjemahan yang terasa kurang alami dalam bahasa Anda — tulis ke kami. Setiap masukan membantu KidGate jadi lebih berguna bagi keluarga yang memakainya setiap hari.',
    contactEmail: 'Kirim email',
    contactSupport: 'Dukungan dan panduan',
    contactPrivacy: 'Cara kami menangani data',
  },
  promo: {
    intro: 'Sepanjang hari anak Anda, Anda tetap tenang.',
    school: 'Kelas dimulai. Ponsel mengunci sendiri.',
    apps: 'Aplikasi yang Anda blokir tidak bisa dibuka.',
    arrive: 'Ia tiba di rumah nenek, dan Anda mendapat notifikasi.',
    checkIn: 'Anda menanyakan kabarnya. Sekali ketuk, ia memastikan dirinya aman.',
    sos: 'Jika terjadi sesuatu, satu SOS menunjukkan di mana ia berada.',
    limit: 'Waktu main habis. Ponsel mengunci sendiri.',
    lockNow: 'Makan malam sudah siap. Kunci ponselnya dari ponsel Anda.',
    web: 'Blokir situs berbahaya di semua perangkat.',
    tv: 'TV di ruang keluarga juga mengikuti aturan rumah yang sama.',
    reward: 'PR selesai. Dapat 15 menit tambahan.',
    bedtime: 'Saat waktu tidur, ponsel, komputer, dan TV juga ikut tidur.',
    kid: 'Anak',
    parent: 'Orang tua',
    arrivedNotice: 'Nadia sudah tiba di rumah nenek',
    checkAsk: 'Kamu baik-baik saja?',
    checkReply: 'Aku baik-baik saja',
    sosNotice: 'Nadia mengirim SOS',
    timeUp: 'Waktu main hari ini sudah habis',
    lockButton: 'Kunci sekarang',
    task: 'PR selesai',
    granted: '+15 menit',
    youtubeTitle: 'KidGate — Kontrol orang tua untuk ponsel, komputer, dan TV',
    youtubeDescription:
      'Satu hari biasa bersama KidGate, dari bel sekolah sampai waktu tidur.',
  },
  setup: {
    parentTitle: 'Siapkan ponsel Anda',
    parentSub: 'Langkah pertama. Hanya butuh beberapa menit.',
    install: 'Cari “KidGate” di App Store atau Google Play, lalu pasang.',
    installSub: 'iPhone, iPad, atau ponsel Android.',
    role: 'Buka KidGate dan pilih “{{parent}}”.',
    signIn: 'Ketuk “{{signIn}}”, lalu masuk dengan Apple, Google, atau email.',
    signInSub: 'Dengan Apple, Anda cukup mengonfirmasi dengan Face ID.',
    family: 'Di “{{tab}}”, ketuk “{{create}}” lalu beri nama keluarga Anda.',
    done: 'Bagian Anda sudah selesai.',
    parentYoutubeTitle: 'Cara menyiapkan KidGate di ponsel Anda',
    parentYoutubeDescription:
      'Pasang KidGate, masuk, lalu buat keluarga Anda: langkah pertama sebelum menyambungkan perangkat anak Anda.',
    pairSub: 'Sambungkan ke ponsel Anda, lalu aktifkan perlindungannya.',
    parentPhone: 'Ponsel Anda',
    openSub: 'Kode QR akan muncul. Biarkan layar itu tetap terbuka.',
    scanSub: 'Tidak bisa memindai? Pilih “{{manual}}”.',
    protect: 'Ketuk “{{turnOn}}” untuk memulai dengan aturan dasar yang aman.',
    protectSub: 'Anda bisa menyesuaikan tiap aturan nanti.',
    tapAllow: 'Ketuk “{{allow}}”.',
    extras: 'Terakhir, izinkan kamera dan mikrofon.',
    extrasSub:
      'Opsional: dengan begitu, anak Anda bisa menyertakan foto atau suara pada SOS.',
    iosTitle: 'Siapkan iPhone atau iPad anak Anda',
    childPhone: 'iPhone anak',
    iosOpen: 'Di iPhone anak Anda, buka KidGate dan pilih “{{child}}”.',
    iosScan: 'Di ponsel Anda, ketuk “{{add}}” lalu pindai kode QR-nya.',
    iosConfirm:
      'Di iPhone anak Anda, pastikan yang tampil adalah Anda, lalu ketuk “{{yes}}”.',
    iosPin: 'Buat “{{pin}}” Anda (6 digit).',
    iosPinSub:
      'iPhone anak Anda memintanya sebelum Aplikasi yang Diblokir bisa diubah.',
    iosAssign:
      'Pilih siapa yang memakai iPhone ini, atau tambahkan anak Anda dengan mengetik namanya.',
    iosScreenTime:
      'Di iPhone anak Anda, ketuk “{{allow}}” lalu izinkan akses Waktu Layar.',
    iosScreenTimeSub: 'Apple meminta Face ID atau kode sandi iPhone ini.',
    iosNotify:
      'Ketuk “{{settings}}”, aktifkan {{notifications}}, lalu kembali ke KidGate.',
    iosRefresh: 'Ketuk “{{settings}}” lalu aktifkan “{{refresh}}”.',
    iosRefreshSub: 'Opsional: ini menjaga KidGate tetap bekerja di latar belakang.',
    iosBlocked: 'Ketuk “{{strengthen}}”, lalu atur “{{blocked}}”.',
    iosBlockedSub: 'Ketuk “{{unlock}}”, masukkan PIN Anda, lalu pilih aplikasinya.',
    iosDone: 'iPhone anak Anda sudah terlindungi.',
    iosYoutubeTitle: 'Cara menyiapkan KidGate di iPhone atau iPad anak Anda',
    iosYoutubeDescription:
      'Sambungkan iPhone atau iPad anak Anda ke ponsel Anda dengan kode QR, lalu aktifkan Waktu Layar dan izin lain yang dibutuhkan KidGate, langkah demi langkah.',
    androidTitle: 'Siapkan ponsel atau tablet Android anak Anda',
    childAndroid: 'Android anak',
    androidOpen: 'Di ponsel anak Anda, buka KidGate dan pilih “{{child}}”.',
    androidScan: 'Di ponsel Anda, pindai kode QR dengan KidGate.',
    androidConfirm:
      'Di ponsel anak Anda, pastikan yang tampil adalah Anda, lalu ketuk “{{yes}}”.',
    androidAssign:
      'Pilih siapa yang memakai ponsel ini, atau tambahkan anak Anda dengan mengetik namanya.',
    androidUsage:
      'Di ponsel anak Anda, ketuk “{{open}}” lalu aktifkan Akses Penggunaan untuk KidGate.',
    androidBack: 'Setelah itu, geser untuk kembali ke KidGate.',
    androidAccessibility: 'Ketuk “{{agree}}”, lalu aktifkan KidGate di Aksesibilitas.',
    androidOverlay: 'Ketuk “{{settings}}” lalu izinkan “{{overlay}}” untuk KidGate.',
    androidNotify: 'Ketuk “{{allow}}”, lalu izinkan notifikasi.',
    androidWebFilter: 'Ketuk “{{enable}}” lalu izinkan koneksinya.',
    androidWebFilterSub: '{{filter}} KidGate berjalan di ponsel sebagai VPN.',
    androidBattery:
      'Ketuk “{{settings}}”, lalu izinkan KidGate selalu berjalan di latar belakang.',
    androidStrengthen: 'Ketuk “{{strengthen}}”, lalu aktifkan “{{uninstall}}”.',
    androidMessages:
      'Untuk “{{alerts}}”, ketuk “{{grant}}” lalu aktifkan untuk KidGate.',
    androidMessagesSub:
      'KidGate memeriksa pesan masuk untuk mencari kata peringatan, langsung di ponsel.',
    androidDone: 'Ponsel Android anak Anda sudah terlindungi.',
    androidYoutubeTitle:
      'Cara menyiapkan KidGate di ponsel atau tablet Android anak Anda',
    androidYoutubeDescription:
      'Sambungkan ponsel atau tablet Android anak Anda ke ponsel Anda dengan kode QR, lalu aktifkan izin yang dibutuhkan KidGate, langkah demi langkah.',
    macTitle: 'Siapkan Mac anak Anda',
    childMac: 'Mac anak',
    macDownload: 'Di Mac anak Anda, unduh KidGate untuk macOS dari kidgate.app.',
    macInstall: 'Buka pemasang yang telah diunduh lalu ikuti langkah-langkahnya.',
    macPasswordSub: 'macOS meminta kata sandi Mac ini.',
    macOpen: 'KidGate terbuka dan menampilkan kode QR.',
    macOpenSub: 'Biarkan jendela itu tetap terbuka.',
    macScan: 'Di ponsel Anda, ketuk tombol pindai di KidGate lalu pindai kode QR-nya.',
    macConfirm: 'Di Mac, pastikan yang tampil adalah Anda, lalu klik “{{yes}}”.',
    macAssign:
      'Pilih siapa yang memakai Mac ini, atau tambahkan anak Anda dengan mengetik namanya.',
    macFilter: 'Di Mac, klik “{{open}}”, lalu aktifkan KidGate di Network Extensions.',
    macAllow:
      'Saat macOS meminta izin untuk memfilter konten jaringan, klik “Izinkan”.',
    macAllowSub: '{{filter}} KidGate kemudian aktif.',
    macDone: 'Mac anak Anda sudah terlindungi.',
    macYoutubeTitle: 'Cara menyiapkan KidGate di Mac anak Anda',
    macYoutubeDescription:
      'Pasang KidGate di Mac anak Anda, sambungkan ke ponsel Anda dengan kode QR, lalu aktifkan Filter web di System Settings.',
    windowsTitle: 'Siapkan PC Windows anak Anda',
    childWindows: 'PC anak',
    windowsDownload: 'Di PC anak Anda, unduh KidGate untuk Windows dari kidgate.app.',
    windowsSmartScreen:
      'Jika Windows berkata telah melindungi PC Anda, pilih Info selengkapnya (More info), lalu Tetap jalankan (Run anyway).',
    windowsInstall:
      'Setujui permintaan akses administrator, lalu ikuti langkah-langkah pemasang.',
    windowsInstallSub: 'Di akun standar, Windows meminta kata sandi administrator.',
    windowsConfirm: 'Di PC, pastikan yang tampil adalah Anda, lalu klik “{{yes}}”.',
    windowsAssign:
      'Pilih siapa yang memakai PC ini, atau tambahkan anak Anda dengan mengetik namanya.',
    windowsSetup: 'Di PC, klik “{{allow}}” untuk {{location}}.',
    windowsSetupSub: '{{filter}} KidGate aktif dengan sendirinya dalam beberapa detik.',
    windowsDone: 'PC anak Anda sudah terlindungi.',
    windowsYoutubeTitle: 'Cara menyiapkan KidGate di PC Windows anak Anda',
    windowsYoutubeDescription:
      'Pasang KidGate di PC Windows anak Anda, lalu sambungkan ke ponsel Anda dengan kode QR. Setelah itu, Filter web aktif dengan sendirinya.',
    chromeTitle: 'Siapkan KidGate di Chrome',
    childChrome: 'Komputer anak',
    chromeSite:
      'Di Chrome pada komputer anak Anda, buka kidgate.app lalu pilih Chrome.',
    chromeStore:
      'Di Chrome Web Store, klik “Tambahkan ke Chrome”, lalu “Tambahkan ekstensi”.',
    chromeOpen: 'Klik ikon KidGate di toolbar Chrome. Pop-up akan menampilkan kode QR.',
    chromeOpenSub: 'Biarkan tetap terbuka selama penyandingan.',
    chromeConfirm: 'Di KidGate, pastikan yang tampil adalah Anda, lalu klik “{{yes}}”.',
    chromeAssign: 'Pilih anak yang memakai Chrome di komputer ini.',
    chromeDone: 'Chrome di komputer anak Anda sudah terlindungi.',
    chromeYoutubeTitle: 'Cara menyiapkan KidGate di Chrome pada komputer anak Anda',
    chromeYoutubeDescription:
      'Tambahkan ekstensi KidGate ke Chrome di komputer anak Anda, lalu sambungkan ke ponsel Anda dengan kode QR. Setelah itu, ekstensi ini memfilter web di Chrome.',
    dashboardComputer: 'Komputer Anda',
    dashboardSite: 'Di komputer Anda, buka kidgate.app lalu klik “Dasbor”.',
    dashboardDone: 'Anda sudah masuk ke dasbor web.',
    tvTitle: 'Siapkan Android TV anak Anda',
    tvAssign:
      'Pilih siapa yang memakai TV ini, atau tambahkan anak Anda dengan mengetik namanya.',
    tvDone: 'Android TV anak Anda sudah terlindungi.',
    tvYoutubeTitle: 'Cara menyiapkan KidGate di Android TV anak Anda',
    outroTitle: 'Semuanya sudah siap.',
    outroSub: 'Semoga KidGate memudahkan Anda mengelola keluarga.',
    findDeviceTitle: 'Temukan perangkat anak Anda',
    allYoutubeTitle: 'Cara menyiapkan KidGate di ponsel Anda dan perangkat anak Anda',
    allYoutubeDescription:
      'Semua penyiapan dalam satu video: pertama ponsel Anda, lalu setiap perangkat anak Anda (iPhone atau iPad, ponsel atau tablet Android, Mac, PC Windows, Android TV, Chrome), dan terakhir dasbor web. Pilih perangkat Anda dari daftar di bawah.',
    // `guide-all`: every how-to in one video (operator, 2026-10-14).
    guideAllYoutubeTitle: 'Cara menggunakan KidGate: semua fitur, langkah demi langkah',
    guideAllYoutubeDescription:
      'Semua fitur KidGate dalam satu video, langkah demi langkah, di iPhone orang tua dan ponsel Android anak. Pilih fitur yang Anda perlukan dari daftar di bawah.',
    // `guide-parent-devices`' title card: the app's own wording for the device.
    removeParentDeviceTitle: 'Hapus perangkat orang tua',
  },
};
