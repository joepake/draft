import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { readWeeklyReportSeen, writeWeeklyReportSeen } from './reportSeen.js';

const STORAGE_KEY = 'kidgate.lastSeenWeeklyReport';

function memoryStorage() {
  const map = new Map();
  return {
    map,
    getItem: key => (map.has(key) ? map.get(key) : null),
    setItem: (key, value) => map.set(key, String(value)),
  };
}

let storage;

beforeEach(() => {
  storage = memoryStorage();
  vi.stubGlobal('window', { localStorage: storage });
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('reportSeen', () => {
  it('reads null for a family whose report this browser has never shown', () => {
    expect(readWeeklyReportSeen('fam-a')).toBeNull();
  });

  it('remembers the week shown, per family', () => {
    writeWeeklyReportSeen('fam-a', '2026-W40');

    expect(readWeeklyReportSeen('fam-a')).toBe('2026-W40');
    expect(readWeeklyReportSeen('fam-b')).toBeNull();
  });

  it('never moves backwards when an older week is opened from the history', () => {
    writeWeeklyReportSeen('fam-a', '2026-W40');
    writeWeeklyReportSeen('fam-a', '2026-W38');

    expect(readWeeklyReportSeen('fam-a')).toBe('2026-W40');
  });

  it('moves forward to a newer week, across the year boundary too', () => {
    writeWeeklyReportSeen('fam-a', '2026-W52');
    writeWeeklyReportSeen('fam-a', '2027-W01');

    expect(readWeeklyReportSeen('fam-a')).toBe('2027-W01');
  });

  it('keeps the other family when one family advances', () => {
    writeWeeklyReportSeen('fam-a', '2026-W40');
    writeWeeklyReportSeen('fam-b', '2026-W41');

    expect(readWeeklyReportSeen('fam-a')).toBe('2026-W40');
    expect(readWeeklyReportSeen('fam-b')).toBe('2026-W41');
  });

  it('writes nothing without a family or a period', () => {
    writeWeeklyReportSeen('', '2026-W40');
    writeWeeklyReportSeen('fam-a', '');

    expect(storage.map.size).toBe(0);
    expect(readWeeklyReportSeen(undefined)).toBeNull();
  });

  it('reads a corrupted or non-string entry as unseen and overwrites it', () => {
    storage.setItem(STORAGE_KEY, '{not json');
    expect(readWeeklyReportSeen('fam-a')).toBeNull();

    storage.setItem(STORAGE_KEY, JSON.stringify({ 'fam-a': 40 }));
    expect(readWeeklyReportSeen('fam-a')).toBeNull();

    writeWeeklyReportSeen('fam-a', '2026-W40');
    expect(readWeeklyReportSeen('fam-a')).toBe('2026-W40');
  });

  /*
   * A browser set to block site data throws from `localStorage` rather than
   * answering null; a dashboard that failed to render over a read-mark would be
   * the worse bug.
   */
  it('answers unseen and does not throw when storage is blocked', () => {
    vi.stubGlobal('window', {
      localStorage: {
        getItem() {
          throw new Error('SecurityError');
        },
        setItem() {
          throw new Error('SecurityError');
        },
      },
    });

    expect(readWeeklyReportSeen('fam-a')).toBeNull();
    expect(() => writeWeeklyReportSeen('fam-a', '2026-W40')).not.toThrow();
  });
});
