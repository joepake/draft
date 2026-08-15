export const permissions = {
  cameraPermissionRequired: 'Camera access is required for this feature.',
  allowCameraTitle: 'Allow camera',
  cameraPermissionMessage:
    'KidGate uses the camera so you can send a quick photo with SOS and Check-Ins.',
  allow: 'Allow',
  notNow: 'Not now',
  cameraTurnedOffTitle: 'Camera is off for KidGate',
  cameraTurnedOffMessage:
    'Open Settings and allow Camera so your Check-Ins and SOS alerts can include a photo.',
  openSettings: 'Open Settings',
  notificationsLabel: 'Notifications',
  notificationsAllowed: 'Notifications are on for KidGate.',
  notificationsOpenSettings: 'Open device Settings to allow notifications for KidGate.',
  backgroundRefreshLabel: 'Background App Refresh',
  backgroundRefreshHint:
    'First turn on Settings → General → Background App Refresh, then enable it for KidGate. If the toggle is dimmed, the general Background App Refresh setting is still off.',
  backgroundRefreshLowPowerHint:
    'Low Power Mode is on — iOS disables Background App Refresh. Turn off Low Power Mode, then enable Background App Refresh.',
  overlayLabel: 'Display over other apps',
  overlayHint: 'Allow KidGate to show a lock screen over other apps when limits apply.',
  batteryOptimizationLabel: 'Unrestricted battery',
  batteryOptimizationHint:
    'Select Allow on the system prompt so KidGate can run in the background. If no prompt appears: App info → Battery → Unrestricted.',
  exactAlarmLabel: 'Alarms & reminders',
  exactAlarmHint: 'Allow Alarms & reminders so Blocked Hours start and end on time.',
  accessibilityLabel: 'Accessibility (lock helper)',
  accessibilityHint:
    'Turn on KidGate under Accessibility → Installed / Downloaded apps. This is required so the lock stays over other apps.',
  oemSectionDescription:
    '{{brand}} devices often pause background apps. Complete these steps so locking and Blocked Hours keep working.',
  oemAutostartLabel: 'Allow autostart',
  oemAutostartHintXiaomi:
    'In Autostart, turn KidGate on so protection restarts after a reboot.',
  oemAutostartHintSamsung:
    'In Device care / Battery, allow KidGate to stay active in the background.',
  oemAutostartHintOppo: 'In Startup apps / Auto-launch, allow KidGate.',
  oemAutostartHintVivo: 'In Autostart / Background high power, allow KidGate.',
  oemAutostartHintHuawei:
    'In App launch / Startup manager, set KidGate to Manage manually and allow all options.',
  oemAutostartHintOther:
    'Allow KidGate to start automatically in your device’s security or battery settings.',
  markDone: 'Done',
  notificationsWizardBody:
    'Allow notifications so this device gets time approvals and reminders right away.',
} as const;
