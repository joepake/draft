// Android notifications and notification channels, drawn in Kotlin from what
// `apps/mobile` pushes (`services/native/nativeCopy`, `KidGateNativeCopy`).
// Channel names and descriptions are what Android Settings lists under
// KidGate → Notifications. `res/values*/strings.xml` keeps a copy of each as the
// fallback shown before the first push.
export const systemNotifications = {
  channelAlerts: 'KidGate alerts',
  channelAlertsDesc: 'Check-In, Time Requests and other alerts from KidGate',
  channelSos: 'SOS alerts',
  channelSosDesc: 'Urgent alerts when a child sends an SOS',
  channelWebFilterDesc: 'Shows while the Web Filter is running on this device',
  channelLocation: 'Location sharing',
  channelLocationDesc: 'Shows while KidGate updates this device’s location',
  channelMonitor: 'KidGate protection',
  channelMonitorDesc: 'Shows while KidGate’s rules are running on this device',
  channelRing: 'Play sound',
  channelRingDesc: 'Rings when your parent plays a sound to find this device',
  // The child device's ongoing notifications.
  // Also the Web Filter channel's name. It must contain the locale's own
  // `plans.featureWebFiltering` label, worded as that language names a product
  // feature.
  webFilterTitle: 'KidGate Web Filter',
  webFilterBody: 'Filtering websites on this device',
  locationTitle: 'Updating location',
  locationBody: 'KidGate is sharing this device’s location with your parent.',
  monitorTitleWeak: 'KidGate protection is limited',
  monitorTitleActive: 'KidGate protection is on',
  monitorTitleIdle: 'KidGate is running',
  monitorBodyAccessibility:
    'Turn on KidGate in Accessibility settings. Without it, other apps can still open.',
  monitorBodyDailyLimit: 'Daily Limit reached',
  monitorBodySchedule: 'Blocked Hours are on',
  monitorBodyAppBlocking: 'Blocking the apps your parent chose',
  monitorBodyReady: 'Ready to apply your parent’s rules',
  // Shown only when a push arrives without its server-written text.
  sosTitle: 'SOS — help needed',
  sosBody: 'A child’s device sent an SOS.',
  checkInBody: 'Your parent wants to know you’re okay.',
  checkInSafeTitle: 'Your child is safe',
  checkInSafeBody: 'Your child answered that they are okay.',
  timeRequestTitle: 'More time requested',
  timeRequestBody: 'Your child asked for more screen time.',
} as const;
