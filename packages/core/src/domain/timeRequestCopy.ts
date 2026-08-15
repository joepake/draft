/**
 * "Time left" for the time-request cooldown, as a key + params.
 *
 * Lifted from `apps/mobile/src/utils/timeRequest.ts`. Uses the short duration
 * keys from `shared` so every locale renders naturally — the implementation
 * before that concatenated hardcoded English ("3 minutes") into
 * already-translated sentences.
 */

export interface CooldownRemainingKeys {
  key: string;
  params: Record<string, number>;
}

export function getCooldownRemainingKeys(
  retryAt: string,
  nowMs: number,
): CooldownRemainingKeys | null {
  const remainingMs = new Date(retryAt).getTime() - nowMs;
  if (remainingMs <= 0) {
    return null;
  }

  const totalMinutes = Math.ceil(remainingMs / 60_000);
  if (totalMinutes < 60) {
    return {
      key: 'shared.durationMinutesShort',
      params: { minutes: totalMinutes },
    };
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (minutes === 0) {
    return { key: 'shared.durationHoursShort', params: { hours } };
  }

  return {
    key: 'shared.durationHoursMinutesShort',
    params: { hours, minutes },
  };
}
