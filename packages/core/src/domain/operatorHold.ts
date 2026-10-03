import {
  OPERATOR_HOLD_REASONS,
  type OperatorHold,
  type OperatorHoldReason,
} from '@kidgate/schema/operatorHold';
import { timestampToIso } from './firestoreValue';

/**
 * KidGate's own hold, as both parent consoles read it
 * (`@kidgate/schema/operatorHold`, `docs/FEASIBILITY.md`, "An operator hold on
 * a family or a device").
 *
 * One fold for the phone and the dashboard, because "is this family held, and
 * why" must not have two answers about one account.
 */

/**
 * The stored map, decoded — `null` for none.
 *
 * A reason this build does not know (a code added on the server since) reads
 * as `other` rather than nothing: the devices are parked either way, and a
 * held family with no sentence on screen would read as a broken app.
 */
export function parseOperatorHold(value: unknown): OperatorHold | null {
  if (!value || typeof value !== 'object') {
    return null;
  }
  const record = value as Record<string, unknown>;
  const reason: OperatorHoldReason = (
    OPERATOR_HOLD_REASONS as readonly unknown[]
  ).includes(record.reason)
    ? (record.reason as OperatorHoldReason)
    : 'other';
  const note = typeof record.note === 'string' ? record.note.trim() : '';
  return {
    reason,
    ...(note ? { note } : {}),
    heldAt: timestampToIso(record.heldAt) ?? '',
    ...(record.byFamily === true ? { byFamily: true as const } : {}),
  };
}

/**
 * The sentence each reason is said with, in the `family` namespace both
 * consoles read. Spelled out rather than built from the code so
 * `yarn i18n:missing` sees every key.
 */
export const OPERATOR_HOLD_REASON_KEYS: Record<OperatorHoldReason, string> = {
  unusualActivity: 'family.holdReasonUnusualActivity',
  outdatedApp: 'family.holdReasonOutdatedApp',
  termsViolation: 'family.holdReasonTermsViolation',
  other: 'family.holdReasonOther',
};

export interface HeldDevice {
  id: string;
  name: string;
  hold: OperatorHold;
}

export interface OperatorHoldSummary {
  /** The family's own hold, or null. Its devices are said by this, not listed. */
  family: OperatorHold | null;
  /** Devices held on their own, each with its reason. */
  devices: HeldDevice[];
}

/** What a console has to say, or null when nothing is held. */
export function summariseOperatorHold(
  family: OperatorHold | null | undefined,
  devices: readonly { id: string; name: string; operatorHold?: OperatorHold }[],
): OperatorHoldSummary | null {
  const held = devices.flatMap(device =>
    device.operatorHold && !device.operatorHold.byFamily
      ? [{ id: device.id, name: device.name, hold: device.operatorHold }]
      : [],
  );
  if (!family && held.length === 0) {
    return null;
  }
  return { family: family ?? null, devices: held };
}
