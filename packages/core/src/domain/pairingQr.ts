import type { PairingLinkConfig } from './deepLink';

const PAIRING_CODE_PATTERN = /^[A-Z0-9]{6}$/;

/** Every pairing and invite code is six characters (`functions/http/pairing.js`). */
export const PAIRING_CODE_LENGTH = 6;

/**
 * The characters a code is drawn from — the server's `CODE_ALPHABET`, pinned
 * to it by `pairingQr.test.ts`. No I, O, 0 or 1: they are left out so a code
 * read off one screen and typed on another cannot be misread, which means a
 * typed one of them is always a misreading.
 */
export const PAIRING_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

/**
 * What a code field keeps of what was typed or pasted: upper-cased, only
 * characters a code can contain, at most six.
 *
 * The phone's field used to keep any letter or digit, so an I, O, 0 or 1 sat
 * in a cell and the claim came back "incorrect or expired" for a code the
 * parent had read correctly apart from one glyph.
 */
export function normalizePairingCodeInput(raw: string): string {
  let code = '';
  for (const char of raw.toUpperCase()) {
    if (PAIRING_CODE_ALPHABET.includes(char)) {
      code += char;
      if (code.length === PAIRING_CODE_LENGTH) {
        break;
      }
    }
  }
  return code;
}

export function buildPairingQrValue(code: string, config: PairingLinkConfig): string {
  return `${config.scheme}://pair?code=${code.trim().toUpperCase()}`;
}

export function extractPairingCodeFromScan(
  raw: string,
  config: PairingLinkConfig,
): string | null {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }

  const direct = trimmed.toUpperCase();
  if (PAIRING_CODE_PATTERN.test(direct)) {
    return direct;
  }

  try {
    const scheme = config.scheme;
    const normalized = trimmed.replace(new RegExp(`^${scheme}:`, 'i'), config.webHost);
    const url = new URL(normalized);
    const code = url.searchParams.get('code')?.trim().toUpperCase() ?? '';
    if (PAIRING_CODE_PATTERN.test(code)) {
      return code;
    }
  } catch {
    // Fall through to regex parsing.
  }

  const match = trimmed.match(/(?:code=)([A-Za-z0-9]{6})/i);
  if (!match?.[1]) {
    return null;
  }

  const code = match[1].toUpperCase();
  return PAIRING_CODE_PATTERN.test(code) ? code : null;
}
