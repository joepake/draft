/**
 * What was worth saying about a family's week.
 *
 * The weekly digest currently carries four numbers — total minutes, the delta
 * against last week, blocked app opens, blocked sites — and picks one of three
 * sentences from them (`functions/scheduled/weeklyDigest.js`, `buildDigest`).
 * That is a report, not an observation: a week where the total barely moved but
 * the child was up past midnight four nights reads exactly like a quiet one.
 *
 * This module is the missing step. It takes the week as data and returns the
 * handful of things a parent would actually want pointed out, each as a `kind`
 * plus the numbers behind it. What renders them — a push string, an email
 * paragraph, a prompt handed to a model — is somebody else's problem, and
 * deliberately so: the same finding has to survive being turned into fourteen
 * languages and, eventually, into generated prose that must not invent a
 * number it was not given.
 *
 * **Params carry raw values, never formatted ones.** `formatDuration` needs a
 * locale and a translator, and dragging either into `packages/core` would break
 * the rule that keeps this package platform-free. A caller that has both —
 * `functions/lib/familyStats.js` does — formats at render time.
 *
 * Pure and clock-free, same as `scheduleWindow` and `usageTimeline` next door:
 * every day arrives as a record with its own date key, so a rule can be tested
 * by writing down a week rather than by faking a clock.
 */

import type { UsageAppBreakdown, UsageTimeline } from '@kidgate/schema/usageDay';
import { USAGE_TIMELINE_USED } from '@kidgate/schema/usageDay';

/**
 * Below this the two weeks are "about the same" and a comparison sentence
 * would be noise dressed up as a trend. Fifteen minutes across a whole week is
 * well inside the sampling error of both platforms' usage counters.
 *
 * Mirrored today in `functions/scheduled/weeklyDigest.js`, which had it first.
 * That copy is the one to delete when the digest starts consuming this module —
 * two thresholds that disagree would put a trend in the email and a flat week
 * in the push, from the same numbers.
 */
export const MEANINGFUL_DELTA_MINUTES = 15;

/**
 * A night counts as late only past this much use, so a single notification
 * check at 23:05 does not become "your child was up late".
 */
export const LATE_NIGHT_MIN_MINUTES = 10;

/** Nights below this are an ordinary variation, not a pattern worth a sentence. */
export const LATE_NIGHT_MIN_NIGHTS = 2;

/** At or past this many nights it stops being a habit and becomes the headline. */
export const LATE_NIGHT_ATTENTION_NIGHTS = 3;

/**
 * The late window, as minutes since local midnight, running 23:00 → 05:00.
 *
 * Split rather than a single range because it crosses midnight — the same
 * problem `scheduleWindow` solves for curfews, and solved the same way.
 */
export const LATE_NIGHT_EVENING_FROM = 23 * 60;
export const LATE_NIGHT_MORNING_TO = 5 * 60;

/** An app has to move by both of these to count as a surge, not a wobble. */
export const APP_SURGE_MIN_DELTA_MINUTES = 60;
export const APP_SURGE_MIN_RATIO = 1.5;

/** A new app is only worth naming once it has taken a real share of the week. */
export const NEW_TOP_APP_MIN_MINUTES = 60;

/** Days at or over the daily limit before it stops being an occasional overrun. */
export const LIMIT_HIT_MIN_DAYS = 3;

/** Blocking has to at least double *and* clear this floor to be a spike. */
export const BLOCKED_SPIKE_MIN_COUNT = 20;
export const BLOCKED_SPIKE_MIN_RATIO = 2;

/**
 * How many findings a caller gets back.
 *
 * A push notification holds two sentences and an email paragraph holds three.
 * Handing a renderer nine findings does not produce a richer digest, it
 * produces one that buries the thing that mattered — and handing nine to a
 * model produces a list read aloud. The cap is here rather than at each caller
 * so every surface agrees on which three won.
 */
export const MAX_FINDINGS = 3;

/**
 * How many of those three a positive finding may take.
 *
 * A plain cap over a merged list loses every positive finding by construction:
 * they are all `info`, and three concerns outrank them every time. A week that
 * genuinely contains both then reads exactly like a week that contained only
 * the concerns, which is the whole failure this was built to fix.
 *
 * One, not two. The report is a report — a week with three things wrong in it
 * has three things wrong in it, and padding that to parity would be the
 * flattery `docs/COPY_STYLE.md` rules out as firmly as it rules out alarm.
 */
