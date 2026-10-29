import { describe, expect, it } from 'vitest';
import { latestDaySiteCount } from './webDaySites.js';

const row = (domain, date) => ({
  id: `${domain}-${date}`,
  domain,
  date,
  visits: 1,
  blockedVisits: 0,
  lastAt: `${date}T10:00:00Z`,
});

describe('latestDaySiteCount', () => {
  it('counts the newest day only, not every day read (2026-10-29)', () => {
    const entries = [
      row('example.com', '2026-10-27'),
      row('wikipedia.org', '2026-10-28'),
      row('khanacademy.org', '2026-10-28'),
    ];
    expect(latestDaySiteCount(entries)).toBe(2);
  });

  it("counts a service's hosts as one site, as the phone does", () => {
    const entries = [
      row('youtube.com', '2026-10-28'),
      row('googlevideo.com', '2026-10-28'),
      row('ytimg.com', '2026-10-28'),
      row('wikipedia.org', '2026-10-28'),
    ];
    expect(latestDaySiteCount(entries)).toBe(2);
  });

  it('is zero with nothing read', () => {
    expect(latestDaySiteCount([])).toBe(0);
  });
});
