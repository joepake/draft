export const webFilter = {
  title: 'Web filtresi',
  fallbackDeviceName: 'Çocuk cihazı',
  appliesToAll: '{{name}} adlı çocuğun tüm cihazlarına uygulanır ({{count}} cihaz)',
  coverageLine: '{{total}} cihazın {{enforcing}} tanesinde etkin',
  mergeNotice:
    '{{name}} adlı çocuğun cihazlarında farklı web filtresi ayarları vardı. Burada kaydetmek, daha katı seçeneğe göre birleştirilmiş tek bir ayarı tümüne uygular.',
  mergeLoosened: 'Artık her cihazda izinli: {{domains}}',
  toastUpdateFailed: 'Web filtresi güncellenemedi. Lütfen tekrar deneyin.',
  heroTitle: 'Uygunsuz siteleri filtrele',
  heroSubtitleIos:
    'Apple Ekran Süresi web içerik filtresinin yanı sıra, bilinen uygunsuz siteleri tarayıcılarda ve birçok uygulamada engellemek için çocuğun iPhone’unda veya iPad’inde özel bir bağlantı çalıştırır.',
  heroSubtitleAndroid:
    'Bilinen uygunsuz alan adlarını tarayıcılarda ve birçok uygulamada engellemek için çocuğun Android cihazında yerel bir DNS VPN kullanır.',
  heroSubtitleMacos:
    'Tarayıcılarda ve birçok uygulamada bilinen uygunsuz siteleri engellemek için çocuğun Mac’inde KidGate’in içerik filtresini çalıştırır.',
  toggleHintIos:
    'Çocuğun KidGate VPN bağlantısına bir kez izin vermesi ve cihaz parolasını girmesi gerekir. Filtrenin çalışması için VPN’i cihazdan kaldırmayın.',
  toggleHintAndroid:
    'Çocuğun KidGate VPN bağlantısını bir kez onaylaması gerekir. Filtrenin çalışması için VPN’i açık tutun.',
  toggleHintMacos:
    'Çocuğun Sistem Ayarları’nda KidGate filtre uzantısını bir kez onaylaması gerekir. Filtrenin çalışması için onaylı kalmasını sağlayın.',
  toggleAccessibilityLabel: 'Web filtresini aç',
  safeSearchSectionTitle: 'Güvenli arama ve YouTube',
  safeSearchSectionSubtitle:
    'Google, Bing ve DuckDuckGo’yu güvenli sonuçlara zorlar ve YouTube’u Kısıtlı Mod’a kilitler. Web filtresinin açık olmasını gerektirir.',
  safeSearchLabel: 'Güvenli Aramayı zorunlu kıl',
  safeSearchHint:
    'Google SafeSearch, YouTube Kısıtlı Mod, Bing ve DuckDuckGo’yu katı ayarda kilitler. Android, Android TV ve Chrome.',
  safeSearchStrictNote:
    'YouTube en katı seviyede çalışır: yorumlar gizlenir ve bazı sıradan videolar da engellenir. Çocuk bunu kendi hesabından kapatamaz.',
  infoTitle: 'Nasıl çalışır',
  infoLine1Ios:
    'KidGate, cihazda özel bir bağlantı çalıştırır; hangi sitelere girilmek istendiğini görür ve seçtiğiniz kategorilerdeki siteleri engeller.',
  infoLine2Ios:
    'Apple’ın yetişkin içerik filtresi, ikinci bir koruma katmanı olarak Safari’de ve uygulama içi tarayıcılarda açık kalır.',
  infoLine3Ios:
    'Filtreleme sırasında bir VPN simgesi görünür. VPN Ayarlar’dan kapatılırsa birkaç saniye içinde yeniden açılır; silinirse KidGate’te yeniden izin verilene kadar filtre durur.',
  infoLine1Android:
    'KidGate, cihazda özel bir bağlantı çalıştırır; hangi sitelere girilmek istendiğini görür ve seçtiğiniz kategorilerdeki siteleri engeller.',
  infoLine2Android:
    'Çocuk cihazında Özel DNS’i kapatın. Açıksa tarayıcılar filtreyi atlayabilir.',
  infoLine3Android:
    'Filtreleme sırasında çocuk cihazında bir VPN simgesi görünür. VPN’i kapatmak filtreyi durdurur — geri getirmek için KidGate’i yeniden açın.',
  infoLine4Android:
    'Ayarlar’da Ağ ve internet’i, ardından Özel DNS’i açın ve Kapalı’yı seçin.',
  infoLine1Macos:
    'KidGate, Mac’te hangi sitelerin arandığını kontrol eden bir içerik filtresi çalıştırır ve kategorilerinize giren siteleri engeller.',
  infoLine2Macos:
    'Filtre çocuğun Mac’inde onaylanmamış görünüyorsa, onaylamak için Sistem Ayarları → Genel → Oturum Açma Öğeleri ve Uzantılar’ı açın.',
  infoLine3Macos:
    'Onaylandıktan sonra çocuğun Mac’i filtreyi etkin gösterir. Orada kapatılırsa, geri yüklemek için KidGate’i yeniden açın.',
  infoLine4Macos:
    'Filtre site adlarını okur, ancak modern tarayıcılar ziyaretlerin yaklaşık yarısında bunu gizler — bu siteler kategorilerinize göre denetlenmez. Yine de filtre, çocukların bu yolla ulaştığı çoğu siteyi engellemeye devam eder.',
  privateDnsBannerTitle: 'Özel DNS’i kapat',
  privateDnsBannerBody:
    'Özel DNS açık olduğundan web filtresi atlanabilir. Filtrenin çalışması için kapat.',
  privateDnsBannerButton: 'DNS ayarlarını aç',
  vpnConsentBannerTitle: 'Web filtresi VPN’ini geri getir',
  vpnConsentBannerBody:
    'KidGate VPN kapalı. Yetişkin web filtresi VPN bağlantısının sürmesini gerektirir.',
  vpnConsentBannerButton: 'VPN’i aç',
  iosOnlyNote: 'iPhone’da özel bağlantı ve Ekran Süresi kullanır',
  androidVpnNote: 'Android’de yerel DNS VPN kullanır',
  macosFilterNote: 'Mac’te KidGate’in içerik filtresini kullanır',

  heroSubtitleWindows:
    'Çocuğun bilgisayarında KidGate’in kendi çözümleyicisini çalıştırarak bilinen uygunsuz siteleri her tarayıcıda engeller.',
  heroSubtitleExtension:
    'Bilinen uygunsuz siteleri o tarayıcıda engellemek için çocuğun bilgisayarındaki Chrome’da KidGate uzantısını çalıştırır.',

  toggleHintWindows:
    'Bilgisayarda onaylanacak bir şey yok. KidGate’in arka plan hizmeti filtreyi birkaç saniye içinde açar.',
  toggleHintExtension:
    'Onaylanacak bir şey yok. Filtre yalnızca Chrome’da çalışır, diğer tarayıcılarda veya uygulamalarda çalışmaz.',

  infoLine1Windows:
    'KidGate bilgisayarda, hangi sitelerin sorgulandığını denetleyen ve kategorilerinizdekileri engelleyen bir çözümleyici çalıştırır.',

  infoLine2Windows:
    'Chrome, Edge ve Firefox buna KidGate’in uyguladığı bir ayarla bağlanır. Çocuğunuzdan hiçbir onay istenmez.',

  infoLine3Windows:
    'Bunun için KidGate arka plan hizmeti gerekir. Web filtreleme kapalı kalıyorsa KidGate’i bilgisayara yönetici olarak yeniden yükleyin.',

  infoLine4Windows:
    'Filtre yalnızca site adlarını okur. Sayfanın içini göremez ve az önce sorgulanan bir site birkaç dakika daha açılabilir.',
  infoLine1Extension:
    'KidGate uzantısı her siteyi Chrome açmadan önce kontrol eder ve seçtiğiniz kategorilerdeki siteleri engeller.',
  infoLine2Extension:
    'Yalnızca Chrome, KidGate’in yüklü olduğu profilde filtrelenir. Bilgisayardaki diğer tarayıcılar ve uygulamalar filtrelenmez.',
  infoLine3Extension:
    'Gizli pencereler yalnızca uzantı için “Gizli modda izin ver” açıksa filtrelenir. Misafir pencereleri filtrelenmez.',
  infoLine4Extension:
    'Engellenen bir sayfadan çocuğunuz siteye izin vermenizi isteyebilir. Uzantıyı kaldırmak veya kapatmak filtreyi durdurur.',

  windowsFilterNote: 'Windows’ta KidGate’in kendi çözümleyicisini kullanır',
  extensionFilterNote: 'Chrome’da KidGate uzantısını kullanır',
  categoriesTitle: 'Neler engellensin',
  categoriesSubtitle:
    'KidGate kendi alan adı listelerini kullanır. Çocukların gerçekten ulaştığı siteleri kapsar, tüm web’i değil — aşağıdaki listelerle birlikte kullanın.',
  androidOnlyCategory: 'iPhone’da kullanılamaz — diğer cihazlarda çalışır',
  iosCategoryNote:
    'iPhone, Apple’ın kendi filtresiyle yalnızca {{category}} kategorisini destekler. Diğer kategoriler diğer cihazlarda geçerlidir.',
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
  allowListOnlyHintExtension:
    'Chrome yalnızca izin listenizdeki siteleri açabilir. Diğer tarayıcılar ve uygulamalar etkilenmez.',
  allowListOnlyNeedsEntries: 'Açmadan önce en az bir izinli site ekleyin.',
  domainPlaceholder: 'ornek.com',
  addDomain: 'Site ekle',
  removeDomain: '{{domain}} kaldır',
  invalidDomain: 'ornek.com gibi bir adres girin',
  listFull: 'Bu listeye en fazla {{max}} site kaydedebilirsiniz.',
  openHistory: 'Web geçmişi',
  openHistorySubtitle:
    'Bu cihazın hangi sitelere ulaştığını ve neyin engellendiğini görün',
  blockedPageTitle: 'Site engellendi',
  blockedPageBody:
    'KidGate bu siteyi ailen için engelledi. Bunun bir hata olduğunu düşünüyorsan ailene sor.',
  category: {
    adult: 'Yetişkin içerik',
    selfHarm: 'Kendine zarar verme ve yeme bozuklukları',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Eğitim',
    utility: 'Araçlar',
    browser: 'Web tarayıcıları',
    devTools: 'Kodlama ve geliştirici araçları',
    messaging: 'Mesajlaşma ve aramalar',
    community: 'Forumlar ve topluluklar',
    shortVideo: 'Kısa videolar',
    creative: 'Fotoğraf, video ve sanat',
    productivity: 'Notlar ve verimlilik',
    reading: 'Kitap ve çizgi roman',
    fileSharing: 'Dosya paylaşımı ve indirme',
    bypass: 'Kısıtlama aşma uygulamaları',
    gambling: 'Kumar',
    gameGambling: 'Loot box ve skin bahisleri',
    dating: 'Flört',
    strangerChat: 'Yabancılarla sohbet',
    drugs: 'Uyuşturucu ve alkol',
    violence: 'Şiddet ve vahşet',
    extremism: 'Aşırıcılık ve nefret',
    piracy: 'Korsan içerik',
    social: 'Sosyal ağlar',
    videoStreaming: 'Video yayını',
    music: 'Müzik',
    gaming: 'Oyunlar',
    shopping: 'Alışveriş',
    aiCompanion: 'Yapay zekâ arkadaşları',
    aiAssistant: 'Yapay zekâ asistanları',
    cryptoTrading: 'Kripto ve alım satım',
    vpn: 'VPN uygulamaları',
  },
  categoryHint: {
    adult: 'Açık içerikli ve yetişkin siteleri',
    selfHarm: 'Kendine zarar vermeyi öven forumlar',
    gambling: 'Kumarhaneler, spor bahisleri, poker',
    gameGambling: 'Loot box açma, skin ve Roblox bahisleri',
    dating: 'Flört uygulamaları',
    strangerChat: 'Omegle klonları, rastgele görüntülü sohbet',
    drugs: 'Esrar, elektronik sigara, alkol',
    violence: 'Vahşet ve şok görüntü siteleri',
    extremism: 'Nefret forumları ve aşırıcı siteler',
    piracy: 'Torrent ve korsan yayın',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, oyun portalları',
    shopping: 'Amazon, Trendyol, hızlı moda',
    aiCompanion: 'Character.AI, Replika, rol yapma botları',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, işlem uygulamaları',
    vpn: 'VPN indirme sayfaları. Kurulu uygulamaları engellemez.',
  },
  categoryGroup: {
    harm: 'Zararlı içerik',
    contact: 'Yabancılar',
    bypass: 'Filtreyi atlatma',
    ai: 'Yapay zekâ',
    entertainment: 'Eğlence ve sosyal',
    money: 'Alışveriş ve para',
  },
  categoriesOnCount: '{{total}} kategoriden {{on}} tanesi açık',
  askToOpen: 'Ailene sor',
  askToOpenSubtitle: 'İzin verirlerse bu site açılır.',
  askToOpenDomainLabel: 'Hangi site?',
  askToOpenBlockedLabel: 'Son engellenenler',
  askToOpenPending: 'Zaten bir site istedin. Cevabı bekle.',
  askToOpenTooSoon: 'Az önce istek gönderdin. Bir dakika sonra dene.',
  askToOpenTooMany: 'Bir seferde sadece birkaç site isteyebilirsin.',
  requestsTitle: 'Site istekleri',
  requestsSubtitle: 'Bu cihazın izin istediği siteler.',
  siteRequestApproved: 'Siteye izin verildi',
  siteRequestApprovedDescription:
    '{{domain}}, {{deviceName}} cihazında “Her zaman izin ver” listesine eklendi.',
  siteRequestDenied: 'Site isteği reddedildi',
  siteRequestDeniedDescription:
    '{{domain}} {{deviceName}} cihazında engelli kalmaya devam ediyor.',
  siteRequestReceived: 'Site isteği',
  siteRequestReceivedDescription: '{{deviceName}} {{domain}} adresini açmak istiyor.',
  privateDnsStep1: 'Bu cihazda Ayarlar’ı aç.',
  privateDnsStep2: 'Ağ ve internet’i seç.',
  privateDnsStep3: 'Özel DNS’i aç ve Kapalı’yı seç.',
  vpnConsentStepAllow:
    'Android’in VPN isteğinde Tamam’ı seç. Filtre çalışırken durum çubuğunda anahtar simgesi kalır.',
  vpnConsentStepAllowIos:
    'iOS, VPN konfigürasyonları eklemek için izin istediğinde İzin Ver’i seç, ardından cihaz parolasını gir. Filtre çalışırken bir VPN simgesi görünür.',
} as const;
