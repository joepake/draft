export const webFilter = {
  title: 'Web filtresi',
  fallbackDeviceName: 'Çocuk cihazı',
  toastUpdateFailed: 'Web filtresi güncellenemedi. Lütfen tekrar deneyin.',
  heroTitle: 'Yetişkin sitelerini filtrele',
  heroSubtitleIos:
    'Çocuğun cihazındaki Safari ve uygulama içi tarayıcılarda yetişkin içeriği sınırlamak için Apple Ekran Süresi web içerik filtresini kullanır.',
  heroSubtitleAndroid:
    'Bilinen yetişkin alan adlarını tarayıcılarda ve birçok uygulamada engellemek için çocuğun Android cihazında yerel bir DNS VPN kullanır.',
  toggleLabel: 'Web filtresini aç',
  toggleHintIos: 'Çocuk cihazında Ekran Süresi izni gerektirir.',
  toggleHintAndroid:
    'Çocuğun KidGate VPN bağlantısını bir kez onaylaması gerekir. Filtrenin çalışması için VPN’i açık tutun.',
  toggleAccessibilityLabel: 'Web filtresini aç',
  infoTitle: 'Nasıl çalışır',
  infoLine1Ios: 'Apple yetişkin sitelerini otomatik olarak filtreler.',
  infoLine2Ios:
    'Safari’de Apple’ın yetişkin içerik filtresini kullanır; diğer uygulamaların içindeki her şeyi engellemez.',
  infoLine3Ios:
    'Çocuk cihazındaki uygulama denetimleri eşitlediğinde KidGate ayarı otomatik uygular.',
  infoLine1Android:
    'KidGate, DNS’i yetişkin alan adlarına karşı denetleyen ve bazı şifreli DNS çözümleyicilerini engelleyen yerel bir VPN başlatır.',
  infoLine2Android:
    'Çocuk cihazında Özel DNS’i kapatın. Açıksa tarayıcılar filtreyi atlayabilir.',
  infoLine3Android:
    'Filtreleme sırasında çocuk cihazında bir VPN simgesi görünür. VPN’i kapatmak filtreyi durdurur — geri getirmek için KidGate’i yeniden açın.',
  infoLine4Android: 'Ayarlar → Ağ ve internet → Özel DNS → Kapalı yolunu izleyin.',
  privateDnsBannerTitle: 'Özel DNS’i kapatın',
  privateDnsBannerBody:
    'Özel DNS açık olduğundan yetişkin web filtresi atlanabilir. Filtrenin çalışması için kapatın.',
  privateDnsBannerButton: 'DNS ayarlarını aç',
  vpnConsentBannerTitle: 'Web filtresi VPN’ini geri getir',
  vpnConsentBannerBody:
    'KidGate VPN kapalı. Yetişkin web filtresi VPN bağlantısının sürmesini gerektirir.',
  vpnConsentBannerButton: 'VPN’i aç',
  iosOnlyNote: 'iOS’ta Ekran Süresi kullanır',
  androidVpnNote: 'Android’de yerel DNS VPN kullanır',
  webFilteringNote:
    'iOS, Ekran Süresi yetişkin filtresini; Android, yerel DNS VPN engel listesini kullanır.',
  safeSearchAlertsNote:
    'Safari arama terimlerini paylaşmaz; anahtar kelime uyarıları yönetilen güvenli bir tarayıcı gerektirir.',
  webHistoryNote: 'Filtreli bir tarayıcı veya DNS/VPN tarzı raporlama gerektirir.',
  categoriesTitle: 'Neler engellensin',
  categoriesSubtitle:
    'KidGate kendi alan adı listelerini kullanır. Çocukların gerçekten ulaştığı siteleri kapsar, tüm web’i değil — aşağıdaki listelerle birlikte kullanın.',
  androidOnlyCategory: 'Yalnızca Android — iOS’ta kategori bazlı web denetimi yok',
  iosCategoryNote:
    'iPhone yalnızca {{category}} destekler, Apple’ın kendi filtresiyle. Diğer kategoriler Android cihazlar için geçerlidir.',
  allowListTitle: 'Her zaman izin ver',
  allowListSubtitle: 'Bir kategori engelleyecek olsa bile erişilebilir kalan siteler.',
  allowListEmpty: 'Henüz istisna yok.',
  allowListInputAccessibility: 'Her zaman izinli site ekle',
  blockListTitle: 'Her zaman engelle',
  blockListSubtitle: 'Kategoriler ne derse desin reddedilen siteler.',
  blockListEmpty: 'Henüz engellenen site yok.',
  blockListInputAccessibility: 'Her zaman engelli site ekle',
  allowListOnlyLabel: 'Yalnızca izinli siteler',
  allowListOnlyHintAndroid:
    'İzin listenizin dışındaki her şey reddedilir. DNS katmanında çalışır, bu yüzden diğer uygulamalar da bağlantısını kaybeder.',
  allowListOnlyHintIos:
    'Safari ve uygulama içi tarayıcılar yalnızca listenizdeki siteleri açabilir.',
  allowListOnlyNeedsEntries: 'Açmadan önce en az bir izinli site ekleyin.',
  domainPlaceholder: 'ornek.com',
  addDomain: 'Site ekle',
  removeDomain: '{{domain}} kaldır',
  invalidDomain: 'ornek.com gibi bir adres girin',
  listFull: 'Bu listeye en fazla {{max}} site kaydedebilirsiniz.',
  openHistory: 'Web geçmişi',
  openHistorySubtitle:
    'Bu telefonun hangi sitelere ulaştığını ve neyin engellendiğini görün',
  category: {
    adult: 'Yetişkin içerik',
    gambling: 'Kumar',
    dating: 'Flört',
    drugs: 'Uyuşturucu ve alkol',
    violence: 'Şiddet ve aşırıcılık',
    piracy: 'Korsan içerik',
    social: 'Sosyal ağlar',
    videoStreaming: 'Video yayını',
    gaming: 'Oyunlar',
    shopping: 'Alışveriş',
  },
  categoryHint: {
    adult: 'Açık içerikli ve yetişkin siteleri',
    gambling: 'Kumarhane, bahis, ganimet kutusu',
    dating: 'Flört ve yabancıyla sohbet uygulamaları',
    drugs: 'Esrar, elektronik sigara, alkol',
    violence: 'Vahşet ve aşırıcı forumlar',
    piracy: 'Torrent ve korsan yayın',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, oyun portalları',
    shopping: 'Amazon, Trendyol, hızlı moda',
  },
} as const;
