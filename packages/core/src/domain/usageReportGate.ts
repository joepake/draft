/**
 * Shared gate for child usage reports. Every report is a Cloud Function
 * invocation plus Firestore writes and listener fan-out, and two JS paths
 * (the protection heartbeat and the child HomeScreen sync) can observe the
 * same reading — module-level state makes sure only one of them sends it.
 * Mirrors KidGateUsageCloudSync on the Android FGS path.
 */

/**
 * Batch steady usage into one report per this many minutes.
 *
 * **One, so the parent's number is never more than a minute behind the child's
 * own.** It sat at 5 to save writes, and what that bought was a Mac showing 11
 * minutes while the parent's phone showed 8 for the same moment — the two
 * screens run the same `usageSnapshot`, so the only thing they could disagree
 * about was age. A parent reading two totals for one device does not conclude
 * that one is older.
 *
 * At 1 the gate collapses to "report whenever the minute count moves", which
 * during active use is once a minute and while the device sits idle is never:
 * the equality check above it still returns false when nothing changed, and
 * liveness rides `ALIVE_MIN_INTERVAL_MS` rather than this. The cost is roughly
 * five times the writes of an actively used hour — about $0.10 per device per
 * month at Firestore's rate, plus the `notifyChildDeviceCommand` trigger each
 * device-document write fires.
 *
 * The branches below (day rollover, limit flip, downward correction,
 * near-limit) are no-ops at this value and are kept deliberately: they are
 * what makes raising it again safe.
 *
 * **`KidGateUsageCloudSync` in `KidGateMonitorService.kt` holds the same
 * number** and cannot import this one. `usageReportGateParity.test.ts` reads
 * the Kotlin and fails when they drift.
 */
export const MIN_UPLOAD_DELTA_MINUTES = 1;

/**
 * Inside this window before the daily limit, report every minute again so
 * the parent's countdown and the exceeded flip stay accurate to the minute.
 */
export const NEAR_LIMIT_WINDOW_MINUTES = 10;

/**
 * The same delta once the family's trial has lapsed.
 *
 * **Five, and what pays for it is that the server has stopped storing most of
 * what a report carries.** `reportChildUsage` writes no `usageDays` document
 * for a lapsed family, and drops `topApps`, `timeline` and `idleMinutes` on
 * the floor — so the two triggers below that exist for those fields
 * (`appsChanged`, `idleStepChanged`) are, for that family, reports about
 * nothing. They are switched off with this, which is most of the saving; the
 * delta is the rest.
 *
 * What is deliberately *not* slowed is everything the free tier still shows:
 * the first report, a day rollover, the limit flip, a downward correction and
 * the near-limit window all stay immediate. Those drive the minute count on
 * the device card and the countdown against `dailyLimitMinutes` — a free-tier
 * control — and a parent who stopped paying is still owed the number they can
 * see. Five minutes is the staleness a steady, unremarkable hour can carry;
 * the moments that matter are all on the immediate list.
 */
export const LAPSED_UPLOAD_DELTA_MINUTES = 5;

/**
 * How far `idleMinutes` must move on its own before it is worth a report.
 *
 * **Idle is the one reading that changes while nothing else does**, which is
 * precisely why it needs its own trigger and why that trigger cannot be one
 * minute. A television left on its screensaver reports the same total, the same
 * apps and the same limit state all night, so without this the whole night was
 * uploaded only by the *next* day's first real use — by which time
 * `usage.getToday()` has rolled over and those minutes are on a day nobody will
 * ever report again. The `timeline` field has had that hole since it landed; it
 * is invisible there because a band with a missing evening still draws, and it
 * would not have been invisible here.
 *
 * Fifteen rather than one, because the cost lands on the opposite case: a set
 * parked on KidGate's own status screen excludes that package, accrues idle
 * every minute, and at a delta of one would post a report a minute forever. Four
 * writes an hour is the ceiling this buys, against a worst case of sixty.
 *
 * A device that reports no `idleMinutes` at all — every platform but the four
 * that exclude packages — is unaffected: absent on both sides compares equal.
 */
