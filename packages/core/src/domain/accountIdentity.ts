import { isMissingPersonName } from './personName';

/**
 * Deciding what to call an account holder.
 *
 * The portable half of the legacy `AuthRepository`. That file is otherwise an
 * adapter — every method is a call into Firebase Auth, Google Sign-In or Apple
 * Authentication — so it becomes the `AuthPort` implementation rather than a
 * repository. These three functions are the only parts that are decisions
 * rather than SDK calls, and the web dashboard needs the same answers.
 */

/**
 * Apple's Hide My Email relay address.
 *
 * Real, deliverable, and meaningless to a human: `a1b2c3@privaterelay.appleid.com`
 * tells a parent nothing about which account they are signed in to, and shown
 * on a family screen it reads as a bug.
 */
export function isApplePrivateRelayEmail(email: string): boolean {
  return email.trim().toLowerCase().endsWith('@privaterelay.appleid.com');
}

/**
 * The label to show for an account: a real email, else a name, else the caller's
 * fallback.
 *
 * A relay address is skipped even though it is the account's real email —
 * see above.
 */
export function getAccountDisplayLabel(
  user: { name?: string | null; email?: string | null },
  appleFallback: string,
): string {
  const email = user.email?.trim() ?? '';
  const name = user.name?.trim() ?? '';

  if (email && isApplePrivateRelayEmail(email)) {
    return appleFallback;
  }

  return email || name;
}

/**
 * Pick a display name from what the identity provider supplied.
 *
 * Returns **empty** rather than inventing one. Apple gives a name only on the
 * very first authorisation and never again; Google may give none. The app
 * collects a real name at a gate instead, so a placeholder here would satisfy
 * that gate with something the parent never chose and would then see on every
 * screen.
 */
export function resolveProviderDisplayName(
  email: string | null | undefined,
  candidates: readonly (string | null | undefined)[],
): string {
  const address = email ?? '';

  for (const candidate of candidates) {
    const trimmed = candidate?.trim();
    if (trimmed && !isMissingPersonName(trimmed, address)) {
      return trimmed;
    }
  }

  return '';
}
