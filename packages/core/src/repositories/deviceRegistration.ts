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
  /**
   * Which KidGate build is running here — `version` and `versionCode` from the
   * root `package.json`, as this install shipped them, plus the OTA bundle on
   * the platforms that have one.
   *
   * Travels with the hardware facts because it is written by the same calls and
   * has the same lifetime, not because it is one: this is the only answer to
   * "which of a family's devices are actually on the new build", and before
   * these fields the desktop agent was the only client that reported it
   * (`apps/mobile` sent its version on a support report and nowhere else).
   * Every platform has some install that never updates — a Mac nobody
   * re-downloads, a television sideloaded once, a phone whose store updates are
   * off — and none of it is visible to a parent until the device says so.
   *
   * All three optional and all three **absent rather than empty**: a record
   * written by an older build has to read as unknown, never as out of date.
   * `appBuild` is a string because Windows has no build number to report at all
   * (Tauri writes the semver there), and "absent" and "0" must not look alike.
   * See `ChildDeviceRecord` in `@kidgate/schema/device` for `otaVersion`.
   */
  appVersion?: string;
  appBuild?: string;
  otaVersion?: number;
}

/**
 * The hardware facts, as a spread.
 *
 * Five call sites below wrote this same four-line spread, and a sixth field
 * added to `DeviceIdentity` had to be pasted into each of them — which is how a
 * field comes to be written by registration and dropped by the heartbeat, so a
 * parent's screen shows it once and then watches it go stale for reasons
 * nothing explains.
 *
 * Every field is spread only when it has a value: `undefined` is rejected
 * outright by RNFB, and writing an empty string would overwrite a good stored
 * value with a blank on any client whose probe failed this once.
 */
function hardwareFields(identity: DeviceIdentity): Record<string, unknown> {
  return {
    ...(identity.formFactor ? { formFactor: identity.formFactor } : {}),
    ...(identity.modelName ? { modelName: identity.modelName } : {}),
    ...(identity.deviceLabel ? { deviceLabel: identity.deviceLabel } : {}),
    ...(identity.osVersion ? { osVersion: identity.osVersion } : {}),
  };
}

/**
 * The build fields, as a spread. Child documents only.
 *
 * Not written to a parent device row: the question these answer is "is this
 * child's agent enforcing an old build", and a parent's own phone tells them
 * about itself through the store. Adding them there later is a schema change
 * (`ParentDeviceRecord` carries neither), not a spread — say so rather than
 * quietly widening this.
 */
function buildFields(identity: DeviceIdentity): Record<string, unknown> {
  return {
    ...(identity.appVersion ? { appVersion: identity.appVersion } : {}),
    ...(identity.appBuild ? { appBuild: identity.appBuild } : {}),
    ...(typeof identity.otaVersion === 'number'
      ? { otaVersion: identity.otaVersion }
      : {}),
  };
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
          ...hardwareFields(identity),
        },
        { merge: true },
      );
    },

    /**
     * Register this install as a child device.
     *
     * Reads the existing document first and carries `isLocked`, `controls` and
     * **`name`** forward: re-registering happens on every launch, and resetting
     * any of them would unlock a locked phone, wipe a parent's settings, or
     * rename a device back to its factory word simply because the child opened
     * the app.
     *
     * `name` was the one that was not carried, and it is the one a parent
     * touches by hand. Every agent passes a default here — "Chrome",
     * "Chromebook", the phone's model — because at pairing there is nothing
     * else to call the device; so every re-registration overwrote whatever the
     * family had renamed it to. On `apps/extension` that is a 6-hourly write,
     * which is how it was found: a device renamed in the morning was called
     * Chrome again by lunchtime, with no event anywhere saying why.
     *
     * The default therefore applies **only to a document that does not have a
     * name yet**, which is exactly the first registration.
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
      const existingName =
        typeof existing.name === 'string' ? existing.name.trim() : '';
      const now = db.fieldValues.serverTimestamp();

      await db.setDoc(
        childDeviceDoc(userId, deviceId),
        {
          deviceId,
          name: existingName || name,
          platform: identity.platform,
          status: isLocked ? 'locked' : 'online',
          isLocked,
          controls: existing.controls ?? DEFAULT_DEVICE_CONTROLS,
          lastActiveAt: now,
          ...(snapshot.exists ? {} : { createdAt: now }),
          ...hardwareFields(identity),
          /*
           * Rewritten on every registration, not only the first, because the
           * event this has to notice is precisely an install being replaced by
           * a newer one — and that does not re-register, it re-launches.
           */
          ...buildFields(identity),
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
    /**
     * Whether this parent phone has the home-screen widget placed.
     *
     * The server's widget-refresh push (`functions/lib/widgetPush.js`) sends
     * only to devices where this is true — a silent push to a phone with no
     * widget spends the family's rate-limit window on nothing. Written by
     * `useParentWidgetSync` whenever the answer changes, including to false
     * when the parent removes the widget, which is what stops the pushes.
     */
    async setParentWidgetActive(
      userId: string,
      deviceId: string,
      active: boolean,
    ): Promise<void> {
      await db.setDoc(
        parentDeviceDoc(userId, deviceId),
        { parentWidgetActive: active },
        { merge: true },
      );
    },

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
          ...hardwareFields(identity),
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
          ...hardwareFields(identity),
          ...buildFields(identity),
        },
        { merge: true },
      );
    },

    /**
     * Report whether message monitoring is actually watching on this device.
     *
     * Its own write rather than a field inside `protectionStatus`, for the
     * reason `@kidgate/schema/messageMonitoringState` sets out: that structure
     * is the permissions every device needs, and this is an opt-in feature a
     * family may decline. Merging them would put a permanent red row on every
     * device whose family said no.
     *
     * No `lastActiveAt` here, unlike the protection write above. This one runs
     * on the same beat, so stamping it twice buys nothing — and the heartbeat
     * is the field a parent's "offline" reading comes from, which is not a
     * question this write has an answer to.
     */
    async updateChildMessageMonitoringState(
      userId: string,
      deviceId: string,
      state: Record<string, unknown>,
    ): Promise<void> {
      await db.setDoc(
        childDeviceDoc(userId, deviceId),
        {
          messageMonitoring: {
            ...state,
            lastCheckedAt: db.fieldValues.serverTimestamp(),
          },
        },
        { merge: true },
      );
    },

    /**
     * The enforcement acknowledgement: the agent applied this policy
     * natively. Callers gate on fingerprint change — see
     * `domain/appliedPolicy` for why an ungated write would fire the device
     * trigger per schedule-window flip.
     */
    async updateAppliedPolicy(
      userId: string,
      deviceId: string,
      applied: { fingerprint: string; atMs: number },
    ): Promise<void> {
      await db.setDoc(
        childDeviceDoc(userId, deviceId),
        { appliedPolicy: applied },
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
        ...hardwareFields(identity),
        ...buildFields(identity),
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
