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
