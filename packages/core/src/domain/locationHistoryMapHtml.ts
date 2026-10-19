/**
 * The location-history and place-picker map documents, as HTML strings.
 *
 * Lifted from `apps/mobile/src/utils/locationHistoryMapHtml.ts`. The phone
 * shows these in a WebView; a browser surface can render the same document in
 * an iframe — the trail styling, the focus ring and the HERE tile setup are
 * product decisions, not phone decisions.
 *
 * Two seams keep this platform-free:
 *
 * - Copy arrives as `messages`, already rendered by the caller's translator.
 * - The picker posts through `window.ReactNativeWebView` when it exists and
 *   stays silent otherwise — a non-RN embedder listens however it likes or
 *   not at all.
 */

import type { LocationHistoryEntry } from '@kidgate/schema/locationHistory';
import { getLocationHistoryTitle } from './locationHistory';

/**
 * Leaflet, pinned by hash. These documents hold the HERE key and the child's
 * trail, and the iframe sandbox stops a script reaching the parent's origin,
 * not the network — a CDN serving other bytes would read both. A mismatch
 * refuses the file and the map stays blank, which is the safe failure.
 * Bumping the version means re-hashing both files:
 * `curl -fsSL <url> | openssl dgst -sha256 -binary | openssl base64 -A`.
 */
const LEAFLET_ASSETS = `<link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin="anonymous"
    />
    <script
      src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      crossorigin="anonymous"
    ></script>`;

export interface LocationHistoryMapPoint {
  id: string;
  lat: number;
  lng: number;
  title: string;
  isLatest: boolean;
}

export interface LocationMapMessages {
  /** Shown when no HERE API key is configured. */
  mapUnavailable: string;
  /** Shown when the trail has no points yet. */
  mapNoLocationsEmpty: string;
}

export function buildLocationHistoryMapPoints(
  history: LocationHistoryEntry[],
): LocationHistoryMapPoint[] {
  return history.map((entry, index) => ({
    id: entry.id,
    lat: entry.latitude,
    lng: entry.longitude,
    title: getLocationHistoryTitle(entry),
    isLatest: index === 0,
  }));
}

/**
 * Tiles fetched by the page around the frame, for a host whose HERE key is
 * restricted to its own domain. A sandboxed frame has an opaque origin and
 * sends no `Referer`, so HERE refuses every tile the frame asks for itself
 * (measured on the dashboard, 2026-10-03); the page sends one. The key never
 * enters the document. The frame posts `{ hereTile: { id, z, x, y } }` to its
 * parent and takes back `{ hereTile: { id, blob } }`, `blob` absent on failure.
 */
export const PARENT_TILES = { fromParent: true } as const;

/** A HERE key, `PARENT_TILES`, or `null` for the "map unavailable" document. */
export type MapTileSource = string | typeof PARENT_TILES | null;

/*
 * **Every executable script below is a constant; what varies rides in a JSON
 * block.** The dashboard renders these documents as `srcDoc`, which inherits
 * its CSP, and a CSP admits an inline script only by hash. When the points,
 * the colours and the key were spliced into the script body, every render
 * hashed differently (measured 2026-10-19, two renders, two hashes), so the
 * only way to enforce the dashboard's CSP was `'unsafe-inline'`. A
 * `type="application/json"` block is never executed, so no policy covers it.
 *
 * `MAP_PAGE_SCRIPTS` is what gets hashed: `mapScriptHashes.json` beside this
 * file holds the hashes, a test recomputes them, and `scripts/sync-web-repo.mjs`
 * reads that file into the dashboard's `script-src`. Edit a script and the
 * test fails until the file is updated — that is the point.
 *
 * The block escapes `<`, so a device title holding `</script>` cannot end it
 * and start markup of its own; the spliced version had no such guard.
 */
const MAP_DATA_ID = 'kg-map-data';

function mapData(data: unknown): string {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return `<script type="application/json" id="${MAP_DATA_ID}">${json}</script>`;
}

const READ_MAP_DATA = `
      const data = JSON.parse(document.getElementById('${MAP_DATA_ID}').textContent);`;

