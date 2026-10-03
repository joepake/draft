import { useCallback, useEffect, useState } from 'react';
import { fetchAnomalies, openSupportTicket, placeHold, releaseHold } from './api.js';
import { useT } from './i18n.js';

/**
 * The anomaly list and the operator hold (`docs/FEASIBILITY.md`, "An operator
 * hold on a family or a device").
 *
 * **It answers before it lists.** The first version printed every flag the
 * same way with a Hold button beside each, plus a table of raw limiter keys,
 * and the operator's verdict on 2026-10-03 was that it could not tell whether
 * anything was wrong. So: one sentence first (abuse or not), then the flags
 * sorted by what they ask of the operator — abuse, cost, our own bug, nothing
 * — each in plain words with what to do, and the raw counters behind a
 * disclosure. A Hold button appears only where a hold is a reasonable answer.
 *
 * One fetch on arrival and one per Refresh — the endpoint scans every family,
 * so never on a timer, and each call is an audit row. What a flag means in
 * code is `functions/lib/anomalies.js`.
 *
 * Hold and release are forms rather than buttons that fire: the family sees a
 * hold, so it takes a reason code the parent reads, an optional note, and the
 * audit reason the server refuses to act without.
 *
 * **Help flags come first and are not abuse or a bug** — a family that looks
 * stuck (`help: true` in the scan). They are answered with a ticket to the
 * owner, never a hold: one row per family, one form, and the owner's app
 * language beside it because the operator writes in it.
 */

/** Which group a flag belongs to; an unknown kind is ours to look at. */
const CATEGORY_OF = {
  'fast-beat': 'cost',
  'doc-beat': 'cost',
  'usage-overflow': 'ours',
  'web-cap': 'ours',
  'parked-on-premium': 'ours',
  'over-allowance': 'ours',
  silent: 'info',
  'never-beat': 'info',
};
const CATEGORIES = ['abuse', 'cost', 'ours', 'info'];

/** Every phone's id starts `device_1…`, so the tail is what tells two apart. */
function deviceLabel(deviceId, platform) {
  return `${platform ?? '?'} …${deviceId.slice(-7)}`;
}

/**
 * The scan, regrouped by what it asks of the operator. `rate-limited` flags
 * are left out of the family rows: the limited counters themselves are the
 * abuse group, with the family when the key names one.
 */
function groupScan(scan) {
  const groups = { abuse: [], cost: [], ours: [], info: [], help: [] };
  for (const counter of scan.rateLimits) {
    if (counter.limited) groups.abuse.push({ counter, uid: counter.uid });
  }
  for (const row of scan.rows) {
    // Help flags are one row per family — one ticket answers all of them.
    const help = row.flags.filter(flag => flag.help);
    if (help.length > 0) {
      groups.help.push({ uid: row.uid, ownerLanguage: row.ownerLanguage, flags: help });
    }
    for (const flag of row.flags) {
      if (flag.kind === 'rate-limited' || flag.help) continue;
      groups[CATEGORY_OF[flag.kind] ?? 'ours'].push({ flag, uid: row.uid });
    }
  }
  return groups;
}

