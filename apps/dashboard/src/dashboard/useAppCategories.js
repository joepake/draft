import { useEffect, useState } from 'react';
import { getAppCategories } from '../adapters/repositories';

/**
 * What the apps in a ranking are, for the rows that have an answer.
 *
 * The web half of `apps/mobile/src/hooks/useAppCategories.ts`, reading the same
 * `appCategories/{package}` rows through the same repository memo — one
 * document read per identifier per session, however many cards ask.
 *
 * **A missing entry means "not classified", never "harmless"**: the nightly
 * `classifyApps` job has not reached every app a phone paired this afternoon
 * reports. So there is no loading state — an empty map renders as no label,
 * which is the honest answer and the common one.
 */
export function useAppCategories(packageNames) {
  const [entries, setEntries] = useState(() => new Map());

  // The identifiers, not the array: a parent switching between days gets a new
  // array of the same apps on every render, and that must not refetch. Sorted
  // so two orderings of one set are one key.
  const key = [...packageNames].sort().join(' ');

  useEffect(() => {
    let cancelled = false;
    const names = key ? key.split(' ') : [];
    if (names.length === 0) {
      setEntries(new Map());
      return undefined;
    }

    getAppCategories(names)
      .then(result => {
        if (!cancelled) setEntries(result);
      })
      .catch(() => {
        // A dictionary lookup failing costs labels, not the card under them.
      });

    return () => {
      cancelled = true;
    };
  }, [key]);

  return entries;
}
