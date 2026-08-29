import type { DeviceControls } from '@kidgate/schema/deviceControls';

/**
 * Fingerprint of the parent-authored half of a device's controls — the value
 * a child agent stamps into `Device.appliedPolicy` after pushing policy into
 * its native enforcement layer.
 *
 * Deliberately narrower than the enforcement re-apply keys the agents keep
 * for themselves (`apps/mobile`'s `buildPolicyKey`): those include derived,
 * time-volatile state — the lock, "inside a schedule window right now", the
 * effective bonus-adjusted limit — because they decide when to re-push
 * natively. Stamped into Firestore, each of those flips would be a document
 * write and a no-op `notifyChildDeviceCommand` invocation at every window
 * boundary on every device, forever. This covers exactly what a parent edits,
 * so the stamp moves at most once per policy change.
 *
 * `controls.dailyLimitMinutes` is included even though on an assigned device
 * it is the server's budget allocation: the allocation moving *is* the policy
 * the device enforces changing, and the usage-report write that moves it
 * already fires the update trigger this write would coalesce with.
 */
export function controlsPolicyFingerprint(
  controls: DeviceControls | undefined,
): string {
  if (!controls) {
    return 'none';
  }
  const list = (value: readonly string[] | undefined): string =>
    (value ?? []).join(',');
  return [
    controls.scheduleEnabled === true,
    (controls.scheduleWindows ?? [])
      .map(window => `${window.start}-${window.end}@${(window.days ?? []).join('')}`)
      .join(','),
    controls.dailyLimitMinutes ?? '',
    controls.appBlockingEnabled === true,
    controls.blockedAppsConfigured === true,
    controls.messageMonitoringEnabled === true,
    controls.messageMonitoringOutgoingEnabled === true,
    controls.webFilterEnabled === true,
    list(controls.webFilterCategories),
    list(controls.webFilterAllowList),
    list(controls.webFilterBlockList),
    controls.webFilterAllowListOnly === true,
    (controls.appLimits ?? [])
      .map(limit => `${limit.id}:${limit.minutes}`)
      .sort()
      .join(','),
  ].join('|');
}
