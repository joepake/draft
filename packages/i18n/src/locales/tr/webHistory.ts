export const webHistory = {
  title: 'Web geçmişi',
  fallbackDeviceName: 'Çocuk cihazı',
  syncNote:
    'Web geçmişinin bu ekrana yansıması birkaç dakika sürebilir — cihazın internet bağlantısı yoksa veya beklenmedik şekilde kapandıysa bu süre daha uzun olabilir.',
  syncNoteTv:
    'Bu TV yalnızca belirli aralıklarla bağlanır, bu yüzden web geçmişinin bu ekrana yansıması 30 dakikaya kadar sürebilir — internet bağlantısı yoksa bu süre daha da uzar.',
  summarySites: 'Görülen siteler',
  summaryBlocked: 'Engellenen siteler',
  sourceNoteIos:
    'iPhone’da bu veri Apple’ın Ekran Süresi raporundan gelir: çocuğunuzun vakit geçirdiği siteler, açtığı her sayfa değil.',
  sourceNoteAndroid:
    'Android’de bu veri KidGate DNS filtresinden gelir: bu telefonun sorguladığı siteler, açtığı her sayfa değil.',
  sourceNoteMacos:
    'Mac’te bu veri KidGate filtresinden gelir: bu Mac’in sorguladığı siteler, açtığı her sayfa değil.',
  sourceNoteExtension:
    'Bu tarayıcıda KidGate gerçekten açılan sayfaları görür — yalnızca bu tarayıcı, bilgisayarın tamamı değil.',
  filterOffNoteAndroid:
    'Web filtresi kapalı, bu yüzden bu cihaz hiçbir şey kaydetmiyor ve engellemiyor. Nereye gittiğini görmek için açın.',
  filterOffNoteMacos:
    'Web filtresi kapalı, bu yüzden bu Mac hiçbir şey kaydetmiyor ve engellemiyor. Nereye gittiğini görmek için açın.',
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
  sectionUncategorized: 'Diğer siteler',
  blockCategory: '{{category}} engelle',
  blockCategoryConfirmTitle: '{{category}} engellensin mi?',
  blockCategoryConfirmBody:
    'KidGate’in {{category}} olarak sınıflandırdığı her site bu cihazda reddedilecek. Web Filtresi’nden yeniden kapatabilirsin.',
  blockCategoryConfirmAction: 'Engelle',
  blockCategoryDone: '{{category}} artık engelli.',
  unblockCategory: '{{category}} engelini kaldır',
  unblockCategoryConfirmTitle: '{{category}} engeli kaldırılsın mı?',
  unblockCategoryConfirmBody:
    'KidGate’in {{category}} olarak sınıflandırdığı siteler bu cihazda yeniden açılacak.',
  unblockCategoryConfirmAction: 'Engeli kaldır',
  unblockCategoryDone: '{{category}} artık engelli değil.',
  serviceSites: '{{count}} site',
  serviceNote:
    'Bir hizmetin kendi yüklediği siteler tek satırda toplanır: YouTube’u bir kez açmak birkaçına ulaşır. Görmek için satıra dokun.',
  showMoreDays: '{{count}} gün daha göster',
  rollupTitle: 'Site türüne göre ziyaretler',
  rollupShare: '%{{percent}}',
  rollupNote:
    'Dakika değil, sorgu sayısı — uzun bir video birkaç tane, on dakika gezinme onlarca eder.',
  rollupNoteAi:
    'Bazı türler bilinen bir siteyle eşleştirilmek yerine site adından çıkarıldı, bu yüzden birkaçı yanlış olabilir.',
  rollupNoteExtension:
    'Dakika değil, sayfa sayısı — uzun bir video bir kez, on dakika gezinme onlarca sayılır.',
  hoursTitle: 'Ne zaman gezindi',
  hoursNote:
    'Saate göre yüklenen sayfa sayısı, cihazın saatiyle. Bütün öğleden sonra açık kalan sekme bir kez sayılır.',
  hoursEmpty: 'Bugün henüz sayfa yok.',
  sourceNoteChild:
    '{{count}} cihazdan birleştirildi. Her cihaz yalnızca kendi filtresinin gördüğünü kaydeder.',
  filterOffNoteChild:
    'Web filtresi tüm cihazlarda kapalı, bu yüzden yeni ziyaretler kaydedilmiyor.',
} as const;
