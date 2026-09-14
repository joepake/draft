import { TRUSTED_CONTACT_NAME_MAX } from '@kidgate/schema/trustedContact';

/**
 * What a parent typed, cleaned, or null when it is not a contact.
 *
 * Loose on purpose: the mail provider is the real validator, this only refuses
 * what is obviously not an address so a typo is caught on the screen rather
 * than on the night of an SOS. `functions/lib/email.js` applies the same shape.
 */
export function normalizeTrustedContactInput(input: {
  name: string;
  email: string;
}): { name: string; email: string } | null {
  const name = input.name.trim().slice(0, TRUSTED_CONTACT_NAME_MAX);
  const email = input.email.trim().toLowerCase();
  if (!name || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return null;
  }
  return { name, email };
}
