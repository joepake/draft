export const userGuide = {
  title: 'Kullanıcı kılavuzu',
  subtitle:
    'İzinler, cihaz eşleştirme, günlük kontroller ve güvenlik özellikleri hakkında adım adım yardım.',
  stepLabel: 'Adım {{n}}',
  stepsSectionTitle: 'Adımlar',
  tipTitle: 'İpucu',
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
      description: 'Sınırlar, programlar, uygulama engelleme ve cihaz kilitleme',
    },
    safety: {
      title: 'Güvenlik ve izleme',
      description: 'Konum, Check-In, SOS, Web filtresi ve koruma',
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
        '2': 'Google veya Apple ile giriş yapın ya da bir e-posta hesabı oluşturun. Bu hane için aile sahibi olduğunuzu onaylayın.',
        '3': 'İstenirse ailenize bir isim verin (örneğin, “Nguyen ailesi”). Bu isim başka ebeveynler katıldığında görünür.',
        '4': 'Ayarlar → Güvenlik bölümünden bir Ebeveyn PIN’i (6 haneli) belirleyin. Ezberleyin veya güvenli bir yerde saklayın, çocuklarla paylaşmayın.',
        '5': 'Önerilir: başkalarının cihazınızda ebeveyn uygulamasını açamaması için Ayarlar’dan Uygulama Kilidi’ni ve biyometrik kilit açmayı etkinleştirin.',
        '6': 'Aile (Cihazlar) bölümünü açın. + simgesine dokunun ve Bir çocuk cihazı bağla’yı seçin. Bu ekranı çocuk cihazındaki QR kodu veya kodu okutmak için hazır tutun.',
        '7': 'Çocuk cihazı bağlandıktan sonra o cihazın kartını açın. Günlük sınırı ve Engellenen saatleri belirleyin, izinleri çocuğunuzla birlikte tamamlayın.',
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
      title: 'Çocuk cihazı bağlama',
      summary: 'Yeni bir çocuk cihazını bir QR kodu veya kodla ailenize eşleştirin.',
      tip: 'Kodların süresi dolar. Eşleştirme başarısız olursa çocuk cihazında Yeni kod’u seçip tekrar deneyin.',
      steps: {
        '1': 'Çocuk cihazında: KidGate → Bu bir çocuk cihazı’nı açın. QR kodu ekranını görünür bırakın.',
        '2': 'Ebeveyn cihazında: Aile’yi açın → + simgesine dokunun → Bir çocuk cihazı bağla.',
        '3': 'QR kodu önerilir: QR kodu tara’yı seçin, istenirse kameraya izin verin ve çocuk cihazındaki QR kodunu çerçeve içine hizalayın.',
        '4': 'Ya da kodu kullanın: Kodu manuel gir’i seçin, çocuk cihazında gösterilen 6 karakteri yazın, sonra devam edin.',
        '5': 'Çocuk cihazında onay ekranını dikkatle okuyun. Ebeveyn adı doğruysa Evet, bağlan’ı seçin.',
        '6': 'Ebeveyn cihazının bağlantıyı onaylamasını bekleyin. Yeni cihaz Aile bölümünde görünür.',
        '7': 'Yeni cihazı açın ve Son etkinlik alanının güncellendiğini kontrol edin. Çevrimdışı kalmaya devam ederse çocuk cihazında KidGate’i yeniden açın ve ağ bağlantısını kontrol edin.',
        '8': 'Ardından çocuk cihazında izinleri verin (Uygulama izinleri grubuna bakın). Bu izinler açılana kadar kontroller tam olarak çalışmaz.',
      },
    },
    inviteParent: {
      title: 'Başka bir ebeveyni davet etme',
      summary:
        'İkinci bir ebeveynin aynı aileye katılıp aynı çocuk cihazlarını yönetmesine izin verin.',
      tip: 'Katılma isteklerini yalnızca aile sahibi onaylayabilir. İstekler süresi dolabileceğinden hemen onaylayın.',
      steps: {
        '1': 'Aile sahibinin cihazında Aile’yi açın → + simgesine dokunun → Başka bir ebeveyn cihazı ekle (veya Ebeveyn davet et).',
        '2': 'Henüz bir aile adı oluşturmadıysanız bir tane girin ve Aile oluştur’u seçin.',
        '3': 'Davet QR kodunu diğer ebeveyne gösterin veya davet kodunu onunla paylaşın.',
        '4': 'Diğer ebeveynin cihazında: KidGate’i ebeveyn olarak açın → Aile → + → Aileye katıl, ardından QR kodunu tarayın veya kodu girin.',
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
        '2': 'Aile’yi açın → + simgesine dokunun → Aileye katıl.',
        '3': 'Sahibin davet QR kodunu tarayın veya 6 haneli davet kodunu girin.',
        '4': 'Sahibin onaylamasını bekleyin. Aileye katıldığınızı görene kadar uygulamayı açık tutun.',
        '5': 'Çocuk cihazlarının Aile bölümünde göründüğünü doğrulayın. Durumunu ve kontrollerini görmek için bir cihazı açın.',
      },
    },
    androidPermissions: {
      title: 'Android izinleri (çocuk cihazı)',
      summary:
        'Kullanım Erişimi, Diğer uygulamaların üzerinde göster, Erişilebilirlik, batarya ve ilgili izinleri açın.',
      tip: 'Eksiksizlik sıradan daha önemlidir. Kilitleme veya Engellenen saatlere güvenmeden önce çocuğun Durum ekranındaki her kırmızı veya izin verilmemiş satır düzeltilmelidir.',
      steps: {
        '1': 'Çocuk cihazında KidGate → Durum’u açın ve izin listesini yukarıdan aşağıya doğru tamamlayın.',
        '2': 'Bildirimler: satıra dokunun → İzin ver. Kilitleme komutları ve süre istekleri için ebeveynlerin push bildirimlerine ihtiyacı vardır.',
        '3': 'Kullanım Erişimi: sistem ekranını açın → KidGate’i bulun → açın. Bu, ekran süresi takibi ve sınırlar için gereklidir.',
        '4': 'Diğer uygulamaların üzerinde göster: KidGate için izin verin. Kilit ekranının diğer uygulamaların üzerinde görünebilmesi için bu gereklidir.',
        '5': 'Erişilebilirlik kilit yardımcısı: Ayarlar → Erişilebilirlik → Yüklü / indirilen uygulamalar → KidGate → Açık. Bu, kilitlemenin etkin kalmasını sağlar.',
        '6': 'Sınırsız batarya: istendiğinde İzin ver’i seçin. İstem görünmüyorsa: Uygulama bilgisi → Batarya → Sınırsız.',
        '7': 'Alarmlar ve hatırlatıcılar: Engellenen saatlerin zamanında başlayıp bitmesi için buna izin verin.',
        '8': 'Konum ve Kamera (Check-In veya SOS fotoğrafları kullanıyorsanız): KidGate istedikçe izin verin. Durum’a dönüp tüm satırların izinli olduğunu doğrulayın.',
      },
    },
    iosScreenTime: {
      title: 'iOS Ekran Süresi (çocuk cihazı)',
      summary:
        'Kilitleme, programlar ve uygulama seçiminin çalışabilmesi için Uygulama ve Web Sitesi Kullanımına izin verin.',
      tip: 'İzin Ver düğmesi görünmüyorsa iOS Ayarları → Ekran Süresi’ni açın ve önce çocuk cihazında Ekran Süresi’nin etkin olduğundan emin olun.',
      steps: {
        '1': 'Çocuğun iPhone’unda KidGate’i açın ve Durum / kurulum ekranında kalın.',
        '2': 'Uygulama ve Web Sitesi Kullanımına İzin Ver’i (veya Ekran Süresi bannerını) seçin.',
        '3': 'Sistem iletişim kutusunda İzin Ver’i seçin. Lütfen bir seçim yapmadan iletişim kutusunu kapatmayın.',
        '4': 'KidGate’e dönün. Yetkilendirme başarılı olduğunda banner kaybolur.',
        '5': 'Yetkilendirme daha önce reddedildiyse: iOS Ayarları’nı açın → KidGate’i bulun → ilgili Ekran Süresi / Aile Kontrolleri seçeneklerini etkinleştirin, ardından KidGate’i yeniden açın.',
        '6': 'Engellenecek uygulamaları seçmek için: çocuk cihazında KidGate Ayarları’nı açın → Ebeveyn PIN’ini girin → Engellenecek uygulamaları seç → kaydedin.',
        '7': 'Ebeveyn cihazında cihazı açın → Engellenen uygulamalar’a gidin ve listenin senkronize olduğunu doğrulayın. Hazır olduğunuzda engellemeyi açın.',
      },
    },
    oemKeepRunning: {
      title: 'KidGate’i çalışır tutma (üretici ayarları)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei ve benzeri cihazlar genellikle arka plan uygulamalarını duraklatır.',
      tip: 'Batarya kurallarını değiştirdikten sonra çocuk cihazını bir kez yeniden başlatın, KidGate’i yeniden açın ve kilitlemeyi ebeveyn cihazından test edin.',
      steps: {
        '1': 'Çocuğun Android cihazında KidGate → Durum → KidGate’i çalışır tutma’yı açın.',
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
      tip: 'Kullanım verisi çocuk cihazından gelir. Sayaç takılı kalmış gibi görünüyorsa çocuk cihazında KidGate’i açın ve senkronizasyonu bekleyin.',
      steps: {
        '1': 'Ebeveyn cihazında Aile’yi açın → çocuk cihazına dokunun.',
        '2': 'Temel kontroller altında Günlük sınır’ı seçin.',
        '3': 'Günlük dakika değerini seçin (veya mevcut sınırı düzenleyin), ardından kaydedin.',
        '4': 'Çocuk cihazı senkronize olduktan sonra cihaz kartının bugünün kullanılan ve sınır dakikalarını gösterdiğini doğrulayın.',
        '5': 'Sınıra ulaşıldığında cihaz platform kurallarına göre kilitlenir. Erişimi erken geri yüklemek isterseniz cihaz ekranında Kilidi aç’ı seçin.',
      },
    },
    blockedHours: {
      title: 'Engellenen saatler belirleme',
      summary: 'Cihazın kilitli kalması gereken en fazla 3 zaman aralığı planlayın.',
      tip: 'Önce okul saatlerini ve yatış zamanlarını belirleyin. Programı anlaşılır tutmak için çakışan aralıklardan kaçının.',
      steps: {
        '1': 'Ebeveyn cihazında çocuk cihazını açın → Engellenen saatler.',
        '2': 'Engellenen saatler belirle’yi (veya Engellenen saatleri düzenle’yi) seçin. Başlangıç saati, bitiş saati ve günlerle bir aralık ekleyin.',
        '3': 'Aralığı kaydedin. Toplamda en fazla 3 aralık ekleyebilirsiniz.',
        '4': 'Bir etkinleştirme anahtarı gösteriliyorsa programı açın.',
        '5': 'Çocuk cihazında programın zamanında çalışması için Alarmlar ve hatırlatıcılar ile Ekran Süresi izinlerinin hâlâ verili olduğunu doğrulayın.',
        '6': 'Aktif bir aralık sırasında cihaz kartında Engellenen saatler etkin · kilitli yazar. Kilidi aç’ı yalnızca programı bilerek geçersiz kılmak istediğinizde kullanın.',
      },
    },
    blockedApps: {
      title: 'Belirli uygulamaları engelleme',
      summary:
        'Çocuk cihazında uygulamaları seçin, ardından ebeveyn cihazından engellemeyi etkinleştirin.',
      tip: 'iOS’ta Apple, uygulamaların gerçek adlarını ebeveyn cihazlarından gizleyebilir. Seçim yine de çocuk cihazında Ebeveyn PIN’i ile yapılır.',
      steps: {
        '1': 'Çocuk cihazını doğrudan kullanın. KidGate → Ayarlar’ı açın.',
        '2': 'İstendiğinde Ebeveyn PIN’ini girin.',
        '3': 'Engellenecek uygulamaları seç’i açın. Uygulamaları (ve gösteriliyorsa kategorileri) seçin, ardından çocuk cihazında kaydedin.',
        '4': 'Ebeveyn cihazında cihazı açın → Engellenen uygulamalar’a gidin ve seçilen listenin görünmesini bekleyin.',
        '5': 'Uygulama Engellemeyi Etkinleştir’i açın. Durum, Engelleme açık olarak görünmelidir.',
        '6': 'Çocuk cihazında engellenen bir uygulamayı açarak test edin. Platform kurallarına göre kısıtlanmalıdır.',
        '7': 'Listeyi daha sonra değiştirmek için seçimi çocuk cihazında Ebeveyn PIN’i ile tekrarlayın. Ebeveyn cihazı yeni listeyi senkronize edecektir.',
      },
    },
    lockUnlock: {
      title: 'Cihazı kilitleme ve kilidini açma',
      summary: 'Çocuk cihazını anında kilitleyin veya erişimi geri yükleyin.',
      tip: 'Android’de kilitleme, Diğer uygulamaların üzerinde göster ve Erişilebilirlik ikisi de etkinken en güçlüdür. iOS’ta kilitleme Ekran Süresi yetkilendirmesine bağlıdır.',
      steps: {
        '1': 'Ebeveyn cihazında çocuk cihazını açın.',
        '2': 'Cihazı kilitle’yi (veya gösterilen platform seçeneklerine bağlı olarak KidGate’te kilitle’yi) seçin.',
        '3': 'Birkaç saniye bekleyin. Durum Kilitli olarak değişmelidir. Hiçbir şey değişmezse çocuk cihazında KidGate’i açın ve izinleri yeniden kontrol edin.',
        '4': 'Erişimi geri yüklemek için aynı cihaz ekranında Kilidi aç’ı seçin ve onaylayın.',
        '5': 'İsteğe bağlı: bu kısayollar cihaz kartında görünüyorsa Aile bölümünden de hızlıca kilitleyip kilidini açabilirsiniz.',
      },
    },
    locationSharing: {
      title: 'Konum paylaşımını açma',
      summary: 'Çocuğunuzun en son konumunu ebeveyn cihazında görün.',
      tip: 'Konum için çocuk cihazında izin ve kararlı bir ağ bağlantısı gerekir. Kapalı alanlarda GPS daha az hassas olabilir.',
      steps: {
        '1': 'Çocuk cihazında istendiğinde (veya sistem Ayarları’ndan) KidGate için Konuma izin verin.',
        '2': 'Ebeveyn cihazında cihazı açın → Konum.',
        '3': 'Kapalıysa paylaşımı açın ve ilk güncellemeyi bekleyin.',
        '4': 'Durum hâlâ bekleniyor gösteriyorsa aşağı çekerek yenileyin veya ekranı yeniden açın.',
        '5': 'İsteğe bağlı: çocuğunuz kayıtlı bir yere girip çıktığında bildirim almak için Yer Uyarıları kurun.',
      },
    },
    checkIn: {
      title: 'Check-In isteme',
      summary:
        'Çocuğunuzdan konum ve isteğe bağlı bir fotoğrafla güvende olduğunu onaylamasını isteyin.',
      tip: 'Fotoğraflı Check-In için çocuk cihazında kamera izni gereklidir.',
      steps: {
        '1': 'Ebeveyn cihazında çocuk cihazını açın.',
        '2': 'Check-In’i (hızlı işlem veya Güvenlik bölümü) seçin.',
        '3': 'Çocuk cihazı bir Check-In bildirimi ve ekranı alır. Çocuk, iyi olduğunu onaylamak veya yardım istemek için dokunur.',
        '4': 'Kamera erişimine izin verilmişse KidGate mümkün olduğunda konumla birlikte bir fotoğraf ekler.',
        '5': 'Ebeveyn cihazında son yanıtı ve fotoğrafı incelemek için Check-In geçmişini açın.',
      },
    },
    sos: {
      title: 'SOS acil durum uyarıları',
      summary:
        'Bir çocuğun nasıl SOS gönderdiğini ve ebeveynlerin bunu nasıl incelediğini öğrenin.',
      tip: 'Gerçek bir acil durumdan önce hem ebeveynin hem de çocuğun süreci bilmesi için bunu bir kez evde deneyin.',
      steps: {
        '1': 'Çocuk cihazında KidGate’te SOS sekmesini veya ekranını açın.',
        '2': 'SOS göndermek için ekrandaki adımları izleyin (konum ve fotoğraf verilen izinlere bağlıdır).',
        '3': 'SOS gönderildiğinde ebeveynler bir push bildirimi alır.',
        '4': 'Ebeveyn cihazında cihazı açın → olayı incelemek için SOS Uyarıları’na gidin.',
        '5': 'Çocuğunuzla ne zaman SOS kullanılacağı, ne zaman normal bir Check-In’in yeterli olduğu konusunda anlaşın.',
      },
    },
    webFilter: {
      title: 'Yetişkin web sitelerini sınırlama',
      summary:
        'Platformun desteklediği yerlerde yetişkin içeriği için Web filtresini açın.',
      tip: 'Web filtreleme platform özelliklerine bağlıdır. Daha güçlü koruma için Engellenen uygulamalar ile birlikte kullanın.',
      steps: {
        '1': 'Ebeveyn cihazında çocuk cihazını açın → Web filtresi.',
        '2': 'Mevcut durumu (yetişkin siteleri sınırlı veya filtreleme kapalı) inceleyin.',
        '3': 'Bir anahtar gösteriliyorsa filtrelemeyi açın ve kaydedin.',
        '4': 'Daha sonra aynı ekrandan tekrar kontrol edin. Durum Bekleniyor olarak kalırsa ayarların senkronize olması için çocuk cihazında KidGate’i yeniden açın.',
      },
    },
    protectionAlerts: {
      title: 'Koruma uyarıları',
      summary: 'Çocuk cihazındaki önemli bir izin kapatıldığında bildirim alın.',
      tip: 'Bir koruma uyarısı, KidGate korumasının zayıfladığı anlamına gelir. İzni çocuk cihazında en kısa sürede geri yükleyin.',
      steps: {
        '1': 'Çocuk cihazını açın → Koruma (veya Koruma uyarıları).',
        '2': 'Diğer uygulamaların üzerinde göster, Erişilebilirlik, Kullanım Erişimi, Kamera veya Konum gibi izinlerin kapatılması gibi son olayları inceleyin.',
        '3': 'Çocuk cihazında KidGate → Durum’u açın ve belirtilen izni yeniden açın.',
        '4': 'Koruma uyarılarına dönün ve beklenmedik yeni bir olay olmadığını doğrulayın.',
        '5': 'Değişikliklerden hızlıca haberdar olmak için ebeveyn cihazında bildirimleri açık tutun.',
      },
    },
  },
} as const;
