export const webHistory = {
  title: 'Web History',
  fallbackDeviceName: 'Child device',
  summarySites: 'Sites seen',
  summaryBlocked: 'Sites blocked',
  sourceNoteIos:
    'On iPhone this comes from Apple’s Screen Time report — the sites your child spent time on, not every page they opened.',
  sourceNoteAndroid:
    'On Android this comes from the KidGate filter — the sites this device looked up, not every page they opened.',
  filterOffNoteAndroid:
    'The Web Filter is off, so this phone is not recording or blocking anything. Turn it on to see where it goes.',
  filterOffNoteIos:
    'The Web Filter is off, so nothing is being blocked. This list only shows where the phone went.',
  filterAll: 'All sites',
  filterBlocked: 'Blocked only',
  emptyTitle: 'Nothing recorded yet',
  emptyBody: 'Sites appear here once the child device browses with KidGate running.',
  emptyBlockedBody: 'Nothing has been blocked yet.',
  dayBlockedBadge: '{{count}} blocked',
  visitsMeta: '{{count}} visits',
  visitsMeta_one: '{{count}} visit',
  blockedMeta: 'Blocked {{count}} times · {{category}}',
  blockedMeta_one: 'Blocked once · {{category}}',
  categoryUnknown: 'Blocked list',
  showMoreDays: 'Show {{count}} more days',
  showMoreDays_one: 'Show 1 more day',
  rollupTitle: 'Where the time went',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Share of recorded visits by kind of site. Android only — iPhone does not tell KidGate which kind a site belongs to.',
} as const;
