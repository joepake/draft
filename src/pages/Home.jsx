import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

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
  return (
    <div className="store-buttons">
      <a className="store-btn" href="#" aria-label="Download KidGate on the App Store">
        <AppleMark />
        <span>
          <small>Download on the</small>
          <strong>App Store</strong>
        </span>
      </a>
      <a className="store-btn" href="#" aria-label="Get KidGate on Google Play">
        <PlayMark />
        <span>
          <small>Get it on</small>
          <strong>Google Play</strong>
        </span>
      </a>
    </div>
  )
}

const TRUST = [
  { title: 'No ads, ever', text: "Children's data is never used for advertising" },
  { title: 'Delete anytime', text: 'Erase your family account and all data on request' },
  { title: 'iOS and Android', text: 'Native screen-time controls on both platforms' },
  { title: 'One plan per family', text: 'Every parent and child device, one subscription' },
]

const FEATURES = [
  {
    icon: 'clock',
    title: 'Screen time & daily limits',
    text: 'Set a daily cap and Blocked Hours for school and bedtime. The device locks itself when time is up.',
  },
  {
    icon: 'ban',
    title: 'App blocking',
    text: 'Choose exactly which apps your child can open, protected by your Parent PIN, and switch blocking on remotely.',
  },
  {
    icon: 'globe',
    title: 'Web filtering',
    text: 'Refuse adult and gambling sites on the child device, and pair it with app blocking for stronger cover.',
  },
  {
    icon: 'pin',
    title: 'Live location & places',
    text: "See your child's latest location, review history, and get told when they arrive at or leave a saved place.",
  },
  {
    icon: 'lifebuoy',
    title: 'Check-In & SOS',
    text: 'Ask your child to confirm they are safe, and receive an instant SOS with location and photo in an emergency.',
  },
  {
    icon: 'shieldCheck',
    title: 'Protection alerts',
    text: 'Know the moment an important permission is switched off, so protection never quietly fades away.',
  },
]

const WHY = [
  {
    title: 'One plan, whole family',
    text: 'A single subscription covers every parent and child device. Only the family owner pays.',
  },
  {
    title: 'Built for co-parenting',
    text: 'Invite a second parent to manage the same children, with access the owner approves.',
  },
  {
    title: 'Privacy first',
    text: "We never sell personal data and never use children's data for advertising. Delete everything anytime.",
  },
  {
    title: 'Honest about limits',
    text: 'We tell you what each platform can and cannot enforce, instead of promising control that does not exist.',
  },
]

const FAQ = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. The trial starts when your first parent and child devices are connected, and includes every Premium feature.',
  },
  {
    q: 'How many devices can I manage?',
    a: 'One subscription covers your whole family — multiple child devices and multiple parents on the same plan.',
  },
  {
    q: 'Can my child uninstall or bypass KidGate?',
    a: 'Sensitive settings sit behind your Parent PIN, and Protection Alerts tell you straight away if a key permission is turned off on the child device.',
  },
  {
    q: 'Can I manage everything from a computer?',
    a: 'You can sign in to the web dashboard to read reports. Changing limits or locking a device is approved from your phone, so a stolen password is never enough.',
  },
]

