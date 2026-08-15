import type { ApiFailure, ApiPort } from '@kidgate/ports/api';
import type { ClockPort } from '@kidgate/ports/clock';
import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { Device } from '@kidgate/schema/device';
import type { ChildDeviceRecord, ParentDeviceRecord } from '@kidgate/schema/firestore';
import {
  childDeviceDoc,
  childDevicesCollection,
  parentDeviceDoc,
  parentDevicesCollection,
} from '@kidgate/schema/paths';
import {
  parseDeviceControls,
  parseDevicePlaces,
  parseLastLocation,
  parseProtectionCounters,
  parseProtectionStatus,
} from '../domain/deviceControlsMapper';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * The family's devices — reading them, renaming them, locking them, removing
 * them.
 *
 * Registering *this* device is a separate concern and lives in
 * `deviceRegistration.ts`: it needs the platform's identity, capabilities and
 * locale, none of which this file can obtain or should know about. The split
 * follows the question each answers — "what devices does this family have"
 * versus "who am I".
 */

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

/** Clamp a percentage written by the child device. */
function parseBatteryLevel(value: unknown): number | undefined {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return undefined;
  }
  // Clamped rather than trusted: this field is written by the child device, and
  // a bad reading rendering as "-3%" or "740%" on the parent's card is worse
  // than rendering as nothing.
  return Math.min(100, Math.max(0, Math.round(value)));
}

/**
 * A device's display name.
 *
 * Falls through the three things that might identify it, because each is
 * absent on some platform: a parent-chosen name, the name the child gave the
 * hardware, then the model. Empty when the device has reported none of them
 * and the UI supplies its own fallback in the reader's language.
 */
function deviceName(data: Record<string, unknown>): string {
  return text(data.name) ?? text(data.deviceLabel) ?? text(data.modelName) ?? '';
}

function mapParentDevice(doc: DocSnapshot): ParentDeviceRecord {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  return {
    deviceId: doc.id,
    name: deviceName(data),
    platform: data.platform,
    modelName: text(data.modelName),
    deviceLabel: text(data.deviceLabel),
    osVersion: text(data.osVersion),
    lastActiveAt: timestampToIso(data.lastActiveAt) ?? '',
    createdAt: timestampToIso(data.createdAt) ?? '',
  } as ParentDeviceRecord;
}

/**
 * A stored child device, exactly as Firestore holds it.
 *
 * `places`, `protectionStatus`, `protectionCounters` and
 * `webFilterBlockedCount` are declared on `ChildDeviceRecord` and were dropped
 * here — every consumer reads them off the record (`toDeviceView` in
 * `apps/mobile`, the dashboard's device card), so omitting them emptied the
 * Place Alerts screen and the protection panel without failing anything that
 * typechecks or tests. Each app shapes its own view from this; none of them
 * re-reads the document.
 */
function mapChildDevice(doc: DocSnapshot): ChildDeviceRecord {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const lastLocation = parseLastLocation(data);
  const protectionStatus = parseProtectionStatus(data);

  return {
    places: parseDevicePlaces(data),
    ...(protectionStatus ? { protectionStatus } : {}),
    protectionCounters: parseProtectionCounters(data),
    webFilterBlockedCount:
      typeof data.webFilterBlockedCount === 'number' ? data.webFilterBlockedCount : 0,
    /*
     * The device's own capability probe, passed through unparsed and absent
     * when there is none. Only the desktop agent writes one today; a phone
     * publishes permission statuses instead. Absent therefore means "this
     * device does not publish a probe", never "this device cannot" — the
     * distinction `timelineAvailability` turns into two different sentences.
     */
    ...(data.capabilities && typeof data.capabilities === 'object'
      ? { capabilities: data.capabilities as ChildDeviceRecord['capabilities'] }
      : {}),
    deviceId: doc.id,
    name: deviceName(data),
    // Unassign writes '' rather than deleting the key, so an empty string and
    // an absent field mean the same thing here: belongs to nobody.
    ...(typeof data.childId === 'string' && data.childId
      ? { childId: data.childId }
      : {}),
    platform: data.platform,
    modelName: text(data.modelName),
    deviceLabel: text(data.deviceLabel),
    osVersion: text(data.osVersion),
    status: data.status,
    isLocked: data.isLocked === true,
    lastActiveAt: timestampToIso(data.lastActiveAt) ?? '',
    createdAt: timestampToIso(data.createdAt) ?? '',
    controls: parseDeviceControls(data),
    ...(lastLocation ? { lastLocation } : {}),
    parentPinFailedAttempts:
      typeof data.parentPinFailedAttempts === 'number'
        ? data.parentPinFailedAttempts
        : 0,
    parentPinLocked: data.parentPinLocked === true,
    batteryLevel: parseBatteryLevel(data.batteryLevel),
    batteryCharging:
      typeof data.batteryCharging === 'boolean' ? data.batteryCharging : undefined,
    batteryUpdatedAt: timestampToIso(data.batteryUpdatedAt),
  } as ChildDeviceRecord;
}

/** Everything a device removal has to clean up alongside the device document. */
export interface DeviceCascadeDeps {
  deleteForDevice(userId: string, deviceId: string): Promise<void>;
}

