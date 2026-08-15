# kidgate-web — generated, do not edit

Every file here except `yarn.lock` is written by `scripts/sync-web-repo.mjs`
in the KidGate monorepo and is **overwritten on the next sync**. An edit made in
this repo reaches no product and fails no check; it disappears silently.

Change `apps/site`, `apps/dashboard` or `packages/*` in the monorepo, run the
sync there, review the diff here, then commit.

`packages/i18n` is duplicated into this repo by that script. It is a build
artifact of the monorepo's single copy — never a second source. A wording fix
made here is lost.

## Layout

Yarn 4 workspace. Two Vercel projects build from this one repo:

| Vercel project | Root Directory     | Serves                   |
| -------------- | ------------------ | ------------------------ |
| site           | `apps/site`        | `www.kidgate.app`        |
| dashboard      | `apps/dashboard`   | `dashboard.kidgate.app`  |

Each app's `vercel.json` carries its own build command, output directory and
SPA rewrite. Environment variables are set per project in Vercel — none are
committed.

## After a sync

```bash
yarn install
git add -A && git commit -m "sync from monorepo"
git push
```

`yarn install` is what updates `yarn.lock`, the one file the sync leaves alone,
and **it has to be committed**. Without it Vercel finds no lockfile, falls back
to Yarn 1.22, and fails on `workspace:*` — a protocol Yarn 1 does not implement
— with an error that blames the npm registry.
