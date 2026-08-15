import type { UserSubscription } from '@kidgate/schema/subscription';

/**
 * Whether a paid subscription is currently entitling the family.
 *
 * `nowMs` is an argument rather than a `Date.now()` call: entitlement is
 * evaluated on the device *and* server-side, and the two must agree. A device
 * clock wound forward would otherwise extend a lapsed subscription.
 *
 * An unparseable `expiresAt` counts as expired. Failing closed on a corrupt
 * date is the right default for a paywall — the recovery is a restore, which
 * the plans screen already offers.
 */
export function isPremiumSubscriptionActive(
  subscription: UserSubscription | null,
  nowMs: number,
): boolean {
  if (!subscription || subscription.planId !== 'premium') {
    return false;
  }

  if (subscription.status !== 'active') {
    return false;
  }

  if (subscription.expiresAt) {
    const expiresMs = new Date(subscription.expiresAt).getTime();
    if (Number.isNaN(expiresMs) || expiresMs <= nowMs) {
      return false;
    }
  }

  return true;
}
