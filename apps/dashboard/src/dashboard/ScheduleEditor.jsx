import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import {
  MAX_SCHEDULE_WINDOWS,
  findOverlappingScheduleWindowPairs,
  formatMinutesAsTime,
  isOvernightScheduleWindow,
  normalizeScheduleDays,
  normalizeScheduleWindows,
  scheduleWeekSegments,
  scheduleWindowRunsEveryDay,
} from '@kidgate/core/domain/scheduleWindow';
import {
  SCHEDULE_DAY_PRESETS,
  SCHEDULE_QUICK_WINDOWS,
} from '@kidgate/core/domain/scheduleWindowCopy';

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

  /* The phone's `dayKey`: compared through the normalizer so "all seven
     ticked" and "no days field" — the same schedule written two ways — do not
     read as two different presets. */
  const dayKey = window => (normalizeScheduleDays(window.days) ?? []).join(',');

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

          <div className="sched-days-head">
            <span className="sched-days-label">{appT('blockedHours.daysLabel')}</span>
            {/* The phone's presets, off the shared table — "School nights" is
                Sun–Thu there because an overnight window is stamped by the
                night it starts on, and a second hand-typed copy here is how
                the two consoles come to mean different nights. */}
            <ul className="chips chips-toggle">
              {SCHEDULE_DAY_PRESETS.map(preset => {
                const active = dayKey(window) === dayKey({ days: preset.days });
                return (
                  <li key={preset.labelKey} className={active ? 'is-on' : ''}>
                    <button
                      disabled={readOnly || busy}
                      aria-pressed={active}
                      title={readOnly ? t('dash.unlockToChange') : undefined}
                      onClick={() => commit(setWindow(index, { days: preset.days }))}
                    >
                      {appT(preset.labelKey)}
                    </button>
                  </li>
                );
              })}
            </ul>
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

          {/* The one rule that is not guessable from the chips: an overnight
              window is stamped by the day it *starts*, so picking Friday blocks
              Friday night into Saturday. Said only where it changes something —
              an every-day window has no day to be surprised about. */}
          {isOvernightScheduleWindow(window) && !scheduleWindowRunsEveryDay(window) && (
            <p className="hint">{appT('blockedHours.daysOvernightHint')}</p>
          )}

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

      {/* Quick add is the same three windows the phone offers, label included:
          the label is stored as text, so it is rendered here and passed through
          rather than kept as a key. */}
      <div className="sched-quick">
        <p className="sched-quick-title">{appT('blockedHours.quickAddTitle')}</p>
        <ul className="chips chips-toggle">
          {SCHEDULE_QUICK_WINDOWS.map(preset => (
            <li key={preset.labelKey}>
              <button
                disabled={readOnly || busy || draft.length >= MAX_SCHEDULE_WINDOWS}
                title={
                  readOnly
                    ? t('dash.unlockToChange')
                    : draft.length >= MAX_SCHEDULE_WINDOWS
                      ? t('dash.schedMax', { max: MAX_SCHEDULE_WINDOWS })
                      : undefined
                }
                onClick={() =>
                  commit([...draft, { ...preset.window, label: appT(preset.labelKey) }])
                }
              >
                {appT(preset.labelKey)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <WeekStrip
        windows={draft}
        title={appT('blockedHours.weekPreviewTitle')}
        emptyLabel={appT('blockedHours.off')}
        dayLabel={day => t(`viz.day${day}`)}
      />
    </div>
  );
}

const MINUTES_IN_DAY = 1440;
const TICK_HOURS = [0, 6, 12, 18, 24];

/**
 * The week the windows above actually produce — seven 24h rows, read-only.
 *
 * The phone's `WeekScheduleStrip` drawn for a browser, off the same
 * `scheduleWeekSegments`. It exists because `days` is stamped by the night a
 * window *starts* on, so a Friday curfew blocks Saturday morning on a day whose
 * chip is not ticked, and no arrangement of chips and time inputs can show that.
 *
 * Sunday-first and `viz.day*`, matching the chips directly above it on this
 * screen — the phone's picker is Monday-first and the two surfaces have always
 * differed here. Copying the phone's order into this one component would leave
 * the strip and the chips it sits under disagreeing, which is worse.
 *
 * Percentages rather than a measured width: CSS resolves them per row, so the
 * browser needs none of the `onLayout` arithmetic React Native does.
 */
function WeekStrip({ windows, title, emptyLabel, dayLabel }) {
  const week = scheduleWeekSegments(windows);

  return (
    <div className="sched-week">
      <p className="sched-week-title">{title}</p>

      <div className="sched-week-hours">
        <span />
        <span>
          {TICK_HOURS.map(hour => (
            <span key={hour}>{hour}</span>
          ))}
        </span>
      </div>

      {DAY_INDEXES.map(day => {
        const segments = week[day] ?? [];
        /* A bar carries no text, so the ranges are all a screen reader has. */
        const spoken = segments.length
          ? segments
              .map(
                segment =>
                  `${formatMinutesAsTime(segment.startMinutes)}–${formatMinutesAsTime(segment.endMinutes)}`,
              )
              .join(', ')
          : emptyLabel;

        return (
          <div
            className="sched-week-row"
            key={day}
            aria-label={`${dayLabel(day)}: ${spoken}`}
          >
            <span className="sched-week-day">{dayLabel(day)}</span>
            <span className="sched-week-track">
              {segments.map(segment => (
                <span
                  key={segment.startMinutes}
                  className="sched-week-run"
                  style={{
                    left: `${(segment.startMinutes / MINUTES_IN_DAY) * 100}%`,
                    width: `${((segment.endMinutes - segment.startMinutes) / MINUTES_IN_DAY) * 100}%`,
                  }}
                />
              ))}
            </span>
          </div>
        );
      })}
    </div>
  );
}
