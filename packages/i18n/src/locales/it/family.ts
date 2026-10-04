export const family = {
  settingsReachedDevice: 'Impostazioni ricevute da questo dispositivo {{when}}',
  title: 'Famiglia',
  connectButton: 'Connetti',
  connectAccessibility: 'Aggiungi un dispositivo di un bambino o di un genitore',
  addDeviceTitle: 'Aggiungi dispositivo',
  addDeviceMessage: 'Che cosa desideri collegare?',
  addChildOption: 'Aggiungi dispositivo del bambino',
  addJoinFamilyOption: 'Unisciti a una famiglia',
  addParentOption: 'Invita un genitore',
  parentLimitFull: 'È il numero massimo di genitori che una famiglia può avere.',
  loginWebOption: 'Accedi sul web',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: 'Chi usa {{deviceName}}?',
  assignSheetBody:
    'Il tempo di utilizzo e le stelle contano per il bambino che scegli.',
  assignSheetNobody: 'Nessuno',
  assignSheetNobodyHint: 'Dispositivo condiviso — non conta per nessuno.',
  assignSheetAddAndAssign: 'Aggiungi e assegna',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: 'Proteggere {{childName}} adesso?',
  quickProtectBody:
    'Attiva un set iniziale di protezioni. Potrai regolare tutto in seguito nel profilo del bambino.',
  quickProtectSourceLabel: 'Parti da',
  quickProtectAllOnBody:
    '{{childName}} ha già queste protezioni attive. Scegli un altro figlio per copiarne orari, limite ed elenchi di siti.',
  quickProtectReplaces: 'Sostituisce l’impostazione attuale di {{childName}}.',
  quickProtectWebFilterCopyHint:
    'Copia le categorie di {{childName}}, più {{allowed}} siti consentiti e {{blocked}} rifiutati.',
  quickProtectSourceDefault: 'Impostazioni predefinite di KidGate',
  quickProtectSourceBody:
    'Copia le regole di {{childName}}, inclusi i siti consentiti e bloccati.',
  quickProtectBedtime: 'Orari di blocco per la notte',
  quickProtectBedtimeHint:
    'Blocca l’uso del dispositivo di notte, dalle 22:00 alle 7:00.',
  quickProtectDailyLimit: 'Limite giornaliero',
  quickProtectDailyLimitHint:
    '{{minutes}} minuti al giorno, condivisi tra tutti i suoi dispositivi.',
  quickProtectWebFilter: 'Filtro web',
  quickProtectWebFilterHint:
    'Blocca i contenuti inappropriati e attiva la ricerca sicura e le restrizioni di YouTube.',
  quickProtectWebFilterPremium: 'Funzione Premium — inclusa con un piano.',
  quickProtectApply: 'Attiva protezione',
  quickProtectSkip: 'Non ora',
  quickProtectDone: 'La protezione è attiva. Puoi regolarla in qualsiasi momento.',
  quickProtectPartial:
    'Alcune protezioni non sono state salvate. Riprova dal profilo del bambino.',
  pairDeviceFirstTitle: 'Nessun dispositivo associato',
  pairDeviceFirstBody:
    'Associa prima un dispositivo per questo bambino — nella scheda Famiglia, tocca l’icona di scansione o «+» e scegli «Aggiungi dispositivo del bambino». Questo controllo inizia a funzionare appena un dispositivo si connette.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'Blocca tutto',
  unlockAll: 'Sblocca tutto',
  lockAllA11y: 'Blocca tutti i dispositivi di {{childName}}',
  unlockAllA11y: 'Sblocca tutti i dispositivi di {{childName}}',
  childDetailUnassignTitle: 'Rimuovere dal bambino?',
  childDetailUnassignBody:
    '{{deviceName}} non conterà più per {{childName}} e passerà in Non assegnato. Resta associato e protetto.',
  childDetailUnassignConfirm: 'Rimuovi',
  childDetailUnassignA11y: 'Rimuovi {{deviceName}} da questo bambino',
  // The fold control on a group heading.
  collapseGroupA11y: 'Comprimi {{name}}',
  expandGroupA11y: 'Espandi {{name}}',
  assignDeviceCta: 'Assegna a un bambino…',
  unassignedHint:
    'Questi dispositivi non sono ancora assegnati a nessun bambino, quindi la loro attività non compare sotto nessuno.',
  unassignedHintMember:
    'Il proprietario della famiglia assegna questi dispositivi ai figli.',
  // One device's own page (the web's Controls tab): the two sentences above are
  // said to a group heading, and "these devices" is false about one machine.
  unassignedDeviceHint:
    'Questo dispositivo non è ancora assegnato a nessun bambino, quindi la sua attività non compare sotto nessuno.',
  unassignedDeviceHintMember:
    'Il proprietario della famiglia sceglie chi usa questo dispositivo.',
  // The pairing sheets' success step for a joined parent, who may pair but not assign.
  pairedDeviceBodyMember:
    'Il dispositivo del bambino ha confermato l’associazione. Il proprietario della famiglia sceglie chi lo usa.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Bambini senza dispositivo',
  // Child detail screen.
  childDetailStarsWell: 'Stelle questa settimana',
  childStarsA11y: 'Stelle questa settimana: {{count}}',
  childDetailDevicesTitle: 'Dispositivi',
  childDetailSwipeHint: 'Scorri un dispositivo per rimuovere l’assegnazione.',
  childDetailAssignMore: 'Assegna un altro dispositivo…',
  // The same row while the child has no device yet — "another" needs a first.
  childDetailAssignFirst: 'Assegna un dispositivo…',
  childDetailAssignSheetTitle: 'Assegna un dispositivo a {{childName}}',
  childDetailNoDevices:
    'Nessun dispositivo. Assegnane uno qui sotto o abbina un nuovo dispositivo dalla scheda Famiglia.',
  // Same screen when nothing is left below to assign.
  childDetailNoDevicesPair:
    'Nessun dispositivo. Abbinane uno dalla scheda Famiglia e, quando l’app chiede chi lo usa, scegli questo bambino.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Ancora nessun dispositivo. Solo il proprietario della famiglia decide a chi appartiene ogni dispositivo.',
  childDetailEditNameTitle: 'Modifica nome',
  childDetailColorLabel: 'Colore',
  scanButtonAccessibility: 'Scansiona un codice',
  scanTitle: 'Scansiona un codice',
  scanBody:
    'Inquadra il codice su un dispositivo del bambino, un invito famiglia o un codice di accesso web.',
  manualCodeLabel: 'Inserisci il codice di 6 caratteri',
  manualInstructions:
    'Inserisci il codice di 6 caratteri mostrato sull’altro dispositivo.',

  headerHintEmpty: 'Gestisci e proteggi i dispositivi dei tuoi figli',

  headerHintGuest:
    'Esplora liberamente: accedi quando sei pronto per collegare i dispositivi.',

  familyCardManage: 'Gestisci famiglia, genitori e dispositivi',

  familyCardJoined: 'Fai parte della famiglia come genitore',

  chipDeviceCount: '{{count}} dispositivi',
  chipDeviceCount_one: '{{count}} dispositivo',

  chipOnlineCount: '{{count}} online',
  metaOnlineCount: '{{online}}/{{count}} online',
  metaOnlineCount_one: '1 dispositivo online',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} Check-in',
  chipCheckInCount_one: '{{count}} Check-in',

  chipRequestCount: '{{count}} richieste',
  chipRequestCount_one: '{{count}} richiesta',

  chipNeedsSetupCount: '{{count}} da configurare',
  chipNeedsSetupCount_one: '{{count}} da configurare',

  chipProtectedCount: '{{count}} protetti',

  childDevicesProtected: '{{count}} dispositivi protetti',

  chipHealthWarnCount: '{{count}} da configurare',
  chipHealthWarnCount_one: '{{count}} da configurare',

  chipHealthInactiveCount: '{{count}} inattivi da oltre 24 h',
  chipLocationBlocked: 'Posizione non ricevuta',

  chipBlockedCount: '{{count}} bloccati',
  chipBlockedCount_one: '{{count}} bloccato',

  healthProtected: 'Protetto',
  buildOutdated: 'Aggiornamento disponibile',
  healthNeedsSetup: 'Configurazione richiesta',
  healthOffline: 'Offline',
  devicePausedLabel: 'In pausa',
  devicePausedHint: 'In pausa con il piano gratuito: tutte le regole restano attive',
  // What Paused means, said where the choice is made: the choose-a-device sheet on
  // both consoles. Checked against every agent 2026-09-28 — enforcement never
  // stops while parked; the reports do, and an SOS still goes through.
  devicePausedMeaning:
    'Un dispositivo in pausa continua ad applicare le regole che ha già. Smette di inviare tempo di utilizzo, posizione e cronologia, ma un SOS ti arriva comunque.',
  parkReviewTitle: 'Attiva queste voci prima che finisca la prova',
  parkReviewBody:
    'Quando la prova finisce, un dispositivo continua a inviare i report e ad accettare modifiche alle regole, mentre gli altri mantengono le regole che hanno già. Su quelli potrai solo allentare una regola, quindi ciò che ora è disattivato resta disattivato.',
  rulesEnforcedOn: 'Attive su {{enforced}} dispositivi su {{total}}',
  rulesPausedBehind: 'In pausa — mantiene un’impostazione precedente',
  rulesTightenRefused:
    'Su un dispositivo in pausa le regole si possono solo allentare, mai rendere più severe. Passa a Premium per cambiarle su ogni dispositivo.',
  parkedBannerTitle: 'Scegli il dispositivo che continuerai a seguire',
  parkedBannerBody:
    'Le tue regole continuano a funzionare su ogni dispositivo. Il piano gratuito riceve i report da un solo dispositivo e lì soltanto puoi rendere le regole più severe: scegli quel dispositivo, o passa a Premium per tenerli tutti.',
  parkedBannerAction: 'Scegli dispositivo',
  holdFamilyTitle: 'KidGate ha sospeso temporaneamente questa famiglia',
  holdDeviceTitle: 'KidGate ha sospeso temporaneamente {{deviceName}}',
  holdFamilyBody:
    'Ogni dispositivo mantiene le sue regole ma non invia report finché la sospensione non viene revocata.',
  holdDeviceBody:
    'Questo dispositivo mantiene le sue regole ma non invia report finché la sospensione non viene revocata.',
  holdReasonUnusualActivity: 'Motivo: attività insolita su questo account.',
  holdReasonOutdatedApp:
    'Motivo: un’app KidGate di questo account non è aggiornata. Aggiornala, poi contatta l’assistenza.',
  holdReasonTermsViolation: 'Motivo: una violazione dei termini d’uso di KidGate.',
  holdReasonOther: 'Motivo: KidGate sta verificando questo account.',
  holdNote: 'Messaggio da KidGate: {{note}}',
  holdAppeal: 'Contatta l’assistenza',
  holdAppealMessage:
    'Vorrei informazioni sulla sospensione dell’account della mia famiglia.',
  pairedDevicePaused:
    'Il piano gratuito riceve i report da un solo dispositivo e lì soltanto puoi rendere le regole più severe, quindi questo dispositivo parte in pausa.',
  pairingWillStartPaused:
    'Il piano gratuito riceve i report da un solo dispositivo e lì soltanto puoi rendere le regole più severe, quindi il nuovo dispositivo partirà in pausa.',
  chooseMonitoredTitle: 'Scegli il dispositivo principale',
  chooseMonitoredBody:
    'Tutte le regole restano attive su tutti. Il dispositivo che scegli invia tempo di utilizzo e posizione ed è l’unico su cui puoi ancora rendere le regole più severe: sugli altri puoi solo allentarle. Puoi cambiare la scelta una volta ogni {{days}} giorni.',
  chooseMonitoredConfirm: 'Segui questo dispositivo',
  chooseMonitoredUpgrade: 'Tieni tutti i dispositivi: passa a Premium',
  chooseMonitoredDone: '{{name}} è ora il dispositivo che invia i report',
  chooseMonitoredCurrent: 'Attualmente invia i report',
  monitoredCooldown:
    'Il dispositivo che invia i report può cambiare solo una volta ogni {{days}} giorni',
  monitoredChooseFailed:
    'Impossibile cambiare il dispositivo che invia i report. Riprova.',

  cardWhereLabel: 'Posizione',
  cardWhereAccessibility: 'Apri la posizione di {{deviceName}}',

  cardTodayLabel: 'Oggi',

  cardTodayUsed: '{{used}} di utilizzo',

  cardTodayNoData: 'Nessun utilizzo oggi',

  cardTodayAccessibility: 'Apri il report di utilizzo di {{deviceName}}',

  emptyTitle: 'Nessun dispositivo del bambino',

  emptyDescription:
    'Aggiungi il dispositivo di tuo figlio per iniziare a monitorare il tempo di utilizzo e l’uso delle app.',

  setupFamilyTitle: 'Configura la tua famiglia',

  createFamilyButton: 'Crea famiglia',

  joinFamilyButton: 'Unisciti a una famiglia',

  switchToJoinTitle: 'Vuoi unirti a un’altra famiglia?',

  switchToJoinMessage:
    'La tua famiglia vuota verrà rimossa così potrai unirti a un’altra utilizzando un codice di invito. Se è già collegato un dispositivo del bambino, dovrai prima gestirlo.',

  guestEmptyTitle: 'La tua famiglia inizia qui',

  guestEmptyDescription:
    'Accedi per collegare i dispositivi dei tuoi figli, ricevere avvisi e impostare limiti salutari per il tempo di utilizzo.',

  guestConnectButton: 'Accedi',

  guestCreateAccount: 'Crea un account genitore',

  guestBenefitLimitsTitle: 'Tempo di utilizzo e limiti delle app',

  guestBenefitLimitsBody: 'Blocca i dispositivi e imposta programmi giornalieri.',

  guestBenefitAlertsTitle: 'Avvisi SOS e attività',

  guestBenefitAlertsBody:
    'Ricevi una notifica immediata quando è richiesta la tua attenzione.',

  guestBenefitLocationTitle: 'Posizione e Check-in',

  guestBenefitLocationBody:
    'Scopri dove si trova tuo figlio e chiedigli di confermare che è al sicuro.',

  stepsHeading: 'Primi passi',

  step1Title: 'Apri KidGate sul dispositivo del bambino',

  step1Description:
    'Installa KidGate sul telefono, tablet, TV o computer usato da tuo figlio. Su un telefono o un tablet, scegli “Questo è un dispositivo di un bambino”. Compariranno un codice QR e un codice di 6 caratteri.',

  step2Title: 'Tocca qui “Aggiungi dispositivo del bambino”',

  step2Description:
    'Scansiona quel codice QR con questo telefono, oppure inserisci il codice di 6 caratteri.',

  connectChildButton: 'Collega dispositivo del bambino',
  listHint: 'Scorri un dispositivo verso sinistra per rimuoverlo',

  removeAlertTitle: 'Rimuovere il dispositivo?',

  removeAlertMessage:
    '{{deviceName}} verrà scollegato dal tuo account. Tutte le richieste di tempo e la cronologia delle attività associate verranno eliminate.',

  toastRemoveFailed: 'Impossibile rimuovere il dispositivo. Riprova.',

  swipeRemoving: 'Rimozione…',

  swipeRemove: 'Rimuovi',

  deviceNotFound: 'Dispositivo non trovato',

  deviceMayHaveBeenRemoved:
    'Questo dispositivo potrebbe essere stato rimosso dal tuo account.',

  deviceNotFoundError: 'Dispositivo non trovato',

  deviceRemovedAlertTitle: 'Dispositivo rimosso',

  deviceRemovedAlertMessage:
    'Un genitore ha rimosso questo dispositivo dall’account famiglia. Seleziona di nuovo il ruolo Bambino per ricollegarlo.',

  deviceNotRegistered: 'Questo dispositivo non è ancora registrato.',

  defaultDeviceName: 'Dispositivo del bambino',

  fallbackDeviceName: 'Dispositivo del bambino',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'iPhone del genitore',

  parentAndroid: 'Android del genitore',

  childIphone: 'iPhone del bambino',

  parentIpad: 'iPad del genitore',

  childIpad: 'iPad del bambino',

  childAndroid: 'Android del bambino',

  deviceFallbackName: 'Dispositivo',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'PC Windows',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'Inserisci un nome per il dispositivo.',

  deviceNameTooLong: 'Il nome del dispositivo non può superare {{max}} caratteri.',

  lastActiveDate: 'Ultima attività: {{date}}',

  lastActiveUnknown: 'Nessuna attività recente',

  thisDevice: 'Questo dispositivo',

  thisDeviceYou: 'Questo dispositivo (Tu)',

  namedDeviceYou: '{{name}} (Tu)',

  deviceNameSaved: 'Il nome del dispositivo è stato aggiornato.',

  deviceSectionTitle: 'Dispositivo',

  deviceNameLabel: 'Nome del dispositivo',

  editDeviceNameTitle: 'Modifica nome del dispositivo',

  editDeviceNameSubtitle:
    'Solo il proprietario della famiglia può rinominare i dispositivi. Massimo {{maxLength}} caratteri.',

  deviceNameInputLabel: 'Nome del dispositivo',

  deviceNamePlaceholder: 'iPhone di Sofia',

  unableToUpdateDeviceName: 'Impossibile aggiornare il nome del dispositivo. Riprova.',

  osLabelFallback: 'Sistema operativo',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — Richiede attenzione immediata',

  waitingForCheckIn: 'In attesa del Check-in',

  timeRequestsWaiting: '{{count}} richieste di tempo in attesa',

  timeRequestsWaiting_one: '{{count}} richiesta di tempo in attesa',

  youPausedThisDevice: 'Hai bloccato questo dispositivo',

  lockSentWaitingForDevice: 'Blocco inviato — in attesa del dispositivo',

  lockNotAppliedOnDevice: 'Questo dispositivo non ha applicato il blocco',

  blockedHoursActiveNow: 'Orari di blocco attivi ora',

  inactiveOpenKidGate: 'Inattivo: apri KidGate su questo dispositivo',

  protectionNeedsSetup: '{{issueLabel}} richiede configurazione',

  freeTierCadenceHint: 'Piano gratuito: ultima attività: {{date}}',
  dailyLimitOn: 'Limite giornaliero attivo',

  deviceReady: 'Pronto',

  sos: 'SOS',

  deviceLocked: 'Dispositivo bloccato',

  deviceUnlocked: 'Dispositivo sbloccato',

  parentPausedChildDevice: '{{actorName}} ha bloccato questo dispositivo del bambino.',

  parentRestoredChildDevice:
    '{{actorName}} ha sbloccato questo dispositivo del bambino.',

  parentFallback: 'Un genitore',

  formerParent: 'Un genitore che ha lasciato la famiglia',
  batteryPercent: '{{percent}}%',
  batteryAccessibility: 'Batteria al {{percent}} per cento',
  batteryChargingAccessibility: 'Batteria al {{percent}} per cento, in carica',
  childDetailPerDevice: 'Per dispositivo — scegli quale',
  childDetailNotAvailable: 'Non disponibile',
  childDetailNotAvailableReason: 'Non disponibile su nessuno dei suoi dispositivi',
  childDetailProtectionOk: 'Protetto',
  childDetailProtectionAttention: '{{count}} dispositivi richiedono attenzione',
  childDetailProtectionAttention_one: '{{count}} dispositivo richiede attenzione',
  childDetailProtectionSheetTitle: 'Protezione per dispositivo',
  childDetailRemoveTitle: 'Rimuovi il profilo di {{childName}}',
  childDetailRemovingButton: 'Rimozione…',
  childDetailOnlineCount: '{{online}} di {{total}} online',
  childDetailBudgetTitle: 'Limite giornaliero',
  childDetailSectionControls: 'Regole su tutti i suoi dispositivi',
  childDetailSectionSafety: 'Dati combinati da tutti i dispositivi che usa',
  childDetailSectionAlerts: 'Tutti i suoi dispositivi, un unico elenco',
  childDetailScopeAll: 'Tutti i dispositivi',
  childDetailTodayWell: 'Usato oggi',
  childDetailUnassignAction: 'Annulla assegnazione',
  childDetailLimitShared: 'Totale su tutti i suoi dispositivi',
  searchTitle: 'Cerca',
  searchPlaceholder: 'Figli, dispositivi, funzioni, guida…',
  searchEmpty: 'Nessun risultato. Prova con un’altra parola.',
  searchSectionFeatures: 'Funzioni',
  searchSectionGoTo: 'Vai a',
} as const;
