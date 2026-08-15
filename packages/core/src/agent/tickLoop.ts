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
  let running = false;
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
    if (running) {
      return;
    }
    running = true;
    try {
      latest = await options.host.tick();
      failures = 0;
    } catch (error) {
      failures += 1;
      options.onError?.(error);
    } finally {
      running = false;
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

    latest: () => latest,
    failures: () => failures,

    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
