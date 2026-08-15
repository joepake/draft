import type { DevicePlace } from '@kidgate/schema/devicePlace';
import { distanceMeters } from './geo';

/** Places within this distance count as the same location. */
export const PLACE_DUPLICATE_DISTANCE_METERS = 80;

export type PlaceConflictKind = 'name' | 'location';

export function normalizePlaceName(name: string): string {
  return name.trim().replace(/\s+/g, ' ').toLowerCase();
}

export function findPlaceConflict(
  places: DevicePlace[],
  draft: { name: string; latitude: number; longitude: number },
  excludeId?: string | null,
): PlaceConflictKind | null {
  const nameKey = normalizePlaceName(draft.name);
  if (!nameKey) {
    return null;
  }

  for (const place of places) {
    if (excludeId && place.id === excludeId) {
      continue;
    }
    if (normalizePlaceName(place.name) === nameKey) {
      return 'name';
    }
    if (
      distanceMeters(
        draft.latitude,
        draft.longitude,
        place.latitude,
        place.longitude,
      ) <= PLACE_DUPLICATE_DISTANCE_METERS
    ) {
      return 'location';
    }
  }

  return null;
}

/** True if target already has this place (name or nearby pin). */
export function siblingHasPlace(places: DevicePlace[], place: DevicePlace): boolean {
  return findPlaceConflict(places, place) != null;
}
