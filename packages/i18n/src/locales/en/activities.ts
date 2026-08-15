export const activities = {
  title: 'Activities',
  subtitleAllDevices: 'Latest events across all devices',
  subtitleTimelineForDevice: 'Timeline for {{deviceName}}',
  fallbackDeviceName: 'device',
  liveBadge: 'Live',
  errorTitle: 'Unable to load activity',
  tryAgain: 'Try again',
  emptyTitleAll: 'No activity yet',
  emptyTitleDevice: 'No activity for this device',
  emptyDescriptionAll:
    'Lock, unlock, and SOS events from your child devices will appear here.',
  emptyDescriptionDevice:
    'Select another device, or wait for lock, unlock, and SOS events from this device.',
  guestEmptyTitle: 'Your activity feed',
  guestEmptyDescription:
    'Once a child device is connected, lock, unlock, SOS, and app events appear here in real time.',
  guestSignInButton: 'Sign in',
  guestCreateAccount: 'Create a parent account',
  guestSubtitle: 'Sign in to follow activity on your child devices',
  guestPreviewHeading: 'What you will see',
  guestPreviewLock: 'Device locked',
  guestPreviewSos: 'SOS alert',
  guestPreviewScreenTime: 'Screen Time update',
  guestPreviewHint: 'Sample — real events appear once you connect a device',
  activityTypeLocked: 'Locked',
  activityTypeUnlocked: 'Unlocked',
  activityTypeAppOpened: 'App opened',
  activityTypeAppBlocked: 'App blocked',
  activityTypeAppInstalled: 'App installed',
  activityTypeAppRemoved: 'App removed',
  activityTypePlaceEnter: 'Place entered',
  activityTypePlaceExit: 'Place left',
  activityTypeTamper: 'Protection',
  activityTypeScreenTime: 'Screen Time',
  activityTypeEmergency: 'Emergency',
  activityTypeUnknown: 'Activity',
  /*
   * `app_blocked`. Written by the desktop agent, which is the first platform to
   * write one — the counter these rows feed
   * (`functions/triggers/protectionCounters.js`) had readers on every parent
   * screen and no writer anywhere. The title is the app alone, matching the two
   * below: the row's own type badge already says what happened.
   */
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'A blocked app was opened and KidGate closed it.',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: 'A new app was installed on the child device.',
  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'An app was uninstalled from the child device.',
  placeEnterTitle: 'Entered {{placeName}}',
  placeEnterBody: 'The child device entered a saved place.',
  placeExitTitle: 'Left {{placeName}}',
  placeExitBody: 'The child device left a saved place.',
  tamperTitle: 'Protection permission turned off',
  tamperFallbackTitle: 'Protection permission turned off',
  tamperFallbackBody: 'A protection permission was turned off on the child device.',
  tamperOverlayTitle: 'Display over other apps turned off',
  tamperOverlayBody:
    'The lock screen may stop appearing over other apps until Display over other apps is turned back on.',
  tamperAccessibilityTitle: 'Accessibility turned off',
  tamperAccessibilityBody:
    'App blocking and lock enforcement may weaken until Accessibility is turned back on.',
  tamperUsageAccessTitle: 'App usage access turned off',
  tamperUsageAccessBody:
    'App limits and Blocked Hours may stop until KidGate can measure app usage on the child device again.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'Screen Time access turned off',
  tamperScreenTimeIosBody:
    'App limits and Blocked Hours may stop until Screen Time access is allowed again on the child device.',
  tamperUsageAccessAndroidTitle: 'Usage access turned off',
  tamperUsageAccessAndroidBody:
    'App limits and Blocked Hours may stop until Usage access is turned back on for KidGate on the child device.',
  tamperBatteryTitle: 'Unrestricted battery turned off',
  tamperBatteryBody:
    'The system may pause KidGate until battery usage is set to Unrestricted.',
  tamperExactAlarmTitle: 'Alarms & reminders turned off',
  tamperExactAlarmBody:
    'Blocked Hours may start or end late until Alarms & reminders is allowed again.',
  tamperNotificationsTitle: 'Notifications turned off',
  tamperNotificationsBody:
    'Remote commands and parent alerts may not reach this device reliably.',
  tamperLocationTitle: 'Location turned off',
  tamperLocationBody:
    'Parents will not receive location updates until Location is allowed again.',
  tamperCameraTitle: 'Camera turned off',
  tamperCameraBody:
    'SOS and Check-In photos may fail to send until Camera is allowed again.',
  tamperBackgroundRefreshTitle: 'Background App Refresh turned off',
  tamperBackgroundRefreshBody:
    'KidGate may update less often in the background until Background App Refresh is turned back on.',
  tamperDeviceClockTitle: 'Date or time was changed',
  tamperDeviceClockBody:
    'The clock on this device no longer matches the correct time. Screen Time and Blocked Hours still follow the correct time.',
  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: 'Display over other apps was turned off.',
  tamperAccessibility: 'The Accessibility service was turned off.',
  tamperUsageAccess: 'Usage access was turned off.',
  tamperBattery: 'Unrestricted battery usage was turned off.',
  tamperExactAlarm: 'The Alarms & reminders permission was turned off.',
  tamperNotifications: 'The notification permission was turned off.',
  tamperLocation: 'The location permission was turned off.',
  tamperCamera: 'The camera permission was turned off.',
  tamperBackgroundRefresh: 'Background App Refresh was turned off.',
  filterAllDevices: 'All devices',
  dateToday: 'Today',
  dateYesterday: 'Yesterday',
  filterByDevice: 'Filter by {{label}}',
  openFullSosHistory: 'Open full SOS history',
  unknownDevice: 'Unknown device',
  basicActivityNote: 'Lock, unlock, and device events are recorded in Activities.',
  tamperUninstallProtectionTitle: 'Uninstall protection turned off',
  tamperUninstallProtectionBody: 'KidGate can now be removed from this phone.',
} as const;
