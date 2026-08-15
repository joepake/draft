import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { trackDownloadClick } from '../lib/analytics.js';
import { isPlatformAvailable, storeHref } from '../lib/storeLinks.js';
import { useReveal } from '../lib/useReveal.js';

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.84-.86 3.08-.78 1.79.14 3.06.86 3.93 2.14-3.62 2.17-3.05 6.65.51 8.13-.66 1.62-1.51 3.22-2.6 4.68ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#34A853"
        d="M3.6 2.31 13.79 12l-2.68 2.55L3.6 21.69a1.2 1.2 0 0 1-.6-1.06V3.37c0-.45.23-.83.6-1.06Z"
      />
      <path
        fill="#4285F4"
        d="M3 3.37c0-.45.23-.83.6-1.06L13.79 12 3.6 21.69a1.2 1.2 0 0 1-.6-1.06Z"
        opacity=".85"
      />
      <path
        fill="#FBBC04"
        d="m15.23 8.16 4.94 2.85c.68.39 1.13.94 1.13 1.55s-.45 1.16-1.13 1.55l-4.94 2.85L12.4 12Z"
      />
      <path fill="#EA4335" d="M3.6 2.31c.28-.16.62-.2.96-.09l12.55 6.94-2.88 2.84Z" />
    </svg>
  );
}

/**
 * One platform button.
 *
 * Both store buttons were `href="#"` — a button styled as the page's primary
 * action that scrolled to the top of the page instead of reaching a store.
 * `STORE_LINKS` holds the real destinations; see `lib/storeLinks.js`.
 *
 * **`href` overrides where the button goes, and the desktop pair needs it.**
 * `STORE_LINKS.macos.url` is the `.zip` itself, and a button that starts a
 * download of an unsigned build with no Gatekeeper warning beside it is the
 * exact failure `#download` is arranged to prevent. So up here the two desktop
 * buttons point at `#download` — the section where the file and its warning sit
 * together — and the store buttons, which have no such warning to carry, point
 * straight at their listing.
 *
 * **An unshipped platform renders as a `<span>`, not a dimmed link.** Nothing
 * is published on any of the four yet (`available: false`, see
 * `lib/storeLinks.js`), and the override does not rescue the desktop pair from
 * that: `#download` is a real anchor, but sending a parent down to a card whose
 * button is also "coming soon" is a click that answers nothing. So the flag
 * wins over `href` for all four, and the ground swaps to the muted
 * `.store-btn--soon` — a button that keeps a filled, primary-action look while
 * doing nothing reads as broken.
 *
 * The vendor mark and the platform name stay; only the small line above them
 * becomes "coming soon", so the row still says which four platforms are meant
 * and the reader is not left matching an unlabelled logo to a promise.
 *
 * `aria` is optional: a platform with no `store.*Aria` key composes its
 * accessible name from the label and the platform, which is what the desktop
 * pair wants anyway ("Download — macOS"). The `<span>` carries no `aria-label`
 * at all — it is not a control, and a label on a non-interactive element is
 * announced inconsistently; its visible text already reads as a sentence.
 */
function StoreButton({ platform, mark, aria, small, name, href: hrefOverride }) {
  const { t } = useT();
  const available = isPlatformAvailable(platform);

  const label = (
    <span>
      <small>{available ? t(small) : t('common.comingSoon')}</small>
      <strong>{t(name)}</strong>
    </span>
  );

  if (!available) {
    return (
      <span className="store-btn store-btn--soon">
        {mark}
        {label}
      </span>
    );
  }

  return (
    <a
      className="store-btn"
      href={hrefOverride ?? storeHref(platform)}
      aria-label={aria ? t(aria) : `${t(small)} ${t(name)}`}
    >
      {mark}
      {label}
    </a>
  );
}

/**
 * The platform row: four buttons in the hero and the closing CTA, two inside
 * the download section.
 *
 * `storesOnly` is what stops macOS and Windows appearing twice in `#download` —
 * that section already gives each of them a full card, and a button above the
 * cards pointing at the section it is already in is a link to itself.
 */
function StoreButtons({ centered = false, storesOnly = false }) {
  return (
    <div className={`store-buttons${centered ? ' store-buttons--center' : ''}`}>
      <StoreButton
        platform="ios"
        mark={<AppleMark />}
        aria="store.appleAria"
        small="store.appleSmall"
        name="store.appleName"
      />
      <StoreButton
        platform="android"
        mark={<PlayMark />}
        aria="store.googleAria"
        small="store.googleSmall"
        name="store.googleName"
      />
      {storesOnly ? null : (
        <>
          <StoreButton
            platform="macos"
            mark={<Icon name="mac" />}
            small="download.button"
            name="download.macosTitle"
            href="#download"
          />
          <StoreButton
            platform="windows"
            mark={<Icon name="windows" />}
            small="download.button"
            name="download.windowsTitle"
            href="#download"
          />
        </>
      )}
    </div>
  );
}

