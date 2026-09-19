import { useEffect, useMemo, useState } from 'react';
import { buildChildDevicesMapHtml } from '@kidgate/core/domain/locationHistoryMapHtml';
import {
  TRAIL_RENDER_MAX_POINTS,
  buildDeviceTrails,
} from '@kidgate/core/domain/locationTrail';
import { resolveChildLocationView } from '@kidgate/core/domain/childLocation';
import { supportsLocation } from '@kidgate/core/domain/locationSupport';
import { getSeriesSwatch } from '@kidgate/tokens/accents';
import { locationHistoryRepository } from '../adapters/repositories.js';

/**
 * The child's afternoon, across every machine they carry.
 *
 * **This is the screen the phone opens, not a map bolted onto the hub.**
 * `ChildDetailScreen` draws no map at all; `ChildLocationScreen` does, and it
 * is reached from the Location card. So the hub's Location card lands here
 * (2026-09-18) instead of falling into whichever single device happened to
 * support the action — which is what it did, and what made a child with a
 * phone and a tablet answer for one of them.
 *
 * ## One line per device, never one across them
 *
 * `buildChildDevicesMapHtml` draws a polyline per machine and the refusal is
 * the point: a segment from the phone at school to the tablet at home is a
 * journey nobody made. Same refusal `domain/childLocation` makes about the
 * current fix, where "latest update wins" is the bug — the home tablet
 * out-reports the phone the child is actually carrying.
 *
 * Colours come from **`getSeriesSwatch`**, the same series the phone rails its
 * history list with, indexed the same way (position in the capable list). That
 * palette is searched for separation under deuteranope and protanope vision
 * (`packages/tokens`, `seriesAccents.test.ts`); the accent picker's own order
 * is not — its second and third entries are two blues, indistinguishable as
 * map lines, which is the one thing telling a five-device trail apart.
 *
 * ## What it costs, and when
 *
 * One read per capable device, `TRAIL_RENDER_MAX_POINTS` rows each, **on
 * mount**. This console reads once and never watches (`adapters/oneShot.js`),
 * and mounting is the gate: a parent pays for this only by opening it. That is
 * why it is a panel rather than a card on the hub — a map sitting on the hub
 * would bill every child a parent taps.
 */
export default function ChildLocationPanel({
  familyId,
  child,
  childDevices,
  hereMapsKey,
  messages,
  title,
  reloadKey = 0,
}) {
  const capable = useMemo(
    () => (childDevices ?? []).filter(supportsLocation),
    [childDevices],
  );
  const carriedId = useMemo(
    () => resolveChildLocationView(child, childDevices ?? []).carried?.id ?? null,
    [child, childDevices],
  );
  /** `{ [deviceId]: entries }`, filled as each device's read answers. */
  const [historyByDevice, setHistoryByDevice] = useState({});

  const capableIdKey = capable.map(device => device.id).join(',');
  useEffect(() => {
    if (!familyId || !capableIdKey) {
      setHistoryByDevice({});
      return undefined;
    }
    setHistoryByDevice({});
    const stops = capableIdKey.split(',').map(deviceId =>
      locationHistoryRepository.subscribe(
        familyId,
        deviceId,
        entries => setHistoryByDevice(current => ({ ...current, [deviceId]: entries })),
        // Soft, and per device: one machine's refused history must not take
        // the other machines' routes off the map with it.
        e =>
          console.warn(
            '[kidgate] childLocationHistory read failed:',
            deviceId,
            e?.code || e?.message,
          ),
        TRAIL_RENDER_MAX_POINTS,
      ),
    );
    return () => stops.forEach(stop => stop());
  }, [familyId, capableIdKey, reloadKey]);

  const { points, trails } = useMemo(() => {
    const colorOf = deviceId => {
      const index = capable.findIndex(device => device.id === deviceId);
      return getSeriesSwatch(index < 0 ? 0 : index);
    };
    const merged = capable.flatMap(device =>
      (historyByDevice[device.id] ?? []).map(entry => ({
        ...entry,
        deviceId: device.id,
      })),
    );
    /*
     * The phone's own window and cap, applied per device by the shared
     * splitter — so the two surfaces cannot come to draw different lengths of
     * the same day, and no line is ever joined across two machines.
     */
    const byDevice = buildDeviceTrails(merged, Date.now());
    const nameOf = deviceId =>
      capable.find(device => device.id === deviceId)?.name ?? deviceId;

    return {
      points: byDevice.map(trail => {
        // The newest point of each run is where that machine is, and
        // `buildDeviceTrails` answers oldest-first.
        const last = trail.points[trail.points.length - 1];
        return {
          id: `${trail.deviceId}-latest`,
          lat: last.latitude,
          lng: last.longitude,
          title: nameOf(trail.deviceId),
          /* `carried` is the machine `childLocation` says the child actually
             has on them; everything else is a fix of equal weight, which is
             the refusal-to-pick drawn rather than hidden. */
          kind: trail.deviceId === carriedId ? 'carried' : 'other',
          color: colorOf(trail.deviceId),
        };
      }),
      trails: byDevice.map(trail => ({
        deviceId: trail.deviceId,
        path: trail.points.map(point => ({
          lat: point.latitude,
          lng: point.longitude,
        })),
        color: colorOf(trail.deviceId),
        carried: trail.deviceId === carriedId,
      })),
    };
  }, [capable, historyByDevice, carriedId]);

  return (
    <section className="child-location">
      {/* Same three rules as the device map: the HERE key never enters this
          bundle, `sandbox` stays WITHOUT `allow-same-origin` so a tile script
          cannot reach the parent's signed-in origin, and the document takes
          the builder's default accent, so it is always light. */}
      <iframe
        className="loc-map loc-map-tall"
        title={title}
        sandbox="allow-scripts"
        srcDoc={buildChildDevicesMapHtml(
          points,
          hereMapsKey,
          messages,
          undefined,
          trails,
        )}
      />
    </section>
  );
}
