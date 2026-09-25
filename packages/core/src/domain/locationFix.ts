/**
 * Is this fix a position, or a guess wearing one's clothes?
 *
 * A PC on Ethernet with its Wi-Fi radio off is still "located" by Windows —
 * from its IP address, at the ISP's idea of the city. Measured 2026-09-23 on
 * a PC in Hà Đông: `PositionSource = IPAddress`, 20 000 m, pinned to Hoàn
 * Kiếm lake, 8 km from the Wi-Fi fix the same machine gives with the radio
 * on (51–212 m). Uploaded as a fix it drew a confident pin 8 km off — and
 * because the endpoint nulled any accuracy over 2 km and presence read null
 * as 50 m, it fired "left home" for a tower that has never moved.
 *
 * So one rule, here, for every reader. A fix is a **guess** when the platform
 * says it came from an IP lookup, a user-set default or a blurred position,
 * or when its own accuracy is wider than `MAX_TRUSTED_ACCURACY_M`. A child
 * agent whose capability is `'coarse'` — which building — does not upload a
 * guess and answers `noFix`; a parent surface that draws a fix draws its
 * radius; a rule that would derive a number from one derives nothing.
 *
 * The threshold was the endpoint's (`functions/http/location.js`), where it
 * turned wide fixes into null. Kept generous on purpose: it is here to reject
 * the obviously meaningless, not to second-guess a phone that honestly says
 * it is 400 m unsure indoors. Measured on Windows, where an IP guess reports
 * 20 000 m; assumed on macOS, where CoreLocation gives no source and its IP
 * fallback's accuracy has not been read (`docs/DESKTOP_FEATURES.md`).
 */

import { POSITION_SOURCES, type PositionSource } from '@kidgate/schema/telemetry';
import { distanceMeters } from './geo';

/** Metres. Wider than this, a fix is a cell-tower or IP guess, not a position. */
export const MAX_TRUSTED_ACCURACY_M = 2000;

const GUESS_SOURCES: ReadonlySet<PositionSource> = new Set<PositionSource>([
  'ip',
  'default',
  'obfuscated',
]);

/** The schema's list, as a runtime check for what a device *claims* its source is. */
export function isPositionSource(value: unknown): value is PositionSource {
  return (
    typeof value === 'string' && (POSITION_SOURCES as readonly string[]).includes(value)
  );
}

export interface LocationFixQualityFacts {
  accuracy?: number | null;
  positionSource?: PositionSource | null;
}

/**
 * True when the fix must not be shown, stored or reasoned about as the
 * device's position.
 *
 * Absent accuracy and absent source are both trusted: older builds send
 * neither, and refusing every one of their fixes would withdraw the feature
 * from families who did nothing wrong. `'unknown'` is trusted for the same
 * reason — it is the OS declining to say, not the OS saying "IP".
 */
export function isLocationFixGuess(fix: LocationFixQualityFacts): boolean {
  if (fix.positionSource && GUESS_SOURCES.has(fix.positionSource)) {
    return true;
  }
  const accuracy = fix.accuracy;
  return (
    typeof accuracy === 'number' &&
    Number.isFinite(accuracy) &&
    accuracy > MAX_TRUSTED_ACCURACY_M
  );
}

export interface LocationPoint {
  latitude: number;
  longitude: number;
}

/**
 * The radius within which a read is *the same place*, given how sure it is.
 *
 * Twice the read's own accuracy, floored at 300 m and capped at 1 km. The
 * floor is the measurement: the PC in Trung Văn, radio on, reports 130–250 m
 * of accuracy and lands 40–300 m from itself read to read, and every one of
 * those landings past the server's 50 m history gate and 100 m geocode reuse
 * was a new row with a new street name — "three or four places, one of them
 * right". The cap keeps a 2 km read from swallowing the next suburb.
 */
export const RESTING_RADIUS_MIN_M = 300;
export const RESTING_RADIUS_MAX_M = 1000;

export function restingRadiusMeters(accuracy: number | null | undefined): number {
  const measured =
    typeof accuracy === 'number' && Number.isFinite(accuracy) && accuracy > 0
      ? accuracy
      : 0;
  return Math.min(RESTING_RADIUS_MAX_M, Math.max(RESTING_RADIUS_MIN_M, 2 * measured));
}

/**
 * Reads, and time, a run of agreeing reads needs before the device has
 * *moved* — and a little less to *establish* a position when none is held.
 *
 * The first cut established from two reads 45 s apart, and on its first run
 * (2026-09-24 12:24) established on Đại Kim: that morning's flap lasted over
 * a minute, so both reads saw it. Three agreeing reads across two minutes
 * corrected it to the house. Then at 13:00 a flap outlasted three reads across
 * two minutes, and the second cut of this rule moved the device for it. The
 * wrong answer is one access point's stored location, and it stays as long
 * as that access point dominates a scan — seconds, or minutes. So leaving a
 * position the device has already held takes a run that survives thirty
 * minutes on a tower, for which the wrong answer is the only thing that ever
 * moves; a laptop — a machine with a battery, the same fact `capabilities.ts`
 * names its `formFactor` by — does go places, and takes three minutes, which
 * the 13:00 flap would still have beaten had it lasted a minute longer.
 * Establishing a position, with nothing to contradict, takes two minutes on
 * either.
 *
 * Time first, reads second. The agent reads on the family's report cadence
 * (`aliveIntervalMs`: three minutes while a parent console is open, fifteen
 * idle, thirty lapsed), so a rule counted in reads would mean a different
 * number of minutes at different hours of the day. These are minutes a run
 * has to survive, with a floor of witnesses so that one pair of reads a
 * quarter of an hour apart cannot carry a tower on its own.
 */
