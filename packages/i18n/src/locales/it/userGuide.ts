export const userGuide = {
  title: 'Guida utente',
  subtitle:
    'Assistenza passo passo su permessi, associazione dei dispositivi, controlli quotidiani e funzioni di sicurezza.',
  stepLabel: 'Passaggio {{n}}',
  stepsSectionTitle: 'Passaggi',
  tipTitle: 'Suggerimento',
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
      description: 'Limiti, pianificazioni, blocco delle app e blocco del dispositivo',
    },
    safety: {
      title: 'Sicurezza e monitoraggio',
      description: 'Posizione, Check-In, SOS, Filtro web e protezione',
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
        '2': 'Accedi con Google o Apple, oppure crea un account con l’email. Conferma di essere il proprietario della famiglia per questo nucleo familiare.',
        '3': 'Se richiesto, assegna un nome alla tua famiglia (ad esempio, “Famiglia Rossi”). Questo nome comparirà quando altri genitori si uniranno.',
        '4': 'Imposta un PIN genitore (6 cifre) in Impostazioni → Sicurezza. Memorizzalo o conservalo in un luogo sicuro e non condividerlo con i bambini.',
        '5': 'Consigliato: attiva il Blocco app e lo sblocco biometrico in Impostazioni, così nessun altro potrà aprire l’app genitore sul tuo dispositivo.',
        '6': 'Apri Famiglia (Dispositivi). Tocca + e scegli “Collega un dispositivo del bambino”. Tieni questa schermata pronta per il codice QR o il codice del dispositivo del bambino.',
        '7': 'Dopo che il dispositivo del bambino si è collegato, apri la relativa scheda. Imposta il Limite giornaliero e gli Orari di blocco e completa i permessi insieme a tuo figlio.',
      },
    },
    getStartedChild: {
      title: 'Configura un dispositivo del bambino',
      summary: 'Installa KidGate sul dispositivo del bambino e completa i permessi.',
      tip: 'Fallo insieme a un genitore. Molte schermate dei permessi compaiono una sola volta ed è facile perderle da soli.',
      steps: {
        '1': 'Installa KidGate sul dispositivo del bambino. Apri l’app e seleziona “Questo è il dispositivo di un bambino”.',
        '2': 'Tieni aperta la schermata di associazione. Mostra il codice QR al genitore oppure leggi ad alta voce il codice di 6 caratteri.',
        '3': 'Sul dispositivo del genitore, scansiona il codice QR o inserisci il codice. Sul dispositivo del bambino, conferma il genitore quando richiesto — accetta solo qualcuno che conosci.',
        '4': 'Attendi che la schermata principale mostri che il dispositivo è collegato. Non forzare la chiusura di KidGate durante la configurazione.',
        '5': 'Nella schermata Stato, concedi tutti i permessi richiesti da KidGate (notifiche, posizione, fotocamera e permessi specifici della piattaforma). Tocca ogni voce finché non risulta consentita.',
        '6': 'Lascia KidGate installato e con l’accesso effettuato sul dispositivo del bambino. Da questo momento i genitori gestiscono i limiti dal proprio dispositivo.',
      },
    },
    connectChild: {
      title: 'Collega un dispositivo del bambino',
      summary:
        'Associa un nuovo dispositivo del bambino alla tua famiglia con un codice QR o un codice.',
      tip: 'I codici scadono. Se l’associazione non riesce, seleziona “Nuovo codice” sul dispositivo del bambino e riprova.',
      steps: {
        '1': 'Sul dispositivo del bambino: apri KidGate → “Questo è il dispositivo di un bambino”. Lascia visibile la schermata del codice QR.',
        '2': 'Sul dispositivo del genitore: apri Famiglia → tocca + → “Collega un dispositivo del bambino”.',
        '3': 'Si consiglia un codice QR: seleziona “Scansiona codice QR”, consenti l’accesso alla fotocamera se richiesto e allinea il codice QR del dispositivo del bambino all’interno del riquadro.',
        '4': 'Oppure usa il codice: seleziona “Inserisci codice manualmente”, digita i 6 caratteri mostrati sul dispositivo del bambino, quindi continua.',
        '5': 'Sul dispositivo del bambino, leggi attentamente la schermata di conferma. Seleziona “Sì, collega” solo se il nome del genitore è corretto.',
        '6': 'Attendi che il dispositivo del genitore confermi la connessione. Il nuovo dispositivo comparirà in Famiglia.',
        '7': 'Apri il nuovo dispositivo e verifica che “Ultima attività” si aggiorni. Se rimane offline, riapri KidGate sul dispositivo del bambino e controlla la connessione di rete.',
        '8': 'Successivamente, concedi i permessi sul dispositivo del bambino (vedi il gruppo Permessi dell’app). I controlli non funzioneranno appieno finché questi permessi non saranno attivi.',
      },
    },
    inviteParent: {
      title: 'Invita un altro genitore',
      summary:
        'Permetti a un secondo genitore di unirsi alla stessa famiglia e gestire gli stessi dispositivi dei bambini.',
      tip: 'Solo il proprietario della famiglia può approvare le richieste di adesione. Approvale tempestivamente, perché possono scadere.',
      steps: {
        '1': 'Sul dispositivo del proprietario della famiglia, apri Famiglia → tocca + → “Aggiungi un altro dispositivo genitore” (oppure “Invita genitore”).',
        '2': 'Se non hai ancora creato un nome per la famiglia, inseriscine uno e seleziona “Crea famiglia”.',
        '3': 'Mostra il codice QR di invito all’altro genitore, oppure condividi con lui il codice di invito.',
        '4': 'Sul dispositivo dell’altro genitore: apri KidGate come genitore → Famiglia → + → “Unisciti a una famiglia”, poi scansiona il codice QR o inserisci il codice.',
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
        '2': 'Apri Famiglia → tocca + → “Unisciti a una famiglia”.',
        '3': 'Scansiona il codice QR di invito del proprietario, oppure inserisci il codice di invito di 6 caratteri.',
        '4': 'Attendi l’approvazione del proprietario. Tieni l’app aperta finché non vedi che ti sei unito alla famiglia.',
        '5': 'Verifica che i dispositivi dei bambini compaiano in Famiglia. Apri un dispositivo per visualizzarne lo stato e i controlli.',
      },
    },
    androidPermissions: {
      title: 'Permessi Android (dispositivo del bambino)',
      summary:
        'Attiva Accesso ai dati di utilizzo, Visualizza sopra altre app, Accessibilità, batteria e i relativi permessi.',
      tip: 'La completezza conta più dell’ordine. Ogni voce rossa o non consentita nella schermata Stato del bambino va risolta prima di affidarsi al blocco o agli Orari di blocco.',
      steps: {
        '1': 'Sul dispositivo del bambino, apri KidGate → Stato e procedi dall’alto verso il basso nell’elenco dei permessi.',
        '2': 'Notifiche: tocca la voce → Consenti. I genitori hanno bisogno delle notifiche push per i comandi di blocco e le richieste di tempo.',
        '3': 'Accesso ai dati di utilizzo: apri la schermata di sistema → trova KidGate → attivalo. È necessario per il monitoraggio del tempo di utilizzo e per i limiti.',
        '4': 'Visualizza sopra altre app: consenti a KidGate. È necessario affinché la schermata di blocco possa comparire sopra le altre app.',
        '5': 'Assistente di blocco Accessibilità: Impostazioni → Accessibilità → App installate/scaricate → KidGate → Attivo. Questo mantiene il blocco applicato.',
        '6': 'Batteria senza limitazioni: seleziona Consenti quando richiesto. Se non compare alcuna richiesta: Informazioni app → Batteria → Senza limitazioni.',
        '7': 'Sveglie e promemoria: consentilo affinché gli Orari di blocco inizino e finiscano puntualmente.',
        '8': 'Posizione e Fotocamera (se usi Check-In o le foto SOS): consentile quando richiesto da KidGate. Torna a Stato e conferma che ogni voce sia consentita.',
      },
    },
    iosScreenTime: {
      title: 'Tempo di utilizzo iOS (dispositivo del bambino)',
      summary:
        'Consenti l’utilizzo di app e siti web affinché blocco, pianificazioni e selezione delle app possano funzionare.',
      tip: 'Se il pulsante Consenti non è presente, apri Impostazioni iOS → Tempo di utilizzo e assicurati prima che Tempo di utilizzo sia attivo sul dispositivo del bambino.',
      steps: {
        '1': 'Sull’iPhone del bambino, apri KidGate e resta nella schermata Stato/configurazione.',
        '2': 'Seleziona “Consenti utilizzo di app e siti web” (oppure il banner di Tempo di utilizzo).',
        '3': 'Nella finestra di sistema, seleziona Consenti. Non chiudere la finestra senza effettuare una scelta.',
        '4': 'Torna a KidGate. Il banner scompare non appena l’autorizzazione va a buon fine.',
        '5': 'Se l’autorizzazione è stata negata in precedenza: apri Impostazioni iOS → trova KidGate → attiva le opzioni relative a Tempo di utilizzo/Controlli famiglia, quindi riapri KidGate.',
        '6': 'Per scegliere le app da bloccare: sul dispositivo del bambino, apri Impostazioni di KidGate → inserisci il PIN genitore → “Scegli le app da bloccare” → salva.',
        '7': 'Sul dispositivo del genitore, apri il dispositivo → App bloccate e conferma che l’elenco si sia sincronizzato. Attiva il blocco quando sei pronto.',
      },
    },
    oemKeepRunning: {
      title: 'Mantieni KidGate attivo (impostazioni del produttore)',
      summary:
        'I dispositivi Xiaomi, Samsung, Oppo, Vivo, Huawei e simili spesso mettono in pausa le app in background.',
      tip: 'Dopo aver modificato le regole della batteria, riavvia una volta il dispositivo del bambino, riapri KidGate, quindi prova il blocco dal dispositivo del genitore.',
      steps: {
        '1': 'Sul dispositivo Android del bambino, apri KidGate → Stato → “Mantieni KidGate attivo”.',
        '2': 'Consenti l’avvio automatico di KidGate nella schermata di sicurezza del produttore (la dicitura varia a seconda del dispositivo).',
        '3': 'Imposta l’utilizzo della batteria di KidGate su “Senza limitazioni” sia nelle impostazioni Android sia nel menu batteria del produttore, se entrambi sono presenti.',
        '4': 'Disattiva eventuali elenchi di “app in sospensione”, “app in sospensione profonda” o “metti le app in sospensione” che includono KidGate.',
        '5': 'Se una scorciatoia non funziona, apri manualmente l’app Sicurezza/Cura del dispositivo e cerca KidGate, Avvio automatico o Batteria.',
        '6': 'Contrassegna ogni voce come Completata in KidGate man mano che la porti a termine, così saprai cosa resta da fare.',
      },
    },
    dailyLimit: {
      title: 'Imposta un limite giornaliero',
      summary:
        'Limita il numero di minuti che il bambino può usare il dispositivo ogni giorno.',
      tip: 'I dati di utilizzo provengono dal dispositivo del bambino. Se il contatore sembra bloccato, apri KidGate sul dispositivo del bambino e attendi una sincronizzazione.',
      steps: {
        '1': 'Sul dispositivo del genitore, apri Famiglia → tocca il dispositivo del bambino.',
        '2': 'In Controlli essenziali, seleziona Limite giornaliero.',
        '3': 'Scegli un valore di minuti al giorno (oppure modifica il limite esistente), quindi salva.',
        '4': 'Verifica che la scheda del dispositivo mostri i minuti usati e il limite di oggi dopo la sincronizzazione del dispositivo del bambino.',
        '5': 'Quando il limite viene raggiunto, il dispositivo si blocca secondo le regole della piattaforma. Seleziona Sblocca nella schermata del dispositivo se vuoi ripristinare l’accesso in anticipo.',
      },
    },
    blockedHours: {
      title: 'Imposta gli Orari di blocco',
      summary:
        'Pianifica fino a 3 fasce orarie in cui il dispositivo deve restare bloccato.',
      tip: 'Imposta prima gli orari scolastici e quelli della buonanotte. Evita fasce orarie sovrapposte per mantenere la pianificazione chiara.',
      steps: {
        '1': 'Apri il dispositivo del bambino sul dispositivo del genitore → Orari di blocco.',
        '2': 'Seleziona “Imposta Orari di blocco” (oppure “Modifica Orari di blocco”). Aggiungi una fascia oraria con ora di inizio, ora di fine e giorni.',
        '3': 'Salva la fascia oraria. Puoi aggiungerne fino a 3 in totale.',
        '4': 'Attiva la pianificazione se è presente un interruttore di attivazione.',
        '5': 'Sul dispositivo del bambino, verifica che i permessi Sveglie e promemoria e Tempo di utilizzo siano ancora consentiti, così le pianificazioni funzionano puntualmente.',
        '6': 'Durante una fascia attiva, la scheda del dispositivo mostra “Orari di blocco attivi · bloccato”. Usa Sblocca solo quando vuoi ignorare intenzionalmente la pianificazione.',
      },
    },
    blockedApps: {
      title: 'Blocca app specifiche',
      summary:
        'Scegli le app sul dispositivo del bambino, quindi attiva il blocco dal dispositivo del genitore.',
      tip: 'Su iOS, Apple potrebbe nascondere i nomi esatti delle app ai dispositivi dei genitori. La selezione avviene comunque sul dispositivo del bambino con il PIN genitore.',
      steps: {
        '1': 'Usa direttamente il dispositivo del bambino. Apri KidGate → Impostazioni.',
        '2': 'Inserisci il PIN genitore quando richiesto.',
        '3': 'Apri “Scegli le app da bloccare”. Seleziona le app (e le categorie, se mostrate), quindi salva sul dispositivo del bambino.',
        '4': 'Sul dispositivo del genitore, apri il dispositivo → App bloccate e attendi che l’elenco selezionato appaia.',
        '5': 'Attiva “Abilita il blocco delle app”. Lo stato dovrebbe indicare “Blocco attivo”.',
        '6': 'Prova aprendo un’app bloccata sul dispositivo del bambino. Dovrebbe risultare limitata secondo le regole della piattaforma.',
        '7': 'Per modificare l’elenco in seguito, ripeti la selezione sul dispositivo del bambino con il PIN genitore. Il dispositivo del genitore sincronizzerà il nuovo elenco.',
      },
    },
    lockUnlock: {
      title: 'Blocca e sblocca il dispositivo',
      summary:
        'Blocca immediatamente il dispositivo del bambino, oppure ripristina l’accesso.',
      tip: 'Su Android, il blocco è più efficace quando Visualizza sopra altre app e Accessibilità sono entrambi attivi. Su iOS, il blocco dipende dall’autorizzazione di Tempo di utilizzo.',
      steps: {
        '1': 'Apri il dispositivo del bambino sul dispositivo del genitore.',
        '2': 'Seleziona “Blocca dispositivo” (oppure “Blocca in KidGate”, a seconda delle opzioni mostrate per la piattaforma).',
        '3': 'Attendi qualche secondo. Lo stato dovrebbe cambiare in “Bloccato”. Se nulla cambia, apri KidGate sul dispositivo del bambino e ricontrolla i permessi.',
        '4': 'Per ripristinare l’accesso, seleziona Sblocca nella stessa schermata del dispositivo e conferma.',
        '5': 'Facoltativo: puoi anche bloccare o sbloccare rapidamente da Famiglia se queste scorciatoie compaiono sulla scheda del dispositivo.',
      },
    },
    locationSharing: {
      title: 'Attiva la condivisione della posizione',
      summary:
        'Visualizza l’ultima posizione di tuo figlio sul dispositivo del genitore.',
      tip: 'La posizione richiede un permesso sul dispositivo del bambino e una connessione di rete stabile. Il GPS al chiuso può essere meno preciso.',
      steps: {
        '1': 'Sul dispositivo del bambino, consenti la Posizione a KidGate quando richiesto (oppure nelle Impostazioni di sistema).',
        '2': 'Sul dispositivo del genitore, apri il dispositivo → Posizione.',
        '3': 'Attiva la condivisione se è disattivata, quindi attendi il primo aggiornamento.',
        '4': 'Trascina verso il basso per aggiornare, oppure riapri la schermata, se lo stato mostra ancora “In attesa”.',
        '5': 'Facoltativo: configura gli Avvisi sui luoghi per ricevere una notifica quando tuo figlio entra o esce da un luogo salvato.',
      },
    },
    checkIn: {
      title: 'Richiedi un Check-In',
      summary:
        'Chiedi a tuo figlio di confermare di essere al sicuro, con posizione e una foto facoltativa.',
      tip: 'Il permesso della fotocamera sul dispositivo del bambino è necessario per i Check-In con foto.',
      steps: {
        '1': 'Apri il dispositivo del bambino sul dispositivo del genitore.',
        '2': 'Seleziona Check-In (l’azione rapida oppure la sezione Sicurezza).',
        '3': 'Il dispositivo del bambino riceve una notifica e una schermata di Check-In. Il bambino tocca per confermare di stare bene, oppure per chiedere aiuto.',
        '4': 'Se l’accesso alla fotocamera è consentito, KidGate allega una foto insieme alla posizione, quando possibile.',
        '5': 'Sul dispositivo del genitore, apri la cronologia dei Check-In per rivedere l’ultima risposta e la foto.',
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
        '4': 'Sul dispositivo del genitore, apri il dispositivo → Avvisi SOS per rivedere l’evento.',
        '5': 'Concorda con tuo figlio quando usare l’SOS e quando è sufficiente un normale Check-In.',
      },
    },
    webFilter: {
      title: 'Limita i siti per adulti',
      summary:
        'Attiva il Filtro web per i contenuti per adulti dove la piattaforma lo supporta.',
      tip: 'Il filtraggio web dipende dalle funzionalità della piattaforma. Combinalo con le App bloccate per una protezione più efficace.',
      steps: {
        '1': 'Apri il dispositivo del bambino sul dispositivo del genitore → Filtro web.',
        '2': 'Controlla lo stato attuale (siti per adulti limitati, oppure filtro disattivato).',
        '3': 'Attiva il filtro e salva se è presente un interruttore.',
        '4': 'Controlla di nuovo più tardi dalla stessa schermata. Se lo stato resta “In attesa”, riapri KidGate sul dispositivo del bambino per sincronizzare le impostazioni.',
      },
    },
    protectionAlerts: {
      title: 'Avvisi di protezione',
      summary:
        'Ricevi una notifica quando un permesso importante sul dispositivo del bambino viene disattivato.',
      tip: 'Un avviso di protezione significa che la protezione di KidGate si è indebolita. Ripristina il permesso sul dispositivo del bambino il prima possibile.',
      steps: {
        '1': 'Apri il dispositivo del bambino → Protezione (oppure Avvisi di protezione).',
        '2': 'Controlla gli eventi recenti, come la disattivazione di Visualizza sopra altre app, Accessibilità, Accesso ai dati di utilizzo, Fotocamera o Posizione.',
        '3': 'Sul dispositivo del bambino, apri KidGate → Stato e riattiva il permesso indicato.',
        '4': 'Torna agli Avvisi di protezione e verifica che non compaiano nuovi eventi imprevisti.',
        '5': 'Mantieni le notifiche attive sul dispositivo del genitore per essere informato rapidamente dei cambiamenti.',
      },
    },
  },
} as const;
