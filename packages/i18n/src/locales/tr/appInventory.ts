export const appInventory = {
  title: 'Bu cihazdaki uygulamalar',
  pendingTitle: 'Onayınız bekleniyor',
  pendingBadge: 'İzin verene kadar engelli',
  approvedBadge: 'Sizin tarafınızdan izin verildi',
  installedAtLabel: '{{when}} yüklendi',
  allowApp: 'İzin ver',
  subtitle: 'KidGate’in kurulu bulduğu her şey; yalnızca değişenler değil.',
  summaryFlagged: '{{total}} uygulamadan {{flagged}} tanesi bakmaya değer',
  summaryClear: '{{total}} uygulama arasında işaretlenen yok',
  flaggedTitle: 'Bakmaya değer',
  otherTitle: 'Diğer her şey',
  scannedLabel: 'Son tarama',
  staleNote: 'Bu liste güncel değil. Cihaz bir sonraki bağlantısında yenilenecek.',
  truncatedNote: 'Bulunan {{total}} uygulamadan {{shown}} tanesi gösteriliyor.',
  firstScanNote:
    'Bu ilk tarama, bu yüzden KidGate bunların ne zaman geldiğini söyleyemez.',
  newBadge: 'Yeni',
  ageBadge: '{{age}}+',
  browserExtension: 'Chrome uzantısı',
  titleExtension: 'Bu tarayıcıdaki uzantılar',
  subtitleExtension:
    'KidGate’in tarayıcıda bulduğu tüm uzantılar, yalnızca değişenler değil.',
  summaryFlaggedExtension:
    '{{total}} Chrome uzantısından {{flagged}} tanesi bakmaya değer',
  summaryClearExtension: '{{total}} Chrome uzantısı arasında dikkat çeken bir şey yok',
  incompleteNoteExtension:
    'Burada yalnızca tarayıcı uzantıları listelenir — cihaza kurulu uygulamaları bir tarayıcı göremez.',
  blockHintExtension:
    'Bir uzantıyı kaldırmak için o cihazda tarayıcının uzantılar sayfasını açın.',
  emptyTitleExtension: 'Henüz tarama yok',
  emptySubtitleExtension:
    'Tarayıcı, uzantı listesini bir sonraki bağlantıda gönderecek.',
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
  markSafe: 'Güvenli',
  dismissedTitle: 'Güvenli olarak işaretledikleriniz',
  undoSafe: 'Geri al',
  howToBlock: 'Nasıl engellenir',
} as const;
