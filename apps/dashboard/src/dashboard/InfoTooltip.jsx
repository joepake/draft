import { useId, useRef } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useActivityTranslate } from './activityCopy.js';

const MAX_BUBBLE_WIDTH = 300;
const EDGE_MARGIN = 16;
const ANCHOR_GAP = 8;

/**
 * A note that lives behind a tap — the phone's `InfoTooltip`
 * (`apps/mobile/src/components/InfoTooltip.tsx`), whose header says why: the
 * caveats a card has to carry are all true, and left on the card as prose they
 * push what the parent came for down the page. The sentence stays, the pixels
 * do not.
 *
 * A native popover rather than a `title`: a title shows nothing on a touch
 * screen, and the popover's light dismiss is the phone's "any tap closes it".
 * It sits in the top layer, so `position: absolute` is page coordinates and the
 * bubble scrolls with what it points at.
 */
export default function InfoTooltip({ text, label }) {
  const activityT = useActivityTranslate();
  const id = useId();
  const triggerRef = useRef(null);
  const bubbleRef = useRef(null);

  const paragraphs = (Array.isArray(text) ? text : [text]).filter(
    entry => typeof entry === 'string' && entry.length > 0,
  );
  if (paragraphs.length === 0) return null;

  // Placed on the click, which runs before `popovertarget` opens the bubble.
  const place = () => {
    const trigger = triggerRef.current?.getBoundingClientRect();
    const bubble = bubbleRef.current;
    if (!trigger || !bubble) return;
    const width = Math.min(MAX_BUBBLE_WIDTH, window.innerWidth - EDGE_MARGIN * 2);
    const left = Math.min(
      Math.max(trigger.left + trigger.width / 2 - width / 2, EDGE_MARGIN),
      window.innerWidth - EDGE_MARGIN - width,
    );
    bubble.style.width = `${width}px`;
    bubble.style.left = `${left + window.scrollX}px`;
    bubble.style.top = `${trigger.bottom + ANCHOR_GAP + window.scrollY}px`;
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="info-tip"
        popovertarget={id}
        aria-label={label ?? activityT('shared.learnMore')}
        onClick={place}
      >
        <Icon name="info" size={15} />
      </button>
      {/* Spans, not a div of p's: the trigger sits inside a sentence (the
          child hub's "Last active" line is a <p>), where block children are
          invalid DOM and React says so on every render. The CSS makes them
          blocks. */}
      <span ref={bubbleRef} id={id} popover="auto" className="info-tip-bubble">
        {paragraphs.map(paragraph => (
          <span key={paragraph} className="info-tip-para">
            {paragraph}
          </span>
        ))}
      </span>
    </>
  );
}
