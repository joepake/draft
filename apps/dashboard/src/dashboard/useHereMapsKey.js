import { useEffect, useState } from 'react';
import { auth, functionsBaseUrl } from '../lib/firebase.js';

/**
 * The HERE tile key, from the same endpoint the phone reads.
 *
 * `getLocationConfig` (`functions/http/location.js`) hands the key to any
 * caller with a valid ID token and returns `null` without one. That is what
 * keeps the key OUT of this bundle: `apps/dashboard` is a public artefact and
 * a tile key compiled into it would be readable by anyone who loaded the page,
 * signed in or not.
 *
 * `null` is a first-class answer, not a failure — `buildLocationHistoryMapHtml`
 * renders its own "map unavailable" document for it, which is the honest
 * result when the secret is unset in an environment.
 *
 * A GET, so it does not go through the `ApiPort` adapter (that one posts).
 * Same-origin in dev through the Vite proxy, and the deployed origin is
 * already on `ALLOWED_ORIGINS` — no origin had to be added for this.
 */
export function useHereMapsKey(enabled = true) {
  const [key, setKey] = useState(null);

  useEffect(() => {
    if (!enabled || !functionsBaseUrl) return undefined;
    let active = true;

    (async () => {
      try {
        const user = auth?.currentUser;
        const token = user ? await user.getIdToken() : null;
        if (!token) return;
        const res = await fetch(`${functionsBaseUrl}/getLocationConfig`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const body = await res.json();
        if (active) setKey(body?.hereMapsApiKey ?? null);
      } catch {
        // A map that cannot fetch its key draws the unavailable document. The
        // location facts beside it are read from Firestore and are unaffected,
        // so there is nothing here worth interrupting the page for.
      }
    })();

    return () => {
      active = false;
    };
  }, [enabled]);

  return key;
}
