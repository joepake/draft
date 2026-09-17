import { useEffect, useMemo, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { SUPPORT_REPORT_MAX_MESSAGE_LENGTH } from '@kidgate/schema/supportReport';
import { userRepository } from '../adapters/repositories.js';
import Card from './Card.jsx';
import { timeAgo } from './timeAgo.js';

/*
 * The three lifecycle values, as a mark and a tone. `SupportReportStatus` is
 * the list (`@kidgate/schema/supportReport`) and an ABSENT status is
 * `pending` — a report no operator has touched yet — so every read below
 * defaults rather than indexing on `undefined`, which printed
 * `supportReports.status.undefined` as a raw key.
 *
 * Only the open half is coloured: resolved is the resting state, and a green
 * chip on every old report would leave the one still waiting with nothing to
 * stand out against — the rule the control grid's tones already follow.
 */
const STATUS_TONE = { pending: 'warning', in_review: 'brand', resolved: 'muted' };
const STATUS_ICON = { pending: 'hourglass', in_review: 'eye', resolved: 'check' };

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
    /*
     * No title of its own: this card IS the section since 2026-09-16, and the
     * page header above it already says "Requests & reports" — printed twice,
     * forty pixels apart, it read as two headings for two things. The open
     * count survives as a line inside, because `Card` drops its whole header
     * when there is no title, subtitle included, so it cannot stay in that
     * slot.
     */
    <Card>
      {reports.length > 0 && (
        /* The open count as a chip rather than a grey line: it is the one
           reading on this page, and `Card` has no header slot to put it in. */
        <p className="support-count">
          <span className={`pill ${open > 0 ? 'tone-warning' : 'tone-good'}`}>
            <span className="pill-dot" />
            {appT('supportReports.subtitleCount', { count: open })}
          </span>
        </p>
      )}
      {reports.length === 0 ? (
        /* A first-run panel, not two stranded paragraphs: the lifebuoy says
           what the card is for before either sentence is read. */
        <div className="empty-panel">
          <span className="empty-panel-icon">
            <Icon name="lifebuoy" size={24} />
          </span>
          <strong>{appT('supportReports.emptyTitle')}</strong>
          <p className="hint">{appT('supportReports.emptyDescription')}</p>
        </div>
      ) : (
        <ul className="support-list">
          {reports.map(report => {
            const isOpen = expanded === report.id;
            const status = report.status ?? 'pending';
            return (
              <li
                key={report.id}
                className={`support-item tone-${STATUS_TONE[status] ?? 'muted'}${
                  isOpen ? ' is-open' : ''
                }`}
              >
                <button
                  className="support-head"
                  aria-expanded={isOpen}
                  title={appT('supportReports.expandHint')}
                  onClick={() =>
                    setExpanded(current => (current === report.id ? null : report.id))
                  }
                >
                  <span className="support-icon">
                    <Icon name={STATUS_ICON[status] ?? 'message'} size={15} />
                  </span>
                  <span className="support-body">
                    <strong>{report.message}</strong>
                    <em>
                      {appT(`supportReports.status.${status}`)}
                      <span className="dot-sep">·</span>
                      {timeAgo(report.createdAt)}
                    </em>
                  </span>
                  {/*
                    That there IS a reply, never that it is new.
                    `supportReports.unreadBadge` says "New reply" and means it
                    — the phone knows, because it stores what it has shown
                    (MMKV); this browser stores nothing for support reports
                    (`reportSeen.js` is the weekly report's, not this one), so
                    the badge would have called a month-old answer new on
                    every visit.
                  */}
                  {report.response && !isOpen && (
                    <span
                      className="support-badge"
                      title={appT('supportReports.responseLabel')}
                      aria-label={appT('supportReports.responseLabel')}
                    >
                      <Icon name="message" size={12} />
                    </span>
                  )}
                  <span className="support-chev">
                    <Icon name="chevronRight" size={14} />
                  </span>
                </button>
                {isOpen && (
                  <div className="support-detail">
                    {report.response ? (
                      <div className="support-reply">
                        <strong>{appT('supportReports.responseLabel')}</strong>
                        <p>{report.response}</p>
                      </div>
                    ) : (
                      /* Only while it is still open: "waiting for a reply"
                         under a resolved report would be wrong twice. */
                      status !== 'resolved' && (
                        <p className="support-waiting">
                          <Icon name="clock" size={13} />
                          {appT('supportReports.waitingNote')}
                        </p>
                      )
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}

      <div className="support-compose">
        <label className="sheet-label" htmlFor="support-message">
          {appT('supportReports.newReportButton')}
        </label>
        <textarea
          id="support-message"
          className="reward-input support-input"
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
        <div className="support-compose-foot">
          {/* Digits, in every locale — a counter needs no key, and the cap is
              the schema's rather than a number written here. */}
          <span className={`support-chars${tooLong ? ' is-over' : ''}`}>
            {trimmed.length}/{SUPPORT_REPORT_MAX_MESSAGE_LENGTH}
          </span>
          <button
            className="btn btn-primary"
            disabled={busy || trimmed.length === 0 || tooLong}
            onClick={submit}
          >
            {/* Send, not Save. This button hands a report to a human at
                KidGate — nothing is kept as a draft, and "Save" described an
                action the screen has never had.

                `settings.reportSendButton` is the PHONE's own label for this
                exact action (`ReportProblemModal`), so it is reused rather
                than twinned: a new key here would be one sentence in two
                packs, and only one of them gets edited next time
                (`.claude/rules/i18n.md`). */}
            {busy ? t('dash.working') : appT('settings.reportSendButton')}
          </button>
        </div>
      </div>
    </Card>
  );
}
