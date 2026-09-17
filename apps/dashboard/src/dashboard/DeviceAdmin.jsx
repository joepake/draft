import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { MAX_DEVICE_NAME_LENGTH } from '@kidgate/schema/deviceName';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import Card from './Card.jsx';

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
  // The cap is the document contract (`@kidgate/schema/deviceName`), not this
  // screen's taste — the phone and the desktop agent read the same number, and
  // this input used to carry a hand-typed 60. `maxLength` stops it being typed;
  // the length check is for a name already stored over the cap by that input.
  const tooLong = trimmed.length > MAX_DEVICE_NAME_LENGTH;
  const renameDisabled =
    readOnly || busy || trimmed.length === 0 || tooLong || trimmed === device.name;

  return (
    <>
      <Card className="device-admin">
        <label className="sheet-label" htmlFor="device-name">
          {appT('deviceDetail.deviceNameLabel')}
        </label>
        <div className="device-admin-row">
          <input
            id="device-name"
            className="reward-input"
            value={name}
            maxLength={MAX_DEVICE_NAME_LENGTH}
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

        {tooLong ? (
          <p className="hint">
            {appT('family.deviceNameTooLong', { max: MAX_DEVICE_NAME_LENGTH })}
          </p>
        ) : null}
      </Card>

      {/*
        Unpairing is its own block — the danger zone `ChildHub` and the account
        card already draw — rather than a text link under the rename field,
        where the one irreversible thing on the page sat inside the same box as
        a text input and read as its third row. The warning STANDS rather than
        appearing on the click: it says what unpairing costs, which is what a
        parent needs before aiming at the button, not after.
      */}
      <Card
        className="danger-zone"
        title={
          <span className="danger-zone-title">
            <span className="danger-zone-glyph">
              <Icon name="trash" size={14} />
            </span>
            {appT('deviceDetail.removeDeviceTitle')}
          </span>
        }
        subtitle={appT('deviceDetail.removeDeviceMessage', {
          deviceName: device.name,
        })}
        action={
          confirming ? (
            <span className="danger-zone-actions">
              <button className="btn btn-sm" onClick={() => setConfirming(false)}>
                {t('dash.close')}
              </button>
              <button
                className="btn btn-sm btn-danger"
                disabled={busy}
                onClick={() =>
                  run(`remove-${device.id}`, () => actions.removeDevice(device.id))
                }
              >
                {busy ? t('dash.working') : appT('shared.remove')}
              </button>
            </span>
          ) : (
            /* A tint at rest, never solid — solid red is the confirmation. */
            <button
              className="btn btn-sm device-admin-remove"
              disabled={readOnly || busy}
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() => setConfirming(true)}
            >
              <Icon name="trash" size={13} /> {appT('shared.remove')}
            </button>
          )
        }
      />
    </>
  );
}
