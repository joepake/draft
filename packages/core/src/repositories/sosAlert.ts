import type {
  DocSnapshot,
  FirestorePort,
  QuerySpec,
  Unsubscribe,
} from '@kidgate/ports/firestore';
import type { DeviceLocation } from '@kidgate/schema/deviceControls';
import { sosAlertsCollection } from '@kidgate/schema/paths';
import type { SosAlert, SosAlertParams } from '@kidgate/schema/sosAlert';
import { deleteAllInBatches } from '../domain/batchDelete';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * A child pressing SOS, and a parent answering it.
 *
 * Nothing here renders text. The legacy version called `t(messageKey, params)`
 * both when reading an alert and when writing one — so an alert raised on a
 * Vietnamese child device stored a Vietnamese sentence that an English-speaking
 * parent then read verbatim. Alerts carry `messageKey` and `params`; whoever
 * displays one renders it in the reader's language.
 *
 * `message` is still written for older installed apps that read only that
 * field, but the caller supplies it already rendered — this file never calls a
 * translator.
 */

/** Enough for the alerts list; the rest is history nobody scrolls to live. */
const SOS_ALERT_PAGE_SIZE = 50;

function parseParams(value: unknown): SosAlertParams | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return undefined;
  }

  const params: SosAlertParams = {};
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === 'string' || typeof entry === 'number') {
      params[key] = entry;
    }
  }

  return Object.keys(params).length > 0 ? params : undefined;
}

