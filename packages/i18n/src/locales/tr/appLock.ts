export const appLock = {
  toggleLabel: 'Uygulama Kilidi',
  toggleHint: 'Ebeveyn uygulamasını açarken PIN iste',
  biometricToggleLabel: '{{biometryLabel}} ile Kilidi Aç',
  biometricToggleHint: 'PIN girmek yerine biyometri kullan',
  fallbackBiometryLabel: 'Biyometri',
  changePinTitle: 'Uygulama Kilidi PIN’ini Değiştir',
  changePinSubtitle: 'Bu cihazda kullanılan PIN’i güncelleyin',
  turnOffAlertTitle: 'Uygulama Kilidi kapatılsın mı?',
  turnOffAlertMessage:
    'Bu cihazdaki uygulama için PIN ve biyometrik kilit açma kaldırılacak.',
  turnOffButton: 'Kapat',
  toastTurnedOff: 'Uygulama Kilidi bu cihazda kapatıldı.',
  toastTurnOffFailed: 'Uygulama Kilidi kapatılamadı. Lütfen tekrar deneyin.',
  toastBiometricEnabled:
    '{{biometryLabel}} uygulama kilidini açmak için etkinleştirildi.',
  toastBiometricEnableFailed:
    'Biyometrik kilit açma etkinleştirilemedi. Lütfen tekrar deneyin.',
  toastBiometricDisableFailed:
    'Biyometrik kilit açma devre dışı bırakılamadı. Lütfen tekrar deneyin.',
  toastEnabled: 'Uygulama Kilidi bu cihazda etkinleştirildi.',
  createAppLockPin: 'Uygulama Kilidi PIN’i Oluştur',
  changeAppLockPin: 'Uygulama Kilidi PIN’ini Değiştir',
  appLockSetupSubtitle:
    'Bu cihazda ebeveyn uygulamasının kilidini açmak için 6 haneli bir PIN seçin.',
  appLockSetupHelper:
    'Bu PIN yalnızca bu cihazda kalır ve çocuk cihazlarında kullanılan Ebeveyn PIN’inden farklıdır.',
  appLockPinMismatch: 'PIN girişleri eşleşmiyor.',
  unableToSaveAppLockPin: 'Uygulama Kilidi PIN’i kaydedilemedi. Lütfen tekrar deneyin.',
  kidGateLocked: 'KidGate kilitli',
  signInRequired: 'Giriş gerekli',
  enterAppLockPin: 'Ebeveyn uygulamasını açmak için Uygulama Kilidi PIN’ini girin.',
  appLockLockoutMessage:
    'Çok fazla yanlış deneme yapıldı. Tekrar giriş yapabilmeniz için oturumunuz kapatılacak.',
  appLockPinLabel: 'Uygulama Kilidi PIN’i (6 hane)',
  attemptsRemainingShort: '{{count}} deneme hakkı kaldı',
  attemptsRemainingShort_one: '{{count}} deneme hakkı kaldı',
  unlockWithBiometric: '{{biometryLabel}} ile Kilidi Aç',
  signInAgain: 'Tekrar giriş yap',
  tooManyPinAttemptsSignIn:
    'Çok fazla yanlış deneme yapıldı. Lütfen tekrar giriş yapın.',
  unableToVerifyPin: 'Bu PIN yanlış. Lütfen tekrar deneyin.',
  appLockPinMustBeSixDigits: 'Uygulama Kilidi PIN’i tam olarak 6 haneli olmalıdır.',
  enterCurrentAppLockPin: 'Mevcut Uygulama Kilidi PIN’ini girin.',
  currentAppLockPinIncorrect: 'Mevcut Uygulama Kilidi PIN’i yanlış.',
  signInAgainToContinue:
    'Çok fazla yanlış deneme yapıldı. Devam etmek için lütfen tekrar giriş yapın.',
  incorrectPinAttemptsLeft: 'Yanlış PIN. {{count}} deneme hakkı kaldı.',
  incorrectPinAttemptsLeft_one: 'Yanlış PIN. {{count}} deneme hakkı kaldı.',
  biometricsUnavailable: 'Biyometrik kilit açma bu cihazda kullanılamıyor.',
  unlockKidGateTitle: 'KidGate Kilidini Aç',
  biometricUnlockSubtitle: 'Ebeveyn uygulamasını açmak için kimliğinizi doğrulayın',
  faceId: 'Face ID',
  touchId: 'Touch ID',
  fingerprint: 'Parmak izi',
} as const;
