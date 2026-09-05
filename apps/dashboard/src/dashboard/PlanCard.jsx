import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import { groupPlanComparisonRows } from '@kidgate/core/domain/planComparison';

/*
 * `appT` reads the APP key space through `@kidgate/i18n/activityFeed`. The
 * phone's Plans screen already says all of this, in fourteen languages.
 */

/**
 * What plan this family is on, and where to change it.
 *
 * **Read-only by decision, 2026-09-03.** Subscriptions are bought through the
 * App Store and Google Play, so a web purchase would mean a second billing
 * relationship (a card processor, its own receipts, its own refunds) for the
 * same entitlement — a new capability, not a parity gap. The note points at
 * the phone rather than pretending the button is coming.
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

  const premium = plan === 'premium';
  // No trial start means no child device has ever paired — the trial clock
  // starts at pairing, so this is "not set up yet", not "trial over".
  const started = Boolean(trialStartedAt);

  return (
    <div className="plan-card">
      <span className={`plan-pill${premium ? ' is-premium' : ''}`}>
        {premium
          ? appT('plans.pillPremium')
          : started
            ? appT('plans.planTrialName')
            : appT('plans.pillSetupRequired')}
      </span>
      <p className="hint">
        <Icon name="phone" size={12} /> {t('dash.planManageOnPhone')}
      </p>

      {/*
       * The comparison, and only for a family that has not bought.
       *
       * Buying stays on the phone (above), but deciding does not: a parent
       * comparing plans on a laptop and reaching for their phone to pay is the
       * ordinary path, and a card that shows the pill and nothing else asks
       * them to go and find out elsewhere what they would be paying for.
       *
       * Rows and their groups come from `@kidgate/core/domain/planComparison`
       * and the copy from the app pack through `appT`, so this cannot drift
       * from `PlansScreen` — the phone says every one of these sentences
       * already, and a `dash.*` twin would be the same sentence in two packs
       * with only one of them ever edited again (`.claude/rules/i18n.md`).
       *
       * One `<tbody>` per group, headed by the group's title: the phone draws
       * each group as a card with a tagline, and the same five headings over
       * the same rows is what keeps a parent reading this on a laptop and
       * paying on the phone looking at one argument, not two.
       */}
      {!premium ? (
        <div className="plan-compare">
          <p className="plan-compare-title">{appT('plans.compareTitle')}</p>
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
                    <th
                      scope="row"
                      className={row.highlight ? 'is-highlight' : undefined}
                    >
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
          <p className="plan-compare-included">
            {appT('plans.featureFootnotePlatforms')}
          </p>
        </div>
      ) : null}
    </div>
  );
}
