/** Lihat `en/childReport.ts` — register sama, dan dua total itu tidak boleh disamakan. */
export const childReport = {
  title: 'Laporan',
  devicesCount: '{{count}} perangkat',

  periodToday: 'Hari ini',
  periodWeek: '7 hari',
  periodMonth: '30 hari',

  heroScreenOn: 'Waktu pemakaian sebenarnya',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Perkiraan — ada perangkat yang melaporkan berapa lama dipakai, tetapi tidak kapan.',
  heroOverlap:
    '{{value}} di antaranya dua layar sekaligus, yang terhitung dua kali saat perangkat dijumlahkan.',
  barsExplain:
    'Satu menit di dua perangkat sekaligus terhitung dua menit saat perangkat dijumlahkan.',
  heroEmpty: 'Belum ada penggunaan yang dilaporkan',

  trendUp: '{{value}} lebih banyak dari periode sebelumnya',
  trendDown: '{{value}} lebih sedikit dari periode sebelumnya',
  trendFlat: 'Kurang lebih sama dengan periode sebelumnya',
  trendFirst: 'Belum ada periode sebelumnya untuk dibandingkan',

  wellLateNights: 'Malam larut',
  coverage: 'Terukur {{percent}}% dari periode ini',
  coverageNone:
    'Tidak ada perangkat di sini yang bisa melaporkan kapan layarnya menyala',

  barCombined: 'Semua perangkat dijumlahkan',

  sectionDays: 'Per hari',
  backToPeriod: 'Kembali ke seluruh periode',
  bandLatestDay: 'Hari terukur terakhir',
  sectionWhen: 'Kapan layar menyala',
  bandMerged: 'Semua perangkat',
  bandTooThin: 'Terlalu sedikit dari hari ini yang terukur untuk digambar.',

  sectionDevices: 'Perangkat mana',
  deviceTotalsOnly: 'Hanya total',
  openDeviceReport: 'Buka laporan {{name}}',

  sectionApps: 'Paling banyak dipakai',
  appOnDevices: 'Di {{count}} perangkat',
  appsEmpty: 'Belum ada rincian per aplikasi.',

  emptyNoDevices: 'Belum ada perangkat yang ditetapkan untuk anak ini.',
  emptyAssign: 'Tetapkan perangkat',
  partialError:
    'Satu perangkat tidak dapat dibaca. Angka di bawah tidak menyertakannya.',
};
