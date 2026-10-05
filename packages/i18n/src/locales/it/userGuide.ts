export const userGuide = {
  title: 'Guida utente',
  subtitle:
    'Assistenza passo passo su permessi, associazione dei dispositivi, controlli quotidiani e funzioni di sicurezza.',
  stepLabel: 'Passaggio {{n}}',
  stepsSectionTitle: 'Passaggi',
  tipTitle: 'Suggerimento',
  searchPlaceholder: 'Cerca nella guida…',
  searchClear: 'Cancella ricerca',
  searchEmpty: 'Nessun argomento della guida corrisponde. Prova con un’altra parola.',
  groups: {
    gettingStarted: {
      title: 'Per iniziare',
      description:
        'Configura per la prima volta i dispositivi dei genitori e dei bambini',
    },
    connection: {
      title: 'Collega i dispositivi',
      description: 'Associa un dispositivo del bambino o invita un altro genitore',
    },
    permissions: {
      title: 'Permessi dell’app',
      description: 'Concedi i permessi necessari a KidGate sul dispositivo del bambino',
    },
    controls: {
      title: 'Controlli quotidiani',
      description:
        'Limiti, pianificazioni, blocco delle app, blocco del dispositivo, tempo extra e premi',
    },
    safety: {
      title: 'Sicurezza e monitoraggio',
      description: 'Posizione, Check-in, SOS, Filtro web e protezione',
    },
    reports: {
      title: 'Report e cronologia',
      description:
        'Report sul tempo di utilizzo, cronologia web e video, avvisi su app e messaggi',
    },
    account: {
      title: 'Account e piano',
      description: 'Premium, avvisi, dashboard web, PIN ed eliminazione dell’account',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Configura un dispositivo del genitore',
      summary:
        'Crea il tuo account e la tua famiglia, poi collega il primo dispositivo del bambino.',
      tip: 'Imposta subito il PIN genitore. Ti servirà per modificare le impostazioni sensibili e sbloccare i controlli sul dispositivo del bambino.',
      steps: {
        '1': 'Installa KidGate sul tuo dispositivo. Apri l’app e seleziona “Questo è il dispositivo di un genitore”.',
        '2': 'Accedi con Google o Apple, oppure crea un account con l’email.',
        '3': 'In Famiglia, seleziona “Crea famiglia” e assegna un nome alla tua famiglia (ad esempio, “Famiglia Rossi”). Questo nome comparirà quando altri genitori si uniranno. Se un altro genitore ha già creato la tua famiglia, seleziona invece “Unisciti a una famiglia”.',
        '4': 'Imposta un PIN genitore (6 cifre) in Impostazioni, poi Sicurezza. Memorizzalo o conservalo in un luogo sicuro e non condividerlo con i bambini.',
        '5': 'Consigliato: attiva il Blocco app e lo sblocco biometrico in Impostazioni, così nessun altro potrà aprire l’app genitore sul tuo dispositivo.',
        '6': 'Apri Famiglia, tocca + e scegli “Aggiungi dispositivo del bambino”. Tieni aperta questa schermata per il codice QR o il codice mostrato sul dispositivo del bambino.',
        '7': 'Dopo che il dispositivo del bambino si è collegato, apri Famiglia, poi il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino). Imposta il Limite giornaliero e gli Orari di blocco e completa i permessi insieme a tuo figlio.',
      },
    },
    getStartedChild: {
      title: 'Configura un dispositivo del bambino',
      summary: 'Installa KidGate sul dispositivo del bambino e completa i permessi.',
      tip: 'Fallo insieme a un genitore. Molte schermate dei permessi compaiono una sola volta ed è facile perderle da soli.',
      steps: {
        '1': 'Installa KidGate sul dispositivo del bambino. Apri l’app e seleziona “Questo è un dispositivo di un bambino”.',
        '2': 'Tieni aperta la schermata di associazione. Mostra il codice QR al genitore oppure leggi ad alta voce il codice di 6 caratteri.',
        '3': 'Sul dispositivo del genitore, scansiona il codice QR o inserisci il codice. Sul dispositivo del bambino, conferma il genitore quando richiesto — accetta solo qualcuno che conosci.',
        '4': 'Attendi che la schermata principale mostri che il dispositivo è collegato. Non forzare la chiusura di KidGate durante la configurazione.',
        '5': 'Nella schermata Stato, concedi tutti i permessi richiesti da KidGate (notifiche, posizione, fotocamera e permessi specifici della piattaforma). Tocca ogni voce finché non risulta consentita.',
        '6': 'Lascia KidGate installato e con l’accesso effettuato sul dispositivo del bambino. Da questo momento i genitori gestiscono i limiti dal proprio dispositivo.',
      },
    },
    connectChild: {
      title: 'Collega il telefono o il tablet del bambino',
      summary:
        'Associa un nuovo dispositivo del bambino alla tua famiglia con un codice QR o un codice.',
      tip: 'I codici scadono. Se l’associazione non riesce, seleziona “Nuovo codice” sul dispositivo del bambino e riprova.',
      steps: {
        '1': 'Sul dispositivo del bambino: apri KidGate, poi “Questo è un dispositivo di un bambino”. Lascia visibile la schermata del codice QR.',
        '2': 'Sul dispositivo del genitore: apri Famiglia e tocca l’icona di scansione (“Scansiona un codice”).',
        '3': 'La fotocamera si apre subito: consenti l’accesso alla fotocamera se richiesto e allinea il codice QR del dispositivo del bambino all’interno del riquadro.',
        '4': 'Oppure usa il codice: seleziona “Inserisci il codice manualmente”, digita i 6 caratteri mostrati sul dispositivo del bambino, quindi continua.',
        '5': 'Sul dispositivo del bambino, leggi attentamente la schermata di conferma. Seleziona “Sì, connetti” solo se il nome del genitore è corretto.',
        '6': 'Attendi che il dispositivo del genitore confermi la connessione. Il nuovo dispositivo comparirà in Famiglia.',
        '7': 'Apri il nuovo dispositivo e verifica che “Ultima attività” si aggiorni. Se rimane offline, riapri KidGate sul dispositivo del bambino e controlla la connessione di rete.',
        '8': 'Successivamente, concedi i permessi sul dispositivo del bambino (vedi il gruppo Permessi dell’app). I controlli non funzioneranno appieno finché questi permessi non saranno attivi.',
      },
    },
    connectComputer: {
      title: 'Collega un computer (Mac o Windows)',
      summary:
        'Installa KidGate sul Mac o sul PC Windows di tuo figlio e associalo come faresti con un telefono.',
      keywords: 'mac, macbook, windows, pc, portatile, computer',
      tip: 'Configura KidGate dopo aver effettuato l’accesso al computer con l’account personale di tuo figlio, e fai in modo che sia un account standard (non amministratore). Un account amministratore può rimuovere KidGate.',
      steps: {
        '1': 'Sul computer, apri kidgate.app/download e scarica KidGate per Mac o Windows.',
        '2': 'Avvia il programma di installazione e approva la richiesta di autorizzazione dell’amministratore. Su Windows, se compare il messaggio che Windows ha protetto il PC, scegli “Ulteriori informazioni” e poi “Esegui comunque”.',
        '3': 'Apri KidGate sul computer. Mostra un codice QR e un codice di 6 caratteri. Non serve accedere.',
        '4': 'Sul tuo dispositivo, apri Famiglia, tocca l’icona di scansione (“Scansiona un codice”) e scansiona il codice QR — oppure seleziona “Inserisci il codice manualmente” e digita il codice.',
        '5': 'Sul computer, controlla il nome del genitore e seleziona “Sì, connetti”.',
        '6': 'Segui i passaggi di “Completa la configurazione di questo dispositivo”. Su un Mac, seleziona “Apri Impostazioni” accanto ad “Approva il filtro web” e attiva KidGate nella pagina che si apre — il Filtro web non funziona finché non lo fai. Seleziona Consenti per Posizione e Fotocamera.',
        '7': 'Di nuovo sul tuo dispositivo, scegli quale dei tuoi figli usa il computer. Le app da bloccare si scelgono direttamente sul computer, dopo aver inserito il PIN genitore (“Scegli le app da bloccare”).',
      },
    },
    connectTv: {
      title: 'Collega un’Android TV',
      summary:
        'Installa KidGate su un’Android TV e associala dal tuo dispositivo, senza digitare nulla con il telecomando.',
      keywords: 'android tv, google tv, televisore, tv, fire tv, box',
      tip: 'Una TV non offre Posizione, SOS, Check-in né Richieste di tempo, e un’app bloccata viene chiusa dopo essersi aperta, anziché essere bloccata prima di aprirsi. I dati sul tempo di utilizzo possono arrivare con un ritardo fino a un’ora.',
      steps: {
        '1': 'Sulla TV, apri Google Play, cerca KidGate e installalo.',
        '2': 'Apri KidGate sulla TV. Mostra un codice QR e un codice di 6 caratteri. Non serve accedere.',
        '3': 'Sul tuo dispositivo, apri Famiglia, tocca l’icona di scansione (“Scansiona un codice”) e scansiona il codice QR sulla TV — oppure seleziona “Inserisci il codice manualmente” e digita il codice.',
        '4': 'La TV si collega da sola in pochi secondi. Non c’è nulla da confermare con il telecomando.',
        '5': 'Segui “Configura la protezione” sulla TV: seleziona “Apri Impostazioni” per attivare Accessibilità, Accesso ai dati di utilizzo e Visualizza sopra altre app, poi approva la connessione VPN affinché il Filtro web possa funzionare.',
        '6': 'Se un’impostazione non resta attiva, riavvia la TV e riprova. Puoi riaprire “Configura la protezione” dalla schermata principale di KidGate sulla TV.',
        '7': 'Di nuovo sul tuo dispositivo, scegli quale dei tuoi figli usa la TV. Le app da bloccare si scelgono direttamente sulla TV, dopo aver inserito il PIN genitore.',
      },
    },
    connectChrome: {
      title: 'Collega l’estensione Chrome',
      summary:
        'Aggiungi il filtro web di KidGate a Chrome su un Chromebook, un Mac o un PC. L’estensione compare come un dispositivo a sé.',
      keywords: 'chromebook, estensione chrome, estensione del browser',
      tip: 'L’estensione filtra solo Chrome: non gli altri browser, né le finestre in incognito, a meno che tu non lo consenta. In chrome://extensions, apri Dettagli di KidGate e attiva “Consenti in modalità in incognito”.',
      steps: {
        '1': 'In Chrome, sul computer di tuo figlio, vai al Chrome Web Store, cerca KidGate e seleziona “Aggiungi a Chrome”.',
        '2': 'Seleziona l’icona di KidGate nella barra degli strumenti di Chrome. Se non la vedi, fissala dal menu Estensioni (l’icona a forma di puzzle). Il popup mostra un codice QR e un codice di 6 caratteri: tienilo aperto durante l’associazione.',
        '3': 'Sul tuo dispositivo, apri Famiglia, tocca l’icona di scansione (“Scansiona un codice”) e scansiona il codice QR — oppure seleziona “Inserisci il codice manualmente” e digita il codice.',
        '4': 'Nel popup di KidGate, controlla il nome del genitore e seleziona “Sì, connetti”.',
        '5': 'Di nuovo sul tuo dispositivo, scegli quale dei tuoi figli usa l’estensione, poi attiva il Filtro web per l’estensione. Fino ad allora, l’estensione mostra Inattivo.',
        '6': 'Facoltativo: per vedere quali video vengono guardati, apri Video guardati e attiva “Registra i video guardati” per l’estensione.',
      },
    },
    inviteParent: {
      title: 'Invita un altro genitore',
      summary:
        'Permetti a un secondo genitore di unirsi alla stessa famiglia e gestire gli stessi dispositivi dei bambini.',
      tip: 'Solo il proprietario della famiglia può approvare le richieste di adesione. Approvale tempestivamente, perché possono scadere. Una famiglia può avere fino a 3 genitori con il piano gratuito e durante la prova, e fino a 6 con Premium.',
      steps: {
        '1': 'Sul dispositivo del proprietario della famiglia, apri Famiglia, poi tocca +, poi “Invita un genitore”.',
        '2': 'Se non hai ancora creato un nome per la famiglia, inseriscine uno e seleziona “Crea famiglia”.',
        '3': 'Mostra il codice QR di invito all’altro genitore, oppure condividi con lui il codice di invito.',
        '4': 'Sul dispositivo dell’altro genitore: apri KidGate come genitore, apri Famiglia e tocca l’icona di scansione (“Scansiona un codice”). Poi scansiona il codice QR di invito o inserisci il codice.',
        '5': 'Torna sul dispositivo del proprietario, apri la richiesta in sospeso e seleziona “Approva”. Rifiuta se non riconosci la persona.',
        '6': 'Il nuovo genitore vedrà gli stessi dispositivi dei bambini e potrà aiutare a gestire i limiti. Alcune azioni, come rinominare o rimuovere i dispositivi, restano riservate al proprietario.',
      },
    },
    joinFamily: {
      title: 'Unisciti a una famiglia esistente',
      summary:
        'Usa un invito del proprietario della famiglia per diventare co-genitore.',
      tip: 'Se la richiesta di approvazione scade, chiedi al proprietario un nuovo codice QR o codice di invito.',
      steps: {
        '1': 'Installa KidGate e accedi come genitore sul tuo dispositivo.',
        '2': 'Apri Famiglia e tocca l’icona di scansione (“Scansiona un codice”).',
        '3': 'Scansiona il codice QR di invito del proprietario, oppure seleziona “Inserisci il codice manualmente” e digita il codice di invito di 6 caratteri.',
        '4': 'Attendi l’approvazione del proprietario. Tieni l’app aperta finché non vedi che ti sei unito alla famiglia.',
        '5': 'Verifica che i dispositivi dei bambini compaiano in Famiglia. Apri un dispositivo per visualizzarne lo stato e i controlli.',
      },
    },
    androidPermissions: {
      title: 'Permessi Android (dispositivo del bambino)',
      summary:
        'Attiva Accesso ai dati di utilizzo, Visualizza sopra altre app, Accessibilità, batteria e i relativi permessi.',
      keywords:
        'accessibilità, accesso ai dati di utilizzo, sovrapposizione ad altre app, notifiche, amministratore dispositivo, vpn, consentire',
      tip: 'La completezza conta più dell’ordine. Ogni voce rossa o non consentita nella schermata Stato del bambino va risolta prima di affidarsi al blocco o agli Orari di blocco.',
      steps: {
        '1': 'Sul dispositivo del bambino, apri KidGate, poi Stato e procedi dall’alto verso il basso nell’elenco dei permessi.',
        '2': 'Notifiche: tocca la voce, poi Consenti. I genitori hanno bisogno delle notifiche push per i comandi di blocco e le richieste di tempo.',
        '3': 'Accesso ai dati di utilizzo: apri la schermata di sistema, poi trova KidGate, poi attivalo. È necessario per il monitoraggio del tempo di utilizzo e per i limiti.',
        '4': 'Visualizza sopra altre app: consenti a KidGate. È necessario affinché la schermata di blocco possa comparire sopra le altre app.',
        '5': 'Assistente di blocco Accessibilità: apri Impostazioni, poi Accessibilità, trova KidGate in “App installate/scaricate” e attiva l’interruttore. Questo mantiene il blocco applicato.',
        '6': 'Batteria senza limitazioni: seleziona Consenti quando richiesto. Se non compare alcuna richiesta, apri Informazioni app, poi Batteria, poi scegli Senza restrizioni.',
        '7': 'Sveglie e promemoria: consentilo affinché gli Orari di blocco inizino e finiscano puntualmente.',
        '8': 'Posizione e Fotocamera (se usi Check-in o le foto SOS): consentile quando richiesto da KidGate. Torna a Stato e conferma che ogni voce sia consentita.',
      },
    },
    iosScreenTime: {
      title: 'Tempo di utilizzo iOS (dispositivo del bambino)',
      summary:
        'Consenti l’utilizzo di app e siti web affinché blocco, pianificazioni e selezione delle app possano funzionare.',
      keywords: 'tempo di utilizzo, family controls, iphone, ipad, autorizzare',
      tip: 'Se il pulsante Consenti non è presente, apri Impostazioni iOS, poi Tempo di utilizzo e assicurati prima che Tempo di utilizzo sia attivo sul dispositivo del bambino.',
      steps: {
        '1': 'Apri KidGate e resta nella schermata «Stato».',
        '2': 'Seleziona “Consenti utilizzo di app e siti web” (oppure il banner di Tempo di utilizzo).',
        '3': 'Nella finestra di sistema, seleziona Consenti. Non chiudere la finestra senza effettuare una scelta.',
        '4': 'Torna a KidGate. Il banner scompare non appena l’autorizzazione va a buon fine.',
        '5': 'Se l’autorizzazione è stata negata in precedenza: apri Impostazioni iOS, trova KidGate, attiva Tempo di utilizzo in quella pagina, quindi riapri KidGate.',
        '6': 'Per scegliere le app da bloccare: sul dispositivo del bambino, apri Impostazioni di KidGate, seleziona “Sblocca con il PIN genitore”, apri App bloccate e salva.',
        '7': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi App bloccate, e conferma che l’elenco si sia sincronizzato. Attiva il blocco quando sei pronto.',
      },
    },
    oemKeepRunning: {
      title: 'Mantieni KidGate attivo (impostazioni del produttore)',
      summary:
        'I dispositivi Xiaomi, Samsung, Oppo, Vivo, Huawei e simili spesso mettono in pausa le app in background.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, risparmio energetico, avvio automatico, smette di funzionare, chiusa in background',
      tip: 'Dopo aver modificato le regole della batteria, riavvia una volta il dispositivo del bambino, riapri KidGate, quindi prova il blocco dal dispositivo del genitore.',
      steps: {
        '1': 'Sul dispositivo Android del bambino, apri KidGate, poi Stato, e cerca il passaggio “Consenti l’avvio automatico”. Compare solo sui dispositivi il cui produttore lo richiede.',
        '2': 'Consenti l’avvio automatico di KidGate nella schermata di sicurezza del produttore (la dicitura varia a seconda del dispositivo).',
        '3': 'Imposta l’utilizzo della batteria di KidGate su “Senza limitazioni” sia nelle impostazioni Android sia nel menu batteria del produttore, se entrambi sono presenti.',
        '4': 'Disattiva eventuali elenchi di “app in sospensione”, “app in sospensione profonda” o “metti le app in sospensione” che includono KidGate.',
        '5': 'Se una scorciatoia non funziona, apri manualmente l’app Sicurezza/Cura del dispositivo e cerca KidGate, Avvio automatico o Batteria.',
        '6': 'Contrassegna ogni voce come “Fatto” in KidGate man mano che la porti a termine, così saprai cosa resta da fare.',
      },
    },
    dailyLimit: {
      title: 'Imposta il Limite giornaliero',
      summary:
        'Limita il numero di minuti che il bambino può usare il dispositivo ogni giorno.',
      keywords: 'tempo di utilizzo, ore al giorno, tempo scaduto, budget, prolungare',
      tip: 'I dati di utilizzo provengono dal dispositivo del bambino. Se il contatore sembra bloccato, apri KidGate sul dispositivo del bambino e attendi una sincronizzazione.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri Famiglia, poi tocca il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino).',
        '2': 'In Controlli essenziali, seleziona Limite giornaliero.',
        '3': 'Scegli un valore di minuti al giorno (oppure modifica il limite esistente), quindi salva.',
        '4': 'Verifica che la scheda del dispositivo mostri i minuti usati e il limite di oggi dopo la sincronizzazione del dispositivo del bambino.',
        '5': 'Quando il limite viene raggiunto, il dispositivo si blocca secondo le regole della piattaforma. Seleziona Sblocca nella schermata del dispositivo se vuoi ripristinare l’accesso in anticipo.',
      },
    },
    blockedHours: {
      title: 'Imposta gli Orari di blocco',
      summary: 'Pianifica le fasce orarie in cui il dispositivo deve restare bloccato.',
      keywords: 'ora di dormire, notte, orario scolastico, programma, pausa',
      tip: 'Imposta prima gli orari scolastici e quelli della buonanotte. Evita fasce orarie sovrapposte per mantenere la pianificazione chiara.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi Orari di blocco.',
        '2': 'Seleziona “Aggiungi fascia oraria”, poi imposta ora di inizio, ora di fine e i giorni in cui si ripete.',
        '3': 'Salva la fascia oraria. Ripeti per aggiungerne un’altra.',
        '4': 'Attiva la pianificazione se è presente un interruttore di attivazione.',
        '5': 'Sul dispositivo del bambino, verifica che i permessi Sveglie e promemoria e Tempo di utilizzo siano ancora consentiti, così le pianificazioni funzionano puntualmente.',
        '6': 'Durante una fascia attiva, la scheda del dispositivo mostra “Orario di blocco attivo · bloccato”. Usa Sblocca solo quando vuoi ignorare intenzionalmente la pianificazione.',
      },
    },
    blockedApps: {
      title: 'Blocca app specifiche',
      summary:
        'Scegli le app sul dispositivo del bambino, quindi attiva il blocco dal dispositivo del genitore.',
      keywords:
        'bloccare app, tiktok, facebook, instagram, giochi, roblox, nascondere app',
      tip: 'Su iOS, Apple potrebbe nascondere i nomi esatti delle app ai dispositivi dei genitori. La selezione avviene comunque sul dispositivo del bambino con il PIN genitore.',
      steps: {
        '1': 'Usa direttamente il dispositivo del bambino. Apri KidGate, poi Impostazioni.',
        '2': 'Seleziona “Sblocca con il PIN genitore”, poi inserisci il PIN genitore.',
        '3': 'Apri App bloccate (su un computer o una TV: “Scegli le app da bloccare”). Seleziona le app (e le categorie, se mostrate), quindi salva sul dispositivo del bambino.',
        '4': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi App bloccate, e attendi che l’elenco selezionato appaia.',
        '5': 'Attiva “Abilita il blocco delle app”. Lo stato dovrebbe indicare “Blocco attivo”.',
        '6': 'Prova aprendo un’app bloccata sul dispositivo del bambino. Dovrebbe risultare limitata secondo le regole della piattaforma.',
        '7': 'Per modificare l’elenco in seguito, ripeti la selezione sul dispositivo del bambino con il PIN genitore. Il dispositivo del genitore sincronizzerà il nuovo elenco.',
      },
    },
    appLimits: {
      title: 'Imposta i Limiti app',
      summary:
        'Assegna a singole app un proprio limite al giorno, in aggiunta al Limite giornaliero.',
      keywords: 'limite di tempo per app, minuti per app, tiktok, youtube, giochi',
      tip: 'I Limiti app non sono disponibili su iPhone o iPad. Su un computer o una TV, un’app che raggiunge il suo limite viene chiusa dopo essersi aperta, anziché essere bloccata prima di aprirsi.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi Limiti app. Se tuo figlio usa più dispositivi, scegli quale: ogni dispositivo ha il suo elenco.',
        '2': 'In “Aggiungi un limite”, tocca un’app. Sono elencate solo le app usate oggi su quel dispositivo, e ognuna parte con un limite di 60 minuti.',
        '3': 'Imposta ogni limite con il selettore circolare o un valore predefinito, da 5 minuti a 8 ore al giorno. Puoi limitare fino a 20 app.',
        '4': 'Seleziona Salva. I limiti si azzerano a mezzanotte sul dispositivo del bambino.',
        '5': 'Il Limite giornaliero vale comunque per l’intero dispositivo, quindi un’app può bloccarsi prima di esaurire il proprio limite. Per rimuovere un limite, seleziona Rimuovi sulla sua scheda, poi salva.',
      },
    },
    lockUnlock: {
      title: 'Blocca e sblocca il dispositivo',
      summary:
        'Blocca immediatamente il dispositivo del bambino, oppure ripristina l’accesso.',
      tip: 'Su Android, il blocco è più efficace quando Visualizza sopra altre app e Accessibilità sono entrambi attivi. Su iOS, il blocco dipende dall’autorizzazione di Tempo di utilizzo.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino).',
        '2': 'Seleziona “Blocca tutto” per bloccare tutti i dispositivi di tuo figlio, oppure apri un singolo dispositivo e seleziona “Blocca dispositivo”.',
        '3': 'Attendi qualche secondo. Lo stato dovrebbe cambiare in “Bloccato”. Se nulla cambia, apri KidGate sul dispositivo del bambino e ricontrolla i permessi.',
        '4': 'Per ripristinare l’accesso, seleziona “Sblocca tutto” (oppure Sblocca nella schermata del dispositivo) e conferma.',
        '5': 'Facoltativo: puoi anche bloccare o sbloccare rapidamente da Famiglia se queste scorciatoie compaiono sulla scheda del dispositivo.',
      },
    },
    pauseBrowsing: {
      title: 'Sospendi la navigazione per un po’',
      summary:
        'Blocca il Web su un dispositivo da 5 minuti a 8 ore. Chiamate e app offline continuano a funzionare.',
      keywords:
        'spegnere internet, mettere in pausa il wifi, senza rete, offline, pausa',
      tip: 'Nell’estensione Chrome la sospensione riguarda solo Chrome. Per una pausa che si ripete ogni giorno, usa invece gli Orari di blocco.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi “Sospendi la navigazione” nella sezione Monitoraggio della sicurezza.',
        '2': 'Scegli una durata con il selettore circolare o un valore rapido (30, 60 o 120 minuti), poi conferma.',
        '3': 'Il Web resta bloccato su quel dispositivo finché il tempo non scade. Le impostazioni del Filtro web non cambiano, e la sospensione funziona anche quando il Filtro web è disattivato.',
        '4': 'Per terminarla prima, apri il dispositivo, tocca la scheda “Sospendi la navigazione” e seleziona Riprendi. I minuti rimanenti non vengono conservati.',
        '5': 'Dal profilo di tuo figlio, una sospensione vale per un solo dispositivo. Se tuo figlio ne usa diversi, sospendi ciascuno dalla schermata del relativo dispositivo.',
      },
    },
    timeRequests: {
      title: 'Rispondi alle Richieste di tempo',
      summary:
        'Tuo figlio può chiedere minuti in più quando il Limite giornaliero sta per finire, e tu approvi o rifiuti dal tuo dispositivo.',
      tip: 'Le richieste compaiono solo se il dispositivo ha un Limite giornaliero. I minuti approvati valgono per oggi, sul dispositivo che li ha chiesti, e non annullano né un blocco che hai impostato né gli Orari di blocco. Android TV e l’estensione Chrome non possono inviare richieste.',
      steps: {
        '1': 'Sul dispositivo del bambino, tuo figlio seleziona “Richiedi altro tempo” nella schermata principale di KidGate (su Android anche dalla schermata di blocco quando il limite è raggiunto), sceglie i minuti, aggiunge un motivo facoltativo e invia la richiesta.',
        '2': 'Ricevi una notifica. Apri KidGate: la richiesta ti aspetta nella scheda “Richiede approvazione” in Famiglia, nel profilo di tuo figlio e sul dispositivo.',
        '3': 'Controlla i minuti e il motivo, poi seleziona Approva per aggiungere esattamente quei minuti per oggi, oppure “Non ora” per rifiutare.',
        '4': 'Il dispositivo del bambino riceve la risposta, e i minuti approvati valgono subito. Ogni dispositivo può avere una sola richiesta in attesa alla volta.',
        '5': 'Le richieste a cui hai risposto sono elencate in Attività. Per non ricevere più queste notifiche sul tuo dispositivo, disattiva “Richieste di tempo extra” in “Notifiche push” nelle Impostazioni.',
      },
    },
    rewardTasks: {
      title: 'Configura i Compiti premio',
      summary:
        'Crea piccoli compiti che tuo figlio può completare per guadagnare minuti extra oggi.',
      tip: 'I minuti bonus contano solo se il dispositivo ha un Limite giornaliero. I minuti vanno al dispositivo con cui tuo figlio ha segnato il compito come fatto. I Compiti premio non sono disponibili su Android TV né nell’estensione Chrome.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi Compiti premio.',
        '2': 'Seleziona “Nuovo compito”, oppure parti da un modello. Inserisci il compito, scegli il premio in minuti (da 5 a 240), la difficoltà e se si ripete “Ogni giorno” o “Una volta”, poi seleziona “Crea compito”.',
        '3': 'Sul dispositivo del bambino, il compito compare in “Guadagna tempo extra”. Quando l’ha finito, tuo figlio seleziona Fatto.',
        '4': 'Ricevi una notifica. In “Da controllare” (nella schermata Compiti premio, in Famiglia o nel profilo di tuo figlio), seleziona Approva per aggiungere i minuti a oggi, oppure “Fai rifare” perché tuo figlio possa riprovare.',
        '5': 'Tocca un compito per modificarlo o eliminarlo. Il piano gratuito consente fino a 10 compiti attivi contemporaneamente; Premium ne consente 20.',
      },
    },
    locationSharing: {
      title: 'Attiva la condivisione della posizione',
      summary:
        'Visualizza l’ultima posizione di tuo figlio sul dispositivo del genitore.',
      keywords: 'gps, mappa, dov’è mio figlio, trovare il telefono, luoghi',
      tip: 'La posizione richiede un permesso sul dispositivo del bambino e una connessione di rete stabile. Il GPS al chiuso può essere meno preciso.',
      steps: {
        '1': 'Sul dispositivo del bambino, consenti la Posizione a KidGate quando richiesto (oppure nelle Impostazioni di sistema).',
        '2': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi Posizione.',
        '3': 'Attiva la condivisione se è disattivata, quindi attendi il primo aggiornamento.',
        '4': 'Se lo stato mostra ancora “In attesa”, tocca il pulsante per aggiornare oppure riapri la schermata.',
        '5': 'Facoltativo: apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi la sezione Avvisi, e seleziona Luoghi per configurare gli Avvisi sui luoghi quando tuo figlio entra o esce da un luogo salvato.',
        '6': 'Se il telefono è stato smarrito nelle vicinanze, apri Posizione e tocca Fai squillare il dispositivo. Un iPhone resta silenzioso mentre è in modalità silenziosa o con una modalità Full immersion attiva.',
      },
    },
    checkIn: {
      title: 'Richiedi un Check-in',
      summary:
        'Chiedi a tuo figlio di confermare di essere al sicuro, con posizione e una foto facoltativa.',
      tip: 'Il permesso della fotocamera sul dispositivo del bambino è necessario per i Check-in con foto.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino).',
        '2': 'Seleziona Check-in (l’azione rapida oppure la riga nella sezione Monitoraggio della sicurezza).',
        '3': 'Il dispositivo del bambino riceve una notifica e una schermata di Check-in. Il bambino tocca per confermare di stare bene, oppure per chiedere aiuto.',
        '4': 'Se l’accesso alla fotocamera è consentito, KidGate allega una foto insieme alla posizione, quando possibile.',
        '5': 'Sul dispositivo del genitore, apri la cronologia dei Check-in per rivedere l’ultima risposta e la foto.',
      },
    },
    sos: {
      title: 'Avvisi di emergenza SOS',
      summary:
        'Scopri come un bambino invia un SOS e come i genitori possono controllarlo.',
      tip: 'Provalo una volta a casa così genitore e bambino conoscono la procedura prima di un’emergenza reale.',
      steps: {
        '1': 'Sul dispositivo del bambino, apri la scheda o la schermata SOS in KidGate.',
        '2': 'Segui i passaggi a schermo per inviare un SOS (posizione e foto dipendono dai permessi concessi).',
        '3': 'I genitori ricevono una notifica push quando viene inviato un SOS.',
        '4': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi la sezione Avvisi, e seleziona SOS per aprire gli Avvisi SOS e rivedere l’evento.',
        '5': 'Concorda con tuo figlio quando usare l’SOS e quando è sufficiente un normale Check-in.',
      },
    },
    webFilter: {
      title: 'Limita i siti inappropriati',
      summary:
        'Attiva il Filtro web per i contenuti inappropriati dove la piattaforma lo supporta.',
      keywords:
        'bloccare sito, bloccare link, url, contenuti per adulti, ricerca sicura, dns, vpn, iphone, ipad',
      tip: 'Il filtraggio web dipende dalle funzionalità della piattaforma. Combinalo con le App bloccate per una protezione più efficace.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi Filtro web.',
        '2': 'Controlla lo stato attuale (siti inappropriati limitati, oppure filtro disattivato).',
        '3': 'Attiva il filtro e salva se è presente un interruttore.',
        '4': 'Controlla di nuovo più tardi dalla stessa schermata. Se lo stato resta “In attesa”, riapri KidGate sul dispositivo del bambino per sincronizzare le impostazioni.',
        '5': 'Su iPhone o iPad, apri KidGate sul dispositivo del bambino e seleziona Consenti quando iOS chiede di aggiungere configurazioni VPN, poi inserisci il codice del dispositivo. La richiesta compare una sola volta.',
      },
    },
    protectionAlerts: {
      title: 'Avvisi di protezione',
      summary:
        'Ricevi una notifica quando un permesso importante sul dispositivo del bambino viene disattivato.',
      tip: 'Un avviso di protezione significa che la protezione di KidGate si è indebolita. Ripristina il permesso sul dispositivo del bambino il prima possibile.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi la sezione Avvisi, e seleziona Protezione per aprire gli Avvisi di protezione.',
        '2': 'Controlla gli eventi recenti, come la disattivazione di Visualizza sopra altre app, Accessibilità, Accesso ai dati di utilizzo, Fotocamera o Posizione.',
        '3': 'Sul dispositivo del bambino, apri KidGate, poi Stato e riattiva il permesso indicato.',
        '4': 'Torna agli Avvisi di protezione e verifica che non compaiano nuovi eventi imprevisti.',
        '5': 'Mantieni le notifiche attive sul dispositivo del genitore per essere informato rapidamente dei cambiamenti.',
      },
    },
    usageReports: {
      title: 'Leggi i report di utilizzo',
      summary:
        'Vedi per quanto tempo è stato usato ogni dispositivo oggi e negli ultimi 30 giorni, per figlio, e in un report ogni lunedì.',
      tip: 'Con il piano gratuito vedi il totale di oggi e le 3 app più usate, aggiornati quando controlli. Premium aggiunge 30 giorni di cronologia, quando è stato usato ogni dispositivo, tutte le app, un report per ogni figlio e un nuovo report settimanale ogni lunedì. iPhone e iPad inviano solo il totale.',
      steps: {
        '1': 'Apri Report. La sezione Oggi somma tutti i dispositivi; sotto trovi il Report settimanale, ogni figlio (“Per figlio”) e ogni dispositivo (“Per dispositivo”).',
        '2': 'Tocca un dispositivo per aprire il suo Report di utilizzo: oggi rispetto al Limite giornaliero, “Ultimi 30 giorni”, “Quando è stato usato” e “App più usate”. Puoi aprirlo anche da “Utilizzo di oggi” nella schermata del dispositivo.',
        '3': 'Tocca uno dei tuoi figli per un unico report su tutti i suoi dispositivi, per “Oggi”, “7 giorni” o “30 giorni”. Il tempo su due schermi contemporaneamente conta una volta sola, quindi il totale può essere inferiore alla somma dei singoli dispositivi.',
        '4': 'Ogni lunedì mattina arriva un nuovo Report settimanale, con una notifica. Ti suggerisce una cosa che potresti cambiare e apre l’impostazione giusta.',
        '5': 'Quando apri KidGate, a ogni dispositivo vengono chiesti dati aggiornati, quindi possono servire alcuni minuti. Un dispositivo senza connessione a Internet invia i dati quando torna online.',
      },
    },
    webHistory: {
      title: 'Controlla la Cronologia web',
      summary:
        'Vedi, giorno per giorno, quali siti ha raggiunto un dispositivo e quali ha bloccato il Filtro web.',
      keywords: 'cronologia di navigazione, siti visitati, browser, chrome, safari',
      tip: 'La Cronologia web fa parte di Premium. Elenca siti, non pagine né minuti, e alcune righe sono traffico in background delle app. Su Android TV può essere in ritardo fino a un’ora.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi Cronologia web nella sezione Monitoraggio della sicurezza. Dal profilo di tuo figlio, riunisce tutti i suoi dispositivi.',
        '2': 'Per ogni giorno i siti sono elencati per tipo, con il numero di volte in cui ciascuno è stato raggiunto. Seleziona “Solo bloccati” per vedere solo ciò che ha fermato il Filtro web.',
        '3': 'Per bloccare un intero tipo di sito, apri la sua sezione e seleziona il pulsante Blocca in fondo. Dal profilo di tuo figlio, il blocco vale per tutti i suoi dispositivi.',
        '4': 'La cronologia viene dal Filtro web, quindi si riempie solo mentre il filtro è attivo su quel dispositivo.',
        '5': 'La cronologia viene conservata per 30 giorni. Quando tuo figlio chiede di aprire un sito bloccato, la richiesta compare nella scheda “Richiede approvazione”, non qui.',
      },
    },
    videoHistory: {
      title: 'Consulta i Video guardati',
      summary:
        'Tieni un elenco dei video YouTube che guarda tuo figlio, con il canale e l’orario.',
      keywords: 'youtube, shorts, video guardati, cronologia visualizzazioni',
      tip: 'La funzione Video guardati fa parte di Premium e riguarda solo YouTube. Funziona su telefoni Android, Android TV e nell’estensione Chrome, non su iPhone o iPad. Su un Mac o un PC, aggiungi l’estensione Chrome. Sulla TV gli Shorts non vengono elencati.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi Video guardati nella sezione Monitoraggio della sicurezza.',
        '2': 'Attiva “Registra i video guardati”. La registrazione resta disattivata finché non la attivi e, dal profilo di tuo figlio, vale per tutti i suoi dispositivi.',
        '3': 'Su un telefono Android, KidGate ha bisogno anche dell’accesso alle notifiche: sul dispositivo del bambino, apri KidGate, poi Impostazioni, seleziona “Sblocca con il PIN genitore”, poi “Consenti accesso alle notifiche” nella sezione Avvisi messaggi. Per gli Shorts serve anche Accessibilità.',
        '4': 'I video compaiono per giorno, con il canale e il numero di riproduzioni. Tocca un video per trovarlo su YouTube.',
        '5': 'Su un Mac o un PC, la schermata spiega invece come aggiungere l’estensione Chrome. L’estensione registra i video come un dispositivo a sé.',
      },
    },
    appAlerts: {
      title: 'Segui le installazioni di app',
      summary:
        'Vedi quando le app vengono installate o rimosse e cosa c’è su un dispositivo, e tieni bloccate le nuove app finché non le consenti.',
      tip: 'L’opzione “Approva le nuove app” è gratuita. La schermata App, con la cronologia delle installazioni e l’elenco delle app installate, fa parte di Premium. iPhone e iPad non possono segnalare le installazioni; su questi dispositivi “Approva le nuove app” nasconde invece l’App Store.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi la scheda App nella sezione Avvisi.',
        '2': '“Modifiche recenti” elenca le app installate e rimosse, dalle più recenti. Ricevi anche una notifica per ciascuna.',
        '3': '“App installate” elenca ciò che c’è sul dispositivo, con in cima le app del gruppo “Meritano un’occhiata”. Seleziona Sicura per togliere un’app da quel gruppo. Per bloccare un’app, usa App bloccate.',
        '4': 'Per tenere bloccate le nuove app finché non le consenti, apri App bloccate e attiva “Approva le nuove app”. Ogni app installata da quel momento resta bloccata sul dispositivo.',
        '5': 'Quando una nuova app è in attesa, seleziona Consenti accanto a essa per lasciarla aprire.',
      },
    },
    messageAlerts: {
      title: 'Attiva gli Avvisi messaggi',
      summary:
        'Ricevi un avviso quando una parola o una frase preoccupante compare nei messaggi o nelle ricerche sul telefono Android di tuo figlio. Vedi la parola o la frase segnalata, mai il messaggio.',
      keywords: 'sms, messenger, whatsapp, parole chiave, bullismo, leggere i messaggi',
      tip: 'Gli Avvisi messaggi fanno parte di Premium e funzionano solo sui telefoni Android. Ti arrivano solo la categoria e la parola o la frase segnalata. L’analisi con IA resta disattivata, a meno che un genitore non la attivi per tutta la famiglia.',
      steps: {
        '1': 'Sul telefono Android di tuo figlio, apri KidGate, poi Impostazioni, seleziona “Sblocca con il PIN genitore”, poi “Consenti accesso alle notifiche” nella sezione Avvisi messaggi, e attiva KidGate nell’elenco che si apre.',
        '2': 'Sul tuo dispositivo, apri il profilo di tuo figlio (o il dispositivo, se non è assegnato a nessun bambino), poi Avvisi messaggi nella sezione Avvisi, e tocca l’icona delle impostazioni in alto. Se tuo figlio ha più dispositivi, seleziona prima il telefono Android.',
        '3': 'Attiva “Controlla i messaggi ricevuti”. “Segnala anche le parolacce” è facoltativo, e in “Lingue analizzate” puoi sceglierne fino a 3.',
        '4': 'Per controllare anche ciò che scrive e cerca tuo figlio: sul dispositivo del bambino, seleziona Consenti nella sezione Avvisi messaggi, poi attiva “Controlla i messaggi scritti” e “Controlla le sue ricerche” sul tuo dispositivo.',
        '5': 'Gli avvisi compaiono in “Avvisi recenti” con la categoria e la parola o la frase segnalata. Seleziona “Cosa fare ora” per consigli su come parlarne.',
      },
    },
    childProfiles: {
      title: 'Aggiungi un figlio e assegna i dispositivi',
      summary:
        'Crea un profilo per ogni figlio, poi assegnagli i dispositivi che usa, così regole e tempo di utilizzo lo seguono.',
      tip: 'Solo il proprietario della famiglia può aggiungere figli e assegnare dispositivi. Un nuovo dispositivo non è assegnato a nessuno finché non scegli.',
      steps: {
        '1': 'In Famiglia, tocca + e scegli “Aggiungi un figlio”. Inserisci un nome e salva.',
        '2': 'Dopo aver associato un nuovo dispositivo, KidGate chiede chi lo usa. Scegli tuo figlio, oppure Nessuno per un dispositivo condiviso. KidGate propone poi un set di protezioni di base: seleziona “Attiva protezione” o “Non ora”.',
        '3': 'Un dispositivo per cui non è stato ancora scelto nessuno compare in “Non assegnato” in Famiglia. Seleziona “Assegna a un bambino…” sulla sua scheda.',
        '4': 'Una volta assegnato un dispositivo, Limite giornaliero, Orari di blocco, Filtro web, Check-in, SOS, luoghi e Compiti premio si impostano sul profilo di tuo figlio e valgono per tutti i suoi dispositivi. Il Limite giornaliero diventa un unico totale per quei dispositivi.',
        '5': 'Per spostare un dispositivo, apri il profilo del figlio che deve averlo e seleziona “Assegna un altro dispositivo…”. Per annullare un’assegnazione, scorri il dispositivo nel profilo di tuo figlio e seleziona “Annulla assegnazione”. Se rimuovi il profilo di un figlio, i suoi dispositivi restano associati.',
      },
    },
    plans: {
      title: 'Premium e il piano gratuito',
      summary:
        'Cosa includono la prova, il piano gratuito e Premium, e come abbonarsi.',
      keywords:
        'premium, prezzo, abbonamento, prova gratuita, annullare, rimborso, passare a premium',
      tip: 'Solo il proprietario della famiglia può abbonarsi o ripristinare un acquisto, e solo nell’app sul telefono. Un solo piano copre tutta la famiglia e ogni genitore che ne fa parte.',
      steps: {
        '1': 'Apri Impostazioni. La scheda in alto mostra il tuo piano attuale; seleziona “Vedi i piani”.',
        '2': 'La prova di 7 giorni inizia quando associ il primo dispositivo del bambino, e include tutto ciò che offre Premium.',
        '3': 'Con il piano gratuito tutte le regole continuano a funzionare, ma un solo dispositivo invia i dati: il totale di oggi e le 3 app più usate, aggiornati quando controlli. Premium aggiunge aggiornamenti in tempo reale, tutti i dispositivi, 30 giorni di cronologia, cronologia web e video, e report settimanali.',
        '4': 'Se la prova termina con più di un dispositivo del bambino, KidGate mostra “Scegli il dispositivo principale”. Quel dispositivo continua a inviare i dati; gli altri mostrano “In pausa” ma mantengono le loro regole. Puoi cambiare la scelta una volta ogni 7 giorni.',
        '5': 'Per abbonarti, scegli un piano e seleziona “Abbonati a Premium”. Con l’abbonamento tutti i dispositivi in pausa tornano a inviare i dati. Se hai già pagato in passato, seleziona “Ripristina acquisti”.',
      },
    },
    notificationSettings: {
      title: 'Scegli quali avvisi ricevere',
      summary:
        'Attiva o disattiva ogni tipo di avviso e imposta le ore silenziose, su ogni telefono del genitore.',
      tip: 'L’SOS arriva sempre, anche con tutto disattivato e durante le ore silenziose. Queste impostazioni valgono solo per questo telefono; gli altri genitori scelgono le proprie.',
      steps: {
        '1': 'Apri Impostazioni, poi “Notifiche push”.',
        '2': 'Nella sezione Avvisi, disattiva ogni tipo di avviso che non vuoi su questo telefono, ad esempio “Richieste di tempo extra” o “App installate o rimosse”.',
        '3': '“Riepilogo settimanale” controlla la notifica del lunedì per il report settimanale.',
        '4': 'Attiva “Ore silenziose” e imposta “Dalle” e “Alle” per silenziare gli avvisi durante la notte. Gli orari seguono l’orologio di questo telefono.',
        '5': 'In Impostazioni, “Avvisi in-app” e “Sirena SOS” sono voci separate: controllano il banner nell’app e il suono SOS ad alto volume su questo telefono.',
      },
    },
    webSignIn: {
      title: 'Usa KidGate su un computer',
      summary: 'Accedi alla dashboard web e gestisci la tua famiglia da un browser.',
      tip: 'Autorizza solo un browser in cui stai accedendo tu: ottiene lo stesso controllo del tuo telefono. La dashboard web non può associare dispositivi né acquistare un piano. Per disconnettere un browser, usa Esci nella dashboard.',
      steps: {
        '1': 'Sul computer, apri dashboard.kidgate.app e scegli “Accedi con l’app KidGate”. Compare un codice QR.',
        '2': 'Sul telefono, apri Impostazioni, poi “Accedi sul web”. Puoi anche scansionare da Famiglia con l’icona di scansione.',
        '3': 'Scansiona il codice QR nel browser. Se la fotocamera non riesce a leggerlo, inserisci invece il codice di 6 caratteri.',
        '4': 'Verifica che il codice corrisponda, poi seleziona Autorizza. Seleziona “Non autorizzare” se non hai avviato tu questo accesso.',
        '5': 'Il browser accede in pochi secondi e può apportare modifiche per 7 giorni. Trascorso questo periodo, continua a mostrare la tua famiglia; per cambiare qualcosa, seleziona “Sblocca le modifiche” nella dashboard e inserisci il PIN genitore, oppure autorizza di nuovo il browser dal tuo telefono.',
      },
    },
    securityPins: {
      title: 'PIN genitore e Blocco app',
      summary:
        'Due PIN diversi: il PIN genitore protegge le impostazioni sul dispositivo di tuo figlio, il Blocco app protegge l’app genitore sul tuo telefono.',
      tip: 'Solo il proprietario della famiglia può impostare o reimpostare il PIN genitore. Non condividerlo mai con tuo figlio.',
      steps: {
        '1': 'Apri Impostazioni. Nella sezione Sicurezza, seleziona “PIN genitore” per creare un PIN a 6 cifre, o per cambiarlo.',
        '2': 'Il dispositivo di tuo figlio chiede il PIN genitore prima di permettere di modificare le App bloccate o di uscire da KidGate su quel dispositivo.',
        '3': 'Se lo dimentichi, seleziona “Hai dimenticato il PIN?” nello stesso punto per impostarne uno nuovo come proprietario della famiglia.',
        '4': 'Se un dispositivo del bambino si blocca dopo 5 tentativi di PIN errati, la sezione Sicurezza mostra una riga di sblocco per quel dispositivo. Selezionala per azzerare i tentativi.',
        '5': 'Per proteggere l’app genitore su questo telefono, attiva il Blocco app e crea un PIN a 6 cifre dedicato. Puoi anche consentire lo sblocco con Face ID, Touch ID o impronta digitale.',
      },
    },
    deleteAccount: {
      title: 'Elimina il tuo account',
      summary:
        'Rimuovi il tuo account KidGate e i suoi dati, con 14 giorni per cambiare idea.',
      tip: 'Eliminare l’account non annulla un abbonamento su App Store o Google Play: devi annullarlo lì. Un co-genitore che vuole solo smettere di gestire la famiglia può invece lasciarla.',
      steps: {
        '1': 'Apri Impostazioni e, nella sezione Account, seleziona “Elimina account”.',
        '2': 'Leggi cosa verrà rimosso. Se sei il proprietario della famiglia, perdono l’accesso anche tutti i co-genitori e tutti i dispositivi dei bambini.',
        '3': 'Conferma che sei tu (con la password, oppure accedendo di nuovo con Google o Apple), digita “OK” e seleziona “Elimina definitivamente”.',
        '4': 'L’account viene eliminato dopo 14 giorni. Fino ad allora, apri KidGate e seleziona “Annulla eliminazione” per mantenere tutto.',
        '5': 'Se un co-genitore elimina il suo account, viene rimosso solo quell’account; la famiglia resta. Per lasciare una famiglia senza eliminare il tuo account, apri la scheda della famiglia in Famiglia e seleziona “Lascia la famiglia”.',
      },
    },
  },
  onChildDevice: 'Sul dispositivo del bambino',
  onParentDevice: 'Sul tuo dispositivo',
  handoffHint:
    'KidGate può guidare questi passaggi sul dispositivo del bambino: aprilo lì, vai su Stato e scegli Completa la configurazione con un genitore. Ogni passaggio ha un pulsante che apre la schermata giusta.',
} as const;
