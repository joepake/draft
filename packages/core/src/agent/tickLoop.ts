/**
 * The loop every always-on child agent runs.
 *
 * `apps/desktop` and `apps/tv` both drive enforcement from an interval, and for
 * a while both had their own. The TV copy was the poorer of the two — no
 * failure count and no subscription, so its Status screen could not admit the
 * loop had stopped, which is the one thing that screen has to be able to say.
 *
 * Everything interesting happens in the host's `tick()`; this file
 * only decides how often, and makes sure one bad cycle does not end the agent.
 *
 * A rejected tick must never stop the interval. The realistic causes are a
 * transient IPC failure or an app that vanished mid-sweep, and an agent that
 * quietly stopped enforcing after one of those is worse than any of them: the
 * child's device keeps working, the parent's dashboard keeps saying "protected",
 * and nothing surfaces until someone checks.
 */

/**
 * Anything with a cycle to run.
 *
 * The loop was `apps/desktop`'s and took a `DesktopEnforcementHost`; `apps/tv`
 * then grew a second, worse copy of it — no failure count, no subscription — and
 * its Status screen consequently had no way to admit the loop had died. One
 * type parameter is the whole difference between a shared loop and two.
 *
 * Deliberately not `EnforcementHost`: that interface has no `tick`, because
 * ticking is how *these* two hosts happen to be driven and not part of what a
 * child device is.
 */
export interface Tickable<T> {
  tick(): Promise<T>;
}

/**
 * 30 seconds — a third of `MAX_ATTRIBUTED_GAP_MS`.
 *
 * The cap only binds a host that folds foreground samples, which `apps/desktop`
 * does and `apps/tv` does not (Android keeps the record there). On a TV this is
 * a reaction time instead: how long a blocked hour can run before the overlay
 * comes up. Same number, and it should stay the same number — three parental
 * controls in one family disagreeing about how fast a rule takes effect is a
 * support conversation.
 *
 * The two are related and must stay related: the usage reducer refuses to
 * credit a gap longer than its cap, so an interval anywhere near the cap would
 * start silently discarding real screen time whenever the machine was busy.
 * Three ticks of headroom is what keeps a slow moment from becoming lost
 * minutes.
 */
export const TICK_INTERVAL_MS = 30_000;

export interface Agent<T> {
  start(): void;
  stop(): void;
  /** The most recent cycle, or null before the first one completes. */
  latest(): T | null;
  /** Consecutive failed cycles. Non-zero means enforcement is not happening. */
  failures(): number;
  /**
   * Run a cycle now, without waiting for the interval or disturbing it.
   *
   * For the moments that are known to have changed something the cycle
   * reports — a policy landing from `controlsSync` is the one that exists —
   * rather than for shortening the cadence, which is what `intervalMs` is for.
   *
   * Safe to call in a burst and safe to call while one is running: the overlap
   * guard drops the second, and every consumer is already idempotent about an
   * extra call because the backstop in `apps/desktop/src/nativeClock.ts`
   * requires exactly that. `foregroundUsage` credits *elapsed* time, so a
   * cycle moments after another credits nothing and double-counts nothing.
   *
   * Does not reset the interval. Re-phasing it would mean a device whose
   * parent is actively changing settings quietly stops ticking at its own
   * cadence, which is the opposite of what asking for a tick should do.
   */
  runNow(): void;
  subscribe(listener: () => void): () => void;
}

export interface AgentOptions<T> {
  host: Tickable<T>;
  intervalMs?: number;
  onError?: (error: unknown) => void;
  /** Injected for tests. */
  setIntervalImpl?: typeof setInterval;
  clearIntervalImpl?: typeof clearInterval;
}

export function createAgent<T>(options: AgentOptions<T>): Agent<T> {
  const intervalMs = options.intervalMs ?? TICK_INTERVAL_MS;
  const start = options.setIntervalImpl ?? setInterval;
  const stop = options.clearIntervalImpl ?? clearInterval;

  let handle: ReturnType<typeof setInterval> | null = null;
  let latest: T | null = null;
  let failures = 0;
  /**
   * The in-flight cycle: a token plus its start time, not a boolean.
   *
   * A boolean overlap guard assumes every cycle eventually settles, and a
   * bridge call has no timeout — measured 2026-08-25 on the desktop's
   * heartbeat (same latch shape), one await left hanging by a mid-request
   * WebView suspension held the latch until the process died, and every later
   * cycle bounced off it silently. The timestamp lets the loop abandon a hung
   * cycle after `stuckMs`; the token keeps the abandoned cycle's `finally`
   * from releasing the latch the replacement now holds.
   */
  let inFlight: symbol | null = null;
  let inFlightSinceMs = 0;
  /*
   * Four intervals, floored at two minutes: long enough that a cycle merely
   * slowed by load is never abandoned (two concurrent cycles would double-fold
   * a sample), short enough that a genuinely hung loop admits it within
   * minutes rather than never.
   */
  const stuckMs = Math.max(intervalMs * 4, 120_000);
  const listeners = new Set<() => void>();

  function notify() {
    for (const listener of listeners) {
      listener();
    }
  }

  async function cycle() {
    /*
     * Overlap guard. A tick that outlives its interval — a device under load, a
     * slow bridge call — would otherwise start a second one on top of it,
     * and two concurrent cycles both fold a sample into the usage state and
     * double-count the interval between them.
     */
    const nowMs = Date.now();
    if (inFlight) {
      if (nowMs - inFlightSinceMs < stuckMs) {
        return;
      }
      // Hung, not slow. Counted as a failure so a status screen can admit
      // the loop stalled, and surfaced so telemetry names the stuck await.
      failures += 1;
      options.onError?.(
        new Error(`tick stuck for ${nowMs - inFlightSinceMs} ms; abandoning it`),
      );
    }
    const token = Symbol('cycle');
    inFlight = token;
    inFlightSinceMs = nowMs;
    try {
      latest = await options.host.tick();
      failures = 0;
    } catch (error) {
      failures += 1;
      options.onError?.(error);
    } finally {
      if (inFlight === token) {
        inFlight = null;
      }
      notify();
    }
  }

  return {
    start() {
      if (handle !== null) {
        return;
      }
      // Run once immediately: waiting a full interval after launch means a
      // child who reboots at 22:01 gets thirty unenforced seconds every time.
      void cycle();
      handle = start(() => void cycle(), intervalMs);
    },

    stop() {
      if (handle !== null) {
        stop(handle);
        handle = null;
      }
    },

    runNow() {
      // Only while started. A cycle from a stopped agent would fold a
      // foreground sample for a device that has been unpaired.
      if (handle !== null) {
        void cycle();
      }
    },

    latest: () => latest,
    failures: () => failures,

    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
