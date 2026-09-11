import { useCallback, useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import {
  clearWebSession,
  getOrCreateWebSession,
  waitForApproval,
} from './webSession.js';
import { describeAuthError, useAuth } from './AuthContext.jsx';
import { RichText } from '@kidgate/web-ui/RichText';
import { useT } from '@kidgate/web-ui/useT';

/** What the phone's scanner reads. The short code is all it needs. */
function qrPayload(code) {
  return `kidgate://web-signin?code=${encodeURIComponent(code)}`;
}

function formatCountdown(ms) {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = String(total % 60).padStart(2, '0');
  return `${m}:${s}`;
}

/**
 * `mode` picks which redemption runs, and nothing else. `signIn` is the login
 * screen; `stepUp` is a browser already signed in and reading, unlocking write
 * — the same handshake, counted as a step-up rather than a second login.
 *
 * `autoStart` puts the code on screen without a press. The login screen leads
 * with it, so making a parent ask for the thing the page is for was a click
 * that bought nothing. The step-up sheet does not: there the QR is the second
 * of two offers, under the PIN box, and minting a code for a parent who is
 * about to type six digits is a request nobody needed.
 */
export default function QrSignIn({ onError, mode = 'signIn', autoStart = false }) {
  const { signInWithQrToken, stepUpWithQrToken } = useAuth();
  const redeem = mode === 'stepUp' ? stepUpWithQrToken : signInWithQrToken;
  const { t } = useT();
  const [session, setSession] = useState(null);
  const [svg, setSvg] = useState(null);
  const [status, setStatus] = useState(autoStart ? 'starting' : 'idle');
  const [remaining, setRemaining] = useState(0);
  /*
   * When the mint limiter's window ends, or 0 when nothing is refusing.
   *
   * "Try again" mints — that is the whole of `restart` — so leaving it live
   * during a 429 turns a parent reading "wait five minutes" into the thing that
   * keeps the window full. The message already carries the figure; this stops
   * the button from contradicting it.
   */
  const [cooldownUntilMs, setCooldownUntilMs] = useState(0);
  const [coolingDown, setCoolingDown] = useState(false);
  const abortRef = useRef(null);
  /*
   * Latched the moment a token is in hand. `start` is re-created whenever the
   * auth value or the language changes, and one of those changes *because* the
   * sign-in landed — without this the auto-start effect would fire again on the
   * way out and re-poll a session the server has already marked redeemed,
   * flashing "This code expired" over a successful sign-in.
   */
  const redeemedRef = useRef(false);

  const start = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus('starting');
    setSvg(null);
    onError?.(null);

    try {
      const created = await getOrCreateWebSession();
      if (controller.signal.aborted) return;
      setSession(created);
      setStatus('waiting');

      const markup = await QRCode.toString(qrPayload(created.code), {
        type: 'svg',
        margin: 1,
        errorCorrectionLevel: 'M',
        color: { dark: '#0b1226', light: '#ffffff' },
      });
      if (controller.signal.aborted) return;
      setSvg(markup);

      const token = await waitForApproval(created.sessionId, {
        signal: controller.signal,
      });
      if (controller.signal.aborted) return;

      setStatus('signing-in');
      // Before the await: the token is one-shot server-side, so from here on
      // this session must never be handed to another poll.
      redeemedRef.current = true;
      clearWebSession();
      await redeem(token);
      // onAuthStateChanged takes it from here.
    } catch (e) {
      if (controller.signal.aborted || e?.code === 'web/cancelled') return;
      // Rejected, expired or failed — the cached code is spent either way, and
      // keeping it would hand the same dead code to the next mount.
      clearWebSession();
      setStatus('error');
      if (e?.code === 'rate/too-many-attempts' && e.retryAfterMs > 0) {
        setCooldownUntilMs(Date.now() + e.retryAfterMs);
      }
      onError?.(describeAuthError(e, t));
    }
  }, [onError, redeem, t]);

  /** The retry buttons: never reuse the code that just failed or ran out. */
  const restart = useCallback(() => {
    clearWebSession();
    void start();
  }, [start]);

  // Re-enables the button on its own, so the parent is not left looking at a
  // dead control after the window they were told to wait out has passed.
  useEffect(() => {
    if (!cooldownUntilMs) {
      setCoolingDown(false);
      return undefined;
    }
    const tick = () => setCoolingDown(Date.now() < cooldownUntilMs);
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [cooldownUntilMs]);

  /*
   * Auto-start owns its own abort so a re-created `start` cancels the poll it
   * replaces. The cache means the replacement re-polls the same code rather
   * than minting a second one.
   *
   * Nothing is minted into a tab nobody is looking at. A code opened in a
   * background tab — a middle-click, a restored session — spends its three
   * minutes unseen and greets the parent expired, having cost a
   * `createParentWebSession` to do it.
   */
  useEffect(() => {
    if (!autoStart || redeemedRef.current) return undefined;

    const doc = typeof document === 'undefined' ? null : document;

    if (doc?.hidden) {
      const onVisible = () => {
        if (doc.hidden) return;
        doc.removeEventListener('visibilitychange', onVisible);
        if (!redeemedRef.current) void start();
      };
      doc.addEventListener('visibilitychange', onVisible);
      return () => {
        doc.removeEventListener('visibilitychange', onVisible);
        abortRef.current?.abort();
      };
    }

    void start();
    return () => abortRef.current?.abort();
  }, [autoStart, start]);

  // The manual path has no effect of its own to clean up after.
  useEffect(() => () => abortRef.current?.abort(), []);

  // Countdown, and stop polling once the code can no longer be redeemed.
  useEffect(() => {
    if (status !== 'waiting' || !session?.expiresAtMs) return;
    const tick = () => {
      const left = session.expiresAtMs - Date.now();
      setRemaining(left);
      if (left <= 0) {
        abortRef.current?.abort();
        clearWebSession();
        setStatus('expired');
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [status, session]);

  if (status === 'idle') {
    return (
      <button className="btn btn-primary btn-block" onClick={start}>
        {t('qr.start')}
      </button>
    );
  }

  return (
    <div className="qr">
      {svg ? (
        <div className="qr-code" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="qr-code qr-placeholder">
          {status === 'starting' ? t('qr.generating') : ''}
        </div>
      )}

      {session?.code && status === 'waiting' && (
        <p className="qr-code-text">
          <span>{session.code}</span>
        </p>
      )}

      {status === 'waiting' && (
        <>
          <ol className="qr-steps">
            <RichText as="li" text={t('qr.step1')} />
            <RichText as="li" text={t('qr.step2')} />
            <RichText as="li" text={t('qr.step3')} />
          </ol>
          <p className="qr-meta">
            {t('qr.waiting', { time: formatCountdown(remaining) })}
          </p>
        </>
      )}

      {status === 'signing-in' && <p className="qr-meta">{t('qr.signingIn')}</p>}

      {(status === 'expired' || status === 'error') && (
        <p className="qr-meta">
          {status === 'expired' ? t('qr.expired') : t('qr.failed')}
        </p>
      )}

      {status !== 'signing-in' && status !== 'starting' && (
        <button className="login-link" onClick={restart} disabled={coolingDown}>
          {status === 'waiting' ? t('qr.newCode') : t('qr.tryAgain')}
        </button>
      )}
    </div>
  );
}
