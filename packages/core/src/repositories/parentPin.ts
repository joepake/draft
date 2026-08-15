/**
 * Checking a Parent PIN from a child device.
 *
 * Server-side, always. The hash used to be pulled down and compared on the
 * child device — but a child session shares the family owner's uid, so the hash
 * was readable there, and a six-digit PIN is brute-forceable offline whatever
 * the client claims about attempt counts. `verifyParentPin` keeps the hash in
 * Firestore and increments a per-device lockout inside a transaction the client
 * cannot skip.
 *
 * **Read the response, not the status code.** A wrong PIN comes back as HTTP
 * **200** with `{ ok: true, valid: false }`. A client that branches on the
 * status treats that as success and opens the gate — which is exactly what the
 * first macOS implementation did before this was shared. That single fact is
 * the reason this file exists rather than one client-side copy per platform.
 */

import type { ApiPort } from '@kidgate/ports/api';
import { MAX_PARENT_PIN_ATTEMPTS } from '@kidgate/schema/parentPin';
import { isApiFailure } from '../domain/apiFailure';
import { isValidParentPin } from '../domain/parentPin';

export type ParentPinFailure =
  /** Not six digits. Refused before a request is made. */
  | 'invalidFormat'
  | 'incorrect'
  /** Too many wrong attempts; only a parent can clear it. */
  | 'locked'
  | 'notSet'
  | 'network';

export type ParentPinResult =
  | { ok: true }
  | {
      ok: false;
      reason: ParentPinFailure;
      /** i18n key. Never a rendered sentence — see the note below. */
      messageKey: string;
      /** Present for `incorrect`. Zero when the server declined to say. */
      attemptsRemaining?: number;
    };

/*
 * Keys, not sentences. The same refusal is read by a child on a lock screen, by
 * a parent in the app, and written to a log — up to three languages, one error.
 * `docs/MIGRATION.md` records this as the rule every ported repository follows.
 */
const KEYS = {
  invalidFormat: 'pin.enterSixDigitParentPin',
  incorrect: 'pin.unableToVerifyParentPin',
  incorrectWithAttempts: 'pin.incorrectPinAttemptsLeft',
  locked: 'pin.parentPinLockoutMessage',
  notSet: 'pin.subtitleNotSet',
  network: 'errors.noNetworkConnection',
} as const;

interface VerifyResponse {
  ok?: boolean;
  valid?: boolean;
  locked?: boolean;
  attemptsRemaining?: number;
}

export interface ParentPinRepositoryDeps {
  api: ApiPort;
}

export function createParentPinRepository(deps: ParentPinRepositoryDeps) {
  return {
    /**
     * Verify a PIN typed on this child device.
     *
     * Sent `as: 'child'`, which attaches this device's id and credential. The
     * endpoint needs the id regardless — the lockout is per device, so guessing
     * on one Mac cannot burn the attempts of a sibling's phone.
     */
    async verify(pin: string): Promise<ParentPinResult> {
      if (!isValidParentPin(pin)) {
        // Refused locally because the server would refuse it too, with
        // `pin/invalid`, and spending a rate-limit slot to be told so wastes an
        // attempt the child may need.
        return { ok: false, reason: 'invalidFormat', messageKey: KEYS.invalidFormat };
      }

      let response: VerifyResponse;
      try {
        response = await deps.api.post<VerifyResponse>(
          '/verifyParentPin',
          { pin },
          { as: 'child' },
        );
      } catch (error) {
        if (isApiFailure(error) && error.status === 404) {
          return { ok: false, reason: 'notSet', messageKey: KEYS.notSet };
        }
        if (isApiFailure(error) && error.status === 429) {
          return { ok: false, reason: 'locked', messageKey: KEYS.locked };
        }
        /*
         * Anything else is reported as a network failure rather than as a wrong
         * PIN. Telling a child their PIN was wrong when the Wi-Fi dropped sends
         * them guessing into a lockout they did not earn.
         */
        return { ok: false, reason: 'network', messageKey: KEYS.network };
      }

      if (response?.valid === true) {
        return { ok: true };
      }

      if (response?.locked === true) {
        return {
          ok: false,
          reason: 'locked',
          messageKey: KEYS.locked,
          attemptsRemaining: 0,
        };
      }

      if (response?.ok !== true) {
        return { ok: false, reason: 'network', messageKey: KEYS.network };
      }

      const attemptsRemaining = response.attemptsRemaining ?? 0;
      return {
        ok: false,
        reason: 'incorrect',
        messageKey: KEYS.incorrectWithAttempts,
        attemptsRemaining,
      };
    },
  };
}

export type ParentPinRepository = ReturnType<typeof createParentPinRepository>;
export { MAX_PARENT_PIN_ATTEMPTS };
