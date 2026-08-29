/**
 * A person in the family, as distinct from the hardware they use.
 *
 * Until this existed the product modelled devices only, and every screen that
 * said "child" meant "child device". That is correct for enforcement — a
 * schedule applies to a phone, not to a person — and wrong for anything that
 * counts: one child with a phone, a laptop and a TV appeared three times, and
 * whoever owned the most hardware won.
 *
 * `Device.childId` is the join, and it is deliberately optional. A device that
 * has never been assigned still pairs, still reports, still enforces; it simply
 * does not appear in anything that counts per person.
 */

import type { ChildRules } from './childRules';

export interface Child {
  id: string;
  name: string;
  /**
   * Which accent to draw this child in, as an index rather than an accent id.
   *
   * `@kidgate/tokens` owns the accent list and this package imports nothing, so
   * storing `'fuchsia'` here would either duplicate that union or leave a
   * string nobody validates. The renderer takes this modulo the list it has,
   * which also means a pack with fewer accents cannot land on an empty colour.
   */
  colorIndex: number;
  createdAt: string;
  /**
   * The assigned device that travels with this child — the one whose fix
   * answers "where are they?" on child-level screens.
   *
   * Two devices, one at home on the charger and one in the school bag, both
   * report locations, and the stay-at-home one usually reports the fresher
   * fix. "Latest update wins" therefore shows the child at home while they
   * are at school — a wrong answer with a confident face, which is worse on
   * a safety product than no answer. So no summary is ever computed: a
   * parent names the carried device, or child-level screens show every fix
   * with its own age and refuse to pick (`core/domain/childLocation`).
   *
   * A view designation, not a rule: it changes what parent screens read,
   * never what any device enforces, which is why it lives here as an
   * ordinary parent-writable field rather than in `ChildRules` behind the
   * fan-out. May dangle after an unassignment — readers must check the
   * device is still assigned and location-capable, and fall back to
   * "unchosen" rather than trusting the stale id.
   */
  locationDeviceId?: string;
  /**
   * Rules for this person — web filter, blocked hours, location sharing —
   * applied to every assigned device.
   *
   * Absent (field by field) until a parent first saves at the child level —
   * until then each device keeps its own `controls.*` values, which also
   * remain the fallback for devices with no `childId`. Client-immutable;
   * written only by the `updateChildRules` Cloud Function, which fans the
   * fields out into every assigned device's `controls`. See `childRules.ts`.
   */
  rules?: ChildRules;
}

/**
 * Below this the leaderboard is not rendered anywhere.
 *
 * An only child ranked first out of one is a joke at the expense of the
 * feature, and a family that has assigned only one device so far is mid-setup
 * rather than finished.
 */
export const MIN_LEADERBOARD_CHILDREN = 2;
