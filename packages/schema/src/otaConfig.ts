/**
 * `config/ota` — the newest JS bundle for the phones, and the store build
 * behind it.
 *
 * Moved here from `apps/mobile/src/services/ota/types.ts` when a **parent**
 * surface needed to read it: this is a Firestore document shape, two clients
 * now read it, and rule 2 of the root `CLAUDE.md` exists because the legacy
 * repo hand-mirrored exactly this kind of constant between a client and a
 * server. `apps/mobile` re-exports it from its own `types.ts` so the OTA
 * service's imports are unchanged.
 *
 * Two versions in one document, and they answer different questions:
 *
 * - `version` is the **OTA bundle** — the JavaScript, swapped at runtime by
 *   `OtaUpdateService`, applied on the next launch.
 * - `appVersion` / `appVersionCode` are the **store build**, and are set only
 *   once that build is actually live on the App Store or Play. Setting them
 *   early prompts (and with `isForceUpdate`, blocks) every install in the
 *   product to go and fetch a build the stores will not serve them yet.
 *
 * `firestore.rules` allows `config/{docId}` to be read by anyone and written by
 * nobody; it is edited in the Firebase console, like `config/desktopRelease`.
 */

/** Where the operator publishes. World-readable; nobody may write it. */
export const OTA_CONFIG_DOC = 'config/ota';

export type OtaConfig = {
  version: number;
  enabled: boolean;
  downloadAndroidUrl: string;
  downloadIosUrl: string;
  /** Lowercase hex sha256 of the platform zip. Required to install. */
  sha256Android?: string;
  sha256Ios?: string;
  notes?: string;
  /**
   * Store gate — the build currently live on the App Store / Play Store.
   * Set these only when that build is actually published: every install on an
   * older build is prompted (and blocked, if `isForceUpdate`) until it moves.
   */
  appVersion?: string;
  appVersionCode?: number;
  linkAppStore?: string;
  linkGooglePlay?: string;
  /** true = the prompt cannot be dismissed; the app is unusable until updated. */
  isForceUpdate?: boolean;
};
