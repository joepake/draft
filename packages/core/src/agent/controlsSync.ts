/**
 * The parent's settings reaching a child device — over a Firestore listener,
 * not push.
 *
 * Shared by every child agent that stays running: `apps/desktop` on both
 * desktops, `apps/tv` on Android TV. It lived in `apps/desktop` first and moved
 * here the moment there was a second one — the alternative was a TV that
 * decided correctly against a policy nothing ever delivered.
 *
 * `apps/mobile` receives control changes as FCM data messages, because a phone
 * app is usually not running and a push is the only thing that can wake it. That
 * constraint does not exist here: launchd (or, on a TV, the launcher) keeps the agent alive, so a live
 * `onDoc` listener on the child device document delivers the same changes with
 * lower latency, no APNs registration, no service worker, and no push
 * certificate to renew.
 *
 * It also removes a whole class of bug the phone has to live with. A push
 * carries a *copy* of the fields it announces, so a dropped or out-of-order
 * message leaves the device enforcing something the document does not say. A
 * snapshot is the document.
 *
 * `handleChildRemotePush` on mobile handles `device_locked`, `device_unlocked`,
 * `daily_limit_updated`, `time_request_approved` and `location_request`. The
 * first four are all fields of this document, so they arrive here for free. Only
 * `location_request` — "answer with your position right now" — is a genuine
 * command rather than a state change, and it is listed in the docs as needing
 * its own channel once location lands.
 */

