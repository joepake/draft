export const legal = {
  privacyPolicy: {
    title: 'Informativa sulla privacy',
    effectiveDate: 'In vigore dal 18 ottobre 2026',
    intro:
      'L’app è gestita con il nome commerciale e di prodotto KidGate. La presente informativa spiega come KidGate tratta i dati quando i genitori utilizzano il servizio per gestire il dispositivo di un minore.\n\nRiguarda le app KidGate per iPhone, iPad e Android, l’app KidGate per macOS e Windows, l’estensione per browser KidGate, l’app per Android TV, la dashboard genitori e il sito kidgate.app.\n\n### In sintesi\n\n• KidGate tratta i dati solo per le funzioni che il genitore attiva e nei limiti dei permessi concessi dal sistema operativo.\n• Messaggi e ricerche vengono confrontati sul dispositivo stesso. Viene inviata solo la parola chiave rilevata, salvo che il genitore abbia acconsentito separatamente alla conferma con IA (sezione 3).\n• Il Filtro web funziona sul dispositivo. KidGate registra il dominio, non l’indirizzo completo né il contenuto della pagina.\n• Non c’è pubblicità e KidGate non vende dati personali.\n• La maggior parte della cronologia delle attività viene eliminata automaticamente dopo 30 giorni, gli avvisi SOS dopo 90 giorni (sezione 11).\n• Il personale autorizzato di KidGate apre un account famiglia solo quando serve per l’assistenza, e ogni apertura compare nel registro delle attività della famiglia (sezione 10).\n• Il genitore può richiedere l’eliminazione dell’account in qualsiasi momento. Dopo un’attesa di 14 giorni, l’account e i dati della famiglia vengono eliminati, salvo alcune registrazioni minime indicate nelle sezioni 11 e 12.',
    sections: [
      {
        title: '1. Ambito di applicazione e ruolo del genitore',
        body: 'L’account genitore effettua la configurazione, concede le autorizzazioni e gestisce i dispositivi dei minori. I minori non creano un proprio account KidGate; un dispositivo viene gestito esclusivamente tramite un account genitore.\n\nIl genitore deve disporre della tutela legale o di un’autorità valida prima di monitorare o gestire un dispositivo. KidGate non deve essere utilizzato per il monitoraggio occulto di adulti o di chiunque non sia sotto la tutela legale del genitore.',
      },
      {
        title: '2. Dati che trattiamo',
        body: 'Ciò che KidGate tratta dipende dalle funzioni che il genitore attiva e dai permessi che il sistema operativo concede all’app. Non tutti i tipi di dati elencati di seguito vengono raccolti su ogni dispositivo.\n\n### Account e dispositivi\n\n• Gli identificativi dell’account e l’accesso Google, Apple o email utilizzato per creare l’account genitore.\n• I nomi che il genitore dà a ciascun figlio e i dispositivi loro assegnati.\n• Nome, modello e tipo del dispositivo, versione del sistema operativo e dell’app, livello della batteria e stato di abbinamento.\n• Le impostazioni: Limite giornaliero, Orari di blocco, App bloccate, limiti per singola app, categorie del Filtro web e il PIN genitore. Il PIN è conservato solo come hash unidirezionale.\n\n### Tempo di utilizzo e app\n\n• I totali del Tempo di utilizzo, il dettaglio per app e una registrazione al minuto dei momenti in cui il dispositivo è stato usato.\n• Le app installate sul dispositivo e le estensioni aggiunte al browser.\n• Gli avvisi generati quando viene installata una nuova app, quando una protezione viene disattivata o quando l’utilizzo appare insolito, ad esempio una nuova app oppure un utilizzo durante gli Orari di blocco.\n\n### Web e video\n\n• I domini richiesti dal dispositivo del bambino e quali di essi sono stati bloccati, conteggiati per giorno e per ora.\n• I titoli e i nomi dei canali dei video riprodotti, sulle piattaforme che consentono di leggere queste informazioni, quando la cronologia dei video è attiva.\n• Le richieste di siti e le informazioni necessarie per gestirle.\n\n### Posizione e sicurezza\n\n• La posizione del dispositivo, la cronologia della posizione, i luoghi salvati dal genitore e gli avvisi generati quando il dispositivo arriva in uno di essi o se ne allontana.\n• Gli avvisi SOS, i Check-in di sicurezza e la foto che il bambino invia con essi, e fino a 15 secondi di audio registrati quando il bambino invia un SOS da un telefono o un tablet con il microfono consentito.\n• Il nome e l’indirizzo email dei contatti fidati aggiunti dal genitore, in modo che KidGate possa inviare loro via email ciascun SOS.\n\n### Messaggi e ricerche\n\n• Gli avvisi generati quando un messaggio o una ricerca corrisponde a un elenco di parole chiave attivato dal genitore. Il funzionamento è descritto nella sezione 3.\n\n### Report, assistenza e pagamenti\n\n• Le richieste di tempo extra, i compiti premio e i totali settimanali di stelle nella tabella delle stelle.\n• Il report settimanale che riassume questi dati.\n• I messaggi inviati all’assistenza e le eventuali schermate allegate.\n• Le segnalazioni di arresto anomalo e la diagnostica tecnica.\n• I dati sulle transazioni di abbonamento forniti da uno store di app.\n\nKidGate non chiede il nome reale di un bambino quando una funzione non ne ha bisogno.',
      },
      {
        title: '3. Ciò che resta sul dispositivo del bambino',
        body: '### Monitoraggio dei messaggi e delle ricerche\n\nIl monitoraggio dei messaggi viene eseguito sul dispositivo Android stesso. Il monitoraggio delle ricerche viene eseguito sul dispositivo Android e nell’estensione per browser KidGate. Entrambi funzionano solo quando il genitore li attiva.\n\nIl dispositivo confronta il testo con elenchi di parole chiave conservati localmente. Quando c’è una corrispondenza, ciò che viene inviato è un avviso che indica la parola o la breve frase rilevata, la sua categoria, l’app o il motore di ricerca in cui è comparsa e l’ora. Il messaggio o la ricerca in sé, il resto della conversazione e l’identità dell’interlocutore non vengono trasmessi né conservati da KidGate.\n\n### Conferma con IA\n\nÈ l’unica eccezione e richiede un consenso separato del genitore. Quando è attiva, un messaggio in arrivo la cui corrispondenza è risultata ambigua viene inviato al modello Gemini di Google per essere valutato, in modo che il genitore non riceva un avviso per una parola comune. Prima dell’invio, indirizzi email, numeri di telefono e indirizzi web presenti nel messaggio vengono mascherati; il resto del testo viene comunque inviato e può ancora contenere informazioni private.\n\nKidGate conserva soltanto il verdetto e non conserva il messaggio una volta terminata la valutazione. Il modo in cui Google Cloud tratta i dati ricevuti è descritto nella sezione 5. Il testo scritto dal bambino non viene mai inviato per la conferma con IA, qualunque sia il consenso prestato dalla famiglia.\n\n### Web e video\n\nKidGate registra il dominio richiesto da un dispositivo e se sia stato bloccato. KidGate non registra l’indirizzo completo di una pagina né il suo contenuto, salvo quale video è stato riprodotto quando la cronologia dei video è attiva. I file, le foto e la navigazione che nessuna funzione attiva ha bisogno di leggere restano sul dispositivo.\n\n### Registrazione audio durante l’invio di un SOS\n\nIl microfono serve a una cosa sola: quando il bambino invia un SOS da un telefono o un tablet con il microfono consentito, vengono registrati fino a 15 secondi di audio, inviati con l’avviso. Al di fuori di quel momento KidGate non registra nulla, nessuno ascolta in diretta e il genitore non può avviare una registrazione a distanza.\n\n### Filtro web e DNS\n\nSu iPhone, iPad, telefoni Android e Android TV, il Filtro web è una VPN che funziona sul dispositivo stesso. Questa VPN non fa passare il traffico dai server di KidGate: riceve solo le richieste dei nomi dei siti del dispositivo, rifiuta quelle bloccate e passa le altre a un server DNS che risponde.\n\n• Su iPhone e iPad: 1.1.1.1 di Cloudflare.\n• Su Android: il server DNS della rete in uso o, se non risponde, Google Public DNS.\n\nSu un telefono o un tablet, prima di attivare la VPN per la prima volta, KidGate spiega che cosa vede e chiede il permesso. Ciò che la VPN rileva serve solo a filtrare e a mostrare alla famiglia la sua cronologia web; non viene mai venduto, non viene usato per altri scopi e arriva ai fornitori della sezione 7 solo nella misura necessaria a far funzionare il servizio.',
      },
      {
        title: '4. Come vengono utilizzati i dati',
        body: 'KidGate utilizza i dati per:\n\n• Autenticare gli account e abbinare i dispositivi.\n• Fornire i controlli parentali e sincronizzare le impostazioni tra i dispositivi.\n• Inviare avvisi, mostrare la cronologia delle attività e generare report.\n• Gestire abbonamenti e transazioni.\n• Proteggere gli account e prevenire frodi o abusi.\n• Risolvere i problemi, assistere gli utenti e migliorare l’affidabilità.\n\nKidGate non vende dati personali e non utilizza i dati dei minori per la pubblicità comportamentale. In nessuna app KidGate è presente pubblicità.',
      },
      {
        title: '5. Trattamento automatizzato e IA',
        body: 'KidGate utilizza i modelli Gemini di Google, raggiunti tramite Google Cloud, per tre scopi:\n\n• Riepilogo del report settimanale: un riepilogo testuale generato a partire dai dati di utilizzo della famiglia stessa.\n• Classificazione di app e domini: li assegna alle categorie usate dal Filtro web e dagli elenchi di app. Il risultato è conservato in una tabella condivisa che registra solo un dominio e la sua categoria, non quale famiglia lo abbia visitato.\n• Conferma con IA: valuta alcuni messaggi in arrivo la cui corrispondenza è risultata ambigua, solo quando il genitore vi ha acconsentito, nel modo descritto nella sezione 3.\n\nQuesti modelli possono sbagliare. Una categoria, una frase di riepilogo o un avviso su un messaggio sono un invito per il genitore a verificare, non un accertamento di fatto, e su tale base KidGate non adotta alcuna decisione che produca effetti giuridici o similmente significativi su un minore.\n\nIn base ai termini di Google Cloud, Google non utilizza i dati che KidGate invia tramite questo servizio per addestrare i propri modelli. Google può comunque conservare temporaneamente i dati secondo i meccanismi operativi e di sicurezza di quel servizio, quindi il fatto che KidGate non conservi un messaggio non significa che ogni copia presso il fornitore scompaia immediatamente.',
      },
      {
        title: '6. Basi giuridiche e consenso',
        body: 'In base alla legge applicabile, KidGate tratta i dati per fornire i servizi richiesti, adempiere a obblighi di legge, tutelare legittimi interessi di sicurezza, oppure sulla base del consenso, ove richiesto dalla legge. I genitori sono responsabili di fornire le informative necessarie e di ottenere i consensi necessari per il minore o per l’utente del dispositivo.\n\nIl monitoraggio dei messaggi e la conferma con IA sono due consensi separati, che possono essere revocati in qualsiasi momento:\n\n• Il monitoraggio dei messaggi si attiva per singolo dispositivo.\n• La conferma con IA viene accettata una sola volta per tutta la famiglia, e KidGate registra chi l’ha accettata e quando.',
      },
      {
        title: '7. Fornitori di servizi',
        body: 'KidGate utilizza i seguenti fornitori per far funzionare il servizio. Ciascuno riceve solo ciò che serve al suo compito.\n\n• Google Cloud e Firebase: autenticazione, database, archiviazione dei file, funzioni server, notifiche push tramite Firebase Cloud Messaging, report sugli arresti anomali tramite Firebase Crashlytics e i modelli Gemini indicati nella sezione 5.\n• Apple e Google: trattano acquisti, rinnovi e rimborsi degli abbonamenti tramite i rispettivi store di app.\n• Google Analytics: le misurazioni descritte nella sezione 8.\n• HERE Technologies: trasforma la posizione segnalata da un dispositivo in un indirizzo e disegna le tessere della mappa nelle schermate della posizione, quindi riceve le coordinate segnalate dal dispositivo.\n• Resend: recapita le email che KidGate invia, tra cui gli avvisi SOS ai contatti fidati e il report settimanale.\n• Cloudflare: distribuisce i programmi di installazione per computer e, su iPhone e iPad, risponde alle richieste dei nomi dei siti che il Filtro web lascia passare, quindi riceve quei nomi di dominio.\n• unpkg: rete di distribuzione dei contenuti che fornisce la libreria delle mappe alle app genitore.\n\nI dati vengono comunicati a questi fornitori solo nella misura necessaria a fornire, mantenere e proteggere il servizio; alle autorità quando richiesto per legge; oppure per prevenire rischi di sicurezza, frode o abuso. I fornitori hanno propri obblighi e proprie informative per i dati che trattano, e nessuno di essi è autorizzato da KidGate a utilizzare i dati dei minori per finalità di marketing proprie.',
      },
      {
        title: '8. Statistiche e cookie',
        body: '### Sito kidgate.app\n\nIl sito misura con Google Analytics le visite alle pagine e i clic su ciascun link di download per computer. L’archiviazione analitica è rifiutata per impostazione predefinita, quindi non viene impostato alcun cookie analitico e nulla viene memorizzato nel browser di chi legge; ogni visita viene conteggiata a partire da una richiesta senza cookie, con l’indirizzo IP troncato. Google Signals e gli identificativi pubblicitari sono disattivati, e KidGate non invia tramite questo meccanismo nulla che identifichi chi legge o una famiglia.\n\n### App KidGate\n\nLe app KidGate inviano alla stessa proprietà un numero ristretto di eventi per sapere quali funzioni vengono usate. Tali eventi contengono un identificativo dell’installazione dell’app. Non è l’identificativo pubblicitario del dispositivo, che le app non raccolgono, ma distingue comunque un’installazione da un’altra, quindi questi dati non sono del tutto anonimi. Gli eventi non contengono mai il nome di un bambino, i suoi messaggi, la sua posizione o la sua navigazione.\n\nLe app e il sito non utilizzano alcuna rete pubblicitaria o di tracciamento.',
      },
      {
        title: '9. Dove sono conservati i dati e come sono protetti',
        body: 'I dati della famiglia sono conservati nella regione di Singapore di Google Cloud e possono essere trattati altrove dai fornitori indicati nella sezione 7, il che significa che possono uscire dal Paese in cui la famiglia vive.\n\nKidGate adotta ragionevoli misure di sicurezza tecniche e organizzative, tra cui:\n\n• Controlli degli accessi e principi del privilegio minimo.\n• Regole lato server che limitano ogni lettura a una sola famiglia.\n• Trasmissione sicura dei dati.\n• Il PIN genitore, conservato solo come hash unidirezionale, che non può essere riletto.\n\nNessun sistema è completamente sicuro; KidGate non può garantire che i dati non vengano mai persi, che non vi si acceda senza autorizzazione o che il servizio non subisca interruzioni.',
      },
      {
        title: '10. Accesso del personale KidGate per l’assistenza',
        body: '### Quando\n\nSolo quando è necessario per gestire una richiesta di assistenza o diagnosticare un guasto, e solo da parte del personale autorizzato da KidGate, con accesso tramite autenticazione a due fattori.\n\n### Che cosa vede e può fare\n\nQuando apre un account famiglia, il membro del personale vede esattamente ciò che vede il genitore: la configurazione, i dispositivi e l’attività all’interno dell’account, inclusi la cronologia della posizione, la cronologia web, gli avvisi sui messaggi e le foto allegate a un SOS o a un Check-in. Può inoltre modificare le impostazioni e inviare comandi ai dispositivi come il genitore.\n\n### Che cosa viene registrato\n\n• Ogni apertura di un account famiglia scrive una riga nel registro delle attività di quella famiglia, visibile ai genitori, con l’ora e la richiesta di assistenza a cui si riferisce.\n• Ogni lettura dei dati di una famiglia tramite gli strumenti del gestore viene registrata con l’ora e il motivo dichiarato.\n• Le singole azioni compiute durante una sessione di assistenza, come modificare un’impostazione o inviare un comando, oggi non vengono registrate separatamente.',
      },
      {
        title: '11. Per quanto tempo vengono conservati i dati',
        body: 'I termini indicati di seguito sono il meccanismo di conservazione di KidGate. I fornitori della sezione 7 possono trattare o conservare i dati secondo i propri termini.\n\n### Eliminazione automatica dopo un termine\n\n• 30 giorni: il Tempo di utilizzo e l’utilizzo per app, la cronologia web, la cronologia dei video, la cronologia della posizione e il registro delle attività.\n• 90 giorni: gli avvisi SOS e i Check-in di sicurezza, con le relative foto e registrazioni audio; le richieste di tempo extra.\n• 365 giorni: i report settimanali.\n• 90 giorni dopo la risoluzione della richiesta: le richieste di assistenza, le risposte e le eventuali schermate allegate.\n• 12 mesi dal completamento dell’eliminazione dell’account: una traccia del fatto che l’eliminazione è stata richiesta e completata, che contiene solo un hash dell’indirizzo email e le date, in modo da poter rispondere a una contestazione sull’eliminazione.\n\nI codici di abbinamento scadono nel giro di pochi minuti. Un accesso dal browser dura 7 giorni se concesso dall’app, oppure 8 ore se sbloccato con il PIN genitore.\n\n### Conservati fino all’eliminazione dell’account famiglia\n\nI seguenti dati oggi non hanno una scadenza automatica propria:\n\n• L’account e le impostazioni della famiglia.\n• I luoghi salvati.\n• Le schede dei figli e dei dispositivi.\n• I compiti premio.\n• Le richieste di siti.\n• Le tabelle delle stelle e le classifiche settimanali del Tempo di utilizzo.\n• L’elenco delle app installate e delle estensioni del browser aggiunte.\n\n### Eccezioni\n\nAlcune registrazioni minime possono essere conservate più a lungo laddove richiesto dalla legge, dalle transazioni tramite lo store di app, da una contestazione sull’eliminazione o dalla prevenzione delle frodi, e solo nella misura necessaria a tale finalità.',
      },
      {
        title: '12. Eliminazione dell’account',
        body: 'Il genitore può richiedere l’eliminazione nelle Impostazioni oppure via email a support@kidgate.app dall’indirizzo email dell’account, come spiega kidgate.app/delete-account.\n\nLa richiesta resta in sospeso per 14 giorni e in questo periodo può essere annullata. Trascorsi i 14 giorni, l’account famiglia, ogni figlio e ogni dispositivo che vi appartengono e i file archiviati vengono eliminati, e anche l’accesso dell’account viene rimosso. L’eliminazione è definitiva e non è previsto alcun export successivo.\n\nIl completamento dell’eliminazione non significa che ogni registrazione correlata scompaia immediatamente: la traccia che conferma l’eliminazione e le eccezioni della sezione 11 restano conservate per il termine e nei limiti lì indicati.',
      },
      {
        title: '13. Diritti e scelte',
        body: 'In base alla legge applicabile, gli utenti possono richiedere l’accesso, la rettifica, la cancellazione o la limitazione del trattamento, opporsi al trattamento e revocare il consenso quando il trattamento si basa su di esso. Tali richieste, inclusa quella di una copia dei dati che KidGate conserva su una famiglia, vanno inviate a support@kidgate.app; oggi non è previsto alcun export in autonomia.\n\nIl monitoraggio dei messaggi e la conferma con IA possono essere disattivati in qualsiasi momento senza conseguenze per il resto del servizio.\n\nLe autorizzazioni relative a posizione, notifiche, fotocamera, microfono e dispositivo possono essere revocate dal sistema operativo. In tal caso, le funzionalità che ne dipendono si interromperanno o risulteranno incomplete, e KidGate lo segnala sullo schermo del genitore invece di mostrare un comando che non funziona più.',
      },
      {
        title: '14. Dati dei minori',
        body: 'KidGate tratta i dati dei minori solo secondo la configurazione e sotto la direzione dell’account genitore, nei limiti delle funzioni attivate dal genitore e dei permessi concessi. Qualora i dati di un minore siano stati forniti senza l’autorità o il consenso richiesti, KidGate potrà limitare l’account ed eliminare i dati dopo la relativa verifica.',
      },
      {
        title: '15. Incidenti relativi ai dati',
        body: 'Quando conferma un incidente di sicurezza relativo ai dati, KidGate valuterà l’incidente, adotterà ragionevoli misure di mitigazione e informerà gli utenti o le autorità quando richiesto per legge. I genitori devono proteggere i propri account, PIN e dispositivi e segnalare tempestivamente a KidGate eventuali accessi non autorizzati sospetti.',
      },
      {
        title: '16. Modifiche e contatti',
        body: 'La presente informativa può essere modificata al variare delle funzionalità o della normativa. Gli aggiornamenti sostanziali saranno comunicati nell’app o tramite un canale di distribuzione appropriato.\n\nLe richieste e le domande in materia di privacy vanno inviate a support@kidgate.app, l’indirizzo pubblicato anche nelle schede di KidGate sugli store di app.',
      },
    ],
  },
  termsOfService: {
    title: 'Termini di servizio',
    effectiveDate: 'In vigore dal 6 settembre 2026',
    intro:
      'Accedendo a KidGate o utilizzandolo, confermi di aver letto e di accettare i presenti termini. KidGate è il nome commerciale con cui viene gestito il servizio.',
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
        body: 'Per applicare una regola serve del software sul dispositivo a cui la regola si riferisce, e ogni piattaforma lo consente in modo diverso: il framework Tempo di utilizzo di Apple su iPhone e iPad, un servizio di accessibilità e un’autorizzazione di amministratore del dispositivo su Android, un servizio di accessibilità su Android TV, un’estensione di sistema e un agente in background su macOS, un servizio in background su Windows e un’estensione del browser in Chrome. Sei tu a installarlo, su un dispositivo che hai il diritto di gestire, e puoi rimuoverlo in qualsiasi momento da quel dispositivo. La rimozione, o la revoca di un permesso da cui dipende, interrompe l’applicazione delle regole su quel dispositivo: KidGate ti segnalerà che è accaduto, ma non può impedirlo.',
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
        body: 'Una prova gratuita con accesso completo inizia quando vengono abbinati il primo dispositivo genitore e il primo dispositivo del bambino e dura per il periodo indicato nell’app. Al termine, le regole che hai configurato continuano a funzionare senza pagamento su un dispositivo del bambino — Limite giornaliero, Orari di blocco, App bloccate, limiti per singola app, il Filtro web, la ricerca sicura, il Blocco dispositivo, le richieste di tempo extra e i compiti premio — e un genitore può ancora chiedere a quel dispositivo la sua posizione attuale un numero limitato di volte al giorno. SOS non è mai a pagamento. L’attività in tempo reale, la cronologia, i report settimanali, il tracciamento della posizione, gli indirizzi, gli avvisi sui luoghi e il monitoraggio dei messaggi diventano parte di Premium. Quando una famiglia ha più dispositivi dei figli di quanti ne copra il piano, i dispositivi eccedenti vengono messi in pausa: continuano ad applicare le regole già impostate, tali regole possono essere allentate ma non inasprite, e smettono di inviare attività. Scegli tu quale dispositivo resta monitorato, e questa scelta può essere cambiata una volta ogni sette giorni. La rimozione di un dispositivo del bambino non fa ripartire la prova. Una famiglia può avere abbinati contemporaneamente un numero limitato di dispositivi dei figli; il numero dipende dal piano, e l’app lo indica quando viene raggiunto.',
      },
      {
        title: '8. Abbonamenti e pagamenti',
        body: 'Acquisti, rinnovi, cancellazioni e rimborsi sono gestiti secondo i termini di Apple App Store o Google Play, e un abbonamento può essere acquistato o ripristinato soltanto dall’app KidGate per iPhone, iPad o Android — una famiglia i cui dispositivi sono tutti computer, televisori o Chromebook ha bisogno di uno di questi per pagare. Un solo abbonamento copre tutta la famiglia e soltanto il proprietario della famiglia può acquistarlo o ripristinarlo; un acquisto tentato dall’account di un altro genitore viene rifiutato. I piani mensili e annuali si rinnovano automaticamente salvo disdetta tramite lo store almeno 24 ore prima della fine del periodo. L’acquisto una tantum non si rinnova, copre il numero di dispositivi dei figli indicato nell’app e vale finché KidGate è disponibile; la sezione 12 spiega che cosa accade se ciò dovesse finire. I prezzi e le caratteristiche dei piani possono cambiare previo avviso richiesto dalla legge e dalle regole degli store.',
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
        body: 'Il servizio può essere modificato, sospeso o interrotto per manutenzione, sicurezza, cambiamenti della piattaforma, obblighi di legge o esigenze operative. KidGate può essere interrotto; in tal caso, gli abbonamenti attivi e l’acquisto una tantum saranno gestiti secondo le regole applicabili dello store di app — l’acquisto una tantum compra il servizio finché viene offerto, non la promessa che sarà offerto per sempre. KidGate punta a una disponibilità ragionevole, ma non garantisce un funzionamento ininterrotto, privo di errori o compatibile con ogni dispositivo.',
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
        body: 'Puoi interrompere l’utilizzo del servizio e richiedere la cancellazione dell’account. La cancellazione resta in sospeso per 14 giorni e in questa finestra può essere annullata; trascorso tale termine, l’account famiglia e i suoi dati vengono rimossi definitivamente. KidGate può sospendere o interrompere il servizio in caso di violazioni, rischi per la sicurezza o richieste legali. Le parti dovranno anzitutto tentare in buona fede di risolvere le controversie, a partire da un’email a support@kidgate.app. I presenti termini sono regolati dalle leggi del Vietnam e le controversie sono devolute ai tribunali competenti del Vietnam, salvo che le norme inderogabili a tutela dei consumatori del Paese in cui vivi ti diano diritto a una legge o a un foro diversi.',
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
        body: 'I presenti termini possono essere aggiornati. Le modifiche sostanziali saranno comunicate in modo appropriato; il proseguimento dell’utilizzo dopo la data di entrata in vigore comporta l’accettazione dei termini aggiornati ove consentito dalla legge. Le domande vanno inviate a support@kidgate.app.',
      },
    ],
  },
} as const;
