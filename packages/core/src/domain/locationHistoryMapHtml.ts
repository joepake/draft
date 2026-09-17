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

function buildHereTileLayerScript(hereApiKey: string): string {
  const escapedKey = hereApiKey.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `
        L.tileLayer(
          'https://maps.hereapi.com/v3/base/mc/{z}/{x}/{y}/png8?style=explore.day&size=256&apiKey=${escapedKey}',
          { maxZoom: 19 }
        ).addTo(map);
  `;
}

function missingKeyDocument(softBg: string, message: string): string {
  const emptyMessage = JSON.stringify(message);
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
    <script>document.body.textContent = ${emptyMessage};</script>
  </body>
</html>`;
}

export function buildLocationHistoryMapHtml(
  points: LocationHistoryMapPoint[],
  highlightId: string | null | undefined,
  hereApiKey: string | null,
  messages: LocationMapMessages,
  accentColor = '#0F766E',
  accentSecondary = '#0369A1',
): string {
  const softBg = `${accentColor}14`;
  if (!hereApiKey) {
    return missingKeyDocument(softBg, messages.mapUnavailable);
  }

  const payload = JSON.stringify(points);
  const focusId = JSON.stringify(highlightId ?? null);
  const tileLayerScript = buildHereTileLayerScript(hereApiKey);
  const emptyMessage = JSON.stringify(messages.mapNoLocationsEmpty);

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
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
    <script>
      const points = ${payload};
      const focusId = ${focusId};
      const mapEl = document.getElementById('map');

      if (!points.length) {
        mapEl.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#475569;font:600 14px -apple-system,sans-serif;">' + ${emptyMessage} + '</div>';
      } else {
        const map = L.map('map', {
          zoomControl: false,
          attributionControl: false,
        });

        ${tileLayerScript}

        const path = points
          .slice()
          .reverse()
          .map(point => [point.lat, point.lng]);

        if (path.length > 1) {
          L.polyline(path, {
            color: '${accentColor}',
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
    </script>
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
  hereApiKey: string | null,
  messages: LocationMapMessages,
  accentColor = '#0F766E',
  trails: ChildDeviceTrail[] = [],
): string {
  const softBg = `${accentColor}14`;
  if (!hereApiKey) {
    return missingKeyDocument(softBg, messages.mapUnavailable);
  }

  const payload = JSON.stringify(points);
  // A single-point run is a marker, not a line — filtered here so the page
  // script has nothing degenerate to guard against.
  const trailPayload = JSON.stringify(trails.filter(trail => trail.path.length > 1));
  const tileLayerScript = buildHereTileLayerScript(hereApiKey);
  const emptyMessage = JSON.stringify(messages.mapNoLocationsEmpty);

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
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
    <script>
      const points = ${payload};
      const trails = ${trailPayload};
      const mapEl = document.getElementById('map');

      if (!points.length) {
        mapEl.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#475569;font:600 14px -apple-system,sans-serif;padding:16px;text-align:center;">' + ${emptyMessage} + '</div>';
      } else {
        const map = L.map('map', {
          zoomControl: false,
          attributionControl: false,
        });

        ${tileLayerScript}

        // The view has to hold the routes as well as the current fixes —
        // fitting the markers alone cropped a trail that left the frame.
        const boundPoints = points.map(point => [point.lat, point.lng]);
        trails.forEach(trail => {
          trail.path.forEach(step => boundPoints.push([step.lat, step.lng]));
        });
        map.fitBounds(L.latLngBounds(boundPoints), {
          padding: [48, 48],
          maxZoom: 15,
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
            ? ' style="background:' + point.color + '"'
            : '';
          const chipStyle = point.color && carried
            ? ' style="background:' + point.color + ';color:#fff"'
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
    </script>
  </body>
</html>`;
}

export function buildPlacePickerMapHtml(
  latitude: number,
  longitude: number,
  hereApiKey: string | null,
  messages: Pick<LocationMapMessages, 'mapUnavailable'>,
  accentColor = '#0F766E',
): string {
  const softBg = `${accentColor}14`;
  if (!hereApiKey) {
    return missingKeyDocument(softBg, messages.mapUnavailable);
  }

  const tileLayerScript = buildHereTileLayerScript(hereApiKey);
  const lat = Number(latitude);
  const lng = Number(longitude);

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
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
    <script>
      const map = L.map('map', {
        zoomControl: false,
        attributionControl: false,
      }).setView([${lat}, ${lng}], 16);

      L.control.zoom({ position: 'topright' }).addTo(map);

      ${tileLayerScript}

      const icon = L.divIcon({
        className: '',
        html: '<div class="pin"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      let marker = L.marker([${lat}, ${lng}], { icon: icon, draggable: true }).addTo(map);

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
    </script>
  </body>
</html>`;
}
