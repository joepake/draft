/**
 * A family's consent to the runtime AI message-analysis tier ("tier 2",
 * `docs/FEASIBILITY.md`, "Runtime AI message classification").
 *
 * **This is a legal gate, not a preference.** Tier 2 sends the (PII-masked)
 * text of borderline messages to Gemini. The keyword tier never does that and
 * is unaffected by this. Default is **off**: absent or `enabled !== true` means
 * no message text may leave the device, enforced on the device *and*
 * re-checked server-side in `classifyChildMessages` — the endpoint is the
 * authoritative gate, the device-side check only saves an upload.
 *
 * **The record is kept because consent has to be provable.** `consentedAt`,
 * `consentedByUid` and `consentVersion` exist so the product can show *who*
 * agreed to *which* disclosure and *when* — the minimum an audit or a data
 * request needs. It does not resolve K1 (whether the correspondent's consent is
 * legally required at all); that is a lawyer's answer per market, and this
 * field is here so the day the answer is "yes, with recorded guardian consent"
 * the plumbing already exists.
 */

export interface MessageAiConsent {
  /** The only value that unlocks tier 2. Anything else — including absent — is off. */
  enabled: boolean;
  /** ISO 8601 timestamp the consent was given. */
  consentedAt?: string;
  /** Auth uid of the parent who consented (owner or secondary parent). */
  consentedByUid?: string;
  /**
   * Which disclosure text they agreed to. Bump when the disclosure changes so
   * an old consent does not silently cover new processing.
   */
  consentVersion?: number;
}

/** The disclosure version currently shown. Raise when the wording changes. */
export const MESSAGE_AI_CONSENT_VERSION = 1;
