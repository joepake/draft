import type { ApiFailure, ApiPort } from '@kidgate/ports/api';

import {
  createRequestThrottle,
  REQUEST_THROTTLED_CODE,
  type RequestThrottle,
} from '../domain/requestThrottle';

/**
 * An `ApiPort` that refuses a request past `domain/requestThrottle` before it
 * leaves the process. The refusal is the same `ApiFailure` a server 429
 * becomes in `httpApi`, so every caller renders it the way it already renders
 * the server's. `apps/mobile` counts in its axios interceptor instead, because
 * several of its services post past the port.
 */
export function withRequestThrottle(
  api: ApiPort,
  throttle: RequestThrottle = createRequestThrottle(),
): ApiPort {
  return {
    post(path, body, options) {
      const waitMs = throttle.check(path, body);
      if (waitMs !== null) {
        const failure: ApiFailure = {
          code: 'rateLimited',
          status: 429,
          serverCode: REQUEST_THROTTLED_CODE,
          retryAfterMs: waitMs,
        };
        return Promise.reject(failure);
      }
      return api.post(path, body, options);
    },
  };
}
