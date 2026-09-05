import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { formatMinutes } from './charts.jsx';

/**
 * Round numbers a parent thinks in. The phone's child hub offers the same set;
 * a preference, not a contract, so it lives per surface.
 */
const BUDGET_PRESETS = [30, 60, 90, 120, 180, 240];

/*
 * No new key and no crossing: every label here is a duration this file already
 * formats, and "No limit" is `report.noLimit`, already in the web pack.
 */

/**
 * The child's shared daily screen-time budget.
 *
 * One number for the person, not for a machine. The row above this one shows
 * `controls.dailyLimitMinutes` and is deliberately read-only — since
 * 2026-08-27 that field is the server's own allocation of this budget
 * (`deviceUsed + (budget − totalUsed)`), rewritten on every usage report, and
 * a parent who dragged it watched it jump back.
 *
 * Saving goes through `actions.setChildBudget`, which writes the child rule
 * **and** seeds every assigned device — `@kidgate/core/repositories/childRules`
 * holds the pair, so this surface cannot do half of it.
 */
export default function ChildBudgetEditor({ minutes, readOnly, busy, onSave }) {
  const { t } = useT();
  const [draft, setDraft] = useState(minutes);

  // The other parent's phone writes the same field.
  useEffect(() => {
    setDraft(minutes);
  }, [minutes]);

  const commit = async next => {
    setDraft(next);
    if (readOnly) return;
    const ok = await onSave(next);
    if (!ok) setDraft(minutes);
  };

  return (
    <div className="budget-editor">
      <ul className="chips chips-toggle">
        {BUDGET_PRESETS.map(value => (
          <li key={value} className={draft === value ? 'is-on' : ''}>
            <button
              disabled={readOnly || busy}
              aria-pressed={draft === value}
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() => commit(value)}
            >
              {formatMinutes(value)}
            </button>
          </li>
        ))}
        {/*
          Clearing is a real answer and the device slider has no zero — this is
          the only place a family can go back to "no budget".
        */}
        <li className={draft == null ? 'is-on' : ''}>
          <button
            disabled={readOnly || busy}
            aria-pressed={draft == null}
            title={readOnly ? t('dash.unlockToChange') : undefined}
            onClick={() => commit(null)}
          >
            {t('report.noLimit')}
          </button>
        </li>
      </ul>
    </div>
  );
}
