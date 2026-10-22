/** Italian. */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} app su {{total}} meritano un’occhiata',
    summaryClear: 'Nulla da segnalare tra {{total}} app',
    summaryFlaggedExtension:
      '{{flagged}} di {{total}} estensioni Chrome meritano un controllo',
    summaryClearExtension: 'Nulla di preoccupante tra {{total}} estensioni Chrome',
  },
  meta: {
    title: 'KidGate — Il parental control che rispetta tuo figlio',
    description:
      'KidGate aiuta i genitori a gestire il tempo di schermo, bloccare app, filtrare il web e restare in contatto — senza togliere libertà al bambino.',
  },

  common: {
    comingSoon: 'Prossimamente',
    loading: 'Caricamento…',
    signOut: 'Esci',
    crashTitle: 'Questa pagina ha smesso di funzionare',
    crashBody:
      'Di solito basta ricaricare. Le impostazioni della tua famiglia e i dispositivi di tuo figlio non sono cambiati.',
    crashReload: 'Ricarica la pagina',
  },

  language: {
    title: 'Lingua',
    change: 'Cambia lingua',
    system: 'Lingua del browser',
    english: 'Inglese',
    vietnamese: 'Vietnamita',
    spanish: 'Spagnolo',
    portuguese: 'Portoghese (Brasile)',
    german: 'Tedesco',
    french: 'Francese',
    japanese: 'Giapponese',
    korean: 'Coreano',
    arabic: 'Arabo',
    indonesian: 'Indonesiano',
    italian: 'Italiano',
    turkish: 'Turco',
    hindi: 'Hindi',
    russian: 'Russo',
  },

  nav: {
    skip: 'Vai al contenuto',
    main: 'Principale',
    plans: 'Piani',
    about: 'Chi siamo',
    support: 'Assistenza',
    privacy: 'Privacy',
    terms: 'Termini',
    dashboard: 'Dashboard',
  },

  footer: {
    blurb:
      'Un parental control che aiuta le famiglie a mettersi d’accordo sul tempo di schermo invece di litigarci.',
    product: 'Prodotto',
    about: 'Chi siamo',
    dashboard: 'Dashboard genitori',
    supportGuides: 'Assistenza e guide',
    download: 'Scarica',
    contact: 'Contattaci',
    legal: 'Note legali',
    privacyPolicy: 'Informativa sulla privacy',
    terms: 'Termini e condizioni',
    deleteData: 'Elimina i tuoi dati',
    rights: '© {{year}} KidGate. Tutti i diritti riservati.',
    madeFor:
      'Fatto per le famiglie su iPhone, Android, Mac, Windows, Android TV e Chrome.',
  },

  legalNote:
    'Questa pagina è disponibile solo in inglese e il testo inglese è la versione che fa fede. Scrivi a [support@kidgate.app](mailto:support@kidgate.app) se ti serve aiuto per capirne una parte.',

  store: {
    appleAria: 'Scarica KidGate su App Store',
    appleSmall: 'Scarica su',
    appleName: 'App Store',
    googleAria: 'Ottieni KidGate su Google Play',
    googleSmall: 'Disponibile su',
    googleName: 'Google Play',
    chromeName: 'Chrome Web Store',
  },

  home: {
    heroBadge: 'Parental control, come si deve',
    launchCountdown: 'Lancio tra',
    heroTitle: 'Proteggi i tuoi figli',
    heroTitleAccent: 'senza togliere loro la libertà.',
    heroLede:
      'KidGate dà ai genitori un controllo sereno e chiaro su tempo di schermo, app e sicurezza — mentre i ragazzi tengono un telefono che continua a sembrare loro.',
    heroCheck1: 'Tempo di utilizzo',
    heroCheck2: 'App bloccate',
    heroCheck3: 'Filtro web',
    heroCheck4: 'Posizione',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Limite giornaliero',
    phoneBlockedHours: 'Orari di blocco',
    phoneScheduleOn: 'Programmazione attiva',
    phoneLocation: 'Posizione',
    phoneCheckIn: 'Check-in OK',

    trust1Title: 'Mai pubblicità',
    trust1Text: 'I dati dei bambini non vengono mai usati per la pubblicità',
    trust2Title: 'Elimina quando vuoi',
    trust2Text: 'Cancelliamo l’account famiglia e tutti i dati su richiesta',
    trust3Title: 'Telefono, computer e TV',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV e Chrome su un unico account famiglia',
    trust4Title: 'Un piano per famiglia',
    trust4Text: 'Tutti i dispositivi di genitori e figli, un solo abbonamento',

    featuresEyebrow: 'Funzioni',
    featuresTitle: 'Tutto ciò che serve a un genitore',
    featuresSub:
      'Dai limiti giornalieri agli allarmi d’emergenza — un’app per il benessere digitale di tutta la famiglia.',
    feature1Title: 'Tempo di utilizzo e Limite giornaliero',
    feature1Text:
      'Imposta un tetto giornaliero e gli orari di blocco per la scuola e la notte. Il dispositivo si blocca da solo quando il tempo finisce.',
    feature2Title: 'App bloccate',
    feature2Text:
      'Scegli quali app tuo figlio non può aprire — una scelta protetta dal tuo PIN genitore — e attiva il blocco da remoto.',
    feature3Title: 'Limiti app',
    feature3Text:
      'Su Android, Android TV e computer, limita ogni app per conto suo: «mezz’ora di TikTok» senza doverlo vietare del tutto.',
    feature4Title: 'Filtro web e cronologia',
    feature4Text:
      'Blocca i siti per adulti, il gioco d’azzardo, l’autolesionismo e altro ancora su ogni dispositivo; con Premium vedi anche quali siti sono stati visitati.',
    feature5Title: 'Posizione e luoghi',
    feature5Text:
      'Vedi dov’è tuo figlio fino a 10 volte al giorno; Premium aggiunge la posizione in tempo reale e gli avvisi per i luoghi salvati.',
    feature6Title: 'Check-in e SOS',
    feature6Text:
      'Chiedi a tuo figlio di confermare che sta bene; in caso di emergenza, il suo telefono ti invia subito un SOS con la posizione.',
    feature7Title: 'Avvisi di protezione e sulle app',
    feature7Text:
      'Scopri nell’istante in cui un permesso importante viene disattivato sul telefono di tuo figlio, e approva le nuove app prima che si aprano su Android, Android TV o un computer.',
    feature8Title: 'Compiti premio e Richieste di tempo',
    feature8Text:
      'I ragazzi guadagnano minuti extra e stelle completando compiti, o chiedono più tempo: approvi entrambe le cose dal tuo telefono.',

    feature9Title: 'Blocco dispositivo',
    feature9Text:
      'Blocca il dispositivo subito e sbloccalo quando vuoi: la cena, i compiti o una regola ignorata.',
    feature10Title: 'Report settimanale',
    feature10Text:
      'Ogni lunedì: tempo di utilizzo, media giornaliera, cosa è stato bloccato e il confronto con la settimana prima.',
    feature11Title: 'Cronologia YouTube e video',
    feature11Text:
      'I video e gli Shorts di YouTube guardati da tuo figlio su Android e in Chrome, più i video su Android TV. Non su iPhone.',
    feature12Title: 'Cronologia attività',
    feature12Text:
      'Tutto quello che è successo, in ordine: un dispositivo sbloccato, una richiesta con la sua risposta, un avviso inviato; la giornata di oggi con il piano gratuito, 30 giorni con Premium.',
    featurePremium: 'Premium',
    platformsTitle: 'Un solo KidGate, ovunque ci sia uno schermo',
    platformsSub:
      'Le stesse regole e lo stesso account famiglia su telefono, computer e Android TV, e lo stesso Filtro web in Chrome. L’app desktop si scarica da questo sito, non da uno store.',

    showcaseEyebrow: 'Dashboard genitori',
    showcaseTitle: 'Tutta la famiglia su un solo schermo',
    showcaseSub:
      'Tempo di utilizzo, tentativi bloccati, posizione e tutto ciò che richiede la tua attenzione — sul telefono o da qualunque browser.',
    showcaseCaption1: 'Leggi i report da qualunque browser',
    showcaseCaption2: 'Le modifiche si approvano dal telefono',

    setupEyebrow: 'Configurazione',
    setupTitle: 'Pronto in pochi minuti',
    setupSub: 'Non servono competenze tecniche — l’app ti guida passo dopo passo.',
    step1Title: 'Configura il tuo dispositivo',
    step1Text:
      'Installa KidGate, scegli «Questo è il dispositivo di un genitore» e accedi con Google o con l’email, oppure con Apple su un iPhone.',
    step2Title: 'Collega il dispositivo di tuo figlio',
    step2Text:
      'Installa KidGate sul telefono di tuo figlio e collegalo scansionando un codice QR. Meno di un minuto.',
    step3Title: 'Imposta le tue regole',
    step3Text:
      'Scegli un Limite giornaliero e gli Orari di blocco, e attiva la posizione e il blocco delle app dal tuo telefono. Le app da bloccare si scelgono una sola volta sul dispositivo di tuo figlio, con il tuo PIN genitore.',

    whyEyebrow: 'Perché KidGate',
    whyTitle: 'Costruito per la fiducia, non per la sorveglianza',
    whySub: 'Pensato per tenere aperto il dialogo tra genitore e figlio.',
    why1Title: 'Un piano, tutta la famiglia',
    why1Text:
      'Un solo abbonamento Premium copre tutti i dispositivi di genitori e figli, e paga soltanto il titolare della famiglia. Il piano gratuito mantiene monitorato un dispositivo del bambino.',
    why2Title: 'Pensato per la co-genitorialità',
    why2Text:
      'Invita un secondo genitore a gestire gli stessi figli, con l’accesso approvato dal titolare. Una famiglia può avere fino a 3 genitori con il piano gratuito e durante la prova, e fino a 6 con Premium.',
    why3Title: 'Prima la privacy',
    why3Text:
      'Non vendiamo mai dati personali e non usiamo mai i dati dei bambini per la pubblicità. Elimina tutto quando vuoi.',
    why4Title: 'Onesti sui limiti',
    why4Text:
      'Ti diciamo cosa ogni piattaforma può e non può imporre, invece di promettere un controllo che non esiste.',

    onlyEyebrow: 'Solo KidGate',
    onlyTitle: 'Quello che altrove non trovi',
    onlySub:
      'Sei cose verificate rispetto alle app con cui i genitori ci confrontano. Ognuna indica la piattaforma su cui è vera.',
    only1Title: 'Anche la TV del salotto',
    only1Text:
      'Android TV ha Limite giornaliero, Orari di blocco, App bloccate e Filtro web. Su una TV il blocco fa il possibile — un’app bloccata viene rimandata alla schermata Home — e dal divano non ci sono SOS né richieste di tempo extra. Una TV non condivide nemmeno la posizione. La maggior parte dei parental control si ferma al telefono.',
    only2Title: 'Avvisi sui messaggi che restano sul telefono',
    only2Text:
      'Con Premium su Android i messaggi vengono confrontati sul dispositivo stesso con liste di parole chiave in un massimo di tre lingue scelte da te tra 14, e ciò che lascia il telefono è la parola o frase rilevata, mai la conversazione. Una sola cosa lo cambia, e solo se lo chiedi tu: attiva la conferma con IA e un messaggio in arrivo ambiguo viene inviato a Gemini di Google per essere valutato, così non vieni svegliato per una parola comune.',
    only3Title: 'Ogni app, non una lista di app',
    only3Text:
      'Gli avvisi nascono dalle notifiche di qualsiasi app usata da tuo figlio o tua figlia — non da una lista fissa di app supportate — e da ciò che digita nelle principali app di chat, social e giochi, tra cui Zalo, LINE e KakaoTalk. Solo su Android, con Premium.',
    only4Title: 'Una via d’uscita per il bambino',
    only4Text:
      'Tenendo premuto SOS per cinque secondi su un telefono vieni avvisato subito, con la posizione — e su Android si aprono anche chiamate, mappe e messaggi per cinque minuti, persino a telefono bloccato. Un bambino che può chiedere aiuto dalla schermata di blocco non ha motivo di combattere l’app.',
    only5Title: 'Regole che reggono senza internet',
    only5Text:
      'Orari di blocco e limite giornaliero vengono applicati sul dispositivo stesso: staccare il router non cambia nulla. La TV accetta il tuo PIN genitore persino senza alcuna connessione.',
    only6Title: 'Il giusto riconoscimento, quando la settimana lo merita',
    only6Text:
      'Con Premium, ogni report settimanale tiene spazio per ciò che è andato bene — un limite rispettato, niente più serate fino a tardi, un compito finito — e lo dice solo quando la settimana è stata davvero misurata.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Le prime domande dei genitori',
    faqSub: 'Risposte rapide prima di scaricare.',
    faq1Q: 'C’è una prova gratuita?',
    faq1A:
      'Sì. La prova di 7 giorni inizia quando colleghi il tuo primo dispositivo genitore e il primo dispositivo di tuo figlio, e include tutte le funzioni Premium. Alla fine, le regole che hai impostato — Limite giornaliero, Orari di blocco, App bloccate, Filtro web, Blocco dispositivo, Richieste di tempo e Compiti premio — continuano a funzionare gratis su tutti i dispositivi dei figli che le supportano, e l’unico dispositivo che scegli di tenere monitorato continua a condividere la sua posizione. Con Premium tornano attività in tempo reale, cronologia, report settimanali e tracciamento della posizione.',
    faq2Q: 'Quanti dispositivi posso gestire?',
    faq2A:
      'Premium copre fino a 25 dispositivi dei figli e 6 genitori, contando anche te, e ogni dispositivo invia attività. Il piano gratuito copre fino a 8 dispositivi dei figli e 3 genitori. Ogni dispositivo continua ad applicare le regole che hai impostato, ma solo quello che scegli tu invia attività; sugli altri quelle regole si possono allentare ma non rendere più severe.',
    faq3Q: 'Mio figlio può disinstallare o aggirare KidGate?',
    faq3A:
      'Le impostazioni sensibili sono protette dal PIN genitore e gli avvisi di protezione ti segnalano subito se un permesso chiave viene disattivato sul dispositivo del bambino.',
    faq4Q: 'Posso gestire tutto dal computer?',
    faq4A:
      'Sì. La dashboard genitori si apre in qualsiasi browser. Scansiona il codice che mostra con l’app KidGate sul tuo telefono e vedi la stessa famiglia, gli stessi dispositivi e le stesse impostazioni, con i comandi sbloccati. Puoi anche accedere con il tuo account per consultare; bloccare un dispositivo o modificare un limite richiede allora il PIN genitore.',
    faq5Q: 'Quanto costa Premium?',
    faq5A:
      'Premium costa 4,99 $ al mese o 39,99 $ all’anno negli Stati Uniti, addebitato tramite App Store o Google Play e mostrato lì nella tua valuta. Il piano A vita, con pagamento unico, offre lo stesso Premium su ogni dispositivo dei figli, finché KidGate è disponibile. Il piano gratuito non scade mai.',
    faqMore: 'Altre domande? Vai all’assistenza',

    ctaTitle: 'Inizia oggi a proteggere la tua famiglia',
    ctaSub: 'Prova gratuita di 7 giorni con accesso completo.',
    ctaNote: 'Disdici quando vuoi da App Store o Google Play.',
  },

  login: {
    title: 'Accesso genitori',
    sub: 'Usa lo stesso account creato nell’app KidGate. Accedendo qui vedrai la stessa famiglia, gli stessi dispositivi e le stesse impostazioni.',
    notConfiguredTitle: 'Firebase non è configurato su questo deployment.',
    notConfiguredBody:
      'Imposta le variabili d’ambiente VITE_FIREBASE_* per abilitare l’accesso.',
    qrWhy:
      'Scansionare col telefono ti fa accedere e sblocca i controlli in un solo passaggio. I metodi qui sotto ti fanno accedere per consultare; sbloccare i controlli richiede poi il PIN genitore.',
    orViewOnly: 'oppure accedi in un altro modo',
    google: 'Continua con Google',
    googleBusy: 'Apertura di Google…',
    apple: 'Continua con Apple',
    appleBusy: 'Apertura di Apple…',
    orEmail: 'oppure usa la tua email',
    email: 'Email',
    emailPlaceholder: 'tu@esempio.com',
    password: 'Password',
    submit: 'Accedi',
    submitBusy: 'Accesso in corso…',
    forgot: 'Password dimenticata?',
    resetNeedsEmail:
      'Inserisci prima il tuo indirizzo email, poi scegli «Password dimenticata».',
    resetSent: 'Email di reimpostazione password inviata a {{email}}.',
    foot: 'Gli account KidGate si creano nell’app per smartphone — la dashboard web accede a una famiglia già esistente. Sei nuovo? Installa prima l’app e collega un dispositivo del bambino.',
  },

  qr: {
    start: 'Accedi con l’app KidGate',
    generating: 'Generazione del codice…',
    step1: 'Apri KidGate sul telefono.',
    step2: 'Tocca l’icona di scansione nella scheda *Famiglia*.',
    step3: 'Scansiona questo codice e approva.',
    waiting: 'In attesa di approvazione · scade tra {{time}}',
    signingIn: 'Approvato. Accesso in corso…',
    expired: 'Questo codice è scaduto.',
    failed: 'L’accesso non è stato completato.',
    newCode: 'Mostra un nuovo codice',
    tryAgain: 'Riprova',
  },

  authAction: {
    checking: 'Verifica del link in corso…',
    resetTitle: 'Scegli una nuova password',
    newPassword: 'Nuova password',
    confirmPassword: 'Conferma la nuova password',
    mismatch: 'Le password non coincidono.',
    tooShort: 'La password deve contenere almeno 6 caratteri.',
    save: 'Salva password',
    saving: 'Salvataggio…',
    resetDone: 'Password modificata',
    resetDoneBody: 'Accedi con la nuova password, qui o nell’app KidGate.',
    verifyDone: 'Email confermata',
    verifyDoneBody: 'Torna all’app KidGate per continuare.',
    invalid: 'Questo link è scaduto o è già stato usato',
    invalidBody: 'Apri KidGate e richiedi un nuovo link.',
  },
  authError: {
    generic: 'Qualcosa è andato storto. Riprova.',
    invalidEmail: 'Questo indirizzo email non sembra corretto.',
    userDisabled: 'Questo account è stato disattivato.',
    userNotFound: 'Nessun account KidGate usa questa email.',
    wrongPassword: 'L’email o la password non sono corrette. Riprova.',
    rateLimited:
      'Troppi codici di accesso da questa rete. Riprova tra {{minutes}} min.',
    tooManyRequests: 'Troppi tentativi. Aspetta qualche minuto e riprova.',
    popupClosed: 'La finestra di accesso è stata chiusa prima della fine.',
    popupCancelled: 'Accesso annullato.',
    popupBlocked:
      'Il browser ha bloccato la finestra di accesso. Consenti i pop-up per questo sito e riprova.',
    accountExists:
      'Questa email è già registrata con un altro metodo di accesso. Usa quello che hai impostato nell’app.',
    operationNotAllowed:
      'Questo metodo di accesso non è ancora abilitato per il progetto.',
    unauthorizedDomain:
      'Questo dominio non è autorizzato nelle impostazioni di Firebase Authentication.',
    invalidCustomToken:
      'Questo link di accesso non è più valido. Mostra un nuovo codice QR.',
    webRejected: 'La richiesta è stata rifiutata sul telefono.',
    webExpired: 'Il codice è scaduto. Generane uno nuovo.',
    noFunctionsUrl:
      'L’URL di Cloud Functions non è configurato (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'La tua sessione è scaduta. Accedi di nuovo.',
  },

  live: {
    checkingSession: 'Verifica della sessione…',
    loadingFamily: 'Caricamento della tua famiglia…',
    loadFailedTitle: 'Impossibile caricare la tua famiglia',
    partialLoadFailed:
      'Una parte di questa pagina non è stata caricata, quindi un elenco può sembrare vuoto anche se non lo è.',
    noAccessTitle: 'Nessuna famiglia in questo account',
    noAccess:
      'Questo account non ha accesso a nessuna famiglia KidGate. Accedi con l’account genitore che usi nell’app.',
    noFamily:
      'Questo account non ha ancora una famiglia KidGate. Se usi KidGate sul telefono, esci e accedi qui con lo stesso account. Per creare una famiglia, configurala sul telefono, poi ricarica questa pagina.',
    noFamilyStep1:
      'Installa KidGate sul telefono, scegli *Questo è il dispositivo di un genitore* e accedi con questo account.',
    noFamilyStep2:
      'Apri *Famiglia* e scegli *Crea famiglia*, oppure *Unisciti a una famiglia* se un altro genitore ti ha invitato.',
  },

  time: {
    never: 'mai',
    justNow: 'proprio ora',
    minutes: '{{count}} min fa',
    hours: '{{count}} h fa',
    days: '{{count}} g fa',
  },

  viz: {
    hours: '{{count}}h',
    minutes: '{{count}}min',
    hoursMinutes: '{{hours}}h {{minutes}}min',
    none: '—',
    byDay: 'Tempo di utilizzo per giorno',
    limit: 'Limite {{value}}',
    screenTime: 'Tempo di utilizzo',
    bonus: 'Bonus',
    bonusEarned: 'Bonus guadagnato',
    overLimit: 'Oltre il limite giornaliero',
    dailyLimit: 'Limite giornaliero',
    ofLimit: 'su {{value}}',
    noLimit: 'nessun limite impostato',
    blocked: 'Bloccato',
    blockedHours: 'Orari di blocco',
    day0: 'dom',
    day1: 'lun',
    day2: 'mar',
    day3: 'mer',
    day4: 'gio',
    day5: 'ven',
    day6: 'sab',
  },

  perm: {
    screenTime: 'Tempo di utilizzo',
    location: 'Posizione',
    camera: 'Fotocamera',
    microphone: 'Microfono',
  },

  webCat: {
    adult: 'Contenuti per adulti',
    selfHarm: 'Autolesionismo e disturbi alimentari',
    gambling: 'Gioco d’azzardo',
    gameGambling: 'Loot box e scommesse skin',
    dating: 'Incontri',
    strangerChat: 'Chat con sconosciuti',
    drugs: 'Droga e alcol',
    violence: 'Violenza e gore',
    extremism: 'Estremismo e odio',
    piracy: 'Pirateria',
    social: 'Social network',
    videoStreaming: 'Streaming video',
    music: 'Musica',
    gaming: 'Giochi',
    shopping: 'Shopping',
    aiCompanion: 'Compagni IA',
    aiAssistant: 'Assistenti IA',
    cryptoTrading: 'Cripto e trading',
    vpn: 'App VPN',
  },

  appCat: {
    adult: 'Contenuti per adulti',
    gambling: 'Gioco d’azzardo',
    gameGambling: 'Loot box e scommesse skin',
    dating: 'Incontri',
    drugs: 'Droga e alcol',
    violence: 'Violenza e gore',
    piracy: 'Pirateria',
    bypass: 'App per aggirare i controlli',
  },

  webCatGroup: {
    harm: 'Contenuti dannosi',
    contact: 'Sconosciuti',
    bypass: 'Aggiramento del filtro',
    ai: 'IA',
    entertainment: 'Svago e social',
    money: 'Acquisti e denaro',
  },

  dash: {
    tabOverview: 'Panoramica',
    tabScreen: 'Tempo di utilizzo',
    tabApps: 'App',
    tabWeb: 'Web',
    tabSafety: 'Sicurezza',
    tabControls: 'Comandi',
    tabReport: 'Report settimanale',
    tabReportNew: 'Nuovo report settimanale',

    children: 'Figli',
    noChildren: 'Nessun dispositivo dei figli ancora collegato.',
    unassignedDevices: 'Non assegnato',
    manage: 'Gestisci',
    parents_one: '{{count}} genitore',
    parents_other: '{{count}} genitori',
    devices_one: '{{count}} dispositivo del figlio',
    devices_other: '{{count}} dispositivi dei figli',
    planManageOnPhone:
      'I piani si acquistano e si cambiano nell’app KidGate sul telefono.',
    fallbackFamily: 'La tua famiglia',
    fallbackDevice: 'Dispositivo del bambino',

    statusOnline: 'Online',
    statusOffline: 'Offline',
    statusLocked: 'Bloccato',
    statusLockSent: 'Blocco inviato',
    statusLockNotApplied: 'Blocco non applicato',
    statusPaused: 'In pausa',

    stateAllowed: 'Consentito',
    stateForegroundOnly: 'Solo con l’app aperta',
    stateDenied: 'Disattivato',
    stateNotDetermined: 'Non ancora richiesto',
    stateRestricted: 'Limitato',
    stateUnavailable: 'Non disponibile',
    stateUnknown: 'Sconosciuto',

    lastActive: 'Ultima attività {{when}}',
    appVersion: 'Versione app',
    appVersionUpdate: '{{running}} · {{latest}} disponibile',
    appVersionRestart: '{{running}} · riavvia l’app per completare',
    checkIn: 'Check-in',
    sending: 'Invio…',
    lockDevice: 'Blocca dispositivo',
    unlock: 'Sblocca',
    working: 'Operazione in corso…',
    save: 'Salva',

    unlockTitle: 'Le modifiche sono bloccate.',
    unlockBody:
      'La consultazione funziona subito. Per bloccare un dispositivo, cambiare i limiti o approvare richieste, sblocca questo browser con il PIN genitore — oppure approvalo scansionando il codice QR con l’app KidGate. I Check-in funzionano in entrambi i casi.',
    unlockCta: 'Sblocca le modifiche',
    unlockToChange: 'Prima sblocca le modifiche',
    refresh: 'Aggiorna',
    liveOnApp: 'Apri l’app per gli aggiornamenti in tempo reale',
    pinTitle: 'Inserisci il PIN genitore',
    pinBody:
      'Le stesse sei cifre che usi nell’app. Questo browser resta sbloccato per 8 ore; un’approvazione dall’app lo mantiene connesso per 7 giorni.',
    pinLabel: 'PIN genitore',
    pinSubmit: 'Sblocca',
    pinOrScan: 'Oppure approva dal telefono',
    qrSaferNote:
      'Approvare dal telefono è il più sicuro dei due: richiede il telefono associato in mano, mentre il PIN sono sei cifre che qualcuno in famiglia può averti visto digitare.',
    pinWrong: 'PIN errato. Tentativi rimasti: {{count}}.',
    pinLocked:
      'Troppi tentativi errati. Aspetta 15 minuti, oppure approva questo browser dal telefono.',
    pinNotSet:
      'La tua famiglia non ha ancora un PIN genitore. Impostalo nell’app, oppure approva questo browser dal telefono.',
    unlockedToast: 'Modifiche sbloccate su questo browser.',
    close: 'Chiudi',

    noDeviceBody:
      'Apri KidGate sul telefono, vai su *Famiglia* e tocca l’icona di scansione (*Scansiona un codice*). Scansiona il codice QR sul dispositivo di tuo figlio, oppure digita il suo codice di 6 caratteri. Poi premi *Aggiorna* qui.',
    pairStep2Title: 'Scansiona il codice con il telefono',
    getKidGate: 'Scarica KidGate',
    childNoDevices:
      'Nessun dispositivo. Abbinane uno e, quando l’app chiede chi lo usa, scegli questo bambino.',
    childNoDevicesAssign:
      'Nessun dispositivo. Assegnane uno qui sotto, oppure abbinane uno nuovo.',

    toastCheckIn: '{{name}} riceverà una richiesta di check-in.',
    toastTimeApproved: 'Tempo extra approvato.',
    toastCheckInResent: 'Check-in inviato di nuovo.',

    tileScreenToday: 'Tempo di utilizzo oggi',
    tileSameAsAverage: 'Come la media di 7 giorni',
    tileDeltaUp: '↑ {{percent}}% rispetto alla media di 7 giorni',
    tileDeltaDown: '↓ {{percent}}% rispetto alla media di 7 giorni',
    tileBlocked: 'Tentativi bloccati',
    tileBlockedMeta: 'App fermate dall’installazione',
    tileSites: 'Siti filtrati',
    tileCategoriesHit_one: '{{count}} categoria coinvolta',
    tileCategoriesHit_other: '{{count}} categorie coinvolte',
    tileNothingBlocked: 'Ancora nulla di bloccato',
    tileAttention: 'Richiede attenzione',
    tileOpenItems: 'Elementi aperti qui sotto',
    tileAllClear: 'Tutto a posto',

    cardScreenTime: 'Tempo di utilizzo',
    cardScreenTimeSub: 'Ultimi 14 giorni, rispetto al limite giornaliero',
    cardRecent: 'Attività recente',
    cardRecentSub: 'Dalla più recente',
    cardRecentEmpty:
      'Ancora nessun evento registrato. Blocchi, app bloccate, avvisi sui luoghi e sincronizzazioni del tempo di utilizzo di questo dispositivo compariranno qui.',
    cardAttention: 'Richiede la tua attenzione',
    cardAttentionSub: '{{count}} aperti',
    cardAttentionEmpty: 'Niente da controllare. Le protezioni sembrano in salute.',
    cardProtection: 'Stato della protezione',
    cardProtectionSub: 'Verificato {{when}}',

    attnMoreMinutes: '{{name}} ha chiesto {{minutes}} minuti in più',
    attnReason: '«{{reason}}» · {{when}}',
    attnCheckInMissed: 'Un check-in è rimasto senza risposta',
    attnCheckInMissedMeta: 'Inviato {{when}} · nessuna risposta',
    attnLimitReached: 'Limite giornaliero raggiunto — dispositivo bloccato',
    attnBatteryLow: 'Batteria quasi scarica ({{level}}%)',
    attnBatteryLowMeta:
      'Gli aggiornamenti di posizione possono fermarsi se il telefono si spegne',
    attnResend: 'Rinvia',
    attnHowToFix: 'Come risolvere',
    attnUnlock: 'Sblocca',
    attnAppOnly: 'Disponibile nell’app KidGate',

    todayTitle: 'Oggi',
    todaySub: 'Rispetto al limite giornaliero e al bonus guadagnato',
    used: 'Usato',
    left: 'Rimanente',
    dailyLimit: 'Limite giornaliero',
    bonusToday: 'Bonus di oggi',
    off: 'Disattivato',
    on: 'Attivo',
    topAppsTitle: 'App più usate oggi',
    topAppsTitleDay: 'App più usate · {{date}}',
    topAppsSub: 'I limiti per app sono indicati da un marcatore',
    trendTitle: 'Andamento del tempo di utilizzo',
    trendSub: 'Ultimi {{count}} giorni',
    rangeDays: '{{count}} g',
    blockedHoursTitle: 'Orari di blocco',
    blockedHoursSub_one:
      '{{count}} fascia oraria · il dispositivo resta bloccato dentro i blocchi ombreggiati',
    blockedHoursSub_other:
      '{{count}} fasce orarie · il dispositivo resta bloccato dentro i blocchi ombreggiati',
    scheduleOff: 'La programmazione è disattivata',
    schedMax: 'Un dispositivo tiene al massimo {{max}} fasce.',

    appUsageTitle: 'Uso delle app oggi',
    appUsageSub: 'Tempo trascorso per app',
    appUsageEmpty: 'Nessun utilizzo di app registrato finora.',
    appBlockingTitle: 'App bloccate',
    blockingLabel: 'Blocco',
    appsBlocked: 'App bloccate',
    categories: 'Categorie',
    perAppHint:
      'I limiti per app funzionano indipendentemente dalla lista di blocco: «30 minuti di TikTok» è una decisione diversa da «niente TikTok».',
    limitsMax: 'Un dispositivo tiene al massimo {{max}} app limitate.',
    perDay: '{{value}}/giorno',
    webActivityTitle: 'Attività web',
    webActivitySub: 'Domini più visitati, ultimi 7 giorni',
    webActivityEmpty: 'Nessuna attività web finora.',
    inventoryEmpty: 'Questo dispositivo non ha ancora pubblicato il suo elenco di app.',
    inventoryFirstScan:
      'Prima scansione, quindi KidGate non può dire quando siano arrivate.',
    inventoryOtherLabel: 'Identificate',
    inventoryUnknownLabel: 'Non identificate',
    installAllow: 'Consenti',
    pendingInstallsTitle: 'Nuove app in attesa di approvazione',
    pendingInstallsSub:
      'Installate dopo l’attivazione dell’approvazione, bloccate automaticamente dal dispositivo',
    toastInstallAllowed: 'App permessa',
    rowInstallApprovalDesc: '{{count}} app in attesa di approvazione',
    rowInstallApprovalDesc_one: '{{count}} app in attesa di approvazione',
    rowInstallApprovalDescIos:
      'Nasconde l’App Store — Apple non consente l’approvazione app per app',
    colDomain: 'Dominio',
    colVisits: 'Visite',
    colBlocked: 'Bloccate',
    colLastSeen: 'Ultima volta',
    videosSub: 'Cosa è stato guardato su YouTube e sul web',
    videosEmpty: 'Ancora nessun video.',
    colVideo: 'Video',
    colChannel: 'Canale',
    colViews: 'Visualizzazioni',
    filterRefusedTitle: 'Cosa ha rifiutato il filtro',
    filterRefusedSub_one: '{{count}} richiesta bloccata, ultimi 7 giorni',
    filterRefusedSub_other: '{{count}} richieste bloccate, ultimi 7 giorni',
    filterHintIos:
      'Questo iPhone o iPad filtra solo con il controllo dei contenuti per adulti di Apple. Aggiorna KidGate sul dispositivo e consenti la VPN di KidGate per bloccare per categoria.',
    filterHintAndroid: 'Le categorie sono applicate dal filtro DNS sul dispositivo.',

    locationTitle: 'Posizione',
    locationUpdated: 'Aggiornato {{when}}',
    locationWaiting: 'In attesa del primo aggiornamento',
    noPlaces:
      'Nessun luogo salvato. Aggiungine uno nell’app per ricevere un avviso quando tuo figlio arriva o va via.',
    placeRadius: '{{meters}} m · ',
    placeArrive: 'arrivo',
    placeLeave: 'uscita',
    placeNoAlerts: 'nessun avviso',
    placeSamePin:
      'È lo stesso punto di «{{name}}». Usa la mappa dell’app per metterlo altrove.',
    placeWebHint:
      'Dal web un luogo si può creare solo dove il dispositivo ha segnalato l’ultima posizione. Usa la mappa dell’app per sceglierne un altro.',
    placeNeedsLocation: 'In attesa di una posizione da questo dispositivo.',
    sosSub: 'Segnali d’emergenza dal dispositivo del bambino',
    sosEmpty:
      'Nessun avviso SOS. Provatelo insieme una volta, così saprete entrambi come funziona.',
    sosAcknowledged: 'preso in carico',
    sosActive: 'attivo',

    checkInsTitle: 'Check-in',
    checkInsSub: 'Chiedi a tuo figlio di confermare che sta bene',
    checkInSafe: 'Ha confermato di stare bene',
    checkInPhotoRequested: 'sono state richieste foto e posizione',
    checkInNoReply: 'ancora nessuna risposta',
    checkInPhotoSkipped: 'foto saltata',
    checkInPhotoAttached: 'foto allegata',
    checkInNoPhoto: 'nessuna foto richiesta',
    sendCheckIn: 'Invia un check-in adesso',

    protectionAlertsTitle: 'Avvisi di protezione',
    protectionAlertsSub_one: '{{count}} evento dall’installazione',
    protectionAlertsSub_other: '{{count}} eventi dall’installazione',

    limitCardTitle: 'Limite giornaliero',
    limitCardSub: 'Limita i minuti disponibili ogni giorno',
    limitAria: 'Minuti del limite giornaliero',
    limitScaleMin: '30 min',
    limitScaleMax: '8 h',
    limitHint:
      'I minuti bonus dai compiti premio e dalle richieste di tempo approvate si sommano sopra il limite, solo per quel giorno.',
    limitShared: 'Condiviso tra tutti i dispositivi',
    limitSharedSpent: 'Oggi usati {{used}} su {{limit}}',
    limitSharedHint:
      'È l’intera giornata di questo bambino, non un limite di questo dispositivo: ogni dispositivo riceve ciò che gli altri non hanno usato. Si modifica nell’app KidGate.',
    whatsOnSub: 'Le modifiche si sincronizzano con il dispositivo del bambino',
    rowBlockedHours: 'Orari di blocco',
    rowBlockedHoursDesc_one: '{{count}} fascia oraria · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} fasce orarie · {{list}}',
    rowAppBlocking: 'App bloccate',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Filtro web',
    rowWebFilterDesc_one: '{{count}} categoria rifiutata',
    rowWebFilterDesc_other: '{{count}} categorie rifiutate',
    rowNotSupported: 'Non supportato su questo dispositivo',
    rowLocation: 'Condivisione posizione',
    rowLocationDesc: 'Ultimo aggiornamento {{when}}',
    rowLocationNone: 'Ancora nessuna posizione',
    rowSearchMonitoring: 'Controllo ricerche',
    rowSafeSearchDesc:
      'Blocca Google SafeSearch, Bing e DuckDuckGo sull’impostazione rigorosa su Android, Android TV e Chrome. Su Android e Chrome blocca anche la modalità con restrizioni di YouTube, che nasconde pure i commenti e blocca alcuni video normali.',

    webFilterCatsTitle: 'Categorie del filtro web',
    webFilterCatsSub: 'Tipi di contenuto bloccati',
    dnsHint:
      'I resolver DNS cifrati vengono sempre rifiutati mentre il filtro è attivo: lasciarli raggiungibili è ciò che permette a un browser di aggirare tutte le altre categorie.',
    starChartTitle: 'Tabella delle stelle',
    starChartSub: 'Stelle guadagnate questa settimana, per figlio',
    starChartEmpty:
      'Aggiungi un secondo figlio nell’app per avviare la tabella delle stelle.',
    starChartStars: '{{count}} stelle',
    rewardTasksTitle: 'Compiti premio',
    rewardTasksSub: 'Guadagna minuti extra completando i compiti',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskStars: 'Difficoltà: {{count}} su 3',
    rewardTaskWaiting: ' · in attesa della tua approvazione',
    approve: 'Approva',
    siteRequestAllow: 'Consenti',
    siteRequestDeny: 'Non ora',
    attnSiteRequest: '{{name}} ha chiesto di aprire {{domain}}',
    timelineSub:
      'Oggi, da mezzanotte a mezzanotte. Il verde è il tempo sul dispositivo.',
    timelineSubDay:
      '{{date}}, da mezzanotte a mezzanotte. Il verde è il tempo sul dispositivo.',
  },

  controlError: {
    generic: 'Non è andata a buon fine. Riprova.',
    network: 'Nessuna connessione. Controlla la rete e riprova.',
    sessionExpired: 'La sessione è scaduta. Accedi di nuovo.',
    forbidden:
      'Questa sessione del browser non può apportare modifiche. Accedi di nuovo scansionando il codice QR con l’app KidGate.',
    notFound: 'Non c’è più — potrebbe essere stato cambiato dal telefono.',
    conflict: 'Qualcuno ha appena modificato questo. Ricarica per vedere com’è ora.',
    rateLimited: 'Troppe modifiche insieme. Aspetta un momento e riprova.',
    server: 'KidGate non è riuscito a completare. Riprova a breve.',
    premiumRequired:
      'Questa è una funzione Premium. I piani si gestiscono nell’app KidGate sul telefono.',
  },

  report: {
    writtenAt: 'Scritto il {{when}}',
    shareImage: 'Salva come immagine',
    sharePdf: 'Salva come PDF',
    imageSaved: 'Immagine salvata.',
    shareFailed: 'Impossibile salvare da questo browser. Copia invece il riepilogo.',
    emptyBody:
      'Con Premium, un report arriva ogni lunedì mattina e copre i sette giorni precedenti. Puoi anche scrivere quello di questa settimana dall’app KidGate sul tuo telefono.',
    loadFailed: 'Impossibile aprire i report. Ricarica la pagina per riprovare.',
    retryLoad: 'Riprova',
    existed: 'Questa settimana aveva già un report — eccolo.',
  },

  support: {
    title: 'Assistenza KidGate',
    updated: 'Siamo qui per aiutarti',

    contactTitle: 'Contattaci',
    contactEmail: '**Email:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Tempo di risposta:** di norma entro un giorno lavorativo',
    contactNote:
      'Quando ci scrivi, indica l’indirizzo email del tuo account genitore KidGate e una breve descrizione del problema, così possiamo aiutarti più in fretta.',

    startTitle: 'Per iniziare',
    start1:
      '**1. Configura il dispositivo del genitore.** Installa KidGate, apri l’app e scegli *Questo è il dispositivo di un genitore*. Accedi con Google o con l’email (oppure con Apple, su un iPhone) e dai un nome alla tua famiglia.',
    start2:
      '**2. Imposta un PIN genitore.** Vai su *Impostazioni → Sicurezza* e crea un PIN genitore di 6 cifre. Ti serve per modificare le impostazioni sensibili e scegliere le app bloccate sul dispositivo del bambino. Non condividerlo con i tuoi figli.',
    start3:
      '**3. Collega il dispositivo del bambino.** Installa KidGate sul dispositivo di tuo figlio e aprilo. Su un telefono o un tablet, scegli *Questo è un dispositivo di un bambino*. Sul dispositivo del genitore apri *Famiglia* e tocca l’icona di scansione (*Scansiona un codice*), poi scansiona il codice QR mostrato sul dispositivo del bambino (o inserisci il codice di 6 caratteri). Se il dispositivo del bambino lo chiede, conferma lì la connessione; una TV si collega da sola.',
    start4:
      '**4. Concedi i permessi sul dispositivo del bambino.** Apri la schermata *Stato* sul dispositivo del bambino e tocca *Continua configurazione*: ti guida attraverso ogni permesso di cui KidGate ha bisogno. Su Android: Notifiche, Accesso ai dati di utilizzo, Mostra sopra le altre app, Accessibilità (assistente di blocco), Sveglie e promemoria, Batteria senza limitazioni, la connessione VPN su cui funziona il Filtro web, Impedisci la disinstallazione e, per gli Avvisi messaggi, l’accesso alle notifiche; su iOS: *Consenti utilizzo di app e siti web* (Tempo di utilizzo) e, per il Filtro web, *Consenti* quando iOS chiede di aggiungere configurazioni VPN. I comandi non funzioneranno del tutto finché non sono attivi.',
    start5:
      '**5. Configura i comandi.** Dal dispositivo del genitore apri la scheda del dispositivo del bambino e imposta limite giornaliero, orari di blocco, app bloccate, filtro web e funzioni di posizione.',
    startNote:
      'L’app include anche una guida passo passo: *Impostazioni → Guida utente*, con i dettagli su collegamento dei dispositivi, permessi, comandi quotidiani e funzioni di sicurezza.',

    faqTitle: 'Domande frequenti',

    faq1Q: 'Posso gestire la mia famiglia dal computer?',
    faq1A:
      'Sì. Apri la [dashboard web](/dashboard) e scansiona il codice che mostra con l’app KidGate sul tuo telefono, oppure accedi con lo stesso account che usi nell’app: Google, Apple oppure email e password. Mostra la stessa famiglia, gli stessi dispositivi, report e impostazioni. Se accedi con un account, per modificare un comando serve il PIN genitore. Creazione degli account e collegamento dei dispositivi restano nell’app per smartphone.',

    faq2Q: 'Come collego i dispositivi del genitore e del figlio?',
    faq2A:
      'Sul dispositivo del bambino apri KidGate. Su un telefono o un tablet, scegli *Questo è un dispositivo di un bambino*. Compaiono un codice QR e un codice di 6 caratteri. Sul dispositivo del genitore apri *Famiglia* e tocca l’icona di scansione (*Scansiona un codice*), poi scansiona il codice QR (consigliato) oppure inserisci il codice a mano. Se il dispositivo del bambino lo chiede, conferma lì il nome del genitore; una TV si collega da sola. I codici scadono: se il collegamento fallisce, tocca *Nuovo codice* sul dispositivo del bambino e riprova.',

    faq3Q: 'Due genitori possono gestire la stessa famiglia?',
    faq3A:
      'Sì. Sul dispositivo del titolare della famiglia apri *Famiglia → + → Invita un genitore* e condividi il codice QR o il codice d’invito. L’altro genitore installa KidGate, accede come genitore, apre *Famiglia* e tocca l’icona di scansione (*Scansiona un codice*), poi scansiona il codice QR o digita lì il codice d’invito. Poi il titolare approva la richiesta. Una famiglia può avere fino a 3 genitori con il piano gratuito e durante la prova, e fino a 6 con Premium. Un abbonamento copre tutta la famiglia; paga solo il titolare.',

    faq4Q: 'Come funziona la prova gratuita?',
    faq4A:
      'La prova di 7 giorni inizia quando colleghi il primo dispositivo genitore e il primo dispositivo del bambino, e dà accesso completo a tutte le funzioni. Rimuovere un dispositivo del bambino non azzera la prova. Alla fine, tutte le regole continuano a funzionare gratis e un dispositivo del bambino a tua scelta continua a inviare report; Premium riporta attività in tempo reale, cronologia, report settimanali e i report da ogni dispositivo.',

    faq5Q: 'Come disdico l’abbonamento?',
    faq5A:
      'Gli abbonamenti sono addebitati tramite App Store o Google Play, non direttamente da KidGate. Su iOS: *Impostazioni → il tuo nome → Abbonamenti*. Su Android: *Google Play → icona del profilo → Pagamenti e abbonamenti → Abbonamenti*. L’abbonamento si rinnova automaticamente se non disdici almeno 24 ore prima della fine del periodo in corso.',

    faq6Q: 'Come ripristino i miei acquisti?',
    faq6A:
      'Sul dispositivo del genitore apri la schermata *Piani* e tocca *Ripristina acquisti*. Assicurati di aver effettuato l’accesso con lo stesso account dello store usato per l’acquisto originale. Nota che solo il titolare della famiglia può abbonarsi o ripristinare gli acquisti.',

    faq7Q: 'Perché i dati sul tempo di schermo non compaiono?',
    faq7A:
      'I dati di utilizzo arrivano dal dispositivo del bambino. Controlla che sia online, poi aprici KidGate e guarda la schermata *Stato*: ogni riga dei permessi dovrebbe risultare consentita (su Android l’Accesso ai dati di utilizzo è necessario per tracciare il tempo di schermo). I report possono richiedere qualche minuto per sincronizzarsi.',

    faq8Q: 'Perché il blocco o gli orari di blocco non funzionano?',
    faq8A:
      'Su Android il blocco richiede *Mostra sopra le altre app* e l’assistente *Accessibilità* attivi, oltre alla batteria senza restrizioni. Su Xiaomi, Samsung, Oppo, Vivo e dispositivi simili consenti anche l’avvio automatico e togli KidGate da eventuali elenchi di «app in sospensione» (vedi *Stato → Consenti l’avvio automatico* sul dispositivo del bambino). Su iOS il blocco dipende dall’autorizzazione a Tempo di utilizzo. Se un permesso viene disattivato in seguito, riceverai un avviso di protezione sul dispositivo del genitore.',

    faq9Q: 'Come blocco app specifiche?',
    faq9A:
      'La scelta delle app avviene sul dispositivo del bambino: apri *KidGate → Impostazioni*, tocca *Sblocca con il PIN genitore*, apri *App bloccate*, scegli le app e salva. Poi, sul dispositivo del genitore, apri la schermata *App bloccate* di quel dispositivo e attiva *Abilita il blocco delle app*. Su iOS Apple può nascondere i nomi esatti delle app al dispositivo del genitore: è un limite della piattaforma.',

    faq10Q: 'Perché la posizione di mio figlio non si aggiorna?',
    faq10A:
      'La posizione deve essere consentita a KidGate sul dispositivo del bambino e il dispositivo ha bisogno di una connessione di rete. Apri la schermata *Posizione* del dispositivo dal telefono del genitore e tocca *Aggiorna posizione*. Le modalità di risparmio energetico possono ritardare gli aggiornamenti e il GPS al chiuso può essere meno preciso.',

    faq11Q: 'Come tolgo KidGate dal dispositivo di mio figlio?',
    faq11A:
      'Rimuovi prima il dispositivo dall’app del genitore (apri il dispositivo in *Famiglia* e scegli rimuovi), poi disinstalla l’app sul dispositivo del bambino.',

    faq12Q: 'Come elimino il mio account e i miei dati?',
    faq12A:
      'Nell’app del genitore vai su *Impostazioni → Account → Elimina account*. Dopo un periodo di attesa di 14 giorni, durante il quale puoi annullare la richiesta, questo cancella in modo definitivo il tuo account famiglia e tutti i dati — dispositivi, attività, storico delle posizioni e foto SOS — per tutti i genitori e i figli. Consulta la pagina [Eliminazione account e dati](/delete-account) per tutte le opzioni, compresa l’eliminazione senza avere l’app installata.',

    legalTitle: 'Note legali',
    legalDeletion: 'Eliminazione account e dati',
  },

  deleteAccount: {
    title: 'Eliminazione dell’account e dei dati',
    updated: 'Ultimo aggiornamento: 18 settembre 2026',
    intro:
      'Questa pagina spiega come eliminare il tuo account KidGate e i dati ad esso associati. Puoi richiedere l’eliminazione in qualsiasi momento e per farlo non è necessario avere l’app installata.',
    option1Title: 'Opzione 1: elimina il tuo account nell’app',
    option1Step1: 'Apri l’app KidGate e accedi.',
    option1Step2: 'Vai su *Impostazioni → Account → Elimina account*.',
    option1Step3: 'Conferma l’eliminazione.',
    option2Title: 'Opzione 2: richiedi l’eliminazione via email',
    option2Step1:
      'Invia un’email a [support@kidgate.app](mailto:support@kidgate.app?subject=Account%20Deletion%20Request) con l’oggetto “Account Deletion Request”.',
    option2Step2:
      'Invia la richiesta dall’indirizzo email associato al tuo account KidGate, così possiamo verificare la tua identità.',
    option2Step3:
      'Confermeremo la tua richiesta e pianificheremo l’eliminazione. Resta in attesa per 14 giorni, durante i quali puoi annullarla; trascorso questo periodo viene eseguita e non si può più tornare indietro.',
    deletedTitle: 'Cosa viene eliminato',
    deletedIntro: 'L’eliminazione del tuo account rimuove definitivamente:',
    deleted1: 'Le informazioni del tuo account genitore (nome, indirizzo email).',
    deleted2: 'Tutti i profili dei bambini che hai creato.',
    deleted3:
      'Tutti i dati di attività raccolti dai dispositivi gestiti, tra cui l’uso delle app, la cronologia del tempo di utilizzo, l’attività di navigazione, la cronologia delle posizioni e le foto di Check-in e SOS.',
    deleted4: 'Le tue impostazioni e preferenze di controllo genitori.',
    deleted5:
      'Le richieste di assistenza che hai inviato, con gli eventuali screenshot allegati.',
    deleted6:
      'Il tuo accesso stesso, in modo che l’account non possa più essere utilizzato.',
    retentionTitle: 'Tempi di conservazione',
    retention1:
      'I dati vengono eliminati quando termina il periodo di attesa di **14 giorni** di una richiesta verificata. L’eliminazione è definitiva e in seguito non è possibile esportare nulla.',
    retention2:
      'Per **12 mesi** viene conservata una traccia del fatto che l’eliminazione è stata richiesta e completata — un hash del tuo indirizzo email e le date, nient’altro — per poter rispondere a un’eventuale contestazione.',
    retention3:
      'Potremmo conservare un insieme minimo di registri qualora la legge lo richieda (ad esempio, i registri delle transazioni a fini fiscali), solo per il tempo previsto dalla legge.',
    partialTitle: 'Eliminazione parziale',
    partial:
      'Puoi rimuovere un bambino o un dispositivo nell’app, e così la raccolta di dati da esso si interrompe. La cronologia già raccolta scade secondo i tempi indicati nell’Informativa sulla privacy (30 giorni per la cronologia di utilizzo, web e delle posizioni e per il registro delle attività; 90 giorni per SOS, Check-in e Richieste di tempo); per farla eliminare prima, scrivi a [support@kidgate.app](mailto:support@kidgate.app).',
    moreInfo:
      'Per maggiori dettagli su come trattiamo i tuoi dati, consulta la nostra [Informativa sulla privacy](/privacy-policy).',
  },

  download: {
    eyebrow: 'Scarica',
    qrScan: 'Inquadra il codice con la fotocamera del telefono per scaricare l’app',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 o successivo, su un Mac con Apple silicon.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 o successivo, 64 bit.',
    button: 'Scarica',
    warningSub:
      'Windows mostra un avviso SmartScreen per qualsiasi app installata fuori dal suo store da uno sviluppatore non ancora presente nel suo elenco verificato: non segnala nulla trovato in KidGate. La scheda Windows qui sopra spiega come consentirlo. Il pacchetto per Mac è firmato con un Apple Developer ID e autenticato da Apple, quindi non genera alcun avviso. Scarica solo da kidgate.app.',
    macosSteps:
      'Apri il pacchetto scaricato e segui l’installazione. Poi macOS ti chiede una volta di consentire l’estensione di sistema KidGate: apri le impostazioni indicate da quel messaggio e consentila lì. Il Filtro web non funziona finché non lo fai. Dopo l’installazione, KidGate resta attivo tramite la sua icona nella barra dei menu; fai clic sull’icona per aprirne la finestra.',
    windowsSteps:
      'Il browser potrebbe prima avvisarti che il file non viene scaricato comunemente — scegli di conservarlo. Dopodiché, quando Windows dice di aver protetto il PC, scegli Ulteriori informazioni e poi Esegui comunque. Dopo l’installazione, KidGate resta attivo tramite la sua icona nell’area di notifica; fai clic sull’icona per aprirne la finestra.',
  },
  about: {
    eyebrow: 'Chi siamo',
    title: 'Aiutare i bambini a usare la tecnologia in modo più sicuro,',
    titleAccent: 'e le famiglie a preoccuparsi un po’ meno.',
    lede: 'Telefono, computer e TV fanno ormai parte della vita di un bambino. Non è per forza un male: conta come li usa, per quanto tempo, e se è protetto dai contenuti che non fanno per lui. KidGate aiuta i genitori a mettere i limiti che contano in modo semplice, trasparente ed equo, per genitori e figli allo stesso modo.',
    storyEyebrow: 'Perché esiste KidGate',
    storyTitle: 'Tutto parte da un momento che ogni famiglia conosce',
    storyP1:
      '«Ancora cinque minuti!» Poi i cinque minuti passano. Il genitore lo chiede di nuovo, il bambino si arrabbia, e una cosa da niente diventa una discussione che nessuno voleva. Non pensiamo che ogni famiglia abbia bisogno di regole più severe. A volte servono solo regole chiare, che tutti capiscono e di cui tutti si possono fidare.',
    storyP2:
      'Con KidGate il genitore imposta una volta il Limite giornaliero, gli Orari di blocco, le App bloccate e il Filtro web, e da lì le regole vanno avanti da sole, per quanto lo consente ogni dispositivo. Anche i figli vedono i propri limiti, sanno quando il dispositivo si bloccherà e possono chiedere altro tempo quando serve.',
    storyP3:
      'I genitori non devono ricordarlo ogni giorno. I figli non devono indovinare se oggi le regole sono cambiate. Meno discussioni, più tempo insieme.',
    valuesEyebrow: 'Ciò che conta per noi',
    valuesTitle: 'Ciò a cui teniamo sempre',
    valuesSub: 'Ogni funzione di KidGate nasce da queste quattro cose.',
    value1Title: 'Trasparenti con genitori e figli',
    value1Text:
      'I figli hanno il diritto di conoscere le regole del proprio dispositivo. I genitori hanno gli strumenti per proteggerli; i figli possono capire i propri limiti, chiedere altro tempo e raggiungere un genitore con l’SOS sui dispositivi supportati. Vogliamo che la tecnologia aiuti una famiglia a capirsi, non ad allontanarsi.',
    value2Title: 'La privacy della tua famiglia è rispettata',
    value2Text:
      'KidGate non mostra pubblicità e non vende mai a nessuno i dati di tuo figlio. Puoi chiederci di cancellare il tuo account famiglia e i dati collegati, direttamente dall’app o via email come spiega questo sito, e vengono cancellati 14 giorni dopo secondo la procedura che pubblichiamo.',
    value3Title: 'Sinceri su ciò che KidGate sa fare',
    value3Text:
      'Ogni dispositivo ha i suoi limiti, quindi alcune funzioni si comportano in modo diverso su iPhone, Android, Mac, Windows e TV. Lo diciamo sullo schermo, invece di promettere che tutto funzioni allo stesso modo ovunque. Proteggere una famiglia richiede buoni strumenti e informazioni su cui poter contare.',
    value4Title: 'Una famiglia, un piano Premium',
    value4Text:
      'Un solo abbonamento Premium copre tutti i genitori e tutti i dispositivi dei figli: niente da comprare dispositivo per dispositivo. Anche senza abbonamento, Limite giornaliero, Orari di blocco, App bloccate, Blocco dispositivo e Filtro web continuano a funzionare sui dispositivi supportati, e l’SOS non finisce mai dietro il paywall, perché gli strumenti di sicurezza essenziali devono essere sempre a portata di mano.',
    makeEyebrow: 'Cosa facciamo',
    makeTitle: 'Un’app, tanti dispositivi',
    makeSub:
      'I figli usano il telefono quando sono fuori, il computer per la scuola e la TV per rilassarsi, quindi prendersi cura di loro non dovrebbe fermarsi a un solo dispositivo. Ogni piattaforma ha i suoi punti di forza, ma l’obiettivo resta lo stesso: più facile per i genitori, più chiaro per i figli.',
    make1Title: 'iPhone e iPad',
    make1Text:
      'Limite giornaliero, Orari di blocco e App bloccate basati su Tempo di utilizzo di Apple, più il Filtro web direttamente sul dispositivo.',
    make2Title: 'Android',
    make2Text:
      'Limiti, App bloccate, blocco dello schermo e Filtro web, più un avviso quando tuo figlio installa una nuova app.',
    make3Title: 'macOS',
    make3Text:
      'Gli stessi orari e gli stessi limiti dei telefoni, più un riepilogo giornaliero che un genitore legge con un colpo d’occhio.',
    make4Title: 'Windows',
    make4Text:
      'Le stesse regole su un PC, e KidGate si riavvia da solo se viene chiuso o terminato.',
    make5Title: 'Android TV',
    make5Text:
      'Lo schermo che tutta la famiglia condivide in soggiorno, con gli stessi limiti e gli stessi orari dei telefoni. Una TV non condivide la posizione e non ha SOS.',
    make6Title: 'Chrome',
    make6Text:
      'L’estensione per Chrome porta il Filtro web nel browser, anche su un computer che non può avere KidGate. Se attivi queste opzioni, registra anche i video di YouTube che tuo figlio ha guardato, segnala le ricerche preoccupanti e ti dice quali altre estensioni sono installate. Non misura il tempo di utilizzo e non blocca le app.',
    make7Title: 'Dashboard genitori',
    make7Text:
      'Prenditi cura di tutta la famiglia dal browser di qualsiasi computer. Accedi scansionando un codice con il telefono: niente da installare.',
    factsEyebrow: 'KidGate oggi',
    factsTitle: 'Quattro numeri',
    fact1Label: 'lingue, perché ogni famiglia possa usarlo nella propria',
    fact2Label: 'piattaforme, più la dashboard web',
    fact3Label: 'pubblicità in KidGate',
    fact4Label: 'piano Premium per tutta la famiglia',
    contactEyebrow: 'Ti ascoltiamo',
    contactTitle: 'Ogni messaggio lo legge una persona',
    contactSub:
      'Qualcosa che non funziona come previsto, una funzione che serve alla tua famiglia o una traduzione che non suona naturale nella tua lingua: scrivici. Ogni messaggio ci aiuta a rendere KidGate più utile per le famiglie che lo usano ogni giorno.',
    contactEmail: 'Scrivici',
    contactSupport: 'Assistenza e guide',
    contactPrivacy: 'Come trattiamo i dati',
  },
  promo: {
    intro: 'Tutta la giornata di tuo figlio, in tutta tranquillità.',
    school: 'Inizia la lezione. Il telefono si blocca da solo.',
    apps: 'Le app che blocchi non si aprono.',
    arrive: 'Arriva dalla nonna e ricevi una notifica.',
    checkIn: 'Chiedi come sta. Con un tocco ti conferma che va tutto bene.',
    sos: 'Se qualcosa non va, un SOS ti mostra dov’è.',
    limit: 'Tempo di gioco finito. Il telefono si blocca da solo.',
    lockNow: 'La cena è pronta. Blocca il suo telefono dal tuo.',
    web: 'Blocca i siti dannosi su ogni dispositivo.',
    tv: 'Anche la TV del salotto segue le stesse regole di casa.',
    reward: 'Compiti fatti: 15 minuti extra guadagnati.',
    bedtime: 'All’ora di dormire, anche telefono, computer e TV vanno a nanna.',
    kid: 'Figlio',
    parent: 'Genitore',
    arrivedNotice: 'Sofia è arrivata dalla nonna',
    checkAsk: 'Tutto ok?',
    checkReply: 'Sto bene',
    sosNotice: 'Sofia ha inviato un SOS',
    timeUp: 'Tempo di gioco finito per oggi',
    lockButton: 'Blocca ora',
    task: 'Compiti fatti',
    granted: '+15 min',
    youtubeTitle: 'KidGate — Parental control per telefono, computer e TV',
    youtubeDescription:
      'Una giornata qualunque con KidGate, dalla campanella della scuola all’ora di dormire.',
  },
  setup: {
    parentTitle: 'Configura il tuo telefono',
    parentSub: 'Il primo passo. Bastano pochi minuti.',
    install: 'Cerca «KidGate» su App Store o Google Play e installa l’app.',
    installSub: 'iPhone, iPad o telefono Android.',
    role: 'Apri KidGate e scegli «{{parent}}».',
    signIn: 'Tocca «{{signIn}}», poi accedi con Apple, Google o con l’email.',
    signInSub: 'Con Apple basta confermare con Face ID.',
    family: 'Apri «{{tab}}», tocca «{{create}}» e dai un nome alla tua famiglia.',
    done: 'La tua parte è conclusa.',
    parentYoutubeTitle: 'Come configurare KidGate sul tuo telefono',
    parentYoutubeDescription:
      'Installa KidGate, accedi e crea la tua famiglia: il primo passo prima di collegare i dispositivi di tuo figlio.',
    pairSub: 'Collegalo al tuo telefono, poi attivane la protezione.',
    parentPhone: 'Il tuo telefono',
    openSub: 'Mostra un codice QR. Lascia aperta quella schermata.',
    scanSub: 'Non riesci a scansionarlo? Scegli «{{manual}}».',
    protect: 'Tocca «{{turnOn}}» per iniziare con un insieme di regole sicure.',
    protectSub: 'Potrai regolarle una per una in seguito.',
    tapAllow: 'Tocca «{{allow}}».',
    extras: 'Infine, consenti fotocamera e microfono.',
    extrasSub:
      'Facoltativo: così tuo figlio può aggiungere una foto o un audio a un SOS.',
    iosTitle: 'Configura l’iPhone o l’iPad di tuo figlio',
    childPhone: 'iPhone del figlio',
    iosOpen: 'Sull’iPhone di tuo figlio, apri KidGate e scegli «{{child}}».',
    iosScan: 'Sul tuo telefono, tocca «{{add}}» e scansiona il codice QR.',
    iosConfirm: 'Sull’iPhone di tuo figlio, verifica che sia tu, poi tocca «{{yes}}».',
    iosPin: 'Crea il tuo «{{pin}}» (6 cifre).',
    iosPinSub: 'L’iPhone di tuo figlio lo chiede prima di modificare le App bloccate.',
    iosAssign:
      'Scegli chi usa questo iPhone, oppure aggiungi tuo figlio con il suo nome.',
    iosScreenTime:
      'Sull’iPhone di tuo figlio, tocca «{{allow}}» e concedi l’accesso a Tempo di utilizzo.',
    iosScreenTimeSub: 'Apple chiede il Face ID o il codice di questo iPhone.',
    iosNotify:
      'Tocca «{{settings}}», attiva le {{notifications}}, poi torna su KidGate.',
    iosRefresh: 'Tocca «{{settings}}» e attiva «{{refresh}}».',
    iosRefreshSub: 'Facoltativo: mantiene KidGate attivo in background.',
    iosBlocked: 'Tocca «{{strengthen}}», poi configura «{{blocked}}».',
    iosBlockedSub: 'Tocca «{{unlock}}», inserisci il tuo PIN, poi scegli le app.',
    iosDone: 'L’iPhone di tuo figlio è protetto.',
    iosYoutubeTitle: 'Come configurare KidGate sull’iPhone o sull’iPad di tuo figlio',
    iosYoutubeDescription:
      'Collega l’iPhone o l’iPad di tuo figlio al tuo telefono con un codice QR, poi attiva Tempo di utilizzo e gli altri permessi di cui KidGate ha bisogno, un passo alla volta.',
    androidTitle: 'Configura il telefono o il tablet Android di tuo figlio',
    childAndroid: 'Android del figlio',
    androidOpen: 'Sul telefono di tuo figlio, apri KidGate e scegli «{{child}}».',
    androidScan: 'Sul tuo telefono, scansiona il codice QR con KidGate.',
    androidConfirm:
      'Sul telefono di tuo figlio, verifica che sia tu, poi tocca «{{yes}}».',
    androidAssign:
      'Scegli chi usa questo telefono, oppure aggiungi tuo figlio con il suo nome.',
    androidUsage:
      'Sul telefono di tuo figlio, tocca «{{open}}» e attiva l’Accesso ai dati di utilizzo per KidGate.',
    androidBack: 'Poi torna a KidGate scorrendo indietro.',
    androidAccessibility: 'Tocca «{{agree}}», poi attiva KidGate in Accessibilità.',
    androidOverlay: 'Tocca «{{settings}}» e attiva «{{overlay}}» per KidGate.',
    androidNotify: 'Tocca «{{allow}}», poi consenti le notifiche.',
    androidWebFilter: 'Tocca «{{enable}}» e consenti la connessione.',
    androidWebFilterSub: 'Il {{filter}} di KidGate funziona sul telefono come una VPN.',
    androidBattery:
      'Tocca «{{settings}}», poi consenti a KidGate di funzionare sempre in background.',
    androidStrengthen: 'Tocca «{{strengthen}}», poi attiva «{{uninstall}}».',
    androidMessages:
      'Per «{{alerts}}», tocca «{{grant}}» e attiva l’accesso per KidGate.',
    androidMessagesSub:
      'KidGate cerca parole di allerta nei messaggi in arrivo, direttamente sul telefono.',
    androidDone: 'Il telefono Android di tuo figlio è protetto.',
    androidYoutubeTitle:
      'Come configurare KidGate sul telefono o sul tablet Android di tuo figlio',
    androidYoutubeDescription:
      'Collega il telefono o il tablet Android di tuo figlio al tuo telefono con un codice QR, poi attiva i permessi di cui KidGate ha bisogno, un passo alla volta.',
    macTitle: 'Configura il Mac di tuo figlio',
    childMac: 'Mac del figlio',
    macDownload: 'Sul Mac di tuo figlio, scarica KidGate per macOS da kidgate.app.',
    macInstall: 'Apri il pacchetto scaricato e segui i passaggi.',
    macPasswordSub: 'macOS chiede la password di questo Mac.',
    macOpen: 'KidGate si apre e mostra un codice QR.',
    macOpenSub: 'Lascia aperta quella finestra.',
    macScan:
      'Sul tuo telefono, tocca il pulsante di scansione in KidGate e scansiona il codice QR.',
    macConfirm: 'Sul Mac, verifica che sia tu, poi fai clic su «{{yes}}».',
    macAssign: 'Scegli chi usa questo Mac, oppure aggiungi tuo figlio con il suo nome.',
    macFilter:
      'Sul Mac, fai clic su «{{open}}», poi attiva KidGate in Estensioni di rete.',
    macAllow:
      'Quando macOS chiede di filtrare i contenuti di rete, fai clic su «Consenti».',
    macAllowSub: 'Il {{filter}} di KidGate si attiva subito dopo.',
    macDone: 'Il Mac di tuo figlio è protetto.',
    macYoutubeTitle: 'Come configurare KidGate sul Mac di tuo figlio',
    macYoutubeDescription:
      'Installa KidGate sul Mac di tuo figlio, collegalo al tuo telefono con un codice QR, poi attiva il Filtro web in Impostazioni di Sistema.',
    windowsTitle: 'Configura il PC Windows di tuo figlio',
    childWindows: 'PC del figlio',
    windowsDownload:
      'Sul PC di tuo figlio, scarica KidGate per Windows da kidgate.app.',
    windowsSmartScreen:
      'Se Windows dice di aver protetto il PC, scegli Ulteriori informazioni e poi Esegui comunque.',
    windowsInstall:
      'Approva la richiesta di autorizzazione dell’amministratore, poi segui i passaggi del programma di installazione.',
    windowsInstallSub:
      'Con un account standard, Windows chiede la password di un amministratore.',
    windowsConfirm: 'Sul PC, verifica che sia tu, poi fai clic su «{{yes}}».',
    windowsAssign:
      'Scegli chi usa questo PC, oppure aggiungi tuo figlio con il suo nome.',
    windowsSetup: 'Sul PC, fai clic su «{{allow}}» per la voce {{location}}.',
    windowsSetupSub: 'Il {{filter}} di KidGate si attiva da solo in pochi secondi.',
    windowsDone: 'Il PC di tuo figlio è protetto.',
    windowsYoutubeTitle: 'Come configurare KidGate sul PC Windows di tuo figlio',
    windowsYoutubeDescription:
      'Installa KidGate sul PC Windows di tuo figlio e collegalo al tuo telefono con un codice QR. Poi il Filtro web si attiva da solo.',
    chromeTitle: 'Configura KidGate in Chrome',
    childChrome: 'Computer del figlio',
    chromeSite:
      'In Chrome, sul computer di tuo figlio, apri kidgate.app e scegli Chrome.',
    chromeStore:
      'Nel Chrome Web Store, fai clic su «Aggiungi a Chrome», poi su «Aggiungi estensione».',
    chromeOpen:
      'Fai clic sull’icona di KidGate nella barra degli strumenti di Chrome. Il popup mostra un codice QR.',
    chromeOpenSub: 'Tienilo aperto durante l’associazione.',
    chromeConfirm: 'In KidGate, verifica che sia tu, poi fai clic su «{{yes}}».',
    chromeAssign: 'Scegli chi usa Chrome su questo computer.',
    chromeDone: 'Chrome sul computer di tuo figlio è protetto.',
    chromeYoutubeTitle: 'Come configurare KidGate in Chrome sul computer di tuo figlio',
    chromeYoutubeDescription:
      'Aggiungi l’estensione KidGate a Chrome sul computer di tuo figlio e collegala al tuo telefono con un codice QR. Poi filtra il web in Chrome.',
    dashboardComputer: 'Il tuo computer',
    dashboardSite: 'Sul tuo computer, apri kidgate.app e fai clic su «Dashboard».',
    dashboardDone: 'Hai effettuato l’accesso alla dashboard web.',
    tvTitle: 'Configura l’Android TV di tuo figlio',
    tvAssign: 'Scegli chi usa questa TV, oppure aggiungi tuo figlio con il suo nome.',
    tvDone: 'L’Android TV di tuo figlio è protetta.',
    tvYoutubeTitle: 'Come configurare KidGate sull’Android TV di tuo figlio',
    outroTitle: 'Tutto pronto.',
    outroSub: 'Speriamo che KidGate ti renda più facile gestire la tua famiglia.',
    findDeviceTitle: 'Trova il dispositivo di tuo figlio',
    allYoutubeTitle:
      'Come configurare KidGate sul tuo telefono e sui dispositivi di tuo figlio',
    allYoutubeDescription:
      'Tutta la configurazione in un solo video: prima il tuo telefono, poi ogni dispositivo di tuo figlio (iPhone o iPad, telefono o tablet Android, Mac, PC Windows, Android TV, Chrome) e infine la dashboard web. Scegli il tuo dispositivo dall’elenco qui sotto.',
    // `guide-all`: every how-to in one video (operator, 2026-10-14).
    guideAllYoutubeTitle: 'Come usare KidGate: tutte le funzioni, passo dopo passo',
    guideAllYoutubeDescription:
      'Tutte le funzioni di KidGate in un solo video, passo dopo passo, sull’iPhone di un genitore e sul telefono Android di un figlio. Scegli dall’elenco qui sotto la funzione che ti serve.',
    // `guide-parent-devices`' title card: the app's own wording for the device.
    removeParentDeviceTitle: 'Rimuovi il dispositivo di un genitore',
  },
};
