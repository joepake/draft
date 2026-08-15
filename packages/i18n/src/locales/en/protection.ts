export const protection = {
  permissionOffOnChildDevice: 'This permission is off on the child device.',
  permissionNotSetUpYet: 'This permission has not been set up yet.',
  permissionRestrictedByIos: 'This permission is restricted by iOS settings.',
  permissionStatusUnknown: 'KidGate could not read the status of this permission.',
  kidGateOffline: 'KidGate offline',
  childAppMayBeOffline:
    'The app on the child device may be closed, deleted, or offline.',
  statusNotUpdatedYet: 'Status not updated yet',
  openKidGateOnChildPhone: 'Open KidGate once on the child device.',
  screenTimePermission: 'Screen Time permission',
  screenTimeAccessOff:
    'Screen Time access is off, so app blocking and limits may stop working.',
  screenTimeSetupIncomplete: 'Screen Time setup is incomplete on the child device.',
  usageAccessPermission: 'Usage access',
  usageAccessOff:
    'Usage access is off, so KidGate cannot track screen time or enforce limits.',
  usageAccessSetupIncomplete: 'Turn on Usage access for KidGate in Android settings.',
  overlayPermission: 'Display over other apps',
  batteryOptimizationPermission: 'Unrestricted battery',
  batteryOptimizationOff:
    'Allow unrestricted battery so KidGate can keep protections running.',
  exactAlarmPermission: 'Alarms & reminders',
  exactAlarmOff: 'Turn on Alarms & reminders so Blocked Hours start on time.',
  accessibilityPermission: 'Accessibility (lock helper)',
  accessibilityOff:
    'Turn on Accessibility for KidGate so the lock stays over other apps.',
  overlayOffForLock:
    'Turn on Display over other apps so the lock screen can cover other apps.',
  lockNotReadyTitle: 'Lock not ready',
  lockNotReadyBody:
    'KidGate cannot keep this Android device locked until Display over other apps and Accessibility are enabled. Open KidGate on the child device and complete the following:',
  lockNotReadyBodyIos:
    'KidGate cannot lock this iPhone until Screen Time access is approved on the child device. Open KidGate there and complete the following:',
  locationPermission: 'Location permission',
  notificationsPermission: 'Notifications permission',
  backgroundUpdates: 'Background updates',
  backgroundUpdatesRestricted: 'Background updates are restricted on this device.',
  turnOnBackgroundUpdatesInSettings:
    'Turn this on in device Settings so KidGate can stay in sync.',
  inactive: 'Inactive',
  openKidGateToSyncProtections:
    'Open KidGate on this device so protections can sync again.',
  needsAttention: 'Needs attention',
  protectionsNeedSetupAndroid: 'Some protections need setup on the child device.',
  protectionsNeedSetupIos: 'Some protections need setup on the child device.',
  protected: 'Protected',
  protectionsLookHealthy: 'KidGate protections look healthy.',
  healthBadgeProtected: 'Green — protected',
  healthBadgeWarning: 'Yellow — needs setup',
  healthBadgeInactive: 'Red — child device offline',
  iosFeatureSupportEvaluating: 'Feature support on iOS is being evaluated.',
  iosUpgradeRequiredNote:
    'This needs iOS 16 or later. Update the child device in Settings › General › Software Update. If no update is offered, this iPad or iPhone is too old for Apple to support it.',
  iosUpgradeActionLabel: 'Needs iOS 16',
  lockUnlockNote:
    'Locks the device through Screen Time once the child authorizes access.',
  scheduleNote: 'Up to 3 Blocked Hours ranges block apps through Screen Time.',
  individualAppBlockingNote:
    'The child selects apps after entering the 6-digit Parent PIN.',
  tamperAlertsNote:
    'Reports permission changes and when the app on the child device has not updated in a while.',
  appReviewRemindersNote:
    'iOS does not expose install events; review apps periodically with the child device.',
} as const;
