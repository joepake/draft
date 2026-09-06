/**
 * Whether this build is behind the one published for its platform, and what to
 * say about it.
 *
 * The rules behind `config/appReleases` (`@kidgate/schema/appRelease`). One
 * module because four surfaces ask the same question and must not answer it
 * differently: the phone's blocking dialog, the desktop agent's banner, and
 * both parent consoles' freshness badge. The badge saying "up to date" over a
 * device the agent is walling its user out of is the failure this file exists
 * to make impossible.
 *
 * Three things are decided here rather than in the document, because an
 * operator ticking a box in the Firebase console must not be able to produce
 * them:
 *
 * 1. **Which platforms may be forced.** A forced dialog is only honest where
 *    the person reading it can act on it.
 * 2. **Which URLs may be offered.** The value reaches `Linking.openURL` or the
 *    OS `open`; an unchecked one is a download prompt carrying KidGate's name,
 *    pointed anywhere, on every child device in the product.
 * 3. **That a prompt with no working link is no prompt.** Same rule
 *    `resolveStoreUpdate` has always held.
 */

import type { DevicePlatform } from '@kidgate/schema/capabilities';
import type { AppLanguage } from '@kidgate/schema/language';
import { ALLOWED_DESKTOP_DOWNLOAD_HOSTS } from '@kidgate/schema/desktopRelease';
import type {
  AppRelease,
  AppReleaseNotes,
  AppReleases,
} from '@kidgate/schema/appRelease';
import { compareVersionStrings } from './buildFreshness';

/**
 * Platforms where a forced update is a door rather than a wall.
 *
 * The two phones: the store is one tap away and the person holding the device
 * can complete it. Nowhere else.
 *
 * - `macos` / `windows` — the installer needs an administrator. Program Files
 *   is per-machine and `/Applications` is not a child's to write, so a forced
 *   dialog is a lock whose key is a parent who is somewhere else by definition.
 *   `docs/SETUP_GOLIVE.md` H3c recorded this before the field existed.
 * - `androidtv` — sideloaded, and recovery from a bad build is `adb` in
 *   somebody's living room (`docs/FEASIBILITY.md`, "OTA for `apps/tv`").
 * - `chromeos` — the Web Store updates the extension and asks nobody.
 */
export const FORCE_UPDATE_PLATFORMS: readonly DevicePlatform[] = ['ios', 'android'];

export function supportsForcedUpdate(platform: unknown): boolean {
  return (
    typeof platform === 'string' &&
    FORCE_UPDATE_PLATFORMS.includes(platform as DevicePlatform)
  );
}

/**
 * The two stores, and only the two stores.
 *
 * Moved here from `apps/mobile/src/services/ota/storeUpdate.ts`, which keeps
 * its `isAllowedStoreUrl` as a re-export: a custom scheme in this field would
 * be a deep link into whatever other app is installed, and one copy of that
 * refusal is the point of this package.
 */
export const ALLOWED_STORE_URL =
  /^(https:\/\/(apps\.apple\.com|itunes\.apple\.com|play\.google\.com)\/|itms-apps:\/\/|market:\/\/)/i;

export function isAllowedStoreUrl(rawUrl: string): boolean {
  return ALLOWED_STORE_URL.test(rawUrl.trim());
}

/**
 * Is this URL one we are willing to hand to the OS for this platform?
 *
 * Two allow-lists rather than one, because the platforms mean different things
 * by "where to get it": a phone must go to its store, and a desktop or a
 * television must go to a page this product owns. Neither list is a superset of
 * the other, and merging them would let a Mac be pointed at Play.
 *
 * `chromeos` allows nothing and therefore never prompts — the extension is
 * updated by the Web Store without asking anyone, so "you are out of date"
 * there means "you have not restarted Chrome", which is not a sentence with an
 * action under it.
 */
