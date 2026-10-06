export const userGuide = {
  title: 'User guide',
  subtitle:
    'Step-by-step help with permissions, device pairing, daily controls, and safety features.',
  stepLabel: 'Step {{n}}',
  stepsSectionTitle: 'Steps',
  tipTitle: 'Tip',
  searchPlaceholder: 'Search the guide…',
  searchClear: 'Clear search',
  searchEmpty: 'Nothing in the guide matches that. Try another word.',
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
      description:
        'Limits, schedules, app blocking, device locking, extra time, and rewards',
    },
    safety: {
      title: 'Safety and monitoring',
      description: 'Location, Check-In, SOS, Web Filter, and protection',
    },
    reports: {
      title: 'Reports and history',
      description:
        'Screen time reports, web and video history, and app and message alerts',
    },
    account: {
      title: 'Account and plan',
      description:
        'Premium, alerts, language, the web dashboard, PINs, support, and deleting your account',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Set up a parent device',
      summary: 'Create your account and family, then connect your first child device.',
      tip: 'Set the Parent PIN early. You need it to change sensitive settings and unlock controls on the child device.',
      steps: {
        '1': 'Install KidGate on your device. Open the app and choose This is a parent device.',
        '2': 'Sign in with Google or Apple, or create an email account.',
        '3': 'In [[Family]], select [[Create family]] and name your family (for example, “Nguyen family”). This name appears when other parents join. If another parent already created your family, select [[Join family]] instead.',
        '4': 'Set a Parent PIN (6 digits) in Settings, under Security. Memorize it or store it somewhere safe, and do not share it with children.',
        '5': 'Recommended: turn on App Lock and biometric unlock in Settings so others cannot open the parent app on your device.',
        '6': 'Open [[Family]], tap +, and choose [[Add child device]]. Keep this screen open for the QR code or code shown on the child device.',
        '7': 'After the child device connects, open your child in Family (or the device, if no child is assigned to it). Set the Daily Limit and Blocked Hours and complete permissions together with your child.',
      },
    },
    getStartedChild: {
      title: 'Set up a child device',
      summary: 'Install KidGate on the child device and complete the permissions.',
      tip: 'Do this together with a parent. Many permission screens appear only once and are easy to miss alone.',
      steps: {
        '1': 'Install KidGate on the child device. Open the app and choose [[This is a child device]].',
        '2': 'Keep the pairing screen open. Show the QR code to the parent, or read out the 6-character code.',
        '3': 'On the parent device, scan the QR code or enter the code. On the child device, confirm the parent when asked — only accept someone you know.',
        '4': 'Wait until the home screen shows that the device is connected. Do not force-close KidGate during setup.',
        '5': 'On the Status screen, grant every permission KidGate requests (notifications, location, camera, and platform-specific rights). Tap each row until it shows as allowed.',
        '6': 'Leave KidGate installed and signed in on the child device. Parents manage limits from their own device after this.',
      },
    },
    connectChild: {
      title: 'Connect a child’s phone or tablet',
      summary: 'Pair a new child device to your family with a QR code or a code.',
      tip: 'Codes expire. If pairing fails, select New code on the child device and try again.',
      steps: {
        '1': 'On the child device: open KidGate and choose [[This is a child device]]. Leave the QR code screen visible.',
        '2': 'On the parent device: open [[Family]] and tap the scan icon ([[Scan a code]]).',
        '3': 'The camera opens straight away: allow camera access if prompted, and align the child device QR code inside the frame.',
        '4': 'Or use the code: select [[Enter code manually]], type the 6 characters shown on the child device, then continue.',
        '5': 'On the child device, read the confirmation screen carefully. Select [[Yes, connect]] only if the parent name is correct.',
        '6': 'Wait for the parent device to confirm the connection. The new device appears under [[Family]].',
        '7': 'Open the new device and check that [[Last active]] is updating. If it stays offline, reopen KidGate on the child device and check the network connection.',
        '8': 'Next, grant permissions on the child device (see the App permissions group). Controls will not work fully until those permissions are on.',
      },
    },
    connectComputer: {
      title: 'Connect a computer (Mac or Windows)',
      summary:
        'Install KidGate on your child’s Mac or Windows PC and pair it the same way as a phone.',
      keywords: 'mac, macbook, windows, pc, laptop, desktop',
      tip: 'Set KidGate up while your child’s own account is signed in on the computer, and make it a standard (non-administrator) account. An administrator account can remove KidGate.',
      steps: {
        '1': 'On the computer, open kidgate.app/download and download KidGate for Mac or Windows.',
        '2': 'Run the installer and approve the administrator prompt. On Windows, if a message says Windows protected your PC, choose More info, then Run anyway.',
        '3': 'Open KidGate on the computer. It shows a QR code and a 6-character code; no sign-in is needed.',
        '4': 'On your device, open [[Family]], tap the scan icon ([[Scan a code]]), and scan the QR code — or select [[Enter code manually]] and type the code.',
        '5': 'On the computer, check the parent name and select [[Yes, connect]].',
        '6': 'Work through [[Finish setting up this device]]. On a Mac, select [[Open Settings]] next to [[Approve web filtering]] and turn KidGate on in the page that opens — the Web Filter does not run until you do. Select [[Allow]] for Location and Camera.',
        '7': 'Back on your device, choose which child uses the computer. Blocked apps are chosen on the computer itself, behind the Parent PIN ([[Choose apps to block]]).',
      },
    },
    connectTv: {
      title: 'Connect an Android TV',
      summary:
        'Install KidGate on an Android TV and pair it from your device, with no typing on the remote.',
      keywords: 'android tv, google tv, television, fire tv, box',
      tip: 'A TV has no location, SOS, Check-In or time requests, and a blocked app is closed after it opens rather than stopped from opening. Screen time can arrive up to an hour late.',
      steps: {
        '1': 'On the TV, open Google Play, search for KidGate, and install it.',
        '2': 'Open KidGate on the TV. It shows a QR code and a 6-character code; no sign-in is needed.',
        '3': 'On your device, open [[Family]], tap the scan icon ([[Scan a code]]), and scan the QR code on the TV — or select [[Enter code manually]] and type the code.',
        '4': 'The TV connects on its own within a few seconds. There is nothing to confirm with the remote.',
        '5': 'Follow [[Set up protection]] on the TV: select [[Open Settings]] to turn on Accessibility, Usage access and Display over other apps, then approve the VPN connection so the Web Filter can run.',
        '6': 'If a setting does not stay on, restart the TV and try again. You can reopen [[Set up protection]] from KidGate’s main screen on the TV.',
        '7': 'Back on your device, choose which child uses the TV. Blocked apps are chosen on the TV itself, behind the Parent PIN.',
      },
    },
    connectChrome: {
      title: 'Connect the Chrome extension',
      summary:
        'Add the KidGate web filter to Chrome on a Chromebook, Mac or PC. It shows up as a device of its own.',
      keywords: 'chromebook, chrome extension, browser extension',
      tip: 'The extension filters Chrome only: not other browsers, and not Incognito windows unless you allow it. On chrome://extensions, open KidGate’s Details and turn on Allow in Incognito.',
      steps: {
        '1': 'In Chrome on your child’s computer, open the Chrome Web Store, search for KidGate, and select Add to Chrome.',
        '2': 'Select the KidGate icon in the Chrome toolbar. If you do not see it, pin it from the Extensions (puzzle piece) menu. The pop-up shows a QR code and a 6-character code; keep it open while you pair.',
        '3': 'On your device, open [[Family]], tap the scan icon ([[Scan a code]]), and scan the QR code — or select [[Enter code manually]] and type the code.',
        '4': 'In the KidGate pop-up, check the parent name and select [[Yes, connect]].',
        '5': 'Back on your device, choose which child uses the extension, then turn on the Web Filter for it. Until then, the extension shows [[Inactive]].',
        '6': 'Optional: to see which videos are watched, open [[Videos watched]] and turn on [[Record watched videos]] for the extension.',
      },
    },
    inviteParent: {
      title: 'Invite another parent',
      summary:
        'Let a second parent join the same family and manage the same child devices.',
      tip: 'Only the family owner can approve join requests. Approve promptly, as requests can expire. A family can have up to 3 parents on the free plan and during the trial, and up to 6 with Premium.',
      steps: {
        '1': 'On the family owner device, open Family, tap +, and choose Invite parent.',
        '2': 'If you have not created a family name yet, enter one and select Create family.',
        '3': 'Show the invite QR code to the other parent, or share the invite code with them.',
        '4': 'On the other parent device: open KidGate as a parent, open Family, and tap the scan icon (Scan a code). Then scan the invite QR code or enter the code.',
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
        '2': 'Open Family and tap the scan icon (Scan a code).',
        '3': 'Scan the owner’s invite QR code, or select Enter code manually and type the 6-character invite code.',
        '4': 'Wait for the owner to approve. Keep the app open until you see that you have joined the family.',
        '5': 'Confirm that the child devices appear under Family. Open one device to view its status and controls.',
      },
    },
    manageDevices: {
      title: 'Rename or remove a device',
      summary:
        'Give a device a name everyone recognizes, or disconnect one your child no longer uses.',
      keywords:
        'unpair, disconnect, delete device, old phone, new phone, sold, change name, reset',
      tip: 'Only the family owner can rename or remove devices. Removing a device cannot be undone: its time requests and activity history are deleted. To protect it again, pair it as a new device.',
      steps: {
        '1': 'To rename a device, open it from [[Family]] or from your child, then select [[Edit]] next to its name.',
        '2': 'Enter a name every parent will recognize at a glance, then save.',
        '3': 'To remove a device, open it, select [[Remove device]] at the bottom of its screen, then confirm. On the family card’s [[Child devices]] tab, you can also swipe left on a device.',
        '4': 'The device leaves your family, and KidGate on that device shows that it was removed.',
        '5': 'To use the device again, for example after a reset or when it passes to another child, pair it as a new device with [[Add child device]] in [[Family]].',
      },
    },
    androidPermissions: {
      title: 'Android permissions (child device)',
      summary:
        'Turn on Usage access, Display over other apps, Accessibility, battery, and related permissions.',
      keywords:
        'accessibility, usage access, display over other apps, notifications, device admin, vpn, grant',
      tip: 'Completeness matters more than order. Every red or not-allowed row on the child Status screen should be fixed before you rely on locking or Blocked Hours.',
      steps: {
        '1': 'Open KidGate, go to [[Status]], and work top to bottom through the permission list.',
        '2': '[[Notifications]]: tap the row, then [[Allow]]. Parents need push notifications for lock commands and time requests.',
        '3': '[[Usage access]]: open the system screen, find KidGate, and turn it on. This is required for screen time tracking and limits.',
        '4': '[[Display over other apps]]: allow KidGate. This is required so the lock screen can appear above other apps.',
        '5': '[[Accessibility]] lock helper: open [[Settings]], then [[Accessibility]], find KidGate under [[Installed / Downloaded apps]], and turn it on. This keeps the lock enforced.',
        '6': '[[Unrestricted battery]]: select [[Allow]] when prompted. If no prompt appears, open [[App info]], then [[Battery]], and choose [[Unrestricted]].',
        '7': '[[Alarms & reminders]]: allow this so Blocked Hours start and end on time.',
        '8': '[[Location]] and [[Camera]] (for Check-In and SOS photos): allow them as KidGate requests. Return to [[Status]] and confirm every row is allowed.',
      },
    },
    iosScreenTime: {
      title: 'iOS Screen Time (child device)',
      summary:
        'Allow App & Website Usage so locking, schedules, and app selection can work.',
      keywords: 'screen time, family controls, iphone, ipad, authorize',
      tip: 'If the Allow button is missing, open iOS Settings, go to Screen Time, and make sure Screen Time is enabled on the child device first.',
      steps: {
        '1': 'Open KidGate and stay on the [[Status]] screen.',
        '2': 'Select [[Allow App & Website Usage]], or the Screen Time banner.',
        '3': 'In the system dialog, select [[Allow]]. Do not dismiss the dialog without choosing.',
        '4': 'Return to KidGate. The banner disappears once authorization succeeds.',
        '5': 'If authorization was denied earlier: open iOS [[Settings]], find KidGate, turn on [[Screen Time]] on that page, and reopen KidGate.',
        '6': 'To choose blocked apps: open KidGate [[Settings]], select [[Unlock with Parent PIN]], open [[Blocked Apps]], and save.',
        '7': 'Open your child (or the device, if no child is assigned to it), then [[Blocked Apps]], and confirm the list has synced. Turn blocking on when you are ready.',
      },
    },
    oemKeepRunning: {
      title: 'Keep KidGate running (manufacturer settings)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei, and similar devices often pause background apps.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, battery saver, autostart, stops working, killed in background',
      tip: 'After changing battery rules, restart the child device once, reopen KidGate, then test locking from the parent device.',
      steps: {
        '1': 'Open KidGate, go to [[Status]], and find the [[Allow autostart]] step. It appears only on devices whose manufacturer needs it.',
        '2': 'Allow [[Autostart]] for KidGate in the manufacturer security screen (the wording varies by device).',
        '3': 'Set battery usage for KidGate to [[Unrestricted]] in both Android settings and the vendor battery menu, if both exist.',
        '4': 'Disable any “sleeping apps”, “deep sleeping apps”, or “put apps to sleep” lists that include KidGate.',
        '5': 'If a shortcut does not work, open the Security or Device care app manually and search for KidGate, [[Autostart]], or [[Battery]].',
        '6': 'Mark each row [[Done]] in KidGate after you complete it, so you can see what remains.',
      },
    },
    dailyLimit: {
      title: 'Set a Daily Limit',
      summary: 'Cap how many minutes the child may use the device each day.',
      keywords: 'screen time, hours per day, time is up, budget, extend',
      tip: 'Usage data comes from the child device. If the counter looks stuck, open KidGate on the child device and wait for a sync.',
      steps: {
        '1': 'On the parent device, open [[Family]], then tap your child (or the device, if no child is assigned to it).',
        '2': 'Under [[Essential controls]], select [[Daily Limit]].',
        '3': 'Choose a minutes-per-day value (or edit the existing cap), then save.',
        '4': 'Confirm the device card shows today’s used and limit minutes after the child device syncs.',
        '5': 'When the limit is reached, the device locks according to platform rules. Select [[Unlock]] on the device screen if you want to restore access early.',
      },
    },
    blockedHours: {
      title: 'Set Blocked Hours',
      summary: 'Schedule the time ranges when the device should stay locked.',
      keywords: 'bedtime, night, school hours, schedule, downtime',
      tip: 'Set school hours and bedtime ranges first. Avoid overlapping ranges to keep the schedule clear.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then [[Blocked Hours]].',
        '2': 'Select [[Add blocked time]], then set a start time, an end time, and the days it repeats.',
        '3': 'Save the range. Repeat to add another range.',
        '4': 'Turn the schedule on if an enable toggle is shown.',
        '5': 'On the child device, confirm the [[Alarms & reminders]] and [[Screen Time]] permissions are still allowed so schedules run on time.',
        '6': 'During an active range, the device card shows Blocked Hours active · locked. Use [[Unlock]] only when you intentionally override the schedule.',
      },
    },
    blockedApps: {
      title: 'Block specific apps',
      summary:
        'Choose apps on the child device, then enable blocking from the parent device.',
      keywords: 'block app, tiktok, facebook, instagram, games, roblox, hide app',
      tip: 'On iOS, Apple may hide exact app names from parent devices. Selection still happens on the child device with the Parent PIN.',
      steps: {
        '1': 'Use the child device directly. Open KidGate, then Settings.',
        '2': 'Select Unlock with Parent PIN and enter the Parent PIN.',
        '3': 'Open Blocked Apps (on a computer or TV: Choose apps to block). Select the apps (and categories, if shown), then save on the child device.',
        '4': 'On the parent device, open your child (or the device, if no child is assigned to it), then Blocked Apps, and wait for the selected list to appear.',
        '5': 'Turn on Enable App Blocking. The status should read Blocking is on.',
        '6': 'Test by opening a blocked app on the child device. It should be restricted according to platform rules.',
        '7': 'To change the list later, repeat the selection on the child device with the Parent PIN. The parent device will sync the new list.',
      },
    },
    appLimits: {
      title: 'Set App Limits',
      summary: 'Give individual apps their own daily cap, on top of the Daily Limit.',
      keywords: 'app time limit, minutes per app, tiktok, youtube, games',
      tip: 'App Limits is not available on iPhone or iPad. On a computer or TV, an app that reaches its cap is closed after it opens rather than stopped from opening.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then [[App Limits]]. If your child uses more than one device, choose which one: each device has its own list.',
        '2': 'Under [[Add a limit]], tap an app. Only apps used today on that device are listed, and each starts with a 60-minute cap.',
        '3': 'Set each cap with the dial or a preset, from 5 minutes to 8 hours a day. You can cap up to 20 apps.',
        '4': 'Select [[Save]]. Limits reset at midnight on the child device.',
        '5': 'The Daily Limit still applies to the whole device, so an app can be locked before its own cap runs out. To remove a limit, select [[Remove]] on its card, then save.',
      },
    },
    lockUnlock: {
      title: 'Lock and unlock the device',
      summary: 'Immediately lock the child device, or restore access.',
      tip: 'On Android, locking is strongest when Display over other apps and Accessibility are both enabled. On iOS, locking depends on Screen Time authorization.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it).',
        '2': 'Select [[Lock all]] to lock every device of that child, or open one device and select [[Lock device]].',
        '3': 'Wait a few seconds. The status should change to Locked. If nothing changes, open KidGate on the child device and recheck permissions.',
        '4': 'To restore access, select [[Unlock all]] (or [[Unlock]] on the device screen) and confirm.',
        '5': 'Optional: you can also lock or unlock quickly from Family if those shortcuts appear on the device card.',
        '6': 'A locked phone or computer still lets your child send an SOS. On Android, SOS also opens calls, maps and messages for 5 minutes while everything else stays locked, and it appears in [[Activities]].',
      },
    },
    pauseBrowsing: {
      title: 'Pause browsing for a while',
      summary:
        'Block the web on a device for 5 minutes to 8 hours. Calls and offline apps keep working.',
      keywords: 'turn off internet, pause wifi, no network, offline, downtime',
      tip: 'In the Chrome extension a pause covers Chrome only. For a break that repeats every day, use Blocked Hours instead.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then [[Pause browsing]] in the [[Safety monitoring]] section.',
        '2': 'Choose a length with the dial or a quick preset (30, 60 or 120 minutes), then confirm.',
        '3': 'The web stays blocked on that device until the time runs out. Your Web Filter settings are not changed, and the pause works even when the Web Filter is off.',
        '4': 'To end it early, open the device, tap the [[Pause browsing]] card, and select [[Resume]]. The minutes left are not kept.',
        '5': 'From your child’s profile, a pause applies to one device. If your child uses several, pause each one from its own device screen.',
      },
    },
    timeRequests: {
      title: 'Answer requests for more time',
      summary:
        'Your child can ask for extra minutes when the Daily Limit runs low, and you approve or decline from your device.',
      tip: 'Requests only appear when the device has a Daily Limit. Approved minutes count for today, on the device that asked, and do not lift a lock you set or Blocked Hours. Android TV and the Chrome extension cannot send requests.',
      steps: {
        '1': 'On the child device, your child selects [[Request more time]] on the KidGate home screen (on Android, also from the lock screen when the limit is reached), picks the minutes, adds an optional reason, and sends it.',
        '2': 'You get a notification. Open KidGate: the request waits in the [[Needs approval]] card on [[Family]], on your child, and on the device.',
        '3': 'Check the minutes and the reason, then select [[Approve]] to add exactly those minutes for today, or [[Not now]] to decline.',
        '4': 'The child device is told the answer, and approved minutes apply straight away. Each device can have one request waiting at a time.',
        '5': 'Answered requests are listed in [[Activities]]. To stop these notifications on your device, turn off [[Extra time requests]] in [[Push notifications]] in Settings.',
      },
    },
    rewardTasks: {
      title: 'Set up Reward tasks',
      summary: 'Create small tasks your child can finish to earn extra minutes today.',
      tip: 'Bonus minutes only count when the device has a Daily Limit. The minutes go to the device your child used to mark the task done. Reward tasks are not available on Android TV or in the Chrome extension.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then [[Reward tasks]].',
        '2': 'Select [[New task]], or start from a template. Enter the task, choose the reward in minutes (5 to 240), a difficulty, and whether it repeats [[Every day]] or [[One time]], then select [[Create task]].',
        '3': 'On the child device, the task appears under [[Earn extra time]]. When it is done, your child selects [[I did it]].',
        '4': 'You get a notification. In [[Ready to review]] (on the Reward tasks screen, on Family, or on your child), select [[Approve]] to add the minutes to today, or [[Send back]] so your child can try again.',
        '5': 'Tap a task to edit or delete it. The free plan runs up to 10 active tasks at once; Premium allows 20.',
        '6': 'Each task is worth 1 to 3 stars, set by its difficulty, and stars count once you approve the task. To let your children compare this week’s stars, the family owner opens [[Family]], then the family card, and turns on [[Star chart]] in the [[Children]] tab. Each child then sees it in KidGate on their device. It starts again every week.',
      },
    },
    locationSharing: {
      title: 'Turn on location sharing',
      summary: 'See your child’s latest location on the parent device.',
      keywords: 'gps, map, where is my child, find phone, places',
      tip: 'Location requires permission on the child device and a stable network connection. Indoor GPS can be less precise.',
      steps: {
        '1': 'On the child device, allow Location for KidGate when prompted (or in system Settings).',
        '2': 'On the parent device, open your child (or the device, if no child is assigned to it), then Location.',
        '3': 'Turn sharing on if it is off, then wait for the first update.',
        '4': 'If the status still shows waiting, tap the refresh button, or reopen the screen.',
        '5': 'Optional: open your child (or the device, if no child is assigned to it), then the [[Alerts]] section, and choose [[Places]] to set up Place Alerts for when your child enters or leaves a saved place.',
        '6': 'If the phone is misplaced nearby, open Location and tap [[Ring device]]. An iPhone stays quiet while it is on silent or in a Focus.',
      },
    },
    checkIn: {
      title: 'Request a Check-In',
      summary:
        'Ask your child to confirm they are safe, with location and an optional photo.',
      tip: 'Camera permission on the child device is required for Check-Ins with photos.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it).',
        '2': 'Select [[Check-In]] (the quick action, or the row in the [[Safety monitoring]] section).',
        '3': 'The child device receives a Check-In notification and screen. The child taps to confirm they are okay, or to ask for help.',
        '4': 'If camera access is allowed, KidGate attaches a photo along with the location when possible.',
        '5': 'On the parent device, open Check-In history to review the latest response and photo.',
      },
    },
    sos: {
      title: 'SOS emergency alerts',
      summary:
        'How a child sends an SOS, what it carries, and how parents respond to it.',
      keywords:
        'panic button, help, danger, unsafe, audio, voice, microphone, siren, email, grandparent, neighbour, neighbor',
      tip: 'SOS works on phones and computers, not on a TV or in the Chrome extension. Sound is recorded on phones only. Test it once at home, and agree with your child on when to use SOS and when a Check-In is enough.',
      steps: {
        '1': 'On the child device, open SOS in KidGate. On a phone, it is the button in the middle of the bottom bar.',
        '2': 'Hold the SOS button for 5 seconds. Letting go earlier cancels it.',
        '3': 'The alert goes out right away, with the location if it is available. On a phone, the camera then opens for a photo, which can be skipped. If the microphone was allowed during setup, up to 15 seconds of sound is recorded from the moment the SOS is sent.',
        '4': 'Parents receive an urgent notification, even during quiet hours. If KidGate is open, the alert appears on screen, with the SOS siren unless it is turned off in Settings.',
        '5': 'Open your child (or the device, if no child is assigned to it), then the [[Alerts]] section, and choose [[SOS]]. Each alert shows the location ([[Open in Maps]]), the photo and the [[Sound recording]], which can arrive a little after the alert. Select [[I’m on it]] to mark it as responded.',
        '6': 'To also email people outside the family, open [[Family]], then your family card, and choose [[Trusted contacts]]. Select [[Add contact]] to add up to 5. Each SOS emails them the device name and last known location, never the photo or sound. Tell them first.',
      },
    },
    webFilter: {
      title: 'Limit inappropriate websites',
      summary:
        'Turn on the Web Filter for inappropriate content where the platform supports it.',
      keywords:
        'block website, block link, url, adult content, safe search, dns, vpn, iphone, ipad',
      tip: 'Web filtering depends on platform capabilities. Combine it with Blocked Apps for stronger protection.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then Web Filter.',
        '2': 'Review the current status (inappropriate sites limited, or filtering off).',
        '3': 'Turn filtering on and save if a toggle is shown.',
        '4': 'Check again later from the same screen. If the status stays Waiting, reopen KidGate on the child device so settings can sync.',
        '5': 'On an iPhone or iPad, open KidGate on the child device and select Allow when iOS asks to add VPN configurations, then enter the device passcode. This is asked once.',
      },
    },
    protectionAlerts: {
      title: 'Protection Alerts',
      summary:
        'Get notified when an important permission on the child device is turned off.',
      tip: 'A protection alert means KidGate protection has weakened. Restore the permission on the child device as soon as you can.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then the [[Alerts]] section, and choose [[Protection]] to open Protection Alerts.',
        '2': 'Review recent events such as Display over other apps, Accessibility, Usage access, Camera, or Location being turned off.',
        '3': 'On the child device, open KidGate, then Status and turn the named permission back on.',
        '4': 'Return to Protection Alerts and confirm that no new unexpected events appear.',
        '5': 'Keep notifications enabled on the parent device so you learn about changes quickly.',
      },
    },
    usageReports: {
      title: 'Read usage reports',
      summary:
        'See how long each device was used today and over the last 30 days, per child, and in a report every Monday.',
      tip: 'Free families see today’s total and the top 3 apps, updated when you check. Premium adds 30 days of history, when each device was used, every app, a report for each child, and a new weekly report every Monday. iPhone and iPad report the total only.',
      steps: {
        '1': 'Open [[Reports]]. [[Today]] adds up every device; below it are the [[Weekly report]], each child ([[By child]]) and each device ([[By device]]).',
        '2': 'Tap a device for its [[Usage Report]]: today against the Daily Limit, [[Last 30 days]], [[When it was used]] and [[Most used apps]]. You can also open it from [[Usage today]] on the device’s screen.',
        '3': 'Tap a child for one report across all their devices, for [[Today]], [[7 days]] or [[30 days]]. Time on two screens at once counts once, so it can be lower than the devices added up.',
        '4': 'A new [[Weekly report]] arrives every Monday morning, with a notification. It suggests one thing you could change and opens the right setting.',
        '5': 'Opening KidGate asks each device for fresh numbers, so they can take a few minutes to update. A device with no internet connection reports when it is back online.',
      },
    },
    widget: {
      title: 'Add a screen time widget',
      summary:
        'See each child’s screen time on your home screen, and let your child see how much time is left on theirs.',
      keywords:
        'home screen, launcher, at a glance, minutes left, remaining, iphone, android',
      tip: 'Widgets work on iPhone, iPad and Android, not on a computer or TV. A widget shows the last numbers KidGate received and the time of that update.',
      steps: {
        '1': 'Open [[Settings]] and select [[Add widget to Home Screen]]. On most Android phones, you only confirm where it goes. Otherwise, KidGate shows the steps to add it yourself.',
        '2': 'To add it yourself, touch and hold an empty spot on the home screen. On iPhone, tap Edit (or + on older versions), then Add Widget. On Android, tap Widgets. Find KidGate and choose the Screen time widget.',
        '3': 'Each child’s row shows today’s screen time against their Daily Limit, and children who reached it come first. It fits up to 2 children on iPhone and up to 3 on Android.',
        '4': 'It updates when you open KidGate. While the app is closed, it updates at most every 20 minutes, and only while a child is using a device.',
        '5': 'On your child’s phone, add the Screen time left widget the same way. It shows how much time is left today, or why the device is locked, and updates while KidGate is open on that phone.',
      },
    },
    webHistory: {
      title: 'Check Web History',
      summary:
        'See which sites a device reached and which ones the Web Filter blocked, day by day.',
      keywords: 'browsing history, sites visited, browser, chrome, safari',
      tip: 'Web History is part of Premium. It lists sites, not pages or minutes, and some rows are background traffic from apps. Android TV can be up to an hour behind.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then [[Web History]] in the [[Safety monitoring]] section. From your child, it combines all their devices.',
        '2': 'Each day lists sites by kind, with how many times each was reached. Select [[Blocked only]] to see just what the Web Filter stopped.',
        '3': 'To block a whole kind of site, open its section and select the Block button at the end of it. From your child’s profile, this applies to all their devices.',
        '4': 'History comes from the Web Filter, so it only fills while the filter is running on that device.',
        '5': 'History is kept for 30 days. When your child asks to open a blocked site, the request appears in [[Needs approval]], not here.',
      },
    },
    videoHistory: {
      title: 'See Videos watched',
      summary:
        'Keep a list of the YouTube videos your child watches, with the channel and the time.',
      keywords: 'youtube, shorts, videos watched, watch history',
      tip: 'Videos watched is part of Premium and covers YouTube only. It works on Android phones, Android TV and the Chrome extension, not on iPhone or iPad. On a Mac or PC, add the Chrome extension. On a TV, Shorts are not listed.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then [[Videos watched]] in the [[Safety monitoring]] section.',
        '2': 'Turn on [[Record watched videos]]. It stays off until you turn it on, and from your child it applies to all their devices.',
        '3': 'On an Android phone, KidGate also needs notification access: on the child device, open KidGate [[Settings]], select [[Unlock with Parent PIN]], then [[Allow notification access]] under [[Message Alerts]]. Shorts also need Accessibility.',
        '4': 'Videos appear by day, with the channel and how many times each was played. Tap one to find it on YouTube.',
        '5': 'On a Mac or PC, the screen shows how to add the Chrome extension instead. The extension records videos as a device of its own.',
      },
    },
    appAlerts: {
      title: 'Follow app installs',
      summary:
        'See when apps are installed or removed, list what is on a device, and hold new apps until you allow them.',
      tip: 'Approve new apps is free. The Apps screen, with install history and the installed-apps list, is part of Premium. iPhone and iPad cannot report installs; there, Approve new apps hides the App Store instead.',
      steps: {
        '1': 'On the parent device, open your child (or the device, if no child is assigned to it), then [[Apps]] in the [[Alerts]] section.',
        '2': '[[Recent changes]] lists apps installed and removed, newest first. You also get a notification for each one.',
        '3': '[[Installed apps]] lists what is on the device, with the apps [[Worth a look]] at the top. Select [[Safe]] to move an app out of that group. To stop an app, use Blocked Apps.',
        '4': 'To hold new apps until you allow them, open [[Blocked Apps]] and turn on [[Approve new apps]]. Any app installed after that stays blocked on the device.',
        '5': 'When a new app is waiting, select [[Allow]] next to it to let it open.',
      },
    },
    messageAlerts: {
      title: 'Turn on Message Alerts',
      summary:
        'Get alerted when a worrying word or phrase appears in messages or searches on your child’s Android phone. You see the flagged word or phrase, never the message.',
      keywords: 'sms, messenger, whatsapp, keywords, bullying, read messages',
      tip: 'Message Alerts is part of Premium and works on Android phones only. Only the category and the flagged word or phrase reach you. AI analysis stays off unless a parent turns it on for the family.',
      steps: {
        '1': 'On the child’s Android phone, open KidGate [[Settings]], select [[Unlock with Parent PIN]], then [[Allow notification access]] under [[Message Alerts]], and turn KidGate on in the list that opens.',
        '2': 'On your device, open your child (or the device, if no child is assigned to it), then [[Message Alerts]] in the [[Alerts]] section, and tap the settings icon at the top. If your child has several devices, select the Android phone first.',
        '3': 'Turn on [[Scan messages they receive]]. [[Also flag strong language]] is optional, and you can choose up to 3 [[Languages scanned]].',
        '4': 'To also scan what your child types and searches: on the child device, select [[Allow this]] under [[Message Alerts]], then turn on [[Scan messages they type]] and [[Scan what they search for]] on your device.',
        '5': 'Alerts appear under [[Recent alerts]] with the category and the flagged word or phrase. Select [[What to do next]] for advice on talking about it.',
      },
    },
    childProfiles: {
      title: 'Add a child and assign devices',
      summary:
        'Give each child a profile, then assign the devices they use, so their rules and screen time follow them.',
      tip: 'Only the family owner can add children and assign devices. A new device is not assigned to anyone until you choose.',
      steps: {
        '1': 'In [[Family]], tap + and choose [[Add a child]]. Enter a name and save.',
        '2': 'After you pair a new device, KidGate asks who uses it. Pick your child, or [[No one]] for a shared device. KidGate then offers a starter set of protections: select [[Turn on protection]] or [[Not now]].',
        '3': 'A device that nobody has been picked for appears under [[Not assigned]] in Family. Select [[Assign to a child…]] on its card.',
        '4': 'Once a device is assigned, the Daily Limit, Blocked Hours, Web Filter, Check-In, SOS, places and Reward tasks are set on your child and apply to all their devices. The Daily Limit becomes one total across those devices.',
        '5': 'To move a device, open the child who should have it and select [[Assign another device…]]. To unassign one, swipe it on your child’s profile and select [[Unassign]]. Removing a child’s profile keeps their devices paired.',
      },
    },
    plans: {
      title: 'Premium and the free plan',
      summary:
        'What the trial, the free plan and Premium include, and how to subscribe.',
      keywords: 'premium, price, subscription, free trial, cancel, refund, upgrade',
      tip: 'Only the family owner can subscribe or restore a purchase, and only in the phone app. One plan covers the whole family and every parent in it.',
      steps: {
        '1': 'Open [[Settings]]. The card at the top shows your current plan; select [[View plans]].',
        '2': 'The 7-day trial starts once your first child device is paired, and includes everything in Premium.',
        '3': 'On the free plan, every rule keeps working, but only one device reports: today’s total and the top 3 apps, updated when you check. Premium adds live updates, every device, 30 days of history, web and video history, and weekly reports.',
        '4': 'If the trial ends with more than one child device, KidGate asks you to [[Choose your primary device]]. That one keeps reporting; the others show [[Paused]] but keep their rules. You can change the choice once every 7 days.',
        '5': 'To subscribe, choose a plan and select [[Subscribe to Premium]]. Subscribing brings every paused device back. If you have paid before, select [[Restore purchases]].',
      },
    },
    notificationSettings: {
      title: 'Choose which alerts you get',
      summary:
        'Turn each kind of alert on or off, and set quiet hours, on each parent phone.',
      tip: 'SOS always comes through, even with everything off and during quiet hours. These settings apply to this phone only; other parents choose their own.',
      steps: {
        '1': 'Open [[Settings]], then [[Push notifications]].',
        '2': 'Under [[Alerts]], turn off any kind of alert you do not want on this phone, for example [[Extra time requests]] or [[Apps installed or removed]].',
        '3': '[[Weekly summary]] controls the Monday notification for the weekly report.',
        '4': 'Turn on [[Quiet hours]] and set [[From]] and [[To]] to silence alerts overnight. The times follow this phone’s clock.',
        '5': 'In Settings, [[In-app alerts]] and [[SOS siren]] are separate: they control the banner inside the app and the loud SOS sound on this phone.',
      },
    },
    appLanguage: {
      title: 'Change the app language',
      summary:
        'Choose which language KidGate uses on each phone and on the web dashboard.',
      keywords: 'english, translation, wrong language, display language, locale',
      tip: 'Each phone keeps its own language. Its notifications and widget follow it.',
      steps: {
        '1': 'On a parent or child phone, open [[Settings]] and select [[Language]].',
        '2': 'Choose a language to keep it fixed, or [[Device language]] to follow the phone’s own setting. If KidGate does not offer the phone’s language, it uses English.',
        '3': 'The app switches right away. Notifications to this phone and its widget use the new language too.',
        '4': 'On the web dashboard, change the language in the account section of the side menu. It applies to that browser only.',
      },
    },
    webSignIn: {
      title: 'Use KidGate on a computer',
      summary: 'Sign in to the web dashboard and manage your family from a browser.',
      tip: 'Only allow a browser you are signing in to yourself: it gets the same control as your phone. The web dashboard cannot pair devices or buy a plan. To sign a browser out, use Sign out on the dashboard.',
      steps: {
        '1': 'On the computer, open dashboard.kidgate.app and choose [[Sign in with the KidGate app]]. A QR code appears.',
        '2': 'On your phone, open [[Settings]], then [[Sign in on the web]]. You can also scan from [[Family]] with the scan icon.',
        '3': 'Scan the QR code in the browser. If the camera cannot read it, enter the 6-character code instead.',
        '4': 'Check that the code matches, then select [[Allow]]. Select [[Don’t allow]] if you did not start this sign-in.',
        '5': 'The browser signs in within a few seconds and can make changes for 7 days. After that it still shows your family; to change something, select [[Unlock changes]] on the dashboard and enter your Parent PIN, or approve it from your phone again.',
      },
    },
    securityPins: {
      title: 'Parent PIN and App Lock',
      summary:
        'Two different PINs: the Parent PIN protects settings on your child’s device, and App Lock protects the parent app on your phone.',
      tip: 'Only the family owner can set or reset the Parent PIN. Never share it with your child.',
      steps: {
        '1': 'Open [[Settings]]. Under [[Security]], select [[Parent PIN]] to create a 6-digit PIN, or to change it.',
        '2': 'Your child’s device asks for the Parent PIN before Blocked Apps can be changed or KidGate can be signed out there.',
        '3': 'If you forget it, select [[Forgot PIN?]] in the same place to set a new one as the family owner.',
        '4': 'If a child device locks itself after 5 wrong PIN attempts, Security shows an unlock row for that device. Select it to reset the attempts.',
        '5': 'To protect the parent app on this phone, turn on [[App Lock]] and create its own 6-digit PIN. You can also allow unlocking with Face ID, Touch ID or a fingerprint.',
      },
    },
    reportProblem: {
      title: 'Report a problem',
      summary:
        'Tell the KidGate team what went wrong, attach screenshots, and read the reply in the app.',
      keywords:
        'bug, contact us, feedback, not working, broken, customer service, help desk, email',
      tip: 'You get a notification when KidGate replies. If you missed it, the Support row in Settings shows New reply.',
      steps: {
        '1': 'Open [[Settings]] and select [[Support]]. On the web dashboard, Support is in the menu.',
        '2': 'Select [[Report a problem]], or [[New report]] if you have sent one before.',
        '3': 'Describe what happened and on which device, attach up to 5 screenshots if they help, then select [[Send report]].',
        '4': 'Each report shows its status: [[Received]], [[In review]] or [[Resolved]]. The reply from KidGate appears under the report.',
        '5': 'You can reply under the report until it is closed. For a different problem, send a new report.',
      },
    },
    deleteAccount: {
      title: 'Delete your account',
      summary:
        'Remove your KidGate account and its data, with 14 days to change your mind.',
      tip: 'Deleting your account does not cancel an App Store or Google Play subscription; cancel it in the store. A co-parent who only wants to stop managing the family can leave it instead.',
      steps: {
        '1': 'Open [[Settings]] and, under [[Account]], select [[Delete account]].',
        '2': 'Read what will be removed. If you are the family owner, every co-parent and every child device loses access too.',
        '3': 'Confirm it is you (your password, or signing in again with Google or Apple), type OK, and select [[Delete permanently]].',
        '4': 'The account is deleted after 14 days. Until then, open KidGate and select [[Cancel deletion]] to keep everything.',
        '5': 'A co-parent’s deletion removes only their own account; the family stays. To leave a family without deleting your account, open the family card in Family and select [[Leave family]].',
      },
    },
  },
  onChildDevice: 'On the child device',
  onParentDevice: 'On your device',
  handoffHint:
    'KidGate can walk these steps on the child device itself: open it there, go to Status and choose Finish setup with a parent. Every step gets a button that opens the right screen.',
} as const;
