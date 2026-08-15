export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'Web’de KidGate',
  title: 'Tarayıcıya izin ver',
  subtitle: 'Aileyi bilgisayardan yönet',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro: 'Bir tarayıcı, ancak bu telefondan izin verdikten sonra ailene erişebilir.',
  stepsTitle: 'Bilgisayarında',
  step1: '{{url}} adresini bir tarayıcıda aç.',
  step2: '“KidGate uygulamasıyla giriş yap” seçeneğini seç.',
  step3: 'Ekranda çıkan kodu aşağıdaki kamerayla tara.',
  scanHint: 'QR kodu çerçevenin içinde tut.',
  manualTitle: '6 karakterli kodu gir',
  manualHint: 'Kod, bilgisayarındaki QR kodun altında yazıyor.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Devam',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Bu tarayıcıya izin verilsin mi?',
  confirmBody:
    'Bu telefonla aynı yetkiyi alır: çocuklarının nerede olduğunu görür, limitleri değiştirir, cihazları kilitler ve istekleri onaylar. Yalnızca giriş yapan sen isen izin ver.',
  confirmCodeLabel: 'Bilgisayarındaki kod',
  approveButton: 'İzin ver',
  declineButton: 'İzin verme',
  declinedToast: 'Tarayıcıya izin verilmedi.',
  approvedTitle: 'Tarayıcıya izin verildi',
  approvedBody: 'Bilgisayarın giriş yapıyor. Telefonu bırakabilirsin.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Bu QR kod bir web giriş kodu değil. Bilgisayarda giriş ekranının açık olduğunu kontrol et.',
  expired: 'Bu kodun süresi doldu. Bilgisayarında yeni bir kod göster.',
  alreadyUsed: 'Bu kod zaten kullanıldı. Bilgisayarında yeni bir kod göster.',
  notFound: 'Bu kod geçersiz. Altı karakteri kontrol edip tekrar dene.',
  failed: 'İstek tamamlanamadı. Lütfen tekrar dene.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'İzin verilen tarayıcılar',
  sessionsEmpty: 'Hesabında giriş yapmış bir tarayıcı yok.',
  sessionsRevoke: 'Çıkış yap',
  sessionExpires: 'Bitiş {{when}}',
  revokedToast: 'O tarayıcının oturumu kapatıldı.',
} as const;
