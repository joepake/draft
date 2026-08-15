// These arrays seed the hash state below. IMPORTANT: this reproduces the
// exact (non-standard) constant-generation loop the previous per-call
// implementation used, bug-for-bug — including its `isComposite` check,
// which does not actually sieve out composite numbers. That means `hash`/`k`
// are derived from candidates 2..65 rather than true primes, so this is NOT
// the standard SHA-256 IV/round-constant table. That's fine: this function
// only needs to be a stable, deterministic one-way function for our own PIN
// hashing (nothing here is checked against an external/real SHA-256), but it
// is NOT interchangeable with a real SHA-256 implementation. Changing this
// loop would change every digest this file produces and invalidate every PIN
// hash already stored for existing users, so it's intentionally left as-is
// and only hoisted out of the hot path (computed once at module load instead
// of on every single hash call, which matters once we iterate it thousands
// of times for stretching below).
const { H0, K } = (() => {
  const isComposite: Record<number, boolean> = {};
  const h: number[] = [];
  const k: number[] = [];
  let primeCounter = 0;

  for (let candidate = 2; primeCounter < 64; candidate += 1) {
    if (!isComposite[candidate]) {
      for (let i = 0; i < candidate; i += candidate) {
        isComposite[i] = true;
      }
      h[primeCounter] = (Math.pow(candidate, 0.5) * Math.pow(2, 32)) | 0;
      k[primeCounter] = (Math.pow(candidate, 1 / 3) * Math.pow(2, 32)) | 0;
      primeCounter += 1;
    }
  }

  return { H0: h.slice(0, 8), K: k };
})();

