/**
 * The weekly star standings, as a document the whole family may read.
 *
 * It exists because of one rule that must not be relaxed: a child device signs
 * in under the family owner's uid, and `isOwnChildDevice()` in
 * `firestore.rules` is the only thing keeping one child's phone out of its
 * sibling's `childDevices` document — and therefore out of that sibling's
 * `locationHistory` and `webHistory`. A leaderboard the children can see cannot
 * be a client-side query across siblings, because the query that would build it
 * is exactly the one that guard forbids.
 *
 * So the server builds it and writes this instead: a row per child carrying a
 * count and a position, and nothing else. A parent surface could compute the
 * same numbers itself — parents may read every reward task in the family — but
 * reading one document is cheaper than fanning out, and both sides showing the
 * same standings matters more than saving a document.
 *
 * **Rows name a child, they do not describe one.** Names and colours are joined
 * from `users/{uid}/children`, which the family may already read. Denormalising
 * them here would mean a child renamed on Tuesday still reading as the old name
 * on the board until the next approval recomputed it.
 */

/** Only weekly exists. A daily or all-time board is a different product decision. */
export type LeaderboardPeriod = 'weekly';

export interface LeaderboardRow {
  childId: string;
  stars: number;
  /**
   * 1-based position, ties sharing a number: two children on nine stars are
   * both second and the next is fourth. Standard competition ranking, and the
   * alternative — breaking a tie by some hidden field — invents a loser.
   */
  rank: number;
}

export interface FamilyLeaderboard {
  /** Equal to `periodKey`. The period is the document id, so a week cannot be written twice. */
  id: string;
  period: LeaderboardPeriod;
  /** `2026-W34`, the same ISO week key `FamilyReport` uses. */
  periodKey: string;
  /** Inclusive local day keys the standings cover, for display. */
  fromDate: string;
  toDate: string;
  rows: LeaderboardRow[];
  updatedAt: string;
}
