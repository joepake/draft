/** Bkz. `en/childReport.ts` — aynı üslup, ve iki toplam birbirine karıştırılmamalı. */
export const childReport = {
  title: 'Rapor',
  devicesCount: '{{count}} cihaz',

  periodToday: 'Bugün',
  periodWeek: '7 gün',
  periodMonth: '30 gün',

  heroScreenOn: 'Gerçek kullanım süresi',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Bir tahmin — bir cihaz ne kadar kullanıldığını bildiriyor ama ne zaman kullanıldığını bildirmiyor.',
  heroOverlap:
    'Bunun {{value}} kadarı aynı anda iki ekranda; cihazlar toplanırken iki kez sayılıyor.',
  barsExplain:
    'Aynı anda iki cihazda geçen bir dakika, cihazlar toplanırken iki dakika sayılır.',
  heroEmpty: 'Henüz kullanım bildirilmedi',

  trendUp: 'Önceki dönemden {{value}} fazla',
  trendDown: 'Önceki dönemden {{value}} az',
  trendFlat: 'Önceki dönemle aşağı yukarı aynı',
  trendFirst: 'Karşılaştırılacak önceki dönem yok',

  coverage: 'Bu dönemin %{{percent}} kadarı ölçüldü',
  wellLateNights: 'Geç saatler',
  coverageNone: 'Buradaki hiçbir cihaz ekranının ne zaman açık olduğunu bildiremiyor',

  barCombined: 'Tüm cihazların toplamı',

  sectionDays: 'Gün gün',
  backToPeriod: 'Tüm döneme geri dön',
  bandLatestDay: 'Ölçülen son gün',
  sectionWhen: 'Ekranlar ne zaman açıktı',
  bandMerged: 'Tüm cihazlar',
  bandTooThin: 'Bu günün ölçülen kısmı çizilemeyecek kadar az.',

  sectionDevices: 'Hangi cihaz',
  deviceTotalsOnly: 'Yalnızca toplam',
  openDeviceReport: '{{name}} raporunu aç',

  sectionApps: 'En çok kullanılan',
  appOnDevices: '{{count}} cihazda',
  appsEmpty: 'Henüz uygulama dökümü bildirilmedi.',

  emptyNoDevices: 'Bu çocuğa henüz bir cihaz atanmadı.',
  emptyAssign: 'Cihaz ata',
  partialError: 'Bir cihaz okunamadı. Aşağıdaki sayılar onu içermiyor.',
};
