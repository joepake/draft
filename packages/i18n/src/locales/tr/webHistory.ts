export const webHistory = {
  title: 'Web geçmişi',
  fallbackDeviceName: 'Çocuk cihazı',
  syncNote:
    'Web geçmişinin bu ekrana yansıması yaklaşık 15 dakikayı bulabilir — cihazın internet bağlantısı yoksa veya beklenmedik şekilde kapandıysa bu süre daha uzun olabilir.',
  syncNoteIos:
    'iPhone’da web geçmişi ancak KidGate çocuğun cihazında çalıştıktan sonra gelir; uygulama açılmadıysa saatlerce geriden gelebilir.',
  syncNoteTv:
    'Bu TV yalnızca belirli aralıklarla bağlanır, bu yüzden web geçmişinin bu ekrana yansıması bir saate kadar sürebilir — internet bağlantısı yoksa bu süre daha da uzar.',
  summarySites: 'Görülen siteler',
  summaryBlocked: 'Engellenen siteler',
  sourceNoteIos:
    'iPhone’da bu veri Apple’ın Ekran Süresi raporundan gelir: çocuğunuzun vakit geçirdiği siteler, açtığı her sayfa değil.',
  sourceNoteFilter:
    'Bu veri KidGate filtresinden gelir: bu cihazın sorguladığı siteler, açılan her sayfa değil.',
  backgroundNote:
    'Cihazı kimse kullanmazken de bazı uygulamalar arka planda internete bağlanır: güncellemeler, öneriler ve kontroller kendiliğinden çalışır.',
  sourceNoteExtension:
    'Bu tarayıcıda KidGate gerçekten açılan sayfaları görür — yalnızca bu tarayıcı, bilgisayarın tamamı değil.',
  filterOffNoteAndroid:
    'Web Filtresi kapalı, bu yüzden bu cihaz hiçbir şey kaydetmiyor ve engellemiyor. Cihazın hangi sitelere girdiğini görmek için açın.',
  filterOffNoteMacos:
    'Web filtresi kapalı, bu yüzden bu Mac hiçbir şey kaydetmiyor ve engellemiyor. Nereye gittiğini görmek için açın.',
  filterOffNoteIos:
    'Web Filtresi kapalı, bu yüzden hiçbir şey engellenmiyor. Bu liste yalnızca telefonun girdiği siteleri gösterir.',
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
    'KidGate’in {{category}} olarak sınıflandırdığı her site bu cihazda reddedilecek. Web Filtresi’nden yeniden kapatabilirsiniz.',
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
  rollupTitleMinutes: 'Site türüne göre süre',
  rollupShare: '%{{percent}}',
  rollupNote:
    'Dakika değil, sorgu sayısı — uzun bir video birkaç sorgu, on dakikalık gezinme onlarca sorgu demektir.',
  rollupNoteAi:
    'Bazı türler bilinen bir siteyle eşleştirilmek yerine site adından çıkarıldı, bu yüzden birkaçı yanlış olabilir.',
  rollupNoteExtension:
    'Dakika değil, sayfa sayısı — uzun bir video bir kez, on dakika gezinme onlarca sayılır.',
  rollupNoteMinutes:
    'Ziyaret değil, dakika — Apple’ın Ekran Süresi raporuna göre her sitede geçirilen süre.',
  hoursTitle: 'Ne zaman gezindi',
  hoursNote:
    'Saate göre yüklenen sayfa sayısı, cihazın saatiyle. Bütün öğleden sonra açık kalan sekme bir kez sayılır.',
  hoursEmpty: 'Bugün henüz sayfa yok.',
  sourceNoteChild:
    '{{count}} cihazdan birleştirildi. Her cihaz yalnızca kendi filtresinin gördüğünü kaydeder.',
  filterOffNoteChild:
    'Web filtresi tüm cihazlarda kapalı, bu yüzden yeni ziyaretler kaydedilmiyor.',
  filterOffNoteChildIos:
    'Web filtresi tüm cihazlarda kapalı, bu yüzden hiçbir şey engellenmiyor. Siteleri yalnızca iPhone ve iPad’ler Ekran Süresi aracılığıyla bildirmeye devam ediyor.',
} as const;
