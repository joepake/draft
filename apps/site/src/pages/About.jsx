import { Link } from 'react-router-dom';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { IS_EMBEDDED } from '../lib/embed.js';
import { useReveal } from '../lib/useReveal.js';

/**
 * Who is behind KidGate, and what the product refuses to do.
 *
 * **This is the only copy of this text.** The Settings screen on the phone and
 * on the desktop agent link here rather than repeating any of it in-app —
 * fourteen locales of the same three paragraphs, kept in step by hand, is the
 * class of bug this monorepo exists to end. `/about` is therefore a route two
 * shipped apps point at; renaming it breaks a row a parent has already tapped.
 *
 * Every claim below is one the product can be held to — the four platforms a
 * family can install, the free tier, the ads, the deletion route, and the two
 * places KidGate is only best-effort. Nothing about a company, a founding year,
 * a location or a team
 * size appears anywhere, because none of that is known in this repo. If a store
 * listing or a jurisdiction needs those, they are strings to add, not sentences
 * to guess at.
 */

const VALUES = [1, 2, 3, 4];

/*
 * One card per platform, in the order the product shipped them, with the
 * dashboard last because it is the one that is not a device.
 *
 * macOS and Windows are two cards rather than one "Mac and Windows": they are
 * one codebase and they are not one experience — the PC carries a watchdog
 * service the Mac has no need for, and a parent choosing between them is
 * choosing between those, not between a single row's two nouns.
 *
 * **Seven cards, and two of them cannot be installed today — the card text says
 * so, because this page draws no badge.** The `soon` pill was dropped from here
 * by the operator's decision and its renderer now lives on `pages/Home`'s
 * `#download`; reinstating it here is a decision, not a fix. What is left is the
 * sentence inside the card, and both unshipped rows carry it: Android TV has run
 * on real hardware since 19 Aug 2026 (`apps/tv/CLAUDE.md`) but has no keystore,
 * release track or Play submission, and the Chrome extension paired from a real
 * browser on 2026-08-20 and is waiting on a Web Store review that
 * `apps/extension/CLAUDE.md` measures in months. A card with no badge and no
 * such sentence sitting beside four that shipped reads as installable, nothing
 * in this repo fails when that is wrong, and a parent finds out on the
 * television or in the store.
 *
 * **Order is card order, so the keys were renumbered rather than appended.**
 * Chrome is `make6` and the dashboard moved to `make7`: `MAKE.map` uses one
 * index for both the position and the key, and a 7 rendering above a 6 is the
 * kind of mismatch that survives review. The dashboard stays last and stands
 * alone on the third row of a three-column grid, which is the right card to
 * leave there — it is the one that is not a device.
 */
const MAKE = [
  { n: 1, icon: 'phone' },
  { n: 2, icon: 'android' },
  { n: 3, icon: 'mac' },
  { n: 4, icon: 'windows' },
  { n: 5, icon: 'tv' },
  { n: 6, icon: 'extension' },
  { n: 7, icon: 'grid' },
];

/*
 * The numbers are here rather than in the locale packs on purpose: they are
 * facts about the product, identical in every language, and a translator asked
 * to carry "14" into fourteen files is a translator who can mistype it. Only
 * the label beside each one is translated.
 *
 * **The second one is 4 while the grid above has seven cards, and that is not a
 * mistake to correct.** It counts platforms a family can install today — iOS,
 * Android, macOS, Windows. The dashboard is named separately in its own label
 * because a browser is not an install; Android TV and the Chrome extension are
 * not counted because neither has a build a family can reach — no Play
 * submission for one, no Web Store listing for the other. What decides this
 * number is whether a family can install the thing, not how many cards the grid
 * has and not how a card is labelled: the `soon` badge that used to carry the TV
 * half of this argument is gone and the count did not move. Ship either and this
 * becomes 5; ship both and it is 6.
 */
const FACTS = [
  { n: 1, value: '14' },
  { n: 2, value: '4' },
  { n: 3, value: '0' },
  { n: 4, value: '1' },
];

export default function About() {
  const root = useReveal();
  const { t } = useT();

  return (
    <div className="landing" ref={root}>
      <section className="about-hero">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('about.eyebrow')}</span>
            <h1>
              {t('about.title')}{' '}
              <span className="accent">{t('about.titleAccent')}</span>
            </h1>
            <p className="section-sub">{t('about.lede')}</p>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('about.storyEyebrow')}</span>
            <h2>{t('about.storyTitle')}</h2>
          </div>
          <div className="about-prose reveal">
            <p>{t('about.storyP1')}</p>
            <p>{t('about.storyP2')}</p>
            <p>{t('about.storyP3')}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('about.valuesEyebrow')}</span>
            <h2>{t('about.valuesTitle')}</h2>
            <p className="section-sub">{t('about.valuesSub')}</p>
          </div>
          <div className="why-grid">
            {VALUES.map(n => (
              <article className="why-item reveal" key={n}>
                <span className="tick">
                  <Icon name="check" />
                </span>
                <div>
                  <h3>{t(`about.value${n}Title`)}</h3>
                  <p>{t(`about.value${n}Text`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('about.makeEyebrow')}</span>
            <h2>{t('about.makeTitle')}</h2>
            <p className="section-sub">{t('about.makeSub')}</p>
          </div>
          <div className="features-grid">
            {MAKE.map(item => (
              <article className="feature-card reveal" key={item.n}>
                <div className="feature-icon">
                  <Icon name={item.icon} size={22} />
                </div>
                <h3>{t(`about.make${item.n}Title`)}</h3>
                <p>{t(`about.make${item.n}Text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('about.factsEyebrow')}</span>
            <h2>{t('about.factsTitle')}</h2>
          </div>
          <div className="about-facts reveal">
            {FACTS.map(fact => (
              <div className="about-fact" key={fact.n}>
                <strong>{fact.value}</strong>
                <span>{t(`about.fact${fact.n}Label`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
       * The whole section, not just its three links, when embedded.
       *
       * All three lead out of the page the app opened: `mailto:` hands the
       * phone to a mail app and the desktop agent to nothing at all, `/support`
       * and `/privacy-policy` are rows the app's own Settings screen already
       * has. Dropping only the links would leave "write to us" above no way to
       * write — a dead end reads worse than an absent section, and both apps
       * carry their own contact route (the report modal on the phone).
       */}
      {IS_EMBEDDED ? null : (
        <section className="cta">
          <div className="inner reveal">
            <span className="eyebrow">{t('about.contactEyebrow')}</span>
            <h2>{t('about.contactTitle')}</h2>
            <p className="section-sub">{t('about.contactSub')}</p>
            <p className="about-links">
              <a href="mailto:support@kidgate.app">
                <Icon name="mail" />
                {t('about.contactEmail')}
              </a>
              <Link to="/support">
                <Icon name="lifebuoy" />
                {t('about.contactSupport')}
              </Link>
              <Link to="/privacy-policy">
                <Icon name="eye" />
                {t('about.contactPrivacy')}
              </Link>
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
