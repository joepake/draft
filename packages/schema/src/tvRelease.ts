/**
 * `config/tvRelease` — what the newest Android TV build is.
 *
 * **This document is what a television has instead of an update channel**, and
 * that is a decision rather than a stopgap. OTA was asked for on this platform,
 * gated on 2026-08-28 and turned down (`docs/FEASIBILITY.md`, "OTA for
 * `apps/tv`"): nothing in `OtaUpdateService` can roll a bad bundle back, and a
 * sideloaded set's recovery from one is `adb` in somebody's living room. So a
 * television runs a stable build, and the only thing that moves automatically
 * is the *notice* — a parent's screen saying the set is behind.
 *
 * Its own document, for the reason `config/desktopRelease` is its own:
 * `OtaUpdateService.fetchConfig` returns null unless `config/ota` carries both
 * phone download URLs, so a television entry added there would either be
 * ignored or force whoever publishes one to invent two URLs they are not
 * shipping.
 *
 * `firestore.rules` allows `config/{docId}` to be read by anyone and written by
 * nobody; it is edited in the Firebase console, like the other two.
 *
 * **Publishing nothing is the correct state until the app is on Play.** The set
 * is sideloaded today (`apps/tv/CLAUDE.md`, "A release keystore" is still
 * unwired), and `domain/buildFreshness` reads an absent document as `unknown` —
 * which is the honest answer. A parent told their television is out of date,
 * with nowhere to get the new one, is worse off than a parent told nothing.
 */

export const TV_RELEASE_DOC = 'config/tvRelease';

export interface TvRelease {
  /**
   * Semver of the newest published build, e.g. `"1.1.0"`. Compared by the
   * numeric dotted compare in `domain/buildFreshness`, so a suffix
   * (`"1.1.0-beta"`) is not understood and must not be published here.
   *
   * Absent or empty means no gate — nothing is called out of date.
   */
  version?: string;
  /**
   * `versionCode` from the root `package.json` — the integer that orders
   * releases, and the one the set itself reports as `appBuild`. Wins over
   * `version` when both sides carry a real integer.
   */
  versionCode?: number;
  /**
   * Kill switch. `false` suppresses the parent's line without editing the
   * versions — the same escape `config/desktopRelease` has, and wanted for the
   * same reason: whatever makes an operator switch it off (a bad build, a
   * pulled listing) is not something to send a family after.
   */
  enabled?: boolean;
  /**
   * Where the family gets the new build. A **listing**, not a file.
   *
   * Unset while this app is sideloaded, and that is deliberate rather than
   * unfinished: there is no page a television can open and no store entry to
   * point at yet. Nothing renders it today — a parent's screen says the set is
   * behind and names the version, which is what the decision above asks for —
   * so this field exists to be filled in the day the Play listing does, not to
   * be worked around before then.
   */
  storeUrl?: string;
}
