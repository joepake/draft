export const webFilter = {
  title: 'Filtro web',
  fallbackDeviceName: 'Dispositivo del bambino',
  toastUpdateFailed: 'Impossibile aggiornare il Filtro web. Riprova.',
  heroTitle: 'Filtra i siti per adulti',
  heroSubtitleIos:
    'Usa il filtro dei contenuti web di Tempo di utilizzo di Apple per limitare i contenuti per adulti in Safari e nei browser interni alle app sul dispositivo del bambino.',
  heroSubtitleAndroid:
    'Usa una VPN DNS locale sul dispositivo Android del bambino per bloccare domini per adulti noti nei browser e in molte app.',
  toggleLabel: 'Attiva il Filtro web',
  toggleHintIos:
    'Richiede l’autorizzazione Tempo di utilizzo sul dispositivo del bambino.',
  toggleHintAndroid:
    'Il bambino deve approvare una volta la connessione VPN di KidGate. Tieni la VPN attiva perché il filtro funzioni.',
  toggleAccessibilityLabel: 'Attiva il Filtro web',
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
    'Vai su Impostazioni → Rete e Internet → DNS privato → Disattivato.',
  privateDnsBannerTitle: 'Disattiva il DNS privato',
  privateDnsBannerBody:
    'Il DNS privato è attivo, quindi il filtro per adulti può essere aggirato. Disattivalo perché il filtro funzioni.',
  privateDnsBannerButton: 'Apri impostazioni DNS',
  vpnConsentBannerTitle: 'Ripristina la VPN del Filtro web',
  vpnConsentBannerBody:
    'La VPN di KidGate è spenta. Il filtro per adulti richiede la VPN connessa.',
  vpnConsentBannerButton: 'Attiva VPN',
  iosOnlyNote: 'Usa Tempo di utilizzo su iOS',
  androidVpnNote: 'Usa una VPN DNS locale su Android',
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
    'Guarda quali siti ha raggiunto questo telefono e cosa è stato bloccato',
  category: {
    adult: 'Contenuti per adulti',
    gambling: 'Gioco d’azzardo',
    dating: 'Incontri',
    drugs: 'Droga e alcol',
    violence: 'Violenza ed estremismo',
    piracy: 'Pirateria',
    social: 'Social network',
    videoStreaming: 'Streaming video',
    gaming: 'Giochi',
    shopping: 'Shopping',
  },
  categoryHint: {
    adult: 'Siti espliciti e per adulti',
    gambling: 'Casinò, scommesse, loot box',
    dating: 'App di incontri e chat con sconosciuti',
    drugs: 'Cannabis, svapo, alcol',
    violence: 'Forum gore ed estremisti',
    piracy: 'Torrent e streaming pirata',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, portali di giochi',
    shopping: 'Amazon, Shein, fast fashion',
  },
} as const;
