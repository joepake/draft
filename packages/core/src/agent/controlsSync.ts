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
import {
  parseAiWebDomains,
  parseDeviceControls,
} from '@kidgate/core/domain/deviceControlsMapper';
import type { ParentPinVerifier } from '@kidgate/schema/device';
import type { DeviceControls } from '@kidgate/schema/deviceControls';
import { childDeviceDoc, userDoc } from '@kidgate/schema/paths';
import type { AppRef } from '@kidgate/schema/primitives';
import type { ClockPort } from '@kidgate/ports/clock';
import type {
  DocData,
  FirestoreError,
  FirestorePort,
  Unsubscribe,
} from '@kidgate/ports/firestore';
import type { AppPolicyPort } from '@kidgate/ports/enforcement/appPolicy';
import type { LockPort } from '@kidgate/ports/enforcement/lock';
import type { SchedulePort } from '@kidgate/ports/enforcement/schedule';
import type { WebFilterPort } from '@kidgate/ports/enforcement/webFilter';
import { confirmDeviceRemoved } from '@kidgate/core/agent/sessionGuard';

/**
 * The slice of `EnforcementHost` this listener applies policy through — every
 * surface optional, absent when the platform has nothing to apply it with.
 *
 * A full `EnforcementHost` satisfies it structurally, which is how the desktop
 * and TV agents keep passing their host unchanged. It exists because
 * `apps/extension` arrived: a browser extension enforces the web filter and
 * nothing else, and the alternative was `LockPort` / `AppPolicyPort` stubs
 * whose `strength` field has no honest value — the "present-and-throwing"
 * shape the ports layer forbids. Absence here mirrors absence in the
 * capability document; the parent UI reads the document, not the port.
 */
export interface ControlsSyncHost {
  schedule?: SchedulePort;
  appPolicy?: AppPolicyPort;
  lock?: LockPort;
  webFilter?: WebFilterPort;
}

