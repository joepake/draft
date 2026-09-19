import { useEffect, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { legalDocumentUrl } from '@kidgate/core/domain/siteLinks';
import { accountDeletionRepository } from '../adapters/repositories.js';
import Card from './Card.jsx';
import { useReload } from './useReload.js';

/**
 * The portable half of the phone's Settings screen: the legal documents, and
 * deleting the account.
 *
 * **What is deliberately absent, and why it is absent rather than disabled.**
 * The phone's Security and Preferences sections are device-local: the app-lock
 * PIN and its biometric unlock live in the phone's secure storage, the widget
 * row asks the launcher, the SOS sound asks the audio system. None of those
 * describe anything a browser has, and a greyed row saying "not available"
 * teaches a parent to look for a setting that will never appear here. The
 * Parent PIN is different again: `setParentPin` requires `requireParentDevice`
 * server-side, so a browser session cannot change it without a Cloud Functions
 * change — that one is a gap rather than a decision.
 *
 * Language, palette and sign-out are this browser's and live in the rail's
 * account block, which is where they already were.
 *
 * `accountId` is the signed-in uid: `accountDeletionRequests` hangs off
 * `users/{uid}` under `isParentAccount(userId)`, so a co-parent schedules the
 * deletion of their OWN account, not the family's.
 */
export default function AccountCard({
  accountId,
  accountEmail,
  parentCount,
  deviceCount,
  appT,
}) {
  const { t, language } = useT();
  const [request, setRequest] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [reloadKey, reload] = useReload();

  /*
   * Live: the phone can schedule or cancel the same deletion, and this card is
   * the only thing on the page that would otherwise keep offering an action
   * that has already been taken.
   */
  useEffect(() => {
    if (!accountId) return undefined;
    return accountDeletionRepository.subscribeActiveRequest(
      accountId,
      setRequest,
      /* Required, and swallowed on purpose: a dropped listener must leave the
         card showing what it last showed. Turning a refused read into "no
         request" would offer Delete to someone who already scheduled one. */
      () => undefined,
    );
  }, [accountId, reloadKey]);

  const run = async work => {
    setBusy(true);
    try {
      await work();
      setConfirming(false);
      // The read is one-shot (`adapters/oneShot.js`), so a request this card
      // just filed or cancelled is invisible to it until it asks again.
      reload();
    } catch {
      // A refused write leaves the card saying what the document still says.
    } finally {
      setBusy(false);
    }
  };

  /** Whole days left of the grace window, floored — never a negative. */
  const daysLeft = request?.purgeAfter
    ? Math.max(
        0,
        Math.ceil((new Date(request.purgeAfter).getTime() - Date.now()) / 86400000),
      )
    : null;

  return (
    <>
      <Card title={appT('settings.sectionLegalTitle')}>
        {/* Absolute URLs into `apps/site`, built by the shared helper so the
            path and the `?hl=` are the phone's. A second copy of either would
            be a link that breaks on a route rename nobody tested twice. */}
        <ul className="child-device-list">
          {['privacyPolicy', 'termsOfService'].map(key => (
            <li key={key}>
              <a
                className="kid"
                href={legalDocumentUrl(key, language)}
                target="_blank"
                rel="noreferrer"
              >
                <span className="kid-meta">
                  <strong>
                    {key === 'privacyPolicy'
                      ? appT('settings.privacyPolicyTitle')
                      : appT('settings.termsOfServiceTitle')}
                  </strong>
                  <em>
                    {key === 'privacyPolicy'
                      ? appT('settings.privacyPolicySubtitle')
                      : appT('settings.termsOfServiceSubtitle')}
                  </em>
                </span>
                <Icon name="chevronRight" size={14} />
              </a>
            </li>
          ))}
        </ul>
      </Card>

      {/*
        The same danger zone the child hub closes with (`ChildHub.jsx`), and
        for the same reason: this was a full white card carrying the weight of
        the working cards above it, with a lone pink button on a third line —
        the one block a parent should pass by drew the most attention on the
        page. Glyph, title, sentence and the button are one row; the ground
        says what it is before the title is read.
      */}
      <Card
        className="danger-zone"
        title={
          <span className="danger-zone-title">
            <span className="danger-zone-glyph">
              <Icon name="trash" size={14} />
            </span>
            {appT('settings.deleteAccountTitle')}
          </span>
        }
        subtitle={
          request
            ? appT('settings.deleteAccountSubtitleScheduled')
            : appT('settings.deleteAccountSubtitleDefault')
        }
        action={
          request ? (
            <button
              className="btn btn-sm btn-primary"
              disabled={busy}
              onClick={() =>
                run(() => accountDeletionRepository.cancelRequest(accountId))
              }
            >
              {busy ? t('dash.working') : appT('settings.deletionGateCancelButton')}
            </button>
          ) : confirming ? (
            <span className="danger-zone-actions">
              <button className="btn btn-sm" onClick={() => setConfirming(false)}>
                {t('dash.close')}
              </button>
              <button
                className="btn btn-sm btn-danger"
                disabled={busy}
                onClick={() =>
                  run(() =>
                    accountDeletionRepository.submitRequest(
                      accountId,
                      accountEmail ?? '',
                    ),
                  )
                }
              >
                {busy ? t('dash.working') : appT('settings.deleteAccountTitle')}
              </button>
            </span>
          ) : (
            /* A tint at rest, never solid: solid red is the confirmation, and
               this button only asks the question. `shared.delete` rather than
               the title a second time — the heading beside it already says
               which account goes, and the phone says this word in fourteen
               languages. */
            <button
              className="btn btn-sm device-admin-remove"
              onClick={() => setConfirming(true)}
            >
              <Icon name="trash" size={13} /> {appT('shared.delete')}
            </button>
          )
        }
      >
        {request ? (
          <>
            <strong>{appT('settings.deletionGateTitle')}</strong>
            {/* Two sentences, because a request whose `purgeAfter` the trigger
                has not stamped yet has no date to name — and inventing one
                would be a promise about when the data goes. */}
            <p className="hint">
              {request.purgeAfter
                ? appT('settings.deletionGateBody', {
                    date: new Date(request.purgeAfter).toLocaleDateString(),
                    days: daysLeft,
                  })
                : appT('settings.deletionGateBodyPending')}
            </p>
            <p className="hint">{appT('settings.deletionGateNote')}</p>
          </>
        ) : confirming ? (
          <>
            <strong>{appT('settings.deleteAccountAlertTitle')}</strong>
            <p className="hint">{appT('settings.deleteAccountAlertMessage')}</p>
            {/* What actually goes, counted from the family on screen rather
                than described in the abstract — the phone shows the same two
                numbers before the button. */}
            <p className="hint">
              {appT('settings.deleteAccountImpact', {
                parents: parentCount,
                devices: deviceCount,
              })}
            </p>
          </>
        ) : null}
      </Card>
    </>
  );
}