function sha256(ascii: string): string {
  const rightRotate = (value: number, amount: number) =>
    (value >>> amount) | (value << (32 - amount));

  const maxWord = Math.pow(2, 32);
  let result = '';
  const words: number[] = [];
  const asciiBitLength = ascii.length * 8;

  let hash: number[] = H0.slice();
  const k = K;

  ascii += '\x80';
  while ((ascii.length % 64) - 56) {
    ascii += '\x00';
  }

  for (let i = 0; i < ascii.length; i += 1) {
    const code = ascii.charCodeAt(i);
    if (code >> 8) {
      return '';
    }
    // `?? 0` matches the original `|=` exactly: ToInt32(undefined) is 0, so
    // the first write to a fresh index always OR'd against zero.
    words[i >> 2] = (words[i >> 2] ?? 0) | (code << ((3 - (i % 4)) * 8));
  }

  words[words.length] = (asciiBitLength / maxWord) | 0;
  words[words.length] = asciiBitLength;

  for (let j = 0; j < words.length;) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash.slice(0);
    hash = hash.slice(0, 8);

    for (let i = 0; i < 64; i += 1) {
      // Every `?? 0` below is for the compiler's noUncheckedIndexedAccess
      // only: padding guarantees 16 full words per block, the schedule and
      // state arrays are always in range, so none of them ever fires — the
      // digest is byte-identical to the app-local original.
      const w15 = w[i - 15] ?? 0;
      const w2 = w[i - 2] ?? 0;

      const s0 =
        i < 16
          ? (w[i] ?? 0)
          : ((w[i - 16] ?? 0) +
              (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
              (w[i - 7] ?? 0) +
              (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
            0;

      w[i] = s0;

      const a = hash[0] ?? 0;
      const e = hash[4] ?? 0;

      const temp1 =
        ((hash[7] ?? 0) +
          (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
          ((e & (hash[5] ?? 0)) ^ (~e & (hash[6] ?? 0))) +
          (k[i] ?? 0) +
          s0) |
        0;

      const temp2 =
        ((rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
          ((a & (hash[1] ?? 0)) ^
            (a & (hash[2] ?? 0)) ^
            ((hash[1] ?? 0) & (hash[2] ?? 0)))) |
        0;

      hash = [
        (temp1 + temp2) | 0,
        hash[0] ?? 0,
        hash[1] ?? 0,
        hash[2] ?? 0,
        ((hash[3] ?? 0) + temp1) | 0,
        hash[4] ?? 0,
        hash[5] ?? 0,
        hash[6] ?? 0,
      ];
    }

    for (let i = 0; i < 8; i += 1) {
      hash[i] = ((hash[i] ?? 0) + (oldHash[i] ?? 0)) | 0;
    }
  }

  for (let i = 0; i < 8; i += 1) {
    for (let j = 3; j + 1; j -= 1) {
      const byte = ((hash[i] ?? 0) >> (j * 8)) & 255;
      result += (byte < 16 ? '0' : '') + byte.toString(16);
    }
  }

  return result;
}

// --- PIN hash stretching -----------------------------------------------
//
// A 6-digit PIN only has 1,000,000 possible values. Hashing it once with a
// fast, unsalted SHA-256 (the previous implementation) means anyone who
// obtains the stored hash — a Firestore field read, or a Keychain entry on
// a jailbroken/rooted device — can brute-force every PIN in well under a
// second on ordinary hardware.
//
// This app has no native crypto module available (no PBKDF2/bcrypt/scrypt
// dependency, and React Native does not ship the WebCrypto `crypto`
// global), so we can't call a battle-tested slow KDF directly. Instead we
// build a simple iterated hash ("stretching") on top of the existing pure
// JS SHA-256: each stored hash carries its own random-ish salt and is put
// through many rounds of re-hashing, which multiplies the attacker's cost
// per guess by ITERATIONS. This is a meaningful, low-risk improvement over
// a single fast hash even though it isn't memory-hard like bcrypt/scrypt.
const HASH_FORMAT_PREFIX = 'ks1';
const STRETCH_ITERATIONS = 8000;

function randomSaltHex(): string {
  // Not a CSPRNG — React Native doesn't expose one without adding a native
  // dependency. The salt's job here is to stop bulk rainbow-table /
  // cross-account precomputation, not to be secret (it's stored alongside
  // the hash, as usual for salts); resistance to brute-forcing a *specific*
  // known salt comes from STRETCH_ITERATIONS above.
  const perf =
    typeof performance !== 'undefined' && typeof performance.now === 'function'
      ? performance.now()
      : 0;
  return [
    Date.now().toString(36),
    perf.toString(36).replace('.', ''),
    Math.random().toString(36).slice(2),
    Math.random().toString(36).slice(2),
  ].join('');
}

function stretch(value: string, salt: string, iterations: number): string {
  let digest = sha256(`${HASH_FORMAT_PREFIX}$${salt}$${value}`);
  for (let round = 0; round < iterations; round += 1) {
    digest = sha256(`${digest}$${salt}$${round}`);
  }
  return digest;
}

function timingSafeEqual(a: string, b: string): boolean {
  const maxLength = Math.max(a.length, b.length);
  let diff = a.length === b.length ? 0 : 1;
  for (let i = 0; i < maxLength; i += 1) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}

function buildStretchedHash(value: string): string {
  const salt = randomSaltHex();
  const digest = stretch(value, salt, STRETCH_ITERATIONS);
  return [HASH_FORMAT_PREFIX, STRETCH_ITERATIONS, salt, digest].join('$');
}

function verifyStretchedOrLegacy(value: string, storedHash: string): boolean {
  if (storedHash.startsWith(`${HASH_FORMAT_PREFIX}$`)) {
    const parts = storedHash.split('$');
    if (parts.length !== 4) {
      return false;
    }
    const [, iterationsRaw, salt, digest] = parts;
    const iterations = Number(iterationsRaw);
    if (!Number.isFinite(iterations) || iterations < 0) {
      return false;
    }
    // `parts.length === 4` above guarantees both; the check is for the
    // compiler, which cannot see that through the destructuring.
    if (salt === undefined || digest === undefined) {
      return false;
    }
    return timingSafeEqual(stretch(value, salt, iterations), digest);
  }

  // Legacy format: a bare, unsalted sha256(value) hex digest from before
  // stretching/salting was added. Kept so PINs set before this change keep
  // working; the hash is upgraded to the new format the next time the user
  // sets/changes their PIN (hashParentPin/hashAppLockPin always produce the
  // new format going forward).
  return timingSafeEqual(sha256(value), storedHash);
}

export function hashParentPin(pin: string, userId: string): string {
  return buildStretchedHash(`kidgate-parent-pin:v1:${userId}:${pin}`);
}

export function verifyParentPinHash(
  pin: string,
  userId: string,
  storedHash: string,
): boolean {
  return verifyStretchedOrLegacy(`kidgate-parent-pin:v1:${userId}:${pin}`, storedHash);
}

export function hashAppLockPin(pin: string, userId: string): string {
  return buildStretchedHash(`kidgate-app-lock:v1:${userId}:${pin}`);
}

export function verifyAppLockPinHash(
  pin: string,
  userId: string,
  storedHash: string,
): boolean {
  return verifyStretchedOrLegacy(`kidgate-app-lock:v1:${userId}:${pin}`, storedHash);
}
