/**
 * One child's report, across every device they hold.
 *
 * Same register as `report`: neutral, short, and it states what was measured
 * and stops. Nothing here tells a parent what four late nights mean in their
 * house.
 *
 * **Two totals, and the copy must not blur them.** `heroScreenOn` is wall-clock
 * time in front of any screen; `barCombined` is the devices added up, which is
 * larger whenever two were on at once. `@kidgate/core/domain/childUsage` owns
 * the arithmetic and the reason a child with an iPhone in the set gets a range
 * instead of a figure. A translation that renders both as "screen time" loses
 * the only distinction this screen exists to make.
 *
 * **Say the consequence before the mechanism.** These strings were written as a
 * measurement log — "In front of a screen", "A range, because one device
 * reports totals but not times", "Measured 15% of the time" — and a parent
 * reading the shipped Vietnamese could not tell what any of them was about.
 * Nothing there was mistranslated; the source described how KidGate measured
 * rather than what the child did. A caveat leads with what it means for the
 * figure ("An estimate — …"), and a percentage names its denominator.
 *
 * `{{value}}`, `{{low}}`, `{{high}}` and `{{total}}` arrive already formatted as
 * durations ("1h 35m") by the app's `formatUsageDuration`. Never add a unit
 * around them.
 */
export const childReport = {
  title: 'Report',
  devicesCount: '{{count}} devices',
  devicesCount_one: '{{count}} device',

  periodToday: 'Today',
  periodWeek: '7 days',
  periodMonth: '30 days',

  heroScreenOn: 'Actual time used',
  /*
   * The hero figure when the union is only bounded. It is the LOWER bound, not
   * the upper one: the upper bound is capped at the sum, so it duplicates the
   * "all devices added up" row underneath, and the sum is the figure that
   * counts a minute on two screens twice. A floor is one number, is true, and
   * is the one a parent can act on. `heroRange` still draws both ends beside
   * the bar, where the translucent stretch shows what the range means.
   */
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote: 'An estimate — one device reports how long it was used, but not when.',
  heroOverlap:
    '{{value}} of that was two screens at once, counted twice when the devices are added up.',
  // Shown in the same slot when the overlap cannot be known but the two bars
  // still differ. Without it the parent sees one bar shorter than the other
  // and is left to guess why.
  barsExplain:
    'One minute on two devices at once counts as two when the devices are added up.',
  heroEmpty: 'No usage reported yet',

  trendUp: '{{value}} more than the period before',
  trendDown: '{{value}} less than the period before',
  trendFlat: 'About the same as the period before',
  trendFirst: 'No earlier period to compare with',

  coverage: 'Measured {{percent}}% of this period',
  wellLateNights: 'Late nights',
  coverageNone: 'No device here can report when its screen was on',

  barCombined: 'All devices added up',

  sectionDays: 'Day by day',
  backToPeriod: 'Show the whole period again',
  bandLatestDay: 'Latest measured day',
  sectionWhen: 'When the screens were on',
  bandMerged: 'All devices',
  // Replaces the band rather than drawing one. A 24-hour strip that is 85%
  // "not measured" reads as a broken chart, not as an honest one.
  bandTooThin: 'Too little of this day was measured to draw it.',

  sectionDevices: 'Which device',
  deviceTotalsOnly: 'Totals only',
  openDeviceReport: 'Open the report for {{name}}',

  sectionApps: 'Most used',
  appOnDevices: 'On {{count}} devices',
  appOnDevices_one: 'On {{count}} device',
  appsEmpty: 'No app breakdown reported yet.',

  emptyNoDevices: 'No device is assigned to this child yet.',
  emptyAssign: 'Assign a device',
  partialError: 'One device could not be read. The figures below leave it out.',
};
