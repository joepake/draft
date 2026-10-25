export const userGuide = {
  title: 'Kullanıcı kılavuzu',
  subtitle:
    'İzinler, cihaz eşleştirme, günlük kontroller ve güvenlik özellikleri hakkında adım adım yardım.',
  stepLabel: 'Adım {{n}}',
  stepsSectionTitle: 'Adımlar',
  tipTitle: 'İpucu',
  // The Help Center video button: the wizard's own label (child.setupWizardWatchGuide).
  watchVideo: 'Nasıl yapılır',
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
        'Günlük sınır, Engellenen Saatler, Engellenen Uygulamalar, Uygulama Sınırları, Cihaz Kilidi, Süre istekleri ve Ödül görevleri',
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
        '2': '“KidGate’e katılın” düğmesine dokunun, ardından Google veya Apple ile giriş yapın ya da bir e-posta hesabı oluşturun.',
        '3': 'Aile bölümünde Aile oluştur’u seçin ve ailenize bir isim verin (örneğin, “Nguyen ailesi”). Bu isim başka ebeveynler katıldığında görünür. Ailenizi başka bir ebeveyn zaten oluşturduysa bunun yerine Aileye katıl’ı seçin.',
        '4': 'Aile sahibiyseniz Ayarlar, ardından Güvenlik bölümünden bir Ebeveyn PIN’i (6 haneli) belirleyin. Ezberleyin veya güvenli bir yerde saklayın, çocuklarla paylaşmayın.',
        '5': 'Önerilir: başkalarının cihazınızda ebeveyn uygulamasını açamaması için Ayarlar’dan Uygulama Kilidi’ni ve biyometrik kilit açmayı etkinleştirin.',
        '6': 'Aile’yi açın ve tarama simgesine dokunun (Kod tara). Kamera hemen açılır: çocuk cihazında gösterilen QR kodunu okutun ya da Kodu elle gir’i seçip kodu yazın.',
        '7': 'Çocuk cihazı bağlandıktan sonra KidGate cihazı kimin kullandığını sorar: çocuğunuzu seçin (veya bir çocuk ekleyin) ya da ortak bir cihaz için “Hiç kimse” seçeneğini seçin. Ardından Aile bölümünde çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın. Günlük sınırı ve Engellenen Saatleri belirleyin, izinleri çocuğunuzla birlikte tamamlayın.',
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
        '5': 'Durum ekranında “Kurulumu bir ebeveynle tamamla” kartındaki “Kuruluma devam et” seçeneğini seçin. Ardından “Korumayı ayarla”, KidGate’in ihtiyaç duyduğu her izni (bildirimler, konum, kamera ve platforma özgü izinler) tek tek ister. Her birine izin verin veya isteğe bağlı bir adımı şimdilik atlayın.',
        '6': 'KidGate’i çocuk cihazında yüklü ve bağlı bırakın. Bundan sonra ebeveynler sınırları kendi cihazlarından yönetir.',
      },
    },
    connectChild: {
      title: 'Çocuğun telefonunu veya tabletini bağlama',
      summary: 'Yeni bir çocuk cihazını bir QR kodu veya kodla ailenize eşleştirin.',
      tip: 'Kodların süresi dolar. Eşleştirme başarısız olursa çocuk cihazında Yeni kod’u seçip tekrar deneyin. Ücretsiz plan tek cihazdan rapor verir ve kuralları yalnızca orada sıkılaştırmanıza izin verir; bu yüzden eşleştirdiğiniz başka bir cihaz Duraklatıldı olarak başlar.',
      steps: {
        '1': 'Çocuk cihazında: KidGate, ardından Bu bir çocuk cihazı’nı açın. QR kodu ekranını görünür bırakın.',
        '2': 'Ebeveyn cihazında: Aile’yi açın ve tarama simgesine dokunun (Kod tara).',
        '3': 'Kamera hemen açılır: istenirse kameraya izin verin ve çocuk cihazındaki QR kodunu çerçeve içine hizalayın.',
        '4': 'Ya da kodu kullanın: Kodu elle gir’i seçin, çocuk cihazında gösterilen 6 karakteri yazın, sonra devam edin.',
        '5': 'Çocuk cihazında onay ekranını dikkatle okuyun. Ebeveyn adı doğruysa Evet, bağla’yı seçin.',
        '6': 'Ebeveyn cihazının bağlantıyı onaylamasını bekleyin. Ardından aile sahibine yeni cihazı kimin kullandığı sorulur: bir çocuk seçin veya ortak bir cihaz için “Hiç kimse” seçeneğini seçin. Cihaz Aile bölümünde görünür.',
        '7': 'Yeni cihazı açın ve Son etkinlik alanında bir zaman bilgisi gösterildiğini kontrol edin (iPhone’da Son bağlantı). Çevrimiçi, cihazın son 10 dakika içinde birisi tarafından kullanıldığı anlamına gelir; bu yüzden kimsenin kullanmadığı bir cihaz hâlâ bağlıyken Çevrimdışı görünür. Zaman bilgisi görünmüyorsa çocuk cihazında KidGate’i yeniden açın ve ağ bağlantısını kontrol edin.',
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
        '3': 'KidGate’i bilgisayarda açın. Ekranda bir QR kodu ve 6 haneli bir kod görünür; oturum açmanız gerekmez. Pencere kapalıysa menü çubuğundaki (Mac) ya da bildirim alanındaki (Windows) KidGate simgesine tıklayın.',
        '4': 'Kendi cihazınızda Aile’yi açın, tarama simgesine dokunun (Kod tara) ve QR kodunu tarayın — ya da Kodu elle gir’i seçip kodu yazın.',
        '5': 'Bilgisayarda ebeveyn adını kontrol edin ve Evet, bağla’yı seçin.',
        '6': '“Bu cihazın kurulumunu tamamlayın” listesindeki adımları sırayla uygulayın. Mac’te “Web filtrelemeyi onaylayın” satırının yanındaki Ayarları aç’ı seçin ve açılan sayfada KidGate’i etkinleştirin — bunu yapana kadar Web filtresi çalışmaz. Mac’te Konum ve Kamera için İzin ver’i seçin. Windows’ta adım isterse Ayarlar’da Gizlilik ve güvenlik bölümünden ikisi için de KidGate’i açın.',
        '7': 'Kendi cihazınıza dönün; bilgisayarı hangi çocuğun kullandığını aile sahibi seçer. Mac’te veya Windows PC’de uygulamaları Yüklü uygulamalar bölümünden engellersiniz.',
      },
    },
    updateComputer: {
      title: 'Bilgisayardaki KidGate’i güncelleme',
      summary:
        'Yeni sürümü çocuğunuzun Mac’ine veya Windows PC’sine yükleyin. Bu, kendi cihazınızdan değil, bilgisayarın başında ve yönetici parolasıyla yapılır.',
      keywords:
        'yükseltme, eski sürüm, son sürüm, versiyon, yeniden yükleme, admin, şifre, kullanıcı hesabı denetimi, uac, macbook, imac, dizüstü, laptop',
      tip: 'Çocuğunuzun hesabı, bilgisayarı bağlarken önerildiği gibi standart (yönetici olmayan) bir hesapsa, güncelleme bir yöneticinin adını ve parolasını ister; böylece çocuğunuz güncellemeyi tek başına yükleyemez. Hesap değiştirmenize gerek yok: bunları açılan pencereye yazmanız yeterli. Bilgisayar bağlı kalır ve kurallarını korur; yeniden eşleştirme gerekmez.',
      steps: {
        '1': 'Güncellenmesi gereken her bilgisayar için bir bildirim alırsınız; bilgisayarın sayfasında da güncel olmadığı görünür. Kendi cihazınızdan yüklenecek bir şey yok: bilgisayarın başına geçin.',
        '2': 'Bilgisayarda KidGate’i açın. Pencere kapalıysa menü çubuğundaki (Mac) ya da bildirim alanındaki (Windows) KidGate simgesine tıklayın. Durum ekranının üst kısmında “KidGate’in daha yeni bir sürümü var” yazan bir şerit görünür; güncelleme bekletilmemesi gerekiyorsa şerit kırmızıdır ve üzerinde “Önemli güncelleme” yazar.',
        '3': '“Güncellemeyi al” düğmesini seçin. KidGate yeni sürümü indirir ve yükleyiciyi açar. İndirme başarısız olursa bunun yerine kidgate.app/download açılır: KidGate’i oradan indirip ilk kurulumdaki gibi çalıştırın.',
        '4': 'Mac’te yükleyicinin adımlarını izleyin ve sorulduğunda yöneticinin adını ve parolasını girin. Windows’ta önce Windows, uygulamanın değişiklik yapmasına izin verilip verilmeyeceğini sorar: istenirse yöneticinin parolasını girin, Evet’i seçin, ardından yükleyicinin adımlarını izleyin.',
        '5': 'KidGate kendiliğinden yeniden açılana kadar bilgisayarı kapatmayın. Kendi cihazınızda, bilgisayarın güncel olmadığını belirten uyarı artık görünmez (web panelinde sayfayı yenileyin).',
      },
    },
    connectTv: {
      title: 'Android TV bağlama',
      summary:
        'KidGate’i bir Android TV’ye yükleyin ve kumandayla hiçbir şey yazmadan kendi cihazınızdan eşleştirin.',
      keywords: 'android tv, google tv, televizyon, tv, kutu',
      tip: 'TV’de Konum, SOS, Check-In ve Süre istekleri yoktur; engellenen bir uygulama açılmadan önce durdurulmaz, açıldıktan sonra kapatılır. Ekran süresi verileri bir saate kadar gecikebilir. Google Play hizmetleri olmayan bir TV’ye anlık bildirim gelmez; bu yüzden bir kilidin, kilit açmanın veya kural değişikliğinin ulaşması 30 dakikaya kadar sürebilir.',
      steps: {
        '1': 'TV’de Google Play’i açın, KidGate’i arayın ve yükleyin.',
        '2': 'KidGate’i TV’de açın. Ekranda bir QR kodu ve 6 haneli bir kod görünür; oturum açmanız gerekmez.',
        '3': 'Kendi cihazınızda Aile’yi açın, tarama simgesine dokunun (Kod tara) ve TV’deki QR kodunu tarayın — ya da Kodu elle gir’i seçip kodu yazın.',
        '4': 'TV birkaç saniye içinde kendiliğinden bağlanır. Kumandayla onaylamanız gereken bir şey yoktur.',
        '5': 'TV’de “Korumayı ayarla” adımlarını izleyin: Erişilebilirlik’i açmak için Kabul et’i seçin; Kullanım Erişimi ve Diğer uygulamaların üzerinde göster için Ayarları aç’ı seçin; ardından “VPN’i aç” seçeneğini seçip bağlantıyı onaylayın, böylece Web filtresi çalışabilir.',
        '6': 'Bir ayar açık kalmıyorsa TV’yi yeniden başlatıp tekrar deneyin. “Korumayı ayarla”yı TV’deki KidGate ana ekranından yeniden açabilirsiniz.',
        '7': 'Kendi cihazınıza dönün; TV’yi hangi çocuğun kullandığını aile sahibi seçer. TV’nin uygulamalarını Yüklü uygulamalar bölümünden engellersiniz.',
      },
    },
    connectChrome: {
      title: 'Chrome uzantısını bağlama',
      summary:
        'KidGate web filtresini Chromebook, Mac veya PC’deki Chrome’a ekleyin. Uzantı ayrı bir cihaz olarak görünür.',
      keywords: 'chromebook, chrome uzantısı, tarayıcı uzantısı',
      tip: 'Uzantı yalnızca Chrome’u filtreler: diğer tarayıcıları filtrelemez, gizli pencereleri de siz izin vermedikçe filtrelemez. chrome://extensions sayfasında KidGate’in Ayrıntılar bölümünü açıp Gizli modda izin ver seçeneğini etkinleştirin. Günlük sınır, Engellenen Saatler, Cihaz Kilidi, Engellenen Uygulamalar ve ekran süresi yoktur; bunlar için bir telefon, bilgisayar veya TV gerekir.',
      steps: {
        '1': 'Çocuğunuzun bilgisayarındaki Chrome’da Chrome Web Mağazası’nı açın, KidGate’i arayın ve “Chrome’a ekle”yi seçin.',
        '2': 'Chrome araç çubuğundaki KidGate simgesini seçin. Simgeyi göremiyorsanız Uzantılar (yapboz parçası) menüsünden sabitleyin. Açılır pencerede bir QR kodu ve 6 haneli bir kod görünür; eşleştirme bitene kadar pencereyi açık tutun.',
        '3': 'Kendi cihazınızda Aile’yi açın, tarama simgesine dokunun (Kod tara) ve QR kodunu tarayın — ya da Kodu elle gir’i seçip kodu yazın.',
        '4': 'KidGate açılır penceresinde ebeveyn adını kontrol edin ve Evet, bağla’yı seçin.',
        '5': 'Kendi cihazınıza dönün; uzantıyı hangi çocuğun kullandığını aile sahibi seçer, ardından uzantı için Web filtresini açın. O zamana kadar uzantı Etkin değil olarak görünür.',
        '6': 'İsteğe bağlı, Premium ile: hangi videoların izlendiğini görmek için İzlenen videolar’ı açın ve uzantı için İzlenen videoları kaydet seçeneğini etkinleştirin.',
      },
    },
    inviteParent: {
      title: 'Başka bir ebeveyni davet etme',
      summary:
        'İkinci bir ebeveynin aynı aileye katılıp aynı çocuk cihazlarını yönetmesine izin verin.',
      tip: 'Katılma isteklerini yalnızca aile sahibi onaylayabilir. İstekler süresi dolabileceğinden hemen onaylayın. Bir ailede ücretsiz planda ve deneme süresince en fazla 3, Premium ile en fazla 6 ebeveyn olabilir.',
      steps: {
        '1': 'Aile sahibinin cihazında Aile’yi açın. Ailenizin henüz bir adı yoksa + simgesine dokunun, Aile oluştur’u seçin ve ona bir ad verin.',
        '2': '+ simgesine dokunun ve Ebeveyn davet et’i seçin.',
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
      tip: 'Cihazları yalnızca aile sahibi yeniden adlandırabilir veya kaldırabilir. Kaldırma geri alınamaz: cihazın ekran süresi, konumu, web ve video geçmişi, etkinlikleri, uygulama listesi, SOS uyarıları, Check-In’leri, istekleri ve ödül görevleri silinir. Yeniden korumak için cihazı yeni bir cihaz olarak eşleştirin.',
      steps: {
        '1': 'Bir cihazı yeniden adlandırmak için onu “Aile”den veya çocuğunuzun profilinden açın, ardından adının yanındaki “Düzenle”yi seçin.',
        '2': 'Tüm ebeveynlerin bir bakışta tanıyacağı bir ad girin ve kaydedin.',
        '3': 'Bir cihazı kaldırmak için onu açın, ekranın altındaki “Cihazı kaldır”ı seçin ve onaylayın. Aile kartının “Çocuk cihazları” sekmesinde bir cihazı sola da kaydırabilirsiniz.',
        '4': 'Cihaz ailenizden ayrılır. Telefon kaldırıldığını gösterir; bilgisayar, TV veya Chrome uzantısı eşleştirme ekranına döner.',
        '5': 'Cihazı yeniden kullanmak için, örneğin sıfırlamadan sonra ya da başka bir çocuğa geçtiğinde, yeni cihaz olarak eşleştirin: Aile’yi açın ve tarama simgesine dokunun (Kod tara).',
      },
    },
    androidPermissions: {
      title: 'Android izinleri (çocuk cihazı)',
      summary:
        'Kullanım Erişimi, Diğer uygulamaların üzerinde göster, Erişilebilirlik, batarya ve ilgili izinleri açın.',
      keywords:
        'erişilebilirlik, kullanım erişimi, diğer uygulamaların üzerinde göster, bildirimler, cihaz yöneticisi, kaldırma koruması, mikrofon, vpn, izin ver',
      tip: 'Eksiksizlik sıradan daha önemlidir. Kilitleme veya Engellenen Saatlere güvenmeden önce kurulumun sunduğu her adımı, isteğe bağlı olanlar dahil, tamamlayın. Atladığınız bir adım, siz yapana kadar Durum ekranında kalır.',
      steps: {
        '1': 'Çocuk cihazında KidGate’i açıp Durum ekranına gidin. “Kurulumu bir ebeveynle tamamla” kartında “Kuruluma devam et” seçeneğini seçin (zorunlu adımlar bitince kart “Temel koruma açık” yazar ve yanında “Şimdi güçlendir” bulunur). “Korumayı ayarla” izinleri aşağıdaki sırayla tek tek ele alır.',
        '2': 'Kullanım Erişimi: sistem ekranını açın, ardından KidGate’i bulun, ardından açın. Bu, ekran süresi takibi ve sınırlar için gereklidir.',
        '3': 'Erişilebilirlik kilit yardımcısı: açıklamayı okuyup Kabul et’i seçin; Erişilebilirlik sayfası açılır. Bir liste açılırsa KidGate’i Yüklü / indirilen uygulamalar altında bulup açın ve Android’in onay ekranında İzin ver’i seçin. Bu, kilidin etkin kalmasını sağlar.',
        '4': 'Diğer uygulamaların üzerinde göster: KidGate için izin verin; böylece kilit ekranı diğer uygulamaların üzerinde görünebilir. Ardından Bildirimler: İzin ver’i seçin. KidGate, süre onayları ve hatırlatmalar için bu cihazın bildirimlerine ihtiyaç duyar.',
        '5': 'Konum: “Her zaman izin ver” seçeneğini seçin, yoksa harita yalnızca KidGate açıkken güncellenir. Web filtresi açıksa sonraki adım VPN bağlantısını ister: “VPN’i aç” seçeneğini seçin ve Android’in isteğini onaylayın.',
        '6': 'Sınırsız pil: istendiğinde İzin ver’i seçin. İstem görünmüyorsa: Uygulama bilgisi, ardından Batarya, ardından Sınırsız.',
        '7': 'Alarmlar ve hatırlatıcılar: Engellenen Saatlerin zamanında başlayıp bitmesi için buna izin verin. Ardından Kaldırmayı engelle: İzin ver’i seçin, sonra Android’in onay ekranında Etkinleştir’e dokunun. Bundan sonra KidGate’i kaldırmak için önce bunu kapatmak gerekir ve bir ebeveyne uyarı gider.',
        '8': 'Mesaj uyarıları: “Bildirim erişimine izin ver” seçeneğini seçin ve açılan listede KidGate’i açın; bu yalnızca bir ebeveyn Mesaj uyarılarını açtıktan sonra önem taşır. Ardından Kamera (Check-In ve SOS fotoğrafları için) ve mikrofon (SOS sesi için): uygulamayı kullanırken izin verin. Ekranda “Her şey hazır” göründüğünde kurulum tamamdır.',
      },
    },
    iosScreenTime: {
      title: 'iOS Ekran Süresi (çocuk cihazı)',
      summary:
        'Kilitleme, programlar ve uygulama seçiminin çalışabilmesi için Uygulama ve Web Sitesi Kullanımına izin verin.',
      keywords: 'ekran süresi, family controls, iphone, ipad, yetkilendir',
      tip: 'Yetkilendirme başarısız olursa KidGate nedenini söyler: cihazın bir parolaya ihtiyacı vardır, başka bir uygulama Ekran Süresi’ni zaten denetliyordur ya da bir kısıtlama KidGate’in Ekran Süresi’ni kullanmasını engelliyordur. Bunu iOS Ayarları’nda düzeltin, ardından tekrar deneyin.',
      steps: {
        '1': 'Çocuk cihazında KidGate’i açıp “Durum” ekranına gidin. “Kurulumu bir ebeveynle tamamla” kartında “Kuruluma devam et” seçeneğini seçin (zorunlu adımlar bitince kart “Temel koruma açık” yazar ve yanında “Şimdi güçlendir” bulunur).',
        '2': '“Korumayı ayarla” içinde “Uygulama ve Web Sitesi Kullanımına İzin Ver” seçeneğini seçin.',
        '3': 'Sistem iletişim kutusunda İzin Ver’i seçin. Lütfen bir seçim yapmadan iletişim kutusunu kapatmayın.',
        '4': 'KidGate’e dönün. Yetkilendirme başarılı olduğunda kurulum bir sonraki adıma geçer.',
        '5': 'Yetkilendirme daha önce reddedildiyse: iOS Ayarları’nı açın, KidGate’i bulun, o sayfada Ekran Süresi’ni açın, ardından KidGate’i yeniden açın.',
        '6': 'Engellenecek uygulamaları seçmek için: çocuk cihazında KidGate Ayarları’nı açın, ardından “Ebeveyn PIN’i ile Kilidi Aç” düğmesini seçin, ardından Engellenen Uygulamalar’ı açın ve kaydedin.',
        '7': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uygulamalar’a gidin ve listenin senkronize olduğunu doğrulayın. Hazır olduğunuzda engellemeyi açın.',
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
        '1': 'KidGate’i açın, Durum’a gidin ve Korumayı ayarla’yı açın. Otomatik başlatmaya izin ver adımını bulun; bu adım yalnızca üreticisinin gerektirdiği cihazlarda görünür.',
        '2': 'Üretici güvenlik ekranında KidGate için otomatik başlatmaya izin verin (ifadeler cihaza göre değişir).',
        '3': 'Hem Android ayarlarında hem de varsa üretici batarya menüsünde KidGate’in batarya kullanımını Sınırsız olarak ayarlayın.',
        '4': 'KidGate’i içeren “uyuyan uygulamalar”, “derin uyku uygulamaları” veya “uygulamaları uyut” listelerini devre dışı bırakın.',
        '5': 'Bir kısayol çalışmıyorsa Güvenlik / Cihaz bakımı uygulamasını manuel olarak açın ve KidGate, Otomatik başlatma veya Batarya’yı arayın.',
        '6': 'KidGate üreticinin ayarlarını okuyamaz; bu yüzden üreticinin ayarlarında izin verdikten sonra Otomatik başlatmaya izin ver adımında Tamamlandı’yı seçin.',
      },
    },
    dailyLimit: {
      title: 'Günlük sınır belirleme',
      summary:
        'Bir çocuğun cihazlarını her gün kaç dakika kullanabileceğini sınırlayın.',
      keywords: 'ekran süresi, günlük saat, süre doldu, bütçe, uzat',
      tip: 'Kullanım verisi çocuk cihazından gelir. Sayaç takılı kalmış gibi görünüyorsa çocuk cihazında KidGate’i açın ve senkronizasyonu bekleyin.',
      steps: {
        '1': 'Ebeveyn cihazında Aile’yi açın, ardından çocuğunuzun profiline (veya cihaz bir çocuğa atanmamışsa cihaza) dokunun.',
        '2': 'Temel kontroller altında Günlük sınır’ı seçin.',
        '3': 'Günlük dakika değerini seçin (veya mevcut sınırı düzenleyin), ardından kaydedin. Bir çocuk için bu, tüm cihazlarında ortak tek bir toplamdır.',
        '4': 'Çocuk cihazı senkronize olduktan sonra bugün kullanılan dakikaların sınırın yanında göründüğünü kontrol edin.',
        '5': 'Sınıra ulaşıldığında cihaz gece yarısına kadar kilitlenir. Bugün ek süre vermek için bir süre isteğini onaylayın veya Günlük sınırı yükseltin. “Kilidi aç” yalnızca kendi koyduğunuz bir kilidi kaldırır.',
      },
    },
    blockedHours: {
      title: 'Engellenen Saatler belirleme',
      summary: 'Cihazın kilitli kalması gereken zaman aralıklarını planlayın.',
      keywords: 'yatma saati, gece, okul saatleri, program, mola',
      tip: 'Önce okul saatlerini ve yatış zamanlarını belirleyin. Programı anlaşılır tutmak için çakışan aralıklardan kaçının.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Engellenen Saatler.',
        '2': '“Engellenen Saatleri Etkinleştir” anahtarını açın. Açılana kadar ekranda hiçbir zaman aralığı ve aralık ekleme yolu görünmez.',
        '3': 'Yeni bir program 22:00 ile 07:00 arası tek bir aralıkla başlar. Saatlerini kadranda ayarlamak ve tekrarlanacağı günleri seçmek için bir aralığa dokunun. Başka bir aralık için “Zaman aralığı ekle” seçeneğini veya “Hızlı ekle” altındaki seçeneklerden birini seçin.',
        '4': 'Her değişiklik, yaptığınız anda kaydedilir. Bir aralığı kaldırmak için onu sola kaydırın ya da açıp “Kaldır” düğmesini seçin.',
        '5': 'Android çocuk cihazında, aralıkların zamanında başlayıp bitmesi için Alarmlar ve hatırlatıcılar izninin hâlâ verili olduğunu doğrulayın. iPhone veya iPad’de Ekran Süresi izninin hâlâ verili olduğunu doğrulayın.',
        '6': 'Aktif bir aralık sırasında Engellenen Saatler kartında Engellenen Saatler aktif · kilitli yazar. “Kilidi aç” bir aralığı sonlandırmaz: birini erken bitirmek için “Engellenen Saatleri Etkinleştir” ayarını kapatın veya saatlerini değiştirin.',
      },
    },
    blockedApps: {
      title: 'Belirli uygulamaları engelleme',
      summary:
        'Uygulamaları Yüklü uygulamalar bölümünden engelleyin. iPhone’da bunları iPhone’un kendisinde seçin.',
      keywords:
        'uygulama engelle, tiktok, facebook, instagram, oyun, roblox, uygulama gizle',
      tip: 'Bağlı bir çocuk cihazı her değişikliği bir dakika içinde alır. iOS’ta Apple, uygulamaların gerçek adlarını ebeveyn cihazlarından gizleyebilir ve uygulamalar iPhone’da Ebeveyn PIN’i ile seçilir.',
      steps: {
        '1': 'Kendi cihazınızda çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uygulamalar’a ve Yüklü uygulamalar bölümüne gidin.',
        '2': 'Bir uygulamaya dokunun ve “Engelle” düğmesini seçin. Yeni bir uygulamayı engellemek Premium gerektirir.',
        '3': 'Uygulama, çocuk cihazında açılır açılmaz kapanır. Yeniden izin vermek için uygulamaya dokunun ve “Engeli kaldır” düğmesini seçin.',
        '4': 'iPhone’da uygulamaları iPhone’un kendisinde seçin: KidGate’i, ardından Ayarlar’ı açın, “Ebeveyn PIN’i ile Kilidi Aç” düğmesini seçin ve Engellenen Uygulamalar’ı açın.',
        '5': 'Ardından kendi cihazınızda Engellenen Uygulamaları Etkinleştir’i açın. Durum, Engelleme açık olarak görünmelidir.',
        '6': 'Çocuk cihazında engellenen bir uygulamayı açarak test edin. Platform kurallarına göre kısıtlanmalıdır.',
        '7': 'iPhone’un listesini daha sonra değiştirmek için seçimi iPhone’da Ebeveyn PIN’i ile tekrarlayın.',
      },
    },
    appLimits: {
      title: 'Uygulama Sınırları belirleme',
      summary:
        'Günlük sınıra ek olarak, uygulamalara tek tek kendi günlük sınırlarını verin.',
      keywords: 'uygulama süre sınırı, uygulama başına dakika, tiktok, youtube, oyun',
      tip: 'Uygulama Sınırları iPhone ve iPad’de kullanılamaz. Bilgisayarda veya TV’de sınırına ulaşan bir uygulama açılmadan önce durdurulmaz, açıldıktan sonra kapatılır.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uygulamalar. Her cihazın kendi sınırları vardır; birden fazla cihaz varsa her uygulama hangi cihazda olduğunu gösterir.',
        '2': '“Yüklü uygulamalar” sekmesini açın, uygulamaya dokunun ve “Süre sınırı belirle” düğmesini seçin. Yeni bir sınır 60 dakika olarak başlar.',
        '3': 'Her sınırı kadranla veya hazır bir seçenekle, günde 5 dakikadan 8 saate kadar ayarlayın. En fazla 20 uygulamaya sınır koyabilirsiniz.',
        '4': '“Sınırı kaydet” düğmesini seçin. Sınır hemen geçerli olur; sınırlar çocuk cihazında gece yarısı sıfırlanır.',
        '5': 'Günlük sınır tüm cihaz için geçerli olmaya devam eder, bu yüzden bir uygulama kendi sınırı dolmadan kilitlenebilir. Bir sınırı kaldırmak için “Genel bakış” sekmesindeki “Mevcut sınırlar” bölümünde ona dokunun, ardından “Sınırı kaldır” düğmesini seçin.',
      },
    },
    lockUnlock: {
      title: 'Cihazı kilitleme ve kilidini açma',
      summary: 'Çocuk cihazını anında kilitleyin veya erişimi geri yükleyin.',
      tip: 'Android’de kilitleme, Diğer uygulamaların üzerinde göster ve Erişilebilirlik ikisi de etkinken en güçlüdür. iOS’ta kilitleme Ekran Süresi yetkilendirmesine bağlıdır ve KidGate iPhone’da kapatılmışsa kilit, KidGate yeniden çalıştığında görünür.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın.',
        '2': 'Bu çocuğun tüm cihazlarını kilitlemek için Tümünü kilitle’yi seçin ya da tek bir cihazı açıp Cihazı kilitle’yi seçin.',
        '3': 'Birkaç saniye bekleyin. Durum Kilitli olarak değişmelidir. Hiçbir şey değişmezse çocuk cihazında KidGate’i açın ve izinleri yeniden kontrol edin.',
        '4': 'Erişimi geri yüklemek için Tümünün kilidini aç’ı (veya cihaz ekranında Kilidi aç’ı) seçin.',
        '5': 'İsteğe bağlı: bu kısayollar cihaz kartında görünüyorsa Aile bölümünden de hızlıca kilitleyip kilidini açabilirsiniz.',
        '6': 'Kilitli bir telefon veya bilgisayar, çocuğunuzun SOS göndermesine yine izin verir. Android’de aramalar her zaman çalışır; SOS ayrıca haritaları ve mesajları 5 dakika boyunca açar, geri kalan her şey kilitli kalır; SOS “Etkinlikler”de görünür.',
      },
    },
    siri: {
      title: 'iPhone’da Siri’yi kullanma',
      summary:
        'Bir çocuğun cihazlarını sesle kilitleyin veya kilidini açın, ek dakika verin ve bugünkü ekran süresini dinleyin.',
      keywords:
        'ses, sesli komut, konuşmak, eller serbest, asistan, Kestirmeler, voice',
      tip: 'Sesli komutlar bir ebeveynin iPhone’unda, ailedeki her ebeveyn için, Siri’nin ayarlı olduğu dilde çalışır. Bazı dillerde Siri, söylenen KidGate adını yakalamaz (Vietnamcada yakalamaz): bunun yerine komutu Siri’ye yazın veya Kestirmeler uygulamasından çalıştırın. Android telefonlarda ve web panelinde yoktur.',
      steps: {
        '1': 'iPhone’unuzda KidGate’e giriş yapın ve uygulamayı bir kez açın. Siri çocuklarınızın adlarını böyle öğrenir, sonradan eklenen bir çocuk veya cihaz da KidGate’i bir sonraki açışınızda Siri’ye ulaşır. Siri “Önce KidGate’e giriş yapın.” derse KidGate’i bu iPhone’da açın.',
        '2': 'Siri’ye çocuğunuzun adıyla “KidGate, Elif kilitle” deyin. O çocuğun tüm cihazları, Tümünü kilitle’deki gibi kilitlenir. Bir çocuğa atanmamış cihaz kendi adıyla çağrılır.',
        '3': 'Erişimi geri vermek için “KidGate, Elif kilidini aç” deyin. Ailedeki tüm cihazlar için aynı anda “KidGate, hepsini kilitle” veya “KidGate, hepsinin kilidini aç” deyin.',
        '4': '“KidGate, Elif ek dakika ver” derseniz o çocuğun tüm cihazlarına bugün için 15 dakika eklenir. Ek süre gece yarısı biter.',
        '5': 'Bugünkü ekran süresini duymak için “KidGate Elif ekran süresi” deyin. Siri, KidGate’in size en son gösterdiği verileri okur. En güncelini duymak için önce KidGate’i açın.',
        '6': 'Kestirmeler uygulaması aynı komutları KidGate altında listeler ve tek dokunuşla çalıştırılabilir. 5 ile 180 dakika arasında farklı bir süre vermek için Bir çocuğa ek dakika ver eylemini kendi kestirmenize ekleyin ve dakikayı orada ayarlayın.',
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
        '3': 'Süre dolana kadar o cihazda web erişimi engellenir. Web filtresi ayarlarınız değişmez ve duraklatma, Web filtresi kapalıyken bile çalışır. Bilgisayarda tarayıcılar, duraklatma bitene kadar kapatılır.',
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
        '5': 'Yanıtlanan istekler Etkinlikler’de listelenir. Bu bildirimleri kendi cihazınızda kapatmak için Ayarlar’daki Anlık bildirimler bölümünde Süre istekleri’ni kapatın.',
      },
    },
    rewardTasks: {
      title: 'Ödül görevleri ayarlama',
      summary:
        'Çocuğunuzun bugün ekstra dakika kazanmak için bitirebileceği küçük görevler oluşturun.',
      tip: 'Bonus dakikalar yalnızca cihazda bir Günlük sınır varsa geçerli olur. Dakikalar, çocuğunuzun görevi tamamlandı olarak işaretlediği cihaza eklenir. Ödül görevleri Android TV’de ve Chrome uzantısında kullanılamaz.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Ödül görevleri’ni seçin.',
        '2': 'Yeni görev’i seçin (liste boşken bir şablonla da başlayabilirsiniz). Görevi yazın; ödülü dakika cinsinden (5 ile 240 arası), zorluğu ve tekrarını (Her gün veya Tek seferlik) seçin, ardından Görev oluştur’u seçin.',
        '3': 'Görev, çocuk cihazında “Ekstra süre kazan” bölümünde görünür. Görev bitince çocuğunuz Yaptım’ı seçer.',
        '4': 'Bir bildirim alırsınız. Görev, Onay bekliyor bölümünde (Aile’de ve çocuğunuzun profilinde) ve İncelemeye hazır bölümünde (Ödül görevleri ekranında) görünür. Dakikaları bugüne eklemek için Onayla’yı ya da çocuğunuzun tekrar deneyebilmesi için Geri gönder’i seçin.',
        '5': 'Düzenlemek veya silmek için bir göreve dokunun. Ücretsiz planda aynı anda en fazla 10 etkin görev olabilir; Premium’da bu sayı 20’dir.',
        '6': 'Her görev zorluğuna göre 1 ile 3 yıldız değerindedir ve yıldızlar görevi onayladığınızda sayılır. 2 veya daha fazla çocuğu olan bir ailede her çocuk bu haftanın yıldız tablosunu kendi cihazındaki KidGate’te görür; tablo her hafta yeniden başlar. Gizlemek için aile sahibi “Aile”yi, ardından aile kartını açar ve “Çocuklar” sekmesinde “Yıldız tablosu”nu kapatır.',
      },
    },
    locationSharing: {
      title: 'Konum paylaşımını açma',
      summary: 'Çocuğunuzun en son konumunu ebeveyn cihazında görün.',
      keywords: 'gps, harita, çocuğum nerede, telefonu bul, yerler',
      tip: 'Konum için çocuk cihazında izin ve kararlı bir ağ bağlantısı gerekir. Kapalı alanlarda GPS daha az hassas olabilir.',
      steps: {
        '1': 'Çocuk cihazında istendiğinde (veya sistem Ayarları’ndan) KidGate için Konuma izin verin. Android’de “Her zaman izin ver”, iPhone veya iPad’de “Her Zaman” seçeneğini seçin; yoksa konum yalnızca KidGate açıkken güncellenir.',
        '2': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Konum.',
        '3': 'Kapalıysa paylaşımı açın ve ilk güncellemeyi bekleyin.',
        '4': 'Durum hâlâ bekleniyor gösteriyorsa yenileme düğmesine dokunun veya ekranı yeniden açın.',
        '5': 'İsteğe bağlı ve Premium’a dahil: çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı), ardından Uyarılar bölümünü açıp Yerler’i seçerek, çocuğunuz kayıtlı bir yere girip çıktığında Yer uyarıları kurun.',
        '6': 'Telefon yakınlarda bir yerde kaldıysa Konum’u açıp Cihazı çaldır’a dokunun. iPhone sessiz moddayken ya da bir Odak açıkken ses çıkarmaz.',
      },
    },
    checkIn: {
      title: 'Check-In isteme',
      summary:
        'Çocuğunuzdan, konumuyla birlikte (Premium’da ayrıca bir fotoğrafla) güvende olduğunu onaylamasını isteyin.',
      tip: 'Fotoğraf Premium’a dahildir; ücretsiz plan yalnızca konum ister. Fotoğraf için çocuk cihazında kamera izni gereklidir.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın.',
        '2': 'Güvenlik takibi bölümünde Check-In’i, ardından cihazın yanındaki “Gönder” düğmesini seçin.',
        '3': 'Çocuk cihazı bir Check-In bildirimi ve ekranı alır. Çocuk, iyi olduğunu onaylamak veya yardım istemek için dokunur.',
        '4': 'Premium’da kamera erişimine izin verilmişse KidGate mümkün olduğunda konumla birlikte bir fotoğraf ekler. Ücretsiz planda yalnızca konum gönderilir.',
        '5': 'Ebeveyn cihazında aynı ekrandaki Check-In geçmişi, varsa son yanıtı ve fotoğrafı gösterir.',
      },
    },
    sos: {
      title: 'SOS acil durum uyarıları',
      summary:
        'Bir çocuğun nasıl SOS gönderdiği, SOS’un neleri içerdiği ve ebeveynlerin nasıl yanıt verdiği.',
      keywords:
        'panik butonu, yardım, tehlike, güvensiz, ses, sesli kayıt, mikrofon, siren, e-posta, büyükanne, büyükbaba, komşu',
      tip: 'SOS telefonlarda ve bilgisayarlarda çalışır; TV’de ve Chrome uzantısında çalışmaz. Ses yalnızca telefonlarda kaydedilir. Bir kez evde deneyin, ancak Güvenilir kişiler’i eklemeden önce veya onlara haber verdikten sonra; çünkü her SOS onlara e-posta gönderir. Çocuğunuzla ne zaman SOS kullanılacağı, ne zaman Check-In’in yeterli olduğu konusunda anlaşın.',
      steps: {
        '1': 'Çocuk cihazında KidGate’te SOS’u açın. Telefonda bu, alt çubuğun ortasındaki düğmedir.',
        '2': 'SOS düğmesini 5 saniye basılı tutun. Daha önce bırakılırsa gönderim iptal edilir.',
        '3': 'Uyarı, KidGate konumu alır almaz gönderilir; bu yarım dakikaya kadar sürebilir. Konum alınamazsa uyarı yine de gönderilir. Telefonda ardından fotoğraf için kamera açılır; bu adım atlanabilir. Kurulum sırasında mikrofona izin verildiyse SOS gönderildiği andan itibaren 15 saniyeye kadar ses kaydedilir.',
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
        'site engelle, link engelle, bağlantı engelle, url, yetişkin içerik, güvenli arama, youtube kısıtlı mod, kategoriler, dns, özel dns, vpn, iphone, ipad',
      tip: 'Filtre sayfaları değil site adlarını okur ve ne kadar kapsadığı cihaza göre değişir. Telefonlar tarayıcıları ve birçok uygulamayı filtreler. Mac, tarayıcının adını gizlediği siteleri (ziyaretlerin yaklaşık yarısı) denetleyemez. Windows, Chrome’u, Edge’i ve Firefox’u yalnızca site adına göre denetler. Chrome uzantısı yalnızca Chrome’u filtreler. Kategori seçmek, kendi listelerinizi oluşturmak ve site isteklerini yanıtlamak Premium’a dahildir. Daha güçlü koruma için Web filtresini Engellenen Uygulamalar ile birlikte kullanın.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Web filtresi.',
        '2': 'En üstteki “Uygunsuz siteleri filtrele” seçeneğini açın. Hemen uygulanır, kaydedilecek bir şey yoktur. Aynı ekrandaki “Güvenli Aramayı zorunlu kıl” ise Android, Android TV ve Chrome’da Google, Bing ve DuckDuckGo’yu güvenli sonuçlara, YouTube’u ise Kısıtlı Moda kilitler. YouTube’da Kısıtlı Mod yorumları da gizler ve bazı sıradan videoları da engeller; bu yüzden KidGate açmadan önce onay ister.',
        '3': '“Neler engellensin” altında reddedilecek kategorileri seçin. Siteleri “Her zaman izin ver” veya “Her zaman engelle” listesine ekleyin ya da izin listeniz dışındaki her şeyi reddetmek için “Yalnızca izinli siteler” seçeneğini açın. Çocuğunuz engellenmiş bir siteyi açmak istediğinde istek “Site istekleri” altında bekler. Bu kontroller Premium’a dahildir; ücretsiz plan sabit bir kategori kümesi kullanır.',
        '4': 'Daha sonra aynı ekrandan tekrar kontrol edin. Bir değişiklik birkaç dakika içinde çocuk cihazına ulaşır; orada zaten açık olan bir site, tarayıcı kapatılana kadar yüklenmeye devam edebilir. Değişiklik o zamana kadar ulaşmazsa ayarların senkronize olması için çocuk cihazında KidGate’i yeniden açın.',
        '5': 'Çocuk cihazında KidGate’i açıp filtreyi bir kez onaylayın. iPhone veya iPad’de, iOS VPN konfigürasyonları eklemek için izin istediğinde İzin Ver’i seçin, ardından cihaz parolasını girin. Android’de VPN isteğini onaylayın, ardından Ayarlar → Ağ ve internet → Özel DNS yolunu açıp Kapalı’yı seçin; çünkü Özel DNS açıkken tarayıcılar filtreyi atlayabilir. Mac’te “Web filtrelemeyi onaylayın” satırının yanındaki Ayarları aç’ı seçin ve KidGate’i etkinleştirin.',
      },
    },
    protectionAlerts: {
      title: 'Koruma uyarıları',
      summary: 'Çocuk cihazındaki önemli bir izin kapatıldığında bildirim alın.',
      tip: 'Bir koruma uyarısı, KidGate korumasının zayıfladığı anlamına gelir. İzni çocuk cihazında en kısa sürede geri yükleyin.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uyarılar bölümünden Koruma uyarıları’nı seçin.',
        '2': '“İzlenen izinler” bölümü, KidGate’in ihtiyaç duyduğu her iznin hâlâ açık olup olmadığını gösterir. Altında, Erişilebilirlik veya Konum izninin kapatılması gibi son 30 gündeki her değişiklik listelenir.',
        '3': 'Çocuk cihazında KidGate, ardından Durum’u açın ve belirtilen izni yeniden açın.',
        '4': 'Koruma uyarılarına dönün ve iznin “İzlenen izinler” altında yeniden açık göründüğünü kontrol edin.',
        '5': 'Değişikliklerden hızlıca haberdar olmak için ebeveyn cihazında bildirimleri açık tutun.',
      },
    },
    usageReports: {
      title: 'Kullanım raporlarını okuma',
      summary:
        'Her cihazın bugün ve son 30 günde ne kadar kullanıldığını çocuk bazında ve her pazartesi gelen bir raporda görün.',
      tip: 'Ücretsiz plandaki aileler bugünün toplamını ve en çok kullanılan 3 uygulamayı görür; bu bilgiler siz baktığınızda güncellenir. Premium ise 30 günlük geçmiş, her cihazın ne zaman kullanıldığı, en çok kullanılan 10 uygulama, her çocuk için bir rapor ve her pazartesi yeni bir haftalık rapor ekler. iPhone ve iPad yalnızca toplam süreyi bildirir. Bir cihazın aileye katıldığı gün, öncesindeki kullanım eksik olabilir ya da “Diğer uygulamalar” altında sayılabilir.',
      steps: {
        '1': 'Raporlar’ı açın. “Bugün” bölümü tüm cihazları toplar; altında Haftalık rapor, her çocuk (Çocuğa göre) ve her cihaz (Cihaza göre) yer alır.',
        '2': 'Bir cihazın Kullanım Raporu’nu açmak için ona dokunun: Günlük sınıra göre bugünkü durum, son 30 gün, “Ekran ne zaman açıktı” ve “En çok kullanılan”. Bu raporu cihaz ekranındaki “Bugünkü kullanım” bölümünden de açabilirsiniz.',
        '3': 'Tüm cihazlarını kapsayan tek bir rapor için bir çocuğa dokunun; süre olarak “Bugün”, “7 gün” veya “30 gün” seçilebilir. Aynı anda iki ekranda geçen süre bir kez sayılır, bu yüzden bu toplam cihazların ayrı ayrı toplamından düşük olabilir.',
        '4': 'Premium ile her pazartesi sabahı, bir cihazın kullanıldığı her hafta için bildirimle birlikte yeni bir Haftalık rapor gelir. Bir cihaz öne çıktığında rapor, değiştirebileceğiniz bir şeyi önerir ve ilgili ayarı açar.',
        '5': 'KidGate’i açtığınızda her cihazdan güncel veriler istenir, bu yüzden rakamların güncellenmesi birkaç dakika sürebilir. İnternet bağlantısı olmayan bir cihaz, yeniden çevrimiçi olduğunda veri gönderir.',
      },
    },
    screenTimeCounting: {
      title: 'Ekran süresi nasıl sayılır',
      summary:
        'Günlük sınıra ve kullanım raporlarına hangi sürelerin eklendiği, küçük bir kayan pencerede oynatılan video dahil.',
      keywords:
        'pencere içinde pencere, pip, kayan video, mini oynatıcı, küçük pencere, youtube, müzik, duraklatıldı, arka plan',
      tip: 'iPhone ve iPad’de neyin sayılacağına Apple’ın Ekran Süresi karar verir. Mac’te bir videonun sesi kilidin arkasında çalmaya devam edebilir.',
      steps: {
        '1': 'Bir uygulama çocuğun ekranında açık olduğu sürece süre sayılır. Ana ekran, bilgisayarın masaüstü, kilit ekranı ve KidGate’in kendisi sayılmaz.',
        '2': 'Android telefonda veya bilgisayarda, küçük bir kayan pencerede (pencere içinde pencere, PIP) oynatılan video, önde başka bir uygulama açıkken bile onu oynatan uygulamaya sayılır.',
        '3': 'Bu kayan video başka bir uygulamanın üzerinde oynatıldığında iki uygulama da bu süreyi “En çok kullanılan” bölümünde gösterir, ancak günün toplamı onu yalnızca bir kez sayar.',
        '4': 'Kayan penceresinde bırakılan duraklatılmış bir video, pencere ekranda kaldığı sürece sayılmaya devam eder. Saymayı durdurmak için pencereyi kapatın.',
        '5': 'Bilgisayar kilitliyken geçen süre sayılmaz. Windows bilgisayarda kilit ayrıca çoğu uygulamadaki video ve müziği duraklatır; kilit kalktığında da duraklatılmış kalırlar.',
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
        '3': 'Her satır, bir çocuğun bugünkü ekran süresini Günlük sınırıyla karşılaştırır; sınırına ulaşan çocuklar en üstte yer alır. iPhone’da en fazla 2, Android’de en fazla 3 çocuk gösterilir. Bir çocuğa atanmamış cihazlar gösterilmez.',
        '4': 'KidGate’i açtığınızda güncellenir. Uygulama kapalıyken, Premium ile, en fazla 20 dakikada bir ve yalnızca bir çocuk cihaz kullanırken güncellenir.',
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
        '5': 'Ekran son 7 günü gösterir. Çocuğunuz engellenmiş bir siteyi açmak için izin istediğinde istek burada değil, Onay bekliyor kartında görünür.',
      },
    },
    videoHistory: {
      title: 'İzlenen videoları görme',
      summary:
        'Çocuğunuzun izlediği YouTube videolarının kanal ve saat bilgisiyle bir listesini tutun.',
      keywords: 'youtube, shorts, izlenen videolar, izleme geçmişi',
      tip: 'İzlenen videolar özelliği Premium’a dahildir ve yalnızca YouTube’u kapsar. Android telefonlarda ve Chrome uzantısında çalışır; iPhone ve iPad’de çalışmaz. Mac veya PC’de Chrome uzantısını ekleyin. Android TV, videoları yalnızca KidGate’in o TV’de bildirim erişimi olduğunda kaydeder; bu izni henüz hiçbir TV ekranından vermek mümkün değildir. O durumda bile Shorts listelenmez.',
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
      tip: '“Yeni uygulamaları onayla” özelliği ve yüklü uygulamalar listesi ücretsizdir; yükleme geçmişi ve yeni bir uygulamayı engellemek Premium’a dahildir. iPhone ve iPad yüklemeleri bildiremez; bu cihazlarda “Yeni uygulamaları onayla” bunun yerine App Store’u gizler.',
      steps: {
        '1': 'Ebeveyn cihazında çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uygulamalar’a dokunun.',
        '2': 'Son değişiklikler, yüklenen ve kaldırılan uygulamaları en yeniden başlayarak listeler. Her biri için ayrıca bir bildirim alırsınız.',
        '3': 'Yüklü uygulamalar sekmesi, cihazda neler olduğunu listeler; Bakmaya değer uygulamalar Genel bakış sekmesinde yer alır. Bir uygulamayı bu gruptan çıkarmak için Güvenli olarak işaretle düğmesine dokunun. Bir uygulamayı durdurmak için ona dokunun ve “Engelle” düğmesini seçin.',
        '4': 'Yeni uygulamaları siz izin verene kadar bekletmek için Genel bakış sekmesini açın ve “Yeni uygulamaları onayla” seçeneğini etkinleştirin. Bundan sonra yüklenen her uygulama cihazda engellenmiş olarak kalır.',
        '5': 'Bekleyen yeni bir uygulama olduğunda, açılabilmesi için yanındaki İzin ver’i seçin.',
      },
    },
    messageAlerts: {
      title: 'Mesaj uyarılarını açma',
      summary:
        'Çocuğunuzun Android telefonundaki mesajlarda veya arama sorgularında endişe verici bir kelime veya ifade göründüğünde uyarı alın. Mesajın kendisini asla görmezsiniz, yalnızca işaretlenen kelimeyi veya ifadeyi görürsünüz.',
      keywords:
        'sms, messenger, whatsapp, anahtar kelimeler, zorbalık, mesajları okuma',
      tip: 'Mesaj uyarıları Premium’a dahildir. Mesajlar yalnızca Android telefonlarda denetlenir; aramalar Chrome uzantısında da denetlenir. Size yalnızca kategori ve işaretlenen kelime veya ifade ulaşır. Yapay zekâ analizi, bir ebeveyn aile için açmadıkça kapalı kalır.',
      steps: {
        '1': 'Çocuğun Android telefonunda KidGate Ayarları’nı açın, “Ebeveyn PIN’i ile Kilidi Aç” düğmesini seçin, ardından Mesaj uyarıları bölümünde “Bildirim erişimine izin ver”i seçin ve açılan listede KidGate’i etkinleştirin.',
        '2': 'Kendi cihazınızda çocuğunuzun profilini (veya cihaz bir çocuğa atanmamışsa cihazı) açın, ardından Uyarılar bölümünden Mesaj uyarıları’nı açıp en üstteki ayarlar simgesine dokunun. Çocuğunuzun birden fazla cihazı varsa önce Android telefonu seçin.',
        '3': '“Gelen mesajları tara”yı açın. “Küfürlü ifadeleri de işaretle” isteğe bağlıdır; Taranan diller altında en fazla 3 dil seçebilirsiniz.',
        '4': 'Çocuğunuzun yazdıklarını ve aradıklarını da taramak için: “Gelen mesajları tara” açıldığında çocuk cihazında Mesaj uyarıları bölümünde “İzin vermeden önce” görünür. Orada Kabul et’i seçin, ardından kendi cihazınızda “Yazılan mesajları tara” ve “Aramalarını denetle” seçeneklerini açın.',
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
        '2': 'Yeni bir cihazı eşleştirdikten sonra KidGate, cihazı kimin kullandığını aile sahibine sorar. Çocuğunuzu ya da ortak bir cihaz için Hiç kimse’yi seçin. Bir çocuk seçtiyseniz KidGate başlangıç için bir koruma seti önerir: Korumayı aç’ı veya Şimdi değil’i seçin.',
        '3': 'Kimsenin seçilmediği bir cihaz, Aile bölümünde Atanmadı altında görünür. Kartındaki “Bir çocuğa ata…” seçeneğine dokunun.',
        '4': 'Bir cihaz atandıktan sonra Günlük sınır, Engellenen Saatler, Web filtresi, Check-In, SOS, Yer uyarıları ve Ödül görevleri çocuğunuzun profilinde ayarlanır ve tüm cihazlarına uygulanır. Günlük sınır, bu cihazların hepsi için tek bir toplam olur.',
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
        '2': '7 günlük deneme, ilk çocuk cihazınız eşleştirildiğinde başlar ve her Premium özelliğini içerir. Değişmeyen tek sınır ebeveyn sayısıdır: denemede en fazla 3, Premium ile en fazla 6.',
        '3': 'Ücretsiz planda tüm kurallar çalışmaya devam eder, ancak yalnızca bir cihaz rapor gönderir; bu rapor bugünün toplamını ve en çok kullanılan 3 uygulamayı içerir ve siz baktığınızda güncellenir. Premium ise canlı güncellemeler, tüm cihazlar, 30 günlük geçmiş, web ve video geçmişi ve haftalık raporlar ekler.',
        '4': 'Deneme sona erdiğinde birden fazla çocuk cihazı varsa KidGate sizden “Raporlayan cihazı seçin” ekranında bir cihaz seçmenizi ister. Seçilen cihaz rapor göndermeye devam eder; diğerleri Duraklatıldı olarak görünür ve kurallarını korur, ancak orada bir kural yalnızca gevşetilebilir, sıkılaştırılamaz. Seçimi herhangi bir ebeveyn 7 günde bir değiştirebilir.',
        '5': 'Abone olmak için bir plan seçin ve “Premium’a abone ol” düğmesine ya da tek seferlik satın alma için “Ömür boyu satın al” düğmesine dokunun. Abone olduğunuzda duraklatılmış tüm cihazlar yeniden rapor göndermeye başlar. Daha önce ödeme yaptıysanız Satın alımları geri yükle’yi seçin.',
      },
    },
    notificationSettings: {
      title: 'Hangi uyarıları alacağınızı seçme',
      summary:
        'Her ebeveyn telefonunda her uyarı türünü açın veya kapatın ve sessiz saatler belirleyin.',
      tip: 'SOS her zaman ulaşır; her şey kapalıyken ve sessiz saatlerde bile. Bu ayarlar yalnızca bu telefon için geçerlidir; diğer ebeveynler kendi ayarlarını seçer.',
      steps: {
        '1': 'Ayarlar’ı, ardından Anlık bildirimler’i açın.',
        '2': 'Uyarılar altında, bu telefonda istemediğiniz uyarı türlerini kapatın; örneğin “Süre istekleri” veya “Uygulama kuruldu veya kaldırıldı”.',
        '3': 'Haftalık rapor, yeni bir raporun hazır olduğunu bildiren pazartesi bildirimini açıp kapatır.',
        '4': 'Sessiz saatler’i açın, ardından uyarıların ne zaman sessiz kalacağını belirlemek için kadrandaki yayın iki ucunu sürükleyin. Saatler bu telefonun saatine göre işler.',
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
    appearance: {
      title: 'Uygulamanın görünümünü değiştirme',
      summary: 'Her telefonda karanlık modu, tema stilini ve tema rengini seçin.',
      keywords: 'tema, gece modu, renkler, pembe, koyu arka plan, kişiselleştirme',
      tip: 'Her telefon kendi görünümünü korur; çocuğunuzun telefonundaki bir değişiklik sizinkini hiçbir zaman değiştirmez.',
      steps: {
        '1': 'Bir ebeveyn telefonunda “Ayarlar”ı açın. Karanlık mod, tema stili ve tema rengi “Görünüm” bölümündedir.',
        '2': 'Ekranların daha koyu olması ve gece gözünüzü daha az yorması için “Karanlık mod”u açın.',
        '3': '“Tema stili”ni seçin, ardından “Klasik”i ya da sıcak pastel tonlarıyla daha yumuşak ve neşeli bir görünüm sunan “Tatlı”yı seçin.',
        '4': '“Tema rengi”ni seçin ve düğmeler ile vurgular için bir renk belirleyin. Sunulan renkler stile göre değişir: “Tatlı” yalnızca pembe tonları sunar.',
        '5': 'Çocuğunuz aynı seçimleri kendi telefonunda, “Ayarlar”daki “Tercihler” bölümünden Ebeveyn PIN’i olmadan yapabilir.',
        '6': 'Web panelinde yan menünün hesap bölümünden “Karanlık mod”u açın. Bu yalnızca o tarayıcı için geçerlidir.',
      },
    },
    webSignIn: {
      title: 'KidGate’i bilgisayarda kullanma',
      summary: 'Web paneline giriş yapın ve ailenizi bir tarayıcıdan yönetin.',
      tip: 'Yalnızca kendiniz giriş yaptığınız bir tarayıcıya izin verin: o tarayıcı telefonunuzla aynı yetkiye sahip olur. Web paneli çocuk cihazı eşleştiremez ve plan satın alamaz. Bir tarayıcıda oturumu kapatmak için paneldeki Çıkış yap’ı kullanın. Bir tarayıcının değişiklik yapmasını durdurmak için Aile’yi, ardından Ebeveynler’i açın ve tarayıcıyı Panel bölümünden kaldırın; oturumu kapatılana kadar ailenizi görüntülemeye devam edebilir.',
      steps: {
        '1': 'Bilgisayarda dashboard.kidgate.app adresini açın. Bir QR kodu hemen görünür.',
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
        '5': 'KidGate yanıt verdikten sonra, bildirim Çözüldü olana kadar altına yanıt yazabilirsiniz; her yanıt için tek bir mesaj. Başka bir sorun için yeni bir bildirim gönderin.',
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
        '3': 'Kimliğinizi doğrulayın (şifrenizle veya Google ya da Apple ile yeniden giriş yaparak), OK yazın ve Silmeyi planla’yı seçin. Bu yalnızca silme işlemini planlar: henüz hiçbir şey kaldırılmaz.',
        '4': 'Hesap, 14 günün sonunda silinir. O zamana kadar her şeyi korumak için KidGate’i açıp Silmeyi iptal et’i seçin.',
        '5': 'Bir ortak ebeveyn hesabını sildiğinde yalnızca kendi hesabı kaldırılır; aile olduğu gibi kalır. Hesabınızı silmeden bir aileden ayrılmak için Aile bölümünde aile kartını açın ve Aileden ayrıl’ı seçin.',
      },
    },
  },
  onChildDevice: 'Çocuğun cihazında',
  onParentDevice: 'Sizin cihazınızda',
  onParentPhone: 'Telefonunuzdaki uygulamada',
  handoffHint:
    'KidGate bu adımları çocuğun cihazında adım adım gösterebilir: orada açın, Durum ekranına gidin ve Kurulumu bir ebeveynle tamamla kartında Kuruluma devam et seçeneğini seçin. Her adımda doğru ekranı açan bir düğme var.',
} as const;
