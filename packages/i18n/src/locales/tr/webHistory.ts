export const webHistory = {
  title: 'Web geçmişi',
  fallbackDeviceName: 'Çocuk cihazı',
  summarySites: 'Görülen siteler',
  summaryBlocked: 'Engellenen siteler',
  sourceNoteIos:
    'iPhone’da bu veri Apple’ın Ekran Süresi raporundan gelir: çocuğunuzun vakit geçirdiği siteler, açtığı her sayfa değil.',
  sourceNoteAndroid:
    'Android’de bu veri KidGate DNS filtresinden gelir: bu telefonun sorguladığı siteler, açtığı her sayfa değil.',
  filterOffNoteAndroid:
    'Web filtresi kapalı, bu yüzden bu telefon hiçbir şey kaydetmiyor ve engellemiyor. Nereye gittiğini görmek için açın.',
  filterOffNoteIos:
    'Web filtresi kapalı, bu yüzden hiçbir şey engellenmiyor. Bu liste yalnızca telefonun nereye gittiğini gösterir.',
  filterAll: 'Tüm siteler',
  filterBlocked: 'Yalnızca engellenenler',
  emptyTitle: 'Henüz kayıt yok',
  emptyBody: 'KidGate çalışırken çocuk cihazı gezindiğinde siteler burada görünür.',
  emptyBlockedBody: 'Henüz hiçbir şey engellenmedi.',
  dayBlockedBadge: '{{count}} engellendi',
  visitsMeta: '{{count}} ziyaret',
  blockedMeta: '{{count}} kez engellendi · {{category}}',
  categoryUnknown: 'Engel listesi',
  showMoreDays: '{{count}} gün daha göster',
  rollupTitle: 'Zaman nereye gitti',
  rollupShare: '%{{percent}}',
  rollupNote:
    'Kaydedilen ziyaretlerin site türüne göre payı. Yalnızca Android — iPhone, KidGate’e bir alan adının türünü bildirmez.',
} as const;
