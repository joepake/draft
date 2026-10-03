import Icon from '@kidgate/web-ui/Icon';
import { OPERATOR_HOLD_REASON_KEYS } from '@kidgate/core/domain/operatorHold';

/**
 * KidGate's own hold on this family or some of its devices — the phone's
 * `components/OperatorHoldBanner`, drawn from the same summary
 * (`@kidgate/core/domain/operatorHold`) and saying the same app-pack
 * sentences through `appT`, so the two consoles describe one hold.
 *
 * A held device reads "Paused" like one parked by the plan; this is what says
 * the plan did not do it, why, and where to ask. The appeal opens Requests &
 * reports with its first line written — the operator's inbox is where a hold
 * is lifted.
 *
 * The parked banner's ground and copy styles (`.parked-banner`, measured
 * there), as a block rather than a button: the appeal inside it is the control.
 */
export default function OperatorHoldBanner({ summary, appT, onAppeal }) {
  const lines = (key, title, body, hold) => (
    <span key={key} className="parked-banner-copy">
      <strong>{title}</strong>
      <em>{body}</em>
      <em>{appT(OPERATOR_HOLD_REASON_KEYS[hold.reason])}</em>
      {hold.note ? <em>{appT('family.holdNote', { note: hold.note })}</em> : null}
    </span>
  );

  return (
    <div className="parked-banner hold-banner" role="alert">
      <Icon name="shieldAlert" size={18} />
      <span className="parked-banner-copy">
        {summary.family
          ? lines(
              'family',
              appT('family.holdFamilyTitle'),
              appT('family.holdFamilyBody'),
              summary.family,
            )
          : null}
        {summary.devices.map(device =>
          lines(
            device.id,
            appT('family.holdDeviceTitle', { deviceName: device.name }),
            appT('family.holdDeviceBody'),
            device.hold,
          ),
        )}
        <span>
          <button
            type="button"
            className="btn"
            onClick={() => onAppeal(appT('family.holdAppealMessage'))}
          >
            {appT('family.holdAppeal')}
          </button>
        </span>
      </span>
    </div>
  );
}