function parseLocation(value: unknown): DeviceLocation | undefined {
  if (!value || typeof value !== 'object') {
    return undefined;
  }
  const raw = value as Record<string, unknown>;
  if (typeof raw.latitude !== 'number' || typeof raw.longitude !== 'number') {
    return undefined;
  }
  return {
    latitude: raw.latitude,
    longitude: raw.longitude,
    updatedAt: timestampToIso(raw.updatedAt) ?? '',
    placeName: typeof raw.placeName === 'string' ? raw.placeName : null,
    address: typeof raw.address === 'string' ? raw.address : null,
  };
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function mapSosAlert(doc: DocSnapshot): SosAlert {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const params = parseParams(data.params);
  const location = parseLocation(data.location);

  return {
    id: doc.id,
    deviceId: typeof data.deviceId === 'string' ? data.deviceId : '',
    ...(text(data.childId) ? { childId: text(data.childId) } : {}),
    // Empty rather than a rendered fallback: the UI knows which language to
    // apologise in, this file does not.
    deviceName: typeof data.deviceName === 'string' ? data.deviceName : '',
    status: data.status === 'acknowledged' ? 'acknowledged' : 'active',
    createdAt: timestampToIso(data.createdAt) ?? '',
    ...(text(data.messageKey) ? { messageKey: text(data.messageKey) } : {}),
    ...(text(data.message) ? { message: text(data.message) } : {}),
    ...(params ? { params } : {}),
    ...(location ? { location } : {}),
    ...(text(data.photoUrl) ? { photoUrl: text(data.photoUrl) } : {}),
    ...(text(data.photoPath) ? { photoPath: text(data.photoPath) } : {}),
    ...(timestampToIso(data.acknowledgedAt)
      ? { acknowledgedAt: timestampToIso(data.acknowledgedAt) }
      : {}),
    ...(text(data.acknowledgedByDeviceId)
      ? { acknowledgedByDeviceId: text(data.acknowledgedByDeviceId) }
      : {}),
  } as SosAlert;
}

export interface CreateSosAlertInput {
  deviceId: string;
  deviceName: string;
  location?: Omit<DeviceLocation, 'updatedAt'> & { updatedAt?: string };
  messageKey?: string;
  params?: SosAlertParams;
  /**
   * Pre-rendered text for older readers.
   *
   * Supplied by the caller, which has a translator; this repository does not.
   * Omit it and only apps that understand `messageKey` will show the alert.
   */
  legacyMessage?: string;
}

export interface SosAlertRepositoryDeps {
  db: FirestorePort;
}

export function createSosAlertRepository(deps: SosAlertRepositoryDeps) {
  const { db } = deps;

  return {
    /**
     * Raise an alert.
     *
     * `alertId` may be supplied so the caller can name the photo's Storage path
     * before the upload finishes — the photo arrives seconds after the alert,
     * and a parent must see the alert immediately, not wait for the picture.
     */
    async createAlert(
      userId: string,
      input: CreateSosAlertInput,
      alertId?: string,
    ): Promise<string> {
      const path = sosAlertsCollection(userId);
      const id = alertId ?? db.newId(path);

      const location = input.location
        ? {
            latitude: input.location.latitude,
            longitude: input.location.longitude,
            updatedAt: input.location.updatedAt ?? '',
            ...(input.location.placeName
              ? { placeName: input.location.placeName }
              : {}),
            ...(input.location.address ? { address: input.location.address } : {}),
          }
        : undefined;

      await db.setDoc(`${path}/${id}`, {
        deviceId: input.deviceId,
        deviceName: input.deviceName,
        status: 'active',
        messageKey: input.messageKey ?? 'sos.alertMessage',
        params: {
          childName: input.deviceName,
          deviceName: input.deviceName,
          ...input.params,
        },
        createdAt: db.fieldValues.serverTimestamp(),
        ...(location ? { location } : {}),
        ...(input.legacyMessage ? { message: input.legacyMessage } : {}),
      });

      return id;
    },

    /** Set once the upload finishes; the alert is already visible by then. */
    async updatePhotoUrl(
      userId: string,
      alertId: string,
      photoUrl: string,
      photoPath: string,
    ): Promise<void> {
      await db.updateDoc(`${sosAlertsCollection(userId)}/${alertId}`, {
        photoUrl,
        photoPath,
      });
    },

    subscribeActive(
      userId: string,
      onAlerts: (alerts: SosAlert[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        sosAlertsCollection(userId),
        {
          where: [['status', '==', 'active']],
          orderBy: [['createdAt', 'desc']],
          limit: SOS_ALERT_PAGE_SIZE,
        },
        snapshot => onAlerts(snapshot.docs.map(mapSosAlert)),
        onError,
      );
    },

    subscribeRecentForDevice(
      userId: string,
      deviceId: string,
      onAlerts: (alerts: SosAlert[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        sosAlertsCollection(userId),
        {
          where: [['deviceId', '==', deviceId]],
          orderBy: [['createdAt', 'desc']],
          limit: SOS_ALERT_PAGE_SIZE,
        },
        snapshot => onAlerts(snapshot.docs.map(mapSosAlert)),
        onError,
      );
    },

    /**
     * The recent feed for one CHILD: every device they hold, one list, plus
     * every row stamped with the child's id — which is how an alert outlives
     * the phone that raised it (`SosAlert.childId`).
     *
     * Two joins because rows before 2026-09-11 carry only a `deviceId`, so the
     * person-join still happens here against the ids the caller resolved from
     * `Device.childId`. Chunked by ten because that is the floor every
     * Firestore transport's `in` supports; each chunk reuses the composite
     * index the per-device query already needs. The `childId` query needs its
     * own (`childId` + `createdAt`). Results dedupe, re-sort and re-cap after
     * the merge — a row matches both joins while its device is still paired,
     * and each query is capped alone, so the union over-fetches rather than
     * under-reporting.
     */
    subscribeRecentForChild(
      userId: string,
      childId: string,
      deviceIds: readonly string[],
      onAlerts: (alerts: SosAlert[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      const chunks: string[][] = [];
      for (let start = 0; start < deviceIds.length; start += 10) {
        chunks.push([...deviceIds.slice(start, start + 10)]);
      }
      const queries: QuerySpec[] = [
        ...chunks.map((chunk): QuerySpec => ({
          where: [['deviceId', 'in', chunk]],
          orderBy: [['createdAt', 'desc']],
          limit: SOS_ALERT_PAGE_SIZE,
        })),
        {
          where: [['childId', '==', childId]],
          orderBy: [['createdAt', 'desc']],
          limit: SOS_ALERT_PAGE_SIZE,
        },
      ];

      const byQuery = new Map<number, SosAlert[]>();
      const emit = () => {
        const byId = new Map<string, SosAlert>();
        for (const alert of [...byQuery.values()].flat()) {
          byId.set(alert.id, alert);
        }
        const merged = [...byId.values()]
          .sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? ''))
          .slice(0, SOS_ALERT_PAGE_SIZE);
        onAlerts(merged);
      };

      const unsubscribes = queries.map((options, index) =>
        db.onQuery(
          sosAlertsCollection(userId),
          options,
          snapshot => {
            byQuery.set(index, snapshot.docs.map(mapSosAlert));
            emit();
          },
          onError,
        ),
      );

      return () => {
        for (const unsubscribe of unsubscribes) {
          unsubscribe();
        }
      };
    },

    /**
     * Mark an alert as answered.
     *
     * Records which parent device did it: the prompt appears on every parent
     * device at once, and the others need to stop ringing.
     */
    async acknowledge(
      userId: string,
      alertId: string,
      deviceId: string,
    ): Promise<void> {
      await db.updateDoc(`${sosAlertsCollection(userId)}/${alertId}`, {
        status: 'acknowledged',
        acknowledgedAt: db.fieldValues.serverTimestamp(),
        acknowledgedByDeviceId: deviceId,
      });
    },

    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = sosAlertsCollection(userId);
      const snapshot = await db.getDocs(path, {
        where: [['deviceId', '==', deviceId]],
      });

      // A row stamped with the child it belonged to is the family's safety
      // history, not the phone's: it stays, and `subscribeRecentForChild`
      // keeps finding it. Same rule as `leaveChildDevice` server-side.
      await deleteAllInBatches(
        db,
        path,
        snapshot.docs
          .filter(doc => !text((doc.data() ?? {}).childId))
          .map(doc => doc.id),
      );
    },
  };
}

export type SosAlertRepository = ReturnType<typeof createSosAlertRepository>;
