export const child = {
  pageTitle: 'Status',
  statusPaused: 'Locked',
  statusActive: 'Active',
  readyTitle: 'You are all set',
  readyBody:
    'If you need more screen time, you can send a request to your parent above. In an emergency, use the SOS button.',
  setupCollapsedTitle: 'Finish setup with a parent',
  setupCollapsedRequiredCount: '{{count}} required steps',
  setupCollapsedRequiredCount_one: '{{count}} required step',
  setupCollapsedOptionalCount: '{{count}} optional steps',
  setupCollapsedOptionalCount_one: '{{count}} optional step',
  oneMoment: 'One moment, please…',
  paused: 'Locked',
  blockedHours: 'Blocked Hours',
  limitReached: 'Limit reached',
  active: 'Active',
  parentPausedThisDevice: 'Your parent has locked this device for now.',
  blockedHoursOnPaused:
    'Blocked Hours are active right now. This is a good time to take a break.',
  outOfScreenTimeAskParent:
    'You have used all of today’s screen time. You can request more below.',
  screenTimeToday: 'Screen Time today',
  usedOverLimitMinutes: '{{used}} / {{limit}}',
  usedMinutesOnly: '{{used}}',
  outOfScreenTimeToday:
    'You have used all of today’s screen time. You can request more from your parent.',
  devicePaused: 'Device locked',
  devicePausedByParent: '{{deviceName}} is locked right now.',
  phonePausedByParent: 'Your parent has locked this device for now.',
  pausedAskParentOrSos:
    'Ask your parent to unlock it when you need it again. In an emergency, you can still send an SOS.',
  blockedHoursLockTitle: 'Blocked Hours',
  blockedHoursLockBody:
    'Blocked Hours are active right now. This is a good time to take a break.',
  blockedHoursLockHint:
    'If you need this device now, ask your parent to change Blocked Hours. In an emergency, you can still send an SOS.',
  blockedHoursLockBodyUntil:
    'Blocked Hours are active until {{time}}. This is a good time to take a break.',
  dailyLimitLockHint:
    'Ask your parent if you need more time. In an emergency, you can still send an SOS.',
  appClosedTitle: 'App closed',
  appClosedBody: 'KidGate closed it because it is blocked right now.',
  parentPausedAccess: 'Your parent has locked this device for now.',
  parentRestoredAccess: 'Your parent unlocked this device. You can continue using it.',
  toastDailyLimitIncreased:
    'Your parent added {{minutes}} more minutes of screen time.',
  toastDailyLimitIncreased_one:
    'Your parent added {{minutes}} more minute of screen time.',
  errorDeviceNotRegistered:
    'This device is not ready yet. Try again in a moment, or pair it again if this keeps happening.',
  errorScreenTimeRequired:
    'Screen Time access is required. Allow it for KidGate, then try again.',
  minUsed: '{{used}} used',
  setupContinueButton: 'Continue setup',
  setupWizardTitle: 'Set up protection',
  setupWizardProgress: '{{done}}/{{total}} completed',
  setupWizardRequired: 'Required',
  setupWizardOptional: 'Optional',
  setupWizardSkip: 'Skip for now',
  setupWizardWatchGuide: 'Show me how',
  setupGrantStuckHint:
    'Turned it on but nothing changed? Restart the TV, then try again.',
  setupWizardAllDoneTitle: 'All set',
  setupWizardAllDoneSubtitle: 'This device is now protected.',
  setupWizardStepDone: 'Done — that one is on.',
  setupWizardCoreDoneTitle: 'Core protection is on',
  setupWizardCoreDoneBody:
    'The must-have permissions are granted and this device is protected. The steps left are optional extras that can be done now or later.',
  setupWizardCoreDoneContinue: 'Strengthen it now',
  setupWizardCoreDoneLater: 'Finish later',
  setupWizardParentPinNote:
    'Parent PIN needed — a parent enters it on the next screen.',
} as const;
