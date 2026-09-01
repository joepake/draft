import { getAuth } from 'firebase/auth';

/**
 * The only way this app reaches data.
 *
 * There is no Firestore client here on purpose. Every read goes through a Cloud
 * Function that verifies `admin === true` server-side and writes an audit entry
 * before it reads anything — see `functions/admin/`. `firestore.rules` stays
 * unaware that operators exist, so a broadened rule cannot hand this access to
 * anything else holding the claim.
 */

const BASE_URL = import.meta.env.VITE_FUNCTIONS_URL;

/**
 * `TypeError: Failed to fetch`, translated into the two things it actually
 * means here.
 *
 * The browser collapses every network-level failure into that one string, and
 * a deployed, working function would have produced `Request failed (<status>)`
 * instead — so reaching this means the response never got far enough to have a
 * status. Two causes, and **the second is the one that looks impossible**:
 *
 * 1. The function is not deployed. Firebase answers an unknown name with a 404
 *    carrying no CORS headers.
 * 2. **The function is deployed but its Cloud Run service has no `allUsers`
 *    invoker binding.** Firebase adds that on deploy for HTTPS functions and
 *    the step can fail while the deploy still reports success — measured
 *    2026-09-01, when `adminSupportAttachment` landed private and its three
 *    siblings did not. A CORS preflight carries no `Authorization` header by
 *    specification, so Cloud Run rejects the `OPTIONS` at the IAM layer before
 *    any handler runs, and no CORS headers come back.
 *
 * `allUsers` there is not "the endpoint is public": every request still passes
 * `requireOperator`, which verifies the ID token and the `admin` claim. It is
 * how all the other operator endpoints already work — Cloud Run lets the
 * request in, the handler decides.
 */
function describeNetworkFailure(error, path) {
  if (error instanceof TypeError) {
    return new Error(
      `Could not reach ${path}. Either it is not deployed, or its Cloud Run ` +
        'service is missing the allUsers invoker binding (a CORS preflight ' +
        'sends no Authorization header, so IAM rejects it before the handler ' +
        `runs). Check: gcloud run services get-iam-policy ${path.toLowerCase()} ` +
        '--region asia-southeast1 --project kidgate',
    );
  }
  return error;
}

async function post(path, body) {
  const user = getAuth().currentUser;
  if (!user) {
    throw new Error('Not signed in.');
  }
  const token = await user.getIdToken(true);
  const response = await fetch(`${BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).catch(error => {
    throw describeNetworkFailure(error, path);
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.message || `Request failed (${response.status})`);
  }
  return response.json();
}

async function call(path, params = {}) {
  const user = getAuth().currentUser;
  if (!user) {
    throw new Error('Not signed in.');
  }

  // `true` forces a refresh: the operator claim is granted out of band, and a
  // session that predates it carries a token that does not mention it.
  const token = await user.getIdToken(true);
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/${path}${query ? `?${query}` : ''}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).catch(error => {
    throw describeNetworkFailure(error, path);
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.message || `Request failed (${response.status})`);
  }
  return response.json();
}

/** Counts only. Nothing here identifies a person. */
export function fetchMetrics() {
  return call('adminMetrics');
}

/**
 * A range of daily rollup rows, in one request.
 *
 * One call for the whole page, deliberately: each request pays a cold start,
 * a forced token refresh, a revocation check and an audit write, so a chart
 * per endpoint would be tens of seconds and a flooded log.
 * `docs/ADMIN_REPORTING.md`.
 */
export function fetchReport(from, to) {
  return call('adminReport', { from, to });
}

/**
 * The support queue. No stated reason: the parent wrote this document to the
 * operator, so consent is the act of filing it — `functions/admin/support.js`
 * has the full argument. Still audited.
 */
export function fetchSupportReports() {
  return call('adminSupportReports');
}

/** One report, with attachment metadata — no URLs. See `fetchSupportAttachment`. */
export function fetchSupportReport(uid, id) {
  return call('adminSupportReports', { uid, id });
}

/**
 * One screenshot, as a blob.
 *
 * The bytes come through the operator API rather than a signed URL, so the
 * request needs an `Authorization` header and a bare `<img src>` cannot fetch
 * it. The caller turns this into an object URL and revokes it on unmount —
 * which is also why no link to a parent's screenshot ever leaves this tab.
 */
export async function fetchSupportAttachment(uid, id, index) {
  const user = getAuth().currentUser;
  if (!user) {
    throw new Error('Not signed in.');
  }
  const token = await user.getIdToken(true);
  const query = new URLSearchParams({ uid, id, index: String(index) });
  const response = await fetch(`${BASE_URL}/adminSupportAttachment?${query}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).catch(error => {
    throw describeNetworkFailure(error, 'adminSupportAttachment');
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    // The error *code* is thrown here, not a sentence: `Attachment` renders
    // `object-empty` and `object-missing` as their own explanations.
    throw new Error(payload.error || `Request failed (${response.status})`);
  }
  return response.blob();
}

/** **The family sees this.** Status and reply both land on a document the
 * parent's own app can read. */
export function respondToSupportReport({ uid, id, status, response }) {
  return post('adminSupportRespond', { uid, id, status, response });
}

/**
 * One family's record. Requires a stated reason, which is stored in the audit
 * log alongside who asked and when.
 */
export function fetchFamilyDetail(uid, reason) {
  return call('adminFamilyDetail', { uid, reason });
}
