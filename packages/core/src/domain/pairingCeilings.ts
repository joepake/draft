/**
 * How much of the product one household may hold at all — the fair-use ceiling,
 * which is **not** the paywall.
 *
 * Decided in `docs/FEASIBILITY.md`, "Free tier: a parked device goes
 * loosen-only". Refused at **pairing**, where no rules exist yet to diverge, and
 * deliberately generous: after that entry the paywall is the *primary device* —
 * the one that reports and the only one whose rules may be tightened — so the
 * device COUNT stopped being what a family pays to raise. These numbers exist to
 * bound cost and abuse, nothing else.
 *
 * ## The number this is not
 *
 * `resolveChildDeviceAllowance` in `functions/lib/entitlement.js` answers a
 * different question in the same units: **how many devices stay unparked**. Free
 * is 1 there and must stay 1 — `domain/deviceParking.devicesToPark` parks
 * nothing while `devices.length <= allowance`, so raising it to this ceiling
 * would leave a free family with eight live reporting devices and no free tier
 * at all. Two numbers, two functions, and the reason is written here because the
 * one place they could be confused is a `grep` for "child device limit".
 *
 * | Question                     | Answered by                   | Free | Paid |
 * | ---------------------------- | ----------------------------- | ---: | ---: |
 * | How many may exist?          | this module                   |    8 |   25 |
 * | How many report and tighten? | `resolveChildDeviceAllowance` |    1 |    ∞ |
 *
 * ## Where each ceiling can actually be enforced
 *
 * **Per family: server-side, and real.** Pairing goes through
 * `redeemPairingCode`, which already counts the collection before it admits a
 * device.
 *
 * **Per child and per household: client-side, and advisory.** A device is
 * assigned to a child by a parent writing `childId` straight to the device
 * document (`triggers/childRules.js` says so, and `firestore.rules` gates it
 * with `isParentAccount` alone), and a child row is created the same way — there
 * is no Cloud Function on either path, and rules cannot count a collection. So
 * neither console refuses past these two numbers today — `MAX_DEVICES_PER_CHILD`
 * and `PAID_MAX_CHILDREN` have no call site anywhere, server or client, so they
 * document an intent rather than a ceiling. Only the family number below is
 * enforced (`functions/http/pairing.js`, `wouldExceedFamilyDevices`).
 * **That is acceptable and it is not a hole**: the actor is a paying parent
 * rather than a child, the family ceiling still binds the only cost that scales,
 * and for a free family the per-child number is implied by it anyway — eight
 * devices in a household cannot put nine on one child.
 */

/**
 * Eight per child, both tiers.
 *
 * A count of device ROWS, not machines: a browser extension is its own document
 * (`domain/deviceStatus`), so a laptop running the desktop agent with Chrome
 * beside it is two. Phone, tablet, laptop, that laptop's extension, a school
 * Chromebook and its extension is six before a television — which is why this is
 * eight and not four. A shared TV usually carries no `childId` and spends
 * nobody's allowance.
 */
export const MAX_DEVICES_PER_CHILD = 8;

/**
 * Eight in a free household — a raise, and a deliberate one.
 *
 * It was **one**, because the device count *was* the paywall. It is not any
 * more: a parked device keeps enforcing every rule and may be relaxed, and what a
 * family pays for is the primary device. Leaving the cap at one would refuse a
 * free parent a replacement for a broken phone, which is the A1 trap of
 * `docs/TRIAL_TO_FREE.md` §6.1 — a billing event out of a dropped handset.
 */
export const FREE_MAX_DEVICES_PER_FAMILY = 8;

/**
 * Twenty-five on a paid plan, trial included.
 *
 * The trial takes the paid numbers rather than its own: the trial *is* premium
 * for seven days, two sets of numbers is two things to explain and two places to
 * get one wrong, and the difference is under a dollar a family.
 *
 * **A lifetime purchase takes this number too**, and since 2026-10-05 it is the
 * only device number a lifetime buyer meets: the three-device *reporting*
 * allowance it used to carry was dropped, so every device it pairs reports,
 * as on a subscription. Pairing is fair use for everybody who has paid anything.
 */
export const PAID_MAX_DEVICES_PER_FAMILY = 25;

/**
 * Ten children on a paid plan. Advisory — see the header.
 *
 * **Free is deliberately uncapped, and that is an open question rather than an
 * answer.** The entry records it as open: it was part of a shape where the
 * freeze unit was the child, and with the gate back on the device that reason is
 * gone. Nothing here should be read as having decided it.
 */
export const PAID_MAX_CHILDREN = 10;

/**
 * How many device rows this household may hold.
 *
 * Takes the lapse verdict rather than a plan id, for the same reason
 * `domain/reportCadence.aliveIntervalMs` does: the parent surfaces compute that
 * boolean from the plan and the server has `isBillingLapsedForUser`, while a plan
 * id means four states and three of them answer the same.
 */
export function maxDevicesPerFamily(billingLapsed: boolean): number {
  return billingLapsed ? FREE_MAX_DEVICES_PER_FAMILY : PAID_MAX_DEVICES_PER_FAMILY;
}

/**
 * Whether one more device would exceed the household's ceiling.
 *
 * Takes the count the caller already has — pairing runs a `.count()` aggregate it
 * needs anyway — so this adds no read on any surface.
 */
export function wouldExceedFamilyDevices(
  pairedCount: number,
  billingLapsed: boolean,
): boolean {
  return pairedCount >= maxDevicesPerFamily(billingLapsed);
}

/**
 * Parents in one family, **the owner included**: three without Premium, six
 * with it. Decided 2026-09-27 (`docs/PRICING.md` §4), replacing a gate that
 * refused a lapsed family any invite at all while the plan table promised
 * "several parents" on every plan.
 *
 * **Here the trial takes the free number**, unlike the device ceiling above:
 * the owner set it that way, and it keeps what a trial family is told equal
 * to what it keeps afterwards — an invite accepted on day three is never one
 * the family loses on day eight. So the input is `paid` (a live subscription
 * or a lifetime purchase), not the lapse verdict.
 *
 * Enforced server-side at all three steps of the handshake
 * (`functions/http/pairing.js`): minting a code, redeeming it, and approving
 * the request — the last inside the transaction that writes the membership,
 * so two approvals racing cannot pass it together. **A family already above
 * it keeps every member** (a Premium family of five that lapsed): nothing is
 * removed, it only cannot add one.
 */
export const FREE_MAX_PARENTS_PER_FAMILY = 3;

/** Six on Premium, owner included. See `FREE_MAX_PARENTS_PER_FAMILY`. */
export const PAID_MAX_PARENTS_PER_FAMILY = 6;

export function maxParentsPerFamily(paid: boolean): number {
  return paid ? PAID_MAX_PARENTS_PER_FAMILY : FREE_MAX_PARENTS_PER_FAMILY;
}

/**
 * Whether one more parent would exceed the family's ceiling.
 *
 * `parentCount` is the owner plus `users/{ownerUid}/members` — both consoles
 * and the server count the same way.
 */
export function wouldExceedFamilyParents(parentCount: number, paid: boolean): boolean {
  return parentCount >= maxParentsPerFamily(paid);
}
