export const appInventory = {
  title: 'Apps auf diesem Gerät',
  pendingTitle: 'Wartet auf deine Genehmigung',
  pendingBadge: 'Blockiert, bis du sie erlaubst',
  approvedBadge: 'Von dir erlaubt',
  installedAtLabel: 'Installiert {{when}}',
  allowApp: 'Erlauben',
  subtitle:
    'Alles, was KidGate installiert vorgefunden hat – nicht nur, was sich geändert hat.',
  summaryFlagged: '{{flagged}} von {{total}} Apps sind einen Blick wert',
  summaryClear: 'Nichts auffällig unter {{total}} Apps',
  flaggedTitle: 'Einen Blick wert',
  otherTitle: 'Alles andere',
  scannedLabel: 'Letzter Scan',
  staleNote:
    'Diese Liste ist veraltet. Sie wird erneuert, sobald sich das Gerät das nächste Mal meldet.',
  truncatedNote: '{{shown}} von {{total}} gefundenen Apps werden angezeigt.',
  firstScanNote:
    'Dies ist der erste Scan – KidGate kann nicht sagen, wann diese Apps dazugekommen sind.',
  newBadge: 'Neu',
  ageBadge: 'ab {{age}}',
  browserExtension: 'Chrome-Erweiterung',
  titleExtension: 'Erweiterungen in diesem Browser',
  subtitleExtension:
    'Alle Erweiterungen, die KidGate im Browser gefunden hat – nicht nur die Änderungen.',
  summaryFlaggedExtension:
    '{{flagged}} von {{total}} Chrome-Erweiterungen sind einen Blick wert',
  summaryClearExtension: 'Nichts Auffälliges unter {{total}} Chrome-Erweiterungen',
  incompleteNoteExtension:
    'Hier stehen nur Browser-Erweiterungen – auf dem Gerät installierte Apps sieht ein Browser nicht.',
  blockHintExtension:
    'Zum Entfernen einer Erweiterung die Erweiterungsseite des Browsers auf diesem Gerät öffnen.',
  emptyTitleExtension: 'Noch nichts gescannt',
  emptySubtitleExtension:
    'Der Browser sendet seine Erweiterungsliste beim nächsten Kontakt.',
  emptyTitle: 'Noch nichts gescannt',
  emptySubtitle: 'Das Gerät veröffentlicht seine App-Liste beim nächsten Kontakt.',
  unsupportedTitle: 'Dieses Gerät kann seine Apps nicht auflisten',
  unsupportedIos:
    'Apple erlaubt keiner App zu lesen, was auf einem iPhone oder iPad installiert ist. KidGate kann Apps daher nur melden, während sie genutzt werden.',
  unsupportedGeneric: 'Dieses Gerät meldet die darauf installierten Apps nicht.',
  incompleteNote:
    'Eine App ohne Symbol auf dem Startbildschirm erscheint hier möglicherweise nicht.',
  blockHint: 'Um eine App zu stoppen, öffne „Blockierte Apps“ direkt auf dem Gerät.',
  howItWorksLabel: 'So funktioniert diese Liste',
  markSafe: 'Unbedenklich',
  dismissedTitle: 'Von dir als unbedenklich markiert',
  undoSafe: 'Rückgängig',
  howToBlock: 'So blockierst du',
} as const;