export const MAX_POSITIVE_FINDINGS = 1;

/** Days in the week every rule here is measured over. */
export const DAYS_IN_WEEK = 7;

/**
 * Days of the week that must have reported before a positive finding may fire.
 *
 * **This is the constraint the feasibility gate closed on, and it is the
 * difference between a report and a flattering one.** A child who quits the
 * agent produces a week with few `usageDay` documents, a small total, no days
 * over the limit and no late nights — arithmetically identical to a week where
 * they simply stopped on their own. Told apart by nothing else in the data, a
 * positive finding computed over that week congratulates a child for turning
 * enforcement off, and a parent who catches that once has correctly concluded
 * the report cannot be trusted.
 *
 * A day is "reported" when the device wrote a `usageDay` document for it —
 * which is a signal every platform produces, iOS included, unlike `timeline`.
 * `UsageDayRepository.subscribeDay` already documents the distinction this
 * relies on: a missing document is "a day the child has not reported yet …
 * a different state from reported nothing". **The matching trap is one
 * function away**: `findRange` zero-fills the missing days, so anything reading
 * a week through it cannot tell the two apart at all and must not be used to
 * feed these rules.
 *
 * Six rather than seven, because a device legitimately misses a day — travel, a
 * flat battery, a machine left shut. `limitRespected` is the exception and
 * demands all seven; see the rule for why the two numbers differ.
 */
export const POSITIVE_MIN_REPORTED_DAYS = 6;

/**
 * Blocked attempts have to have been this high *last* week for a fall to mean
 * anything. Mirrors `BLOCKED_SPIKE_MIN_COUNT`: below the same floor, a drop
 * from 4 to 1 is noise in both directions.
 */
export const BLOCKED_DROP_MIN_PREVIOUS = BLOCKED_SPIKE_MIN_COUNT;

/** And it has to have at least halved, the inverse of the spike's ratio. */
export const BLOCKED_DROP_MAX_RATIO = 1 / BLOCKED_SPIKE_MIN_RATIO;

/**
 * Minutes of study apps before the week is worth calling out.
 *
 * Deliberately higher than `NEW_TOP_APP_MIN_MINUTES`: "your child spent an hour
 * in an education app" describes a single homework session and would fire for
 * most families most weeks, which is how a positive finding becomes wallpaper.
 */
export const LEARNING_MIN_MINUTES = 120;

export type FindingKind =
  | 'usageUp'
  | 'usageDown'
  | 'usageFlat'
  | 'lateNight'
  | 'newTopApp'
  | 'appSurge'
  | 'limitHitRepeatedly'
  | 'blockedSpike'
  | 'quietWeek'
  // The positive half. Every one of these says something the child did, with
  // the figure behind it, and every one is gated on the week being measured —
  // see `POSITIVE_MIN_REPORTED_DAYS`.
  | 'limitRespected'
  | 'lateNightGone'
  | 'blockedDown'
  | 'learningTime'
  | 'tasksDone'
  | 'askedFirst'
  | 'checkedIn';

/**
 * The kinds that say something went well.
 *
 * A set rather than a severity, because severity already means something else
 * here: `info` is "say it last", and a positive finding is `info` for exactly
 * that reason. What a renderer needs to know separately is whether a finding
 * belongs to the half of the report that must not be crowded out — which is
 * what `MAX_POSITIVE_FINDINGS` reserves a slot for.
 */
export const POSITIVE_KINDS: ReadonlySet<FindingKind> = new Set<FindingKind>([
  'limitRespected',
  'lateNightGone',
  'blockedDown',
  'learningTime',
  'tasksDone',
  'askedFirst',
  'checkedIn',
]);

/** Whether this finding is one of the good ones. */
export function isPositiveFinding(finding: { kind: string }): boolean {
  return POSITIVE_KINDS.has(finding.kind as FindingKind);
}

/**
 * How loudly to say it.
 *
 * `attention` is not "something is wrong with your child" — it is "this is the
 * line to lead with". Nothing in this module diagnoses anything; a parent
 * decides what four late nights mean in their house.
 */
export type FindingSeverity = 'info' | 'notable' | 'attention';

