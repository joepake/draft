// errors.ts (Türkçe)

export const errors = {
  timeRequestAlreadyResolved: 'Bu istek başka bir ebeveyn tarafından zaten işlendi.',
  emailAlreadyInUse: 'Bu e-posta adresi zaten kayıtlı.',
  invalidEmail: 'Geçersiz e-posta adresi.',
  weakPassword: 'Parola en az 6 karakter olmalıdır.',
  invalidEmailOrPassword: 'E-posta adresi veya parola hatalı.',
  tooManyRequests: 'Çok fazla deneme yapıldı. Lütfen daha sonra tekrar deneyin.',
  somethingWentWrong: 'Bir hata oluştu. Lütfen tekrar deneyin.',
  unableToCreateAccount: 'Hesap oluşturulamadı. Lütfen tekrar deneyin.',
  unableToSignIn: 'Oturum açılamadı. Lütfen tekrar deneyin.',
  unableToJoinFamilyAccount: 'Aile hesabına katılınamadı. Lütfen tekrar deneyin.',
  enterEmailAddress: 'Lütfen e-posta adresinizi girin.',
  unableToCreatePairingCode: 'Eşleştirme kodu oluşturulamadı. Lütfen tekrar deneyin.',
  unableToRedeemPairingCode: 'Eşleştirme kodu geçersiz veya süresi dolmuş.',
  unableToClaimChildPairing: 'Çocuğun cihazı bağlanamadı. Lütfen tekrar deneyin.',
  unableToPollChildPairing: 'Eşleştirme durumu kontrol edilemedi.',
  unableToConfirmChildPairing: 'Eşleştirme onaylanamadı. Lütfen tekrar deneyin.',
  unableToRejectChildPairing: 'Eşleştirme reddedilemedi. Lütfen tekrar deneyin.',
  photoCaptureCancelled: 'Fotoğraf çekimi iptal edildi.',
  unableToOpenCamera:
    'Kamera açılamadı. Lütfen cihaz ayarlarından kamera erişimine izin verin.',
  noPhotoCaptured: 'Fotoğraf çekilmedi.',
  simulatorCameraHint:
    'Simülatörde önce Simulator → Camera → Front Camera seçeneğini etkinleştirin ve ardından SOS özelliğini tekrar deneyin. Gerçek fotoğraf için fiziksel bir iPhone kullanın.',
  notSignedInReopenApp:
    'Oturum açılmamış. Uygulamayı kapatıp yeniden açın ve tekrar deneyin.',
  accountMismatchSignOut: 'Hesap uyuşmuyor. Oturumu kapatıp tekrar giriş yapın.',
  storageUploadUnauthorized:
    'Fotoğraf şu anda yüklenemiyor. Lütfen biraz sonra tekrar deneyin.',
  storageNotSetup: 'Fotoğraf şu anda yüklenemiyor. Lütfen biraz sonra tekrar deneyin.',
  noNetworkConnection:
    'İnternet bağlantısı yok. Wi-Fi veya mobil verinizi kontrol edip tekrar deneyin.',
  connectionFailedTitle: 'Bağlantı başarısız',
  connectionFailedBody:
    'KidGate bağlanamadı. Wi-Fi veya mobil verinizi kontrol edin ve “Yeniden Bağlan”ı seçin.',
  reconnect: 'Yeniden Bağlan',
  unableToUploadPhoto: 'Fotoğraf yüklenemedi. Lütfen tekrar deneyin.',
  premiumSubscriptionRequired:
    'Bu özellik Premium gerektirir. Günlük sınır, Engellenen saatler, konum ve SOS ücretsiz kalır.',
  trialEndedCannotJoinFamily:
    'Ücretsiz deneme süreniz sona erdi. Başka bir aileye katılmak için Premium’a abone olun.',

  notFamilyMember:
    'Artık bu ailenin bir üyesi değilsiniz. Aile sahibinden sizi tekrar davet etmesini isteyin.',
  familyNotCreated: 'Önce ailenizi oluşturun, ardından başka bir ebeveyni davet edin.',
  childDeviceNotAllowed: 'Bu bir çocuk cihazıdır ve aile ayarlarını yönetemez.',
  deviceCredentialMissing:
    'Bu cihazın yeniden bağlanması gerekiyor. KidGate’i kapatıp tekrar açın ve yeniden deneyin.',
  deviceNotFound: 'Bu cihaz artık ailenize ait değil.',
  registerParentDeviceFirst:
    'Önce bu cihazı ebeveyn cihazı olarak ayarlayın, ardından tekrar deneyin.',
  pairingCodeFormat: '6 karakterli kodu girin.',
  pairingCodeUsed: 'Bu kod zaten kullanılmış. Yeni bir kod isteyin.',
  pairingCodeExpiredChild:
    'Bu kodun süresi doldu. Çocuğun yeni bir kod oluşturmasını isteyin.',
  pairingCodeExpiredParent:
    'Bu kodun süresi doldu. Diğer ebeveynden yeni bir kod isteyin.',
  pairingOwnFamily: 'Bu zaten sizin aileniz. Tekrar katılmanıza gerek yok.',
  pairingSessionNotFound: 'Bu eşleştirme isteği artık mevcut değil.',
  pairingAlreadyCompleted: 'Bu cihaz zaten eşleştirildi.',
  pairingDeclined: 'Eşleştirme isteği diğer cihazda reddedildi.',
  pairingNoParentWaiting:
    'Onay bekleyen bir ebeveyn yok. Eşleştirmeyi ebeveyn cihazından yeniden başlatın.',
  pairingRequestExpired: 'Eşleştirme isteğinin süresi doldu. Baştan başlayın.',
  joinRequestNotFound: 'Bu katılma isteği artık mevcut değil.',
  joinRequestResolved: 'Bu katılma isteği zaten yanıtlandı.',
  joinRequestExpired: 'Katılma isteğinin süresi doldu. Yeni bir davet isteyin.',
  timeRequestPendingExists: 'Zaten bekleyen bir ek süre isteğiniz var.',
  timeRequestCooldown: 'Yeni bir istek göndermeden önce biraz bekleyin.',
  deviceClockOutOfRange:
    'Bu cihazın tarih veya saati yanlış görünüyor. Otomatik tarih ve saati etkinleştirin.',
  locationSharingDisabled:
    'Bu cihazda konum paylaşımı kapalı. Cihaz ayarlarından etkinleştirip tekrar deneyin.',
  childDeviceNoPushToken:
    'Çocuğun cihazı henüz istek alamıyor. Çocuğun cihazında KidGate’i açın ve bildirimlere izin verin.',
  unableToRequestLocation: 'Şu anda konum istenemiyor. Lütfen tekrar deneyin.',
  unableToVerifyPurchase:
    'Satın alma doğrulanamadı. Lütfen biraz sonra tekrar deneyin.',
  noPurchasesToRestore: 'Bu hesap için geri yüklenecek satın alma bulunamadı.',
  noActiveSubscription: 'Bu hesapta etkin bir abonelik bulunamadı.',
  unableToRestorePurchases:
    'Satın almalar şu anda geri yüklenemiyor. Lütfen tekrar deneyin.',
  alreadyInFamily: 'Zaten bu ailenin bir üyesisiniz.',
  leaveFamilyBeforeJoining:
    'Başka bir aileye katılmadan önce mevcut ailenizden ayrılın.',
  deviceLimitReached:
    'Bu plan tek bir çocuk cihazını kapsar. Başka eklemek için abone olun.',
};
