export const activities = {
  title: 'Activities',
  subtitleAllDevices: 'Latest events across all devices',
  subtitleTimelineForDevice: 'Timeline for {{deviceName}}',
  subtitleTimelineForChild: 'Timeline for {{childName}}',
  fallbackDeviceName: 'device',
  liveBadge: 'Live',
  // Header pill next to the live badge; opens the weekly report.
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
  activityTypeCheckIn: 'Check-In',
  activityTypeLocationRequest: 'Location',
  activityTypeTimeRequest: 'Time request',
  activityTypeRewardTask: 'Reward task',
  activityTypeSearchAlert: 'Search alert',
  activityTypeWebFilter: 'Web Filter',
  activityTypeEmergency: 'Emergency',
  activityTypeUnknown: 'Activity',
  /*
   * `app_blocked`. Written by the desktop agent, which is the first platform to
   * write one — the counter these rows feed
   * (`functions/triggers/protectionCounters.js`) had readers on every parent
   * screen and no writer anywhere. The title is the app alone — the row's own
   * type badge already says what happened.
   */
  /*
   * The SOS escape, in the parent's feed. Written by the child device on every
   * granted escape — `apps/desktop`'s `sosEscapeActivity`.
   *
   * The feed row exists because the alert does not say this. A parent is told
   * "SOS was sent"; nothing told them the device unlocked itself, for how long,
   * or that the limit they set was stepped over. `apps/desktop/CLAUDE.md`
   * defends this escape on the grounds that the parent is told — and they were
   * being told about an emergency, not about an unlock.
   *
   * The repeat variant is the second half of the same honesty. The escape is
   * never rate-limited (`sos.rs`), so it can be pressed again the moment it
   * lapses; several in one day may still be a bad day, and a parent should be
   * the one deciding which it is rather than reading identical rows.
   */
  sosEscapeTitle: 'Emergency unlock',
  sosEscapeBody: 'SOS unlocked this device for {{minutes}} minutes.',
  sosEscapeRepeatTitle: 'Emergency unlock ({{count}} today)',
  sosEscapeRepeatBody:
    'SOS unlocked this device for {{minutes}} minutes. That is {{count}} times today.',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'A blocked app was opened and KidGate closed it.',
  appInstalledTitle: 'App installed',
  appInstalledBody: '{{appName}} was installed on the child device.',
  appInstalledPendingBody:
    '{{appName}} was installed on the child device and is blocked until you allow it.',
  messageAlertTitle: 'Concerning message content',
  messageAlertBody: 'A flagged word was seen in {{appName}}.',
  messageAlertBodyOutgoing:
    'A flagged word was seen in a message your child wrote in {{appName}}.',
  messageAlertTitleSearch: 'Concerning search',
  messageAlertBodySearch: 'A flagged word was searched for on {{appName}}.',
  activityTypeMessageAlert: 'Message alert',
  messageCheckedTitle: 'Checked, nothing concerning',
  messageCheckedBody:
    'A watched word appeared in {{appName}} and was judged harmless in context.',
  activityTypeMessageChecked: 'Checked',
  callAlertTitle: 'Call with a number not in contacts',
  callAlertBodyOutgoing:
    'Your child called a number that is not in their contacts, at {{localTime}}.',
  callAlertBodyOutgoingTimed:
    'Your child called a number that is not in their contacts at {{localTime}}, for {{durationMinutes}} min.',
  callAlertBodyIncoming:
    'A number that is not in your child’s contacts called them at {{localTime}}.',
  callAlertBodyIncomingTimed:
    'A number that is not in your child’s contacts called them at {{localTime}}, for {{durationMinutes}} min.',
  activityTypeCallAlert: 'Call alert',
  appRemovedTitle: 'App removed',
  appRemovedBody: '{{appName}} was uninstalled from the child device.',
  extensionInstalledTitle: 'Browser extension added',
  extensionInstalledBody: '{{appName}} was added to the child’s browser.',
  extensionRemovedTitle: 'Browser extension removed',
  extensionRemovedBody: '{{appName}} was removed from the child’s browser.',
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
  // The child tier of the feed filter — "All" would read as all devices.
  filterAllChildren: 'Everyone',
  dateToday: 'Today',
  dateYesterday: 'Yesterday',
  filterByDevice: 'Filter by {{label}}',
  filterByChild: 'Show only {{label}}',
  openFullSosHistory: 'Open full SOS history',
  openActivityDetails: 'View details',
  unknownDevice: 'Unknown device',
  basicActivityNote: 'Lock, unlock, and device events are recorded in Activities.',
  tamperUninstallProtectionTitle: 'Uninstall protection turned off',
  tamperUninstallProtectionBody: 'KidGate can now be removed from this phone.',
} as const;
