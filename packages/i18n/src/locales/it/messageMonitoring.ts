export const messageMonitoring = {
  actionTitle: 'Avvisi messaggi',
  actionDescription:
    'Ricevi un avviso quando nei messaggi compaiono parole preoccupanti',
  title: 'Avvisi sui contenuti',
  heroTitle: 'Sicurezza dei messaggi',
  heroSubtitle:
    'KidGate segnala le parole preoccupanti nei messaggi di tuo figlio e ti avvisa. Non mostra mai il messaggio, solo la parola segnalata.',
  androidOnlyNote: 'Disponibile solo su dispositivi Android.',
  recentTitle: 'Avvisi recenti',
  emptyTitle: 'Ancora nessun avviso',
  emptySubtitle: 'Nessuna parola preoccupante rilevata nei messaggi.',
  emptySubtitleNotWatching:
    'I messaggi non vengono controllati in questo momento, quindi questo elenco resterà vuoto qualunque cosa accada.',
  flaggedTerm: 'Parola segnalata: «{{term}}»',
  flaggedTermPrefix: 'Parola segnalata: «',
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
    'KidGate non ha conservato il messaggio, solo questa parola. Il resto può arrivare solo da tuo figlio.',
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
      'Questo avviso arriva da un dispositivo o da un elenco di parole che questa versione non nomina più. La parola segnalata sopra è ciò su cui chiedere; del messaggio non è stato conservato nulla.',
  },
  setupTitle: 'Sicurezza dei messaggi',
  setupBody:
    'Controlla i messaggi per parole preoccupanti. KidGate non mostra mai il messaggio, solo un avviso se compare qualcosa di preoccupante.',
  setupGrant: 'Consenti accesso alle notifiche',
  setupEnable: 'Sicurezza dei messaggi',
  controlledByParentHint:
    'Si attiva o si disattiva dall’app KidGate sul telefono del genitore, non da qui.',
  parentIncomingLabel: 'Controlla i messaggi ricevuti',
  parentOutgoingLabel: 'Controlla i messaggi scritti',
  parentSearchLabel: 'Controlla le sue ricerche',
  parentSearchHint:
    'Browser e YouTube. Viene segnalata solo la parola trovata, mai la ricerca stessa.',
  parentToggleHintGranted: 'Su questo telefono.',
  parentToggleHintNotGranted:
    'Non ancora consentito su questo telefono: apri KidGate sul suo dispositivo per concederlo.',
  parentProfanityLabel: 'Segnala anche le parolacce',
  parentProfanityHint:
    'Disattivato di default — le parolacce comuni sono frequenti, questo le trasforma anch’esse in un avviso.',
  parentToggleSaveFailed: 'Impossibile salvare la modifica.',
  settingsTitle: 'Impostazioni avvisi messaggi',
  checkedTitle: 'Controllato, tutto a posto',
  checkedSubtitle:
    'Parole sorvegliate che sono comparse ma sono risultate innocue nel contesto, quindi non hai ricevuto avvisi. Le mostriamo qui perché tu veda cosa viene filtrato al posto tuo — segnalaci se qualcuna avrebbe dovuto raggiungerti.',
  consentTitle: 'Analisi dei messaggi con IA',
  consentBody:
    'Se attiva, i messaggi che una parola chiave segnala come dubbi vengono inviati — senza nomi, numeri e link — a un servizio di IA per confermare se sono davvero preoccupanti prima di avvisarti. Le parole ad alto rischio avvisano comunque subito senza inviare nulla.',
  consentEnable: 'Attiva analisi con IA',
  consentConfirmTitle: 'Attivare l’analisi dei messaggi con IA?',
  consentConfirmBody:
    'I messaggi dubbi, senza dati personali, saranno inviati a un servizio di IA per la verifica. Confermi di acconsentire a questo trattamento.',
  consentAgree: 'Accetto',
  outgoingTitle: 'Messaggi che scrivi',
  outgoingBody:
    'KidGate può controllare anche ciò che scrivi nelle app di chat. Cerca le stesse parole di allerta, su questo telefono. I tuoi messaggi non vengono mai inviati da nessuna parte.',
  outgoingEnable: 'Controlla ciò che scrivo',
  outgoingGrant: 'Consenti',
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
    'KidGate legge solo ciò che scrivi nelle app di messaggistica — mai in un’altra app e mai in un campo password. La ricerca delle parole di allerta avviene su questo telefono. I tuoi messaggi non vengono inviati da nessuna parte; solo la parola segnalata arriva ai tuoi genitori.',
  outgoingRestrictedHint:
    'Se l’interruttore è disattivato, apri Impostazioni › App › KidGate, tocca il menu ⋮ e scegli “Consenti impostazioni con restrizioni”, poi torna qui.',
  notice: {
    revokedTitle: 'Il controllo dei messaggi si è fermato',
    revokedBody:
      'Android ha disattivato un’autorizzazione che serve a KidGate, quindi i messaggi non vengono più controllati. Apri KidGate sul dispositivo di tuo figlio e concedila di nuovo.',
    offTitle: 'La sicurezza dei messaggi non è attiva',
    offBody:
      'Sul dispositivo non viene controllato nulla, quindi qui non può comparire alcun avviso. Apri KidGate sul suo dispositivo per configurarla.',
    pendingTitle: 'In attesa che il dispositivo lo applichi',
    pendingBody:
      'Hai attivato questa opzione. Il dispositivo la riceverà al prossimo collegamento, di solito entro pochi minuti — prima se il telefono è in uso. Non devi fare altro.',
    unknownTitle: 'In attesa del dispositivo',
    unknownBody:
      'Questo dispositivo non ha ancora comunicato se la sicurezza dei messaggi è attiva, quindi un elenco vuoto dice poco. Dovrebbe aggiornarsi al prossimo collegamento.',
    outgoingAvailableTitle: 'Controlla anche ciò che scrive',
    outgoingAvailableBody:
      'I messaggi ricevuti vengono già controllati. KidGate può controllare anche ciò che tuo figlio scrive nelle app di messaggistica: bullismo e autolesionismo compaiono lì molto più spesso. Configuralo sul suo dispositivo.',
  },
  languagesLabel: 'Lingue analizzate',
  languagesHint:
    'Le lingue in cui questo dispositivo cerca parole preoccupanti. Scegline fino a {{max}}.',
  languagesDefaultHint: 'Per impostazione predefinita, la lingua del dispositivo.',
  setupStepFindKidGate:
    'Trova KidGate nell’elenco di accesso alle notifiche e attivalo. KidGate può comparire due volte: l’altra voce è quella degli avvisi chiamate notturne, quindi se al ritorno questo passaggio risulta ancora da fare, attiva l’altra.',
} as const;