export const IDLE_REPORT_DELTA_MINUTES = 15;

export type UsageSnapshot = {
  minutes: number;
  date: string;
  exceeded: boolean;
  /**
   * Minutes the device was on and unused, where the agent excludes packages.
   *
   * Absent everywhere else, and absent is not zero here either: the comparisons
   * below treat two absent readings as unchanged, so a platform that never
   * fills this in never triggers on it.
   */
  idleMinutes?: number;
  /**
   * Which apps the day contains — package names only, sorted.
   *
   * Their minute counts move on every reading and signing those would report
   * on every tick, which is the batching this gate exists to do. The set of
   * apps changes a few times a day, and it is what the parent's App Limits
   * screen is actually waiting on: the list going from empty to populated is
   * the whole event, and it used to be invisible here. A device sitting at a
   * steady minute count — an evening where the child stopped using the phone —
   * would hold that first list back indefinitely.
   */
  topAppsKey?: string;
};

/** Stable across reorderings, so only a real change in the set counts. */
export function topAppsKeyOf(
  topApps: { packageName?: string }[] | null | undefined,
): string {
  if (!topApps?.length) {
    return '';
  }
  return topApps
    .map(app => app.packageName ?? '')
    .filter(name => name.length > 0)
    .sort()
    .join(',');
}

let lastReported: UsageSnapshot | null = null;

/** Call on sign-out / device switch so the next session reports at once. */
export function resetUsageReportGate(): void {
  lastReported = null;
}

/**
 * Immediate: first report, day rollover, limit flip, downward correction,
 * a change in which apps the day contains, another whole step of idle time,
 * near-limit precision window. Otherwise batch by delta.
 */
export function shouldReportUsage(
  next: UsageSnapshot,
  limitMinutes: number | null,
  options?: {
    /**
     * The family's trial has lapsed. Optional so a caller with no notion of
     * billing — `apps/tv` — reads exactly as it did before.
     */
    premiumLapsed?: boolean;
  },
): boolean {
  const last = lastReported;
  const lapsed = options?.premiumLapsed === true;
  // Both of these describe fields `reportChildUsage` discards for a lapsed
  // family, so triggering on them would report a change nothing records.
  const appsChanged = !lapsed && (last?.topAppsKey ?? '') !== (next.topAppsKey ?? '');
  // Rounded down to the step, so the comparison asks "has it moved a whole
  // step" rather than "has it moved at all" — the latter is the every-minute
  // report `IDLE_REPORT_DELTA_MINUTES` exists to prevent.
  const idleStepOf = (snapshot: UsageSnapshot): number | null =>
    typeof snapshot.idleMinutes === 'number'
      ? Math.floor(snapshot.idleMinutes / IDLE_REPORT_DELTA_MINUTES)
      : null;
  const idleStepChanged =
    !lapsed && idleStepOf(next) !== (last ? idleStepOf(last) : null);
  if (
    last &&
    !appsChanged &&
    !idleStepChanged &&
    last.minutes === next.minutes &&
    last.date === next.date &&
    last.exceeded === next.exceeded
  ) {
    return false;
  }

  const nearLimit =
    typeof limitMinutes === 'number' &&
    limitMinutes > 0 &&
    !next.exceeded &&
    next.minutes >= limitMinutes - NEAR_LIMIT_WINDOW_MINUTES;

  return (
    !last ||
    last.date !== next.date ||
    last.exceeded !== next.exceeded ||
    appsChanged ||
    idleStepChanged ||
    next.minutes < last.minutes ||
    next.minutes - last.minutes >=
      (lapsed ? LAPSED_UPLOAD_DELTA_MINUTES : MIN_UPLOAD_DELTA_MINUTES) ||
    nearLimit
  );
}

export function recordReportedUsage(next: UsageSnapshot): void {
  lastReported = next;
}