const TRUST = [1, 2, 3, 4];

/**
 * One card per screen the parent app actually ships, in the order a parent
 * meets them: limits, then apps and web, then where the child is, then the
 * safety net, then the parts the child takes part in, then what KidGate hands
 * back at the end of a week.
 *
 * **Twelve, and they were eight.** The four added are screens that had shipped
 * with nothing on this page pointing at them — Device Lock, the Weekly report,
 * the Star chart and the Activity feed — which is the failure this list has
 * every time it is not re-read against `plans.ts`: the paid tier's own feature
 * chips are the closest thing to an inventory, and they listed more than this
 * did. Twelve also fills the 3-column grid exactly; renumber the
 * `home.feature*` keys rather than leaving a gap when one goes.
 */
const FEATURES = [
  { n: 1, icon: 'clock' },
  { n: 2, icon: 'ban' },
  { n: 3, icon: 'hourglass' },
  { n: 4, icon: 'globe' },
  { n: 5, icon: 'mapPin' },
  { n: 6, icon: 'lifebuoy' },
  { n: 7, icon: 'shieldCheck' },
  { n: 8, icon: 'star' },
  { n: 9, icon: 'lock' },
  { n: 10, icon: 'fileText' },
  { n: 11, icon: 'crown' },
  { n: 12, icon: 'activity' },
];

/**
 * A desktop build, its requirement line, and the warning its own install
 * produces — in one card, which is the point.
 *
 * This came from `pages/Download`, which no longer exists. That page kept the
 * two buttons in one section and the two Gatekeeper/SmartScreen warnings in
 * another below it, and the argument for it being a page at all was that the
 * warnings had to travel with the buttons. Inside the card is tighter than the
 * page ever was: a parent cannot reach the button without the sentence.
 *
 * KidGate ships **unsigned** on both desktops — no Developer ID certificate,
 * no Authenticode certificate — so macOS refuses the first launch outright and
 * Windows raises SmartScreen, on every install, forever, not once per release.
 * A `.zip` changes neither: macOS carries the quarantine flag through the
 * unzip and Windows stamps the extracted `.exe` with the same Mark of the Web.
 */
function DesktopCard({ platform, icon }) {
  const { t } = useT();
  const href = storeHref(platform);

  return (
    <article className="why-item reveal">
      <span className="tick">
        <Icon name={icon} />
      </span>
      <div>
        {/*
          The pill takes the button's place while the build is not uploaded —
          the same shape the Android TV card beside these two already uses, so
          three unshipped platforms state it one way. `.card-soon` sits above
          the heading everywhere else; here it replaces an action below the
          requirement line, which is where a reader looking for the button
          looks.
        */}
        <h3>{t(`download.${platform}Title`)}</h3>
        <p>{t(`download.${platform}Requires`)}</p>
        {href ? (
          <a
            className="store-btn store-btn--solid"
            href={href}
            /*
             * Counted on the click rather than on the navigation. The link may
             * open a download that never finishes, and what this measures is
             * intent to install — `agent_started` from the agent is the other
             * end of that funnel.
             */
            onClick={() => trackDownloadClick(platform)}
          >
            <Icon name="arrowRight" />
            <span>
              <strong>{t('download.button')}</strong>
            </span>
          </a>
        ) : (
          <p className="download-soon">
            <span className="card-soon">{t('common.comingSoon')}</span>
          </p>
        )}
        {/*
          The install steps stay while the button is gone. They describe what
          this platform does on a first launch of an unsigned build, which is
          true of the release before it is downloadable — and a parent reading
          ahead is exactly who this section is for. They come back beside a
          working button on the day the flag flips, with nothing else to edit.
        */}
        <p className="download-note">{t(`download.${platform}Steps`)}</p>
      </div>
    </article>
  );
}

/**
 * Land on the right section when the URL carries a hash.
 *
 * `/download` is now a redirect to `/#download`, and React Router does not
 * scroll to a hash on its own — without this an installed desktop agent whose
 * `config/desktopRelease` still points at the old path opens the top of a
 * marketing page after saying "there is a new build". Runs after paint so the
 * section exists to scroll to.
 */
function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    // `auto`, not `smooth`: this is an arrival, not a navigation the reader
    // made on the page, and a long glide from the hero reads as a bug.
    if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
  }, [hash]);
}
const WHY = [1, 2, 3, 4];
const STEPS = [1, 2, 3];
const FAQ = [1, 2, 3, 4];
const HERO_CHECKS = [1, 2, 3, 4, 5];

