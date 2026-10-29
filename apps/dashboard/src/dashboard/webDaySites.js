import { groupWebHistoryByService } from '@kidgate/core/domain/webServiceGroups';

/**
 * The newest recorded day's site count, for the Web History control card.
 *
 * Read off the raw rows, because the per-domain roll-up keeps no date — the
 * card read one off it and said None over a week of sites — and counted as the
 * phone counts, one per service, so a site's static hosts are not extra sites
 * (126 here beside the phone's 123 for the same day). Both 2026-10-29.
 */
export function latestDaySiteCount(entries) {
  const latest = entries.reduce(
    (max, entry) => (entry.date > max ? entry.date : max),
    '',
  );
  return groupWebHistoryByService(entries.filter(entry => entry.date === latest))
    .length;
}