/** `tileUrl` null asks the parent for each tile (`PARENT_TILES`). */
const ADD_TILES = `
      function addTiles(map, tileUrl) {
        if (tileUrl) {
          L.tileLayer(tileUrl, { maxZoom: 19 }).addTo(map);
          return;
        }
        const pendingTiles = new Map();
        let nextTileId = 0;
        window.addEventListener('message', event => {
          const reply = event.source === window.parent && event.data && event.data.hereTile;
          const settle = reply && pendingTiles.get(reply.id);
          if (!settle) return;
          pendingTiles.delete(reply.id);
          settle(reply.blob);
        });
        const ParentTiles = L.GridLayer.extend({
          createTile(coords, done) {
            const img = document.createElement('img');
            img.alt = '';
            const id = ++nextTileId;
            pendingTiles.set(id, blob => {
              if (!blob) {
                done(new Error('tile'), img);
                return;
              }
              const url = URL.createObjectURL(blob);
              img.onload = () => {
                URL.revokeObjectURL(url);
                done(null, img);
              };
              img.onerror = () => {
                URL.revokeObjectURL(url);
                done(new Error('tile'), img);
              };
              img.src = url;
            });
            window.parent.postMessage({ hereTile: { id, z: coords.z, x: coords.x, y: coords.y } }, '*');
            return img;
          },
        });
        new ParentTiles({ maxZoom: 19 }).addTo(map);
      }`;

function hereTileUrl(tiles: Exclude<MapTileSource, null>): string | null {
  if (typeof tiles !== 'string') return null;
  return `https://maps.hereapi.com/v3/base/mc/{z}/{x}/{y}/png8?style=explore.day&size=256&apiKey=${encodeURIComponent(tiles)}`;
}

/** The "no locations yet" panel both list maps draw in place of a map. */
const SHOW_EMPTY = `
      function showEmpty(mapEl, message, extraStyle) {
        const box = document.createElement('div');
        box.style.cssText =
          'display:flex;align-items:center;justify-content:center;height:100%;color:#475569;font:600 14px -apple-system,sans-serif;' + extraStyle;
        box.textContent = message;
        mapEl.appendChild(box);
      }`;

const MISSING_KEY_SCRIPT = `${READ_MAP_DATA}
      document.body.textContent = data.message;
    `;

