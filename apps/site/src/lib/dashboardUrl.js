/**
 * Where the parent dashboard lives, for the several places on this site that
 * point at it.
 *
 * It was a `const` inside `App.jsx`, which was fine while the header button was
 * the only link. It is not the only link: `support.faq1A` carries
 * `[web dashboard](/dashboard)` in all fourteen packs, and that path stopped
 * being a route here when the dashboard became `apps/dashboard` — so the
 * Support page rendered a react-router `<Link>` to a route that does not exist,
 * and there is no catch-all route either, so the reader got an empty page.
 *
 * **The copy keeps `/dashboard` and the app resolves it.** The alternative was
 * writing `https://dashboard.kidgate.app` into the string in all fourteen
 * packs, which pins the production host into translated copy — a staging
 * deployment would still send readers to production, and a host is fourteen
 * chances to mistype something no test reads. `pages/Support` passes
 * `resolveDashboardHref` to `RichText` instead; the packs carry a token, not an
 * address.
 */

/**
 * The dashboard origin. `.env.dev` / `.env.prod` hold this one variable so a
 * staging host can point the cross-link elsewhere; the fallback is what a
 * checkout with no env file gets, which is production.
 */
export const DASHBOARD_URL =
  import.meta.env.VITE_DASHBOARD_URL ?? 'https://dashboard.kidgate.app';

/** The path the locale packs use for the dashboard. Not a route on this site. */
const DASHBOARD_PATH = '/dashboard';

/**
 * Turn `/dashboard` in translated copy into the real cross-app URL, and leave
 * every other path alone so `[…](/delete-account)` stays a router link.
 */
export function resolveDashboardHref(href) {
  return href === DASHBOARD_PATH ? DASHBOARD_URL : href;
}
