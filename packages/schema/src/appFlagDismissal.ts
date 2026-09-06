/**
 * A parent saying "this one is fine" about an app the classifier flagged.
 *
 * The app inventory's "Worth a look" group names apps and — until this — did
 * nothing else, so a parent who had already looked at every row had no way to
 * put it down. `docs/FEASIBILITY.md`, "A parent action on a flagged app".
 *
 * ## This is an annotation, not a control
 *
 * **No agent reads it.** Nothing enforces it, nothing derives a policy from it,
 * and the child device is never told. All it changes is which group a row lands
 * in on a parent's screen — `buildAppInventoryReport` moves it out of `flagged`
 * and into `dismissed`, where it stays visible and reversible. That is the whole
 * blast radius, and it is why this is a client write with no Cloud Function
 * behind it: there is nothing for a server to verify that `firestore.rules`
 * does not already say.
 *
 * ## Why the scope is the child, and why a device still gets a document
 *
 * A parent deciding an app is fine has decided it about a **person**: fine for
 * the sixteen-year-old says nothing about the eight-year-old, and saying it
 * once per machine is the same sentence typed twice. But the Apps screen is
 * per-device on both parent surfaces — `apps` is deliberately not in
 * `PERSON_LEVEL_ACTION_IDS` — so a device with no `childId` reaches the control
 * too. It gets a document keyed by its own id, in this same collection, rather
 * than a second field somewhere else: two homes for one fact is the shape
 * `parentBlockedPackages` was invented to avoid (`docs/FEASIBILITY.md`,
 * "Parent-set app blocking").
 *
 * ## The category travels with the dismissal, and that is the point
 *
 * A parent waving off a `gaming` flag has answered *that* claim. If the nightly
 * classifier later moves the same app to `dating`, the flag is a different
 * sentence and must come back — so the entry stores what was dismissed, and
 * `appFlagDismissed` compares. Storing a bare id would apply a parent's "fine"
 * to a claim they never read.
 */

import type { AppCategory } from './aiApps';
import { appFlagDismissalsCollection } from './paths';

export { appFlagDismissalsCollection };

/**
 * Longest list stored per scope.
 *
 * A bound on a client-supplied array landing in a document, the same class of
 * input `approvedPackages` and the inventory itself are capped for — not an
 * expected size. A family that has waved off sixty flagged apps has told us
 * something about the classifier rather than about their child, and the cap is
 * far above any real answer.
 */
export const MAX_APP_FLAG_DISMISSALS = 100;

/** One app a parent has answered for, and the claim they answered. */
export interface AppFlagDismissal {
  /** The inventory row's id — a package name, or a namespaced extension id. */
  appId: string;
  /** The category that was flagged when the parent dismissed it. */
  category: AppCategory;
  /** When they said so, epoch ms. Used to evict the oldest at the cap. */
  at: number;
}

/** One scope's answers, as stored. */
export interface AppFlagDismissals {
  entries: AppFlagDismissal[];
}

/**
 * The document id for a device's answers.
 *
 * Prefixed rather than bare, because a child id and a device id are both
 * opaque strings from the same generator and a collision would silently merge
 * two families of answers into one. The prefix also lets an unpair find the
 * device-scoped documents without reading anything.
 */
export function appFlagScopeId(scope: {
  childId?: string | null | undefined;
  deviceId: string;
}): string {
  return scope.childId ? `child:${scope.childId}` : `device:${scope.deviceId}`;
}

/** The prefix an unpair cleans up. A child-scoped document outlives a device. */
export const APP_FLAG_DEVICE_SCOPE_PREFIX = 'device:';

export function appFlagDismissalsDoc(userId: string, scopeId: string): string {
  return `${appFlagDismissalsCollection(userId)}/${scopeId}`;
}

/**
 * Whether this app's current flag has already been answered.
 *
 * Takes the category being flagged **now**, never the one stored — see the
 * header. A row whose classification moved is a new claim.
 */
export function appFlagDismissed(
  entries: readonly AppFlagDismissal[],
  appId: string,
  category: AppCategory,
): boolean {
  return entries.some(entry => entry.appId === appId && entry.category === category);
}
