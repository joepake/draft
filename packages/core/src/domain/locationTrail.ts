/**
 * The location trail, both ends: what earns a row on write, and how much of
 * it a map may draw.
 *
 * ## Write side — whether a new fix is worth a row
 *
 * Every location upload used to append unconditionally, so a device sitting
 * still — a tablet on its charger, a phone on a desk overnight — wrote one
 * identical point per background tick. Measured on a real device: the same
 * coordinates dozens of times over, filling the retention window with rows
 * that say nothing, pushing genuine movement out through
 * `MAX_LOCATION_HISTORY_ENTRIES`, and billing a write for each one. The map
 * drew them stacked on a single pixel and the list read as a stuck record.
 *
 * Two ways in, and a fix needs only one of them:
 *
 * - **It moved.** Far enough that a parent would call it a different place.
 * - **It has been a while.** A device that genuinely has not moved still
 *   deserves an occasional heartbeat point, so the trail can distinguish
 *   "at home all evening" from "stopped reporting at 18:00".
 *
 * The distance floor is deliberately above typical GPS jitter: consumer fixes
 * wander tens of metres while stationary, and a 25m floor would record that
 * wander as travel. `placeAlerts` uses the same reasoning for its accuracy
 * gate — an untrustworthy fix is not a small movement.
 */

import { distanceMeters } from './geo';

/**
 * Below this, two fixes are the same place.
 *
 * **These two must equal `HISTORY_MIN_DISTANCE_M` and
 * `HISTORY_STATIONARY_APPEND_MS` in `functions/http/location.js`**, which is
 * the path that writes the trail whenever geocoding succeeds — this module
 * only guards the client's fallback write. Two sets of numbers for one
 * decision is the hand-mirrored-constant bug the monorepo exists to prevent,
 * and they had already drifted (75m/15min here against 50m/30min there) the
 * day this note was written. `locationTrailServerParity.test.ts` pins them.
 */
export const TRAIL_MIN_MOVE_METERS = 50;

/**
 * A stationary device still writes one point this often, so a long stay is a
 * few rows rather than either one row or hundreds.
 */
export const TRAIL_HEARTBEAT_MS = 30 * 60 * 1000;

export interface TrailPoint {
  latitude: number;
  longitude: number;
  /** ISO string, as stored. */
  updatedAt: string;
}

/**
 * `previous` is the newest existing trail point, or null when the trail is
 * empty — the first fix always lands.
 */
export function shouldAppendTrailPoint(
  previous: TrailPoint | null | undefined,
  next: TrailPoint,
  nowMs: number,
): boolean {
  if (!previous) {
    return true;
  }

  const movedMeters = distanceMeters(
    previous.latitude,
    previous.longitude,
    next.latitude,
    next.longitude,
  );
  if (movedMeters >= TRAIL_MIN_MOVE_METERS) {
    return true;
  }

  const previousMs = new Date(previous.updatedAt).getTime();
  // An unparseable stored timestamp reads as "no usable heartbeat", so the
  // point lands rather than being dropped on a comparison against NaN.
  if (!Number.isFinite(previousMs)) {
    return true;
  }

  return nowMs - previousMs >= TRAIL_HEARTBEAT_MS;
}

/**
 * ## Read side — how much trail a map may draw
 *
 * A child map draws one polyline per device, and every point is a DOM node in
 * a WebView. The whole retention window is 30 days and up to
 * `MAX_LOCATION_HISTORY_ENTRIES` points per device, which is fine to store
 * and ruinous to render — three devices at that ceiling is six thousand
 * markers behind a Leaflet layer inside a `react-native-webview`.
 *
 * Two caps, applied in this order, because they answer different questions:
 *
 * 1. **The window** answers "what is worth looking at" — a trail is read to
 *    understand today, and yesterday's route on top of today's is noise the
 *    parent has to subtract by eye.
 * 2. **The per-device cap** answers "what will render" — it is the safety
 *    net for a device that reported far more than the dedupe expected (an
 *    agent on an older build, a long drive), and it keeps the newest points
 *    rather than the oldest: the end of the route is where the child is.
 *
 * With the write-side rules above, a stationary day is ~96 points and a busy
 * one a few hundred, so the window alone usually decides and the cap rarely
 * bites — which is the intent. It exists so the worst case is bounded, not
 * so the normal case is trimmed.
 */
export const TRAIL_RENDER_WINDOW_MS = 24 * 60 * 60 * 1000;

/** Per device, newest kept. See the note above for why this is a floor, not a target. */
export const TRAIL_RENDER_MAX_POINTS = 60;

