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
  updatedAt: string;
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