export interface DeviceRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
  clock: ClockPort;
  /**
   * Collections that hang off a device and must go with it.
   *
   * Passed in rather than imported: the legacy repository reached directly into
   * five others, which made this file the hub of a cycle — `device` imported
   * `rewardTask`, and `rewardTask`'s error handling imported `control`, which
   * imported `device` back. Injection makes the fan-out visible where the app
   * is assembled, and lets a test count what got cleaned up.
   */
  cascades: readonly DeviceCascadeDeps[];
}

export function createDeviceRepository(deps: DeviceRepositoryDeps) {
  const { db, api, clock, cascades } = deps;

  return {
    async fetchChildDevices(userId: string): Promise<ChildDeviceRecord[]> {
      const snapshot = await db.getDocs(childDevicesCollection(userId));
      return snapshot.docs.map(mapChildDevice);
    },

    async fetchChildDevice(
      userId: string,
      deviceId: string,
    ): Promise<ChildDeviceRecord | null> {
      const snapshot = await db.getDoc(childDeviceDoc(userId, deviceId));
      return snapshot.exists ? mapChildDevice(snapshot) : null;
    },

    subscribeChildDevices(
      userId: string,
      onDevices: (devices: ChildDeviceRecord[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        childDevicesCollection(userId),
        {},
        snapshot => onDevices(snapshot.docs.map(mapChildDevice)),
        onError,
      );
    },

    subscribeChildDevice(
      userId: string,
      deviceId: string,
      onDevice: (device: ChildDeviceRecord | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onDoc(
        childDeviceDoc(userId, deviceId),
        snapshot => onDevice(snapshot.exists ? mapChildDevice(snapshot) : null),
        onError,
      );
    },

    async fetchParentDevices(userId: string): Promise<ParentDeviceRecord[]> {
      const snapshot = await db.getDocs(parentDevicesCollection(userId));
      return snapshot.docs.map(mapParentDevice);
    },

    subscribeParentDevices(
      userId: string,
      onDevices: (devices: ParentDeviceRecord[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        parentDevicesCollection(userId),
        {},
        snapshot => onDevices(snapshot.docs.map(mapParentDevice)),
        onError,
      );
    },

    subscribeParentDevice(
      userId: string,
      deviceId: string,
      onDevice: (device: ParentDeviceRecord | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onDoc(
        parentDeviceDoc(userId, deviceId),
        snapshot => onDevice(snapshot.exists ? mapParentDevice(snapshot) : null),
        onError,
      );
    },

    async updateChildDeviceName(
      userId: string,
      deviceId: string,
      name: string,
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), { name: name.trim() });
    },

    async updateParentDeviceName(
      userId: string,
      deviceId: string,
      name: string,
    ): Promise<void> {
      await db.updateDoc(parentDeviceDoc(userId, deviceId), { name: name.trim() });
    },

    /**
     * Lock or unlock a child device.
     *
     * Server-side without exception: the lock is the product, and a child
     * device holds the family owner's uid, so a client write could not be told
     * apart from a parent's.
     *
     * The legacy version matched **six** English substrings of the server's
     * error text to decide whether to re-register and retry — two more than the
     * copy in `ControlRepository`, which is what happens to duplicated string
     * matching over time. `ApiPort` reports `code: 'staleCredential'` and the
     * adapter owns the recovery.
     */
    async toggleLock(
      userId: string,
      deviceId: string,
      locked: boolean,
    ): Promise<ChildDeviceRecord> {
      const current = await this.fetchChildDevice(userId, deviceId);
      if (!current) {
        const failure: ApiFailure = {
          code: 'notFound',
          messageKey: 'family.deviceNotFoundError',
        };
        throw failure;
      }

      if (current.isLocked === locked) {
        return current;
      }

      await api.post(
        '/setDeviceLock',
        { deviceId, locked, familyOwnerUserId: userId },
        { as: 'parent' },
      );

      return {
        ...current,
        isLocked: locked,
        status: locked ? 'locked' : 'online',
        lastActiveAt: new Date(clock.now()).toISOString(),
      };
    },

    async resetParentPinLockout(userId: string, deviceId: string): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        parentPinFailedAttempts: 0,
        parentPinLocked: false,
      });
    },

    async updatePlaces(
      userId: string,
      deviceId: string,
      places: Device['places'],
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        places: (places ?? []).map(place => ({ ...place })),
      });
    },

    async updateWebFilterBlockedCount(
      userId: string,
      deviceId: string,
      count: number,
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        webFilterBlockedCount: Math.max(0, Math.floor(count)),
      });
    },

    async deleteParentDevice(userId: string, deviceId: string): Promise<void> {
      await db.deleteDoc(parentDeviceDoc(userId, deviceId));
    },

    /**
     * Remove a child device and everything hanging off it.
     *
     * The subcollections go first. A device document removed before its
     * requests, tasks, alerts and check-ins leaves those orphaned under a
     * device id nothing resolves — invisible to every screen, still billed for,
     * and still readable by anyone who reconstructs the path.
     */
    async deleteChildDevice(userId: string, deviceId: string): Promise<void> {
      await Promise.all(
        cascades.map(cascade => cascade.deleteForDevice(userId, deviceId)),
      );
      await db.deleteDoc(childDeviceDoc(userId, deviceId));
    },
  };
}

export type DeviceRepository = ReturnType<typeof createDeviceRepository>;
