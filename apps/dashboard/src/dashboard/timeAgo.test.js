import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { timeAgo } from './timeAgo.js';

vi.mock('@kidgate/i18n/web', () => ({
  t: (key, params) => (params ? `${key}:${params.count}` : key),
}));

const NOW = Date.parse('2026-10-11T12:00:00Z');
const ago = ms => new Date(NOW - ms).toISOString();
const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(NOW);
});

afterEach(() => {
  vi.useRealTimers();
});

describe('timeAgo', () => {
  it.each([undefined, null, '', 'not a date'])('says never for %j', iso => {
    expect(timeAgo(iso)).toBe('time.never');
  });

  it('says just now under half a minute', () => {
    expect(timeAgo(ago(29 * SEC))).toBe('time.justNow');
  });

  // A device clock running ahead stamps the future; that is not "-3 minutes".
  it('says just now for a timestamp in the future', () => {
    expect(timeAgo(new Date(NOW + 3 * MIN).toISOString())).toBe('time.justNow');
  });

  it('rounds to the nearest minute', () => {
    expect(timeAgo(ago(30 * SEC))).toBe('time.minutes:1');
    expect(timeAgo(ago(8 * MIN + 29 * SEC))).toBe('time.minutes:8');
    expect(timeAgo(ago(59 * MIN + 29 * SEC))).toBe('time.minutes:59');
  });

  it('never says 60 minutes: half a minute short of the hour reads one hour', () => {
    expect(timeAgo(ago(59 * MIN + 30 * SEC))).toBe('time.hours:1');
  });

  it('rounds to the nearest hour', () => {
    expect(timeAgo(ago(89 * MIN))).toBe('time.hours:1');
    expect(timeAgo(ago(90 * MIN))).toBe('time.hours:2');
    expect(timeAgo(ago(23 * HOUR + 29 * MIN))).toBe('time.hours:23');
  });

  it('switches to days once the hours round to 24', () => {
    expect(timeAgo(ago(23 * HOUR + 30 * MIN))).toBe('time.days:1');
    expect(timeAgo(ago(36 * HOUR))).toBe('time.days:2');
    expect(timeAgo(ago(10 * 24 * HOUR))).toBe('time.days:10');
  });
});
