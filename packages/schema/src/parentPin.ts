/**
 * The PIN that guards setup on a child device.
 *
 * Here because two clients now enforce the shape — the phone and the Mac — and
 * the Cloud Function checks the same thing a third time. Six digits is a
 * contract, not a preference: `verifyParentPin` rejects anything else with
 * `pin/invalid`, so a client that allowed five would produce a request the
 * server has already decided to refuse.
 *
 * Constants only. The predicates that read them live in
 * `@kidgate/core/domain/parentPin` — this package holds no behaviour.
 */

export const PARENT_PIN_LENGTH = 6;

/**
 * Wrong attempts before the device locks itself out.
 *
 * The count lives server-side, in a transaction the client cannot skip — the
 * hash used to be pulled down and compared locally, and a six-digit PIN is
 * brute-forceable offline whatever the client claims about attempts. This
 * constant exists so the UI can say how many are left, not to enforce anything.
 */
export const MAX_PARENT_PIN_ATTEMPTS = 5;
