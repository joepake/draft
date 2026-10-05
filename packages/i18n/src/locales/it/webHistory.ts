export const webHistory = {
  title: 'Cronologia web',
  fallbackDeviceName: 'Dispositivo del bambino',
  syncNote:
    'La cronologia web può richiedere fino a circa 15 minuti per comparire in questa schermata — più a lungo se il dispositivo non ha connessione a Internet o si è chiuso in modo imprevisto.',
  syncNoteTv:
    'Questa TV si collega solo periodicamente, quindi la cronologia web può richiedere fino a un’ora per comparire in questa schermata — più a lungo senza connessione a Internet.',
  summarySites: 'Siti visti',
  summaryBlocked: 'Siti bloccati',
  sourceNoteFilter:
    'Questi dati vengono dal filtro di KidGate: i siti che questo dispositivo ha interrogato, non ogni pagina aperta.',
  backgroundNote:
    'Quando nessuno usa il dispositivo, alcune app continuano ad accedere a Internet in background: aggiornamenti, consigli e collegamenti automatici avvengono da soli.',
  sourceNoteExtension:
    'In questo browser KidGate vede le pagine davvero aperte: solo questo browser, non il resto del computer.',
  filterOffNoteAndroid:
    'Il Filtro web è disattivato, quindi questo dispositivo non registra né blocca nulla. Attivalo per vedere quali siti visita.',
  filterOffNoteMacos:
    'Il filtro web è disattivato, quindi questo Mac non registra né blocca nulla. Attivalo per vedere dove va.',
  filterAll: 'Tutti i siti',
  filterBlocked: 'Solo bloccati',
  emptyTitle: 'Ancora nessun dato',
  emptyBody:
    'I siti compaiono qui quando il dispositivo del bambino naviga con KidGate attivo.',
  emptyBlockedBody: 'Non è ancora stato bloccato nulla.',
  dayBlockedBadge: '{{count}} bloccati',
  visitsMeta: '{{count}} visite',
  visitsMeta_one: '{{count}} visita',
  blockedMeta: '{{category}} · Bloccato {{count}} volte',
  blockedMeta_one: '{{category}} · Bloccato una volta',
  categoryUnknown: 'Elenco bloccati',
  sectionUncategorized: 'Altri siti',
  blockCategory: 'Blocca {{category}}',
  blockCategoryConfirmTitle: 'Bloccare {{category}}?',
  blockCategoryConfirmBody:
    'Ogni sito che KidGate classifica come {{category}} verrà rifiutato su questo dispositivo. Puoi disattivarlo di nuovo nel Filtro web.',
  blockCategoryConfirmAction: 'Blocca',
  blockCategoryDone: '{{category}} ora è bloccato.',
  unblockCategory: 'Sblocca {{category}}',
  unblockCategoryConfirmTitle: 'Sbloccare {{category}}?',
  unblockCategoryConfirmBody:
    'I siti che KidGate classifica come {{category}} torneranno raggiungibili su questo dispositivo.',
  unblockCategoryConfirmAction: 'Sblocca',
  unblockCategoryDone: '{{category}} non è più bloccato.',
  serviceSites: '{{count}} siti',
  serviceSites_one: '{{count}} sito',
  serviceNote:
    'I siti che un servizio carica da sé sono raccolti in una riga: aprire YouTube una volta ne raggiunge diversi. Tocca una riga per vederli.',
  showMoreDays: 'Mostra altri {{count}} giorni',
  showMoreDays_one: 'Mostra 1 altro giorno',
  rollupTitle: 'Visite per tipo di sito',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Richieste di siti, non minuti: un video lungo ne fa poche, dieci minuti di navigazione ne fanno decine.',
  rollupNoteAi:
    'Alcuni tipi sono stati dedotti dal nome del sito invece che riconosciuti, quindi qualcuno può essere sbagliato.',
  rollupNoteExtension:
    'Pagine, non minuti: un video lungo conta una volta, dieci minuti di navigazione contano decine.',
  hoursTitle: 'Quando ha navigato',
  hoursNote:
    'Pagine caricate per ora, sull’orologio del dispositivo. Una scheda lasciata aperta tutto il pomeriggio conta una volta.',
  hoursEmpty: 'Ancora nessuna pagina oggi.',
  sourceNoteChild:
    'Unito da {{count}} dispositivi. Ognuno registra solo ciò che vede il proprio filtro.',
  filterOffNoteChild:
    'Il filtro web è disattivato su tutti i dispositivi, quindi le nuove visite non vengono registrate.',
} as const;
