import { useEffect, useMemo, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { SUPPORT_REPORT_MAX_MESSAGE_LENGTH } from '@kidgate/schema/supportReport';
import { userRepository } from '../adapters/repositories.js';
import Card from './Card.jsx';
import { timeAgo } from './timeAgo.js';

/**
 * A parent's own support reports, and the form that files one.
 *
 * **`platform: 'web'`, not the phone they also own.** The field says which
 * surface filed the report, and an operator reading `'ios'` over a dashboard
 * bug goes looking at the wrong build — which is why the schema gained a third
 * value rather than this reusing one of the two
 * (`@kidgate/schema/supportReport`). `appVersion` is the root manifest's,
 * injected by `vite.config.js`.
 *
 * **No attachments here.** The phone resizes a screenshot inside its native
 * picker before uploading; a browser would need its own resize path plus a
 * Storage upload, and the schema's own note says a report with no screenshot is
 * the common one.
 *
 * `accountId` is the signed-in uid — `supportReports` hangs off `users/{uid}`
 * under `isParentAccount(userId)`, so a co-parent files under their own root
 * and reads their own history, which is correct for both.
 */
export default function SupportCard({
  accountId,
  accountEmail,
  familyId,
  familyName,
  appT,
}) {
  const { t, language } = useT();
  const [reports, setReports] = useState([]);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!accountId) return undefined;
    return userRepository.subscribeSupportReports(
      accountId,
      setReports,
      // Decoration on a page that works without it: a parent can still file.
      () => undefined,
    );
  }, [accountId]);

  const open = useMemo(
    () => reports.filter(report => report.status !== 'resolved').length,
    [reports],
  );

  const trimmed = message.trim();
  const tooLong = trimmed.length > SUPPORT_REPORT_MAX_MESSAGE_LENGTH;

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      await userRepository.submitSupportReport(accountId, {
        message: trimmed,
        accountId,
        email: accountEmail ?? null,
        /* The browser, and no name for it. There is no device identity to read
           here, and inventing one would put a machine name on a row that is
           not about a machine. */
        deviceName: null,
        familyName: familyName ?? null,
        familyId: familyId ?? null,
        language,
      });
      setMessage('');
    } catch (failure) {
      // `ApiFailure` carries a key, never a sentence — the same shape
      // `apps/mobile` renders through `apiErrorMessage`.
      setError(failure?.messageKey ?? null);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card
      title={appT('supportReports.title')}
      subtitle={
        reports.length > 0
          ? appT('supportReports.subtitleCount', { count: open })
          : null
      }
    >
      {reports.length === 0 ? (
        <>
          <p className="empty">{appT('supportReports.emptyTitle')}</p>
          <p className="hint">{appT('supportReports.emptyDescription')}</p>
        </>
      ) : (
        <ul className="child-device-list">
          {reports.map(report => {
            const isOpen = expanded === report.id;
            return (
              <li key={report.id} className="support-row">
                <button
                  className="kid"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setExpanded(current => (current === report.id ? null : report.id))
                  }
                >
                  <span className="kid-meta">
                    <strong>{report.message}</strong>
                    <em>
                      {appT(`supportReports.status.${report.status}`)}
                      <span className="dot-sep">·</span>
                      {timeAgo(report.createdAt)}
                    </em>
                  </span>
                </button>
                {isOpen && (
                  <div className="support-detail">
                    {report.response ? (
                      <>
                        <strong>{appT('supportReports.responseLabel')}</strong>
                        <p>{report.response}</p>
                      </>
                    ) : (
                      /* Only while it is still open: "waiting for a reply"
                         under a resolved report would be wrong twice. */
                      report.status !== 'resolved' && (
                        <p className="hint">{appT('supportReports.waitingNote')}</p>
                      )
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}

      <div className="child-assign">
        <label className="sheet-label" htmlFor="support-message">
          {appT('supportReports.newReportButton')}
        </label>
        <textarea
          id="support-message"
          className="reward-input"
          rows={4}
          value={message}
          maxLength={SUPPORT_REPORT_MAX_MESSAGE_LENGTH}
          disabled={busy}
          onChange={event => setMessage(event.target.value)}
        />
        {/* The cap is the document's (`@kidgate/schema/supportReport`), so the
            check is against that constant rather than a number typed here. */}
        {tooLong && <p className="hint">{appT('settings.reportMessageTooLong')}</p>}
        {error && <p className="hint">{appT(error)}</p>}
        <button
          className="btn btn-primary"
          disabled={busy || trimmed.length === 0 || tooLong}
          onClick={submit}
        >
          {busy ? t('dash.working') : t('dash.save')}
        </button>
      </div>
    </Card>
  );
}
