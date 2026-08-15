/**
 * Push messaging. FCM on mobile, web push in a browser, APNs direct from a
 * native agent.
 *
 * Push is a control channel here, not only a notification channel. A parent
 * locking a device sends a push; the child device applies the policy on
 * receipt. That means delivery failure is a product failure, not a cosmetic
 * one, and silent pushes must be handled while the app is backgrounded.
 */

export interface PushMessage {
  /** Stable identifier for what this push asks the device to do. */
  type: string;
  data: Record<string, string>;
  /** Absent for silent control pushes, which is the common case. */
  notification?: { title: string; body: string };
}

export interface PushPort {
  requestPermission(): Promise<boolean>;

  /** Null when permission is absent or the platform has no token yet. */
  getToken(): Promise<string | null>;

  /**
   * Tokens rotate without warning — app reinstall, OS restore, FCM's own
   * schedule. A stale token on the server means a lock command silently never
   * arrives, so the handler must write the new one immediately rather than at
   * next launch.
   */
  onTokenRefresh(listener: (token: string) => void): () => void;

  onMessage(listener: (message: PushMessage) => void): () => void;

  /**
   * Messages that arrived while the app was not in the foreground.
   *
   * Registered separately because the platforms differ in what they will let
   * run: iOS gives a short background window and may coalesce, Android runs a
   * headless task. Work here must be short and idempotent — the same control
   * push can be delivered more than once.
   */
  onBackgroundMessage(handler: (message: PushMessage) => Promise<void>): void;
}
