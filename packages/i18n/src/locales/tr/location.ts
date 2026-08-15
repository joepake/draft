export const location = {
  title: 'Konum',
  fallbackDeviceName: 'Çocuk cihazı',
  toastUpdateFailed: 'Konum paylaşımı güncellenemedi. Lütfen tekrar deneyin.',
  toggleLabel: 'Konumu paylaş',
  toggleHint:
    'Bu özelliği açtıktan sonra bu cihazda KidGate uygulamasını bir kez açın.',
  toggleAccessibilityLabel: 'Konumu paylaş',
  lastKnownLocation: 'Son bilinen konum',
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
  toastChildNeedsNotifications:
    'Konum yenileme isteklerinin ulaşabilmesi için lütfen çocuk cihazında KidGate uygulamasını açın ve Bildirimlere izin verin.',
  checkInBadge: 'Yoklama',
  movementHistoryTitle: 'Konum geçmişi',
  historyEmpty:
    'Henüz geçmiş yok. Konum güncellendikten veya Check-In yapıldıktan sonra noktalar görünecektir.',
  historyHighlightAccessibility: '{{place}} konumunu haritada vurgula',
  historyOpenMapsAccessibility: '{{place}} konumunu Haritalar’da aç',
  latestBadge: 'En son',
  unableToRequestLocationRefresh: 'Konum yenileme isteği gönderilemedi',
  locationBannerTitle: 'Konumu etkinleştir',
  locationBannerBody:
    'Ebeveyniniz, güvenli bir şekilde vardığınızdan emin olmak için bu cihazın konumunu görmek istiyor.',
  allowLocationButton: 'Konuma izin ver',
  locationNotAllowed:
    'Konum izni henüz verilmedi. Ayarlar → KidGate → Konum menüsünü açın (veya önce Konum Servislerini etkinleştirin). Konum seçeneği görünmüyorsa tekrar “Konuma izin ver” seçeneğini seçin.',
  locationServicesOff:
    'Konum Servisleri bu cihaz için kapalı. Ayarlar → Gizlilik ve Güvenlik → Konum Servisleri bölümünü açın, etkinleştirin, ardından KidGate’e dönüp “Konuma izin ver” seçeneğini seçin.',
  locationDeniedInSettings:
    'KidGate için konum izni reddedildi. Ayarlar → KidGate → Konum bölümünü açın ve “Uygulamayı Kullanırken” veya “Her Zaman” seçeneğini belirleyin.',
  locationEnabled:
    'Konum etkin. KidGate’in uygulama kapalıyken de konumu güncelleyebilmesi için lütfen “Her Zaman” seçeneğini kullanın.',
  backgroundLocationTitle: 'Uygulama kapalıyken konuma izin ver',
  backgroundLocationBody:
    'KidGate, aile güvenliği için ebeveynlerin uygulama kapalıyken bile bu cihazın konumunu görebilmesi amacıyla arka planda konum erişimine ihtiyaç duyar.',
  locationNote:
    'Çocuk cihazında konum paylaşımı etkinleştirildiğinde çocuğun konumunu gösterir.',
  placeAlertsNote: 'Ev, okul ve diğer güvenli yerler için konum uyarıları gönderir.',
  mapNoLocationsEmpty: 'Henüz gösterilecek konum yok',
  mapUnavailable:
    'Harita kullanılamıyor. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.',
  historyShowMore: '{{count}} yer daha göster',
} as const;
