import { useContext } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { WriteLockContext } from './writeLock.js';

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
  const lock = useContext(WriteLockContext);
  // Held by the write gate rather than by a write in flight: it stays
  // pressable, and a press opens the unlock sheet instead of doing nothing.
  const askUnlock = Boolean(disabled && lock?.locked);
  return (
    <button
      className={`toggle${on ? ' is-on' : ''}`}
      onClick={() => {
        if (askUnlock) lock.requestUnlock();
        else if (!disabled) onChange(!on);
      }}
      role="switch"
      aria-checked={on}
      aria-label={label}
      aria-disabled={disabled || undefined}
      disabled={disabled && !askUnlock}
      title={disabled ? t('dash.unlockToChange') : undefined}
    >
      <i />
    </button>
  );
}
