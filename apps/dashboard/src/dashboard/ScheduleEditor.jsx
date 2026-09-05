import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import {
  MAX_SCHEDULE_WINDOWS,
  findOverlappingScheduleWindowPairs,
  normalizeScheduleWindows,
} from '@kidgate/core/domain/scheduleWindow';

const DAY_INDEXES = [0, 1, 2, 3, 4, 5, 6];
const ALL_DAYS = [0, 1, 2, 3, 4, 5, 6];

/**
 * Blocked-hours windows, editable.
 *
 * Everything that decides what a window *means* comes from
 * `@kidgate/core/domain/scheduleWindow` — the cap, the overlap pairs, and the
 * normalisation that drops `days` for an every-day window so the stored shape
 * stays byte-identical to what the phone writes. An editor that re-derived any
 * of it would be the second opinion `firestore.rules` and the native policy
 * diff have to agree with, and the phone is already the first.
 *
 * The phone's screen (`BlockedHoursScreen`) is the reference for behaviour, and
 * two of its decisions are copied here rather than re-argued:
 *
 *  - **Overlap is advisory, never blocking.** Two overlapping windows both
 *    apply correctly — `isWithinAnyScheduleWindow` is a `.some()` — so this is
 *    redundancy a parent may not have noticed, not an error to refuse.
 *  - **A window with no valid times is refused**, because `normalizeScheduleWindows`
 *    drops it silently and a parent would watch their row vanish on reload.
 */
/*
 * `appT` reads the APP key space through `@kidgate/i18n/activityFeed`, the
 * same door the activity feed uses. Every label here already exists on the
 * phone in fourteen languages; copying those sentences into `dash.*` would put
 * one sentence in two packs, and only one of them would be edited next time.
 * `t` stays for the handful this surface says and the phone does not.
 */
export default function ScheduleEditor({ windows, readOnly, busy, onSave }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const [draft, setDraft] = useState(() => windows.map(w => ({ ...w })));
  const [error, setError] = useState(null);

  /*
   * Re-seed from the document, but only while the parent is not mid-edit.
   * The listener re-delivers on every change — including this browser's own
   * write — and a draft replaced under a half-typed time is how an editor
   * loses a keystroke.
   */
  const stored = JSON.stringify(windows);
  useEffect(() => {
    setDraft(JSON.parse(stored));
  }, [stored]);

  const overlapping = new Set(findOverlappingScheduleWindowPairs(draft).flat());

  /**
   * Write only when something actually differs from the stored list.
   *
   * The time inputs commit on blur, and tabbing through a row that nobody
   * edited used to send one Cloud Function write per field — each an
   * optimistic round trip that can raise a toast about a change the parent did
   * not make. Compared against the document rather than against a dirty flag:
   * the listener re-seeds this draft, so "same as stored" is the only question
   * worth asking.
   */
  const commit = async next => {
    setDraft(next);
    if (readOnly) return;
    if (JSON.stringify(next) === stored) return;

    const normalized = normalizeScheduleWindows(next);
    // An empty list is a real answer — the parent removed the last window —
    // and `null` means the same thing to the server. What must not pass is a
    // list that lost rows on the way through.
    if (next.length > 0 && (normalized?.length ?? 0) !== next.length) {
      setError(appT('blockedHours.errorInvalidTimes'));
      return;
    }
    setError(null);
    const ok = await onSave(normalized ?? []);
    if (!ok) {
      setDraft(windows.map(w => ({ ...w })));
    }
  };

  const setWindow = (index, patch) =>
    draft.map((w, i) => (i === index ? { ...w, ...patch } : w));

  const toggleDay = (index, day) => {
    const current = draft[index].days?.length ? draft[index].days : ALL_DAYS;
    const next = current.includes(day)
      ? current.filter(d => d !== day)
      : [...current, day].sort((a, b) => a - b);
    /*
     * Unticking the LAST day does nothing — the phone's answer
     * (`BlockedHoursScreen`, "if (next.length === 0) return window").
     *
     * It cannot be allowed through, and an error message is not the fix
     * either. `normalizeScheduleDays` folds an empty list to `null`, which the
     * schema documents as **every day** — so writing it would turn a
     * Monday-only window into an all-week one, widening a block at the exact
     * moment the parent was narrowing it. Two earlier versions of this editor
     * got it wrong in both directions: first a refusal the phone does not
     * have, then the silent widening.
     */
    if (next.length === 0) {
      return;
    }
    setError(null);
    commit(setWindow(index, { days: next }));
  };

  return (
    <div className="sched-editor">
      {draft.map((window, index) => (
        <div
          key={index}
          className={`sched-edit-row${overlapping.has(index) ? ' is-overlap' : ''}`}
        >
          <div className="sched-times">
            <label>
              <span>{appT('blockedHours.timeStartLabel')}</span>
              <input
                type="time"
                value={window.start}
                disabled={readOnly || busy}
                onChange={event =>
                  setDraft(setWindow(index, { start: event.target.value }))
                }
                /* Committed on release, never per keystroke: a `time` input
                   reports a half-typed value as an empty string, and writing
                   that is a window the parent never asked for. */
                onBlur={() => commit(draft)}
              />
            </label>
            <label>
              <span>{appT('blockedHours.timeEndLabel')}</span>
              <input
                type="time"
                value={window.end}
                disabled={readOnly || busy}
                onChange={event =>
                  setDraft(setWindow(index, { end: event.target.value }))
                }
                onBlur={() => commit(draft)}
              />
            </label>
            <button
              className="sched-remove"
              disabled={readOnly || busy}
              aria-label={appT('blockedHours.removeButton')}
              title={
                readOnly ? t('dash.unlockToChange') : appT('blockedHours.removeButton')
              }
              onClick={() => commit(draft.filter((_, i) => i !== index))}
            >
              <Icon name="trash" size={15} />
            </button>
          </div>

          <ul className="chips chips-toggle sched-days">
            {DAY_INDEXES.map(day => {
              const on = window.days?.length ? window.days.includes(day) : true;
              return (
                <li key={day} className={on ? 'is-on' : ''}>
                  <button
                    disabled={readOnly || busy}
                    aria-pressed={on}
                    title={readOnly ? t('dash.unlockToChange') : undefined}
                    onClick={() => toggleDay(index, day)}
                  >
                    {t(`viz.day${day}`)}
                  </button>
                </li>
              );
            })}
          </ul>

          {overlapping.has(index) && (
            <p className="hint">{appT('blockedHours.overlapWarning')}</p>
          )}
        </div>
      ))}

      {error && <p className="sched-error">{error}</p>}

      <button
        className="btn btn-sm"
        disabled={readOnly || busy || draft.length >= MAX_SCHEDULE_WINDOWS}
        title={
          readOnly
            ? t('dash.unlockToChange')
            : draft.length >= MAX_SCHEDULE_WINDOWS
              ? t('dash.schedMax', { max: MAX_SCHEDULE_WINDOWS })
              : undefined
        }
        onClick={() => commit([...draft, { start: '21:00', end: '07:00' }])}
      >
        {appT('blockedHours.addBlockedTime')}
      </button>
    </div>
  );
}
