/**
 * The feed row that tells a parent an SOS press unlocked the device.
 *
 * **Written in `apps/desktop` on 2026-08-24, moved here on 2026-08-25 when the
 * second agent needed it.** An SOS raises an alert reading "SOS was sent" and a
 * push reading "needs help" — an emergency. Nothing anywhere said the device
 * had *unlocked itself*, and nothing said it again the next time. Both child
 * agents that grant a timed escape defend it on the grounds that the parent is
 * told; they were telling them about the wrong thing.
 *
 * Two agents, two durations, one row. `apps/desktop` grants fifteen minutes
 * (`SOS_ESCAPE_DURATION_MS`), Android grants five
 * (`KidGatePolicyStore.beginSosEscape`), and the row carries `minutes` as a
 * parameter for exactly that reason — a shared row that hardcoded either number
 * would be a lie on the other platform. iOS grants no window at all: its
 * `sosEscapeActive` only hides the overlay while the child is standing on the
 * SOS screen, so there is nothing timed to report and this is not called there.
 *
 * `type: 'emergency'` rather than `device_unlocked`, for two reasons. It
 * renders as the siren row the parent's feed already draws in red, which is the
 * weight this deserves — and `device_unlocked` is counted by
 * `UsageReportsScreen`'s `todayUnlocks`, a figure about parents unlocking
 * devices that an escape would quietly corrupt.
 *
 * Pure, and deliberately not a write: `apps/desktop` holds a repository built
 * over `FirestorePort`, `apps/mobile` holds `ActivityRepository` already
 * constructed, and both hand this object to `createActivity` themselves.
 */

import type { ActivityParams, ActivityType } from '@kidgate/schema/activity';

/**
 * How many escapes in one day stop reading as one bad afternoon.
 *
 * A display threshold and nothing else — **no escape is ever refused**, on
 * either platform. `sos.rs` states that rule ("never rejected, never
 * rate-limited") and `KidGatePolicyStore.beginSosEscape` has no branch that
 * could; the count exists only so a parent can tell a pattern from an emergency
 * instead of reading identical rows. Three because the escape lasts minutes
 * rather than hours: two presses can easily be one frightening evening, while a
 * third in a day is worth naming.
 */
export const SOS_ESCAPE_REPEAT_AT = 3;

export interface SosEscapeActivityInput {
  deviceId: string;
  /** Escapes granted on this device today, including this one. */
  count: number;
  /** How long this platform's escape lasts. Never assumed — see the header. */
  minutes: number;
}

/**
 * The row, ready for `createActivity`.
 *
 * Structurally a `CreateActivityInput`; typed from `@kidgate/schema` rather
 * than imported from `../repositories/activity` so this stays a domain module
 * that knows nothing about how the row is stored.
 */
export interface SosEscapeActivity {
  deviceId: string;
  type: ActivityType;
  titleKey: string;
  descriptionKey: string;
  params: ActivityParams;
}

export function buildSosEscapeActivity(
  input: SosEscapeActivityInput,
): SosEscapeActivity {
  const repeat = input.count >= SOS_ESCAPE_REPEAT_AT;

  return {
    deviceId: input.deviceId,
    type: 'emergency',
    titleKey: repeat ? 'activities.sosEscapeRepeatTitle' : 'activities.sosEscapeTitle',
    descriptionKey: repeat
      ? 'activities.sosEscapeRepeatBody'
      : 'activities.sosEscapeBody',
    params: { minutes: input.minutes, count: input.count },
  };
}
