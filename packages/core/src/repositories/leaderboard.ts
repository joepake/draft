import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type { FamilyLeaderboard, LeaderboardRow } from '@kidgate/schema/leaderboard';
import { leaderboardDoc } from '@kidgate/schema/paths';
import { timestampToIso } from '../domain/firestoreValue';

/**
 * This week's standings, as the server wrote them.
 *
 * Read-only here, and `firestore.rules` says `allow write: if false` — a
 * client that could write its own standings is a child that could win.
 *
 * **A listener, not a read.** The moment this document changes is the moment a
 * parent approves a task, which is exactly when a child is watching the screen
 * to see whether it moved them up. That is the opposite of `familyReport`,
 * which changes once a week and is fetched.
 */

function mapRow(raw: unknown): LeaderboardRow | null {
  if (!raw || typeof raw !== 'object') {
    return null;
  }
  const row = raw as Record<string, unknown>;
  if (typeof row.childId !== 'string' || !row.childId) {
    return null;
  }
  return {
    childId: row.childId,
    stars: Number(row.stars ?? 0),
    rank: Number(row.rank ?? 0),
  };
}

function mapLeaderboard(doc: DocSnapshot): FamilyLeaderboard | null {
  const data = doc.data();
  if (!data) {
    return null;
  }
  const raw = data as Record<string, unknown>;

  return {
    id: doc.id,
    period: 'weekly',
    periodKey: typeof raw.periodKey === 'string' ? raw.periodKey : doc.id,
    fromDate: typeof raw.fromDate === 'string' ? raw.fromDate : '',
    toDate: typeof raw.toDate === 'string' ? raw.toDate : '',
    // A malformed row is dropped rather than rendered as a blank name on zero
    // stars, which would read as a child who did nothing.
    rows: Array.isArray(raw.rows)
      ? raw.rows.map(mapRow).filter((row): row is LeaderboardRow => row !== null)
      : [],
    updatedAt: timestampToIso(raw.updatedAt) ?? '',
  };
}

export interface LeaderboardRepositoryDeps {
  db: FirestorePort;
}

export function createLeaderboardRepository(deps: LeaderboardRepositoryDeps) {
  const { db } = deps;

  return {
    /**
     * Watch one week's standings.
     *
     * `null` means the document does not exist yet — a week in which nobody has
     * had a task approved. Callers render an empty board rather than a spinner:
     * "nobody has earned a star this week" is the true answer, not a loading
     * state that never resolves.
     */
    subscribe(
      familyId: string,
      periodKey: string,
      onLeaderboard: (leaderboard: FamilyLeaderboard | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onDoc(
        leaderboardDoc(familyId, periodKey),
        snapshot => onLeaderboard(mapLeaderboard(snapshot)),
        onError,
      );
    },

    async get(familyId: string, periodKey: string): Promise<FamilyLeaderboard | null> {
      return mapLeaderboard(await db.getDoc(leaderboardDoc(familyId, periodKey)));
    },
  };
}

export type LeaderboardRepository = ReturnType<typeof createLeaderboardRepository>;
