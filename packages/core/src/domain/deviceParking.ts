/**
 * Which of a family's devices stay watched when the plan cannot watch them all.
 *
 * A family leaving the trial with five child devices and a plan that monitors
 * one does not lose four of them. They are **parked**: every rule they hold
 * keeps being enforced, and they stop reporting (`Device.monitoringState`,
 * `docs/PRICING.md` §6). The cap was checked once at pairing and never again —
 * `functions/http/pairing.js` refuses a sixth device and has nothing to say
 * about the five already there — so this is the rule that was missing, not a
 * tightening of one that existed.
 *
 * **Parking is not eviction and the difference is the whole design.** The
 * alternative shapes were both worse: unpairing takes the child's protection
 * away over a billing decision the child had no part in, and leaving five
 * devices reporting is a free tier that costs five times what it can afford.
 * A parked device is the honest middle — the parent keeps every rule they set,
 * and loses only the seeing.
 */

import type { Millis } from '@kidgate/schema/primitives';

/**
 * How long before a parent may move the monitored slot again.
 *
 * **Seven days, and it is a throttle on rotation rather than on changing your
 * mind.** A daily swap would let a family walk one live slot around five
 * devices inside a week and read all of them — which is the paid tier, taken
 * an hour at a time. Seven matches the counters' window, so a device that has
 * just become monitored has a whole week to fill one before it can be moved
 * on.
 *
 * It is a cooldown on the *swap*, never on losing a device: unpairing the
 * monitored one frees the slot at once (`canChooseMonitored`). A broken phone
 * is not a rotation.
 */
export const MONITORED_SWAP_COOLDOWN_MS: Millis = 7 * 24 * 60 * 60 * 1000;

export interface ParkableDevice {
  id: string;
  /** `Device.monitoringState`; absent means active. */
  monitoringState?: 'active' | 'parked';
  /** `Device.lastActiveAt`, ISO. Absent for a device that never reported. */
  lastActiveAt?: string | null;
  /** `Device.monitoredChangedAt`, ISO. Absent until this device is chosen. */
  monitoredChangedAt?: string | null;
}

/**
 * The devices to park, given how many the plan monitors.
 *
 * Returns ids, never the whole set: the caller writes each one, and a function
 * that returned "the new state of everything" would invite a write per device
 * on every evaluation rather than only on the ones that change.
 *
 * **Empty when the family already fits.** A family with one device on a plan
 * that monitors one is not parked and never sees a choice — the sheet exists
 * because there is a decision, and putting one in front of a parent with
 * nothing to decide is a dialogue box that says "OK".
 */
export function devicesToPark(
  devices: readonly ParkableDevice[],
  allowance: number,
): string[] {
  if (!Number.isFinite(allowance) || devices.length <= allowance) {
    return [];
  }

  /*
   * Every device, including the ones already parked — the caller filters those
   * out. Nothing here picks a survivor: at trial end the parent chooses, and
   * until they do the family is entirely parked, which costs nothing and
   * enforces everything.
   *
   * Choosing one automatically here was the first design and it is worse for a
   * reason that only shows up in the field: the device a server would pick is
   * the most recently active one, which for a family with a television in the
   * living room is the television.
   */
  return devices.filter(device => device.monitoringState !== 'parked').map(d => d.id);
}

/**
 * The device to pick when nobody has, after a grace period has run out.
 *
 * Only for the rollout sweep over families who lapsed **before** any of this
 * existed (`docs/PRICING.md` §10): they are dormant, nobody is going to open a
 * sheet, and leaving them fully parked means a family silently loses
 * visibility of every device at once. Most recently active, because it is the
 * best guess available and better than none.
 *
 * Never used at trial end. A family whose trial just ended has been sent a
 * push and is being asked; guessing for them would answer a question they were
 * about to answer themselves.
 */
export function fallbackMonitoredDevice(
  devices: readonly ParkableDevice[],
): string | null {
  let best: { id: string; at: number } | null = null;

  for (const device of devices) {
    const at = device.lastActiveAt ? new Date(device.lastActiveAt).getTime() : NaN;
    const score = Number.isFinite(at) ? at : 0;
    if (!best || score > best.at) {
      best = { id: device.id, at: score };
    }
  }

  return best?.id ?? null;
}

/** `Device.monitoringState === 'parked'`. Absent is active. */
export function isDeviceParked(
  device: Pick<ParkableDevice, 'monitoringState'>,
): boolean {
  return device.monitoringState === 'parked';
}

/**
 * What a parent console has to say about parking, from the devices alone.
 *
 * The devices are the only thing a client can read: the parking state
 * document is under `private/`, which `firestore.rules` keeps from every
 * client, so "which device is monitored" and "is a choice pending" are both
 * answered by looking at the set. Both consoles read this one fold, because a
 * phone showing a sheet the dashboard does not is two answers about one plan.
 */
