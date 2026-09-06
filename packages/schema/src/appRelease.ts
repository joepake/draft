/**
 * `config/appReleases` — what the newest **installed build** is, per platform,
 * and whether running an older one is still allowed.
 *
 * The document the other three should have been. `config/ota` carries one
 * `appVersion` / `appVersionCode` / `isForceUpdate` for *both* phones, so an
 * iOS release that cleared review while the Android build was still in it could
 * not be announced without also telling every Android family to fetch a build
 * Play would not serve them — and `isForceUpdate` would have walled them out of
 * the app to do it. `config/desktopRelease` and `config/tvRelease` then repeat
 * the same four fields again, each with its own spelling.
 *
 * One row per platform, and the row is the whole answer: which build, what to
 * call it, what changed, where to get it, and whether the old one still runs.
 *
 * **This document does not carry the OTA bundle.** `config/ota` keeps
 * `version` / `enabled` / the download URLs / the hashes, because that is a
 * different question — a bundle the app fetches itself versus a build a person
 * installs — and `OtaUpdateService` in every build already shipped reads it
 * there. Rule 2 is satisfied by the two documents answering two questions, not
 * by one of them answering both badly.
 *
 * ## The transition, and why the old fields stay
 *
 * Builds already installed read `config/ota.appVersion` and
 * `config/desktopRelease.version`. They cannot be told to read this document —
 * the only channel for telling them anything is the prompt those fields drive.
 * So an operator publishing a release **writes both** until the old builds have
 * aged out. `resolveUpdatePrompt` prefers this document and falls back, so a
 * new build reads the per-platform row and an old one reads what it always did.
 *
 * `firestore.rules` allows `config/{docId}` to be read by anyone and written by
 * nobody; it is edited in the Firebase console, like the other three.
 */

import type { DevicePlatform } from './capabilities';
import type { AppLanguage } from './language';

/** Where the operator publishes. World-readable; nobody may write it. */
export const APP_RELEASES_DOC = 'config/appReleases';

/**
 * Release notes by language, `en` required.
 *
 * A single string was the shape until this document, and it put English in
 * front of every family in the product — inside the one dialog that can block
 * the whole app, which makes it the worst screen in the product to be
 * unreadable. Fourteen translations per release is not a bar an operator can
 * clear on the day a build ships, so this is a map with a fallback rather than
 * a required set: write `en`, add whichever others are ready, and
 * `pickReleaseNote` resolves the rest to `en`.
 */
export type AppReleaseNotes = Partial<Record<AppLanguage, string>> & {
  en: string;
};

export interface AppRelease {
  /**
   * The integer that orders builds — `versionCode` from the root
   * `package.json`. Wins over `versionName` when both sides have one, for the
   * reason `buildFreshness` gives: monotonic and unambiguous.
   *
   * Absent means no gate on this platform. Publishing nothing is the correct
   * state for a platform with no release out yet.
   */
  versionCode?: number;
  /**
   * What a person calls it — `"1.0.1"`. Shown in the dialog and used to order
   * builds when no `versionCode` is published on either side. Numeric dotted
   * compare, so a suffix (`"1.0.1-beta"`) is not understood and must not be
   * published here.
   */
  versionName?: string;
  /**
   * What changed. Rendered as the same sanitised HTML subset the phone's update
   * dialog has always accepted — bold, colour, links, lists — through
   * `@kidgate/core/domain/updateNotesHtml`.
   *
   * **Every surface renders it isolated, and none of them may inject it into
   * its own document.** It is operator-authored text arriving over the network;
   * the phone gives it a WebView of its own, and a browser surface gives it a
   * sandboxed iframe. The sanitiser is a blacklist and is the second line, not
   * the first.
   */
  notes?: AppReleaseNotes;
  /**
   * Where to get it. A store page for the phones, a download **page** for the
   * desktops — never the installer file, because the page is where the
   * Gatekeeper and SmartScreen instructions live.
   *
   * Held to an allow-list per platform by `isAllowedReleaseUrl`, and a row
   * whose URL fails it prompts nothing at all: the URL reaches `Linking` or the
   * OS `open`, so a console session that could point it anywhere is one that
   * could put a download carrying KidGate's name on every child device in the
   * product.
   */
  url?: string;
  /**
   * true = the old build stops working. No dismiss, no snooze, no way past the
   * dialog but the store.
   *
   * **Refused for every platform a child cannot update on their own**, whatever
   * is written here — `supportsForcedUpdate` decides, not the document. A
   * desktop installer needs an administrator and a television is sideloaded, so
   * a forced dialog there is a lock with no key in front of the one person who
   * cannot open it.
   */
  force?: boolean;
  /**
   * false = this row is switched off. The kill switch for a release that turned
   * out bad, and it must exist because the alternative is deleting the row,
   * which reads identically to "never published" and loses what was there.
   */
  enabled?: boolean;
}

export interface AppReleases {
  platforms?: Partial<Record<DevicePlatform, AppRelease>>;
}
