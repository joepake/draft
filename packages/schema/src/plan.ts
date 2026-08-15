/**
 * Subscription tiers, as persisted.
 *
 * Only the identifier lives here. The plan table — display names, feature
 * lists, icons, prices — is presentation and belongs in `@kidgate/core/domain`
 * plus `@kidgate/i18n`; the legacy `src/constants/Plans.ts` mixed all of it
 * together and consequently imported both an icon type and the translator,
 * which is why that file cannot move here as-is.
 *
 * Source: legacy `src/constants/Plans.ts`.
 */

/**
 * `free` is where a family lands when the trial ends without a purchase — a
 * reduced plan, not an absence of one. `trial` is the time-boxed full
 * experience that precedes it.
 */
export type PlanId = 'free' | 'trial' | 'premium';