function missingKeyDocument(softBg: string, message: string): string {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body {
        height: 100%;
        margin: 0;
        background: ${softBg};
        display: flex;
        align-items: center;
        justify-content: center;
        color: #475569;
        font: 600 14px -apple-system, BlinkMacSystemFont, sans-serif;
        padding: 16px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    ${mapData({ message })}
    <script>${MISSING_KEY_SCRIPT}</script>
  </body>
</html>`;
}

const HISTORY_SCRIPT = `${READ_MAP_DATA}${ADD_TILES}${SHOW_EMPTY}
      const points = data.points;
      const focusId = data.focusId;
      const mapEl = document.getElementById('map');

      if (!points.length) {
        showEmpty(mapEl, data.emptyMessage, '');
      } else {
        const map = L.map('map', {
          zoomControl: false,
          attributionControl: false,
        });

        addTiles(map, data.tileUrl);

        const path = points
          .slice()
          .reverse()
          .map(point => [point.lat, point.lng]);

        if (path.length > 1) {
          L.polyline(path, {
            color: data.accentColor,
            weight: 4,
            opacity: 0.9,
          }).addTo(map);
        }

        const bounds = L.latLngBounds(path);
        map.fitBounds(bounds, { padding: [36, 36], maxZoom: 15 });

        points.forEach(point => {
          const isFocused = focusId && point.id === focusId;
          const className =
            'dot ' +
            (point.isLatest ? 'dot-latest' : 'dot-past') +
            (isFocused ? ' dot-focus' : '');
          const size = point.isLatest ? 16 : 12;

          L.marker([point.lat, point.lng], {
            title: point.title,
            icon: L.divIcon({
              className: '',
              html: '<div class="' + className + '"></div>',
              iconSize: [size, size],
              iconAnchor: [size / 2, size / 2],
            }),
            zIndexOffset: isFocused || point.isLatest ? 200 : 0,
          }).addTo(map);
        });

        if (focusId) {
          const focusPoint = points.find(point => point.id === focusId);
          if (focusPoint) {
            map.setView([focusPoint.lat, focusPoint.lng], Math.max(map.getZoom(), 15));
          }
        }
      }
    `;

export function buildLocationHistoryMapHtml(
  points: LocationHistoryMapPoint[],
  highlightId: string | null | undefined,
  tiles: MapTileSource,
  messages: LocationMapMessages,
  accentColor = '#0F766E',
  accentSecondary = '#0369A1',
): string {
  const softBg = `${accentColor}14`;
  if (!tiles) {
    return missingKeyDocument(softBg, messages.mapUnavailable);
  }

  const data = {
    points,
    focusId: highlightId ?? null,
    tileUrl: hereTileUrl(tiles),
    emptyMessage: messages.mapNoLocationsEmpty,
    accentColor,
  };

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    ${LEAFLET_ASSETS}
    <style>
      html, body, #map {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background: ${softBg};
      }
      .leaflet-container {
        background: ${softBg};
        font: 12px -apple-system, BlinkMacSystemFont, sans-serif;
      }
      .dot {
        border-radius: 999px;
        border: 2px solid #fff;
        box-shadow: 0 1px 4px rgba(15, 23, 42, 0.25);
      }
      .dot-latest {
        width: 16px;
        height: 16px;
        background: ${accentColor};
      }
      .dot-past {
        width: 12px;
        height: 12px;
        background: #64748B;
      }
      .dot-focus {
        border-color: ${accentSecondary};
        border-width: 3px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    ${mapData(data)}
    <script>${HISTORY_SCRIPT}</script>
  </body>
</html>`;
}

export interface ChildDevicesMapPoint {
  id: string;
  lat: number;
  lng: number;
  /** Device name — drawn as a chip under the dot, so N dots stay tellable. */
  title: string;
  /**
   * `'carried'` is the device that travels with the child
   * (`core/domain/childLocation`); `'other'` is any additional fix. When no
   * carried device is chosen every point arrives `'other'` — the map then
   * shows fixes of equal weight, which is the refusal-to-pick drawn.
   */
  kind: 'carried' | 'other';
  /**
   * The device's own colour, so a marker matches the trail it ends and the
   * legend beside the list. Absent falls back to the carried/other greys.
   */
  color?: string;
  /**
   * Horizontal accuracy in metres — `DeviceLocation.accuracy` — drawn as the
   * error circle under the dot. Without it a PC positioned from its IP
   * address at 20 000 m and a phone at 5 m are the same confident marker;
   * with it the circle says which. Absent or null draws no circle.
   */
  accuracy?: number | null;
}

/** One device's recent route, already windowed and capped by the caller. */
export interface ChildDeviceTrail {
  deviceId: string;
  /** Oldest first — drawn in order. */
  path: Array<{ lat: number; lng: number }>;
  color: string;
  /** The carried device's line is drawn heavier and above the others. */
  carried: boolean;
}

const CHILD_DEVICES_SCRIPT = `${READ_MAP_DATA}${ADD_TILES}${SHOW_EMPTY}
      const points = data.points;
      const trails = data.trails;
      const mapEl = document.getElementById('map');

      if (!points.length) {
        showEmpty(mapEl, data.emptyMessage, 'padding:16px;text-align:center;');
      } else {
        const map = L.map('map', {
          zoomControl: false,
          attributionControl: false,
        });

        addTiles(map, data.tileUrl);

        // The view has to hold the routes as well as the current fixes —
        // fitting the markers alone cropped a trail that left the frame.
        const boundPoints = points.map(point => [point.lat, point.lng]);
        trails.forEach(trail => {
          trail.path.forEach(step => boundPoints.push([step.lat, step.lng]));
        });
        // The error circles too: a 20 km circle cropped to its centre is the
        // confident pin the circle exists to correct.
        const circleRadius = point =>
          typeof point.accuracy === 'number' && point.accuracy > 0
            ? point.accuracy
            : null;
        points.forEach(point => {
          const radius = circleRadius(point);
          if (radius === null) return;
          const dLat = radius / 111320;
          const dLng =
            radius / (111320 * Math.max(Math.cos((point.lat * Math.PI) / 180), 0.01));
          boundPoints.push(
            [point.lat + dLat, point.lng + dLng],
            [point.lat - dLat, point.lng - dLng],
          );
        });
        map.fitBounds(L.latLngBounds(boundPoints), {
          padding: [48, 48],
          maxZoom: 15,
        });

        // Error circles under everything else, only where the platform gave
        // a radius: a Wi-Fi fix's 50 m is a faint ring, an IP lookup's 20 km
        // is the whole city — which is the honest picture of it.
        points.forEach(point => {
          const radius = circleRadius(point);
          if (radius === null) return;
          const color =
            point.color || (point.kind === 'carried' ? data.accentColor : '#64748B');
          L.circle([point.lat, point.lng], {
            radius,
            color,
            weight: 1,
            opacity: 0.5,
            fillColor: color,
            fillOpacity: 0.08,
            interactive: false,
          }).addTo(map);
        });

        const escapeHtml = value =>
          String(value).replace(/[&<>"']/g, ch => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
          })[ch]);

        // Routes first, so a marker always sits above the line that ends at
        // it rather than being covered by a neighbouring device's path.
        trails.forEach(trail => {
          const path = trail.path.map(step => [step.lat, step.lng]);
          L.polyline(path, {
            color: trail.color,
            weight: trail.carried ? 4 : 3,
            opacity: trail.carried ? 0.9 : 0.55,
            lineJoin: 'round',
            lineCap: 'round',
          }).addTo(map);

          // Where the route began, so a line has a readable direction without
          // arrowheads the WebView would have to draw per segment.
          const start = path[0];
          if (start) {
            L.circleMarker(start, {
              radius: 4,
              color: '#fff',
              weight: 2,
              fillColor: trail.color,
              fillOpacity: 1,
            }).addTo(map);
          }
        });

        points.forEach(point => {
          const carried = point.kind === 'carried';
          const dotStyle = point.color
            ? ' style="background:' + escapeHtml(point.color) + '"'
            : '';
          const chipStyle = point.color && carried
            ? ' style="background:' + escapeHtml(point.color) + ';color:#fff"'
            : '';
          const html =
            '<div class="device-pin">' +
            '<div class="device-dot ' + (carried ? 'device-dot-carried' : 'device-dot-other') + '"' + dotStyle + '></div>' +
            '<div class="device-chip' + (carried ? ' device-chip-carried' : '') + '"' + chipStyle + '>' +
            escapeHtml(point.title) +
            '</div>' +
            '</div>';

          L.marker([point.lat, point.lng], {
            title: point.title,
            icon: L.divIcon({
              className: '',
              html,
              iconSize: [120, 40],
              iconAnchor: [60, carried ? 9 : 6],
            }),
            zIndexOffset: carried ? 200 : 0,
          }).addTo(map);
        });
      }
    `;

/**
 * The child-level map: one marker per device, plus **one route per device**.
 *
 * The polylines are per machine and never joined across them. A line from the
 * phone at school to the tablet at home would draw a journey nobody made —
 * the same refusal `domain/childLocation` makes about the current fix — but
 * one device's own points in time order *are* a route, and drawing them is
 * how a parent reads an afternoon. Each route wears its device's colour, the
 * same one the history list rails and the legend use, so a line and a row are
 * matchable at a glance.
 *
 * The caller windows and caps the points (`domain/locationTrail`); this
 * function draws exactly what it is handed. The carried device gets the ring,
 * the heavier line and the top z-index; the rest stay present but quieter.
 */
export function buildChildDevicesMapHtml(
  points: ChildDevicesMapPoint[],
  tiles: MapTileSource,
  messages: LocationMapMessages,
  accentColor = '#0F766E',
  trails: ChildDeviceTrail[] = [],
): string {
  const softBg = `${accentColor}14`;
  if (!tiles) {
    return missingKeyDocument(softBg, messages.mapUnavailable);
  }

  const data = {
    points,
    // A single-point run is a marker, not a line — filtered here so the page
    // script has nothing degenerate to guard against.
    trails: trails.filter(trail => trail.path.length > 1),
    tileUrl: hereTileUrl(tiles),
    emptyMessage: messages.mapNoLocationsEmpty,
    accentColor,
  };

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    ${LEAFLET_ASSETS}
    <style>
      html, body, #map {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background: ${softBg};
      }
      .leaflet-container {
        background: ${softBg};
        font: 12px -apple-system, BlinkMacSystemFont, sans-serif;
      }
      .device-pin {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
      }
      .device-dot {
        border-radius: 999px;
        border: 2px solid #fff;
        box-shadow: 0 1px 4px rgba(15, 23, 42, 0.25);
      }
      .device-dot-carried {
        width: 18px;
        height: 18px;
        background: ${accentColor};
        box-shadow: 0 0 0 6px ${accentColor}33, 0 1px 4px rgba(15, 23, 42, 0.25);
      }
      .device-dot-other {
        width: 12px;
        height: 12px;
        background: #64748B;
      }
      .device-chip {
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 999px;
        padding: 2px 8px;
        font-weight: 700;
        font-size: 11px;
        background: rgba(255, 255, 255, 0.92);
        color: #0F172A;
        box-shadow: 0 1px 3px rgba(15, 23, 42, 0.2);
      }
      .device-chip-carried {
        background: ${accentColor};
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    ${mapData(data)}
    <script>${CHILD_DEVICES_SCRIPT}</script>
  </body>
</html>`;
}

const PLACE_PICKER_SCRIPT = `${READ_MAP_DATA}${ADD_TILES}
      const map = L.map('map', {
        zoomControl: false,
        attributionControl: false,
      }).setView([data.lat, data.lng], 16);

      L.control.zoom({ position: 'topright' }).addTo(map);

      addTiles(map, data.tileUrl);

      const icon = L.divIcon({
        className: '',
        html: '<div class="pin"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      let marker = L.marker([data.lat, data.lng], { icon: icon, draggable: true }).addTo(map);

      function post(payload) {
        if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
          window.ReactNativeWebView.postMessage(JSON.stringify(payload));
        }
      }

      function postCoords(latlng) {
        post({
          type: 'place_pick',
          latitude: latlng.lat,
          longitude: latlng.lng,
        });
      }

      function setGesture(active) {
        post({ type: 'map_gesture', active: !!active });
      }

      window.__setPlacePicker = function (lat, lng) {
        const next = L.latLng(lat, lng);
        marker.setLatLng(next);
        map.setView(next, Math.max(map.getZoom(), 16));
      };

      marker.on('dragstart', function () { setGesture(true); });
      marker.on('dragend', function () {
        setGesture(false);
        postCoords(marker.getLatLng());
      });

      map.on('click', function (event) {
        marker.setLatLng(event.latlng);
        postCoords(event.latlng);
      });

      map.on('movestart', function () { setGesture(true); });
      map.on('moveend', function () { setGesture(false); });
      map.on('zoomstart', function () { setGesture(true); });
      map.on('zoomend', function () { setGesture(false); });

      document.addEventListener('touchstart', function () { setGesture(true); }, { passive: true });
      document.addEventListener('touchend', function () { setGesture(false); }, { passive: true });
      document.addEventListener('touchcancel', function () { setGesture(false); }, { passive: true });
    `;

export function buildPlacePickerMapHtml(
  latitude: number,
  longitude: number,
  tiles: MapTileSource,
  messages: Pick<LocationMapMessages, 'mapUnavailable'>,
  accentColor = '#0F766E',
): string {
  const softBg = `${accentColor}14`;
  if (!tiles) {
    return missingKeyDocument(softBg, messages.mapUnavailable);
  }

  const data = {
    lat: Number(latitude),
    lng: Number(longitude),
    tileUrl: hereTileUrl(tiles),
  };

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    ${LEAFLET_ASSETS}
    <style>
      html, body, #map {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background: ${softBg};
        touch-action: none;
      }
      .leaflet-container {
        background: ${softBg};
      }
      .leaflet-control-zoom a {
        width: 34px !important;
        height: 34px !important;
        line-height: 34px !important;
        font-size: 18px !important;
      }
      .pin {
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: ${accentColor};
        border: 3px solid #fff;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.35);
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    ${mapData(data)}
    <script>${PLACE_PICKER_SCRIPT}</script>
  </body>
</html>`;
}

/** Every inline script these documents can contain — the hash list's source. */
export const MAP_PAGE_SCRIPTS = [
  MISSING_KEY_SCRIPT,
  HISTORY_SCRIPT,
  CHILD_DEVICES_SCRIPT,
  PLACE_PICKER_SCRIPT,
] as const;
