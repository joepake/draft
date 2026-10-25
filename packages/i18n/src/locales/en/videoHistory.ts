export const videoHistory = {
  title: 'Videos watched',
  fallbackDeviceName: 'Child device',
  toggleLabel: 'Record watched videos',
  toggleHint:
    'YouTube on Android phones and TV, and in Chrome with the KidGate extension.',
  // The header's ⓘ: what the switch's one line leaves out.
  tvShortsInfo:
    'On a TV, Shorts are not listed, because the YouTube TV app does not identify them as Shorts.',
  toggleFailed: 'Unable to update video history. Try again.',
  unsupportedNote:
    'This device cannot report watched videos. It works on Android, Android TV and in Chrome.',
  // An Android TV whose notification-access grant is missing (it publishes
  // `videoHistory: false`). `TV_SETUP_STEPS` has no step that asks for the grant,
  // so no screen on the TV can give it yet (`videoHistoryUnavailableKey`).
  unsupportedNoteTv:
    'This TV is not recording watched videos. KidGate needs notification access on it, which cannot be granted from a TV screen yet.',
  unsupportedNeedsExtension:
    'KidGate on this computer cannot see which videos are watched — it reads site names, not what is inside a page. The KidGate extension for Chrome can: add it on this computer and it reports watched videos as a device of its own.',
  viaExtension: 'Via extension',
  extensionGuideTitle: 'Set it up in Chrome',
  extensionStepOpenChrome: 'Open Chrome on this computer',
  extensionStepStore: 'Go to the Chrome Web Store',
  extensionStepSearch: 'Search for “KidGate”',
  extensionStepInstall: 'Click “Add to Chrome”',
  extensionStepConnect:
    'Open KidGate in Chrome and connect it — it shows up as a device of its own',
  extensionStepEnable: 'Turn on “Record watched videos” for that device',
  emptyTitle: 'Nothing watched yet',
  emptyBody: 'Videos appear here once your child watches with KidGate running.',
  viewsMeta_one: '{{count}} time',
  viewsMeta: '{{count}} times',
  dayToday: 'Today',
  dayYesterday: 'Yesterday',
  dayCount_one: '{{count}} video',
  dayCount: '{{count}} videos',
  heroVideos: 'Videos',
  heroChannels: 'Channels',
  heroViews: 'Plays',
  emptyStepEnable: 'Turn on recording',
  emptyStepWatch: 'Your child watches YouTube',
  emptyStepAppear: 'Videos show up here',
  unknownChannel: 'Unknown channel',
  heroTopChannel: 'Most watched',
  readerLayoutChanged:
    'Shorts are not being recorded on this device right now — the YouTube app has changed and KidGate needs an update. Other videos are still recorded.',
  // An Android phone whose notification-access grant is missing: the reader
  // needs it to see what is playing (`videoHistoryAwaitingGrant`).
  grantNeeded:
    'Not recording yet: KidGate needs notification access on your child’s phone. On that phone, open KidGate Settings, select Unlock with Parent PIN, then Allow notification access under Message Alerts.',
  openAction: 'Open on YouTube',
  searchAction: 'Search YouTube for this video',
  openFailed: 'Unable to open YouTube. Try again.',
};
