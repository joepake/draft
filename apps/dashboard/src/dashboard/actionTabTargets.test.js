import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * A grid card opens the panel `ACTION_TAB` names and focuses the card whose
 * `id` is the action's (`apps/dashboard/CLAUDE.md`, "A grid card points at ITS
 * card"). Read from source: the panels are JSX blocks in `Dashboard.jsx`, and
 * the Controls panel is `ControlsTab`.
 *
 * Daily Limit pointed at the Screen panel, whose Today card carried the id and
 * edits nothing, so the hub's "Edit limit" opened a page with no editor while
 * the slider and the child's budget sat on Controls (2026-10-29).
 */
const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const CONTROL_CENTER = read('./ControlCenter.jsx');
const CONTROLS_TAB = read('./ControlsTab.jsx');
const DASHBOARD = read('../pages/Dashboard.jsx');

const mapStart = CONTROL_CENTER.indexOf('export const ACTION_TAB');
const ACTION_TAB = Object.fromEntries(
  [
    ...CONTROL_CENTER.slice(mapStart, CONTROL_CENTER.indexOf('};', mapStart)).matchAll(
      /'?([a-z-]+)'?:\s*'([a-z]+)'/g,
    ),
  ].map(match => [match[1], match[2]]),
);

/* Cards drawn by a component inside a panel; `place-alerts` is a div in it. */
const NESTED = { PlacesEditor: read('./PlacesEditor.jsx') };

function panelSource(tab) {
  if (tab === 'controls') return CONTROLS_TAB;
  const start = DASHBOARD.indexOf(`tab === '${tab}' &&`);
  if (start === -1) return '';
  const next = DASHBOARD.indexOf("tab === '", start + 1);
  const own = DASHBOARD.slice(start, next === -1 ? undefined : next);
  return Object.entries(NESTED)
    .filter(([name]) => own.includes(`<${name}`))
    .reduce((source, [, nested]) => source + nested, own);
}

describe('ACTION_TAB lands on the card it names', () => {
  it('reads the map', () => {
    expect(Object.keys(ACTION_TAB).length).toBeGreaterThan(5);
  });

  it.each(Object.entries(ACTION_TAB))(
    '%s has its id on the %s panel',
    (action, tab) => {
      expect(panelSource(tab)).toContain(`id="${action}"`);
    },
  );

  it('opens Daily Limit on the card that edits it', () => {
    const start = CONTROLS_TAB.indexOf('id="daily-limit"');
    const card = CONTROLS_TAB.slice(start, CONTROLS_TAB.indexOf('<Card', start));
    expect(card).toContain('<ChildBudgetEditor');
  });
});
