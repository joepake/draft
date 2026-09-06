import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { buildAppInventoryReport } from '@kidgate/core/domain/appInventoryReport';
import {
  withAppFlagDismissed,
  withAppFlagRestored,
} from '@kidgate/core/repositories/appFlagDismissal';
import {
  appFlagDismissalRepository,
  getAppCategories,
  getAppInventory,
} from '../adapters/repositories';

/**
 * One device's app inventory, classified, for the Apps tab.
 *
 * The same two calls the phone's `useAppInventory` makes, in the same order and
 * against the same `@kidgate/core` report builder — which is the point of that
 * builder existing. Two parent surfaces deciding separately what counts as a
 * flagged app is how they come to disagree about one phone, and
 * `.claude/rules/cross-platform.md` has the measured case.
 *
 * **A read, not a listener.** The document is rewritten once a day by the
 * device itself; a subscription would hold a socket open for an event that
 * almost never lands while somebody is looking.
 *
 * `installApproval` is the device's install quarantine
 * (`resolveInstallApprovalPolicy` off its controls), folded in at render so a
 * parent's Allow moves a row out of the pending group the moment the device
 * listener delivers it — the phone's hook does the same.
 *
 * `report` is `null` for a device that has published no scan, which the card
 * renders as "nothing scanned yet" rather than as "no apps".
 *
 * The other three are the parent's own answers to flagged apps
 * (`@kidgate/schema/appFlagDismissal`) — this surface writes them as well as
 * reads them, and `markSafe`/`restoreFlag` reject so the page's `run` helper
 * can surface a refusal and reopen the step-up the way every other write here
 * does. Scope is the CHILD when the device has one.
 */
export function useAppInventory(
  familyId,
  deviceId,
  installApproval = null,
  childId = null,
) {
  const [loaded, setLoaded] = useState(null);
  const [dismissals, setDismissals] = useState([]);
  const [savingAppId, setSavingAppId] = useState(null);
  // Rolled back to what was loaded, never to the inverse of the press — the
  // same posture every other write on this page takes.
  const rollbackRef = useRef([]);

  useEffect(() => {
    if (!familyId || !deviceId) {
      setLoaded(null);
      return undefined;
    }
    let cancelled = false;

    (async () => {
      try {
        const inventory = await getAppInventory(familyId, deviceId);
        if (cancelled) return;
        if (!inventory) {
          setLoaded(null);
          return;
        }
        const categories = await getAppCategories(inventory.apps.map(app => app.id));
        if (cancelled) return;
        // After the list, and its failure costs only itself: a scope with no
        // answers is the common case, and every flag simply stays where the
        // classifier left it.
        const stored = await appFlagDismissalRepository
          .read(familyId, { childId, deviceId })
          .catch(() => []);
        if (cancelled) return;
        setDismissals(stored);
        setLoaded({ inventory, categories });
      } catch {
        // Swallowed like the rest of this page's soft reads: an inventory that
        // would not load costs one card, and the tab around it still describes
        // the device correctly.
        if (!cancelled) setLoaded(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [familyId, deviceId, childId]);

  const persist = useCallback(
    async (next, appId) => {
      if (!familyId || !deviceId) return;
      rollbackRef.current = dismissals;
      setDismissals(next);
      setSavingAppId(appId);
      try {
        await appFlagDismissalRepository.write(familyId, { childId, deviceId }, next);
      } catch (error) {
        setDismissals(rollbackRef.current);
        throw error;
      } finally {
        setSavingAppId(null);
      }
    },
    [childId, deviceId, dismissals, familyId],
  );

  /** The flag *is* the category, so a row without one cannot be answered. */
  const markSafe = useCallback(
    row =>
      row.category
        ? persist(
            withAppFlagDismissed(dismissals, row.id, row.category, Date.now()),
            row.id,
          )
        : Promise.resolve(),
    [dismissals, persist],
  );

  const restoreFlag = useCallback(
    appId => persist(withAppFlagRestored(dismissals, appId), appId),
    [dismissals, persist],
  );

  const report = useMemo(
    () =>
      loaded
        ? buildAppInventoryReport(
            loaded.inventory,
            loaded.categories,
            Date.now(),
            installApproval,
            dismissals,
          )
        : null,
    [loaded, installApproval, dismissals],
  );

  return { report, markSafe, restoreFlag, savingAppId };
}
