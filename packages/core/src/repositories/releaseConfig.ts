/**
 * What the newest published build is, per platform, for a **parent** screen.
 *
 * Reads the documents that already answer this — `config/appReleases` first,
 * then the three it replaces (`config/ota` for the phones,
 * `config/desktopRelease` for the Mac and the PC, `config/tvRelease` for the
 * television) — rather than one restating the others. A "latest version"
 * written in two places is the failure the root `CLAUDE.md` opens with, and it
 * would be worse here than usual: the copy that drifted would be the one a
 * parent is shown.
 *
 * **Four reads, and the fourth wins per platform.** During the transition an
 * operator writes both, so a platform that has moved must be judged against the
 * row rather than a legacy field nobody updates any more; a platform that has
 * not keeps working unchanged. When the last build reading the old documents
 * has aged out, three of these reads go.
 *
 * **`config/tvRelease` is what a television has instead of an update channel.**
 * OTA was gated for that platform on 2026-08-28 and turned down, so the set
 * runs a stable build and the only thing that moves on its own is this notice
 * (`docs/FEASIBILITY.md`, "OTA for `apps/tv`"). The document is expected to be
 * absent until the app has a Play listing, which is the honest state rather
 * than a gap: `domain/buildFreshness` reads absent as unknown, and a parent
 * told their television is behind with nowhere to get the new one is worse off
 * than one told nothing.
 *
 * `chromeos` still answers nothing, and still deliberately. A browser extension
 * is updated by the Web Store without asking anyone, so a Chrome that is behind
 * is a Chrome that has not restarted — "you are out of date" is the wrong
 * sentence and there is no version a parent could act on.
 *
 * `config/{docId}` is world-readable and written by nobody (`firestore.rules`),
 * so this needs no session and works for a signed-out parent surface too.
 */

import type { FirestorePort } from '@kidgate/ports/firestore';
import { APP_RELEASES_DOC } from '@kidgate/schema/appRelease';
import type { DevicePlatform } from '@kidgate/schema/capabilities';
import {
  DESKTOP_RELEASE_DOC,
  type DesktopRelease,
} from '@kidgate/schema/desktopRelease';
import { parseAppReleases } from '../domain/appRelease';
import { OTA_CONFIG_DOC, type OtaConfig } from '@kidgate/schema/otaConfig';
import { TV_RELEASE_DOC, type TvRelease } from '@kidgate/schema/tvRelease';
import type { LatestBuilds } from '../domain/buildFreshness';

async function readDoc<T>(db: FirestorePort, path: string): Promise<T | null> {
  try {
    const snapshot = await db.getDoc<T>(path);
    return snapshot.data() ?? null;
  } catch {
    /*
     * Swallowed, like `fetchDesktopRelease`'s. A project where the document has
     * never been created, or a parent phone with no signal, is the ordinary
     * case — and the caller's honest answer to both is "unknown", which is what
     * an empty map produces.
     */
    return null;
  }
}

export async function fetchLatestBuilds(db: FirestorePort): Promise<LatestBuilds> {
  const [ota, desktop, tv, appReleases] = await Promise.all([
    readDoc<OtaConfig>(db, OTA_CONFIG_DOC),
    readDoc<DesktopRelease>(db, DESKTOP_RELEASE_DOC),
    readDoc<TvRelease>(db, TV_RELEASE_DOC),
    readDoc<unknown>(db, APP_RELEASES_DOC),
  ]);
  const releases = parseAppReleases(appReleases);

  const latest: LatestBuilds = {};

  if (ota) {
    /*
     * `appVersion` / `appVersionCode` are the **store** build, and the document
     * carries them only once that build is actually live — which is exactly the
     * gate a parent's screen needs too. Before they are set there is nothing
     * here, so no phone is called out of date for a release the stores are still
     * reviewing.
     */
    const phone = {
      ...(ota.appVersion ? { version: ota.appVersion } : {}),
      ...(typeof ota.appVersionCode === 'number'
        ? { versionCode: ota.appVersionCode }
        : {}),
      /*
       * The bundle number only counts while OTA delivery is on. With `enabled`
       * false nothing will ever be sent, so a device on an older bundle is not
       * behind in any sense a parent could act on — it is exactly where the
       * operator left it.
       */
      ...(ota.enabled !== false && typeof ota.version === 'number'
        ? { otaVersion: ota.version }
        : {}),
    };
    latest.ios = phone;
    latest.android = phone;
  }

  /*
   * `enabled: false` is the desktop kill switch. It suppresses the child's own
   * banner, and it has to suppress the parent's line for the same reason:
   * whatever made the operator switch it off — a bad build, a broken download
   * page — is not something to send a family after.
   */
  if (desktop && desktop.enabled !== false) {
    const build = {
      ...(desktop.version ? { version: desktop.version } : {}),
      ...(typeof desktop.versionCode === 'number'
        ? { versionCode: desktop.versionCode }
        : {}),
    };
    latest.macos = build;
    latest.windows = build;
  }

  /*
   * The television. No `otaVersion` — there is no bundle channel on this
   * platform and there is not going to be one, so the only thing that can be
   * behind here is the installed build.
   *
   * Same `enabled` kill switch as the desktop, and the same reason. A
   * television is the device a family is least able to fix in a hurry, which
   * makes the switch that stops telling them to try more useful here than
   * anywhere else.
   */
  if (tv && tv.enabled !== false) {
    latest.androidtv = {
      ...(tv.version ? { version: tv.version } : {}),
      ...(typeof tv.versionCode === 'number' ? { versionCode: tv.versionCode } : {}),
    };
  }

  /*
   * `config/appReleases` last, because it **wins**.
   *
   * It is the per-platform document the three above should have been, and
   * during the transition an operator writes both — so a platform migrated
   * there must not be judged against a legacy field somebody stopped updating.
   * The bundle number is not its concern and is preserved from `config/ota`:
   * a row describes the installed build, and overwriting `otaVersion` here
   * would tell every phone its bundle is unknown.
   *
   * `enabled: false` drops the platform back to whatever the legacy documents
   * said rather than to nothing, which is what a kill switch on a bad *release*
   * means — the older published build is still the truth about that platform.
   */
  for (const [platform, row] of Object.entries(releases.platforms ?? {})) {
    if (row.enabled === false) {
      continue;
    }
    const key = platform as DevicePlatform;
    latest[key] = {
      ...latest[key],
      ...(row.versionName ? { version: row.versionName } : {}),
      ...(typeof row.versionCode === 'number' ? { versionCode: row.versionCode } : {}),
    };
  }

  return latest;
}
