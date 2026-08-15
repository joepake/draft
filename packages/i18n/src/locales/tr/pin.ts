export const pin = {
  title: 'Ebeveyn PIN’i',
  subtitleSet: '6 haneli PIN’inizi değiştirmek için dokunun',
  subtitleNotSet:
    'Çocuk cihazlarındaki kurulumu korumak için 6 haneli bir PIN oluşturun',
  statusSet: 'Ayarlandı',
  statusNotSet: 'Ayarlanmadı',
  unlockChildPinTitle: '{{deviceName}} üzerindeki PIN kilidini aç',
  unlockChildPinSubtitle: 'Bu çocuk cihazındaki yanlış PIN denemelerini sıfırla',
  statusLocked: 'Kilitli',
  toastPinUnlocked: '{{deviceName}} üzerindeki PIN kilidi açıldı.',
  toastPinUnlockFailed: 'Çocuğun PIN kilidi açılamadı. Lütfen tekrar deneyin.',
  toastPinSaved:
    'Ebeveyn PIN’i kaydedildi. Engellenen Uygulamalar’ı değiştirmeden önce bunu çocuk cihazlarında kullanın.',
  createParentPin: 'Ebeveyn PIN’i Oluştur',
  changeParentPin: 'Ebeveyn PIN’ini Değiştir',
  parentPinSetupSubtitle:
    '6 haneli bir PIN, çocuk cihazlarındaki Engellenen Uygulamalar kurulumunu korur.',
  parentPinSetupHelper:
    'Çocuk cihazları, hangi uygulamaların engellendiğini değiştirmeden önce bu PIN’i isteyecek.',
  parentPinMismatch: 'Yeni PIN girişleri eşleşmiyor.',
  unableToSaveParentPin: 'Ebeveyn PIN’i kaydedilemedi. Lütfen tekrar deneyin.',
  onlyOwnerCanManageChildPin:
    'Çocuk cihazlarında kullanılan Ebeveyn PIN’ini yalnızca aile sahibi oluşturabilir veya değiştirebilir.',
  parentPinRequired: 'Ebeveyn PIN’i gerekli',
  enterParentPinToContinue: 'Devam etmek için 6 haneli Ebeveyn PIN’ini girin.',
  parentPinLockoutMessage:
    'Çok fazla yanlış deneme yapıldı. PIN’in kilidini Ebeveyn Ayarları’ndan açması için ebeveyninden yardım iste.',
  parentPinHelperText:
    'Engellenen uygulamaları değiştirebilecek veya oturumu kapatabilecek tek kişi bir ebeveyndir — PIN tam olarak bunun için var. Unutursan, bir ebeveyn herhangi bir cihazda KidGate’e giriş yapıp Ebeveyn Ayarları’ndan sıfırlayabilir.',
  forgotPin: 'PIN’i mi unuttun?',
  resetPinNotice:
    'PIN’i hesap sahibi olarak sıfırlıyorsunuz. Çocuk cihazları bundan sonra yeni PIN’i isteyecek.',
  unableToVerifyParentPin: 'Ebeveyn PIN’i yanlış. Lütfen tekrar deneyin.',
  parentPinGateSubtitle: 'Ayarları değiştirmek için 6 haneli Ebeveyn PIN’ini girin.',
  parentPinMustBeSixDigits: 'Ebeveyn PIN’i tam olarak 6 haneli olmalıdır.',
  pinSixDigits: 'PIN (6 hane)',
  attemptsRemaining: '{{count}} deneme hakkı kaldı.',
  attemptsRemaining_one: '{{count}} deneme hakkı kaldı.',
  currentPin: 'Mevcut PIN',
  newPin: 'Yeni PIN',
  pin: 'PIN',
  confirmPin: 'PIN’i Onayla',
  updatePin: 'PIN’i Güncelle',
  savePin: 'PIN’i Kaydet',
  pinLockedTitle: 'PIN kilitli',
  pinLockedBody:
    'Çok fazla yanlış deneme yapıldı. PIN’in kilidini Ebeveyn Ayarları’ndan açması için ebeveyninden yardım iste.',
  parentAccessRequiredTitle: 'Ebeveyn erişimi gerekli',
  parentAccessRequiredBody:
    'Bu cihazı yeniden adlandırmak, Engellenen Uygulamalar’ı seçmek veya oturumu kapatmak için PIN’ini gir.',
  unlockWithParentPinButton: 'Ebeveyn PIN’i ile Kilidi Aç',
  whyPinTitle: 'Neden PIN?',
  whyPinBody:
    'Engellenen Uygulamalar’ı değiştirmesi veya bu cihazın KidGate oturumunu kapatması gereken tek kişi bir ebeveyndir. Tema renkleri için PIN gerekmez.',
  pinLockedToast:
    'Çok fazla yanlış deneme sonrası PIN kilitlendi. Ebeveyninden Ebeveyn Ayarları’ndan kilidi açmasını iste.',
  pinNotConfiguredToast:
    'Lütfen önce bir ebeveyn cihazında Ebeveyn Ayarları’ndan 6 haneli bir PIN oluşturun.',
  enterSixDigitParentPin: '6 haneli Ebeveyn PIN’ini gir.',
  askParentCreatePin:
    'Ebeveyninden önce Ebeveyn Ayarları’ndan bir Ebeveyn PIN’i oluşturmasını iste.',
  incorrectPinAttemptsLeft: 'Yanlış PIN. {{count}} deneme hakkı kaldı.',
  incorrectPinAttemptsLeft_one: 'Yanlış PIN. {{count}} deneme hakkı kaldı.',
  enterCurrentParentPin: 'Mevcut Ebeveyn PIN’ini gir.',
  currentParentPinIncorrect: 'Mevcut Ebeveyn PIN’i yanlış.',
} as const;
