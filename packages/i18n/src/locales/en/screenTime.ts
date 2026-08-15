export const screenTime = {
  turnOnScreenTime: 'Turn on Screen Time',
  finishScreenTimeSetup: 'Finish Screen Time setup',
  screenTimeNeededForControls:
    'App Blocking, Blocked Hours, and locking require Screen Time on this device.',
  screenTimeNeededForLimits:
    'Without Screen Time, locking, Blocked Hours, and app limits cannot be applied.',
  screenTimeStepOpenKidGate: 'Open KidGate on this child device.',
  screenTimeStepAllowUsage: 'On the Status screen, select Allow App & Website Usage.',
  screenTimeStepTapAllow: 'When prompted, select Allow.',
  screenTimeStepReturnHereAuto: 'Return here — the status updates automatically.',
  screenTimeDeniedStepOpenSettings: 'On the child device, open Settings → KidGate.',
  screenTimeDeniedStepTurnOnRestrictions: 'Turn on Screen Time.',
  screenTimeDeniedStepOpenKidGateAgain: 'Open KidGate again on the child device.',
  screenTimeDeniedStepReturnWhenReady:
    'Return here — this card will disappear when setup is complete.',
  screenTimeSetupStep1: 'Select Allow App & Website Usage below.',
  screenTimeSetupStep2:
    'When prompted, select Allow on the App & Website Usage dialog.',
  screenTimeSetupStep3: 'Return here after the dialog closes.',
  screenTimeDeniedStep1: 'Select Open App Settings below.',
  screenTimeDeniedStep2: 'On the {{appName}} page, turn on Screen Time.',
  screenTimeDeniedStep3: 'Return to {{appName}} — this card will disappear.',
  screenTimeBannerTitleDenied: 'Turn on Screen Time',
  screenTimeBannerTitleRequest: 'Allow App & Website Usage',
  screenTimeBannerBodyDenied: '{{appName}} needs Screen Time turned on in Settings.',
  screenTimeBannerBodyRequest:
    'This lets your parent lock apps and set Blocked Hours on this device.',
  usageAccessBannerTitle: 'Turn on Usage access',
  usageAccessBannerBody:
    'KidGate needs Usage access to track screen time and enforce limits.',
  usageAccessStepOpenSettings: 'Select Open Settings below.',
  usageAccessStepFindKidGate: 'Find KidGate and turn on Usage access.',
  usageAccessStepReturn: 'Return here — the status updates automatically.',
  noDailyLimitSet: 'No Daily Limit set',
  limitReachedStatus: '{{used}} / {{limit}} · Limit reached',
  minutesUsedStatus: 'Used {{used}} / {{limit}}',
  usageUpdatesHint:
    'Usage updates every few minutes while Screen Time monitoring is active.',
  dailyLimitNote: 'Applies a daily screen time cap.',
  dailyLimitMinutes: '{{limitMinutes}} min',
} as const;
