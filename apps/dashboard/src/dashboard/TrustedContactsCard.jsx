import { useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import Icon from '@kidgate/web-ui/Icon';
import { normalizeTrustedContactInput } from '@kidgate/core/domain/trustedContact';
import { TRUSTED_CONTACTS_MAX } from '@kidgate/schema/trustedContact';
import { useActivityTranslate } from './activityCopy.js';
import { trustedContactRepository } from '../adapters/repositories.js';

/**
 * Who is emailed when a child presses SOS — the phone's
 * `TrustedContactsScreen` drawn inline. Every sentence is the app pack's
 * `sos.trustedContacts*` through `appT`; no `dash.*` twin.
 *
 * Both parents, not owner-only: `firestore.rules` lets any family parent read
 * and write the list, and the phone shows it to both. Rows are immutable there
 * too, so editing is remove-then-add.
 *
 * **The list is the caller's, not this card's.** It used to subscribe here,
 * which was right while the card was the whole screen; it is a Family tab now,
 * and the tab beside it wants the count before a parent has opened it. One
 * listener in `FamilySettingsCard`, mounted with the tab bar, rather than one
 * that starts when the tab it counts is already on screen.
 */
export default function TrustedContactsCard({
  familyId,
  contacts = [],
  /** Told when this card has changed the list its parent reads. `useReload`. */
  onChanged = null,
}) {
  const { language } = useT();
  const appT = useActivityTranslate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const isFull = contacts.length >= TRUSTED_CONTACTS_MAX;

  const add = async event => {
    event.preventDefault();
    const input = normalizeTrustedContactInput({ name, email });
    if (!input) {
      setError(appT('sos.trustedContactsInvalid'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await trustedContactRepository.add(familyId, {
        ...input,
        locale: language,
      });
      setName('');
      setEmail('');
      // The list lives one level up and is read once, not watched
      // (`adapters/oneShot.js`) — without this the contact just added is
      // nowhere on screen and a parent adds it again.
      onChanged?.();
    } catch {
      setError(appT('sos.trustedContactsSaveFailed'));
    } finally {
      setBusy(false);
    }
  };

  const remove = async contactId => {
    setBusy(true);
    try {
      await trustedContactRepository.remove(familyId, contactId);
      onChanged?.();
    } catch {
      setError(appT('sos.trustedContactsSaveFailed'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="parents-card">
      {/* How many of the five slots are used, drawn as well as counted. The
          digits alone sat in the form's foot — and the full-list state
          REPLACES that form, so at 5/5 the one number a parent wants was the
          one thing gone. Same meter `apps/mobile`'s hero draws; the cap is the
          schema's and digits need no key. */}
      <div className="tc-meter">
        <span className="tc-meter-track" aria-hidden="true">
          {Array.from({ length: TRUSTED_CONTACTS_MAX }, (_, slot) => (
            <i
              key={slot}
              className={`tc-pip${slot < contacts.length ? ' is-filled' : ''}`}
            />
          ))}
        </span>
        <span className="tc-count">
          {contacts.length}/{TRUSTED_CONTACTS_MAX}
        </span>
      </div>

      {contacts.length === 0 ? (
        /*
         * The list is empty far more often than not — this is a feature a
         * parent sets up once — so the empty state is the screen rather than a
         * grey line above a form. Same panel the support card draws.
         */
        <div className="empty-panel">
          <span className="empty-panel-icon">
            <Icon name="users" size={24} />
          </span>
          <p className="hint">{appT('sos.trustedContactsEmpty')}</p>
        </div>
      ) : (
        <ul className="tc-list">
          {contacts.map(contact => (
            <li key={contact.id} className="tc-row">
              {/* The initial rather than a generic person glyph: five rows of
                  the same grey silhouette are told apart only by reading, and
                  the name is what a parent is looking for. NOT `ChildInitial`
                  — its colour is the child's accent from the schema, and a
                  neighbour has no accent to be. */}
              <span className="tc-avatar" aria-hidden="true">
                {(contact.name || '?').trim().charAt(0).toUpperCase()}
              </span>
              <span className="tc-body">
                <strong>{contact.name}</strong>
                <em>{contact.email}</em>
              </span>
              <button
                className="btn btn-sm place-remove"
                disabled={busy}
                aria-label={appT('sos.trustedContactsRemoveAccessibility', {
                  name: contact.name,
                })}
                onClick={() => remove(contact.id)}
              >
                <Icon name="trash" size={13} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {isFull ? (
        <p className="hint">{appT('sos.trustedContactsFull')}</p>
      ) : (
        <form className="tc-form" onSubmit={add}>
          {/* Two fields side by side where the pane is wide enough and stacked
              where it is not — a `flex-basis` rather than a breakpoint, so the
              wrap follows the labels' own width in each language. */}
          <div className="tc-fields">
            <div className="tc-field">
              <label className="sheet-label" htmlFor="trusted-contact-name">
                {appT('sos.trustedContactsNameLabel')}
              </label>
              <input
                id="trusted-contact-name"
                className="reward-input"
                value={name}
                maxLength={60}
                disabled={busy}
                autoComplete="off"
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="tc-field">
              <label className="sheet-label" htmlFor="trusted-contact-email">
                {appT('sos.trustedContactsEmailLabel')}
              </label>
              <input
                id="trusted-contact-email"
                className="reward-input"
                type="email"
                value={email}
                disabled={busy}
                autoComplete="off"
                onChange={event => setEmail(event.target.value)}
              />
            </div>
          </div>
          {error && (
            <p className="hint" role="alert">
              {error}
            </p>
          )}
          <div className="tc-form-foot">
            <button
              type="submit"
              className="btn btn-sm btn-primary"
              disabled={busy || !name.trim() || !email.trim()}
            >
              <Icon name="plus" size={13} />
              {appT('sos.trustedContactsAddButton')}
            </button>
          </div>
        </form>
      )}

      {/* What the contact receives, and what they do not. A note rather than a
          third grey paragraph: it is the one thing on this card to read BEFORE
          adding somebody else's email address. */}
      <p className="tc-note">
        <Icon name="info" size={14} />
        <span>
          {appT('sos.trustedContactsAddHint', { max: TRUSTED_CONTACTS_MAX })}{' '}
          {appT('sos.trustedContactsPrivacyNote')}
        </span>
      </p>
    </div>
  );
}