export interface Finding {
  kind: FindingKind;
  severity: FindingSeverity;
  /**
   * The numbers behind the finding, unformatted.
   *
   * Also the allow-list a generated sentence is checked against: a renderer
   * that hands these to a model can reject any output containing a number that
   * is not derived from this record, which makes an invented figure impossible
   * rather than unlikely.
   */
  params: Record<string, string | number>;
  /**
   * Whose week this is about, set by the caller when a family has more than one
   * child device.
   *
   * The rules here do not know about children — they take a week and return
   * what is true of it. `familyReport.familyFindings` runs the per-device rules
   * and tags what comes back, which keeps this module a pure function of one
   * week and leaves "which child" where the device documents are.
   *
   * Outside `params` on purpose: a name inside a param would have to appear in
   * the sentence, and that means a `{{child}}` slot in every finding string in
   * fourteen languages — including for the families with one child, who would
   * then read their own child's name in a report that could not be about
   * anybody else.
   */
  child?: string | null;
}

export interface DigestDay {
  /** Local day key, `YYYY-MM-DD`. */
  date: string;
  minutes: number;
  topApps: UsageAppBreakdown[];
  /**
   * Absent on a device that cannot report one — iOS never does. Rules that
   * need it skip the day rather than assuming the child was asleep, per the
   * three-state contract in `@kidgate/schema/usageDay`.
   */
  timeline?: UsageTimeline;
}

export interface DigestWeek {
  /**
   * The days the device actually reported. **Never zero-filled.**
   *
   * `days.length` is therefore the week's coverage, and the positive rules read
   * it as exactly that — see `POSITIVE_MIN_REPORTED_DAYS` for why a rule that
   * cannot tell "reported nothing" from "did not report" is a rule that
   * congratulates a child for uninstalling the agent. A caller that pads this
   * array to seven has silently switched that protection off.
   */
  days: DigestDay[];
  blockedAppOpens: number;
  blockedWebVisits: number;
}

export interface DigestInput {
  thisWeek: DigestWeek;
  lastWeek: DigestWeek;
  /** Null when the family has not set one — the limit rules then do not fire. */
  dailyLimitMinutes: number | null;
  /**
   * `packageName` → the app's category, for the apps this week used.
   *
   * From `appCategories/{packageName}` (`@kidgate/schema/aiApps`), which is a
   * product-wide cache holding no family data. Absent means the caller did not
   * look them up, and `learningTime` then does not fire — the same posture the
   * rest of this module takes toward `timeline`: a rule skips what it cannot
   * see rather than assuming a value for it.
   */
  appCategories?: ReadonlyMap<string, string>;
}

function totalMinutes(week: DigestWeek): number {
  return week.days.reduce((sum, day) => sum + Math.max(0, day.minutes), 0);
}

/** Minutes per app across the week, keyed by package name. */
function appMinutes(week: DigestWeek): Map<string, { label: string; minutes: number }> {
  const totals = new Map<string, { label: string; minutes: number }>();

  for (const day of week.days) {
    for (const app of day.topApps) {
      const minutes = Math.max(0, Math.round(app.minutes));
      if (minutes <= 0) {
        continue;
      }
      const existing = totals.get(app.packageName);
      if (existing) {
        existing.minutes += minutes;
        // Keep the newest label: an app that was renamed mid-week should be
        // named the way the child's launcher names it now.
        existing.label = app.label || existing.label;
      } else {
        totals.set(app.packageName, { label: app.label, minutes });
      }
    }
  }

  return totals;
}

export interface LateNightHit {
  date: string;
  /** 24–29h clock; renderers take `% 1440` for a wall clock. */
  latestMinute: number;
}

