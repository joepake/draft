import type { PairingLinkConfig } from './deepLink';

/**
 * Codes shown by the web dashboard when it asks to be signed in.
 *
 * Same alphabet and length as pairing codes, but a separate path
 * (`web-signin`) so a pairing QR can never be mistaken for a request to
 * authorise a browser — those grant very different things.
 */
const WEB_CODE_PATTERN = /^[A-Z0-9]{6}$/;

export function extractWebSignInCode(
  raw: string,
  config: PairingLinkConfig,
): string | null {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }

  try {
    const scheme = config.scheme;
    const normalized = trimmed.replace(new RegExp(`^${scheme}:`, 'i'), config.webHost);
    const url = new URL(normalized);

    // Only the web sign-in path. A pairing link reaching this parser means the
    // parent scanned the wrong code, and silently accepting it would approve a
    // browser they never intended to.
    if (!/web-signin/i.test(url.pathname) && !/web-signin/i.test(url.host)) {
      return null;
    }

    const code = url.searchParams.get('code')?.trim().toUpperCase() ?? '';
    return WEB_CODE_PATTERN.test(code) ? code : null;
  } catch {
    return null;
  }
}
