# @kidgate/admin — generated, do not edit

Synced from `apps/admin` in the KidGate monorepo by `scripts/sync-web-repo.mjs`
(or `scripts/sync-admin-repo.mjs` for this app alone) and **overwritten on the
next sync**. An edit made here reaches no product and fails no check.

## Not deployed, and not deployable from here

Internal operator tool, localhost only. No Vercel project builds this directory
and this app carries no `vercel.json` — unlike `apps/site` and
`apps/dashboard`, whose presence in this repo is what ships them. It can see
every family's data; an obscure URL is not a control. Deploying it is a decision
to raise in the monorepo, not a config change to make here.

## Running it

Needs `.env.local`, which no script creates. Without it the page renders
**blank** with nothing in the terminal — `initializeApp()` runs with undefined
values and React never mounts. The browser console is the only place that says so.

```bash
cd apps/admin
grep -E '^VITE_FIREBASE_(API_KEY|AUTH_DOMAIN|PROJECT_ID|APP_ID|FUNCTIONS_URL)=' \
  ../dashboard/.env.prod \
  | sed 's/^VITE_FIREBASE_FUNCTIONS_URL=/VITE_FUNCTIONS_URL=/' > .env.local
```

Then from the repo root:

```bash
yarn install
yarn workspace @kidgate/admin dev
```

The port must stay **5175** — the operator endpoints' CORS allowlist names it.
`.env.prod` because operating means operating production.
