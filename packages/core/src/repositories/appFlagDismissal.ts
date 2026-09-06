/**
 * A parent's answers to flagged apps, read and written.
 *
 * Both parent surfaces call this and neither owns a copy — the same reason
 * `appInventory` sits beside it. What each of them renders is decided once, in
 * `buildAppInventoryReport`; what is stored is decided once, here.
 *
 * The shape and the scope argument: `@kidgate/schema/appFlagDismissal`.
 */

import type { DocSnapshot, FirestorePort } from '@kidgate/ports/firestore';
import {
  APP_CATEGORIES,
  HIDDEN_APP_CATEGORIES,
  type AppCategory,
} from '@kidgate/schema/aiApps';
import {
  APP_FLAG_DEVICE_SCOPE_PREFIX,
  appFlagDismissalsCollection,
  appFlagDismissalsDoc,
  appFlagScopeId,
  MAX_APP_FLAG_DISMISSALS,
  type AppFlagDismissal,
} from '@kidgate/schema/appFlagDismissal';

function mapEntries(raw: unknown): AppFlagDismissal[] {
  if (!Array.isArray(raw)) {
    return [];
  }
  const entries: AppFlagDismissal[] = [];
  for (const item of raw) {
    const entry = item as Partial<AppFlagDismissal> | null;
    if (!entry || typeof entry.appId !== 'string' || !entry.appId.trim()) {
      continue;
    }
    // A category this build does not know, or one that is never shown, cannot
    // match a flag — so the entry would sit in the document for ever answering
    // nothing. Same two guards the report applies, in the same order.
    const category = entry.category as AppCategory;
    if (
      !(APP_CATEGORIES as readonly string[]).includes(category) ||
      (HIDDEN_APP_CATEGORIES as readonly string[]).includes(category)
    ) {
      continue;
    }
    const at = Number(entry.at);
    entries.push({
      appId: entry.appId,
      category,
      at: Number.isFinite(at) && at > 0 ? at : 0,
    });
  }
  return entries;
}

function mapDismissals(snapshot: DocSnapshot): AppFlagDismissal[] {
  return snapshot.exists ? mapEntries(snapshot.data()?.entries) : [];
}

export interface AppFlagScope {
  /** The child this device belongs to, when it has been assigned to one. */
  childId?: string | null | undefined;
  deviceId: string;
}

/**
 * A read, not a listener — the same call as `getAppInventory`, beside it.
 *
 * The document changes only when the parent looking at it presses a button, so
 * the write path updates local state and there is nothing for a subscription to
 * deliver that the writer does not already know.
 */
export async function getAppFlagDismissals(
  firestore: FirestorePort,
  userId: string,
  scope: AppFlagScope,
): Promise<AppFlagDismissal[]> {
  const snapshot = await firestore.getDoc(
    appFlagDismissalsDoc(userId, appFlagScopeId(scope)),
  );
  return mapDismissals(snapshot);
}

/**
 * Add one answer, or replace the answer this app already had.
 *
 * Pure enough to test without a port, and separate from the write for the same
 * reason `mergeInventoryScan` is: what the list becomes is the interesting
 * half. Replacing rather than appending is what stops a reclassified app
 * accumulating one entry per category it has ever worn.
 */
export function withAppFlagDismissed(
  entries: readonly AppFlagDismissal[],
  appId: string,
  category: AppCategory,
  at: number,
): AppFlagDismissal[] {
  const next = entries.filter(entry => entry.appId !== appId);
  next.push({ appId, category, at });
  // Oldest out at the cap. A parent who has answered a hundred flags will not
  // notice the first one coming back, and the alternative — refusing the write
  // — is a button that stops working with nothing on screen to explain it.
  return next.length > MAX_APP_FLAG_DISMISSALS
    ? next.sort((a, b) => a.at - b.at).slice(next.length - MAX_APP_FLAG_DISMISSALS)
    : next;
}

/** Take one back. The row returns to "Worth a look" on the next render. */
export function withAppFlagRestored(
  entries: readonly AppFlagDismissal[],
  appId: string,
): AppFlagDismissal[] {
  return entries.filter(entry => entry.appId !== appId);
}

export function createAppFlagDismissalRepository(deps: { db: FirestorePort }) {
  const { db } = deps;

  return {
    read: (userId: string, scope: AppFlagScope) =>
      getAppFlagDismissals(db, userId, scope),

    /**
     * Write the list back whole.
     *
     * `setDoc`, never a merge: an entry taken back has to leave the document,
     * and `arrayRemove` against a list two parents may both be editing is a
     * second source of truth for one fact. The same argument
     * `publishAppInventory` makes about removal.
     */
    async write(
      userId: string,
      scope: AppFlagScope,
      entries: readonly AppFlagDismissal[],
    ): Promise<void> {
      await db.setDoc(appFlagDismissalsDoc(userId, appFlagScopeId(scope)), {
        entries: [...entries],
      });
    },

    /**
     * Unpair, in the shape `DeviceCascadeDeps` expects.
     *
     * **Only the device-scoped document goes.** A child-scoped one outlives the
     * machine on purpose — a family replacing a phone has not changed its mind
     * about the apps, and a cascade that erased the child's answers would make
     * every flag they had already looked at come back on the new device.
     */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      await db.deleteDoc(
        `${appFlagDismissalsCollection(userId)}/${APP_FLAG_DEVICE_SCOPE_PREFIX}${deviceId}`,
      );
    },
  };
}

export type AppFlagDismissalRepository = ReturnType<
  typeof createAppFlagDismissalRepository
>;
