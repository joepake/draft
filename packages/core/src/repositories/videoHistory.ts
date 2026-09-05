import type { DocSnapshot, FirestorePort, Unsubscribe } from '@kidgate/ports/firestore';
import { deleteAllInBatches } from '../domain/batchDelete';
import { videoHistoryCollection } from '@kidgate/schema/paths';
import type {
  VideoHistoryEntry,
  VideoHistorySource,
} from '@kidgate/schema/videoActivity';

/**
 * Rows fetched for the videos-watched screen — one video on one day. A
 * fortnight of watching lands well inside this; the screen groups by day.
 */
export const VIDEO_HISTORY_PAGE_SIZE = 300;

/** The device-detail card wants only the most recent day's worth. */
export const VIDEO_HISTORY_CARD_ROWS = 5;

function mapEntry(doc: DocSnapshot): VideoHistoryEntry | null {
  const data = (doc.data() ?? {}) as Record<string, unknown>;
  const title = typeof data.title === 'string' ? data.title.trim() : '';
  const date = typeof data.date === 'string' ? data.date.trim() : '';
  if (!title || !date) {
    return null;
  }
  const source: VideoHistorySource = data.source === 'app' ? 'app' : 'extension';
  return {
    id: doc.id,
    videoId: typeof data.videoId === 'string' && data.videoId ? data.videoId : null,
    title,
    channel: typeof data.channel === 'string' && data.channel ? data.channel : null,
    date,
    views: typeof data.views === 'number' && data.views > 0 ? data.views : 0,
    lastAt: typeof data.lastAt === 'string' ? data.lastAt : '',
    source,
  };
}

export interface VideoHistoryRepositoryDeps {
  db: FirestorePort;
}

export function createVideoHistoryRepository(deps: VideoHistoryRepositoryDeps) {
  const { db } = deps;

  return {
    /**
     * Most recent days first, most-watched video first inside each day —
     * "what she spent the day watching", the same reading `webHistory` takes
     * of visits. Needs the composite index on (date desc, views desc); a
     * missing index fails here at runtime, not at build time.
     */
    subscribe(
      userId: string,
      deviceId: string,
      onEntries: (entries: VideoHistoryEntry[]) => void,
      onError: (error: Error) => void,
      limit = VIDEO_HISTORY_PAGE_SIZE,
    ): Unsubscribe {
      return db.onQuery(
        videoHistoryCollection(userId, deviceId),
        {
          orderBy: [
            ['date', 'desc'],
            ['views', 'desc'],
          ],
          limit,
        },
        snapshot => {
          onEntries(
            snapshot.docs
              .map(mapEntry)
              .filter((entry): entry is VideoHistoryEntry => entry !== null),
          );
        },
        onError,
      );
    },

    /**
     * On unpair. `videoHistory` hangs off the device document, and Firestore
     * deletes no subcollection when its parent goes — the same gap that left
     * `webHistory` orphaned for months (`deviceCascade.test.ts`).
     */
    async deleteForDevice(userId: string, deviceId: string): Promise<void> {
      const path = videoHistoryCollection(userId, deviceId);
      const snapshot = await db.getDocs(path);
      await deleteAllInBatches(
        db,
        path,
        snapshot.docs.map(doc => doc.id),
      );
    },
  };
}

export type VideoHistoryRepository = ReturnType<typeof createVideoHistoryRepository>;