export default function Anomalies() {
  const { t, formatNumber, localeTag } = useT();
  const [scan, setScan] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [action, setAction] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [notice, setNotice] = useState(null);
  const [rawOpen, setRawOpen] = useState(false);

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
  const groups = scan ? groupScan(scan) : null;
  const holds = scan
    ? scan.rows.filter(row => row.hold || row.heldDevices.length > 0)
    : [];
  const topCounter = scan?.rateLimits[0] ?? null;

  return (
    <div className="section">
      <div className="section-head">
        <h2 className="section-title">{t('nav.anomalies')}</h2>
        <button className="btn btn-ghost" disabled={busy} onClick={load}>
          {t('common.refresh')}
        </button>
      </div>

      {error ? <div className="error-banner">{error}</div> : null}
      {notice ? <p className="muted">{notice}</p> : null}
      {busy && !scan ? <p className="muted">{t('anomalies.scanning')}</p> : null}

      {scan ? (
        <>
          <div className="status-strip">
            <span
              className={`status-dot ${groups.abuse.length > 0 ? 'is-critical' : 'is-good'}`}
            />
            <span className="status-label">
              {groups.abuse.length > 0
                ? t('anomalies.verdictAbuse', { count: groups.abuse.length })
                : t('anomalies.verdictClean')}
            </span>
            <span className="status-detail">
              {['help', ...CATEGORIES.slice(1)]
                .map(key =>
                  t('anomalies.summaryPart', {
                    label: t(`anomalies.cat.${key}`),
                    count: formatNumber(groups[key].length),
                  }),
                )
                .join(' · ')}
            </span>
          </div>
          <p className="muted">
            {t('anomalies.scanned', {
              families: formatNumber(scan.families),
              devices: formatNumber(scan.devices),
              at: new Date(scan.scannedAt).toLocaleString(localeTag),
            })}
          </p>
        </>
      ) : null}

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

      {ticket ? (
        <TicketForm
          target={ticket}
          max={scan?.ticketMax ?? 2000}
          onCancel={() => setTicket(null)}
          onDone={result => {
            setTicket(null);
            setNotice(
              t(
                result.emailed
                  ? 'anomalies.ticketSentEmail'
                  : 'anomalies.ticketSentNoEmail',
                {
                  pushed: formatNumber(result.pushed),
                },
              ),
            );
          }}
        />
      ) : null}

      {groups && groups.help.length > 0 ? (
        <div style={{ marginTop: 24 }}>
          <h3 className="section-title">
            {t('anomalies.cat.help')} ({formatNumber(groups.help.length)})
          </h3>
          <p className="muted">{t('anomalies.cat.helpHint')}</p>
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th>{t('anomalies.colWhere')}</th>
                  <th>{t('anomalies.colWhat')}</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {groups.help.map(item => (
                  <HelpRow
                    key={item.uid}
                    item={item}
                    rules={scan.rules}
                    onWrite={setTicket}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {groups
        ? CATEGORIES.filter(key => groups[key].length > 0).map(key => (
            <div key={key} style={{ marginTop: 24 }}>
              <h3 className="section-title">
                {t(`anomalies.cat.${key}`)} ({formatNumber(groups[key].length)})
              </h3>
              <p className="muted">{t(`anomalies.cat.${key}Hint`)}</p>
              <div className="table-scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t('anomalies.colWhere')}</th>
                      <th>{t('anomalies.colWhat')}</th>
                      <th>{t('anomalies.colDo')}</th>
                      {key === 'abuse' || key === 'cost' ? <th /> : null}
                    </tr>
                  </thead>
                  <tbody>
                    {groups[key].map((item, index) => (
                      <FlagRow
                        key={`${key}-${index}`}
                        category={key}
                        item={item}
                        onHold={setAction}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        : null}

      {scan && scan.rows.length === 0 && groups.abuse.length === 0 ? (
        <p className="muted" style={{ marginTop: 24 }}>
          {t('anomalies.empty')}
        </p>
      ) : null}

      {holds.length > 0 ? (
        <div style={{ marginTop: 24 }}>
          <h3 className="section-title">{t('anomalies.holdsTitle')}</h3>
          <div className="table-scroll">
            <table className="table">
              <tbody>
                {holds.map(row => (
                  <HoldRows
                    key={row.uid}
                    row={row}
                    reasonLabel={reasonLabel}
                    onRelease={setAction}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {scan ? (
        <div style={{ marginTop: 24 }}>
          <p className="muted">
            {topCounter
              ? t('anomalies.rateLimitsSummary', {
                  counters: formatNumber(scan.rateLimits.length),
                  limited: formatNumber(groups.abuse.length),
                  top: formatNumber(topCounter.count),
                })
              : t('anomalies.rateLimitsNone')}
          </p>
          <button className="disclosure" onClick={() => setRawOpen(open => !open)}>
            {rawOpen ? t('anomalies.rawHide') : t('anomalies.rawShow')}
          </button>
          {rawOpen ? <RawTables scan={scan} /> : null}
        </div>
      ) : null}
    </div>
  );
}

/** One flag: where, what it means, what to do — and a hold where one fits. */
function FlagRow({ category, item, onHold }) {
  const { t, formatNumber } = useT();

  if (item.counter) {
    const { counter } = item;
    return (
      <tr>
        <td>{counter.uid ? <code>{counter.uid}</code> : '—'}</td>
        <td>
          <strong>{t('anomalies.flag.rate-limited')}</strong>
          <div>{t('anomalies.why.rate-limited')}</div>
          <div className="muted">
            <code>{counter.key}</code> · {formatNumber(counter.count)}/
            {formatNumber(counter.max)}
          </div>
        </td>
        <td className="muted">{t('anomalies.do.rate-limited')}</td>
        <td>
          {counter.uid ? (
            <button
              className="btn"
              onClick={() => onHold({ mode: 'hold', uid: counter.uid })}
            >
              {t('anomalies.holdFamily')}
            </button>
          ) : null}
        </td>
      </tr>
    );
  }

  const { flag, uid } = item;
  return (
    <tr>
      <td>
        <code>{uid}</code>
        {flag.deviceId ? (
          <div className="muted">
            {deviceLabel(flag.deviceId, flag.platform)} · build {flag.build}
          </div>
        ) : null}
      </td>
      <td>
        <strong>{t(`anomalies.flag.${flag.kind}`)}</strong>
        <div>{t(`anomalies.why.${flag.kind}`)}</div>
        <div className="muted">{flag.detail}</div>
      </td>
      <td className="muted">{t(`anomalies.do.${flag.kind}`)}</td>
      {category === 'cost' || category === 'abuse' ? (
        <td>
          {flag.deviceId ? (
            <button
              className="btn"
              onClick={() => onHold({ mode: 'hold', uid, deviceId: flag.deviceId })}
            >
              {t('anomalies.holdDevice')}
            </button>
          ) : null}
        </td>
      ) : null}
    </tr>
  );
}

/** A family that may be stuck: every reason, the owner's language, one ticket. */
function HelpRow({ item, rules, onWrite }) {
  const { t } = useT();
  const params = { noChild: rules.noChildDeviceDays, away: rules.ownerAwayDays };
  return (
    <tr>
      <td>
        <code>{item.uid}</code>
        <div className="muted">
          {item.ownerLanguage
            ? t('anomalies.ownerLanguage', { language: item.ownerLanguage })
            : t('anomalies.ownerLanguageUnknown')}
        </div>
      </td>
      <td>
        {item.flags.map((flag, index) => (
          <div
            key={`${flag.kind}-${flag.deviceId ?? ''}`}
            style={index > 0 ? { marginTop: 8 } : null}
          >
            <strong>{t(`anomalies.flag.${flag.kind}`)}</strong>
            <div>{t(`anomalies.why.${flag.kind}`, params)}</div>
            <div className="muted">
              {flag.deviceId ? `${deviceLabel(flag.deviceId, flag.platform)} · ` : ''}
              {flag.detail}
            </div>
          </div>
        ))}
      </td>
      <td>
        <button className="btn" onClick={() => onWrite(item)}>
          {t('anomalies.sendTicket')}
        </button>
      </td>
    </tr>
  );
}

/**
 * Write to the owner. A form, like a hold: the family reads these words under
 * the product's name, so it takes the message and the audit reason the server
 * refuses to act without.
 */
function TicketForm({ target, max, onCancel, onDone }) {
  const { t } = useT();
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const canSubmit = message.trim().length > 0 && reason.trim().length >= 12 && !busy;

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      onDone(
        await openSupportTicket({
          uid: target.uid,
          message: message.trim(),
          reason: reason.trim(),
        }),
      );
    } catch (caught) {
      setError(caught.message);
      setBusy(false);
    }
  };

  return (
    <div className="card" style={{ marginBottom: 18 }}>
      <h3 className="section-title">
        {t('anomalies.formTicket', { uid: target.uid })}
      </h3>
      <p className="muted">{t('anomalies.ticketEffect')}</p>
      <p className="muted">
        {target.ownerLanguage
          ? t('anomalies.ownerLanguage', { language: target.ownerLanguage })
          : t('anomalies.ownerLanguageUnknown')}
      </p>

      <div className="field-group">
        <label className="field-label" htmlFor="ticket-message">
          {t('anomalies.ticketMessage', { max })}
        </label>
        <textarea
          className="field"
          id="ticket-message"
          rows={6}
          maxLength={max}
          value={message}
          onChange={event => setMessage(event.target.value)}
          style={{ fontFamily: 'inherit', resize: 'vertical' }}
        />
      </div>

      <div className="field-group" style={{ marginTop: 12 }}>
        <label className="field-label" htmlFor="ticket-audit">
          {t('anomalies.auditReason')}
        </label>
        <input
          className="field"
          id="ticket-audit"
          value={reason}
          onChange={event => setReason(event.target.value)}
        />
      </div>

      {error ? <div className="error-banner">{error}</div> : null}

      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <button className="btn" disabled={!canSubmit} onClick={submit}>
          {t('anomalies.confirmTicket')}
        </button>
        <button className="btn btn-ghost" disabled={busy} onClick={onCancel}>
          {t('anomalies.cancel')}
        </button>
      </div>
    </div>
  );
}

/** A family's holds — its own and its devices' — each with a release. */
function HoldRows({ row, reasonLabel, onRelease }) {
  const { t } = useT();
  return (
    <>
      {row.hold ? (
        <tr>
          <td>
            <code>{row.uid}</code>
          </td>
          <td>
            {t('anomalies.familyHeld', { reason: reasonLabel(row.hold.reason) })}
            {row.hold.note ? <div className="muted">“{row.hold.note}”</div> : null}
          </td>
          <td>
            <button
              className="btn btn-ghost"
              onClick={() => onRelease({ mode: 'release', uid: row.uid })}
            >
              {t('anomalies.releaseFamily')}
            </button>
          </td>
        </tr>
      ) : null}
      {row.heldDevices.map(device => (
        <tr key={device.deviceId}>
          <td>
            <code>{row.uid}</code>
            <div className="muted">{deviceLabel(device.deviceId, device.platform)}</div>
          </td>
          <td>
            {t('anomalies.deviceHeld', {
              device: deviceLabel(device.deviceId, device.platform),
              reason: reasonLabel(device.hold.reason),
            })}
            {device.hold.byFamily ? (
              <div className="muted">{t('anomalies.byFamily')}</div>
            ) : null}
          </td>
          <td>
            {device.hold.byFamily ? null : (
              <button
                className="btn btn-ghost"
                onClick={() =>
                  onRelease({
                    mode: 'release',
                    uid: row.uid,
                    deviceId: device.deviceId,
                  })
                }
              >
                {t('anomalies.releaseDevice')}
              </button>
            )}
          </td>
        </tr>
      ))}
    </>
  );
}

/** The counters and the activity ranking as the scan returned them. */
function RawTables({ scan }) {
  const { t, formatNumber } = useT();
  return (
    <>
      <p className="muted" style={{ marginTop: 12 }}>
        {t('anomalies.rateLimitsHint')}
      </p>
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
                <td>{counter.max === undefined ? '—' : formatNumber(counter.max)}</td>
                <td>{counter.uid ? <code>{counter.uid}</code> : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
