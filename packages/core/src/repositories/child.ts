import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { Child } from '@kidgate/schema/child';
import type { ChildRules } from '@kidgate/schema/childRules';
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
    // Spread, not assigned: absent means "no child-level rules yet" — the
    // per-device values are still authoritative — and under
    // `exactOptionalPropertyTypes` an explicit undefined is a different claim.
    ...(data.rules && typeof data.rules === 'object'
      ? { rules: data.rules as ChildRules }
      : {}),
    // '' is the cleared state (updateDoc cannot delete a field through every
    // port), and absent means never chosen; both read as "unchosen".
    ...(typeof data.locationDeviceId === 'string' && data.locationDeviceId
      ? { locationDeviceId: data.locationDeviceId }
      : {}),
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
     * Name the device that travels with this child, or clear the choice.
     *
     * A view designation (`Child.locationDeviceId`), not a rule: it decides
     * which fix answers "where are they?" on child-level screens and changes
     * nothing any device enforces. Any family parent may set it — same class
     * of write as rename and recolour.
     */
    async setLocationDevice(
      familyId: string,
      childId: string,
      deviceId: string | null,
    ): Promise<void> {
      await db.updateDoc(childDoc(familyId, childId), {
        locationDeviceId: deviceId ?? '',
      });
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

    /*
     * There is deliberately no `ensureChildrenForDevices` here.
     *
     * It used to give every unassigned device a child named after the device,
     * so the board read as already sorted. What it actually produced was a
     * second person: a parent who paired a phone and then added the child by
     * name ended up with two children and one device, the spare one named
     * after the hardware. The auto-creation raced every flow that asks the
     * parent who a device belongs to, and the loser was whichever write landed
     * second.
     *
     * A device belonging to nobody is now a state the UI shows rather than one
     * the client guesses its way out of: `AssignDeviceSheet` is the single
     * writer of `Device.childId`, reached from the unassigned group's own
     * per-card action, and armed automatically right after a pairing.
     */
  };
}

export type ChildRepository = ReturnType<typeof createChildRepository>;
