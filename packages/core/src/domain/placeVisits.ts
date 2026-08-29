import { distanceMeters } from './geo';
import type { DevicePlace } from '@kidgate/schema/devicePlace';
import type { LocationHistoryEntry } from '@kidgate/schema/locationHistory';

/**
 * "Where did they actually spend the day" — saved places crossed with the
 * location trail already stored.
 *
 * Nothing new is collected for this. `placeAlerts` fires on the crossing and
 * says nothing afterwards, so a parent could be told "arrived at school" and
 * then have no way to ask how long anyone stayed. Both halves of that answer
 * were already in Firestore; only the join was missing.
 *
 * ## What a visit can and cannot claim
 *
 * The trail is sampled, not continuous — a child standing still uploads very
 * little — so every rule here is written to avoid asserting presence that was
 * never observed:
 *
 * - **A visit spans the first and last fix seen at that place, never further.**
 *   Someone who arrived at 08:00 and whose first fix landed at 08:12 has a
 *   visit starting at 08:12. Extrapolating backwards would invent minutes.
 * - **A gap longer than `maxGapMs` splits the visit**, even when both sides sit
 *   inside the same radius. An unobserved hour is an hour they could have left
 *   and come back in; one long visit would be a claim the data cannot support.
 * - **A fix whose accuracy is wider than the radius of the place in question is
 *   skipped.** It neither joins that visit nor ends one — it is a fix that
 *   cannot say which side of *that* fence it is on, and `DeviceLocation.accuracy`
 *   documents the same rule for place presence server-side. Absence of evidence
 *   is not evidence of leaving. Judged per place, never against the widest
 *   radius the family saved; see `isFixPlaceable`.
 * - **`samples: 1` is reported, not hidden.** One fix inside a radius means
 *   "they were there at that moment", never "they stayed", and `durationMs` is
 *   0 for exactly that reason. A caller that wants only confirmed dwell filters
 *   on duration; one that wants a timeline of the day wants the single fixes
 *   too.
 *
 * Overlapping places resolve to the nearest centre, matching what
 * `placeAlerts` does for the same overlap.
 *
 * ## Why this is not `foldTrailStays`
 *
 * `locationTrail.foldTrailStays` already folds a run of nearby points into one
 * row, and the two look similar enough that this file was nearly written as a
 * duplicate of it. They answer different questions and neither replaces the
 * other:
 *
 * | | `foldTrailStays` | `buildPlaceVisits` |
 * | --- | --- | --- |
 * | Groups by | proximity between consecutive points | the saved place a point falls inside |
 * | Knows a place's name | only what reverse geocoding put on the point | the name the parent typed |
 * | Unobserved gaps | folded into the stay | end the visit |
 * | Answers | "how long at this spot" | "how long at School, this week" |
 *
 * A stay is a rendering concern for the trail list — ten identical rows
 * becoming one. A visit is a claim about a named place, which is why only this
 * side carries the gap and accuracy rules.
 */

export interface PlaceVisit {
  placeId: string;
  placeName: string;
  /** First fix seen at this place, ISO. */
  arrivedAt: string;
  /** Last fix seen at this place, ISO. Equals `arrivedAt` for a single fix. */
  departedAt: string;
  /** `departedAt - arrivedAt`. Zero when only one fix was seen. */
  durationMs: number;
  /** Fixes attributed to this visit. One means presence, not dwell. */
  samples: number;
  /**
   * The trail ends inside this place, so the child may still be there.
   *
   * Distinct from a long duration: a closed visit is one a later fix moved away
   * from, and an open one simply has nothing after it yet.
   */
  open: boolean;
}

export interface PlaceVisitOptions {
  /**
   * How long a hole in the trail may be before presence stops being claimed.
   *
   * Thirty minutes: long enough to survive the ordinary quiet of a stationary
   * device, short enough that a child who left at lunch and returned does not
   * read as one unbroken morning.
   */
  maxGapMs?: number;
}

export const DEFAULT_PLACE_VISIT_MAX_GAP_MS = 30 * 60 * 1000;

/**
 * Sentinel for "this fix was not at any saved place".
 *
 * A real `DevicePlace` value rather than null so the fix list stays one shape,
 * and compared by reference so it can never collide with a saved place whose
 * id happens to match.
 */
const NOWHERE: DevicePlace = {
  id: '',
  name: '',
  latitude: 0,
  longitude: 0,
  radiusMeters: 0,
  notifyOnEnter: false,
  notifyOnExit: false,
};

interface AttributedFix {
  place: DevicePlace;
  at: number;
  accuracy: number | null;
}

/**
 * Whether a fix is precise enough to be judged against **one** saved place.
 *
 * Separate from `placeForFix` because the two nulls it returns mean opposite
 * things to a visit. "Outside this radius" is evidence the child left and must
 * end the visit; "too imprecise to say" is the absence of evidence and must
 * not. Folding them together was the first version of this file, and it cut a
 * visit in half every time one wide fix landed in the middle of it.
 *
 * One place, not the whole list, and that is the whole point. Asking "is this
 * fix placeable against *any* saved place" answers about the widest radius the
 * family happens to have saved: a 400m fix inside School (150m) read as
 * placeable purely because a 1km Mall existed somewhere else, `placeForFix`
 * then refused it for School, and the visit was cut in half by a fix that could
 * say nothing about School either way. The question a visit needs is always
 * about the place the visit is at.
 */
