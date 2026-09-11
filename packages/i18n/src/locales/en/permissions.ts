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
  backgroundRefreshHint: 'Lets KidGate keep working while it runs in the background.',
  backgroundRefreshLowPowerHint:
    'Low Power Mode is on — iOS disables Background App Refresh. Turn off Low Power Mode, then enable Background App Refresh.',
  overlayLabel: 'Display over other apps',
  overlayHint: 'Allow KidGate to show a lock screen over other apps when limits apply.',
  batteryOptimizationLabel: 'Unrestricted battery',
  batteryOptimizationHint: 'Stops Android pausing KidGate in the background.',
  exactAlarmLabel: 'Alarms & reminders',
  exactAlarmHint: 'Allow Alarms & reminders so Blocked Hours start and end on time.',
  accessibilityLabel: 'Accessibility (lock helper)',
  accessibilityHint: 'Keeps the KidGate lock on top of other apps.',
  oemSectionDescription:
    '{{brand}} devices often pause background apps. Complete these steps so locking and Blocked Hours keep working.',
  oemAutostartLabel: 'Allow autostart',
  oemAutostartHintXiaomi:
    'In Autostart, turn KidGate on so protection restarts after a reboot.',
  oemAutostartHintSamsung:
    'In Battery → Background usage limits → Never sleeping apps, add KidGate. If KidGate is not on that list it is already allowed, and this step is done.',
  oemAutostartHintOppo: 'In Startup apps / Auto-launch, allow KidGate.',
  oemAutostartHintVivo: 'In Autostart / Background high power, allow KidGate.',
  oemAutostartHintHuawei:
    'In App launch / Startup manager, set KidGate to Manage manually and allow all options.',
  oemAutostartHintOther:
    'Allow KidGate to start automatically in your device’s security or battery settings.',
  markDone: 'Done',
  overlayStepAllow: 'Turn on “Allow display over other apps” for KidGate.',
  accessibilityStepOpenSettings:
    'Select Settings below — it opens KidGate’s own Accessibility page.',
  accessibilityStepFindKidGate:
    'If the full list opens instead, select KidGate under Downloaded apps.',
  accessibilityStepTurnOn:
    'Turn the switch on, then select Allow on Android’s confirmation.',
  accessibilityWarningNote:
    'Android warns that KidGate can observe your actions. That is how the lock stays over other apps — KidGate does not read passwords or personal messages.',
  uninstallProtectionWizardBody:
    'Stops this app from being uninstalled without the Parent PIN. Android shows its own confirmation screen.',
  notificationsWizardBody:
    'Allow notifications so this device gets time approvals and reminders right away.',
  backgroundRefreshStepOpen: 'Open the KidGate page in Settings.',
  backgroundRefreshStepTurnOn: 'Turn on Background App Refresh for KidGate.',
  backgroundRefreshStepGeneral:
    'If the switch is dimmed, open Settings, then General, then Background App Refresh, and turn it on.',
  batteryStepAllow: 'Select Allow on the Android prompt.',
  batteryStepAppInfo:
    'If no prompt appears, open App info, then Battery, then choose Unrestricted.',
  notificationsStepAllow: 'Select Allow on the prompt.',
  exactAlarmStepTurnOn: 'Turn on Alarms & reminders for KidGate.',
  cameraStepTurnOn: 'Turn on Camera for KidGate.',
  uninstallProtectionStepConfirm: 'Select Activate on Android’s confirmation screen.',
} as const;
