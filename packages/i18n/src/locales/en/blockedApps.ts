export const blockedApps = {
  title: 'Blocked Apps',
  installApprovalTitle: 'Approve new apps',
  installApprovalSubtitleOn:
    'Apps installed from now on stay blocked until you approve them.',
  installApprovalSubtitleOff:
    'Turn on to block every newly installed app until you approve it.',
  installApprovalSubtitleIos:
    'On iPhone and iPad this hides the App Store instead — Apple does not let apps be approved one by one.',
  installApprovalStatusOn: 'New apps need approval',
  installApprovalStatusOff: 'New apps open freely',
  installApprovalStatusIos: 'App Store hidden',
  installApprovalAccessibilityLabel: 'Approve new apps',
  installApprovalInfoTitle: 'How approval works',
  installApprovalInfoLine1:
    'The child device blocks any app installed after you turn this on, without waiting for you.',
  installApprovalInfoLine2:
    'You get a notification, and the app appears below, in Blocked Apps, until you allow it.',
  installApprovalInfoLine3:
    'Allowing an app lets it open right away. An app you do not allow simply stays blocked.',
  installApprovalInfoLine1Ios:
    'While this is on, the App Store is hidden on the child device, so no new app can be installed.',
  installApprovalInfoLine2Ios: 'Apps already on the device keep working.',
  installApprovalInfoLine3Ios:
    'To let one app in, turn this off, install it, then turn this back on.',
  pendingSectionTitle: 'Blocked automatically, waiting for you',
  pendingSectionSubtitle:
    'Installed after you turned on approval. Nothing here was chosen on the child device.',
  pendingInstalledAt: 'Installed {{when}}',
  pendingEmpty: 'No new apps waiting for approval.',
  allowApp: 'Allow',
  allowingApp: 'Allowing…',
  toastAppAllowed: '{{appName}} can open now.',
  toastAllowFailed: 'Unable to allow this app. Try again.',
  toastInstallApprovalSaveFailed: 'Unable to save. Try again.',
  toastChooseAppsFirst:
    'Choose the apps first: open KidGate Settings on the child device and enter the Parent PIN.',
  toastSaveFailed: 'Unable to save. Try again.',
  statusBlockingOn: 'Blocking is on',
  statusBlockingOff: 'Not blocking',
  heroTitle: 'Selected apps to block',
  heroSubtitle:
    'These apps and categories are chosen on the child device. KidGate syncs the list here for you to review.',
  statAppsLabel: 'Apps',
  statCategoriesLabel: 'Categories',
  toggleTitle: 'Enable App Blocking',
  toggleSubtitleOn: 'Selected apps are blocked on the child device.',
  toggleSubtitleOff: 'Turn on to block the selected apps remotely.',
  toggleAccessibilityLabel: 'Enable App Blocking',
  emptyTitle: 'No blocked apps yet',
  emptySubtitle:
    'On the child device, open KidGate Settings, enter the Parent PIN, then open App Blocking → Blocked Apps and save the selection.',
  emptySubtitleTv:
    'On the TV, open KidGate, select “{{button}}”, enter the Parent PIN, then choose the apps and save.',
  sectionTitle: 'Blocked list',
  privacyTitle: 'The app list comes from the child device',
  privacySubtitle:
    'On iOS, Apple may hide exact app names from parent devices. On other devices, selected app names sync here. Changing the list still requires the Parent PIN on the child device.',
  infoTitle: 'How it works',
  infoLine1: 'Choose apps on the child device after entering the Parent PIN.',
  infoLine2: 'Lock, Blocked Hours, and Daily Limit still block all apps.',
  infoLine3: 'Turn blocking on or off at any time from this screen.',
  appKind: 'App',
  categoryKind: 'Category',
  websiteKind: 'Website',
  noAppsSelectedYet: 'No apps selected yet',
  blockedAppCount: '{{count}} apps',
  blockedAppCount_one: '{{count}} app',
  blockedCategoryCount: '{{count}} categories',
  blockedCategoryCount_one: '{{count}} category',
  blockedItemCount: '{{count}} blocked items',
  blockedItemCount_one: '{{count}} blocked item',
  blockedListReady: 'Blocked list ready',
  blockedAppsLabel: 'Blocked Apps',
  appsConfiguredChip: 'Apps configured',
  appsNotSetChip: 'Apps not set',
  appBlockingSectionTitle: 'App Blocking',
  appBlockingSectionDescription: 'Choose which apps parents can block on this device.',
  savedItemsForBlocking: 'Saved {{count}} items for blocking.',
  savedItemsForBlocking_one: 'Saved {{count}} item for blocking.',
  noAppsSelected: 'No apps were selected.',
  unableToOpenAppPicker: 'Unable to open the app picker. Try again.',
  wizardStepPin: 'Enter the Parent PIN when Settings asks.',
  wizardStepChoose: 'Open Blocked Apps under App Blocking, tick the apps, and save.',
  pickerSubtitle: 'Choose the apps and categories to block on this device.',
  // Android's own picker (`KidGateAppPickerActivity`) lists apps only, so it
  // cannot say categories the way iOS's `pickerSubtitle` does.
  pickerSubtitleAndroid: 'Ticked apps cannot open while App Blocking is on.',
  pickerEmpty: 'No apps found on this device.',
} as const;
