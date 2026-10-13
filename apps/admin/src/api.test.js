import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  fetchFamilyDetail,
  fetchFamilyList,
  fetchMetrics,
  fetchSupportAttachment,
  placeHold,
  respondToSupportReport,
} from './api.js';
import { t } from './i18n.js';

// Node globals the app's browser-only ESLint list does not declare.
const { Response, DOMException } = globalThis;

const BASE = 'https://functions.example.test';
const TOKEN = 'id-token-abc';

// `BASE_URL` is read when api.js loads, so the env has to exist before it.
const auth = vi.hoisted(() => {
  vi.stubEnv('VITE_FUNCTIONS_URL', 'https://functions.example.test');
  return { currentUser: null };
});

vi.mock('firebase/auth', () => ({ getAuth: () => auth }));

const json = (body, status = 200) => new Response(JSON.stringify(body), { status });

let fetchMock;
let getIdToken;

beforeEach(() => {
  getIdToken = vi.fn(async () => TOKEN);
  auth.currentUser = { getIdToken };
  fetchMock = vi.fn(async () => json({ ok: true }));
  vi.stubGlobal('fetch', fetchMock);
});

afterEach(() => {
  auth.currentUser = null;
  vi.unstubAllGlobals();
});

describe('without a signed-in user', () => {
  beforeEach(() => {
    auth.currentUser = null;
  });

  it('rejects reads, writes and attachments without calling fetch', async () => {
    const message = t('api.notSignedIn');
    await expect(fetchMetrics()).rejects.toThrow(message);
    await expect(respondToSupportReport({ uid: 'u1', id: 'r1' })).rejects.toThrow(
      message,
    );
    await expect(fetchSupportAttachment('u1', 'r1', 0)).rejects.toThrow(message);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('reads', () => {
  // `App.jsx` forced one refresh before any page mounted; forcing per call
  // was a round trip to securetoken on every request.
  it('send the ID token as a bearer header, unforced and never in the URL', async () => {
    await fetchMetrics();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(`${BASE}/adminMetrics`);
    expect(url).not.toContain(TOKEN);
    expect(init.headers).toEqual({ Authorization: `Bearer ${TOKEN}` });
    expect(getIdToken).toHaveBeenCalledWith();
  });

  it('put params in the query string', async () => {
    await fetchFamilyDetail('u1', 'parent asked for help');
    expect(fetchMock.mock.calls[0][0]).toBe(
      `${BASE}/adminFamilyDetail?uid=u1&reason=parent+asked+for+help`,
    );
  });

  // The server tests `reason` for presence; `reason=` would ask it to validate
  // a string nobody typed.
  it('omit empty family-list filters instead of sending them blank', async () => {
    await fetchFamilyList({ reason: '', cursor: 'c9', limit: 20, planId: undefined });
    await fetchFamilyList();
    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([
      `${BASE}/adminFamilyList?cursor=c9&limit=20`,
      `${BASE}/adminFamilyList`,
    ]);
  });

  it('return the parsed body', async () => {
    fetchMock.mockResolvedValueOnce(json({ families: 3 }));
    await expect(fetchMetrics()).resolves.toEqual({ families: 3 });
  });
});

describe('writes', () => {
  it('POST JSON with the bearer token', async () => {
    await respondToSupportReport({
      uid: 'u1',
      id: 'r1',
      status: 'resolved',
      response: 'Fixed',
    });
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(`${BASE}/adminSupportRespond`);
    expect(init.method).toBe('POST');
    expect(init.headers).toEqual({
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    });
    expect(JSON.parse(init.body)).toEqual({
      uid: 'u1',
      id: 'r1',
      status: 'resolved',
      response: 'Fixed',
    });
  });

  it('send only the fields the endpoint names, whatever the caller passes', async () => {
    await placeHold({
      uid: 'u1',
      deviceId: 'd1',
      holdReason: 'abuse',
      note: 'n',
      reason: 'rate limit exceeded twice',
      email: 'parent@example.com',
    });
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({
      uid: 'u1',
      deviceId: 'd1',
      holdReason: 'abuse',
      note: 'n',
      reason: 'rate limit exceeded twice',
    });
  });
});

describe('errors', () => {
  it("surface the server's message", async () => {
    fetchMock.mockResolvedValueOnce(json({ message: 'reason too short' }, 400));
    await expect(fetchFamilyDetail('u1', 'x')).rejects.toThrow('reason too short');
  });

  it('fall back to the status when the body is not JSON', async () => {
    fetchMock.mockResolvedValueOnce(new Response('<html>', { status: 502 }));
    await expect(placeHold({ uid: 'u1' })).rejects.toThrow(
      t('api.requestFailed', { status: 502 }),
    );
  });

  // `TypeError: Failed to fetch` means no status came back: not deployed, or
  // deployed without the `allUsers` invoker so the CORS preflight dies.
  it('explain a network-level failure instead of "Failed to fetch"', async () => {
    fetchMock.mockRejectedValueOnce(new TypeError('Failed to fetch'));
    await expect(fetchMetrics()).rejects.toThrow(
      t('api.unreachable', { path: 'adminMetrics', service: 'adminmetrics' }),
    );
  });

  it('pass any other fetch failure through unchanged', async () => {
    const aborted = new DOMException('aborted', 'AbortError');
    fetchMock.mockRejectedValueOnce(aborted);
    await expect(fetchMetrics()).rejects.toBe(aborted);
  });
});

describe('fetchSupportAttachment', () => {
  it('fetches the bytes through the API with the token and returns a blob', async () => {
    fetchMock.mockResolvedValueOnce(new Response(new Uint8Array([1, 2, 3])));
    const blob = await fetchSupportAttachment('u1', 'r1', 2);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(`${BASE}/adminSupportAttachment?uid=u1&id=r1&index=2`);
    expect(init.headers).toEqual({ Authorization: `Bearer ${TOKEN}` });
    expect(blob.size).toBe(3);
  });

  // `Attachment` renders `object-empty` and `object-missing` as their own
  // explanations, so the code is thrown, not a sentence.
  it('throws the error code rather than the message', async () => {
    fetchMock.mockResolvedValueOnce(
      json({ error: 'object-missing', message: 'No such object' }, 404),
    );
    await expect(fetchSupportAttachment('u1', 'r1', 0)).rejects.toThrow(
      /^object-missing$/,
    );
  });
});
