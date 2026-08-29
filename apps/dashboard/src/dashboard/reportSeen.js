/**
 * Which weekly report this browser has already been shown.
 *
 * The web half of the Reports mark. What counts as unseen is
 * `@kidgate/core/domain/weeklyReportBadge`, shared with `apps/mobile` so the
 * two parent surfaces cannot disagree about the same week; only the storage is
 * per platform — MMKV on the phone, `localStorage` here.
 *
 * Keyed by family, like the phone's copy: a parent who belongs to two families
 * has read one family's week and not the other's.
 */

const STORAGE_KEY = 'kidgate.lastSeenWeeklyReport';

/**
 * Every access is guarded.
 *
 * `localStorage` throws rather than returning null when a browser is set to
 * block site data, and a dashboard that fails to render because it could not
 * remember whether a report had been read would be a worse bug than the mark
 * being wrong.
 */
function readAll() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function readWeeklyReportSeen(familyId) {
  if (!familyId) return null;
  const value = readAll()[familyId];
  return typeof value === 'string' && value ? value : null;
}

export function writeWeeklyReportSeen(familyId, periodKey) {
  if (!familyId || !periodKey) return;
  const seen = readAll();
  // Never backwards: opening an older week from the history is not un-reading
  // this one.
  if (
    typeof seen[familyId] === 'string' &&
    seen[familyId].localeCompare(periodKey) >= 0
  ) {
    return;
  }
  seen[familyId] = periodKey;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
  } catch {
    // Nothing to do and nothing to say: the mark simply does not persist across
    // reloads for this reader.
  }
}
