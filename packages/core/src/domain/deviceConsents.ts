/**
 * The consents a child device is still waiting for, as the sentences a parent
 * reads about them.
 *
 * `DeviceCapabilities.pendingConsents` is the device's half — see the field for
 * why `camera: false` alone could never carry this. This is the other half: the
 * i18n keys every parent surface renders, in one place, so the phone and the
 * dashboard cannot describe the same Mac differently. The same split
 * `webFilterSupport.ts` makes for the filter's blocker, for the same reason.
 *
 * **It says what the consent costs, not what the switch is called.** A parent
 * reading "Camera" learns nothing; a parent reading "an SOS from this device
 * will arrive without a photo" knows whether to walk across the house. The
 * steps for granting it live on the device — its own setup checklist reads the
 * OS and offers the button — and this deliberately does not try to reproduce a
 * path through somebody else's Settings app.
 */

import type { DeviceCapabilities, DeviceConsent } from '@kidgate/schema/capabilities';

export interface PendingConsentCopy {
  consent: DeviceConsent;
  /** What is missing, in the words the parent's other rows use. */
  labelKey: string;
  /** What it costs, in one sentence. */
  detailKey: string;
  /**
   * How to grant it, in order — the same shape `ProtectionIssueKeys.hintKeys`
   * carries for the Android permissions.
   *
   * **The route is through KidGate, not through System Settings.** The agent
   * already has a screen that reads the OS, knows which consents are missing,
   * raises the prompt where the OS still allows one and opens the right
   * Settings pane where it does not — so the useful instruction is "get to
   * that screen", and it is the same three steps on macOS and on Windows.
   * Writing out a path through Apple's or Microsoft's Settings instead would
   * be a fourth copy of it, in fourteen languages, wrong the first time either
   * of them moves a pane — which Apple has done twice since Ventura.
   *
   * The Parent PIN step is in the list because it is where a parent stops:
   * the checklist deliberately sits behind that gate with the other
   * enforcement controls, and a parent who does not know that reads the
   * locked Settings screen as the whole screen.
   */
  hintKeys: string[];
}

/**
 * Getting to the device's own consent checklist. Three steps, both desktops.
 */
const CONSENT_HINT_KEYS = [
  'protection.consentStepOpenSettings',
  'protection.consentStepParentPin',
  'protection.consentStepPermissions',
];

const COPY: Record<DeviceConsent, PendingConsentCopy> = {
  /*
   * `protection.locationPermission` already exists and is what the phone's own
   * checklist calls this. One name for one thing, in fourteen languages.
   */
  location: {
    consent: 'location',
    labelKey: 'protection.locationPermission',
    detailKey: 'protection.locationConsentPending',
    hintKeys: CONSENT_HINT_KEYS,
  },
  camera: {
    consent: 'camera',
    labelKey: 'protection.cameraPermission',
    detailKey: 'protection.cameraConsentPending',
    hintKeys: CONSENT_HINT_KEYS,
  },
};

export interface PendingConsentsInput {
  /**
   * `Device.capabilities`, when the device publishes a probe.
   *
   * Absent is **nothing to say**, never "everything is granted": a device too
   * old to publish the field, or one that has not reported since pairing,
   * looks exactly like a device with nothing outstanding, and inventing a
   * warning for either would put a chore on a parent's screen that nobody at
   * the machine can complete.
   */
  capabilities?: { pendingConsents?: DeviceCapabilities['pendingConsents'] } | null;
}

/**
 * Every outstanding consent, in a fixed order.
 *
 * Ordered by this module rather than by the array the device sent: two devices
 * listing the same two consents must not produce two different-looking screens
 * because one agent happened to append them the other way round.
 */
export function pendingConsentCopy(device: PendingConsentsInput): PendingConsentCopy[] {
  const pending = device.capabilities?.pendingConsents;
  if (!pending || pending.length === 0) {
    return [];
  }
  return (['location', 'camera'] as const)
    .filter(consent => pending.includes(consent))
    .map(consent => COPY[consent]);
}
