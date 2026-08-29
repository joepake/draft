/**
 * What kind of thing a device row actually is, when the answer changes a screen.
 *
 * `DeviceCapabilities` already says what a device can enforce, feature by
 * feature. This is the question a parent's UI asks *about the whole row*: is
 * this a device, or a window onto one? A phone that cannot do two of twelve
 * things is a phone with two gaps; a browser extension that cannot do eleven of
 * them is not a phone at all, and rendering it as one with eleven struck-out
 * rows describes the product rather than the device.
 *
 * It lives here rather than in either parent app because both read the same
 * document — the rule `webFilterSupport` already states — and two parent
 * surfaces disagreeing about the same Chromebook is the failure that costs.
 */

import type { DeviceCapabilities } from '@kidgate/schema/capabilities';

/**
 * The document fields a surface rule may look at. Never screen state.
 *
 * One field rather than the whole probe, the shape `sosSupport` uses: a caller
 * holding a full `DeviceCapabilities` still satisfies it, and a rule that
 * cannot see the other twelve flags cannot start reading one.
 */
export interface DeviceSurfaceFacts {
  capabilities?: { webFilter?: DeviceCapabilities['webFilter'] } | null;
}

/**
 * A browser filtering itself, and nothing else — `apps/extension`.
 *
 * Keyed on `webFilter: 'extension'` rather than on `platform`, deliberately.
 * A Chromebook carries **two** device rows: this one, and the Android APK in
 * ARC beside it, which is a `platform: 'android'` row that locks, schedules and
 * counts screen time like any phone. Keying on the platform would hide eleven
 * controls that the other row genuinely has.
 *
 * An absent probe is unknown, never yes: only the desktop, TV and extension
 * agents publish one, and every phone in the product would otherwise answer
 * this as though it were a browser.
 */
export function isBrowserOnlySurface(device: DeviceSurfaceFacts): boolean {
  return device.capabilities?.webFilter === 'extension';
}

/**
 * Whether a parent screen should **hide** what this device cannot do, rather
 * than showing it struck out.
 *
 * The struck-out card is the right answer nearly everywhere and was built
 * deliberately: "Not available on iPhone" on the Tamper Alerts row teaches a
 * parent something about their phone, and a row that silently vanished would
 * read as a feature KidGate lost. That argument inverts once the unsupported
 * rows outnumber the supported one — a control centre where the only live
 * control is the third row of the second section is a screen a parent has to
 * search, and every dead row is a thing they may believe they have bought.
 *
 * So it is not "hide unsupported controls" as a preference. It is: a surface
 * that has exactly one capability is described by that capability, and the
 * absence of the rest is the platform, not a gap.
 */
export function hidesUnsupportedControls(device: DeviceSurfaceFacts): boolean {
  return isBrowserOnlySurface(device);
}
