/**
 * Every place a family gets KidGate — six platforms, one file.
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
 * - **Android TV.** Its own Play listing, not the phone's: `apps/tv` ships as
 *   `com.kidgate.app.tv` (`applicationId` in `apps/tv/android/app/build.gradle`),
 *   so the phone's link would land a parent on a listing a television cannot
 *   install.
 * - **Chrome.** The Web Store names a listing by the extension's id, which the
 *   store assigns on the first upload. `storeLinks.test.js` fails while
 *   `chrome.available` is true and the id is the placeholder or not 32 letters
 *   `a`–`p`, and `isPlatformAvailable` refuses a placeholder either way.
 * - **macOS / Windows.** `download.kidgate.app`, a subdomain of the apex on
 *   purpose: `ALLOWED_DESKTOP_DOWNLOAD_HOSTS` in `@kidgate/schema/desktopRelease`
 *   matches on suffix, so the desktop agent's own update banner may already
 *   point at these without widening an allowlist. Moving the binaries to an R2
 *   or Vercel URL would need one.
 *
 * The Windows file is a **`.zip`, not an `.exe`**, and the archive does not
 * soften its install warning — Windows stamps the extracted `.exe` with the
 * same Mark of the Web. `DownloadCard` in `pages/Home` states each platform's
 * steps inside the card that carries the button, which is what a bare file
 * link cannot do.
 *
 * No `download` attribute on the desktop links: it is ignored cross-origin, and
 * what names the saved file is `Content-Disposition` on the object itself.
 *
 * ## `available` is the shipping switch
 *
 * All six flipped together on 2026-10-09 (decided 2026-09-27). That day the
 * two desktop files and the Chrome listing answered 200; the App Store and
 * both Play listings still answered 404, flipped ahead of review by decision.
 *
 * A false flag renders that platform as a non-anchor "coming soon" instead of
 * a button — a link to a store 404 or a missing object is worse than one that
 * says the build is not out. Pulling a platform, or adding one, is one boolean
 * here and nothing else on the page.
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

/** The Android TV app's Play package — its own listing, not the phone's. */
export const TV_BUNDLE_ID = 'com.kidgate.app.tv';

/** What `CHROME_WEB_STORE_ID` holds until the Web Store has assigned one. */
export const CHROME_WEB_STORE_ID_PLACEHOLDER = 'REPLACE-WITH-EXTENSION-ID';

/**
 * The extension's Chrome Web Store id, assigned on the first upload. The
 * desktop agent's `CHROME_WEB_STORE_URL` carries the same id.
 */
export const CHROME_WEB_STORE_ID = 'lebaeomlgdejemdbiibffmhflijiojbj';

export const STORE_LINKS = {
  ios: {
    url: `https://apps.apple.com/app/id${APP_STORE_ID}`,
    available: true,
  },
  android: {
    url: `https://play.google.com/store/apps/details?id=${BUNDLE_ID}`,
    available: true,
  },
  macos: {
    /*
     * The `.pkg`, not the `.dmg` the release also publishes.
     *
     * Both are signed, notarised and stapled, and the image is the nicer
     * artefact for anyone who wants the bundle by hand. It is the wrong one to
     * put behind a download button: it asks the person to drag the app into
     * `/Applications`, and a parent who instead double-clicks it where it sits
     * gets an agent whose content filter can never activate — `sysextd`
     * refuses a system extension outside `/Applications`, before the approval
     * prompt, silently. The package writes the bundle there itself.
     */
    url: 'https://download.kidgate.app/KidGate-macos.pkg',
    available: true,
  },
  windows: {
    // Must equal RELEASE_NAME in scripts/release-windows.mjs.
    url: 'https://download.kidgate.app/KidGate-windows.exe',
    available: true,
  },
  androidtv: {
    url: `https://play.google.com/store/apps/details?id=${TV_BUNDLE_ID}`,
    available: true,
  },
  chrome: {
    url: `https://chromewebstore.google.com/detail/${CHROME_WEB_STORE_ID}`,
    available: true,
  },
};

/**
 * The flag, and for Chrome also a real id. A placeholder id answers "not
 * available" even with the flag on, so a launch that forgets the id ships a
 * "coming soon" rather than a link to a listing that does not exist. The test
 * beside this file is what makes that forgetting loud.
 */
function isLive(platform) {
  const { url, available } = STORE_LINKS[platform];
  return available && !url.includes(CHROME_WEB_STORE_ID_PLACEHOLDER);
}

/** Whether this platform's build can be reached at all today. */
export function isPlatformAvailable(platform) {
  return isLive(platform);
}

/**
 * The destination for a platform, or `null` while it has not shipped.
 *
 * Returning `null` rather than the URL is what keeps the two states from
 * drifting: a caller that forgets the flag renders `href={null}`, which React
 * drops, instead of shipping a live link to a listing that does not exist.
 */
export function storeHref(platform) {
  return isLive(platform) ? STORE_LINKS[platform].url : null;
}
