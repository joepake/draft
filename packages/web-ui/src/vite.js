import { fileURLToPath } from 'node:url';

/**
 * The build-time half of `@kidgate/web-ui`, imported by `apps/site` and
 * `apps/dashboard` from their `vite.config.js` and by nothing else. It is the
 * one module in this package that may use `node:` builtins, because it never
 * reaches a browser — `web-ui-is-presentation-only` in `.dependency-cruiser.cjs`
 * bars the Firebase SDKs here, not Node.
 *
 * **Why this exists.** Both apps' `index.html` were byte-identical: same
 * favicon set, same fonts, same `theme-color` — and the same marketing title
 * and description, which was already wrong on the dashboard. Adding share cards
 * to one of them was enough to start the drift. A `<head>` is not a place
 * anyone thinks to look for duplication, and nothing fails when the two
 * disagree; the card a parent sees on Zalo is simply built from whichever file
 * was edited last.
 *
 * **What is shared and what is not.** Everything here is a brand invariant —
 * the icon, the share image, the card type, the font. The three things that
 * identify a deployment are arguments, because sharing them is what produced
 * the bug: a canonical pointing at the wrong host merges two sites in a search
 * index, and a login screen carrying the marketing page's title competes with
 * it for the brand query.
 */

/**
 * Both apps serve the same static files, so they serve them from one folder
 * rather than each keeping a copy. Vite allows exactly one `publicDir`, so an
 * app that later needs a file of its own has to move off this and copy the
 * shared ones in — there is no merging.
 */
export const SHARED_PUBLIC_DIR = fileURLToPath(new URL('../public', import.meta.url));

/** Sits in `public/`, so every origin that sets `publicDir` above serves it. */
const OG_IMAGE_FILE = 'og-image.jpg';
const OG_IMAGE_WIDTH = '1200';
const OG_IMAGE_HEIGHT = '630';

/**
 * `og:locale` is the language of *this* HTML, and it is English on both apps
 * for the same reason the copy below is: a crawler does not run the JavaScript
 * that switches the language. The alternates are a hint that the other thirteen
 * exist, not a promise that a crawler will find them — nothing serves a
 * per-language URL yet.
 */
const OG_LOCALE = 'en_US';
const OG_LOCALE_ALTERNATES = [
  'ar_AR',
  'de_DE',
  'es_ES',
  'fr_FR',
  'hi_IN',
  'id_ID',
  'it_IT',
  'ja_JP',
  'ko_KR',
  'pt_BR',
  'ru_RU',
  'tr_TR',
  'vi_VN',
];

const meta = attrs => ({ tag: 'meta', attrs, injectTo: 'head' });
const link = attrs => ({ tag: 'link', attrs, injectTo: 'head' });

/**
 * A Vite plugin that writes the whole `<head>` of an app.
 *
 * Injecting rather than templating means `index.html` holds no tag that this
 * file also holds — there is no second copy to fall out of step, and no marker
 * comment whose absence would silently drop every tag.
 *
 * @param {object} options
 * @param {string} options.origin  Absolute origin this deployment is served
 *   from, no trailing slash. It must be the host that answers 200: pointing a
 *   canonical at a URL that redirects splits a link's ranking and its social
 *   counts across both.
 * @param {string} options.title
 * @param {string} options.description
 * @param {boolean} [options.noindex]  Keep the deployment out of search
 *   results. True for anything behind a sign-in.
 */
export function kidgateHead({ origin, title, description, noindex = false }) {
  const url = `${origin}/`;
  const image = `${origin}/${OG_IMAGE_FILE}`;

  return {
    name: 'kidgate-head',
    transformIndexHtml() {
      return {
        tags: [
          meta({ name: 'theme-color', content: '#0b1226' }),
          link({ rel: 'icon', type: 'image/png', href: '/icon.png' }),
          link({ rel: 'apple-touch-icon', href: '/icon.png' }),
          link({ rel: 'mask-icon', href: '/icon.png', color: '#2d6a6a' }),

          { tag: 'title', children: title, injectTo: 'head' },
          meta({ name: 'description', content: description }),
          link({ rel: 'canonical', href: url }),
          ...(noindex ? [meta({ name: 'robots', content: 'noindex, nofollow' })] : []),

          meta({ property: 'og:type', content: 'website' }),
          meta({ property: 'og:site_name', content: 'KidGate' }),
          meta({ property: 'og:url', content: url }),
          meta({ property: 'og:title', content: title }),
          meta({ property: 'og:description', content: description }),
          meta({ property: 'og:image', content: image }),
          meta({ property: 'og:image:type', content: 'image/jpeg' }),
          meta({ property: 'og:image:width', content: OG_IMAGE_WIDTH }),
          meta({ property: 'og:image:height', content: OG_IMAGE_HEIGHT }),
          meta({
            property: 'og:image:alt',
            content:
              'KidGate — screen time, app blocking and location for the whole family.',
          }),
          meta({ property: 'og:locale', content: OG_LOCALE }),
          ...OG_LOCALE_ALTERNATES.map(content =>
            meta({ property: 'og:locale:alternate', content }),
          ),

          // `summary_large_image` is the only card type that shows the
          // 1200x630; without it X renders the link as bare text, image or
          // not. X reads `name=`, not `property=`, so the three tags that
          // differ are repeated and the rest fall back to the og:* pair.
          meta({ name: 'twitter:card', content: 'summary_large_image' }),
          meta({ name: 'twitter:title', content: title }),
          meta({ name: 'twitter:description', content: description }),
          meta({ name: 'twitter:image', content: image }),

          link({ rel: 'preconnect', href: 'https://fonts.googleapis.com' }),
          link({
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
          }),
          link({
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap',
          }),
        ],
      };
    },
  };
}
