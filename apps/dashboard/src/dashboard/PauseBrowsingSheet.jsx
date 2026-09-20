import { useEffect, useRef } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { BROWSING_PAUSE_CHOICE_MINUTES } from '@kidgate/schema/deviceControls';

/**
 * How long to pause browsing for — the web half of the phone's three-option
 * alert (`apps/mobile/src/features/deviceDetail/useDeviceDetailScreen.ts`).
 *
 * Built on the step-up sheet's furniture (`.sheet-backdrop` / `.sheet`), as
 * `PlanCompareSheet` is, so this surface keeps one modal shape and this file
 * needs no CSS of its own. `.sheet` is a grid, so the three choices stack and
 * fill it without a layout of their own.
 *
 * **Every sentence is the app pack's, through `appT`** — the phone says all
 * three already, so there is no `dash.*` twin (`.claude/rules/i18n.md`). The
 * lengths are `@kidgate/schema`'s, so the two consoles cannot offer different
 * ones.
 *
 * Three plain buttons and no primary: they are equal choices, and a highlighted
 * one would recommend a length this surface knows nothing about.
 *
 * **With `resumeMinutes` it asks the opposite question instead** — the same
 * sheet, one button, because ending a pause is not reversible: the deadline
 * that was running is gone and the next pause starts from a length the parent
 * picks. One component rather than a second modal shape, so the two questions
 * cannot drift apart.
 */
export default function PauseBrowsingSheet({
  appT,
  onChoose,
  onClose,
  resumeMinutes = null,
  onResume,
}) {
  const { t } = useT();
  const closeRef = useRef(null);

  // Focus lands on the way out, as on the step-up and plan sheets.
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Escape closes: choosing nothing is the common answer to a question a parent
  // opened to glance at.
  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const resuming = typeof resumeMinutes === 'number';
  const title = resuming
    ? appT('deviceDetail.pauseBrowsingResumeTitle')
    : appT('deviceDetail.pauseBrowsing');

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={event => event.stopPropagation()}
      >
        <div className="sheet-head">
          <h2 className="sheet-title">{title}</h2>
          <button ref={closeRef} className="login-link" onClick={onClose}>
            {t('dash.close')}
          </button>
        </div>
        <p className="sheet-body">
          {resuming
            ? appT('deviceDetail.pauseBrowsingResumeBody', {
                minutes: resumeMinutes,
              })
            : appT('deviceDetail.pauseBrowsingDescription')}
        </p>
        {resuming ? (
          <button className="btn btn-block" onClick={onResume}>
            {appT('deviceDetail.pauseBrowsingResume')}
          </button>
        ) : (
          BROWSING_PAUSE_CHOICE_MINUTES.map(minutes => (
            <button
              key={minutes}
              className="btn btn-block"
              onClick={() => onChoose(minutes)}
            >
              {appT('deviceDetail.pauseBrowsingFor', { minutes })}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
