/**
 * Every place a family gets KidGate — four platforms, one file.
 *
 * The home page and a `/download` page used to carry their own: `Home.jsx` had
 * two `href="#"` store buttons that navigated nowhere, and `Download.jsx` had a
 * pair of URLs in a module constant. Two pages, two answers to "where is the
 * build", each covering two of the four platforms, and only one of them real.
 * The page is gone — its content is the `#download` section of `pages/Home` —
 * and this is the single answer.
 *
 * ## The URLs
 *
 * - **iOS.** Apple has no URL form that takes a bundle identifier, so
 *   `com.kidgate.app` cannot build this link — it needs the numeric App Store
 *   ID from App Store Connect, which is what `APP_STORE_ID` is. The only other
 *   route from a bundle id is `itunes.apple.com/lookup?bundleId=…`, which
 *   answers with JSON and cannot be an `href`.
 * - **Android.** Play takes the package name directly, and the package name is
 *   the bundle id, so this one link is complete without a console lookup.
 * - **macOS / Windows.** `download.kidgate.app`, a subdomain of the apex on
 *   purpose: `ALLOWED_DESKTOP_DOWNLOAD_HOSTS` in `@kidgate/schema/desktopRelease`
 *   matches on suffix, so the desktop agent's own update banner may already
 *   point at these without widening an allowlist. Moving the binaries to an R2
 *   or Vercel URL would need one.
 *
 * The two desktop files are **`.zip`, not `.dmg`/`.exe`**, and the archive does
 * not soften either install warning — macOS carries quarantine through the
 * unzip and Windows stamps the extracted `.exe` with the same Mark of the Web.
 * `DesktopCard` in `pages/Home` states each one inside the card that carries
 * the button, which is what a bare file link cannot do.
 *
 * No `download` attribute on the desktop links: it is ignored cross-origin, and
 * what names the saved file is `Content-Disposition` on the object itself.
 *
 * ## `available` is the shipping switch
 *
 * Nothing is published on any of the four platforms yet: the two store listings
 * are not live and neither `.zip` is uploaded. So every entry carries
 * `available: false`, and `pages/Home` renders each of them as a non-anchor
 * "coming soon" instead of a button — a link to a store 404 or a missing object
 * is worse than one that says the build is not out.
 *
 * The URLs beside the flag are final and stay here while it is false, because
 * they are what the flag is a switch *for*: going live is one boolean per
 * platform, on the day that platform ships, and nothing else on this page
 * changes with it.
 */

/**
 * The App Store's numeric id for KidGate, from App Store Connect.
 *
 * Not derivable from `com.kidgate.app` — see above. Named rather than inlined
 * so the one place it is wrong is one place to fix.
 */
export const APP_STORE_ID = '6797071019';

/** The bundle identifier, which on Android is also the Play package name. */
export const BUNDLE_ID = 'com.kidgate.app';

export const STORE_LINKS = {
  ios: {
    url: `https://apps.apple.com/app/id${APP_STORE_ID}`,
    available: false,
  },
  android: {
    url: `https://play.google.com/store/apps/details?id=${BUNDLE_ID}`,
    available: false,
  },
  macos: {
    url: 'https://download.kidgate.app/KidGate-macos.dmg',
    available: false,
  },
  windows: {
    url: 'https://download.kidgate.app/KidGate-windows.zip',
    available: false,
  },
};

/** Whether this platform's build can be reached at all today. */
export function isPlatformAvailable(platform) {
  return STORE_LINKS[platform].available;
}

/**
 * The destination for a platform, or `null` while it has not shipped.
 *
 * Returning `null` rather than the URL is what keeps the two states from
 * drifting: a caller that forgets the flag renders `href={null}`, which React
 * drops, instead of shipping a live link to a listing that does not exist.
 */
export function storeHref(platform) {
  const { url, available } = STORE_LINKS[platform];
  return available ? url : null;
}
