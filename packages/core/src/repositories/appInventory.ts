/**
 * One device's app inventory, read and written.
 *
 * Both halves live here because both clients are in this repo and neither
 * should own a copy: the agents (`apps/mobile` Android, `apps/desktop`,
 * `apps/tv`) publish, the parent surfaces (`apps/mobile` parent role,
 * `apps/dashboard`) read. Seven modules moved up into `packages/core` after
 * being written twice in `apps/desktop`, each fixing a live defect on the way
 * (`docs/DESKTOP_ENFORCEMENT.md`); this one starts up here instead.
 *
 * **The write is the device's own, not a Cloud Function's.** Unlike the install
 * feed — which posts to `logChildPackageActivity` because it fires from a
 * native foreground service with no Firebase SDK in reach — a scan happens on
 * the agent's tick, inside a process that already holds a session. An endpoint
 * would buy a second place to cap the list and a second place for it to drift.
 * `firestore.rules` does the capping instead, and it is the boundary that
 * actually holds.
 */

import type { DocSnapshot, FirestorePort } from '@kidgate/ports/firestore';
import { deleteAllInBatches } from '../domain/batchDelete';
import {
  appInventoryCollection,
  appInventoryDoc,
  isUsableInventoryId,
  MAX_INVENTORY_APPS,
  MAX_INVENTORY_LABEL_LENGTH,
  type AppInventory,
  type InventoryApp,
} from '@kidgate/schema/appInventory';

function mapApps(raw: unknown): InventoryApp[] {
  if (!Array.isArray(raw)) {
    return [];
  }
  const apps: InventoryApp[] = [];
  for (const item of raw) {
    const entry = item as Partial<InventoryApp> | null;
    if (!entry || !isUsableInventoryId(entry.id)) {
      continue;
    }
    const firstSeenAt = Number(entry.firstSeenAt);
    const installedAt = Number(entry.installedAt);
    apps.push({
      id: entry.id,
      label:
        typeof entry.label === 'string' && entry.label.trim()
          ? entry.label.trim()
          : entry.id,
      // A row written before the field existed, or by a device whose clock
      // answered nonsense, reads as 0 rather than as now. `buildAppInventoryReport`
      // treats 0 as "not since the baseline", which is the safe direction:
      // it under-reports arrivals instead of announcing a decade-old app as new.
      firstSeenAt: Number.isFinite(firstSeenAt) && firstSeenAt > 0 ? firstSeenAt : 0,
      // Absent stays absent: an unknown install time must never read as a
      // quarantined one (`isInstallQuarantined`).
      ...(Number.isFinite(installedAt) && installedAt > 0 ? { installedAt } : {}),
    });
  }
  return apps;
}

function mapInventory(snapshot: DocSnapshot): AppInventory | null {
  if (!snapshot.exists) {
    return null;
  }
  const data = snapshot.data() ?? {};
  const scannedAt = Number(data.scannedAt);
  if (!Number.isFinite(scannedAt) || scannedAt <= 0) {
    // No usable scan time means no report: every "new", "stale" and "found on"
    // sentence is measured against it, and defaulting it to now would date a
    // month-old list to this second.
    return null;
  }
  const apps = mapApps(data.apps);
  const totalSeen = Number(data.totalSeen);
  return {
    apps,
    scannedAt,
    truncated: data.truncated === true,
    totalSeen:
      Number.isFinite(totalSeen) && totalSeen >= apps.length ? totalSeen : apps.length,
  };
}

/**
 * A read, and deliberately **not** a listener.
 *
 * There was a `watchAppInventory` here and it had no caller. The document is
 * rewritten once a day by the device itself, so a subscription would hold a
 * socket open for an event that almost never lands while a parent is looking —
 * and both parent surfaces pull to refresh instead. An exported bridge nothing
 * calls is a shape this repo has been wrong in before (`apps/desktop/CLAUDE.md`,
 * the five things "computed and carried nowhere"); the day something genuinely
 * needs live updates, `firestore.onDoc` is four lines away.
 */
export async function getAppInventory(
  firestore: FirestorePort,
  userId: string,
  deviceId: string,
): Promise<AppInventory | null> {
  const snapshot = await firestore.getDoc(appInventoryDoc(userId, deviceId));
  return mapInventory(snapshot);
}

