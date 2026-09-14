/**
 * Someone outside the app who is emailed when a child presses SOS.
 *
 * `users/{ownerUid}/trustedContacts/{id}`. Parent-written, parent-read, never
 * a child device; `functions/triggers/sosAlerts.js` reads it on every SOS and
 * emails each row the alert and the last known location.
 *
 * `locale` is the language the parent was using when they added the contact —
 * a contact has no account and no device to read a preference from, and the
 * person a parent names is overwhelmingly someone they speak to in that
 * language.
 */
export interface TrustedContact {
  id: string;
  name: string;
  email: string;
  locale: string;
  createdAt: string;
}

/** Enough for a family; a bound on the email fan-out per SOS. */
export const TRUSTED_CONTACTS_MAX = 5;
export const TRUSTED_CONTACT_NAME_MAX = 60;
