export const appInventory = {
  title: 'App su questo dispositivo',
  pendingTitle: 'In attesa della tua approvazione',
  pendingBadge: 'Bloccata finché non la consenti',
  approvedBadge: 'Consentita da te',
  installedAtLabel: 'Installata {{when}}',
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
  firstScanNote:
    'Questa è la prima scansione, quindi KidGate non può dire quando siano arrivate.',
  newBadge: 'Nuova',
  ageBadge: '{{age}}+',
  browserExtension: 'Estensione Chrome',
  titleExtension: 'Estensioni in questo browser',
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
    'Apple non permette a nessuna app di leggere cosa è installato su un iPhone o iPad, perciò KidGate può segnalare le app solo mentre vengono usate.',
  unsupportedGeneric: 'Questo dispositivo non segnala le app installate su di esso.',
  incompleteNote:
    'Un’app senza icona nella schermata iniziale potrebbe non comparire qui.',
  blockHint: 'Per fermare un’app, apri App bloccate sul dispositivo stesso.',
  howItWorksLabel: 'Come funziona questo elenco',
  markSafe: 'Sicura',
  dismissedTitle: 'Contrassegnate come sicure da te',
  undoSafe: 'Annulla',
  howToBlock: 'Come bloccare',
} as const;
