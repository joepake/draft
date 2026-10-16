/**
 * Which picture or video a wizard step shows, where in that video it starts,
 * and whether it may be shown at all.
 *
 * Two jobs, and the second is the one that matters. Resolving `byFamily` before
 * `default` is bookkeeping. Refusing an address that is not ours is not: the
 * document is world-readable and console-written, the screen it feeds is a
 * full-bleed viewer on a **child's** phone, and "whatever URL the config says"
 * is a content channel into that phone for anyone who ever gets write access to
 * one console document. So the client keeps its own allowlist, rather than
 * trusting the document it just read.
 *
 * Nothing here imports a platform (root `CLAUDE.md` rule 1) and nothing renders
 * — the four clients that could grow this feature share one answer about what a
 * step's guide is.
 */

import {
  GUIDE_VIDEO_DEVICES,
  type GuideVideoDevice,
  type SetupGuideMedia,
  type SetupGuidesConfig,
} from '@kidgate/schema/setupGuide';

/**
 * Hosts a still may come from. Both are Firebase Storage's own — the operator
 * uploads there, and the two spellings are the download URL and the bucket URL
 * the console offers for the same object.
 */
export const SETUP_GUIDE_IMAGE_HOSTS = [
  'firebasestorage.googleapis.com',
  'storage.googleapis.com',
] as const;

/**
 * A step is one screen of Settings, not a photo album. The cap is a guard on
 * the operator's side of a document no test can see: six stills already means a
 * parent swiping six times to reach a switch.
 */
export const SETUP_GUIDE_MAX_IMAGES = 6;

/** What the wizard actually renders: addresses the client has accepted. */
export type SetupGuideView = {
  images: string[];
  youtubeId: string | null;
  /** Where the video starts for this step, in whole seconds. */
  startSeconds: number | null;
};

function hostOf(value: string): string | null {
  // Deliberately not `new URL()`: Hermes ships a partial implementation, and
  // this runs on the child's phone where a throw would take the wizard with it.
  const match = /^https:\/\/([^/?#]+)/i.exec(value.trim());
  return match?.[1]?.toLowerCase() ?? null;
}

function isAllowedImage(value: unknown): value is string {
  if (typeof value !== 'string') {
    return false;
  }
  const host = hostOf(value);
  return (
    host !== null &&
    SETUP_GUIDE_IMAGE_HOSTS.some(
      allowed => host === allowed || host.endsWith(`.${allowed}`),
    )
  );
}

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

function isYoutubeHost(host: string): boolean {
  return (
    host === 'youtu.be' ||
    host === 'youtube.com' ||
    host === 'www.youtube.com' ||
    host === 'm.youtube.com' ||
    host === 'www.youtube-nocookie.com'
  );
}

/**
 * The id out of whatever the operator pasted — a share link, a watch URL, an
 * embed, a Short, or the id alone.
 *
 * Accepting the id alone is what makes the console entry survivable: the person
 * publishing these is copying from a browser bar on a phone, and half those
 * copies carry `&t=` or an `si=` share parameter. Everything after the id is
 * dropped rather than passed on to the player.
 */
export function parseYoutubeId(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null;
  }
  const trimmed = value.trim();
  if (YOUTUBE_ID.test(trimmed)) {
    return trimmed;
  }
  const host = hostOf(trimmed);
  if (host === null || !isYoutubeHost(host)) {
    return null;
  }
  const candidates = [
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /\/embed\/([A-Za-z0-9_-]{11})/,
    /\/shorts\/([A-Za-z0-9_-]{11})/,
    /\/live\/([A-Za-z0-9_-]{11})/,
  ];
  for (const pattern of candidates) {
    const match = pattern.exec(trimmed);
    if (match?.[1]) {
      return match[1];
    }
  }
  return null;
}

/**
 * The playhead already written into a pasted link — `?t=90`, `&t=1m30s`,
 * `&start=90`.
 *
 * Exists so the operator never converts anything by hand: YouTube's own "Copy
 * link at current time" produces `t=1m30s`, and that share link *is* the
 * timestamp. The `start` field is the second way to say it, for the case this
 * document is shaped around — one video, one mark per step.
 */
export function parseYoutubeStart(value: unknown): number | null {
  if (typeof value !== 'string') {
    return null;
  }
  const match = /[?&](?:t|start)=([0-9hms]+)/i.exec(value.trim());
  const raw = match?.[1];
  if (!raw) {
    return null;
  }
  if (/^\d+$/.test(raw)) {
    return Number(raw);
  }
  const parts = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i.exec(raw);
  if (!parts || (!parts[1] && !parts[2] && !parts[3])) {
    return null;
  }
  return (
    Number(parts[1] ?? 0) * 3600 + Number(parts[2] ?? 0) * 60 + Number(parts[3] ?? 0)
  );
}

function toStartSeconds(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    return null;
  }
  return Math.floor(value);
}

/**
 * `1:24`, `12:05`, `1:02:03` — digits only, so it needs no translation and
 * assumes nothing about the words a locale would put around it.
 */