/**
 * Real late nights across a run of calendar days — one entry per night,
 * never two for one continuous session.
 *
 * `@kidgate/schema/usageDay` timelines are one bit per minute of **the
 * device's local day**, so a session that runs past midnight writes minutes
 * into two calendar days: the tail end of day N's evening, and the start of
 * day N+1's early morning. Evaluating each day's own evening-plus-morning in
 * isolation (the previous shape of this function) counted that one session
 * twice — once as day N's late night, again as day N+1's. `nights: 8` for a
 * seven-day week was the visible symptom.
 *
 * The fix pairs day N's evening (`LATE_NIGHT_EVENING_FROM`→end) with day
 * N+1's morning (`0`→`LATE_NIGHT_MORNING_TO`) as **one** night, attributed to
 * day N — every minute of a crossing session now counts toward exactly the
 * night it started on.
 *
 * Two edges this leaves deliberately unresolved rather than guessed at:
 * **the first day's own early morning** may be the tail of a night that
 * started before this run, and there is no earlier day in `days` to pair it
 * with — it is not counted, because attributing it to a night this array
 * cannot see would be a fabrication, not a floor. **The last day's evening**
 * has no following morning to confirm it ran past midnight; it is still
 * counted on its own minutes, same as it always was for a week's final day.
 */
export function lateNightHits(
  days: readonly { date: string; timeline?: UsageTimeline }[],
): LateNightHit[] {
  const hits: LateNightHit[] = [];

  for (let i = 0; i < days.length; i += 1) {
    const day = days[i];
    if (!day?.timeline) {
      continue;
    }

    let minutes = 0;
    let latestMinute = -1;

    for (let index = LATE_NIGHT_EVENING_FROM; index < day.timeline.length; index += 1) {
      if (day.timeline[index] === USAGE_TIMELINE_USED) {
        minutes += 1;
        latestMinute = Math.max(latestMinute, index);
      }
    }

    const next = days[i + 1];
    if (next?.timeline) {
      for (let index = 0; index < LATE_NIGHT_MORNING_TO; index += 1) {
        if (next.timeline[index] === USAGE_TIMELINE_USED) {
          minutes += 1;
          latestMinute = Math.max(latestMinute, index + 1440);
        }
      }
    }

    if (minutes >= LATE_NIGHT_MIN_MINUTES) {
      hits.push({ date: day.date, latestMinute });
    }
  }

  return hits;
}

function usageTrend(input: DigestInput): Finding | null {
  const recent = totalMinutes(input.thisWeek);
  const earlier = totalMinutes(input.lastWeek);

  // No baseline: a first week has nothing to be up or down against, and
  // "+18h vs 0" would read as an explosion rather than as a setup.
  if (earlier <= 0) {
    return null;
  }

  const delta = recent - earlier;

  if (Math.abs(delta) < MEANINGFUL_DELTA_MINUTES) {
    return {
      kind: 'usageFlat',
      severity: 'info',
      params: { totalMinutes: recent },
    };
  }

  return {
    kind: delta > 0 ? 'usageUp' : 'usageDown',
    severity: 'notable',
    params: {
      totalMinutes: recent,
      deltaMinutes: Math.abs(delta),
      percent: Math.round((Math.abs(delta) / earlier) * 100),
    },
  };
}

function lateNight(week: DigestWeek): Finding | null {
  const hits = lateNightHits(week.days);

  if (hits.length < LATE_NIGHT_MIN_NIGHTS) {
    return null;
  }

  const latestMinute = Math.max(...hits.map(hit => hit.latestMinute));

  return {
    kind: 'lateNight',
    severity: hits.length >= LATE_NIGHT_ATTENTION_NIGHTS ? 'attention' : 'notable',
    params: { nights: hits.length, latestMinute },
  };
}

function newTopApp(input: DigestInput): Finding | null {
  const recent = appMinutes(input.thisWeek);
  const earlier = appMinutes(input.lastWeek);

  let best: { packageName: string; label: string; minutes: number } | null = null;

  for (const [packageName, entry] of recent) {
    if (entry.minutes < NEW_TOP_APP_MIN_MINUTES) {
      continue;
    }
    // Present last week at any level: an app the child already used is not
    // news, however much it grew. That case is `appSurge`.
    if (earlier.has(packageName)) {
      continue;
    }
    if (!best || entry.minutes > best.minutes) {
      best = { packageName, label: entry.label, minutes: entry.minutes };
    }
  }

  if (!best) {
    return null;
  }

  return {
    kind: 'newTopApp',
    severity: 'notable',
    params: {
      packageName: best.packageName,
      label: best.label,
      minutes: best.minutes,
    },
  };
}

