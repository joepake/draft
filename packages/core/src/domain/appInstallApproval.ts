/**
 * App install quarantine — the rule, in one place.
 *
 * A parent switches it on; from that instant every app the child installs is
 * blocked until the parent approves it. The child device decides at launch
 * time from the OS's own install timestamp, so the rule does not depend on the
 * install having been observed live (`docs/FEASIBILITY.md`, "App install
 * quarantine"). This module is that rule for every reader: the device's policy
 * (`childPolicy`), the parent's inventory rows (`appInventoryReport`), and the
 * parent's pending list drawn from the activity feed — so the row a parent is
 * looking at and the refusal the child just met cannot disagree.
 */

import type { Activity } from '@kidgate/schema/activity';
import type { DeviceControls } from '@kidgate/schema/deviceControls';
import type { AppInstallApprovalPolicy } from '@kidgate/schema/policy';
import type { Millis } from '@kidgate/schema/primitives';

/**
 * The parent's document turned into the policy the device enforces, or `null`
 * while the switch is off.
 *
 * Null rather than a policy with `sinceMs: 0`: absent means "no quarantine",
 * and a zero line would quarantine every app on the phone. The `since` stamp is
 * required — a switch that reads on without one is a document a client wrote
 * directly, which `firestore.rules` refuses, or one mid-write; either way the
 * device enforces nothing until the server's stamp arrives.
 */
export function resolveInstallApprovalPolicy(
  controls: Pick<
    DeviceControls,
    'appInstallApprovalEnabled' | 'appInstallApprovalSinceMs' | 'approvedPackages'
  >,
): AppInstallApprovalPolicy | null {
  if (controls.appInstallApprovalEnabled !== true) {
    return null;
  }
  const sinceMs = controls.appInstallApprovalSinceMs;
  if (typeof sinceMs !== 'number' || !Number.isFinite(sinceMs) || sinceMs <= 0) {
    return null;
  }
  const approved = new Set<string>();
  for (const id of controls.approvedPackages ?? []) {
    if (typeof id === 'string' && id.trim()) {
      approved.add(id.trim());
    }
  }
  return { sinceMs, approved: [...approved].sort() };
}

/**
 * Whether one package may not be opened.
 *
 * `installedAtMs` is the OS's install time. Unknown (`null`) is **not**
 * quarantined: an app the device cannot date is an app that predates the
 * question on every platform that reports one, and refusing it would lock a
 * child out of what was already on the phone.
 */
export function isInstallQuarantined(
  packageName: string,
  installedAtMs: Millis | null | undefined,
  policy: AppInstallApprovalPolicy | null,
): boolean {
  if (!policy) {
    return false;
  }
  if (typeof installedAtMs !== 'number' || !Number.isFinite(installedAtMs)) {
    return false;
  }
  if (installedAtMs <= policy.sinceMs) {
    return false;
  }
  return !policy.approved.includes(packageName);
}

export type InstallApprovalState = 'pending' | 'approved';

/**
 * How a parent screen labels one row, or `null` when the row is simply an app.
 *
 * `approved` is only ever said about an app that would otherwise be pending —
 * an app installed before the line was never in question, and calling it
 * approved would suggest the parent did something they did not.
 */
export function installApprovalState(
  packageName: string,
  installedAtMs: Millis | null | undefined,
  policy: AppInstallApprovalPolicy | null,
): InstallApprovalState | null {
  if (!policy) {
    return null;
  }
  if (typeof installedAtMs !== 'number' || !Number.isFinite(installedAtMs)) {
    return null;
  }
  if (installedAtMs <= policy.sinceMs) {
    return null;
  }
  return policy.approved.includes(packageName) ? 'approved' : 'pending';
}

/** One app waiting on the parent, as read off the activity feed. */
export interface PendingInstall {
  deviceId: string;
  packageName: string;
  label: string;
  /** ISO timestamp of the install row. */
  installedAt: string;
}

/**
 * The apps a parent still has to answer for one device, from its feed.
 *
 * Drawn from `app_installed` rows rather than from the inventory because the
 * feed is immediate — the device posts the row the moment the install lands —
 * while the inventory is a daily scan. An `app_removed` row that follows an
 * install takes the app off the list: nothing is waiting on an app that is no
 * longer there. Newest first; one entry per package.
 *
 * Rows before the parent's `since` line are not this feature's business, and
 * a row with no `packageName` cannot be approved, so both are skipped.
 */
export function pendingInstallsFromActivities(
  activities: readonly Activity[],
  policy: AppInstallApprovalPolicy | null,
  deviceId?: string,
): PendingInstall[] {
  if (!policy) {
    return [];
  }
  const removedAfter = new Map<string, number>();
  const pending = new Map<string, PendingInstall>();
  // The feed is newest-first in every reader; sorting here rather than
  // trusting that keeps the "removed after installed" comparison honest.
  const rows = [...activities].sort(
    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
  );
  for (const row of rows) {
    if (deviceId && row.deviceId !== deviceId) {
      continue;
    }
    const packageName =
      typeof row.params?.packageName === 'string' ? row.params.packageName : '';
    if (!packageName) {
      continue;
    }
    const atMs = Date.parse(row.createdAt);
    if (!Number.isFinite(atMs) || atMs <= policy.sinceMs) {
      continue;
    }
    const key = `${row.deviceId}:${packageName}`;
    if (row.type === 'app_removed') {
      removedAfter.set(key, Math.max(removedAfter.get(key) ?? 0, atMs));
      continue;
    }
    if (row.type !== 'app_installed' || pending.has(key)) {
      continue;
    }
    if ((removedAfter.get(key) ?? 0) > atMs) {
      continue;
    }
    if (policy.approved.includes(packageName)) {
      continue;
    }
    const label =
      typeof row.params?.appName === 'string' && row.params.appName.trim()
        ? row.params.appName.trim()
        : packageName;
    pending.set(key, {
      deviceId: row.deviceId,
      packageName,
      label,
      installedAt: row.createdAt,
    });
  }
  return [...pending.values()];
}

/**
 * The next `approvedPackages` after a parent lets one app through.
 *
 * Returned sorted and de-duplicated so two parents approving from two screens
 * produce the same document however the writes land, and so the policy key
 * on the device moves exactly once.
 */
export function withApprovedPackage(
  approved: readonly string[] | undefined,
  packageName: string,
): string[] {
  const next = new Set(approved ?? []);
  next.add(packageName);
  return [...next].sort();
}

/**
 * A string that changes exactly when the quarantine policy does — folded into
 * `childPolicyKey` and the phone's own policy key.
 */
export function installApprovalKey(policy: AppInstallApprovalPolicy | null): string {
  if (!policy) {
    return 'off';
  }
  return `${policy.sinceMs}:${policy.approved.join(',')}`;
}
