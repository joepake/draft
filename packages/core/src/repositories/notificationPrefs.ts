import type { FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import {
  DEFAULT_NOTIFICATION_PREFS,
  type AlertPrefKey,
  type NotificationPrefs,
  type QuietHours,
} from '@kidgate/schema/notificationPrefs';
import { parentDeviceDoc } from '@kidgate/schema/paths';
import { normalizeNotificationPrefs } from '../domain/notificationPrefs';

/**
 * Push preferences for one parent device.
 *
 * They ride on the device document the push fan-out already reads to find the
 * FCM token (`users/{uid}/parentDevices/{deviceId}`), so honouring them costs
 * the server no extra read. Firestore rules already let a parent write their
 * own device document, so no Cloud Function sits in this path.
 *
 * `deviceId` is an argument. The legacy version resolved it internally from
 * device-identity storage, which made a Firestore repository depend on the
 * platform's key-value store for no reason — the caller already knows which
 * device it is running on.
 */

export interface NotificationPrefsRepositoryDeps {
  db: FirestorePort;
}

export function createNotificationPrefsRepository(
  deps: NotificationPrefsRepositoryDeps,
) {
  const { db } = deps;

  return {
    async fetch(userId: string, deviceId: string): Promise<NotificationPrefs> {
      const snapshot = await db.getDoc(parentDeviceDoc(userId, deviceId));
      if (!snapshot.exists) {
        return DEFAULT_NOTIFICATION_PREFS;
      }
      return normalizeNotificationPrefs(snapshot.data());
    },

    /**
     * Live, because the screen is reachable from two parent devices at once and
     * because a failed write should visibly snap back rather than leave a
     * toggle lying about what was saved.
     */
    subscribe(
      userId: string,
      deviceId: string,
      onPrefs: (prefs: NotificationPrefs) => void,
    ): Unsubscribe {
      return db.onDoc(
        parentDeviceDoc(userId, deviceId),
        snapshot => {
          if (!snapshot.exists) {
            return;
          }
          onPrefs(normalizeNotificationPrefs(snapshot.data()));
        },
        // A dropped listener must not reset the switches to "everything on" —
        // that reads as the app silently undoing the parent's choice. The
        // screen keeps whatever it last showed.
        () => undefined,
      );
    },

    async setAlertPref(
      userId: string,
      deviceId: string,
      key: AlertPrefKey,
      enabled: boolean,
    ): Promise<void> {
      // `set` with merge rather than `update`: a merge write recurses into map
      // fields, so this touches one key and leaves the rest of the map — and
      // the device's name, token and heartbeat — alone, while still creating
      // the document if a sign-out race removed it, which `update` rejects.
      await db.setDoc(
        parentDeviceDoc(userId, deviceId),
        { notificationPrefs: { [key]: enabled } },
        { merge: true },
      );
    },

    async setQuietHours(
      userId: string,
      deviceId: string,
      quietHours: QuietHours,
    ): Promise<void> {
      await db.setDoc(
        parentDeviceDoc(userId, deviceId),
        { quietHours: { ...quietHours } },
        { merge: true },
      );
    },
  };
}

export type NotificationPrefsRepository = ReturnType<
  typeof createNotificationPrefsRepository
>;
