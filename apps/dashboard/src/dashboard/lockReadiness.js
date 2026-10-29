import {
  getLockEnforcementIssueKeys,
  getLockNotReadyBodyKey,
} from '@kidgate/core/domain/protectionStatus';

/**
 * The phone's "Lock not ready" refusal (`apps/mobile/src/hooks/useDevice.ts`),
 * from the same core rule: a device no grant lets lock is not sent a lock.
 * This page locked an iPhone without Screen Time and said "Lock sent" while
 * every app but KidGate stayed open (2026-10-29). Null when it can lock.
 */
export function lockNotReadyMessage(device, appT) {
  const issues = getLockEnforcementIssueKeys(device);
  if (issues.length === 0) return null;
  const needs = issues.map(issue => appT(issue.labelKey)).join(', ');
  return `${appT(getLockNotReadyBodyKey(device.platform))} ${needs}.`;
}

/**
 * Lock or unlock each device in turn — `setLock` is per machine. A lock skips
 * what cannot hold one and hands `run` the reason, as the phone's Lock all
 * does device by device; an unlock is never refused.
 */
export async function setLockEach(devices, locked, actions, appT) {
  let refusedMessage = null;
  for (const device of devices) {
    const notReady = locked ? lockNotReadyMessage(device, appT) : null;
    if (notReady) {
      refusedMessage ??= notReady;
      continue;
    }
    await actions.setLock(device.id, locked);
  }
  return refusedMessage ? { refusedMessage } : undefined;
}
