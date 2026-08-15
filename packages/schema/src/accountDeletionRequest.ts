/**
 * `pending` only exists for the instant between the client writing the request
 * and the scheduleAccountDeletion trigger stamping `purgeAfter`. Everything the
 * UI reacts to is `scheduled` — the cancellable grace window.
 */
export type AccountDeletionRequestStatus =
  'pending' | 'scheduled' | 'completed' | 'cancelled';

export interface AccountDeletionRequest {
  id: string;
  email: string;
  status: AccountDeletionRequestStatus;
  platform: 'ios' | 'android';
  requestedAt: string;
  /** ISO date the irreversible purge runs. Null until the trigger stamps it. */
  purgeAfter: string | null;
}
