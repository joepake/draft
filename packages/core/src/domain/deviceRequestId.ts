/**
 * The id a parent's request carries, and the time it was made, read back out
 * of it.
 *
 * Three fields on the child device document are requests rather than state —
 * `locationRequestId`, `reportRequestId`, `otaRequestId` — and all three travel
 * the same way for the same reason: an agent's listener re-delivers the current
 * snapshot on reconnect, so a boolean is indistinguishable from its own echo
 * and the device answers a request it already answered. An id per press is what
 * tells a second request from a redelivery.
 *
 * The format was written twice before it was written here. It is shared now
 * because a throttle in one module parses an id minted by another — a divergence
 * would not fail a build, it would silently stop throttling.
 *
 * Not a uuid: nothing here needs to be unguessable, and the timestamp in front
 * is load-bearing.
 */

/** Unique per press. The device id makes two devices asked in the same
 * millisecond distinguishable; the timestamp is what the throttle reads. */
export function deviceRequestId(nowMs: number, deviceId: string): string {
  return `${nowMs}-${deviceId}`;
}

/**
 * When the request was made, or null for anything unparseable.
 *
 * **This is why a throttle needs no field of its own.** The console holds the
 * device document already — it is what it renders the card from — and the id it
 * wrote last time is on it, carrying its own timestamp. A separate
 * `…RequestedAt` would be a second field saying what the first one already
 * says, and the two would eventually disagree.
 *
 * It also makes the throttle shared for free: the phone and the dashboard read
 * the same document, so neither can ask without the other seeing that it did. A
 * per-app memory would have let a family with both open ask twice as often as
 * either believed.
 *
 * Null is "never asked", not an error — a device paired before the field
 * existed has no id, and that is not a fault.
 */
export function deviceRequestedAtMs(requestId: unknown): number | null {
  if (typeof requestId !== 'string') {
    return null;
  }
  const [stamp] = requestId.split('-');
  if (!stamp) {
    return null;
  }
  const ms = Number(stamp);
  return Number.isFinite(ms) && ms > 0 ? ms : null;
}