function appSurge(input: DigestInput): Finding | null {
  const recent = appMinutes(input.thisWeek);
  const earlier = appMinutes(input.lastWeek);

  let best: {
    packageName: string;
    label: string;
    minutes: number;
    delta: number;
  } | null = null;

  for (const [packageName, entry] of recent) {
    const before = earlier.get(packageName)?.minutes ?? 0;
    // Absent last week is `newTopApp`'s finding, not this one — reporting both
    // would spend two of three slots on one app.
    if (before <= 0) {
      continue;
    }
    const delta = entry.minutes - before;
    if (delta < APP_SURGE_MIN_DELTA_MINUTES) {
      continue;
    }
    if (entry.minutes < before * APP_SURGE_MIN_RATIO) {
      continue;
    }
    if (!best || delta > best.delta) {
      best = { packageName, label: entry.label, minutes: entry.minutes, delta };
    }
  }

  if (!best) {
    return null;
  }

  return {
    kind: 'appSurge',
    severity: 'notable',
    params: {
      packageName: best.packageName,
      label: best.label,
      minutes: best.minutes,
      deltaMinutes: best.delta,
    },
  };
}

function limitHitRepeatedly(input: DigestInput): Finding | null {
  const limit = input.dailyLimitMinutes;
  if (limit === null || limit <= 0) {
    return null;
  }

  const days = input.thisWeek.days.filter(day => day.minutes >= limit).length;
  if (days < LIMIT_HIT_MIN_DAYS) {
    return null;
  }

  return {
    kind: 'limitHitRepeatedly',
    severity: 'attention',
    params: { days, limitMinutes: limit },
  };
}

function blockedSpike(input: DigestInput): Finding | null {
  const candidates: { channel: 'app' | 'web'; recent: number; earlier: number }[] = [
    {
      channel: 'app',
      recent: input.thisWeek.blockedAppOpens,
      earlier: input.lastWeek.blockedAppOpens,
    },
    {
      channel: 'web',
      recent: input.thisWeek.blockedWebVisits,
      earlier: input.lastWeek.blockedWebVisits,
    },
  ];

  let best: { channel: 'app' | 'web'; recent: number; earlier: number } | null = null;

  for (const candidate of candidates) {
    if (candidate.recent < BLOCKED_SPIKE_MIN_COUNT) {
      continue;
    }
    // A first week of blocking has no ratio to clear; the floor above is the
    // whole test for it.
    if (
      candidate.earlier > 0 &&
      candidate.recent < candidate.earlier * BLOCKED_SPIKE_MIN_RATIO
    ) {
      continue;
    }
    if (!best || candidate.recent - candidate.earlier > best.recent - best.earlier) {
      best = candidate;
    }
  }

  if (!best) {
    return null;
  }

  return {
    kind: 'blockedSpike',
    severity: 'notable',
    params: {
      channel: best.channel,
      count: best.recent,
      previousCount: best.earlier,
    },
  };
}

/** Days in the week that carry a timeline, which is what the late rules need. */
function timelineDays(week: DigestWeek): number {
  return week.days.filter(day => Boolean(day.timeline)).length;
}

/** Nights in the week whose late window carries real use. */
function lateNightCount(week: DigestWeek): number {
  return lateNightHits(week.days).length;
}

/**
 * The daily limit was set, and no day reached it.
 *
 * **Demands all seven days, where every other positive rule takes six.** The
 * claim this makes is about *every* day — "never reached it" — and a week with
 * a day nobody measured cannot support it. The trend rules below survive a
 * missing day because a trend does; an absolute does not.
 *
 * Deliberately the mirror of `limitHitRepeatedly`, and the two cannot both
 * fire: that rule needs three days at or over the limit, this one needs none.
 */
function limitRespected(input: DigestInput): Finding | null {
  const limit = input.dailyLimitMinutes;
  if (limit === null || limit <= 0) {
    return null;
  }
  if (input.thisWeek.days.length < DAYS_IN_WEEK) {
    return null;
  }
  // A week the child barely touched is `quietWeek`'s to report. Calling seven
  // days of near-zero use "respecting the limit" credits a child for a week
  // they spent somewhere else, and it is the sentence a parent would most
  // reasonably call nonsense.
  if (totalMinutes(input.thisWeek) < limit) {
    return null;
  }
  if (input.thisWeek.days.some(day => day.minutes >= limit)) {
    return null;
  }

  return {
    kind: 'limitRespected',
    severity: 'info',
    params: { days: DAYS_IN_WEEK, limitMinutes: limit },
  };
}

