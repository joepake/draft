import type { FirestorePort } from '@kidgate/ports/firestore';
import type { StoragePort } from '@kidgate/ports/storage';
import type { AppLanguage } from '@kidgate/schema/language';
import { DEFAULT_DEVICE_CONTROLS } from '@kidgate/schema/deviceControls';
import type { DeviceFormFactor, DevicePlatform } from '@kidgate/schema/capabilities';
import {
  childDeviceDoc,
  familyMemberDoc,
  parentDeviceDoc,
} from '@kidgate/schema/paths';

/**
 * Registering *this* device, and keeping its row current.
 *
 * Split from `device.ts` on the question each answers: that file is "what
 * devices does this family have", this one is "who am I". Only this half needs
 * the platform — its identity, its locale, its push token — and all of it
 * arrives as arguments so the file itself stays runnable anywhere.
 */

const DEVICE_ID_STORAGE_KEY = 'kidgate.deviceId';

export type DeviceRole = 'parent' | 'child';

/** What the platform knows about the hardware it is running on. */
export interface DeviceIdentity {
  platform: DevicePlatform;
  /**
   * Phone or tablet. Absent when nothing on the device could tell — see
   * `resolveDeviceFormFactor`, which returns undefined rather than guessing
   * phone, so an unknown never overwrites a stored `tablet` with a wrong value.
   */
  formFactor?: DeviceFormFactor;
  /** Marketing name — "iPhone 15". Absent where the OS will not say. */
  modelName?: string;
  /** The name the owner gave the hardware. Often the only recognisable label. */
  deviceLabel?: string;
  osVersion?: string;
}

export interface DeviceRegistrationRepositoryDeps {
  db: FirestorePort;
  storage: StoragePort;
  /**
   * A fresh opaque id, used the first time this install registers.
   *
   * Injected because a device id must be unguessable and every platform has a
   * different way of producing one — and because a test needs it to be stable.
   */
  newDeviceId: () => string;
}

