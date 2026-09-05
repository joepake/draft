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
  // Before the verdict: a premium refusal is a 403, and the generic path
  // below would call it "could not generate" — the same class of defect as
  // the control error that told a free family their session had broken.
  if (failure?.serverCode === 'billing/premium-required') {
    return t('controlError.premiumRequired');
  }
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
  /**
   * A failed *read*, kept apart from a failed *write* — the same split the
   * phone's copy of this hook makes, and for the same reason.
   *
   * The two lead to opposite offers. A generation that failed is retried by
   * pressing the button again. A read that failed means the panel does not
   * know whether this week already has a report, so putting "No report yet"
   * and a write button in front of a parent invites them to spend a model call
   * on a week that already has one they simply cannot see. Reloading the page
   * is the retry.
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

  const generate = useCallback(async () => {
    if (!familyId) {
      return;
    }
    setGenerating(true);
    setError(null);
    try {
      // The reader's current language, not the account's: a parent who has just
      // switched the dashboard to another language is asking for the report in
      // the language they are reading. Omitting it falls back server-side to
      // whatever the account was set to, which is right for the Sunday send and
      // wrong here.
      const { report } = await familyReportRepository.generateNow(
        familyId,
        getLanguage(),
        // Test phase: every press rewrites the week, so prompt changes are
        // visible without waiting for a new week key. Drop with the button
        // when reports become schedule-only.
        { regenerate: true },
      );
      setReports(existing => {
        const rest = existing.filter(entry => entry.periodKey !== report.periodKey);
        return [report, ...rest].sort((a, b) => b.periodKey.localeCompare(a.periodKey));
      });
    } catch (failure) {
      setError(generationMessage(failure));
    } finally {
      setGenerating(false);
    }
  }, [familyId]);

  return { reports, loading, generating, error, loadFailed, generate, reload: load };
}