export interface ControlsSyncDeps {
  db: FirestorePort;
  host: ControlsSyncHost;
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
   * This device is no longer in the family.
   *
   * **Two ways that arrives, and the second one was missing.** The obvious one
   * is the document being gone — and only for a *server* snapshot, because a
   * cache-first read taken moments after pairing does not have the document yet
   * and treating that as an unpair would sign the agent out of the family it
   * just joined; `DocSnapshot.fromCache` exists for that distinction.
   *
   * The other is **permission-denied on the listener itself**, which is what a
   * removed device actually sees. `firestoreError.ts` says so in as many words
   * for the parent case — "a revoked secondary parent sees their listener fail
   * with permission-denied rather than with an absent document, and treating
   * the two alike would leave a removed parent holding a live session" — and
   * this listener treated it as a plain error and carried on. A television
   * removed from a family therefore kept its session, kept showing the family's
   * name, and kept enforcing that family's bedtime, with the refusal reported
   * into an `onError` its caller had not passed.
   *
   * **A refusal is checked before it is believed** — see `confirmDeviceRemoved`
   * and `refreshAuth` below. It used to be acted on the instant it arrived, on
   * the argument that a false positive costs only a re-pair; that argument
   * undercounted. A device that unpairs itself wrongly stops enforcing until a
   * person notices and re-pairs it by hand, and the refusal that triggered it
   * was routinely a cold start with no network rather than a parent's decision.
   * The check settles which one it was; a false negative still lasts only until
   * the next re-attach.
   */
  onUnpaired: () => void;
  /**
   * Force a fresh ID token. Passed by every surface that holds its auth object.
   *
   * Optional only because `apps/tv` reaches Firestore through a different SDK;
   * `confirmDeviceRemoved` still re-reads the document without it. See that
   * file for why an unrefreshed token makes a refusal unprovable.
   */
  refreshAuth?: () => Promise<unknown>;
  /**
   * Wait between re-attach attempts. Injected so a test spends no real seconds.
   */
  wait?: (ms: number) => Promise<void>;
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
  /**
   * The policy just changed and has been applied — not merely a snapshot.
   *
   * Fires past the `childPolicyKey` short circuit, so it is silent on the
   * snapshots that carry no change, which is most of them. That is the whole
   * difference from `onControls`: a listener wired to that one would fire on
   * every metadata echo.
   *
   * **What it is for is a display, not enforcement.** Everything a policy
   * change enforces is already done above by the time this runs. What is not
   * done is the agent's `TickResult` — the object a child-facing status screen
   * reads — which is whatever the last tick produced and stays that way until
   * the next one. So a parent who unlocked the device saw it unlock and then
   * read "Locked" on the screen beside it for up to another interval, and for
   * as long as the tick was stalled if it was. The lock window was already
   * down; only the sentence was wrong. Callers answer this by running a cycle
   * now.
   */
  onApplied?: () => void;
  /**
   * The server's own clock, off a snapshot that came from the server.
   *
   * `lastActiveAt` is written by `agent/childBeat` as `serverTimestamp()` once a
   * minute, so what comes back down this listener is the server's reading of
   * when that write landed. `agent/serverTimeOffset` turns it into the offset
   * every enforcement comparison runs through — the point being that this costs
   * no read, no write and no endpoint that did not already exist.
   *
   * **Fired only when `fromCache` is false.** A cached snapshot resolves a
   * pending `serverTimestamp()` against *this device's* clock, so handing one
   * over would feed the child's own setting back as the server's and derive an
   * offset of zero. That is the whole failure mode, so the guard is at both
   * call sites rather than left to the handler.
   */
  onServerTime?: (lastActiveAt: unknown) => void;
  onError?: (error: Error) => void;
  /**
   * How often to re-read the document directly, whatever the stream is doing.
   *
   * **A listener that dies without an error is the failure this answers.** The
   * re-attach schedule below is armed by `onError`, and every error the SDK
   * raises does arm it — but a stream can stop delivering without raising
   * anything at all. Measured on `apps/desktop`: a WKWebView suspended with a
   * WebChannel open comes back with a socket the SDK still believes in, so no
   * `onError` fires, `recover` never runs, and the device enforces the last
   * policy it was handed for as long as the process lives. A parent's web-filter
   * change simply never arrives, and nothing anywhere says so.
   *
   * `refresh()` already existed for the local half of the policy; this is the
   * same read on a timer, and it is a *delivery path* rather than a health
   * check — a poll that lands applies the parent's change even on a run where
   * the stream never recovers.
   */
  pollIntervalMs?: number;
  /**
   * How long with no server-sourced document may pass before the listener is
   * rebuilt from scratch.
   *
   * Counted from the last snapshot or poll that did **not** come from the
   * cache: an offline SDK answers `getDoc` from its cache instantly and
   * forever, so a poll that succeeds is not on its own evidence of a live
   * connection. `DocSnapshot.fromCache` is what tells the two apart.
   */
  staleAfterMs?: number;
  /**
   * Nothing has reached this device from the server for `staleAfterMs`.
   *
   * Reported before the rebuild rather than after, so the log carries the
   * silence that triggered it even when the rebuild then fixes it. The
   * argument is `cloud.rs`'s `note_stall`: a channel that delivers nothing
   * must be louder than one that delivers.
   */
  onStalled?: (silentForMs: number) => void;
  /** Injected so the poll rides a clock the host cannot throttle. */
  setIntervalImpl?: typeof setInterval;
  clearIntervalImpl?: typeof clearInterval;
}