import { childPolicyKey, deriveChildPolicy } from '@kidgate/core/domain/childPolicy';
import { parseDeviceControls } from '@kidgate/core/domain/deviceControlsMapper';
import type { DeviceControls } from '@kidgate/schema/deviceControls';
import { childDeviceDoc } from '@kidgate/schema/paths';
import type { AppRef } from '@kidgate/schema/primitives';
import type { ClockPort } from '@kidgate/ports/clock';
import type { DocData, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { EnforcementHost } from '@kidgate/ports/enforcement/host';

export interface ControlsSyncDeps {
  db: FirestorePort;
  host: EnforcementHost;
  clock: ClockPort;
  /** The family owner's uid — a child device signs in under it. */
  uid: string;
  deviceId: string;
  /**
   * Apps this device blocks, held locally.
   *
   * A function rather than a value because the child can change the selection
   * behind the Parent PIN while the listener is running. The blocked set is
   * never in the document — see `deriveChildPolicy` for why.
   */
  blockedApps: () => readonly AppRef[];
  /**
   * The device document is gone: this device was unpaired from the family.
   *
   * Only ever called for a server snapshot. A cache-first read taken moments
   * after pairing does not have the document yet, and treating that as an
   * unpair would sign the agent out of the family it just joined —
   * `DocSnapshot.fromCache` exists for exactly this distinction.
   */
  onUnpaired: () => void;
  /**
   * The parsed controls, on every snapshot.
   *
   * `ChildPolicy` deliberately carries only what enforcement acts on, and some
   * parent switches are not that — `locationSharingEnabled` decides whether a
   * fix is even requested, which is a reporting decision rather than an
   * enforcement one. Handing the whole object over keeps `deriveChildPolicy`
   * from growing fields it does not use.
   */
  onControls?: (controls: DeviceControls) => void;
  /**
   * The device document's own fields, on every snapshot.
   *
   * Separate from `onControls` because none of these are controls: the name is
   * what a parent typed in the dashboard, and the PIN lockout is a counter the
   * server keeps. The Settings screen shows both, and reading them from this
   * listener rather than with a second `getDoc` means a rename made on the
   * phone reaches this device's own screen without a relaunch.
   */
  onDeviceMeta?: (meta: ChildDeviceMeta) => void;
  /**
   * A parent pressed "Locate now" — answer with a fix, then clear the request.
   *
   * The one genuine *command* in this product, and the reason it can ride this
   * listener at all is that it was modelled as a field
   * (`Device.locationRequestId`) rather than as a message. A phone gets the
   * same request as an FCM data message because a phone app is usually dead;
   * an agent that is always running does not need one.
   *
   * **Delivered once per id.** The listener fires on every change to this
   * document, and the request stays on it until the device clears it — so a
   * heartbeat write, a rename or a schedule edit arriving in between would each
   * re-deliver the same request. The handler is expected to clear the field;
   * the dedupe below is what keeps a slow or failed answer from becoming a
   * fix-per-snapshot loop while it has not.
   */
  onLocationRequest?: (requestId: string) => void;
  onError?: (error: Error) => void;
}

/** What the Settings screen reads off the device document. */
export interface ChildDeviceMeta {
  /** The name the family gave this device, or null while it has none. */
  name: string | null;
  /** Too many wrong PINs. Only a parent can clear it. */
  parentPinLocked: boolean;
  parentPinFailedAttempts: number;
}

export interface ControlsSync {
  stop(): void;
  /** The policy key currently applied, or null before the first snapshot. */
  appliedKey(): string | null;
  /**
   * Re-read and re-apply now.
   *
   * The listener only fires when the *document* changes, and half the policy
   * does not live there: the blocked-app list is local, so a child finishing
   * with the picker changes what should be enforced without changing anything
   * Firestore would notify about.
   */
  refresh(): Promise<void>;
}

export function startControlsSync(deps: ControlsSyncDeps): ControlsSync {
  const { db, host, clock, uid, deviceId } = deps;
  let appliedKey: string | null = null;
  let stopped = false;
  /** The last request handed to `onLocationRequest`. See that field. */
  let answeredLocationRequest: string | null = null;

  const apply = async (data: DocData | undefined): Promise<void> => {
    const controls = parseDeviceControls(data);
    deps.onControls?.(controls);

    /*
     * Ahead of the policy-key short circuit below, not after it. The name and
     * the lockout are not part of the key — a parent renaming the Mac changes
     * nothing about what is enforced — so anything reported past that return
     * would only arrive on the next unrelated policy change.
     */
    deps.onDeviceMeta?.({
      name: typeof data?.name === 'string' ? data.name.trim() || null : null,
      parentPinLocked: data?.parentPinLocked === true,
      parentPinFailedAttempts:
        typeof data?.parentPinFailedAttempts === 'number'
          ? data.parentPinFailedAttempts
          : 0,
    });

    /*
     * Also ahead of the policy-key short circuit, and for a stronger reason
     * than the meta above: a request is not part of the key at all, so a
     * "Locate now" arriving while the policy is unchanged — which is the usual
     * case — would otherwise be dropped by that return and never delivered.
     */
    const requestId =
      typeof data?.locationRequestId === 'string' ? data.locationRequestId.trim() : '';
    if (requestId && requestId !== answeredLocationRequest) {
      answeredLocationRequest = requestId;
      deps.onLocationRequest?.(requestId);
    } else if (!requestId) {
      // Cleared, by this device or by the server. The next request may reuse an
      // id this one has already seen only if it is a genuinely new one, and
      // forgetting here is what makes that safe.
      answeredLocationRequest = null;
    }

    const policy = deriveChildPolicy({
      isLocked: data?.isLocked === true,
      controls,
      blockedApps: deps.blockedApps(),
      nowMs: clock.now(),
    });

    const key = childPolicyKey(policy);
    if (key === appliedKey) {
      return;
    }

    /*
     * Order matters. Windows, the limit and the app policy are set first, then
     * `lock.apply` — which re-evaluates and asserts the lock. Applying the
     * shield first would decide against the *previous* schedule and leave the
     * device locked or unlocked on stale inputs until the next tick.
     */
    await host.schedule.setWindows([...policy.windows]);
    await host.schedule.setDailyLimit(policy.dailyLimitMinutes);
    await host.appPolicy.apply(policy.appPolicy);
    await host.lock.apply(policy.shield);

    appliedKey = key;
  };

  const unsubscribe: Unsubscribe = db.onDoc(
    childDeviceDoc(uid, deviceId),
    snapshot => {
      if (stopped) {
        return;
      }
      if (!snapshot.exists) {
        if (!snapshot.fromCache) {
          deps.onUnpaired();
        }
        return;
      }
      void apply(snapshot.data()).catch(error => deps.onError?.(error as Error));
    },
    error => deps.onError?.(error),
  );

  return {
    stop() {
      stopped = true;
      unsubscribe();
    },
    appliedKey: () => appliedKey,
    async refresh() {
      if (stopped) {
        return;
      }
      const snapshot = await db.getDoc(childDeviceDoc(uid, deviceId));
      if (snapshot.exists) {
        await apply(snapshot.data());
      }
    },
  };
}
