import { useCallback, useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { createWebSession, waitForApproval } from './webSession.js'
import { describeAuthError, useAuth } from './AuthContext.jsx'
import { RichText } from '../i18n/RichText.jsx'
import { useT } from '../i18n/useT.js'

/** What the phone's scanner reads. The short code is all it needs. */
function qrPayload(code) {
  return `kidgate://web-signin?code=${encodeURIComponent(code)}`
}

function formatCountdown(ms) {
  const total = Math.max(0, Math.round(ms / 1000))
  const m = Math.floor(total / 60)
  const s = String(total % 60).padStart(2, '0')
  return `${m}:${s}`
}

export default function QrSignIn({ onError }) {
  const { signInWithQrToken } = useAuth()
  const { t } = useT()
  const [session, setSession] = useState(null)
  const [svg, setSvg] = useState(null)
  const [status, setStatus] = useState('idle')
  const [remaining, setRemaining] = useState(0)
  const abortRef = useRef(null)

  const start = useCallback(async () => {
    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    setStatus('starting')
    setSvg(null)
    onError?.(null)

    try {
      const created = await createWebSession()
      if (controller.signal.aborted) return
      setSession(created)
      setStatus('waiting')

      const markup = await QRCode.toString(qrPayload(created.code), {
        type: 'svg',
        margin: 1,
        errorCorrectionLevel: 'M',
        color: { dark: '#0b1226', light: '#ffffff' },
      })
      if (controller.signal.aborted) return
      setSvg(markup)

      const token = await waitForApproval(created.sessionId, {
        signal: controller.signal,
      })
      if (controller.signal.aborted) return

      setStatus('signing-in')
      await signInWithQrToken(token)
      // onAuthStateChanged takes it from here.
    } catch (e) {
      if (controller.signal.aborted || e?.code === 'web/cancelled') return
      setStatus('error')
      onError?.(describeAuthError(e, t))
    }
  }, [onError, signInWithQrToken, t])

  useEffect(() => () => abortRef.current?.abort(), [])

  // Countdown, and stop polling once the code can no longer be redeemed.
  useEffect(() => {
    if (status !== 'waiting' || !session?.expiresAtMs) return
    const tick = () => {
      const left = session.expiresAtMs - Date.now()
      setRemaining(left)
      if (left <= 0) {
        abortRef.current?.abort()
        setStatus('expired')
      }
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [status, session])

  if (status === 'idle') {
    return (
      <button className="btn btn-primary btn-block" onClick={start}>
        {t('qr.start')}
      </button>
    )
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

      {status !== 'signing-in' && (
        <button className="login-link" onClick={start}>
          {status === 'waiting' ? t('qr.newCode') : t('qr.tryAgain')}
        </button>
      )}
    </div>
  )
}
