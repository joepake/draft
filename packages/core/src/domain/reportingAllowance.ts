/**
 * How many of a family's devices keep **reporting** — the paywall, in numbers.
 *
 * One home for a constant that had two hand-written copies
 * (`functions/lib/freeTier.js` and `apps/mobile/src/constants/FreeTier.ts`,
 * pinned against each other by `freeTierParity.test.js` reading one as text).
 * That arrangement worked for two consumers and ran out at the third:
 * `apps/dashboard` cannot import either — `dependency-cruiser` stops it
 * reaching `apps/mobile`, and `functions/` sits outside the workspace on
 * purpose. A third copy is what root rule 2 exists to refuse, so the number
 * moved here and the copies became imports.
 *
 * ## This is not `domain/pairingCeilings`, and the distinction is the point
 *
 * Same units, different question, and they were briefly the same number:
 *
 * | Question                | Answered by       | Free | Paid |
 * | ----------------------- | ----------------- | ---: | ---: |
 * | How many may **exist**? | `pairingCeilings` |    8 |   25 |
 * | How many **report**?    | this module       |    1 |    ∞ |
 *
 * Until 2026-09-18 pairing refused a free family's second device, so "may
 * exist" and "reports" were both one and nobody had to tell them apart. The
 * loosen-only entry (`docs/FEASIBILITY.md`) split them: the count stopped being
 * the paywall and the *primary device* became it. **Wiring this number into a
 * pairing gate refuses a free parent a replacement for a broken phone; wiring
 * the ceiling into parking leaves a free family with eight live reporting
 * devices.** Both were live mistakes during that change.
 *
 * ## The verdict still belongs to the server
 *
 * These are the numbers, not the decision. `resolveChildDeviceAllowance` in
 * `functions/lib/entitlement.js` picks between them from billing state a client
 * cannot be trusted with, and answers `Infinity` for a subscriber or a running
 * trial. A parent surface reads these to *say* what a plan covers, never to
 * decide what it may write.
 */

/**
 * One device reports on the free tier.
 *
 * Every reporting device costs a foreground service, a push token and a stream
 * of writes for as long as it exists — measured at about ten billable
 * operations per beat (`docs/FEASIBILITY.md`, "The heartbeat is billed three
 * times"). One is what makes the tier affordable to run.
 *
 * **It is no longer what a free family may pair.** That was true until
 * 2026-09-18 and the comment on the old copy said so; `domain/pairingCeilings`
 * holds the pairing number now, and a free household may hold eight devices
 * with seven of them parked.
 */
export const FREE_TIER_MAX_CHILD_DEVICES = 1;

/*
 * `LIFETIME_MAX_CHILD_DEVICES` (three) lived here until 2026-10-05. The owner
 * dropped it: a lifetime purchase reports from every device, like a
 * subscription (`docs/PRICING.md` §7).
 */
