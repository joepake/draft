import { useCallback, useEffect, useState } from 'react';
import { t } from '@kidgate/i18n/web';
import { familyReportRepository } from '../adapters/repositories.js';

/**
 * The family's stored weekly reports.
 *
 * Separate from `useFamilyData` because the shape of the read is different:
 * everything there is a live subscription to something that changes while a
 * parent watches, and a report appears once a week. One `getDocs` when the
 * family resolves is the whole lifecycle — see the note in
 * `@kidgate/core/repositories/familyReport`.
 *
 * There is no "generate" here any more. The button that was here sent
 * `regenerate: true` — a test-phase hatch its own comment promised to drop —
 * and the server honoured it with a whole-document `set()`, so one press
 * replaced the week's real report and every other locale's narrative with a
 * mid-week partial that the Monday job then could not `create()` over
 * (`functions/lib/familyReport.js`, `saveFamilyReport`). Reports are the
 * schedule's to write; this hook only reads them.
 */
export function useFamilyReports(familyId) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  /**
   * A failed *read*, kept apart from an empty result — the same split the
   * phone's copy of this hook makes, and for the same reason: a read that
   * failed means the panel does not know whether this week already has a
   * report, so "No report yet" over a document that is sitting in Firestore
   * would be the product inventing an empty history. Reloading is the retry.
   */
  const [loadFailed, setLoadFailed] = useState(false);

  /**
   * `isActive` rather than a bare flag in the effect, so the retry button can
   * call this too. A read for a family the parent has since switched away from
   * must not land on top of the current one's.
   */
  const load = useCallback(
    async (isActive = () => true) => {
      if (!familyId) {
        setReports([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const rows = await familyReportRepository.fetchRecent(familyId);
        if (!isActive()) return;
        setReports(rows);
        setError(null);
        setLoadFailed(false);
      } catch (e) {
        // Still soft — no error screen over the whole family. But it says a
        // read failed rather than rendering "no report yet" over a document
        // that is sitting in Firestore; that silence is what made a rules
        // denial look like an empty history on both this dashboard and the
        // phone.
        if (!isActive()) return;
        const reason = e?.code || e?.message || 'unknown';
        console.warn('[kidgate] reports read failed:', reason);
        setReports([]);
        // The code rides along for the same reason it does on the phone: three
        // different failures render one sentence otherwise.
        setError(`${t('report.loadFailed')} (${reason})`);
        setLoadFailed(true);
      } finally {
        if (isActive()) setLoading(false);
      }
    },
    [familyId],
  );

  useEffect(() => {
    let active = true;
    void load(() => active);
    return () => {
      active = false;
    };
  }, [load]);

  return { reports, loading, error, loadFailed, reload: load };
}
