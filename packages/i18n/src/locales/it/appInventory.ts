export const appInventory = {
  title: 'App su questo dispositivo',
  subtitle: 'Tutto ciò che KidGate ha trovato installato, non solo ciò che è cambiato.',
  summaryFlagged: '{{flagged}} app su {{total}} meritano un’occhiata',
  summaryClear: 'Nulla da segnalare tra {{total}} app',
  flaggedTitle: 'Meritano un’occhiata',
  otherTitle: 'Tutto il resto',
  unclassifiedTitle: 'Non ancora identificate',
  scannedLabel: 'Ultima scansione',
  staleNote:
    'Questo elenco non è aggiornato. Si rinnoverà al prossimo collegamento del dispositivo.',
  truncatedNote: 'Vengono mostrate {{shown}} app su {{total}} trovate.',
  firstScanNote:
    'Questa è la prima scansione, quindi KidGate non può dire quando siano arrivate.',
  newBadge: 'Nuova',
  ageBadge: '{{age}}+',
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
} as const;
