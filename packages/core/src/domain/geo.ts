const EARTH_RADIUS_M = 6371000;

/** Great-circle distance in meters. */
export function distanceMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const toRad = (degrees: number) => (degrees * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return 2 * EARTH_RADIUS_M * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * How far a fix has to sit from a saved place before "Near X" would be a
 * guess rather than a fact. A different question from
 * `DEFAULT_PLACE_RADIUS_METERS` — a geofence answers "inside or not", this
 * answers "close enough to name" when HERE returned no address at all.
 *
 * **A hundred metres, not two kilometres, since 2026-09-10.** Two kilometres
 * was set while this was the only place-naming fallback there was, and it does
 * not survive being read as a sentence: a fix 1.8 km from Home is a different
 * neighbourhood, and "Near **Home**" on it is a guess in the clothes of a
 * fact. What made the wide radius look necessary was that the alternative was
 * a raw coordinate pair — and `savedPlaceForHistoryEntry`
 * (`domain/locationHistory`) now titles a fix from the place it is *inside*.
 * So this is no longer the only thing between a parent and a number; it is the
 * narrow band just outside a fence, which is all "near" ever meant.
 */
export const NEARBY_PLACE_RADIUS_METERS = 100;

export interface NearbyPlace {
  name: string;
  distanceMeters: number;
}

/**
 * The closest of `places` to a point, or null when none sit within
 * `maxDistanceMeters`. Unlike a geofence check, a place here does not have to
 * contain the point — this is the fallback label for a fix reverse geocoding
 * could not name, not a "which place is the device in" answer (that is
 * `placeForFix`, in `placeVisits.ts`).
 */
export function nearestPlaceWithin<
  T extends { name: string; latitude: number; longitude: number },
>(
  lat: number,
  lon: number,
  places: readonly T[],
  maxDistanceMeters: number = NEARBY_PLACE_RADIUS_METERS,
): NearbyPlace | null {
  let closest: NearbyPlace | null = null;
  for (const place of places) {
    const meters = distanceMeters(lat, lon, place.latitude, place.longitude);
    if (meters <= maxDistanceMeters && (!closest || meters < closest.distanceMeters)) {
      closest = { name: place.name, distanceMeters: meters };
    }
  }
  return closest;
}

/**
 * The compass points a direction is rounded to, clockwise from north.
 *
 * Eight, not sixteen: the sentence this feeds is read at a glance ("12 km south
 * of Home"), and a parent cannot act on the difference between south and
 * south-south-west. Not four either — "east of Home" for something due
 * north-east points at the wrong half of the city.
 */
export const COMPASS_POINTS = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'] as const;

export type CompassPoint = (typeof COMPASS_POINTS)[number];

/**
 * Initial bearing from one point to another, in degrees clockwise from north.
 *
 * The *initial* bearing of a great circle, which is what a person standing at
 * the first point would call the direction — it drifts over a long path, and
 * for the distances a family's map covers the drift is invisible.
 */
export function bearingDegrees(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const toRad = (degrees: number) => (degrees * Math.PI) / 180;
  const dLon = toRad(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(toRad(lat2));
  const x =
    Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  const degrees = (Math.atan2(y, x) * 180) / Math.PI;
  // `atan2` answers in (-180, 180]; a compass counts from 0 clockwise.
  return (degrees + 360) % 360;
}

/** A bearing rounded to one of `COMPASS_POINTS`. */
export function compassPoint(bearing: number): CompassPoint {
  const normalised = ((bearing % 360) + 360) % 360;
  // Each point owns 45°, centred on its own bearing — so north is 337.5–22.5
  // rather than 0–45, which would call due north "north-east" half the time.
  const index = Math.round(normalised / 45) % COMPASS_POINTS.length;
  return COMPASS_POINTS[index] as CompassPoint;
}

/**
 * The closest saved place at **any** distance, with how far and which way.
 *
 * Deliberately uncapped, unlike `nearestPlaceWithin`: that one answers "is this
 * close enough to call *near*", which is a claim and needs a limit. This is a
 * measurement — "1,043 km south of Home" is as true as "200 m south of Home",
 * and it is the honest thing to show a parent when nothing has named the fix.
 */
export function relativeToNearestPlace<
  T extends { name: string; latitude: number; longitude: number },
>(
  lat: number,
  lon: number,
  places: readonly T[],
): { place: T; meters: number; compass: CompassPoint } | null {
  let closest: { place: T; meters: number } | null = null;
  for (const place of places) {
    const meters = distanceMeters(lat, lon, place.latitude, place.longitude);
    if (!closest || meters < closest.meters) {
      closest = { place, meters };
    }
  }
  if (!closest) {
    return null;
  }
  return {
    ...closest,
    // From the *place* to the fix: a parent reads "the child is south of Home",
    // not "Home is north of the child".
    compass: compassPoint(
      bearingDegrees(closest.place.latitude, closest.place.longitude, lat, lon),
    ),
  };
}
