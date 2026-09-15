import { useState } from 'react';
import Toggle from './Toggle.jsx';
import { useActivityTranslate } from './activityCopy.js';
import { isDarkPreferred, setDarkPreference } from '../lib/theme.js';

/**
 * Dark mode, said the way the phone says it.
 *
 * The sentence is the **app** pack's `settings.darkModeLabel` through
 * `activityT` — the phone already names this setting in all fourteen
 * languages, so a `dash.*` twin would be one string in two packs
 * (`.claude/rules/i18n.md`).
 *
 * State is local and write-through: `setDarkPreference` repaints `:root`
 * immediately, and every colour on this surface is a `var(--kg-…)`, so
 * nothing else re-renders to follow it.
 */
export default function ThemeToggle() {
  const activityT = useActivityTranslate();
  const [dark, setDark] = useState(isDarkPreferred);
  const label = activityT('settings.darkModeLabel');

  return (
    <div className="side-account-row">
      <span className="side-account-theme">{label}</span>
      <Toggle
        on={dark}
        label={label}
        onChange={next => {
          setDarkPreference(next);
          setDark(next);
        }}
      />
    </div>
  );
}
