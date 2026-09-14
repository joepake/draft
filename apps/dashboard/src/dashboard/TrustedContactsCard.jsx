import { useEffect, useState } from 'react';
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
 */
export default function TrustedContactsCard({ familyId }) {
  const { language } = useT();
  const appT = useActivityTranslate();
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!familyId) return undefined;
    return trustedContactRepository.subscribe(familyId, setContacts, () =>
      setContacts([]),
    );
  }, [familyId]);

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
    } catch {
      setError(appT('sos.trustedContactsSaveFailed'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="parents-card">
      {contacts.length === 0 ? (
        <p className="hint">{appT('sos.trustedContactsEmpty')}</p>
      ) : (
        <ul className="events">
          {contacts.map(contact => (
            <li key={contact.id}>
              <span className="ev-state tone-muted">
                <Icon name="user" size={13} />
              </span>
              <span className="ev-body">
                <strong>{contact.name}</strong>
                <em>{contact.email}</em>
              </span>
              <button
                className="login-link"
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
        <form className="reward-form" onSubmit={add}>
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
          {error && (
            <p className="hint" role="alert">
              {error}
            </p>
          )}
          <div className="reward-actions">
            <button
              type="submit"
              className="btn btn-sm btn-primary"
              disabled={busy || !name.trim() || !email.trim()}
            >
              {appT('sos.trustedContactsAddButton')}
            </button>
          </div>
        </form>
      )}

      <p className="hint">
        {appT('sos.trustedContactsAddHint', { max: TRUSTED_CONTACTS_MAX })}{' '}
        {appT('sos.trustedContactsPrivacyNote')}
      </p>
    </div>
  );
}
