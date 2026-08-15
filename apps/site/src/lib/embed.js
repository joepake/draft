/**
 * `?embed=1` — this page is being rendered inside `apps/mobile` or
 * `apps/desktop`, not in a browser.
 *
 * Both apps open the About page and the two legal documents as a screen of
 * their own rather than handing the URL to the reader's browser: the desktop
 * agent runs on a child's machine, and the phone shows the legal pages from
 * the consent line under the sign-in buttons. The site's own header and footer
 * inside that frame are worse than noise —
 *
 * - the desktop frame is **440 design points wide**, so a nav row and a
 *   four-column footer are most of what is on screen;
 * - the footer links to `dashboard.kidgate.app`, and the desktop agent's
 *   `frame-src` allows exactly one host. Clicking it navigates the frame to a
 *   blocked origin: a blank panel, reached by pressing something that looked
 *   like part of the app;
 * - the header offers a language picker beside an app that already has one.
 *
 * **It removes the page's own links too, not only the chrome around them.**
 * What is left after the header and footer go is still three outbound links —
 * the About page's `mailto:` and its two internal rows, and the two typeface
 * links in the Terms. Every one of them ends the same way: the phone swaps the
 * WebView for Safari mid-document, and the desktop frame hits a `frame-src`
 * that allows one host. `LegalDocument.jsx` prints the typeface URLs as text
 * so the attribution survives; `About.jsx` drops its contact section whole,
 * because "write to us" above nothing to write with is worse than no section.
 * The mode is therefore *content only* — no header, no footer, no link out.
 *
 * **Read once, at module load, rather than from the router.** A `<Link>` does
 * not carry the query string, so reading it per-render would drop the mode the
 * first time the reader followed an internal link. Same reason `?hl=` is
 * captured once in `@kidgate/i18n/web`.
 */
function readFlag(name) {
  try {
    return new URLSearchParams(window.location.search).get(name) === '1';
  } catch {
    return false;
  }
}

export const IS_EMBEDDED = readFlag('embed');

/**
 * `?inset=1` — the embedding app floats a control over the page's top-left
 * corner and asks the page to keep it clear.
 *
 * The desktop agent's back chip is that control: it overlays the frame rather
 * than sitting in a bar above it, so without the inset it lands on the `h1`.
 * The padding is the page's rather than the frame's because in-page padding
 * scrolls away with the heading — the chip floats over *content* once the
 * reader is past the top, which is the point of an overlay. The phone draws a
 * real header above its WebView and never sends this.
 *
 * Meaningless without `embed=1`: the site's own header already clears every
 * corner. `App.jsx` only reads it on the embed branch.
 */
export const EMBED_INSET_TOP = readFlag('inset');
