/**
 * Crash and diagnostic reporting. Crashlytics on mobile, something else or
 * nothing everywhere else — hence a port rather than a direct dependency.
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface TelemetryPort {
  log(level: LogLevel, message: string, context?: Record<string, unknown>): void;
  recordError(error: Error, context?: Record<string, unknown>): void;

  /**
   * Attach an identifier to subsequent reports.
   *
   * This product's users include children, and its data includes their
   * location and browsing history. Pass an opaque family or device id and
   * nothing else — never an email, a device name a child chose, a domain they
   * visited, or a coordinate. A crash reporter is a third party, and everything
   * handed to it leaves the system.
   */
  setUser(id: string | null): void;

  setEnabled(enabled: boolean): void;
}

/*
 * A no-op implementation belongs in `@kidgate/core/adapters`, not here — this
 * package emits no runtime code. Every platform without a crash reporter, and
 * every test, resolves to that one.
 */
