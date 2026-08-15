import type { ApiFailure, ApiPort } from '@kidgate/ports/api';
import type { FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { PlanId } from '@kidgate/schema/plan';
import { userDoc } from '@kidgate/schema/paths';
import type {
  UserSubscription,
  VerifyPurchasePayload,
  VerifyPurchaseResponse,
} from '@kidgate/schema/subscription';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * Billing state, and the two store round-trips that change it.
 *
 * Verification is server-side without exception: a receipt validated on the
 * device is a receipt validated by the person who benefits from the answer.
 */

const ENDPOINTS = {
  verifyPurchase: '/verifySubscriptionPurchase',
  restorePurchases: '/restoreSubscription',
} as const;

export interface UserBillingState {
  paidPlanId: PlanId | null;
  subscription: UserSubscription | null;
  trialStartedAt: string | null;
}

/** Only `premium` is ever paid for; `free` and `trial` are states, not purchases. */
function parsePaidPlanId(value: unknown): PlanId | null {
  return value === 'premium' ? 'premium' : null;
}

/**
 * Returns null unless every field the entitlement check needs is present.
 *
 * A partially-written subscription must read as "no subscription" rather than
 * as a broken one: the paywall then simply stays up, which is recoverable by a
 * restore, where a half-parsed record could grant access it cannot justify.
 */
function parseSubscription(value: unknown): UserSubscription | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const record = value as Record<string, unknown>;
  const planId = parsePaidPlanId(record.planId);
  const productId = typeof record.productId === 'string' ? record.productId : null;
  const platform =
    record.platform === 'ios' || record.platform === 'android' ? record.platform : null;
  const status =
    record.status === 'active' ||
    record.status === 'expired' ||
    record.status === 'cancelled'
      ? record.status
      : null;
  const updatedAt = typeof record.updatedAt === 'string' ? record.updatedAt : null;

  if (!planId || !productId || !platform || !status || !updatedAt) {
    return null;
  }

  return {
    platform,
    productId,
    planId,
    status,
    updatedAt,
    originalTransactionId:
      typeof record.originalTransactionId === 'string'
        ? record.originalTransactionId
        : null,
    purchaseToken:
      typeof record.purchaseToken === 'string' ? record.purchaseToken : null,
    expiresAt: typeof record.expiresAt === 'string' ? record.expiresAt : null,
  };
}

export interface SubscriptionRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
}

export function createSubscriptionRepository(deps: SubscriptionRepositoryDeps) {
  const { db, api } = deps;

  return {
    subscribeToBilling(
      userId: string,
      onChange: (state: UserBillingState) => void,
    ): Unsubscribe {
      return db.onDoc(
        userDoc(userId),
        snapshot => {
          const data = (snapshot.data() ?? {}) as Record<string, unknown>;
          onChange({
            paidPlanId: parsePaidPlanId(data.planId),
            subscription: parseSubscription(data.subscription),
            trialStartedAt: timestampToIso(data.trialStartedAt) ?? null,
          });
        },
        // A session can be swapped mid-listen (re-pairing, sign-out), which
        // surfaces as permission-denied here. Keep the last known state rather
        // than dropping a paying family to the paywall on a transient error.
        () => undefined,
      );
    },

    async verifyPurchase(
      payload: VerifyPurchasePayload,
    ): Promise<VerifyPurchaseResponse> {
      const response = await api.post<VerifyPurchaseResponse>(
        ENDPOINTS.verifyPurchase,
        { ...payload },
        { as: 'parent' },
      );

      if (!response.planId) {
        const failure: ApiFailure = {
          code: 'server',
          messageKey: 'plans.purchaseVerificationFailed',
        };
        throw failure;
      }

      return response;
    },

    async restorePurchases(
      purchases: VerifyPurchasePayload[],
    ): Promise<VerifyPurchaseResponse> {
      const response = await api.post<VerifyPurchaseResponse>(
        ENDPOINTS.restorePurchases,
        { purchases: purchases.map(purchase => ({ ...purchase })) },
        { as: 'parent' },
      );

      if (!response.planId) {
        const failure: ApiFailure = {
          code: 'notFound',
          messageKey: 'plans.noActiveSubscription',
        };
        throw failure;
      }

      return response;
    },
  };
}

export type SubscriptionRepository = ReturnType<typeof createSubscriptionRepository>;
