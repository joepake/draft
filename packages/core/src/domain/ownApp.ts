/**
 * This product's own identifiers, so a parent is never offered KidGate as an
 * app to cap.
 *
 * Every agent already refuses to *count* itself — `KidGateUsageTracker`
 * (`shouldExcludePackage`), `KidGateTvAccessibilityService` (`packageName0`),
 * and the desktop's `frontmost_app` on both branches — because a Daily Limit
 * that locks the machine and then credits the lock window toward itself never
 * releases. The app **inventory** is the one signal that never took that view:
 * the macOS scan walks `/Applications` and reads every `Info.plist`, so
 * `KidGate.app` is in it like any other bundle, and the Windows scan reads the
 * registry's `Uninstall` keys with the same result. That list is a candidate
 * on both parent surfaces' App Limits, which is where a family found KidGate
 * offered as something to put a daily cap on.
 *
 * Filtered where the choice is offered rather than where the list is built, on
 * purpose: `apps/extension` publishes its own extension deliberately — an
 * inventory that omits its own reporter reads as a browser without KidGate —
 * and an inventory a parent opens to see what is installed is not wrong to say
 * this is installed. What must not happen is offering it as a *limit*.
 *
 * **The list is written down here and cannot be read from the running app**,
 * which is the honest cost: a parent's phone is not the child's device, so
 * there is no bundle to ask. An identifier added to a platform without being
 * added here fails silently, as one more row in a picker.
 */

/**
 * Both environments, because a parent's app talks to whichever project the
 * child's device was paired against (`ANDROID_PACKAGE_NAME` /`APP_BUNDLE_ID` in
 * `apps/mobile/.env.dev` and `.env.prod`), and every surface, because one
 * family's devices are not all one platform.
 *
 * Windows identifiers are lowercased executable file names — see `file_name`
 * in `apps/desktop/src-tauri/src/workspace.rs`, which is what `id` means on
 * that platform — so `kidgate.exe` sits beside the bundle identifiers.
 *
 * The Chromebook extension is absent: its id is assigned by the browser and
 * differs between a store install and an unpacked one, so there is nothing
 * stable to write down. Per-app limits are not enforceable on `chromeos`
 * anyway (`docs/FEASIBILITY.md`), so the row is unreachable rather than
 * missed.
 */
export const KIDGATE_OWN_APP_IDS: readonly string[] = [
  // Android and iOS, production.
  'com.kidgate.app',
  // The two iOS extensions. Neither is launchable, but FamilyControls and a
  // future inventory would both name them.
  'com.kidgate.app.monitor',
  'com.kidgate.app.report',
  // Android TV.
  'com.kidgate.app.tv',
  // The desktop agent — `identifier` in `apps/desktop/src-tauri/tauri.conf.json`.
  'com.kidgate.app.agent',
  // Windows, where an id is an executable name.
  'kidgate.exe',
  // The dev project's package, which is what a device paired against
  // `joevideotube` reports.
  'demo.de.oneapp.bootaioneapp',
  'demo.de.oneapp.bootaioneapp.kidgatemonitor',
  'demo.de.oneapp.bootaioneapp.kidgatereport',
];

const OWN = new Set(KIDGATE_OWN_APP_IDS);

/**
 * Whether an app identifier is one of this product's own.
 *
 * Case-insensitive because the platforms disagree: macOS reports
 * `CFBundleIdentifier` verbatim, Windows lowercases the executable name, and
 * the dev bundle id is mixed case on both mobile platforms.
 */
export function isKidGateOwnApp(id: string | null | undefined): boolean {
  return typeof id === 'string' && OWN.has(id.toLowerCase());
}
