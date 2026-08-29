/**
 * The weekly report, on a parent's phone and on the dashboard.
 *
 * The same key names exist in `web/locales/<lang>` under `report`, because
 * `@kidgate/core/domain/reportCopy` words the report for both key spaces and
 * looks each key up by name. Adding a key here means adding it there; the two
 * packs stay separate for the reasons in the package CLAUDE.md, but this
 * namespace is the one place they are deliberately parallel.
 *
 * `{{delta}}`, `{{duration}}`, `{{limit}}`, `{{total}}` and `{{value}}` arrive
 * already formatted as durations ("1h 35m") — the app's own `formatUsageDuration`
 * on the phone, `formatMinutes` in the browser. Never add a unit around them.
 *
 * Register: neutral, and shorter than the rest of the parent copy. This is read
 * once a week and often forwarded, so it states what was measured and stops.
 * Nothing here diagnoses a child — a parent decides what four late nights mean
 * in their house.
 */
export const report = {
  title: 'Weekly report',
  subtitle: 'What KidGate noticed about the week.',
  weekOf: 'Week {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Sent Sunday',
  triggerManual: 'Created by you',

  statScreenTime: 'Screen Time',
  statDailyAverage: 'Daily average',
  statBlockedApps: 'Apps blocked',
  statBlockedWebVisits: 'Sites filtered',

  trendUp: '{{value}} more than the week before',
  trendDown: '{{value}} less than the week before',
  trendFlat: 'About the same as the week before',
  trendFirstWeek: 'First week measured',
  barThisWeek: 'This week',
  barLastWeek: 'Last week',

  highlights: 'Worth knowing',
  sevAttention: 'Worth a look',
  sevNotable: 'Notable',
  sevInfo: 'Good to know',

  findingUsageUp: 'Screen time was up {{percent}}% — {{delta}} more than last week.',
  findingUsageDown:
    'Screen time was down {{percent}}% — {{delta}} less than last week.',
  findingUsageFlat: 'Screen time held steady at {{total}}.',
  findingLateNight_one: 'One night past 11pm — it ran to {{time}}.',
  findingLateNight_other: '{{count}} nights past 11pm — the latest ran to {{time}}.',
  findingNewTopApp: '{{app}} is new this week and already took {{duration}}.',
  findingAppSurge: '{{app}} is up {{delta}} on last week — {{duration}} in total.',
  findingLimitHit_one: 'The daily limit of {{limit}} was reached on one day.',
  findingLimitHit_other: 'The daily limit of {{limit}} was reached on {{count}} days.',
  findingBlockedApps: '{{count}} blocked app openings, against {{previous}} last week.',
  findingBlockedWeb: '{{count}} sites filtered, against {{previous}} last week.',
  findingQuietWeek: 'A quiet week — {{total}} in all, and nothing that needed you.',

  /*
   * The positive findings.
   *
   * Each says what happened and the figure behind it, in the same register as
   * the lines above — a parent should be able to repeat one to their child.
   * None of them praises: `docs/COPY_STYLE.md` rules out flattery as firmly as
   * it rules out alarm, and "well done" tells a parent nothing they can act on
   * or repeat. "The daily limit held every day" does.
   *
   * These render only when the generated narrative was rejected; the sentence
   * most families read is `digestNarrative`'s, already in their own language.
   */
  findingLimitRespected: 'The daily limit of {{limit}} held on all {{count}} days.',
  findingLateNightGone_one: 'No late nights this week, after one last week.',
  findingLateNightGone_other: 'No late nights this week, after {{count}} last week.',
  findingBlockedAppsDown:
    '{{count}} blocked app openings, down from {{previous}} last week.',
  findingBlockedWebDown: '{{count}} sites filtered, down from {{previous}} last week.',
  findingLearningTime: '{{duration}} in education apps, most of it in {{app}}.',
  findingTasksDone_one: 'One task finished, earning {{bonus}}.',
  findingTasksDone_other: '{{count}} tasks finished, earning {{bonus}}.',
  findingAskedFirst_one: 'One request sent, rather than working around a rule.',
  findingAskedFirst_other:
    '{{count}} requests sent, rather than working around a rule.',
  findingCheckedIn: 'All {{asked}} check-ins answered.',

  narrativeTitle: 'In a sentence',
  /*
   * The week's one suggested action, as a button.
   *
   * Worded for the reason rather than for the control: `reportAction` records
   * which finding it answers, and "block the late-night hours" and "set a daily
   * limit" are different sentences even when both open the same screen. The
   * feature names here must match `blockedHours.title` and `controls.dailyLimit`
   * exactly — a report that names a screen differently from the screen it opens
   * is a support ticket, which is the same rule `digestNarrative`'s per-locale
   * deny list enforces on the generated sentence above it.
   */
  actionTitle: 'One thing you could do',
  actionDailyLimit: 'Set a Daily Limit of {{duration}}',
  actionDailyLimitWhy: 'That was the daily pace last week.',
  actionBlockedHours: 'Set Blocked Hours',
  actionBlockedHoursLateNight: 'Block the late-night hours',
  actionOnDevice: 'On {{device}}',
  finePrint:
    'Figures cover {{from}} to {{to}}, across every device in the family. Screen Time is what the devices reported; minutes they could not measure are in neither total.',

  generate: 'Write this week’s report',
  generating: 'Writing…',
  share: 'Share',
  copySummary: 'Copy summary',
  copied: 'Summary copied.',
  shareFailed: 'Could not open the share sheet.',

  emptyTitle: 'No report yet',
  emptyBody:
    'A report arrives every Sunday evening. You can write this week’s now — it covers the last seven days.',
  noUsage:
    'No screen time was recorded over the last two weeks, so there is nothing to report yet. A device that is offline reports nothing, which is not the same as a quiet week.',
  rateLimited: 'Too many attempts. Give it a minute.',
  loadFailedTitle: 'Reports did not load',
  loadFailed: 'Could not open your reports. Pull down to try again.',
  failed: 'Could not write the report. Try again in a moment.',

  historyTitle: 'Earlier weeks',
  historyEmpty: 'Reports you receive from now on are kept here for a year.',

  hubToday: 'Today',
  hubTodayEmpty: 'No device has reported today yet.',
  hubByChild: 'By child',
  hubByDevice: 'By device',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Each child',
  childrenNote: 'Same fortnight, per device. Percentages are of the family total.',
  colChild: 'Child',
  colScreenTime: 'Screen Time',
  colShare: 'Share',
  colChange: 'vs last week',
  colLimit: 'Over limit',
  colLateNights: 'Late nights',
  colTopApp: 'Most used',
  unnamedChild: 'Unnamed',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'about the same',
  noLimit: 'No limit',
  noTopApp: '—',
  limitDays_one: '{{count}} day',
  limitDays_other: '{{count}} days',
  lateNightsNone: 'none',
  busiest: 'Most screen time',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'What you will see',
  guestPreviewHint: 'Sample — real figures appear once you connect a device',
  guestTitle: 'See where the week went',
  guestDescription:
    'Sign in to measure today against a normal day, compare your children side by side, and get a written report every Sunday.',
  guestBenefitTrendTitle: 'Today, against normal',
  guestBenefitTrendBody:
    'A figure on its own says nothing. Today is drawn against your family’s own daily average.',
  guestBenefitChildTitle: 'Every child, side by side',
  guestBenefitChildBody:
    'Each child’s share of the day, in their own colour, across every device they use.',
  guestBenefitWeeklyTitle: 'A report every Sunday',
  guestBenefitWeeklyBody:
    'What changed, which apps grew, and the late nights — kept for a year.',
  guestSignInButton: 'Sign in',
  guestCreateAccount: 'Create a parent account',
} as const;
