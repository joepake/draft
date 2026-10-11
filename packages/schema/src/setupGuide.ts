/**
 * `config/setupGuides` — the pictures and videos behind the child device's
 * permission wizard, published by the operator without a store build.
 *
 * Gated 2026-09-08 (`docs/FEASIBILITY.md`, "Showing a wizard step instead of
 * describing it"). The shape is driven by two findings from that gate:
 *
 * - **Assets are addressed, never bundled.** `docs/SETUP_GOLIVE.md` H2: an
 *   Android OTA cannot carry a new image, because RN Android resolves drawables
 *   out of the APK. A URL is data, so it rides the same world-readable config
 *   document `config/ota` and `config/appReleases` already ride, and a new
 *   screenshot costs an upload rather than a release.
 * - **A guide is per OEM or it is a lie.** The Settings screen a parent is
 *   looking at is Samsung's or Xiaomi's, not a generic Android's, and a
 *   recording of the wrong one is worse than the sentence it replaced. Hence
 *   `byFamily`, keyed by `KidGateOemHelper.family()`, with `default` as the
 *   fallback rather than the norm.
 *
 * **No operator-authored prose lives here, and that is deliberate.** Every
 * sentence in the product goes through `packages/i18n` in 14 languages; a
 * caption typed into the Firebase console would reach a Vietnamese parent in
 * whatever language the operator typed it. The document carries addresses. The
 * words around them are the step's own, already translated.
 *
 * A step with no entry has no button. That is the whole reason this can ship
 * before a single recording exists.
 */

/** Where the operator publishes. World-readable; nobody may write it. */
export const SETUP_GUIDES_DOC = 'config/setupGuides';

/**
 * What one guide is made of. Both halves may be present — stills are the
 * reliable channel (they survive a slow connection and the family's own web
 * filter), a video is the richer one.
 */
export type SetupGuideMedia = {
  /**
   * Ordered stills. Firebase Storage download URLs; the client refuses any
   * other host (`@kidgate/core/domain/setupGuide`).
   */
  images?: string[];
  /**
   * A YouTube video: the watch/share URL, or the bare 11-character id. Omit it
   * where the document's shared `youtube` is the video and this step only moves
   * the playhead.
   */
  youtube?: string;
  /**
   * Where this step starts in that video, in seconds.
   *
   * The expected shape of this document: **one recording of the whole setup,
   * and a timestamp per step.** Eleven separate clips is eleven re-uploads
   * every time Android moves a switch; one video with eleven marks is one. A
   * `t=` or `start=` already in the URL counts as this, so a timestamped share
   * link pasted straight out of YouTube needs no second field.
   */
  start?: number;
};

export type SetupGuideStepEntry = {
  /** Used when the device's OEM family has no entry of its own. */
  default?: SetupGuideMedia;
  /**
   * Keyed by OEM family — `samsung`, `xiaomi`, `oppo`, `vivo`, `huawei`,
   * `stock`, `other`. The same vocabulary `ControlsService.getOemGuideInfo()`
   * answers with, so a key that never matches is an operator typo rather than
   * a client that silently disagrees.
   */
  byFamily?: Record<string, SetupGuideMedia>;
};

export type SetupGuidesConfig = {
  /**
   * The video every step shares, unless a step names its own.
   *
   * One link to keep current instead of fifteen. A step still has to appear in
   * `steps` to show anything — a shared video with no timestamp would put the
   * same 0:00 poster on every card, which teaches nothing and looks like a bug.
   */
  youtube?: string;
  /**
   * Keyed by the wizard's own step key — `usageAccess`, `accessibility`,
   * `overlay`, `notifications`, `location`, `webFilter`, `backgroundRefresh`,
   * `blockedApps`, `battery`, `exactAlarm`, `oemAutostart`,
   * `uninstallProtection`, `messageSafety`, `screenTime`.
   */
  steps?: Record<string, SetupGuideStepEntry>;
  /**
   * The Help Center's videos (operator, 2026-10-11), keyed by User Guide topic
   * id (`@kidgate/core/domain/userGuide`), in order. A topic covering two
   * devices — `connectComputer` is a Mac and a Windows PC — lists both, each
   * naming its `device` so the screen can say which is which in the parent's
   * language. A topic with no entry shows no video.
   */
  topics?: Record<string, GuideTopicVideo[]>;
};

/** Which device a Help Center video shows; named on screen when a topic has two. */
export const GUIDE_VIDEO_DEVICES = ['ios', 'android', 'mac', 'windows'] as const;
export type GuideVideoDevice = 'ios' | 'android' | 'mac' | 'windows';

/** One Help Center video: a YouTube link or bare id, where it starts, its device. */
export type GuideTopicVideo = {
  youtube?: string;
  /** Seconds; a `t=` or `start=` in `youtube` counts too, as for a step. */
  start?: number;
  device?: GuideVideoDevice;
};
