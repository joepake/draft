/**
 * A family's consent to being told about calls at all, held on the owner's
 * `users/{uid}` document beside `messageAiConsent`.
 *
 * **A legal gate, not a preference**, and the same shape as `MessageAiConsent`
 * for the same reason — `enabled` default off, an auditable record of who
 * agreed to which disclosure and when, and re-checked server-side rather than
 * trusted from the device.
 *
 * It is a separate object from `messageAiConsent` rather than a flag on it.
 * The disclosure is different, and bumping that consent's `consentVersion` to
 * cover call reporting would silently re-gate the AI message tier — a consent
 * quietly widened is the failure both versions exist to prevent.
 *
 * ## Why calls need this and a switch would not have been enough
 *
 * `messageMonitoringEnabled` is a control: a parent decides whether a feature
 * runs. That is the right shape for a scan that reports *a word appeared* and
 * names nobody.
 *
 * A call alert is about a **third party** — someone on the other end of the
 * line who installed nothing, agreed to nothing, and in most jurisdictions has
 * their own interest in not being reported on. This row never carries their
 * number (`callAlert.ts` has no field for one), which is what keeps the feature
 * defensible, but "we only report that they were unknown" is a judgement a
 * parent should make explicitly and provably rather than by flipping a toggle.
 * It is the same K1 `messageAiConsent.ts` records as unresolved — whether the
 * correspondent's consent is required at all — and calls put more weight on it,
 * not less.
 *
 * ## The child device must never be able to consent for itself
 *
 * A child device signs in **under the owner's uid**, so `isOwner()` alone does
 * not prove a parent is asking (`.claude/rules/auth-vocabulary.md`). The
 * endpoint that writes this refuses a token carrying a `deviceId` claim; a
 * feature whose subject can grant its own permission has no gate at all.
 */

export interface CallAlertConsent {
  /** The only value that turns call alerts on. Anything else — including absent — is off. */
  enabled: boolean;
  /** ISO 8601 timestamp the consent was given. */
  consentedAt?: string;
  /** Auth uid of the parent who consented (owner or secondary parent). */
  consentedByUid?: string;
  /**
   * Which disclosure text they agreed to. Bump when the wording changes so an
   * old consent does not silently cover new reporting.
   */
  consentVersion?: number;
}

/** The disclosure version currently shown. Raise when the wording changes. */
export const CALL_ALERT_CONSENT_VERSION = 1;
