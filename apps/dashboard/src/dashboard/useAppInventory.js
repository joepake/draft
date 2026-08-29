import { useEffect, useState } from 'react';
import { buildAppInventoryReport } from '@kidgate/core/domain/appInventoryReport';
import { getAppCategories, getAppInventory } from '../adapters/repositories';

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
 * Returns `null` for a device that has published no scan, which the card
 * renders as "nothing scanned yet" rather than as "no apps".
 */
export function useAppInventory(familyId, deviceId) {
  const [report, setReport] = useState(null);

  useEffect(() => {
    if (!familyId || !deviceId) {
      setReport(null);
      return undefined;
    }
    let cancelled = false;

    (async () => {
      try {
        const inventory = await getAppInventory(familyId, deviceId);
        if (cancelled) return;
        if (!inventory) {
          setReport(null);
          return;
        }
        const categories = await getAppCategories(inventory.apps.map(app => app.id));
        if (cancelled) return;
        setReport(buildAppInventoryReport(inventory, categories, Date.now()));
      } catch {
        // Swallowed like the rest of this page's soft reads: an inventory that
        // would not load costs one card, and the tab around it still describes
        // the device correctly.
        if (!cancelled) setReport(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [familyId, deviceId]);

  return report;
}
