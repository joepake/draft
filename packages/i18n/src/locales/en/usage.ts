export const usage = {
  title: 'Usage Report',
  fallbackDeviceName: 'Child device',
  sectionToday: 'Today',
  percentOfLimit: '{{percent}}% of limit',
  reportedAt: 'Updated {{time}}',
  statUsedLabel: 'Used',
  statLeftLabel: 'Left',
  statLimitLabel: 'Limit',
  limitOff: 'Off',
  sectionInsights: 'Insights',
  insightDailyLimitReached: 'Daily Limit reached',
  insightNearDailyLimit: 'Near the Daily Limit',
  insightMinutesRemaining: '{{minutes}}m remaining today',
  insightNoDailyLimit: 'No Daily Limit set',
  insightBlockedHoursActive: 'Blocked Hours active now',
  insightBlockedHoursScheduled: 'Blocked Hours scheduled',
  insightDeviceLocked: 'Device is locked',
  insightProtectionsHealthy: 'Protections look healthy',
  insightLocationUpdatesToday: '{{count}} location updates today',
  insightLocationUpdatesToday_one: '{{count}} location update today',
  signalLocksToday: 'Locks today',
  signalUnlocksToday: 'Unlocks today',
  signalLocksPeriod: 'Locks · 30 days',
  signalLocationsToday: 'Locations today',
  sectionWhatsTurnedOn: 'What is turned on',
  rowBlockedHours: 'Blocked Hours',
  valueOff: 'Off',
  rowBlockedApps: 'Blocked Apps',
  valueNotConfigured: 'Not configured',
  rowWebFilter: 'Web Filter',
  valueOn: 'On',
  rowLocation: 'Location',
  valueSharingOn: 'Sharing on',
  sectionLatestActivity: 'Latest activity',
  activityPeriodCount: '{{count}} in 30 days',
  activityEmpty:
    'No activity recorded yet. Locks, unlocks, and Screen Time updates will appear here.',
  usageReportAccessibility: 'Usage report. {{headline}}. Open the full report.',
  dailyLimitReached: 'Daily Limit reached',
  minutesLeftToday: '{{remaining}} left today',
  minutesUsedTodayShort: '{{used}} used today',
  noUsageDataYet: 'No usage data yet',
  usageToday: 'Usage today',
  report: 'Report',
  setDailyLimitToTrack: 'Set a Daily Limit to track remaining time and weekly trends.',
  deviceLockedChip: 'Device locked',
  blockedHoursChip: 'Blocked Hours',
  overLimitChip: 'Over limit',
  usageReportsNote: 'Shows screen time, locks, and recent activity for this device.',
  syncNote:
    'Screen time can take a few minutes to reach this screen — longer if the device has no internet connection or was closed unexpectedly.',
  syncNoteTv:
    'This television only checks in periodically, so screen time can take up to an hour to reach this screen — longer with no internet connection.',
  sectionLast30Days: 'Last 30 days',
  comparePeriodTotal: '30-day total',
  compareDayAvg: 'Daily average',
  compareVsYesterday: 'vs yesterday',
  dayTodayShort: 'Today',
  chartEmpty: 'The usage chart is unavailable right now.',
  chartNoDataYet:
    'Bars fill in as the child device syncs daily usage. Today updates from live minutes.',
  chartDayNone: 'No usage',
  bonusMinutesChip: '+{{minutes}} min bonus',
  dailyLimitGuide: 'Daily Limit {{duration}}',
  sectionTopApps: 'Most used apps',
  topAppsHint:
    'Today’s most used apps on the child device. Data builds up as Screen Time / Usage Access syncs.',
  // Said rather than left to be noticed, on every platform that excludes
  // anything: a screensaver was this product's second most-used "app" of a
  // month at 116 minutes and `com.apple.loginwindow` its fourth at 95, so a
  // device that was on for an hour can report twenty — and a parent with no
  // explanation reads that as the report being broken, or as their child having
  // found a way around it.
  //
  // “Not in use” must stay word-for-word `timelineIdle` in every locale. It
  // names a label the parent can see on the band directly above; a synonym
  // sends them looking for something that is not there.
  topAppsExcludedNote:
    'Screensavers, the home screen and KidGate’s own screen do not count as screen time. When the device is on but nobody is actually using it, those minutes are recorded as “Not in use”.',
  // Every app kind on this card is the nightly classifier's answer, so the
  // caveat is a fact about the card rather than about a row — a badge on each
  // line would mark every line and stop meaning anything. Same sentence, same
  // place as `webHistory.rollupNoteAi`: this is where a parent reads a label
  // and concludes something from it.
  topAppsAiNote:
    'Some kinds were worked out from the app’s name rather than matched to a known app, so a few may be off.',
  errorTitle: 'Unable to load usage',
  errorDescription: 'Check your connection and try again.',
  tryAgain: 'Try again',
  // Shown only when the rating is known — it is 0 for much of the long
  // tail, and 0 does not mean "suitable for everyone".
  appMinAge: 'Rated {{age}}+',
  underAMinute: 'Under a minute',
  // The row under the eighth app: everything the capped list cannot show.
  // A fact about the day, not an app — no rank, no bar, same voice as the
  // idle row beside it.
  topAppsOther: 'Other apps',
  topAppsEmpty:
    'No per-app data yet. On the child device, make sure KidGate is allowed to measure app usage, then wait for a sync.',
  protectionImpactTitle: 'Protection impact',
  protectionImpactHint: 'Recent events KidGate stopped on this device.',
  protectionBlockedApps: 'Blocked app opens',
  protectionWebBlocked: 'Websites blocked',
  protectionTamper: 'Protection alerts',
  sectionTimeline: 'When it was used',
  timelineUsed: 'In use',
  timelineIdle: 'Not in use',
  timelineUnmeasured: 'Not measured',
  timelineUnmeasuredHint:
    'KidGate was not running on the device, or the device was asleep. Those minutes are not in the total either.',
  timelineUnsupported: 'This device can report how long it was used, but not when.',
  timelinePending: 'No timeline reported yet.',
} as const;
