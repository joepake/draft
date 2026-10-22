import { useEffect, useRef, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { webSessionLabel } from '@kidgate/core/domain/webSessionLabel';
import { getLocaleTag } from '@kidgate/i18n/web';
import { useAuth } from '../auth/AuthContext.jsx';
import Card from './Card.jsx';
import { useActivityTranslate } from './activityCopy.js';
import { useReload } from './useReload.js';

/**
 * The browsers that can make changes for this account, and the way to end one.
 * Every sentence is the app pack's `webSignIn` namespace through `appT` — the
 * phone's Family screen says the same rows; no `dash.*` twin.
 *
 * **Drawn for a WRITE session only.** Both endpoints ask for it
 * (`requireParentDevice`), so a browser that only views gets a 401 for either —
 * `FamilySettingsCard` does not mount this for one. **Any parent**, owner or
 * not: the list is the caller's own sessions, so a co-parent sees their own.
 *
 * Read on mount and after a removal that left this browser standing; never
 * watched (`adapters/oneShot.js`, and this is an endpoint besides).
 *
 * **Removing stops control calls only** — the confirmation says so. A browser
 * keeps the read-only sign-in it already has until someone signs out there.
 *
 * Losing the write session — the list or a removal answered 401, or the parent
 * removed THIS browser — goes to `onWriteLost`, which is the page's
 * `setWriteExpired(true)`: the controls stop offering writes and the card goes.
 * The toast goes to the page's (`onToast`), because the page's outlives this
 * card being unmounted by that very call.
 */

/** The `ControlError.code`s that mean this browser's write grant is gone. */
const WRITE_LOST = new Set(['unauthenticated', 'staleCredential']);

/** "Chrome on Windows"; one known name alone; "Web browser" when neither. */
function rowTitle(userAgent, appT) {
  const { browser, os } = webSessionLabel(userAgent);
  if (browser && os) return appT('webSignIn.sessionRow', { browser, os });
  return browser ?? os ?? appT('webSignIn.sessionRowUnknown');
}

export default function WebSessionsCard({ actions, onToast, onWriteLost }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const { claims } = useAuth();
  const currentId = claims?.webSessionId ?? null;

  const [sessions, setSessions] = useState(null);
  const [error, setError] = useState(null);
  const [confirming, setConfirming] = useState(null);
  const [busy, setBusy] = useState(false);
  const [reloadKey, reload] = useReload();

  /*
   * `actions` is rebuilt whenever the family is read again, so a load keyed on
   * it would list again on every refresh of an unrelated screen.
   */
  const latest = useRef({ actions, onToast, onWriteLost });
  latest.current = { actions, onToast, onWriteLost };

  useEffect(() => {
    let alive = true;
    latest.current.actions.listWebSessions().then(
      list => {
        if (!alive) return;
        setSessions(list);
        setError(null);
      },
      e => {
        if (!alive) return;
        if (WRITE_LOST.has(e?.code)) latest.current.onWriteLost?.();
        else setError(e);
      },
    );
    return () => {
      alive = false;
    };
  }, [reloadKey]);

  async function revoke(session) {
    const { actions: api, onToast: toast, onWriteLost: lost } = latest.current;
    const before = sessions;
    setConfirming(null);
    setBusy(true);
    // Optimistic, with the rollback being the list we held — one removal in
    // flight at a time (the buttons are disabled), so it cannot clobber a second.
    setSessions(list => list.filter(s => s.id !== session.id));
    try {
      await api.revokeWebSession(session.id);
      toast?.({ tone: 'good', text: appT('webSignIn.revokedToast') });
      // This browser's own grant just ended: nothing to re-read, and the next
      // list would be refused.
      if (session.id === currentId) lost?.();
      else reload();
    } catch (e) {
      setSessions(before);
      toast?.({ tone: 'critical', text: appT('webSignIn.revokeFailed') });
      if (WRITE_LOST.has(e?.code)) lost?.();
    } finally {
      setBusy(false);
    }
  }

  // No card until there is a row (the phone's section does the same); what a
  // browser here can do is said in the removal confirmation, nowhere else.
  if (!error && !sessions?.length) return null;

  return (
    <Card title={appT('webSignIn.sessionsTitle')}>
      {error ? (
        <p className="hint" role="alert">
          {t(error.messageKey ?? 'controlError.generic')}
        </p>
      ) : (
        sessions && (
          <ul className="tc-list">
            {sessions.map(session => {
              const title = rowTitle(session.userAgent, appT);
              return (
                <li key={session.id}>
                  <div className="tc-row ws-row">
                    <span className="tc-avatar" aria-hidden="true">
                      <Icon name="globe" size={15} />
                    </span>
                    <span className="tc-body">
                      <strong>{title}</strong>
                      {session.sessionExpiresAtMs > 0 && (
                        <em>
                          {appT('webSignIn.sessionExpires', {
                            date: new Date(
                              session.sessionExpiresAtMs,
                            ).toLocaleDateString(getLocaleTag()),
                          })}
                        </em>
                      )}
                      <em>
                        {appT(
                          session.grantedVia === 'parentPin'
                            ? 'webSignIn.sessionViaPin'
                            : 'webSignIn.sessionViaQr',
                        )}
                      </em>
                    </span>
                    {session.id === currentId && (
                      <span className="pill tone-good">
                        {appT('webSignIn.thisBrowser')}
                      </span>
                    )}
                    <button
                      className="btn btn-sm place-remove"
                      disabled={busy}
                      aria-label={`${appT('webSignIn.sessionsRevoke')}: ${title}`}
                      onClick={() => setConfirming(session.id)}
                    >
                      <Icon name="trash" size={13} />
                      {appT('webSignIn.sessionsRevoke')}
                    </button>
                  </div>

                  {confirming === session.id && (
                    <div className="device-admin-confirm">
                      <strong>{appT('webSignIn.sessionsRevokeConfirmTitle')}</strong>
                      <p>{appT('webSignIn.sessionsRevokeConfirmBody')}</p>
                      <div className="reward-actions">
                        <button
                          className="login-link"
                          onClick={() => setConfirming(null)}
                        >
                          {appT('shared.cancel')}
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          disabled={busy}
                          onClick={() => revoke(session)}
                        >
                          {appT('webSignIn.sessionsRevoke')}
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )
      )}
    </Card>
  );
}
