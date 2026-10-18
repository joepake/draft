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
  oemAutostartHintSamsung: 'In Battery, select Background usage limits.',
  oemAutostartHintSamsungAdd:
    'Open Never sleeping apps, select Add, then choose KidGate. If KidGate is already on the list, this step is done.',
  oemAutostartHintOppo: 'In Startup apps / Auto-launch, allow KidGate.',
  oemAutostartHintVivo: 'In Autostart / Background high power, allow KidGate.',
  oemAutostartHintHuawei:
    'In App launch / Startup manager, set KidGate to Manage manually and allow all options.',
  oemAutostartHintOther:
    'Allow KidGate to start automatically in your device’s security or battery settings.',
  markDone: 'Done',
  overlayStepAllow: 'Turn on “Allow display over other apps” for KidGate.',
  accessibilityStepOpenSettings:
    'Select Agree below — it opens the Accessibility page.',
  accessibilityStepFindKidGate:
    'If a list opens, select KidGate under Downloaded apps.',
  accessibilityStepTurnOn:
    'Turn the switch on, then select Allow on Android’s confirmation.',
  restrictedSettingsStep:
    'If the switch is grayed out, open Settings → Apps → KidGate, select the ⋮ menu and choose “Allow restricted settings”, then return here and try again.',
  // Play's prominent disclosure for the lock helper. It must name every data
  // type the app declares, the typing service's included (rejected 2026-10-09
  // for leaving out SMS/MMS, in-app messages, search history and crash logs).
  // The SOS sound sentence names Data safety's "Voice or sound recordings",
  // declared 2026-10-14 for the SOS clip, before a reviewer asks for it.
  accessibilityWarningNote:
    'Android warns that KidGate can observe your actions. With this permission KidGate sees which app is open, so the lock can stay on top. When watched videos are recorded, it also reads the title and channel of each YouTube video and sends them to your parent. This permission does not read passwords, messages or what you type. If your parent turns on Message Alerts, a second permission, asked for separately, checks the text messages (SMS and MMS), chat messages and searches you type, and sends your parent only a flagged word or phrase. If you allow the microphone, KidGate records up to 15 seconds of sound when you send an SOS and sends it to your parent. If KidGate crashes, a crash log is sent to the KidGate team so the problem can be fixed. A device ID that KidGate creates is also sent, so the family account can tell devices apart.',
  accessibilityAgree: 'Agree',
  accessibilityDecline: 'Disagree',
  // apps/tv's prominent disclosure. Names every type the TV uploads (app time,
  // installed apps, web browsing history, YouTube titles, device ID) — Play
  // rejected the phone 10-09 and the TV 10-18 ("Device or other identifiers")
  // for a type missing here. No crash logs: the TV has no Crashlytics. The setup
  // screen does not scroll, so check the longest locale (ru) on a 1080p set.
  accessibilityTvNote:
    'With this permission KidGate sees which app is open, so the lock can stay on top, and counts how long each app is used. KidGate sends your parent that time, the apps installed on this TV, its web browsing history (sites visited and blocked) while the Web Filter is on, and the title and channel of YouTube videos watched. It also sends a device ID that identifies this TV. It does not read what is on the screen, passwords or messages.',
  uninstallProtectionWizardBody:
    'Makes KidGate harder to remove: uninstalling it means turning this off first, and a parent is alerted when that happens. Android shows its own confirmation screen.',
  notificationsWizardBody:
    'Allow notifications so this device gets time approvals and reminders right away.',
  backgroundRefreshStepOpen: 'Open the KidGate page in Settings.',
  backgroundRefreshStepTurnOn: 'Turn on Background App Refresh for KidGate.',
  backgroundRefreshStepGeneral:
    'If the switch is dimmed, open Settings, then General, then Background App Refresh, and turn it on.',
  locationAlwaysStep: 'Select Location and choose “Always”.',
  locationAlwaysStepAndroid:
    'Select Permissions → Location and choose “Allow all the time”.',
  batteryStepAllow: 'Select Allow on the Android prompt.',
  batteryStepAppInfo:
    'If no prompt appears, open App info, then Battery, then choose Unrestricted.',
  notificationsStepAllow: 'Select Allow on the prompt.',
  exactAlarmStepTurnOn: 'Turn on Alarms & reminders for KidGate.',
  cameraStepTurnOn: 'Turn on Camera for KidGate.',
  cameraStepAndroid: 'Select Permissions → Camera and allow it while using the app.',
  notificationsStepTurnOn: 'Turn on Notifications for KidGate.',
  allowMicrophoneTitle: 'Allow microphone',
  microphonePermissionMessage:
    'KidGate uses the microphone to record up to 15 seconds of sound when you send an SOS, so your parent can hear what is happening. It never records at any other time.',
  microphoneTurnedOffMessage:
    'Open Settings and allow Microphone so your SOS alerts can include sound.',
  microphoneStepTurnOn: 'Turn on Microphone for KidGate.',
  microphoneStepAndroid:
    'Select Permissions → Microphone and allow it while using the app.',
  uninstallProtectionStepConfirm: 'Select Activate on Android’s confirmation screen.',
} as const;
