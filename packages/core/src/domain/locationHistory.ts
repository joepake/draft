import type { LocationHistoryEntry } from '@kidgate/schema/locationHistory';
import { nearestPlaceWithin } from './geo';

export function getLocationHistoryTitle(entry: LocationHistoryEntry): string {
  return (
    entry.placeName?.trim() ||
    entry.address?.split(',')[0]?.trim() ||
    `${entry.latitude.toFixed(4)}, ${entry.longitude.toFixed(4)}`
  );
}

export function getLocationHistorySubtitle(entry: LocationHistoryEntry): string {
  if (entry.address && entry.address !== entry.placeName) {
    return entry.address;
  }

  return `${entry.latitude.toFixed(5)}, ${entry.longitude.toFixed(5)}`;
}

/**
 * The saved place nearest a fix, when HERE returned no address for it — the
 * raw-coordinate fallback above is a fact nobody reads as a place, and a
 * saved place close enough to name is worth showing instead. Kept out of
 * `getLocationHistorySubtitle` on purpose: turning that into "Near X" is
 * copy, and copy belongs where `t()` is called, not in a platform-free
 * domain function.
 */
export function nearbyLocationHistoryPlace(
  entry: LocationHistoryEntry,
  places: readonly { name: string; latitude: number; longitude: number }[],
) {
  if (entry.address && entry.address !== entry.placeName) {
    return null;
  }
  return nearestPlaceWithin(entry.latitude, entry.longitude, places);
}
