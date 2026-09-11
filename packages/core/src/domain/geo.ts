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
