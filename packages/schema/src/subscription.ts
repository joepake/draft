import type { PlanId } from './plan';

export type SubscriptionPlatform = 'ios' | 'android';

export type SubscriptionStatus = 'active' | 'expired' | 'cancelled';

export interface UserSubscription {
  platform: SubscriptionPlatform;
  productId: string;
  planId: PlanId;
  status: SubscriptionStatus;
  originalTransactionId?: string | null;
  purchaseToken?: string | null;
  expiresAt?: string | null;
  /**
   * A one-time purchase that never expires, so `expiresAt` is absent rather
   * than far-future: a sentinel date eventually arrives, and every expiry
   * sweep would then revoke a plan somebody bought outright.
   *
   * Written only by `verifyAndRecordPurchase` in
   * `functions/lib/subscriptions.js`, from the store verifier's answer — never
   * from the client and never from the product id alone. Read by
   * `isLifetimeEntitlementActive` in `functions/lib/entitlement.js`, which
   * still checks `status` so a refund can take it back.
   */
  lifetime?: boolean;
  updatedAt: string;
  /**
   * The "your plan has ended" push is owed and not yet sent.
   *
   * Server-only, written by `expireSubscriptions` in the same update that
   * flips `status` to `expired`, cleared by the sweep that sends the push in
   * the family's local morning. Inside this map rather than beside it so a
   * renewal — which replaces the whole map — cancels the notice on its own: a
   * family that pays again before mid-morning must not be told their plan
   * ended.
   */
  endedNoticePending?: boolean;
}

export interface VerifyPurchasePayload {
  platform: SubscriptionPlatform;
  productId: string;
  transactionId?: string | null;
  purchaseToken?: string | null;
  expirationDateMs?: number | null;
}

export interface VerifyPurchaseResponse {
  ok: boolean;
  planId: PlanId;
}
