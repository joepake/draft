import { useEffect, useMemo, useRef, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { readGuideSteps } from '@kidgate/core/domain/userGuide';
import { buildUserGuideSearchIndex } from '@kidgate/core/domain/userGuideSearch';
import { deviceIconName } from './deviceIcon.js';
import { buildSearchSections } from './searchSections.js';
import { Highlighted, TopicRow, useUserGuidePack } from './UserGuide.jsx';

/**
 * One box over what a parent looks for: a child, a device, a card, a guide
 * topic, a page — the phone's Family search (`FamilySearchScreen`), as this
 * surface's one modal shape (`.sheet`). Opened from the header on every page,
 * or Ctrl/⌘ K.
 *
 * **The rows are the phone's.** Which cards exist is
 * `@kidgate/core/domain/deviceDetailActions`, the matching and the bold are
 * `userGuideSearch`, every word is the app pack's through `appT` — the phone
 * says all of it already, so there is no `dash.*` key here. What matches is
 * `searchSections.js`; where a row lands is the page's (`open`), since
 * `Dashboard.jsx` owns the navigation state.
 *
 * What the phone lists and this does not: "Ring device" and the SOS recording.
 * This surface has neither control, and a row that opens a page without the
 * thing on it is worse than no row.
 */
export default function SearchSheet({ appT, familyChildren, devices, open, onClose }) {
  const { t } = useT();
  const guide = useUserGuidePack();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Typing is the only thing a parent opens this to do.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const guideIndex = useMemo(
    () =>
      guide
        ? buildUserGuideSearchIndex(guide.t, id => readGuideSteps(guide.guide, id))
        : [],
    [guide],
  );

  const sections = buildSearchSections({
    appT,
    guide,
    guideIndex,
    familyChildren,
    devices,
    query,
    deviceIcon: deviceIconName,
    open,
  });
  const firstRow = sections[0]?.rows[0];

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div
        className="sheet sheet-search"
        role="dialog"
        aria-modal="true"
        aria-label={appT('family.searchTitle')}
        onClick={event => event.stopPropagation()}
      >
        <div className="sheet-head">
          <h2 className="sheet-title">{appT('family.searchTitle')}</h2>
          <button className="login-link" onClick={onClose}>
            {t('dash.close')}
          </button>
        </div>
        <input
          ref={inputRef}
          type="search"
          className="reward-input"
          value={query}
          placeholder={appT('family.searchPlaceholder')}
          aria-label={appT('family.searchPlaceholder')}
          onChange={event => setQuery(event.target.value)}
          // Enter opens the top result: the one a parent typed towards.
          onKeyDown={event => {
            if (event.key === 'Enter' && firstRow) firstRow.open();
          }}
        />
        {sections.length === 0 ? (
          <p className="empty">{appT('family.searchEmpty')}</p>
        ) : (
          sections.map(section => (
            <section key={section.id} className="search-section">
              <h3 className="search-section-title">{section.title}</h3>
              <ul className="guide-topics">
                {section.rows.map(row => (
                  <TopicRow
                    key={row.key}
                    icon={row.icon}
                    title={
                      <Highlighted
                        text={row.title}
                        query={query}
                        phraseOnly={row.phraseOnly}
                      />
                    }
                    subtitle={
                      row.subtitle ? (
                        <Highlighted
                          text={row.subtitle}
                          query={query}
                          phraseOnly={row.phraseOnly}
                        />
                      ) : null
                    }
                    onOpen={row.open}
                  />
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
