import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import {
  APP_LIMIT_MAX_MINUTES,
  APP_LIMIT_MIN_MINUTES,
  MAX_APP_LIMITS,
} from '@kidgate/schema/deviceControls';
import { clampAppLimitMinutes } from '@kidgate/core/domain/appLimits';
import { formatMinutes } from './charts.jsx';

/** Round numbers a parent actually thinks in, the phone screen's own list. */
const MINUTE_PRESETS = [15, 30, 45, 60, 90, 120];

/**
 * Per-app caps, editable.
 *
 * Per-device on purpose and never routed through `updateChildRules`: the list
 * is package names that exist on one machine (`docs/CHILD_HUB.md`). Enforced
 * independently of `appBlockingEnabled` — "30 minutes of TikTok" is a
 * different decision from "no TikTok".
 *
 * The bounds come from `@kidgate/schema/deviceControls` and the clamp from
 * `@kidgate/core/domain/appLimits`, shared with `AppLimitsScreen` since
 * 2026-09-03. `APP_LIMIT_MAX_MINUTES` is a platform contract, not a
 * preference: Apple caps events per DeviceActivity activity, so a screen
 * clamping to its own number writes a limit iOS silently stops enforcing —
 * for every app, not just that one.
 *
 * **Candidates are what the device actually reported.** There is no app picker
 * on the web and there must not be a typed package name: a parent guessing
 * `com.tiktok` writes a limit that matches nothing and reads as a limit that
 * is not working.
 */
/*
 * `appT` reads the APP key space through `@kidgate/i18n/activityFeed`, the
 * same door the activity feed uses. Every label here already exists on the
 * phone in fourteen languages; copying those sentences into `dash.*` would put
 * one sentence in two packs, and only one of them would be edited next time.
 * `t` stays for the handful this surface says and the phone does not.
 */
export default function AppLimitsEditor({
  limits,
  candidates,
  readOnly,
  busy,
  onSave,
}) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const [draft, setDraft] = useState(() => limits.map(l => ({ ...l })));
  const [adding, setAdding] = useState(false);

  // Re-seeded from the document, like every other optimistic control here: the
  // other parent's phone writes the same field.
  const stored = JSON.stringify(limits);
  useEffect(() => {
    setDraft(JSON.parse(stored));
  }, [stored]);

  const commit = async next => {
    setDraft(next);
    if (readOnly) return;
    const ok = await onSave(next);
    if (!ok) setDraft(limits.map(l => ({ ...l })));
  };

  const setMinutes = (id, minutes) =>
    commit(
      draft.map(limit =>
        limit.id === id ? { ...limit, minutes: clampAppLimitMinutes(minutes) } : limit,
      ),
    );

  const limited = new Set(draft.map(l => l.id));
  const addable = candidates.filter(app => !limited.has(app.id));
  const full = draft.length >= MAX_APP_LIMITS;

  return (
    <div className="limits-editor">
      {draft.length === 0 && <p className="empty">{appT('appLimits.emptyTitle')}</p>}

      {draft.map(limit => (
        <div key={limit.id} className="limit-row">
          <span className="limit-name">{limit.label}</span>

          <div className="limit-controls">
            <button
              disabled={readOnly || busy || limit.minutes <= APP_LIMIT_MIN_MINUTES}
              aria-label={appT('appLimits.decreaseAccessibility', { app: limit.label })}
              onClick={() => setMinutes(limit.id, limit.minutes - 15)}
            >
              <Icon name="minus" size={14} />
            </button>
            <span className="limit-value">{formatMinutes(limit.minutes)}</span>
            <button
              disabled={readOnly || busy || limit.minutes >= APP_LIMIT_MAX_MINUTES}
              aria-label={appT('appLimits.increaseAccessibility', { app: limit.label })}
              onClick={() => setMinutes(limit.id, limit.minutes + 15)}
            >
              <Icon name="plus" size={14} />
            </button>
            <button
              className="limit-remove"
              disabled={readOnly || busy}
              aria-label={appT('appLimits.removeAccessibility', { app: limit.label })}
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() => commit(draft.filter(l => l.id !== limit.id))}
            >
              <Icon name="trash" size={14} />
            </button>
          </div>

          <ul className="chips chips-toggle limit-presets">
            {MINUTE_PRESETS.map(minutes => (
              <li key={minutes} className={limit.minutes === minutes ? 'is-on' : ''}>
                <button
                  disabled={readOnly || busy}
                  aria-pressed={limit.minutes === minutes}
                  onClick={() => setMinutes(limit.id, minutes)}
                >
                  {formatMinutes(minutes)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {adding && addable.length > 0 && (
        <ul className="chips limit-add-list">
          {addable.map(app => (
            <li key={app.id}>
              <button
                disabled={busy}
                onClick={() => {
                  setAdding(false);
                  commit([...draft, { id: app.id, label: app.label, minutes: 60 }]);
                }}
              >
                {app.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        className="btn btn-sm"
        disabled={readOnly || busy || full || addable.length === 0}
        title={
          readOnly
            ? t('dash.unlockToChange')
            : full
              ? t('dash.limitsMax', { max: MAX_APP_LIMITS })
              : addable.length === 0
                ? appT('appLimits.noUsageYet')
                : undefined
        }
        onClick={() => setAdding(value => !value)}
      >
        {appT('appLimits.addSectionTitle')}
      </button>
    </div>
  );
}
