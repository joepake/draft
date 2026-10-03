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
  enterParentPinToContinue: 'Devam etmek için 6 haneli Ebeveyn PIN’ini gir.',
  parentPinLockoutMessage:
    'Çok fazla yanlış deneme yapıldı. KidGate’i kuran ebeveynden PIN’in kilidini kendi telefonunda, Ayarlar → Güvenlik bölümünden açmasını iste.',
  parentPinHelperText:
    'Engellenen uygulamaları değiştirebilecek veya oturumu kapatabilecek tek kişi bir ebeveyndir — PIN tam olarak bunun için var. PIN unutulursa, KidGate’i kuran ebeveyn kendi telefonunda, Ayarlar → Güvenlik bölümünden sıfırlayabilir.',
  forgotPin: 'PIN’inizi mi unuttunuz?',
  resetPinNotice:
    'PIN’i hesap sahibi olarak sıfırlıyorsunuz. Çocuk cihazları bundan sonra yeni PIN’i isteyecek.',
  unableToVerifyParentPin: 'Ebeveyn PIN’i yanlış. Tekrar dene.',
  unableToCheckParentPin: 'Ebeveyn PIN’i kontrol edilemedi. Biraz sonra tekrar dene.',
  parentPinGateSubtitle: 'Ayarları değiştirmek için 6 haneli Ebeveyn PIN’ini gir.',
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
    'Çok fazla yanlış deneme yapıldı. KidGate’i kuran ebeveynden PIN’in kilidini kendi telefonunda, Ayarlar → Güvenlik bölümünden açmasını iste.',
  parentAccessRequiredTitle: 'Ebeveyn erişimi gerekli',
  parentAccessRequiredBody:
    'Bu cihazı yeniden adlandırmak, Engellenen Uygulamalar’ı seçmek veya oturumu kapatmak için PIN’ini gir.',
  unlockWithParentPinButton: 'Ebeveyn PIN’i ile Kilidi Aç',
  whyPinTitle: 'Neden PIN?',
  whyPinBody:
    'Engellenen Uygulamalar’ı değiştirmesi veya bu cihazın KidGate oturumunu kapatması gereken tek kişi bir ebeveyndir. Tema renkleri için PIN gerekmez.',
  pinLockedToast:
    'Çok fazla yanlış deneme sonrası PIN kilitlendi. KidGate’i kuran ebeveynden kilidi kendi telefonunda, Ayarlar → Güvenlik bölümünden açmasını iste.',
  pinNotConfiguredToast:
    'Henüz Ebeveyn PIN’i yok. KidGate’i kuran ebeveyn bunu kendi telefonunda, Ayarlar → Güvenlik bölümünden oluşturur.',
  pairedNoPin:
    'Henüz Ebeveyn PIN’i yok. Çocuk cihazları, Engellenen Uygulamalar değiştirilmeden veya bir cihazın oturumu kapatılmadan önce bunu ister.',
  enterSixDigitParentPin: '6 haneli Ebeveyn PIN’ini gir.',
  askParentCreatePin:
    'KidGate’i kuran ebeveynden kendi telefonunda, Ayarlar → Güvenlik bölümünden bir Ebeveyn PIN’i oluşturmasını iste.',
  incorrectPinAttemptsLeft: 'Yanlış PIN. {{count}} deneme hakkı kaldı.',
  incorrectPinAttemptsLeft_one: 'Yanlış PIN. {{count}} deneme hakkı kaldı.',
  enterCurrentParentPin: 'Mevcut Ebeveyn PIN’ini gir.',
  currentParentPinIncorrect:
    'Mevcut Ebeveyn PIN’i yanlış. Kontrol edip tekrar deneyin ya da sıfırlamak için “PIN’inizi mi unuttunuz?” seçeneğini kullanın.',
} as const;
