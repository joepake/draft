/**
 * "Chrome on Windows" from the `User-Agent` a web session was opened with
 * (`parentWebSessions.userAgent`, truncated to 200 characters by the server).
 *
 * Coarse on purpose. A user-agent string is whatever the browser says it is:
 * Brave, Vivaldi and Arc say Chrome, an iPad in desktop mode says Mac, and the
 * minor versions are frozen. The names returned are brand and system names, not
 * sentences, so this holds no copy and a surface decides how to join them — and
 * what to say for `null`, which means "could not tell", never a guess.
 */

export interface WebSessionLabel {
  browser: string | null;
  os: string | null;
}

// Order matters: Chrome's string also says Safari, Edge's and Opera's also say
// Chrome, Samsung's also says Chrome.
const BROWSERS: ReadonlyArray<readonly [string, RegExp]> = [
  ['Edge', /\bEdg(?:e|A|iOS)?\//],
  ['Opera', /\b(?:OPR|OPiOS)\/|\bOpera\b/],
  ['Samsung Internet', /\bSamsungBrowser\//],
  ['Firefox', /\b(?:Firefox|FxiOS)\//],
  ['Chrome', /\b(?:Chrome|CriOS)\//],
  ['Safari', /\bVersion\/[\d.]+.*\bSafari\//],
];

// Order matters: iOS says "like Mac OS X", Android says Linux, ChromeOS says X11.
const SYSTEMS: ReadonlyArray<readonly [string, RegExp]> = [
  ['Windows', /\bWindows\b/],
  ['iPadOS', /\biPad\b/],
  ['iOS', /\b(?:iPhone|iPod)\b/],
  ['Android', /\bAndroid\b/],
  ['ChromeOS', /\bCrOS\b/],
  ['macOS', /\bMacintosh\b|\bMac OS X\b/],
  ['Linux', /\bLinux\b|\bX11\b/],
];

const firstMatch = (table: typeof BROWSERS, userAgent: string): string | null =>
  table.find(([, pattern]) => pattern.test(userAgent))?.[0] ?? null;

export function webSessionLabel(userAgent: string | null | undefined): WebSessionLabel {
  const ua = userAgent ?? '';
  return { browser: firstMatch(BROWSERS, ua), os: firstMatch(SYSTEMS, ua) };
}
