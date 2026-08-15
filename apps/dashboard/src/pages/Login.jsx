import { useState } from 'react';
import { Link } from 'react-router-dom';
import { describeAuthError, useAuth } from '../auth/AuthContext.jsx';
import QrSignIn from '../auth/QrSignIn.jsx';
import BrandLogo from '@kidgate/web-ui/BrandLogo';
import LanguagePicker from '@kidgate/web-ui/LanguagePicker';
import { useT } from '@kidgate/web-ui/useT';

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.26-2.09 3.56-5.17 3.56-8.87Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.87-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.28a12 12 0 0 0 0 10.76l3.99-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.62l3.99 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.84-.86 3.08-.78 1.79.14 3.06.86 3.93 2.14-3.62 2.17-3.05 6.65.51 8.13-.66 1.62-1.51 3.22-2.6 4.68ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}

export default function Login() {
  const {
    configured,
    signInWithGoogle,
    signInWithApple,
    signInWithEmail,
    resetPassword,
  } = useAuth();
  const { t } = useT();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(null);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  async function run(kind, fn) {
    setBusy(kind);
    setError(null);
    setInfo(null);
    try {
      await fn();
    } catch (e) {
      setError(describeAuthError(e, t));
    } finally {
      setBusy(null);
    }
  }

  async function onReset() {
    if (!email.trim()) {
      setError(t('login.resetNeedsEmail'));
      return;
    }
    await run('reset', async () => {
      await resetPassword(email);
      setInfo(t('login.resetSent', { email: email.trim() }));
    });
  }

  return (
    <div className="login">
      <div className="login-card">
        <div className="login-head">
          <Link to="/" className="login-brand">
            <span className="brand-mark" aria-hidden="true">
              <BrandLogo />
            </span>
            KidGate
          </Link>
          <LanguagePicker />
        </div>
        <h1>{t('login.title')}</h1>
        <p className="login-sub">{t('login.sub')}</p>

        {!configured && (
          <div className="login-warn">
            <strong>{t('login.notConfiguredTitle')}</strong>
            <span>{t('login.notConfiguredBody')}</span>
          </div>
        )}

        {error && <div className="login-error">{error}</div>}
        {info && <div className="login-info">{info}</div>}

        {configured && (
          <>
            <div className="qr-block">
              <QrSignIn onError={setError} />
              <p className="qr-why">{t('login.qrWhy')}</p>
            </div>
            <div className="login-or">
              <span>{t('login.orViewOnly')}</span>
            </div>
          </>
        )}

        <div className="login-providers">
          <button
            className="oauth-btn"
            disabled={!configured || busy}
            onClick={() => run('google', signInWithGoogle)}
          >
            <GoogleMark />
            {busy === 'google' ? t('login.googleBusy') : t('login.google')}
          </button>
          <button
            className="oauth-btn"
            disabled={!configured || busy}
            onClick={() => run('apple', signInWithApple)}
          >
            <AppleMark />
            {busy === 'apple' ? t('login.appleBusy') : t('login.apple')}
          </button>
        </div>

        <div className="login-or">
          <span>{t('login.orEmail')}</span>
        </div>

        <form
          className="login-form"
          onSubmit={e => {
            e.preventDefault();
            run('email', () => signInWithEmail(email, password));
          }}
        >
          <label>
            {t('login.email')}
            <input
              type="email"
              autoComplete="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('login.emailPlaceholder')}
              required
            />
          </label>
          <label>
            {t('login.password')}
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={!configured || busy}
          >
            {busy === 'email' ? t('login.submitBusy') : t('login.submit')}
          </button>
          <button
            type="button"
            className="login-link"
            onClick={onReset}
            disabled={!configured || busy}
          >
            {t('login.forgot')}
          </button>
        </form>

        <p className="login-foot">{t('login.foot')}</p>
      </div>
    </div>
  );
}