export type DeviceMobility = 'stationary' | 'portable';

export const MOVE_CONFIRM: Record<DeviceMobility, { reads: number; spanMs: number }> = {
  stationary: { reads: 3, spanMs: 30 * 60_000 },
  portable: { reads: 2, spanMs: 3 * 60_000 },
};
export const ESTABLISH_READS = 2;
export const ESTABLISH_SPAN_MS = 2 * 60_000;

export interface LocationRead extends LocationPoint {
  accuracy?: number | null;
  /** When the OS took it — the fix's own stamp, not the read's. */
  atMs: number;
}

/** A run of reads that agree with each other and not with the resting position. */
export interface MoveCandidate {
  point: LocationPoint;
  sinceMs: number;
  /** Reads that agreed with the run. */
  reads: number;
  /** Reads since `sinceMs` that agreed with the resting position instead. */
  dissent: number;
}

export interface RestingState {
  /** Where the device is, as far as anyone has been told. Null until established. */
  resting: LocationPoint | null;
  candidate: MoveCandidate | null;
}

export type RestingVerdict =
  /** The read is the resting position, within its radius. */
  | 'resting'
  /** The run just completed: `state.resting` is the new position. */
  | 'moved'
  /** One more read away from home, or the first — nothing to report yet. */
  | 'candidate';

/**
 * Fold one read into a stationary device's belief about where it is.
 *
 * A desktop does not commute, and a laptop moves rarely and slowly compared
 * with how often Wi-Fi positioning is wrong about it. Measured 2026-09-24 on
 * the PC in Trung Văn, one fresh scan every twenty seconds: 26 reads at the
 * house, wandering up to a few hundred metres, and two consecutive reads —
 * 11:40:00 and 11:40:21 — on Đường B5 Đại Kim, 6 km away, at a radius the
 * guess rule has no reason to doubt. One access point the positioning
 * database has in the wrong place, weighted by one scan. Reported as read,
 * that was a pin 6 km off, a "left home" and an "arrived home" for a tower
 * that never moves, and a history of three or four places with one of them
 * right.
 *
 * So the device *rests*: every read within `restingRadiusMeters` of the held
 * position is that position — the same coordinates go up, the same street
 * name stays on the parent's screen. A read outside it starts a run, and only
 * `MOVE_CONFIRM[mobility]` — a run of agreeing reads that survives its span,
 * thirty minutes for a tower and three for a laptop — moves the device. A
 * flap that ends inside that never reaches the parent; a laptop carried to
 * school shows there once a read three minutes after the first agrees. With
 * no position held yet, `ESTABLISH_SPAN_MS` of agreeing reads establish one.
 *
 * Pure: the caller keeps the state, persists the resting position across
 * restarts, and decides what to upload for each verdict.
 */
export function observeLocationRead(
  state: RestingState,
  read: LocationRead,
  mobility: DeviceMobility = 'stationary',
): { state: RestingState; verdict: RestingVerdict } {
  const radius = restingRadiusMeters(read.accuracy);
  const candidate = state.candidate;
  if (state.resting && within(read, state.resting, radius)) {
    /*
     * The resting position, again. A run in progress is not thrown away for
     * it. When the resting position is the wrong one — established from a
     * flap, as this PC's was on 2026-09-24 — every later flap agrees with
     * it, and a run that any such read could reset would never complete:
     * the wrong position would be the sticky one. So the run keeps its
     * dissent, and is dropped only once the dissent outnumbers it.
     */
    const kept =
      candidate && candidate.dissent + 1 <= candidate.reads
        ? { ...candidate, dissent: candidate.dissent + 1 }
        : null;
    return { state: { resting: state.resting, candidate: kept }, verdict: 'resting' };
  }

  const move = MOVE_CONFIRM[mobility];
  const needReads = state.resting ? move.reads : ESTABLISH_READS;
  const needSpanMs = state.resting ? move.spanMs : ESTABLISH_SPAN_MS;
  if (candidate && within(read, candidate.point, radius)) {
    const reads = candidate.reads + 1;
    // Three agreeing reads for every dissenting one: a run that a quarter of
    // its reads contradict is not a place the device is.
    const settled =
      reads >= needReads &&
      read.atMs - candidate.sinceMs >= needSpanMs &&
      reads >= 3 * candidate.dissent;
    if (settled) {
      return {
        state: {
          resting: { latitude: read.latitude, longitude: read.longitude },
          candidate: null,
        },
        verdict: 'moved',
      };
    }
    return {
      state: { resting: state.resting, candidate: { ...candidate, reads } },
      verdict: 'candidate',
    };
  }

  return {
    state: {
      resting: state.resting,
      candidate: {
        point: { latitude: read.latitude, longitude: read.longitude },
        sinceMs: read.atMs,
        reads: 1,
        dissent: 0,
      },
    },
    verdict: 'candidate',
  };
}

/**
 * Whether the run in progress already has the witnesses a move needs and is
 * short only of its time. The agent stops re-asserting a position the
 * evidence is against, and completes such a run when a parent asks.
 */
export function runHasWitnesses(
  state: RestingState,
  mobility: DeviceMobility,
): boolean {
  const candidate = state.candidate;
  return (
    state.resting !== null &&
    candidate !== null &&
    candidate.reads >= MOVE_CONFIRM[mobility].reads &&
    candidate.reads >= 3 * candidate.dissent
  );
}

function within(a: LocationPoint, b: LocationPoint, meters: number): boolean {
  return distanceMeters(a.latitude, a.longitude, b.latitude, b.longitude) < meters;
}
