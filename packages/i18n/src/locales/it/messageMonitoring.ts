export const messageMonitoring = {
  actionTitle: 'Avvisi messaggi',
  actionDescription:
    'Ricevi un avviso quando nei messaggi compaiono parole preoccupanti',
  title: 'Avvisi messaggi',
  heroTitle: 'Avvisi messaggi',
  heroSubtitle:
    'KidGate segnala le parole preoccupanti nei messaggi e nelle ricerche di tuo figlio e ti avvisa. Vedi solo la parola o la frase segnalata, mai il messaggio né la ricerca.',
  androidOnlyNote:
    'I messaggi possono essere controllati solo sui dispositivi Android. Le ricerche possono essere controllate anche nell’estensione per Chrome.',
  searchOnlyNote:
    'Qui si possono controllare solo le ricerche. I messaggi possono essere controllati solo sui dispositivi Android.',
  recentTitle: 'Avvisi recenti',
  emptyTitle: 'Ancora nessun avviso',
  emptySubtitle: 'Nessuna parola preoccupante rilevata nei messaggi.',
  emptySubtitleNotWatching:
    'I messaggi non vengono controllati in questo momento, quindi questo elenco resterà vuoto qualunque cosa accada.',
  flaggedTerm: 'Segnalato: «{{term}}»',
  flaggedTermPrefix: 'Segnalato: «',
  flaggedTermSuffix: '»',
  flaggedTermMeaning: 'Significato: {{gloss}}',
  aiConfirmed: 'Confermato dall’IA',
  categoryPredator: 'Possibile adescamento',
  categorySelfHarm: 'Possibile autolesionismo',
  categoryExplicit: 'Contenuto esplicito',
  categoryViolence: 'Minaccia o violenza',
  categoryBullying: 'Bullismo',
  categoryDrugs: 'Droghe o sostanze',
  categoryAlcohol: 'Alcol',
  categoryTobacco: 'Tabacco o svapo',
  categoryGambling: 'Gioco d’azzardo',
  categoryProfanity: 'Linguaggio volgare',
  categoryUnknown: 'Messaggio segnalato',
  guidanceToggle: 'Cosa fare ora',
  guidanceHide: 'Nascondi',
  guidanceFooter:
    'KidGate non ha conservato il messaggio, solo questa parola o frase. Il resto può arrivare solo da tuo figlio.',
  guidance: {
    predator:
      'L’adescamento inizia quasi sempre in modo amichevole, da qualcuno che tuo figlio crede suo coetaneo. Chiedi con chi parla in questo periodo e come si sono conosciuti, prima di menzionare l’avviso: un ragazzo che si sente scoperto smette di rispondere.',
    selfHarm:
      'Parole così sono molto più spesso un segnale che un piano, e chiederlo direttamente non semina l’idea. Di’ che cosa hai visto e che non sei arrabbiato; se la risposta ti spaventa, chiama una linea di ascolto lo stesso giorno.',
    explicit:
      'Può essere qualcosa che gli è stato inviato, mostrato, o che ha scritto lui. Capisci quale prima di reagire: ricevere contenuti espliciti è una conversazione diversa dall’inviarli.',
    violence:
      'Una minaccia va presa sul serio anche quando sembra uno scherzo tra amici. Chiedi se viene da qualcuno della scuola; se sì, la scuola è la via più rapida per fermarla.',
    bullying:
      'I ragazzi raccontano queste cose molto raramente da soli, e le stesse parole compaiono sia che tuo figlio sia stato il bersaglio sia che abbia partecipato. Chiedi cosa è successo invece di chi ha colpa, e annota le date nel caso servano alla scuola.',
    drugs:
      'Una parola segnalata non prova alcun consumo: curiosità, canzoni e battute la fanno scattare allo stesso modo. Chiedi apertamente invece di perquisire la stanza; la cosa più importante è che continui a raccontarti le cose.',
    alcohol:
      'È comune nelle conversazioni tra adolescenti, quindi leggilo come contesto e non come prova. È un buon momento per dire con chiarezza qual è la tua regola, prima che una festa renda la cosa urgente.',
    tobacco:
      'Lo svapo si diffonde nel gruppo di amici ed è più sociale che segreto. Chiedi cosa usano i suoi amici: nominare la cosa precisa funziona meglio di un avvertimento generico.',
    gambling:
      'Loot box, pacchetti di carte e scommesse su oggetti contano, e a un ragazzo raramente sembrano gioco d’azzardo. Guarda cosa spende dentro i giochi prima di trattarlo come un problema di soldi.',
    profanity:
      'Le parolacce da sole sono comuni e non dicono quasi nulla sulla sicurezza. Se questi avvisi sono solo rumore per la tua famiglia, disattiva “Segnala anche le parolacce” nelle impostazioni di questa schermata.',
    unknown:
      'Questo avviso arriva da un dispositivo o da un elenco di parole che questa versione non nomina più. La parola o la frase segnalata sopra è ciò su cui chiedere; del messaggio non è stato conservato nulla.',
  },
  setupTitle: 'Avvisi messaggi',
  setupBody:
    'Quando i tuoi genitori attivano questa funzione, KidGate controlla i messaggi che ricevi cercando parole di allerta, direttamente su questo telefono. I tuoi genitori vedono solo una parola o una frase segnalata, mai i tuoi messaggi. Se attivano anche l’analisi dei messaggi con IA, un messaggio poco chiaro può essere inviato a un servizio di IA per essere verificato, dopo aver rimosso indirizzi email, numeri di telefono, link e @nomi utente.',
  setupGrant: 'Consenti accesso alle notifiche',
  setupEnable: 'Avvisi messaggi',
  controlledByParentHint:
    'Si attiva o si disattiva dall’app del genitore o dalla dashboard web, non da qui.',
  parentIncomingLabel: 'Controlla i messaggi ricevuti',
  parentOutgoingLabel: 'Controlla i messaggi scritti',
  parentSearchLabel: 'Controlla le sue ricerche',
  parentSearchHint:
    'Browser e YouTube. Viene segnalata solo la parola o la frase trovata, mai la ricerca stessa.',
  parentSearchHintNotGranted:
    'Richiede la stessa autorizzazione di “Controlla i messaggi scritti”. Attiva “Controlla i messaggi ricevuti”, poi concedila sul suo dispositivo.',
  parentToggleHintGranted: 'Su questo telefono.',
  parentToggleHintNotGranted:
    'Non ancora consentito su questo telefono: apri KidGate sul suo dispositivo per concederlo.',
  parentProfanityLabel: 'Segnala anche le parolacce',
  parentProfanityHint:
    'Disattivato di default — le parolacce comuni sono frequenti, questo le trasforma anch’esse in un avviso.',
  parentToggleSaveFailed: 'Impossibile salvare la modifica.',
  settingsTitle: 'Impostazioni Avvisi messaggi',
  checkedTitle: 'Controllato, tutto a posto',
  checkedSubtitle:
    'Parole sorvegliate che sono comparse ma sono risultate innocue nel contesto, quindi non hai ricevuto avvisi. Le mostriamo qui perché tu veda cosa viene filtrato al posto tuo — segnalaci se qualcuna avrebbe dovuto raggiungerti.',
  consentTitle: 'Analisi dei messaggi con IA',
  consentBody:
    'Se attiva, un messaggio in cui la parola segnalata potrebbe essere innocua, o corrispondere solo in modo approssimativo, viene inviato a un servizio di IA per confermare se è davvero preoccupante prima di avvisarti. Indirizzi email, numeri di telefono, link e @nomi utente vengono rimossi prima; i nomi e il resto del messaggio no. Una corrispondenza chiara avvisa subito senza inviare nulla.',
  consentEnable: 'Attiva analisi con IA',
  consentConfirmTitle: 'Attivare l’analisi dei messaggi con IA?',
  consentConfirmBody:
    'I messaggi dubbi saranno inviati a un servizio di IA per verificare se destano preoccupazione, dopo aver rimosso indirizzi email, numeri di telefono, link e @nomi utente. I nomi e il resto del messaggio non vengono rimossi. Confermi di acconsentire a questo trattamento.',
  consentAgree: 'Accetto',
  outgoingTitle: 'Messaggi che scrivi',
  outgoingBody:
    'KidGate può controllare anche ciò che scrivi nelle app di chat. Cerca le stesse parole di allerta, su questo telefono. I tuoi messaggi non vengono mai inviati da nessuna parte.',
  outgoingEnable: 'Controlla ciò che scrivo',
  directionIncoming: 'Ricevuto',
  directionOutgoing: 'Inviato',
  directionSearch: 'Cercato',
  alertBodyIncoming: 'Messaggio dall’app',
  alertBodyOutgoing: 'Messaggio inviato dall’app',
  alertBodySearch: 'Ricerca fatta su',
  aiLegend:
    'Un avviso con questa icona è stato confermato dall’IA prima di notificarti.',
  setupRevoked:
    'Android ha disattivato l’autorizzazione necessaria. Concedila di nuovo per continuare a controllare i messaggi.',
  outgoingRevoked:
    'Android ha disattivato questa funzione. Concedila di nuovo per continuare a controllare ciò che scrivi.',
  outgoingDisclosureTitle: 'Prima di consentire',
  outgoingDisclosureBody:
    'Con questa autorizzazione KidGate legge ciò che scrivi negli SMS e MMS e nelle app di chat, e lo controlla cercando le stesse parole di allerta. Se i tuoi genitori attivano gli avvisi sulle ricerche, legge anche ciò che scrivi nei browser, su YouTube e nell’app Google, come le ricerche. Non legge mai un campo password. Il controllo avviene su questo telefono. Quando una parola corrisponde, ai tuoi genitori arrivano solo quella parola o frase, la sua categoria, l’app e l’ora, mai il resto del messaggio o della ricerca. Se KidGate si arresta in modo anomalo, un log degli arresti anomali viene inviato al team di KidGate per risolvere il problema.',
  outgoingRestrictedHint:
    'Se l’interruttore è disattivato, apri Impostazioni › App › KidGate, tocca il menu ⋮ e scegli “Consenti impostazioni con restrizioni”, poi torna qui.',
  notice: {
    revokedTitle: 'Il controllo dei messaggi si è fermato',
    revokedBody:
      'Android ha disattivato un’autorizzazione che serve a KidGate, quindi i messaggi non vengono più controllati. Apri KidGate sul dispositivo di tuo figlio e concedila di nuovo.',
    offTitle: 'Gli Avvisi messaggi non sono attivi',
    offBody:
      'Sul dispositivo non viene controllato nulla, quindi qui non può comparire alcun avviso. Apri KidGate sul suo dispositivo per configurarla.',
    switchedOffBody:
      'Sul dispositivo di tuo figlio non viene controllato nulla, quindi qui non può comparire alcun avviso. Attiva “Controlla i messaggi ricevuti” nelle impostazioni di questa schermata.',
    pendingTitle: 'In attesa che il dispositivo lo applichi',
    pendingBody:
      'Hai attivato questa opzione. Il dispositivo la riceverà al prossimo collegamento, di solito entro pochi minuti — prima se il telefono è in uso. Non devi fare altro.',
    unknownTitle: 'In attesa del dispositivo',
    unknownBody:
      'Questo dispositivo non ha ancora comunicato se gli Avvisi messaggi sono attivi, quindi un elenco vuoto dice poco. Dovrebbe aggiornarsi al prossimo collegamento del dispositivo.',
    outgoingAvailableTitle: 'Controlla anche ciò che scrive',
    outgoingAvailableBody:
      'I messaggi ricevuti vengono già controllati. KidGate può controllare anche ciò che tuo figlio scrive nelle app di messaggistica: bullismo e autolesionismo compaiono lì molto più spesso. Configuralo sul suo dispositivo.',
    outgoingSwitchedOffBody:
      'I messaggi ricevuti vengono già controllati. KidGate può controllare anche ciò che tuo figlio scrive nelle app di messaggistica: bullismo e autolesionismo compaiono lì molto più spesso. Attiva “Controlla i messaggi scritti” nelle impostazioni di questa schermata.',
  },
  languagesLabel: 'Lingue analizzate',
  languagesHint:
    'Le lingue in cui questo dispositivo cerca parole preoccupanti. Scegline fino a {{max}}.',
  languagesDefaultHint: 'Per impostazione predefinita, la lingua del dispositivo.',
  setupStepFindKidGate: 'Attiva l’accesso alle notifiche per KidGate, poi conferma.',
} as const;
