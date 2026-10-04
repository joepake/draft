export const location = {
  title: 'Konum',
  fallbackDeviceName: 'Çocuk cihazı',
  syncNote:
    'Konumun güncellenmesi birkaç dakika sürebilir — cihazın internet bağlantısı yoksa veya beklenmedik şekilde kapandıysa bu süre daha uzun olabilir.',
  toastUpdateFailed: 'Konum paylaşımı güncellenemedi. Lütfen tekrar deneyin.',
  toggleLabel: 'Konumu paylaş',
  toggleHint:
    'Bu özelliği açtıktan sonra bu cihazda KidGate uygulamasını bir kez açın.',
  toggleAccessibilityLabel: 'Konumu paylaş',
  lastKnownLocation: 'Son bilinen konum',
  nearPlace: '{{place}} yakınında',
  noLocationHint:
    'Konum paylaşımını açın, ardından bu cihazda KidGate uygulamasını bir kez açın.',
  waitingForLocation: 'Konum bekleniyor',
  updatedAt: '{{date}} tarihinde güncellendi',
  openInMaps: 'Haritalar’da aç',
  openInMapsAccessibility: 'Haritalar’da aç',
  refreshButton: 'Konumu yenile',
  refreshingButton: 'Yenileniyor…',
  refreshAccessibility: 'Konumu yenile',
  toastEnableSharingFirst:
    'Yenileme isteği göndermeden önce lütfen konum paylaşımını etkinleştirin.',
  activityTitleRefreshRequested: 'Konum yenileme isteği gönderildi',
  activityDescriptionRefreshRequested:
    '{{deviceName}} cihazından güncel konumunu göndermesi istendi.',
  toastRefreshSent: '{{deviceName}} isteği alır almaz konumunu güncelleyecek.',
  toastRefreshFailed: 'Konum yenileme isteği gönderilemedi. Lütfen tekrar deneyin.',
  ringButton: 'Cihazı çaldır',
  toastRingSentAndroid: '{{deviceName}} isteği alır almaz çalacak.',
  toastRingSentIos:
    '{{deviceName}} isteği alır almaz ses çalacak; sessiz moddaysa ya da bir Odak açıksa ses çıkmaz.',
  toastRingFailed: 'Cihazda ses çalınamadı. Lütfen tekrar deneyin.',
  ringNotificationsOff:
    '{{deviceName}} cihazında bildirimler kapalı olduğu için ses çalınamaz. Bildirimleri o cihazın ayarlarından açın.',
  activityTitleRingRequested: 'Ses çalma istendi',
  activityDescriptionRingRequested:
    'Bulunabilmesi için {{deviceName}} cihazından ses çalması istendi.',
  toastChildNeedsNotifications:
    'Konum yenileme isteklerinin ulaşabilmesi için lütfen çocuk cihazında KidGate uygulamasını açın ve Bildirimlere izin verin.',
  checkInBadge: 'Check-In',
  movementHistoryTitle: 'Konum geçmişi',
  historyEmpty:
    'Henüz geçmiş yok. Konum güncellendikten veya Check-In yapıldıktan sonra noktalar görünecektir.',
  historyHighlightAccessibility: '{{place}} konumunu haritada vurgula',
  historyOpenMapsAccessibility: '{{place}} konumunu Haritalar’da aç',
  locationBannerTitle: 'Konumu etkinleştir',
  locationBannerBody:
    'Ebeveynin, güvenle vardığından emin olmak için bu cihazın konumunu görmek istiyor.',
  locationBannerBodySharingOff:
    'Konum paylaşımı şu anda kapalı, yani hiçbir şey gönderilmiyor. Burada izin verirsen, ileride ebeveynin açtığında hemen çalışır.',
  allowLocationButton: 'Konuma izin ver',
  locationNotAllowed:
    'Konum izni henüz verilmedi. Ayarlar → KidGate → Konum menüsünü aç (veya önce Konum Servislerini etkinleştir). Konum seçeneği görünmüyorsa tekrar “Konuma izin ver” seçeneğini seç.',
  locationNotAllowedAndroid:
    'Konuma henüz izin verilmedi. “Ayarları aç”ı seç, ardından İzinler → Konum’a git ve “Her zaman izin ver” seçeneğini seç.',
  locationServicesOff:
    'Konum Servisleri bu cihaz için kapalı. Ayarlar → Gizlilik ve Güvenlik → Konum Servisleri bölümünü aç, etkinleştir, ardından KidGate’e dönüp “Konuma izin ver” seçeneğini seç.',
  locationDeniedInSettings:
    'KidGate için konum izni reddedildi. Ayarlar → KidGate → Konum bölümünü aç ve “Uygulamayı Kullanırken” veya “Her Zaman” seçeneğini belirle.',
  foregroundOnly:
    'Konum yalnızca KidGate açıkken güncellenir. “Ayarları aç”ı seç, ardından Konum’a git ve “Her Zaman” seçeneğini seç.',
  foregroundOnlyAndroid:
    'Konum yalnızca KidGate açıkken güncellenir. “Ayarları aç”ı seç, ardından İzinler → Konum’a git ve “Her zaman izin ver” seçeneğini seç.',
  toastLocateFailed: 'Konumun şu anda bulunamadı. Biraz sonra tekrar dene.',
  backgroundLocationTitle: 'Uygulama kapalıyken konuma izin ver',
  backgroundLocationBody:
    'KidGate, aile güvenliği için ebeveynlerin uygulama kapalıyken bile bu cihazın konumunu görebilmesi amacıyla arka planda konum erişimine ihtiyaç duyar.',
  mapNoLocationsEmpty: 'Henüz gösterilecek konum yok',
  mapHistoryEmpty:
    'Hareket noktaları bir sonraki konum güncellemesinden sonra haritada görünecek.',
  mapUnavailable:
    'Harita kullanılamıyor. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.',
  historyShowMore: '{{count}} yer daha göster',
  childSharingHint: '{{childName}} adlı çocuğa atanmış her cihaz için geçerlidir.',
  childNoCapableDevices: '{{childName}} cihazlarının hiçbiri konum bildiremiyor.',
  childCarriedQuestion: 'Hangi cihaz {{childName}} ile birlikte?',
  childCarriedHint:
    'Konum o cihazdan okunur. Evde kalan tablet, çantadaki telefondan daha güncel konum bildirebilir; bu yüzden KidGate asla tahmin etmez.',
  childDevicesOnline: '{{total}} cihazdan {{online}} tanesi çevrimiçi',
  childNoneOnline: 'Çevrimiçi cihaz yok',
  childPickCarriedA11y:
    '{{deviceName}} cihazını {{childName}} yanında taşıdığı cihaz olarak işaretle',
  stayRange: '{{from}} – {{to}}',
  wizardStepAllow:
    'İzin ver’i, ardından Her zaman’ı seç; böylece güncellemeler arka planda sürer.',
  wizardStepAllowAndroid:
    'Önce “Uygulama kullanılırken” seçeneğini, sorulduğunda da “Her zaman izin ver” seçeneğini seç; böylece güncellemeler arka planda da gelmeye devam eder.',
  requestNoFix:
    'Bu cihaz konum alamadı. Konum izni bu cihazda henüz verilmemiş olabilir.',
  requestIpOnly:
    'Bu cihaz konumunu yalnızca internet bağlantısından tahmin edebildi. Cihazda Wi-Fi’yi açın (bağlanması gerekmez) ve tekrar deneyin.',
  requestUnsupported: 'Bu cihaz konumunu bildiremiyor.',
  cardSharingOff: 'Konum paylaşımı kapalı',
  cardPermissionOff: 'Bu cihazda konuma izin verilmiyor',
  cardForegroundOnly: 'Konum yalnızca bu cihazda KidGate açıkken güncellenir',
  cardIpOnly:
    'Bu cihazın konumu bulunamıyor: cihazda Wi-Fi’yi açın (bağlanması gerekmez)',
  cardNotUpdating: 'Konum güncellenmeyi durdurdu',
  namesNeedPremium: 'Yer adları ücretli bir plan gerektirir',
  namesNeedPremiumTrialEnded:
    'Deneme süreniz sona erdi. Yer adlarını tam olarak görmek için yükseltin.',
  namesNeedPremiumStill:
    'Konumlar hâlâ kaydediliyor ve kaydettiğiniz yerler adlarını göstermeye devam ediyor.',
  awayFromPlace: '{{place}} konumunun {{distance}} {{direction}}',
  distanceKm: '{{value}} km',
  distanceMeters: '{{value}} m',
  compassN: 'kuzeyinde',
  compassNe: 'kuzeydoğusunda',
  compassE: 'doğusunda',
  compassSe: 'güneydoğusunda',
  compassS: 'güneyinde',
  compassSw: 'güneybatısında',
  compassW: 'batısında',
  compassNw: 'kuzeybatısında',
  areaLabel: '{{area}} içinde bir yerde',
} as const;
