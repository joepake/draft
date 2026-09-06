export const appInventory = {
  title: 'Apps on this device',
  pendingTitle: 'Waiting for your approval',
  pendingBadge: 'Blocked until you allow it',
  approvedBadge: 'Allowed by you',
  installedAtLabel: 'Installed {{when}}',
  allowApp: 'Allow',
  subtitle: 'Everything KidGate found installed, not only what changed.',
  summaryFlagged: '{{flagged}} of {{total}} apps are worth a look',
  summaryClear: 'Nothing flagged among {{total}} apps',
  flaggedTitle: 'Worth a look',
  otherTitle: 'Everything else',
  scannedLabel: 'Last scan',
  staleNote: 'This list is out of date. It refreshes when the device next checks in.',
  truncatedNote: 'Showing {{shown}} of {{total}} apps found.',
  firstScanNote:
    'This is the first scan, so KidGate cannot say when any of these arrived.',
  newBadge: 'New',
  ageBadge: '{{age}}+',
  browserExtension: 'Chrome extension',
  titleExtension: 'Extensions in this browser',
  subtitleExtension:
    'Everything KidGate found installed in the browser, not only what changed.',
  summaryFlaggedExtension:
    '{{flagged}} of {{total}} Chrome extensions are worth a look',
  summaryClearExtension: 'Nothing flagged among {{total}} Chrome extensions',
  incompleteNoteExtension:
    'Only browser extensions are listed here — apps installed on the machine itself are invisible to a browser.',
  blockHintExtension:
    'To remove an extension, open the browser’s own extensions page on that device.',
  emptyTitleExtension: 'Nothing scanned yet',
  emptySubtitleExtension:
    'The browser publishes its extension list the next time it checks in.',
  emptyTitle: 'Nothing scanned yet',
  emptySubtitle: 'The device publishes its app list the next time it checks in.',
  unsupportedTitle: 'This device cannot list its apps',
  unsupportedIos:
    'Apple does not let any app read what is installed on an iPhone or iPad, so KidGate can only report apps as they are used.',
  unsupportedGeneric: 'This device does not report the apps installed on it.',
  incompleteNote: 'An app with no icon on the home screen may not appear here.',
  blockHint: 'To stop an app, open Blocked Apps on the device itself.',
  howItWorksLabel: 'How this list works',
  markSafe: 'Safe',
  dismissedTitle: 'Marked safe by you',
  undoSafe: 'Undo',
  howToBlock: 'How to block',
} as const;
