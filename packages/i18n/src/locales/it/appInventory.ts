export const appInventory = {
  pendingTitle: 'In attesa della tua approvazione',
  pendingBadge: 'Bloccata finché non la consenti',
  approvedBadge: 'Consentita da te',
  allowApp: 'Consenti',
  subtitle: 'Tutto ciò che KidGate ha trovato installato, non solo ciò che è cambiato.',
  summaryFlagged: '{{flagged}} app su {{total}} meritano un’occhiata',
  summaryClear: 'Nulla da segnalare tra {{total}} app',
  flaggedTitle: 'Meritano un’occhiata',
  otherTitle: 'Tutto il resto',
  scannedLabel: 'Ultima scansione',
  staleNote:
    'Questo elenco non è aggiornato. Si rinnoverà al prossimo collegamento del dispositivo.',
  truncatedNote: 'Vengono mostrate {{shown}} app su {{total}} trovate.',
  newBadge: 'Nuova',
  ageBadge: '{{age}}+',
  browserExtension: 'Estensione Chrome',
  subtitleExtension:
    'Tutte le estensioni che KidGate ha trovato nel browser, non solo le novità.',
  summaryFlaggedExtension:
    '{{flagged}} di {{total}} estensioni Chrome meritano un controllo',
  summaryClearExtension: 'Nulla di preoccupante tra {{total}} estensioni Chrome',
  incompleteNoteExtension:
    'Qui compaiono solo le estensioni del browser: le app installate sul computer non gli sono visibili.',
  blockHintExtension:
    'Per rimuovere un’estensione, apri la pagina delle estensioni del browser su quel dispositivo.',
  emptyTitleExtension: 'Nessuna scansione ancora',
  emptySubtitleExtension:
    'Il browser invierà l’elenco delle estensioni al prossimo collegamento.',
  emptyTitle: 'Nessuna scansione finora',
  emptySubtitle:
    'Il dispositivo pubblicherà il suo elenco di app al prossimo collegamento.',
  unsupportedTitle: 'Questo dispositivo non può elencare le sue app',
  unsupportedIos:
    'Apple non permette a nessuna app di leggere cosa è installato su un iPhone o iPad, e KidGate non può vedere nemmeno quali app vengono usate.',
  unsupportedGeneric: 'Questo dispositivo non segnala le app installate su di esso.',
  incompleteNote:
    'Alcune app potrebbero non comparire qui, ad esempio quelle senza icona nell’elenco delle app del dispositivo.',
  blockHint: 'Per fermare un’app, apri App bloccate sul dispositivo stesso.',
  howItWorksLabel: 'Come funziona questo elenco',
  markSafe: 'Contrassegna come sicura',
  dismissedTitle: 'Contrassegnate come sicure da te',
  undoSafe: 'Annulla',
  tabGeneral: 'Panoramica',
  searchPlaceholder: 'Cerca app',
  searchEmpty: 'Nessuna app corrisponde.',
  blockedBadge: 'Bloccata',
  setLimit: 'Imposta un limite di tempo',
  editLimit: 'Modifica il limite di tempo',
  howToBlock: 'Come bloccare',
  blockApp: 'Blocca',
  unblockApp: 'Sblocca',
  iosBlockOnDevice:
    'Su un iPhone, le app si bloccano direttamente dall’iPhone del bambino.',
} as const;
