/**
 * The family screen-time board, read side — what turns the per-device,
 * per-day minutes in `ScreenTimeBoardDoc` into rows a screen can draw.
 *
 * Pure. Shared by the child home screen, the parent Family screen, the web
 * dashboard and (through codegen) the Cloud Function trigger that decides
 * whether a usage report is worth a board write.
 *
 * Ranking is **fewest minutes first**. It is a challenge, not a report: the
 * person who spent the least time on a screen this week leads. That is also
 * why a participant with no reported day is left off rather than shown at
 * zero — a phone that never reported would otherwise win every week.
 */
import type {
  ScreenTimeBoardDoc,
  ScreenTimeBoardParticipantKind,
} from '@kidgate/schema/screenTimeBoard';
import { SCREEN_TIME_BOARD_BUCKET_MINUTES } from '@kidgate/schema/screenTimeBoard';
import { leaderboardWindow, type LeaderboardWindow } from './leaderboard';

/** The board keys its week exactly as the star chart does. */
export const screenTimeBoardWindow: (date: Date) => LeaderboardWindow =
  leaderboardWindow;

/** A board needs two people before "first" means anything. */
export const MIN_SCREEN_TIME_BOARD_ROWS = 2;

export function screenTimeBucket(minutes: number): number {
  return Math.floor(Math.max(0, minutes) / SCREEN_TIME_BOARD_BUCKET_MINUTES);
}

/**
 * Whether a usage report moved the number enough to rewrite the board.
 * `before` is null for a day's first report, which always writes.
 */
export function screenTimeBucketChanged(
  before: number | null | undefined,
  after: number,
): boolean {
  if (before === null || before === undefined || !Number.isFinite(before)) {
    return true;
  }
  return screenTimeBucket(before) !== screenTimeBucket(after);
}

/** `YYYY-MM-DD` string order is calendar order, so a range check is a compare. */
export function isDateInWindow(dateKey: string, window: LeaderboardWindow): boolean {
  return dateKey >= window.fromDate && dateKey <= window.toDate;
}

export interface ScreenTimeBoardRow {
  participantId: string;
  kind: ScreenTimeBoardParticipantKind;
  name: string;
  colorIndex?: number;
  /** Sum over the person's devices and the week's reported days. */
  weekMinutes: number;
  /** Sum over the person's devices for `todayKey`; 0 when none reported today. */
  todayMinutes: number;
  /** Distinct days with any report — the coverage a reader may want to show. */
  daysReported: number;
  /** Competition rank: ties share a number and the next rank skips. */
  rank: number;
}

function sumDevices(
  devices: Record<string, Record<string, number>>,
  pick: (dateKey: string) => boolean,
): { minutes: number; days: Set<string> } {
  let minutes = 0;
  const days = new Set<string>();
  for (const perDay of Object.values(devices ?? {})) {
    for (const [dateKey, value] of Object.entries(perDay ?? {})) {
      if (!pick(dateKey)) continue;
      const n = Number(value);
      if (!Number.isFinite(n) || n <= 0) continue;
      minutes += Math.floor(n);
      days.add(dateKey);
    }
  }
  return { minutes, days };
}

/**
 * Rows for one board, fewest minutes first. Reads only days inside the
 * document's own window, so a stray key can never inflate a week.
 */
export function foldScreenTimeBoard(
  doc: ScreenTimeBoardDoc | null | undefined,
  todayKey: string,
): ScreenTimeBoardRow[] {
  if (!doc) return [];
  const inWindow = (dateKey: string) =>
    dateKey >= doc.fromDate && dateKey <= doc.toDate;
  const rows = Object.entries(doc.participants ?? {})
    .map(([participantId, participant]) => {
      const week = sumDevices(participant.devices, inWindow);
      const today = sumDevices(participant.devices, key => key === todayKey);
      return {
        participantId,
        kind: participant.kind,
        name: participant.name ?? '',
        ...(participant.colorIndex !== undefined
          ? { colorIndex: participant.colorIndex }
          : {}),
        weekMinutes: week.minutes,
        todayMinutes: today.minutes,
        daysReported: week.days.size,
        rank: 0,
      };
    })
    .filter(row => row.daysReported > 0)
    .sort((a, b) => a.weekMinutes - b.weekMinutes || a.name.localeCompare(b.name));

  let rank = 0;
  let previous: number | null = null;
  return rows.map((row, index) => {
    if (previous === null || row.weekMinutes !== previous) {
      rank = index + 1;
      previous = row.weekMinutes;
    }
    return { ...row, rank };
  });
}

/**
 * Off unless the family switched it on, and silent below two people — the
 * same two conditions the star chart applies, with the default inverted
 * (`FirestoreUser.screenTimeBoardEnabled`).
 */
export function isScreenTimeBoardVisible(
  enabled: boolean | undefined,
  rows: ReadonlyArray<ScreenTimeBoardRow>,
): boolean {
  return enabled === true && rows.length >= MIN_SCREEN_TIME_BOARD_ROWS;
}
