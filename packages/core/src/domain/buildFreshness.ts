/**
 * Is this child device running an old build?
 *
 * The parent-side half of the update story. Each agent tells a parent's screen
 * where to get a new build — `updateCheck.ts` on the desktop, `storeUpdate.ts`
 * on the phones — but each tells only *itself*, and a device that is switched
 * off, or whose child ignores the banner, has nobody to say so on its behalf.
 * This answers it from the device document instead, so a family can see it
 * without touching the machine.
 *
 * **Absent is unknown, never behind.** Every input here is optional and most
 * devices in the field are missing at least one: a record written before the
 * build fields existed carries none, `apps/extension` has no published "newest
 * build" anywhere to compare against (the Web Store updates it without asking
 * anyone), `apps/tv` has one only once an operator publishes
 * `config/tvRelease`, and Windows reports a semver where the other platforms
 * report an integer. A parent told their
 * television is out of date, with no version to quote and no download to open,
 * is worse off than one told nothing.
 *
 * Pure: the caller supplies both the device row and the published versions
 * (`repositories/releaseConfig` assembles the second from the two config
 * documents that already exist). No SDK, no platform.
 */

import type { DevicePlatform } from '@kidgate/schema/capabilities';

/**
 * The newest build published for one platform.
 *
 * Assembled from the documents that already carry it rather than one restating
 * the others: `config/ota` for the phones, `config/desktopRelease` for the Mac
 * and the PC, `config/tvRelease` for the television. A number that lives in two
 * places is the bug class this monorepo was built to end.
 */
export interface LatestBuild {
  /** Semver, e.g. `"1.1.0"`. */
  version?: string;
  /** `versionCode` from the root `package.json` — monotonic, unambiguous. */
  versionCode?: number;
  /**
   * The newest **OTA bundle**, where the platform has one. `config/ota`'s
   * `version`, and only the phones ever set it.
   *
   * Absent while OTA delivery is switched off, because a device that cannot be
   * sent a bundle is not behind in any way a parent could act on.
   */
  otaVersion?: number;
}

export type LatestBuilds = Partial<Record<DevicePlatform, LatestBuild>>;

/** What a device document says about the build it is running. */
export interface RunningBuildRow {
  platform?: DevicePlatform;
  appVersion?: string;
  appBuild?: string;
  otaVersion?: number;
}

export type BuildFreshness =
  | { status: 'unknown' }
  | { status: 'current' }
  | {
      status: 'outdated';
      /**
       * `app` is the installed build — a new download or a store update.
       * `bundle` is the JavaScript only: the device has the right app and has
       * not picked up the newest bundle, which it applies on its next launch.
       *
       * Told apart because the answer differs. `app` needs a person to fetch
       * something; `bundle` usually needs the child to close and reopen the app,
       * and telling a parent to reinstall for it would be wrong advice.
       */
      kind: 'app' | 'bundle';
      /** What the device is running, as a person would quote it. */
      running: string;
      /** What it could be running. */
      latest: string;
    };

/**
 * Numeric dotted compare — "1.10.0" is newer than "1.9.3". Returns <0, 0, >0.
 *
 * **The one copy.** `apps/desktop/src/updateCheck.ts` and
 * `apps/mobile/src/services/ota/storeUpdate.ts` each had their own, the desktop
 * one carrying a comment saying it was the same function as the phone's — which
 * is a duplication documented rather than fixed. Both import this now.
 *
 * A segment with **no leading digit** answers 0 rather than guessing, which is
 * the safe direction: no ordering means no update rather than an invented one.
 * Two things both copies this replaced said and neither did, pinned in the
 * tests: the guard is per index, so it only fires on a segment the loop
 * actually reaches — and it does not cover `1.1.0-beta`, because
 * `parseInt('0-beta')` is 0, so a suffix is read as the number in front of it.
 * Versions in this project are numeric by policy; a pre-release published in a
 * config document orders by its numbers and ignores the tag.
 */
export function compareVersionStrings(a: string, b: string): number {
  const left = a.split('.');
  const right = b.split('.');
  const length = Math.max(left.length, right.length);

  for (let index = 0; index < length; index += 1) {
    const l = parseInt(left[index] ?? '0', 10);
    const r = parseInt(right[index] ?? '0', 10);
    if (Number.isNaN(l) || Number.isNaN(r)) {
      return 0;
    }
    if (l !== r) {
      return l - r;
    }
  }

  return 0;
}

/**
 * Compare the installed build against the published one.
 *
 * Codes win over semver when **both** sides are real integers, for the reason
 * they do on the phone and the Mac: `versionCode` is monotonic and cannot be
 * read two ways. Windows is why the "both sides" half matters — Tauri writes
 * the semver into the field the other platforms put a build number in, so
 * `parseInt` there is `NaN` and the comparison has to fall back rather than
 * treat an unreadable number as zero and report every PC as ancient.
 *
 * Returns null when there is nothing to compare, which is not a failure.
 */
function appBehind(row: RunningBuildRow, latest: LatestBuild): boolean | null {
  const publishedCode = latest.versionCode;
  const runningCode = parseInt(row.appBuild ?? '', 10);
  if (
    typeof publishedCode === 'number' &&
    publishedCode > 0 &&
    Number.isInteger(runningCode)
  ) {
    return runningCode < publishedCode;
  }

  const publishedVersion = latest.version?.trim() ?? '';
  const runningVersion = row.appVersion?.trim() ?? '';
  if (publishedVersion.length > 0 && runningVersion.length > 0) {
    return compareVersionStrings(runningVersion, publishedVersion) < 0;
  }

  return null;
}

export function resolveBuildFreshness(
  row: RunningBuildRow | null | undefined,
  latest: LatestBuilds,
): BuildFreshness {
  if (!row?.platform) {
    return { status: 'unknown' };
  }

  const published = latest[row.platform];
  if (!published) {
    return { status: 'unknown' };
  }

  const behind = appBehind(row, published);
  if (behind === true) {
    return {
      status: 'outdated',
      kind: 'app',
      /*
       * The semver a person reads, falling back to the build number when that
       * is all either side published. "build 19" is worse copy than a version
       * and better than a sentence with a hole in it — the same fallback
       * `resolveDesktopUpdate` makes for the child's own banner.
       */
      running: row.appVersion?.trim() || `build ${row.appBuild ?? '?'}`,
      latest: published.version?.trim() || `build ${published.versionCode ?? '?'}`,
    };
  }

  /*
   * The bundle is only asked about once the app itself is current. A phone two
   * store releases behind is also on an old bundle by definition, and saying so
   * twice would put the smaller of the two problems on the screen.
   */
  const publishedBundle = published.otaVersion;
  if (
    typeof publishedBundle === 'number' &&
    typeof row.otaVersion === 'number' &&
    row.otaVersion < publishedBundle
  ) {
    return {
      status: 'outdated',
      kind: 'bundle',
      running: String(row.otaVersion),
      latest: String(publishedBundle),
    };
  }

  return behind === null ? { status: 'unknown' } : { status: 'current' };
}
