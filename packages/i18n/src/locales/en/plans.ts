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
    'Daily Limit, Blocked Hours and location keep working for free. Subscribe to get Blocked Apps, Web Filter, alerts and reports back.',
  pillTrialEnded: 'Trial ended',
  statusStartTrialTitle: 'Start your trial',
  statusStartTrialSubtitle:
    'Connect one parent device and one child device for {{days}} days of full access.',
  pillSetupRequired: 'Needs setup',
  fallbackAccountEmail: 'Parent account',
  planTrialName: 'Trial',
  planTrialMeta: 'Free · {{days}} days · Full access',
  planPremiumName: 'Premium',
  currentPlanBadge: 'Current plan',
  planPeriod: '/ month',
  planPeriodYear: '/ year',
  termMonthly: 'Monthly',
  termAnnual: 'Yearly',
  bestValueBadge: 'Best value',
  premiumManageBillingNote: 'Manage billing in your App Store or Google Play settings.',
  sectionIncludedFeatures: 'What is included',
  sectionIncludedFeaturesSubtitle:
    'Everything below is included in both Trial and Premium.',
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
  featureLocationHistory: 'Location History',
  featureCheckIn: 'Check-In',
  featureSosAlerts: 'SOS Alerts',
  featurePlaceAlerts: 'Place Alerts',
  featureTamperAlerts: 'Protection Alerts',
  featureAppAlerts: 'App Alerts',
  featureUsageReports: 'Usage Reports',
  featureActivityFeed: 'Activity Feed',
  featureParentPinProtection: 'Parent PIN Protection',
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
  subscribeToContinue: 'Now on the free plan. Subscribe to unlock everything again.',
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
    'This family is on trial. When it ends, the owner needs to subscribe to keep using KidGate.',
  memberTrialEndedSubtitle:
    'This family’s trial has ended. Daily Limit, Blocked Hours and location still work. Ask the owner to subscribe for the rest.',
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
    'Daily Limit, Blocked Hours and location still work. Blocked Apps, Web Filter, alerts and reports are paused until the family owner renews Premium.',
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
} as const;
