import { useEffect, useState } from 'react';
import { getLatestBuilds } from '../adapters/repositories.js';

/**
 * What the newest published build is, per platform.
 *
 * The twin of `apps/mobile/src/hooks/useLatestBuilds.ts`, deliberately the same
 * shape: both parent surfaces read the same two config documents through the
 * same `@kidgate/core` repository and decide "behind" with the same
 * `domain/buildFreshness`, so they cannot disagree about the same Mac.
 *
 * Not subscribed, like everything here (`adapters/oneShot.js`). Read on load
 * and again on every refresh — `reloadKey` is `useFamilyData`'s `loadedAt`,
 * which the header button and every landed write move. A tab left open across
 * a release kept "up to date" until a full reload before 2026-10-21; now the
 * refresh that brings the devices back brings the release rows with them.
 *
 * `undefined` while the first read is in flight, `{}` if it failed — and `{}`
 * needs no handling, because an absent platform entry reads as unknown and
 * draws nothing. A re-read keeps the previous answer on screen until it lands.
 */
export function useLatestBuilds(reloadKey) {
  const [builds, setBuilds] = useState(undefined);

  useEffect(() => {
    let cancelled = false;
    getLatestBuilds()
      .catch(() => ({}))
      .then(next => {
        if (!cancelled) {
          setBuilds(next);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

  return builds;
}
