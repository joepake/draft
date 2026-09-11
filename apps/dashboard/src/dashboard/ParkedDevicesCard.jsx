import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import Icon from '@kidgate/web-ui/Icon';
import {
  MONITORED_SWAP_COOLDOWN_MS,
  swapCooldownRemainingMs,
} from '@kidgate/core/domain/deviceParking';
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
  onDismiss,
}) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const [selected, setSelected] = useState(parking.monitoredId);

  // Follow the server, not the last click: a second parent may have answered
  // from their phone while this tab was open.
  useEffect(() => {
    setSelected(parking.monitoredId);
  }, [parking.monitoredId]);

  // Escape closes the sheet form, like the step-up one. Inline there is
  // nothing to close, so the listener is not attached at all.
  useEffect(() => {
    if (!onDismiss) {
      return undefined;
    }
    const onKey = event => {
      if (event.key === 'Escape') onDismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDismiss]);

  const unchanged = !selected || selected === parking.monitoredId;

  /*
   * The swap cooldown, read off `Device.monitoredChangedAt` — the endpoint's
   * own `changedAtMs` lives under `private/`, which no client may read, so
   * without this republished copy both consoles offered a change the server
   * would refuse and the parent learned about the seven days from a failed
   * click (measured 2026-09-09). Same fold as the phone's sheet.
   */
  const swapLocked =
    swapCooldownRemainingMs({
      lastChangedAtMs: parking.monitoredChangedAtMs,
      nowMs: Date.now(),
    }) > 0;
  const monitoredName =
    devices.find(device => device.id === parking.monitoredId)?.name ?? null;

  /*
   * One component, two placements, because it is the same question at two
   * moments. Inline while anything is parked — and the way back in after a
   * dismissal — and over the page when *everything* is parked with nobody
   * chosen, which is what trial end leaves behind and what `apps/mobile`
   * opens `ChooseMonitoredDeviceSheet` for unprompted. A card a parent has to
   * notice is not the same as a question they have to answer.
   */
  const body = (
    <>
      <h2>
        <Icon name="crown" size={16} />{' '}
        {monitoredName
          ? appT('family.chooseMonitoredDone', { name: monitoredName })
          : appT('family.parkedBannerTitle')}
      </h2>
      <p className="hint">
        {swapLocked
          ? appT('family.monitoredCooldown', { days: COOLDOWN_DAYS })
          : appT('family.chooseMonitoredBody', { days: COOLDOWN_DAYS })}
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
                disabled={!canWrite || busy || swapLocked}
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
          disabled={!canWrite || busy || unchanged || swapLocked}
          title={!canWrite ? t('dash.unlockToChange') : undefined}
          onClick={() => onChoose(selected)}
        >
          {appT('family.chooseMonitoredConfirm')}
        </button>
        <p className="hint">
          <Icon name="phone" size={12} /> {t('dash.planManageOnPhone')}
        </p>
      </div>
    </>
  );

  if (!onDismiss) {
    return <section className="card parked-card">{body}</section>;
  }

  return (
    <div className="sheet-backdrop" onClick={onDismiss}>
      <section
        className="sheet parked-card"
        role="dialog"
        aria-modal="true"
        aria-label={appT('family.parkedBannerTitle')}
        onClick={event => event.stopPropagation()}
      >
        {body}
        {/*
          Dismissible, not compulsory. The phone's sheet closes too, and the
          card underneath is what a parent comes back to — a dialog with no
          way out over a page that is still readable would be worse than the
          state it is describing.
        */}
        <button className="login-link" onClick={onDismiss}>
          {t('dash.close')}
        </button>
      </section>
    </div>
  );
}
