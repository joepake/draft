import type {
  DocSnapshot,
  FirestoreError,
  FirestorePort,
  Unsubscribe,
} from '@kidgate/ports/firestore';
import type { StoragePort } from '@kidgate/ports/storage';
import type { ApiFailure } from '@kidgate/ports/api';
import {
  familyMemberDoc,
  familyMembersCollection,
  userDoc,
} from '@kidgate/schema/paths';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * A family is the owner's account root, `users/{ownerUid}`.
 *
 * Secondary parents keep their own auth uid; a membership document under
 * `users/{ownerUid}/members/{memberUid}` is what grants them access, and
 * Firestore rules enforce it. Removing that document removes the parent — which
 * is why the membership listener below is careful about what counts as
 * "the document is gone".
 */

const ACTIVE_FAMILY_STORAGE_KEY = 'kidgate.activeFamilyId';

export interface FamilyMember {
  id: string;
  label: string;
  addedAt: string;
  lastActiveAt: string | null;
  platform: 'ios' | 'android' | null;
  deviceName: string | null;
  osVersion: string | null;
}

export interface FamilyMeta {
  familyId: string;
  name: string;
  ownerLabel: string;
  /**
   * Whether siblings see each other's star standings. Absent means on — a
   * family with two children gets the board without hunting for a switch.
   */
  leaderboardEnabled?: boolean;
}

function mapMember(doc: DocSnapshot): FamilyMember {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const text = (value: unknown) =>
    typeof value === 'string' && value.trim() ? value.trim() : null;

  return {
    id: doc.id,
    label: text(data.label) ?? '',
    addedAt: timestampToIso(data.addedAt) ?? '',
    lastActiveAt: timestampToIso(data.lastActiveAt) ?? null,
    platform:
      data.platform === 'ios' || data.platform === 'android' ? data.platform : null,
    deviceName: text(data.deviceName),
    osVersion: text(data.osVersion),
  };
}

/** Most recently active first; never-seen members last, then by label. */
function sortMembers(members: FamilyMember[]): FamilyMember[] {
  return [...members].sort((a, b) => {
    if (a.lastActiveAt && b.lastActiveAt) {
      return b.lastActiveAt.localeCompare(a.lastActiveAt);
    }
    if (a.lastActiveAt) return -1;
    if (b.lastActiveAt) return 1;
    return a.label.localeCompare(b.label);
  });
}

export interface FamilyRepositoryDeps {
  db: FirestorePort;
  storage: StoragePort;
  /**
   * Called when the active family changes.
   *
   * The legacy version imported `resetWebHistorySyncGate` directly, so a data
   * repository reached into a background sync service. Injected, the edge is
   * visible to whoever wires the app and absent in a test.
   */
  onFamilyChanged?: () => void;
}

