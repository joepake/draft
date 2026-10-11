import type { ParentPinVerifier } from '@kidgate/schema/device';

/**
 * Read the verifier off the document, or answer null.
 *
 * Every field is checked rather than trusted, and a value missing any of them
 * is discarded whole. A half-formed verifier is worse than none: the device
 * would store it, offer the unlock button, and refuse the family's correct PIN
 * on the one screen that exists to let them back in.
 *
 * Two readers: `agent/controlsSync` (the television, the desktop) and the
 * child-device mapper in `repositories/device` (the phone).
 */
export function parseParentPinVerifier(value: unknown): ParentPinVerifier | null {
  if (!value || typeof value !== 'object') {
    return null;
  }
  const candidate = value as Record<string, unknown>;
  const version = candidate.version;
  const algorithm = candidate.algorithm;
  const iterations = candidate.iterations;
  const salt = candidate.salt;
  const hash = candidate.hash;

  if (
    typeof version !== 'number' ||
    typeof algorithm !== 'string' ||
    typeof iterations !== 'number' ||
    iterations <= 0 ||
    typeof salt !== 'string' ||
    !salt ||
    typeof hash !== 'string' ||
    !hash
  ) {
    return null;
  }

  return { version, algorithm, iterations, salt, hash };
}
