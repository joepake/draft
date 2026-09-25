import { useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';

/**
 * The rows themselves — open items, each with its one answer.
 *
 * Two readers, one renderer: the rail beside the page (family-wide, every row
 * naming its machine) and the device hero's issues disclosure (this device,
 * where naming it again would be the word twice). `onOpenDevice` is what tells
 * them apart — without it a row draws no device line.
 *
 * Items come from `attentionItems.js` and nowhere else.
 */

/** Which action a view-only session may still take — `readOnly` says why. */
const ALLOWED_READ_ONLY = new Set(['resend', 'howToFix']);

const ACTION_LABEL = {
  review: 'dash.attnReview',
  siteAllow: 'dash.siteRequestAllow',
  resend: 'dash.attnResend',
  howToFix: 'dash.attnHowToFix',
  unlock: 'dash.attnUnlock',
};

export default function AttentionList({
  items,
  appT,
  onAction,
  onOpenDevice = null,
  busyId = null,
  readOnly = false,
  className = '',
}) {
  const { t } = useT();
  /** Which row has its steps open. One at a time. */
  const [fixOpen, setFixOpen] = useState(null);

  return (
    <ul className={`attn ${className}`}>
      {items.map(item => {
        const blocked = readOnly && !ALLOWED_READ_ONLY.has(item.action);
        return (
          <li key={item.id} className={`tone-${item.tone}`}>
            <span className="attn-icon">
              {/* `level` is the battery row's alone; every other item leaves it
                  undefined and draws as before. */}
              <Icon name={item.icon} size={16} level={item.level} />
            </span>
            <span className="attn-body">
              <strong>{item.title}</strong>
              <em>{item.meta}</em>
              {/* Which machine, and the way to it. A device-scoped row never had
                  to say it; a family-wide one always does, and the name is the
                  door rather than a separate Open button a parent would have to
                  aim at. The child first where there is one: they look for the
                  person, not the hardware. */}
              {onOpenDevice && (
                <button
                  className="attn-where"
                  onClick={() => onOpenDevice(item.deviceId)}
                >
                  {item.childName
                    ? `${item.childName} · ${item.deviceName}`
                    : item.deviceName}
                  <Icon name="chevronRight" size={12} />
                </button>
              )}
            </span>
            {item.action && (
              <button
                className="btn btn-sm"
                /* Resending a Check-In is a plain Firestore write the rules
                   already allow, so it stays available to a view-only session;
                   the rest need the phone. So do the steps for a denied
                   permission: they are text, and a parent who cannot write still
                   has to read them to fix the device in their hand. */
                disabled={blocked}
                title={blocked ? t('dash.attnAppOnly') : undefined}
                aria-expanded={
                  item.action === 'howToFix' ? fixOpen === item.id : undefined
                }
                onClick={() => {
                  // Reads its own state and writes nothing, so it works in a
                  // rendering with no data layer too.
                  if (item.action === 'howToFix') {
                    setFixOpen(fixOpen === item.id ? null : item.id);
                    return;
                  }
                  onAction(item);
                }}
              >
                {busyId === item.id ? '…' : t(ACTION_LABEL[item.action])}
              </button>
            )}
            {fixOpen === item.id &&
              (item.fixKeys ? (
                /* Steps carried on the item: a walk through a screen, numbered,
                   rather than one sentence about a switch. */
                <ol className="attn-fix">
                  {item.fixKeys.map(key => (
                    <li key={key}>{appT(key)}</li>
                  ))}
                </ol>
              ) : (
                /* No steps written for this one. The row's own `meta` already
                   says what is wrong, so the only thing left to add is where to
                   go — never a guessed path through somebody else's Settings
                   app. */
                <p className="attn-fix">{appT('protection.openKidGateOnChildPhone')}</p>
              ))}
          </li>
        );
      })}
    </ul>
  );
}
