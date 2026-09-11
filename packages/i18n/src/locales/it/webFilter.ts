export const webFilter = {
  title: 'Filtro web',
  fallbackDeviceName: 'Dispositivo del bambino',
  appliesToAll: 'Si applica a tutti i {{count}} dispositivi di {{name}}',
  coverageLine: 'Attivo su {{enforcing}} dispositivi su {{total}}',
  mergeNotice:
    'I dispositivi di {{name}} avevano impostazioni del filtro web diverse. Salvando qui si applica un unico insieme a tutti, combinato verso la scelta più rigida.',
  mergeLoosened: 'Ora consentito su ogni dispositivo: {{domains}}',
  toastUpdateFailed: 'Impossibile aggiornare il Filtro web. Riprova.',
  heroTitle: 'Filtra i siti inappropriati',
  heroSubtitleIos:
    'Usa il filtro dei contenuti web di Tempo di utilizzo di Apple per limitare i contenuti per adulti in Safari e nei browser interni alle app sul dispositivo del bambino.',
  heroSubtitleAndroid:
    'Usa una VPN DNS locale sul dispositivo Android del bambino per bloccare domini inappropriati noti nei browser e in molte app.',
  heroSubtitleMacos:
    'Esegue il filtro contenuti di KidGate sul Mac del figlio per bloccare i siti inappropriati noti in browser e molte app.',
  toggleHintIos:
    'Richiede l’autorizzazione Tempo di utilizzo sul dispositivo del bambino.',
  toggleHintAndroid:
    'Il bambino deve approvare una volta la connessione VPN di KidGate. Tieni la VPN attiva perché il filtro funzioni.',
  toggleHintMacos:
    'Il figlio deve approvare una volta l’estensione filtro di KidGate in Impostazioni di Sistema. Mantienila approvata perché il filtro funzioni.',
  toggleAccessibilityLabel: 'Attiva il Filtro web',
  safeSearchSectionTitle: 'Ricerca sicura e YouTube',
  safeSearchSectionSubtitle:
    'Forza Google, Bing e DuckDuckGo su risultati sicuri e blocca YouTube in modalità con restrizioni. Richiede il filtro web attivo.',
  safeSearchLabel: 'Forza SafeSearch',
  safeSearchHint:
    'Blocca Google SafeSearch, la modalità con restrizioni di YouTube, Bing e DuckDuckGo sull’impostazione rigorosa. Android, Android TV e Chrome.',
  safeSearchStrictNote:
    'YouTube usa il livello più restrittivo: i commenti vengono nascosti e anche alcuni video normali vengono bloccati. Un bambino non può disattivarlo dal proprio account.',
  infoTitle: 'Come funziona',
  infoLine1Ios: 'Apple filtra automaticamente i siti per adulti.',
  infoLine2Ios:
    'Usa il filtro per contenuti per adulti di Apple in Safari e non blocca tutto all’interno di altre app.',
  infoLine3Ios:
    'KidGate applica l’impostazione automaticamente quando l’app sul dispositivo del bambino sincronizza i controlli.',
  infoLine1Android:
    'KidGate avvia una VPN locale che ispeziona il DNS alla ricerca di domini per adulti e blocca alcuni resolver DNS cifrati.',
  infoLine2Android:
    'Disattiva il DNS privato sul dispositivo del bambino. Se è attivo, i browser possono aggirare il filtro.',
  infoLine3Android:
    'Il dispositivo del bambino mostra un’icona VPN durante il filtraggio. Spegnere la VPN ferma il filtro — riapri KidGate per ripristinarlo.',
  infoLine4Android:
    'In Impostazioni apri Rete e Internet, poi DNS privato, e scegli Disattivato.',
  infoLine1Macos:
    'KidGate esegue un filtro contenuti sul Mac che controlla quali siti vengono cercati e blocca quelli nelle tue categorie.',
  infoLine2Macos:
    'Se il filtro risulta non approvato sul Mac del figlio, apri Impostazioni di Sistema → Generali → Elementi di login ed estensioni per approvarlo.',
  infoLine3Macos:
    'Il Mac del figlio mostra il filtro come attivo una volta approvato. Se viene disattivato lì, riapri KidGate per ripristinarlo.',
  infoLine4Macos:
    'Il filtro legge i nomi dei siti, che i browser moderni nascondono in circa metà delle visite: quei siti non vengono controllati in base alle tue categorie. Blocca comunque la maggior parte dei siti raggiunti dai figli in questo modo.',
  privateDnsBannerTitle: 'Disattiva il DNS privato',
  privateDnsBannerBody:
    'Il DNS privato è attivo, quindi il filtro web può essere aggirato. Disattivalo perché il filtro funzioni.',
  privateDnsBannerButton: 'Apri impostazioni DNS',
  vpnConsentBannerTitle: 'Ripristina la VPN del Filtro web',
  vpnConsentBannerBody:
    'La VPN di KidGate è spenta. Il filtro per adulti richiede la VPN connessa.',
  vpnConsentBannerButton: 'Attiva VPN',
  iosOnlyNote: 'Usa Tempo di utilizzo su iOS',
  androidVpnNote: 'Usa una VPN DNS locale su Android',
  macosFilterNote: 'Usa il filtro contenuti di KidGate su Mac',

  heroSubtitleWindows:
    'Esegue il resolver di KidGate sul PC del bambino per bloccare i siti inappropriati noti in ogni browser.',

  toggleHintWindows:
    'Sul PC non c’è nulla da approvare. Il servizio in background di KidGate attiva il filtro in pochi secondi.',

  infoLine1Windows:
    'KidGate esegue sul PC un resolver che controlla quali siti vengono cercati e blocca quelli delle tue categorie.',

  infoLine2Windows:
    'Chrome, Edge e Firefox vi sono vincolati da un’impostazione applicata da KidGate. A tuo figlio non viene chiesto di approvare nulla.',

  infoLine3Windows:
    'Serve il servizio in background di KidGate. Se il filtro web resta spento, reinstalla KidGate sul PC come amministratore.',

  infoLine4Windows:
    'Il filtro legge solo i nomi dei siti. Non vede dentro una pagina, e un sito cercato poco fa può continuare ad aprirsi per qualche minuto.',

  windowsFilterNote: 'Usa il resolver di KidGate su Windows',
  webFilteringNote:
    'iOS usa il filtro per adulti di Tempo di utilizzo; Android una lista di blocco via VPN DNS locale.',
  safeSearchAlertsNote:
    'Safari non condivide i termini di ricerca; gli avvisi per parole chiave richiedono un browser sicuro gestito.',
  webHistoryNote: 'Richiede un browser filtrato o report di tipo DNS/VPN.',
  categoriesTitle: 'Cosa bloccare',
  categoriesSubtitle:
    'KidGate usa i propri elenchi di domini. Coprono i siti che i bambini raggiungono davvero, non tutto il web: affiancali agli elenchi qui sotto.',
  androidOnlyCategory: 'Solo Android: iOS non ha un controllo web per categoria',
  iosCategoryNote:
    'iPhone supporta solo {{category}}, tramite il filtro di Apple. Le altre categorie valgono per i dispositivi Android.',
  allowListTitle: 'Consenti sempre',
  allowListSubtitle:
    'Siti che restano raggiungibili anche se una categoria li bloccherebbe.',
  allowListEmpty: 'Ancora nessuna eccezione.',
  allowListInputAccessibility: 'Aggiungi un sito sempre consentito',
  blockListTitle: 'Blocca sempre',
  blockListSubtitle: 'Siti rifiutati qualunque cosa dicano le categorie.',
  blockListEmpty: 'Ancora nessun sito bloccato.',
  blockListInputAccessibility: 'Aggiungi un sito sempre bloccato',
  allowListOnlyLabel: 'Solo siti consentiti',
  allowListOnlyHintAndroid:
    'Tutto ciò che non è nel tuo elenco viene rifiutato. Agisce a livello DNS, quindi anche altre app perdono le connessioni.',
  allowListOnlyHintIos:
    'Safari e i browser nelle app possono aprire solo i siti del tuo elenco.',
  allowListOnlyNeedsEntries: 'Aggiungi almeno un sito consentito prima di attivarlo.',
  domainPlaceholder: 'esempio.com',
  addDomain: 'Aggiungi sito',
  removeDomain: 'Rimuovi {{domain}}',
  invalidDomain: 'Inserisci un indirizzo, come esempio.com',
  listFull: 'Puoi salvare fino a {{max}} siti in questo elenco.',
  openHistory: 'Cronologia web',
  openHistorySubtitle:
    'Guarda quali siti ha raggiunto questo dispositivo e cosa è stato bloccato',
  blockedPageTitle: 'Sito bloccato',
  blockedPageBody:
    'KidGate ha bloccato questo sito per la tua famiglia. Se pensi sia un errore, chiedi ai tuoi genitori.',
  category: {
    adult: 'Contenuti per adulti',
    selfHarm: 'Autolesionismo e disturbi alimentari',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Istruzione',
    utility: 'Utilità',
    browser: 'Browser web',
    devTools: 'Programmazione e sviluppo',
    messaging: 'Messaggi e chiamate',
    community: 'Forum e community',
    shortVideo: 'Video brevi',
    creative: 'Foto, video e arte',
    productivity: 'Note e produttività',
    reading: 'Libri e fumetti',
    fileSharing: 'Condivisione file e download',
    bypass: 'App per aggirare i controlli',
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
  categoryHint: {
    adult: 'Siti espliciti e per adulti',
    selfHarm: 'Forum che incoraggiano autolesionismo e digiuno',
    gambling: 'Casinò, scommesse sportive, poker',
    gameGambling: 'Apertura di loot box, scommesse skin e Roblox',
    dating: 'App di incontri',
    strangerChat: 'Cloni di Omegle, videochat casuale',
    drugs: 'Cannabis, svapo, alcol',
    violence: 'Siti gore e immagini shock',
    extremism: 'Forum di odio e siti estremisti',
    piracy: 'Torrent e streaming pirata',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, portali di giochi',
    shopping: 'Amazon, Shein, fast fashion',
    aiCompanion: 'Character.AI, Replika, bot di ruolo',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, app di trading',
    vpn: 'Pagine di download VPN. Non blocca un’app già installata.',
  },
  categoryGroup: {
    harm: 'Contenuti dannosi',
    contact: 'Sconosciuti',
    bypass: 'Aggiramento del filtro',
    ai: 'IA',
    entertainment: 'Svago e social',
    money: 'Acquisti e denaro',
  },
  categoriesOnCount: '{{on}} su {{total}} attivi',
  askToOpen: 'Chiedi a un genitore',
  askToOpenSubtitle: 'Se ti dà il permesso, il sito si aprirà.',
  askToOpenDomainLabel: 'Quale sito?',
  askToOpenBlockedLabel: 'Bloccati di recente',
  askToOpenPending: 'Hai già chiesto un sito. Aspetta la risposta.',
  askToOpenTooSoon: 'Hai appena inviato una richiesta. Riprova tra un minuto.',
  askToOpenTooMany: 'Puoi chiedere solo pochi siti alla volta.',
  requestsTitle: 'Richieste di siti',
  requestsSubtitle: 'Siti che questo dispositivo ha chiesto di permettere.',
  siteRequestApproved: 'Sito permesso',
  siteRequestApprovedDescription:
    '{{domain}} è stato aggiunto a «Permetti sempre» su {{deviceName}}.',
  siteRequestDenied: 'Richiesta di sito rifiutata',
  siteRequestDeniedDescription: '{{domain}} resta bloccato su {{deviceName}}.',
  siteRequestReceived: 'Richiesta sito',
  siteRequestReceivedDescription: '{{deviceName}} ha chiesto di aprire {{domain}}.',
  privateDnsStep1: 'Apri Impostazioni su questo dispositivo.',
  privateDnsStep2: 'Seleziona Rete e Internet.',
  privateDnsStep3: 'Apri DNS privato e scegli Disattivato.',
  vpnConsentStepAllow:
    'Seleziona OK nella richiesta VPN di Android. Un’icona a chiave resta nella barra di stato mentre il filtro è attivo.',
} as const;
