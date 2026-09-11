/**
 * The trailing week's counts, as a ring the device keeps and a sum it
 * publishes.
 *
 * `DeviceWeekCounters` is the field; this is the arithmetic behind it, and it
 * lives here because five child surfaces would otherwise each invent it —
 * which is how one family's "blocked this week" would mean seven days on a
 * phone and "since I last restarted" on a television.
 *
 * **A ring of daily buckets, not a running total with a reset.** The device is
 * off, asleep and out of network for most of a week; a total that had to be
 * reset on a schedule would be reset by whichever tick happened to run, or
 * not at all. Buckets keyed by local date need no scheduler: folding a day in
 * drops the ones that have aged out, and a device that was off for three days
 * comes back and drops three.
 *
 * **The device's own local date, never the server's.** The count sits beside a
 * daily limit and a bedtime, both of which are the child's local day; a window
 * that ended at a different midnight from those would be a third calendar in
 * one product.
 */

export interface WeekCounterBucket {
  /** `YYYY-MM-DD`, local to the child device. */
  date: string;
  blockedSites: number;
  newApps: number;
}

/**
 * Seven days, and the number is the sentence rather than the storage.
 *
 * "12 sites blocked this week" is something a parent can weigh; the same count
 * over a month is a number they cannot place, and over a day it is usually
 * zero. Seven also matches the weekly report, so the free tier's one figure
 * and the paid tier's page are talking about the same span.
 */
export const WEEK_COUNTER_DAYS = 7;

/** A date key `days` before `date`, both `YYYY-MM-DD` local. */
function shiftDate(date: string, days: number): string {
  const ms = Date.parse(`${date}T00:00:00Z`);
  if (Number.isNaN(ms)) {
    return date;
  }
  return new Date(ms - days * 86_400_000).toISOString().slice(0, 10);
}

/**
 * Whether `date` is inside the window ending at `today`.
 *
 * Inclusive of both ends: seven buckets, today's and the six before it. A
 * future date is out — a device whose clock jumped forward would otherwise
 * park a bucket the window can never leave behind, and every later day would
 * be counted against a window that is really eight days long or more.
 */
export function isInWeekWindow(date: string, today: string): boolean {
  return date <= today && date > shiftDate(today, WEEK_COUNTER_DAYS);
}

/**
 * Fold today's running totals into the ring and drop what has aged out.
 *
 * Returns a new array — the caller persists it — ordered oldest first, which
 * is the order a store writes and a reader debugs in.
 *
 * **`blockedSites` and `newApps` are gauges, not events, and today's bucket
 * takes the larger of the two.** This function accumulated them until
 * 2026-09-05, on a design note that read "these are events, not a gauge" —
 * and no agent has ever sent one. Every counter on every surface is a running
 * per-day total: Android's `webFilterBlockedToday` is the same counter as its
 * all-time one cut at midnight, the television's is a slice of `blockedCount`,
 * the Mac mirrors the content filter's own cumulative figure, and the browser
 * reads `kidgate.ext.blockedToday`. Nothing between an agent and this function
 * has ever computed a difference.
 *
 * So a phone that refused twelve sites by noon added twelve again on every
 * accepted report for the rest of the day — the free tier's headline number,
 * climbing into the hundreds on a device that blocked twelve things.
 *
 * **The fix is here rather than in the agents.** Making each one send a
 * difference means each remembering what it last reported, across restarts, on
 * four platforms — the fifth copy of this arithmetic that this module's own
 * header exists to prevent. Every agent already holds the right number; this
 * had only to stop adding it up.
 *
 * **`Math.max`, not a plain replace.** A counter can restart under a device
 * mid-day — the Mac's content-filter provider resets its totals when its
 * process does, which is why `policy.rs` already max-merges before reporting —
 * and a bucket that followed it down would take back a number the parent has
 * already been shown. Between two readings of one day, the larger is the one
 * that saw more of it.
 */
export function foldWeekCounters(
  buckets: readonly WeekCounterBucket[],
  today: string,
  events: { blockedSites?: number; newApps?: number },
): WeekCounterBucket[] {
  const kept = buckets.filter(
    bucket => bucket.date !== today && isInWeekWindow(bucket.date, today),
  );
  const existing = buckets.find(bucket => bucket.date === today);

  /*
   * A field the report did not carry leaves its bucket alone. Absent means
   * "this device does not observe that" — an iPhone runs no filter, a browser
   * sees no installs — and `Math.max` against a zero would read as a reading
   * of nought, which happens to be the same number here but is the wrong
   * reason and the wrong rule to write down.
   */
  const gauge = (reported: number | undefined, held: number): number =>
    reported === undefined ? held : Math.max(held, Math.max(0, Math.floor(reported)));

  const blockedSites = gauge(events.blockedSites, existing?.blockedSites ?? 0);
  const newApps = gauge(events.newApps, existing?.newApps ?? 0);

  return [...kept, { date: today, blockedSites, newApps }].sort((a, b) =>
    a.date < b.date ? -1 : 1,
  );
}

/**
 * The published figure, from the ring.
 *
 * Sums only what is still inside the window as of `today`, so a ring that was
 * never folded — a device that saw no events for a week and therefore never
 * called `foldWeekCounters` — still reports the truth rather than last week's.
 *
 * `newApps` is omitted rather than zeroed when the caller says this platform
 * cannot see installs. Zero is the claim "none were installed", which a Mac, a
 * television and a browser extension are not entitled to make — the same
 * omit-rather-than-zero rule `reportUsage` applies to the timeline and to idle
 * minutes.
 */
export function summariseWeekCounters(
  buckets: readonly WeekCounterBucket[],
  today: string,
  options?: { reportsInstalls?: boolean },
): { date: string; blockedSites: number; newApps?: number } {
  let blockedSites = 0;
  let newApps = 0;

  for (const bucket of buckets) {
    if (!isInWeekWindow(bucket.date, today)) {
      continue;
    }
    blockedSites += bucket.blockedSites;
    newApps += bucket.newApps;
  }

  return {
    date: today,
    blockedSites,
    ...(options?.reportsInstalls === false ? {} : { newApps }),
  };
}

/**
 * Whether a published figure still describes the week a parent is looking at.
 *
 * **A stale count must be rendered as of its own date or not at all.** The
 * same rule `DeviceWebToday` carries, and it matters more here: a device that
 * has been off for a fortnight publishes a window that ended a fortnight ago,
 * and drawing that as "this week" is a filter that looks like it stopped
 * working — which, on the tier whose whole visible output this is, reads as
 * the product having quietly failed.
 */
export function isWeekCountersCurrent(
  counters: { date?: string } | null | undefined,
  today: string,
): boolean {
  return typeof counters?.date === 'string' && isInWeekWindow(counters.date, today);
}
