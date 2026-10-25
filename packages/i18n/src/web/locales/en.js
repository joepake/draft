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
 * - The Privacy Policy and Terms render the app pack's `legal` tree, in all
 *   fourteen languages. `/delete-account` is the `deleteAccount` group below —
 *   English and Vietnamese so far; the other twelve fall back to English.
 */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} of {{total}} apps are worth a look',
    summaryClear: 'Nothing flagged among {{total}} apps',
    summaryFlaggedExtension:
      '{{flagged}} of {{total}} Chrome extensions are worth a look',
    summaryClearExtension: 'Nothing flagged among {{total}} Chrome extensions',
  },
  meta: {
    title: 'KidGate — Parental control that respects your kid',
    description:
      'KidGate helps parents manage screen time, block apps, filter the web and stay in touch — without taking away a child’s freedom.',
  },

  common: {
    comingSoon: 'Coming soon',
    loading: 'Loading…',
    signOut: 'Sign out',
    crashTitle: 'This page stopped working',
    crashBody:
      'Reloading usually fixes it. Your family’s settings and your child’s devices are unchanged.',
    crashReload: 'Reload the page',
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
    plans: 'Plans',
    about: 'About',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
    dashboard: 'Dashboard',
  },

  footer: {
    blurb:
      'Parental control that helps families agree on screen time instead of fighting about it.',
    product: 'Product',
    about: 'About us',
    dashboard: 'Parent dashboard',
    supportGuides: 'Support & guides',
    download: 'Download',
    contact: 'Contact us',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    deleteData: 'Delete your data',
    rights: '© {{year}} KidGate. All rights reserved.',
    madeFor:
      'Made for families on iPhone, Android, Mac, Windows, Android TV and Chrome.',
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
    chromeName: 'Chrome Web Store',
  },

  home: {
    heroBadge: 'Parental control, done right',
    launchCountdown: 'Launching in',
    heroTitle: 'Protect your children',
    heroTitleAccent: 'without taking away their freedom.',
    heroLede:
      'KidGate gives parents calm, clear control over screen time, apps and safety — while kids keep a phone that still feels like theirs.',
    heroCheck1: 'Screen Time',
    heroCheck2: 'Blocked Apps',
    heroCheck3: 'Web Filter',
    heroCheck4: 'Location',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Daily Limit',
    phoneBlockedHours: 'Blocked Hours',
    phoneScheduleOn: 'Schedule on',
    phoneLocation: 'Location',
    phoneCheckIn: 'Check-In OK',

    trust1Title: 'No ads, ever',
    trust1Text: 'Children’s data is never used for advertising',
    trust2Title: 'Delete anytime',
    trust2Text: 'Erase your family account and all data on request',
    trust3Title: 'Phone, computer and TV',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV and Chrome on one family account',
    trust4Title: 'One plan per family',
    trust4Text: 'Every parent and child device, one subscription',

    featuresEyebrow: 'Features',
    featuresTitle: 'Everything a parent needs',
    featuresSub:
      'From daily limits to emergency alerts — one app for the whole family’s digital wellbeing.',
    feature1Title: 'Screen Time & Daily Limit',
    feature1Text:
      'Set a daily cap and Blocked Hours for school and bedtime. The device locks itself when time is up.',
    feature2Title: 'Blocked Apps',
    feature2Text:
      'Choose which apps your child can’t open, protected by your Parent PIN, and switch blocking on remotely.',
    feature3Title: 'App Limits',
    feature3Text:
      'On Android, Android TV and computers, cap each app on its own — “half an hour of TikTok” without banning it.',
    feature4Title: 'Web Filter & history',
    feature4Text:
      'Block adult sites, gambling, self-harm and more on every device; with Premium, also see which sites were looked up.',
    feature5Title: 'Location & places',
    feature5Text:
      'See where your child is up to 10 times a day; Premium adds live location and alerts for saved places.',
    feature6Title: 'Check-In & SOS',
    feature6Text:
      'Ask your child to confirm they are safe; in an emergency, their phone sends you an instant SOS with location.',
    feature7Title: 'Protection Alerts & app alerts',
    feature7Text:
      'Know the moment an important permission is switched off on your child’s phone, and approve new apps before they open on Android, Android TV or a computer.',
    feature8Title: 'Reward Tasks & Time Requests',
    feature8Text:
      'Children earn bonus minutes and stars for finished tasks, or ask for more time — you approve both from your phone.',
    feature9Title: 'Device Lock',
    feature9Text:
      'Lock the device now and release it when you are ready — dinner, homework, or a rule that was ignored.',
    feature10Title: 'Weekly report',
    feature10Text:
      'Every Monday: screen time, the daily average, what was blocked, and how the week compares with the one before.',
    feature11Title: 'YouTube & video history',
    feature11Text:
      'The YouTube videos and Shorts your child watched on Android and in Chrome, plus videos on Android TV. Not on iPhone.',
    feature12Title: 'Activity feed',
    feature12Text:
      'Everything that happened, in order — a device unlocked, a request answered, an alert raised; today on the free plan, 30 days on Premium.',
    featurePremium: 'Premium',
    platformsTitle: 'One KidGate, wherever the screen is',
    platformsSub:
      'The same rules and the same family account on a phone, a computer and an Android TV — and the same Web Filter in Chrome. The desktop app comes from this site, not from a store.',

    showcaseEyebrow: 'Parent dashboard',
    showcaseTitle: 'The whole family, on one screen',
    showcaseSub:
      'Screen Time, blocked attempts, location and anything that needs your attention — on your phone, or in any browser.',
    showcaseCaption1: 'Read reports from any browser',
    showcaseCaption2: 'Changes approved from your phone',

    setupEyebrow: 'Setup',
    setupTitle: 'Up and running in minutes',
    setupSub: 'No technical skills needed — the app walks you through every step.',
    step1Title: 'Set up your device',
    step1Text:
      'Install KidGate, choose “This is a parent device”, and sign in with Google or email — or Apple, on an iPhone.',
    step2Title: 'Pair your child’s device',
    step2Text:
      'Install KidGate on your child’s phone and connect it by scanning a QR code. Under a minute.',
    step3Title: 'Set your rules',
    step3Text:
      'Pick a Daily Limit and Blocked Hours, and turn on location and Blocked Apps from your own phone. The apps to block are chosen once on your child’s device, with your Parent PIN.',

    whyEyebrow: 'Why KidGate',
    whyTitle: 'Built for trust, not surveillance',
    whySub: 'Designed to keep the conversation between parent and child open.',
    why1Title: 'One plan, whole family',
    why1Text:
      'One Premium subscription covers every parent and every child device, and only the family owner pays. The free plan keeps one child device monitored.',
    why2Title: 'Built for co-parenting',
    why2Text:
      'Invite a second parent to manage the same children, with access the owner approves. A family can have up to 3 parents on the free plan and during the trial, and up to 6 with Premium.',
    why3Title: 'Privacy first',
    why3Text:
      'We never sell personal data and never use children’s data for advertising. Delete everything anytime.',
    why4Title: 'Honest about limits',
    why4Text:
      'We tell you what each platform can and cannot enforce, instead of promising control that does not exist.',

    onlyEyebrow: 'Only KidGate',
    onlyTitle: 'What you will not find elsewhere',
    onlySub:
      'Six things we checked against the apps parents compare us with. Each one names the platform it is true on.',
    only1Title: 'The living-room TV, too',
    only1Text:
      'Android TV gets a Daily Limit, Blocked Hours, Blocked Apps and a Web Filter. Blocking is best-effort on a TV — a blocked app is sent back to the home screen — and there is no SOS or extra-time request from the sofa. A TV shares no location either. Most parental controls stop at the phone.',
    only2Title: 'Message alerts that stay on the phone',
    only2Text:
      'With Premium on Android, messages are checked on the device against keyword lists in up to three languages you choose, out of 14, and what leaves the phone is the matched word or phrase, never the conversation. One thing changes that, and only if you ask for it: turn on AI confirmation and an ambiguous incoming message is sent to Google’s Gemini to be judged, so you are not woken by an ordinary word.',
    only3Title: 'Every app, not a list of apps',
    only3Text:
      'Alerts come from the notifications of whatever app your child uses — not a fixed list of supported apps — and from typing in the main chat, social and game apps, Zalo, LINE and KakaoTalk among them. Android only, with Premium.',
    only4Title: 'A way out for the child',
    only4Text:
      'Holding SOS for five seconds on a phone reaches you at once, with location — and on Android it also opens calls, maps and messages for five minutes, even on a locked phone. A child who can reach help from the lock screen has no reason to fight the app.',
    only5Title: 'Rules that hold without internet',
    only5Text:
      'Blocked Hours and Daily Limit are enforced on the device itself, so unplugging the router changes nothing. The TV even accepts your Parent PIN with no connection at all.',
    only6Title: 'Credit where the week earned it',
    only6Text:
      'With Premium, every weekly report keeps room for what went well — a limit respected, a late night gone, a task finished — and says it only once the week was actually measured.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Questions parents ask first',
    faqSub: 'Quick answers before you download.',
    faq1Q: 'Is there a free trial?',
    faq1A:
      'Yes. The 7-day trial starts when your first parent and child devices are connected, and includes every Premium feature. When it ends, the rules you set — Daily Limit, Blocked Hours, Blocked Apps, Web Filter, Device Lock, Time Requests and Reward Tasks — keep working for free on every child device that supports them, and the one device you choose to keep monitored still shares its location. Live activity, history, weekly reports and location tracking are what Premium adds back.',
    faq2Q: 'How many devices can I manage?',
    faq2A:
      'Premium covers up to 25 child devices and 6 parents, you included, and every device sends activity. The free plan covers up to 8 child devices and 3 parents. Every device keeps enforcing the rules you set, but only the one you choose sends activity; on the others, those rules can be relaxed but not tightened.',
    faq3Q: 'Can my child uninstall or bypass KidGate?',
    faq3A:
      'Sensitive settings sit behind your Parent PIN, and Protection Alerts tell you straight away if a key permission is turned off on the child device.',
    faq4Q: 'Can I manage everything from a computer?',
    faq4A:
      'Yes. The parent dashboard opens in any browser. Scan the code it shows with the KidGate app on your phone and you see the same family, devices and settings, with the controls unlocked. You can also sign in with your account to read; locking a device or changing a limit then asks for your Parent PIN.',
    faq5Q: 'What does Premium cost?',
    faq5A:
      'Premium is $4.99 a month or $39.99 a year in the US, billed through the App Store or Google Play and shown in your own currency there. A one-time Lifetime plan gives the same Premium on every child device, for as long as KidGate is available. The free plan never expires.',
    faqMore: 'More questions? Visit Support',

    ctaTitle: 'Start protecting your family today',
    ctaSub: '7-day free trial with full access. No card needed.',
    // Not "cancel anytime": nothing is charged when the trial ends, so there
    // is nothing to cancel (2026-10-25).
    ctaNote: 'When it ends, your rules keep working on the free plan.',
  },

  login: {
    title: 'Parent sign in',
    sub: 'Use the same account you created in the KidGate app. Signing in here shows the same family, devices and settings.',
    notConfiguredTitle: 'Firebase is not configured on this deployment.',
    notConfiguredBody:
      'Set the VITE_FIREBASE_* environment variables to enable sign-in.',
    qrWhy:
      'Scanning with your phone signs you in and unlocks the controls in one step. The methods below sign you in to read; unlocking the controls then takes your Parent PIN.',
    orViewOnly: 'or sign in another way',
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
    resetNeedsEmail: 'Enter your email address first, then choose Forgot password.',
    resetSent: 'Password reset email sent to {{email}}.',
    foot: 'KidGate accounts are created in the mobile app — the web dashboard signs in to an existing family. New here? Install the app and pair a child device first.',
  },

  qr: {
    start: 'Sign in with the KidGate app',
    generating: 'Generating code…',
    step1: 'Open KidGate on your phone.',
    step2: 'Tap the scan icon on the *Family* tab.',
    step3: 'Scan this code, then approve.',
    waiting: 'Waiting for approval · expires in {{time}}',
    signingIn: 'Approved. Signing in…',
    expired: 'This code expired.',
    failed: 'Sign-in did not finish.',
    newCode: 'Show a new code',
    tryAgain: 'Try again',
  },

  authAction: {
    checking: 'Checking the link…',
    resetTitle: 'Choose a new password',
    newPassword: 'New password',
    confirmPassword: 'Confirm new password',
    mismatch: 'The passwords do not match.',
    tooShort: 'Password must be at least 6 characters.',
    save: 'Save password',
    saving: 'Saving…',
    resetDone: 'Password changed',
    resetDoneBody: 'Sign in with your new password, here or in the KidGate app.',
    verifyDone: 'Email confirmed',
    verifyDoneBody: 'Go back to the KidGate app to continue.',
    invalid: 'This link has expired or was already used',
    invalidBody: 'Open KidGate and ask for a new link.',
  },
  authError: {
    generic: 'Something went wrong. Try again.',
    invalidEmail: 'That email address does not look right.',
    userDisabled: 'This account has been disabled.',
    userNotFound: 'No KidGate account uses that email.',
    wrongPassword: 'That email or password is incorrect. Try again.',
    rateLimited:
      'Too many sign-in codes from this network. Try again in {{minutes}} min.',
    tooManyRequests: 'Too many attempts. Wait a few minutes and try again.',
    popupClosed: 'Sign-in window was closed before finishing.',
    popupCancelled: 'Sign-in was canceled.',
    popupBlocked:
      'Your browser blocked the sign-in window. Allow pop-ups for this site and try again.',
    accountExists:
      'That email is already registered with a different sign-in method. Use the one you set up in the app.',
    operationNotAllowed: 'That sign-in method is not enabled for this project yet.',
    unauthorizedDomain:
      'This domain is not authorized in Firebase Authentication settings.',
    invalidCustomToken: 'That sign-in link is no longer valid. Show a new QR code.',
    webRejected: 'The request was declined on the phone.',
    webExpired: 'The code expired. Generate a new one.',
    noFunctionsUrl:
      'Cloud Functions URL is not configured (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Your session expired. Sign in again.',
  },

  /*
   * Keyed by `ApiFailure.code`, not by the message the server sent.
   *
   * A repository reports a code because the same failure is read by a parent in
   * the app, by a parent in a browser, and by a Cloud Function log — three
   * readers, up to three languages, one error. The app's locale pack has its
   * own wording for these; this is the web's.
   */
  controlError: {
    generic: 'That did not go through. Try again.',
    network: 'No connection. Check your network and try again.',
    sessionExpired: 'Your session expired. Sign in again.',
    forbidden:
      'This browser session cannot make changes. Sign in again by scanning the QR code with the KidGate app.',
    notFound: 'That is no longer there — it may have been changed on the phone.',
    conflict: 'Someone else just changed this. Reload to see where it landed.',
    rateLimited: 'Too many changes at once. Wait a moment and try again.',
    server: 'KidGate could not complete that. Try again shortly.',
    premiumRequired:
      'This is a Premium feature. Plans are managed in the KidGate app on your phone.',
  },

  live: {
    checkingSession: 'Checking your session…',
    loadingFamily: 'Loading your family…',
    loadFailedTitle: 'Could not load your family',
    partialLoadFailed:
      'Some of this page did not load, so a list may look empty when it is not.',
    noAccessTitle: 'No family on this account',
    noAccess:
      'This account does not have access to a KidGate family. Sign in with the parent account you use in the app.',
    noFamily:
      'This account has no KidGate family yet. If you use KidGate on your phone, sign out and sign in here with the same account. To start a family, set it up on your phone, then reload this page.',
    noFamilyStep1:
      'Install KidGate on your phone, choose *This is a parent device* and sign in with this account.',
    noFamilyStep2:
      'Open *Family* and choose *Create family*, or *Join family* if another parent invited you.',
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

  webCat: {
    adult: 'Adult content',
    selfHarm: 'Self-harm & eating disorders',
    gambling: 'Gambling',
    gameGambling: 'Loot boxes & skin betting',
    dating: 'Dating',
    strangerChat: 'Stranger chat',
    drugs: 'Drugs & alcohol',
    violence: 'Violence & gore',
    extremism: 'Extremism & hate',
    piracy: 'Piracy',
    social: 'Social networks',
    videoStreaming: 'Video streaming',
    music: 'Music',
    gaming: 'Games',
    shopping: 'Shopping',
    aiCompanion: 'AI companions',
    aiAssistant: 'AI assistants',
    cryptoTrading: 'Crypto & trading',
    vpn: 'VPN apps',
  },

  appCat: {
    adult: 'Adult content',
    gambling: 'Gambling',
    gameGambling: 'Loot boxes & skin betting',
    dating: 'Dating',
    drugs: 'Drugs & alcohol',
    violence: 'Violence & gore',
    piracy: 'Piracy',
    bypass: 'Control bypass tools',
  },

  webCatGroup: {
    harm: 'Harmful content',
    contact: 'Strangers',
    bypass: 'Filter bypass',
    ai: 'AI',
    entertainment: 'Entertainment & social',
    money: 'Shopping & money',
  },

  dash: {
    tabOverview: 'Overview',
    tabScreen: 'Screen Time',
    tabApps: 'Apps',
    tabWeb: 'Web',
    tabSafety: 'Safety',
    tabControls: 'Controls',
    tabReport: 'Weekly report',
    tabReportNew: 'New weekly report',

    children: 'Children',
    noChildren: 'No child devices paired yet.',
    unassignedDevices: 'Not assigned',
    manage: 'Manage',
    parents_one: '{{count}} parent',
    parents_other: '{{count}} parents',
    devices_one: '{{count}} child device',
    devices_other: '{{count}} child devices',
    planManageOnPhone: 'Plans are bought and changed in the KidGate app on your phone.',
    fallbackFamily: 'Your family',
    fallbackDevice: 'Child device',

    statusOnline: 'Online',
    statusOffline: 'Offline',
    statusLocked: 'Locked',
    statusLockSent: 'Lock sent',
    statusLockNotApplied: 'Lock not applied',
    statusPaused: 'Paused',

    lastActive: 'Last active {{when}}',
    appVersion: 'App version',
    appVersionUpdate: '{{running}} · {{latest}} available',
    appVersionRestart: '{{running}} · restart to finish updating',
    checkIn: 'Check-In',
    sending: 'Sending…',
    lockDevice: 'Lock device',
    unlock: 'Unlock',
    working: 'Working…',
    save: 'Save',

    unlockTitle: 'Changes are locked.',
    unlockBody: 'You can still read everything and send Check-Ins.',
    unlockCta: 'Unlock changes',
    unlockToChange: 'Unlock changes first',
    refresh: 'Refresh',
    liveOnApp: 'Open the app for live updates',
    pinTitle: 'Enter your Parent PIN',
    pinBody:
      'The same six digits you use in the app. This browser stays unlocked for 8 hours; approving from the app keeps it signed in for 7 days.',
    pinLabel: 'Parent PIN',
    pinSubmit: 'Unlock',
    pinOrScan: 'Or approve from your phone',
    qrSaferNote:
      'Approving from the phone is the safer of the two: it needs the paired phone in hand, while the PIN is six digits somebody in the family may have watched you type.',
    pinWrong: 'Wrong PIN. Tries left: {{count}}.',
    pinLocked:
      'Too many wrong tries. Wait 15 minutes, or approve this browser from your phone.',
    pinNotSet:
      'Your family has no Parent PIN yet. Set one in the app, or approve this browser from your phone.',
    unlockedToast: 'Changes unlocked on this browser.',
    close: 'Close',

    noDeviceBody:
      'Open KidGate on your phone, go to *Family* and tap the scan icon (*Scan a code*). Scan the QR code on your child’s device, or type its 6-character code. Then press *Refresh* here.',
    pairStep2Title: 'Scan the code with your phone',
    getKidGate: 'Get KidGate',
    childNoDevices:
      'No devices yet. Pair one, and choose this child when the app asks who uses it.',
    childNoDevicesAssign: 'No devices yet. Assign one below, or pair a new one.',

    toastCheckIn: '{{name}} will get a Check-In request.',
    toastTimeApproved: 'Extra time approved.',
    toastCheckInResent: 'Check-In sent again.',

    tileScreenToday: 'Screen Time today',
    tileSameAsAverage: 'Same as the 7-day average',
    tileDeltaUp: '↑ {{percent}}% vs 7-day average',
    tileDeltaDown: '↓ {{percent}}% vs 7-day average',
    tileBlocked: 'Blocked attempts',
    tileBlockedMeta: 'Apps stopped since install',
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
    attnLimitReached: 'Daily Limit reached — device locked',
    attnBatteryLow: 'Battery is low ({{level}}%)',
    attnBatteryLowMeta: 'Location updates may pause if the phone dies',
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
    topAppsTitleDay: 'Top apps · {{date}}',
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
    schedMax: '{{max}} windows is the most a device can hold.',

    appUsageTitle: 'App usage today',
    appUsageSub: 'Time spent per app',
    appUsageEmpty: 'No app usage reported yet.',
    appBlockingTitle: 'Blocked Apps',
    blockingLabel: 'Blocking',
    appsBlocked: 'Apps blocked',
    categories: 'Categories',
    limitsMax: '{{max}} capped apps is the most a device can hold.',
    perDay: '{{value}}/day',
    webActivityTitle: 'Web activity',
    webActivitySub: 'Most visited domains, last 7 days',
    webActivityEmpty: 'No web activity yet.',
    inventoryEmpty: 'This device has not published its app list yet.',
    inventoryFirstScan: 'First scan, so KidGate cannot say when any of these arrived.',
    inventoryOtherLabel: 'Identified',
    inventoryUnknownLabel: 'Not identified',
    installAllow: 'Allow',
    toastInstallAllowed: 'App allowed',
    rowInstallApprovalDesc_one: '{{count}} app waiting for approval',
    rowInstallApprovalDesc_other: '{{count}} apps waiting for approval',
    rowInstallApprovalDescIos: 'Hides the App Store — Apple allows no per-app approval',
    colDomain: 'Domain',
    colVisits: 'Visits',
    colBlocked: 'Blocked',
    colLastSeen: 'Last seen',
    videosSub: 'What was watched on YouTube and the web',
    videosEmpty: 'No videos yet.',
    colVideo: 'Video',
    colChannel: 'Channel',
    colViews: 'Views',
    filterRefusedTitle: 'What the filter blocked',
    filterRefusedSub_one: '{{count}} blocked lookup, last 7 days',
    filterRefusedSub_other: '{{count}} blocked lookups, last 7 days',
    filterHintIos:
      'This iPhone or iPad filters with Apple’s adult-content control only. Update KidGate on it and allow the KidGate VPN to block by category.',

    locationTitle: 'Location',
    locationUpdated: 'Updated {{when}}',
    locationWaiting: 'Waiting for the first update',
    noPlaces:
      'No saved places yet. Add one in the app to get an alert when your child arrives or leaves.',
    placeRadius: '{{meters}}m · ',
    placeArrive: 'arrive',
    placeLeave: 'leave',
    placeNoAlerts: 'no alerts',
    placeSamePin:
      'This is the same spot as “{{name}}”. Use the app’s map to place it somewhere else.',
    placeWebHint:
      'The web can only put a place where the device last reported itself. Use the app’s map to pick anywhere else.',
    placeNeedsLocation: 'Waiting for a location from this device.',
    sosSub: 'Emergency signals from the child device',
    sosEmpty: 'No SOS alerts. Test it once together so you both know how it works.',
    sosAcknowledged: 'acknowledged',
    sosActive: 'active',

    checkInsTitle: 'Check-Ins',
    checkInsSub: 'Ask your child to confirm they are safe',
    checkInSafe: 'Confirmed safe',
    checkInPhotoRequested: 'photo and location were requested',
    checkInNoReply: 'no reply yet',
    checkInPhotoSkipped: 'photo skipped',
    checkInPhotoAttached: 'photo attached',
    checkInNoPhoto: 'no photo requested',
    sendCheckIn: 'Send a Check-In now',

    protectionAlertsTitle: 'Protection Alerts',
    protectionAlertsSub_one: '{{count}} event since install',
    protectionAlertsSub_other: '{{count}} events since install',

    limitCardTitle: 'Daily Limit',
    limitCardSub: 'Cap the minutes available each day',
    limitAria: 'Daily Limit minutes',
    limitScaleMin: '30m',
    limitScaleMax: '8h',
    limitHint:
      'Bonus minutes from reward tasks and approved time requests are added on top, for that day only.',
    limitShared: 'Shared across every device',
    limitSharedSpent: '{{used}} of {{limit}} used today',
    limitSharedHint:
      'This is the whole day for this child, not a cap on this device — each device gets what the others have not used. Change it in the KidGate app.',
    whatsOnSub: 'Changes sync to the child device',
    rowBlockedHours: 'Blocked Hours',
    rowBlockedHoursDesc_one: '{{count}} time range · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} time ranges · {{list}}',
    rowAppBlocking: 'Blocked Apps',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Web Filter',
    rowWebFilterDesc_one: '{{count}} category blocked',
    rowWebFilterDesc_other: '{{count}} categories blocked',
    rowNotSupported: 'Not supported on this device',
    rowLocation: 'Location sharing',
    rowLocationDesc: 'Last update {{when}}',
    rowLocationNone: 'No location yet',
    rowSearchMonitoring: 'Search monitoring',
    rowSafeSearchDesc:
      'Locks Google SafeSearch, Bing and DuckDuckGo to their strict settings on Android, Android TV and Chrome. On Android and Chrome it locks YouTube Restricted Mode too, which also hides comments and blocks some ordinary videos.',

    webFilterCatsTitle: 'Web Filter categories',
    webFilterCatsSub: 'Blocked content types',
    dnsHint:
      'Encrypted DNS is always blocked while the filter runs, so a browser cannot get around it.',
    starChartTitle: 'Star chart',
    starChartSub: 'Stars earned this week, per child',
    starChartEmpty: 'Add a second child in the app to start the star chart.',
    starChartStars: '{{count}} stars',
    rewardTasksTitle: 'Reward Tasks',
    rewardTasksSub: 'Earn extra minutes by finishing tasks',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskStars: 'Difficulty: {{count}} of 3',
    rewardTaskWaiting: ' · waiting for your approval',
    approve: 'Approve',
    siteRequestAllow: 'Allow',
    siteRequestDeny: 'Not now',
    attnSiteRequest: '{{name}} asked to open {{domain}}',
    timelineSub: 'Today, midnight to midnight. Green is time spent on the device.',
    timelineSubDay:
      '{{date}}, midnight to midnight. Green is time spent on the device.',
  },

  /*
   * The weekly report. Its own namespace rather than more `dash.*` keys: the
   * same strings are read on a page, on a printed sheet and inside a shared
   * image, and one of those goes to somebody who is not looking at a dashboard.
   *
   * Registers differ from the rest of `dash` on purpose — a report is read once
   * a week and is often forwarded, so the copy states what happened and stops.
   * Nothing here diagnoses a child; a parent decides what four late nights mean
   * in their house (see the note on severity in `domain/digestFindings`).
   *
   * Only the web's own sentences are left here — saving, the empty page, a
   * failed load. Every sentence the phone's report also says is read from the
   * app pack's `report` through `appT`; the two packs held both until
   * 2026-10-15, and `finePrint` had already drifted in eleven languages.
   */
  report: {
    writtenAt: 'Written {{when}}',

    shareImage: 'Save as image',
    sharePdf: 'Save as PDF',
    imageSaved: 'Image saved.',
    shareFailed: 'Unable to save from this browser. Copy the summary instead.',

    emptyBody:
      'With Premium, a report arrives every Monday morning and covers the seven days before it. You can also write this week’s from the KidGate app on your phone.',
    loadFailed: 'Unable to open your reports.',
    retryLoad: 'Try again',
    existed: 'This week already had a report — here it is.',
  },

  support: {
    title: 'KidGate Support',
    updated: 'We’re here to help',

    contactTitle: 'Contact Us',
    contactEmail: '**Email:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Response time:** usually within one business day',
    contactNote:
      'When contacting us, please include the email address of your KidGate parent account and a short description of the issue so we can help you faster.',

    startTitle: 'Getting Started',
    start1:
      '**1. Set up the parent device.** Install KidGate, open the app, and choose *This is a parent device*. Sign in with Google or email (or Apple, on an iPhone), and name your family.',
    start2:
      '**2. Set a Parent PIN.** Go to *Settings → Security* and set a 6-digit Parent PIN. You need it to change sensitive settings and to choose blocked apps on the child device. Don’t share it with your children.',
    start3:
      '**3. Connect the child device.** Install KidGate on your child’s device and open it. On a phone or tablet, choose *This is a child device*. On the parent device, open *Family* and tap the scan icon (*Scan a code*), then scan the QR code shown on the child device (or enter the 6-character code). If the child device asks, confirm the connection there; a TV connects on its own.',
    start4:
      '**4. Grant permissions on the child device.** Open the *Status* screen on the child device and tap *Continue setup* — it walks through every permission KidGate needs. On Android: notifications, Usage access, Display over other apps, Accessibility (lock helper), Alarms & reminders, Unrestricted battery, the VPN connection the Web Filter runs on, uninstall protection and, for Message Alerts, notification access; on iOS: *Allow App & Website Usage* (Screen Time) and, for the Web Filter, *Allow* when iOS asks to add VPN configurations. Controls will not work fully until these are on.',
    start5:
      '**5. Configure controls.** From the parent device, open the child’s device card and set the Daily Limit, Blocked Hours, Blocked Apps, Web Filter, and location features.',
    startNote:
      'The app also includes a built-in step-by-step guide: *Settings → User guide*, covering device pairing, permissions, daily controls, and safety features in detail.',

    faqTitle: 'Frequently Asked Questions',

    faq1Q: 'Can I manage my family from a computer?',
    faq1A:
      'Yes. Open the [web dashboard](/dashboard) and scan the code it shows with the KidGate app on your phone — or sign in with the same account you use in the app: Google, Apple, or your email and password. It shows the same family, devices, reports and settings. Signed in with an account, changing a control asks for your Parent PIN. Accounts and device pairing are still done in the mobile app.',

    faq2Q: 'How do I pair the parent and child devices?',
    faq2A:
      'On the child device, open KidGate. On a phone or tablet, choose *This is a child device*. A QR code and a 6-character code appear. On the parent device, open *Family* and tap the scan icon (*Scan a code*), then scan the QR code (recommended) or enter the code manually. If the child device asks, confirm the parent’s name there; a TV connects on its own. Codes expire — if pairing fails, tap *New code* on the child device and try again.',

    faq3Q: 'Can two parents manage the same family?',
    faq3A:
      'Yes. On the family owner’s device, open *Family → + → Invite parent* and share the invite QR code or code. The other parent installs KidGate, signs in as a parent, opens *Family* and taps the scan icon (*Scan a code*), then scans the QR code or types the invite code there. The owner then approves the request. A family can have up to 3 parents on the free plan and during the trial, and up to 6 with Premium. One subscription covers the whole family; only the owner pays.',

    faq4Q: 'How does the free trial work?',
    faq4A:
      'The 7-day trial starts when your first parent and child devices are connected, and gives full access to every feature. Removing a child device does not reset the trial. When it ends, every rule keeps working for free and one child device of your choice keeps reporting; Premium brings back live activity, history, weekly reports and reporting from every device.',

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
      'On Android, locking needs *Display over other apps* and the *Accessibility* helper enabled, plus unrestricted battery. On Xiaomi, Samsung, Oppo, Vivo, and similar devices, also allow autostart and remove KidGate from any “sleeping apps” list (see *Status → Allow autostart* on the child device). On iOS, locking depends on Screen Time authorization. If a permission is turned off later, you’ll get a Protection Alert on the parent device.',

    faq9Q: 'How do I block specific apps?',
    faq9A:
      'On the parent device, open your child’s *Apps*, then *Installed apps*, tap an app and choose *Block*. On an iPhone, apps are chosen on the iPhone instead: open *KidGate → Settings*, tap *Unlock with Parent PIN*, open *Blocked Apps*, choose the apps and save, then turn on *Enable Blocked Apps* on the parent device. A connected child device gets each change within a minute. On iOS, Apple may hide exact app names from the parent device.',

    faq10Q: 'Why is the child’s location not updating?',
    faq10A:
      'Location must be allowed for KidGate on the child device, and the device needs a network connection. Open the device’s *Location* screen on the parent device and tap *Refresh location*. Battery-saver modes can delay updates, and indoor GPS can be less precise.',

    faq11Q: 'How do I remove KidGate from my child’s device?',
    faq11A:
      'Remove the device from the parent app first (open the device in *Family* and choose remove), then uninstall the app on the child’s device.',

    faq12Q: 'How do I delete my account and data?',
    faq12A:
      'In the parent app, go to *Settings → Account → Delete account*. After a 14-day hold, during which you can cancel, this permanently deletes your family account and all data — devices, activity, location history, and SOS photos — for every parent and child. See our [Account & Data Deletion](/delete-account) page for all options, including deletion without having the app installed.',

    legalTitle: 'Legal',
    legalDeletion: 'Account & Data Deletion',
  },

  /**
   * `/delete-account` — the page Google Play and the App Store link as the
   * data-deletion route. The facts (the 14-day hold, the 12-month record) are
   * the Privacy Policy's; change them there first.
   */
  deleteAccount: {
    title: 'Account & Data Deletion',
    updated: 'Last updated: September 18, 2026',
    intro:
      'This page explains how to delete your KidGate account and the data associated with it. You can request deletion at any time, and you do not need to have the app installed to do so.',

    option1Title: 'Option 1: Delete your account in the app',
    option1Step1: 'Open the KidGate app and sign in.',
    option1Step2: 'Go to *Settings → Account → Delete account*.',
    option1Step3: 'Confirm the deletion.',

    option2Title: 'Option 2: Request deletion by email',
    option2Step1:
      'Send an email to [support@kidgate.app](mailto:support@kidgate.app?subject=Account%20Deletion%20Request) with the subject line “Account Deletion Request”.',
    option2Step2:
      'Send the request from the email address associated with your KidGate account so we can verify your identity.',
    option2Step3:
      'We will confirm your request and schedule the deletion. It holds for 14 days, during which you can cancel it; after that it runs and cannot be undone.',

    deletedTitle: 'What is deleted',
    deletedIntro: 'Deleting your account permanently removes:',
    deleted1: 'Your parent account information (name, email address).',
    deleted2: 'All child profiles you created.',
    deleted3:
      'All activity data collected from managed devices, including app usage, screen-time history, browsing activity, location history, and Check-In and SOS photos.',
    deleted4: 'Your parental control settings and preferences.',
    deleted5: 'Support requests you filed, with any screenshot attached to them.',
    deleted6: 'Your sign-in itself, so the account cannot be used again.',

    retentionTitle: 'Retention timelines',
    retention1:
      'Data is deleted when the **14-day** hold on a verified request ends. Deletion is permanent and there is no export afterwards.',
    retention2:
      'A record that the deletion was requested and completed — a hash of your email address and the dates, nothing else — is kept for **12 months** so that a disputed deletion can be answered.',
    retention3:
      'We may retain a minimal set of records where required by law (for example, transaction records for tax purposes), for only as long as legally required.',

    partialTitle: 'Partial deletion',
    partial:
      'You can remove a child or a device in the app, which stops collection from it. History already collected expires on the schedule in the Privacy Policy (30 days for usage, web and location history and the activity feed; 90 days for SOS, Check-In and Time Requests); to have it deleted sooner, email [support@kidgate.app](mailto:support@kidgate.app).',
    moreInfo:
      'For more details about how we handle your data, see our [Privacy Policy](/privacy-policy).',
  },

  download: {
    eyebrow: 'Download',
    qrScan: 'Scan with your phone’s camera to get the app',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 or later, on a Mac with Apple silicon.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 or later, 64-bit.',
    button: 'Download',
    warningSub:
      'Windows shows a SmartScreen warning for any app installed from outside its own store by a developer not yet on its verified list — it is not something found in KidGate. The Windows card above says how to allow it. The Mac package is signed with an Apple Developer ID and notarized by Apple, so it raises no warning. Download only from kidgate.app.',
    macosSteps:
      'Open the downloaded package and follow the installer. macOS then asks you once to allow the KidGate system extension: open the settings that message points to and allow it there. The Web Filter does not run until you do. After installing, KidGate keeps running from its icon in the menu bar; click the icon to open its window.',
    windowsSteps:
      'Your browser may first warn that the file isn’t commonly downloaded — choose to keep it. Then, when Windows says it protected your PC, choose More info, then Run anyway. After installing, KidGate keeps running from its icon in the notification area; click the icon to open its window.',
  },

  /**
   * The About page, and the settings row on the phone and the desktop agent
   * opens `/about` rather than repeating any of it in-app — one copy of this
   * text, in fourteen languages, in one place.
   *
   * Every claim here is one the product can be held to: the six platforms, the
   * free tier, the ads, the deletion route, and the places KidGate is
   * best-effort. Nothing about a company, a founding year or a team is stated,
   * because none of it is known here.
   */
  about: {
    eyebrow: 'About us',
    title: 'Helping children use technology more safely,',
    titleAccent: 'and families worry a little less.',
    lede: 'Phones, computers and TVs are part of a child’s life now. That isn’t necessarily a bad thing — what matters is how they use them, for how long, and whether they are protected from content that isn’t right for them. KidGate helps parents set the limits that matter in a way that is simple, open and fair — for parents and children alike.',

    storyEyebrow: 'Why KidGate exists',
    storyTitle: 'It starts with a moment every family knows',
    storyP1:
      '“Just five more minutes!” Then five minutes pass. A parent asks again, the child gets upset, and something small turns into an argument nobody wanted. We don’t think every family needs stricter rules. Sometimes what they need is rules that are clear, that everyone understands and can trust.',
    storyP2:
      'With KidGate, a parent sets a Daily Limit, Blocked Hours, Blocked Apps and the Web Filter once, and the rules then run on their own, as far as each device allows. Children can see their limits too, know when the device will lock, and ask for more time when they need it.',
    storyP3:
      'Parents don’t have to remind them every day. Children don’t have to guess whether the rules changed today. Fewer arguments, more time together.',

    valuesEyebrow: 'What matters to us',
    valuesTitle: 'What we always hold on to',
    valuesSub: 'Every KidGate feature starts from these four things.',
    value1Title: 'Open with parents and children alike',
    value1Text:
      'Children have a right to know the rules on their own device. Parents have the tools to protect them; children can understand their limits, ask for more time, and reach a parent with SOS on supported devices. We want technology to help a family understand each other, not drift apart.',
    value2Title: 'Your family’s privacy is respected',
    value2Text:
      'KidGate shows no ads and never sells your child’s data to anyone. You can ask us to erase your family account and the data that goes with it — from inside the app, or by email as this site explains — and it is erased 14 days later under the process we publish.',
    value3Title: 'Honest about what KidGate can do',
    value3Text:
      'Every device has its own limits, so some features work differently on iPhone, Android, Mac, Windows and TV. We say so on the screen, rather than promising everything works the same everywhere. Protecting a family takes good tools, and information you can rely on.',
    value4Title: 'One family, one Premium plan',
    value4Text:
      'One Premium subscription covers every parent and every child device — nothing to buy device by device. Without it, Daily Limit, Blocked Hours, Blocked Apps, Device Lock and the Web Filter keep working on supported devices, and SOS is never behind the paywall — because the essential safety tools should always be within reach.',

    makeEyebrow: 'What we make',
    makeTitle: 'One app, many devices',
    makeSub:
      'Children use a phone when they are out, a computer for school and a TV to relax, so looking after them shouldn’t stop at one device. Each platform has its own strengths, but the goal stays the same: easier for parents, clearer for children.',
    make1Title: 'iPhone and iPad',
    make1Text:
      'Daily Limit, Blocked Hours and Blocked Apps built on Apple’s own Screen Time, plus the Web Filter right on the device.',
    make2Title: 'Android',
    make2Text:
      'Limits, Blocked Apps, a screen lock and the Web Filter, plus a heads-up when your child installs a new app.',
    make3Title: 'macOS',
    make3Text:
      'The same schedule and the same limits as the phones, plus a daily summary a parent can read at a glance.',
    make4Title: 'Windows',
    make4Text:
      'The same rules on a PC, and KidGate starts itself again if it is closed or ended.',
    make5Title: 'Android TV',
    make5Text:
      'The family’s shared screen in the living room, with the same limits and the same schedule as the phones. A TV shares no location and has no SOS.',
    make6Title: 'Chrome',
    make6Text:
      'The Chrome extension brings the Web Filter into the browser, even on a computer that cannot run KidGate. When you turn them on, it also records the YouTube videos your child watched, flags worrying searches, and tells you which other extensions are installed. It does not measure screen time or block apps.',
    make7Title: 'Parent dashboard',
    make7Text:
      'Look after the whole family from a browser on any computer. Sign in by scanning a code with your phone — nothing to install.',

    factsEyebrow: 'KidGate today',
    factsTitle: 'Four numbers',
    fact1Label: 'languages, so every family can use it in their own',
    fact2Label: 'platforms, plus the web dashboard',
    fact3Label: 'ads in KidGate',
    fact4Label: 'Premium plan for the whole family',

    contactEyebrow: 'We’re listening',
    contactTitle: 'Every message is read by a person',
    contactSub:
      'Something not working as expected, a feature your family needs, or a translation that doesn’t sound natural in your language — write to us. Every note helps make KidGate more useful for the families using it every day.',
    contactEmail: 'Email us',
    contactSupport: 'Support and guides',
    contactPrivacy: 'How we handle data',
  },
  /*
   * The promo video (apps/videos). Every caption is a claim this pack already
   * makes under `home` — docs/VIDEOS.md maps each to its source. The rest is text
   * drawn inside the illustrations; the child's name is illustration, not a
   * family. Nothing in apps/site or apps/dashboard reads this namespace.
   */
  promo: {
    intro: 'Your child’s whole day. Your peace of mind.',
    school: 'Class starts. The phone locks itself.',
    apps: 'The apps you block won’t open.',
    arrive: 'They reach Grandma’s, and you get a notification.',
    checkIn: 'You check in. One tap tells you they’re safe.',
    sos: 'If something’s wrong, one SOS shows you where they are.',
    limit: 'Playtime’s up. The phone locks itself.',
    lockNow: 'Dinner’s ready. Lock their phone from yours.',
    web: 'Block harmful sites on every device.',
    tv: 'The living-room TV follows the same house rules.',
    reward: 'Homework done. 15 bonus minutes earned.',
    bedtime: 'At bedtime, the phone, computer and TV go to sleep too.',
    kid: 'Child',
    parent: 'Parent',
    arrivedNotice: 'Mia arrived at Grandma’s',
    checkAsk: 'Are you OK?',
    checkReply: 'I’m okay',
    sosNotice: 'Mia sent an SOS',
    timeUp: 'Playtime’s over for today',
    lockButton: 'Lock now',
    task: 'Homework done',
    granted: '+15 min',
    youtubeTitle: 'KidGate — Parental Control for Phone, Computer & TV',
    youtubeDescription:
      'One ordinary day with KidGate, from the school bell to bedtime.',
  },
  // The setup videos' captions, read only by apps/videos (src/setup/*.script.ts).
  // Every quoted button is a {{placeholder}} filled from the app pack.
  setup: {
    // Clip 0 — the parent's phone.
    parentTitle: 'Set up your phone',
    parentSub: 'The first step. It only takes a few minutes.',
    install: 'Find “KidGate” on the App Store or Google Play and install it.',
    installSub: 'iPhone, iPad or Android phone.',
    role: 'Open KidGate and choose “{{parent}}”.',
    signIn: 'Tap “{{signIn}}”, then sign in with Apple, Google or email.',
    signInSub: 'With Apple, you just confirm with Face ID.',
    family: 'In “{{tab}}”, tap “{{create}}” and name your family.',
    done: 'Your part is done.',
    parentYoutubeTitle: 'How to set up KidGate on your phone',
    parentYoutubeDescription:
      'Install KidGate, sign in and create your family: the first step before you connect your child’s devices.',
    // Both pairing clips.
    pairSub: 'Connect it to your phone, then switch on its protection.',
    parentPhone: 'Your phone',
    openSub: 'It shows a QR code. Leave that screen open.',
    scanSub: 'Can’t scan it? Choose “{{manual}}”.',
    protect: 'Tap “{{turnOn}}” to start with a safe set of rules.',
    protectSub: 'You can fine-tune each one later.',
    tapAllow: 'Tap “{{allow}}”.',
    extras: 'Last, allow the camera and microphone.',
    extrasSub: 'Optional: your child can then add a photo or sound to an SOS.',
    // Clip 1 — the child's iPhone.
    iosTitle: 'Set up your child’s iPhone or iPad',
    childPhone: 'Child’s iPhone',
    iosOpen: 'On your child’s iPhone, open KidGate and choose “{{child}}”.',
    iosScan: 'On your phone, tap “{{add}}” and scan the QR code.',
    iosConfirm: 'On your child’s iPhone, check it’s you, then tap “{{yes}}”.',
    iosPin: 'Create your “{{pin}}” (6 digits).',
    iosPinSub: 'Your child’s iPhone asks for it before blocked apps can change.',
    iosAssign: 'Choose who uses this iPhone, or add your child by name.',
    iosScreenTime: 'On your child’s iPhone, tap “{{allow}}” and allow Screen Time.',
    iosScreenTimeSub: 'Apple asks for this iPhone’s Face ID or passcode.',
    iosNotify:
      'Tap “{{settings}}”, turn on {{notifications}}, then come back to KidGate.',
    iosRefresh: 'Tap “{{settings}}” and turn on “{{refresh}}”.',
    iosRefreshSub: 'Optional: it keeps KidGate working in the background.',
    iosBlocked: 'Tap “{{strengthen}}”, then set up “{{blocked}}”.',
    iosBlockedSub: 'You tap “{{unlock}}”, enter your PIN, then pick the apps.',
    iosDone: 'Your child’s iPhone is protected.',
    iosYoutubeTitle: 'How to set up KidGate on your child’s iPhone or iPad',
    iosYoutubeDescription:
      'Connect your child’s iPhone or iPad to your phone with a QR code, then turn on Screen Time and the other permissions KidGate needs, one step at a time.',
    // Clip 2 — the child's Android phone.
    androidTitle: 'Set up your child’s Android phone or tablet',
    childAndroid: 'Child’s Android',
    androidOpen: 'On your child’s phone, open KidGate and choose “{{child}}”.',
    androidScan: 'On your phone, scan the QR code with KidGate.',
    androidConfirm: 'On your child’s phone, check it’s you, then tap “{{yes}}”.',
    androidAssign: 'Choose who uses this phone, or add your child by name.',
    androidUsage:
      'On your child’s phone, tap “{{open}}” and allow usage access for KidGate.',
    androidBack: 'Then swipe back to KidGate.',
    androidAccessibility: 'Tap “{{agree}}”, then turn on KidGate in Accessibility.',
    androidOverlay: 'Tap “{{settings}}” and allow “{{overlay}}” for KidGate.',
    androidNotify: 'Tap “{{allow}}”, then allow notifications.',
    androidWebFilter: 'Tap “{{enable}}” and allow the connection.',
    androidWebFilterSub: 'KidGate’s {{filter}} runs on the phone as a VPN.',
    androidBattery:
      'Tap “{{settings}}”, then let KidGate always run in the background.',
    androidStrengthen: 'Tap “{{strengthen}}”, then turn on “{{uninstall}}”.',
    androidMessages: 'For “{{alerts}}”, tap “{{grant}}” and turn it on for KidGate.',
    androidMessagesSub:
      'KidGate checks incoming messages for warning words, on the phone.',
    androidDone: 'Your child’s Android phone is protected.',
    androidYoutubeTitle:
      'How to set up KidGate on your child’s Android phone or tablet',
    androidYoutubeDescription:
      'Connect your child’s Android phone or tablet to your phone with a QR code, then turn on the permissions KidGate needs, one step at a time.',
    // Clip 3 — the child's Mac.
    macTitle: 'Set up your child’s Mac',
    childMac: 'Child’s Mac',
    macDownload: 'On your child’s Mac, download KidGate for macOS from kidgate.app.',
    macInstall: 'Open the downloaded installer and follow its steps.',
    macPasswordSub: 'macOS asks for this Mac’s password.',
    macOpen: 'KidGate opens and shows a QR code.',
    macOpenSub: 'Leave that window open.',
    macScan: 'On your phone, tap the scan button in KidGate and scan the QR code.',
    macConfirm: 'On the Mac, check it’s you, then click “{{yes}}”.',
    macAssign: 'Choose who uses this Mac, or add your child by name.',
    macFilter:
      'On the Mac, click “{{open}}”, then turn on KidGate in Network Extensions.',
    macAllow: 'When macOS asks to filter network content, click “Allow”.',
    macAllowSub: 'KidGate’s {{filter}} then turns on.',
    macDone: 'Your child’s Mac is protected.',
    macYoutubeTitle: 'How to set up KidGate on your child’s Mac',
    macYoutubeDescription:
      'Install KidGate on your child’s Mac, connect it to your phone with a QR code, then turn on its web filter in System Settings.',
    // Clip 4 — the child's Windows PC. It also reads macOpen, macOpenSub and
    // macScan above, which name no Mac.
    windowsTitle: 'Set up your child’s Windows PC',
    childWindows: 'Child’s PC',
    windowsDownload:
      'On your child’s PC, download KidGate for Windows from kidgate.app.',
    windowsSmartScreen:
      'If Windows says it protected your PC, choose More info, then Run anyway.',
    windowsInstall:
      'Approve the administrator prompt, then follow the installer’s steps.',
    windowsInstallSub:
      'On a standard account, Windows asks for an administrator’s password.',
    windowsConfirm: 'On the PC, check it’s you, then click “{{yes}}”.',
    windowsAssign: 'Choose who uses this PC, or add your child by name.',
    windowsSetup: 'On the PC, click “{{allow}}” for {{location}}.',
    windowsSetupSub: 'KidGate’s {{filter}} turns on by itself within a few seconds.',
    windowsDone: 'Your child’s PC is protected.',
    windowsYoutubeTitle: 'How to set up KidGate on your child’s Windows PC',
    windowsYoutubeDescription:
      'Install KidGate on your child’s Windows PC and connect it to your phone with a QR code. Its web filter then turns on by itself.',
    // Clip 6 — the Chrome extension. It also reads macScan.
    chromeTitle: 'Set up KidGate in Chrome',
    childChrome: 'Child’s computer',
    chromeSite:
      'In Chrome on your child’s computer, open kidgate.app and choose Chrome.',
    chromeStore:
      'In the Chrome Web Store, click “Add to Chrome”, then “Add extension”.',
    chromeOpen: 'Click KidGate in Chrome’s toolbar. It shows a QR code.',
    chromeOpenSub: 'Keep it open while you pair.',
    chromeConfirm: 'In KidGate, check it’s you, then click “{{yes}}”.',
    chromeAssign: 'Choose which child uses Chrome on this computer.',
    chromeDone: 'Chrome on your child’s computer is protected.',
    chromeYoutubeTitle: 'How to set up KidGate in Chrome on your child’s computer',
    chromeYoutubeDescription:
      'Add the KidGate extension to Chrome on your child’s computer and connect it to your phone with a QR code. It then filters the web in Chrome.',
    dashboardComputer: 'Your computer',
    dashboardSite: 'On your computer, open kidgate.app and click “Dashboard”.',
    dashboardDone: 'You’re signed in to the web dashboard.',
    tvTitle: 'Set up your child’s Android TV',
    tvAssign: 'Choose who uses this TV, or add your child by name.',
    tvDone: 'Your child’s Android TV is protected.',
    tvYoutubeTitle: 'How to set up KidGate on your child’s Android TV',
    outroTitle: 'You’re all set.',
    outroSub: 'We hope KidGate makes managing your family easier.',
    // How-to 3.9: locating and ringing the child’s phone.
    findDeviceTitle: 'Find your child’s device',
    allYoutubeTitle: 'How to set up KidGate on your phone and your child’s devices',
    allYoutubeDescription:
      'Every setup in one video: first your phone, then each of your child’s devices (iPhone or iPad, Android phone or tablet, Mac, Windows PC, Android TV, Chrome), and last the web dashboard. Pick your device from the list below.',
    // `guide-all`: every how-to in one video (operator, 2026-10-14).
    guideAllYoutubeTitle: 'How to use KidGate: every feature, step by step',
    guideAllYoutubeDescription:
      'Every KidGate feature in one video, step by step, on a parent’s iPhone and a child’s Android phone. Pick the feature you need from the list below.',
    // `guide-parent-devices`' title card: the app's own wording for the device.
    removeParentDeviceTitle: 'Remove a parent device',
  },
};
