import { useEffect, useRef, useState } from 'react';
import {
  applyActionCode,
  confirmPasswordReset,
  verifyPasswordResetCode,
} from 'firebase/auth';
import BrandLogo from '@kidgate/web-ui/BrandLogo';
import LanguagePicker from '@kidgate/web-ui/LanguagePicker';
import { useT } from '@kidgate/web-ui/useT';
import { describeAuthError } from '../auth/AuthContext.jsx';
import { auth } from '../lib/firebase';

/**
 * The page Firebase's auth mail links to — "Customize action URL" in the
 * console points every template at this host's root, and Firebase appends
 * `?mode=…&oobCode=…&apiKey=…&lang=…` (`docs/EMAIL_TEMPLATES.md`).
 *
 * That URL is one setting for every template, so a mode this page does not
 * draw is forwarded to Firebase's own handler with the query intact rather
 * than refused: the address-change mail's undo link is the one a parent whose
 * account was just taken over presses, and it must keep working.
 */
const OWN_MODES = new Set(['resetPassword', 'verifyEmail']);

/** The phone's sign-up floor (`EmailAuthScreen`); `authAction.tooShort` says the number. */
const MIN_PASSWORD_LENGTH = 6;

/** The code itself is dead — anything else (network, rate limit) is worth a retry. */
const DEAD_CODES = new Set([
  'auth/expired-action-code',
  'auth/invalid-action-code',
  'auth/user-disabled',
  'auth/user-not-found',
]);

/** `{ mode, oobCode }` when this page load is an auth action link, else null. */
export function readAuthAction(search = window.location.search) {
  const params = new URLSearchParams(search);
  const mode = params.get('mode');
  const oobCode = params.get('oobCode');
  return mode && oobCode ? { mode, oobCode } : null;
}

const HEADINGS = {
  checking: 'authAction.checking',
  form: 'authAction.resetTitle',
  invalid: 'authAction.invalid',
};

export default function AuthAction({ mode, oobCode }) {
  const { t } = useT();
  const [step, setStep] = useState('checking');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  // StrictMode runs the effect twice in dev, and `applyActionCode` spends the
  // code: the second call would answer "already used" over a success.
  const started = useRef(false);

  function fail(e) {
    if (DEAD_CODES.has(e?.code)) {
      setStep('invalid');
    } else {
      setStep(current => (current === 'checking' ? 'failed' : current));
      setError(describeAuthError(e, t));
    }
  }

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    if (!auth || !OWN_MODES.has(mode)) {
      window.location.replace(
        `https://${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}/__/auth/action${window.location.search}`,
      );
      return;
    }
    const check =
      mode === 'resetPassword'
        ? verifyPasswordResetCode(auth, oobCode).then(address => {
            setEmail(address);
            setStep('form');
          })
        : applyActionCode(auth, oobCode).then(() => setStep('done'));
    check.catch(fail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, oobCode]);

  async function onSubmit(e) {
    e.preventDefault();
    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(t('authAction.tooShort'));
      return;
    }
    if (password !== confirm) {
      setError(t('authAction.mismatch'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await confirmPasswordReset(auth, oobCode, password);
      setStep('done');
    } catch (err) {
      if (err?.code === 'auth/weak-password') setError(t('authAction.tooShort'));
      else fail(err);
    } finally {
      setBusy(false);
    }
  }

  const isReset = mode === 'resetPassword';
  const heading =
    step === 'done'
      ? isReset
        ? 'authAction.resetDone'
        : 'authAction.verifyDone'
      : HEADINGS[step];
  const sub =
    step === 'form'
      ? email
      : step === 'invalid'
        ? t('authAction.invalidBody')
        : step === 'done'
          ? t(isReset ? 'authAction.resetDoneBody' : 'authAction.verifyDoneBody')
          : null;

  return (
    <div className="login">
      <div className="login-card">
        <div className="login-head">
          <a href="/" className="login-brand">
            <span className="brand-mark" aria-hidden="true">
              <BrandLogo />
            </span>
            KidGate
          </a>
          <LanguagePicker />
        </div>
        {heading && <h1>{t(heading)}</h1>}
        {sub && <p className="login-sub">{sub}</p>}
        {error && (
          <div className="login-error" role="alert">
            {error}
          </div>
        )}

        {step === 'form' && (
          <form className="login-form" onSubmit={onSubmit}>
            {/* Lets a password manager file the new password under the right account. */}
            <input type="text" autoComplete="username" value={email} readOnly hidden />
            <label>
              {t('authAction.newPassword')}
              <input
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoFocus
              />
            </label>
            <label>
              {t('authAction.confirmPassword')}
              <input
                type="password"
                autoComplete="new-password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block" disabled={busy}>
              {busy ? t('authAction.saving') : t('authAction.save')}
            </button>
          </form>
        )}

        {step === 'done' && isReset && (
          <a className="btn btn-primary btn-block" href="/">
            {t('login.submit')}
          </a>
        )}
      </div>
    </div>
  );
}
