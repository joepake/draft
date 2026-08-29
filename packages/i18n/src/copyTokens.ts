/**
 * Places in a sentence where a surface draws something instead of a word.
 *
 * **One case today, and it exists because the control has no name.** The scan
 * button on the parent app's Family screen is an icon and nothing else — no
 * label, no caption, `family.scanButtonAccessibility` read only by a screen
 * reader. Every sentence that told a parent to press it therefore had to invent
 * a name for it, and the invented name was wrong for months: `pairing.childScanHint`
 * described a path through "Devices → + → Child device", three screens that no
 * longer exist, and nothing failed because a sentence cannot fail.
 *
 * So the sentence carries a hole where the glyph goes, and each surface fills it
 * with `qrScan` from `@kidgate/tokens/icons` — the same drawing that is on the
 * button. A parent matches a picture to a picture.
 *
 * ## The rule that comes with it
 *
 * **A token is only worth adding when every surface that renders the key can
 * fill it.** Four render `pairing.childScanHint` — the phone's child pairing
 * screen, the desktop agent, the extension popup and the television — and a
 * fifth that forgot would print `{{scan}}` to a family, which is worse than the
 * wrong words were. `interpolate` leaves an unknown placeholder alone by design,
 * so nothing warns you.
 *
 * That is also why `pairing.shareChildCodeMessage` does **not** use one, despite
 * describing the same button: it is share-sheet text on its way to somebody
 * else's messaging app, where there is nothing to draw with. It names the button
 * in words, per locale, from `family.scanButtonAccessibility`.
 */

/** Where the `qrScan` glyph goes. Must match the packs exactly. */
export const SCAN_ICON_TOKEN = '{{scan}}';

export interface TokenSplit {
  before: string;
  after: string;
  /**
   * False when the token was not in the string at all.
   *
   * The honest outcome then is to render `before` — which is the whole
   * sentence — and no glyph, rather than nothing. A locale that has not been
   * through this change yet, or an English fallback for a missing key, both
   * land here.
   */
  found: boolean;
}

/**
 * Split a translated sentence around a token, once.
 *
 * Deliberately not a general template renderer: this returns the two halves and
 * lets the caller decide what goes between them, which is the one thing a
 * string cannot express. `interpolate` remains the tool for values that *are*
 * strings.
 */
export function splitAroundToken(text: string, token: string): TokenSplit {
  const at = text.indexOf(token);
  if (at === -1) {
    return { before: text, after: '', found: false };
  }
  return {
    before: text.slice(0, at),
    after: text.slice(at + token.length),
    found: true,
  };
}
