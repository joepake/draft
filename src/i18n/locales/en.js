/**
 * Source of truth for every string on the site. The other thirteen packs are
 * translations of this file and keep its exact key shape — `localeParity` in
 * the app is the model: a missing key falls back to English rather than
 * rendering blank, but a *silent* gap is still a bug worth catching by eye.
 *
 * Copy conventions:
 * - `{{name}}` placeholders are interpolated; numbers are locale-formatted.
 * - `key_one` / `key_other` variants are selected by a numeric `count` param.
 * - `*text*`, `**text**` and `[label](/route)` are rendered by <RichText>.
 * - The three legal pages stay English-only, so nothing from them is here.
 */
export default {
  meta: {
    title: 'KidGate — Parental control that respects your kid',
    description:
      "KidGate helps parents manage screen time, block apps, filter the web and stay in touch — without taking away a child's freedom.",
  },

  common: {
    loading: 'Loading…',
    signOut: 'Sign out',
  },

  language: {
    title: 'Language',
    change: 'Change language',
    system: 'Browser language',
    english: 'English',
    vietnamese: 'Vietnamese',
    spanish: 'Spanish',
    portuguese: 'Portuguese (Brazil)',
    german: 'German',
    french: 'French',
    japanese: 'Japanese',
    korean: 'Korean',
    arabic: 'Arabic',
    indonesian: 'Indonesian',
    italian: 'Italian',
    turkish: 'Turkish',
    hindi: 'Hindi',
    russian: 'Russian',
  },

  nav: {
    skip: 'Skip to content',
    main: 'Main',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
    signIn: 'Parent sign in',
  },

  footer: {
    blurb:
      'Parental control that helps families agree on screen time instead of fighting about it.',
    product: 'Product',
    dashboard: 'Parent dashboard',
    supportGuides: 'Support & guides',
    contact: 'Contact us',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    deleteData: 'Delete your data',
    rights: '© {{year}} KidGate. All rights reserved.',
    madeFor: 'Made for families on iOS and Android.',
  },

  legalNote:
    'This page is available in English only, and the English text is the version that applies. Contact [support@kidgate.app](mailto:support@kidgate.app) if you need help understanding any part of it.',

  store: {
    appleAria: 'Download KidGate on the App Store',
    appleSmall: 'Download on the',
    appleName: 'App Store',
    googleAria: 'Get KidGate on Google Play',
    googleSmall: 'Get it on',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: 'Parental control, done right',
    heroTitle: 'Protect your children',
    heroTitleAccent: 'without taking away their freedom.',
    heroLede:
      'KidGate gives parents calm, clear control over screen time, apps and safety — while kids keep a phone that still feels like theirs.',
    heroCheck1: 'Screen Time',
    heroCheck2: 'App Blocking',
    heroCheck3: 'Web Filter',
    heroCheck4: 'Location',
    heroCheck5: 'Family Dashboard',

    phoneDailyLimit: 'Daily Limit',
    phoneDailyLimitValue: '1h 24m of 3h used',
    phoneBlockedHours: 'Blocked Hours',
    phoneScheduleOn: 'Schedule on',
    phoneLocation: 'Location',
    phoneLocationValue: 'At school · 5 min ago',
    phoneCheckIn: 'Check-In OK',

    trust1Title: 'No ads, ever',
    trust1Text: "Children's data is never used for advertising",
    trust2Title: 'Delete anytime',
    trust2Text: 'Erase your family account and all data on request',
    trust3Title: 'iOS and Android',
    trust3Text: 'Native screen-time controls on both platforms',
    trust4Title: 'One plan per family',
    trust4Text: 'Every parent and child device, one subscription',

    featuresEyebrow: 'Features',
    featuresTitle: 'Everything a parent needs',
    featuresSub:
      "From daily limits to emergency alerts — one app for the whole family's digital wellbeing.",
    feature1Title: 'Screen Time & Daily Limits',
    feature1Text:
      'Set a daily cap and Blocked Hours for school and bedtime. The device locks itself when time is up.',
    feature2Title: 'App blocking',
    feature2Text:
      'Choose exactly which apps your child can open, protected by your Parent PIN, and switch blocking on remotely.',
    feature3Title: 'Per-app time limits',
    feature3Text:
      'Cap each app on its own, on top of the daily limit — “half an hour of TikTok” without banning it outright.',
    feature4Title: 'Web Filter & history',
    feature4Text:
      'Refuse adult and gambling sites, then see which sites the phone actually looked up and which ones were stopped.',
    feature5Title: 'Live location & places',
    feature5Text:
      "See your child's latest location, review history, and get told when they arrive at or leave a saved place.",
    feature6Title: 'Driving report',
    feature6Text:
      'Trips, distance and the fastest average between location points — enough to start a conversation, not a speed camera.',
    feature7Title: 'Check-In & SOS',
    feature7Text:
      'Ask your child to confirm they are safe, and receive an instant SOS with location and photo in an emergency.',
    feature8Title: 'Protection & app alerts',
    feature8Text:
      'Know the moment an important permission is switched off — and on Android, when an app is installed or removed.',
    feature9Title: 'Reward tasks & extra time',
    feature9Text:
      'Children earn bonus minutes by finishing tasks, or ask for more time. Both land on your phone for approval.',

    showcaseEyebrow: 'Parent dashboard',
    showcaseTitle: 'The whole family, on one screen',
    showcaseSub:
      'Screen Time, blocked attempts, location and anything that needs your attention — on your phone, or in any browser.',
    showcaseTile1: 'Screen Time today',
    showcaseTile2: 'Blocked attempts',
    showcaseTile3: 'Needs attention',
    showcaseCaption1: 'Read reports from any browser',
    showcaseCaption2: 'Changes approved from your phone',

    setupEyebrow: 'Setup',
    setupTitle: 'Up and running in minutes',
    setupSub:
      'No technical skills needed — the app walks you through every step.',
    step1Title: 'Set up your device',
    step1Text:
      'Install KidGate, choose “This is a parent device”, and sign in with Google, Apple or email.',
    step2Title: "Pair your child's device",
    step2Text:
      "Install KidGate on your child's phone and connect it by scanning a QR code. Under a minute.",
    step3Title: 'Set your rules',
    step3Text:
      'Pick a daily limit, block apps and hours, and turn on location — all from your own phone.',

    whyEyebrow: 'Why KidGate',
    whyTitle: 'Built for trust, not surveillance',
    whySub: 'Designed to keep the conversation between parent and child open.',
    why1Title: 'One plan, whole family',
    why1Text:
      'A single subscription covers every parent and child device. Only the family owner pays.',
    why2Title: 'Built for co-parenting',
    why2Text:
      'Invite a second parent to manage the same children, with access the owner approves.',
    why3Title: 'Privacy first',
    why3Text:
      "We never sell personal data and never use children's data for advertising. Delete everything anytime.",
    why4Title: 'Honest about limits',
    why4Text:
      'We tell you what each platform can and cannot enforce, instead of promising control that does not exist.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Questions parents ask first',
    faqSub: 'Quick answers before you download.',
    faq1Q: 'Is there a free trial?',
    faq1A:
      'Yes. The trial starts when your first parent and child devices are connected, and includes every Premium feature.',
    faq2Q: 'How many devices can I manage?',
    faq2A:
      'One subscription covers your whole family — multiple child devices and multiple parents on the same plan.',
    faq3Q: 'Can my child uninstall or bypass KidGate?',
    faq3A:
      'Sensitive settings sit behind your Parent PIN, and Protection Alerts tell you straight away if a key permission is turned off on the child device.',
    faq4Q: 'Can I manage everything from a computer?',
    faq4A:
      'You can sign in to the web dashboard to read reports. Changing limits or locking a device is approved from your phone, so a stolen password is never enough.',
    faqMore: 'More questions? Visit Support',

    ctaTitle: 'Start protecting your family today',
    ctaSub: 'Free trial with full access. No credit card needed to begin.',
    ctaNote: 'Cancel anytime from the App Store or Google Play.',
  },

  login: {
    title: 'Parent sign in',
    sub: 'Use the same account you created in the KidGate app. Signing in here shows the same family, devices and settings.',
    notConfiguredTitle: 'Firebase is not configured on this deployment.',
    notConfiguredBody:
      'Set the VITE_FIREBASE_* environment variables to enable sign-in.',
    qrWhy:
      'Approving from your phone is the only way to unlock the controls — locking a device and changing limits stay with the app. The methods below sign you in to view reports.',
    orViewOnly: 'or view-only sign in',
    google: 'Continue with Google',
    googleBusy: 'Opening Google…',
    apple: 'Continue with Apple',
    appleBusy: 'Opening Apple…',
    orEmail: 'or use your email',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    password: 'Password',
    submit: 'Sign in',
    submitBusy: 'Signing in…',
    forgot: 'Forgot password?',
    resetNeedsEmail:
      'Enter your email address first, then choose Forgot password.',
    resetSent: 'Password reset email sent to {{email}}.',
    foot: 'KidGate accounts are created in the mobile app — the web dashboard signs in to an existing family. New here? Install the app and pair a child device first.',
  },

  qr: {
    start: 'Sign in with the KidGate app',
    generating: 'Generating code…',
    step1: 'Open KidGate on your phone.',
    step2: 'Go to *Settings → Sign in on the web*.',
    step3: 'Scan this code, then approve.',
    waiting: 'Waiting for approval · expires in {{time}}',
    signingIn: 'Approved. Signing in…',
    expired: 'This code expired.',
    failed: 'Sign-in did not finish.',
    newCode: 'Show a new code',
    tryAgain: 'Try again',
  },

  authError: {
    generic: 'Something went wrong. Try again.',
    invalidEmail: 'That email address does not look right.',
    userDisabled: 'This account has been disabled.',
    userNotFound: 'No KidGate account uses that email.',
    wrongPassword: 'Wrong email or password.',
    tooManyRequests: 'Too many attempts. Wait a few minutes and try again.',
    popupClosed: 'Sign-in window was closed before finishing.',
    popupCancelled: 'Sign-in was cancelled.',
    popupBlocked:
      'Your browser blocked the sign-in window. Allow pop-ups for this site and try again.',
    accountExists:
      'That email is already registered with a different sign-in method. Use the one you set up in the app.',
    operationNotAllowed:
      'That sign-in method is not enabled for this project yet.',
    unauthorizedDomain:
      'This domain is not authorized in Firebase Authentication settings.',
    invalidCustomToken:
      'That sign-in link is no longer valid. Show a new QR code.',
    webRejected: 'The request was declined on the phone.',
    webExpired: 'The code expired. Generate a new one.',
    noFunctionsUrl:
      'Cloud Functions URL is not configured (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Your session expired. Sign in again.',
  },

  live: {
    checkingSession: 'Checking your session…',
    loadingFamily: 'Loading your family…',
    loadFailedTitle: 'Could not load your family',
    noAccess:
      'This account does not have access to a KidGate family. Sign in with the parent account you use in the app.',
  },

  time: {
    never: 'never',
    justNow: 'just now',
    minutes: '{{count}}m ago',
    hours: '{{count}}h ago',
    days: '{{count}}d ago',
  },

  viz: {
    hours: '{{count}}h',
    minutes: '{{count}}m',
    hoursMinutes: '{{hours}}h {{minutes}}m',
    none: '—',
    byDay: 'Screen Time by day',
    limit: 'Limit {{value}}',
    screenTime: 'Screen Time',
    bonus: 'Bonus',
    bonusEarned: 'Bonus earned',
    overLimit: 'Over the Daily Limit',
    dailyLimit: 'Daily Limit',
    ofLimit: 'of {{value}}',
    noLimit: 'no limit set',
    blocked: 'Blocked',
    blockedHours: 'Blocked Hours',
    day0: 'Sun',
    day1: 'Mon',
    day2: 'Tue',
    day3: 'Wed',
    day4: 'Thu',
    day5: 'Fri',
    day6: 'Sat',
  },

  perm: {
    screenTime: 'Screen Time',
    location: 'Location',
    notifications: 'Notifications',
    camera: 'Camera',
    backgroundAppRefresh: 'Background App Refresh',
    overlay: 'Display over other apps',
    batteryOptimization: 'Unrestricted battery',
    exactAlarm: 'Exact alarms',
    accessibility: 'Accessibility',
  },

  webCat: {
    adult: 'Adult content',
    gambling: 'Gambling',
    dating: 'Dating',
    drugs: 'Drugs & alcohol',
    violence: 'Violence & extremism',
    piracy: 'Piracy',
    social: 'Social networks',
    videoStreaming: 'Video streaming',
    gaming: 'Games',
    shopping: 'Shopping',
  },

  dash: {
    tabOverview: 'Overview',
    tabScreen: 'Screen Time',
    tabApps: 'Apps & Web',
    tabSafety: 'Safety',
    tabControls: 'Controls',

    children: 'Children',
    noChildren: 'No child devices paired yet.',
    manage: 'Manage',
    parents_one: '{{count}} parent',
    parents_other: '{{count}} parents',
    devices_one: '{{count}} child device',
    devices_other: '{{count}} child devices',
    planPremium: 'Premium',
    planTrial: 'Trial',
    fallbackFamily: 'Your family',
    fallbackDevice: 'Child device',

    statusOnline: 'Online',
    statusOffline: 'Offline',
    statusLocked: 'Locked',

    stateAllowed: 'Allowed',
    stateDenied: 'Turned off',
    stateNotDetermined: 'Not asked yet',
    stateRestricted: 'Restricted',
    stateUnavailable: 'Not available',
    stateUnknown: 'Unknown',

    lastActive: 'Last active {{when}}',
    checkIn: 'Check-In',
    sending: 'Sending…',
    lockDevice: 'Lock device',
    unlock: 'Unlock',
    working: 'Working…',
    lockNeedsApp: 'Locking requires the KidGate app on your phone',

    viewOnlyTitle: 'View only.',
    viewOnlyBody:
      'To lock a device, change limits or approve requests, sign out and sign in again by scanning the QR code with the KidGate app — approval from a paired parent phone is what unlocks the controls. Check-Ins work from here either way.',

    noDeviceTitle: 'No child device yet',
    noDeviceBody:
      "Open KidGate on your phone, go to *Family → + → Connect a child device*, and scan the QR code shown on your child's device. It will appear here within a few seconds of pairing.",

    toastCheckIn: '{{name}} will get a Check-In request.',
    toastTimeApproved: 'Extra time approved.',
    toastCheckInResent: 'Check-In sent again.',

    tileScreenToday: 'Screen Time today',
    tileSameAsAverage: 'Same as the 7-day average',
    tileDeltaUp: '↑ {{percent}}% vs 7-day average',
    tileDeltaDown: '↓ {{percent}}% vs 7-day average',
    tileBlocked: 'Blocked attempts',
    tileBlockedMeta: 'Apps stopped since install',
    tileSites: 'Sites filtered',
    tileCategoriesHit_one: '{{count}} category hit',
    tileCategoriesHit_other: '{{count}} categories hit',
    tileNothingBlocked: 'Nothing blocked yet',
    tileAttention: 'Needs attention',
    tileOpenItems: 'Open items below',
    tileAllClear: 'All clear',

    cardScreenTime: 'Screen Time',
    cardScreenTimeSub: 'Last 14 days, against the Daily Limit',
    cardRecent: 'Recent activity',
    cardRecentSub: 'Newest first',
    cardRecentEmpty:
      'Nothing logged yet. Locks, blocked apps, place alerts and screen-time syncs from this device will appear here.',
    cardAttention: 'Needs your attention',
    cardAttentionSub: '{{count}} open',
    cardAttentionEmpty: 'Nothing to review. Protections look healthy.',
    cardProtection: 'Protection health',
    cardProtectionSub: 'Checked {{when}}',

    attnMoreMinutes: '{{name}} asked for {{minutes}} more minutes',
    attnReason: '“{{reason}}” · {{when}}',
    attnCheckInMissed: 'Check-In was missed',
    attnCheckInMissedMeta: 'Sent {{when}} · no response',
    attnPermissionOff: '{{permission}} is turned off',
    attnPermissionOffMeta:
      'Protection is weaker until this is restored on the child device',
    attnLimitReached: 'Daily Limit reached — device locked',
    attnLimitReachedMeta: '{{used}} used today',
    attnBatteryLow: 'Battery is low ({{level}}%)',
    attnBatteryLowMeta: 'Location updates may pause if the phone dies',
    attnReview: 'Review',
    attnResend: 'Resend',
    attnHowToFix: 'How to fix',
    attnUnlock: 'Unlock',
    attnAppOnly: 'Available in the KidGate app',

    todayTitle: 'Today',
    todaySub: 'Against the Daily Limit and any bonus earned',
    used: 'Used',
    left: 'Left',
    dailyLimit: 'Daily Limit',
    bonusToday: 'Bonus today',
    off: 'Off',
    on: 'On',
    topAppsTitle: 'Top apps today',
    topAppsSub: 'Per-app caps shown as a marker',
    trendTitle: 'Screen Time trend',
    trendSub: 'Last {{count}} days',
    rangeDays: '{{count}}d',
    blockedHoursTitle: 'Blocked Hours',
    blockedHoursSub_one:
      '{{count}} time range · the device stays locked inside the shaded blocks',
    blockedHoursSub_other:
      '{{count}} time ranges · the device stays locked inside the shaded blocks',
    scheduleOff: 'Schedule is off',

    appUsageTitle: 'App usage today',
    appUsageSub: 'Time spent per app',
    appBlockingTitle: 'App blocking',
    appBlockingSub: 'Chosen on the child device with the Parent PIN',
    blockingLabel: 'Blocking',
    appsBlocked: 'Apps blocked',
    categories: 'Categories',
    perAppHint:
      'Per-app caps run independently of the blocklist — “30 minutes of TikTok” is a different decision from “no TikTok”.',
    perDay: '{{value}}/day',
    webActivityTitle: 'Web activity',
    webActivitySub: 'Most visited domains, last 30 days',
    colDomain: 'Domain',
    colVisits: 'Visits',
    colBlocked: 'Blocked',
    colLastSeen: 'Last seen',
    filterRefusedTitle: 'What the filter refused',
    filterRefusedSub_one: '{{count}} blocked lookup, last 30 days',
    filterRefusedSub_other: '{{count}} blocked lookups, last 30 days',
    nothingBlockedYet: 'Nothing has been blocked yet.',
    filterHintIos:
      'On iOS the filter uses Apple’s adult-content control — per-category blocking is Android only.',
    filterHintAndroid: 'Categories are enforced by the on-device DNS filter.',

    locationTitle: 'Location',
    locationSharingOff: 'Sharing is off',
    locationUpdated: 'Updated {{when}}',
    locationWaiting: 'Waiting for the first update',
    lastKnownLocation: 'Last known location',
    noPlaces:
      'No saved places yet. Add one in the app to get an alert when your child arrives or leaves.',
    placeRadius: '{{meters}}m · ',
    placeArrive: 'arrive',
    placeLeave: 'leave',
    placeNoAlerts: 'no alerts',
    sosTitle: 'SOS alerts',
    sosSub: 'Emergency signals from the child device',
    sosEmpty:
      'No SOS alerts. Test it once together so you both know how it works.',
    sosAcknowledged: 'acknowledged',
    sosActive: 'active',

    checkInsTitle: 'Check-Ins',
    checkInsSub: 'Ask your child to confirm they are safe',
    checkInSafe: 'Confirmed safe',
    checkInMissed: 'No response',
    checkInWaiting: 'Waiting',
    checkInPhotoRequested: 'photo and location were requested',
    checkInNoReply: 'no reply yet',
    checkInPhotoSkipped: 'photo skipped',
    checkInPhotoAttached: 'photo attached',
    checkInNoPhoto: 'no photo requested',
    sendCheckIn: 'Send a Check-In now',

    protectionAlertsTitle: 'Protection Alerts',
    protectionAlertsSub_one: '{{count}} event since install',
    protectionAlertsSub_other: '{{count}} events since install',
    protectionAlertsHint:
      'A protection alert means KidGate can enforce less than you set. Restore the permission on the child device to clear it.',

    limitCardTitle: 'Daily Limit',
    limitCardSub: 'Cap the minutes available each day',
    limitAria: 'Daily Limit minutes',
    limitScaleMin: '30m',
    limitScaleMax: '8h',
    limitHint:
      'Bonus minutes from reward tasks and approved time requests are added on top, for that day only.',
    whatsOnTitle: 'What is turned on',
    whatsOnSub: 'Changes sync to the child device',
    rowBlockedHours: 'Blocked Hours',
    rowBlockedHoursDesc_one: '{{count}} time range · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} time ranges · {{list}}',
    rowAppBlocking: 'App Blocking',
    rowAppBlockingApps: '{{count}} apps',
    rowAppBlockingApps_one: '{{count}} app',
    rowAppBlockingCategories: '{{count}} categories',
    rowAppBlockingCategories_one: '{{count}} category',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Web Filter',
    rowWebFilterDesc_one: '{{count}} category refused',
    rowWebFilterDesc_other: '{{count}} categories refused',
    rowLocation: 'Location sharing',
    rowLocationDesc: 'Last update {{when}}',
    rowLocationNone: 'No location yet',
    toggleInApp: 'Change this in the KidGate app',

    webFilterCatsTitle: 'Web Filter categories',
    webFilterCatsSub: 'Blocked content types',
    dnsHint:
      'Encrypted-DNS resolvers are always refused while the filter runs — leaving them reachable is what lets a browser route around every other category.',
    rewardTasksTitle: 'Reward tasks',
    rewardTasksSub: 'Earn extra minutes by finishing tasks',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskWaiting: ' · waiting for your approval',
    approve: 'Approve',
    approveInApp: 'Approve in the KidGate app',
  },

  support: {
    title: 'KidGate Support',
    updated: 'We’re here to help',

    contactTitle: 'Contact Us',
    contactEmail:
      '**Email:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Response time:** within 24 hours (Monday–Friday)',
    contactNote:
      'When contacting us, please include the email address of your KidGate parent account and a short description of the issue so we can help you faster.',

    startTitle: 'Getting Started',
    start1:
      '**1. Set up the parent device.** Install KidGate, open the app, and choose *This is a parent device*. Sign in with Google, Apple, or email, and name your family.',
    start2:
      '**2. Set a Parent PIN.** Go to *Settings → Security* and set a 6-digit Parent PIN. You need it to change sensitive settings and to choose blocked apps on the child device. Don’t share it with your children.',
    start3:
      '**3. Connect the child device.** Install KidGate on your child’s device and choose *This is a child device*. On the parent device, open *Family → + → Connect a child device*, then scan the QR code shown on the child device (or enter the 6-character code). Confirm the connection on the child device.',
    start4:
      '**4. Grant permissions on the child device.** Open the *Status* screen on the child device and allow every permission KidGate requests — on Android: notifications, Usage Access, Display over other apps, Accessibility, and unrestricted battery; on iOS: *Allow App & Website Usage* (Screen Time). Controls will not work fully until these are on.',
    start5:
      '**5. Configure controls.** From the parent device, open the child’s device card and set the Daily Limit, Blocked Hours, Blocked Apps, Web Filter, and location features.',
    startNote:
      'The app also includes a built-in step-by-step guide: *Settings → User guide*, covering device pairing, permissions, daily controls, and safety features in detail.',

    faqTitle: 'Frequently Asked Questions',

    faq1Q: 'Can I manage my family from a computer?',
    faq1A:
      'Yes. Open the [web dashboard](/dashboard) and sign in with the same account you use in the app — Google, Apple, or your email and password. It shows the same family, devices, reports and settings. Accounts and device pairing are still done in the mobile app.',

    faq2Q: 'How do I pair the parent and child devices?',
    faq2A:
      'On the child device, open KidGate and choose *This is a child device* — a QR code and a 6-character code appear. On the parent device, open *Family → + → Connect a child device* and scan the QR code (recommended) or enter the code manually. Then confirm the parent’s name on the child device. Codes expire — if pairing fails, tap *New code* on the child device and try again.',

    faq3Q: 'Can two parents manage the same family?',
    faq3A:
      'Yes. On the family owner’s device, open *Family → + → Add another parent device* and share the invite QR code or code. The other parent installs KidGate, signs in as a parent, and chooses *Family → + → Join family*. The owner then approves the request. One subscription covers the whole family; only the owner pays.',

    faq4Q: 'How does the free trial work?',
    faq4A:
      'The trial starts when your first parent and child devices are connected, and gives full access to every feature. Removing a child device does not reset the trial. When it ends, subscribe to Premium to keep using KidGate.',

    faq5Q: 'How do I cancel my subscription?',
    faq5A:
      'Subscriptions are billed through the App Store or Google Play, not by KidGate directly. On iOS: *Settings → your name → Subscriptions*. On Android: *Google Play → profile icon → Payments & subscriptions → Subscriptions*. The subscription renews automatically unless you cancel at least 24 hours before the current period ends.',

    faq6Q: 'How do I restore my purchases?',
    faq6A:
      'On the parent device, open the *Plans* screen and tap *Restore purchases*. Make sure you are signed in with the same app store account you used for the original purchase. Note that only the family owner can subscribe or restore purchases.',

    faq7Q: 'Why is screen-time data not showing up?',
    faq7A:
      'Usage data comes from the child device. Check that the child device is online, then open KidGate on it and look at the *Status* screen — every permission row should show as allowed (on Android, Usage Access is required for screen-time tracking). Reports can take a few minutes to sync.',

    faq8Q: 'Why doesn’t locking or Blocked Hours work?',
    faq8A:
      'On Android, locking needs *Display over other apps* and the *Accessibility* helper enabled, plus unrestricted battery. On Xiaomi, Samsung, Oppo, Vivo, and similar devices, also allow autostart and remove KidGate from any "sleeping apps" list (see *Status → Keep KidGate running* on the child device). On iOS, locking depends on Screen Time authorization. If a permission is turned off later, you’ll get a Protection Alert on the parent device.',

    faq9Q: 'How do I block specific apps?',
    faq9A:
      'App selection happens on the child device: open *KidGate → Settings*, enter the Parent PIN, choose *Choose apps to block*, and save. Then, on the parent device, open the device’s *Blocked Apps* screen and turn on *Enable App Blocking*. On iOS, Apple may hide exact app names from the parent device — that’s a platform limitation.',

    faq10Q: 'Why is the child’s location not updating?',
    faq10A:
      'Location must be allowed for KidGate on the child device, and the device needs a network connection. Open the device’s *Location* screen on the parent device and pull down to refresh. Battery-saver modes can delay updates, and indoor GPS can be less precise.',

    faq11Q: 'How do I remove KidGate from my child’s device?',
    faq11A:
      'Remove the device from the parent app first (open the device in *Family* and choose remove), then uninstall the app on the child’s device.',

    faq12Q: 'How do I delete my account and data?',
    faq12A:
      'In the parent app, go to *Settings → Account → Delete account*. This permanently deletes your family account and all data — devices, activity, location history, and SOS photos — for every parent and child. See our [Account & Data Deletion](/delete-account) page for all options, including deletion without having the app installed.',

    legalTitle: 'Legal',
    legalDeletion: 'Account & Data Deletion',
  },
}
