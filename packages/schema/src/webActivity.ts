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
  | 'selfHarm'
  | 'gambling'
  | 'gameGambling'
  | 'dating'
  | 'strangerChat'
  | 'drugs'
  | 'violence'
  | 'extremism'
  | 'piracy'
  | 'social'
  | 'videoStreaming'
  | 'music'
  | 'gaming'
  | 'shopping'
  | 'aiCompanion'
  | 'aiAssistant'
  | 'cryptoTrading'
  | 'vpn';

/**
 * Canonical order. `webCategoryFor` returns the FIRST entry that claims a
 * domain, so this list decides ties — `music` sits after `videoStreaming`
 * because a service that streams both is a video service to a parent looking
 * for where the evening went.
 */
export const WEB_FILTER_CATEGORIES: WebFilterCategory[] = [
  'adult',
  /*
   * Each of the four added in August 2026 sits immediately beside the category
   * it was split out of, so no pair that already existed changed precedence
   * relative to each other. The four are split from their neighbours because
   * a parent answers them differently, not because the domains overlap:
   * `gambling` was casinos and loot boxes in one switch, and a family that
   * wants neither casino nor skin betting is not the same family that plays
   * Roblox and wants only the betting sites gone.
   */
  'selfHarm',
  'gambling',
  'gameGambling',
  'dating',
  'strangerChat',
  'drugs',
  'violence',
  'extremism',
  'piracy',
  'social',
  'videoStreaming',
  'music',
  'gaming',
  'shopping',
  'aiCompanion',
  'aiAssistant',
  'cryptoTrading',
  'vpn',
];

/**
 * On for a family that has never opened the category screen.
 *
 * The line is "would a parent be upset to find this unblocked" — the first
 * six are why people buy a filter. Social, video, music, games and shopping
 * are ordinary parts of a teenager's day; blocking them by default would make
 * the first hour after setup look broken.
 *
 * `aiCompanion` joins the six for the reason `dating` is there: both are
 * strangers talking to a child in private, and the roleplay services are built
 * to be talked to for hours. `aiAssistant` does not — homework help is a
 * parenting argument, not a safety one.
 *
 * `vpn` joins them because it is the category that decides whether the others
 * hold. It is still a toggle rather than plumbing: a commercial VPN's website
 * is a download page, and blocking it does nothing about an app already
 * installed. The lookups that genuinely route around this filter — web
 * proxies, Tor, anti-censorship tunnels — are in `DNS_BYPASS_DOMAINS`, refused
 * whenever the filter runs at all.
 *
 * All four of the 2026 additions default **on**, and each inherits the answer
 * from the category it was split out of rather than being argued afresh:
 * `selfHarm` and `extremism` from `violence`, `gameGambling` from `gambling`,
 * `strangerChat` from `dating`. A family that had the old switch on had these
 * sites blocked as far as the old tables reached; defaulting any of them off
 * would be a silent loosening on upgrade, which is the one direction a
 * parental control must never move by itself.
 */
export const DEFAULT_WEB_FILTER_CATEGORIES: WebFilterCategory[] = [
  'adult',
  'selfHarm',
  'gambling',
  'gameGambling',
  'dating',
  'strangerChat',
  'drugs',
  'violence',
  'extremism',
  'piracy',
  'aiCompanion',
  'vpn',
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
  /** What the device's own tables said. Null when they had never heard of it. */
  category: WebFilterCategory | null;
  /**
   * What the nightly classifier said, for a row the tables could not name.
   *
   * Written server-side by `functions/scheduled/classifyWebDomains` and by
   * nothing else — `firestore.rules` refuses every client write to this
   * collection, so a device cannot author its own label here any more than it
   * can author the visit.
   *
   * **Only ever set when `category` is null**, and only from a high-confidence
   * answer. It is the long tail, not a second opinion: a domain the tables
   * claimed is already named by something exact, and a guess printed over that
   * would be a downgrade wearing the same font.
   *
   * Read it through `webHistoryCategory` in
   * `@kidgate/core/domain/webHistoryLabel` rather than here, so two parent
   * surfaces cannot disagree about which one wins.
   */
  aiCategory?: WebFilterCategory | null;
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
