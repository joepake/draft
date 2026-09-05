/**
 * Free against Premium, as the thirteen rows a parent decides from.
 *
 * **Only rows where the two columns differ are rows.** Everything both plans
 * carry — the daily limit, blocked hours, the remote lock, SOS, time requests,
 * reward tasks, the cross-platform pairing, the web dashboard — is one
 * sentence under the table (`plans.compareIncluded`). A comparison that lists
 * what is the same on both sides buries the eight lines that actually sell,
 * and a parent scanning for the difference has to find it.
 *
 * **Rows belong to groups, and the groups are the argument.** `docs/PRICING.md`
 * §5 says why Premium sells, in order: live, history, alerts, devices. Thirteen
 * rows in one flat table made a parent reconstruct that argument themselves;
 * five labelled groups say it for them at the cost of two words each. The
 * order of `PLAN_COMPARISON_GROUPS` is the order of that argument, and within
 * a group the rows keep the order they are declared in below. §4 is the table
 * this mirrors, and the two must not drift.
 *
 * **Keys, never rendered text.** Both parent consoles read this — the phone's
 * Plans screen and the dashboard's plan card — and each renders it in its own
 * idiom. A row that carried a translated string would freeze the wording at
 * the moment the module was imported, which on the web is before the reader
 * has chosen a language.
 */

/**
 * The five reasons, in the order they sell (`docs/PRICING.md` §5), plus the
 * controls row that belongs to none of the four and is too real to drop.
 */
export type PlanComparisonGroupId =
  'live' | 'insight' | 'alerts' | 'devices' | 'controls';

export interface PlanComparisonGroup {
  id: PlanComparisonGroupId;
  /**
   * The reason, as a headline: "Live", "Every detail".
   *
   * One or two words, because it is drawn as a label over the rows rather than
   * as prose beside them. A group carried a sentence too for a day; the rows
   * under it already say the same thing in the parent's own terms, and two
   * statements of one idea is what made the screen read as filler.
   */
  titleKey: string;
}

export interface PlanComparisonRow {
  /** Stable id, for a React key and for a test to name a row by. */
  id: string;
  /** Which reason this row is evidence for. Every row has one. */
  group: PlanComparisonGroupId;
  /** What the row is about. */
  labelKey: string;
  /**
   * What the free tier gives, or `null` for nothing at all.
   *
   * Null is rendered as a dash rather than a word: three of these rows are
   * features the free tier does not have, and spelling that out three times
   * makes the table read as a list of refusals rather than a comparison.
   */
  freeKey: string | null;
  /**
   * What Premium gives, or `null` when the answer is simply "yes".
   *
   * Null renders as a tick. A row whose free side is a dash and whose paid
   * side is a tick needs no prose on either side — the label is the whole
   * sentence.
   */
  premiumKey: string | null;
  /**
   * The row to lead the store listing with, drawn to stand out.
   *
   * Exactly one, and it is video history: Family Link is blind inside the
   * YouTube app and Qustodio puts the same feature in its top tier, so it is
   * the row no competitor's free tier can answer (`docs/PRICING.md` §2).
   */
  highlight?: boolean;
}

/** A group with its rows attached, which is what a renderer walks. */
export interface PlanComparisonSection extends PlanComparisonGroup {
  rows: PlanComparisonRow[];
}

export const PLAN_COMPARISON_GROUPS: readonly PlanComparisonGroup[] = [
  {
    id: 'live',
    titleKey: 'plans.groupLiveTitle',
  },
  {
    id: 'insight',
    titleKey: 'plans.groupInsightTitle',
  },
  {
    id: 'alerts',
    titleKey: 'plans.groupAlertsTitle',
  },
  {
    id: 'devices',
    titleKey: 'plans.groupDevicesTitle',
  },
  {
    id: 'controls',
    titleKey: 'plans.groupControlsTitle',
  },
];

