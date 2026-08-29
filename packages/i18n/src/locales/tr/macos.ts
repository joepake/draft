/**
 * Masaüstü aracısının kendi penceresi (macOS ve Windows).
 * Anahtar bazında bağlam: en/macos.ts.
 */
export const macos = {
  headingNow: 'Şu anda',
  headingEnforce: 'Bu Mac neleri uygulayabilir',
  headingEnforceHint:
    'Ebeveyninin ayarladıkları ve bu Mac’in bunları ne kadar güçlü tutabildiği.',
  headingRemovable: 'Kaldırması ne kadar kolay',

  parentAccessBody:
    'Bu Mac’te hangi uygulamaların engelleneceğini seçmek için Ebeveyn PIN’ini girin.',
  checking: 'Kontrol ediliyor…',

  enforcing: 'Koruma çalışıyor',
  enforcingYes: 'Evet',
  enforcingFailed: 'Hayır — art arda {{count}} kontrol başarısız oldu',
  enforcingFailed_one: 'Hayır — son kontrol başarısız oldu',

  lockState: 'Cihaz kilitli',
  lockStateNo: 'Hayır',
  stateNotChecked: 'Henüz kontrol edilmedi',
  lockStateParent: 'Evet — bir ebeveyn kilitledi',
  lockStateSchedule: 'Evet — Engellenen Saatler',
  lockStateDailyLimit: 'Evet — Günlük Limit doldu',

  appBlocking: 'Uygulama engelleme',
  appBlockingBestEffort:
    'Elden geldiğince — uygulamalar açıldıktan sonra kapatılır, açılmaları önlenmez',

  webFilterLabel: 'Web filtresi',
  webFilterUnavailable: 'Bu Mac’te kullanılamıyor',
  notSupportedOnThisDevice: 'Bu cihazda desteklenmiyor',
  filterAwaitingApproval: 'System Settings’te onay bekleniyor',
  filterSwitchedOff: 'System Settings’te kapatıldı',
  filterInterrupted: 'Bir sorundan sonra durdu — KidGate geri yükleyecek',
  setupFilterApprovalBody:
    'Web filtrelemenin başlaması için Ağ Uzantıları bölümünde KidGate’i açın.',
  setupFilterSwitchBody:
    'KidGate için Filter Network Content kapalı. Filtrelemeye devam etmek için tekrar açın.',
  setupOpenSettings: 'Ayarları aç',
  setupTitle: 'Bu cihazın kurulumunu tamamlayın',
  setupRowLabel: 'İzinler',
  setupRowHint: 'Bu cihazda izin verilmesi gereken neler kaldığını görün.',
  setupStepBlockedNoPrompt:
    'Reddedildi ve bu cihaz bir daha sormuyor — KidGate’i Ayarlar → Gizlilik ve güvenlik bölümünde açın.',
  setupSubtitle:
    'Sistem bunların her biri için izin ister ve yalnızca bu cihazı o an kullanan kişi izin verebilir. Şimdi halletmek, sorunun sonradan çocuğunuza sorulmasını önler.',
  setupStepFilterApprovalTitle: 'Web filtrelemeyi onaylayın',
  setupStepFilterSwitchTitle: 'Filter Network Content',
  setupStepFilterSwitchWaiting:
    'Yukarıdaki adım onaylandığında System Settings’te görünür.',
  setupStepLocationBody:
    'Ailenizin bu cihazın nerede olduğunu görmesini sağlar. Siz “Konumu paylaş”ı açana kadar hiçbir şey paylaşılmaz.',
  setupStepCameraTitle: 'Kamera',
  setupStepCameraBody:
    'Çocuğunuz SOS gönderdiğinde veya bir Check-In’i yanıtladığında fotoğraf ekler. Şimdi fotoğraf çekilmez.',
  setupStepDone: 'Kuruldu — burada yapılacak başka bir şey yok.',
  setupStepBlocked:
    'Daha önce reddedildi. macOS yalnızca bir kez sorar — KidGate’i Privacy & Security bölümünde açın.',

  scheduleLabel: 'Engellenen Saatler',
  dailyLimitLabel: 'Günlük Limit',
  enforcedHere: 'Açık, KidGate uyguluyor',

  screenTimeLabel: 'Ekran Süresi',
  screenTimeAgentMeasured: 'KidGate sayar. KidGate çalışmıyorken geçen süre sayılmaz.',

  batteryLabel: 'Pil',
  batteryReported: 'Aileye bildiriliyor',
  batteryNone: 'Bu Mac’te pil yok',

  locationLabel: 'Konum',
  locationOff: 'Kapalı',
  locationCoarse: 'Yaklaşık — GPS değil, Wi-Fi üzerinden',

  accountLabel: 'Çocuk hesabı',
  accountStandard: 'Standart',
  accountAdmin: 'Yönetici — bu hesap KidGate’i tamamen kapatabilir',

  restartLabel: 'Kapatılırsa yeniden açılır',
  restartYes: 'Evet',
  restartNo: 'Hayır — kurulum tamamlanmadı',

  forceQuitLabel: 'KidGate’in kapatılma sayısı',

  startAtLoginSectionTitle: 'Başlangıç',
  startAtLoginSectionDescription:
    'KidGate ekran süresini yalnızca çalışırken ölçer ve kuralları yalnızca çalışırken uygular.',
  startAtLoginLabel: 'Oturum açılınca KidGate’i başlat',
  startAtLoginHintOn:
    'KidGate bu cihazla birlikte başlar ve kapatılırsa yeniden açılır.',
  startAtLoginHintOff:
    'Biri KidGate’i yeniden açana kadar hiçbir şey ölçülmez veya engellenmez.',
  startAtLoginUnavailable:
    'Bu cihaz, KidGate’in kendini başlangıca eklemesine izin vermedi.',

  stillRunningTitle: 'KidGate hâlâ çalışıyor',
  stillRunningBodyMac: 'Menü çubuğundaki KidGate simgesinden yeniden açın.',
  stillRunningBodyWindows: 'Bildirim alanındaki KidGate simgesinden yeniden açın.',

  updateAvailableTitle: 'KidGate’in daha yeni bir sürümü var',
  updateAvailableBody: 'KidGate {{version}} indirilmeye hazır.',
  updateAction: 'Güncellemeyi al',

  chooseApps: 'Engellenecek uygulamaları seç',
  chooseAppsHint:
    'Bu Mac’te engellenecek uygulamaları seçin. Ebeveyn, engellemeyi telefonundan açıp kapatabilir.',
  saveSelection: 'Kaydet',
  noAppsFound: 'Applications klasöründe uygulama bulunamadı.',
};
