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

  narrativeTitle: 'Singkatnya',
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
    'Tidak ada waktu layar yang tercatat selama dua minggu terakhir, jadi belum ada yang bisa dilaporkan. Perangkat yang mati tidak melaporkan apa pun, dan itu tidak sama dengan minggu yang tenang.',
  rateLimited: 'Terlalu banyak percobaan. Tunggu satu menit.',
  failed: 'Laporan tidak bisa ditulis. Coba lagi sebentar lagi.',

  historyTitle: 'Minggu-minggu sebelumnya',
  historyEmpty:
    'Laporan yang Anda terima mulai sekarang disimpan di sini selama setahun.',
} as const;
