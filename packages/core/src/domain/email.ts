/**
 * Deliberately loose: one `@`, a non-empty local part, and a dotted domain.
 * Anything stricter starts rejecting addresses that are legal and deliverable,
 * and the real verdict comes from the auth backend anyway. This only catches
 * typos before a pointless round trip.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}
