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

  trendUp: 'Önceki haftadan {{value}} daha fazla',
  trendDown: 'Önceki haftadan {{value}} daha az',
  trendFlat: 'Önceki haftayla aşağı yukarı aynı',
  trendFirstWeek: 'Ölçülen ilk hafta',
  barThisWeek: 'Bu hafta',
  barLastWeek: 'Geçen hafta',

  highlights: 'Bilmekte fayda var',
  sevAttention: 'Bakmaya değer',
  sevNotable: 'Dikkat çekici',
  sevInfo: 'Bilginize',

  findingUsageUp: 'Ekran süresi %{{percent}} arttı — geçen haftadan {{delta}} fazla.',
  findingUsageDown: 'Ekran süresi %{{percent}} azaldı — geçen haftadan {{delta}} az.',
  findingUsageFlat: 'Ekran süresi {{total}} seviyesinde kaldı.',
  findingLateNight: '23.00’ten sonra {{count}} gece — en geç {{time}} saatine kadar.',
  findingNewTopApp: '{{app}} bu hafta yeni ve şimdiden {{duration}} aldı.',
  findingAppSurge: '{{app}} geçen haftaya göre {{delta}} arttı — toplam {{duration}}.',
  findingLimitHit: '{{limit}} olan günlük sınıra {{count}} gün ulaşıldı.',
  findingBlockedApps:
    'Engellenen {{count}} uygulama açılışı; geçen hafta {{previous}} idi.',
  findingBlockedWeb: '{{count}} site filtrelendi; geçen hafta {{previous}} idi.',
  findingQuietWeek:
    'Sakin bir hafta — toplam {{total}} ve sizi gerektiren hiçbir şey yok.',

  // Raporun olumlu yarısı. Her cümle ne olduğunu ve arkasındaki sayıyı söyler;
  // hiçbiri övmez — `docs/COPY_STYLE.md` yaltaklanmayı da alarmı da yasaklar.
  // "Engellenen", asla tek başına "Engelli".
  findingLimitRespected: '{{limit}} günlük sınır {{count}} gün boyunca korundu.',
  findingLateNightGone:
    'Bu hafta geç saatte kullanım yok; geçen hafta {{count}} geceydi.',
  findingBlockedAppsDown:
    'Engellenen {{count}} uygulama açılışı, geçen hafta {{previous}}.',
  findingBlockedWebDown: 'Filtrelenen {{count}} site, geçen hafta {{previous}}.',
  findingLearningTime: 'Eğitim uygulamalarında {{duration}}, çoğu {{app}}.',
  findingTasksDone: '{{count}} görev tamamlandı, {{bonus}} kazanıldı.',
  findingAskedFirst: 'Kuralları aşmak yerine {{count}} istek gönderildi.',
  findingCheckedIn: '{{asked}} Check-In’in tamamı yanıtlandı.',

  narrativeTitle: 'Tek cümleyle',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'Yapılabilecek bir şey',
  actionDailyLimit: '{{duration}} Günlük sınır belirle',
  actionDailyLimitWhy: 'Geçen haftanın günlük ortalaması buydu.',
  actionBlockedHours: 'Engellenen Saatler belirle',
  actionBlockedHoursLateNight: 'Gece geç saatleri engelle',
  actionOnDevice: '{{device}} cihazında',
  finePrint:
    'Rakamlar {{from}} – {{to}} aralığını, ailedeki tüm cihazlar için kapsar. Ekran süresi cihazların bildirdiğidir; ölçemedikleri dakikalar hiçbir toplamda yer almaz.',

  generate: 'Bu haftanın raporunu yaz',
  generating: 'Yazılıyor…',
  share: 'Paylaş',
  copySummary: 'Özeti kopyala',
  copied: 'Özet kopyalandı.',
  shareFailed: 'Paylaşım menüsü açılamadı.',
  shareFooterDesc:
    'KidGate, ebeveynlerin ekran süresini, konumu ve mesajları görmesine yardımcı olur.',
  shareFooterCta: 'Uygulamayı kidgate.app/get adresinden indirin',

  emptyTitle: 'Henüz rapor yok',
  emptyBody:
    'Rapor her pazar akşamı gelir. Bu haftanınkini şimdi de yazabilirsiniz — son yedi günü kapsar.',
  noUsage:
    'Son iki haftada ekran süresi kaydedilmedi, bu yüzden henüz raporlanacak bir şey yok. Çevrimdışı bir cihaz hiçbir şey bildirmez ve bu, sakin bir haftayla aynı şey değildir.',
  rateLimited: 'Çok fazla deneme. Bir dakika bekleyin.',
  loadFailedTitle: 'Raporlar yüklenemedi',
  loadFailed: 'Raporlar açılamadı. Yeniden denemek için aşağı çekin.',
  failed: 'Rapor yazılamadı. Birazdan tekrar deneyin.',

  historyTitle: 'Önceki haftalar',
  historyEmpty: 'Bundan sonra aldığınız raporlar burada bir yıl saklanır.',

  hubToday: 'Bugün',
  hubTodayEmpty: 'Bugün henüz hiçbir cihaz veri bildirmedi.',
  hubByChild: 'Çocuğa göre',
  hubByDevice: 'Cihaza göre',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Her çocuk',
  childrenNote: 'Aynı iki hafta, cihaz başına. Yüzdeler ailenin toplamına göredir.',
  colChild: 'Çocuk',
  colScreenTime: 'Ekran süresi',
  colShare: 'Pay',
  colChange: 'Geçen haftaya göre',
  colLimit: 'Sınırın üzerinde',
  colLateNights: 'Geç saatler',
  colTopApp: 'En çok kullanılan',
  unnamedChild: 'Adsız',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'hemen hemen aynı',
  noLimit: 'Sınır yok',
  noTopApp: '—',
  limitDays: '{{count}} gün',
  lateNightsNone: 'yok',
  busiest: 'En çok ekran süresi',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'Görecekleriniz',
  guestPreviewHint: 'Örnek — gerçek rakamlar bir cihaz bağladığınızda görünür',
  guestTitle: 'Hafta nereye gitti, görün',
  guestDescription:
    'Bugünü normal bir günle ölçmek, çocuklarınızı yan yana karşılaştırmak ve her pazar bir rapor almak için giriş yapın.',
  guestBenefitTrendTitle: 'Bugün, normale karşı',
  guestBenefitTrendBody:
    'Tek başına bir rakam hiçbir şey söylemez. Bugün her zaman ailenizin kendi günlük ortalamasına karşı çizilir.',
  guestBenefitChildTitle: 'Her çocuk, yan yana',
  guestBenefitChildBody:
    'Her çocuğun günden aldığı pay, kendi renginde, kullandığı tüm cihazlar boyunca.',
  guestBenefitWeeklyTitle: 'Her pazar bir rapor',
  guestBenefitWeeklyBody:
    'Ne değişti, hangi uygulamalar arttı ve geç saatler — bir yıl boyunca saklanır.',
  guestSignInButton: 'Giriş yap',
  guestCreateAccount: 'Ebeveyn hesabı oluştur',
} as const;