export function formatGuideStart(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const rest = total % 60;
  const pad = (value: number) => String(value).padStart(2, '0');
  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(rest)}`
    : `${minutes}:${pad(rest)}`;
}

/**
 * The player URL.
 *
 * `youtube-nocookie` because this plays on a child's device inside a parental
 * control app; `rel=0` and `modestbranding=1` because the last thing this
 * screen should offer is a grid of recommended videos; `playsinline=1` so iOS
 * keeps it inside the frame the wizard drew rather than handing the child a
 * full-screen player it does not control.
 *
 * `hl` puts the player's own chrome in the app's language. The setup videos
 * speak English with English captions drawn into the picture, and carry one
 * caption track per app language, so for any other language `cc_load_policy`
 * turns that track on and `cc_lang_pref` picks it; for English it stays off,
 * or the same sentence would sit on screen twice. A video without that track
 * falls back to whatever YouTube has.
 *
 * It plays as soon as it opens. Waiting for a tap left the player on the
 * video's poster — one frame of one step, the same for every step — which read
 * as "this did not jump to my step". Not muted since the videos gained a voice
 * (2026-10-11): the app's WebViews allow sound without a tap, and a browser
 * that refuses it shows YouTube's own play button at the same mark.
 */
export function youtubeEmbedUrl(
  videoId: string,
  startSeconds?: number | null,
  captionLanguage = 'en',
): string {
  const lang = encodeURIComponent(captionLanguage);
  const captions =
    captionLanguage === 'en' ? '' : `&cc_load_policy=1&cc_lang_pref=${lang}`;
  const base =
    `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&fs=0` +
    `${captions}&hl=${lang}&autoplay=1`;
  const start = toStartSeconds(startSeconds);
  return start === null || start === 0 ? base : `${base}&start=${start}`;
}

/** Poster frame, so the wizard can show what the video is before it loads. */
export function youtubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function toView(
  media: SetupGuideMedia | undefined,
  sharedYoutube: string | undefined,
): SetupGuideView | null {
  if (!media) {
    return null;
  }
  const images = Array.isArray(media.images)
    ? media.images.filter(isAllowedImage).slice(0, SETUP_GUIDE_MAX_IMAGES)
    : [];
  // The step's own link wins; the document's shared one is what a step
  // carrying only a timestamp is pointing into.
  const ownId = parseYoutubeId(media.youtube);
  const youtubeId = ownId ?? parseYoutubeId(sharedYoutube);
  const startSeconds =
    toStartSeconds(media.start) ??
    parseYoutubeStart(media.youtube) ??
    (ownId === null ? parseYoutubeStart(sharedYoutube) : null);
  if (images.length === 0 && youtubeId === null) {
    return null;
  }
  return { images, youtubeId, startSeconds };
}

/**
 * The guide for one step on one device, or null when there is nothing to show.
 *
 * Null is the ordinary answer and the button is absent for it — the library
 * grows one mark at a time, and a step nobody has covered yet must look exactly
 * like it did before this feature existed rather than open an empty viewer.
 *
 * `byFamily` beats `default`, and neither is merged into the other: a Samsung
 * entry with only a video does not borrow the generic stills, because those
 * stills are of somebody else's Settings app. The document's shared `youtube`
 * is the one thing both levels inherit — that is the point of it.
 */
export function resolveSetupGuide(
  config: SetupGuidesConfig | null | undefined,
  options: { stepKey: string; family?: string | null },
): SetupGuideView | null {
  const entry = config?.steps?.[options.stepKey];
  if (!entry) {
    return null;
  }
  const shared = config?.youtube;
  const family = options.family?.trim().toLowerCase();
  const byFamily = family ? entry.byFamily?.[family] : undefined;
  return toView(byFamily, shared) ?? toView(entry.default, shared);
}

/** A Help Center video the client has accepted. */
export type GuideTopicVideoView = {
  youtubeId: string;
  startSeconds: number | null;
  device: GuideVideoDevice | null;
  /**
   * The app-pack key naming this video beside its siblings — its device's, or
   * `GUIDE_TOPIC_VIDEO_LABELS`'. Drawn only when the topic has more than one.
   */
  labelKey: string | null;
};

/** At most one video per device the product installs on, and then some. */
const MAX_TOPIC_VIDEOS = 4;

/**
 * The app-pack label naming each device — the plans screen's platform names,
 * which both parent surfaces already render in fourteen languages.
 */
export const GUIDE_VIDEO_DEVICE_LABEL: Record<GuideVideoDevice, string> = {
  ios: 'plans.platformIos',
  android: 'plans.platformAndroid',
  mac: 'plans.platformMac',
  windows: 'plans.platformWindows',
};

/**
 * Two videos of one topic on the same device, named by the screen each one
 * happens on, in the order `apps/videos/scripts/guides.mjs` lists them —
 * without a name both read "Show me how". Existing labels only, so no new copy.
 */
export const GUIDE_TOPIC_VIDEO_LABELS: Record<string, readonly string[] | undefined> = {
  manageDevices: ['settings.sectionFamilyChildrenTitle', 'settings.familyOtherDevices'],
  locationSharing: ['deviceDetail.location', 'placeAlerts.title'],
  webFilter: ['deviceDetail.webFilter', 'webFilter.requestsTitle'],
};

/**
 * A User Guide topic's videos, in order, or none.
 *
 * Same allowlist as a step's (YouTube ids only), and the same rule that none
 * is the ordinary answer: a topic nobody has filmed looks as it always did.
 */
export function resolveGuideTopicVideos(
  config: SetupGuidesConfig | null | undefined,
  topicId: string,
): GuideTopicVideoView[] {
  const list = config?.topics?.[topicId];
  if (!Array.isArray(list)) {
    return [];
  }
  return list
    .flatMap((video, index) => {
      const youtubeId = parseYoutubeId(video?.youtube);
      if (youtubeId === null) {
        return [];
      }
      const device = (GUIDE_VIDEO_DEVICES as readonly unknown[]).includes(video.device)
        ? (video.device as GuideVideoDevice)
        : null;
      const startSeconds =
        toStartSeconds(video.start) ?? parseYoutubeStart(video.youtube);
      const labelKey = device
        ? GUIDE_VIDEO_DEVICE_LABEL[device]
        : (GUIDE_TOPIC_VIDEO_LABELS[topicId]?.[index] ?? null);
      return [{ youtubeId, startSeconds, device, labelKey }];
    })
    .slice(0, MAX_TOPIC_VIDEOS);
}
