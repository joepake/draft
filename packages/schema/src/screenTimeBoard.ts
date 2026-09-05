/**
 * The family screen-time board: this week's minutes per person, children and
 * any parent who chose to join, in one document a child device may read.
 *
 * `users/{familyId}/screenTimeBoards/{periodKey}` — the same week key as the
 * star chart (`leaderboard.ts`), for the same reason it is a server-written
 * document rather than a client query: a child device is barred from its
 * siblings' `usageDays` (`firestore.rules`), and must stay barred. The
 * `screenTimeBoardFromUsage` trigger folds children in from their usage
 * reports; `reportParentScreenTime` lets a parent's own phone add a row.
 *
 * Minutes are kept **per device per day** rather than pre-summed, so a device
 * that re-reports a day (the usage endpoint is idempotent by date) replaces
 * its own number instead of adding to it. Summing across a person's devices
 * is the reader's job (`@kidgate/core/domain/screenTimeBoard`).
 *
 * Off by default. `FirestoreUser.screenTimeBoardEnabled` is the family's
 * switch, and the trigger writes nothing while it is off — comparing a family
 * against each other by minutes is a parenting choice, exactly like the star
 * chart, and the honest default for a choice is "not until asked".
 */

/**
 * A usage report moves the board only when it crosses a five-minute line.
 * Usage arrives every couple of minutes per device; writing the board on each
 * would double the cost of every report for a number nobody can see move.
 */
export const SCREEN_TIME_BOARD_BUCKET_MINUTES = 5;

export type ScreenTimeBoardParticipantKind = 'child' | 'parent';

export interface ScreenTimeBoardParticipant {
  kind: ScreenTimeBoardParticipantKind;
  /** Display name as of the last write — the child's name or the parent's. */
  name: string;
  /** Children only: the avatar accent, copied so the reader needs no child doc. */
  colorIndex?: number;
  /** `deviceId` → `YYYY-MM-DD` → foreground minutes that day. */
  devices: Record<string, Record<string, number>>;
}

export interface ScreenTimeBoardDoc {
  periodKey: string;
  fromDate: string;
  toDate: string;
  /** Keyed by `childId`, or `parent:<uid>` — see `parentParticipantId`. */
  participants: Record<string, ScreenTimeBoardParticipant>;
  updatedAt: string;
}

/**
 * A parent's row is keyed by their uid behind a prefix, so a child id and a
 * parent uid can never collide in `participants` even though both are
 * Firestore-shaped random strings.
 */
export function parentParticipantId(uid: string): string {
  return `parent:${uid}`;
}
