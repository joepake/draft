import { useCallback, useState } from 'react';

/**
 * "Read that again" — for a card that reads a document AND writes it.
 *
 * **This console reads once and never watches** (`adapters/oneShot.js`), so a
 * card whose own button changes the thing it is showing has to ask for the new
 * value itself. Nothing is going to hand it over.
 *
 * `useFamilyData` does this for the whole family; these are the four cards that
 * read something it does not hold — support reports, notification preferences,
 * the deletion request, the trusted contacts. Each was written against a live
 * listener and each broke silently without one: the notification switches
 * render straight off the document (`on={prefs.alerts?.[key] !== false}`, with
 * no optimistic copy), so a parent pressing one watched it **not move**.
 *
 * Put the key in the read effect's dependencies and call `reload()` after a
 * write lands — never before, and never in a `catch`: a refused write changed
 * nothing, and re-reading to re-learn what is already on screen is a billed
 * read for no new fact.
 *
 * @returns {[number, () => void]}
 */
export function useReload() {
  const [reloadKey, setReloadKey] = useState(0);
  const reload = useCallback(() => setReloadKey(current => current + 1), []);
  return [reloadKey, reload];
}
