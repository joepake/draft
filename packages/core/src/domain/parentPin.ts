/**
 * Reading a Parent PIN the user typed.
 *
 * Both predicates are here rather than in `@kidgate/schema` because that package
 * holds no behaviour, and rather than in an app because the phone and the Mac
 * both take this input. They validate the *shape* only — whether the PIN is
 * correct is answered by `verifyParentPin` server-side, and deliberately never
 * here: the hash used to be pulled down to the child device and compared
 * locally, where a six-digit secret is brute-forceable offline.
 */

import { PARENT_PIN_LENGTH } from '@kidgate/schema/parentPin';

export function isValidParentPin(pin: string): boolean {
  return new RegExp(`^\\d{${PARENT_PIN_LENGTH}}$`).test(pin);
}

/** Strip anything a numeric keypad should not have produced, and cap the length. */
export function normalizeParentPinInput(value: string): string {
  return value.replace(/\D/g, '').slice(0, PARENT_PIN_LENGTH);
}

/** The two profile fields that between them answer "does this family have a PIN?". */
export interface ParentPinProfileFields {
  parentPinHash?: string | null;
  parentPinSet?: boolean;
}

/**
 * Whether the family has a Parent PIN configured.
 *
 * Both fields are required to answer, and each one alone is wrong in a
 * different direction. `setParentPin` moves the hash to the server-only
 * `users/{uid}/private/security` doc, sets `parentPinSet: true`, and **deletes**
 * the legacy `users/{uid}.parentPinHash` in the same batch — so reading only
 * the legacy field reports "no PIN" for every family whose PIN was set by the
 * current server. Reading only the flag reports "no PIN" for a PIN set by an
 * older build, which never wrote it.
 *
 * The first of those shipped: the parent Settings screen read only the legacy
 * field, so it offered "Create Parent PIN" to families that had one, with no
 * current-PIN field and no reset link, and the save was refused server-side
 * with `pin/current-required` — an error the screen gave no way to answer.
 * That is why this predicate is here rather than inline at its two call sites.
 */
export function parentPinIsSet(
  profile: ParentPinProfileFields | null | undefined,
): boolean {
  if (!profile) {
    return false;
  }
  return profile.parentPinSet === true || Boolean(profile.parentPinHash);
}