export function createFamilyRepository(deps: FamilyRepositoryDeps) {
  const { db, storage, onFamilyChanged } = deps;

  return {
    async getFamilyMeta(familyId: string): Promise<FamilyMeta | null> {
      const snapshot = await db.getDoc(userDoc(familyId));
      const data = snapshot.data() as Record<string, unknown> | undefined;
      if (!data) {
        return null;
      }
      return {
        familyId,
        name: typeof data.familyName === 'string' ? data.familyName : '',
        // Falls back to the email so a family that never picked a name still
        // shows something a parent recognises as theirs.
        ownerLabel:
          (typeof data.name === 'string' && data.name) ||
          (typeof data.email === 'string' && data.email) ||
          '',
        // Only carried when the family has actually chosen. Defaulting to true
        // here would erase the difference between "on because nobody said
        // otherwise" and "on because a parent switched it back on".
        ...(typeof data.leaderboardEnabled === 'boolean'
          ? { leaderboardEnabled: data.leaderboardEnabled }
          : {}),
      };
    },

    /** Create family metadata lazily: set a default name if none exists yet. */
    async ensureOwnFamily(ownUid: string, defaultName: string): Promise<string> {
      const meta = await this.getFamilyMeta(ownUid).catch(() => null);
      const existing = meta?.name?.trim();
      if (existing) {
        return existing;
      }

      await this.setFamilyName(ownUid, defaultName);
      return defaultName;
    },

    async setFamilyName(familyId: string, name: string): Promise<void> {
      await db.setDoc(
        userDoc(familyId),
        { familyName: name, updatedAt: db.fieldValues.serverTimestamp() },
        { merge: true },
      );
    },

    /**
     * Turn the sibling standings on or off for the whole family.
     *
     * Owner-only in practice: `firestore.rules` limits the family root to
     * `isParentAccount()`, so a child device cannot switch off a board it is
     * losing — which is the entire reason this lives on the family document
     * rather than anywhere a child can reach.
     */
    async setLeaderboardEnabled(familyId: string, enabled: boolean): Promise<void> {
      await db.setDoc(
        userDoc(familyId),
        {
          leaderboardEnabled: enabled,
          updatedAt: db.fieldValues.serverTimestamp(),
        },
        { merge: true },
      );
    },

    async clearFamilyName(familyId: string): Promise<void> {
      await db.setDoc(
        userDoc(familyId),
        {
          familyName: db.fieldValues.delete(),
          updatedAt: db.fieldValues.serverTimestamp(),
        },
        { merge: true },
      );
    },

    async updateMemberLabel(
      familyId: string,
      memberId: string,
      label: string,
    ): Promise<void> {
      const trimmed = label.trim();
      if (!trimmed) {
        const failure: ApiFailure = {
          code: 'conflict',
          messageKey: 'settings.parentMemberNameRequired',
        };
        throw failure;
      }

      await db.setDoc(
        familyMemberDoc(familyId, memberId),
        { label: trimmed },
        { merge: true },
      );
    },

    async fetchMembers(familyId: string): Promise<FamilyMember[]> {
      const snapshot = await db.getDocs(familyMembersCollection(familyId));
      return sortMembers(snapshot.docs.map(mapMember));
    },

    subscribeMembers(
      familyId: string,
      onMembers: (members: FamilyMember[]) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onQuery(
        familyMembersCollection(familyId),
        {},
        snapshot => onMembers(sortMembers(snapshot.docs.map(mapMember))),
        onError,
      );
    },

    async removeMember(familyId: string, memberId: string): Promise<void> {
      await db.deleteDoc(familyMemberDoc(familyId, memberId));
    },

    /**
     * Watch whether this account is still in the family.
     *
     * Two guards, both learned the hard way:
     *
     * 1. **A cache-first snapshot right after joining does not have the new
     *    membership document yet.** Trusting "absent" there signs a parent out
     *    of the family they just joined, so absence only counts from the server.
     * 2. **A revoked read surfaces as permission-denied, not as absence.** Left
     *    unhandled, a removed secondary parent keeps their session. Treating
     *    that failure as removal is what actually ejects them.
     */
    subscribeOwnMembership(
      familyId: string,
      memberId: string,
      onExists: (exists: boolean) => void,
    ): Unsubscribe {
      return db.onDoc(
        familyMemberDoc(familyId, memberId),
        snapshot => {
          if (!snapshot.exists && snapshot.fromCache) {
            return;
          }
          onExists(snapshot.exists);
        },
        error => {
          if ((error as FirestoreError).code === 'permissionDenied') {
            onExists(false);
          }
        },
      );
    },

    /**
     * Forget the active family locally. Used at sign-out and when leaving one.
     *
     * `onFamilyChanged` matters here as much as on the way in: the web-history
     * upload gate is per family, so carrying an "already reported" map into a
     * family whose server counters start at zero would suppress that family's
     * first day of browsing.
     */
    async clearLocalFamilyRef(): Promise<void> {
      await storage.remove(ACTIVE_FAMILY_STORAGE_KEY);
      onFamilyChanged?.();
    },

    /** Persist which family this signed-in account is currently using. */
    async setOwnFamilyRef(ownUid: string, familyId: string | null): Promise<void> {
      await storage.set(ACTIVE_FAMILY_STORAGE_KEY, familyId ?? '');
      onFamilyChanged?.();

      // Best effort: local storage is the authority for the next launch, and
      // this mirror exists so a reinstall can recover the family without it.
      await db
        .setDoc(
          userDoc(ownUid),
          { memberFamilyId: familyId, updatedAt: db.fieldValues.serverTimestamp() },
          { merge: true },
        )
        .catch(() => undefined);
    },

    /**
     * The family root this account reads, from the profile mirror alone.
     *
     * A different question from `resolveActiveFamily`, which consults device
     * memory first because a phone is paired to one family and remembers it. A
     * browser has nothing to remember and no join flow, so the mirror is the
     * only answer — and it must be asked freshly on every sign-in, since the
     * same laptop is used by parents of different families.
     *
     * Errors propagate deliberately. A permission-denied here is how a sign-in
     * with an account that has no KidGate family is told apart from one whose
     * family is merely empty; swallowing it renders a stranger an empty
     * dashboard instead of saying they are in the wrong place.
     */
    async resolveFamilyRootFromProfile(ownUid: string): Promise<string> {
      const profile = await db.getDoc(userDoc(ownUid));
      const mirrored = (profile.data() as Record<string, unknown> | undefined)
        ?.memberFamilyId;

      return typeof mirrored === 'string' && mirrored && mirrored !== ownUid
        ? mirrored
        : ownUid;
    },

    /**
     * Restore the active family after sign-in.
     *
     * Local storage first, the profile mirror second — the mirror is what makes
     * a reinstall land back in the right family instead of the parent's own
     * empty one.
     */
    async resolveActiveFamily(ownUid: string): Promise<string | null> {
      const stored = await storage.get(ACTIVE_FAMILY_STORAGE_KEY);
      if (stored) {
        return stored;
      }

      const profile = await db.getDoc(userDoc(ownUid)).catch(() => null);
      const data = profile?.data() as Record<string, unknown> | undefined;
      return typeof data?.memberFamilyId === 'string' && data.memberFamilyId
        ? data.memberFamilyId
        : null;
    },
  };
}

export type FamilyRepository = ReturnType<typeof createFamilyRepository>;
