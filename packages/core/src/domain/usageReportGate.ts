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

export type UsageSnapshot = {
  minutes: number;
  date: string;
  exceeded: boolean;
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
 * a change in which apps the day contains, near-limit precision window.
 * Otherwise batch by delta.
 */
export function shouldReportUsage(
  next: UsageSnapshot,
  limitMinutes: number | null,
): boolean {
  const last = lastReported;
  const appsChanged = (last?.topAppsKey ?? '') !== (next.topAppsKey ?? '');
  if (
    last &&
    !appsChanged &&
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
    next.minutes < last.minutes ||
    next.minutes - last.minutes >= MIN_UPLOAD_DELTA_MINUTES ||
    nearLimit
  );
}

export function recordReportedUsage(next: UsageSnapshot): void {
  lastReported = next;
}
