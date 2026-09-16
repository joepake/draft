import { useMemo } from 'react';
import { getEffectiveDeviceStatus } from '@kidgate/core/domain/deviceStatus';
import { getProtectionSummaryKeys } from '@kidgate/core/domain/protectionStatus';
import { isWithinAnyScheduleWindow } from '@kidgate/core/domain/scheduleWindow';
import {
  buildChildUrgencyPills,
  buildFamilySummaryChips,
} from '@kidgate/core/domain/familySummary';

/**
 * The Family screen's summary row, and the per-child urgency pills under each
 * name — the web half of what `apps/mobile`'s `FamilyScreen` puts above and
 * inside its child cards.
 *
 * **Which chip, in what order, in what tone is not decided here.** That is
 * `@kidgate/core/domain/familySummary`, shared with the phone, because the
 * ordering rule is a product decision that is easy to get subtly wrong twice:
 * urgency first (a horizontal row clips whatever is last, and the one chip
 * that must never be clipped is SOS), healthy counts neutral and trailing.
 *
 * What IS this file's: folding the family's documents into those counts, and
 * drawing them.
 */

/** A device is inside a blocked-hours window right now. */
function inBlockedHours(device, position) {
  const controls = device?.controls;
  if (!controls?.scheduleEnabled) return false;
  return isWithinAnyScheduleWindow(controls.scheduleWindows ?? [], position);
}

/**
 * The viewer's own clock, as the shape `scheduleWindow` compares against.
 *
 * A blocked hour is a wall-clock window — 21:00 on the phone is 21:00 on the
 * TV — so the browser's local time is the right reading, and the same one the
 * phone takes from `ServerTime.date()`.
 */
function clockPosition(now) {
  return {
    minutesSinceMidnight: now.getHours() * 60 + now.getMinutes(),
    weekday: now.getDay(),
  };
}

/**
 * Every count the row and the pills need, folded once.
 *
 * Once, and not per card: `getProtectionSummaryKeys` walks a device's whole
 * permission checklist, and calling it again inside each child row would run
 * it twice for every machine — the same reason the child hub reads it into a
 * `protectionByDevice` map rather than asking three times.
 */
export function useFamilyCounts({ devices, timeRequests, checkIns, sosAlerts }) {
  return useMemo(() => {
    const now = Date.now();
    const position = clockPosition(new Date(now));

    /** deviceId → what that machine contributes. */
    const byDevice = new Map();
    for (const device of devices) {
      const status = getEffectiveDeviceStatus(device, now);
      const level = getProtectionSummaryKeys(device, now).level;
      byDevice.set(device.id, {
        online: status === 'online' || status === 'locked',
        level,
        blocked: inBlockedHours(device, position),
      });
    }

    const pendingRequestsByDevice = new Map();
    for (const request of timeRequests) {
      if (request.status && request.status !== 'pending') continue;
      pendingRequestsByDevice.set(
        request.deviceId,
        (pendingRequestsByDevice.get(request.deviceId) ?? 0) + 1,
      );
    }

    /* A device, not a row: two unanswered check-ins on one phone is still one
       phone waiting, which is what the chip counts. */
    const pendingCheckInDeviceIds = new Set(
      checkIns.filter(row => row.status === 'pending').map(row => row.deviceId),
    );

    const sosDeviceIds = new Set(sosAlerts.map(alert => alert.deviceId));

    let online = 0;
    let healthInactive = 0;
    let healthWarn = 0;
    let protectedCount = 0;
    let blockedHours = 0;
    for (const facts of byDevice.values()) {
      if (facts.online) online += 1;
      if (facts.level === 'inactive') healthInactive += 1;
      else if (facts.level === 'warning') healthWarn += 1;
      else protectedCount += 1;
      if (facts.blocked) blockedHours += 1;
    }

    let requests = 0;
    for (const count of pendingRequestsByDevice.values()) requests += count;

    return {
      byDevice,
      pendingRequestsByDevice,
      pendingCheckInDeviceIds,
      sosDeviceIds,
      chips: buildFamilySummaryChips({
        sos: sosAlerts.length,
        healthInactive,
        requests,
        checkIn: pendingCheckInDeviceIds.size,
        healthWarn,
        blockedHours,
        devices: devices.length,
        online,
        protected: protectedCount,
      }),
    };
  }, [devices, timeRequests, checkIns, sosAlerts]);
}

/** One child's share of those counts, as the pills the phone draws. */
export function childPills(counts, childDevices) {
  let inactive = 0;
  let warn = 0;
  let requests = 0;
  let checkIn = 0;
  for (const device of childDevices) {
    const facts = counts.byDevice.get(device.id);
    if (facts?.level === 'inactive') inactive += 1;
    else if (facts?.level === 'warning') warn += 1;
    requests += counts.pendingRequestsByDevice.get(device.id) ?? 0;
    if (counts.pendingCheckInDeviceIds.has(device.id)) checkIn += 1;
  }
  return buildChildUrgencyPills({
    inactive,
    requests,
    checkIn,
    warn,
    /* Left to the phone for now: the four causes behind a missing position
       need `childLocation`'s resolution and the carried-device designation,
       neither of which this surface reads yet
       (`apps/dashboard/CLAUDE.md`). */
    locationBlocked: false,
  });
}

/**
 * The row itself. Renders nothing for a family with no device — the caller
 * shows its own "nothing paired yet" card instead of a row of zeroes.
 */
export default function FamilySummaryRow({ chips, appT, onChipPress }) {
  if (chips.length === 0) return null;
  return (
    <div className="family-chips">
      {chips.map(chip => {
        const label = appT(chip.labelKey, { count: chip.count });
        /* A reading is not a door. The three healthy counts render as text so
           a pointer never invites a click that would land a parent somewhere
           they did not ask to be. */
        if (!chip.actionable) {
          return (
            <span className={`chip tone-${chip.tone}`} key={chip.key}>
              {label}
            </span>
          );
        }
        return (
          <button
            type="button"
            className={`chip tone-${chip.tone} is-action`}
            key={chip.key}
            onClick={() => onChipPress(chip.key)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

/** The pills under one child's name. */
export function ChildPills({ pills, appT }) {
  if (pills.length === 0) return null;
  return (
    <span className="kid-pills">
      {pills.map(pill => (
        <span className={`kid-pill tone-${pill.tone}`} key={pill.key}>
          {appT(pill.labelKey, { count: pill.count })}
        </span>
      ))}
    </span>
  );
}