/** What the Settings screen reads off the device document. */
export interface ChildDeviceMeta {
  /** The name the family gave this device, or null while it has none. */
  name: string | null;
  /** Too many wrong PINs. Only a parent can clear it. */
  parentPinLocked: boolean;
  parentPinFailedAttempts: number;
  /**
   * The Parent PIN in a form this device can check with no network.
   *
   * Null on a family whose PIN predates the verifier, on one with no PIN, and
   * on any device whose document has not carried it yet — all of which mean the
   * same thing to a caller: there is no offline check to offer.
   *
   * Only `apps/tv` acts on it today, where a locked television removed from its
   * family has no other way back. `apps/desktop` reads the same meta and
   * ignores this field; a Mac that loses its family is a Mac a parent can still
   * reach.
   */
  parentPinVerifier: ParentPinVerifier | null;
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

/**
 * Read the verifier off the document, or answer null.
 *
 * Every field is checked rather than trusted, and a value missing any of them
 * is discarded whole. A half-formed verifier is worse than none: the device
 * would store it, offer the unlock button, and refuse the family's correct PIN
 * on the one screen that exists to let them back in.
 */
function parseParentPinVerifier(value: unknown): ParentPinVerifier | null {
  if (!value || typeof value !== 'object') {
    return null;
  }
  const candidate = value as Record<string, unknown>;
  const version = candidate.version;
  const algorithm = candidate.algorithm;
  const iterations = candidate.iterations;
  const salt = candidate.salt;
  const hash = candidate.hash;

  if (
    typeof version !== 'number' ||
    typeof algorithm !== 'string' ||
    typeof iterations !== 'number' ||
    iterations <= 0 ||
    typeof salt !== 'string' ||
    !salt ||
    typeof hash !== 'string' ||
    !hash
  ) {
    return null;
  }

  return { version, algorithm, iterations, salt, hash };
}

/**
 * How long to wait before re-attaching a listener the server dropped.
 *
 * A dropped listener is a device that has stopped receiving policy while still
 * believing it is enforcing the current one, so the first retry is quick; the
 * ceiling keeps a genuinely unreachable backend from being hammered. The last
 * value repeats for as long as the failure lasts.
 */
const REATTACH_DELAYS_MS = [2_000, 5_000, 15_000, 30_000];

/**
 * Two minutes between direct re-reads.
 *
 * Cheap enough to leave running forever — one document read per device per two
 * minutes — and short enough that a parent who changes the web filter while
 * this device's stream is dead waits minutes rather than until the next
 * relaunch. It is the floor under the stream, not a replacement for it: the
 * stream still delivers in under a second on a healthy run, and that is what
 * `onApplied` and the lock rely on.
 */
export const POLL_INTERVAL_MS = 120_000;

/**
 * Five minutes of nothing from the server before the listener is rebuilt.
 *
 * Two polls plus slack. Lower would rebuild during an ordinary phone-tethered
 * outage, and a rebuild is not free — it re-reads the document and re-runs
 * `attach` on both listeners. Higher and the silent-death window this exists
 * to close stays open long enough for a parent to notice it first.
 */
export const STALE_AFTER_MS = 300_000;

const defaultWait = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

export function startControlsSync(deps: ControlsSyncDeps): ControlsSync {
  const { db, host, clock, uid, deviceId } = deps;
  const wait = deps.wait ?? defaultWait;
  const startTimer = deps.setIntervalImpl ?? setInterval;
  const stopTimer = deps.clearIntervalImpl ?? clearInterval;
  const pollIntervalMs = deps.pollIntervalMs ?? POLL_INTERVAL_MS;
  const staleAfterMs = deps.staleAfterMs ?? STALE_AFTER_MS;
  let appliedKey: string | null = null;
  let stopped = false;
  /** The last request handed to `onLocationRequest`. See that field. */
  let answeredLocationRequest: string | null = null;
  /**
   * When the server was last heard from — a snapshot or a poll, either way one
   * that did not come out of the cache.
   *
   * Seeded with now rather than zero, so a device that starts offline is given
   * the same grace as one that goes quiet later instead of rebuilding its
   * listener on the first poll of every cold start.
   */
  let lastServerDeliveryMs = clock.now();
  /** One poll at a time — a slow read must not stack behind itself. */
  let polling = false;
  /** True while `recover` owns the re-attach. The watchdog stands off then. */
  let recovering = false;
  let pollHandle: ReturnType<typeof setInterval> | null = null;

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
      parentPinVerifier: parseParentPinVerifier(data?.parentPinVerifier),
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
      // Server-written and client-immutable; changes land through this same
      // listener and move the policy key via the web-filter term.
      aiBlockedDomains: parseAiWebDomains(data),
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
    await host.schedule?.setWindows([...policy.windows]);
    await host.schedule?.setDailyLimit(policy.dailyLimitMinutes);
    await host.appPolicy?.apply(policy.appPolicy);
    await host.lock?.apply(policy.shield);

    /*
     * Only where the port exists — today the macOS agent; a TV or a Windows
     * host without one skips this line and nothing else changes. Policy before
     * the switch, so an enable never applies yesterday's rules. Last of the
     * four on purpose: saving a filter configuration is the one call here that
     * raises OS UI (the "filter network content" approval), and it must not
     * delay the lock landing.
     */
    if (host.webFilter) {
      await host.webFilter.setPolicy(policy.webFilter);
      await host.webFilter.setEnabled(policy.webFilter.enabled);
    }

    appliedKey = key;
    deps.onApplied?.();
  };

