import { useCallback, useEffect, useRef, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useAuth } from './AuthContext.jsx';
import QrSignIn from './QrSignIn.jsx';

/**
 * Unlocking write on a browser that is already signed in.
 *
 * **Two proofs, side by side, neither demoted to a footnote.** The PIN is the
 * one that works when the phone is lost, flat or in another room, and the QR is
 * the one that works when the family never set a PIN — a layout that hid either
 * would leave some parent with no way through (`docs/BACKLOG.md`, "The
 * dashboard's write gate becomes a Parent PIN step-up").
 *
 * The QR half is the login screen's own component in `stepUp` mode. Rendering a
 * second QR flow here would be a second thing to keep in step with
 * `functions/http/webSession.js`.
 */
export default function StepUpSheet({ familyOwnerUserId, onClose, onUnlocked }) {
  const { t } = useT();
  const { stepUpWithPin } = useAuth();
  const [pin, setPin] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Escape closes. A parent who opened this by mistake should not have to aim
  // at a button to get their reading surface back.
  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const submit = useCallback(
    async event => {
      event.preventDefault();
      if (busy || pin.length !== 6) return;
      setBusy(true);
      setError(null);
      try {
        await stepUpWithPin({ pin, familyOwnerUserId });
        // `onAuthStateChanged` re-reads the claims from here; the sheet closes
        // on the way out so the parent sees the controls it unlocked.
        onUnlocked();
      } catch (e) {
        // The PIN never survives a failure. Retyping six digits is cheap; a
        // wrong one left in the box is a second wrong attempt waiting to be
        // submitted by a parent who did not notice.
        setPin('');
        inputRef.current?.focus();
        if (e?.code === 'pin/wrong') {
          setError(t('dash.pinWrong', { count: e.attemptsRemaining ?? 0 }));
        } else if (e?.code === 'pin/locked') {
          setError(t('dash.pinLocked'));
        } else if (e?.code === 'pin/not-set') {
          setError(t('dash.pinNotSet'));
        } else {
          setError(e?.message || t('controlError.generic'));
        }
      } finally {
        setBusy(false);
      }
    },
    [busy, pin, stepUpWithPin, familyOwnerUserId, onUnlocked, t],
  );

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-label={t('dash.pinTitle')}
        onClick={event => event.stopPropagation()}
      >
        <h2 className="sheet-title">{t('dash.pinTitle')}</h2>
        <p className="sheet-body">{t('dash.pinBody')}</p>

        <form onSubmit={submit}>
          <label className="sheet-label" htmlFor="step-up-pin">
            {t('dash.pinLabel')}
          </label>
          <input
            id="step-up-pin"
            ref={inputRef}
            className="sheet-input"
            /*
             * `text` with a numeric mode, not `type="password"`: a browser
             * offers to save a password field, and what it would save is the
             * family's PIN. `inputMode` still brings up the digit pad on a
             * phone-sized screen.
             */
            type="text"
            inputMode="numeric"
            autoComplete="off"
            maxLength={6}
            value={pin}
            disabled={busy}
            onChange={event => setPin(event.target.value.replace(/\D/g, ''))}
          />
          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={busy || pin.length !== 6}
          >
            {busy ? t('dash.working') : t('dash.pinSubmit')}
          </button>
        </form>

        {error && <p className="sheet-error">{error}</p>}

        <div className="sheet-divider">
          <span>{t('dash.pinOrScan')}</span>
        </div>

        {/*
          Said once, under the divider rather than beside the PIN box: the two
          proofs are not equally strong and hiding that would be the dishonest
          half of putting them side by side. It sits with the QR because it is
          a recommendation, not a warning about the thing above it — a parent
          whose phone is elsewhere still has a way in and should not be made to
          feel they took the wrong one.
        */}
        <p className="sheet-note">{t('dash.qrSaferNote')}</p>

        <QrSignIn mode="stepUp" onError={setError} />

        <button className="login-link" onClick={onClose}>
          {t('dash.close')}
        </button>
      </div>
    </div>
  );
}
