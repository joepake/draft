import { useEffect, useMemo, useState } from 'react';
import {
  getUserGuideTopic,
  parseGuideStep,
  readGuideSteps,
  USER_GUIDE_GROUPS,
} from '@kidgate/core/domain/userGuide';
import {
  buildUserGuideSearchIndex,
  focusOfHit,
  guideSnippet,
  matchRanges,
  searchUserGuide,
} from '@kidgate/core/domain/userGuideSearch';
import { loadUserGuide } from '@kidgate/i18n/userGuidePack';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import Card from './Card.jsx';

/**
 * The phone's User guide (Settings → Help), on the Support page.
 *
 * Every word is the app pack's `userGuide` namespace and every shape is
 * `@kidgate/core/domain/userGuide` — the topics, their order, which device a
 * step happens on — so the two consoles cannot teach a feature differently.
 * The search is the phone's too (`userGuideSearch`), fold and ranking alike.
 *
 * What the phone has and this does not: the drawn mockups above some topics
 * (`apps/mobile/src/features/userGuide/mock`, React Native views). Steps alone.
 *
 * `topicId` is the URL's (`guide=` in `navUrl.js`). The query and the step a
 * result lands on are what a press did, so they are state here — which also
 * keeps the results on screen when Back returns to the list.
 */
