import { afterEach, describe, expect, it, vi } from 'vitest';

const DAY = 24 * 60 * 60 * 1000;
const STARTED = '2026-10-01T00:00:00.000Z';
const STARTED_MS = Date.parse(STARTED);

/** `VITE_TRIAL_DAYS` is read once at import, so each case loads a fresh copy. */
async function loadWith(value) {
  vi.stubEnv('VITE_TRIAL_DAYS', value);
  vi.resetModules();
  return import('./trial.js');
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('trial, with no duration declared', () => {
  it.each([undefined, '', '0', '-7', 'seven'])(
    'answers "cannot say" for VITE_TRIAL_DAYS=%j, never a default',
    async value => {
      const trial = await loadWith(value);

      expect(trial.TRIAL_DAYS).toBeNull();
      expect(trial.TRIAL_DURATION_MS).toBeNull();
      expect(trial.knowsTrialLength).toBe(false);
      expect(trial.getTrialEndsAt(STARTED)).toBeNull();
    },
  );

  // Reading "unknown" as "ended" sells a family something they already have.
  it('reads trial activity and plan state as null, not false', async () => {
    const trial = await loadWith(undefined);

    expect(trial.isTrialActive(STARTED, STARTED_MS + DAY)).toBeNull();
    expect(trial.getPlanState(false, STARTED, STARTED_MS + DAY)).toBeNull();
  });
});

describe('trial, with VITE_TRIAL_DAYS=14', () => {
  it('ends the trial fourteen days after it started', async () => {
    const trial = await loadWith('14');

    expect(trial.TRIAL_DAYS).toBe(14);
    expect(trial.knowsTrialLength).toBe(true);
    expect(trial.getTrialEndsAt(STARTED)).toEqual(new Date(STARTED_MS + 14 * DAY));
  });

  it('has no end date before the first pairing starts the clock, or for a bad stamp', async () => {
    const trial = await loadWith('14');

    expect(trial.getTrialEndsAt(null)).toBeNull();
    expect(trial.getTrialEndsAt('not a date')).toBeNull();
  });

  it('runs up to the last millisecond and not past it', async () => {
    const trial = await loadWith('14');
    const endsMs = STARTED_MS + 14 * DAY;

    expect(trial.isTrialActive(STARTED, endsMs - 1)).toBe(true);
    expect(trial.isTrialActive(STARTED, endsMs)).toBe(false);
  });

  it("names the phone's four plan states", async () => {
    const trial = await loadWith('14');
    const during = STARTED_MS + DAY;
    const after = STARTED_MS + 15 * DAY;

    expect(trial.getPlanState(true, STARTED, after)).toBe('premium');
    expect(trial.getPlanState(false, STARTED, during)).toBe('trialActive');
    expect(trial.getPlanState(false, STARTED, after)).toBe('trialEnded');
    expect(trial.getPlanState(false, null, during)).toBe('trialNotStarted');
  });
});
