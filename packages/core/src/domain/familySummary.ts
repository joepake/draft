/**
 * What the Family screen counts, and the order it says it in.
 *
 * Both parent consoles draw this row. The numbers are each surface's to fold —
 * they come from the device list, the pending requests and the protection
 * probe, all of which both already read — but **which chip appears, in what
 * order, and in what tone is one decision**, and it is the decision that is
 * easy to get subtly wrong twice.
 *
 * The ordering rule, from `apps/mobile`'s own note: **by urgency, not by
 * category.** That row is a horizontal scroller on a phone, so whatever is
 * last is off-screen, and a fixed category order put the three "everything is
 * fine" counts first — pushing SOS to sixth and clipping the pending-request
 * chip at the edge.
 *
 * The tone rule: the healthy counts stay neutral. Colouring those too lit the
 * whole row in the accent and left the one chip that needed attention with
 * nothing to stand out against.
 *
 * Keys, never sentences: this package renders no copy (root rule 1), and the
 * caller already holds a translator. `count` rides along because every label
 * here is a plural.
 */

export type FamilyChipTone = 'danger' | 'warning' | 'default';

export interface FamilySummaryChip {
  /** Stable id — the caller's `key` prop, and what a tap reports. */
  key: string;
  /** App-pack key. The web reads it through `@kidgate/i18n/activityFeed`. */
  labelKey: string;
  count: number;
  tone: FamilyChipTone;
  /**
   * Whether pressing it should go somewhere.
   *
   * The three healthy counts are readings, not doors: a tap that navigated
   * from "8 devices" would land a parent somewhere they did not ask to be.
   */
  actionable: boolean;
}

export interface FamilySummaryCounts {
  sos: number;
  /** Devices whose protection level is `inactive` — the agent has gone quiet. */
  healthInactive: number;
  /** Pending time requests, family-wide. */
  requests: number;
  /** Devices with a check-in still unanswered. */
  checkIn: number;
  /** Devices whose protection level is `warning`. */
  healthWarn: number;
  /** Devices inside a blocked-hours window right now. */
  blockedHours: number;
  devices: number;
  online: number;
  protected: number;
}

/**
 * The family-wide row. Empty when the family has no device — the caller shows
 * its own "nothing paired yet" sentence instead of a row of zeroes.
 */
export function buildFamilySummaryChips(
  counts: FamilySummaryCounts,
): FamilySummaryChip[] {
  if (counts.devices === 0) {
    return [];
  }

  const chips: FamilySummaryChip[] = [];

  // --- Asks for an action, most urgent first.
  if (counts.sos > 0) {
    chips.push({
      key: 'sos',
      labelKey: 'family.chipSosCount',
      count: counts.sos,
      tone: 'danger',
      actionable: true,
    });
  }
  if (counts.healthInactive > 0) {
    chips.push({
      key: 'health-inactive',
      labelKey: 'family.chipHealthInactiveCount',
      count: counts.healthInactive,
      tone: 'danger',
      actionable: true,
    });
  }
  if (counts.requests > 0) {
    chips.push({
      key: 'requests',
      labelKey: 'family.chipRequestCount',
      count: counts.requests,
      tone: 'warning',
      actionable: true,
    });
  }
  if (counts.checkIn > 0) {
    chips.push({
      key: 'check-in',
      labelKey: 'family.chipCheckInCount',
      count: counts.checkIn,
      tone: 'warning',
      actionable: true,
    });
  }
  if (counts.healthWarn > 0) {
    chips.push({
      key: 'health-warn',
      labelKey: 'family.chipHealthWarnCount',
      count: counts.healthWarn,
      tone: 'warning',
      actionable: true,
    });
  }

  // --- A state, not a problem: a device inside its own bedtime window.
  if (counts.blockedHours > 0) {
    chips.push({
      key: 'blocked-hours',
      labelKey: 'family.chipBlockedCount',
      count: counts.blockedHours,
      tone: 'default',
      actionable: false,
    });
  }

  // --- Readings. Always last, always neutral.
  chips.push({
    key: 'devices',
    labelKey: 'family.chipDeviceCount',
    count: counts.devices,
    tone: 'default',
    actionable: false,
  });
  chips.push({
    key: 'online',
    labelKey: 'family.chipOnlineCount',
    count: counts.online,
    tone: 'default',
    actionable: false,
  });
  if (counts.protected > 0) {
    chips.push({
      key: 'protected',
      labelKey: 'family.chipProtectedCount',
      count: counts.protected,
      tone: 'default',
      actionable: false,
    });
  }

  return chips;
}

export interface ChildUrgencyCounts {
  inactive: number;
  requests: number;
  checkIn: number;
  warn: number;
  /** Something is stopping this child's position from arriving. */
  locationBlocked: boolean;
}

/**
 * The same urgencies summed for ONE child, in the same order the row above
 * uses — a parent reading a card should not have to re-learn the sequence.
 *
 * SOS is absent on purpose: it keeps its own badge on the child's hero, and a
 * second place saying it would be the loudest thing on the card twice.
 *
 * Location is a pill rather than a sentence for the reason `apps/mobile`
 * records: four different causes produce it, the card cannot fix any of them,
 * and spelling out which one made the one hopeless line the loudest. The pill
 * says a position is missing; the location screen says why.
 */
export function buildChildUrgencyPills(
  counts: ChildUrgencyCounts,
): FamilySummaryChip[] {
  const pills: FamilySummaryChip[] = [];

  if (counts.inactive > 0) {
    pills.push({
      key: 'inactive',
      labelKey: 'family.chipHealthInactiveCount',
      count: counts.inactive,
      tone: 'danger',
      actionable: false,
    });
  }
  if (counts.requests > 0) {
    pills.push({
      key: 'requests',
      labelKey: 'family.chipRequestCount',
      count: counts.requests,
      tone: 'warning',
      actionable: false,
    });
  }
  if (counts.checkIn > 0) {
    pills.push({
      key: 'check-in',
      labelKey: 'family.chipCheckInCount',
      count: counts.checkIn,
      tone: 'warning',
      actionable: false,
    });
  }
  if (counts.warn > 0) {
    pills.push({
      key: 'warn',
      labelKey: 'family.chipHealthWarnCount',
      count: counts.warn,
      tone: 'warning',
      actionable: false,
    });
  }
  if (counts.locationBlocked) {
    pills.push({
      key: 'location',
      labelKey: 'family.chipLocationBlocked',
      count: 0,
      tone: 'warning',
      actionable: false,
    });
  }

  return pills;
}

/**
 * Where a summary chip lands.
 *
 * **One rule, and it is the whole of it: a chip about exactly one device
 * deep-links to that device; anything wider does not.** Two SOS alerts have no
 * single destination, and picking the first would send a parent to one
 * emergency while silently dropping the other — so the caller falls back to
 * its own list, where the urgency sort has already gathered what the chip
 * counted.
 *
 * Returns the device id, or `null` for none and for many. The caller decides
 * what "no single target" means on its surface: the phone scrolls its list to
 * the top, the dashboard stays on the Family section.
 */
export function resolveChipTargetDevice(deviceIds: readonly string[]): string | null {
  return deviceIds.length === 1 ? (deviceIds[0] ?? null) : null;
}
