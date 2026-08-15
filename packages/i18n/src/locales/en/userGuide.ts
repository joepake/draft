export const userGuide = {
  title: 'User guide',
  subtitle:
    'Step-by-step help with permissions, device pairing, daily controls, and safety features.',
  stepLabel: 'Step {{n}}',
  stepsSectionTitle: 'Steps',
  tipTitle: 'Tip',
  groups: {
    gettingStarted: {
      title: 'Getting started',
      description: 'Set up parent and child devices for the first time',
    },
    connection: {
      title: 'Connect devices',
      description: 'Pair a child device or invite another parent',
    },
    permissions: {
      title: 'App permissions',
      description: 'Grant the permissions KidGate needs on the child device',
    },
    controls: {
      title: 'Daily controls',
      description: 'Limits, schedules, app blocking, and device locking',
    },
    safety: {
      title: 'Safety and monitoring',
      description: 'Location, Check-In, SOS, Web Filter, and protection',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Set up a parent device',
      summary: 'Create your account and family, then connect your first child device.',
      tip: 'Set the Parent PIN early. You need it to change sensitive settings and unlock controls on the child device.',
      steps: {
        '1': 'Install KidGate on your device. Open the app and choose This is a parent device.',
        '2': 'Sign in with Google or Apple, or create an email account. Confirm that you are the family owner for this household.',
        '3': 'If asked, name your family (for example, “Nguyen family”). This name appears when other parents join.',
        '4': 'Set a Parent PIN (6 digits) in Settings → Security. Memorize it or store it somewhere safe, and do not share it with children.',
        '5': 'Recommended: turn on App Lock and biometric unlock in Settings so others cannot open the parent app on your device.',
        '6': 'Open Family (Devices). Tap + and choose Connect a child device. Keep this screen ready for the QR code or code from the child device.',
        '7': 'After the child device connects, open that device card. Set the Daily Limit and Blocked Hours and complete permissions together with your child.',
      },
    },
    getStartedChild: {
      title: 'Set up a child device',
      summary: 'Install KidGate on the child device and complete the permissions.',
      tip: 'Do this together with a parent. Many permission screens appear only once and are easy to miss alone.',
      steps: {
        '1': 'Install KidGate on the child device. Open the app and choose This is a child device.',
        '2': 'Keep the pairing screen open. Show the QR code to the parent, or read out the 6-character code.',
        '3': 'On the parent device, scan the QR code or enter the code. On the child device, confirm the parent when asked — only accept someone you know.',
        '4': 'Wait until the home screen shows that the device is connected. Do not force-close KidGate during setup.',
        '5': 'On the Status screen, grant every permission KidGate requests (notifications, location, camera, and platform-specific rights). Tap each row until it shows as allowed.',
        '6': 'Leave KidGate installed and signed in on the child device. Parents manage limits from their own device after this.',
      },
    },
    connectChild: {
      title: 'Connect a child device',
      summary: 'Pair a new child device to your family with a QR code or a code.',
      tip: 'Codes expire. If pairing fails, select New code on the child device and try again.',
      steps: {
        '1': 'On the child device: open KidGate → This is a child device. Leave the QR code screen visible.',
        '2': 'On the parent device: open Family → tap + → Connect a child device.',
        '3': 'A QR code is recommended: select Scan QR code, allow camera access if prompted, and align the child device QR code inside the frame.',
        '4': 'Or use the code: select Enter code manually, type the 6 characters shown on the child device, then continue.',
        '5': 'On the child device, read the confirmation screen carefully. Select Yes, connect only if the parent name is correct.',
        '6': 'Wait for the parent device to confirm the connection. The new device appears under Family.',
        '7': 'Open the new device and check that Last active is updating. If it stays offline, reopen KidGate on the child device and check the network connection.',
        '8': 'Next, grant permissions on the child device (see the App permissions group). Controls will not work fully until those permissions are on.',
      },
    },
    inviteParent: {
      title: 'Invite another parent',
      summary:
        'Let a second parent join the same family and manage the same child devices.',
      tip: 'Only the family owner can approve join requests. Approve promptly, as requests can expire.',
      steps: {
        '1': 'On the family owner device, open Family → tap + → Add another parent device (or Invite parent).',
        '2': 'If you have not created a family name yet, enter one and select Create family.',
        '3': 'Show the invite QR code to the other parent, or share the invite code with them.',
        '4': 'On the other parent device: open KidGate as a parent → Family → + → Join family, then scan the QR code or enter the code.',
        '5': 'Back on the owner device, open the pending request and select Approve. Decline if you do not recognize the person.',
        '6': 'The new parent will see the same child devices and can help manage limits. Some actions, such as renaming or removing devices, remain owner-only.',
      },
    },
    joinFamily: {
      title: 'Join an existing family',
      summary: 'Use an invite from the family owner to become a co-parent.',
      tip: 'If the approval request expires, ask the owner for a new invite QR code or code.',
      steps: {
        '1': 'Install KidGate and sign in as a parent on your device.',
        '2': 'Open Family → tap + → Join family.',
        '3': 'Scan the owner’s invite QR code, or enter the 6-character invite code.',
        '4': 'Wait for the owner to approve. Keep the app open until you see that you have joined the family.',
        '5': 'Confirm that the child devices appear under Family. Open one device to view its status and controls.',
      },
    },
    androidPermissions: {
      title: 'Android permissions (child device)',
      summary:
        'Turn on Usage Access, Display over other apps, Accessibility, battery, and related permissions.',
      tip: 'Completeness matters more than order. Every red or not-allowed row on the child Status screen should be fixed before you rely on locking or Blocked Hours.',
      steps: {
        '1': 'On the child device, open KidGate → Status and work from top to bottom through the permission list.',
        '2': 'Notifications: tap the row → Allow. Parents need push notifications for lock commands and time requests.',
        '3': 'Usage Access: open the system screen → find KidGate → turn it on. This is required for screen time tracking and limits.',
        '4': 'Display over other apps: allow KidGate. This is required so the lock screen can appear above other apps.',
        '5': 'Accessibility lock helper: Settings → Accessibility → Installed / Downloaded apps → KidGate → On. This keeps the lock enforced.',
        '6': 'Unrestricted battery: select Allow when prompted. If no prompt appears: App info → Battery → Unrestricted.',
        '7': 'Alarms & reminders: allow this so Blocked Hours start and end on time.',
        '8': 'Location and Camera (if you use Check-In or SOS photos): allow them as KidGate requests. Return to Status and confirm every row is allowed.',
      },
    },
    iosScreenTime: {
      title: 'iOS Screen Time (child device)',
      summary:
        'Allow App & Website Usage so locking, schedules, and app selection can work.',
      tip: 'If the Allow button is missing, open iOS Settings → Screen Time and make sure Screen Time is enabled on the child device first.',
      steps: {
        '1': 'On the child iPhone, open KidGate and stay on the Status / setup screen.',
        '2': 'Select Allow App & Website Usage (or the Screen Time banner).',
        '3': 'In the system dialog, select Allow. Do not dismiss the dialog without choosing.',
        '4': 'Return to KidGate. The banner disappears once authorization succeeds.',
        '5': 'If authorization was denied earlier: open iOS Settings → find KidGate → enable the related Screen Time / Family Controls options, then reopen KidGate.',
        '6': 'To choose blocked apps: on the child device, open KidGate Settings → enter the Parent PIN → Choose apps to block → save.',
        '7': 'On the parent device, open the device → Blocked Apps and confirm the list has synced. Turn blocking on when you are ready.',
      },
    },
    oemKeepRunning: {
      title: 'Keep KidGate running (manufacturer settings)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei, and similar devices often pause background apps.',
      tip: 'After changing battery rules, restart the child device once, reopen KidGate, then test locking from the parent device.',
      steps: {
        '1': 'On the child Android device, open KidGate → Status → Keep KidGate running.',
        '2': 'Allow autostart for KidGate in the manufacturer security screen (the wording varies by device).',
        '3': 'Set battery usage for KidGate to Unrestricted in both Android settings and the vendor battery menu, if both exist.',
        '4': 'Disable any “sleeping apps”, “deep sleeping apps”, or “put apps to sleep” lists that include KidGate.',
        '5': 'If a shortcut does not work, open the Security / Device care app manually and search for KidGate, Autostart, or Battery.',
        '6': 'Mark each row Done in KidGate after you complete it, so you can see what remains.',
      },
    },
    dailyLimit: {
      title: 'Set a Daily Limit',
      summary: 'Cap how many minutes the child may use the device each day.',
      tip: 'Usage data comes from the child device. If the counter looks stuck, open KidGate on the child device and wait for a sync.',
      steps: {
        '1': 'On the parent device, open Family → tap the child device.',
        '2': 'Under Essential controls, select Daily Limit.',
        '3': 'Choose a minutes-per-day value (or edit the existing cap), then save.',
        '4': 'Confirm the device card shows today’s used and limit minutes after the child device syncs.',
        '5': 'When the limit is reached, the device locks according to platform rules. Select Unlock on the device screen if you want to restore access early.',
      },
    },
    blockedHours: {
      title: 'Set Blocked Hours',
      summary: 'Schedule up to 3 time ranges when the device should stay locked.',
      tip: 'Set school hours and bedtime ranges first. Avoid overlapping ranges to keep the schedule clear.',
      steps: {
        '1': 'Open the child device on the parent device → Blocked Hours.',
        '2': 'Select Set Blocked Hours (or Edit Blocked Hours). Add a time range with a start time, end time, and days.',
        '3': 'Save the range. You can add up to 3 ranges in total.',
        '4': 'Turn the schedule on if an enable toggle is shown.',
        '5': 'On the child device, confirm the Alarms & reminders and Screen Time permissions are still allowed so schedules run on time.',
        '6': 'During an active range, the device card shows Blocked Hours active · locked. Use Unlock only when you intentionally override the schedule.',
      },
    },
    blockedApps: {
      title: 'Block specific apps',
      summary:
        'Choose apps on the child device, then enable blocking from the parent device.',
      tip: 'On iOS, Apple may hide exact app names from parent devices. Selection still happens on the child device with the Parent PIN.',
      steps: {
        '1': 'Use the child device directly. Open KidGate → Settings.',
        '2': 'Enter the Parent PIN when asked.',
        '3': 'Open Choose apps to block. Select the apps (and categories, if shown), then save on the child device.',
        '4': 'On the parent device, open the device → Blocked Apps and wait for the selected list to appear.',
        '5': 'Turn on Enable App Blocking. The status should read Blocking is on.',
        '6': 'Test by opening a blocked app on the child device. It should be restricted according to platform rules.',
        '7': 'To change the list later, repeat the selection on the child device with the Parent PIN. The parent device will sync the new list.',
      },
    },
    lockUnlock: {
      title: 'Lock and unlock the device',
      summary: 'Immediately lock the child device, or restore access.',
      tip: 'On Android, locking is strongest when Display over other apps and Accessibility are both enabled. On iOS, locking depends on Screen Time authorization.',
      steps: {
        '1': 'Open the child device on the parent device.',
        '2': 'Select Lock device (or Lock in KidGate, depending on the platform options shown).',
        '3': 'Wait a few seconds. The status should change to Locked. If nothing changes, open KidGate on the child device and recheck permissions.',
        '4': 'To restore access, select Unlock on the same device screen and confirm.',
        '5': 'Optional: you can also lock or unlock quickly from Family if those shortcuts appear on the device card.',
      },
    },
    locationSharing: {
      title: 'Turn on location sharing',
      summary: 'See your child’s latest location on the parent device.',
      tip: 'Location requires permission on the child device and a stable network connection. Indoor GPS can be less precise.',
      steps: {
        '1': 'On the child device, allow Location for KidGate when prompted (or in system Settings).',
        '2': 'On the parent device, open the device → Location.',
        '3': 'Turn sharing on if it is off, then wait for the first update.',
        '4': 'Pull down to refresh, or reopen the screen, if the status still shows waiting.',
        '5': 'Optional: set up Place Alerts so you are notified when your child enters or leaves a saved place.',
      },
    },
    checkIn: {
      title: 'Request a Check-In',
      summary:
        'Ask your child to confirm they are safe, with location and an optional photo.',
      tip: 'Camera permission on the child device is required for Check-Ins with photos.',
      steps: {
        '1': 'Open the child device on the parent device.',
        '2': 'Select Check-In (the quick action or the Safety section).',
        '3': 'The child device receives a Check-In notification and screen. The child taps to confirm they are okay, or to ask for help.',
        '4': 'If camera access is allowed, KidGate attaches a photo along with the location when possible.',
        '5': 'On the parent device, open Check-In history to review the latest response and photo.',
      },
    },
    sos: {
      title: 'SOS emergency alerts',
      summary: 'Understand how a child sends an SOS and how parents review it.',
      tip: 'Test this once at home so both parent and child know the process before a real emergency.',
      steps: {
        '1': 'On the child device, open the SOS tab or screen in KidGate.',
        '2': 'Follow the on-screen steps to send an SOS (location and photo depend on the permissions granted).',
        '3': 'Parents receive a push notification when an SOS is sent.',
        '4': 'On the parent device, open the device → SOS Alerts to review the event.',
        '5': 'Agree with your child on when to use SOS and when a normal Check-In is enough.',
      },
    },
    webFilter: {
      title: 'Limit adult websites',
      summary:
        'Turn on the Web Filter for adult content where the platform supports it.',
      tip: 'Web filtering depends on platform capabilities. Combine it with Blocked Apps for stronger protection.',
      steps: {
        '1': 'Open the child device on the parent device → Web Filter.',
        '2': 'Review the current status (adult sites limited, or filtering off).',
        '3': 'Turn filtering on and save if a toggle is shown.',
        '4': 'Check again later from the same screen. If the status stays Waiting, reopen KidGate on the child device so settings can sync.',
      },
    },
    protectionAlerts: {
      title: 'Protection Alerts',
      summary:
        'Get notified when an important permission on the child device is turned off.',
      tip: 'A protection alert means KidGate protection has weakened. Restore the permission on the child device as soon as you can.',
      steps: {
        '1': 'Open the child device → Protection (or Protection Alerts).',
        '2': 'Review recent events such as Display over other apps, Accessibility, Usage Access, Camera, or Location being turned off.',
        '3': 'On the child device, open KidGate → Status and turn the named permission back on.',
        '4': 'Return to Protection Alerts and confirm that no new unexpected events appear.',
        '5': 'Keep notifications enabled on the parent device so you learn about changes quickly.',
      },
    },
  },
} as const;
