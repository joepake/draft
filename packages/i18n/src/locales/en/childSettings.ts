export const childSettings = {
  pageTitle: 'Settings',
  statusUnlocked: 'Parent access on',
  statusLocked: 'Needs Parent PIN',
  preferencesSectionTitle: 'Preferences',
  darkModeLabel: 'Dark mode',
  darkModeHint: 'Easier on the eyes at night',
  leaveFamilyAlertTitle: 'Leave this family?',
  leaveFamilyAlertMessage:
    'This device will be disconnected from the family. Pair again with a parent invite to rejoin.',
  leaveFamily: 'Leave family',
  uninstallProtectionSectionTitle: 'Uninstall protection',
  uninstallProtectionSectionDescription:
    'Stops this phone from removing KidGate. Android asks for permission once.',
  uninstallProtectionLabel: 'Prevent uninstall',
  // A parent reads this: the section only renders behind the Parent PIN.
  uninstallProtectionHintOn: 'On. Parents are alerted if this is turned off.',
  uninstallProtectionHintOff: 'Off. KidGate can be uninstalled from this phone.',
  uninstallProtectionTurnedOff: 'Uninstall protection is off.',
  uninstallProtectionFailed: 'Unable to change uninstall protection. Try again.',
  // Android's own device-admin screens, drawn by the system from what Kotlin
  // hands it (`KidGateDeviceAdminReceiver`). The explanation shows on the
  // activation screen, usually to a parent setting up. The warning shows on the
  // deactivation screen, where the child is the reader.
  deviceAdminExplanation:
    'Stops KidGate from being uninstalled without a parent. KidGate uses no other device administrator power: it cannot erase this device, change the screen lock or turn off the camera.',
  deviceAdminDisableWarning:
    'Turning this off lets KidGate be uninstalled from this device. Your parent will be alerted.',
  // The app picker's `app_picker_unavailable`: iOS below 16, or a build without
  // FamilyControls. A parent reads it, behind the Parent PIN.
  appPickerUnavailable: 'Blocked Apps is not available on this device.',
  messageSafetySectionTitle: 'Message Alerts',
  messageSafetySectionDescription:
    'Grant the permission here. Message Alerts are turned on or off from the parent app or the web dashboard.',
} as const;
