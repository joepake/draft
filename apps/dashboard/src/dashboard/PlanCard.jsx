import { useCallback, useEffect, useRef, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import { groupPlanComparisonRows } from '@kidgate/core/domain/planComparison';

/*
 * `appT` reads the APP key space through `@kidgate/i18n/activityFeed`. The
 * phone's Plans screen already says all of this, in fourteen languages.
 */

/**
 * Free against Premium, as a table.
 *
 * Split out of `PlanCard` because it has two homes now: the dialog the rail
 * opens, and any future placement with room for it. Rows and their groups come
 * from `@kidgate/core/domain/planComparison` and the copy from the app pack
 * through `appT`, so this cannot drift from `PlansScreen` — the phone says
 * every one of these sentences already, and a `dash.*` twin would be the same
 * sentence in two packs with only one of them ever edited again
 * (`.claude/rules/i18n.md`).
 *
 * One `<tbody>` per group, headed by the group's title: the phone draws each
 * group as a card with a tagline, and the same five headings over the same rows
 * is what keeps a parent reading this on a laptop and paying on the phone
 * looking at one argument, not two.
 */
function PlanComparison() {
  const appT = useActivityTranslate();

  return (
    <div className="plan-compare">
      <table>
        <thead>
          <tr>
            <th />
            <th>{appT('plans.compareColumnFree')}</th>
            <th className="is-premium">{appT('plans.compareColumnPremium')}</th>
          </tr>
        </thead>
        {groupPlanComparisonRows().map(section => (
          <tbody key={section.id}>
            <tr className="plan-compare-group">
              <th scope="rowgroup" colSpan={3}>
                {appT(section.titleKey)}
              </th>
            </tr>
            {section.rows.map(row => (
              <tr key={row.id}>
                <th scope="row" className={row.highlight ? 'is-highlight' : undefined}>
                  {appT(row.labelKey)}
                </th>
                {/* A dash on the free side, a tick on the paid one — the
                    module says why null means those two different things. */}
                <td className="is-free">{row.freeKey ? appT(row.freeKey) : '—'}</td>
                <td>
                  {row.premiumKey ? (
                    appT(row.premiumKey)
                  ) : (
                    <Icon name="check" size={14} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
      <p className="plan-compare-included">{appT('plans.compareIncluded')}</p>
      {/* The phone says this under the same table, so a parent comparing
          here and paying there reads one caveat rather than two. */}
      <p className="plan-compare-included">{appT('plans.featureFootnotePlatforms')}</p>
    </div>
  );
}

/**
 * The comparison as a dialog, built on the step-up sheet's furniture
 * (`.sheet-backdrop` / `.sheet`) so the dashboard has one modal and not two.
 */
function PlanCompareSheet({ onClose }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Escape closes, as it does on the step-up sheet: a parent who opened this
  // to glance at one row should not have to aim at a button to get out.
  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div
        className="sheet sheet-wide"
        role="dialog"
        aria-modal="true"
        aria-label={appT('plans.compareTitle')}
        onClick={event => event.stopPropagation()}
      >
        <div className="sheet-head">
          <h2 className="sheet-title">{appT('plans.compareTitle')}</h2>
          <button ref={closeRef} className="login-link" onClick={onClose}>
            {t('dash.close')}
          </button>
        </div>
        <p className="sheet-body">
          <Icon name="phone" size={12} /> {t('dash.planManageOnPhone')}
        </p>
        <PlanComparison />
      </div>
    </div>
  );
}

/**
 * What plan this family is on, and where to change it.
 *
 * **Read-only by decision, 2026-09-03.** Subscriptions are bought through the
 * App Store and Google Play, so a web purchase would mean a second billing
 * relationship (a card processor, its own receipts, its own refunds) for the
 * same entitlement — a new capability, not a parity gap. The note points at
 * the phone rather than pretending the button is coming.
 *
 * **The comparison is a dialog, not rail furniture.** It used to render inline
 * in `.side-foot`, which put a three-column table of a dozen rows into a
 * 264px column: every cell wrapped to three lines, the language picker and the
 * sign-out row were pushed below the fold, and the rail — whose job is picking
 * a device and a tab — scrolled past a price list to reach them. Deciding
 * between the plans is still a thing a parent does on a laptop, so nothing is
 * dropped; it opens at a width it can be read at.
 *
 * ## Two states, not the phone's four, and the reason is a missing constant
 *
 * `PlansScreen` distinguishes trial-active from trial-ended by counting
 * against `TRIAL_DAYS`, which reaches the phone through `react-native-config`
 * and reaches this app through nothing — there is no `VITE_TRIAL_DAYS`, and
 * `@kidgate/core/domain/trial` refuses to assume a duration precisely because
 * a wrong one shows a family a trial the server already refuses. So this says
 * "Premium" or "Trial" and does not claim to know which side of the line a
 * trial sits on. `docs/BACKLOG.md` carries what closing that would take.
 */
export default function PlanCard({ plan, trialStartedAt }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const [comparing, setComparing] = useState(false);
  const close = useCallback(() => setComparing(false), []);

  const premium = plan === 'premium';
  // No trial start means no child device has ever paired — the trial clock
  // starts at pairing, so this is "not set up yet", not "trial over".
  const started = Boolean(trialStartedAt);

  return (
    <div className="plan-card">
      <div className="plan-card-row">
        <span className={`plan-pill${premium ? ' is-premium' : ''}`}>
          {premium
            ? appT('plans.pillPremium')
            : started
              ? appT('plans.planTrialName')
              : appT('plans.pillSetupRequired')}
        </span>
        {/* Only for a family that has not bought: buying stays on the phone,
            but deciding does not, and a family already on Premium has nothing
            left to compare. */}
        {!premium && (
          <button className="login-link" onClick={() => setComparing(true)}>
            {appT('plans.compareTitle')}
          </button>
        )}
      </div>
      {/* Where a plan is changed, for the one family that has no dialog to
          read it in: the comparison sheet opens with the same sentence, so a
          free family is told before it can ask and the rail keeps two lines
          it would otherwise spend saying it twice. */}
      {premium && (
        <p className="hint">
          <Icon name="phone" size={12} /> {t('dash.planManageOnPhone')}
        </p>
      )}

      {comparing && <PlanCompareSheet onClose={close} />}
    </div>
  );
}
