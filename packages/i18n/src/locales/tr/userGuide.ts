export const userGuide = {
  title: 'Kullanıcı kılavuzu',
  subtitle:
    'İzinler, cihaz eşleştirme, günlük kontroller ve güvenlik özellikleri hakkında adım adım yardım.',
  stepLabel: 'Adım {{n}}',
  stepsSectionTitle: 'Adımlar',
  tipTitle: 'İpucu',
  searchPlaceholder: 'Kılavuzda ara…',
  searchClear: 'Aramayı temizle',
  searchEmpty: 'Kılavuzda eşleşen bir şey yok. Başka bir kelime deneyin.',
  groups: {
    gettingStarted: {
      title: 'Başlarken',
      description: 'Ebeveyn ve çocuk cihazlarını ilk kez kurun',
    },
    connection: {
      title: 'Cihazları bağla',
      description: 'Bir çocuk cihazı eşleştirin veya başka bir ebeveyni davet edin',
    },
    permissions: {
      title: 'Uygulama izinleri',
      description: 'KidGate’in çocuk cihazında ihtiyaç duyduğu izinleri verin',
    },
    controls: {
      title: 'Günlük kontroller',
      description:
        'Sınırlar, programlar, uygulama engelleme, cihaz kilitleme, ek süre ve ödüller',
    },
    safety: {
      title: 'Güvenlik ve izleme',
      description: 'Konum, Check-In, SOS, Web filtresi ve koruma',
    },
    reports: {
      title: 'Raporlar ve geçmiş',
      description:
        'Ekran süresi raporları, web ve video geçmişi, uygulama ve mesaj uyarıları',
    },
    account: {
      title: 'Hesap ve plan',
      description:
        'Premium, uyarılar, dil, web paneli, PIN’ler, destek ve hesabınızı silme',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Ebeveyn cihazı kurma',
      summary:
        'Hesabınızı ve ailenizi oluşturun, ardından ilk çocuk cihazınızı bağlayın.',
      tip: 'Ebeveyn PIN’ini erkenden belirleyin. Hassas ayarları değiştirmek ve çocuk cihazındaki kontrollerin kilidini açmak için buna ihtiyacınız olacak.',
      steps: {
        '1': 'KidGate’i cihazınıza yükleyin. Uygulamayı açın ve Bu bir ebeveyn cihazı seçeneğini işaretleyin.',
        '2': 'Google veya Apple ile giriş yapın ya da bir e-posta hesabı oluşturun.',
        '3': 'Aile bölümünde Aile oluştur’u seçin ve ailenize bir isim verin (örneğin, “Nguyen ailesi”). Bu isim başka ebeveynler katıldığında görünür. Ailenizi başka bir ebeveyn zaten oluşturduysa bunun yerine Aileye katıl’ı seçin.',
        '4': 'Ayarlar, ardından Güvenlik bölümünden bir Ebeveyn PIN’i (6 haneli) belirleyin. Ezberleyin veya güvenli bir yerde saklayın, çocuklarla paylaşmayın.',
        '5': 'Önerilir: başkalarının cihazınızda ebeveyn uygulamasını açamaması için Ayarlar’dan Uygulama Kilidi’ni ve biyometrik kilit açmayı etkinleştirin.',
        '6': 'Aile’yi açın, + simgesine dokunun ve Çocuk cihazı ekle’yi seçin. Bu ekranı çocuk cihazında gösterilen QR kodu veya kodu okutmak için açık tutun.',
        '7': 'Çocuk cihazı bağlandıktan sonra Aile bölümünde çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın. Günlük sınırı ve Engellenen Saatleri belirleyin, izinleri çocuğunuzla birlikte tamamlayın.',
      },
    },
    getStartedChild: {
      title: 'Çocuk cihazı kurma',
      summary: 'KidGate’i çocuk cihazına yükleyin ve izinleri tamamlayın.',
      tip: 'Bunu bir ebeveynle birlikte yapın. Birçok izin ekranı yalnızca bir kez görünür ve tek başına kolayca gözden kaçabilir.',
      steps: {
        '1': 'KidGate’i çocuk cihazına yükleyin. Uygulamayı açın ve Bu bir çocuk cihazı seçeneğini işaretleyin.',
        '2': 'Eşleştirme ekranını açık tutun. QR kodunu ebeveyne gösterin veya 6 haneli kodu sesli okuyun.',
        '3': 'Ebeveyn cihazında QR kodunu tarayın veya kodu girin. Çocuk cihazında istendiğinde ebeveyni onaylayın — yalnızca tanıdığınız birini kabul edin.',
        '4': 'Ana ekranda cihazın bağlandığı gösterilene kadar bekleyin. Kurulum sırasında KidGate’i zorla kapatmayın.',
        '5': 'Durum ekranında KidGate’in istediği tüm izinleri verin (bildirimler, konum, kamera ve platforma özgü izinler). İzin verildi olarak görünene kadar her satıra dokunun.',
        '6': 'KidGate’i çocuk cihazında yüklü ve oturum açık bırakın. Bundan sonra ebeveynler sınırları kendi cihazlarından yönetir.',
      },
    },
    connectChild: {
      title: 'Çocuğun telefonunu veya tabletini bağlama',
      summary: 'Yeni bir çocuk cihazını bir QR kodu veya kodla ailenize eşleştirin.',
      tip: 'Kodların süresi dolar. Eşleştirme başarısız olursa çocuk cihazında Yeni kod’u seçip tekrar deneyin.',
      steps: {
        '1': 'Çocuk cihazında: KidGate, ardından Bu bir çocuk cihazı’nı açın. QR kodu ekranını görünür bırakın.',
        '2': 'Ebeveyn cihazında: Aile’yi açın ve tarama simgesine dokunun (Kod tara).',
        '3': 'Kamera hemen açılır: istenirse kameraya izin verin ve çocuk cihazındaki QR kodunu çerçeve içine hizalayın.',
        '4': 'Ya da kodu kullanın: Kodu elle gir’i seçin, çocuk cihazında gösterilen 6 karakteri yazın, sonra devam edin.',
        '5': 'Çocuk cihazında onay ekranını dikkatle okuyun. Ebeveyn adı doğruysa Evet, bağla’yı seçin.',
        '6': 'Ebeveyn cihazının bağlantıyı onaylamasını bekleyin. Yeni cihaz Aile bölümünde görünür.',
        '7': 'Yeni cihazı açın ve Son etkinlik alanının güncellendiğini kontrol edin. Çevrimdışı kalmaya devam ederse çocuk cihazında KidGate’i yeniden açın ve ağ bağlantısını kontrol edin.',
        '8': 'Ardından çocuk cihazında izinleri verin (Uygulama izinleri grubuna bakın). Bu izinler açılana kadar kontroller tam olarak çalışmaz.',
      },
    },
    connectComputer: {
      title: 'Bilgisayar bağlama (Mac veya Windows)',
      summary:
        'KidGate’i çocuğunuzun Mac’ine veya Windows PC’sine yükleyin ve bir telefonla aynı şekilde eşleştirin.',
      keywords: 'mac, macbook, windows, pc, dizüstü, bilgisayar',
      tip: 'KidGate’i, bilgisayarda çocuğunuzun kendi hesabı açıkken kurun ve bu hesabı standart (yönetici olmayan) bir hesap yapın. Yönetici hesabı KidGate’i kaldırabilir.',
      steps: {
        '1': 'Bilgisayarda kidgate.app/download adresini açın ve Mac veya Windows için KidGate’i indirin.',
        '2': 'Yükleyiciyi çalıştırın ve yönetici izni istemini onaylayın. Windows bilgisayarınızı koruduğunu söylerse Ek bilgi’yi, ardından Yine de çalıştır’ı seçin.',
        '3': 'KidGate’i bilgisayarda açın. Ekranda bir QR kodu ve 6 haneli bir kod görünür; oturum açmanız gerekmez.',
        '4': 'Kendi cihazınızda Aile’yi açın, tarama simgesine dokunun (Kod tara) ve QR kodunu tarayın — ya da Kodu elle gir’i seçip kodu yazın.',
        '5': 'Bilgisayarda ebeveyn adını kontrol edin ve Evet, bağla’yı seçin.',
        '6': '“Bu cihazın kurulumunu tamamlayın” listesindeki adımları sırayla uygulayın. Mac’te “Web filtrelemeyi onaylayın” satırının yanındaki Ayarları aç’ı seçin ve açılan sayfada KidGate’i etkinleştirin — bunu yapana kadar Web filtresi çalışmaz. Konum ve Kamera için İzin ver’i seçin.',
        '7': 'Kendi cihazınıza dönüp bilgisayarı hangi çocuğun kullandığını seçin. Engellenecek uygulamalar, Ebeveyn PIN’i girildikten sonra bilgisayarın kendisinde seçilir (Engellenecek uygulamaları seç).',
      },
    },
    connectTv: {
      title: 'Android TV bağlama',
      summary:
        'KidGate’i bir Android TV’ye yükleyin ve kumandayla hiçbir şey yazmadan kendi cihazınızdan eşleştirin.',
      keywords: 'android tv, google tv, televizyon, tv, fire tv, kutu',
      tip: 'TV’de Konum, SOS, Check-In ve Süre istekleri yoktur; engellenen bir uygulama açılmadan önce durdurulmaz, açıldıktan sonra kapatılır. Ekran süresi verileri bir saate kadar gecikebilir.',
      steps: {
        '1': 'TV’de Google Play’i açın, KidGate’i arayın ve yükleyin.',
        '2': 'KidGate’i TV’de açın. Ekranda bir QR kodu ve 6 haneli bir kod görünür; oturum açmanız gerekmez.',
        '3': 'Kendi cihazınızda Aile’yi açın, tarama simgesine dokunun (Kod tara) ve TV’deki QR kodunu tarayın — ya da Kodu elle gir’i seçip kodu yazın.',
        '4': 'TV birkaç saniye içinde kendiliğinden bağlanır. Kumandayla onaylamanız gereken bir şey yoktur.',
        '5': 'TV’de “Korumayı ayarla” adımlarını izleyin: Erişilebilirlik, Kullanım Erişimi ve Diğer uygulamaların üzerinde göster izinlerini açmak için Ayarları aç’ı seçin, ardından Web filtresinin çalışabilmesi için VPN bağlantısını onaylayın.',
        '6': 'Bir ayar açık kalmıyorsa TV’yi yeniden başlatıp tekrar deneyin. “Korumayı ayarla”yı TV’deki KidGate ana ekranından yeniden açabilirsiniz.',
        '7': 'Kendi cihazınıza dönüp TV’yi hangi çocuğun kullandığını seçin. Engellenecek uygulamalar, Ebeveyn PIN’i girildikten sonra TV’nin kendisinde seçilir.',
      },
    },
    connectChrome: {
      title: 'Chrome uzantısını bağlama',
      summary:
        'KidGate web filtresini Chromebook, Mac veya PC’deki Chrome’a ekleyin. Uzantı ayrı bir cihaz olarak görünür.',
      keywords: 'chromebook, chrome uzantısı, tarayıcı uzantısı',
      tip: 'Uzantı yalnızca Chrome’u filtreler: diğer tarayıcıları filtrelemez, gizli pencereleri de siz izin vermedikçe filtrelemez. chrome://extensions sayfasında KidGate’in Ayrıntılar bölümünü açıp Gizli modda izin ver seçeneğini etkinleştirin.',
      steps: {
        '1': 'Çocuğunuzun bilgisayarındaki Chrome’da Chrome Web Mağazası’nı açın, KidGate’i arayın ve “Chrome’a ekle”yi seçin.',
        '2': 'Chrome araç çubuğundaki KidGate simgesini seçin. Simgeyi göremiyorsanız Uzantılar (yapboz parçası) menüsünden sabitleyin. Açılır pencerede bir QR kodu ve 6 haneli bir kod görünür; eşleştirme bitene kadar pencereyi açık tutun.',
        '3': 'Kendi cihazınızda Aile’yi açın, tarama simgesine dokunun (Kod tara) ve QR kodunu tarayın — ya da Kodu elle gir’i seçip kodu yazın.',
        '4': 'KidGate açılır penceresinde ebeveyn adını kontrol edin ve Evet, bağla’yı seçin.',
        '5': 'Kendi cihazınıza dönüp uzantıyı hangi çocuğun kullandığını seçin, ardından uzantı için Web filtresini açın. O zamana kadar uzantı Etkin değil olarak görünür.',
        '6': 'İsteğe bağlı: hangi videoların izlendiğini görmek için İzlenen videolar’ı açın ve uzantı için İzlenen videoları kaydet seçeneğini etkinleştirin.',
      },
    },
    inviteParent: {
      title: 'Başka bir ebeveyni davet etme',
      summary:
        'İkinci bir ebeveynin aynı aileye katılıp aynı çocuk cihazlarını yönetmesine izin verin.',
      tip: 'Katılma isteklerini yalnızca aile sahibi onaylayabilir. İstekler süresi dolabileceğinden hemen onaylayın. Bir ailede ücretsiz planda ve deneme süresince en fazla 3, Premium ile en fazla 6 ebeveyn olabilir.',
      steps: {
        '1': 'Aile sahibinin cihazında Aile’yi açın, ardından + simgesine dokunun, ardından Ebeveyn davet et.',
        '2': 'Henüz bir aile adı oluşturmadıysanız bir tane girin ve Aile oluştur’u seçin.',
        '3': 'Davet QR kodunu diğer ebeveyne gösterin veya davet kodunu onunla paylaşın.',
        '4': 'Diğer ebeveynin cihazında: KidGate’i ebeveyn olarak açın, Aile’yi açın ve tarama simgesine dokunun (Kod tara). Ardından davet QR kodunu tarayın veya kodu girin.',
        '5': 'Sahibin cihazına dönün, bekleyen isteği açın ve Onayla’yı seçin. Kişiyi tanımıyorsanız reddedin.',
        '6': 'Yeni ebeveyn aynı çocuk cihazlarını görecek ve sınırları yönetmeye yardımcı olabilecektir. Cihazları yeniden adlandırma veya kaldırma gibi bazı işlemler yalnızca sahibe özel kalır.',
      },
    },
    joinFamily: {
      title: 'Mevcut bir aileye katılma',
      summary: 'Ortak ebeveyn olmak için aile sahibinden gelen bir daveti kullanın.',
      tip: 'Onay isteğinin süresi dolarsa sahibinden yeni bir davet QR kodu veya kodu isteyin.',
      steps: {
        '1': 'KidGate’i yükleyin ve cihazınızda ebeveyn olarak oturum açın.',
        '2': 'Aile’yi açın ve tarama simgesine dokunun (Kod tara).',
        '3': 'Sahibin davet QR kodunu tarayın veya Kodu elle gir’i seçip 6 haneli davet kodunu yazın.',
        '4': 'Sahibin onaylamasını bekleyin. Aileye katıldığınızı görene kadar uygulamayı açık tutun.',
        '5': 'Çocuk cihazlarının Aile bölümünde göründüğünü doğrulayın. Durumunu ve kontrollerini görmek için bir cihazı açın.',
      },
    },
    manageDevices: {
      title: 'Cihazı yeniden adlandırma veya kaldırma',
      summary:
        'Bir cihaza herkesin tanıyacağı bir ad verin ya da çocuğunuzun artık kullanmadığı bir cihazın bağlantısını kesin.',
      keywords:
        'eşleştirmeyi kaldır, bağlantıyı kes, cihazı sil, eski telefon, yeni telefon, satıldı, adını değiştir, sıfırlama',
      tip: 'Cihazları yalnızca aile sahibi yeniden adlandırabilir veya kaldırabilir. Kaldırma geri alınamaz: cihazın süre istekleri ve etkinlik geçmişi silinir. Yeniden korumak için cihazı yeni bir cihaz olarak eşleştirin.',
      steps: {
        '1': 'Bir cihazı yeniden adlandırmak için onu “Aile”den veya çocuğunuzun profilinden açın, ardından adının yanındaki “Düzenle”yi seçin.',
        '2': 'Tüm ebeveynlerin bir bakışta tanıyacağı bir ad girin ve kaydedin.',
        '3': 'Bir cihazı kaldırmak için onu açın, ekranın altındaki “Cihazı kaldır”ı seçin ve onaylayın. Aile kartının “Çocuk cihazları” sekmesinde bir cihazı sola da kaydırabilirsiniz.',
        '4': 'Cihaz ailenizden ayrılır ve o cihazdaki KidGate, cihazın kaldırıldığını gösterir.',
        '5': 'Cihazı yeniden kullanmak için, örneğin sıfırlamadan sonra ya da başka bir çocuğa geçtiğinde, “Aile”de “Çocuk cihazı ekle” ile yeni cihaz olarak eşleştirin.',
      },
    },
    androidPermissions: {
      title: 'Android izinleri (çocuk cihazı)',
      summary:
        'Kullanım Erişimi, Diğer uygulamaların üzerinde göster, Erişilebilirlik, batarya ve ilgili izinleri açın.',
      keywords:
        'erişilebilirlik, kullanım erişimi, diğer uygulamaların üzerinde göster, bildirimler, cihaz yöneticisi, vpn, izin ver',
      tip: 'Eksiksizlik sıradan daha önemlidir. Kilitleme veya Engellenen Saatlere güvenmeden önce çocuğun Durum ekranındaki her kırmızı veya izin verilmemiş satır düzeltilmelidir.',
      steps: {
        '1': 'Çocuk cihazında KidGate, ardından Durum’u açın ve izin listesini yukarıdan aşağıya doğru tamamlayın.',
        '2': 'Bildirimler: satıra dokunun, ardından İzin ver. Kilitleme komutları ve süre istekleri için ebeveynlerin push bildirimlerine ihtiyacı vardır.',
        '3': 'Kullanım Erişimi: sistem ekranını açın, ardından KidGate’i bulun, ardından açın. Bu, ekran süresi takibi ve sınırlar için gereklidir.',
        '4': 'Diğer uygulamaların üzerinde göster: KidGate için izin verin. Kilit ekranının diğer uygulamaların üzerinde görünebilmesi için bu gereklidir.',
        '5': 'Erişilebilirlik kilit yardımcısı: Ayarlar’ı, ardından Erişilebilirlik’i açın, KidGate’i Yüklü / indirilen uygulamalar altında bulup açın. Bu, kilidin etkin kalmasını sağlar.',
        '6': 'Sınırsız pil: istendiğinde İzin ver’i seçin. İstem görünmüyorsa: Uygulama bilgisi, ardından Batarya, ardından Sınırsız.',
        '7': 'Alarmlar ve hatırlatıcılar: Engellenen Saatlerin zamanında başlayıp bitmesi için buna izin verin.',
        '8': 'Konum ve Kamera (Check-In veya SOS fotoğrafları kullanıyorsanız): KidGate istedikçe izin verin. Durum’a dönüp tüm satırların izinli olduğunu doğrulayın.',
      },
    },
    iosScreenTime: {
      title: 'iOS Ekran Süresi (çocuk cihazı)',
      summary:
        'Kilitleme, programlar ve uygulama seçiminin çalışabilmesi için Uygulama ve Web Sitesi Kullanımına izin verin.',
      keywords: 'ekran süresi, family controls, iphone, ipad, yetkilendir',
      tip: 'İzin Ver düğmesi görünmüyorsa iOS Ayarları, ardından Ekran Süresi’ni açın ve önce çocuk cihazında Ekran Süresi’nin etkin olduğundan emin olun.',
      steps: {
        '1': 'KidGate’i açın ve “Durum” ekranında kalın.',
        '2': 'Uygulama ve Web Sitesi Kullanımına İzin Ver’i (veya Ekran Süresi bannerını) seçin.',
        '3': 'Sistem iletişim kutusunda İzin Ver’i seçin. Lütfen bir seçim yapmadan iletişim kutusunu kapatmayın.',
        '4': 'KidGate’e dönün. Yetkilendirme başarılı olduğunda banner kaybolur.',
        '5': 'Yetkilendirme daha önce reddedildiyse: iOS Ayarları’nı açın, KidGate’i bulun, o sayfada Ekran Süresi’ni açın, ardından KidGate’i yeniden açın.',
        '6': 'Engellenecek uygulamaları seçmek için: çocuk cihazında KidGate Ayarları’nı açın, ardından “Ebeveyn PIN’i ile Kilidi Aç” düğmesini seçin, ardından Engellenen Uygulamalar’ı açın ve kaydedin.',
        '7': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Engellenen Uygulamalar’a gidin ve listenin senkronize olduğunu doğrulayın. Hazır olduğunuzda engellemeyi açın.',
      },
    },
    oemKeepRunning: {
      title: 'KidGate’i çalışır tutma (üretici ayarları)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei ve benzeri cihazlar genellikle arka plan uygulamalarını duraklatır.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, pil tasarrufu, otomatik başlatma, çalışmıyor, arka planda kapanıyor',
      tip: 'Batarya kurallarını değiştirdikten sonra çocuk cihazını bir kez yeniden başlatın, KidGate’i yeniden açın ve kilitlemeyi ebeveyn cihazından test edin.',
      steps: {
        '1': 'Çocuğun Android cihazında KidGate, ardından Durum’u açın ve Otomatik başlatmaya izin ver adımını bulun. Bu adım yalnızca üreticisinin gerektirdiği cihazlarda görünür.',
        '2': 'Üretici güvenlik ekranında KidGate için otomatik başlatmaya izin verin (ifadeler cihaza göre değişir).',
        '3': 'Hem Android ayarlarında hem de varsa üretici batarya menüsünde KidGate’in batarya kullanımını Sınırsız olarak ayarlayın.',
        '4': 'KidGate’i içeren “uyuyan uygulamalar”, “derin uyku uygulamaları” veya “uygulamaları uyut” listelerini devre dışı bırakın.',
        '5': 'Bir kısayol çalışmıyorsa Güvenlik / Cihaz bakımı uygulamasını manuel olarak açın ve KidGate, Otomatik başlatma veya Batarya’yı arayın.',
        '6': 'Tamamladıktan sonra KidGate’te her satırı Tamamlandı olarak işaretleyin, böylece nelerin kaldığını görebilirsiniz.',
      },
    },
    dailyLimit: {
      title: 'Günlük sınır belirleme',
      summary: 'Çocuğun cihazı her gün kaç dakika kullanabileceğini sınırlayın.',
      keywords: 'ekran süresi, günlük saat, süre doldu, bütçe, uzat',
      tip: 'Kullanım verisi çocuk cihazından gelir. Sayaç takılı kalmış gibi görünüyorsa çocuk cihazında KidGate’i açın ve senkronizasyonu bekleyin.',
      steps: {
        '1': 'Ebeveyn cihazında Aile’yi açın, ardından çocuğunuzun profiline (veya cihaz bir çocuğa atanmamışsa cihaza) dokunun.',
        '2': 'Temel kontroller altında Günlük sınır’ı seçin.',
        '3': 'Günlük dakika değerini seçin (veya mevcut sınırı düzenleyin), ardından kaydedin.',
        '4': 'Çocuk cihazı senkronize olduktan sonra cihaz kartının bugünün kullanılan ve sınır dakikalarını gösterdiğini doğrulayın.',
        '5': 'Sınıra ulaşıldığında cihaz platform kurallarına göre kilitlenir. Erişimi erken geri yüklemek isterseniz cihaz ekranında Kilidi aç’ı seçin.',
      },
    },
    blockedHours: {
      title: 'Engellenen Saatler belirleme',
      summary: 'Cihazın kilitli kalması gereken zaman aralıklarını planlayın.',
      keywords: 'yatma saati, gece, okul saatleri, program, mola',
      tip: 'Önce okul saatlerini ve yatış zamanlarını belirleyin. Programı anlaşılır tutmak için çakışan aralıklardan kaçının.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Engellenen Saatler.',
        '2': 'Engellenen zaman ekle’yi seçin, ardından başlangıç saatini, bitiş saatini ve tekrarlanacağı günleri belirleyin.',
        '3': 'Aralığı kaydedin. Başka bir aralık eklemek için bu adımları tekrarlayın.',
        '4': 'Bir etkinleştirme anahtarı gösteriliyorsa programı açın.',
        '5': 'Çocuk cihazında programın zamanında çalışması için Alarmlar ve hatırlatıcılar ile Ekran Süresi izinlerinin hâlâ verili olduğunu doğrulayın.',
        '6': 'Aktif bir aralık sırasında cihaz kartında Engellenen Saatler aktif · kilitli yazar. Kilidi aç’ı yalnızca programı bilerek geçersiz kılmak istediğinizde kullanın.',
      },
    },
    blockedApps: {
      title: 'Belirli uygulamaları engelleme',
      summary:
        'Çocuk cihazında uygulamaları seçin, ardından ebeveyn cihazından engellemeyi etkinleştirin.',
      keywords:
        'uygulama engelle, tiktok, facebook, instagram, oyun, roblox, uygulama gizle',
      tip: 'iOS’ta Apple, uygulamaların gerçek adlarını ebeveyn cihazlarından gizleyebilir. Seçim yine de çocuk cihazında Ebeveyn PIN’i ile yapılır.',
      steps: {
        '1': 'Çocuk cihazını doğrudan kullanın. KidGate, ardından Ayarlar’ı açın.',
        '2': '“Ebeveyn PIN’i ile Kilidi Aç” düğmesini seçin ve Ebeveyn PIN’ini girin.',
        '3': 'Engellenen Uygulamalar’ı açın (bilgisayarda veya TV’de: Engellenecek uygulamaları seç). Uygulamaları (ve gösteriliyorsa kategorileri) seçin, ardından çocuk cihazında kaydedin.',
        '4': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Engellenen Uygulamalar’a gidin ve seçilen listenin görünmesini bekleyin.',
        '5': 'Uygulama Engellemeyi Etkinleştir’i açın. Durum, Engelleme açık olarak görünmelidir.',
        '6': 'Çocuk cihazında engellenen bir uygulamayı açarak test edin. Platform kurallarına göre kısıtlanmalıdır.',
        '7': 'Listeyi daha sonra değiştirmek için seçimi çocuk cihazında Ebeveyn PIN’i ile tekrarlayın. Ebeveyn cihazı yeni listeyi senkronize edecektir.',
      },
    },
    appLimits: {
      title: 'Uygulama Sınırları belirleme',
      summary:
        'Günlük sınıra ek olarak, uygulamalara tek tek kendi günlük sınırlarını verin.',
      keywords: 'uygulama süre sınırı, uygulama başına dakika, tiktok, youtube, oyun',
      tip: 'Uygulama Sınırları iPhone ve iPad’de kullanılamaz. Bilgisayarda veya TV’de sınırına ulaşan bir uygulama açılmadan önce durdurulmaz, açıldıktan sonra kapatılır.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uygulama Sınırları. Çocuğunuz birden fazla cihaz kullanıyorsa birini seçin: her cihazın kendi listesi vardır.',
        '2': 'Sınır ekle bölümünde bir uygulamaya dokunun. Yalnızca o cihazda bugün kullanılan uygulamalar listelenir ve her biri 60 dakikalık bir sınırla başlar.',
        '3': 'Her sınırı kadranla veya hazır bir seçenekle, günde 5 dakikadan 8 saate kadar ayarlayın. En fazla 20 uygulamaya sınır koyabilirsiniz.',
        '4': 'Kaydet’i seçin. Sınırlar çocuk cihazında gece yarısı sıfırlanır.',
        '5': 'Günlük sınır tüm cihaz için geçerli olmaya devam eder, bu yüzden bir uygulama kendi sınırı dolmadan kilitlenebilir. Bir sınırı kaldırmak için kartındaki Kaldır’ı seçin, ardından kaydedin.',
      },
    },
    lockUnlock: {
      title: 'Cihazı kilitleme ve kilidini açma',
      summary: 'Çocuk cihazını anında kilitleyin veya erişimi geri yükleyin.',
      tip: 'Android’de kilitleme, Diğer uygulamaların üzerinde göster ve Erişilebilirlik ikisi de etkinken en güçlüdür. iOS’ta kilitleme Ekran Süresi yetkilendirmesine bağlıdır.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın.',
        '2': 'Bu çocuğun tüm cihazlarını kilitlemek için Tümünü kilitle’yi seçin ya da tek bir cihazı açıp Cihazı kilitle’yi seçin.',
        '3': 'Birkaç saniye bekleyin. Durum Kilitli olarak değişmelidir. Hiçbir şey değişmezse çocuk cihazında KidGate’i açın ve izinleri yeniden kontrol edin.',
        '4': 'Erişimi geri yüklemek için Tümünün kilidini aç’ı (veya cihaz ekranında Kilidi aç’ı) seçin ve onaylayın.',
        '5': 'İsteğe bağlı: bu kısayollar cihaz kartında görünüyorsa Aile bölümünden de hızlıca kilitleyip kilidini açabilirsiniz.',
        '6': 'Kilitli bir telefon veya bilgisayar, çocuğunuzun SOS göndermesine yine izin verir. Android’de SOS ayrıca aramaları, haritaları ve mesajları 5 dakika boyunca açar; geri kalan her şey kilitli kalır ve bu durum “Etkinlikler”de görünür.',
      },
    },
    pauseBrowsing: {
      title: 'Taramayı bir süreliğine duraklatma',
      summary:
        'Bir cihazda web’i 5 dakikadan 8 saate kadar engelleyin. Aramalar ve çevrimdışı uygulamalar çalışmaya devam eder.',
      keywords: 'interneti kapat, wifi duraklat, ağ yok, çevrimdışı, mola',
      tip: 'Chrome uzantısında duraklatma yalnızca Chrome’u kapsar. Her gün tekrarlanan bir mola için bunun yerine Engellenen Saatleri kullanın.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Güvenlik takibi bölümündeki Taramayı duraklat’a dokunun.',
        '2': 'Kadranla veya hızlı bir hazır seçenekle (30, 60 veya 120 dakika) bir süre seçin, ardından onaylayın.',
        '3': 'Süre dolana kadar o cihazda web erişimi engellenir. Web filtresi ayarlarınız değişmez ve duraklatma, Web filtresi kapalıyken bile çalışır.',
        '4': 'Erken bitirmek için cihazı açın, Taramayı duraklat kartına dokunun ve Sürdür’ü seçin. Kalan dakikalar saklanmaz.',
        '5': 'Çocuğunuzun profilinden başlatılan duraklatma tek bir cihaza uygulanır. Çocuğunuz birden fazla cihaz kullanıyorsa her birini kendi cihaz ekranından duraklatın.',
      },
    },
    timeRequests: {
      title: 'Ek süre isteklerini yanıtlama',
      summary:
        'Günlük sınır azaldığında çocuğunuz ek dakika isteyebilir; siz de kendi cihazınızdan onaylar veya reddedersiniz.',
      tip: 'İstekler yalnızca cihazda bir Günlük sınır varsa görünür. Onaylanan dakikalar bugün için ve yalnızca isteği gönderen cihazda geçerlidir; sizin koyduğunuz bir kilidi veya Engellenen Saatleri kaldırmaz. Android TV ve Chrome uzantısı istek gönderemez.',
      steps: {
        '1': 'Çocuğunuz kendi cihazında KidGate ana ekranından Daha fazla süre iste’yi seçer (Android’de sınıra ulaşıldığında kilit ekranından da), dakikaları belirler, isterse bir neden ekler ve gönderir.',
        '2': 'Bir bildirim alırsınız. KidGate’i açın: istek, Aile’de, çocuğunuzun profilinde ve cihaz ekranındaki Onay bekliyor kartında görünür.',
        '3': 'Dakikaları ve nedeni kontrol edin, ardından tam bu dakikaları bugüne eklemek için Onayla’yı ya da reddetmek için Şimdi değil’i seçin.',
        '4': 'Yanıt çocuk cihazına iletilir ve onaylanan dakikalar hemen geçerli olur. Her cihazda aynı anda yalnızca bir bekleyen istek olabilir.',
        '5': 'Yanıtlanan istekler Etkinlikler’de listelenir. Bu bildirimleri kendi cihazınızda kapatmak için Ayarlar’daki Anlık bildirimler bölümünde Ek süre istekleri’ni kapatın.',
      },
    },
    rewardTasks: {
      title: 'Ödül görevleri ayarlama',
      summary:
        'Çocuğunuzun bugün ekstra dakika kazanmak için bitirebileceği küçük görevler oluşturun.',
      tip: 'Bonus dakikalar yalnızca cihazda bir Günlük sınır varsa geçerli olur. Dakikalar, çocuğunuzun görevi tamamlandı olarak işaretlediği cihaza eklenir. Ödül görevleri Android TV’de ve Chrome uzantısında kullanılamaz.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Ödül görevleri.',
        '2': 'Yeni görev’i seçin veya bir şablonla başlayın. Görevi yazın; ödülü dakika cinsinden (5 ile 240 arası), zorluğu ve tekrarını (Her gün veya Tek seferlik) seçin, ardından Görev oluştur’u seçin.',
        '3': 'Görev, çocuk cihazında “Ekstra süre kazan” bölümünde görünür. Görev bitince çocuğunuz Yaptım’ı seçer.',
        '4': 'Bir bildirim alırsınız. İncelemeye hazır bölümünde (Ödül görevleri ekranında, Aile’de veya çocuğunuzun profilinde) dakikaları bugüne eklemek için Onayla’yı ya da çocuğunuzun tekrar deneyebilmesi için Geri gönder’i seçin.',
        '5': 'Düzenlemek veya silmek için bir göreve dokunun. Ücretsiz planda aynı anda en fazla 10 etkin görev olabilir; Premium’da bu sayı 20’dir.',
        '6': 'Her görev zorluğuna göre 1 ile 3 yıldız değerindedir ve yıldızlar görevi onayladığınızda sayılır. Çocuklarınızın bu haftaki yıldızları karşılaştırabilmesi için aile sahibi “Aile”yi, ardından aile kartını açar ve “Çocuklar” sekmesinde “Yıldız tablosu”nu açar. Her çocuk tabloyu kendi cihazındaki KidGate’te görür. Tablo her hafta yeniden başlar.',
      },
    },
    locationSharing: {
      title: 'Konum paylaşımını açma',
      summary: 'Çocuğunuzun en son konumunu ebeveyn cihazında görün.',
      keywords: 'gps, harita, çocuğum nerede, telefonu bul, yerler',
      tip: 'Konum için çocuk cihazında izin ve kararlı bir ağ bağlantısı gerekir. Kapalı alanlarda GPS daha az hassas olabilir.',
      steps: {
        '1': 'Çocuk cihazında istendiğinde (veya sistem Ayarları’ndan) KidGate için Konuma izin verin.',
        '2': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Konum.',
        '3': 'Kapalıysa paylaşımı açın ve ilk güncellemeyi bekleyin.',
        '4': 'Durum hâlâ bekleniyor gösteriyorsa yenileme düğmesine dokunun veya ekranı yeniden açın.',
        '5': 'İsteğe bağlı: çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı), ardından Uyarılar bölümünü açıp Yerler’i seçerek, çocuğunuz kayıtlı bir yere girip çıktığında Yer uyarıları kurun.',
        '6': 'Telefon yakınlarda bir yerde kaldıysa Konum’u açıp Cihazı çaldır’a dokunun. iPhone sessiz moddayken ya da bir Odak açıkken ses çıkarmaz.',
      },
    },
    checkIn: {
      title: 'Check-In isteme',
      summary:
        'Çocuğunuzdan konum ve isteğe bağlı bir fotoğrafla güvende olduğunu onaylamasını isteyin.',
      tip: 'Fotoğraflı Check-In için çocuk cihazında kamera izni gereklidir.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın.',
        '2': 'Check-In’i (hızlı işlem veya Güvenlik takibi bölümündeki satır) seçin.',
        '3': 'Çocuk cihazı bir Check-In bildirimi ve ekranı alır. Çocuk, iyi olduğunu onaylamak veya yardım istemek için dokunur.',
        '4': 'Kamera erişimine izin verilmişse KidGate mümkün olduğunda konumla birlikte bir fotoğraf ekler.',
        '5': 'Ebeveyn cihazında son yanıtı ve fotoğrafı incelemek için Check-In geçmişini açın.',
      },
    },
    sos: {
      title: 'SOS acil durum uyarıları',
      summary:
        'Bir çocuğun nasıl SOS gönderdiği, SOS’un neleri içerdiği ve ebeveynlerin nasıl yanıt verdiği.',
      keywords:
        'panik butonu, yardım, tehlike, güvensiz, ses, sesli kayıt, mikrofon, siren, e-posta, büyükanne, büyükbaba, komşu',
      tip: 'SOS telefonlarda ve bilgisayarlarda çalışır; TV’de ve Chrome uzantısında çalışmaz. Ses yalnızca telefonlarda kaydedilir. Bir kez evde deneyin ve çocuğunuzla ne zaman SOS kullanılacağı, ne zaman Check-In’in yeterli olduğu konusunda anlaşın.',
      steps: {
        '1': 'Çocuk cihazında KidGate’te SOS’u açın. Telefonda bu, alt çubuğun ortasındaki düğmedir.',
        '2': 'SOS düğmesini 5 saniye basılı tutun. Daha önce bırakılırsa gönderim iptal edilir.',
        '3': 'Uyarı, varsa konumla birlikte hemen gönderilir. Telefonda ardından fotoğraf için kamera açılır; bu adım atlanabilir. Kurulum sırasında mikrofona izin verildiyse SOS gönderildiği andan itibaren 15 saniyeye kadar ses kaydedilir.',
        '4': 'Ebeveynler “Sessiz saatler” sırasında bile acil bir bildirim alır. KidGate açıksa uyarı ekranda belirir; Ayarlar’da kapatılmadıysa “SOS sireni” de çalar.',
        '5': 'Çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından “Uyarılar” bölümünden “SOS”u seçin. Her uyarıda konum (“Haritalar’da aç”), fotoğraf ve uyarıdan biraz sonra gelebilen “Ses kaydı” bulunur. Yanıt verildi olarak işaretlemek için “Ben ilgileniyorum”u seçin.',
        '6': 'Aile dışındaki kişilere de e-posta gitmesi için “Aile”yi, ardından aile kartını açın ve “Güvenilir kişiler”i seçin. En fazla 5 kişi eklemek için “Kişi ekle”yi seçin. Her SOS’ta bu kişilere e-postayla cihaz adı ve bilinen son konum gider; fotoğraf ve ses asla gönderilmez. Önce onlara haber verin.',
      },
    },
    webFilter: {
      title: 'Uygunsuz web sitelerini sınırlama',
      summary:
        'Platformun desteklediği yerlerde uygunsuz içerik için Web filtresini açın.',
      keywords:
        'site engelle, link engelle, bağlantı engelle, url, yetişkin içerik, güvenli arama, dns, vpn, iphone, ipad',
      tip: 'Web filtreleme platform özelliklerine bağlıdır. Daha güçlü koruma için Engellenen Uygulamalar ile birlikte kullanın.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Web filtresi.',
        '2': 'Mevcut durumu (uygunsuz siteler sınırlı veya filtreleme kapalı) inceleyin.',
        '3': 'Bir anahtar gösteriliyorsa filtrelemeyi açın ve kaydedin.',
        '4': 'Daha sonra aynı ekrandan tekrar kontrol edin. Durum Bekleniyor olarak kalırsa ayarların senkronize olması için çocuk cihazında KidGate’i yeniden açın.',
        '5': 'Çocuk cihazı iPhone veya iPad ise cihazda KidGate’i açın, iOS VPN konfigürasyonları eklemek için izin istediğinde İzin Ver’i seçin ve ardından cihaz parolasını girin. Bu yalnızca bir kez sorulur.',
      },
    },
    protectionAlerts: {
      title: 'Koruma uyarıları',
      summary: 'Çocuk cihazındaki önemli bir izin kapatıldığında bildirim alın.',
      tip: 'Bir koruma uyarısı, KidGate korumasının zayıfladığı anlamına gelir. İzni çocuk cihazında en kısa sürede geri yükleyin.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uyarılar bölümünden Koruma’yı seçerek Koruma uyarıları’nı açın.',
        '2': 'Diğer uygulamaların üzerinde göster, Erişilebilirlik, Kullanım Erişimi, Kamera veya Konum gibi izinlerin kapatılması gibi son olayları inceleyin.',
        '3': 'Çocuk cihazında KidGate, ardından Durum’u açın ve belirtilen izni yeniden açın.',
        '4': 'Koruma uyarılarına dönün ve beklenmedik yeni bir olay olmadığını doğrulayın.',
        '5': 'Değişikliklerden hızlıca haberdar olmak için ebeveyn cihazında bildirimleri açık tutun.',
      },
    },
    usageReports: {
      title: 'Kullanım raporlarını okuma',
      summary:
        'Her cihazın bugün ve son 30 günde ne kadar kullanıldığını çocuk bazında ve her pazartesi gelen bir raporda görün.',
      tip: 'Ücretsiz plandaki aileler bugünün toplamını ve en çok kullanılan 3 uygulamayı görür; bu bilgiler siz baktığınızda güncellenir. Premium ise 30 günlük geçmiş, her cihazın ne zaman kullanıldığı, tüm uygulamalar, her çocuk için bir rapor ve her pazartesi yeni bir haftalık rapor ekler. iPhone ve iPad yalnızca toplam süreyi bildirir.',
      steps: {
        '1': 'Raporlar’ı açın. “Bugün” bölümü tüm cihazları toplar; altında Haftalık rapor, her çocuk (Çocuğa göre) ve her cihaz (Cihaza göre) yer alır.',
        '2': 'Bir cihazın Kullanım Raporu’nu açmak için ona dokunun: Günlük sınıra göre bugünkü durum, “Son 30 gün”, “Ne zaman kullanıldı” ve “En çok kullanılan uygulamalar”. Bu raporu cihaz ekranındaki “Bugünkü kullanım” bölümünden de açabilirsiniz.',
        '3': 'Tüm cihazlarını kapsayan tek bir rapor için bir çocuğa dokunun; süre olarak “Bugün”, “7 gün” veya “30 gün” seçilebilir. Aynı anda iki ekranda geçen süre bir kez sayılır, bu yüzden bu toplam cihazların ayrı ayrı toplamından düşük olabilir.',
        '4': 'Her pazartesi sabahı bir bildirimle birlikte yeni bir Haftalık rapor gelir. Rapor, değiştirebileceğiniz bir şeyi önerir ve ilgili ayarı açar.',
        '5': 'KidGate’i açtığınızda her cihazdan güncel veriler istenir, bu yüzden rakamların güncellenmesi birkaç dakika sürebilir. İnternet bağlantısı olmayan bir cihaz, yeniden çevrimiçi olduğunda veri gönderir.',
      },
    },
    widget: {
      title: 'Ekran süresi widget’ı ekleme',
      summary:
        'Her çocuğun ekran süresini ana ekranınızda görün; çocuğunuz da kendi ana ekranında ne kadar süresi kaldığını görsün.',
      keywords:
        'ana ekran, başlatıcı, bir bakışta, kalan süre, kalan dakika, araç takımı, iphone, android',
      tip: 'Widget’lar iPhone, iPad ve Android’de çalışır; bilgisayarda ve TV’de çalışmaz. Widget, KidGate’in aldığı son verileri ve bu güncellemenin saatini gösterir.',
      steps: {
        '1': '“Ayarlar”ı açın ve “Ana ekrana widget ekle”yi seçin. Çoğu Android telefonda yalnızca nereye yerleştirileceğini onaylarsınız. Aksi halde KidGate, widget’ı kendiniz eklemeniz için adımları gösterir.',
        '2': 'Kendiniz eklemek için ana ekranda boş bir alana basılı tutun. iPhone’da + simgesine, ardından “Araç Takımı Ekle”ye dokunun. Android’de “Widget’lar”a dokunun. KidGate’i bulun ve “Ekran süresi” widget’ını seçin.',
        '3': 'Her satır, bir çocuğun bugünkü ekran süresini Günlük sınırıyla karşılaştırır; sınırına ulaşan çocuklar en üstte yer alır. iPhone’da en fazla 2, Android’de en fazla 3 çocuk gösterilir.',
        '4': 'KidGate’i açtığınızda güncellenir. Uygulama kapalıyken en fazla 20 dakikada bir ve yalnızca bir çocuk cihaz kullanırken güncellenir.',
        '5': 'Çocuğunuzun telefonuna “Kalan süre” widget’ını aynı şekilde ekleyin. Bugün ne kadar süre kaldığını ya da cihazın neden kilitli olduğunu gösterir ve KidGate o telefonda açıkken güncellenir.',
      },
    },
    webHistory: {
      title: 'Web geçmişini kontrol etme',
      summary:
        'Bir cihazın hangi sitelere eriştiğini ve Web filtresinin hangilerini engellediğini gün gün görün.',
      keywords: 'tarama geçmişi, ziyaret edilen siteler, tarayıcı, chrome, safari',
      tip: 'Web geçmişi Premium’a dahildir. Sayfaları veya dakikaları değil siteleri listeler ve bazı satırlar uygulamaların arka plan trafiğidir. Android TV’de veriler bir saate kadar gecikebilir.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Güvenlik takibi bölümündeki Web geçmişi’ne dokunun. Çocuğunuzun profilinden açıldığında geçmiş, tüm cihazlarını bir arada gösterir.',
        '2': 'Her gün için siteler türe göre, her birine kaç kez erişildiğiyle birlikte listelenir. Sadece Web filtresinin durdurduklarını görmek için “Yalnızca engellenenler”i seçin.',
        '3': 'Bir site türünün tamamını engellemek için o türün bölümünü açın ve sonundaki Engelle düğmesini seçin. Çocuğunuzun profilinden yapıldığında bu, tüm cihazlarına uygulanır.',
        '4': 'Geçmiş Web filtresinden gelir; bu yüzden yalnızca filtre o cihazda çalışırken dolar.',
        '5': 'Geçmiş 30 gün saklanır. Çocuğunuz engellenmiş bir siteyi açmak için izin istediğinde istek burada değil, Onay bekliyor kartında görünür.',
      },
    },
    videoHistory: {
      title: 'İzlenen videoları görme',
      summary:
        'Çocuğunuzun izlediği YouTube videolarının kanal ve saat bilgisiyle bir listesini tutun.',
      keywords: 'youtube, shorts, izlenen videolar, izleme geçmişi',
      tip: 'İzlenen videolar özelliği Premium’a dahildir ve yalnızca YouTube’u kapsar. Android telefonlarda, Android TV’de ve Chrome uzantısında çalışır; iPhone ve iPad’de çalışmaz. Mac veya PC’de Chrome uzantısını ekleyin. TV’de Shorts listelenmez.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Güvenlik takibi bölümündeki İzlenen videolar’a dokunun.',
        '2': 'İzlenen videoları kaydet seçeneğini açın. Siz açana kadar kapalı kalır ve çocuğunuzun profilinden açıldığında tüm cihazlarına uygulanır.',
        '3': 'Android telefonda KidGate’in ayrıca bildirim erişimine ihtiyacı vardır: çocuk cihazında KidGate Ayarları’nı açın, “Ebeveyn PIN’i ile Kilidi Aç” düğmesini seçin, ardından Mesaj uyarıları bölümünde “Bildirim erişimine izin ver”i seçin. Shorts için ayrıca Erişilebilirlik gerekir.',
        '4': 'Videolar gün gün, kanal ve her birinin kaç kez oynatıldığı bilgisiyle görünür. Bir videoyu YouTube’da bulmak için ona dokunun.',
        '5': 'Mac veya PC’de ekran bunun yerine Chrome uzantısının nasıl ekleneceğini gösterir. Uzantı, videoları ayrı bir cihaz olarak kaydeder.',
      },
    },
    appAlerts: {
      title: 'Uygulama yüklemelerini takip etme',
      summary:
        'Uygulamaların ne zaman yüklendiğini veya kaldırıldığını görün, cihazda neler olduğunu listeleyin ve yeni uygulamaları siz izin verene kadar bekletin.',
      tip: '“Yeni uygulamaları onayla” özelliği ücretsizdir. Yükleme geçmişini ve yüklü uygulamalar listesini içeren Uygulamalar ekranı Premium’a dahildir. iPhone ve iPad yüklemeleri bildiremez; bu cihazlarda “Yeni uygulamaları onayla” bunun yerine App Store’u gizler.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uyarılar bölümündeki Uygulamalar’a dokunun.',
        '2': 'Son değişiklikler, yüklenen ve kaldırılan uygulamaları en yeniden başlayarak listeler. Her biri için ayrıca bir bildirim alırsınız.',
        '3': 'Yüklü uygulamalar, cihazda neler olduğunu listeler; Bakmaya değer uygulamalar en üstte yer alır. Bir uygulamayı bu gruptan çıkarmak için Güvenli’yi seçin. Bir uygulamayı durdurmak için Engellenen Uygulamalar’ı kullanın.',
        '4': 'Yeni uygulamaları siz izin verene kadar bekletmek için Engellenen Uygulamalar’ı açın ve “Yeni uygulamaları onayla” seçeneğini etkinleştirin. Bundan sonra yüklenen her uygulama cihazda engellenmiş olarak kalır.',
        '5': 'Bekleyen yeni bir uygulama olduğunda, açılabilmesi için yanındaki İzin ver’i seçin.',
      },
    },
    messageAlerts: {
      title: 'Mesaj uyarılarını açma',
      summary:
        'Çocuğunuzun Android telefonundaki mesajlarda veya arama sorgularında endişe verici bir kelime veya ifade göründüğünde uyarı alın. Mesajın kendisini asla görmezsiniz, yalnızca işaretlenen kelimeyi veya ifadeyi görürsünüz.',
      keywords:
        'sms, messenger, whatsapp, anahtar kelimeler, zorbalık, mesajları okuma',
      tip: 'Mesaj uyarıları Premium’a dahildir ve yalnızca Android telefonlarda çalışır. Size yalnızca kategori ve işaretlenen kelime veya ifade ulaşır. Yapay zekâ analizi, bir ebeveyn aile için açmadıkça kapalı kalır.',
      steps: {
        '1': 'Çocuğun Android telefonunda KidGate Ayarları’nı açın, “Ebeveyn PIN’i ile Kilidi Aç” düğmesini seçin, ardından Mesaj uyarıları bölümünde “Bildirim erişimine izin ver”i seçin ve açılan listede KidGate’i etkinleştirin.',
        '2': 'Kendi cihazınızda çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uyarılar bölümünden Mesaj uyarıları’nı açıp en üstteki ayarlar simgesine dokunun. Çocuğunuzun birden fazla cihazı varsa önce Android telefonu seçin.',
        '3': '“Gelen mesajları tara”yı açın. “Küfürlü ifadeleri de işaretle” isteğe bağlıdır; Taranan diller altında en fazla 3 dil seçebilirsiniz.',
        '4': 'Çocuğunuzun yazdıklarını ve aradıklarını da taramak için: çocuk cihazında Mesaj uyarıları bölümündeki İzin ver’i seçin, ardından kendi cihazınızda “Yazılan mesajları tara” ve “Aramalarını denetle” seçeneklerini açın.',
        '5': 'Uyarılar, kategori ve işaretlenen kelime veya ifadeyle birlikte Son uyarılar altında görünür. Bu konuyu nasıl konuşabileceğinize dair öneriler için “Şimdi ne yapmalı”yı seçin.',
      },
    },
    childProfiles: {
      title: 'Çocuk ekleme ve cihaz atama',
      summary:
        'Her çocuğa bir profil verin, ardından kullandığı cihazları atayın; böylece kurallar ve ekran süresi çocuğunuza bağlı kalır.',
      tip: 'Çocuk eklemeyi ve cihaz atamayı yalnızca aile sahibi yapabilir. Yeni bir cihaz, siz seçene kadar kimseye atanmaz.',
      steps: {
        '1': 'Aile bölümünde + simgesine dokunun ve Çocuk ekle’yi seçin. Bir ad girip kaydedin.',
        '2': 'Yeni bir cihazı eşleştirdikten sonra KidGate cihazı kimin kullandığını sorar. Çocuğunuzu ya da ortak bir cihaz için Hiç kimse’yi seçin. Ardından KidGate başlangıç için bir koruma seti önerir: Korumayı aç’ı veya Şimdi değil’i seçin.',
        '3': 'Kimsenin seçilmediği bir cihaz, Aile bölümünde Atanmadı altında görünür. Kartındaki “Bir çocuğa ata…” seçeneğine dokunun.',
        '4': 'Bir cihaz atandıktan sonra Günlük sınır, Engellenen Saatler, Web filtresi, Check-In, SOS, yerler ve Ödül görevleri çocuğunuzun profilinde ayarlanır ve tüm cihazlarına uygulanır. Günlük sınır, bu cihazların hepsi için tek bir toplam olur.',
        '5': 'Bir cihazı taşımak için onu kullanacak çocuğun profilini açın ve “Başka bir cihaz ata…” seçeneğine dokunun. Atamayı kaldırmak için cihazı çocuğunuzun profilinde kaydırın ve Kaldır’ı seçin. Bir çocuğun profilini silmek, cihazlarının eşleşmesini bozmaz.',
      },
    },
    plans: {
      title: 'Premium ve ücretsiz plan',
      summary:
        'Denemenin, ücretsiz planın ve Premium’un neleri kapsadığı ve nasıl abone olunacağı.',
      keywords: 'premium, fiyat, abonelik, ücretsiz deneme, iptal, iade, yükselt',
      tip: 'Yalnızca aile sahibi abone olabilir veya bir satın alımı geri yükleyebilir; bu da yalnızca telefon uygulamasında yapılır. Tek bir plan tüm aileyi ve ailedeki her ebeveyni kapsar.',
      steps: {
        '1': 'Ayarlar’ı açın. En üstteki kart mevcut planınızı gösterir; Planları gör’ü seçin.',
        '2': '7 günlük deneme, ilk çocuk cihazınız eşleştirildiğinde başlar ve Premium’daki her şeyi içerir.',
        '3': 'Ücretsiz planda tüm kurallar çalışmaya devam eder, ancak yalnızca bir cihaz rapor gönderir; bu rapor bugünün toplamını ve en çok kullanılan 3 uygulamayı içerir ve siz baktığınızda güncellenir. Premium ise canlı güncellemeler, tüm cihazlar, 30 günlük geçmiş, web ve video geçmişi ve haftalık raporlar ekler.',
        '4': 'Deneme sona erdiğinde birden fazla çocuk cihazı varsa KidGate sizden “Ana cihazınızı seçin” ekranında bir seçim yapmanızı ister. Seçilen cihaz rapor göndermeye devam eder; diğerleri Duraklatıldı olarak görünür ama kurallarını korur. Seçiminizi 7 günde bir değiştirebilirsiniz.',
        '5': 'Abone olmak için bir plan seçin ve “Premium’a abone ol” düğmesine dokunun. Abone olduğunuzda duraklatılmış tüm cihazlar yeniden rapor göndermeye başlar. Daha önce ödeme yaptıysanız Satın alımları geri yükle’yi seçin.',
      },
    },
    notificationSettings: {
      title: 'Hangi uyarıları alacağınızı seçme',
      summary:
        'Her ebeveyn telefonunda her uyarı türünü açın veya kapatın ve sessiz saatler belirleyin.',
      tip: 'SOS her zaman ulaşır; her şey kapalıyken ve sessiz saatlerde bile. Bu ayarlar yalnızca bu telefon için geçerlidir; diğer ebeveynler kendi ayarlarını seçer.',
      steps: {
        '1': 'Ayarlar’ı, ardından Anlık bildirimler’i açın.',
        '2': 'Uyarılar altında, bu telefonda istemediğiniz uyarı türlerini kapatın; örneğin “Ek süre istekleri” veya “Uygulama kuruldu veya kaldırıldı”.',
        '3': 'Haftalık özet, haftalık rapor için gönderilen pazartesi bildirimini açıp kapatır.',
        '4': 'Uyarıları gece boyunca susturmak için Sessiz saatler’i açın ve Başlangıç ile Bitiş saatlerini ayarlayın. Saatler bu telefonun saatine göre işler.',
        '5': 'Ayarlar’da Uygulama içi uyarılar ve SOS sireni ayrı seçeneklerdir: uygulama içinde görünen bildirimi ve bu telefondaki yüksek sesli SOS alarmını yönetirler.',
      },
    },
    appLanguage: {
      title: 'Uygulama dilini değiştirme',
      summary:
        'KidGate’in her telefonda ve web panelinde hangi dili kullanacağını seçin.',
      keywords: 'türkçe, ingilizce, çeviri, yanlış dil, görüntüleme dili',
      tip: 'Her telefon kendi dilini korur. O telefondaki bildirimler ve widget bu dili izler.',
      steps: {
        '1': 'Bir ebeveyn veya çocuk telefonunda “Ayarlar”ı açın ve “Dil”i seçin.',
        '2': 'Sabitlemek için bir dil ya da telefonun ayarını izlemek için “Cihaz dili”ni seçin. KidGate telefonun dilini sunmuyorsa İngilizce kullanılır.',
        '3': 'Uygulama hemen değişir. Bu telefona gelen bildirimler ve telefonun widget’ı da yeni dili kullanır.',
        '4': 'Web panelinde dili yan menünün hesap bölümünden değiştirin. Bu yalnızca o tarayıcı için geçerlidir.',
      },
    },
    webSignIn: {
      title: 'KidGate’i bilgisayarda kullanma',
      summary: 'Web paneline giriş yapın ve ailenizi bir tarayıcıdan yönetin.',
      tip: 'Yalnızca kendiniz giriş yaptığınız bir tarayıcıya izin verin: o tarayıcı telefonunuzla aynı yetkiye sahip olur. Web paneli cihaz eşleştiremez ve plan satın alamaz. Bir tarayıcıda oturumu kapatmak için paneldeki Çıkış yap’ı kullanın.',
      steps: {
        '1': 'Bilgisayarda dashboard.kidgate.app adresini açın ve “KidGate uygulamasıyla giriş yap”ı seçin. Bir QR kodu görünür.',
        '2': 'Telefonunuzda Ayarlar’ı açın, ardından “Web’de giriş yap” seçeneğine dokunun. Aile bölümündeki tarama simgesiyle de tarayabilirsiniz.',
        '3': 'Tarayıcıdaki QR kodunu tarayın. Kamera kodu okuyamazsa bunun yerine 6 haneli kodu girin.',
        '4': 'Kodun eşleştiğini kontrol edin, ardından İzin ver’i seçin. Bu girişi siz başlatmadıysanız İzin verme’yi seçin.',
        '5': 'Tarayıcı birkaç saniye içinde oturum açar ve 7 gün boyunca değişiklik yapabilir. Bu süreden sonra da ailenizi göstermeye devam eder; bir şeyi değiştirmek için paneldeki “Değişikliklerin kilidini aç”ı seçin ve Ebeveyn PIN’inizi girin ya da tarayıcıya telefonunuzdan yeniden izin verin.',
      },
    },
    securityPins: {
      title: 'Ebeveyn PIN’i ve Uygulama Kilidi',
      summary:
        'İki farklı PIN: Ebeveyn PIN’i çocuğunuzun cihazındaki ayarları, Uygulama Kilidi ise telefonunuzdaki ebeveyn uygulamasını korur.',
      tip: 'Ebeveyn PIN’ini yalnızca aile sahibi belirleyebilir veya sıfırlayabilir. Bu PIN’i asla çocuğunuzla paylaşmayın.',
      steps: {
        '1': 'Ayarlar’ı açın. Güvenlik altında Ebeveyn PIN’i seçeneğine dokunarak 6 haneli bir PIN oluşturun veya mevcut PIN’i değiştirin.',
        '2': 'Çocuğunuzun cihazı, Engellenen Uygulamalar değiştirilmeden veya o cihazda KidGate’ten çıkış yapılmadan önce Ebeveyn PIN’ini ister.',
        '3': 'PIN’i unutursanız aile sahibi olarak yenisini belirlemek için aynı yerde “PIN’inizi mi unuttunuz?” seçeneğine dokunun.',
        '4': 'Bir çocuk cihazı 5 yanlış PIN denemesinden sonra kendini kilitlerse Güvenlik bölümünde o cihaz için bir kilit açma satırı görünür. Denemeleri sıfırlamak için bu satırı seçin.',
        '5': 'Bu telefondaki ebeveyn uygulamasını korumak için Uygulama Kilidi’ni açın ve ona özel 6 haneli bir PIN oluşturun. Face ID, Touch ID veya parmak iziyle kilit açmaya da izin verebilirsiniz.',
      },
    },
    reportProblem: {
      title: 'Sorun bildirme',
      summary:
        'KidGate ekibine neyin ters gittiğini anlatın, ekran görüntüsü ekleyin ve yanıtı uygulamada okuyun.',
      keywords:
        'hata, bug, iletişim, geri bildirim, çalışmıyor, bozuk, müşteri hizmetleri, yardım, e-posta',
      tip: 'KidGate yanıt verdiğinde bildirim alırsınız. Kaçırdıysanız Ayarlar’daki “Destek” satırında “Yeni yanıt” görünür.',
      steps: {
        '1': '“Ayarlar”ı açın ve “Destek”i seçin. Web panelinde “Destek” menüdedir.',
        '2': '“Sorun bildir”i ya da daha önce gönderdiyseniz “Yeni bildirim”i seçin.',
        '3': 'Ne olduğunu ve hangi cihazda olduğunu anlatın, işe yarayacaksa en fazla 5 ekran görüntüsü ekleyin ve “Raporu gönder”i seçin.',
        '4': 'Her bildirimin bir durumu vardır: “Alındı”, “İnceleniyor” veya “Çözüldü”. KidGate’in yanıtı bildirimin altında görünür.',
        '5': 'Bildirim kapatılana kadar altına yanıt yazabilirsiniz. Başka bir sorun için yeni bir bildirim gönderin.',
      },
    },
    deleteAccount: {
      title: 'Hesabınızı silme',
      summary:
        'KidGate hesabınızı ve verilerini kaldırın; fikrinizi değiştirmek için 14 gününüz olur.',
      tip: 'Hesabınızı silmek App Store veya Google Play aboneliğini iptal etmez; aboneliği mağazadan iptal edin. Yalnızca aileyi yönetmeyi bırakmak isteyen bir ortak ebeveyn, bunun yerine aileden ayrılabilir.',
      steps: {
        '1': 'Ayarlar’ı açın ve Hesap altında Hesabı sil’i seçin.',
        '2': 'Nelerin kaldırılacağını okuyun. Aile sahibiyseniz tüm ortak ebeveynler ve tüm çocuk cihazları da erişimini kaybeder.',
        '3': 'Kimliğinizi doğrulayın (şifrenizle veya Google ya da Apple ile yeniden giriş yaparak), OK yazın ve Kalıcı olarak sil’i seçin.',
        '4': 'Hesap, 14 günün sonunda silinir. O zamana kadar her şeyi korumak için KidGate’i açıp Silmeyi iptal et’i seçin.',
        '5': 'Bir ortak ebeveyn hesabını sildiğinde yalnızca kendi hesabı kaldırılır; aile olduğu gibi kalır. Hesabınızı silmeden bir aileden ayrılmak için Aile bölümünde aile kartını açın ve Aileden ayrıl’ı seçin.',
      },
    },
  },
  onChildDevice: 'Çocuğun cihazında',
  onParentDevice: 'Sizin cihazınızda',
  handoffHint:
    'KidGate bu adımları çocuğun cihazında adım adım gösterebilir: orada açın, Durum ekranına gidin ve Kurulumu bir ebeveynle tamamla seçeneğini seçin. Her adımda doğru ekranı açan bir düğme var.',
} as const;
