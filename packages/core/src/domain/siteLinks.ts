import type { AppLanguage } from '@kidgate/schema/language';

/**
 * Every `apps/site` page the two apps open, built in one place.
 *
 * Three of them: the About page and the two legal documents. They used to be
 * built in four — and the legal pair was worse than duplicated, it was
 * *rewritten*: `apps/site` served hardcoded English JSX while `apps/mobile` and
 * `apps/desktop` rendered `@kidgate/i18n`'s `legal` tree, with different
 * section counts and different effective dates for the same product. On a
 * privacy policy that is a compliance problem rather than an inconsistency,
 * which is the failure root rule 2 exists to end.
 *
 * There is now one renderer — `apps/site`, reading the locale packs — and
 * **neither app hands these URLs to the reader's own browser.** Both open them
 * as a screen inside themselves: `apps/mobile` in a `WebView`, `apps/desktop`
 * in an `iframe` filling its own screen. The desktop agent runs on a child's
 * machine, and the phone opens the legal pages from the consent line under the
 * sign-in buttons and from Plans mid-purchase. None of those wants the app
 * swapped out for Safari.
 */
export type LegalDocumentKey = 'privacyPolicy' | 'termsOfService';

const LEGAL_PATHS: Record<LegalDocumentKey, string> = {
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms',
};

const ABOUT_PATH = '/about';

/**
 * Production, and the default for the legal documents only.
 *
 * About follows the pairing host so a dev build reaches the dev site; a legal
 * document does not, because it is the same document in every environment, it
 * is what the App Store and Play listings link to, and a dev build opening a
 * staging host that may not be deployed turns "read the privacy policy" into a
 * dead page.
 */
export const SITE_ORIGIN = 'https://www.kidgate.app';

export interface SiteUrlOptions {
  /** Defaults to production. About passes the pairing host. */
  origin?: string;
  /**
   * Ask the site to render the page alone — the text, and nothing that leads
   * away from it: no header, no footer, no navigation, and no links inside the
   * page either.
   *
   * Both apps embed these pages, and the site's own chrome inside them is
   * worse than noise. On the desktop the frame is 440 design points wide, and
   * a footer link to `dashboard.kidgate.app` navigates the frame to a host
   * `frame-src` forbids — a blank panel with nothing in it, reached by
   * clicking something that looked like part of the app.
   *
   * The in-page links go for the same reason and one more: these three pages
   * are opened to be *read* — the legal pair from the consent line and from
   * Plans mid-purchase — and a tap that swaps the app for Safari loses the
   * reader at the moment they are deciding whether to agree.
   */
  embed?: boolean;
}

function buildUrl(
  path: string,
  language: AppLanguage,
  options: SiteUrlOptions,
): string {
  const origin = (options.origin ?? SITE_ORIGIN).replace(/\/$/, '');
  /*
   * `hl` is the language the reader is already using in the app.
   *
   * The site follows the browser's own locale otherwise, which is the wrong
   * answer for the case this exists for: a parent whose phone is set to
   * Vietnamese inside a WebView that reports English. `hl` rather than `lang`
   * because it is what Google's own properties use for exactly this, so a
   * store listing can be pointed at these URLs without a second convention.
   */
  const query = `hl=${encodeURIComponent(language)}${options.embed ? '&embed=1' : ''}`;
  return `${origin}${path}?${query}`;
}

export function legalDocumentUrl(
  key: LegalDocumentKey,
  language: AppLanguage,
  options: SiteUrlOptions = {},
): string {
  return buildUrl(LEGAL_PATHS[key], language, options);
}

/**
 * The About page — the only copy of that text anywhere.
 *
 * It is a web page rather than a screen in each app because the alternative is
 * ~50 keys × 14 packs of marketing copy kept in step by hand, twice. `apps/site`
 * marks the route as one two shipped apps open by absolute URL: renaming it
 * there breaks a row already installed on somebody's phone.
 */
export function aboutUrl(language: AppLanguage, options: SiteUrlOptions = {}): string {
  return buildUrl(ABOUT_PATH, language, options);
}

/**
 * The `scheme://authority` of a URL this repo built, or null.
 *
 * Deliberately not a URL parser. It exists to answer one question — "which
 * origin did this screen set out to show?" — about a string produced by the
 * functions above, so the input is trusted and the output feeds
 * `isSameSiteUrl`, which is where the untrusted comparison happens.
 */
export function siteOriginOf(url: string): string | null {
  const match = /^https:\/\/[^/?#]+/i.exec(url);
  return match ? match[0] : null;
}

/**
 * The host of an HTTPS URL with `www.` and any userinfo removed, or null.
 *
 * **The userinfo strip is the security-relevant half.** In
 * `https://www.kidgate.app@evil.test/` the authority is
 * `www.kidgate.app@evil.test` and the host is `evil.test` — a comparison that
 * reads the authority instead of the host lets that through, which is the same
 * trick `updateCheck.ts` guards the download link against.
 *
 * **The `www.` strip is the half a blank page was traced to.** The pairing
 * config's `webHost` is the apex `https://kidgate.app`, so the About row opens
 * an apex URL; the site 308-redirects it to `www`. A comparison against the
 * origin the screen started from then refuses the page it was sent to, and the
 * reader gets a blank frame. They are one site and this treats them as one.
 */
function siteHostOf(url: string): string | null {
  const authority = /^https:\/\/([^/?#]*)/i.exec(url)?.[1];
  if (authority === undefined) return null;
  const host = authority.slice(authority.lastIndexOf('@') + 1).toLowerCase();
  return host.replace(/^www\./, '') || null;
}

/**
 * Whether a URL stays on the site an embedded page was opened from.
 *
 * `apps/mobile` renders these pages in a `WebView`, and a WebView with no
 * navigation policy is a browser inside a parental control: it allows what this
 * returns true for and hands everything else to the system browser.
 * `apps/desktop` reaches the same result with `frame-src` in `tauri.conf.json`,
 * which must list **both** the apex and the `www` host for the same reason this
 * function collapses them.
 */
export function isSameSiteUrl(url: string, origin: string): boolean {
  const host = siteHostOf(url);
  return host !== null && host === siteHostOf(origin);
}
