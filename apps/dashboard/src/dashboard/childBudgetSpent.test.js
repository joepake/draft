import { describe, expect, it } from 'vitest';
import { childMinutesUsedToday } from './childBudgetSpent.js';

/*
 * Noon UTC is the same calendar day from UTC-11 to UTC+11, so a device with no
 * published zone — judged on this machine's calendar — reads 2026-10-11 on any
 * machine running this suite.
 */
const NOW = Date.parse('2026-10-11T12:00:00Z');

const device = (id, usageDate, minutesUsedToday, timeZone) => ({
  id,
  controls: { usageDate, minutesUsedToday },
  ...(timeZone ? { timeZone } : {}),
});

describe('childMinutesUsedToday', () => {
  it('sums the devices that reported today', () => {
    const devices = [device('a', '2026-10-11', 40), device('b', '2026-10-11', 25)];

    expect(childMinutesUsedToday(devices, NOW)).toBe(65);
  });

  it("leaves out a device whose stamp is yesterday's", () => {
    const devices = [device('a', '2026-10-11', 40), device('b', '2026-10-10', 300)];

    expect(childMinutesUsedToday(devices, NOW)).toBe(40);
  });

  it('reads null, not 0, when every device has been off since yesterday', () => {
    const devices = [device('a', '2026-10-10', 120), device('b', null, 0)];

    expect(childMinutesUsedToday(devices, NOW)).toBeNull();
    expect(childMinutesUsedToday([], NOW)).toBeNull();
  });

  it('reads a measured 0 as 0', () => {
    expect(childMinutesUsedToday([device('a', '2026-10-11', 0)], NOW)).toBe(0);
  });

  it("judges a device that published a zone on that device's own calendar", () => {
    const devices = [
      // 02:00 on the 12th in Kiritimati: today there is tomorrow here.
      device('ahead', '2026-10-12', 30, 'Pacific/Kiritimati'),
      device('ahead-stale', '2026-10-11', 500, 'Pacific/Kiritimati'),
      // 01:00 on the 11th in Pago Pago.
      device('behind', '2026-10-11', 15, 'Pacific/Pago_Pago'),
    ];

    expect(childMinutesUsedToday(devices, NOW)).toBe(45);
  });
});
