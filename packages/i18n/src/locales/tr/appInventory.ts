export const appInventory = {
  title: 'Bu cihazdaki uygulamalar',
  subtitle: 'KidGate’in kurulu bulduğu her şey; yalnızca değişenler değil.',
  summaryFlagged: '{{total}} uygulamadan {{flagged}} tanesi bakmaya değer',
  summaryClear: '{{total}} uygulama arasında işaretlenen yok',
  flaggedTitle: 'Bakmaya değer',
  otherTitle: 'Diğer her şey',
  unclassifiedTitle: 'Henüz tanımlanmadı',
  scannedLabel: 'Son tarama',
  staleNote: 'Bu liste güncel değil. Cihaz bir sonraki bağlantısında yenilenecek.',
  truncatedNote: 'Bulunan {{total}} uygulamadan {{shown}} tanesi gösteriliyor.',
  firstScanNote:
    'Bu ilk tarama, bu yüzden KidGate bunların ne zaman geldiğini söyleyemez.',
  newBadge: 'Yeni',
  ageBadge: '{{age}}+',
  emptyTitle: 'Henüz tarama yok',
  emptySubtitle: 'Cihaz, bir sonraki bağlantısında uygulama listesini gönderecek.',
  unsupportedTitle: 'Bu cihaz uygulamalarını listeleyemiyor',
  unsupportedIos:
    'Apple hiçbir uygulamanın iPhone veya iPad’de neyin kurulu olduğunu okumasına izin vermez; bu yüzden KidGate uygulamaları yalnızca kullanıldıkça bildirebilir.',
  unsupportedGeneric: 'Bu cihaz üzerinde kurulu uygulamaları bildirmiyor.',
  incompleteNote: 'Ana ekranda simgesi olmayan bir uygulama burada görünmeyebilir.',
  blockHint:
    'Bir uygulamayı durdurmak için cihazın kendisinde Engellenen Uygulamalar’ı açın.',
  howItWorksLabel: 'Bu liste nasıl çalışır',
} as const;
