import { PARENT_TILES } from '@kidgate/core/domain/locationHistoryMapHtml';

/**
 * The dashboard's own HERE key, restricted on HERE's side to this site's
 * domains — so it ships in the bundle, which is what a domain-restricted key is
 * for. One of three: the server geocodes with `HERE_MAP_API_KEY` and the
 * phone gets `HERE_MAP_PHONE_KEY` from `getLocationConfig`.
 *
 * Measured 2026-10-03: this key answers 200 with a `Referer` on
 * `dashboard.kidgate.app` and 401 with none, with a foreign one, and from
 * `localhost` — a dev server draws a blank map unless HERE lists localhost.
 * The restriction stops other sites embedding the key, not a script forging a
 * `Referer`; the quota on HERE's console is what caps a bill.
 */
const KEY = import.meta.env.VITE_HERE_MAPS_WEB_KEY || null;

/** What a map builder takes: tiles from this page, or the "unavailable" document. */
export const mapTiles = KEY ? PARENT_TILES : null;

export { KEY as hereWebKey };

const MAX_ZOOM = 19;

/**
 * The tile a frame asked for, as a URL — or `null`. The frame chooses three
 * integers and nothing else, so a script inside it cannot make this page
 * fetch an arbitrary address with the key attached.
 */
export function hereTileUrl(key, request) {
  const { z, x, y } = request ?? {};
  if (![z, x, y].every(Number.isInteger) || z < 0 || z > MAX_ZOOM) return null;
  const size = 2 ** z;
  if (x < 0 || y < 0 || x >= size || y >= size) return null;
  return `https://maps.hereapi.com/v3/base/mc/${z}/${x}/${y}/png8?style=explore.day&size=256&apiKey=${encodeURIComponent(key)}`;
}
