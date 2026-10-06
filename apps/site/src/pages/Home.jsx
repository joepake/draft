import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { loadPlans, plansTranslator } from '@kidgate/i18n/plansPack';
import Icon from '@kidgate/web-ui/Icon';
import PlanComparison from '@kidgate/web-ui/PlanComparison';
import { useT } from '@kidgate/web-ui/useT';
import { trackDownloadClick } from '../lib/analytics.js';
import { isPlatformAvailable, storeHref } from '../lib/storeLinks.js';
import { useReveal } from '../lib/useReveal.js';
import familyEn from '../assets/dashboard-family-en.webp';
import familyVi from '../assets/dashboard-family-vi.webp';
import getQr from '../assets/get-qr.svg';

/*
 * The real dashboard's Family screen, not a drawing of one. Captured
 * 2026-10-05 from the live console with every name, place, figure and the
 * account email swapped in the DOM before the shot — never a real family's
 * data on this page. Two languages; the other twelve show the English one.
 * A retake follows the same rule: edit the page, not the picture.
 */
const DASHBOARD_SHOTS = {
  en: { src: familyEn, width: 2000, height: 813 },
  vi: { src: familyVi, width: 2000, height: 818 },
};

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
 *
 * **Video history took the Star chart's key on 2026-10-04**, and the stars moved
 * into the reward card that earns them. It is the row `planComparison` marks
 * `highlight` — the one no competitor's free tier answers — and this page never
 * named it. Placed beside the web card because it is the same question; the
 * array order is the page order, `n` is only the key.
 */
/**
 * `premium` marks a card whose whole feature sits behind the paywall
 * (`docs/PRICING.md` §4: video history and the weekly report). Cards that are
 * half free — the filter is free, its history is not; location on request is
 * free, live location is not — say so in their own sentence instead. Before
 * this the grid sold every row as included while the FAQ two sections down said
 * otherwise, on the same page.
 */
const FEATURES = [
  { n: 1, icon: 'clock' },
  { n: 2, icon: 'ban' },
  { n: 3, icon: 'hourglass' },
  { n: 4, icon: 'globe' },
  { n: 11, icon: 'play', premium: true },
  { n: 5, icon: 'mapPin' },
  { n: 6, icon: 'lifebuoy' },
  { n: 7, icon: 'shieldCheck' },
  { n: 8, icon: 'star' },
  { n: 9, icon: 'lock' },
  { n: 10, icon: 'fileText', premium: true },
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
 * **The two desktops no longer warn the same way, which is why each card holds
 * its own sentence rather than sharing one.** macOS has been signed with a
 * Developer ID and notarised since 2026-08-15 (`docs/SITE_ROUTES.md`), so the
 * `.pkg` installs with no Gatekeeper refusal — what its card has to say instead
 * is that the system extension needs approving once, because the Web Filter is
 * silently absent until it is. Windows has no Authenticode certificate, so
 * SmartScreen warns on every install, forever, not once per release, and the
 * `.zip` does not soften it: the extracted `.exe` carries the same Mark of the
 * Web. `download.warningSub` under the grid is therefore about Windows alone.
 *
 * **Android TV and Chrome are cards of the same kind since 2026-09-27**, when
 * both joined the launch set. Their body is `about.make5Text` / `make6Text` —
 * what the platform cannot do (no location or SOS on a TV, nothing but the Web
 * Filter in Chrome), in the words already translated for `/about` — and their
 * button names the store it opens rather than saying Download. Neither has an
 * install note: a store installs its own listing.
 */
function DownloadCard({
  platform,
  icon,
  title,
  body,
  note = null,
  button = 'download.button',
}) {
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
          the same shape on every card in this section, so four unshipped
          platforms state it one way. `.card-soon` sits above
          the heading everywhere else; here it replaces an action below the
          requirement line, which is where a reader looking for the button
          looks.
        */}
        <h3>{t(title)}</h3>
        <p>{t(body)}</p>
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
              <strong>{t(button)}</strong>
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
        {note && <p className="download-note">{t(note)}</p>}
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
  // `key` as well as `hash`: the header's Plans link clicked a second time,
  // after the reader has scrolled away, is a new navigation to the same hash,
  // and keyed on the hash alone it did nothing — the reason the header once
  // refused section links at all.
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    // `auto`, not `smooth`: this is an arrival, not a navigation the reader
    // made on the page, and a long glide from the hero reads as a bug.
    if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
  }, [hash, key]);
}
/**
 * The app pack's `plans.*`, for the comparison below — the phone's Plans
 * screen and the dashboard's plan dialog say the same sentences, so this page
 * reads them rather than keeping `home.*` twins (`@kidgate/i18n/plansPack`).
 * English until the language on screen arrives; a chunk that fails to load
 * leaves it English, which is the pack's own fallback anyway.
 */
