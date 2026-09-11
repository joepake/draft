/**
 * Whether a device can enforce the three controls every agent used to be
 * assumed capable of: a daily limit, blocked hours, and blocking an app.
 *
 * They carried no support rule at all until a browser joined the product,
 * because every child device before it could do all three — a phone, a Mac, a
 * PC and a television. `apps/extension` can do none of them: it is a browser,
 * and a browser cannot end another app's afternoon.
 *
 * Same two rules the rest of this family follows (`webFilterSupport`,
 * `locationSupport`, `sosSupport`), and they matter more here than anywhere:
 *
 * - **An absent probe is unknown, never no.** Only the desktop, TV and
 *   extension agents publish `DeviceCapabilities`; every phone in the product
 *   publishes none and reports permission statuses instead. Reading a missing
 *   probe as "cannot" would hide the daily limit on every iPhone and Android in
 *   every family, which is the whole product.
 * - **The device's own answer outranks any platform list.** An Android TV that
 *   never reached the overlay Settings screen reports `lock: false` and cannot
 *   raise blocked hours; a second TV on the same build can. No list expresses
 *   that.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

/**
 * The three flags these rules read, each optional on its own — the shape
 * `sosSupport` uses. A caller holding a whole `DeviceCapabilities` still
 * satisfies it, and a rule cannot quietly start reading a flag it did not
 * declare.
 */
interface ControlSupportFacts {
  capabilities?: {
    dailyLimit?: DeviceCapabilities['dailyLimit'];
    schedule?: DeviceCapabilities['schedule'];
    appBlock?: DeviceCapabilities['appBlock'];
    lock?: DeviceCapabilities['lock'];
    screenTime?: DeviceCapabilities['screenTime'];
  } | null;
}

/** A cap on the day's minutes. Needs both a measurement and something to stop. */
export function supportsDailyLimit(device: ControlSupportFacts): boolean {
  return device.capabilities?.dailyLimit ?? true;
}

/** Blocked hours — a window in which the device refuses to be used. */
export function supportsSchedule(device: ControlSupportFacts): boolean {
  return device.capabilities?.schedule ?? true;
}

/**
 * Blocking a named app.
 *
 * `'best-effort'` counts: the desktop agent quits a blocked app after it
 * launches and the TV sends it back to the launcher, which is weaker than iOS
 * shielding but is the feature, and both platforms report the weakness in the
 * same field rather than hiding it.
 */
export function supportsAppBlocking(device: ControlSupportFacts): boolean {
  const probe = device.capabilities?.appBlock;
  return probe === undefined ? true : probe !== false;
}

/**
 * The sentence a parent surface owes when blocking is `'best-effort'`.
 *
 * `supportsAppBlocking` says yes for that probe on purpose, so nothing read
 * it and the weakness the agents report reached no screen — a parent picked
 * apps to block on a Mac and was never told the app opens first and is then
 * closed. Same shape as `webFilterBlockerKey`: the key is the app pack's
 * (`deviceDetail`), which both consoles can render, and `null` means there is
 * nothing to add. The i18n rule wants the key resolved where it is rendered.
 */
export function appBlockingNoteKey(device: ControlSupportFacts): string | null {
  return device.capabilities?.appBlock === 'best-effort'
    ? 'deviceDetail.appBlockingBestEffort'
    : null;
}

export interface InstallApprovalSupportFacts extends ControlSupportFacts {
  platform?: DevicePlatform | null;
}

/**
 * What the app-install-approval switch does on this device, or `null` when
 * the switch has nothing to do.
 *
 * - `quarantine` — Android, Android TV, macOS and Windows: an app installed
 *   after the switch went on will not open until a parent approves it. Needs
 *   the same mechanism app blocking runs on (the accessibility service, or
 *   the desktop's best-effort quit), so a probe saying `appBlock: false`
 *   means no.
 * - `denyInstalls` — iOS: no per-app answer exists (`docs/FEASIBILITY.md`,
 *   "App install quarantine", K5), so the switch hides the App Store instead.
 *   Coarser, and the parent screen says so at the switch.
 * - `null` — the browser extension: installs are reported there and nothing
 *   can hold them (`docs/BACKLOG.md`).
 *
 * The platform decides the *shape* and the probe decides *whether*, which is
 * the same split `webFilterSupport` makes: a platform list alone would promise
 * a quarantine to a Chromebook, and a probe alone cannot say what iOS does.
 */
