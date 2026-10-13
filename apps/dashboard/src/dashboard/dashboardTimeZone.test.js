import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { publishDashboardTimeZoneIfDue } from './dashboardTimeZone.js';

const { recordDashboardTimeZone } = vi.hoisted(() => ({
  recordDashboardTimeZone: vi.fn(),
}));

vi.mock('../adapters/repositories.js', () => ({
  familyRepository: { recordDashboardTimeZone },
}));

const DAY = 24 * 60 * 60 * 1000;
const T0 = Date.parse('2026-10-11T08:00:00Z');

function memoryStorage() {
  const map = new Map();
  return {
    getItem: key => (map.has(key) ? map.get(key) : null),
    setItem: (key, value) => map.set(key, String(value)),
  };
}

function browserZone(timeZone) {
  vi.spyOn(Intl.DateTimeFormat.prototype, 'resolvedOptions').mockReturnValue({
    timeZone,
  });
}

beforeEach(() => {
  vi.stubGlobal('window', { localStorage: memoryStorage() });
  recordDashboardTimeZone.mockReset();
  recordDashboardTimeZone.mockResolvedValue(true);
  browserZone('Asia/Ho_Chi_Minh');
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('publishDashboardTimeZoneIfDue', () => {
  it("publishes this browser's zone on the signed-in account's own root", async () => {
    await expect(publishDashboardTimeZoneIfDue('co-parent', T0)).resolves.toBe(true);

    expect(recordDashboardTimeZone).toHaveBeenCalledWith(
      'co-parent',
      'Asia/Ho_Chi_Minh',
    );
  });

  it('costs nothing on a second load in the same zone within a day', async () => {
    await publishDashboardTimeZoneIfDue('owner', T0);
    await expect(publishDashboardTimeZoneIfDue('owner', T0 + DAY - 1)).resolves.toBe(
      false,
    );

    expect(recordDashboardTimeZone).toHaveBeenCalledTimes(1);
  });

  it('asks again once a day has passed', async () => {
    await publishDashboardTimeZoneIfDue('owner', T0);
    await publishDashboardTimeZoneIfDue('owner', T0 + DAY);

    expect(recordDashboardTimeZone).toHaveBeenCalledTimes(2);
  });

  it('publishes a changed zone at once, inside the day', async () => {
    await publishDashboardTimeZoneIfDue('owner', T0);
    browserZone('Europe/Berlin');
    await publishDashboardTimeZoneIfDue('owner', T0 + 60_000);

    expect(recordDashboardTimeZone).toHaveBeenLastCalledWith('owner', 'Europe/Berlin');
    expect(recordDashboardTimeZone).toHaveBeenCalledTimes(2);
  });

  it('remembers an answer that needed no write, so the day stays free', async () => {
    recordDashboardTimeZone.mockResolvedValueOnce(false);
    await publishDashboardTimeZoneIfDue('owner', T0);
    await publishDashboardTimeZoneIfDue('owner', T0 + 1);

    expect(recordDashboardTimeZone).toHaveBeenCalledTimes(1);
  });

  it('does not remember a refused or offline write, so the next load retries', async () => {
    recordDashboardTimeZone.mockRejectedValueOnce(new Error('permission-denied'));
    await expect(publishDashboardTimeZoneIfDue('owner', T0)).rejects.toThrow();
    await publishDashboardTimeZoneIfDue('owner', T0 + 1);

    expect(recordDashboardTimeZone).toHaveBeenCalledTimes(2);
  });

  it("does not let one account's publish cover another's", async () => {
    await publishDashboardTimeZoneIfDue('owner', T0);
    await publishDashboardTimeZoneIfDue('co-parent', T0 + 1);

    expect(recordDashboardTimeZone.mock.calls.map(([uid]) => uid)).toEqual([
      'owner',
      'co-parent',
    ]);
  });

  it('makes one call when StrictMode mounts the caller twice', async () => {
    const first = publishDashboardTimeZoneIfDue('owner', T0);
    const second = publishDashboardTimeZoneIfDue('owner', T0);

    expect(second).toBe(first);
    await first;
    expect(recordDashboardTimeZone).toHaveBeenCalledTimes(1);
  });

  it('publishes nothing without an account or a zone', async () => {
    await expect(publishDashboardTimeZoneIfDue('', T0)).resolves.toBe(false);
    browserZone(undefined);
    await expect(publishDashboardTimeZoneIfDue('owner', T0)).resolves.toBe(false);

    expect(recordDashboardTimeZone).not.toHaveBeenCalled();
  });
});