/**
 * Late-night use stopped, after a week that had it.
 *
 * Needs a baseline that fired: without `lateNight`'s own threshold behind it,
 * "no late nights this week" is true of most weeks of most families and is not
 * an observation. What makes this one worth a sentence is that last week was
 * different.
 */
function lateNightGone(input: DigestInput): Finding | null {
  if (timelineDays(input.thisWeek) < POSITIVE_MIN_REPORTED_DAYS) {
    return null;
  }
  const previousNights = lateNightCount(input.lastWeek);
  if (previousNights < LATE_NIGHT_MIN_NIGHTS) {
    return null;
  }
  if (lateNightCount(input.thisWeek) > 0) {
    return null;
  }

  return {
    kind: 'lateNightGone',
    severity: 'info',
    params: { previousNights },
  };
}

/**
 * Blocked attempts fell away, the inverse of `blockedSpike`.
 *
 * Reported as what it is — fewer attempts to reach something the filter holds
 * back — and not as a claim about intent. A parent decides whether that means
 * the child stopped trying or stopped wanting to.
 */
function blockedDown(input: DigestInput): Finding | null {
  if (input.thisWeek.days.length < POSITIVE_MIN_REPORTED_DAYS) {
    return null;
  }

  const candidates: { channel: 'app' | 'web'; recent: number; earlier: number }[] = [
    {
      channel: 'app',
      recent: input.thisWeek.blockedAppOpens,
      earlier: input.lastWeek.blockedAppOpens,
    },
    {
      channel: 'web',
      recent: input.thisWeek.blockedWebVisits,
      earlier: input.lastWeek.blockedWebVisits,
    },
  ];

  let best: { channel: 'app' | 'web'; recent: number; earlier: number } | null = null;

  for (const candidate of candidates) {
    if (candidate.earlier < BLOCKED_DROP_MIN_PREVIOUS) {
      continue;
    }
    if (candidate.recent > candidate.earlier * BLOCKED_DROP_MAX_RATIO) {
      continue;
    }
    if (!best || candidate.earlier - candidate.recent > best.earlier - best.recent) {
      best = candidate;
    }
  }

  if (!best) {
    return null;
  }

  return {
    kind: 'blockedDown',
    severity: 'info',
    params: {
      channel: best.channel,
      count: best.recent,
      previousCount: best.earlier,
    },
  };
}

/**
 * A real share of the week went to apps the classifier calls `education`.
 *
 * The one finding here that changes what a *number already in the report*
 * means: "7 hours" reads as a verdict, and "7 hours, two of them in Khan
 * Academy" reads as a week. The category comes from the product-wide
 * `appCategories` cache, so this costs a lookup and no judgement of its own.
 *
 * `system` rows can never reach this — the app-classification gate found the
 * #2 and #4 apps on a real Android TV were a screensaver and a launcher, and
 * only `education` is counted here anyway.
 */
function learningTime(input: DigestInput): Finding | null {
  const categories = input.appCategories;
  if (!categories || categories.size === 0) {
    return null;
  }
  if (input.thisWeek.days.length < POSITIVE_MIN_REPORTED_DAYS) {
    return null;
  }

  let minutes = 0;
  let best: { label: string; minutes: number } | null = null;

  for (const [packageName, entry] of appMinutes(input.thisWeek)) {
    if (categories.get(packageName) !== 'education') {
      continue;
    }
    minutes += entry.minutes;
    if (!best || entry.minutes > best.minutes) {
      best = { label: entry.label, minutes: entry.minutes };
    }
  }

  if (minutes < LEARNING_MIN_MINUTES || !best) {
    return null;
  }

  return {
    kind: 'learningTime',
    severity: 'info',
    // `minutes` is the week's education total and `label` the app most of it
    // went to. The app's own minutes are deliberately absent: two figures for
    // one fact is what turns a sentence into a list.
    params: { minutes, label: best.label },
  };
}

/**
 * Fixed tie-break within a severity, so two weeks that produce the same
 * findings always order them the same way.
 *
 * Sorting on severity alone leaves the rest to `Array.prototype.sort`'s
 * stability and therefore to the order the rules happen to run in — which is
 * fine until a rule is inserted and every family's digest silently reorders.
 */
