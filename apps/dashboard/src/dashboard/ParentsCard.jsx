import { useCallback, useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import { parentInviteRepository } from '../adapters/repositories.js';

/*
 * `appT` reads the APP key space through `@kidgate/i18n/activityFeed`. The
 * phone's Family screen and its invite modal already say every sentence here.
 */

/**
 * The other parents in this family: who they are, who is asking to join, and
 * how to invite one.
 *
 * **Owner only**, matching `FamilyDetailScreen` — a joined co-parent sees the
 * family and none of the admin affordances. `controlsApi` refuses again for a
 * stale render.
 *
 * ## The handshake is two-sided, and the screen has to show both halves
 *
 * A code alone grants nothing. The invitee types it into the app, which
 * produces a **join request naming the device that redeemed it**, and
 * membership exists only once the owner approves that request. So this card
 * carries the pending list beside the code: an owner who mints a code and
 * never comes back has invited nobody, and would otherwise have no way to
 * find out.
 *
 * The pending list is polled rather than subscribed — the requests live in a
 * server-scoped collection this browser cannot read directly, and the endpoint
 * scopes them to the caller's own uid.
 */
export default function ParentsCard({ members, actions, run, busy }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const [invite, setInvite] = useState(null);
  const [pending, setPending] = useState([]);
  const [removing, setRemoving] = useState(null);

  const owner = Boolean(actions?.isOwner);

  const refreshPending = useCallback(async () => {
    if (!owner) return;
    try {
      setPending(await parentInviteRepository.listPending());
    } catch {
      // A failed poll costs one refresh. The card still lists the members it
      // already has, which is the half that matters when the network is bad.
      setPending([]);
    }
  }, [owner]);

  /*
   * Polled, not loaded once. The invitee redeems the code minutes after the
   * owner shares it, and a single mount-time read meant the request only
   * appeared if the owner happened to reload — the same gap the phone had
   * before `redeemPairingCode` started pushing (`functions/http/pairing.js`).
   * Eight seconds matches `FamilyDetailScreen`, and a hidden tab polls
   * nothing: the owner is not looking, and the request survives until they
   * come back or it expires.
   */
  useEffect(() => {
    if (!owner) return undefined;
    refreshPending();
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        refreshPending();
      }
    }, 8_000);
    return () => clearInterval(interval);
  }, [owner, refreshPending]);

  if (!owner) {
    return null;
  }

  return (
    <div className="parents-card">
      <ul className="events">
        {members.map(member => (
          <li key={member.id}>
            <span className="ev-state tone-muted">
              <Icon name="user" size={13} />
            </span>
            <span className="ev-body">
              <strong>{member.label}</strong>
              {member.deviceName && <em>{member.deviceName}</em>}
            </span>
            <button
              className="login-link"
              disabled={busy}
              onClick={() => setRemoving(member)}
            >
              <Icon name="trash" size={13} />
            </button>
          </li>
        ))}
      </ul>

      {removing && (
        <div className="device-admin-confirm">
          <strong>{appT('settings.removeFamilyMemberAlertTitle')}</strong>
          <p>
            {appT('settings.removeFamilyMemberAlertMessage', {
              memberName: removing.label,
            })}
          </p>
          <div className="reward-actions">
            <button className="login-link" onClick={() => setRemoving(null)}>
              {t('dash.close')}
            </button>
            <button
              className="btn btn-sm btn-danger"
              disabled={busy}
              onClick={async () => {
                const ok = await run('parent-remove', () =>
                  actions.removeParent(removing.id),
                );
                if (ok) setRemoving(null);
              }}
            >
              {appT('settings.removeFamilyMemberAlertTitle')}
            </button>
          </div>
        </div>
      )}

      {pending.length > 0 && (
        <ul className="events">
          {pending.map(request => (
            <li key={request.requestId}>
              <span className="ev-state tone-warning">
                <Icon name="clock" size={13} />
              </span>
              <span className="ev-body">
                <strong>{request.label}</strong>
                <em>{request.deviceName || request.platform || ''}</em>
              </span>
              <button
                className="btn btn-sm"
                disabled={busy}
                onClick={async () => {
                  await run('parent-join', () =>
                    actions.resolveParentJoin(request.requestId, false),
                  );
                  refreshPending();
                }}
              >
                {appT('pairing.parentJoinDecline')}
              </button>
              <button
                className="btn btn-sm btn-primary"
                disabled={busy}
                onClick={async () => {
                  await run('parent-join', () =>
                    actions.resolveParentJoin(request.requestId, true),
                  );
                  refreshPending();
                }}
              >
                {appT('pairing.parentJoinApprove')}
              </button>
            </li>
          ))}
        </ul>
      )}

      {invite ? (
        <div className="invite-code">
          <p className="hint">{appT('pairing.inviteParentInstructions')}</p>
          <strong>{invite.code}</strong>
          {/*
            No countdown ticking on screen. The code is short-lived and the
            server is the clock; a timer here would be a second one, and the
            two disagree the moment a tab sleeps.
          */}
          <button className="login-link" onClick={() => setInvite(null)}>
            {t('dash.close')}
          </button>
        </div>
      ) : (
        <button
          className="btn btn-sm"
          disabled={busy}
          onClick={async () => {
            const result = await run('parent-invite', () =>
              actions.createParentInvite(),
            );
            if (result?.code) {
              setInvite(result);
              // The request appears seconds later, on the invitee's action —
              // this refresh only clears anything already waiting.
              refreshPending();
            }
          }}
        >
          {appT('family.addParentOption')}
        </button>
      )}
    </div>
  );
}