export const PLAN_COMPARISON_ROWS: readonly PlanComparisonRow[] = [
  {
    id: 'devices',
    group: 'devices',
    labelKey: 'plans.compareDevices',
    freeKey: 'plans.compareDevicesFree',
    /*
     * `plans.compareDevicesPremium` rather than the `shared.unlimited` that
     * already holds this word in all fourteen languages. The dashboard reads a
     * fixed namespace list (`NAMESPACES` in `@kidgate/i18n/activityFeed`) and
     * `shared` is not on it — a key outside that list does not fall back to
     * English, it renders **as the key**, in every language, with every test
     * green. Keeping every key here inside `plans` is what the test below this
     * module can check.
     */
    premiumKey: 'plans.compareDevicesPremium',
  },
  {
    id: 'sync',
    group: 'live',
    labelKey: 'plans.compareSync',
    freeKey: 'plans.compareSyncFree',
    premiumKey: 'plans.compareSyncPremium',
  },
  {
    id: 'screen-time',
    group: 'insight',
    labelKey: 'plans.compareScreenTime',
    freeKey: 'plans.compareScreenTimeFree',
    premiumKey: 'plans.compareScreenTimePremium',
  },
  {
    id: 'location',
    group: 'live',
    labelKey: 'plans.compareLocation',
    freeKey: 'plans.compareLocationFree',
    premiumKey: 'plans.compareLocationPremium',
  },
  {
    id: 'video',
    group: 'insight',
    labelKey: 'plans.compareVideo',
    freeKey: null,
    premiumKey: null,
    highlight: true,
  },
  {
    id: 'web',
    group: 'insight',
    labelKey: 'plans.compareWeb',
    freeKey: 'plans.compareCountOnly',
    premiumKey: 'plans.compareWebPremium',
  },
  {
    id: 'new-apps',
    group: 'alerts',
    labelKey: 'plans.compareNewApps',
    // The same cell as the web row above, deliberately: "how many, not which"
    // is one promise made twice, and two wordings for it would read as two
    // different limits.
    freeKey: 'plans.compareCountOnly',
    premiumKey: 'plans.compareNewAppsPremium',
  },
  {
    id: 'messages',
    group: 'alerts',
    labelKey: 'plans.compareMessages',
    freeKey: null,
    premiumKey: null,
  },
  {
    id: 'safety',
    group: 'alerts',
    labelKey: 'plans.compareSafety',
    freeKey: null,
    premiumKey: null,
  },
  {
    id: 'controls',
    group: 'controls',
    labelKey: 'plans.compareControls',
    freeKey: 'plans.compareControlsFree',
    premiumKey: 'plans.compareControlsPremium',
  },
  {
    id: 'report',
    group: 'insight',
    labelKey: 'plans.compareReport',
    freeKey: 'plans.compareReportFree',
    premiumKey: 'plans.compareReportPremium',
  },
  /*
   * The last two rows were features before they were rows.
   *
   * Both are gated — the feed by a client query limit, the per-child board by
   * riding `usageDays`, which a free family has no document for
   * (`docs/PRICING.md` §4, the fold table) — and neither had a row here. They
   * were named only by the 22-tile "what is included" grid, so when that grid
   * went the paywall stopped mentioning them at all. A gate a parent cannot
   * see is a gate that cannot sell.
   */
  {
    id: 'activity-feed',
    group: 'insight',
    labelKey: 'plans.compareActivityFeed',
    freeKey: 'plans.compareActivityFeedFree',
    premiumKey: 'plans.compareActivityFeedPremium',
  },
  {
    id: 'child-report',
    group: 'insight',
    labelKey: 'plans.compareChildReport',
    freeKey: null,
    premiumKey: null,
  },
];

/**
 * The rows folded under their groups, in group order.
 *
 * A group with no rows is dropped rather than rendered as an empty card, so a
 * row moving between groups never leaves a headline with nothing under it.
 */
export function groupPlanComparisonRows(
  rows: readonly PlanComparisonRow[] = PLAN_COMPARISON_ROWS,
  groups: readonly PlanComparisonGroup[] = PLAN_COMPARISON_GROUPS,
): PlanComparisonSection[] {
  return groups
    .map(group => ({
      ...group,
      rows: rows.filter(row => row.group === group.id),
    }))
    .filter(section => section.rows.length > 0);
}
