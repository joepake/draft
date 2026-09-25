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

/**
 * Whether `dashboard.kidgate.app` is serving yet.
 *
 * **It is, since 2026-09-23.** `apps/dashboard` had been deploying to Vercel
 * for weeks — `docs/DEPLOY_LOG.md` names "the console that is still live" on
 * 2026-09-20 — while this constant still said no, so the header CTA and the
 * footer's Product column both rendered "coming soon" and no link at all. The
 * site was the only thing hiding a console that worked.
 *
 * Three places follow this flag: the header CTA, the footer's Product column,
 * and the `[…](/dashboard)` link inside `support.faq1A`. Flipping it is the
 * whole change — none of them carry a second copy of the answer, which is why
 * the fix belongs here and not in fourteen locale packs.
 *
 * Deliberately a constant here rather than a `VITE_` variable: it is a fact
 * about the product, not about the environment. A dev build pointing at
 * `localhost:5173` still renders the link, because the dashboard has shipped
 * whatever host this build happens to target.
 */
export const DASHBOARD_AVAILABLE = true;

/** The path the locale packs use for the dashboard. Not a route on this site. */
const DASHBOARD_PATH = '/dashboard';

/**
 * Turn `/dashboard` in translated copy into the real cross-app URL, and leave
 * every other path alone so `[…](/delete-account)` stays a router link.
 *
 * While `DASHBOARD_AVAILABLE` is false it answers `null`, and `RichText`
 * renders the label as plain text — the sentence still reads, without a link
 * to a host that answers nothing.
 */
export function resolveDashboardHref(href) {
  if (href !== DASHBOARD_PATH) return href;
  return DASHBOARD_AVAILABLE ? DASHBOARD_URL : null;
}