export interface ParkingSummary {
  /** The devices that have been told not to report. */
  parked: string[];
  /**
   * The one device still reporting while others are parked, or null.
   *
   * Null in two different situations: nothing is parked, or *everything* is.
   * `choicePending` tells them apart.
   */
  monitoredId: string | null;
  /**
   * When the monitored device was chosen, epoch ms, or null.
   *
   * Feeds `canChooseMonitored` / `swapCooldownRemainingMs` on the clients.
   * The server decides the cooldown from its own copy in `private/`; this is
   * the same moment, republished on the device so a console can say a swap is
   * not available yet instead of offering one the endpoint will refuse.
   */
  monitoredChangedAtMs: number | null;
  /**
   * Whether the parent still has to pick.
   *
   * True when every device is parked — which is what trial end leaves behind
   * (`devicesToPark` chooses no survivor). A family in this state has no
   * device reporting at all and, until now, no screen saying so; the sheet
   * this drives is mandatory rather than a suggestion.
   */
  choicePending: boolean;
}

export function summariseParking(
  devices: readonly Pick<
    ParkableDevice,
    'id' | 'monitoringState' | 'monitoredChangedAt'
  >[],
): ParkingSummary {
  const parked = devices.filter(isDeviceParked).map(device => device.id);
  if (parked.length === 0) {
    return {
      parked,
      monitoredId: null,
      monitoredChangedAtMs: null,
      choicePending: false,
    };
  }
  const active = devices.filter(device => !isDeviceParked(device));
  const monitored = active.length === 1 ? (active[0] ?? null) : null;
  return {
    parked,
    monitoredId: monitored?.id ?? null,
    monitoredChangedAtMs: toMillis(monitored?.monitoredChangedAt),
    choicePending: active.length === 0,
  };
}

/** ISO to epoch ms, and null for anything that is not a readable date. */
function toMillis(value: string | null | undefined): number | null {
  if (!value) {
    return null;
  }
  const ms = new Date(value).getTime();
  return Number.isFinite(ms) ? ms : null;
}

/**
 * How long a family goes unlooked-at before its devices park themselves.
 *
 * Thirty days rather than fewer so a family that checks in weekly is never
 * parked by mistake, and because un-parking is automatic — a parent opening
 * either console wakes everything in the same call that stamps their presence
 * — a wrong park costs one missed heartbeat and nothing else
 * (`docs/PRICING.md` §6).
 *
 * **Free families only**, though §6 does not say so. A paying family's
 * devices carry the alerts that work *without* opening the app — place
 * alerts, message alerts — and parking those because a parent trusted the
 * pushes for a month would silence the very thing they pay for. A free
 * device loses nothing but its reporting.
 */
export const DORMANCY_AFTER_MS: Millis = 30 * 24 * 60 * 60 * 1000;

/** Whether nobody has opened a parent console for the family in the window. */
export function isFamilyDormant(input: {
  lastParentOpenAtMs: number | null;
  nowMs: number;
}): boolean {
  if (input.lastParentOpenAtMs === null) {
    return false;
  }
  return input.nowMs - input.lastParentOpenAtMs >= DORMANCY_AFTER_MS;
}

/**
 * Which of the devices the reaper parked come back when a parent returns.
 *
 * Not "all of them": the plan may have changed while nobody was looking. A
 * premium family that went dormant and then lapsed would otherwise wake with
 * five devices reporting on a plan that pays for one. So the allowance is
 * re-applied at the moment of waking:
 *
 * - room for every device → everything the reaper parked comes back;
 * - over the allowance → only the device the parent had chosen comes back,
 *   and only if the reaper was the one that parked it; nothing chosen → nothing
 *   wakes, and the choose-a-device sheet asks, which is the right outcome for
 *   a family that is over its plan.
 *
 * Devices the reaper did *not* park are never touched: an allowance park from
 * the trial end or the churn sweep is a decision this function has no business
 * undoing.
 */
export function devicesToWake(input: {
  dormantDeviceIds: readonly string[];
  monitoredDeviceId: string | null;
  deviceCount: number;
  allowance: number;
}): string[] {
  if (input.dormantDeviceIds.length === 0) {
    return [];
  }
  if (!Number.isFinite(input.allowance) || input.deviceCount <= input.allowance) {
    return [...input.dormantDeviceIds];
  }
  if (
    input.monitoredDeviceId &&
    input.dormantDeviceIds.includes(input.monitoredDeviceId)
  ) {
    return [input.monitoredDeviceId];
  }
  return [];
}

export interface ChooseMonitoredInput {
  /** When the monitored slot was last moved, or null if never. */
  lastChangedAtMs: number | null;
  /**
   * Whether the device that held the slot is gone.
   *
   * Unpairing frees it immediately — a lost or broken phone is not a rotation,
   * and a parent replacing one should not be told to wait a week to watch its
   * replacement.
   */
  previousUnpaired?: boolean;
  nowMs: number;
}

/** Whether a parent may move the monitored slot right now. */
export function canChooseMonitored(input: ChooseMonitoredInput): boolean {
  if (input.previousUnpaired) {
    return true;
  }
  if (input.lastChangedAtMs === null) {
    return true;
  }
  return input.nowMs - input.lastChangedAtMs >= MONITORED_SWAP_COOLDOWN_MS;
}

/** Milliseconds until the next swap is allowed. Zero when one is allowed now. */
export function swapCooldownRemainingMs(input: ChooseMonitoredInput): Millis {
  if (canChooseMonitored(input)) {
    return 0;
  }
  return Math.max(
    0,
    MONITORED_SWAP_COOLDOWN_MS - (input.nowMs - (input.lastChangedAtMs ?? 0)),
  );
}
