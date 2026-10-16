/**
 * Whether a snapshot of a device's own document is that document, or only the
 * device's own write to it.
 *
 * **Measured 2026-10-14 on the JS SDK:** a merge write on a document the client
 * has never had from the server reaches an attached listener as `exists: true,
 * fromCache: true, hasPendingWrites: true`, holding the written fields and
 * nothing else. Read as the device's policy, the absent `controls` became
 * `DEFAULT_DEVICE_CONTROLS` — Blocked Hours 22:00–07:00 every day, switched
 * off — and the absent `isLocked` a release of a parent's Lock. A PC logged
 * `decided locked (schedule)` for 220 ms at 22:25 on a Wednesday off exactly
 * that (`docs/FEASIBILITY.md`, "A dead WebView never traps a locked child
 * device").
 *
 * Once the server has delivered the document, a pending write is laid over all
 * of it and the snapshot is whole again — so the gate opens on the first server
 * snapshot and stays open until `reset`. A cached snapshot with no write of its
 * own passes: that is a disk cache's real copy (the television's offline
 * start), not a fragment.
 *
 * One function for every listener that reads a device its own policy:
 * `agent/controlsSync` and `repositories/device`'s `subscribeChildDevice`.
 */

import type { DocSnapshot } from '@kidgate/ports/firestore';

export interface OwnWriteGate {
  /** True when the snapshot is the whole document. */
  admits(snapshot: DocSnapshot): boolean;
  /** A new listener: a memory cache drops the document with the old one. */
  reset(): void;
}

export function createOwnWriteGate(): OwnWriteGate {
  let serverCopy = false;
  return {
    admits(snapshot) {
      if (!snapshot.fromCache) {
        serverCopy = true;
      }
      return serverCopy || !snapshot.hasPendingWrites;
    },
    reset() {
      serverCopy = false;
    },
  };
}
