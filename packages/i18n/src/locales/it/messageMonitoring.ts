export const messageMonitoring = {
  actionTitle: 'Avvisi messaggi',
  actionDescription:
    'Ricevi un avviso quando nei messaggi compaiono parole preoccupanti',
  title: 'Avvisi messaggi',
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
  setupTitle: 'Sicurezza dei messaggi',
  setupBody:
    'Controlla i messaggi per parole preoccupanti. KidGate non mostra mai il messaggio, solo un avviso se compare qualcosa di preoccupante.',
  setupGrant: 'Consenti accesso alle notifiche',
  setupEnable: 'Sicurezza dei messaggi',
  controlledByParentHint:
    'Si attiva o si disattiva dall’app KidGate sul telefono del genitore, non da qui.',
  parentIncomingLabel: 'Controlla i messaggi ricevuti',
  parentOutgoingLabel: 'Controlla i messaggi scritti',
  parentToggleHintGranted: 'Su questo telefono.',
  parentToggleHintNotGranted:
    'Non ancora consentito su questo telefono: apri KidGate sul suo dispositivo per concederlo.',
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
  alertBodyIncoming: 'Messaggio dall’app',
  alertBodyOutgoing: 'Messaggio inviato dall’app',
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
} as const;