export default function Home() {
  const root = useReveal();
  const { t } = useT();
  useScrollToHash();

  return (
    <div className="landing" ref={root}>
      <section className="hero">
        <div className="inner">
          <div>
            <span className="hero-badge">
              <Icon name="shieldCheck" />
              {t('home.heroBadge')}
            </span>
            <h1>
              {t('home.heroTitle')}{' '}
              <span className="accent">{t('home.heroTitleAccent')}</span>
            </h1>
            <p className="lede">{t('home.heroLede')}</p>
            <ul className="hero-checks">
              {HERO_CHECKS.map(n => (
                <li key={n}>
                  <Icon name="check" />
                  {t(`home.heroCheck${n}`)}
                </li>
              ))}
            </ul>
            <StoreButtons />
          </div>

          <div className="phone-wrap" aria-hidden="true">
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-card">
                <div className="label">{t('home.phoneDailyLimit')}</div>
                <div className="value">{t('home.phoneDailyLimitValue')}</div>
                <div className="phone-bar">
                  <span style={{ width: '47%' }} />
                </div>
              </div>
              <div className="phone-card">
                <div className="label">{t('home.phoneBlockedHours')}</div>
                <div className="value">21:00 – 07:00</div>
                <span className="phone-pill">
                  <Icon name="check" />
                  {t('home.phoneScheduleOn')}
                </span>
              </div>
              <div className="phone-card">
                <div className="label">{t('home.phoneLocation')}</div>
                <div className="value">{t('home.phoneLocationValue')}</div>
                <span className="phone-pill">
                  <Icon name="check" />
                  {t('home.phoneCheckIn')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="inner">
          <ul className="trust-grid reveal">
            {TRUST.map(n => (
              <li className="trust-item" key={n}>
                <Icon name="check" />
                <div>
                  <strong>{t(`home.trust${n}Title`)}</strong>
                  <span>{t(`home.trust${n}Text`)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('home.featuresEyebrow')}</span>
            <h2>{t('home.featuresTitle')}</h2>
            <p className="section-sub">{t('home.featuresSub')}</p>
          </div>
          <div className="features-grid">
            {FEATURES.map(f => (
              <article className="feature-card reveal" key={f.n}>
                <div className="feature-icon">
                  <Icon name={f.icon} size={22} />
                </div>
                <h3>{t(`home.feature${f.n}Title`)}</h3>
                <p>{t(`home.feature${f.n}Text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/*
        Every platform, in one place — this replaced the `/download` route.

        That page answered "where do I get it" for two of the four platforms
        while the store buttons in the hero answered it for the other two, and
        neither said so. A parent who came for a Mac read a home page with no
        computers on it; a parent who opened `/download` read a page with no
        phones on it. One section, four platforms, and the header and footer
        links now land here.

        **`id` is load bearing.** `config/desktopRelease` in Firestore holds the
        URL an installed desktop agent's update banner opens, and any value
        still reading `…/download` is redirected to `/#download` by `App.jsx`.
        The desktop cards therefore have to keep a stable anchor above them —
        renaming this id turns that redirect into the top of the page.
      */}
      <section id="download" className="section-band">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('download.eyebrow')}</span>
            <h2>{t('home.platformsTitle')}</h2>
            <p className="section-sub">{t('home.platformsSub')}</p>
          </div>

          <StoreButtons centered storesOnly />

          <div className="why-grid why-grid--three">
            <DesktopCard platform="macos" icon="mac" />
            <DesktopCard platform="windows" icon="windows" />
            {/*
              Android TV, with a pill and no button.

              **The pill is the whole card.** `apps/tv/CLAUDE.md` and
              `docs/MIGRATION.md` both read "scaffolded, never built" — no
              Android TV has run a line of it and three permissions the platform
              turns on are unproven — so this is the one platform a family
              cannot install. A card sitting between two that ship is read as
              available unless it says otherwise, and nothing in this repo fails
              when that is wrong; a parent finds out on the television.

              It is here rather than absent because "does KidGate work on the
              TV?" is a question this page was answering with silence, and
              silence reads as no. Ship the TV build and this card gains a
              button and loses the pill.

              **The strings are `about.make5*`, not new `download.tv*` keys.**
              That is the same platform described in the same voice, already
              translated into fourteen languages and already reviewed; a second
              set would be the one thing this repo refuses — one text in two
              places, drifting. `about.make5Soon` was in all fourteen packs with
              no renderer at all (`pages/About` stopped drawing the pill), and
              `yarn i18n:dead` does not scan the web key space, so nothing could
              have told us. This is its renderer.
            */}
            <article className="why-item why-item--planned reveal">
              <span className="tick">
                <Icon name="tv" />
              </span>
              <div>
                {/*
                  Title and pill on one line, not the pill above the title.

                  `.why-item` is a flex row of icon and body, so whatever comes
                  first in the body is what the icon lines up with. With the
                  pill first, the icon sat level with the pill and the words
                  "Android TV" dropped a line below every other card's title —
                  three cards side by side with one heading out of line.
                */}
                <div className="card-head">
                  <h3>{t('about.make5Title')}</h3>
                  <span className="card-soon">{t('about.make5Soon')}</span>
                </div>
                <p>{t('about.make5Text')}</p>
              </div>
            </article>
          </div>

          {/*
            Why both computers warn, once, under the two cards that each carry
            their own steps. Written as an explanation of the operating system's
            behaviour rather than as reassurance — "this is safe" is exactly
            what malware says, and a parent who meets a Gatekeeper refusal with
            no warning concludes the app is broken rather than unsigned.
          */}
          <p className="section-note reveal">{t('download.warningSub')}</p>
        </div>
      </section>

      <section className="showcase">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('home.showcaseEyebrow')}</span>
            <h2>{t('home.showcaseTitle')}</h2>
            <p className="section-sub">{t('home.showcaseSub')}</p>
          </div>

          <div className="showcase-frame reveal" aria-hidden="true">
            <div className="showcase-bar">
              <i />
              <i />
              <i />
              <span>kidgate.app/dashboard</span>
            </div>
            <div className="showcase-body">
              <div className="showcase-side">
                {[
                  ['grid', 'dash.tabOverview', true],
                  ['clock', 'dash.tabScreen', false],
                  ['apps', 'dash.tabApps', false],
                  ['shield', 'dash.tabSafety', false],
                  ['sliders', 'dash.tabControls', false],
                ].map(([icon, key, active]) => (
                  <div
                    className={`showcase-row${active ? ' is-active' : ''}`}
                    key={key}
                  >
                    <Icon name={icon} />
                    {t(key)}
                  </div>
                ))}
              </div>
              <div className="showcase-main">
                <div className="showcase-tiles">
                  <div className="showcase-tile">
                    <em>{t('home.showcaseTile1')}</em>
                    <strong>{t('viz.hoursMinutes', { hours: 2, minutes: 14 })}</strong>
                  </div>
                  <div className="showcase-tile">
                    <em>{t('home.showcaseTile2')}</em>
                    <strong>41</strong>
                  </div>
                  <div className="showcase-tile">
                    <em>{t('home.showcaseTile3')}</em>
                    <strong>2</strong>
                  </div>
                </div>
                <div className="showcase-chart">
                  <div className="showcase-bars">
                    {[52, 68, 74, 46, 39, 61, 88, 57, 44, 70, 96, 63, 51, 80].map(
                      (h, i) => (
                        <i
                          key={i}
                          className={h > 85 ? 'over' : undefined}
                          style={{ height: `${h}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-caption reveal">
            <span>
              <Icon name="eye" />
              {t('home.showcaseCaption1')}
            </span>
            <span>
              <Icon name="qr" />
              {t('home.showcaseCaption2')}
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('home.setupEyebrow')}</span>
            <h2>{t('home.setupTitle')}</h2>
            <p className="section-sub">{t('home.setupSub')}</p>
          </div>
          <div className="steps">
            {STEPS.map(n => (
              <article className="step reveal" key={n}>
                <span className="step-num">{n}</span>
                <h3>{t(`home.step${n}Title`)}</h3>
                <p>{t(`home.step${n}Text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('home.whyEyebrow')}</span>
            <h2>{t('home.whyTitle')}</h2>
            <p className="section-sub">{t('home.whySub')}</p>
          </div>
          <div className="why-grid">
            {WHY.map(n => (
              <article className="why-item reveal" key={n}>
                <span className="tick">
                  <Icon name="check" />
                </span>
                <div>
                  <h3>{t(`home.why${n}Title`)}</h3>
                  <p>{t(`home.why${n}Text`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('home.faqEyebrow')}</span>
            <h2>{t('home.faqTitle')}</h2>
            <p className="section-sub">{t('home.faqSub')}</p>
          </div>
          <div className="faq-list reveal">
            {FAQ.map(n => (
              <details key={n}>
                <summary>{t(`home.faq${n}Q`)}</summary>
                <p>{t(`home.faq${n}A`)}</p>
              </details>
            ))}
          </div>
          <p className="faq-more reveal">
            <Link to="/support">
              {t('home.faqMore')}
              <Icon name="arrowRight" />
            </Link>
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="inner reveal">
          <h2>{t('home.ctaTitle')}</h2>
          <p className="section-sub">{t('home.ctaSub')}</p>
          <StoreButtons />
          <p className="cta-note">{t('home.ctaNote')}</p>
        </div>
      </section>
    </div>
  );
}