function usePlansT(language) {
  const [, setReady] = useState(null);

  useEffect(() => {
    let live = true;
    loadPlans(language).then(
      () => live && setReady(language),
      () => {},
    );
    return () => {
      live = false;
    };
  }, [language]);

  return plansTranslator(language);
}

// "Honest about limits" leads: it is the one claim no rival makes, and the
// section sits straight after the features so it is read beside them.
const WHY = [4, 1, 2, 3];
/*
 * Things a parent will not find in the apps they compare us against, each
 * named with the platform it is true on. The copy carries "Android" or
 * "Android TV" where a claim holds there alone — a card that reads true for
 * every phone and is false on an iPhone is the failure `home.why4` promises
 * against, on the same page.
 */
const ONLY = [
  { n: 1, icon: 'tv' },
  { n: 2, icon: 'message' },
  { n: 3, icon: 'apps' },
  { n: 4, icon: 'lifebuoy' },
  { n: 5, icon: 'power' },
  { n: 6, icon: 'star' },
];
const STEPS = [1, 2, 3];
// 5 is the price question — the one number the page did not state anywhere.
const FAQ = [1, 2, 3, 4, 5];
const HERO_CHECKS = [1, 2, 3, 4, 5];

/*
 * The promo's 9x16 cut in the visitor's language, which `apps/videos` renders
 * and uploads to the R2 `assets` bucket (`yarn workspace @kidgate/videos hero
 * --upload`, docs/VIDEOS.md). A re-render replaces it in place; nothing here
 * changes. Started from an effect rather than `autoPlay`, so a visitor who asked
 * for less motion or less data keeps the poster and downloads no video.
 */
const PROMO_BASE = 'https://assets.kidgate.app/promo';

