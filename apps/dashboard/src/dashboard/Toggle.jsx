import { useT } from '@kidgate/web-ui/useT';

/**
 * The dashboard's switch.
 *
 * Lifted out of `pages/Dashboard.jsx` on 2026-09-03, when the Message Alerts
 * card became the second surface that needed one. A second drawing of a switch
 * is how two rows on the same screen come to disagree about what "off" looks
 * like, and the `title` below is the only place a parent is told why a switch
 * will not move while the write gate is closed.
 */
export default function Toggle({ on, onChange, label, disabled }) {
  const { t } = useT();
  return (
    <button
      className={`toggle${on ? ' is-on' : ''}`}
      onClick={() => !disabled && onChange(!on)}
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      title={disabled ? t('dash.unlockToChange') : undefined}
    >
      <i />
    </button>
  );
}
