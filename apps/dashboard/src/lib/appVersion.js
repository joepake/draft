import rootManifest from '../../../../package.json';

/**
 * The build this bundle came from.
 *
 * Only `SupportReport.appVersion` / `appVersionCode` read it — the two fields
 * that tie a filed bug to a build, and an operator reading "0.0.0" learns
 * nothing from either.
 *
 * **The ROOT manifest, imported — not this app's, and not a Vite `define`.**
 * Two things were wrong with the obvious alternatives:
 *
 *  - `apps/dashboard/package.json` says `"version": "0.0.0"` and always will.
 *    `yarn version:sync` writes the two native projects and the desktop
 *    bundle, never this one, so the field here is maintained by nobody
 *    (`.claude/rules/versioning.md` — the root manifest is the only place
 *    either number is edited).
 *  - `define: { 'import.meta.env.VITE_APP_VERSION': … }` works in a BUILD and
 *    silently does not in `vite dev`: `import.meta.env` is a real runtime
 *    object there, populated from `.env` files, so the reference resolves to
 *    `undefined` and falls through to a default. Measured against the running
 *    dev server on 2026-09-15 — the transformed module still carried the
 *    literal `import.meta.env.VITE_APP_VERSION`. A value that is right in
 *    production and wrong in development is worse than either.
 *
 * A JSON import is neither: Vite resolves it identically in both, and the
 * bundler inlines it, so nothing reads a file at runtime.
 */
export const APP_VERSION = rootManifest.version;

/** The build number behind `APP_VERSION`; an OTA ships new JS under the same
 *  marketing version, which is why both are recorded. */
export const APP_VERSION_CODE = rootManifest.versionCode;
