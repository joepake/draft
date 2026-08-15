import type { PairingLinkConfig } from './deepLink';

const PAIRING_CODE_PATTERN = /^[A-Z0-9]{6}$/;

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
