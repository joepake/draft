import { useT } from '@kidgate/web-ui/useT';
import { supportsLock } from '@kidgate/core/domain/controlSupport';
import { getShownDeviceStatus } from '@kidgate/core/domain/deviceStatus';
import { resolveLockEnforcement } from '@kidgate/core/domain/lockEnforcement';
import { useActivityTranslate } from './activityCopy.js';

/*
 * `parked` is muted, not critical: a parked device is quiet by design — the
 * free plan watching one device and this being another (`docs/PRICING.md` §6)
 * — and painting it red reports a plan as a fault.
 */
export const STATUS_TONE = {
  online: 'good',
  offline: 'muted',
  locked: 'warning',
  parked: 'muted',
  checking: 'muted',
};

/*
 * `checking` is the app pack's word, the one the phone's chip says
 * (`getDeviceStatusLabel`), so `statusLabel` reads it through `appT`; the
 * rest are web keys.
 */
const CHECKING_KEY = 'family.deviceCheckingLabel';

export const STATUS_KEY = {
  online: 'dash.statusOnline',
  offline: 'dash.statusOffline',
  locked: 'dash.statusLocked',
  parked: 'dash.statusPaused',
  checking: CHECKING_KEY,
};

/**
 * What a locked device is actually doing, as three different sentences.
 *
 * `isLocked` is what the parent asked for; `@kidgate/core/domain/lockEnforcement`
 * decides whether it is Locked, Lock sent or Lock not applied. Off the raw
 * fields, not off the effective status, which answers `'offline'` for a locked
 * device gone quiet — the television switched off these sentences exist for.
 * `supportsLock` is still the gate, so an extension carrying a stale
 * `isLocked` says nothing. `notApplied` keeps the warning tone: the sentence
 * carries it.
 */
const LOCK_STATE_KEY = {
  sent: 'dash.statusLockSent',
  notApplied: 'dash.statusLockNotApplied',
};

/**
 * The one sentence both the header pill and the rail's dot say about a
 * device. The dot read `STATUS_KEY` alone until 2026-10-13, so a lock nothing
 * had confirmed said "Locked" on hover and to a screen reader under a pill
 * saying "Lock sent".
 */
export function statusLabelKey(status, device) {
  const lockState =
    device && device.isLocked && supportsLock(device)
      ? resolveLockEnforcement(device)
      : null;
  return (
    (lockState && LOCK_STATE_KEY[lockState]) ||
    STATUS_KEY[STATUS_TONE[status] ? status : 'offline']
  );
}

/** `statusLabelKey`, said through whichever pack holds the key. */
export function statusLabel(status, device, t, appT) {
  const key = statusLabelKey(status, device);
  return key === CHECKING_KEY ? appT(key) : t(key);
}

/**
 * The dot that says whether one device is reachable.
 *
 * It said it in colour alone once — a parent who cannot separate amber from
 * grey read six identical rows — so the sentence rides along as the label. It
 * is the same sentence `StatusPill` prints in the header, from the same map,
 * and the status is `getEffectiveDeviceStatus` rather than the stored field:
 * three minutes of silence is offline on every surface.
 *
 * Its own module since the child hub gained a device list: three lists draw a
 * device row now, and the two outside `Dashboard.jsx` cannot import the page
 * that renders the first.
 */
export default function DeviceDot({ device }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const status = getShownDeviceStatus(device, Date.now());
  const label = statusLabel(status, device, t, appT);
  return (
    <i
      className={`kid-dot tone-${STATUS_TONE[status] ?? STATUS_TONE.offline}`}
      role="img"
      aria-label={label}
      title={label}
    />
  );
}
