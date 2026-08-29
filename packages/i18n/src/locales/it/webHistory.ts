export const webHistory = {
  title: 'Cronologia web',
  fallbackDeviceName: 'Dispositivo del bambino',
  syncNote:
    'La cronologia web può richiedere alcuni minuti per comparire in questa schermata — più a lungo se il dispositivo non ha connessione a Internet o si è chiuso in modo imprevisto.',
  syncNoteTv:
    'Questa TV si collega solo periodicamente, quindi la cronologia web può richiedere fino a 30 minuti per comparire in questa schermata — più a lungo senza connessione a Internet.',
  summarySites: 'Siti visti',
  summaryBlocked: 'Siti bloccati',
  sourceNoteIos:
    'Su iPhone questi dati vengono dal report Tempo di utilizzo di Apple: i siti su cui tuo figlio ha passato tempo, non ogni pagina aperta.',
  sourceNoteAndroid:
    'Su Android questi dati vengono dal filtro DNS di KidGate: i siti che questo telefono ha interrogato, non ogni pagina aperta.',
  sourceNoteMacos:
    'Su Mac questi dati vengono dal filtro di KidGate: i siti che questo Mac ha interrogato, non ogni pagina aperta.',
  sourceNoteExtension:
    'In questo browser KidGate vede le pagine davvero aperte: solo questo browser, non il resto del computer.',
  filterOffNoteAndroid:
    'Il filtro web è disattivato, quindi questo dispositivo non registra né blocca nulla. Attivalo per vedere dove va.',
  filterOffNoteMacos:
    'Il filtro web è disattivato, quindi questo Mac non registra né blocca nulla. Attivalo per vedere dove va.',
  filterOffNoteIos:
    'Il filtro web è disattivato, quindi non viene bloccato nulla. Questo elenco mostra solo dove è andato il telefono.',
  filterAll: 'Tutti i siti',
  filterBlocked: 'Solo bloccati',
  emptyTitle: 'Ancora nessun dato',
  emptyBody:
    'I siti compaiono qui quando il dispositivo del bambino naviga con KidGate attivo.',
  emptyBlockedBody: 'Non è ancora stato bloccato nulla.',
  dayBlockedBadge: '{{count}} bloccati',
  visitsMeta: '{{count}} visite',
  visitsMeta_one: '{{count}} visita',
  blockedMeta: 'Bloccato {{count}} volte · {{category}}',
  blockedMeta_one: 'Bloccato una volta · {{category}}',
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
    'Ricerche, non minuti: un video lungo ne fa poche, dieci minuti di navigazione ne fanno decine.',
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
