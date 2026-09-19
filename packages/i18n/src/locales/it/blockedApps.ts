export const blockedApps = {
  title: 'App bloccate',
  installApprovalTitle: 'Approva le nuove app',
  installApprovalSubtitleOn:
    'Le app installate da ora in poi restano bloccate finché non le approvi.',
  installApprovalSubtitleOff:
    'Attiva per bloccare ogni nuova app installata finché non la approvi.',
  installApprovalSubtitleIos:
    'Su iPhone e iPad viene invece nascosto l’App Store — Apple non consente di approvare le app una per una.',
  installApprovalStatusOn: 'Le nuove app richiedono l’approvazione',
  installApprovalStatusOff: 'Le nuove app si aprono liberamente',
  installApprovalStatusIos: 'App Store nascosto',
  installApprovalAccessibilityLabel: 'Approva le nuove app',
  installApprovalInfoTitle: 'Come funziona l’approvazione',
  installApprovalInfoLine1:
    'Il dispositivo del bambino blocca ogni app installata dopo che hai attivato questa opzione, senza attendere una tua conferma.',
  installApprovalInfoLine2:
    'Ricevi una notifica e l’app compare qui sotto e nella sezione App finché non la consenti.',
  installApprovalInfoLine3:
    'Consentire un’app le permette di aprirsi subito. Un’app che non consenti resta semplicemente bloccata.',
  pendingSectionTitle: 'Bloccate automaticamente, in attesa della tua approvazione',
  pendingSectionSubtitle:
    'Installate dopo aver attivato l’approvazione. Qui non è stato scelto nulla sul dispositivo del bambino.',
  pendingInstalledAt: 'Installata {{when}}',
  pendingEmpty: 'Nessuna nuova app in attesa di approvazione.',
  allowApp: 'Consenti',
  allowingApp: 'Autorizzazione…',
  toastAppAllowed: '{{appName}} può aprirsi ora.',
  toastAllowFailed: 'Impossibile consentire questa app. Riprova.',
  toastInstallApprovalSaveFailed: 'Impossibile salvare. Riprova.',
  toastChooseAppsFirst:
    'Chiedi prima a tuo figlio di aprire le Impostazioni di KidGate e selezionare le app da bloccare.',
  toastSaveFailed: 'Impossibile salvare. Riprova.',
  statusBlockingOn: 'Blocco attivo',
  statusBlockingOff: 'Blocco disattivato',
  heroTitle: 'App selezionate per il blocco',
  heroSubtitle:
    'Queste app e categorie vengono selezionate sul dispositivo del bambino. KidGate sincronizza l’elenco qui per permetterti di controllarlo.',
  statAppsLabel: 'App',
  statCategoriesLabel: 'Categorie',
  toggleTitle: 'Abilita il blocco delle app',
  toggleSubtitleOn: 'Le app selezionate sono bloccate sul dispositivo del bambino.',
  toggleSubtitleOff: 'Attiva per bloccare da remoto le app selezionate.',
  toggleAccessibilityLabel: 'Abilita il blocco delle app',
  emptyTitle: 'Nessuna app bloccata',
  emptySubtitle:
    'Sul dispositivo del bambino apri Impostazioni KidGate → Scegli le app da bloccare, inserisci il PIN genitore e salva la selezione.',
  sectionTitle: 'Elenco delle app bloccate',
  privacyTitle: 'L’elenco delle app proviene dal dispositivo del bambino',
  privacySubtitle:
    'Su iOS Apple potrebbe nascondere i nomi esatti delle app ai dispositivi dei genitori. Sugli altri dispositivi i nomi delle app selezionate vengono sincronizzati qui. Per modificare l’elenco è comunque necessario il PIN genitore sul dispositivo del bambino.',
  infoTitle: 'Come funziona',
  infoLine1:
    'Seleziona le app sul dispositivo del bambino dopo aver inserito il PIN genitore.',
  infoLine2:
    'Il Blocco dispositivo, gli Orari di blocco e il Limite giornaliero continuano a bloccare tutte le app.',
  infoLine3:
    'Puoi attivare o disattivare il blocco in qualsiasi momento da questa schermata.',
  appKind: 'App',
  categoryKind: 'Categoria',
  websiteKind: 'Sito web',
  noAppsSelectedYet: 'Nessuna app selezionata',
  blockedAppCount: '{{count}} app',
  blockedAppCount_one: '{{count}} app',
  blockedCategoryCount: '{{count}} categorie',
  blockedCategoryCount_one: '{{count}} categoria',
  blockedItemCount: '{{count}} elementi bloccati',
  blockedItemCount_one: '{{count}} elemento bloccato',
  blockedListReady: 'Elenco pronto',
  blockedAppsLabel: 'App bloccate',
  appsConfiguredChip: 'App configurate',
  appsNotSetChip: 'App non configurate',
  appBlockingSectionTitle: 'Blocco delle app',
  appBlockingSectionDescription:
    'Scegli quali app i genitori possono bloccare su questo dispositivo.',
  savedItemsForBlocking: '{{count}} elementi salvati per il blocco.',
  savedItemsForBlocking_one: '{{count}} elemento salvato per il blocco.',
  noAppsSelected: 'Nessuna app selezionata.',
  unableToOpenAppPicker: 'Impossibile aprire il selettore delle app. Riprova.',
  wizardStepPin: 'Inserisci il PIN genitore quando le Impostazioni lo chiedono.',
  wizardStepChoose: 'Apri Scegli le app da bloccare, seleziona le app e salva.',
} as const;
