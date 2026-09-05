import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  fetchSupportAttachment,
  fetchSupportReport,
  fetchSupportReports,
  respondToSupportReport,
} from './api.js';

/**
 * One screenshot, fetched with the operator's token and shown from a blob.
 *
 * A plain `<img src>` cannot carry an `Authorization` header, and the bytes
 * are behind one on purpose — `functions/admin/support.js` explains why there
 * is no signed URL. So the image is fetched, wrapped in an object URL, and the
 * URL is revoked when the component goes away: nothing that outlives this tab,
 * nothing that survives a copy-paste.
 */
function Attachment({ uid, id, index, width, height, bytes }) {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let objectUrl = null;
    let cancelled = false;
    fetchSupportAttachment(uid, id, index)
      .then(blob => {
        if (cancelled) {
          return;
        }
        objectUrl = URL.createObjectURL(blob);
        setUrl(objectUrl);
      })
      .catch(loadError => {
        if (!cancelled) {
          setError(loadError.message);
        }
      });
    return () => {
      cancelled = true;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [uid, id, index]);

  if (error) {
    // `object-empty` is the one worth a sentence rather than a code: the
    // upload created the object and wrote nothing, so there is no screenshot
    // to show and no admin-side fix. See `docs/BACKLOG.md`.
    const message =
      error === 'object-empty'
        ? `Uploaded empty — 0 bytes stored, though the report claims ${
            bytes ? `${Math.round(bytes / 1024)} KB` : 'a size'
          }. The app's upload failed.`
        : error === 'object-missing'
          ? 'The stored file is gone.'
          : error;
    return (
      <span className="muted" style={{ maxWidth: 260 }}>
        Screenshot {index + 1}: {message}
      </span>
    );
  }
  if (!url) {
    return <span className="shot-loading" />;
  }
  return (
    <a href={url} target="_blank" rel="noreferrer" title={`${width}×${height}`}>
      <img src={url} alt={`Screenshot ${index + 1}`} />
    </a>
  );
}

/**
 * The support queue — read a filed report, reply to it.
 *
 * ## The one screen where the operator is visible to a customer
 *
 * Everything else in this app is invisible to the family: impersonation writes
 * no family-readable trace, the rollup is aggregate, the lookup is a read. A
 * reply here lands on a document the parent's own app can read
 * (`firestore.rules:726`), under the product's name.
 *
 * That is worth *saying* and not worth *enforcing*. The send button names
 * which of the two things is about to happen — "Send to family" when there is
 * text, "Update status only" when there is not — and then does as it is told.
 * An earlier version refused to resolve a ticket without a reply; closing one
 * you already answered in another channel is the ordinary case, so the refusal
 * was a workflow opinion imposed on the tool's only user.
 *
 * ## Absent status means pending
 *
 * `supportReport.ts` says a report with no `status` field — every one filed
 * before the field existed, and every one no operator has touched — reads as
 * `pending`. That is the queue's most urgent state, so a UI that rendered the
 * raw field would show exactly the tickets that need work as blank. The
 * server normalises it; this file never reads `status` raw.
 */

const FILTERS = [
  { key: 'open', label: 'Open' },
  { key: 'pending', label: 'Pending' },
  { key: 'in_review', label: 'In review' },
  { key: 'resolved', label: 'Resolved' },
  { key: 'all', label: 'All' },
];

const STATUS_TONE = {
  pending: 'critical',
  in_review: 'warning',
  resolved: 'good',
};

const STATUS_LABEL = {
  pending: 'Pending',
  in_review: 'In review',
  resolved: 'Resolved',
};

/**
 * A timestamp as text — and **never anything but text**.
 *
 * The fallback used to be `return iso`, handing back whatever it was given
 * when the parse failed. That is fine for a malformed string and fatal for an
 * object: `supportReports.createdAt` is stored as a Firestore Timestamp, so
 * the server sent `{_seconds, _nanoseconds}`, `Date.parse` gave `NaN`, and
 * this returned the object straight into JSX —
 *
 *     Objects are not valid as a React child
 *
 * which unmounts the tree and paints white. The server now converts
 * (`functions/admin/serialize.js`), so this should never see one again; the
 * `String()` is here anyway, because a render helper that can return a
 * non-renderable value is a blank page waiting for the next field that
 * changes shape.
 */
function when(value) {
  if (!value) {
    return 'unknown';
  }
  const parsed = Date.parse(value);
  return Number.isFinite(parsed)
    ? new Date(parsed).toISOString().slice(0, 16).replace('T', ' ')
    : String(value);
}

