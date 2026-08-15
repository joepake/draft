/**
 * `StoragePort` over `localStorage`.
 *
 * Every method is guarded: private-mode Safari throws on access rather than
 * returning null, and this port is only ever used for cached preferences. A
 * browser that refuses to persist should degrade to "nothing stored", not take
 * the dashboard down.
 *
 * Nothing secret goes here. The parent's write capability rides in the ID
 * token, which is why `SecureStoragePort` has no web implementation and needs
 * none.
 */
export function createStorageAdapter() {
  return {
    async get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },

    async set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // Quota or private mode. The caller's next read simply misses.
      }
    },

    async remove(key) {
      try {
        localStorage.removeItem(key);
      } catch {
        // As above.
      }
    },

    async keys(prefix = '') {
      try {
        return Object.keys(localStorage).filter(key => key.startsWith(prefix));
      } catch {
        return [];
      }
    },
  };
}
