import { useEffect, useMemo, useState } from 'react';
import { buildChildDevicesMapHtml } from '@kidgate/core/domain/locationHistoryMapHtml';
import {
  TRAIL_RENDER_MAX_POINTS,
  buildDeviceTrails,
} from '@kidgate/core/domain/locationTrail';
import {
  childLocationPausedChoiceNote,
  resolveChildLocationView,
} from '@kidgate/core/domain/childLocation';
import { supportsLocation } from '@kidgate/core/domain/locationSupport';
import { supportsRing } from '@kidgate/core/domain/ringSupport';
import { getSeriesSwatch } from '@kidgate/tokens/accents';
import Icon from '@kidgate/web-ui/Icon';
import { locationHistoryRepository } from '../adapters/repositories.js';
import HereMapFrame from './HereMapFrame.jsx';
import { mapTiles } from './hereTiles.js';

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
  messages,
  title,
  appT,
  reloadKey = 0,
  /** Absent draws no Ring button — a preview with no actions. */
  onRing,
  ringBusy = false,
}) {
  const capable = useMemo(
    () => (childDevices ?? []).filter(supportsLocation),
    [childDevices],
  );
  const view = useMemo(
    () => resolveChildLocationView(child, childDevices ?? []),
    [child, childDevices],
  );
  const carriedId = view.carried?.id ?? null;
  // Whose fix is drawn when the designated device is paused — the phone's line.
  const pausedNote = childLocationPausedChoiceNote(view);
  // The phone's `ChildLocationScreen`: ring the device a refresh would ask —
  // the one the child carries — and only from a build that answers it.
  const refreshTarget = view.carried ?? capable[0] ?? null;
  const ringTarget =
    onRing && refreshTarget && supportsRing(refreshTarget) ? refreshTarget : null;
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
      {pausedNote && appT ? (
        <p className="muted">{appT(pausedNote.key, pausedNote.params)}</p>
      ) : null}
      {/* The document takes the builder's default accent, so it is always
          light. The sandbox and the tiles are `HereMapFrame`'s. */}
      <HereMapFrame
        className="loc-map loc-map-tall"
        title={title}
        html={buildChildDevicesMapHtml(points, mapTiles, messages, undefined, trails)}
      />
      {ringTarget ? (
        <button
          type="button"
          className="btn btn-block"
          disabled={ringBusy}
          onClick={() => onRing(ringTarget)}
        >
          <Icon name="bell" size={14} />
          {appT('location.ringButton')}
        </button>
      ) : null}
    </section>
  );
}