function Reply({ report, onDone }) {
  const [text, setText] = useState(report.response ?? '');
  const [status, setStatus] = useState(
    report.status === 'resolved' ? 'resolved' : 'in_review',
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const send = useCallback(() => {
    setBusy(true);
    setError(null);
    respondToSupportReport({
      uid: report.uid,
      id: report.id,
      status,
      response: text.trim() || undefined,
    })
      .then(onDone)
      .catch(sendError => setError(sendError.message))
      .finally(() => setBusy(false));
  }, [report.uid, report.id, status, text, onDone]);

  return (
    <div style={{ marginTop: 14 }}>
      <label className="field-label" htmlFor={`reply-${report.id}`}>
        Reply to the family
      </label>
      <textarea
        className="field"
        id={`reply-${report.id}`}
        rows={4}
        value={text}
        onChange={event => setText(event.target.value)}
        style={{ fontFamily: 'inherit', resize: 'vertical' }}
      />
      <div className="field-hint">
        The parent reads this in their own app, beside the report they filed.
      </div>

      <div style={{ alignItems: 'center', display: 'flex', gap: 10, marginTop: 12 }}>
        <div className="segmented">
          <button
            className={status === 'in_review' ? 'is-active' : undefined}
            onClick={() => setStatus('in_review')}
          >
            In review
          </button>
          <button
            className={status === 'resolved' ? 'is-active' : undefined}
            onClick={() => setStatus('resolved')}
          >
            Resolved
          </button>
        </div>
        <button className="btn" disabled={busy} onClick={send}>
          {busy ? 'Saving…' : text.trim() ? 'Send to family' : 'Update status only'}
        </button>
        {/*
          The label carries the difference instead of a validation rule:
          closing a ticket you already answered elsewhere is an ordinary thing
          to do, and the button says which of the two is about to happen.
        */}
      </div>

      {error ? (
        <div className="error-banner" style={{ marginTop: 12 }}>
          <span>{error}</span>
        </div>
      ) : null}
    </div>
  );
}

function Detail({ uid, id, onChanged }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    setError(null);
    fetchSupportReport(uid, id)
      .then(result => {
        if (!cancelled) {
          setData(result);
        }
      })
      .catch(loadError => {
        if (!cancelled) {
          setError(loadError.message);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [uid, id]);

  if (error) {
    return (
      <div className="error-banner">
        <span>{error}</span>
      </div>
    );
  }
  if (!data) {
    return <p className="muted">Loading…</p>;
  }

  const { report, family } = data;
  const plan = family?.planId ?? 'free';

  return (
    <div className="ticket-detail">
      <p className="ticket-message">{report.message}</p>

      {/*
        Who filed it, not only what they filed. A ticket without the account
        behind it makes the operator paste the uid into Family lookup for every
        single one — and that lookup demands a stated reason, so the shortcut
        would cost a second audit row per ticket.
      */}
      {family ? (
        <div className="ticket-account">
          <div>
            <div className="tile-label">Account</div>
            <div className="account-line">{family.name || 'no family name'}</div>
            <div className="account-line faint">{family.email || 'no email'}</div>
          </div>
          <div>
            <div className="tile-label">Plan</div>
            <div className="account-line">
              {plan}
              {family.subscriptionStatus ? ` · ${family.subscriptionStatus}` : ''}
            </div>
            <div className="account-line faint">
              {family.trialStartedAt
                ? `trial from ${String(family.trialStartedAt).slice(0, 10)}`
                : 'no trial started'}
            </div>
          </div>
          <div>
            <div className="tile-label">Customer since</div>
            <div className="account-line">
              {family.createdAt ? String(family.createdAt).slice(0, 10) : 'unknown'}
            </div>
            <div className="account-line faint">
              {family.childDeviceCount} child · {family.parentDeviceCount} parent
              devices
            </div>
          </div>
          <div>
            <div className="tile-label">Settings</div>
            <div className="account-line">
              PIN {family.parentPinSet ? 'set' : 'not set'}
            </div>
            <div className="account-line faint">
              AI consent{' '}
              {family.messageAiConsent === null
                ? 'never asked'
                : family.messageAiConsent
                  ? 'on'
                  : 'off'}
            </div>
          </div>
        </div>
      ) : (
        <div className="status-strip" style={{ marginBottom: 12 }}>
          <span className="status-dot is-warning" />
          <span className="status-label">Account no longer exists</span>
          <span className="status-detail">
            The report outlived the family document — deleted, or purged by{' '}
            <code>purgeScheduledDeletions</code>.
          </span>
        </div>
      )}

      <div className="ticket-meta">
        <span>{report.platform ?? 'unknown platform'}</span>
        {/*
          Version *and* build. An OTA ships a new bundle under an unchanged
          marketing version, so "1.4.0" on two phones can be two different
          builds — the build number is the half that identifies the code.
          Both null on every report filed before 2026-09-02.
        */}
        <span>
          app {report.appVersion ?? '—'}
          {report.appVersionCode ? ` (${report.appVersionCode})` : ''}
        </span>
        {/*
          The language to answer in. Absent is not English — it is a report
          filed before the app recorded one.
        */}
        <span>{report.language ? `lang ${report.language}` : 'lang unknown'}</span>
        <span>{report.deviceName ?? 'unnamed device'}</span>
        <span>filed {when(report.createdAt)}</span>
        <span>uid {report.uid}</span>
      </div>

      {report.attachments?.length > 0 ? (
        <div className="ticket-shots">
          {report.attachments.map(attachment =>
            attachment.available ? (
              <Attachment
                key={attachment.index}
                uid={report.uid}
                id={report.id}
                index={attachment.index}
                width={attachment.width}
                height={attachment.height}
                bytes={attachment.bytes}
              />
            ) : (
              <span key={attachment.index} className="muted">
                Screenshot {attachment.index + 1} has no stored path
              </span>
            ),
          )}
        </div>
      ) : null}

      {report.response ? (
        <div className="ticket-reply">
          <div className="tile-label">
            Sent {report.respondedAt ? when(report.respondedAt) : ''}
          </div>
          {report.response}
        </div>
      ) : null}

      <Reply report={report} onDone={onChanged} />
    </div>
  );
}

export default function Support() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [filter, setFilter] = useState('open');
  const [open, setOpen] = useState(null);

  const load = useCallback(() => {
    setBusy(true);
    setError(null);
    fetchSupportReports()
      .then(setData)
      .catch(loadError => setError(loadError.message))
      .finally(() => setBusy(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const reports = useMemo(() => {
    const all = data?.reports ?? [];
    if (filter === 'all') {
      return all;
    }
    if (filter === 'open') {
      return all.filter(report => report.status !== 'resolved');
    }
    return all.filter(report => report.status === filter);
  }, [data, filter]);

  const counts = useMemo(() => {
    const all = data?.reports ?? [];
    return {
      pending: all.filter(report => report.status === 'pending').length,
      in_review: all.filter(report => report.status === 'in_review').length,
    };
  }, [data]);

  return (
    <>
      <div className="section-head">
        <h2 className="section-title">Support queue</h2>
        <div style={{ alignItems: 'center', display: 'flex', gap: 8 }}>
          <div className="segmented">
            {FILTERS.map(entry => (
              <button
                key={entry.key}
                className={filter === entry.key ? 'is-active' : undefined}
                onClick={() => setFilter(entry.key)}
              >
                {entry.label}
              </button>
            ))}
          </div>
          <button className="btn btn-ghost" disabled={busy} onClick={load}>
            {busy ? 'Loading…' : 'Refresh'}
          </button>
        </div>
      </div>

      {error ? (
        <div className="error-banner">
          <span>{error}</span>
        </div>
      ) : null}

      {!data && !error ? <p className="muted">Loading…</p> : null}

      {data ? (
        <>
          <div className="status-strip" style={{ marginBottom: 12 }}>
            <span
              className={`status-dot is-${counts.pending > 0 ? 'critical' : 'good'}`}
            />
            <span className="status-label">
              {counts.pending} pending, {counts.in_review} in review
            </span>
            <span className="status-detail">
              A reply here is the only operator action a family ever sees.
            </span>
            {data.truncated ? (
              <span className="status-detail" style={{ marginLeft: 'auto' }}>
                Showing the newest {reports.length} — older reports not listed
              </span>
            ) : null}
          </div>

          {reports.length === 0 ? (
            <div className="card">
              <p className="muted" style={{ margin: 0 }}>
                Nothing in this filter.
              </p>
            </div>
          ) : (
            <div className="metric-list">
              {reports.map(report => {
                const key = `${report.uid}:${report.id}`;
                const isOpen = open === key;
                return (
                  <div key={key} className="ticket">
                    <button
                      className="ticket-head"
                      onClick={() => setOpen(isOpen ? null : key)}
                    >
                      <span className={`status-dot is-${STATUS_TONE[report.status]}`} />
                      <span className="ticket-status">
                        {STATUS_LABEL[report.status]}
                      </span>
                      <span className="ticket-summary">{report.message}</span>
                      <span className="ticket-when">
                        {report.attachmentCount > 0
                          ? `${report.attachmentCount} shot${report.attachmentCount === 1 ? '' : 's'} · `
                          : ''}
                        {when(report.createdAt)}
                      </span>
                    </button>
                    {isOpen ? (
                      <Detail
                        uid={report.uid}
                        id={report.id}
                        onChanged={() => {
                          setOpen(null);
                          load();
                        }}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : null}
    </>
  );
}
