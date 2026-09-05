import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';

/*
 * `appT` reads the APP key space through `@kidgate/i18n/activityFeed`. The
 * phone already says every sentence here — including the removal warning,
 * which must not be reworded on a second surface.
 */

/**
 * Rename a device, or unpair it.
 *
 * **Owner only, on both surfaces.** `actions.isOwner` compares the signed-in
 * uid with the family root; a joined co-parent gets neither control, and
 * `controlsApi` refuses again in case this render is stale.
 *
 * ## The removal is irreversible and says so before it runs
 *
 * Unpairing deletes eleven collections client-side, with no transaction —
 * including the five that live under the device document, which Firestore
 * leaves behind when the parent goes. So the button asks first, and the
 * confirmation names the device rather than saying "are you sure": a parent
 * with three devices on screen has to see which one is about to go.
 */
export default function DeviceAdmin({ device, actions, readOnly, busy, run }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const [name, setName] = useState(device.name ?? '');
  const [confirming, setConfirming] = useState(false);

  // Selecting another device must not carry the previous one's draft — or its
  // half-opened confirmation.
  useEffect(() => {
    setName(device.name ?? '');
    setConfirming(false);
  }, [device.id, device.name]);

  if (!actions?.isOwner) {
    return null;
  }

  const trimmed = name.trim();
  const renameDisabled =
    readOnly || busy || trimmed.length === 0 || trimmed === device.name;

  return (
    <div className="device-admin">
      <label className="sheet-label" htmlFor="device-name">
        {appT('deviceDetail.deviceNameLabel')}
      </label>
      <div className="device-admin-row">
        <input
          id="device-name"
          className="reward-input"
          value={name}
          maxLength={60}
          disabled={readOnly || busy}
          onChange={event => setName(event.target.value)}
        />
        <button
          className="btn btn-sm"
          disabled={renameDisabled}
          title={readOnly ? t('dash.unlockToChange') : undefined}
          onClick={() =>
            run(`rename-${device.id}`, () => actions.renameDevice(device.id, trimmed))
          }
        >
          {t('dash.save')}
        </button>
      </div>

      {confirming ? (
        <div className="device-admin-confirm">
          <strong>{appT('deviceDetail.removeDeviceTitle')}</strong>
          <p>
            {appT('deviceDetail.removeDeviceMessage', {
              deviceName: device.name,
            })}
          </p>
          <div className="reward-actions">
            <button className="login-link" onClick={() => setConfirming(false)}>
              {t('dash.close')}
            </button>
            <button
              className="btn btn-sm btn-danger"
              disabled={busy}
              onClick={() =>
                run(`remove-${device.id}`, () => actions.removeDevice(device.id))
              }
            >
              {busy ? t('dash.working') : appT('deviceDetail.removeDeviceTitle')}
            </button>
          </div>
        </div>
      ) : (
        <button
          className="login-link device-admin-remove"
          disabled={readOnly || busy}
          title={readOnly ? t('dash.unlockToChange') : undefined}
          onClick={() => setConfirming(true)}
        >
          <Icon name="trash" size={13} /> {appT('deviceDetail.removeDeviceTitle')}
        </button>
      )}
    </div>
  );
}
