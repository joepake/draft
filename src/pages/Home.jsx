import { Link } from 'react-router-dom'

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.84-.86 3.08-.78 1.79.14 3.06.86 3.93 2.14-3.62 2.17-3.05 6.65.51 8.13-.66 1.62-1.51 3.22-2.6 4.68ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.31 13.79 12 3.6 21.69c-.37-.19-.6-.57-.6-1.06V3.37c0-.49.23-.87.6-1.06Zm11.63 8.25L5.98 1.74l11.13 6.42-1.88 2.4Zm0 2.88 1.88 2.4L5.98 22.26l9.25-8.82Zm4.94-2.99c.68.39 1.13.94 1.13 1.55s-.45 1.16-1.13 1.55l-2.3 1.33-2.09-2.88 2.09-2.88 2.3 1.33Z" />
    </svg>
  )
}

function StoreButtons() {
  return (
    <div className="store-buttons">
      <a className="store-btn" href="#" aria-label="Download on the App Store">
        <AppleIcon />
        <span>
          <small>Download on the</small>
          <strong>App Store</strong>
        </span>
      </a>
      <a className="store-btn" href="#" aria-label="Get it on Google Play">
        <PlayIcon />
        <span>
          <small>Get it on</small>
          <strong>Google Play</strong>
        </span>
      </a>
    </div>
  )
}

const FEATURES = [
  {
    icon: '⏱️',
    title: 'Screen Time & Daily Limits',
    text: 'Set a daily cap and Blocked Hours for school and bedtime. The device locks automatically when time is up.',
  },
  {
    icon: '🚫',
    title: 'App Blocking',
    text: 'Choose exactly which apps your child can use, protected by your Parent PIN, and turn blocking on remotely.',
  },
  {
    icon: '🌐',
    title: 'Web Filtering',
    text: 'Limit adult websites on the child device and combine it with app blocking for stronger protection.',
  },
  {
    icon: '📍',
    title: 'Live Location & Place Alerts',
    text: "See your child's latest location, review history, and get notified when they arrive at or leave saved places.",
  },
  {
    icon: '🆘',
    title: 'Check-In & SOS',
    text: 'Ask your child to confirm they are safe, and receive instant SOS alerts with location and photo in an emergency.',
  },
  {
    icon: '🛡️',
    title: 'Protection Alerts',
    text: 'Know immediately if an important permission is switched off on the child device, so protection never fades silently.',
  },
]

const WHY = [
  {
    title: 'One plan, whole family',
    text: 'A single subscription covers every parent and child device. Only the family owner pays.',
  },
  {
    title: 'Built for co-parenting',
    text: 'Invite a second parent to manage the same children with owner-approved access.',
  },
  {
    title: 'Privacy first',
    text: "We never sell personal data and never use children's data for advertising. Delete everything anytime.",
  },
  {
    title: 'Works on iOS & Android',
    text: 'Native screen-time controls on both platforms, with clear in-app setup guides for every permission.',
  },
]

export default function Home() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="inner">
          <div>
            <span className="hero-badge">Parental control, done right</span>
            <h1>
              Protect your children{' '}
              <span className="accent">without taking away their freedom.</span>
            </h1>
            <p className="lede">
              KidGate gives parents calm, clear control over screen time,
              apps, and safety — while kids keep a phone that still feels like
              theirs.
            </p>
            <ul className="hero-checks">
              <li>Screen Time</li>
              <li>App Blocking</li>
              <li>Web Filtering</li>
              <li>Location Tracking</li>
              <li>Family Dashboard</li>
            </ul>
            <StoreButtons />
            <p className="hero-link">
              <Link to="/dashboard/demo">See the parent dashboard →</Link>
            </p>
          </div>
          <div className="phone-wrap" aria-hidden="true">
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-card">
                <div className="label">Daily Limit</div>
                <div className="value">1h 24m of 3h used</div>
                <div className="phone-bar">
                  <span style={{ width: '47%' }} />
                </div>
              </div>
              <div className="phone-card">
                <div className="label">Blocked Hours</div>
                <div className="value">21:00 – 07:00</div>
                <span className="phone-pill">Schedule on</span>
              </div>
              <div className="phone-card">
                <div className="label">Location</div>
                <div className="value">At school · 5 min ago</div>
                <span className="phone-pill">Check-In OK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <h2>Everything a parent needs</h2>
          <p className="section-sub">
            From daily limits to emergency alerts — one app for the whole
            family&apos;s digital wellbeing.
          </p>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how">
        <div className="inner">
          <h2>Up and running in minutes</h2>
          <p className="section-sub">
            No technical skills needed — the app guides you through every
            step.
          </p>
          <div className="steps">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Set up your device</h3>
              <p>
                Install KidGate, choose “This is a parent device”, and sign in
                with Google, Apple, or email.
              </p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Pair your child&apos;s device</h3>
              <p>
                Install KidGate on the child&apos;s device and connect it by
                scanning a QR code. Done in under a minute.
              </p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Set your rules</h3>
              <p>
                Pick a daily limit, block apps and hours, and turn on location
                — all from your own phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <h2>Why families choose KidGate</h2>
          <p className="section-sub">
            Designed to build trust between parents and kids, not surveillance.
          </p>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-item" key={w.title}>
                <span className="tick">✓</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how">
        <div className="inner">
          <h2>Frequently asked questions</h2>
          <p className="section-sub">Quick answers before you download.</p>
          <div className="faq-list">
            <details>
              <summary>Is there a free trial?</summary>
              <p>
                Yes. The trial starts when your first parent and child devices
                are connected and includes every Premium feature.
              </p>
            </details>
            <details>
              <summary>How many devices can I manage?</summary>
              <p>
                One subscription covers your whole family — multiple child
                devices and multiple parents under the same plan.
              </p>
            </details>
            <details>
              <summary>Can my child uninstall or bypass KidGate?</summary>
              <p>
                Sensitive settings are protected by your Parent PIN, and
                Protection Alerts notify you immediately if a key permission
                is turned off on the child device.
              </p>
            </details>
            <details>
              <summary>Can I delete our data?</summary>
              <p>
                Yes — you can delete your account and all family data at any
                time, from the app or from our website. See the{' '}
                <Link to="/delete-account">Account &amp; Data Deletion</Link>{' '}
                page.
              </p>
            </details>
          </div>
          <p className="faq-more">
            <Link to="/support">More questions? Visit Support →</Link>
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="inner">
          <h2>Start protecting your family today</h2>
          <p className="section-sub">
            Free trial with full access. No credit card required to begin.
          </p>
          <StoreButtons />
          <div className="cta-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
