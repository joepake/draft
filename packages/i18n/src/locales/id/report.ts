export const report = {
  title: 'Laporan mingguan',
  subtitle: 'Yang diperhatikan KidGate sepanjang minggu ini.',
  weekOf: 'Minggu {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Dikirim Minggu',
  triggerManual: 'Dibuat oleh Anda',

  statScreenTime: 'Waktu layar',
  statDailyAverage: 'Rata-rata harian',
  statBlockedApps: 'Aplikasi diblokir',
  statBlockedWebVisits: 'Situs difilter',

  trendUp: '{{value}} lebih banyak dari minggu sebelumnya',
  trendDown: '{{value}} lebih sedikit dari minggu sebelumnya',
  trendFlat: 'Kurang lebih sama dengan minggu sebelumnya',
  trendFirstWeek: 'Minggu pertama yang terukur',
  barThisWeek: 'Minggu ini',
  barLastWeek: 'Minggu lalu',

  highlights: 'Perlu diketahui',
  sevAttention: 'Perlu dilihat',
  sevNotable: 'Menonjol',
  sevInfo: 'Sekadar info',

  findingUsageUp:
    'Waktu layar naik {{percent}}% — {{delta}} lebih banyak dari minggu lalu.',
  findingUsageDown:
    'Waktu layar turun {{percent}}% — {{delta}} lebih sedikit dari minggu lalu.',
  findingUsageFlat: 'Waktu layar bertahan di {{total}}.',
  findingLateNight: '{{count}} malam lewat pukul 23.00 — paling larut sampai {{time}}.',
  findingNewTopApp: '{{app}} baru minggu ini dan sudah memakan {{duration}}.',
  findingAppSurge: '{{app}} naik {{delta}} dari minggu lalu — total {{duration}}.',
  findingLimitHit: 'Batas harian {{limit}} tercapai pada {{count}} hari.',
  findingBlockedApps:
    '{{count}} pembukaan aplikasi diblokir, dibanding {{previous}} minggu lalu.',
  findingBlockedWeb: '{{count}} situs difilter, dibanding {{previous}} minggu lalu.',
  findingQuietWeek:
    'Minggu yang tenang — total {{total}}, dan tidak ada yang perlu Anda tangani.',

  // Sisi positif laporan. Setiap kalimat menyebut apa yang terjadi dan angka di
  // baliknya; tidak ada yang memuji — `docs/COPY_STYLE.md` melarang rayuan
  // sekeras melarang nada cemas.
  findingLimitRespected: 'Batas harian {{limit}} terjaga selama {{count}} hari.',
  findingLateNightGone:
    'Tidak ada penggunaan larut malam minggu ini, setelah {{count}} malam minggu lalu.',
  findingBlockedAppsDown:
    '{{count}} pembukaan aplikasi diblokir, turun dari {{previous}} minggu lalu.',
  findingBlockedWebDown:
    '{{count}} situs difilter, turun dari {{previous}} minggu lalu.',
  findingLearningTime: '{{duration}} di aplikasi edukasi, sebagian besar di {{app}}.',
  findingTasksDone: '{{count}} tugas selesai, memperoleh {{bonus}}.',
  findingAskedFirst: '{{count}} permintaan dikirim, bukan mengakali aturan.',
  findingCheckedIn: 'Semua {{asked}} check-in terjawab.',

  narrativeTitle: 'Singkatnya',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'Satu hal yang bisa dilakukan',
  actionDailyLimit: 'Setel Batas harian {{duration}}',
  actionDailyLimitWhy: 'Itu rata-rata harian minggu lalu.',
  actionBlockedHours: 'Setel Jam Diblokir',
  actionBlockedHoursLateNight: 'Blokir jam larut malam',
  actionOnDevice: 'Di {{device}}',
  finePrint:
    'Angka mencakup {{from}} sampai {{to}}, dari semua perangkat dalam keluarga. Waktu layar adalah yang dilaporkan perangkat; menit yang tidak bisa mereka ukur tidak masuk ke total mana pun.',

  generate: 'Tulis laporan minggu ini',
  generating: 'Menulis…',
  share: 'Bagikan',
  copySummary: 'Salin ringkasan',
  copied: 'Ringkasan disalin.',
  shareFailed: 'Tidak bisa membuka menu berbagi.',

  emptyTitle: 'Belum ada laporan',
  emptyBody:
    'Laporan datang setiap Minggu malam. Anda juga bisa menulis laporan minggu ini sekarang — mencakup tujuh hari terakhir.',
  noUsage:
    'Tidak ada waktu layar yang tercatat selama dua minggu terakhir, jadi belum ada yang bisa dilaporkan. Perangkat yang offline tidak melaporkan apa pun, dan itu tidak sama dengan minggu yang tenang.',
  rateLimited: 'Terlalu banyak percobaan. Tunggu satu menit.',
  loadFailedTitle: 'Laporan gagal dimuat',
  loadFailed: 'Laporan tidak dapat dibuka. Tarik ke bawah untuk mencoba lagi.',
  failed: 'Laporan tidak bisa ditulis. Coba lagi sebentar lagi.',

  historyTitle: 'Minggu-minggu sebelumnya',
  historyEmpty:
    'Laporan yang Anda terima mulai sekarang disimpan di sini selama setahun.',

  hubToday: 'Hari ini',
  hubTodayEmpty: 'Belum ada perangkat yang melaporkan hari ini.',
  hubByChild: 'Per anak',
  hubByDevice: 'Per perangkat',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
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
  unnamedChild: 'Tanpa nama',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'kurang lebih sama',
  noLimit: 'Tanpa batas',
  noTopApp: '—',
  limitDays: '{{count}} hari',
  lateNightsNone: 'tidak ada',
  busiest: 'Waktu layar terbanyak',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'Yang akan Anda lihat',
  guestPreviewHint:
    'Contoh — angka sebenarnya muncul setelah Anda menghubungkan perangkat',
  guestTitle: 'Lihat ke mana perginya pekan ini',
  guestDescription:
    'Masuk untuk membandingkan hari ini dengan hari biasa, melihat anak-anak berdampingan, dan menerima laporan setiap Minggu.',
  guestBenefitTrendTitle: 'Hari ini, dibanding hari biasa',
  guestBenefitTrendBody:
    'Satu angka saja tidak berarti apa-apa. Hari ini selalu digambar terhadap rata-rata harian keluarga Anda sendiri.',
  guestBenefitChildTitle: 'Setiap anak, berdampingan',
  guestBenefitChildBody:
    'Bagian hari milik tiap anak, dalam warnanya sendiri, di seluruh perangkat yang dipakainya.',
  guestBenefitWeeklyTitle: 'Laporan setiap Minggu',
  guestBenefitWeeklyBody:
    'Apa yang berubah, aplikasi mana yang naik, dan malam-malam larut — disimpan selama setahun.',
  guestSignInButton: 'Masuk',
  guestCreateAccount: 'Buat akun orang tua',
} as const;
