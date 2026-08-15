import type { LocationHistoryEntry } from '@kidgate/schema/locationHistory';

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
