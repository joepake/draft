import { useCallback, useEffect, useState } from 'react';
import { t, getLanguage } from '@kidgate/i18n/web';
import { familyReportRepository } from '../adapters/repositories.js';

/**
 * The family's stored weekly reports, and the button that writes this week's.
 *
 * Separate from `useFamilyData` because the shape of the read is different:
 * everything there is a live subscription to something that changes while a
 * parent watches, and a report appears once a week. One `getDocs` when the
 * family resolves, and one more after the button returns, is the whole
 * lifecycle — see the note in `@kidgate/core/repositories/familyReport`.
 */

/**
 * A failed generation, as a sentence.
 *
 * The endpoint's 409 is the one worth spelling out: it means nothing was
 * measured over the fortnight, which is not the same as a quiet week and must
 * not be reported as one — a device that was switched off reports nothing at
 * all, and a report built from that would be the product inventing calm.
 */
function generationMessage(failure) {
  if (failure?.code === 'rateLimited') return t('report.rateLimited');
  if (failure?.code === 'conflict') return t('report.noUsage');
  if (failure?.messageKey) return t(failure.messageKey);
  return t('report.failed');
}

export function useFamilyReports(familyId) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!familyId) {
      setReports([]);
      setLoading(false);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);

    familyReportRepository
      .fetchRecent(familyId)
      .then(rows => !cancelled && setReports(rows))
      .catch(e => {
        // Soft, like every other side panel in this dashboard: a collection
        // this account cannot read yet must degrade to an empty tab, not to an
        // error screen over the whole family.
        if (cancelled) return;
        console.warn('[kidgate] reports read failed:', e?.code || e?.message);
        setReports([]);
      })
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, [familyId]);

  const generate = useCallback(async () => {
    setGenerating(true);
    setError(null);
    try {
      // The reader's current language, not the account's: a parent who has just
      // switched the dashboard to another language is asking for the report in
      // the language they are reading. Omitting it falls back server-side to
      // whatever the account was set to, which is right for the Sunday send and
      // wrong here.
      const { report } = await familyReportRepository.generateNow(getLanguage());
      setReports(existing => {
        const rest = existing.filter(entry => entry.periodKey !== report.periodKey);
        return [report, ...rest].sort((a, b) => b.periodKey.localeCompare(a.periodKey));
      });
    } catch (failure) {
      setError(generationMessage(failure));
    } finally {
      setGenerating(false);
    }
  }, []);

  return { reports, loading, generating, error, generate };
}