export function createDeviceRegistrationRepository(
  deps: DeviceRegistrationRepositoryDeps,
) {
  const { db, storage, newDeviceId } = deps;

  return {
    /**
     * The stable id for this install.
     *
     * Persisted locally and never derived from hardware identifiers: those
     * change on restore, are restricted on both platforms, and would let two
     * families' records collide on a refurbished handset.
     */
    async getOrCreateDeviceId(): Promise<string> {
      const existing = await storage.get(DEVICE_ID_STORAGE_KEY);
      if (existing) {
        return existing;
      }

      const created = newDeviceId();
      await storage.set(DEVICE_ID_STORAGE_KEY, created);
      return created;
    },

    async registerParentDevice(
      userId: string,
      deviceId: string,
      identity: DeviceIdentity,
      name: string,
    ): Promise<void> {
      const now = db.fieldValues.serverTimestamp();
      await db.setDoc(
        parentDeviceDoc(userId, deviceId),
        {
          deviceId,
          name,
          platform: identity.platform,
          lastActiveAt: now,
          // `createdAt` only on first write — a merge that re-stamped it would
          // make every device look newly added on the parent's device list.
          createdAt: now,
          ...(identity.formFactor ? { formFactor: identity.formFactor } : {}),
          ...(identity.modelName ? { modelName: identity.modelName } : {}),
          ...(identity.deviceLabel ? { deviceLabel: identity.deviceLabel } : {}),
          ...(identity.osVersion ? { osVersion: identity.osVersion } : {}),
        },
        { merge: true },
      );
    },

    /**
     * Register this install as a child device.
     *
     * Reads the existing document first and carries `isLocked` and `controls`
     * forward: re-registering happens on every launch, and resetting either
     * would unlock a locked phone or wipe a parent's settings simply because
     * the child opened the app.
     */
    async registerChildDevice(
      userId: string,
      deviceId: string,
      identity: DeviceIdentity,
      name: string,
    ): Promise<void> {
      const snapshot = await db.getDoc(childDeviceDoc(userId, deviceId));
      const existing = (snapshot.data() ?? {}) as Record<string, unknown>;
      const isLocked = existing.isLocked === true;
      const now = db.fieldValues.serverTimestamp();

      await db.setDoc(
        childDeviceDoc(userId, deviceId),
        {
          deviceId,
          name,
          platform: identity.platform,
          status: isLocked ? 'locked' : 'online',
          isLocked,
          controls: existing.controls ?? DEFAULT_DEVICE_CONTROLS,
          lastActiveAt: now,
          ...(snapshot.exists ? {} : { createdAt: now }),
          ...(identity.formFactor ? { formFactor: identity.formFactor } : {}),
          ...(identity.modelName ? { modelName: identity.modelName } : {}),
          ...(identity.deviceLabel ? { deviceLabel: identity.deviceLabel } : {}),
          ...(identity.osVersion ? { osVersion: identity.osVersion } : {}),
        },
        { merge: true },
      );
    },

    /**
     * Refresh this parent device's row, and mirror the heartbeat onto family
     * membership when the signed-in account is a joined parent rather than the
     * owner.
     *
     * The mirror exists so the owner's family screen can show when a
     * co-parent was last active: a joined parent's device document lives under
     * their own uid, which the owner cannot read.
     *
     * Does nothing when the device has never registered — a heartbeat must not
     * create a device row that registration has not written yet.
     */
    async syncParentDevice(
      userId: string,
      deviceId: string,
      identity: DeviceIdentity,
      options: {
        /** Already resolved by the caller, which owns naming rules. */
        name?: string;
        /**
         * Quiet hours and the weekly digest's "local evening" gate both read
         * this, and the token write that first sets it may not run for months.
         */
        utcOffsetMinutes: number;
        /** The family this account belongs to, if it is not their own. */
        memberFamilyId?: string | null;
        /** Person name, shown to the owner beside the co-parent's device. */
        personName?: string | null;
      },
    ): Promise<void> {
      const snapshot = await db.getDoc(parentDeviceDoc(userId, deviceId));
      if (!snapshot.exists) {
        return;
      }

      await db.setDoc(
        parentDeviceDoc(userId, deviceId),
        {
          lastActiveAt: db.fieldValues.serverTimestamp(),
          utcOffsetMinutes: options.utcOffsetMinutes,
          ...(options.name ? { name: options.name } : {}),
          ...(identity.formFactor ? { formFactor: identity.formFactor } : {}),
          ...(identity.modelName ? { modelName: identity.modelName } : {}),
          ...(identity.deviceLabel ? { deviceLabel: identity.deviceLabel } : {}),
          ...(identity.osVersion ? { osVersion: identity.osVersion } : {}),
        },
        { merge: true },
      );

      const memberFamilyId = options.memberFamilyId?.trim();
      if (!memberFamilyId || memberFamilyId === userId) {
        return;
      }

      // Best effort: the owner seeing a slightly stale "last active" is a much
      // smaller problem than a heartbeat that fails and takes the app with it.
      await db
        .setDoc(
          familyMemberDoc(memberFamilyId, userId),
          {
            lastActiveAt: db.fieldValues.serverTimestamp(),
            platform: identity.platform,
            ...(identity.osVersion ? { osVersion: identity.osVersion } : {}),
            ...(options.name ? { deviceName: options.name } : {}),
            ...(options.personName ? { label: options.personName } : {}),
          },
          { merge: true },
        )
        .catch(() => undefined);
    },

    /**
     * Mark the child device as alive.
     *
     * Only `lastActiveAt`. The parent's list reads "offline" from the age of
     * this stamp, so a heartbeat that also wrote status could report a phone as
     * online from a background task while it sat in a drawer.
     */
    async updateChildDeviceHeartbeat(userId: string, deviceId: string): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        lastActiveAt: db.fieldValues.serverTimestamp(),
      });
    },

    /**
     * Report what the child device can currently enforce.
     *
     * Written alongside identity and a heartbeat because they all come from the
     * same on-device check: the parent's protection card reads this, and a
     * status without a fresh `lastActiveAt` looks like a device that stopped
     * reporting rather than one that is protected.
     */
    async updateChildProtectionStatus(
      userId: string,
      deviceId: string,
      identity: DeviceIdentity,
      status: Record<string, unknown>,
    ): Promise<void> {
      const now = db.fieldValues.serverTimestamp();
      await db.setDoc(
        childDeviceDoc(userId, deviceId),
        {
          lastActiveAt: now,
          protectionStatus: { ...status, lastCheckedAt: now },
          ...(identity.formFactor ? { formFactor: identity.formFactor } : {}),
          ...(identity.modelName ? { modelName: identity.modelName } : {}),
          ...(identity.deviceLabel ? { deviceLabel: identity.deviceLabel } : {}),
          ...(identity.osVersion ? { osVersion: identity.osVersion } : {}),
        },
        { merge: true },
      );
    },

    async updateChildDeviceIdentity(
      userId: string,
      deviceId: string,
      identity: DeviceIdentity,
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(userId, deviceId), {
        platform: identity.platform,
        ...(identity.formFactor ? { formFactor: identity.formFactor } : {}),
        ...(identity.modelName ? { modelName: identity.modelName } : {}),
        ...(identity.deviceLabel ? { deviceLabel: identity.deviceLabel } : {}),
        ...(identity.osVersion ? { osVersion: identity.osVersion } : {}),
      });
    },

    /**
     * Store the push token for this device.
     *
     * Written to the device document rather than the account: push fan-out
     * targets devices, and a family with two parent phones needs both tokens.
     */
    async updateFcmToken(
      userId: string,
      deviceId: string,
      role: DeviceRole,
      token: string,
    ): Promise<void> {
      const path =
        role === 'parent'
          ? parentDeviceDoc(userId, deviceId)
          : childDeviceDoc(userId, deviceId);

      await db.setDoc(
        path,
        {
          fcmToken: token,
          fcmTokenUpdatedAt: db.fieldValues.serverTimestamp(),
          /*
           * A new token retires whatever the server recorded about the old
           * one. `pushTokenInvalidAt` means "FCM rejected the token in this
           * document", so leaving it in place after a reinstall would keep
           * describing a device that is paired and working as one whose app
           * is gone — and it would do it silently, because nothing reads the
           * field yet to notice the contradiction.
           *
           * Deleting rather than nulling, for the reason `clearFcmToken`
           * gives: an absent field is the shape every reader already treats
           * as "no such observation".
           */
          pushTokenInvalidAt: db.fieldValues.delete(),
        },
        { merge: true },
      );
    },

    /**
     * Clear the push token on sign-out.
     *
     * Deleting the field rather than writing null: a stale token keeps
     * delivering a family's alerts to a phone that signed out of it, and the
     * fan-out treats an absent field as "no device to notify".
     */
    async clearFcmToken(
      userId: string,
      deviceId: string,
      role: DeviceRole,
    ): Promise<void> {
      const path =
        role === 'parent'
          ? parentDeviceDoc(userId, deviceId)
          : childDeviceDoc(userId, deviceId);

      await db
        .setDoc(path, { fcmToken: db.fieldValues.delete() }, { merge: true })
        .catch(() => undefined);
    },

    /**
     * Record the device's UI language.
     *
     * The server renders push copy per device from this — see
     * `docs/ADDING_A_LANGUAGE.md`. A device that never reports it gets English.
     */
    async updateDeviceLocale(
      userId: string,
      deviceId: string,
      role: DeviceRole,
      language: AppLanguage,
    ): Promise<void> {
      const path =
        role === 'parent'
          ? parentDeviceDoc(userId, deviceId)
          : childDeviceDoc(userId, deviceId);

      await db.setDoc(path, { locale: language }, { merge: true });
    },
  };
}

export type DeviceRegistrationRepository = ReturnType<
  typeof createDeviceRegistrationRepository
>;
