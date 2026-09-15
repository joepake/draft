import { useT } from '@kidgate/web-ui/useT';
import { getEffectiveDeviceStatus } from '@kidgate/core/domain/deviceStatus';

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
};

export const STATUS_KEY = {
  online: 'dash.statusOnline',
  offline: 'dash.statusOffline',
  locked: 'dash.statusLocked',
  parked: 'dash.statusPaused',
};

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
  const status = getEffectiveDeviceStatus(device, Date.now());
  const label = t(STATUS_KEY[status] ?? STATUS_KEY.offline);
  return (
    <i
      className={`kid-dot tone-${STATUS_TONE[status] ?? STATUS_TONE.offline}`}
      role="img"
      aria-label={label}
      title={label}
    />
  );
}
