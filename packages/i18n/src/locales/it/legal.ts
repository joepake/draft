export const legal = {
  privacyPolicy: {
    title: 'Informativa sulla privacy',
    effectiveDate: 'In vigore dal 6 settembre 2026',
    intro:
      'KidGate è il nome commerciale utilizzato dallo sviluppatore indipendente che gestisce l’app. La presente informativa spiega come KidGate tratta i dati quando i genitori utilizzano il servizio per gestire il dispositivo di un minore. Riguarda le app KidGate per iPhone, iPad e Android, l’agente KidGate per macOS e Windows, l’estensione per browser KidGate, l’app per Android TV, la dashboard genitori e il sito kidgate.app.',
    sections: [
      {
        title: '1. Ambito di applicazione e autorità genitoriale',
        body: 'L’account genitore configura le autorizzazioni e gestisce i dispositivi dei minori. I minori non creano un proprio account KidGate; un dispositivo viene gestito esclusivamente tramite un account genitore. Il genitore deve disporre della tutela legale o di un’autorità valida prima di monitorare o gestire un dispositivo. KidGate non deve essere utilizzato per il monitoraggio occulto di adulti o di chiunque non sia sotto la tutela legale del genitore.',
      },
      {
        title: '2. Dati che trattiamo',
        body: 'Ciò che KidGate tratta dipende dalle funzioni che il genitore attiva e dai permessi concessi dal sistema operativo. I dati possono includere: gli identificativi dell’account e l’accesso Google, Apple o email utilizzato per creare l’account genitore; i nomi che il genitore dà a ciascun figlio e i dispositivi loro assegnati; nome, modello e tipo del dispositivo, versione del sistema operativo e dell’app, livello della batteria e stato di abbinamento; le impostazioni stesse — Limite giornaliero, Orari di blocco, App bloccate, limiti per singola app, categorie del Filtro web e il PIN genitore, conservato solo come hash unidirezionale; i totali del Tempo di utilizzo, il dettaglio per app e una registrazione al minuto dei momenti in cui il dispositivo è stato usato; le app installate sul dispositivo e le estensioni aggiunte al browser; i domini richiesti dal dispositivo del bambino e quali di essi il Filtro web ha rifiutato, conteggiati per giorno e per ora; i titoli dei video riprodotti, dove la piattaforma li rende visibili; la posizione, la cronologia della posizione e i luoghi salvati dal genitore; gli avvisi SOS, i Check-in di sicurezza e la foto che il bambino invia con l’uno o con l’altro; gli avvisi generati quando una protezione viene disattivata, quando un’app viene installata oppure quando un messaggio o una ricerca corrisponde a un elenco di parole chiave attivato dal genitore; le richieste di tempo extra, le richieste di siti, i compiti premio e i totali settimanali di stelle mostrati nella tabella delle stelle; il report settimanale che riassume quanto sopra; i messaggi inviati all’assistenza e le eventuali schermate allegate; le segnalazioni di arresto anomalo e la diagnostica tecnica; e i dati sulle transazioni di abbonamento forniti da uno store di app. KidGate non chiede il nome reale di un bambino quando una funzione non ne ha bisogno.',
      },
      {
        title: '3. Ciò che resta sul dispositivo del bambino',
        body: 'Il monitoraggio dei messaggi e delle ricerche viene eseguito sul dispositivo stesso, solo su Android e solo quando il genitore lo attiva. Il dispositivo confronta il testo con elenchi di parole chiave conservati localmente; ciò che viene inviato è un avviso che indica la parola rilevata, la sua categoria, l’app in cui è comparsa e l’ora. Il messaggio in sé, il resto della conversazione e l’identità dell’interlocutore non vengono trasmessi né conservati da KidGate. Esiste un’unica eccezione, che richiede un consenso separato: quando il genitore ha acconsentito anche alla conferma con IA, un messaggio in arrivo la cui corrispondenza è risultata ambigua viene inviato al modello Gemini di Google per essere valutato, in modo che il genitore non riceva un avviso per una parola comune. Il testo scritto dal bambino non viene mai inviato per la conferma con IA, qualunque sia il consenso prestato dalla famiglia. Al di fuori di questo percorso, KidGate registra il dominio richiesto da un dispositivo e se sia stato rifiutato — non l’indirizzo di una pagina né il suo contenuto — e i file, le foto e la navigazione che nessuna funzione attiva legge restano sul dispositivo.',
      },
      {
        title: '4. Come vengono utilizzati i dati',
        body: 'I dati supportano l’autenticazione, l’abbinamento dei dispositivi, i controlli parentali, la sincronizzazione delle impostazioni, gli avvisi, i report, gli abbonamenti, la prevenzione delle frodi, la sicurezza dell’account, la risoluzione dei problemi e l’affidabilità. KidGate non vende dati personali e non utilizza i dati dei minori per la pubblicità comportamentale. In nessuna app KidGate è presente pubblicità.',
      },
      {
        title: '5. Trattamento automatizzato e IA',
        body: 'Tre funzioni utilizzano i modelli Gemini di Google, raggiunti tramite Google Cloud: il riepilogo testuale del report settimanale, generato a partire dai dati di utilizzo della famiglia stessa; la classificazione delle app e dei domini dei siti nelle categorie usate dal Filtro web e dagli elenchi di app; e il passaggio di conferma descritto nella sezione 3, che viene eseguito solo quando il genitore vi ha acconsentito. Questi modelli producono valutazioni che possono essere errate. Una categoria, una frase di riepilogo o un avviso su un messaggio sono un invito a verificare, non un accertamento di fatto, e su tale base KidGate non adotta alcuna decisione che produca effetti giuridici o similmente significativi su un minore. I risultati dei modelli non vengono utilizzati per addestrare i modelli di Google.',
      },
      {
        title: '6. Basi giuridiche e consenso',
        body: 'KidGate tratta i dati per fornire i servizi richiesti, adempiere a obblighi di legge, tutelare legittimi interessi di sicurezza, oppure sulla base del consenso, ove richiesto. I genitori sono responsabili di fornire le informative necessarie e di ottenere un consenso valido per il minore o per l’utente del dispositivo. Il monitoraggio dei messaggi e la conferma con IA sono due attivazioni separate ed esplicite, registrate per singolo dispositivo e revocabili in qualsiasi momento.',
      },
      {
        title: '7. Fornitori di servizi',
        body: 'KidGate è costruito su Google Cloud e Firebase, che forniscono l’autenticazione, il database, l’archiviazione dei file, le funzioni server, le notifiche push tramite Firebase Cloud Messaging, i report sugli arresti anomali tramite Firebase Crashlytics e i modelli Gemini indicati nella sezione 5. Anche Apple e Google trattano acquisti, rinnovi e rimborsi degli abbonamenti tramite i rispettivi store di app, e Google Analytics tratta le misurazioni descritte nella sezione 8. I dati vengono comunicati a questi fornitori solo nella misura necessaria a far funzionare il servizio; alle autorità quando richiesto per legge; oppure per far fronte a problemi di sicurezza, frode o abuso. I fornitori hanno propri obblighi e proprie informative e nessuno di essi è autorizzato da KidGate a utilizzare i dati dei minori per finalità di marketing autonome.',
      },
      {
        title: '8. Statistiche del sito e cookie',
        body: 'Il sito kidgate.app misura tre cose con Google Analytics: le visite alle pagine e i clic su ciascuno dei due link di download per computer. Questa misurazione imposta un cookie analitico nel browser di chi legge. Gli indirizzi IP vengono troncati, Google Signals e gli identificativi pubblicitari sono disattivati e non viene inviato nulla che identifichi chi legge o una famiglia. Le app KidGate inviano alla stessa proprietà un numero ristretto di eventi per indicare quali funzioni vengono usate; tali eventi contengono un identificativo dell’installazione dell’app e mai il nome di un bambino, i suoi messaggi, la sua posizione o la sua navigazione. Le app e il sito non utilizzano alcuna rete pubblicitaria o di tracciamento.',
      },
      {
        title: '9. Dove sono conservati i dati e come sono protetti',
        body: 'I dati della famiglia sono conservati nella regione di Singapore di Google Cloud e possono essere trattati altrove dai fornitori indicati nella sezione 7, il che significa che possono uscire dal Paese in cui la famiglia vive. KidGate adotta ragionevoli misure di sicurezza tecniche e organizzative, inclusi controlli degli accessi, principi del privilegio minimo, regole lato server che limitano ogni lettura a una sola famiglia e trasmissione sicura. Il PIN genitore è conservato solo come hash unidirezionale e non può essere riletto. Nessun sistema è completamente sicuro; KidGate non può garantire che i dati non vengano mai persi, che non vi si acceda senza autorizzazione o che il servizio non subisca interruzioni.',
      },
      {
        title: '10. Accesso del personale KidGate per l’assistenza',
        body: 'Quando è necessario per rispondere a una richiesta di assistenza o diagnosticare un guasto, il personale autorizzato di KidGate può aprire un account famiglia e vedere ciò che vede il genitore: la sua configurazione e i suoi dispositivi, e l’attività al suo interno — inclusi la cronologia della posizione, la cronologia web, gli avvisi sui contenuti e le foto allegate a un SOS o a un Check-in. Può inoltre modificare le impostazioni e inviare comandi ai dispositivi. Tale accesso è limitato al personale autorizzato, richiede l’autenticazione a due fattori, viene utilizzato esclusivamente per finalità di assistenza e ogni ingresso in un account famiglia viene registrato con l’ora e il motivo dichiarato. Le singole azioni compiute durante una sessione di assistenza oggi non vengono registrate separatamente.',
      },
      {
        title: '11. Per quanto tempo vengono conservati i dati',
        body: 'I dati scadono secondo un calendario e vengono eliminati automaticamente: il Tempo di utilizzo e l’utilizzo per app, la cronologia web, la cronologia dei video, la cronologia della posizione e il registro delle attività dopo 30 giorni; gli avvisi SOS, i Check-in di sicurezza e le richieste di tempo extra dopo 90 giorni; i report settimanali dopo 365 giorni. I codici di abbinamento scadono nel giro di pochi minuti e un accesso dal browser dura 7 giorni. Alcuni dati oggi non hanno scadenza e vengono conservati fino all’eliminazione dell’account famiglia: l’account e le sue impostazioni, i luoghi salvati, le schede dei figli e dei dispositivi, i compiti premio, le richieste di siti, le tabelle delle stelle e le classifiche del tempo di utilizzo, e l’elenco delle app. I messaggi inviati all’assistenza e le eventuali schermate allegate sono conservati a tempo indeterminato e non vengono rimossi dall’eliminazione dell’account; è previsto di colmare questa lacuna. Alcuni dati limitati potrebbero inoltre essere conservati laddove richiesto dalla legge, per la prevenzione delle frodi, per i backup a rotazione o per le transazioni effettuate tramite lo store di app.',
      },
      {
        title: '12. Eliminazione dell’account',
        body: 'Il genitore può richiedere l’eliminazione nelle Impostazioni o da kidgate.app. La richiesta resta in sospeso per 14 giorni e in questo periodo può essere annullata; trascorso tale termine, l’account famiglia, ogni figlio e ogni dispositivo che vi appartengono e i file archiviati che vi appartengono vengono eliminati, e l’accesso stesso viene rimosso. L’eliminazione è definitiva e non è previsto alcun export successivo. I dati dell’assistenza indicati nella sezione 11 costituiscono l’eccezione e non vengono eliminati.',
      },
      {
        title: '13. Diritti e scelte',
        body: 'In base alla legge applicabile, gli utenti possono richiedere l’accesso, la rettifica, la cancellazione, la limitazione, l’opposizione al trattamento o la revoca del consenso. Il monitoraggio dei messaggi e la conferma con IA possono essere disattivati in qualsiasi momento senza conseguenze per il resto del servizio. Le autorizzazioni relative a posizione, notifiche, fotocamera e dispositivo possono essere disattivate dal sistema operativo, ma le funzionalità che ne dipendono si interromperanno o risulteranno incomplete, e KidGate lo segnala sullo schermo del genitore invece di mostrare un comando che non funziona più.',
      },
      {
        title: '14. Dati dei minori',
        body: 'KidGate tratta i dati dei minori solo secondo la configurazione e sotto la direzione dell’account genitore. Qualora i dati di un minore siano stati forniti senza l’autorità o il consenso richiesti, KidGate potrà limitare l’account ed eliminare i dati dopo la relativa verifica.',
      },
      {
        title: '15. Incidenti relativi ai dati',
        body: 'KidGate valuterà gli incidenti di sicurezza confermati, adotterà ragionevoli misure di mitigazione e informerà gli utenti o le autorità quando richiesto per legge. I genitori devono proteggere account, PIN e dispositivi e segnalare tempestivamente eventuali accessi non autorizzati sospetti.',
      },
      {
        title: '16. Modifiche e contatti',
        body: 'La presente informativa può essere modificata al variare delle funzionalità o della normativa. Gli aggiornamenti sostanziali saranno comunicati nell’app o tramite un canale di distribuzione appropriato. Le richieste in materia di privacy possono essere inviate tramite il canale di assistenza pubblicato nella scheda di KidGate sullo store di app.',
      },
    ],
  },
  termsOfService: {
    title: 'Termini di servizio',
    effectiveDate: 'In vigore dal 6 settembre 2026',
    intro:
      'Accedendo a KidGate o utilizzandolo, confermi di aver letto e di accettare i presenti termini. KidGate è il nome commerciale utilizzato dallo sviluppatore indipendente che gestisce il servizio.',
    sections: [
      {
        title: '1. Requisiti di idoneità',
        body: 'Devi avere un’età sufficiente per stipulare un contratto ai sensi della legge applicabile e disporre dell’autorità legale su ogni minore, account e dispositivo che gestisci. Non utilizzare il servizio se non accetti i presenti termini.',
      },
      {
        title: '2. Che cos’è KidGate e che cosa non è',
        body: 'KidGate fornisce strumenti che aiutano i genitori a gestire i dispositivi, impostare limiti, visualizzare lo stato e ricevere avvisi. Non sostituisce la supervisione diretta, il parere medico, i servizi di emergenza, le forze dell’ordine o i servizi professionali per la tutela dei minori. SOS avvisa te; non contatta i servizi di emergenza e non funziona quando il dispositivo non ha rete.',
      },
      {
        title: '3. Software installato su un dispositivo gestito',
        body: 'Per applicare una regola serve del software sul dispositivo a cui la regola si riferisce, e ogni piattaforma lo consente in modo diverso: il framework Tempo di utilizzo di Apple su iPhone e iPad, un servizio di accessibilità e un’autorizzazione di amministratore del dispositivo su Android, un’estensione di sistema e un agente in background su macOS, un servizio in background su Windows e un’estensione del browser in Chrome. Sei tu a installarlo, su un dispositivo che hai il diritto di gestire, e puoi rimuoverlo in qualsiasi momento da quel dispositivo. La rimozione, o la revoca di un permesso da cui dipende, interrompe l’applicazione delle regole su quel dispositivo: KidGate ti segnalerà che è accaduto, ma non può impedirlo.',
      },
      {
        title: '4. Responsabilità del genitore',
        body: 'Devi fornire un’adeguata informativa ai minori, ottenere il consenso richiesto, configurare correttamente le autorizzazioni, testare le funzionalità e rispettare le leggi in materia di privacy, monitoraggio, lavoro, istruzione e tutela dei minori. Il monitoraggio dei messaggi e la conferma con IA sono due attivazioni separate ed è una tua decisione, con l’informativa che tale decisione richiede nella tua giurisdizione. Non utilizzare KidGate per monitoraggio occulto, molestie, controllo illecito o violazione dei diritti di terzi.',
      },
      {
        title: '5. Sicurezza dell’account e PIN genitore',
        body: 'Sei responsabile dell’attività dell’account e della protezione di dispositivi, PIN e metodi di accesso. Il PIN genitore protegge le impostazioni sensibili su un dispositivo del bambino e non può essere recuperato dal dispositivo: è conservato come hash unidirezionale. Segnala tempestivamente eventuali accessi non autorizzati sospetti. KidGate può limitare temporaneamente account o dispositivi per proteggere gli utenti o indagare su casi di abuso.',
      },
      {
        title: '6. Autorizzazioni della piattaforma e limiti tecnici',
        body: 'Le funzionalità dipendono dalle autorizzazioni del sistema operativo, dalla connessione di rete, dallo stato della batteria, dalle impostazioni del produttore, dai servizi di localizzazione e da piattaforme di terze parti, e ciò che ciascuna piattaforma consente è diverso. Alcune forme di applicazione delle regole sono, per come sono progettate, al meglio delle possibilità — chiudere un’app bloccata su un computer anziché impedirne l’avvio — e KidGate indica quali nella schermata che le propone. Gli avvisi potrebbero essere ritardati, incompleti o inesatti. Devi verificare i dispositivi direttamente e non devi fare affidamento esclusivamente su KidGate per la sicurezza o per le emergenze.',
      },
      {
        title: '7. Piani, prova gratuita e livello gratuito',
        body: 'Una prova gratuita con accesso completo inizia quando vengono abbinati il primo dispositivo genitore e il primo dispositivo del bambino e dura per il periodo indicato nell’app. Al termine, le regole che hai configurato continuano a funzionare senza pagamento su un dispositivo del bambino — Limite giornaliero, Orari di blocco, App bloccate, il Filtro web, il Blocco dispositivo, le richieste di tempo extra e i compiti premio — mentre l’attività in tempo reale, la cronologia, i report settimanali e il tracciamento della posizione diventano parte di Premium. Quando una famiglia ha più dispositivi dei figli di quanti ne copra il piano, i dispositivi eccedenti vengono messi in pausa: continuano ad applicare le regole già impostate e smettono di inviare attività, e scegli tu quale dispositivo resta monitorato. La rimozione di un dispositivo del bambino non fa ripartire la prova, e una famiglia può abbinare un numero limitato di dispositivi dei figli nell’arco di vita dell’account.',
      },
      {
        title: '8. Abbonamenti e pagamenti',
        body: 'Acquisti, rinnovi, cancellazioni e rimborsi sono gestiti secondo i termini di Apple App Store, Google Play o del relativo fornitore di servizi di pagamento. Un solo abbonamento copre tutta la famiglia e paga soltanto il proprietario della famiglia. I prezzi e le caratteristiche dei piani possono cambiare previo avviso richiesto dalla legge e dalle regole degli store.',
      },
      {
        title: '9. Contenuti automatizzati e generati dall’IA',
        body: 'I riepiloghi dei report settimanali, le categorie assegnate ad app e siti e il passaggio di conferma nel monitoraggio dei messaggi sono prodotti da modelli automatici e possono sbagliare in entrambe le direzioni: un sito può finire nella categoria sbagliata, un riepilogo può descrivere male una settimana e un avviso può scattare per un messaggio innocuo o non scattare per uno dannoso. Considera tutto questo come un invito a verificare e non come un accertamento, e non farne l’unica base di una decisione riguardante un minore.',
      },
      {
        title: '10. Licenza e proprietà',
        body: 'KidGate concede una licenza limitata, personale, non esclusiva, non trasferibile e revocabile per l’utilizzo dell’app secondo i presenti termini. Non è consentito rivendere, decompilare, eludere le protezioni, automatizzare l’estrazione dei dati o utilizzare il marchio, il codice sorgente o i contenuti oltre quanto consentito dalla legge.',
      },
      {
        title: '11. Condotta vietata',
        body: 'Non compromettere i sistemi, distribuire malware, impersonare altre persone, accedere a dati non autorizzati, sovraccaricare i servizi, aggirare i limiti, causare danni o violare la legge. KidGate può limitare o interrompere l’accesso quando ritiene ragionevolmente che si sia verificata una violazione.',
      },
      {
        title: '12. Disponibilità e modifiche',
        body: 'Il servizio può essere modificato, sospeso o interrotto per manutenzione, sicurezza, cambiamenti della piattaforma, obblighi di legge o esigenze operative. KidGate è gestito da uno sviluppatore indipendente e può essere interrotto; in tal caso, gli abbonamenti attivi saranno gestiti secondo le regole applicabili dello store di app. KidGate punta a una disponibilità ragionevole, ma non garantisce un funzionamento ininterrotto, privo di errori o compatibile con ogni dispositivo.',
      },
      {
        title: '13. Esclusioni di garanzia',
        body: 'Nella misura consentita dalla legge, il servizio è fornito “così com’è” e “nella misura in cui disponibile”, senza garanzie implicite di commerciabilità, idoneità a uno scopo particolare, accuratezza o non violazione. Nulla esclude i diritti obbligatori del consumatore o la responsabilità che la legge non consente di escludere.',
      },
      {
        title: '14. Limitazione di responsabilità',
        body: 'Nella misura consentita dalla legge, KidGate non è responsabile per danni indiretti, incidentali, speciali, punitivi, per la perdita di dati, di profitti o di opportunità derivanti dall’uso o dall’impossibilità di utilizzare il servizio. La responsabilità complessiva per reclami relativi al servizio non supererà l’importo pagato a KidGate nei 12 mesi precedenti l’evento, salvo diversa disposizione di legge.',
      },
      {
        title: '15. Manleva',
        body: 'Nella misura consentita dalla legge, accetti di manlevare KidGate da pretese di terzi derivanti da un uso illecito, monitoraggio non autorizzato, violazione dei diritti di terzi o violazione dei presenti termini. Ciò non copre i danni legalmente imputabili direttamente a KidGate.',
      },
      {
        title: '16. Risoluzione e controversie',
        body: 'Puoi interrompere l’utilizzo del servizio e richiedere la cancellazione dell’account. La cancellazione resta in sospeso per 14 giorni e in questa finestra può essere annullata; trascorso tale termine, l’account famiglia e i suoi dati vengono rimossi definitivamente. KidGate può sospendere o interrompere il servizio in caso di violazioni, rischi per la sicurezza o richieste legali. Le parti dovranno anzitutto tentare in buona fede di risolvere le controversie; la legge applicabile e il foro competente sono determinati dalle norme inderogabili applicabili all’utente e al gestore.',
      },
      {
        title: '17. Disposizioni generali',
        body: 'Qualora una disposizione risulti inefficace, le restanti disposizioni restano valide. La mancata applicazione di una disposizione non costituisce rinuncia alla stessa. I presenti termini, unitamente all’Informativa sulla privacy e a eventuali termini dello store, costituiscono l’accordo completo relativo al servizio. KidGate può cedere i presenti termini nell’ambito di un trasferimento dell’app; i tuoi diritti previsti dalla legge inderogabile non ne risultano pregiudicati.',
      },
      {
        title: '18. Software di terze parti',
        body: 'KidGate include due caratteri tipografici, entrambi usati con licenza SIL Open Font License 1.1: Plus Jakarta Sans di Tokotype e Baloo 2 di Ek Type. Le metriche verticali di Baloo 2 sono ritagliate sulle altezze di riga di questa app; i tracciati e il nome della famiglia restano invariati e la licenza consente questa modifica. Nessuno dei due viene venduto da solo. Fonti e licenza:',
        links: [
          {
            label: 'Plus Jakarta Sans su GitHub',
            url: 'https://github.com/tokotype/PlusJakartaSans',
          },
          {
            label: 'Baloo 2 su GitHub',
            url: 'https://github.com/EkType/Baloo2',
          },
          {
            label: 'SIL Open Font License 1.1',
            url: 'https://scripts.sil.org/OFL',
          },
        ],
      },
      {
        title: '19. Modifiche e contatti',
        body: 'I presenti termini possono essere aggiornati. Le modifiche sostanziali saranno comunicate in modo appropriato; il proseguimento dell’utilizzo dopo la data di entrata in vigore comporta l’accettazione dei termini aggiornati ove consentito dalla legge. Le domande possono essere inviate tramite il canale di assistenza indicato nella scheda di KidGate sullo store di app.',
      },
    ],
  },
} as const;
