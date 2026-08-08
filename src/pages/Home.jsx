import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { useT } from '../i18n/useT.js'

/** Fades sections in as they arrive. Disabled wholesale by prefers-reduced-motion. */
function useReveal() {
  const root = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = el.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return root
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.84-.86 3.08-.78 1.79.14 3.06.86 3.93 2.14-3.62 2.17-3.05 6.65.51 8.13-.66 1.62-1.51 3.22-2.6 4.68ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  )
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#34A853" d="M3.6 2.31 13.79 12l-2.68 2.55L3.6 21.69a1.2 1.2 0 0 1-.6-1.06V3.37c0-.45.23-.83.6-1.06Z" />
      <path fill="#4285F4" d="M3 3.37c0-.45.23-.83.6-1.06L13.79 12 3.6 21.69a1.2 1.2 0 0 1-.6-1.06Z" opacity=".85" />
      <path fill="#FBBC04" d="m15.23 8.16 4.94 2.85c.68.39 1.13.94 1.13 1.55s-.45 1.16-1.13 1.55l-4.94 2.85L12.4 12Z" />
      <path fill="#EA4335" d="M3.6 2.31c.28-.16.62-.2.96-.09l12.55 6.94-2.88 2.84Z" />
    </svg>
  )
}

function StoreButtons() {
  const { t } = useT()

  return (
    <div className="store-buttons">
      <a className="store-btn" href="#" aria-label={t('store.appleAria')}>
        <AppleMark />
        <span>
          <small>{t('store.appleSmall')}</small>
          <strong>{t('store.appleName')}</strong>
        </span>
      </a>
      <a className="store-btn" href="#" aria-label={t('store.googleAria')}>
        <PlayMark />
        <span>
          <small>{t('store.googleSmall')}</small>
          <strong>{t('store.googleName')}</strong>
        </span>
      </a>
    </div>
  )
}

const TRUST = [1, 2, 3, 4]
const FEATURES = [
  { n: 1, icon: 'clock' },
  { n: 2, icon: 'ban' },
  { n: 3, icon: 'globe' },
  { n: 4, icon: 'pin' },
  { n: 5, icon: 'lifebuoy' },
  { n: 6, icon: 'shieldCheck' },
]
const WHY = [1, 2, 3, 4]
const STEPS = [1, 2, 3]
const FAQ = [1, 2, 3, 4]
const HERO_CHECKS = [1, 2, 3, 4, 5]

export default function Home() {
  const root = useReveal()
  const { t } = useT()

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
              {HERO_CHECKS.map((n) => (
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
            {TRUST.map((n) => (
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
            {FEATURES.map((f) => (
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
                    <strong>2h 14m</strong>
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
            {STEPS.map((n) => (
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
            {WHY.map((n) => (
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
            {FAQ.map((n) => (
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
  )
}
