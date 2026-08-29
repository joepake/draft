export const messageMonitoring = {
  actionTitle: 'Mesaj uyarıları',
  actionDescription: 'Mesajlarda endişe verici kelimeler göründüğünde uyarı alın',
  title: 'Mesaj uyarıları',
  heroTitle: 'Mesaj güvenliği',
  heroSubtitle:
    'KidGate çocuğunuzun mesajlarındaki endişe verici kelimeleri işaretler ve sizi uyarır. Mesajın kendisi asla gösterilmez — yalnızca işaretlenen kelime.',
  androidOnlyNote: 'Yalnızca Android cihazlarda kullanılabilir.',
  recentTitle: 'Son uyarılar',
  emptyTitle: 'Henüz uyarı yok',
  emptySubtitle: 'Mesajlarda endişe verici kelime görülmedi.',
  emptySubtitleNotWatching:
    'Mesajlar şu anda kontrol edilmiyor, bu yüzden ne olursa olsun bu liste boş kalacak.',
  flaggedTerm: 'İşaretlenen kelime: “{{term}}”',
  flaggedTermPrefix: 'İşaretlenen kelime: “',
  flaggedTermSuffix: '”',
  aiConfirmed: 'Yapay zeka tarafından onaylandı',
  categoryPredator: 'Olası istismar',
  categorySelfHarm: 'Olası kendine zarar',
  categoryExplicit: 'Müstehcen içerik',
  categoryViolence: 'Tehdit veya şiddet',
  categoryBullying: 'Zorbalık',
  categoryDrugs: 'Uyuşturucu veya madde',
  categoryAlcohol: 'Alkol',
  categoryTobacco: 'Tütün veya elektronik sigara',
  categoryGambling: 'Kumar',
  categoryProfanity: 'Kaba dil',
  categoryUnknown: 'İşaretlenen mesaj',
  setupTitle: 'Mesaj güvenliği',
  setupBody:
    'Mesajları endişe verici kelimeler için izler. KidGate mesajı asla göstermez — yalnızca endişe verici bir şey çıkarsa uyarı verir.',
  setupGrant: 'Bildirim erişimine izin ver',
  setupEnable: 'Mesaj güvenliği',
  controlledByParentHint:
    'Buradan değil, ebeveynin telefonundaki KidGate uygulamasından açılıp kapatılır.',
  parentIncomingLabel: 'Gelen mesajları tara',
  parentOutgoingLabel: 'Yazılan mesajları tara',
  parentToggleHintGranted: 'Bu telefonda.',
  parentToggleHintNotGranted:
    'Bu telefonda henüz izin verilmedi — izin vermek için onun cihazında KidGate’i aç.',
  parentToggleSaveFailed: 'Değişiklik kaydedilemedi.',
  settingsTitle: 'Mesaj uyarısı ayarları',
  checkedTitle: 'Bakıldı, sorun yok',
  checkedSubtitle:
    'İzlenen kelimeler göründü ama bağlam içinde zararsız çıktı, bu yüzden size bildirim gitmedi. Sizin adınıza nelerin elendiğini görebilesiniz diye burada gösteriliyor — içlerinden biri size ulaşmalıysa bize söyleyin.',
  consentTitle: 'Yapay zekâ ile mesaj analizi',
  consentBody:
    'Açıkken, bir anahtar kelimenin sınırda işaretlediği mesajlar — adlar, numaralar ve bağlantılar çıkarılarak — gerçekten endişe verici olup olmadığını doğrulamak için sizi uyarmadan önce bir yapay zekâ hizmetine gönderilir. Yüksek riskli kelimeler hiçbir şey göndermeden anında uyarmaya devam eder.',
  consentEnable: 'Yapay zekâ analizini aç',
  consentConfirmTitle: 'Yapay zekâ ile mesaj analizi açılsın mı?',
  consentConfirmBody:
    'Kişisel bilgileri çıkarılmış sınırdaki mesajlar, kontrol için bir yapay zekâ hizmetine gönderilecek. Bu işleme onay verdiğinizi doğruluyorsunuz.',
  consentAgree: 'Kabul ediyorum',
  outgoingTitle: 'Yazdığın mesajlar',
  outgoingBody:
    'KidGate sohbet uygulamalarında yazdıklarını da kontrol edebilir. Aynı uyarı kelimelerini, bu telefonda arar. Mesajların hiçbir yere gönderilmez.',
  outgoingEnable: 'Yazdıklarımı kontrol et',
  outgoingGrant: 'İzin ver',
  directionIncoming: 'Gelen',
  directionOutgoing: 'Giden',
  alertBodyIncoming: 'Uygulamadan mesaj',
  alertBodyOutgoing: 'Uygulamadan gönderilen mesaj',
  aiLegend:
    'Bu simgeye sahip bir uyarı, size bildirilmeden önce yapay zeka tarafından onaylandı.',
  setupRevoked:
    'Android bunun için gereken izni kapattı. Mesajların kontrol edilmeye devam etmesi için izni yeniden ver.',
  outgoingRevoked:
    'Android bunu kapattı. Yazdıklarının kontrol edilmeye devam etmesi için izni yeniden ver.',
  outgoingDisclosureTitle: 'İzin vermeden önce',
  outgoingDisclosureBody:
    'KidGate yalnızca mesajlaşma uygulamalarında yazdıklarını okur — başka hiçbir uygulamada ve asla parola alanında okumaz. Uyarı sözcükleri bu telefonda aranır. Mesajların hiçbir yere gönderilmez; ailene yalnızca işaretlenen sözcük ulaşır.',
  outgoingRestrictedHint:
    'Anahtar soluk görünüyorsa Ayarlar › Uygulamalar › KidGate yolunu açıp ⋮ menüsüne dokun ve “Kısıtlanmış ayarlara izin ver” seçeneğini seç, sonra buraya dön.',
  notice: {
    revokedTitle: 'Mesaj kontrolü durdu',
    revokedBody:
      'Android, KidGate’in ihtiyaç duyduğu bir izni kapattı; mesajlar artık kontrol edilmiyor. Çocuğunuzun cihazında KidGate’i açıp izni yeniden verin.',
    offTitle: 'Mesaj güvenliği açık değil',
    offBody:
      'Çocuğunuzun cihazında hiçbir şey kontrol edilmiyor, bu yüzden burada uyarı çıkamaz. Kurmak için cihazında KidGate’i açın.',
    pendingTitle: 'Çocuğunuzun cihazının bunu uygulaması bekleniyor',
    pendingBody:
      'Bunu açtınız. Çocuğunuzun cihazı değişikliği bir sonraki bağlanışında alacak, genelde birkaç dakika içinde — telefon kullanılıyorsa daha da hızlı. Yapmanız gereken başka bir şey yok.',
    unknownTitle: 'Cihazdan yanıt bekleniyor',
    unknownBody:
      'Bu cihaz mesaj güvenliğinin çalışıp çalışmadığını henüz bildirmedi, bu yüzden boş liste pek bir şey söylemiyor. Cihaz bir sonraki bağlantısında güncellenecektir.',
    outgoingAvailableTitle: 'Çocuğunuzun yazdıklarını da kontrol edin',
    outgoingAvailableBody:
      'Gelen mesajlar zaten kontrol ediliyor. KidGate, çocuğunuzun mesajlaşma uygulamalarında yazdıklarını da kontrol edebilir — zorbalık ve kendine zarar verme orada çok daha sık görülür. Cihazında kurun.',
  },
  languagesLabel: 'Taranan diller',
  languagesHint:
    'Bu cihazın endişe verici kelimeleri hangi dillerde aradığı. En fazla {{max}} tane seçin.',
  languagesDefaultHint: 'Varsayılan olarak cihazın dili kullanılır.',
} as const;
