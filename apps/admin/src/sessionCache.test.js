import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { clearCached, dropCached, readCached, writeCached } from './sessionCache.js';

const FIVE_MINUTES = 5 * 60 * 1000;

function fakeStorage() {
  const map = new Map();
  return {
    map,
    getItem: vi.fn(key => map.get(key) ?? null),
    setItem: vi.fn((key, value) => map.set(key, String(value))),
    removeItem: vi.fn(key => map.delete(key)),
    clear: vi.fn(() => map.clear()),
  };
}

describe('sessionCache', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-11T09:00:00Z'));
  });

  afterEach(() => {
    clearCached();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('returns null for a key never written', () => {
    expect(readCached('families:page1')).toBeNull();
  });

  it('returns what was written while it is fresh', () => {
    const page = { rows: [{ uid: 'u1' }] };
    writeCached('families:page1', page);
    vi.advanceTimersByTime(FIVE_MINUTES);
    expect(readCached('families:page1')).toBe(page);
  });

  // A tab left open all day would otherwise show the morning's queue as current.
  it('forgets an entry older than five minutes', () => {
    writeCached('support:queue', ['ticket']);
    vi.advanceTimersByTime(FIVE_MINUTES + 1);
    expect(readCached('support:queue')).toBeNull();
  });

  // Family names and support tickets must not outlive the tab on disk.
  it('never writes to localStorage or sessionStorage', () => {
    const local = fakeStorage();
    const session = fakeStorage();
    vi.stubGlobal('localStorage', local);
    vi.stubGlobal('sessionStorage', session);
    vi.stubGlobal('window', { localStorage: local, sessionStorage: session });

    writeCached('families:page1', { rows: [{ name: 'Nguyen' }] });
    readCached('families:page1');

    expect(local.setItem).not.toHaveBeenCalled();
    expect(session.setItem).not.toHaveBeenCalled();
    expect(local.map.size + session.map.size).toBe(0);
  });

  it('drops every entry under a prefix and keeps the rest', () => {
    writeCached('families:page1', 1);
    writeCached('families:page2', 2);
    writeCached('support:queue', 3);
    dropCached('families:');
    expect(readCached('families:page1')).toBeNull();
    expect(readCached('families:page2')).toBeNull();
    expect(readCached('support:queue')).toBe(3);
  });

  // Called on sign-out, so the next account on this browser starts from nothing.
  it('clears every entry', () => {
    writeCached('families:page1', 1);
    writeCached('support:queue', 2);
    clearCached();
    expect(readCached('families:page1')).toBeNull();
    expect(readCached('support:queue')).toBeNull();
  });
});
