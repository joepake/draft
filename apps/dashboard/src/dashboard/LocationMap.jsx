import { useEffect, useMemo, useState } from 'react';
import {
  buildLocationHistoryMapHtml,
  buildLocationHistoryMapPoints,
} from '@kidgate/core/domain/locationHistoryMapHtml';
import {
  TRAIL_RENDER_MAX_POINTS,
  buildDeviceTrails,
} from '@kidgate/core/domain/locationTrail';
import { locationHistoryRepository } from '../adapters/repositories.js';

/**
 * The device's route, not its last dot.
 *
 * The map has been real since 2026-09-17 and drew **one point** — the builder
 * has always drawn a polyline, this surface simply never had the history to
 * give it. The phone draws the trail; a console that shows only where a child
 * is now cannot answer the question a parent opens this card with, which is
 * where they have been.
 *
 * ## Why this is its own component
 *
 * **So the read happens only when the card is on screen.** The location
 * history is the one collection here big enough to matter — this console reads
 * once and never watches (`adapters/oneShot.js`), but a read is still a read,
 * and putting it in `useFamilyData` would charge every parent who opens the
 * dashboard for a trail most of them never look at. Mounting is the gate.
 *
 * ## What is reused rather than rewritten
 *
 * - **`buildDeviceTrails`** — the phone's own 24-hour window and 60-point cap
 *   (`domain/locationTrail`), so the two surfaces cannot come to draw
 *   different lengths of the same day. It also drops a point whose timestamp
 *   cannot be read, which has no place in a route.
 * - **`buildLocationHistoryMapPoints`** — the phone's fold from history rows
 *   to map points, including each point's title.
 * - The query asks for `TRAIL_RENDER_MAX_POINTS`, not the repository's default
 *   200: anything past the cap is read, billed and then thrown away before it
 *   is drawn.
 *
 * Three rules from `apps/dashboard/CLAUDE.md` still bind and are unchanged
 * here: the HERE key never enters this bundle (it arrives per session through
 * `useHereMapsKey`), `sandbox` stays **without** `allow-same-origin` so a
 * third-party tile script cannot reach the parent's signed-in origin, and the
 * document takes the builder's default accent, so it is always light.
 */
export default function LocationMap({
  familyId,
  device,
  deviceName,
  hereMapsKey,
  messages,
  title,
  /** Changes when the page is re-read, so the trail follows the Refresh button. */
  reloadKey = 0,
}) {
  const [history, setHistory] = useState([]);
  const deviceId = device?.id ?? null;

  useEffect(() => {
    if (!familyId || !deviceId) {
      setHistory([]);
      return undefined;
    }
    return locationHistoryRepository.subscribe(
      familyId,
      deviceId,
      setHistory,
      // Soft: the facts under the map are read from the device document and
      // stand on their own, and the last fix below still draws a marker. A
      // refused history must not take the card with it.
      e =>
        console.warn('[kidgate] locationHistory read failed:', e?.code || e?.message),
      TRAIL_RENDER_MAX_POINTS,
    );
  }, [familyId, deviceId, reloadKey]);

  const fix = device?.lastLocation ?? null;

  const points = useMemo(() => {
    /*
     * `buildDeviceTrails` answers oldest-first, which is the order a polyline
     * is drawn in; `buildLocationHistoryMapPoints` marks `isLatest` on index 0
     * and therefore wants newest-first. Reversing is what keeps the "you are
     * here" marker on the end of the route the child actually reached.
     */
    const windowed =
      deviceId && history.length
        ? (buildDeviceTrails(
            history.map(entry => ({ ...entry, deviceId })),
            Date.now(),
          )[0]?.points ?? [])
        : [];
    const mapPoints = buildLocationHistoryMapPoints([...windowed].reverse());
    if (mapPoints.length > 0) {
      return mapPoints;
    }
    /*
     * The fallback is what this card drew before it had any history: a device
     * that has just paired, or one whose trail is older than the window, still
     * has a last fix worth a marker. An empty map in its place would read as
     * "no location" over a device that is reporting one.
     */
    if (fix && typeof fix.latitude === 'number' && typeof fix.longitude === 'number') {
      return [
        {
          id: 'last',
          lat: fix.latitude,
          lng: fix.longitude,
          title: fix.placeName || fix.address || deviceName,
          isLatest: true,
        },
      ];
    }
    return [];
  }, [history, deviceId, fix, deviceName]);

  if (points.length === 0) {
    return null;
  }

  return (
    <iframe
      className="loc-map"
      title={title}
      sandbox="allow-scripts"
      srcDoc={buildLocationHistoryMapHtml(points, points[0].id, hereMapsKey, messages)}
    />
  );
}