/**
 * Merge a fresh scan with what was stored, preserving first-seen times.
 *
 * Pure, and separate from the write so it can be tested without a port. This is
 * the whole reason the inventory is worth keeping rather than re-deriving: the
 * scan itself knows only *what is there now*, and the answer a parent cares
 * about — when did this appear — exists only as the difference between two
 * scans. `appscan::diff_installed` computes exactly this on the desktop today
 * and throws it away; here it is carried forward.
 *
 * `scannedAt` is passed rather than read from a clock, same rule as the rest of
 * `domain/`.
 */
export function mergeInventoryScan(
  previous: AppInventory | null,
  scanned: readonly { id: string; label: string; installedAt?: number }[],
  scannedAt: number,
): AppInventory {
  const firstSeen = new Map(
    (previous?.apps ?? []).map(app => [app.id, app.firstSeenAt] as const),
  );

  const seen = new Set<string>();
  const apps: InventoryApp[] = [];
  let totalSeen = 0;

  for (const app of scanned) {
    if (!isUsableInventoryId(app.id) || seen.has(app.id)) {
      continue;
    }
    seen.add(app.id);
    totalSeen += 1;
    if (apps.length >= MAX_INVENTORY_APPS) {
      // Counted but not stored. The cap has to be applied after the tally so
      // `truncated` can say by how much rather than only that it happened.
      continue;
    }
    const label =
      typeof app.label === 'string' && app.label.trim()
        ? app.label.trim().slice(0, MAX_INVENTORY_LABEL_LENGTH)
        : app.id;
    const previouslySeen = firstSeen.get(app.id);
    apps.push({
      id: app.id,
      label,
      // A row that existed before keeps its original time even if it fell out
      // of one scan and came back — a reinstall is not what this field is for,
      // and treating it as an arrival would flag an app the parent has already
      // looked at. 0 from an unreadable stored row stays 0 rather than becoming
      // now, for the reason `mapApps` gives.
      firstSeenAt: previouslySeen !== undefined ? previouslySeen : scannedAt,
      // The OS's own answer, taken fresh from every scan: a reinstall really
      // is a new install here, which is what the quarantine compares against.
      ...(typeof app.installedAt === 'number' &&
      Number.isFinite(app.installedAt) &&
      app.installedAt > 0
        ? { installedAt: app.installedAt }
        : {}),
    });
  }

  return {
    apps,
    scannedAt,
    truncated: totalSeen > MAX_INVENTORY_APPS,
    totalSeen,
  };
}

/**
 * Publish a scan, carrying forward what the previous one established.
 *
 * Reads before writing on purpose. The alternative — a merge write — cannot
 * express removal: an app uninstalled between two scans has to leave the list,
 * and `arrayRemove` against a list the device does not fully control is a
 * second source of truth for one fact. One read a day is the price of a
 * document that means what it says.
 */
export async function publishAppInventory(
  firestore: FirestorePort,
  userId: string,
  deviceId: string,
  scanned: readonly { id: string; label: string; installedAt?: number }[],
  scannedAt: number,
): Promise<AppInventory> {
  const path = appInventoryDoc(userId, deviceId);
  let previous: AppInventory | null = null;
  try {
    previous = mapInventory(await firestore.getDoc(path));
  } catch {
    // A failed read must not cost the scan. The consequence is bounded and
    // named: every app looks new to this one write, and `isFirstScan` then
    // reads true, which suppresses the "added" copy rather than firing it.
  }

  const next = mergeInventoryScan(previous, scanned, scannedAt);
  await firestore.setDoc(path, {
    apps: next.apps,
    scannedAt: next.scannedAt,
    truncated: next.truncated,
    totalSeen: next.totalSeen,
  });
  return next;
}

/**
 * The unpair half, in the shape `DeviceCascadeDeps` expects.
 *
 * A factory rather than a bare function only because the cascade list is
 * assembled from objects. **Registering it is not optional** — Firestore
 * deletes no subcollection when its parent document goes, and
 * `__tests__/deviceCascade.test.ts` reads `@kidgate/schema/paths` to fail the
 * build when a device subcollection has nothing removing it. Four of them
 * survived every unpair for months before that test existed.
 */
export function createAppInventoryRepository(deps: { db: FirestorePort }) {
  const { db } = deps;

  return {
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = appInventoryCollection(userId, deviceId);
      const snapshot = await db.getDocs(path);
      await deleteAllInBatches(
        db,
        path,
        snapshot.docs.map(doc => doc.id),
      );
    },
  };
}

export type AppInventoryRepository = ReturnType<typeof createAppInventoryRepository>;