  let unsubscribe: Unsubscribe | null = null;
  let unsubscribeFamily: Unsubscribe | null = null;
  /** Consecutive failures, reset by any snapshot that arrives. */
  let failures = 0;

  /**
   * The listener is gone — decide whether the family is too, then come back.
   *
   * Every error the SDK hands this listener is terminal for the stream: it is
   * torn down and nothing re-arms it. A device that hit one and did not
   * re-attach kept enforcing whatever policy it last applied, forever, with no
   * symptom anywhere — the failure this schedule exists to end.
   */
  const recover = async (error: Error, refused: boolean): Promise<void> => {
    unsubscribe = null;
    recovering = true;
    deps.onError?.(error);

    if (refused) {
      /*
       * **A refusal is an answer, but only once it is checked.** Rules stop
       * permitting this read the moment the device stops being in the family,
       * which is the shape a real unpair arrives in — and it is also the shape
       * a cold start with an expired token and no network arrives in.
       * `confirmDeviceRemoved` tells the two apart by refreshing the token and
       * asking again; see that file for the measurement.
       */
      const verdict = await confirmDeviceRemoved({
        db,
        uid,
        deviceId,
        ...(deps.refreshAuth ? { refreshAuth: deps.refreshAuth } : {}),
      });
      if (stopped) {
        recovering = false;
        return;
      }
      if (verdict === 'removed') {
        recovering = false;
        deps.onUnpaired();
        return;
      }
    }

    const delay =
      REATTACH_DELAYS_MS[Math.min(failures, REATTACH_DELAYS_MS.length - 1)]!;
    failures += 1;
    await wait(delay);
    recovering = false;
    if (stopped) {
      return;
    }
    attach();
  };

  /**
   * Re-read the document now, and rebuild the listener when the server has
   * gone quiet.
   *
   * Two jobs in one pass because the first is what measures the second. The
   * read is a genuine delivery — a parent's change lands from here on a run
   * where the stream is dead — and its `fromCache` flag is the only honest
   * evidence available that the connection is alive at all.
   */
  const poll = async (): Promise<void> => {
    if (stopped || polling) {
      return;
    }
    polling = true;
    try {
      const snapshot = await db.getDoc(childDeviceDoc(uid, deviceId));
      if (stopped) {
        return;
      }
      if (!snapshot.fromCache) {
        lastServerDeliveryMs = clock.now();
        /*
         * A server read proves the path works, so the stream's backoff starts
         * over rather than staying at thirty seconds for the rest of the run.
         */
        failures = 0;
      }
      if (snapshot.exists) {
        if (!snapshot.fromCache) {
          deps.onServerTime?.(snapshot.data()?.['lastActiveAt']);
        }
        await apply(snapshot.data());
      } else if (!snapshot.fromCache) {
        // Same rule as the listener: only a server answer may say "gone".
        deps.onUnpaired();
        return;
      }
    } catch (error) {
      /*
       * Reported and not acted on. A refusal here looks exactly like the one
       * the listener gets, but `recover` is the one place that decides what a
       * refusal means — two callers of `confirmDeviceRemoved` racing on the
       * same refusal is how a device unpairs itself twice.
       */
      deps.onError?.(error as Error);
    } finally {
      polling = false;
    }

    if (stopped || recovering) {
      return;
    }
    const silentFor = clock.now() - lastServerDeliveryMs;
    if (silentFor <= staleAfterMs) {
      return;
    }

    deps.onStalled?.(silentFor);
    /*
     * Fresh credentials before a fresh listener. An expired token is one of
     * the two ways this silence happens, and re-attaching on the stale one
     * reproduces it immediately; the other way — a socket the SDK still
     * believes in — is cured by the teardown below either way.
     */
    try {
      await deps.refreshAuth?.();
    } catch (error) {
      deps.onError?.(error as Error);
    }
    if (stopped || recovering) {
      return;
    }
    unsubscribe?.();
    unsubscribe = null;
    unsubscribeFamily?.();
    unsubscribeFamily = null;
    /*
     * The clock restarts with the rebuild. Without this a single stretch of
     * real downtime — a closed lid, a flight — would fire a rebuild on every
     * poll until the network came back, each one tearing down a listener that
     * was about to be needed.
     */
    lastServerDeliveryMs = clock.now();
    attach();
  };