const KIND_PRIORITY: Record<FindingKind, number> = {
  limitHitRepeatedly: 0,
  lateNight: 1,
  blockedSpike: 2,
  appSurge: 3,
  newTopApp: 4,
  usageUp: 5,
  usageDown: 6,
  quietWeek: 7,
  usageFlat: 8,
  // The positive half, ranked the same way the concerns are: what the child
  // did deliberately first, what merely moved last. These only ever compete
  // with each other — the reserved slot is filled before the general sort runs.
  limitRespected: 20,
  lateNightGone: 21,
  tasksDone: 22,
  askedFirst: 23,
  checkedIn: 24,
  learningTime: 25,
  blockedDown: 26,
};

const SEVERITY_RANK: Record<FindingSeverity, number> = {
  attention: 0,
  notable: 1,
  info: 2,
};

function bySeverityThenKind(a: Finding, b: Finding): number {
  return (
    SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity] ||
    KIND_PRIORITY[a.kind] - KIND_PRIORITY[b.kind]
  );
}

/**
 * The findings that make the cut, with a slot held open for the good news.
 *
 * Ranking alone would drop every positive finding on any week that had two
 * concerns in it, because they are all `info` and `info` sorts last. That is
 * the bug this function exists to prevent, and it is not hypothetical: it is
 * the shape the report has had since it was written.
 *
 * So the best positive is taken first, up to `MAX_POSITIVE_FINDINGS`, and the
 * remaining slots are filled by rank as before. The result is re-sorted, so the
 * reserved finding still appears in its proper place in the paragraph — held
 * back from eviction, never promoted past a concern.
 *
 * Exported because the family-level assembly in `domain/familyReport` caps the
 * same way over a list this module never sees, and two cap implementations
 * would drift the first time one of them was corrected.
 */
export function pickFindings(findings: readonly Finding[]): Finding[] {
  const ranked = findings.slice().sort(bySeverityThenKind);
  const positives = ranked.filter(isPositiveFinding).slice(0, MAX_POSITIVE_FINDINGS);
  const rest = ranked.filter(finding => !positives.includes(finding));

  return [
    ...positives,
    ...rest.slice(0, Math.max(0, MAX_FINDINGS - positives.length)),
  ].sort(bySeverityThenKind);
}

/**
 * The week, as the two or three things worth saying about it.
 *
 * Returns an empty array for a family with nothing measured — the digest job
 * already skips those (`sendWeeklyDigest` stamps the week marker and moves on),
 * and a finding built from a silent week would report an offline device as a
 * result.
 *
 * `quietWeek` is the one finding that exists to say nothing happened, and it is
 * why the digest is worth sending at all: every other notification in this
 * product fires because something went wrong, which leaves a parent having a
 * good month with no evidence the subscription does anything. It is returned
 * only when usage did not rise and no rule found anything to flag, so it can
 * never contradict a finding sitting next to it.
 */
export function digestFindings(input: DigestInput): Finding[] {
  if (totalMinutes(input.thisWeek) <= 0 && totalMinutes(input.lastWeek) <= 0) {
    return [];
  }

  const found = [
    limitHitRepeatedly(input),
    lateNight(input.thisWeek),
    blockedSpike(input),
    appSurge(input),
    newTopApp(input),
    usageTrend(input),
    limitRespected(input),
    lateNightGone(input),
    blockedDown(input),
    learningTime(input),
  ].filter((finding): finding is Finding => finding !== null);

  // `usageDown` is the one `notable` finding a quiet week can contain: less
  // screen time than last week and nothing flagged is the good news this digest
  // exists to deliver, not a reason to withhold it. `usageUp` fails the test on
  // its own severity, so it needs no separate clause.
  const quiet = found.every(
    finding => finding.severity === 'info' || finding.kind === 'usageDown',
  );

  if (quiet) {
    const week: Finding = {
      kind: 'quietWeek',
      severity: 'info',
      params: { totalMinutes: totalMinutes(input.thisWeek) },
    };
    return [
      week,
      // `usageFlat` says the same thing one line later; `usageDown` adds the
      // number that makes the quiet week concrete.
      //
      // The cap still runs through `pickFindings` rather than a bare `slice`:
      // a quiet week with two positives in it would otherwise keep whichever
      // rule happened to run first, and `quietWeek` itself is not a positive —
      // "nothing needed attention" is the absence of a complaint, which is the
      // distinction this whole half of the module exists to draw.
      ...pickFindings(found.filter(finding => finding.kind !== 'usageFlat')),
    ].slice(0, MAX_FINDINGS);
  }

  return pickFindings(found);
}

