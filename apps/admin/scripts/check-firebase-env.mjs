/**
 * Which Firebase project will the operator tool talk to?
 *
 * Same mechanism as `apps/desktop` and `apps/extension` — `--mode` picks
 * `.env.dev` or `.env.prod` — with a different required set, because this app
 * initialises **auth only** and needs `VITE_FUNCTIONS_URL` instead of the
 * Storage and Messaging values. See `ADMIN_REQUIRED`.
 *
 *   yarn workspace @kidgate/admin firebase:check        both files
 *   yarn workspace @kidgate/admin firebase:check prod   the one env:prod uses
 *
 * It matters more here than anywhere else, and for a reason no other app has:
 * a missing or half-filled file renders a **blank page, not an error**.
 * `src/firebase.js` calls `initializeApp()` at module scope, `getAuth` throws
 * on undefined values, `App.jsx` never imports, and React never mounts. The
 * terminal stays clean. This check is the only thing that says so out loud.
 */

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ADMIN_REQUIRED,
  runViteFirebaseEnvCli,
} from '../../../scripts/lib/vite-firebase-env.mjs';

runViteFirebaseEnvCli({
  appRoot: join(dirname(fileURLToPath(import.meta.url)), '..'),
  scriptPath: 'apps/admin/scripts/check-firebase-env.mjs',
  required: ADMIN_REQUIRED,
});
