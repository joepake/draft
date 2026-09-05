/**
 * Videos the child watched — the `videoHistory` document shape.
 *
 * A sibling of `WebHistoryEntry` (`webActivity.ts`), and shaped for two agents
 * that see a video through different windows:
 *
 * - **`apps/extension`** holds the committed URL, so it knows the `videoId`
 *   exactly (`youtube.com/watch?v=`, `/shorts/`, `youtu.be/`) and fetches the
 *   title from YouTube's public oEmbed endpoint — no API key, no extra
 *   permission (`docs/FEASIBILITY.md`, "Videos watched"). `source: 'extension'`.
 * - **The Android YouTube app** has no URL. The agent reads the active media
 *   session's `METADATA_KEY_TITLE` / `METADATA_KEY_ARTIST`, which carry the
 *   title and channel but not the id — so `videoId` is null there and the
 *   document is keyed by a hash of title+channel. `source: 'app'`.
 *
 * The two never merge across sources: a title watched in Chrome and the same
 * title played in the app are two rows, because one carries a real id and the
 * other a hash, and collapsing them would claim a precision the app half does
 * not have.
 */
export interface VideoHistoryEntry {
  /** Document id: the `videoId` when known, else a stable hash of title+channel. */
  id: string;
  /** YouTube video id, or null when the source could not see one (the app). */
  videoId: string | null;
  /** The video's title, as the source reported it. Never empty. */
  title: string;
  /** The uploading channel, when the source knew it. */
  channel: string | null;
  /** Local day key, `YYYY-MM-DD`. */
  date: string;
  /** Times this video was opened that day, after the device's own dedupe. */
  views: number;
  /**
   * Most recent open, ISO string — the agent's own clock when it sent one,
   * else the moment the batch was uploaded.
   *
   * **Not a per-open list, and there is nothing finer behind it.** A day's
   * repeats live in `views`; no agent stores the individual opens, so a
   * screen can place this video once in a day and never twice.
   */
  lastAt: string;
  /** Which agent reported it — a browser extension or the native app reader. */
  source: VideoHistorySource;
}

export type VideoHistorySource = 'extension' | 'app';
