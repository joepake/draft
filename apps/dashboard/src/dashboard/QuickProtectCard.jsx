import { useMemo, useState } from 'react';
import { useActivityTranslate } from './activityCopy.js';
import {
  STARTER_DAILY_LIMIT_MINUTES,
  buildQuickProtectRules,
  quickProtectRowPlan,
  quickProtectSources,
} from '@kidgate/core/domain/quickProtect';
import Toggle from './Toggle.jsx';

/** Every switch starts on: the card is an offer to protect, not a form. */
const ALL_ON = {
  bedtime: true,
  dailyLimit: true,
  webFilter: true,
  location: true,
  videoHistory: true,
};

/**
 * "Protect {{child}} now?" on the web — the phone's `QuickProtectSheet`, minus
 * the pairing hand-off this surface does not have.
 *
 * The phone attaches the starter set to a fresh pairing, which is the moment
 * the parent is holding the child's device. There is no such moment here
 * (`docs/BACKLOG.md`, "The web cannot add a device"), so the trigger is the
 * state instead of the event: an assigned child with none of the five rules on
 * has never been protected, however they were paired.
 *
 * **Every sentence is the app pack's, through `activityT`** — the phone says
 * all of this already, and a `dash.*` twin is one sentence in two packs with
 * only one of them edited next time (`.claude/rules/i18n.md`).
 */
export default function QuickProtectCard({
  child,
  siblings = [],
  canUsePremiumControls = true,
  disabled = false,
  onApply,
}) {
  const activityT = useActivityTranslate();

  const sources = useMemo(
    () => quickProtectSources(child?.id, siblings),
    [child?.id, siblings],
  );

  const [state, setState] = useState(ALL_ON);
  const [sourceId, setSourceId] = useState(null);
  const [busy, setBusy] = useState(false);

  const source = useMemo(
    () => sources.find(entry => entry.id === sourceId) ?? null,
    [sourceId, sources],
  );

  /**
   * The rows to draw — everything off, plus everything the picked source would
   * replace (`@kidgate/core/domain/quickProtect`). Reading "already on" alone
   * emptied the card for a protected child while the chip row still offered to
   * copy a sibling over rules it never showed.
   */
  const plan = useMemo(
    () => quickProtectRowPlan(child?.rules, source?.rules),
    [child?.rules, source?.rules],
  );

  /** The minutes the budget row offers: the sibling's own, else the starter. */
  const starterMinutes =
    source?.rules?.dailyLimitMinutes ?? STARTER_DAILY_LIMIT_MINUTES;

  /**
   * A row standing in for a rule the child already holds says so, next to the
   * value taking its place: without it the switch reads "turn on" over a write
   * that replaces the parent's own hours.
   */
  const withReplaces = (hint, replaces) =>
    replaces
      ? `${hint} ${activityT('family.quickProtectReplaces', {
          childName: child?.name ?? '',
        })}`
      : hint;

  const rows = plan.map(({ key, replaces }) => {
    if (key === 'bedtime') {
      return {
        key,
        label: activityT('family.quickProtectBedtime'),
        // The default hint names 10 PM–7 AM in its own sentence, which stops
        // being true the moment a sibling's window is what gets written.
        hint: withReplaces(
          source?.rules?.scheduleWindows?.length
            ? source.rules.scheduleWindows
                .map(window => `${window.start}–${window.end}`)
                .join(', ')
            : activityT('family.quickProtectBedtimeHint'),
          replaces,
        ),
        premium: false,
      };
    }
    if (key === 'dailyLimit') {
      return {
        key,
        label: activityT('family.quickProtectDailyLimit'),
        hint: withReplaces(
          activityT('family.quickProtectDailyLimitHint', {
            minutes: starterMinutes,
          }),
          replaces,
        ),
        premium: false,
      };
    }
    if (key === 'webFilter') {
      return {
        key,
        label: activityT('family.quickProtectWebFilter'),
        // Counted rather than described: an older child's approved list on a
        // younger child is the one part of a copy a parent could not have
        // predicted from the row label.
        hint: !canUsePremiumControls
          ? activityT('family.quickProtectWebFilterPremium')
          : withReplaces(
              source
                ? activityT('family.quickProtectWebFilterCopyHint', {
                    childName: source.name,
                    allowed: source.rules?.webFilterAllowList?.length ?? 0,
                    blocked: source.rules?.webFilterBlockList?.length ?? 0,
                  })
                : activityT('family.quickProtectWebFilterHint'),
              replaces,
            ),
        premium: true,
      };
    }
    if (key === 'location') {
      return {
        key,
        label: activityT('deviceDetail.location'),
        hint: activityT('deviceDetail.seeLatestLocation'),
        premium: false,
      };
    }
    return {
      key,
      label: activityT('deviceDetail.videoHistory'),
      hint: canUsePremiumControls
        ? activityT('deviceDetail.videoHistoryDescription')
        : activityT('family.quickProtectWebFilterPremium'),
      premium: true,
    };
  });

  const apply = async () => {
    if (busy || disabled) {
      return;
    }
    // Only a key the parent could see decides anything — the builder derives
    // the plan again, so a switch left true under a hidden row cannot write.
    const { rules, dailyLimitMinutes: budget } = buildQuickProtectRules({
      childRules: child?.rules,
      sourceRules: source?.rules,
      picked: state,
      canUsePremiumControls,
    });
    if (Object.keys(rules).length === 0 && budget === null) {
      return;
    }
    setBusy(true);
    try {
      await onApply({ rules, budget });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <p className="hint">
        {source
          ? activityT('family.quickProtectSourceBody', {
              childName: source.name,
            })
          : rows.length === 0
            ? // Every rule already on and no source picked. Saying so beats a
              // chip row with nothing under it.
              activityT('family.quickProtectAllOnBody', {
                childName: child?.name ?? '',
              })
            : activityT('family.quickProtectBody')}
      </p>

      {/* `chips chips-toggle` is the same picker the schedule, budget, places
          and reward-task editors use — a sixth drawing of a pill row is how
          two cards on one screen come to disagree about what "picked" looks
          like. */}
      {sources.length > 0 && (
        <ul className="chips chips-toggle">
          {[null, ...sources].map(entry => {
            const selected = (entry?.id ?? null) === sourceId;
            const label = entry
              ? entry.name
              : activityT('family.quickProtectSourceDefault');
            return (
              <li key={entry?.id ?? 'default'}>
                <button
                  type="button"
                  className={selected ? 'is-on' : undefined}
                  aria-pressed={selected}
                  aria-label={activityT('family.quickProtectSourceLabel')}
                  disabled={busy || disabled}
                  onClick={() => setSourceId(entry?.id ?? null)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <ul className="ctrl-rows">
        {rows.map(row => {
          const locked = row.premium && !canUsePremiumControls;
          return (
            <li key={row.key}>
              <span className="ctrl-body">
                <strong>{row.label}</strong>
                <em>{row.hint}</em>
              </span>
              <Toggle
                on={locked ? false : state[row.key]}
                onChange={next =>
                  setState(previous => ({ ...previous, [row.key]: next }))
                }
                label={row.label}
                disabled={busy || disabled || locked}
              />
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="btn btn-primary"
        onClick={apply}
        // Nothing offered is nothing to turn on: a live button over an empty
        // list promises a change it cannot make.
        disabled={busy || disabled || rows.length === 0}
      >
        {activityT('family.quickProtectApply')}
      </button>
    </>
  );
}
