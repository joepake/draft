import { functionsBaseUrl } from '../lib/firebase.js'

/**
 * QR sign-in: the browser opens a session, shows the short code as a QR, and
 * an already-paired parent phone scans and approves it.
 *
 * The split matters. The QR carries only the short `code`, which is what the
 * phone needs to find the session. The `sessionId` is a UUID that never leaves
 * this browser, and the custom token is handed out only to a caller that knows
 * it — so someone who photographs the screen cannot take over the sign-in.
 * Same shape as the app's existing child pairing handshake.
 */

const POLL_INTERVAL_MS = 2000

async function post(name, body) {
  if (!functionsBaseUrl) {
    const err = new Error(
      'Cloud Functions URL is not configured (VITE_FIREBASE_FUNCTIONS_URL).',
    )
    err.code = 'config/missing-functions-url'
    throw err
  }

  const res = await fetch(`${functionsBaseUrl}/${name}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const payload = await res.json().catch(() => ({}))
  if (!res.ok || payload.ok === false) {
    const err = new Error(payload.error || `Request failed (${res.status})`)
    err.code = payload.code
    throw err
  }
  return payload
}

export function createWebSession() {
  return post('createParentWebSession', {})
}

/**
 * Polls until the phone approves, rejects, or the code expires.
 * Resolves with the custom token; rejects with a coded error otherwise.
 */
export function waitForApproval(sessionId, { signal } = {}) {
  return new Promise((resolve, reject) => {
    let timer = null

    const stop = () => {
      if (timer) clearTimeout(timer)
      signal?.removeEventListener('abort', onAbort)
    }

    function onAbort() {
      stop()
      const err = new Error('Cancelled')
      err.code = 'web/cancelled'
      reject(err)
    }

    signal?.addEventListener('abort', onAbort)

    async function tick() {
      if (signal?.aborted) return
      try {
        const result = await post('pollParentWebSession', { sessionId })
        if (result.status === 'confirmed' && result.customToken) {
          stop()
          resolve(result.customToken)
          return
        }
        if (result.status === 'rejected') {
          stop()
          const err = new Error('The request was declined on the phone.')
          err.code = 'web/rejected'
          reject(err)
          return
        }
        if (result.status === 'expired') {
          stop()
          const err = new Error('The code expired. Generate a new one.')
          err.code = 'web/expired'
          reject(err)
          return
        }
        timer = setTimeout(tick, POLL_INTERVAL_MS)
      } catch (e) {
        stop()
        reject(e)
      }
    }

    tick()
  })
}
