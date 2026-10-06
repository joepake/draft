/** Turkish. */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{total}} uygulamadan {{flagged}} tanesi bakmaya değer',
    summaryClear: '{{total}} uygulama arasında işaretlenen yok',
    summaryFlaggedExtension:
      '{{total}} Chrome uzantısından {{flagged}} tanesi bakmaya değer',
    summaryClearExtension:
      '{{total}} Chrome uzantısı arasında dikkat çeken bir şey yok',
  },
  meta: {
    title: 'KidGate — Çocuğunuza saygı duyan ebeveyn denetimi',
    description:
      'KidGate, ebeveynlerin ekran süresini yönetmesine, uygulamaları engellemesine, web’i filtrelemesine ve iletişimde kalmasına yardımcı olur — çocuğun özgürlüğünü elinden almadan.',
  },

  common: {
    comingSoon: 'Yakında',
    loading: 'Yükleniyor…',
    signOut: 'Çıkış yap',
    crashTitle: 'Bu sayfa çalışmayı durdurdu',
    crashBody:
      'Genelde sayfayı yenilemek yeterli olur. Ailenizin ayarları ve çocuğunuzun cihazları değişmedi.',
    crashReload: 'Sayfayı yenile',
  },

  language: {
    title: 'Dil',
    change: 'Dili değiştir',
    system: 'Tarayıcı dili',
    english: 'İngilizce',
    vietnamese: 'Vietnamca',
    spanish: 'İspanyolca',
    portuguese: 'Portekizce (Brezilya)',
    german: 'Almanca',
    french: 'Fransızca',
    japanese: 'Japonca',
    korean: 'Korece',
    arabic: 'Arapça',
    indonesian: 'Endonezce',
    italian: 'İtalyanca',
    turkish: 'Türkçe',
    hindi: 'Hintçe',
    russian: 'Rusça',
  },

  nav: {
    skip: 'İçeriğe geç',
    main: 'Ana',
    plans: 'Planlar',
    about: 'Hakkımızda',
    support: 'Destek',
    privacy: 'Gizlilik',
    terms: 'Koşullar',
    dashboard: 'Panel',
  },

  footer: {
    blurb:
      'Ailelerin ekran süresi yüzünden tartışmak yerine anlaşmasına yardım eden bir ebeveyn denetimi.',
    product: 'Ürün',
    about: 'Hakkımızda',
    dashboard: 'Ebeveyn paneli',
    supportGuides: 'Destek ve rehberler',
    download: 'İndir',
    contact: 'Bize ulaşın',
    legal: 'Yasal',
    privacyPolicy: 'Gizlilik Politikası',
    terms: 'Şartlar ve Koşullar',
    deleteData: 'Verilerinizi silin',
    rights: '© {{year}} KidGate. Tüm hakları saklıdır.',
    madeFor:
      'iPhone, Android, Mac, Windows, Android TV ve Chrome kullanan aileler için.',
  },

  legalNote:
    'Bu sayfa yalnızca İngilizce olarak sunuluyor ve geçerli olan metin İngilizce olanıdır. Herhangi bir bölümü anlamakta yardıma ihtiyacınız olursa [support@kidgate.app](mailto:support@kidgate.app) adresine yazın.',

  store: {
    appleAria: 'KidGate’i App Store’dan indir',
    appleSmall: 'İndir',
    appleName: 'App Store',
    googleAria: 'KidGate’i Google Play’den edin',
    googleSmall: 'Şurada bul',
    googleName: 'Google Play',
    chromeName: 'Chrome Web Mağazası',
  },

  home: {
    heroBadge: 'Ebeveyn denetimi, olması gerektiği gibi',
    heroTitle: 'Çocuklarınızı koruyun,',
    heroTitleAccent: 'özgürlüklerini ellerinden almadan.',
    heroLede:
      'KidGate ebeveynlere ekran süresi, uygulamalar ve güvenlik üzerinde sakin ve net bir denetim verir — çocukların elinde ise hâlâ kendilerinin gibi hissettiren bir telefon kalır.',
    heroCheck1: 'Ekran Süresi',
    heroCheck2: 'Uygulama engelleme',
    heroCheck3: 'Web filtresi',
    heroCheck4: 'Konum',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Günlük sınır',
    phoneBlockedHours: 'Engellenen Saatler',
    phoneScheduleOn: 'Program açık',
    phoneLocation: 'Konum',
    phoneCheckIn: 'Check-In tamam',

    trust1Title: 'Asla reklam yok',
    trust1Text: 'Çocuk verileri hiçbir zaman reklam için kullanılmaz',
    trust2Title: 'İstediğiniz zaman silin',
    trust2Text: 'Talebiniz üzerine aile hesabınızı ve tüm verileri sileriz',
    trust3Title: 'Telefon, bilgisayar ve TV',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV ve Chrome tek bir aile hesabında',
    trust4Title: 'Aile başına tek plan',
    trust4Text: 'Tüm ebeveyn ve çocuk cihazları, tek abonelik',

    featuresEyebrow: 'Özellikler',
    featuresTitle: 'Bir ebeveynin ihtiyaç duyduğu her şey',
    featuresSub:
      'Günlük sınırlardan acil durum uyarılarına — tüm ailenin dijital iyiliği için tek uygulama.',
    feature1Title: 'Ekran süresi ve günlük sınırlar',
    feature1Text:
      'Okul ve uyku saatleri için günlük bir üst sınır ve Engellenen Saatler belirleyin. Süre dolduğunda cihaz kendini kilitler.',
    feature2Title: 'Uygulama engelleme',
    feature2Text:
      'Çocuğunuzun hangi uygulamaları açamayacağını seçin; Ebeveyn PIN’iyle korunur ve engellemeyi uzaktan açabilirsiniz.',
    feature3Title: 'Uygulama Sınırları',
    feature3Text:
      'Android’de, Android TV’de ve bilgisayarlarda her uygulamaya ayrı bir sınır koyun — tamamen yasaklamadan “yarım saat TikTok”.',
    feature4Title: 'Web filtreleme ve geçmiş',
    feature4Text:
      'Yetişkin siteleri, kumar, kendine zarar verme ve daha fazlasını her cihazda engelleyin; Premium ile hangi sitelerin arandığını da görün.',
    feature5Title: 'Konum ve yerler',
    feature5Text:
      'Çocuğunuzun nerede olduğunu günde en fazla 10 kez görün; Premium canlı konum ve kayıtlı yerler için uyarılar ekler.',
    feature6Title: 'Check-In ve SOS',
    feature6Text:
      'Çocuğunuzdan iyi olduğunu onaylamasını isteyin; acil durumda telefonu size konumuyla birlikte anında SOS gönderir.',
    feature7Title: 'Koruma ve uygulama uyarıları',
    feature7Text:
      'Çocuğunuzun telefonunda önemli bir izin kapatıldığı anda haberiniz olsun; Android’de, Android TV’de ya da bir bilgisayarda yeni uygulamaları açılmadan önce onaylayın.',
    feature8Title: 'Ödül görevleri ve ek süre',
    feature8Text:
      'Çocuklar görevleri bitirerek ek dakika ve yıldız kazanır ya da daha fazla süre ister — ikisini de telefonunuzdan onaylarsınız.',

    feature9Title: 'Cihaz Kilidi',
    feature9Text:
      'Cihazı hemen kilitleyin, hazır olduğunuzda açın — akşam yemeği, ödev ya da uyulmayan bir kural.',
    feature10Title: 'Haftalık rapor',
    feature10Text:
      'Her pazartesi: ekran süresi, günlük ortalama, engellenenler ve haftanın bir öncekiyle karşılaştırması.',
    feature11Title: 'YouTube ve video geçmişi',
    feature11Text:
      'Çocuğunuzun Android’de ve Chrome’da izlediği YouTube videoları ve Shorts, ayrıca Android TV’deki videolar. iPhone’da kullanılamaz.',
    feature12Title: 'Etkinlik Akışı',
    feature12Text:
      'Olan biten her şey, sırasıyla — kilidi açılan bir cihaz, yanıtlanan bir istek, gönderilen bir uyarı; ücretsiz plan bugünü gösterir, Premium 30 günü saklar.',
    featurePremium: 'Premium',
    platformsTitle: 'Ekran nerede olursa olsun, tek bir KidGate',
    platformsSub:
      'Telefonda, bilgisayarda ve Android TV’de aynı kurallar ve aynı aile hesabı; Chrome’da da aynı Web filtresi. Masaüstü uygulaması bir mağazadan değil, bu siteden gelir.',

    showcaseEyebrow: 'Ebeveyn paneli',
    showcaseTitle: 'Tüm aile tek ekranda',
    showcaseSub:
      'Ekran süresi, engellenen denemeler, konum ve dikkatinizi gerektiren her şey — telefonunuzda ya da herhangi bir tarayıcıda.',
    showcaseCaption1: 'Raporları herhangi bir tarayıcıdan okuyun',
    showcaseCaption2: 'Değişiklikler telefonunuzdan onaylanır',

    setupEyebrow: 'Kurulum',
    setupTitle: 'Dakikalar içinde hazır',
    setupSub: 'Teknik bilgi gerekmez — uygulama her adımda size yol gösterir.',
    step1Title: 'Kendi cihazınızı kurun',
    step1Text:
      'KidGate’i yükleyin, “Bu bir ebeveyn cihazı” seçeneğini seçin ve Google ya da e-posta ile — iPhone’da Apple ile de — giriş yapın.',
    step2Title: 'Çocuğunuzun cihazını eşleştirin',
    step2Text:
      'Çocuğunuzun telefonuna KidGate’i yükleyin ve bir QR kodu okutarak bağlayın. Bir dakikadan kısa sürer.',
    step3Title: 'Kurallarınızı belirleyin',
    step3Text:
      'Kendi telefonunuzdan bir Günlük sınır ve Engellenen Saatler seçin, konumu ve uygulama engellemeyi açın. Engellenecek uygulamalar, Ebeveyn PIN’inizle çocuğunuzun cihazında bir kez seçilir.',

    whyEyebrow: 'Neden KidGate',
    whyTitle: 'Gözetim için değil, güven için',
    whySub: 'Ebeveyn ile çocuk arasındaki konuşmayı açık tutmak için tasarlandı.',
    why1Title: 'Tek plan, tüm aile',
    why1Text:
      'Tek bir Premium aboneliği tüm ebeveyn ve çocuk cihazlarını kapsar ve yalnızca aile sahibi öder. Ücretsiz planda bir çocuk cihazı izlenmeye devam eder.',
    why2Title: 'Ortak ebeveynlik için tasarlandı',
    why2Text:
      'Aynı çocukları yönetmesi için ikinci bir ebeveyni davet edin; erişimi aile sahibi onaylar. Bir ailede ücretsiz planda ve deneme süresince en fazla 3, Premium ile en fazla 6 ebeveyn olabilir.',
    why3Title: 'Önce gizlilik',
    why3Text:
      'Kişisel verileri asla satmayız ve çocuk verilerini reklam için kullanmayız. İstediğiniz zaman her şeyi silin.',
    why4Title: 'Sınırlar konusunda dürüst',
    why4Text:
      'Var olmayan bir denetim vaat etmek yerine, her platformun neyi uygulayıp neyi uygulayamadığını size söyleriz.',

    onlyEyebrow: 'Yalnızca KidGate',
    onlyTitle: 'Başka yerde bulamayacaklarınız',
    onlySub:
      'Ebeveynlerin bizi kıyasladığı uygulamalara karşı kontrol ettiğimiz altı madde. Her biri hangi platformda geçerli olduğunu söyler.',
    only1Title: 'Salondaki televizyon da',
    only1Text:
      'Android TV’ye Günlük sınır, Engellenen Saatler, uygulama engelleme ve Web filtresi gelir. Televizyonda engelleme yalnızca elden geleni yapar — engellenen bir uygulama ana ekrana geri gönderilir — ve koltuktan SOS ya da ek süre isteği gönderilemez. Televizyon konum da paylaşmaz. Ebeveyn denetimlerinin çoğu telefonda biter.',
    only2Title: 'Telefonda kalan mesaj uyarıları',
    only2Text:
      'Premium ile Android’de mesajlar, 14 dil arasından seçtiğiniz en fazla üç dildeki anahtar kelime listeleriyle cihazın kendisinde karşılaştırılır ve telefondan çıkan şey eşleşen kelime ya da ifadedir, asla konuşmanın kendisi değil. Bunu değiştiren tek bir şey var ve yalnızca siz isterseniz devreye girer: yapay zekâ onayını açtığınızda, belirsiz bir gelen mesaj değerlendirilmek üzere Google’ın Gemini’sine gönderilir; böylece sıradan bir kelime yüzünden uykunuzdan uyandırılmazsınız.',
    only3Title: 'Uygulama listesi değil, her uygulama',
    only3Text:
      'Uyarılar, çocuğunuzun kullandığı her uygulamanın bildirimlerinden — sabit bir desteklenen uygulama listesinden değil — ve aralarında Zalo, LINE ve KakaoTalk’un da bulunduğu başlıca sohbet, sosyal medya ve oyun uygulamalarında yazdıklarından gelir. Yalnızca Android’de, Premium ile.',
    only4Title: 'Çocuk için bir çıkış yolu',
    only4Text:
      'Telefonda SOS’u beş saniye basılı tutmak size konumla birlikte anında ulaşır; Android’de ayrıca telefon kilitliyken bile aramalar, haritalar ve mesajlar beş dakikalığına açılır. Kilit ekranından yardıma ulaşabilen bir çocuğun uygulamayla savaşması için sebep yoktur.',
    only5Title: 'İnternet olmadan da geçerli kurallar',
    only5Text:
      'Engellenen Saatler ve günlük sınır cihazın kendisinde uygulanır; modemi çekmek hiçbir şeyi değiştirmez. Televizyon, Ebeveyn PIN’inizi hiç bağlantı olmadan bile kabul eder.',
    only6Title: 'Hafta hak ettiğinde takdir',
    only6Text:
      'Premium ile her haftalık rapor iyi gidenlere yer ayırır — uyulan bir sınır, geç saatlere kalınmayan bir gece, tamamlanan bir görev — ve bunu ancak hafta gerçekten ölçüldüğünde söyler.',

    faqEyebrow: 'SSS',
    faqTitle: 'Ebeveynlerin ilk sorduğu sorular',
    faqSub: 'İndirmeden önce kısa yanıtlar.',
    faq1Q: 'Ücretsiz deneme var mı?',
    faq1A:
      'Evet. 7 günlük deneme, ilk ebeveyn ve çocuk cihazlarınız bağlandığında başlar ve tüm Premium özellikleri içerir. Bittiğinde, belirlediğiniz kurallar — Günlük sınır, Engellenen Saatler, Engellenen Uygulamalar, Web filtresi, Cihaz Kilidi, ek süre istekleri ve ödül görevleri — tüm çocuk cihazlarında ücretsiz çalışmaya devam eder ve izlemeye devam etmek için seçtiğiniz cihaz konumunu paylaşmayı sürdürür. Premium’un geri getirdikleri ise canlı etkinlik, geçmiş, haftalık raporlar ve konum takibidir.',
    faq2Q: 'Kaç cihaz yönetebilirim?',
    faq2A:
      'Premium en fazla 25 çocuk cihazını ve siz dahil en fazla 6 ebeveyni kapsar; her cihaz etkinlik gönderir. Ücretsiz plan en fazla 8 çocuk cihazını ve 3 ebeveyni kapsar. Her cihaz belirlediğiniz kuralları uygulamayı sürdürür, ancak etkinliği yalnızca seçtiğiniz cihaz gönderir; diğerlerinde bu kurallar gevşetilebilir ama sıkılaştırılamaz.',
    faq3Q: 'Çocuğum KidGate’i kaldırabilir veya atlatabilir mi?',
    faq3A:
      'Hassas ayarlar Ebeveyn PIN’inizin arkasındadır ve çocuk cihazında önemli bir izin kapatılırsa koruma uyarıları size hemen haber verir.',
    faq4Q: 'Her şeyi bilgisayardan yönetebilir miyim?',
    faq4A:
      'Evet. Ebeveyn paneli her tarayıcıda açılır. Gösterdiği kodu telefonunuzdaki KidGate uygulamasıyla tarayın; aynı aileyi, cihazları ve ayarları, denetimlerin kilidi açık olarak görürsünüz. Okumak için hesabınızla da giriş yapabilirsiniz; bu durumda bir cihazı kilitlemek ya da bir sınırı değiştirmek Ebeveyn PIN’inizi ister.',
    faq5Q: 'Premium’un ücreti ne kadar?',
    faq5A:
      'Premium’un ABD fiyatı ayda 6,99 $ veya yılda 39,99 $; App Store ya da Google Play üzerinden faturalandırılır ve orada kendi para biriminizde gösterilir. Tek seferlik ödenen Ömür boyu planı, KidGate sunulduğu sürece her çocuk cihazında aynı Premium’u sunar. Ücretsiz planın süresi hiç dolmaz.',
    faqMore: 'Başka sorunuz mu var? Destek sayfasına gidin',

    ctaTitle: 'Ailenizi korumaya bugün başlayın',
    ctaSub: 'Tam erişimli 7 günlük ücretsiz deneme.',
    ctaNote: 'App Store veya Google Play üzerinden istediğiniz zaman iptal edin.',
  },

  login: {
    title: 'Ebeveyn girişi',
    sub: 'KidGate uygulamasında oluşturduğunuz hesabın aynısını kullanın. Buradan giriş yaptığınızda aynı aileyi, cihazları ve ayarları görürsünüz.',
    notConfiguredTitle: 'Bu dağıtımda Firebase yapılandırılmamış.',
    notConfiguredBody:
      'Girişi etkinleştirmek için VITE_FIREBASE_* ortam değişkenlerini ayarlayın.',
    qrWhy:
      'Telefonla okutmak sizi tek adımda hem oturuma alır hem de denetimlerin kilidini açar. Aşağıdaki yöntemler görüntülemek için oturum açar; denetimlerin kilidini açmak için ardından Ebeveyn PIN’iniz gerekir.',
    orViewOnly: 'ya da başka bir yolla giriş yap',
    google: 'Google ile devam et',
    googleBusy: 'Google açılıyor…',
    apple: 'Apple ile devam et',
    appleBusy: 'Apple açılıyor…',
    orEmail: 'veya e-postanızı kullanın',
    email: 'E-posta',
    emailPlaceholder: 'siz@ornek.com',
    password: 'Parola',
    submit: 'Giriş yap',
    submitBusy: 'Giriş yapılıyor…',
    forgot: 'Parolanızı mı unuttunuz?',
    resetNeedsEmail:
      'Önce e-posta adresinizi girin, ardından “Parolanızı mı unuttunuz?” seçeneğini seçin.',
    resetSent: 'Parola sıfırlama e-postası {{email}} adresine gönderildi.',
    foot: 'KidGate hesapları mobil uygulamada oluşturulur — web paneli var olan bir aileye giriş yapar. Yeni misiniz? Önce uygulamayı yükleyin ve bir çocuk cihazı eşleştirin.',
  },

  qr: {
    start: 'KidGate uygulamasıyla giriş yap',
    generating: 'Kod oluşturuluyor…',
    step1: 'Telefonunuzda KidGate’i açın.',
    step2: '*Aile* sekmesinde tarama simgesine dokunun.',
    step3: 'Bu kodu okutun, sonra onaylayın.',
    waiting: 'Onay bekleniyor · {{time}} içinde sona eriyor',
    signingIn: 'Onaylandı. Giriş yapılıyor…',
    expired: 'Bu kodun süresi doldu.',
    failed: 'Giriş tamamlanmadı.',
    newCode: 'Yeni kod göster',
    tryAgain: 'Tekrar dene',
  },

  authError: {
    generic: 'Bir şeyler ters gitti. Tekrar deneyin.',
    invalidEmail: 'Bu e-posta adresi doğru görünmüyor.',
    userDisabled: 'Bu hesap devre dışı bırakıldı.',
    userNotFound: 'Bu e-postayı kullanan bir KidGate hesabı yok.',
    wrongPassword: 'E-posta veya parola hatalı. Lütfen tekrar deneyin.',
    rateLimited:
      'Bu ağdan çok fazla giriş kodu alındı. {{minutes}} dk sonra tekrar deneyin.',
    tooManyRequests: 'Çok fazla deneme. Birkaç dakika bekleyip tekrar deneyin.',
    popupClosed: 'Giriş penceresi tamamlanmadan kapatıldı.',
    popupCancelled: 'Giriş iptal edildi.',
    popupBlocked:
      'Tarayıcınız giriş penceresini engelledi. Bu site için pop-up’lara izin verip tekrar deneyin.',
    accountExists:
      'Bu e-posta farklı bir giriş yöntemiyle zaten kayıtlı. Uygulamada kurduğunuz yöntemi kullanın.',
    operationNotAllowed: 'Bu giriş yöntemi bu proje için henüz etkinleştirilmedi.',
    unauthorizedDomain:
      'Bu alan adı Firebase Authentication ayarlarında yetkilendirilmemiş.',
    invalidCustomToken:
      'Bu giriş bağlantısı artık geçerli değil. Yeni bir QR kodu gösterin.',
    webRejected: 'İstek telefonda reddedildi.',
    webExpired: 'Kodun süresi doldu. Yeni bir tane oluşturun.',
    noFunctionsUrl:
      'Cloud Functions adresi yapılandırılmamış (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Oturumunuzun süresi doldu. Yeniden giriş yapın.',
  },

  live: {
    checkingSession: 'Oturumunuz denetleniyor…',
    loadingFamily: 'Aileniz yükleniyor…',
    loadFailedTitle: 'Aileniz yüklenemedi',
    noAccessTitle: 'Bu hesapta aile yok',
    noAccess:
      'Bu hesabın herhangi bir KidGate ailesine erişimi yok. Uygulamada kullandığınız ebeveyn hesabıyla giriş yapın.',
    noFamily:
      'Bu hesabın henüz bir KidGate ailesi yok. KidGate’i telefonunuzda kullanıyorsanız çıkış yapın ve burada aynı hesapla giriş yapın. Aile oluşturmak için telefonunuzda kurun, ardından bu sayfayı yeniden yükleyin.',
    noFamilyStep1:
      'KidGate’i telefonunuza yükleyin, *Bu bir ebeveyn cihazı* seçeneğini seçin ve bu hesapla giriş yapın.',
    noFamilyStep2:
      '*Aile* bölümünü açın ve *Aile oluştur*’u seçin; başka bir ebeveyn sizi davet ettiyse *Aileye katıl*’ı seçin.',
  },

  time: {
    never: 'hiç',
    justNow: 'az önce',
    minutes: '{{count}} dk önce',
    hours: '{{count}} sa önce',
    days: '{{count}} gün önce',
  },

  viz: {
    hours: '{{count}}sa',
    minutes: '{{count}}dk',
    hoursMinutes: '{{hours}}sa {{minutes}}dk',
    none: '—',
    byDay: 'Güne göre Ekran Süresi',
    limit: 'Sınır {{value}}',
    screenTime: 'Ekran Süresi',
    bonus: 'Bonus',
    bonusEarned: 'Kazanılan bonus',
    overLimit: 'Günlük sınırın üstünde',
    dailyLimit: 'Günlük sınır',
    ofLimit: '/ {{value}}',
    noLimit: 'sınır ayarlanmadı',
    blocked: 'Engellenen',
    blockedHours: 'Engellenen Saatler',
    day0: 'Paz',
    day1: 'Pzt',
    day2: 'Sal',
    day3: 'Çar',
    day4: 'Per',
    day5: 'Cum',
    day6: 'Cmt',
    timelineUsed: 'Kullanımda',
    timelineIdle: 'Kullanılmıyor',
    timelineUnmeasured: 'Ölçülmedi',
    timelineUnmeasuredHint:
      'KidGate cihazda çalışmıyordu ya da cihaz uykudaydı. O dakikalar toplama da dahil değil.',
    timelineUnsupported:
      'Bu cihaz ne kadar kullanıldığını bildirebilir, ancak ne zaman kullanıldığını bildiremez.',
    timelinePending: 'Henüz zaman çizelgesi yok.',
  },

  perm: {
    screenTime: 'Ekran Süresi',
    location: 'Konum',
    notifications: 'Bildirimler',
    camera: 'Kamera',
    microphone: 'Mikrofon',
    backgroundAppRefresh: 'Arka Planda Yenileme',
    overlay: 'Diğer uygulamaların üzerinde göster',
    batteryOptimization: 'Sınırsız pil',
    exactAlarm: 'Alarmlar ve hatırlatıcılar',
    accessibility: 'Erişilebilirlik (kilit yardımcısı)',
  },

  webCat: {
    adult: 'Yetişkin içerik',
    selfHarm: 'Kendine zarar verme ve yeme bozuklukları',
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

  appCat: {
    adult: 'Yetişkin içerik',
    gambling: 'Kumar',
    gameGambling: 'Loot box ve skin bahisleri',
    dating: 'Flört',
    drugs: 'Uyuşturucu ve alkol',
    violence: 'Şiddet ve vahşet',
    piracy: 'Korsan içerik',
    bypass: 'Kısıtlama aşma uygulamaları',
  },

  webCatGroup: {
    harm: 'Zararlı içerik',
    contact: 'Yabancılar',
    bypass: 'Filtreyi atlatma',
    ai: 'Yapay zekâ',
    entertainment: 'Eğlence ve sosyal',
    money: 'Alışveriş ve para',
  },

  dash: {
    tabOverview: 'Genel bakış',
    tabScreen: 'Ekran Süresi',
    tabApps: 'Uygulamalar',
    tabWeb: 'Web',
    tabSafety: 'Güvenlik',
    tabControls: 'Denetimler',
    tabReport: 'Haftalık rapor',
    tabReportNew: 'Yeni haftalık rapor',

    children: 'Çocuklar',
    noChildren: 'Henüz eşleştirilmiş çocuk cihazı yok.',
    unassignedDevices: 'Atanmadı',
    manage: 'Yönet',
    parents_one: '{{count}} ebeveyn',
    parents_other: '{{count}} ebeveyn',
    devices_one: '{{count}} çocuk cihazı',
    devices_other: '{{count}} çocuk cihazı',
    planManageOnPhone:
      'Planlar telefonunuzdaki KidGate uygulamasından alınır ve değiştirilir.',
    fallbackFamily: 'Aileniz',
    fallbackDevice: 'Çocuk cihazı',

    statusOnline: 'Çevrimiçi',
    statusOffline: 'Çevrimdışı',
    statusLocked: 'Kilitli',
    statusLockSent: 'Kilit gönderildi',
    statusLockNotApplied: 'Kilit uygulanmadı',
    statusPaused: 'Duraklatıldı',

    stateAllowed: 'İzin verildi',
    stateForegroundOnly: 'Yalnızca uygulama açıkken',
    stateDenied: 'Kapalı',
    stateNotDetermined: 'Henüz sorulmadı',
    stateRestricted: 'Kısıtlı',
    stateUnavailable: 'Kullanılamıyor',
    stateUnknown: 'Bilinmiyor',

    lastActive: 'Son etkinlik {{when}}',
    appVersion: 'Uygulama sürümü',
    appVersionUpdate: '{{running}} · {{latest}} mevcut',
    appVersionRestart: '{{running}} · tamamlamak için uygulamayı yeniden açın',
    buildOutdated: 'Güncelleme var',
    checkIn: 'Check-In',
    sending: 'Gönderiliyor…',
    lockDevice: 'Cihazı kilitle',
    unlock: 'Kilidi aç',
    working: 'İşleniyor…',
    save: 'Kaydet',

    unlockTitle: 'Değişiklikler kilitli.',
    unlockBody:
      'Görüntüleme hemen çalışır. Bir cihazı kilitlemek, sınırları değiştirmek veya istekleri onaylamak için bu tarayıcının kilidini Ebeveyn PIN’inizle açın — ya da KidGate uygulamasıyla QR kodu okutarak onaylayın. Check-In her iki durumda da çalışır.',
    unlockCta: 'Değişikliklerin kilidini aç',
    unlockToChange: 'Önce değişikliklerin kilidini açın',
    refresh: 'Yenile',
    liveOnApp: 'Canlı güncellemeler için uygulamayı açın',
    pinTitle: 'Ebeveyn PIN’inizi girin',
    pinBody:
      'Uygulamada kullandığınız altı rakamın aynısı. Bu tarayıcı 8 saat açık kalır; uygulamadan onaylamak oturumu 7 gün açık tutar.',
    pinLabel: 'Ebeveyn PIN’i',
    pinSubmit: 'Kilidi aç',
    pinOrScan: 'Ya da telefonunuzdan onaylayın',
    qrSaferNote:
      'Telefondan onaylamak ikisinin daha güvenlisi: eşleştirilmiş telefonun elinizde olmasını gerektirir, PIN ise ailede birinin girerken görmüş olabileceği altı rakamdır.',
    pinWrong: 'PIN yanlış. Kalan deneme: {{count}}.',
    pinLocked:
      'Çok fazla yanlış deneme. 15 dakika bekleyin ya da bu tarayıcıyı telefonunuzdan onaylayın.',
    pinNotSet:
      'Ailenizin henüz bir Ebeveyn PIN’i yok. Uygulamadan belirleyin ya da bu tarayıcıyı telefonunuzdan onaylayın.',
    unlockedToast: 'Bu tarayıcıda değişikliklerin kilidi açıldı.',
    close: 'Kapat',

    noDeviceBody:
      'Telefonunuzda KidGate’i açın, *Aile* bölümüne gidin ve tarama simgesine dokunun (*Kod tara*). Çocuğunuzun cihazındaki QR kodu okutun veya 6 karakterlik kodunu girin. Ardından burada *Yenile*’ye basın.',
    pairStep2Title: 'Kodu telefonunuzla tarayın',
    getKidGate: 'KidGate’i indir',
    childNoDevices:
      'Henüz cihaz yok. Bir cihaz eşleyin ve uygulama kimin kullandığını sorduğunda bu çocuğu seçin.',
    childNoDevicesAssign:
      'Henüz cihaz yok. Aşağıdan bir cihaz atayın veya yeni bir cihaz eşleyin.',

    toastCheckIn: '{{name}} bir Check-In isteği alacak.',
    toastTimeApproved: 'Ek süre onaylandı.',
    toastCheckInResent: 'Check-In yeniden gönderildi.',

    tileScreenToday: 'Bugünkü Ekran Süresi',
    tileSameAsAverage: '7 günlük ortalamayla aynı',
    tileDeltaUp: '↑ 7 günlük ortalamaya göre %{{percent}}',
    tileDeltaDown: '↓ 7 günlük ortalamaya göre %{{percent}}',
    tileBlocked: 'Engellenen denemeler',
    tileBlockedMeta: 'Kurulumdan bu yana durdurulan uygulamalar',
    tileSites: 'Filtrelenen siteler',
    tileCategoriesHit_one: '{{count}} kategori etkilendi',
    tileCategoriesHit_other: '{{count}} kategori etkilendi',
    tileNothingBlocked: 'Henüz engellenen bir şey yok',
    tileAttention: 'Dikkat gerekiyor',
    tileOpenItems: 'Açık maddeler aşağıda',
    tileAllClear: 'Her şey yolunda',

    cardScreenTime: 'Ekran Süresi',
    cardScreenTimeSub: 'Son 14 gün, günlük sınıra göre',
    cardRecent: 'Son etkinlikler',
    cardRecentSub: 'En yeniden başlayarak',
    cardRecentEmpty:
      'Henüz kayıt yok. Bu cihazdaki kilitlemeler, engellenen uygulamalar, yer uyarıları ve ekran süresi eşitlemeleri burada görünecek.',
    cardAttention: 'Dikkatinizi gerektiriyor',
    cardAttentionSub: '{{count}} açık',
    cardAttentionEmpty: 'İncelenecek bir şey yok. Korumalar sağlıklı görünüyor.',
    cardProtection: 'Koruma durumu',
    cardProtectionSub: '{{when}} denetlendi',

    attnMoreMinutes: '{{name}} {{minutes}} dakika daha istedi',
    attnReason: '“{{reason}}” · {{when}}',
    attnCheckInMissed: 'Bir Check-In yanıtsız kaldı',
    attnCheckInMissedMeta: '{{when}} gönderildi · yanıt yok',
    attnLimitReached: 'Günlük sınıra ulaşıldı — cihaz kilitlendi',
    attnLimitReachedMeta: 'Bugün {{used}} kullanıldı',
    attnBatteryLow: 'Pil düşük (%{{level}})',
    attnBatteryLowMeta: 'Telefon kapanırsa konum güncellemeleri durabilir',
    attnReview: 'İncele',
    attnResend: 'Yeniden gönder',
    attnHowToFix: 'Nasıl düzeltilir',
    attnUnlock: 'Kilidi aç',
    attnAppOnly: 'KidGate uygulamasında kullanılabilir',

    todayTitle: 'Bugün',
    todaySub: 'Günlük sınıra ve kazanılan bonusa göre',
    used: 'Kullanılan',
    left: 'Kalan',
    dailyLimit: 'Günlük sınır',
    bonusToday: 'Bugünkü bonus',
    off: 'Kapalı',
    on: 'Açık',
    topAppsTitle: 'Bugün en çok kullanılan uygulamalar',
    topAppsTitleDay: 'En çok kullanılan uygulamalar · {{date}}',
    topAppsSub: 'Uygulama başına sınırlar işaret olarak gösterilir',
    trendTitle: 'Ekran Süresi eğilimi',
    trendSub: 'Son {{count}} gün',
    rangeDays: '{{count}} g',
    blockedHoursTitle: 'Engellenen Saatler',
    blockedHoursSub_one:
      '{{count}} zaman aralığı · gölgeli bloklar içinde cihaz kilitli kalır',
    blockedHoursSub_other:
      '{{count}} zaman aralığı · gölgeli bloklar içinde cihaz kilitli kalır',
    scheduleOff: 'Program kapalı',
    schedMax: 'Bir cihaz en fazla {{max}} aralık tutar.',

    appUsageTitle: 'Bugünkü uygulama kullanımı',
    appUsageSub: 'Uygulama başına harcanan süre',
    topAppsOther: 'Diğer uygulamalar',
    underAMinute: 'Bir dakikadan az',
    appUsageEmpty: 'Henüz uygulama kullanımı bildirilmedi.',
    appBlockingTitle: 'Uygulama Engelleme',
    appBlockingSub: 'Çocuk cihazında Ebeveyn PIN’iyle seçilir',
    blockingLabel: 'Engelleme',
    appsBlocked: 'Engellenen uygulamalar',
    categories: 'Kategoriler',
    perAppHint:
      'Uygulama başına sınırlar engelleme listesinden bağımsız çalışır — “30 dakika TikTok”, “TikTok yok”tan farklı bir karardır.',
    limitsMax: 'Bir cihaz en fazla {{max}} sınırlı uygulama tutar.',
    perDay: '{{value}}/gün',
    webActivityTitle: 'Web etkinliği',
    webActivitySub: 'En çok ziyaret edilen alan adları, son 30 gün',
    webActivityEmpty: 'Henüz web etkinliği yok.',
    inventoryTitle: 'Yüklü uygulamalar',
    inventorySub: 'Bu cihazdaki her şey, yalnızca değişenler değil',
    inventoryEmpty: 'Bu cihaz uygulama listesini henüz göndermedi.',
    inventoryFirstScan:
      'İlk tarama, bu yüzden KidGate bunların ne zaman geldiğini söyleyemez.',
    inventoryFlagged: 'Bakmaya değer',
    inventoryFlaggedLabel: 'İncelenecek',
    inventoryOtherLabel: 'Tanımlandı',
    inventoryUnknownLabel: 'Tanımlanmadı',
    installAllow: 'İzin ver',
    pendingInstallsTitle: 'Onay bekleyen yeni uygulamalar',
    pendingInstallsSub:
      'Onayı açtıktan sonra yüklendi ve cihaz tarafından kendiliğinden engellendi',
    pendingInstallsEmpty: 'Onay bekleyen yeni uygulama yok.',
    toastInstallAllowed: 'Uygulamaya izin verildi',
    rowInstallApproval: 'Yeni uygulamaları onayla',
    rowInstallApprovalDesc: '{{count}} uygulama onay bekliyor',
    rowInstallApprovalDesc_one: '{{count}} uygulama onay bekliyor',
    rowInstallApprovalDescIos:
      'App Store’u gizler — Apple uygulama bazında onaya izin vermiyor',
    colDomain: 'Alan adı',
    colVisits: 'Ziyaret',
    colBlocked: 'Engellenen',
    colLastSeen: 'Son görülme',
    videosTitle: 'İzlenen videolar',
    videosSub: 'YouTube ve web’de ne izlendi',
    videosEmpty: 'Henüz video yok.',
    colVideo: 'Video',
    colChannel: 'Kanal',
    colViews: 'Görüntüleme',
    filterRefusedTitle: 'Filtrenin reddettikleri',
    filterRefusedSub_one: '{{count}} engellenen sorgu, son 30 gün',
    filterRefusedSub_other: '{{count}} engellenen sorgu, son 30 gün',
    nothingBlockedYet: 'Henüz hiçbir şey engellenmedi.',
    rollupNoteAi:
      'Bazı türler bilinen bir siteyle eşleştirilmek yerine site adından çıkarıldı, bu yüzden birkaçı yanlış olabilir.',
    webBackgroundNote:
      'Cihazı kimse kullanmazken de bazı uygulamalar arka planda internete bağlanır: güncellemeler, öneriler ve kontroller kendiliğinden çalışır.',
    filterHintIos:
      'Bu iPhone veya iPad yalnızca Apple’ın yetişkin içerik denetimiyle filtreleme yapıyor. Kategoriye göre engelleme için cihazda KidGate’i güncelleyin ve KidGate VPN’ine izin verin.',
    filterHintAndroid: 'Kategoriler cihazdaki DNS filtresi tarafından uygulanır.',
    filterHintMacos:
      'Kategoriler Mac’teki KidGate içerik filtresi tarafından uygulanır.',

    locationTitle: 'Konum',
    locationSharingOff: 'Paylaşım kapalı',
    locationUpdated: '{{when}} güncellendi',
    locationWaiting: 'İlk güncelleme bekleniyor',
    lastKnownLocation: 'Bilinen son konum',
    nearPlace: '{{place}} yakınında',
    noPlaces:
      'Henüz kayıtlı yer yok. Çocuğunuz geldiğinde ya da ayrıldığında uyarı almak için uygulamadan bir yer ekleyin.',
    placeRadius: '{{meters}} m · ',
    placeArrive: 'varış',
    placeLeave: 'ayrılış',
    placeNoAlerts: 'uyarı yok',
    placeSamePin:
      '“{{name}}” ile aynı nokta. Başka bir yere koymak için uygulamadaki haritayı kullanın.',
    placeWebHint:
      'Web’de bir yer yalnızca cihazın son konum bildirdiği noktaya eklenebilir. Başka bir yer için uygulamadaki haritayı kullanın.',
    placeNeedsLocation: 'Bu cihazdan konum bekleniyor.',
    sosTitle: 'SOS uyarıları',
    sosSub: 'Çocuk cihazından gelen acil durum sinyalleri',
    sosEmpty:
      'SOS uyarısı yok. Nasıl çalıştığını ikiniz de bilmeniz için bir kez birlikte deneyin.',
    sosAcknowledged: 'görüldü',
    sosActive: 'etkin',

    checkInsTitle: 'Check-In’ler',
    checkInsSub: 'Çocuğunuzdan iyi olduğunu onaylamasını isteyin',
    checkInSafe: 'Güvende olduğunu onayladı',
    checkInMissed: 'Yanıt yok',
    checkInWaiting: 'Bekleniyor',
    checkInPhotoRequested: 'fotoğraf ve konum istendi',
    checkInNoReply: 'henüz yanıt yok',
    checkInPhotoSkipped: 'fotoğraf atlandı',
    checkInPhotoAttached: 'fotoğraf eklendi',
    checkInNoPhoto: 'fotoğraf istenmedi',
    sendCheckIn: 'Şimdi Check-In gönder',

    protectionAlertsTitle: 'Koruma uyarıları',
    protectionAlertsSub_one: 'Kurulumdan bu yana {{count}} olay',
    protectionAlertsSub_other: 'Kurulumdan bu yana {{count}} olay',
    protectionAlertsHint:
      'Koruma uyarısı, KidGate’in belirlediğinizden daha azını uygulayabildiği anlamına gelir. Uyarıyı temizlemek için izni çocuk cihazında geri açın.',

    limitCardTitle: 'Günlük sınır',
    limitCardSub: 'Her gün kullanılabilecek dakikaları sınırlayın',
    limitAria: 'Günlük sınır dakikası',
    limitScaleMin: '30 dk',
    limitScaleMax: '8 sa',
    limitHint:
      'Ödül görevlerinden ve onaylanan süre isteklerinden gelen bonus dakikalar yalnızca o gün için üstüne eklenir.',
    limitShared: 'Tüm cihazlar için ortak',
    limitSharedSpent: 'Bugün {{limit}} sürenin {{used}} kadarı kullanıldı',
    limitSharedHint:
      'Bu, bu çocuğun tüm günüdür; bu cihaza özel bir sınır değildir — her cihaz, diğerlerinin kullanmadığı süreyi alır. KidGate uygulamasından değiştirin.',
    whatsOnTitle: 'Neler açık',
    whatsOnSub: 'Değişiklikler çocuk cihazıyla eşitlenir',
    rowBlockedHours: 'Engellenen Saatler',
    rowBlockedHoursDesc_one: '{{count}} zaman aralığı · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} zaman aralığı · {{list}}',
    rowAppBlocking: 'Uygulama Engelleme',
    rowAppBlockingApps: '{{count}} uygulama',
    rowAppBlockingApps_one: '{{count}} uygulama',
    rowAppBlockingCategories: '{{count}} kategori',
    rowAppBlockingCategories_one: '{{count}} kategori',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Web filtresi',
    rowWebFilterDesc_one: '{{count}} kategori reddedildi',
    rowWebFilterDesc_other: '{{count}} kategori reddedildi',
    rowNotSupported: 'Bu cihazda desteklenmiyor',
    rowWebFilterAwaitingApproval: 'Cihazda onay bekliyor',
    rowWebFilterSwitchedOff: 'Cihazda kapalı',
    rowLocation: 'Konum paylaşımı',
    rowLocationDesc: 'Son güncelleme {{when}}',
    rowLocationNone: 'Henüz konum yok',
    rowSearchMonitoring: 'Arama denetimi',
    rowSafeSearch: 'Güvenli Aramayı zorunlu kıl',
    rowSafeSearchDesc:
      'Google SafeSearch, YouTube Kısıtlı Mod, Bing ve DuckDuckGo’yu katı ayarda kilitler. Android, Android TV ve Chrome. Bu seviyede YouTube yorumları da gizler ve bazı sıradan videoları engeller.',

    webFilterCatsTitle: 'Web filtresi kategorileri',
    webFilterCatsSub: 'Engellenen içerik türleri',
    dnsHint:
      'Filtre çalışırken şifreli DNS çözücüleri her zaman reddedilir — onları erişilebilir bırakmak, bir tarayıcının diğer bütün kategorileri dolaşmasına izin veren şeydir.',
    starChartTitle: 'Yıldız tablosu',
    starChartSub: 'Bu hafta her çocuğun topladığı yıldızlar',
    starChartEmpty:
      'Yıldız tablosunu başlatmak için uygulamada ikinci bir çocuk ekleyin.',
    starChartStars: '{{count}} yıldız',
    rewardTasksTitle: 'Ödül görevleri',
    rewardTasksSub: 'Görevleri tamamlayarak ek dakika kazanın',
    rewardTaskMeta: '+{{minutes}} dk · {{cadence}}',
    rewardTaskStars: 'Zorluk: 3 üzerinden {{count}}',
    rewardTaskWaiting: ' · onayınız bekleniyor',
    approve: 'Onayla',
    siteRequestsTitle: 'Site istekleri',
    siteRequestsSub: 'Bu cihazın izin istediği siteler',
    siteRequestAllow: 'İzin ver',
    siteRequestDeny: 'Şimdi değil',
    attnSiteRequest: '{{name}} {{domain}} adresini açmak istiyor',
    toastSiteAllowed: 'Siteye izin verildi',
    timelineTitle: 'Ne zaman kullanıldı',
    timelineSub: 'Bugün, gece yarısından gece yarısına. Yeşil, cihazda geçen süredir.',
    timelineSubDay:
      '{{date}}, gece yarısından gece yarısına. Yeşil, cihazda geçen süredir.',
  },

  controlError: {
    generic: 'Bu işlem geçmedi. Yeniden deneyin.',
    network: 'Bağlantı yok. Ağınızı kontrol edip yeniden deneyin.',
    sessionExpired: 'Oturumunuz sona erdi. Yeniden giriş yapın.',
    forbidden:
      'Bu tarayıcı oturumu değişiklik yapamaz. KidGate uygulamasıyla QR kodu okutarak yeniden giriş yapın.',
    notFound: 'Artık orada değil — telefondan değiştirilmiş olabilir.',
    conflict:
      'Bunu az önce başkası değiştirdi. Son durumu görmek için yeniden yükleyin.',
    rateLimited: 'Aynı anda çok fazla değişiklik. Biraz bekleyip yeniden deneyin.',
    server: 'KidGate bunu tamamlayamadı. Birazdan yeniden deneyin.',
    premiumRequired:
      'Bu bir Premium özelliğidir. Planlar telefonunuzdaki KidGate uygulamasından yönetilir.',
  },

  report: {
    title: 'Haftalık rapor',
    subtitle: 'KidGate’in bu hafta fark ettikleri.',
    weekOf: '{{week}} haftası',
    writtenAt: '{{when}} tarihinde yazıldı',
    triggerScheduled: 'Pazartesi gönderildi',
    triggerManual: 'Sizin oluşturduğunuz',
    highlights: 'Bilmekte fayda var',
    narrativeTitle: 'Tek cümleyle',
    finePrint:
      'Rakamlar {{from}} – {{to}} arasını, ailedeki tüm cihazları kapsar. Ekran Süresi cihazların bildirdiğidir; ölçülemeyen dakikalar hiçbir toplama dahil değildir.',
    shareImage: 'Görsel olarak kaydet',
    sharePdf: 'PDF olarak kaydet',
    copySummary: 'Özeti kopyala',
    copied: 'Özet kopyalandı.',
    imageSaved: 'Görsel kaydedildi.',
    shareFailed: 'Bu tarayıcı bunu kaydedemiyor. Bunun yerine özeti kopyalayın.',
    emptyTitle: 'Henüz rapor yok',
    emptyBody: 'Her pazartesi sabahı bir rapor gelir ve önceki yedi günü kapsar.',
    noUsage:
      'Son iki haftada ekran süresi kaydedilmedi, bu yüzden henüz raporlanacak bir şey yok. Çevrimdışı bir cihaz hiçbir şey bildirmez; bu, sakin bir haftayla aynı şey değildir.',
    rateLimited: 'Çok fazla deneme. Bir dakika bekleyin.',
    loadFailedTitle: 'Raporlar yüklenemedi',
    loadFailed: 'Raporlar açılamadı. Yeniden denemek için sayfayı yenileyin.',
    retryLoad: 'Tekrar dene',
    failed: 'Rapor yazılamadı. Birazdan yeniden deneyin.',
    existed: 'Bu haftanın raporu zaten vardı — işte burada.',
    childrenTitle: 'Her çocuk',
    childrenNote: 'Aynı iki hafta, cihaz başına. Yüzdeler ailenin toplamına göredir.',
    colScreenTime: 'Ekran Süresi',
    colShare: 'Pay',
    colChange: 'Geçen haftaya göre',
    colLimit: 'Sınırın üzerinde',
    colLateNights: 'Geç geceler',
    colTopApp: 'En çok kullanılan',
    noLimit: 'Sınır yok',
    busiest: 'En çok ekran süresi',

    historyTitle: 'Önceki haftalar',
    historyEmpty: 'Bundan sonra aldığınız raporlar burada bir yıl saklanır.',
  },

  support: {
    title: 'KidGate Destek',
    updated: 'Yardım için buradayız',

    contactTitle: 'Bize ulaşın',
    contactEmail: '**E-posta:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Yanıt süresi:** genellikle bir iş günü içinde',
    contactNote:
      'Bize yazarken KidGate ebeveyn hesabınızın e-posta adresini ve sorunun kısa bir açıklamasını ekleyin; böylece size daha hızlı yardımcı olabiliriz.',

    startTitle: 'Başlarken',
    start1:
      '**1. Ebeveyn cihazını kurun.** KidGate’i yükleyin, uygulamayı açın ve *Bu bir ebeveyn cihazı* seçeneğini seçin. Google ya da e-posta ile (iPhone’da Apple ile de) giriş yapın ve ailenize bir ad verin.',
    start2:
      '**2. Bir Ebeveyn PIN’i belirleyin.** *Ayarlar → Güvenlik* bölümüne gidip 6 haneli bir Ebeveyn PIN’i belirleyin. Hassas ayarları değiştirmek ve çocuk cihazında engellenecek uygulamaları seçmek için gerekir. Çocuklarınızla paylaşmayın.',
    start3:
      '**3. Çocuk cihazını bağlayın.** Çocuğunuzun cihazına KidGate’i yükleyip açın. Telefon veya tablette *Bu bir çocuk cihazı* seçeneğini seçin. Ebeveyn cihazında *Aile* bölümünü açın ve tarama simgesine dokunun (*Kod tara*), sonra çocuk cihazında görünen QR kodu okutun (ya da 6 karakterlik kodu girin). Çocuk cihazı onay isterse bağlantıyı orada onaylayın; TV kendiliğinden bağlanır.',
    start4:
      '**4. Çocuk cihazında izinleri verin.** Çocuk cihazında *Durum* ekranını açın ve *Kuruluma devam et* seçeneğine dokunun — KidGate’in ihtiyaç duyduğu her izinde size yol gösterir. Android’de: bildirimler, Kullanım Erişimi, Diğer uygulamaların üzerinde göster, Erişilebilirlik (kilit yardımcısı), Alarmlar ve hatırlatıcılar ile Sınırsız pil; iOS’ta: *Uygulama ve Web Sitesi Kullanımına İzin Ver* (Ekran Süresi) ve Web filtresi için, iOS VPN konfigürasyonları eklemek için izin istediğinde *İzin Ver*. Bunlar açılmadan denetimler tam olarak çalışmaz.',
    start5:
      '**5. Denetimleri yapılandırın.** Ebeveyn cihazından çocuğun cihaz kartını açın ve Günlük sınır, Engellenen Saatler, Engellenen Uygulamalar, Web filtresi ve konum özelliklerini ayarlayın.',
    startNote:
      'Uygulamada adım adım bir rehber de var: *Ayarlar → Kullanıcı kılavuzu*. Cihaz eşleştirme, izinler, günlük denetimler ve güvenlik özelliklerini ayrıntılı anlatır.',

    faqTitle: 'Sık sorulan sorular',

    faq1Q: 'Ailemi bilgisayardan yönetebilir miyim?',
    faq1A:
      'Evet. [Web panelini](/dashboard) açın ve gösterdiği kodu telefonunuzdaki KidGate uygulamasıyla tarayın — ya da uygulamada kullandığınız hesapla giriş yapın: Google, Apple ya da e-posta ve parolanız. Aynı aileyi, cihazları, raporları ve ayarları gösterir. Hesapla giriş yaptığınızda bir denetimi değiştirmek Ebeveyn PIN’inizi ister. Hesap oluşturma ve cihaz eşleştirme yine mobil uygulamada yapılır.',

    faq2Q: 'Ebeveyn ve çocuk cihazlarını nasıl eşleştiririm?',
    faq2A:
      'Çocuk cihazında KidGate’i açın. Telefon veya tablette *Bu bir çocuk cihazı* seçeneğini seçin. Bir QR kod ve 6 karakterlik bir kod görünür. Ebeveyn cihazında *Aile* bölümünü açın ve tarama simgesine dokunun (*Kod tara*), sonra QR kodu okutun (önerilir) ya da kodu elle girin. Çocuk cihazı onay isterse ebeveynin adını orada onaylayın; TV kendiliğinden bağlanır. Kodların süresi dolar — eşleştirme başarısız olursa çocuk cihazında *Yeni kod* seçeneğine dokunup tekrar deneyin.',

    faq3Q: 'İki ebeveyn aynı aileyi yönetebilir mi?',
    faq3A:
      'Evet. Aile sahibinin cihazında *Aile → + → Ebeveyn davet et* bölümünü açın ve davet QR kodunu ya da kodu paylaşın. Diğer ebeveyn KidGate’i yükler, ebeveyn olarak giriş yapar, *Aile* bölümünü açıp tarama simgesine dokunur (*Kod tara*), ardından QR kodu okutur ya da davet kodunu yazar. Sonra aile sahibi isteği onaylar. Bir ailede ücretsiz planda ve deneme süresince en fazla 3, Premium ile en fazla 6 ebeveyn olabilir. Tek abonelik tüm aileyi kapsar; yalnızca aile sahibi öder.',

    faq4Q: 'Ücretsiz deneme nasıl çalışır?',
    faq4A:
      '7 günlük deneme, ilk ebeveyn ve çocuk cihazlarınız bağlandığında başlar ve tüm özelliklere tam erişim verir. Bir çocuk cihazını kaldırmak denemeyi sıfırlamaz. Bittiğinde tüm kurallar ücretsiz çalışmaya devam eder ve seçtiğiniz bir çocuk cihazı veri göndermeyi sürdürür; Premium canlı etkinliği, geçmişi, haftalık raporları ve tüm cihazlardan veri gönderimini geri getirir.',

    faq5Q: 'Aboneliğimi nasıl iptal ederim?',
    faq5A:
      'Abonelikler KidGate tarafından değil, App Store veya Google Play üzerinden faturalandırılır. iOS’ta: *Ayarlar → adınız → Abonelikler*. Android’de: *Google Play → profil simgesi → Ödemeler ve abonelikler → Abonelikler*. Mevcut dönemin bitmesine en az 24 saat kala iptal etmezseniz abonelik otomatik yenilenir.',

    faq6Q: 'Satın alımlarımı nasıl geri yüklerim?',
    faq6A:
      'Ebeveyn cihazında *Planlar* ekranını açın ve *Satın alımları geri yükle* seçeneğine dokunun. İlk satın alımda kullandığınız mağaza hesabıyla giriş yaptığınızdan emin olun. Yalnızca aile sahibinin abone olabileceğini veya satın alımları geri yükleyebileceğini unutmayın.',

    faq7Q: 'Ekran süresi verileri neden görünmüyor?',
    faq7A:
      'Kullanım verileri çocuk cihazından gelir. Çocuk cihazının çevrimiçi olduğunu doğrulayın, sonra o cihazda KidGate’i açıp *Durum* ekranına bakın — her izin satırı izin verildi olarak görünmelidir (Android’de ekran süresi takibi için Kullanım Erişimi gerekir). Raporların eşitlenmesi birkaç dakika sürebilir.',

    faq8Q: 'Kilitleme veya engellenen saatler neden çalışmıyor?',
    faq8A:
      'Android’de kilitleme için *Diğer uygulamaların üzerinde göster* ve *Erişilebilirlik* yardımcısının açık olması, ayrıca kısıtlamasız pil gerekir. Xiaomi, Samsung, Oppo, Vivo ve benzeri cihazlarda otomatik başlatmaya da izin verin ve KidGate’i “uyuyan uygulamalar” listelerinden çıkarın (çocuk cihazında *Durum → Otomatik başlatmaya izin ver* bölümüne bakın). iOS’ta kilitleme Ekran Süresi yetkisine bağlıdır. Bir izin sonradan kapatılırsa ebeveyn cihazınıza bir koruma uyarısı gelir.',

    faq9Q: 'Belirli uygulamaları nasıl engellerim?',
    faq9A:
      'Uygulama seçimi çocuk cihazında yapılır: *KidGate → Ayarlar* bölümünü açın, *Ebeveyn PIN’i ile Kilidi Aç* seçeneğine dokunun, *Engellenen Uygulamalar* bölümünü açın, uygulamaları seçip kaydedin. Ardından ebeveyn cihazında o cihazın *Engellenen Uygulamalar* ekranını açıp *Uygulama Engellemeyi Etkinleştir* seçeneğini açın. iOS’ta Apple, tam uygulama adlarını ebeveyn cihazından gizleyebilir — bu bir platform sınırlamasıdır.',

    faq10Q: 'Çocuğumun konumu neden güncellenmiyor?',
    faq10A:
      'Çocuk cihazında KidGate için konuma izin verilmiş olmalı ve cihazın ağ bağlantısı bulunmalıdır. Ebeveyn cihazından o cihazın *Konum* ekranını açın ve *Konumu yenile* seçeneğine dokunun. Pil tasarrufu modları güncellemeleri geciktirebilir, kapalı alanlarda GPS daha az hassas olabilir.',

    faq11Q: 'KidGate’i çocuğumun cihazından nasıl kaldırırım?',
    faq11A:
      'Önce cihazı ebeveyn uygulamasından kaldırın (*Aile* bölümünde cihazı açıp kaldır seçeneğini seçin), sonra çocuğun cihazındaki uygulamayı silin.',

    faq12Q: 'Hesabımı ve verilerimi nasıl silerim?',
    faq12A:
      'Ebeveyn uygulamasında *Ayarlar → Hesap → Hesabı sil* bölümüne gidin. İptal edebileceğiniz 14 günlük bekleme süresinin ardından bu işlem tüm ebeveynler ve çocuklar için aile hesabınızı ve bütün verileri — cihazlar, etkinlik, konum geçmişi ve SOS fotoğrafları — kalıcı olarak siler. Uygulama yüklü değilken silme dahil tüm seçenekler için [Hesap ve Veri Silme](/delete-account) sayfamıza bakın.',

    legalTitle: 'Yasal',
    legalDeletion: 'Hesap ve Veri Silme',
  },

  download: {
    eyebrow: 'İndir',
    qrScan: 'Uygulamayı indirmek için telefonunuzun kamerasıyla tarayın',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 veya üzeri, Apple silicon işlemcili bir Mac’te.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 veya üzeri, 64 bit.',
    button: 'İndir',
    warningSub:
      'Windows, kendi mağazası dışından, henüz doğrulanmış listesinde olmayan bir geliştirici tarafından kurulan her uygulama için bir SmartScreen uyarısı gösterir — KidGate’te bulunan bir şeyi işaret etmez. Yukarıdaki Windows kartı buna nasıl izin verileceğini anlatır. Mac paketi bir Apple Developer ID ile imzalanmış ve Apple tarafından onaylanmıştır; bu yüzden hiçbir uyarı vermez. Yalnızca kidgate.app üzerinden indirin.',
    macosSteps:
      'İndirdiğiniz paketi açın ve yükleyiciyi izleyin. Ardından macOS, KidGate sistem uzantısına izin vermenizi bir kez ister: bu mesajın gösterdiği ayarları açın ve izni orada verin. Siz izin verene kadar Web filtresi çalışmaz.',
    windowsSteps:
      'Windows bilgisayarınızı koruduğunu söylediğinde Ek bilgi’yi, ardından Yine de çalıştır’ı seçin.',
  },
  about: {
    eyebrow: 'Hakkımızda',
    title: 'Ailenin gerçekten uzlaşabildiği',
    titleAccent: 'bir ebeveyn denetimi.',
    lede: 'KidGate, tek bir ürün üzerinde çalışan bağımsız bir geliştirici tarafından yapılıyor. Duruşumuz şu: bir ebeveyn uygulamanın söylediğine güvenebilmeli — yardımcı olamadığını söylediği yerler dahil.',
    storyEyebrow: 'KidGate neden var',
    storyTitle: 'Ekran süresi her evin tartışması hâline geldi',
    storyP1:
      'Neredeyse her ailede aynı akşam yaşanır: kimsenin üzerinde anlaşmadığı bir sayaç, elden alınan bir telefon ve kuralların arkasından değiştirildiğine emin bir çocuk. Bunu düzeltmesi beklenen araçlar çoğunlukla durumu kötüleştirdi — bir yanda açıklamasız bir kilit, diğer yanda gözetim gibi okunan bir panel.',
    storyP2:
      'Biz de evde istediğimiz sürümü yaptık. Ebeveyn Günlük sınırı, Engellenen Saatler’i, Engellenen Uygulamalar’ı ve Web filtresini bir kez ayarlıyor, cihaz da bunlara uyuyor. Çocuk ebeveynin gördüğü aynı sayıları görüyor, daha fazla süre isteyebiliyor ve cihaz çevrimiçi olduğu sürece SOS ile ebeveynine ulaşabiliyor. KidGate orada değilmiş gibi yapmıyor.',
    storyP3:
      'iPhone, Android, Mac, Windows ve Android TV üzerinde çalışıyor; Web filtresi için bir Chrome uzantısı ve ebeveynlerin her tarayıcıda açtığı bir panel de var. Tek aile, tek abonelik, bütün cihazlar.',
    valuesEyebrow: 'Neye inanıyoruz',
    valuesTitle: 'Çiğnemediğimiz dört kural',
    valuesSub:
      'İlk özellikten önce yazıldı; o günden beri her özellik bunlara göre ölçülüyor.',
    value1Title: 'Çocuk şüpheli değildir',
    value1Text:
      'Kurallar, geçerli oldukları cihazda görünür. Çocuk neyin açık olduğunu ve ne kadar süresi kaldığını görür, daha fazlasını isteyebilir ve istediği an SOS verebilir. Gizli kalmak zorunda olan bir denetim, ailenin üzerinde konuşabileceği bir denetim değildir.',
    value2Title: 'Ailenizin verisi satılık değil',
    value2Text:
      'Asla reklam yok. Bir çocuğa dair hiçbir şey reklam için kullanılmaz ya da başkasına satılmaz. Aile hesabınızın ve içindeki her şeyin silinmesini istediğiniz zaman isteyebilirsiniz — uygulamanın içinden ya da bu sitede anlatıldığı gibi e-postayla — ve 14 gün sonra hepsi silinmiş olur.',
    value3Title: 'Yapamadığımızı söyleriz',
    value3Text:
      'Her platform, bir uygulamanın neyi zorunlu kılabileceğini sınırlar. KidGate’in yalnızca elinden geleni yaptığı yerlerde — bilgisayarda engellenen bir uygulamayı açılmadan durdurmak yerine kapatmak gibi — ekran yeşil bir onay işareti göstermek yerine bunu açıkça yazar.',
    value4Title: 'Tek aile, tek plan',
    value4Text:
      'Tek bir Premium aboneliği bütün ebeveynleri ve bütün çocuk cihazlarını kapsar. Abonelik olmadan da Günlük sınır, Engellenen Saatler, Engellenen Uygulamalar, Cihaz Kilidi ve Web filtresi tüm çocuk cihazlarında çalışmaya devam eder ve SOS size her zaman ulaşır; temel güvenlik kuralları asla ödeme duvarının arkasında kalmaz.',
    makeEyebrow: 'Ne yapıyoruz',
    makeTitle: 'Ekran nerede olursa olsun, tek bir KidGate',
    makeSub:
      'Aynı kurallar, bir kez yazılır, her platformun izin verdiği kadarıyla uygulanır.',
    make1Title: 'iPhone ve iPad',
    make1Text:
      'Günlük sınır, Engellenen Saatler ve uygulama engelleme, Apple’ın kendi Ekran Süresi altyapısıyla; Web filtresi ise cihazın kendisindeki özel bir bağlantıyla.',
    make2Title: 'Android',
    make2Text:
      'Sınırlar, uygulama engelleme, tam ekran kilit ve Web filtresi; ayrıca yeni bir uygulama göründüğünde uyarı.',
    make3Title: 'macOS',
    make3Text:
      'Mac’teki masaüstü aracı: aynı program ve aynı sınırlar, bir de ebeveynin gerçekten okuyabileceği bir gün.',
    make4Title: 'Windows',
    make4Text:
      'PC’de aynı araç; kapatıldığında ya da sonlandırıldığında onu yeniden başlatan bir arka plan hizmetiyle birlikte.',
    make5Title: 'Android TV',
    make5Text:
      'Oturma odasındaki ekran; tek bir çocuğun değil, ailenin ortak cihazı olarak ele alınır — telefonlardaki aynı sınırlar ve aynı program ile. Televizyonda konum ve SOS yok.',
    make6Title: 'Chrome',
    make6Text:
      'KidGate’in kurulu olduğu bir bilgisayarda da, kurulamadığı bir bilgisayarda da Chrome içinde aynı Web filtresini taşıyan bir tarayıcı uzantısı. Yalnızca Chrome içinde web filtrelemesi yapar; ekran süresini ölçmez ve uygulama engellemez.',
    make7Title: 'Ebeveyn paneli',
    make7Text:
      'Tarayıcı, ebeveynin ikinci ekranıdır. Telefonunuzla bir kod tarayarak herhangi bir bilgisayardan giriş yapın; kurulacak bir şey yok.',
    factsEyebrow: 'Bugün KidGate',
    factsTitle: 'Dört sayı',
    fact1Label: 'dil, Arapçadan Vietnamcaya',
    fact2Label: 'platform, artı panel',
    fact3Label: 'reklam, asla',
    fact4Label: 'aile başına abonelik',
    contactEyebrow: 'Bize yazın',
    contactTitle: 'Her mesajı bir insan okuyor',
    contactSub:
      'Bir soru, bir hata, ailenizin ihtiyaç duyduğu bir özellik ya da kendi dilinizde yanlış duran bir çeviri — bize yazın.',
    contactEmail: 'E-posta gönderin',
    contactSupport: 'Destek ve rehberler',
    contactPrivacy: 'Verileri nasıl işliyoruz',
  },
  promo: {
    intro: 'Çocuğunuzun bütün günü boyunca içiniz rahat.',
    school: 'Ders başlayınca telefon kendini kilitler.',
    apps: 'Engellediğiniz uygulamalar açılmaz.',
    arrive: 'Anneanneye vardığında bildirim alırsınız.',
    checkIn: 'Halini sorarsınız; tek dokunuşla iyi olduğunu bildirir.',
    sos: 'Bir sorun olursa tek bir SOS, nerede olduğunu gösterir.',
    limit: 'Oyun süresi doldu. Telefon kendini kilitler.',
    lockNow: 'Yemek hazır. Onun telefonunu kendi telefonunuzdan kilitleyin.',
    web: 'Zararlı siteleri her cihazda engelleyin.',
    tv: 'Salondaki televizyon da aynı ev kurallarına uyar.',
    reward: 'Ödev bitti: 15 ek dakika kazanıldı.',
    bedtime: 'Yatma saatinde telefon, bilgisayar ve televizyon da uyur.',
    kid: 'Çocuk',
    parent: 'Ebeveyn',
    arrivedNotice: 'Elif anneannesine vardı',
    checkAsk: 'İyi misin?',
    checkReply: 'İyiyim',
    sosNotice: 'Elif SOS gönderdi',
    timeUp: 'Bugünlük oyun süresi bitti',
    lockButton: 'Şimdi kilitle',
    task: 'Ödev bitti',
    granted: '+15 dk',
    youtubeTitle: 'KidGate — Telefon, bilgisayar ve TV için ebeveyn denetimi',
    youtubeDescription:
      'KidGate ile sıradan bir gün: okul zilinden yatma saatine kadar.',
  },
};
