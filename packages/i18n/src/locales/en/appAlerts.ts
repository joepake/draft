export const appAlerts = {
  fallbackDeviceName: 'Child device',
  heroTitle: 'Watch app installs and removals',
  heroSubtitle:
    'KidGate monitors app installs and uninstalls on this device and records them in Activities.',
  statusOn: 'Monitoring on',
  statusInventory: 'Lists installed apps',
  statusOff: 'Unavailable',
  emptyTitle: 'No app changes yet',
  emptySubtitle:
    'When your child installs or removes an app, the event appears here and in Activities.',
  infoTitle: 'How it works',
  infoLine1: 'The child device reports app install and uninstall events to KidGate.',
  infoLine2:
    'Parents receive a push notification whenever an app is installed or removed.',
  infoLine3: 'Review the list here, then block risky apps from Blocked Apps.',
  // A browser-extension row: the events are Chrome extensions, not apps, and
  // the Chrome extension itself watches for them (`apps/extension`).
  heroTitleExtension: 'Watch extension installs and removals',
  heroSubtitleExtension:
    'KidGate monitors extension installs and removals in the Chrome profile it is installed in and records them in Activities.',
  emptyTitleExtension: 'No extension changes yet',
  emptySubtitleExtension:
    'When your child installs or removes a Chrome extension, the event appears here and in Activities.',
  infoLine1Extension:
    'The KidGate extension reports other extensions being installed or removed in Chrome.',
  infoLine2Extension:
    'Parents receive a push notification whenever an extension is installed or removed.',
  recentTitle: 'Recent changes',
  statInstalled: 'Installed',
  statRemoved: 'Removed',
  pendingBadge: 'Blocked until you allow it',
  approvedBadge: 'Allowed',
  allowApp: 'Allow',
} as const;