  function attach(): void {
    // One backoff for two listeners: the family watch below tears itself down
    // on any error and re-arms here, so an outage that kills both brings both
    // back rather than leaving the quieter one dead for the rest of the run.
    if (!unsubscribeFamily) {
      attachFamily();
    }
    unsubscribe = db.onDoc(
      childDeviceDoc(uid, deviceId),
      snapshot => {
        if (stopped) {
          return;
        }
        failures = 0;
        if (!snapshot.fromCache) {
          // The watchdog's clock. A cached snapshot is the SDK replaying what
          // it already had — it says nothing about the connection, and
          // treating it as contact is what would let a dead stream look alive.
          lastServerDeliveryMs = clock.now();
        }
        if (!snapshot.exists) {
          if (!snapshot.fromCache) {
            deps.onUnpaired();
          }
          return;
        }
        if (!snapshot.fromCache) {
          deps.onServerTime?.(snapshot.data()?.['lastActiveAt']);
        }
        void apply(snapshot.data()).catch(error => deps.onError?.(error as Error));
      },
      error => {
        if (stopped) {
          return;
        }
        void recover(error, (error as FirestoreError).code === 'permissionDenied');
      },
    );
  }

  /**
   * The family root, watched for its own sake.
   *
   * `childDevices/{deviceId}` is a *subcollection* of `users/{uid}`, and
   * Firestore does not delete a document's descendants with it. An owner
   * account that goes away without `purgeScheduledDeletions` running — deleted
   * by hand, or by anything that touches the root alone — therefore leaves this
   * device's own document sitting there, unchanged and readable, and every
   * signal this agent listens for keeps saying "still paired". Measured on a
   * child phone: family gone, device still locked, nothing to unlock it with.
   *
   * So the root is the second question, asked once and kept open. The same two
   * guards as above apply and for the same reasons: only a *server* snapshot
   * may say "absent", and a refusal is checked by `confirmDeviceRemoved` before
   * it is believed — a revoked child session is refused this read too.
   */
  function attachFamily(): void {
    unsubscribeFamily = db.onDoc(
      userDoc(uid),
      snapshot => {
        if (stopped || snapshot.exists || snapshot.fromCache) {
          return;
        }
        deps.onUnpaired();
      },
      error => {
        unsubscribeFamily = null;
        if (stopped) {
          return;
        }
        deps.onError?.(error);
        if ((error as FirestoreError).code !== 'permissionDenied') {
          // The device listener above owns the re-attach schedule; this one
          // rides along rather than keeping a second backoff of its own.
          return;
        }
        void confirmDeviceRemoved({
          db,
          uid,
          deviceId,
          ...(deps.refreshAuth ? { refreshAuth: deps.refreshAuth } : {}),
        }).then(verdict => {
          if (!stopped && verdict === 'removed') {
            deps.onUnpaired();
          }
        });
      },
    );
  }

  attach();
  /*
   * Armed unconditionally, beside the stream rather than instead of it — the
   * same shape as the desktop agent's backstop `setInterval` under its native
   * tick, and for the same reason. A second delivery path that runs only when
   * the first is known to be broken is a path that runs exactly when nobody
   * knows the first is broken.
   */
  pollHandle = startTimer(() => void poll(), pollIntervalMs);

  return {
    stop() {
      stopped = true;
      if (pollHandle !== null) {
        stopTimer(pollHandle);
        pollHandle = null;
      }
      unsubscribe?.();
      unsubscribe = null;
      unsubscribeFamily?.();
      unsubscribeFamily = null;
    },
    appliedKey: () => appliedKey,
    async refresh() {
      if (stopped) {
        return;
      }
      const snapshot = await db.getDoc(childDeviceDoc(uid, deviceId));
      if (!snapshot.fromCache) {
        lastServerDeliveryMs = clock.now();
      }
      if (snapshot.exists) {
        await apply(snapshot.data());
      }
    },
  };
}
