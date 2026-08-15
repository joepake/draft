import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { Child } from '@kidgate/schema/child';
import type { Device } from '@kidgate/schema/device';
import { childDoc, childrenCollection, childDeviceDoc } from '@kidgate/schema/paths';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * The people in the family — created, renamed and assigned by a parent.
 *
 * Ordinary client writes rather than Cloud Functions, unlike reward tasks: a
 * child's name is not something a child gains by writing it, and
 * `firestore.rules` already limits the whole collection to `isFamilyParent()`.
 * The one field that *is* worth stealing is `Device.childId`, and that lives on
 * the device document behind `childAssignmentSafe()`.
 */

function mapChild(doc: DocSnapshot): Child {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const colorIndex = Number(data.colorIndex);

  return {
    id: doc.id,
    name: typeof data.name === 'string' ? data.name : '',
    // A stored value that is not a number reads as the first accent rather
    // than as NaN, which a renderer would turn into an undefined colour.
    colorIndex: Number.isFinite(colorIndex) ? colorIndex : 0,
    createdAt: timestampToIso(data.createdAt) ?? '',
  };
}

export interface ChildRepositoryDeps {
  db: FirestorePort;
}

export function createChildRepository(deps: ChildRepositoryDeps) {
  const { db } = deps;

  return {
    subscribe(
      familyId: string,
      onChildren: (children: Child[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        childrenCollection(familyId),
        { orderBy: [['createdAt', 'asc']] },
        snapshot => onChildren(snapshot.docs.map(mapChild)),
        onError,
      );
    },

    async list(familyId: string): Promise<Child[]> {
      const snapshot = await db.getDocs(childrenCollection(familyId));
      return snapshot.docs.map(mapChild);
    },

    async create(
      familyId: string,
      input: { name: string; colorIndex: number },
    ): Promise<string> {
      return db.addDoc(childrenCollection(familyId), {
        name: input.name,
        colorIndex: input.colorIndex,
        createdAt: new Date().toISOString(),
      });
    },

    async rename(familyId: string, childId: string, name: string): Promise<void> {
      await db.updateDoc(childDoc(familyId, childId), { name });
    },

    async setColor(
      familyId: string,
      childId: string,
      colorIndex: number,
    ): Promise<void> {
      await db.updateDoc(childDoc(familyId, childId), { colorIndex });
    },

    /**
     * Point a device at a child, or at nobody.
     *
     * Reassigning moves every star that device has ever earned, because the
     * standings are recomputed from the reward tasks rather than from a running
     * total — which is the reason totals are not stored anywhere.
     */
    async assignDevice(
      familyId: string,
      deviceId: string,
      childId: string | null,
    ): Promise<void> {
      await db.updateDoc(childDeviceDoc(familyId, deviceId), {
        childId: childId ?? '',
      });
    },

    /**
     * Deleting a child leaves their devices assigned to nobody.
     *
     * The alternative — refusing while devices point at it — makes the parent
     * do the unassigning by hand for a row they have already decided is wrong.
     * The devices themselves are untouched: this is a bookkeeping entity, not a
     * pairing, and nothing about monitoring changes.
     */
    async remove(familyId: string, childId: string, devices: Device[]): Promise<void> {
      for (const device of devices) {
        if (device.childId === childId) {
          await db.updateDoc(childDeviceDoc(familyId, device.id), { childId: '' });
        }
      }
      await db.deleteDoc(childDoc(familyId, childId));
    },

    /**
     * Give every unassigned device a child, once, for families that predate
     * this collection.
     *
     * One child per device, named after the device — which is right for the
     * common shape (one child, one phone) and wrong for a child holding a phone
     * and a laptop. That is a deliberate trade: the wrong version is two taps
     * to fix (reassign the laptop, delete the spare child) and it is visible on
     * screen, where the alternative — leaving everything unassigned — hides the
     * feature behind setup work nobody knows to do.
     *
     * Runs when a parent opens a screen that needs children, not as a sweep
     * over every family: `docs/FEASIBILITY.md` prices a cross-family sweep at
     * paginating `users`, a per-family time band and a server-side dedupe
     * document, which is a lot of machinery for something one screen open does
     * correctly.
     *
     * Returns how many it created, so a caller can tell "nothing to do" from
     * "just migrated this family" without re-reading.
     */
    async ensureChildrenForDevices(
      familyId: string,
      devices: Device[],
      existingChildren: Child[],
    ): Promise<number> {
      const unassigned = devices.filter(device => !device.childId);
      if (unassigned.length === 0) {
        return 0;
      }

      let colorIndex = existingChildren.length;
      let created = 0;

      for (const device of unassigned) {
        const childId = await db.addDoc(childrenCollection(familyId), {
          name: device.name,
          colorIndex: colorIndex++,
          createdAt: new Date().toISOString(),
        });
        await db.updateDoc(childDeviceDoc(familyId, device.id), { childId });
        created++;
      }

      return created;
    },
  };
}

export type ChildRepository = ReturnType<typeof createChildRepository>;
