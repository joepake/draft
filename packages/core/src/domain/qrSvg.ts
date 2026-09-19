/**
 * A QR code as an SVG string, for the surfaces that draw one in a browser.
 *
 * `qrcode` does the encoding — Reed-Solomon is not something to hand-roll — but
 * the drawing happens here. Two reasons, and the second is the real one:
 *
 * 1. The renderers in that library differ between its Node and browser builds,
 *    and a packaged app cannot be run to find out which it got. `create` is the
 *    core entry point and is in both.
 * 2. `matrixToSvg` is then pure, so the geometry is covered by a test instead of
 *    by looking at it.
 *
 * The parent's phone is what has to read this, and it is reading it off a laptop
 * screen at arm's length. Quiet zone and contrast are not styling here — a QR
 * without four modules of margin is one that a camera at an angle fails to lock
 * onto, which reads to a parent as "the app is broken".
 *
 * **It lives in `domain/` rather than in an app because two now draw it.** It
 * was `apps/desktop/src/ui/qr.ts` until `apps/extension` needed the same picture
 * for the same protocol; a second copy is how two screens producing one QR come
 * to disagree about error-correction level, and a parent finds one of them
 * harder to scan than the other. `apps/tv` keeps its own reduction on purpose —
 * that one emits runs of modules for React Native views, not markup, and says so
 * in its header.
 *
 * `qrcode` is a pure-JavaScript encoder, so it does not breach
 * `core-stays-platform-free`. The SVG *string* is not a platform either — the
 * same argument `domain/locationHistoryMapHtml.ts` already makes.
 */

import { create } from 'qrcode';

/** Modules of blank margin the QR spec requires around the symbol. */
const QUIET_ZONE = 4;

export interface QrMatrix {
  size: number;
  /** Row-major; non-zero is a dark module. */
  data: Uint8Array | number[];
}

/**
 * One `<path>` covering every dark module.
 *
 * A path rather than one `<rect>` per module: a version-4 code is 33×33, so
 * rects would mean up to a thousand DOM nodes re-created on every code refresh,
 * and a pairing screen refreshes every five minutes for an hour.
 */
export function matrixToSvg(matrix: QrMatrix, sizePx: number): string {
  const side = matrix.size + QUIET_ZONE * 2;
  const segments: string[] = [];

  for (let row = 0; row < matrix.size; row += 1) {
    for (let column = 0; column < matrix.size; column += 1) {
      if (!matrix.data[row * matrix.size + column]) {
        continue;
      }
      segments.push(`M${column + QUIET_ZONE} ${row + QUIET_ZONE}h1v1h-1z`);
    }
  }

  /*
   * `shape-rendering="crispEdges"` matters on a Retina display at a fractional
   * scale: without it the renderer antialiases module edges into grey, and a
   * scanner reading a low-contrast edge is a scanner that gives up.
   */
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${side} ${side}"`,
    ` width="${sizePx}" height="${sizePx}" shape-rendering="crispEdges">`,
    `<rect width="${side}" height="${side}" fill="#FFFFFF"/>`,
    `<path d="${segments.join('')}" fill="#111111"/>`,
    '</svg>',
  ].join('');
}

/**
 * Encode a value as an SVG string.
 *
 * Error correction `M` matches what `apps/mobile` renders, which matters: the
 * screens produce a QR for the same protocol, and a parent should not find one
 * of them harder to scan than another.
 */
export function qrSvg(value: string, sizePx = 220): string {
  const symbol = create(value, { errorCorrectionLevel: 'M' });
  return matrixToSvg(symbol.modules, sizePx);
}
