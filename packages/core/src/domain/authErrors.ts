/**
 * Auth failure classification, shared by every surface that signs a parent in.
 *
 * Lifted from `apps/mobile/src/utils/authErrors.ts`. The Firebase Auth error
 * codes are the same in the RN SDK and the JS SDK, and so is the product
 * decision of which ones collapse into "wrong email or password" — an attacker
 * should not learn from the error which half was wrong.
 */

export function mapAuthErrorKey(code?: string): string | null {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'errors.emailAlreadyInUse';
    case 'auth/invalid-email':
      return 'errors.invalidEmail';
    case 'auth/weak-password':
      return 'errors.weakPassword';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'errors.invalidEmailOrPassword';
    case 'auth/too-many-requests':
      return 'errors.tooManyRequests';
    case 'auth/network-request-failed':
      return 'errors.noNetworkConnection';
    default:
      return null;
  }
}

/** Transient net / backend blips — must not wipe a restored local session. */
export function isTransientSessionError(error: unknown): boolean {
  const code =
    typeof error === 'object' && error !== null && 'code' in error
      ? String((error as { code?: string }).code ?? '')
      : '';
  const message =
    error instanceof Error
      ? error.message
      : typeof error === 'object' && error !== null && 'message' in error
        ? String((error as { message?: string }).message ?? '')
        : '';

  return (
    code === 'auth/network-request-failed' ||
    code === 'unavailable' ||
    code === 'deadline-exceeded' ||
    code === 'firestore/unavailable' ||
    code === 'firestore/deadline-exceeded' ||
    /network-request-failed|network request failed|unavailable|deadline/i.test(
      `${code} ${message}`,
    )
  );
}
