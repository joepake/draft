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
}

/**
 * Below this the leaderboard is not rendered anywhere.
 *
 * An only child ranked first out of one is a joke at the expense of the
 * feature, and a family that has assigned only one device so far is mid-setup
 * rather than finished.
 */
export const MIN_LEADERBOARD_CHILDREN = 2;
