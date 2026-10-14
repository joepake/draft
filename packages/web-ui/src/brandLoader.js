import { BRAND_MARK } from '@kidgate/tokens/brandMark';
import './brandLoader.css';

/**
 * The KidGate loader for every browser surface — the dashboard, the desktop
 * agent's WebView and the extension popup — drawn the way the phone's
 * `BrandLoader` and the intro video draw it: the child's ring is drawn round,
 * the head lands, the parent's ring sweeps round it, the mark settles, fades
 * and draws again.
 *
 * Markup rather than a component, because the extension popup has no React;
 * `BrandLoader.jsx` wraps it for the two apps that do. The rings are filled,
 * tapered outlines, so each is shown through a mask: a thick stroke of its
 * `band` circle, dashed, whose offset runs to nothing (`brandLoader.css`).
 * The colour is `currentColor`, so the caller's `color` decides it.
 */

const { parentRing, childRing, head, viewBox } = BRAND_MARK;
const [viewX, viewY, viewWidth, viewHeight] = viewBox.split(' ');

/** Mask ids are document-global; two loaders on one page must not share. */
let sequence = 0;

const escapeAttribute = text =>
  String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function reveal(id, band, part) {
  const length = (2 * Math.PI * band.r).toFixed(1);
  return (
    `<mask id="${id}" maskUnits="userSpaceOnUse" x="${viewX}" y="${viewY}" ` +
    `width="${viewWidth}" height="${viewHeight}">` +
    `<circle class="kg-loader-${part}" cx="${band.cx}" cy="${band.cy}" r="${band.r}" ` +
    `fill="none" stroke="#fff" stroke-width="${band.width}" ` +
    `stroke-dasharray="${length} ${length}" style="--kg-loader-length:${length}" ` +
    `transform="rotate(${band.startDeg} ${band.cx} ${band.cy})"/></mask>`
  );
}

/**
 * @param {{ size?: number, label?: string }} [options] `label` is what a
 *   screen reader hears — pass the sentence the screen already shows.
 * @returns {string} One `<span class="kg-loader">`.
 */
export function brandLoaderMarkup({ size = 56, label = '' } = {}) {
  sequence += 1;
  const outer = `kg-loader-o${sequence}`;
  const inner = `kg-loader-i${sequence}`;
  const name = label ? ` aria-label="${escapeAttribute(label)}"` : '';
  return (
    `<span class="kg-loader" role="progressbar"${name} ` +
    `style="width:${size}px;height:${size}px">` +
    `<svg width="${size}" height="${size}" viewBox="${viewBox}" aria-hidden="true" focusable="false">` +
    `<defs>${reveal(outer, parentRing.band, 'outer')}${reveal(inner, childRing.band, 'inner')}</defs>` +
    `<path d="${parentRing.d}" fill="currentColor" mask="url(#${outer})"/>` +
    `<path d="${childRing.d}" fill="currentColor" mask="url(#${inner})"/>` +
    `<circle class="kg-loader-head" cx="${head.cx}" cy="${head.cy}" r="${head.r}" fill="currentColor"/>` +
    `</svg></span>`
  );
}