function HeroVideo({ language }) {
  const ref = useRef(null);
  useEffect(() => {
    const still =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      navigator.connection?.saveData;
    // Refused in iOS Low Power Mode, among others. A refused play() has already
    // swapped the poster for the faded first frame (measured 2026-10-05: an empty
    // phone), so `load()` puts the poster back; `preload="none"` keeps it free.
    const video = ref.current;
    if (!still) video?.play().catch(() => video.load());
  }, [language]);
  return (
    <video
      key={language}
      ref={ref}
      className="hero-video"
      src={`${PROMO_BASE}/${language}/hero.mp4`}
      poster={`${PROMO_BASE}/${language}/hero.jpg`}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const root = useReveal();
  const { t, language } = useT();
  const plansT = usePlansT(language);
  const shot = DASHBOARD_SHOTS[language] ?? DASHBOARD_SHOTS.en;
  useScrollToHash();

  return (
    <div className="landing" ref={root}>
      <section className="hero">
        <div className="inner">
          <div className="hero-copy">
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

          <HeroVideo language={language} />
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
                {f.premium && (
                  <span className="feature-tag">{t('home.featurePremium')}</span>
                )}
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

          {/*
            For a reader on a computer, whose phone is what installs the app:
            the code opens `/get`, which picks the store by the phone that
            scanned it. **Shown before launch on purpose** (operator,
            2026-10-06): until a store flag flips, `/get` lands the phone on
            this section's "coming soon", and on launch day the same printed
            or cached code starts reaching the stores with nothing edited.
            Touch screens tap the buttons, so the CSS hides it there.
            `get-qr.svg` is generated, not drawn: regenerate with `qrcode`
            (root node_modules), margin 2, for
            `https://www.kidgate.app/get?utm_source=site` — only if `/get` moves.
          */}
          <figure className="get-qr">
            <img src={getQr} width="140" height="140" alt="" />
            <figcaption>{t('download.qrScan')}</figcaption>
          </figure>

          {/*
            Four cards, two by two: the two desktops, then Android TV and
            Chrome, which launch with them (decided 2026-09-27).

            Every card goes through `storeHref`, so each becomes a button on
            the day its `available` flag flips in `lib/storeLinks.js`, and
            says `common.comingSoon` in the button's place until then. The TV
            card drew that pill unconditionally before it had a store entry,
            which would have left it saying Coming soon after launch; Chrome had
            no card at all.

            **The TV and Chrome bodies are `about.make5*` / `about.make6*`, not
            new `download.*` keys** — the same platform in the same voice,
            already in fourteen languages; a second set is one text in two
            places, drifting.
          */}
          <div className="why-grid">
            <DownloadCard
              platform="macos"
              icon="mac"
              title="download.macosTitle"
              body="download.macosRequires"
              note="download.macosSteps"
            />
            <DownloadCard
              platform="windows"
              icon="windows"
              title="download.windowsTitle"
              body="download.windowsRequires"
              note="download.windowsSteps"
            />
            <DownloadCard
              platform="androidtv"
              icon="tv"
              title="about.make5Title"
              body="about.make5Text"
              button="store.googleName"
            />
            <DownloadCard
              platform="chrome"
              icon="extension"
              title="about.make6Title"
              body="about.make6Text"
              button="store.chromeName"
            />
          </div>

          {/*
            Why Windows warns, once, under the cards that each carry their own
            steps. Written as an explanation of the operating system's behaviour
            rather than as reassurance — "this is safe" is exactly what malware
            says, and a parent who meets SmartScreen with no warning concludes
            the app is broken rather than unsigned. It names the Mac only to say
            it does not warn; a note that read "both systems" outlived the
            Developer ID by three weeks.
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
              <span>dashboard.kidgate.app</span>
            </div>
            <img
              className="showcase-shot"
              src={shot.src}
              width={shot.width}
              height={shot.height}
              alt=""
              loading="lazy"
              decoding="async"
            />
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

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{t('home.onlyEyebrow')}</span>
            <h2>{t('home.onlyTitle')}</h2>
            <p className="section-sub">{t('home.onlySub')}</p>
          </div>
          <div className="why-grid">
            {ONLY.map(o => (
              <article className="why-item reveal" key={o.n}>
                <span className="tick">
                  <Icon name={o.icon} />
                </span>
                <div>
                  <h3>{t(`home.only${o.n}Title`)}</h3>
                  <p>{t(`home.only${o.n}Text`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/*
        Free against Premium — the table `docs/PRICING.md` §4 names for "the
        Plans screen, the site, the store listing", and the site never had.
        Before it the page said what was paid in two corner tags and an FAQ
        answer. Rows: `@kidgate/core/domain/planComparison`; words: the app
        pack, so a cell edited for the phone is edited here.
      */}
      <section id="plans" className="plans-section">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">{plansT('plans.title')}</span>
            <h2>{plansT('plans.compareTitle')}</h2>
            <p className="section-sub">{plansT('plans.sectionWhyPremiumSubtitle')}</p>
          </div>
          <div className="reveal">
            <PlanComparison t={plansT} />
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
