/**
 * Who did the thing an activity row records.
 *
 * A feed row stores `actorUserId` / `actorParentDeviceId` and never a name —
 * a parent who renames themselves must not leave a year of rows quoting the
 * old one — so the name is resolved at render time, on every surface that
 * shows the feed. `family.parentPausedChildDevice` and its siblings then take
 * it as the `actorName` param of `resolveActivityCopy`.
 *
 * This lived inside `apps/mobile`'s `useActivityActorLookup` while the phone
 * was the only reader. `apps/dashboard` shipped without it and rendered the
 * literal `{{actorName}}` on every lock and unlock row; the fix is one rule
 * both call, not a second one that agrees today.
 *
 * `translate` is a parameter, and it is the **app** key space — `family.*`,
 * not the web packs. On the dashboard that is `@kidgate/i18n/activityFeed`.
 */

import { isMissingPersonName } from './personName';

export type ActivityActorNames = {
  /** The owner's uid. A row whose `actorUserId` equals it was written by them. */
  familyId: string | null;
  /** Secondary parents, by their own uid. Empty string means "no usable name". */
  memberNamesByUserId: Record<string, string>;
  /** Parent devices, by device id. */
  parentNamesByDeviceId: Record<string, string>;
  /** The owner's stored person name (or email), when it is a real one. */
  ownerLabel: string | null;
  /**
   * The signed-in parent's own name, and only when they are the owner. Live
   * state beats the stored label: a parent who just renamed themselves sees it
   * on their own rows without waiting for the family document to be re-read.
   */
  sessionOwnerName?: string | null;
};

export const EMPTY_ACTIVITY_ACTOR_NAMES: ActivityActorNames = {
  familyId: null,
  memberNamesByUserId: {},
  parentNamesByDeviceId: {},
  ownerLabel: null,
  sessionOwnerName: null,
};

/** The owner's label, or null when it is a placeholder rather than a name. */
export function usableOwnerLabel(label?: string | null): string | null {
  const trimmed = label?.trim() ?? '';
  return trimmed && !isMissingPersonName(trimmed, null) ? trimmed : null;
}

/**
 * `{ [memberUid]: name }` from the membership list.
 *
 * A member with neither a label nor a device name maps to `''` rather than
 * being left out: present-but-nameless and gone-from-the-family both read as
 * "former parent", and collapsing them here would lose nothing but costs a
 * branch at every call site.
 */
export function buildMemberActorNames(
  members: readonly { id: string; label: string; deviceName?: string | null }[],
): Record<string, string> {
  const names: Record<string, string> = {};
  for (const member of members) {
    names[member.id] = member.label.trim() || member.deviceName?.trim() || '';
  }
  return names;
}

/** The name a row shows for its actor, in the reader's language. */
export function resolveActivityActorName(
  names: ActivityActorNames,
  translate: (key: string) => string,
  actorUserId?: string | null,
  actorParentDeviceId?: string | null,
): string {
  const uid = actorUserId?.trim() || '';
  const parentDeviceId = actorParentDeviceId?.trim() || '';
  const parentDeviceName = parentDeviceId
    ? names.parentNamesByDeviceId[parentDeviceId]
    : undefined;

  if (!uid && !parentDeviceId) {
    return translate('family.parentFallback');
  }

  // Joined parent — prefer membership label (person name).
  if (uid && names.familyId && uid !== names.familyId) {
    return names.memberNamesByUserId[uid] || translate('family.formerParent');
  }

  // Owner — prefer person name over parent-device name.
  if (uid && names.familyId && uid === names.familyId) {
    const liveOwnerName = usableOwnerLabel(names.sessionOwnerName);
    if (liveOwnerName) {
      return liveOwnerName;
    }
    if (names.ownerLabel) {
      return names.ownerLabel;
    }
    if (parentDeviceName) {
      return parentDeviceName;
    }
    return translate('family.parentFallback');
  }

  if (parentDeviceName) {
    return parentDeviceName;
  }

  return translate('family.parentFallback');
}
