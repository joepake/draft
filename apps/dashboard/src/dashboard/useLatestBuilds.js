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
 * Read once per page load, not subscribed. The documents change when an
 * operator publishes a release; a listener would be two open streams for a
 * value that is constant for the life of the tab.
 *
 * `undefined` while in flight, `{}` if the read failed — and `{}` needs no
 * handling, because an absent platform entry reads as unknown and draws
 * nothing.
 */
export function useLatestBuilds() {
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
  }, []);

  return builds;
}
