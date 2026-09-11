export const plans = {
  title: 'Plans',
  statusPremiumActiveTitle: 'Premium active',
  statusPremiumActiveSubtitle: 'You have full access to every KidGate feature.',
  pillPremium: 'Premium',
  statusTrialActiveTitle: 'Trial active',
  statusTrialActiveSubtitle:
    'You are on the full Premium experience. Subscribe at any time to keep it after your trial ends.',
  pillTrialActiveFallback: 'Trial active',
  statusTrialEndedTitle: 'Trial ended',
  statusTrialEndedSubtitle:
    'Daily Limit, Blocked Hours, Blocked Apps, Web Filter and location keep working for free. Subscribe for live updates, history, alerts and reports.',
  pillTrialEnded: 'Trial ended',
  statusStartTrialTitle: 'Start your trial',
  statusStartTrialSubtitle:
    'Connect one parent device and one child device for {{days}} days of full access.',
  pillSetupRequired: 'Needs setup',
  fallbackAccountEmail: 'Parent account',
  planTrialName: 'Trial',
  planPremiumName: 'Premium',
  currentPlanBadge: 'Current plan',
  planPeriod: '/ month',
  planPeriodYear: '/ year',
  termMonthly: 'Monthly',
  termAnnual: 'Yearly',
  bestValueBadge: 'Best value',
  premiumManageBillingNote: 'Manage billing in your App Store or Google Play settings.',
  // The comparison table. Rows and their order: `planComparison` in
  // `@kidgate/core/domain` — only rows where the two columns differ are rows,
  // and everything both plans carry is `compareIncluded` below.
  compareTitle: 'Free and Premium, side by side',
  compareColumnFree: 'Free',
  compareColumnPremium: 'Premium',
  compareDevices: 'Child devices',
  compareDevicesFree: '1',
  compareDevicesPremium: 'Unlimited',
  compareSync: 'Updates from the device',
  compareSyncFree: 'Every 30 minutes',
  compareSyncPremium: 'Live',
  compareScreenTime: 'Screen time',
  compareScreenTimeFree: 'Today, top 3 apps',
  compareScreenTimePremium: 'Every app, 30-day history',
  compareLocation: 'Location',
  compareLocationFree: 'When you open the map',
  compareLocationPremium: 'Live, with history and place alerts',
  compareVideo: 'YouTube and video history',
  compareWeb: 'Web',
  // One promise made twice — the web row and the new-apps row share this cell,
  // because two wordings would read as two different limits.
  compareCountOnly: 'How many, not which',
  compareWebPremium: 'Full history and searches',
  compareNewApps: 'New apps installed',
  compareNewAppsPremium: 'Which apps, and approval before install',
  compareMessages: 'Message alerts (Android)',
  compareSafety: 'Protection alerts and Check-In',
  compareControls: 'App blocking and web filter',
  compareControlsFree: 'Any app, adult content',
  compareControlsPremium: 'By category, per-app limits, your own lists',
  compareReport: 'Weekly report',
  compareReportFree: 'Once, when the trial ends',
  compareReportPremium: 'Every week',
  compareActivityFeed: 'Activity feed',
  compareActivityFeedFree: 'Today',
  compareActivityFeedPremium: '30 days',
  compareChildReport: 'Per-child reports',
  compareIncluded:
    'Both plans include the daily limit, blocked hours, blocked apps, the web filter, remote lock, SOS, time requests and reward tasks on iPhone, Android, Mac and Windows in one family, plus the web dashboard and several parents. Android TV and Chromebook are on the way and carry fewer controls.',
  // The rows above, folded into the five reasons Premium sells
  // (`docs/PRICING.md` §5). Groups and their order: `planComparison` in
  // `@kidgate/core/domain`. A headline is one or two words; a tagline is one
  // calm sentence in the parent's terms, never a feature list.
  sectionWhyPremium: 'What Premium adds',
  sectionWhyPremiumSubtitle:
    'Every rule keeps working on Free. Premium adds what you can see, and how soon.',
  groupLiveTitle: 'Live',
  groupInsightTitle: 'Every detail',
  groupAlertsTitle: 'Alerts',
  groupDevicesTitle: 'Every device',
  groupControlsTitle: 'Finer controls',
  sectionIncludedFeatures: 'What is included',
  footerLegal:
    'Billed through the App Store or Google Play. Subscriptions renew automatically unless you cancel at least 24 hours before the period ends. The one-time purchase does not renew and lasts for as long as KidGate is available.',
  subscribeButton: 'Subscribe to Premium',
  restoringPurchases: 'Restoring…',
  restorePurchases: 'Restore purchases',
  premiumDescription:
    'Keep using KidGate after your trial with the same full protection.',
  // Title Case throughout, and worded to match the screen each feature opens —
  // a chip that reads differently from its destination reads as a promise the
  // app does not keep.
  featurePausePhone: 'Device Lock',
  featureDailyLimits: 'Daily Limit',
  featureBlockedHours: 'Blocked Hours',
  featureTimeRequests: 'Time Requests',
  featureAppBlocking: 'Blocked Apps',
  featureWebFiltering: 'Web Filter',
  featureSeeLocation: 'Live Location',
  featureSosAlerts: 'SOS Alerts',
  trialPlanName: 'Trial',
  trialDescription:
    'Starts when your first parent and child devices are connected. Removing a child device does not reset the trial.',
  premiumPlanName: 'Premium',
  subscribeBadge: 'Subscribe',
  currentPlanKicker: 'Current plan',
  trialEnded: 'Trial ended',
  trialPending: 'Trial not started',
  premiumActiveSubtitle: 'You have full access right now.',
  trialActiveSubtitle: 'Full access during your {{days}}-day trial.',
  subscribeToContinue:
    'Now on the free plan. Your rules keep working — subscribe for live activity, history and reports.',
  connectDevicesToStartTrial:
    'Connect a parent device and a child device to start your trial.',
  premiumActiveFooter: 'Premium active',
  premiumPriceFooter: 'Premium {{price}}/mo',
  viewPlans: 'View plans',
  viewFamilyPlanStatus: 'View plan status',
  onlyOwnerCanSubscribe: 'Only the family owner can subscribe or restore purchases.',
  memberSubscriptionNotice:
    'One plan covers the whole family and only the owner pays. You can see whether the family is on trial or subscribed.',
  memberTrialActiveSubtitle:
    'This family is on trial. When it ends, every rule keeps working on one device; the owner can subscribe for live activity, history and every device.',
  memberTrialEndedSubtitle:
    'This family’s trial has ended. Daily Limit, Blocked Apps, Web Filter and location still work. Ask the owner to subscribe for live updates, history and alerts.',
  memberSetupTrialSubtitle:
    'The trial starts when the owner connects a parent device and a child device.',
  premiumActivatedTitle: 'Premium unlocked',
  premiumActivatedSubtitle: 'Every KidGate feature is now available to your family.',
  unableToActivatePremium: 'Unable to activate Premium. Try again.',
  purchaseAlreadyOwned:
    'You already have this subscription. Tap Restore purchases to unlock it here.',
  purchasePending:
    'Your purchase is waiting for approval. Premium unlocks as soon as it goes through.',
  purchaseFailed: 'The purchase did not go through. Try again.',
  storeNotReady: 'The store is not ready yet. Try again in a moment.',
  premiumNotAvailable: 'Premium is not available to purchase right now.',
  premiumProductNotFound:
    'Premium is not available to purchase right now. Try again later.',
  subscriptionOfferNotConfigured:
    'This subscription is not available right now. Try again later.',
  unableToStartPurchase: 'Unable to start the purchase. Try again.',
  noActiveSubscription: 'No active subscription found.',
  purchasesRestored: 'Purchases restored.',
  unableToRestorePurchases: 'Unable to restore purchases. Try again.',
  purchaseVerificationFailed: 'Purchase verification did not succeed.',
  unableToVerifyPurchase: 'Unable to verify the purchase. Try again.',
  // Shown to joined parents — only the family owner can subscribe, so this
  // has to name who needs to act instead of offering a button they can't use.
  familyPremiumEndedTitle: 'This family’s Premium has ended',
  familyPremiumEndedBody:
    'Daily Limit, Blocked Hours, Blocked Apps, Web Filter and location still work. Live updates, history, alerts and reports are paused until the family owner renews Premium.',
  pricesUnavailable: 'Could not load prices from the store.',
  pricesRetry: 'Try again',
  featureRewardTasks: 'Reward Tasks',
  sectionChoosePlan: 'Choose your plan',
  saveBadge: 'Save {{percent}}%',
  billedMonthly: 'Billed every month',
  billedAnnually: 'Billed once a year',
  trustCancelAnytime: 'Cancel anytime',
  trustOnePlan: 'One plan, whole family',
  trustNoAds: 'No ads, ever',
  freePlanName: 'Free',
  freeDescription: 'Keep the basics running for one child device, with no time limit.',
  featureOneChildDevice: 'One child device',
  termLifetime: 'Lifetime',
  badgeOneTime: 'One-time',
  planPeriodOnce: 'once',
  billedOnce:
    'Pay once for up to {{devices}} child devices, for as long as KidGate is available',
  sectionFreePlan: 'If you never subscribe',
  devicesUnlimited: 'Unlimited child devices',
  featureFootnotePlatforms:
    'A few features depend on what each platform allows, so not all of them are available on every device.',
  sectionPlatforms: 'Where KidGate runs',
  platformIos: 'iPhone and iPad',
  platformIosDetail: 'Parent or child device · iOS 16 and later',
  platformAndroid: 'Android',
  platformAndroidDetail: 'Parent or child device · Android 7 and later',
  platformMac: 'Mac',
  platformMacDetail: 'Child device only · macOS 12 and later',
  platformIosLimits:
    'No App Limits or message alerts. The web filter covers adult sites only, and blocked apps are chosen on the iPhone itself.',
  platformMacLimits: 'No message alerts, and location is approximate.',
  platformWindowsLimits: 'No message alerts, and location is approximate.',
  platformAndroidTvLimits:
    'No message alerts, location, SOS or time requests. App blocking is best-effort.',
  platformChromebookLimits:
    'Web filter only — no Daily Limit, Blocked Hours, App Blocking, Device Lock, SOS or location.',
  platformComingSoon: 'Coming soon',
  platformWindows: 'Windows',
  platformWindowsDetail: 'Child device only · Windows 10 and later',
  platformAndroidTv: 'Android TV',
  platformAndroidTvDetail: 'Child device only · Android TV 7 and later',
  platformChromebook: 'Chromebook',
  platformChromebookDetail: 'Child device · web filtering in Chrome only',
  // The premium teasers (`@kidgate/core/domain/premiumTeaser`). Each body is
  // its `docs/PRICING.md` §4 row, said at the moment a parent misses it: a
  // comparison table asks them to imagine the gap, these measure it.
  teaserCta: 'See Premium',
  // A label with a value, never a counted noun ("7 apps"), which is what keeps
  // these three out of the plural machinery in fourteen packs — the shape
  // `usage.protectionWebBlocked` already uses.
  teaserProofOtherApps: 'Other apps: {{count}} · {{minutes}}',
  teaserProofOtherMinutes: 'Other apps: {{minutes}}',
  teaserProofBlocked: 'Blocked this week: {{count}}',
  teaserTopApps: 'Premium names every app, minute by minute, and keeps 30 days of it.',
  teaserWebHistory:
    'Premium shows which sites were blocked, and what your child searched for.',
  teaserVideoHistory: 'Premium keeps every YouTube video and Short they watched.',
  teaserLocationTrail:
    'Premium keeps where they went, and tells you when they arrive at or leave home and school.',
  teaserActivityWindow: 'Free shows today. Premium keeps 30 days.',
  teaserChildReport: 'Premium adds a report for each child, and a new one every week.',
  teaserMessageAlerts:
    'Premium tells you when a message needs your attention. Android only.',
  // §3's axis, for a surface comparing plans rather than missing a feature.
  teaserLiveNote: 'Free updates every 30 minutes. Premium is live.',
} as const;