export default function Home() {
  const root = useReveal()

  return (
    <div className="landing" ref={root}>
      <section className="hero">
        <div className="inner">
          <div>
            <span className="hero-badge">
              <Icon name="shieldCheck" />
              Parental control, done right
            </span>
            <h1>
              Protect your children{' '}
              <span className="accent">without taking away their freedom.</span>
            </h1>
            <p className="lede">
              KidGate gives parents calm, clear control over screen time, apps
              and safety — while kids keep a phone that still feels like theirs.
            </p>
            <ul className="hero-checks">
              {['Screen Time', 'App Blocking', 'Web Filtering', 'Location', 'Family Dashboard'].map(
                (label) => (
                  <li key={label}>
                    <Icon name="check" />
                    {label}
                  </li>
                ),
              )}
            </ul>
            <StoreButtons />
          </div>

          <div className="phone-wrap" aria-hidden="true">
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-card">
                <div className="label">Daily limit</div>
                <div className="value">1h 24m of 3h used</div>
                <div className="phone-bar">
                  <span style={{ width: '47%' }} />
                </div>
              </div>
              <div className="phone-card">
                <div className="label">Blocked hours</div>
                <div className="value">21:00 – 07:00</div>
                <span className="phone-pill">
                  <Icon name="check" />
                  Schedule on
                </span>
              </div>
              <div className="phone-card">
                <div className="label">Location</div>
                <div className="value">At school · 5 min ago</div>
                <span className="phone-pill">
                  <Icon name="check" />
                  Check-In OK
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="inner">
          <ul className="trust-grid reveal">
            {TRUST.map((t) => (
              <li className="trust-item" key={t.title}>
                <Icon name="check" />
                <div>
                  <strong>{t.title}</strong>
                  <span>{t.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">Features</span>
            <h2>Everything a parent needs</h2>
            <p className="section-sub">
              From daily limits to emergency alerts — one app for the whole
              family&apos;s digital wellbeing.
            </p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <article className="feature-card reveal" key={f.title}>
                <div className="feature-icon">
                  <Icon name={f.icon} size={22} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">Parent dashboard</span>
            <h2>The whole family, on one screen</h2>
            <p className="section-sub">
              Screen time, blocked attempts, location and anything that needs
              your attention — on your phone, or in any browser.
            </p>
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
                  ['grid', 'Overview', true],
                  ['clock', 'Screen Time', false],
                  ['apps', 'Apps & Web', false],
                  ['shield', 'Safety', false],
                  ['sliders', 'Controls', false],
                ].map(([icon, label, active]) => (
                  <div
                    className={`showcase-row${active ? ' is-active' : ''}`}
                    key={label}
                  >
                    <Icon name={icon} />
                    {label}
                  </div>
                ))}
              </div>
              <div className="showcase-main">
                <div className="showcase-tiles">
                  <div className="showcase-tile">
                    <em>Screen time today</em>
                    <strong>2h 14m</strong>
                  </div>
                  <div className="showcase-tile">
                    <em>Blocked attempts</em>
                    <strong>41</strong>
                  </div>
                  <div className="showcase-tile">
                    <em>Needs attention</em>
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
              Read reports from any browser
            </span>
            <span>
              <Icon name="qr" />
              Changes approved from your phone
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">Setup</span>
            <h2>Up and running in minutes</h2>
            <p className="section-sub">
              No technical skills needed — the app walks you through every step.
            </p>
          </div>
          <div className="steps">
            {[
              [
                'Set up your device',
                'Install KidGate, choose “This is a parent device”, and sign in with Google, Apple or email.',
              ],
              [
                "Pair your child's device",
                "Install KidGate on your child's phone and connect it by scanning a QR code. Under a minute.",
              ],
              [
                'Set your rules',
                'Pick a daily limit, block apps and hours, and turn on location — all from your own phone.',
              ],
            ].map(([title, text], i) => (
              <article className="step reveal" key={title}>
                <span className="step-num">{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">Why KidGate</span>
            <h2>Built for trust, not surveillance</h2>
            <p className="section-sub">
              Designed to keep the conversation between parent and child open.
            </p>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <article className="why-item reveal" key={w.title}>
                <span className="tick">
                  <Icon name="check" />
                </span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <div className="reveal">
            <span className="eyebrow">FAQ</span>
            <h2>Questions parents ask first</h2>
            <p className="section-sub">Quick answers before you download.</p>
          </div>
          <div className="faq-list reveal">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="faq-more reveal">
            <Link to="/support">
              More questions? Visit Support
              <Icon name="arrowRight" />
            </Link>
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="inner reveal">
          <h2>Start protecting your family today</h2>
          <p className="section-sub">
            Free trial with full access. No credit card needed to begin.
          </p>
          <StoreButtons />
          <p className="cta-note">
            Cancel anytime from the App Store or Google Play.
          </p>
        </div>
      </section>
    </div>
  )
}
