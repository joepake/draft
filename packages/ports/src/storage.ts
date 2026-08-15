/**
 * Local persistence. AsyncStorage on mobile, localStorage on the web, and
 * whatever a native agent uses on desktop.
 */

export interface StoragePort {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;

  /**
   * Everything under a prefix. Used at sign-out to drop one family's cached
   * state without touching device-level settings.
   */
  keys(prefix?: string): Promise<string[]>;
}

/**
 * Storage backed by the platform keystore — Keychain, Keystore, DPAPI.
 *
 * Separate interface rather than a flag, so that "this must be encrypted at
 * rest" is visible in the type of whatever holds it. Secrets, tokens, and the
 * parent PIN hash go here; nothing else does, because keystore access is slow
 * and on some Android builds unreliable.
 *
 * `available()` exists because it genuinely can be false — an Android device
 * with no lock screen set, or a keystore that has failed. Callers must decide
 * whether to degrade or to refuse; there is no safe silent fallback to plain
 * storage.
 */
export interface SecureStoragePort {
  available(): Promise<boolean>;
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
}
