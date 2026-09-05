import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import Icon from '@kidgate/web-ui/Icon';
import { MONITORED_SWAP_COOLDOWN_MS } from '@kidgate/core/domain/deviceParking';
import { useActivityTranslate } from './activityCopy.js';
import { deviceIconName } from './deviceIcon.js';

/** The cooldown, as the sentence says it. */
const COOLDOWN_DAYS = Math.round(MONITORED_SWAP_COOLDOWN_MS / 86_400_000);

/**
 * The devices the free plan is not watching, and the choice of which one it
 * should.
 *
 * The phone's `ChooseMonitoredDeviceSheet`, drawn inline: at trial end every
 * device is parked and nothing picks a survivor (`docs/PRICING.md` §6), so a
 * family that opens this tab instead of the app would otherwise find every
 * device reading "Paused" with no way to change it. Both consoles have to be
 * able to answer, because a parent answers on whichever one they have open.
 *
 * Every sentence comes from the app pack through `appT` — the phone says all
 * of them already, and a `dash.*` twin is the same sentence in two packs with
 * only one of them edited next time (`.claude/rules/i18n.md`). The one thing
 * the phone offers that this card does not is the upgrade: buying stays on the
 * phone by decision (`PlanCard`), and the hint underneath says so rather than
 * drawing a button that goes nowhere.
 *
 * Explicit confirm rather than a click that commits: choosing starts a
 * seven-day cooldown, and a mis-click should not be the first thing that
 * teaches a parent about it.
 */
export default function ParkedDevicesCard({
  devices,
  parking,
  canWrite,
  busy,
  onChoose,
}) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const [selected, setSelected] = useState(parking.monitoredId);

  // Follow the server, not the last click: a second parent may have answered
  // from their phone while this tab was open.
  useEffect(() => {
    setSelected(parking.monitoredId);
  }, [parking.monitoredId]);

  const unchanged = !selected || selected === parking.monitoredId;

  return (
    <section className="card parked-card">
      <h2>
        <Icon name="crown" size={16} /> {appT('family.parkedBannerTitle')}
      </h2>
      <p className="hint">
        {appT('family.chooseMonitoredBody', { days: COOLDOWN_DAYS })}
      </p>

      <div className="parked-options" role="radiogroup">
        {devices.map(device => {
          const checked = selected === device.id;
          const reporting = parking.monitoredId === device.id;
          return (
            <label
              key={device.id}
              className={`parked-option${checked ? ' is-checked' : ''}`}
            >
              <input
                type="radio"
                name="monitored-device"
                value={device.id}
                checked={checked}
                disabled={!canWrite || busy}
                onChange={() => setSelected(device.id)}
              />
              <Icon name={deviceIconName(device)} size={16} />
              <span className="parked-option-name">{device.name}</span>
              {reporting ? (
                <span className="pill tone-good">
                  <i className="pill-dot" aria-hidden="true" />
                  {t('dash.statusOnline')}
                </span>
              ) : (
                <span className="pill tone-muted">
                  <i className="pill-dot" aria-hidden="true" />
                  {t('dash.statusPaused')}
                </span>
              )}
            </label>
          );
        })}
      </div>

      <div className="parked-actions">
        <button
          className="btn"
          disabled={!canWrite || busy || unchanged}
          title={!canWrite ? t('dash.unlockToChange') : undefined}
          onClick={() => onChoose(selected)}
        >
          {appT('family.chooseMonitoredConfirm')}
        </button>
        <p className="hint">
          <Icon name="phone" size={12} /> {t('dash.planManageOnPhone')}
        </p>
      </div>
    </section>
  );
}
