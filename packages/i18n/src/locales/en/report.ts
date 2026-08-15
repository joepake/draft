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

  narrativeTitle: 'In a sentence',
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
  failed: 'Could not write the report. Try again in a moment.',

  historyTitle: 'Earlier weeks',
  historyEmpty: 'Reports you receive from now on are kept here for a year.',
} as const;