export function installApprovalMode(
  device: InstallApprovalSupportFacts,
): 'quarantine' | 'denyInstalls' | null {
  // macOS and Windows since 2026-09-10: the same "installed after the line"
  // rule, compared against the bundle's or executable's creation stamp by the
  // enforcement thread (`apps/desktop`, `policy.rs`). Weaker than Android —
  // best-effort quit after launch, and a portable app run from Downloads is
  // dated by that file — and the gate entry says so.
  switch (device.platform ?? null) {
    case 'android':
    case 'androidtv':
    case 'macos':
    case 'windows':
      return supportsAppBlocking(device) ? 'quarantine' : null;
    case 'ios':
      return 'denyInstalls';
    default:
      return null;
  }
}

/**
 * A full-screen lock the child cannot dismiss.
 *
 * `DeviceCapabilities.lock` has carried this since the probe existed and no
 * parent surface read it, which had one visible consequence and one invisible
 * one. `apps/extension` publishes `lock: false` — a browser extension cannot
 * take over the machine it runs in, and its worker has no handler for
 * `isLocked` at all — so locking a Chromebook's browser row wrote `isLocked`
 * to a document nothing acts on, and then the parent's own card reported the
 * device as Locked. Not a no-op: a lie, on the screen a parent checks to see
 * whether their child is locked out.
 *
 * A television answers from its permissions the same way, so a TV that never
 * reached the overlay Settings screen stops offering a lock it cannot raise.
 */
export function supportsLock(device: ControlSupportFacts): boolean {
  return device.capabilities?.lock ?? true;
}

/**
 * Usage minutes are readable at all, by any means.
 *
 * What a surface reads before drawing a day, a timeline or a trend. A browser
 * extension publishes `screenTime: false` — it sees its own tab and not the
 * machine around it — so every one of those charts is a zero drawn with the
 * confidence of a measurement. `usageSource` says *how* the minutes were
 * counted and is meaningless while this is false; do not read it instead.
 */
export function supportsScreenTime(device: ControlSupportFacts): boolean {
  return device.capabilities?.screenTime ?? true;
}

/**
 * Platforms whose agent can cap **one named app**, for devices that publish no
 * probe.
 *
 * iOS is missing on purpose and not for want of enforcement: Screen Time
 * shields an app perfectly well, but the report that would say how long it was
 * used is sandboxed so it cannot name the app — the screen would only ever
 * offer an empty list.
 */
export const APP_LIMIT_PLATFORMS: DevicePlatform[] = [
  'android',
  'androidtv',
  'macos',
  'windows',
];

export interface AppLimitSupportInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  capabilities?: {
    appBlock?: DeviceCapabilities['appBlock'];
    screenTime?: DeviceCapabilities['screenTime'];
  } | null;
}

/**
 * A per-app cap. Two capabilities at once, which is why it has its own rule:
 * something must measure the minutes *and* something must stop the app. A real
 * probe carries both, so both must be present for it to outrank the list.
 *
 * A browser has neither — `apps/extension` publishes `appBlock: false` and
 * `screenTime: false` — and this is the row where a platform list quietly got
 * that wrong: an extension installed on a Mac reports `platform: 'macos'`, so
 * the old list offered a parent a per-app cap for a Chrome window. The probe
 * cannot make that mistake; a device says what it can do, not what its
 * operating system can.
 *
 * On a television it becomes permission-derived rather than assumed: a TV whose
 * usage access or accessibility service was never granted reports those flags
 * false, and the row is struck out, which is what the enforcement there
 * actually does.
 */
export function supportsAppLimits(device: AppLimitSupportInput): boolean {
  const appBlock = device.capabilities?.appBlock;
  const screenTime = device.capabilities?.screenTime;
  if (appBlock !== undefined && screenTime !== undefined) {
    return appBlock !== false && screenTime;
  }
  return APP_LIMIT_PLATFORMS.includes(device.platform ?? 'ios');
}
