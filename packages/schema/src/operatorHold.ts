/**
 * An operator hold — KidGate itself pausing a family or one device, with a
 * stated reason (`docs/FEASIBILITY.md`, "An operator hold on a family or a
 * device").
 *
 * Lives as `operatorHold` on `users/{uid}` (the whole family) and on
 * `users/{uid}/childDevices/{deviceId}` (one device). **Written only by
 * `functions/lib/operatorHold.js` through the operator API**; `firestore.rules`
 * pins the field on both documents for every client, the way it pins
 * `familyPlaces` — a server-only field, not an operator branch.
 *
 * A held device is also parked (`monitoringState: 'parked'`), which is what
 * gives the hold its teeth: the rules refuse a parked device's beat, the
 * endpoints refuse its reports, and every agent goes quiet and keeps enforcing.
 * The hold is what keeps billing from un-parking it —
 * `functions/lib/deviceParking.js` leaves a held device out of every parking
 * decision.
 */

/**
 * Why. A code rather than words, because the parent reads it in their own
 * language: each has `operatorHold.reason.<code>` in every pack. Free words
 * from the operator travel in `note`, shown as written, the way a support
 * reply is.
 */
export const OPERATOR_HOLD_REASONS = [
  'unusualActivity',
  'outdatedApp',
  'termsViolation',
  'other',
] as const;

export type OperatorHoldReason = (typeof OPERATOR_HOLD_REASONS)[number];

/** Longest note the operator API stores; the rest is cut, not refused. */
export const OPERATOR_HOLD_NOTE_MAX = 500;

export interface OperatorHold {
  reason: OperatorHoldReason;
  /** The operator's own words, if any. Not translated. */
  note?: string;
  /** When the hold was placed, ISO — stored as a server `Timestamp`. */
  heldAt: string;
  /**
   * On a device only: placed by a family hold, and lifted with it. A device
   * held on its own keeps its hold when the family's is released.
   */
  byFamily?: true;
}
