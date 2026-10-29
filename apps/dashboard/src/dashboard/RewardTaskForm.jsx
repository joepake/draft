import { useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import {
  REWARD_MAX_MINUTES,
  REWARD_MIN_MINUTES,
  REWARD_TITLE_MAX_LENGTH,
} from '@kidgate/schema/rewardTask';
import { defaultStarsForMinutes } from '@kidgate/core/domain/rewardTasks';

/** A preference, not a contract — the phone's modal offers the same three. */
const MINUTE_PRESETS = [10, 30, 60];
/** The phone's modal opens on the same 30. */
const DEFAULT_MINUTES = 30;
/** The phone's three levels, `RewardTaskFormModal`'s `STAR_OPTIONS`. */
const STAR_OPTIONS = [
  { value: 1, labelKey: 'rewardTask.starsEasy' },
  { value: 2, labelKey: 'rewardTask.starsMedium' },
  { value: 3, labelKey: 'rewardTask.starsHard' },
];

/**
 * Creating a reward task from the web.
 *
 * The dashboard could resolve a claim since it was written and could never
 * write the task being claimed, which left the whole feature half-usable from
 * here: a parent could say yes to a chore they had to open the phone to set.
 *
 * Bounds come from `@kidgate/schema/rewardTask` — the same three the server
 * enforces in `functions/http/rewardTasks.js`. They are checked before the post
 * only to spare a round trip; **the server rejects rather than clamps**, so a
 * client that silently trimmed 300 to 240 would be showing a number the family
 * never chose.
 *
 * Difficulty is the phone's picker: it follows the minutes through
 * `defaultStarsForMinutes`, as the server does for a body without stars, until
 * the parent picks one. This form sent the derived band only, so a task set
 * "Hard" on the phone could not be set from here (2026-10-29).
 */
/*
 * `appT` reads the APP key space through `@kidgate/i18n/activityFeed`, the
 * same door the activity feed uses. Every label here already exists on the
 * phone in fourteen languages; copying those sentences into `dash.*` would put
 * one sentence in two packs, and only one of them would be edited next time.
 * `t` stays for the handful this surface says and the phone does not.
 */
export default function RewardTaskForm({ device, readOnly, busy, onCreate }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [minutes, setMinutes] = useState(DEFAULT_MINUTES);
  const [daily, setDaily] = useState(false);
  const [pickedStars, setPickedStars] = useState(null);
  const stars = pickedStars ?? defaultStarsForMinutes(minutes);

  const trimmed = title.trim();
  const valid =
    trimmed.length > 0 &&
    trimmed.length <= REWARD_TITLE_MAX_LENGTH &&
    minutes >= REWARD_MIN_MINUTES &&
    minutes <= REWARD_MAX_MINUTES;

  if (!open) {
    return (
      <button
        className="btn btn-sm reward-add"
        disabled={readOnly}
        title={readOnly ? t('dash.unlockToChange') : undefined}
        onClick={() => setOpen(true)}
      >
        {appT('rewardTask.newTask')}
      </button>
    );
  }

  const submit = async event => {
    event.preventDefault();
    if (!valid || busy) return;
    const ok = await onCreate({
      // Child-level when the device is assigned: the task is given to the
      // person and claimable on any of their capable devices. The repository
      // says `childId` outranks `deviceId` when both are sent, and both are —
      // an unassigned device has only the second.
      ...(device.childId
        ? { childId: device.childId, childName: device.child?.name ?? '' }
        : {}),
      deviceId: device.id,
      deviceName: device.name,
      title: trimmed,
      bonusMinutes: minutes,
      stars,
      repeat: daily ? 'daily' : 'once',
    });
    if (ok) {
      setTitle('');
      setMinutes(DEFAULT_MINUTES);
      setDaily(false);
      setPickedStars(null);
      setOpen(false);
    }
  };

  return (
    <form className="reward-form" onSubmit={submit}>
      {/* Read, not drawn — the phone's form shows no label over this field
          either; the placeholder says what to type. */}
      <label className="sr-only" htmlFor="reward-title">
        {appT('rewardTask.titleLabel')}
      </label>
      <input
        id="reward-title"
        className="reward-input"
        // The form opens from "New task" or a row's edit: the title is what
        // the parent came to type, so the field is ready for it.
        autoFocus
        value={title}
        maxLength={REWARD_TITLE_MAX_LENGTH}
        disabled={busy}
        placeholder={appT('rewardTask.titlePlaceholder')}
        onChange={event => setTitle(event.target.value)}
      />

      <ul className="chips chips-toggle">
        {MINUTE_PRESETS.map(value => (
          <li key={value} className={minutes === value ? 'is-on' : ''}>
            <button
              type="button"
              disabled={busy}
              aria-pressed={minutes === value}
              onClick={() => setMinutes(value)}
            >
              {appT('rewardTask.plusMinutes', { minutes: value })}
            </button>
          </li>
        ))}
      </ul>

      <ul className="chips chips-toggle" aria-label={appT('rewardTask.starsLabel')}>
        {STAR_OPTIONS.map(option => (
          <li key={option.value} className={stars === option.value ? 'is-on' : ''}>
            <button
              type="button"
              disabled={busy}
              aria-pressed={stars === option.value}
              onClick={() => setPickedStars(option.value)}
            >
              {appT(option.labelKey)}
            </button>
          </li>
        ))}
      </ul>
      {/* The phone's hint: the stars the child collects for this level. */}
      <p
        className="hint reward-stars-hint"
        aria-label={`${appT('rewardTask.starsA11y', { count: stars })}. ${appT(
          'rewardTask.starsHint',
        )}`}
      >
        <span className="reward-stars" aria-hidden="true">
          {Array.from({ length: stars }, (_, index) => (
            <Icon key={index} name="star" size={11} />
          ))}
        </span>
        <span>{appT('rewardTask.starsHint')}</span>
      </p>

      <label className="reward-repeat">
        <input
          type="checkbox"
          checked={daily}
          disabled={busy}
          onChange={event => setDaily(event.target.checked)}
        />
        <span>{appT('rewardTask.repeatDaily')}</span>
      </label>

      <div className="reward-actions">
        <button type="button" className="login-link" onClick={() => setOpen(false)}>
          {t('dash.close')}
        </button>
        <button
          className="btn btn-sm btn-primary"
          type="submit"
          disabled={!valid || busy}
        >
          {busy ? t('dash.working') : appT('rewardTask.createTask')}
        </button>
      </div>
    </form>
  );
}
