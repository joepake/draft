/**
 * `config/desktopRelease` — what the newest desktop build is, and where to get it.
 *
 * The desktop agent has **no update channel**: no Tauri updater, no OTA. It
 * cannot have the phone's one either — `apps/mobile` swaps a JS bundle at
 * runtime, and the JS here lives inside a signed-or-not `.app`/`.exe` that only
 * an installer replaces. So this document is the desktop half of what
 * `config/ota` is for the phones, and it carries the half that *does* port:
 * `storeUpdate.ts`'s "you are behind, here is the link" gate, with a download
 * page in place of a store listing.
 *
 * Separate from `config/ota` rather than three more fields on it. That document
 * is read by `OtaUpdateService.fetchConfig`, which returns null unless both
 * `downloadAndroidUrl` and `downloadIosUrl` are strings — so a desktop-only
 * release entry added there would either be ignored or force whoever publishes
 * one to fill in two phone URLs they are not shipping.
 *
 * `firestore.rules` allows `config/{docId}` to be read by anyone and written by
 * nobody; it is edited in the Firebase console, like `config/ota`.
 */

/**
 * Which desktop the fields are about.
 *
 * The same two values `DesktopPlatform` narrows in `apps/desktop`, spelled here
 * because a schema module imports nothing — including from that app.
 */
export type DesktopReleasePlatform = 'macos' | 'windows';

export interface DesktopRelease {
  /**
   * The semver of the newest published build, e.g. `"1.1.0"`. Compared against
   * the running build's own version by a numeric dotted compare, so a suffix
   * (`"1.1.0-beta"`) is not understood and must not be published here.
   *
   * Absent or empty means "no gate" — nothing prompts. That is the state the
   * document is in before anyone fills it in, and it is the safe one.
   */
  version?: string;
  /**
   * `versionCode` from the root `package.json` — the integer that orders
   * releases. Wins over `version` when present, for the reason it does on the
   * phone: it is monotonic and cannot be read two ways.
   */
  versionCode?: number;
  /** Kill switch. `false` suppresses the prompt without editing the versions. */
  enabled?: boolean;
  /**
   * Where a parent downloads the new build, per platform. **A page, not a
   * file** — a `.dmg` handed to a `open`/`start` call downloads with no
   * explanation of the Gatekeeper or SmartScreen warning that follows it,
   * and this product has no code-signing certificate to remove either warning.
   */
  downloadMacUrl?: string;
  downloadWindowsUrl?: string;
  /** Optional release note, shown under the title. Plain text. */
  notes?: string;
}

/**
 * Hosts a download link may point at.
 *
 * The document is edited in a console session, and the URL it carries is handed
 * to the OS to open. A link that could be pointed anywhere is one an account
 * takeover turns into a download prompt on every child device in the product,
 * carrying this app's name and a parent's trust in it. Same reasoning, and the
 * same shape, as `ALLOWED_OTA_HOSTS` in `apps/mobile`.
 *
 * Both the product site and Firebase Storage, because the file may live on
 * either and the page linking to it will live on the first.
 */
export const ALLOWED_DESKTOP_DOWNLOAD_HOSTS = [
  'kidgate.app',
  'firebasestorage.googleapis.com',
  'storage.googleapis.com',
] as const;