/**
 * Every numeric token a finding legitimately contains, as strings.
 *
 * The guard rail for generated prose: a renderer that asks a model to turn
 * findings into sentences can extract the digits from what comes back and
 * refuse anything not in this set. A model cannot then quote a figure it was
 * never handed, whatever the prompt says — which matters because the one thing
 * a parent must be able to trust in a report about their child is the numbers.
 *
 * Derived values a sentence may reasonably reach for are included: minutes
 * split into hours and remainder, and `latestMinute` as a wall clock, because
 * "1h 35m" and "23:40" are the forms a person actually reads.
 *
 * **It catches fabrication, not misattribution.** Every token in "this week
 * your child used 7 hours" can be legitimate while the sentence is false,
 * because 7 hours was last week's total. This is a floor under generated prose,
 * not a proof that it is true — the eval over real weeks is what has to catch
 * the rest, and a reviewer who assumes otherwise will ship the wrong thing.
 */
export function findingNumericTokens(findings: Finding[]): Set<string> {
  const tokens = new Set<string>();

  const add = (value: number): void => {
    if (Number.isFinite(value)) {
      tokens.add(String(value));
    }
  };

  for (const finding of findings) {
    // Both late-night rules, not only the one that reports late nights.
    // Measured 2026-08-22: with `lateNightGone` present and `lateNight` absent,
    // Italian and Russian wrote the window out of the prompt's own legend —
    // "dopo le 23:00", "после 23:00" — and lost the whole sentence to
    // `ungroundedFigure` for quoting a number the report itself supplied.
    if (finding.kind === 'lateNight' || finding.kind === 'lateNightGone') {
      // The window's own edges, so a sentence can name it: "after 23:00",
      // "sau 23 giờ", "past 11 PM", "before 5 AM". The 12-hour form of 23 is
      // included because English writes it that way, and the zero-padded forms
      // because "23:00" and "05:00" tokenise as "00" and "05" — the guard
      // compares digit runs, not clocks.
      add(LATE_NIGHT_EVENING_FROM / 60);
      add(LATE_NIGHT_EVENING_FROM / 60 - 12);
      add(LATE_NIGHT_MORNING_TO / 60);
      tokens.add('00');
      tokens.add(String(LATE_NIGHT_MORNING_TO / 60).padStart(2, '0'));
    }

    // Zero, for the findings whose whole content is that something reached it.
    // "Từ 3 đêm xuống 0 đêm" and "auf 0 gefallen" are the natural wording of
    // `lateNightGone`, and the count is not in `params` precisely because it is
    // always zero — which left the guard rejecting the sentence for the one
    // digit the finding guarantees.
    if (finding.kind === 'lateNightGone') {
      add(0);
    }

    for (const [key, value] of Object.entries(finding.params)) {
      if (typeof value !== 'number') {
        continue;
      }
      add(value);

      if (key === 'latestMinute') {
        const wall = ((value % 1440) + 1440) % 1440;
        add(Math.floor(wall / 60));
        add(wall % 60);
        // The zero-padded minute, because a wall clock is written "0:05",
        // and the guard tokenises "05" as "05", which `add(5)` does not cover.
        tokens.add(String(wall % 60).padStart(2, '0'));
        // And the zero-padded hour, for the same reason one line up. This was
        // missing, and it was not theoretical: the fourteen-locale eval
        // (`functions/scripts/eval-digest-narrative.js`) rejected Indonesian
        // and Turkish on a latest use of 01:35, because both write a 24-hour
        // clock padded and "01" is a digit run no allow-list entry matched.
        // Every locale that pads was silently losing its generated prose and
        // falling back to the template, week after week, with the rejection
        // recorded as `ungroundedFigure` — the model had invented nothing.
        tokens.add(String(Math.floor(wall / 60)).padStart(2, '0'));
        continue;
      }

      if (key.endsWith('Minutes') || key === 'minutes') {
        add(Math.floor(value / 60));
        add(value % 60);
      }
    }
  }

  return tokens;
}
