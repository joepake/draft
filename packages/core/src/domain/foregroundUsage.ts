/**
 * Tallying screen time by watching which app is in front.
 *
 * This is what a platform that will not tell you has to do instead. iOS and
 * Android hand back usage the OS collected whether or not this product was
 * running; macOS publishes nothing, so the agent samples the frontmost app and
 * adds up the gaps itself. `native/windows-agent` will need exactly this, which
 * is why it is here and not in the desktop app.
 *
 * A reducer rather than a class: the state is persisted across agent restarts
 * (launchd restarts the process; the morning's minutes must survive that), so
 * it has to be plain serialisable data, and every rule below is then testable
 * without a clock.
 */

import type { AppRef, AppRefId, IsoDate, Millis } from '@kidgate/schema/primitives';
import type { AppUsage, UsageSnapshot } from '@kidgate/schema/telemetry';
import type { UsageTimeline } from '@kidgate/schema/usageDay';
import { emptyTimeline, markTimeline, normaliseTimeline } from './usageTimeline';

/**
 * The longest gap between two samples that may be counted as usage.
 *
 * The bug this exists to stop: the lid closes at 16:00 with Safari in front and
 * opens at 08:00 the next morning. Without a cap, the first sample after wake
 * attributes sixteen hours to Safari, and the child is over every limit they
 * have before they have touched anything. macOS gives no wake notification the
 * WebView can rely on, so the cap is the defence, not the notification.
 *
 * Sized at three times the intended 30-second poll: long enough to absorb a
 * busy moment or a slow WebView, far too short to absorb a sleep.
 */
export const MAX_ATTRIBUTED_GAP_MS = 90_000;

export interface ForegroundUsageState {
  /** The child's local day these totals belong to. */
  date: IsoDate;
  /**
   * Accumulated seconds per app.
   *
   * Seconds, not minutes. A poll interval is tens of seconds, and rounding each
   * sample to whole minutes would round almost every one of them to zero.
   */
  seconds: Record<AppRefId, number>;
  /** Last label seen for each id, so a snapshot can name the app. */
  labels: Record<AppRefId, string | null>;
  /**
   * *When* the day was used, minute by minute — see `usageTimeline.ts`.
   *
   * The totals above cannot answer it: seconds accumulate and lose their
   * position, which is why a parent could be told "28 minutes" with no way to
   * see that most of the day was never observed at all. This carries the
   * observation, including its holes.
   */
  timeline: UsageTimeline;
  /** What was in front at the previous sample, and when that sample happened. */
  lastAppId: AppRefId | null;
  lastSampleAtMs: Millis | null;
  /**
   * The previous sample's minute of the local day, so a span can be marked
   * without this module knowing anything about timezones.
   *
   * Held rather than derived from `lastSampleAtMs`: deriving it needs the
   * device's timezone at that instant, which is `ClockPort`'s to know and
   * changes when a child flies or the clock is wound.
   */
  lastSampleMinute: number | null;
}

export interface ForegroundSample {
  /** Null when the Finder, the desktop or the lock window is frontmost. */
  app: AppRef | null;
  atMs: Millis;
  /** The child's local calendar day at `atMs`. */
  date: IsoDate;
  /** Minutes since the child's local midnight at `atMs`, 0–1439. */
  minuteOfDay: number;
}

export function emptyUsageState(date: IsoDate): ForegroundUsageState {
  return {
    date,
    seconds: {},
    labels: {},
    timeline: emptyTimeline(),
    lastAppId: null,
    lastSampleAtMs: null,
    lastSampleMinute: null,
  };
}

/**
 * Fold one observation into the running totals.
 *
 * Time is credited to the app that was in front at the *previous* sample, for
 * the interval between the two — you cannot know how long something has been in
 * front until you look again.
 */
