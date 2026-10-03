import { useCallback, useEffect, useState } from 'react';
import { fetchAnomalies, placeHold, releaseHold } from './api.js';
import { useT } from './i18n.js';

/**
 * The anomaly list and the operator hold (`docs/FEASIBILITY.md`, "An operator
 * hold on a family or a device").
 *
 * One fetch on arrival and one per Refresh — the endpoint scans every family,
 * so never on a timer, and each call is an audit row. What a flag means and
 * why most of them are KidGate's own defects is `functions/lib/anomalies.js`;
 * the intro line says the short version to the person about to press Hold.
 *
 * Hold and release are forms on this page rather than buttons that fire: the
 * family sees a hold, so it takes a reason code the parent reads, an optional
 * note, and the audit reason the server refuses to act without.
 */
export default function Anomalies() {
  const { t, formatNumber, localeTag } = useT();
  const [scan, setScan] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [action, setAction] = useState(null);
  const [notice, setNotice] = useState(null);

  const load = useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      setScan(await fetchAnomalies());
    } catch (caught) {
      setError(caught.message);
    } finally {
      setBusy(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const reasonLabel = code => t(`anomalies.holdReason.${code}`);
  // The tail, not the head: every phone's id starts `device_1…`, so the
  // first eight characters named every one of them the same.
  const deviceLabel = (deviceId, platform) =>
    `${platform ?? '?'} …${deviceId.slice(-7)}`;

  return (
    <div className="section">
      <div className="section-head">
        <h2 className="section-title">{t('nav.anomalies')}</h2>
        <button className="btn btn-ghost" disabled={busy} onClick={load}>
          {t('common.refresh')}
        </button>
      </div>
      <p className="muted">{t('anomalies.intro')}</p>

      {error ? <div className="error-banner">{error}</div> : null}
      {notice ? <p className="muted">{notice}</p> : null}
      {busy && !scan ? <p className="muted">{t('anomalies.scanning')}</p> : null}

      {action ? (
        <HoldForm
          action={action}
          holdReasons={scan?.holdReasons ?? []}
          noteMax={scan?.holdNoteMax ?? 500}
          reasonLabel={reasonLabel}
          onCancel={() => setAction(null)}
          onDone={count => {
            setAction(null);
            setNotice(t('anomalies.done', { count }));
            load();
          }}
        />
      ) : null}

      {scan ? (
        <>
          <p className="muted">
            {t('anomalies.scanned', {
              families: formatNumber(scan.families),
              devices: formatNumber(scan.devices),
              at: new Date(scan.scannedAt).toLocaleString(localeTag),
            })}
          </p>

          {scan.rows.length === 0 ? (
            <p className="muted">{t('anomalies.empty')}</p>
          ) : (
            <div className="table-scroll">
              <table className="table">
                <thead>
                  <tr>
                    <th>{t('anomalies.colFamily')}</th>
                    <th>{t('anomalies.colPlan')}</th>
                    <th>{t('anomalies.colFlags')}</th>
                    <th>{t('anomalies.colHold')}</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {scan.rows.map(row => (
                    <tr key={row.uid}>
                      <td>
                        <code>{row.uid}</code>
                      </td>
                      <td>{row.planId ?? '—'}</td>
                      <td>
                        {row.flags.length === 0 ? '—' : null}
                        {row.flags.map((flag, index) => (
                          <div key={`${flag.kind}-${flag.deviceId ?? ''}-${index}`}>
                            <strong>{t(`anomalies.flag.${flag.kind}`)}</strong>
                            {flag.deviceId ? (
                              <>
                                {' '}
                                <span className="muted">
                                  {deviceLabel(flag.deviceId, flag.platform)} · build{' '}
                                  {flag.build}
                                </span>{' '}
                                <button
                                  className="btn btn-ghost"
                                  onClick={() =>
                                    setAction({
                                      mode: 'hold',
                                      uid: row.uid,
                                      deviceId: flag.deviceId,
                                    })
                                  }
                                >
                                  {t('anomalies.holdDevice')}
                                </button>
                              </>
                            ) : null}
                            <div className="muted">{flag.detail}</div>
                          </div>
                        ))}
                      </td>
                      <td>
                        {row.hold ? (
                          <div>
                            {t('anomalies.familyHeld', {
                              reason: reasonLabel(row.hold.reason),
                            })}
                            {row.hold.note ? (
                              <div className="muted">“{row.hold.note}”</div>
                            ) : null}
                          </div>
                        ) : null}
                        {row.heldDevices.map(device => (
                          <div key={device.deviceId}>
                            {t('anomalies.deviceHeld', {
                              device: deviceLabel(device.deviceId, device.platform),
                              reason: reasonLabel(device.hold.reason),
                            })}
                            {device.hold.byFamily ? (
                              <span className="muted">
                                {' '}
                                · {t('anomalies.byFamily')}
                              </span>
                            ) : (
                              <>
                                {' '}
                                <button
                                  className="btn btn-ghost"
                                  onClick={() =>
                                    setAction({
                                      mode: 'release',
                                      uid: row.uid,
                                      deviceId: device.deviceId,
                                    })
                                  }
                                >
                                  {t('anomalies.releaseDevice')}
                                </button>
                              </>
                            )}
                          </div>
                        ))}
                        {!row.hold && row.heldDevices.length === 0 ? '—' : null}
                      </td>
                      <td>
                        <button
                          className="btn"
                          onClick={() =>
                            setAction({
                              mode: row.hold ? 'release' : 'hold',
                              uid: row.uid,
                            })
                          }
                        >
                          {row.hold
                            ? t('anomalies.releaseFamily')
                            : t('anomalies.holdFamily')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <h3 className="section-title" style={{ marginTop: 24 }}>
            {t('anomalies.rateLimitsTitle')}
          </h3>
          <p className="muted">{t('anomalies.rateLimitsHint')}</p>
          {scan.rateLimits.length === 0 ? (
            <p className="muted">{t('common.noData')}</p>
          ) : (
            <div className="table-scroll">
              <table className="table">
                <thead>
                  <tr>
                    <th>{t('anomalies.colKey')}</th>
                    <th>{t('anomalies.colCount')}</th>
                    <th>{t('anomalies.colMax')}</th>
                    <th>{t('anomalies.colFamily')}</th>
                  </tr>
                </thead>
                <tbody>
                  {scan.rateLimits.slice(0, 50).map(counter => (
                    <tr key={`${counter.key}-${counter.windowStart}`}>
                      <td>
                        <code>{counter.key}</code>
                      </td>
                      <td>{formatNumber(counter.count)}</td>
                      <td>
                        {counter.max === undefined ? '—' : formatNumber(counter.max)}
                        {counter.limited ? (
                          <strong> · {t('anomalies.limited')}</strong>
                        ) : null}
                      </td>
                      <td>{counter.uid ? <code>{counter.uid}</code> : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <h3 className="section-title" style={{ marginTop: 24 }}>
            {t('anomalies.activityTitle')}
          </h3>
          {scan.activity.length === 0 ? (
            <p className="muted">{t('common.noData')}</p>
          ) : (
            <div className="table-scroll">
              <table className="table">
                <thead>
                  <tr>
                    <th>{t('anomalies.colFamily')}</th>
                    <th>{t('anomalies.colActivities')}</th>
                  </tr>
                </thead>
                <tbody>
                  {scan.activity.slice(0, 15).map(entry => (
                    <tr key={entry.uid}>
                      <td>
                        <code>{entry.uid}</code>
                      </td>
                      <td>{formatNumber(entry.count)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}

/** Place or lift a hold: target, what the parent reads, and the audit reason. */
function HoldForm({ action, holdReasons, noteMax, reasonLabel, onCancel, onDone }) {
  const { t } = useT();
  const [holdReason, setHoldReason] = useState(holdReasons[0] ?? '');
  const [note, setNote] = useState('');
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const holding = action.mode === 'hold';
  const target = action.deviceId
    ? t('anomalies.targetDevice', { device: action.deviceId, uid: action.uid })
    : t('anomalies.targetFamily', { uid: action.uid });
  const canSubmit = reason.trim().length >= 12 && (!holding || holdReason) && !busy;

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      const result = holding
        ? await placeHold({
            uid: action.uid,
            deviceId: action.deviceId,
            holdReason,
            note,
            reason: reason.trim(),
          })
        : await releaseHold({
            uid: action.uid,
            deviceId: action.deviceId,
            reason: reason.trim(),
          });
      onDone(holding ? result.devicesHeld : result.devicesReleased);
    } catch (caught) {
      setError(caught.message);
      setBusy(false);
    }
  };

  return (
    <div className="card" style={{ marginBottom: 18 }}>
      <h3 className="section-title">
        {holding
          ? t('anomalies.formHold', { target })
          : t('anomalies.formRelease', { target })}
      </h3>
      <p className="muted">
        {holding ? t('anomalies.holdEffect') : t('anomalies.releaseEffect')}
      </p>

      {holding ? (
        <>
          <div className="field-group">
            <label className="field-label" htmlFor="hold-reason">
              {t('anomalies.holdReason')}
            </label>
            <select
              className="field"
              id="hold-reason"
              value={holdReason}
              onChange={event => setHoldReason(event.target.value)}
            >
              {holdReasons.map(code => (
                <option key={code} value={code}>
                  {reasonLabel(code)}
                </option>
              ))}
            </select>
          </div>
          <div className="field-group" style={{ marginTop: 12 }}>
            <label className="field-label" htmlFor="hold-note">
              {t('anomalies.note', { max: noteMax })}
            </label>
            <textarea
              className="field"
              id="hold-note"
              rows={3}
              maxLength={noteMax}
              value={note}
              onChange={event => setNote(event.target.value)}
              style={{ fontFamily: 'inherit', resize: 'vertical' }}
            />
          </div>
        </>
      ) : null}

      <div className="field-group" style={{ marginTop: 12 }}>
        <label className="field-label" htmlFor="hold-audit">
          {t('anomalies.auditReason')}
        </label>
        <input
          className="field"
          id="hold-audit"
          value={reason}
          onChange={event => setReason(event.target.value)}
        />
      </div>

      {error ? <div className="error-banner">{error}</div> : null}

      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <button className="btn" disabled={!canSubmit} onClick={submit}>
          {holding ? t('anomalies.confirmHold') : t('anomalies.confirmRelease')}
        </button>
        <button className="btn btn-ghost" disabled={busy} onClick={onCancel}>
          {t('anomalies.cancel')}
        </button>
      </div>
    </div>
  );
}
