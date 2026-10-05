import { groupPlanComparisonRows } from '@kidgate/core/domain/planComparison';
import Icon from './Icon.jsx';

/**
 * Free against Premium, as a table — the dashboard's plan dialog and the
 * site's plan section draw this one component.
 *
 * Rows and their groups come from `@kidgate/core/domain/planComparison` and
 * every sentence from the APP pack through `t` (the dashboard's `appT`, the
 * site's `plansTranslator`), so neither web surface can drift from the phone's
 * `PlansScreen` — the phone says all of it already, and a `dash.*` or `home.*`
 * twin would be the same sentence in two packs with only one of them ever
 * edited again (`.claude/rules/i18n.md`). It lived in `apps/dashboard` until
 * the site needed the same table (2026-10-04); a second copy is how the site's
 * feature grid came to disagree with the plan it was selling.
 *
 * One `<tbody>` per group, headed by the group's title: the phone draws each
 * group as a card with a tagline, and the same five headings over the same rows
 * is what keeps a parent reading this on a laptop and paying on the phone
 * looking at one argument, not two.
 */
export default function PlanComparison({ t }) {
  return (
    <div className="plan-compare">
      <table>
        <thead>
          <tr>
            <th />
            <th>{t('plans.compareColumnFree')}</th>
            <th className="is-premium">{t('plans.compareColumnPremium')}</th>
          </tr>
        </thead>
        {groupPlanComparisonRows().map(section => (
          <tbody key={section.id}>
            <tr className="plan-compare-group">
              <th scope="rowgroup" colSpan={3}>
                {t(section.titleKey)}
              </th>
            </tr>
            {section.rows.map(row => (
              <tr key={row.id}>
                <th scope="row" className={row.highlight ? 'is-highlight' : undefined}>
                  {t(row.labelKey)}
                </th>
                {/* A dash on the free side, a tick on the paid one — the
                    module says why null means those two different things. */}
                <td className="is-free">{row.freeKey ? t(row.freeKey) : '—'}</td>
                <td>
                  {row.premiumKey ? t(row.premiumKey) : <Icon name="check" size={14} />}
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
      <p className="plan-compare-included">{t('plans.compareIncluded')}</p>
      {/* The phone says this under the same table, so a parent comparing
          here and paying there reads one caveat rather than two. */}
      <p className="plan-compare-included">{t('plans.featureFootnotePlatforms')}</p>
    </div>
  );
}
