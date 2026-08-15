/**
 * Content categories the web filter can block.
 *
 * The ids are the contract between three places that never see each other's
 * code: the parent's toggles, the Android DNS filter's domain tables
 * (KidGateWebCategories.kt), and the stored history rows. Renaming one is a
 * migration, not a rename.
 *
 * `dnsBypass` is deliberately absent: encrypted-DNS resolvers are blocked
 * whenever the filter runs at all, because leaving them reachable is what
 * lets a browser route around every other category. It is enforcement
 * plumbing, not a parenting decision, so it gets no toggle.
 */
export type WebFilterCategory =
  | 'adult'
  | 'gambling'
  | 'dating'
  | 'drugs'
  | 'violence'
  | 'piracy'
  | 'social'
  | 'videoStreaming'
  | 'gaming'
  | 'shopping';

export const WEB_FILTER_CATEGORIES: WebFilterCategory[] = [
  'adult',
  'gambling',
  'dating',
  'drugs',
  'violence',
  'piracy',
  'social',
  'videoStreaming',
  'gaming',
  'shopping',
];

/**
 * On for a family that has never opened the category screen.
 *
 * The line is "would a parent be upset to find this unblocked" — the first
 * six are why people buy a filter. Social, video, games and shopping are
 * ordinary parts of a teenager's day; blocking them by default would make the
 * first hour after setup look broken.
 */
export const DEFAULT_WEB_FILTER_CATEGORIES: WebFilterCategory[] = [
  'adult',
  'gambling',
  'dating',
  'drugs',
  'violence',
  'piracy',
];

/**
 * Categories iOS can enforce.
 *
 * ManagedSettings offers one web content control — Apple's own automatic
 * adult filter — plus an allow list. There is no per-category API and no
 * arbitrary deny list, so everything else is Android-only and the UI says so
 * rather than showing a toggle that does nothing.
 */
export const IOS_SUPPORTED_WEB_FILTER_CATEGORIES: WebFilterCategory[] = ['adult'];

export const MAX_WEB_FILTER_LIST_ENTRIES = 50;

/** One domain's activity on one local day. */
export interface WebHistoryEntry {
  id: string;
  /** Registrable domain, already lowercased and stripped of `www.`. */
  domain: string;
  /** Local day key, `YYYY-MM-DD`. */
  date: string;
  /** Lookups seen for this domain that day, after the device's own dedupe. */
  visits: number;
  /** Lookups the filter refused. Zero on a domain that was only ever allowed. */
  blockedVisits: number;
  /** Why it was blocked, when it was. Null for allowed traffic. */
  category: WebFilterCategory | null;
  /** Most recent lookup, ISO string. */
  lastAt: string;
}

export interface WebFilterSettings {
  enabled: boolean;
  categories: WebFilterCategory[];
  /** Always reachable, even if a category or the allow-only mode would block it. */
  allowList: string[];
  /** Always refused, whatever the categories say. Android only. */
  blockList: string[];
  /**
   * Allow-list-only browsing: everything not in `allowList` is refused.
   * A young-child mode, not a default — it breaks any site the parent has
   * not thought of, including the ones apps load in a web view.
   */
  allowListOnly: boolean;
}

export const DEFAULT_WEB_FILTER_SETTINGS: WebFilterSettings = {
  enabled: false,
  categories: DEFAULT_WEB_FILTER_CATEGORIES,
  allowList: [],
  blockList: [],
  allowListOnly: false,
};
