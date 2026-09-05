import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import type {
  ScreenTimeBoardDoc,
  ScreenTimeBoardParticipant,
} from '@kidgate/schema/screenTimeBoard';
import { screenTimeBoardDoc } from '@kidgate/schema/paths';
import { timestampToIso } from '../domain/firestoreValue';

function mapDevices(raw: unknown): Record<string, Record<string, number>> {
  if (!raw || typeof raw !== 'object') return {};
  const out: Record<string, Record<string, number>> = {};
  for (const [deviceId, perDay] of Object.entries(raw as Record<string, unknown>)) {
    if (!perDay || typeof perDay !== 'object') continue;
    const days: Record<string, number> = {};
    for (const [dateKey, value] of Object.entries(perDay as Record<string, unknown>)) {
      const n = Number(value);
      if (Number.isFinite(n)) days[dateKey] = n;
    }
    out[deviceId] = days;
  }
  return out;
}

function mapParticipant(raw: unknown): ScreenTimeBoardParticipant | null {
  if (!raw || typeof raw !== 'object') return null;
  const row = raw as Record<string, unknown>;
  if (row.kind !== 'child' && row.kind !== 'parent') return null;
  return {
    kind: row.kind,
    name: typeof row.name === 'string' ? row.name : '',
    ...(typeof row.colorIndex === 'number' ? { colorIndex: row.colorIndex } : {}),
    devices: mapDevices(row.devices),
  };
}

function mapBoard(doc: DocSnapshot): ScreenTimeBoardDoc | null {
  const data = doc.data();
  if (!data) return null;
  const raw = data as Record<string, unknown>;
  const participants: Record<string, ScreenTimeBoardParticipant> = {};
  if (raw.participants && typeof raw.participants === 'object') {
    for (const [id, value] of Object.entries(
      raw.participants as Record<string, unknown>,
    )) {
      const participant = mapParticipant(value);
      // A malformed row is dropped rather than drawn as a nameless zero.
      if (participant) participants[id] = participant;
    }
  }
  return {
    periodKey: typeof raw.periodKey === 'string' ? raw.periodKey : doc.id,
    fromDate: typeof raw.fromDate === 'string' ? raw.fromDate : '',
    toDate: typeof raw.toDate === 'string' ? raw.toDate : '',
    participants,
    updatedAt: timestampToIso(raw.updatedAt) ?? '',
  };
}

export interface ScreenTimeBoardRepositoryDeps {
  db: FirestorePort;
}

/** Read-only on every client: both writers are Cloud Functions. */
export function createScreenTimeBoardRepository(deps: ScreenTimeBoardRepositoryDeps) {
  const { db } = deps;
  return {
    subscribe(
      familyId: string,
      periodKey: string,
      onBoard: (board: ScreenTimeBoardDoc | null) => void,
      onError: (error: Error) => void,
    ): Unsubscribe {
      return db.onDoc(
        screenTimeBoardDoc(familyId, periodKey),
        snapshot => onBoard(mapBoard(snapshot)),
        onError,
      );
    },
    async get(familyId: string, periodKey: string): Promise<ScreenTimeBoardDoc | null> {
      return mapBoard(await db.getDoc(screenTimeBoardDoc(familyId, periodKey)));
    },
  };
}

export type ScreenTimeBoardRepository = ReturnType<
  typeof createScreenTimeBoardRepository
>;