export function applyForegroundSample(
  state: ForegroundUsageState,
  sample: ForegroundSample,
  options?: { maxGapMs?: number },
): ForegroundUsageState {
  const maxGapMs = options?.maxGapMs ?? MAX_ATTRIBUTED_GAP_MS;

  /*
   * Local midnight. The previous day's totals have already been reported and
   * are dropped rather than carried; the slice either side of the boundary is
   * credited to neither day. At a 30-second poll that discards at most half a
   * minute, which is cheaper than the alternative — splitting one interval
   * across two days and having to hold both.
   */
  if (sample.date !== state.date) {
    const rolled = emptyUsageState(sample.date);
    rolled.lastAppId = sample.app?.id ?? null;
    rolled.lastSampleAtMs = sample.atMs;
    rolled.lastSampleMinute = sample.minuteOfDay;
    if (sample.app) {
      rolled.labels[sample.app.id] = sample.app.label;
    }
    // The new day's timeline stays entirely unmeasured. Nothing has been
    // observed in it yet — the interval that just ended belongs to yesterday,
    // and yesterday's totals have already been reported and dropped.
    return rolled;
  }

  const seconds = { ...state.seconds };
  const labels = { ...state.labels };

  const elapsedMs =
    state.lastSampleAtMs === null ? 0 : sample.atMs - state.lastSampleAtMs;

  /*
   * A negative gap means the wall clock moved backwards — a manual change, or
   * NTP correcting a drifted clock on wake. Credit nothing and re-anchor. The
   * child does not get free minutes for it, and neither do they lose any.
   */
  const attributable =
    state.lastAppId !== null && elapsedMs > 0 && elapsedMs <= maxGapMs ? elapsedMs : 0;

  if (attributable > 0 && state.lastAppId !== null) {
    seconds[state.lastAppId] = (seconds[state.lastAppId] ?? 0) + attributable / 1000;
  }

  if (sample.app) {
    labels[sample.app.id] = sample.app.label;
  }

  return {
    date: state.date,
    seconds,
    labels,
    timeline: markSpan(state, sample, elapsedMs, maxGapMs),
    lastAppId: sample.app?.id ?? null,
    lastSampleAtMs: sample.atMs,
    lastSampleMinute: sample.minuteOfDay,
  };
}

/**
 * What this interval says about the minutes it covers.
 *
 * The three outcomes are the three states, and they are decided by the same
 * terms the seconds above are:
 *
 * - **used** — a gap this reducer is willing to credit, with something in
 *   front. The interval belongs to `lastAppId`, so its minutes are used.
 * - **idle** — a creditable gap with nothing in front: the Finder, the
 *   desktop, the lock window, the agent's own window. Observed, not used. This
 *   is the state that separates "the child put it down" from "nobody was
 *   watching", and inventing it is the whole reason the timeline exists.
 * - **unmeasured** — a gap longer than the cap, or a first sample after a
 *   restart. Something happened in there and this process cannot say what.
 *   Nothing is marked, so those minutes keep the `-` they were born with.
 *
 * A backwards clock is left unmarked for the same reason it is left
 * uncredited: the span it describes is not a span.
 */
function markSpan(
  state: ForegroundUsageState,
  sample: ForegroundSample,
  elapsedMs: number,
  maxGapMs: number,
): UsageTimeline {
  const timeline = normaliseTimeline(state.timeline);
  const from = state.lastSampleMinute;

  if (from === null || elapsedMs <= 0 || elapsedMs > maxGapMs) {
    return timeline;
  }

  return markTimeline(
    timeline,
    from,
    sample.minuteOfDay,
    state.lastAppId === null ? 'idle' : 'used',
  );
}

/**
 * What the device reports to the family.
 *
 * `totalMinutes` is the sum of *attributed* time, so it deliberately under-counts:
 * a Mac left sitting on the Finder or the desktop has no frontmost app to credit,
 * and inventing a number there would mean guessing whether anyone was in the room.
 * Per-app minutes are rounded individually, so they need not add up to the total
 * exactly — the total is the accurate figure and the breakdown is the explanation.
 *
 * **`timeline` and `totalMinutes` disagree, and neither is wrong.** The total
 * counts attributed seconds and rounds once; the timeline counts minutes any
 * part of which was used, so a child switching apps every twenty seconds marks
 * more minutes than they spend. They answer different questions — how much, and
 * when — and reconciling them would mean making one of them lie.
 */
export function usageSnapshot(
  state: ForegroundUsageState,
  topAppsLimit = 8,
): UsageSnapshot {
  const entries = Object.entries(state.seconds);

  const totalSeconds = entries.reduce((sum, [, value]) => sum + value, 0);

  const topApps: AppUsage[] = entries
    .map(([id, value]): AppUsage => {
      const app: AppRef = { id, label: state.labels[id] ?? null };
      return { app, minutes: Math.round(value / 60) };
    })
    .filter(entry => entry.minutes > 0)
    .sort((a, b) => b.minutes - a.minutes || a.app.id.localeCompare(b.app.id))
    .slice(0, topAppsLimit);

  return {
    date: state.date,
    totalMinutes: Math.round(totalSeconds / 60),
    topApps,
    timeline: normaliseTimeline(state.timeline),
  };
}
