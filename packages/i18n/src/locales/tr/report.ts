export const report = {
  title: 'Haftalık rapor',
  subtitle: 'KidGate’in bu hafta fark ettikleri.',
  weekOf: '{{week}}. hafta',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Pazar günü gönderildi',
  triggerManual: 'Siz oluşturdunuz',

  statScreenTime: 'Ekran süresi',
  statDailyAverage: 'Günlük ortalama',
  statBlockedApps: 'Engellenen uygulamalar',
  statBlockedWebVisits: 'Filtrelenen siteler',

  trendUp: 'önceki haftadan {{value}} fazla',
  trendDown: 'önceki haftadan {{value}} az',
  trendFlat: 'Önceki haftayla aşağı yukarı aynı',
  trendFirstWeek: 'Ölçülen ilk hafta',
  barThisWeek: 'Bu hafta',
  barLastWeek: 'Geçen hafta',

  highlights: 'Bilmekte fayda var',
  sevAttention: 'Bakmakta fayda var',
  sevNotable: 'Dikkat çekici',
  sevInfo: 'Bilginize',

  findingUsageUp: 'Ekran süresi %{{percent}} arttı — geçen haftadan {{delta}} fazla.',
  findingUsageDown: 'Ekran süresi %{{percent}} azaldı — geçen haftadan {{delta}} az.',
  findingUsageFlat: 'Ekran süresi {{total}} seviyesinde kaldı.',
  findingLateNight: '23.00’ten sonra {{count}} gece — en geçi {{time}} sularına kadar.',
  findingNewTopApp: '{{app}} bu hafta yeni ve şimdiden {{duration}} aldı.',
  findingAppSurge: '{{app}} geçen haftaya göre {{delta}} arttı — toplam {{duration}}.',
  findingLimitHit: '{{limit}} olan günlük sınıra {{count}} gün ulaşıldı.',
  findingBlockedApps:
    'Engellenen {{count}} uygulama açılışı; geçen hafta {{previous}} idi.',
  findingBlockedWeb: '{{count}} site filtrelendi; geçen hafta {{previous}} idi.',
  findingQuietWeek:
    'Sakin bir hafta — toplam {{total}} ve sizi gerektiren hiçbir şey yok.',

  narrativeTitle: 'Tek cümleyle',
  finePrint:
    'Rakamlar {{from}} – {{to}} aralığını, ailedeki tüm cihazlar için kapsar. Ekran süresi cihazların bildirdiğidir; ölçemedikleri dakikalar hiçbir toplamda yer almaz.',

  generate: 'Bu haftanın raporunu yaz',
  generating: 'Yazılıyor…',
  share: 'Paylaş',
  copySummary: 'Özeti kopyala',
  copied: 'Özet kopyalandı.',
  shareFailed: 'Paylaşım menüsü açılamadı.',

  emptyTitle: 'Henüz rapor yok',
  emptyBody:
    'Rapor her pazar akşamı gelir. Bu haftanınkini şimdi de yazabilirsiniz — son yedi günü kapsar.',
  noUsage:
    'Son iki haftada ekran süresi kaydedilmedi, bu yüzden henüz raporlanacak bir şey yok. Kapalı bir cihaz hiçbir şey bildirmez ve bu, sakin bir haftayla aynı şey değildir.',
  rateLimited: 'Çok fazla deneme. Bir dakika bekleyin.',
  failed: 'Rapor yazılamadı. Birazdan tekrar deneyin.',

  historyTitle: 'Önceki haftalar',
  historyEmpty: 'Bundan sonra aldığınız raporlar burada bir yıl saklanır.',
} as const;