export interface DeviceTrailPoint extends TrailPoint {
  deviceId: string;
}

export interface DeviceTrail<P extends DeviceTrailPoint = DeviceTrailPoint> {
  deviceId: string;
  /** Oldest first — the order a polyline is drawn in. */
  points: P[];
}

/**
 * Split a merged child trail into one drawable run per device.
 *
 * **Never one line across devices.** Two machines at the same moment are two
 * places, and a segment joining them draws a journey nobody made — the same
 * refusal `childLocation` makes for the current fix, and the reason the map
 * gets separate polylines rather than one sorted path.
 *
 * Input may be in any order; output is oldest-first per device, so a caller
 * can hand `points` straight to a polyline. Devices left with a single point
 * are still returned: the map draws their marker, and a one-point "line" is
 * simply nothing to draw.
 */
export function buildDeviceTrails<P extends DeviceTrailPoint>(
  entries: readonly P[],
  nowMs: number,
  options: { windowMs?: number; maxPointsPerDevice?: number } = {},
): DeviceTrail<P>[] {
  const windowMs = options.windowMs ?? TRAIL_RENDER_WINDOW_MS;
  const maxPoints = options.maxPointsPerDevice ?? TRAIL_RENDER_MAX_POINTS;
  const cutoffMs = nowMs - windowMs;

  const byDevice = new Map<string, P[]>();
  for (const entry of entries) {
    const atMs = new Date(entry.updatedAt).getTime();
    // An unreadable timestamp cannot be placed in the window, and a point
    // with no time has no position in a route — drop it rather than draw it
    // at an arbitrary end of the line.
    if (!Number.isFinite(atMs) || atMs < cutoffMs) {
      continue;
    }
    const bucket = byDevice.get(entry.deviceId);
    if (bucket) {
      bucket.push(entry);
    } else {
      byDevice.set(entry.deviceId, [entry]);
    }
  }

  const trails: DeviceTrail<P>[] = [];
  for (const [deviceId, points] of byDevice) {
    points.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt));
    // Newest kept: slice from the end, so a capped trail is the most recent
    // stretch of the route rather than its beginning.
    trails.push({
      deviceId,
      points: points.length > maxPoints ? points.slice(-maxPoints) : points,
    });
  }
  return trails;
}

/** One place, and the run of consecutive points the device spent there. */
export interface TrailStay<P extends DeviceTrailPoint = DeviceTrailPoint> {
  /** The first point of the run — its place name is the one to show. */
  point: P;
  /** How many raw points folded into this row. 1 means a plain point. */
  count: number;
  /** ISO of the newest point in the run. Equals `point.updatedAt` when count is 1. */
  lastAt: string;
  /** ISO of the oldest. A stay reads "from `firstAt` to `lastAt`". */
  firstAt: string;
}

/**
 * Fold consecutive same-place points into stays.
 *
 * A device that sits still still records a heartbeat point every
 * `TRAIL_HEARTBEAT_MS`, by design — that is how the trail tells "home all
 * evening" from "stopped reporting at 18:00". Rendered raw it is ten
 * identical rows a parent has to read as one fact, and the one fact they
 * actually want ("how long were they there") is the thing the ten rows do
 * not state.
 *
 * So the list shows one row per stay, carrying the span and the count. Same
 * threshold as the write side: points closer than `TRAIL_MIN_MOVE_METERS`
 * are the same place, which is what made them heartbeats rather than
 * movement in the first place.
 *
 * **Consecutive only.** Leaving home and coming back is two stays, not one
 * with a gap — collapsing by place rather than by run would erase the trip
 * between them, which is the part of the day worth reading.
 *
 * Input must be newest-first (the order the list renders); output keeps it.
 */
export function foldTrailStays<P extends DeviceTrailPoint>(
  entries: readonly P[],
  minMoveMeters = TRAIL_MIN_MOVE_METERS,
): TrailStay<P>[] {
  const stays: TrailStay<P>[] = [];

  for (const entry of entries) {
    const open = stays[stays.length - 1];
    const sameRun =
      open !== undefined &&
      open.point.deviceId === entry.deviceId &&
      distanceMeters(
        open.point.latitude,
        open.point.longitude,
        entry.latitude,
        entry.longitude,
      ) < minMoveMeters;

    if (open && sameRun) {
      open.count += 1;
      // Newest-first input, so each later entry is older: it moves `firstAt`
      // back and never touches `lastAt`.
      open.firstAt = entry.updatedAt;
      continue;
    }

    stays.push({
      point: entry,
      count: 1,
      lastAt: entry.updatedAt,
      firstAt: entry.updatedAt,
    });
  }

  return stays;
}
