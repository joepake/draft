/**
 * Remaining time until `expiresAtMs` as `m:ss`, or `Ns` under a minute.
 *
 * Lifted from `apps/mobile/src/utils/formatCountdown.ts`. `nowMs` must be
 * server-corrected time, not the device clock — `expiresAtMs` is
 * server-issued (pairing codes, cooldowns), and a child winding the clock
 * would otherwise change what the countdown claims.
 */
export function formatCountdown(expiresAtMs: number | null, nowMs: number): string {
  if (!expiresAtMs) {
    return '';
  }
  const remainingMs = Math.max(0, expiresAtMs - nowMs);
  const totalSeconds = Math.ceil(remainingMs / 1000);
  if (totalSeconds < 60) {
    return `${totalSeconds}s`;
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}
