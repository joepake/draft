export const trial = {
  trialDaysHoursLeft: '{{days}}d {{hours}}h left',
  trialHoursMinutesLeft: '{{hours}}h {{minutes}}m left',
  trialMinutesLeft: '{{minutes}}m left',
  trialDeviceCliff:
    'When the trial ends, only {{keeps}} of your {{using}} devices keeps sending reports and taking rule changes. The rest keep enforcing the rules they already have, but from that point on you can only loosen those rules, never tighten them.',
  trialBannerTitle: 'Trial · {{remaining}}',
  trialUrgentBody:
    'Your trial is almost over. Subscribe to Premium for {{price}}/month so nothing is interrupted.',
  trialNormalBody:
    'Enjoying KidGate? Subscribe to Premium for {{price}}/month to keep the full experience after your trial ends.',
  impactTitle: 'Last day of your trial',
  impactSubtitle: 'Here is what KidGate did during the trial:',
  impactBlockedApps: 'Blocked {{count}} opens of restricted apps',
  impactScreenTime: 'Screen time down about {{duration}} per day',
  impactWebBlocked: 'Blocked {{count}} visits to inappropriate websites',
  impactTamper: 'Flagged {{count}} times protection was switched off',
  impactLocks: 'Enforced bedtime and blocked hours {{count}} times',
  impactScreenTimeTracked: 'Measured {{duration}} of screen time for you',
  impactDevices: 'Watched over {{count}} devices, day and night',
  impactPlaceArrivals: 'Told you {{count}} times they arrived safely',
  impactAppInstalled: 'Spotted {{count}} new apps the day they appeared',
  impactSos: 'Delivered {{count}} SOS alerts straight to you',
  impactKeepButton: 'Keep this protection',
} as const;