export function isAllowedReleaseUrl(rawUrl: unknown, platform: unknown): boolean {
  if (typeof rawUrl !== 'string' || !rawUrl.trim()) {
    return false;
  }

  if (platform === 'ios' || platform === 'android') {
    return isAllowedStoreUrl(rawUrl);
  }

  if (platform !== 'macos' && platform !== 'windows' && platform !== 'androidtv') {
    return false;
  }

  const match = rawUrl.trim().match(/^https:\/\/([^/?#]+)/i);
  if (!match) {
    return false;
  }

  /*
   * `split('@').pop()` before the port strip: `https://kidgate.app@evil.test/`
   * has an authority whose *host* is `evil.test`, and a naive prefix match on
   * the allow-list reads it as ours. Same guard as `updateCheck.ts`'s, which
   * this replaces.
   */
  const authority = (match[1] ?? '').toLowerCase().split('@').pop() ?? '';
  const hostname = authority.split(':')[0] ?? '';

  return ALLOWED_DESKTOP_DOWNLOAD_HOSTS.some(
    allowed => hostname === allowed || hostname.endsWith(`.${allowed}`),
  );
}

/**
 * The note in the reader's language, falling back to `en`.
 *
 * Falls back rather than showing nothing: a release note in the wrong language
 * still tells a parent what changed, and an empty dialog above a button that
 * blocks the app tells them nothing at all. Returns undefined only when the
 * operator published no note, which the dialog draws as no note.
 */
export function pickReleaseNote(
  notes: AppReleaseNotes | undefined,
  language: unknown,
): string | undefined {
  if (!notes) {
    return undefined;
  }
  const own =
    typeof language === 'string' ? notes[language as AppLanguage]?.trim() : undefined;
  return own || notes.en?.trim() || undefined;
}

/** A row an operator actually published, with the junk dropped. */
function parseRelease(value: unknown): AppRelease | null {
  if (!value || typeof value !== 'object') {
    return null;
  }
  const raw = value as Record<string, unknown>;

  const notes =
    raw.notes && typeof raw.notes === 'object'
      ? (Object.fromEntries(
          Object.entries(raw.notes as Record<string, unknown>).filter(
            ([, text]) => typeof text === 'string' && text.trim().length > 0,
          ),
        ) as AppReleaseNotes)
      : undefined;

  return {
    ...(typeof raw.versionCode === 'number' && Number.isFinite(raw.versionCode)
      ? { versionCode: raw.versionCode }
      : {}),
    ...(typeof raw.versionName === 'string' && raw.versionName.trim()
      ? { versionName: raw.versionName.trim() }
      : {}),
    ...(notes && typeof notes.en === 'string' ? { notes } : {}),
    ...(typeof raw.url === 'string' && raw.url.trim() ? { url: raw.url.trim() } : {}),
    force: raw.force === true,
    enabled: raw.enabled !== false,
  };
}

/**
 * The document, validated. Never trust a console-authored map.
 *
 * A malformed row is dropped rather than repaired: half a row is how a dialog
 * comes to say "Version undefined is ready", and the honest answer to a row
 * nobody can parse is that the platform has no release published.
 */
export function parseAppReleases(data: unknown): AppReleases {
  const raw = (data as { platforms?: unknown } | null)?.platforms;
  if (!raw || typeof raw !== 'object') {
    return {};
  }

  const platforms: Partial<Record<DevicePlatform, AppRelease>> = {};
  for (const [platform, value] of Object.entries(raw as Record<string, unknown>)) {
    const release = parseRelease(value);
    if (release) {
      platforms[platform as DevicePlatform] = release;
    }
  }
  return { platforms };
}

/**
 * Does this document say anything about this platform?
 *
 * The switch between the new document and the three it replaces. A caller that
 * finds a row uses it and stops; one that does not falls back to whatever it
 * read before, because an operator mid-transition writes both and a platform
 * they have not migrated yet must keep working.
 *
 * **Not the same question as "is there an update".** A row saying this build is
 * current answers the platform and must not fall through to a legacy document
 * that still names an older release — which is exactly how a device would be
 * prompted to install what it is already running.
 */
export function hasReleaseRow(
  releases: AppReleases | null | undefined,
  platform: unknown,
): boolean {
  const row = releases?.platforms?.[platform as DevicePlatform];
  return Boolean(row) && row?.enabled !== false;
}

export interface UpdatePrompt {
  /** Already checked against this platform's allow-list. */
  url: string;
  /** true = no dismiss and no snooze. Never true off `FORCE_UPDATE_PLATFORMS`. */
  force: boolean;
  /** The version a person reads, for the "Version x.y.z is ready" line. */
  targetVersion?: string;
  /** Already resolved to the reader's language. Sanitised HTML subset. */
  notes?: string;
  /** Identifies this prompt, so "Later" snoozes one release and not the next. */
  targetKey: string;
}

export interface UpdatePromptInput {
  releases: AppReleases | null | undefined;
  platform: unknown;
  /** `Device.appBuild` / `__APP_BUILD__` — may be a non-integer on Windows. */
  runningVersionCode?: number;
  /** The semver this build shipped as. */
  runningVersionName?: string;
  /** What language the reader has chosen, for `notes`. */
  language?: unknown;
}

/**
 * Whether to prompt, and with what — from the per-platform document only.
 *
 * Null far more often than not, and every one of those is an ordinary state
 * rather than a failure: no row, the row is switched off, this build is
 * current, the row published no link, or the link is not one we will open.
 */
export function resolveUpdatePrompt(input: UpdatePromptInput): UpdatePrompt | null {
  const release = input.releases?.platforms?.[input.platform as DevicePlatform];
  if (!release || release.enabled === false) {
    return null;
  }

  const publishedCode = release.versionCode;
  const runningCode = input.runningVersionCode;
  const codesComparable =
    typeof publishedCode === 'number' &&
    publishedCode > 0 &&
    typeof runningCode === 'number' &&
    Number.isInteger(runningCode);

  const publishedName = release.versionName ?? '';
  const runningName = input.runningVersionName ?? '';

  const behind = codesComparable
    ? (runningCode as number) < (publishedCode as number)
    : publishedName.length > 0 && runningName.length > 0
      ? compareVersionStrings(runningName, publishedName) < 0
      : false;

  if (!behind) {
    return null;
  }

  if (!isAllowedReleaseUrl(release.url, input.platform)) {
    return null;
  }

  const targetVersion =
    publishedName ||
    (typeof publishedCode === 'number' ? `build ${publishedCode}` : '');
  const notes = pickReleaseNote(release.notes, input.language);

  return {
    url: release.url as string,
    /*
     * The document's `force` is a request, not the decision. An operator who
     * ticks it for a Mac has asked for a dialog nobody at that keyboard can
     * satisfy, and the honest reading of that is "prompt, do not wall".
     */
    force: release.force === true && supportsForcedUpdate(input.platform),
    ...(targetVersion ? { targetVersion } : {}),
    ...(notes ? { notes } : {}),
    /*
     * The code when there is one: two releases can share a `versionName` while
     * a build number cannot repeat, and a snooze keyed on the name would
     * silence the second of them.
     */
    targetKey:
      typeof publishedCode === 'number' && publishedCode > 0
        ? `code:${publishedCode}`
        : `version:${publishedName}`,
  };
}