export default function UserGuide({ topicId, onOpenTopic, landing = null }) {
  const pack = useUserGuidePack();
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(undefined);
  const topic = topicId ? getUserGuideTopic(topicId) : undefined;

  /* Opened from the header search (`SearchSheet`): land on the step it
     matched, the way a result from this page's own box does. A fresh object
     per open, so the same step chosen twice still lands. */
  useEffect(() => {
    if (landing) setFocus(landing.focus);
  }, [landing]);

  const index = useMemo(
    () =>
      pack
        ? buildUserGuideSearchIndex(pack.t, id => readGuideSteps(pack.guide, id))
        : [],
    [pack],
  );
  const hits = useMemo(() => searchUserGuide(index, query), [index, query]);

  /*
   * Land on the step a result matched, or at the top of the topic. The
   * document is the scroll container, so a topic opened from far down the
   * list would otherwise open halfway down itself. `behavior` asked for in
   * script overrides the stylesheet's reduced-motion guard, hence the check.
   */
  useEffect(() => {
    if (!pack || !topic) return;
    const target =
      focus === undefined
        ? null
        : document.getElementById(
            focus === 'tip' ? 'guide-tip' : `guide-step-${focus}`,
          );
    if (!target) {
      window.scrollTo(0, 0);
      return;
    }
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ block: 'center', behavior: still ? 'auto' : 'smooth' });
    target.focus({ preventScroll: true });
  }, [pack, topic, focus]);

  if (!pack) return null;
  const guideT = pack.t;
  const open = (id, nextFocus) => {
    setFocus(nextFocus);
    onOpenTopic(id);
  };

  if (topic) {
    const steps = readGuideSteps(pack.guide, topic.id);
    return (
      <div className="guide">
        <Card>
          <div className="guide-hero">
            <span className="settings-row-icon">
              <Icon name={topic.icon} size={20} />
            </span>
            <div>
              <h2>{guideT(`userGuide.topics.${topic.id}.title`)}</h2>
              <p>{guideT(`userGuide.topics.${topic.id}.summary`)}</p>
            </div>
          </div>
        </Card>

        {/* The permissions group is walked on the child's device, which has a
            button per step there — said once, before the steps. */}
        {topic.handoff && (
          <p className="guide-handoff">
            <Icon name="smartphone" size={17} />
            <span>{guideT('userGuide.handoffHint')}</span>
          </p>
        )}

        <h3 className="guide-section">{guideT('userGuide.stepsSectionTitle')}</h3>
        <ol className="guide-steps">
          {steps.map((step, stepIndex) => {
            const device = topic.stepDevices?.[stepIndex];
            return (
              <li
                key={stepIndex}
                id={`guide-step-${stepIndex}`}
                tabIndex={-1}
                className={`card guide-step${focus === stepIndex ? ' is-focused' : ''}`}
              >
                <div className="guide-step-head">
                  <span className="guide-step-badge" aria-hidden="true">
                    {stepIndex + 1}
                  </span>
                  <strong>{guideT('userGuide.stepLabel', { n: stepIndex + 1 })}</strong>
                  {device && (
                    <span
                      className={`guide-device${device === 'parent' ? ' is-parent' : ''}`}
                    >
                      {device === 'parent'
                        ? guideT('userGuide.onParentDevice')
                        : guideT('userGuide.onChildDevice')}
                    </span>
                  )}
                </div>
                <p>
                  {parseGuideStep(step).map((segment, segmentIndex) =>
                    segment.kind === 'chip' ? (
                      <span key={segmentIndex} className="guide-chip">
                        {segment.value}
                      </span>
                    ) : (
                      segment.value
                    ),
                  )}
                </p>
              </li>
            );
          })}
        </ol>

        <section
          id="guide-tip"
          tabIndex={-1}
          className={`guide-tip${focus === 'tip' ? ' is-focused' : ''}`}
        >
          <h3>{guideT('userGuide.tipTitle')}</h3>
          <p>{guideT(`userGuide.topics.${topic.id}.tip`)}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="guide">
      <p className="guide-lead">{guideT('userGuide.subtitle')}</p>
      <input
        type="search"
        className="reward-input"
        value={query}
        placeholder={guideT('userGuide.searchPlaceholder')}
        aria-label={guideT('userGuide.searchPlaceholder')}
        onChange={event => setQuery(event.target.value)}
      />

      {hits === null ? (
        USER_GUIDE_GROUPS.map(group => (
          <Card
            key={group.id}
            title={guideT(`userGuide.groups.${group.id}.title`)}
            subtitle={guideT(`userGuide.groups.${group.id}.description`)}
          >
            <ul className="guide-topics">
              {group.topicIds.map(id => (
                <TopicRow
                  key={id}
                  icon={getUserGuideTopic(id)?.icon}
                  title={guideT(`userGuide.topics.${id}.title`)}
                  subtitle={guideT(`userGuide.topics.${id}.summary`)}
                  onOpen={() => open(id)}
                />
              ))}
            </ul>
          </Card>
        ))
      ) : hits.length === 0 ? (
        <p className="empty">{guideT('userGuide.searchEmpty')}</p>
      ) : (
        <Card>
          <ul className="guide-topics">
            {hits.map(hit => (
              <TopicRow
                key={hit.topicId}
                icon={getUserGuideTopic(hit.topicId)?.icon}
                title={
                  <Highlighted
                    text={guideT(`userGuide.topics.${hit.topicId}.title`)}
                    query={query}
                    phraseOnly={hit.phrase}
                  />
                }
                subtitle={
                  <Highlighted
                    text={guideSnippet(hit, query, guideT)}
                    query={query}
                    phraseOnly={hit.phrase}
                  />
                }
                onOpen={() => open(hit.topicId, focusOfHit(hit))}
              />
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

/** The guide's words for the language on screen, loaded on the first open. */
export function useUserGuidePack() {
  const { language } = useT();
  const [pack, setPack] = useState(null);
  useEffect(() => {
    let cancelled = false;
    // Not caught: a chunk that fails to load reaches `installErrorReporting`
    // as an unhandled rejection, and the next open asks again.
    loadUserGuide(language).then(loaded => {
      if (!cancelled) setPack(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);
  return pack;
}

export function TopicRow({ icon, title, subtitle, onOpen }) {
  return (
    <li>
      <button type="button" className="guide-row" onClick={onOpen}>
        <span className="settings-row-icon">
          <Icon name={icon} size={17} />
        </span>
        <span className="guide-row-copy">
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </span>
        <Icon name="chevronRight" size={15} />
      </button>
    </li>
  );
}

/** `text` with the query's matches marked — the phone's `highlighted`. */
export function Highlighted({ text, query, phraseOnly = false }) {
  const ranges = matchRanges(text, query, phraseOnly);
  if (ranges.length === 0) return text;
  const parts = [];
  let at = 0;
  for (const [start, end] of ranges) {
    if (start > at) parts.push(text.slice(at, start));
    parts.push(
      <mark key={start} className="guide-match">
        {text.slice(start, end)}
      </mark>,
    );
    at = end;
  }
  if (at < text.length) parts.push(text.slice(at));
  return parts;
}
