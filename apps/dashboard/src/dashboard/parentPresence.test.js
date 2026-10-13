import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { touchParentPresenceIfDue, waitForParentPresence } from './parentPresence.js';

const { touchParentPresence } = vi.hoisted(() => ({ touchParentPresence: vi.fn() }));

vi.mock('../adapters/repositories.js', () => ({
  deviceRepository: { touchParentPresence },
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

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

beforeEach(() => {
  vi.stubGlobal('window', { localStorage: memoryStorage() });
  touchParentPresence.mockReset();
  touchParentPresence.mockResolvedValue({ woke: 0 });
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('touchParentPresenceIfDue', () => {
  it('stamps nothing without a family', async () => {
    await expect(touchParentPresenceIfDue(null, T0)).resolves.toBeNull();
    expect(touchParentPresence).not.toHaveBeenCalled();
  });

  it('calls the server once a day, not once a load', async () => {
    await expect(touchParentPresenceIfDue('fam-a', T0)).resolves.toEqual({ woke: 0 });
    await expect(touchParentPresenceIfDue('fam-a', T0 + DAY - 1)).resolves.toBeNull();
    await touchParentPresenceIfDue('fam-a', T0 + DAY);

    expect(touchParentPresence).toHaveBeenCalledTimes(2);
    expect(touchParentPresence).toHaveBeenCalledWith('fam-a');
  });

  it('throttles each family on its own', async () => {
    await touchParentPresenceIfDue('fam-a', T0);
    await touchParentPresenceIfDue('fam-b', T0 + 1);

    expect(touchParentPresence.mock.calls).toEqual([['fam-a'], ['fam-b']]);
  });

  /*
   * The open that matters most is the first after a month away — the one that
   * wakes a dormant family. Stamping on attempt would strand it for a day.
   */
  it('does not stamp a call the server failed, so the next load retries', async () => {
    touchParentPresence.mockResolvedValueOnce(null);
    await touchParentPresenceIfDue('fam-a', T0);
    await touchParentPresenceIfDue('fam-a', T0 + 1);

    expect(touchParentPresence).toHaveBeenCalledTimes(2);
  });

  it('clears a rejected call so the next load retries', async () => {
    touchParentPresence.mockRejectedValueOnce(new Error('offline'));
    await expect(touchParentPresenceIfDue('fam-a', T0)).rejects.toThrow('offline');
    await touchParentPresenceIfDue('fam-a', T0 + 1);

    expect(touchParentPresence).toHaveBeenCalledTimes(2);
  });

  it('shares one call between callers while it is in flight', async () => {
    const server = deferred();
    touchParentPresence.mockReturnValueOnce(server.promise);

    const first = touchParentPresenceIfDue('fam-a', T0);
    const second = touchParentPresenceIfDue('fam-a', T0);
    server.resolve({ woke: 2 });

    expect(second).toBe(first);
    await expect(first).resolves.toEqual({ woke: 2 });
    expect(touchParentPresence).toHaveBeenCalledTimes(1);
  });

  it('still calls, and does not throw, when storage is blocked', async () => {
    const blocked = () => {
      throw new Error('SecurityError');
    };
    vi.stubGlobal('window', { localStorage: { getItem: blocked, setItem: blocked } });

    await touchParentPresenceIfDue('fam-a', T0);
    await touchParentPresenceIfDue('fam-a', T0 + 1);

    expect(touchParentPresence).toHaveBeenCalledTimes(2);
  });
});

describe('waitForParentPresence', () => {
  it('settles at once when no call is in flight', async () => {
    await expect(waitForParentPresence('fam-a')).resolves.toBeUndefined();
  });

  it('waits for the in-flight call before settling', async () => {
    const server = deferred();
    touchParentPresence.mockReturnValueOnce(server.promise);
    const touched = touchParentPresenceIfDue('fam-a', T0);

    let settled = false;
    const waited = waitForParentPresence('fam-a').then(() => {
      settled = true;
    });
    await Promise.resolve();
    expect(settled).toBe(false);

    server.resolve({ woke: 1 });
    await waited;
    await touched;
    expect(settled).toBe(true);
  });

  it('swallows a failed call: the waiter has nothing to do about it', async () => {
    const server = deferred();
    touchParentPresence.mockReturnValueOnce(server.promise);
    const touched = touchParentPresenceIfDue('fam-a', T0).catch(() => undefined);

    const waited = waitForParentPresence('fam-a');
    server.reject(new Error('offline'));

    await expect(waited).resolves.toBeUndefined();
    await touched;
  });
});
