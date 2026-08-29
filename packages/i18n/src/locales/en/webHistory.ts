export const webHistory = {
  title: 'Web History',
  fallbackDeviceName: 'Child device',
  syncNote:
    'Web history can take a few minutes to reach this screen — longer if the device has no internet connection or was closed unexpectedly.',
  syncNoteTv:
    'This television only checks in periodically, so web history can take up to an hour to reach this screen — longer with no internet connection.',
  summarySites: 'Sites seen',
  summaryBlocked: 'Sites blocked',
  sourceNoteIos:
    'On iPhone this comes from Apple’s Screen Time report — the sites your child spent time on, not every page they opened.',
  sourceNoteAndroid:
    'On Android this comes from the KidGate filter — the sites this device looked up, not every page they opened.',
  sourceNoteMacos:
    'On Mac this comes from the KidGate filter — the sites this device looked up, not every page they opened.',
  sourceNoteExtension:
    'In this browser KidGate sees the pages that were actually opened — this browser only, not the rest of the computer.',
  filterOffNoteAndroid:
    'The Web Filter is off, so this device is not recording or blocking anything. Turn it on to see where it goes.',
  filterOffNoteMacos:
    'The Web Filter is off, so this Mac is not recording or blocking anything. Turn it on to see where it goes.',
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
  blockedMeta: '{{category}} · Blocked {{count}} times',
  blockedMeta_one: '{{category}} · Blocked once',
  categoryUnknown: 'Blocked list',
  sectionUncategorized: 'Other sites',
  blockCategory: 'Block {{category}}',
  blockCategoryConfirmTitle: 'Block {{category}}?',
  blockCategoryConfirmBody:
    'Every site KidGate files under {{category}} will be refused on this device. You can turn it back off in Web Filter.',
  blockCategoryConfirmAction: 'Block',
  blockCategoryDone: '{{category}} is now blocked.',
  unblockCategory: 'Unblock {{category}}',
  unblockCategoryConfirmTitle: 'Unblock {{category}}?',
  unblockCategoryConfirmBody:
    'Sites KidGate files under {{category}} will be reachable on this device again.',
  unblockCategoryConfirmAction: 'Unblock',
  unblockCategoryDone: '{{category}} is no longer blocked.',
  serviceSites: '{{count}} sites',
  serviceSites_one: '{{count}} site',
  serviceNote:
    'Sites a service loads from are folded into it — opening YouTube once reaches several. Tap a row to see them.',
  showMoreDays: 'Show {{count}} more days',
  showMoreDays_one: 'Show 1 more day',
  rollupTitle: 'Visits by kind of site',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Lookups, not minutes — one long video is a handful, ten minutes of browsing is dozens.',
  rollupNoteAi:
    'Some kinds were worked out from the site name rather than matched to a known site, so a few may be off.',
  rollupNoteExtension:
    'Pages, not minutes — one long video counts once, ten minutes of browsing counts dozens.',
  hoursTitle: 'When they browsed',
  hoursNote:
    'Page loads by hour, on this device’s clock. A tab left open all afternoon counts once.',
  hoursEmpty: 'No pages yet today.',
  sourceNoteChild:
    'Combined from {{count}} devices. Each records only what its own filter can see.',
  filterOffNoteChild:
    'Web filtering is off on every device, so new visits are not being recorded.',
} as const;