export function isFixPlaceable(
  entry: { accuracy?: number | null },
  place: DevicePlace,
): boolean {
  const accuracy = entry.accuracy;
  if (typeof accuracy !== 'number' || !Number.isFinite(accuracy)) {
    return true;
  }

  return accuracy <= place.radiusMeters;
}

/**
 * The saved place a fix sits inside, or null.
 *
 * Null covers three things — outside every radius, no places saved, and a fix
 * too imprecise to place against the places it would otherwise have fallen in.
 * Callers that need to tell the last one apart ask `isFixPlaceable` against the
 * place they care about; see the note there for why the distinction matters.
 */
export function placeForFix(
  entry: LocationHistoryEntry,
  places: DevicePlace[],
): DevicePlace | null {
  let best: DevicePlace | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const place of places) {
    // A fix whose error circle is wider than the fence cannot say which side of
    // it the child is on. Reported accuracy is optional and absent means
    // unknown rather than exact, so an absent value is trusted here for the
    // same reason the server does: refusing every fix without accuracy would
    // discard whole platforms.
    if (!isFixPlaceable(entry, place)) {
      continue;
    }

    const meters = distanceMeters(
      entry.latitude,
      entry.longitude,
      place.latitude,
      place.longitude,
    );

    if (meters <= place.radiusMeters && meters < bestDistance) {
      best = place;
      bestDistance = meters;
    }
  }

  return best;
}

/**
 * Visits reconstructed from the trail, newest first.
 *
 * `history` may arrive in any order; the parent screens hand it over
 * newest-first and a reversed pair would produce negative durations.
 */
export function buildPlaceVisits(
  history: LocationHistoryEntry[],
  places: DevicePlace[],
  options: PlaceVisitOptions = {},
): PlaceVisit[] {
  const maxGapMs = options.maxGapMs ?? DEFAULT_PLACE_VISIT_MAX_GAP_MS;

  if (places.length === 0 || history.length === 0) {
    return [];
  }

  const fixes: AttributedFix[] = [];
  for (const entry of history) {
    const at = Date.parse(entry.updatedAt);
    if (!Number.isFinite(at)) {
      continue;
    }
    const accuracy =
      typeof entry.accuracy === 'number' && Number.isFinite(entry.accuracy)
        ? entry.accuracy
        : null;

    const place = placeForFix(entry, places);
    if (!place) {
      // Kept as a possible break rather than a certain one. Whether this fix
      // is evidence the child left depends on which visit is open when it is
      // read, so the accuracy travels with it and the fold below decides —
      // see the `NOWHERE` branch there.
      fixes.push({ place: NOWHERE, at, accuracy });
      continue;
    }
    fixes.push({ place, at, accuracy });
  }

  fixes.sort((a, b) => a.at - b.at);

  const visits: PlaceVisit[] = [];
  let current: {
    place: DevicePlace;
    from: number;
    to: number;
    samples: number;
  } | null = null;

  const close = () => {
    if (!current) {
      return;
    }
    visits.push({
      placeId: current.place.id,
      placeName: current.place.name,
      arrivedAt: new Date(current.from).toISOString(),
      departedAt: new Date(current.to).toISOString(),
      durationMs: current.to - current.from,
      samples: current.samples,
      open: false,
    });
    current = null;
  };

  for (const fix of fixes) {
    if (fix.place === NOWHERE) {
      // Too imprecise to say anything about the place currently open, so it is
      // skipped: neither joining the visit nor ending it. Absence of evidence
      // is not evidence of leaving. With no visit open there is nothing to
      // protect and the fix simply falls through as a break.
      if (current && !isFixPlaceable({ accuracy: fix.accuracy }, current.place)) {
        continue;
      }
      close();
      continue;
    }

    if (
      current &&
      current.place.id === fix.place.id &&
      fix.at - current.to <= maxGapMs
    ) {
      current.to = fix.at;
      current.samples += 1;
      continue;
    }

    close();
    current = { place: fix.place, from: fix.at, to: fix.at, samples: 1 };
  }

  if (current) {
    close();
    // The trail ended here, so this one is still running as far as anyone
    // knows. `close()` always pushes when `current` is set, so the last element
    // exists — read defensively anyway rather than assert, since a future edit
    // to `close` would turn an assertion into a crash on a parent's screen.
    const last = visits[visits.length - 1];
    if (last) {
      last.open = true;
    }
  }

  return visits.reverse();
}

/** Total time attributed to each place across the given visits. */
export function totalTimePerPlace(
  visits: PlaceVisit[],
): { placeId: string; placeName: string; totalMs: number; visits: number }[] {
  const totals = new Map<
    string,
    { placeName: string; totalMs: number; visits: number }
  >();

  for (const visit of visits) {
    const found = totals.get(visit.placeId);
    if (found) {
      found.totalMs += visit.durationMs;
      found.visits += 1;
    } else {
      totals.set(visit.placeId, {
        placeName: visit.placeName,
        totalMs: visit.durationMs,
        visits: 1,
      });
    }
  }

  return [...totals.entries()]
    .map(([placeId, value]) => ({ placeId, ...value }))
    .sort((a, b) => b.totalMs - a.totalMs);
}

/** Visits that started on the given local day key (`YYYY-MM-DD`). */
export function visitsOnLocalDate(visits: PlaceVisit[], dateKey: string): PlaceVisit[] {
  return visits.filter(visit => toLocalDateKey(visit.arrivedAt) === dateKey);
}

export function toLocalDateKey(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return '';
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
